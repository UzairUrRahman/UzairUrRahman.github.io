(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(c){if(c.ep)return;c.ep=!0;const f=r(c);fetch(c.href,f)}})();function uo(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ou={exports:{}},bl={};var Lm;function Xb(){if(Lm)return bl;Lm=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function r(o,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var p in c)p!=="key"&&(f[p]=c[p])}else f=c;return c=f.ref,{$$typeof:a,type:o,key:d,ref:c!==void 0?c:null,props:f}}return bl.Fragment=l,bl.jsx=r,bl.jsxs=r,bl}var zm;function Kb(){return zm||(zm=1,Ou.exports=Xb()),Ou.exports}var sn=Kb(),Mu={exports:{}},me={};var Nm;function Zb(){if(Nm)return me;Nm=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),x=Symbol.iterator;function S(T){return T===null||typeof T!="object"?null:(T=x&&T[x]||T["@@iterator"],typeof T=="function"?T:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,U={};function M(T,H,w){this.props=T,this.context=H,this.refs=U,this.updater=w||I}M.prototype.isReactComponent={},M.prototype.setState=function(T,H){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,H,"setState")},M.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function W(){}W.prototype=M.prototype;function G(T,H,w){this.props=T,this.context=H,this.refs=U,this.updater=w||I}var re=G.prototype=new W;re.constructor=G,z(re,M.prototype),re.isPureReactComponent=!0;var oe=Array.isArray;function B(){}var K={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function fe(T,H,w){var Z=w.ref;return{$$typeof:a,type:T,key:H,ref:Z!==void 0?Z:null,props:w}}function ge(T,H){return fe(T.type,H,T.props)}function ee(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function $(T){var H={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(w){return H[w]})}var Ee=/\/+/g;function ae(T,H){return typeof T=="object"&&T!==null&&T.key!=null?$(""+T.key):H.toString(36)}function Q(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(B,B):(T.status="pending",T.then(function(H){T.status==="pending"&&(T.status="fulfilled",T.value=H)},function(H){T.status==="pending"&&(T.status="rejected",T.reason=H)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function O(T,H,w,Z,ue){var ie=typeof T;(ie==="undefined"||ie==="boolean")&&(T=null);var ke=!1;if(T===null)ke=!0;else switch(ie){case"bigint":case"string":case"number":ke=!0;break;case"object":switch(T.$$typeof){case a:case l:ke=!0;break;case y:return ke=T._init,O(ke(T._payload),H,w,Z,ue)}}if(ke)return ue=ue(T),ke=Z===""?"."+ae(T,0):Z,oe(ue)?(w="",ke!=null&&(w=ke.replace(Ee,"$&/")+"/"),O(ue,H,w,"",function(Yn){return Yn})):ue!=null&&(ee(ue)&&(ue=ge(ue,w+(ue.key==null||T&&T.key===ue.key?"":(""+ue.key).replace(Ee,"$&/")+"/")+ke)),H.push(ue)),1;ke=0;var We=Z===""?".":Z+":";if(oe(T))for(var Ne=0;Ne<T.length;Ne++)Z=T[Ne],ie=We+ae(Z,Ne),ke+=O(Z,H,w,ie,ue);else if(Ne=S(T),typeof Ne=="function")for(T=Ne.call(T),Ne=0;!(Z=T.next()).done;)Z=Z.value,ie=We+ae(Z,Ne++),ke+=O(Z,H,w,ie,ue);else if(ie==="object"){if(typeof T.then=="function")return O(Q(T),H,w,Z,ue);throw H=String(T),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ke}function F(T,H,w){if(T==null)return T;var Z=[],ue=0;return O(T,Z,"","",function(ie){return H.call(w,ie,ue++)}),Z}function te(T){if(T._status===-1){var H=T._result;H=H(),H.then(function(w){(T._status===0||T._status===-1)&&(T._status=1,T._result=w)},function(w){(T._status===0||T._status===-1)&&(T._status=2,T._result=w)}),T._status===-1&&(T._status=0,T._result=H)}if(T._status===1)return T._result.default;throw T._result}var ve=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},k={map:F,forEach:function(T,H,w){F(T,function(){H.apply(this,arguments)},w)},count:function(T){var H=0;return F(T,function(){H++}),H},toArray:function(T){return F(T,function(H){return H})||[]},only:function(T){if(!ee(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return me.Activity=b,me.Children=k,me.Component=M,me.Fragment=r,me.Profiler=c,me.PureComponent=G,me.StrictMode=o,me.Suspense=g,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,me.__COMPILER_RUNTIME={__proto__:null,c:function(T){return K.H.useMemoCache(T)}},me.cache=function(T){return function(){return T.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(T,H,w){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var Z=z({},T.props),ue=T.key;if(H!=null)for(ie in H.key!==void 0&&(ue=""+H.key),H)!ce.call(H,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&H.ref===void 0||(Z[ie]=H[ie]);var ie=arguments.length-2;if(ie===1)Z.children=w;else if(1<ie){for(var ke=Array(ie),We=0;We<ie;We++)ke[We]=arguments[We+2];Z.children=ke}return fe(T.type,ue,Z)},me.createContext=function(T){return T={$$typeof:d,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:f,_context:T},T},me.createElement=function(T,H,w){var Z,ue={},ie=null;if(H!=null)for(Z in H.key!==void 0&&(ie=""+H.key),H)ce.call(H,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ue[Z]=H[Z]);var ke=arguments.length-2;if(ke===1)ue.children=w;else if(1<ke){for(var We=Array(ke),Ne=0;Ne<ke;Ne++)We[Ne]=arguments[Ne+2];ue.children=We}if(T&&T.defaultProps)for(Z in ke=T.defaultProps,ke)ue[Z]===void 0&&(ue[Z]=ke[Z]);return fe(T,ie,ue)},me.createRef=function(){return{current:null}},me.forwardRef=function(T){return{$$typeof:p,render:T}},me.isValidElement=ee,me.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:te}},me.memo=function(T,H){return{$$typeof:m,type:T,compare:H===void 0?null:H}},me.startTransition=function(T){var H=K.T,w={};K.T=w;try{var Z=T(),ue=K.S;ue!==null&&ue(w,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(B,ve)}catch(ie){ve(ie)}finally{H!==null&&w.types!==null&&(H.types=w.types),K.T=H}},me.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},me.use=function(T){return K.H.use(T)},me.useActionState=function(T,H,w){return K.H.useActionState(T,H,w)},me.useCallback=function(T,H){return K.H.useCallback(T,H)},me.useContext=function(T){return K.H.useContext(T)},me.useDebugValue=function(){},me.useDeferredValue=function(T,H){return K.H.useDeferredValue(T,H)},me.useEffect=function(T,H){return K.H.useEffect(T,H)},me.useEffectEvent=function(T){return K.H.useEffectEvent(T)},me.useId=function(){return K.H.useId()},me.useImperativeHandle=function(T,H,w){return K.H.useImperativeHandle(T,H,w)},me.useInsertionEffect=function(T,H){return K.H.useInsertionEffect(T,H)},me.useLayoutEffect=function(T,H){return K.H.useLayoutEffect(T,H)},me.useMemo=function(T,H){return K.H.useMemo(T,H)},me.useOptimistic=function(T,H){return K.H.useOptimistic(T,H)},me.useReducer=function(T,H,w){return K.H.useReducer(T,H,w)},me.useRef=function(T){return K.H.useRef(T)},me.useState=function(T){return K.H.useState(T)},me.useSyncExternalStore=function(T,H,w){return K.H.useSyncExternalStore(T,H,w)},me.useTransition=function(){return K.H.useTransition()},me.version="19.2.3",me}var Im;function hc(){return Im||(Im=1,Mu.exports=Zb()),Mu.exports}var j=hc();const $b=uo(j);var Lu={exports:{}},vl={},zu={exports:{}},Nu={};var Um;function Jb(){return Um||(Um=1,(function(a){function l(O,F){var te=O.length;O.push(F);e:for(;0<te;){var ve=te-1>>>1,k=O[ve];if(0<c(k,F))O[ve]=F,O[te]=k,te=ve;else break e}}function r(O){return O.length===0?null:O[0]}function o(O){if(O.length===0)return null;var F=O[0],te=O.pop();if(te!==F){O[0]=te;e:for(var ve=0,k=O.length,T=k>>>1;ve<T;){var H=2*(ve+1)-1,w=O[H],Z=H+1,ue=O[Z];if(0>c(w,te))Z<k&&0>c(ue,w)?(O[ve]=ue,O[Z]=te,ve=Z):(O[ve]=w,O[H]=te,ve=H);else if(Z<k&&0>c(ue,te))O[ve]=ue,O[Z]=te,ve=Z;else break e}}return F}function c(O,F){var te=O.sortIndex-F.sortIndex;return te!==0?te:O.id-F.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();a.unstable_now=function(){return d.now()-p}}var g=[],m=[],y=1,b=null,x=3,S=!1,I=!1,z=!1,U=!1,M=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function re(O){for(var F=r(m);F!==null;){if(F.callback===null)o(m);else if(F.startTime<=O)o(m),F.sortIndex=F.expirationTime,l(g,F);else break;F=r(m)}}function oe(O){if(z=!1,re(O),!I)if(r(g)!==null)I=!0,B||(B=!0,$());else{var F=r(m);F!==null&&Q(oe,F.startTime-O)}}var B=!1,K=-1,ce=5,fe=-1;function ge(){return U?!0:!(a.unstable_now()-fe<ce)}function ee(){if(U=!1,B){var O=a.unstable_now();fe=O;var F=!0;try{e:{I=!1,z&&(z=!1,W(K),K=-1),S=!0;var te=x;try{n:{for(re(O),b=r(g);b!==null&&!(b.expirationTime>O&&ge());){var ve=b.callback;if(typeof ve=="function"){b.callback=null,x=b.priorityLevel;var k=ve(b.expirationTime<=O);if(O=a.unstable_now(),typeof k=="function"){b.callback=k,re(O),F=!0;break n}b===r(g)&&o(g),re(O)}else o(g);b=r(g)}if(b!==null)F=!0;else{var T=r(m);T!==null&&Q(oe,T.startTime-O),F=!1}}break e}finally{b=null,x=te,S=!1}F=void 0}}finally{F?$():B=!1}}}var $;if(typeof G=="function")$=function(){G(ee)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,ae=Ee.port2;Ee.port1.onmessage=ee,$=function(){ae.postMessage(null)}}else $=function(){M(ee,0)};function Q(O,F){K=M(function(){O(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(O){O.callback=null},a.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<O?Math.floor(1e3/O):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(O){switch(x){case 1:case 2:case 3:var F=3;break;default:F=x}var te=x;x=F;try{return O()}finally{x=te}},a.unstable_requestPaint=function(){U=!0},a.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var te=x;x=O;try{return F()}finally{x=te}},a.unstable_scheduleCallback=function(O,F,te){var ve=a.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ve+te:ve):te=ve,O){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=te+k,O={id:y++,callback:F,priorityLevel:O,startTime:te,expirationTime:k,sortIndex:-1},te>ve?(O.sortIndex=te,l(m,O),r(g)===null&&O===r(m)&&(z?(W(K),K=-1):z=!0,Q(oe,te-ve))):(O.sortIndex=k,l(g,O),I||S||(I=!0,B||(B=!0,$()))),O},a.unstable_shouldYield=ge,a.unstable_wrapCallback=function(O){var F=x;return function(){var te=x;x=F;try{return O.apply(this,arguments)}finally{x=te}}}})(Nu)),Nu}var Bm;function ev(){return Bm||(Bm=1,zu.exports=Jb()),zu.exports}var Iu={exports:{}},mn={};var Hm;function nv(){if(Hm)return mn;Hm=1;var a=hc();function l(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(l(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(g,m,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:g,containerInfo:m,implementation:y}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,mn.createPortal=function(g,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(l(299));return f(g,m,null,y)},mn.flushSync=function(g){var m=d.T,y=o.p;try{if(d.T=null,o.p=2,g)return g()}finally{d.T=m,o.p=y,o.d.f()}},mn.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(g,m))},mn.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},mn.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var y=m.as,b=p(y,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?o.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:S}):y==="script"&&o.d.X(g,{crossOrigin:b,integrity:x,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},mn.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=p(m.as,m.crossOrigin);o.d.M(g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(g)},mn.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,b=p(y,m.crossOrigin);o.d.L(g,y,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},mn.preloadModule=function(g,m){if(typeof g=="string")if(m){var y=p(m.as,m.crossOrigin);o.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(g)},mn.requestFormReset=function(g){o.d.r(g)},mn.unstable_batchedUpdates=function(g,m){return g(m)},mn.useFormState=function(g,m,y){return d.H.useFormState(g,m,y)},mn.useFormStatus=function(){return d.H.useHostTransitionStatus()},mn.version="19.2.3",mn}var qm;function tv(){if(qm)return Iu.exports;qm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Iu.exports=nv(),Iu.exports}var jm;function av(){if(jm)return vl;jm=1;var a=ev(),l=hc(),r=tv();function o(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(o(188))}function m(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(o(188));return n!==e?null:e}for(var t=e,i=n;;){var s=t.return;if(s===null)break;var u=s.alternate;if(u===null){if(i=s.return,i!==null){t=i;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===t)return g(s),e;if(u===i)return g(s),n;u=u.sibling}throw Error(o(188))}if(t.return!==i.return)t=s,i=u;else{for(var h=!1,v=s.child;v;){if(v===t){h=!0,t=s,i=u;break}if(v===i){h=!0,i=s,t=u;break}v=v.sibling}if(!h){for(v=u.child;v;){if(v===t){h=!0,t=u,i=s;break}if(v===i){h=!0,i=u,t=s;break}v=v.sibling}if(!h)throw Error(o(189))}}if(t.alternate!==i)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var b=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),G=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),fe=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Symbol.for("react.client.reference");function ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case M:return"Profiler";case U:return"StrictMode";case oe:return"Suspense";case B:return"SuspenseList";case fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case I:return"Portal";case G:return e.displayName||"Context";case W:return(e._context.displayName||"Context")+".Consumer";case re:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return n=e.displayName||null,n!==null?n:ae(e.type)||"Memo";case ce:n=e._payload,e=e._init;try{return ae(e(n))}catch{}}return null}var Q=Array.isArray,O=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ve=[],k=-1;function T(e){return{current:e}}function H(e){0>k||(e.current=ve[k],ve[k]=null,k--)}function w(e,n){k++,ve[k]=e.current,e.current=n}var Z=T(null),ue=T(null),ie=T(null),ke=T(null);function We(e,n){switch(w(ie,n),w(ue,e),w(Z,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?tm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=tm(n),e=am(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(Z),w(Z,e)}function Ne(){H(Z),H(ue),H(ie)}function Yn(e){e.memoizedState!==null&&w(ke,e);var n=Z.current,t=am(n,e.type);n!==t&&(w(ue,e),w(Z,t))}function dt(e){ue.current===e&&(H(Z),H(ue)),ke.current===e&&(H(ke),ml._currentValue=te)}var Ti,zl;function ht(e){if(Ti===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ti=n&&n[1]||"",zl=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ti+e+zl}var Da=!1;function Ra(e,n){if(!e||Da)return"";Da=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(n){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(L){var R=L}Reflect.construct(e,[],P)}else{try{P.call()}catch(L){R=L}e.call(P.prototype)}}else{try{throw Error()}catch(L){R=L}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(L){if(L&&R&&typeof L.stack=="string")return[L.stack,R.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),h=u[0],v=u[1];if(h&&v){var C=h.split(`
`),D=v.split(`
`);for(s=i=0;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;for(;s<D.length&&!D[s].includes("DetermineComponentFrameRoot");)s++;if(i===C.length||s===D.length)for(i=C.length-1,s=D.length-1;1<=i&&0<=s&&C[i]!==D[s];)s--;for(;1<=i&&0<=s;i--,s--)if(C[i]!==D[s]){if(i!==1||s!==1)do if(i--,s--,0>s||C[i]!==D[s]){var N=`
`+C[i].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=i&&0<=s);break}}}finally{Da=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?ht(t):""}function Nl(e,n){switch(e.tag){case 26:case 27:case 5:return ht(e.type);case 16:return ht("Lazy");case 13:return e.child!==n&&n!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return Ra(e.type,!1);case 11:return Ra(e.type.render,!1);case 1:return Ra(e.type,!0);case 31:return ht("Activity");default:return""}}function Il(e){try{var n="",t=null;do n+=Nl(e,t),t=e,e=e.return;while(e);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Oa=Object.prototype.hasOwnProperty,Ma=a.unstable_scheduleCallback,Ai=a.unstable_cancelCallback,go=a.unstable_shouldYield,yo=a.unstable_requestPaint,gn=a.unstable_now,bo=a.unstable_getCurrentPriorityLevel,q=a.unstable_ImmediatePriority,X=a.unstable_UserBlockingPriority,de=a.unstable_NormalPriority,Se=a.unstable_LowPriority,Me=a.unstable_IdlePriority,Rn=a.log,mt=a.unstable_setDisableYieldValue,yn=null,an=null;function vn(e){if(typeof Rn=="function"&&mt(e),an&&typeof an.setStrictMode=="function")try{an.setStrictMode(yn,e)}catch{}}var He=Math.clz32?Math.clz32:Ng,Nt=Math.log,et=Math.LN2;function Ng(e){return e>>>=0,e===0?32:31-(Nt(e)/et|0)|0}var Ul=256,Bl=262144,Hl=4194304;function ua(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ql(e,n,t){var i=e.pendingLanes;if(i===0)return 0;var s=0,u=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var v=i&134217727;return v!==0?(i=v&~u,i!==0?s=ua(i):(h&=v,h!==0?s=ua(h):t||(t=v&~e,t!==0&&(s=ua(t))))):(v=i&~u,v!==0?s=ua(v):h!==0?s=ua(h):t||(t=i&~e,t!==0&&(s=ua(t)))),s===0?0:n!==0&&n!==s&&(n&u)===0&&(u=s&-s,t=n&-n,u>=t||u===32&&(t&4194048)!==0)?n:s}function Ei(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ig(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ic(){var e=Hl;return Hl<<=1,(Hl&62914560)===0&&(Hl=4194304),e}function vo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function _i(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ug(e,n,t,i,s,u){var h=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var v=e.entanglements,C=e.expirationTimes,D=e.hiddenUpdates;for(t=h&~t;0<t;){var N=31-He(t),P=1<<N;v[N]=0,C[N]=-1;var R=D[N];if(R!==null)for(D[N]=null,N=0;N<R.length;N++){var L=R[N];L!==null&&(L.lane&=-536870913)}t&=~P}i!==0&&Uc(e,i,0),u!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=u&~(h&~n))}function Uc(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var i=31-He(n);e.entangledLanes|=n,e.entanglements[i]=e.entanglements[i]|1073741824|t&261930}function Bc(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-He(t),s=1<<i;s&n|e[i]&n&&(e[i]|=n),t&=~s}}function Hc(e,n){var t=n&-n;return t=(t&42)!==0?1:So(t),(t&(e.suspendedLanes|n))!==0?0:t}function So(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qc(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Am(e.type))}function jc(e,n){var t=F.p;try{return F.p=e,n()}finally{F.p=t}}var It=Math.random().toString(36).slice(2),un="__reactFiber$"+It,Sn="__reactProps$"+It,La="__reactContainer$"+It,xo="__reactEvents$"+It,Bg="__reactListeners$"+It,Hg="__reactHandles$"+It,Yc="__reactResources$"+It,Di="__reactMarker$"+It;function ko(e){delete e[un],delete e[Sn],delete e[xo],delete e[Bg],delete e[Hg]}function za(e){var n=e[un];if(n)return n;for(var t=e.parentNode;t;){if(n=t[La]||t[un]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=cm(e);e!==null;){if(t=e[un])return t;e=cm(e)}return n}e=t,t=e.parentNode}return null}function Na(e){if(e=e[un]||e[La]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ri(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(o(33))}function Ia(e){var n=e[Yc];return n||(n=e[Yc]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rn(e){e[Di]=!0}var Pc=new Set,Gc={};function ca(e,n){Ua(e,n),Ua(e+"Capture",n)}function Ua(e,n){for(Gc[e]=n,e=0;e<n.length;e++)Pc.add(n[e])}var qg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wc={},Fc={};function jg(e){return Oa.call(Fc,e)?!0:Oa.call(Wc,e)?!1:qg.test(e)?Fc[e]=!0:(Wc[e]=!0,!1)}function jl(e,n,t){if(jg(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var i=n.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Yl(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function pt(e,n,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+i)}}function Pn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yg(e,n,t){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,u=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(h){t=""+h,u.call(this,h)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return t},setValue:function(h){t=""+h},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Co(e){if(!e._valueTracker){var n=Vc(e)?"checked":"value";e._valueTracker=Yg(e,n,""+e[n])}}function Qc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=Vc(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function Pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pg=/[\n"\\]/g;function Gn(e){return e.replace(Pg,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function To(e,n,t,i,s,u,h,v){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),n!=null?h==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Pn(n)):e.value!==""+Pn(n)&&(e.value=""+Pn(n)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),n!=null?Ao(e,h,Pn(n)):t!=null?Ao(e,h,Pn(t)):i!=null&&e.removeAttribute("value"),s==null&&u!=null&&(e.defaultChecked=!!u),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Pn(v):e.removeAttribute("name")}function Xc(e,n,t,i,s,u,h,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),n!=null||t!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Co(e);return}t=t!=null?""+Pn(t):"",n=n!=null?""+Pn(n):t,v||n===e.value||(e.value=n),e.defaultValue=n}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=v?e.checked:!!i,e.defaultChecked=!!i,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),Co(e)}function Ao(e,n,t){n==="number"&&Pl(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Ba(e,n,t,i){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&i&&(e[t].defaultSelected=!0)}else{for(t=""+Pn(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function Kc(e,n,t){if(n!=null&&(n=""+Pn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Pn(t):""}function Zc(e,n,t,i){if(n==null){if(i!=null){if(t!=null)throw Error(o(92));if(Q(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),n=t}t=Pn(n),e.defaultValue=t,i=e.textContent,i===t&&i!==""&&i!==null&&(e.value=i),Co(e)}function Ha(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Gg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $c(e,n,t){var i=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?i?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":i?e.setProperty(n,t):typeof t!="number"||t===0||Gg.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Jc(e,n,t){if(n!=null&&typeof n!="object")throw Error(o(62));if(e=e.style,t!=null){for(var i in t)!t.hasOwnProperty(i)||n!=null&&n.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in n)i=n[s],n.hasOwnProperty(s)&&t[s]!==i&&$c(e,s,i)}else for(var u in n)n.hasOwnProperty(u)&&$c(e,u,n[u])}function Eo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gl(e){return Fg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function gt(){}var _o=null;function Do(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qa=null,ja=null;function ef(e){var n=Na(e);if(n&&(e=n.stateNode)){var t=e[Sn]||null;e:switch(e=n.stateNode,n.type){case"input":if(To(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Gn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var s=i[Sn]||null;if(!s)throw Error(o(90));To(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(n=0;n<t.length;n++)i=t[n],i.form===e.form&&Qc(i)}break e;case"textarea":Kc(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Ba(e,!!t.multiple,n,!1)}}}var Ro=!1;function nf(e,n,t){if(Ro)return e(n,t);Ro=!0;try{var i=e(n);return i}finally{if(Ro=!1,(qa!==null||ja!==null)&&(Or(),qa&&(n=qa,e=ja,ja=qa=null,ef(n),e)))for(n=0;n<e.length;n++)ef(e[n])}}function Oi(e,n){var t=e.stateNode;if(t===null)return null;var i=t[Sn]||null;if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(o(231,n,typeof t));return t}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oo=!1;if(yt)try{var Mi={};Object.defineProperty(Mi,"passive",{get:function(){Oo=!0}}),window.addEventListener("test",Mi,Mi),window.removeEventListener("test",Mi,Mi)}catch{Oo=!1}var Ut=null,Mo=null,Wl=null;function tf(){if(Wl)return Wl;var e,n=Mo,t=n.length,i,s="value"in Ut?Ut.value:Ut.textContent,u=s.length;for(e=0;e<t&&n[e]===s[e];e++);var h=t-e;for(i=1;i<=h&&n[t-i]===s[u-i];i++);return Wl=s.slice(e,1<i?1-i:void 0)}function Fl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Vl(){return!0}function af(){return!1}function wn(e){function n(t,i,s,u,h){this._reactName=t,this._targetInst=s,this.type=i,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(t=e[v],this[v]=t?t(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Vl:af,this.isPropagationStopped=af,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),n}var fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=wn(fa),Li=b({},fa,{view:0,detail:0}),Vg=wn(Li),Lo,zo,zi,Xl=b({},Li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Io,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zi&&(zi&&e.type==="mousemove"?(Lo=e.screenX-zi.screenX,zo=e.screenY-zi.screenY):zo=Lo=0,zi=e),Lo)},movementY:function(e){return"movementY"in e?e.movementY:zo}}),lf=wn(Xl),Qg=b({},Xl,{dataTransfer:0}),Xg=wn(Qg),Kg=b({},Li,{relatedTarget:0}),No=wn(Kg),Zg=b({},fa,{animationName:0,elapsedTime:0,pseudoElement:0}),$g=wn(Zg),Jg=b({},fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ey=wn(Jg),ny=b({},fa,{data:0}),rf=wn(ny),ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ly(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=iy[e])?!!n[e]:!1}function Io(){return ly}var ry=b({},Li,{key:function(e){if(e.key){var n=ty[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ay[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Io,charCode:function(e){return e.type==="keypress"?Fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oy=wn(ry),sy=b({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),of=wn(sy),uy=b({},Li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Io}),cy=wn(uy),fy=b({},fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),dy=wn(fy),hy=b({},Xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),my=wn(hy),py=b({},fa,{newState:0,oldState:0}),gy=wn(py),yy=[9,13,27,32],Uo=yt&&"CompositionEvent"in window,Ni=null;yt&&"documentMode"in document&&(Ni=document.documentMode);var by=yt&&"TextEvent"in window&&!Ni,sf=yt&&(!Uo||Ni&&8<Ni&&11>=Ni),uf=" ",cf=!1;function ff(e,n){switch(e){case"keyup":return yy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function df(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ya=!1;function vy(e,n){switch(e){case"compositionend":return df(n);case"keypress":return n.which!==32?null:(cf=!0,uf);case"textInput":return e=n.data,e===uf&&cf?null:e;default:return null}}function Sy(e,n){if(Ya)return e==="compositionend"||!Uo&&ff(e,n)?(e=tf(),Wl=Mo=Ut=null,Ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sf&&n.locale!=="ko"?null:n.data;default:return null}}var wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!wy[e.type]:n==="textarea"}function mf(e,n,t,i){qa?ja?ja.push(i):ja=[i]:qa=i,n=Br(n,"onChange"),0<n.length&&(t=new Ql("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var Ii=null,Ui=null;function xy(e){Kh(e,0)}function Kl(e){var n=Ri(e);if(Qc(n))return e}function pf(e,n){if(e==="change")return n}var gf=!1;if(yt){var Bo;if(yt){var Ho="oninput"in document;if(!Ho){var yf=document.createElement("div");yf.setAttribute("oninput","return;"),Ho=typeof yf.oninput=="function"}Bo=Ho}else Bo=!1;gf=Bo&&(!document.documentMode||9<document.documentMode)}function bf(){Ii&&(Ii.detachEvent("onpropertychange",vf),Ui=Ii=null)}function vf(e){if(e.propertyName==="value"&&Kl(Ui)){var n=[];mf(n,Ui,e,Do(e)),nf(xy,n)}}function ky(e,n,t){e==="focusin"?(bf(),Ii=n,Ui=t,Ii.attachEvent("onpropertychange",vf)):e==="focusout"&&bf()}function Cy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kl(Ui)}function Ty(e,n){if(e==="click")return Kl(n)}function Ay(e,n){if(e==="input"||e==="change")return Kl(n)}function Ey(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var On=typeof Object.is=="function"?Object.is:Ey;function Bi(e,n){if(On(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var s=t[i];if(!Oa.call(n,s)||!On(e[s],n[s]))return!1}return!0}function Sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wf(e,n){var t=Sf(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Sf(t)}}function xf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?xf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Pl(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Pl(e.document)}return n}function qo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var _y=yt&&"documentMode"in document&&11>=document.documentMode,Pa=null,jo=null,Hi=null,Yo=!1;function Cf(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Yo||Pa==null||Pa!==Pl(i)||(i=Pa,"selectionStart"in i&&qo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hi&&Bi(Hi,i)||(Hi=i,i=Br(jo,"onSelect"),0<i.length&&(n=new Ql("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=Pa)))}function da(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ga={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionrun:da("Transition","TransitionRun"),transitionstart:da("Transition","TransitionStart"),transitioncancel:da("Transition","TransitionCancel"),transitionend:da("Transition","TransitionEnd")},Po={},Tf={};yt&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete Ga.animationend.animation,delete Ga.animationiteration.animation,delete Ga.animationstart.animation),"TransitionEvent"in window||delete Ga.transitionend.transition);function ha(e){if(Po[e])return Po[e];if(!Ga[e])return e;var n=Ga[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Tf)return Po[e]=n[t];return e}var Af=ha("animationend"),Ef=ha("animationiteration"),_f=ha("animationstart"),Dy=ha("transitionrun"),Ry=ha("transitionstart"),Oy=ha("transitioncancel"),Df=ha("transitionend"),Rf=new Map,Go="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Go.push("scrollEnd");function nt(e,n){Rf.set(e,n),ca(n,[e])}var Zl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wn=[],Wa=0,Wo=0;function $l(){for(var e=Wa,n=Wo=Wa=0;n<e;){var t=Wn[n];Wn[n++]=null;var i=Wn[n];Wn[n++]=null;var s=Wn[n];Wn[n++]=null;var u=Wn[n];if(Wn[n++]=null,i!==null&&s!==null){var h=i.pending;h===null?s.next=s:(s.next=h.next,h.next=s),i.pending=s}u!==0&&Of(t,s,u)}}function Jl(e,n,t,i){Wn[Wa++]=e,Wn[Wa++]=n,Wn[Wa++]=t,Wn[Wa++]=i,Wo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Fo(e,n,t,i){return Jl(e,n,t,i),er(e)}function ma(e,n){return Jl(e,null,null,n),er(e)}function Of(e,n,t){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t);for(var s=!1,u=e.return;u!==null;)u.childLanes|=t,i=u.alternate,i!==null&&(i.childLanes|=t),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(s=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,s&&n!==null&&(s=31-He(t),e=u.hiddenUpdates,i=e[s],i===null?e[s]=[n]:i.push(n),n.lane=t|536870912),u):null}function er(e){if(50<ol)throw ol=0,nu=null,Error(o(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Fa={};function My(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(e,n,t,i){return new My(e,n,t,i)}function Vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bt(e,n){var t=e.alternate;return t===null?(t=Mn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Mf(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function nr(e,n,t,i,s,u){var h=0;if(i=e,typeof e=="function")Vo(e)&&(h=1);else if(typeof e=="string")h=Ub(e,t,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case fe:return e=Mn(31,t,n,s),e.elementType=fe,e.lanes=u,e;case z:return pa(t.children,s,u,n);case U:h=8,s|=24;break;case M:return e=Mn(12,t,n,s|2),e.elementType=M,e.lanes=u,e;case oe:return e=Mn(13,t,n,s),e.elementType=oe,e.lanes=u,e;case B:return e=Mn(19,t,n,s),e.elementType=B,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:h=10;break e;case W:h=9;break e;case re:h=11;break e;case K:h=14;break e;case ce:h=16,i=null;break e}h=29,t=Error(o(130,e===null?"null":typeof e,"")),i=null}return n=Mn(h,t,n,s),n.elementType=e,n.type=i,n.lanes=u,n}function pa(e,n,t,i){return e=Mn(7,e,i,n),e.lanes=t,e}function Qo(e,n,t){return e=Mn(6,e,null,n),e.lanes=t,e}function Lf(e){var n=Mn(18,null,null,0);return n.stateNode=e,n}function Xo(e,n,t){return n=Mn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var zf=new WeakMap;function Fn(e,n){if(typeof e=="object"&&e!==null){var t=zf.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Il(n)},zf.set(e,n),n)}return{value:e,source:n,stack:Il(n)}}var Va=[],Qa=0,tr=null,qi=0,Vn=[],Qn=0,Bt=null,lt=1,rt="";function vt(e,n){Va[Qa++]=qi,Va[Qa++]=tr,tr=e,qi=n}function Nf(e,n,t){Vn[Qn++]=lt,Vn[Qn++]=rt,Vn[Qn++]=Bt,Bt=e;var i=lt;e=rt;var s=32-He(i)-1;i&=~(1<<s),t+=1;var u=32-He(n)+s;if(30<u){var h=s-s%5;u=(i&(1<<h)-1).toString(32),i>>=h,s-=h,lt=1<<32-He(n)+s|t<<s|i,rt=u+e}else lt=1<<u|t<<s|i,rt=e}function Ko(e){e.return!==null&&(vt(e,1),Nf(e,1,0))}function Zo(e){for(;e===tr;)tr=Va[--Qa],Va[Qa]=null,qi=Va[--Qa],Va[Qa]=null;for(;e===Bt;)Bt=Vn[--Qn],Vn[Qn]=null,rt=Vn[--Qn],Vn[Qn]=null,lt=Vn[--Qn],Vn[Qn]=null}function If(e,n){Vn[Qn++]=lt,Vn[Qn++]=rt,Vn[Qn++]=Bt,lt=n.id,rt=n.overflow,Bt=e}var cn=null,Pe=null,Ae=!1,Ht=null,Xn=!1,$o=Error(o(519));function qt(e){var n=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ji(Fn(n,e)),$o}function Uf(e){var n=e.stateNode,t=e.type,i=e.memoizedProps;switch(n[un]=e,n[Sn]=i,t){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(t=0;t<ul.length;t++)xe(ul[t],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Xc(n,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Zc(n,i.value,i.defaultValue,i.children)}t=i.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||i.suppressHydrationWarning===!0||em(n.textContent,t)?(i.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),i.onScroll!=null&&xe("scroll",n),i.onScrollEnd!=null&&xe("scrollend",n),i.onClick!=null&&(n.onclick=gt),n=!0):n=!1,n||qt(e,!0)}function Bf(e){for(cn=e.return;cn;)switch(cn.tag){case 5:case 31:case 13:Xn=!1;return;case 27:case 3:Xn=!0;return;default:cn=cn.return}}function Xa(e){if(e!==cn)return!1;if(!Ae)return Bf(e),Ae=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||gu(e.type,e.memoizedProps)),t=!t),t&&Pe&&qt(e),Bf(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Pe=um(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Pe=um(e)}else n===27?(n=Pe,ea(e.type)?(e=wu,wu=null,Pe=e):Pe=n):Pe=cn?Zn(e.stateNode.nextSibling):null;return!0}function ga(){Pe=cn=null,Ae=!1}function Jo(){var e=Ht;return e!==null&&(Tn===null?Tn=e:Tn.push.apply(Tn,e),Ht=null),e}function ji(e){Ht===null?Ht=[e]:Ht.push(e)}var es=T(null),ya=null,St=null;function jt(e,n,t){w(es,n._currentValue),n._currentValue=t}function wt(e){e._currentValue=es.current,H(es)}function ns(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function ts(e,n,t,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){var h=s.child;u=u.firstContext;e:for(;u!==null;){var v=u;u=s;for(var C=0;C<n.length;C++)if(v.context===n[C]){u.lanes|=t,v=u.alternate,v!==null&&(v.lanes|=t),ns(u.return,t,e),i||(h=null);break e}u=v.next}}else if(s.tag===18){if(h=s.return,h===null)throw Error(o(341));h.lanes|=t,u=h.alternate,u!==null&&(u.lanes|=t),ns(h,t,e),h=null}else h=s.child;if(h!==null)h.return=s;else for(h=s;h!==null;){if(h===e){h=null;break}if(s=h.sibling,s!==null){s.return=h.return,h=s;break}h=h.return}s=h}}function Ka(e,n,t,i){e=null;for(var s=n,u=!1;s!==null;){if(!u){if((s.flags&524288)!==0)u=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var h=s.alternate;if(h===null)throw Error(o(387));if(h=h.memoizedProps,h!==null){var v=s.type;On(s.pendingProps.value,h.value)||(e!==null?e.push(v):e=[v])}}else if(s===ke.current){if(h=s.alternate,h===null)throw Error(o(387));h.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(ml):e=[ml])}s=s.return}e!==null&&ts(n,e,t,i),n.flags|=262144}function ar(e){for(e=e.firstContext;e!==null;){if(!On(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ba(e){ya=e,St=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function fn(e){return Hf(ya,e)}function ir(e,n){return ya===null&&ba(e),Hf(e,n)}function Hf(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},St===null){if(e===null)throw Error(o(308));St=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else St=St.next=n;return t}var Ly=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,i){e.push(i)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},zy=a.unstable_scheduleCallback,Ny=a.unstable_NormalPriority,$e={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function as(){return{controller:new Ly,data:new Map,refCount:0}}function Yi(e){e.refCount--,e.refCount===0&&zy(Ny,function(){e.controller.abort()})}var Pi=null,is=0,Za=0,$a=null;function Iy(e,n){if(Pi===null){var t=Pi=[];is=0,Za=ou(),$a={status:"pending",value:void 0,then:function(i){t.push(i)}}}return is++,n.then(qf,qf),n}function qf(){if(--is===0&&Pi!==null){$a!==null&&($a.status="fulfilled");var e=Pi;Pi=null,Za=0,$a=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Uy(e,n){var t=[],i={status:"pending",value:null,reason:null,then:function(s){t.push(s)}};return e.then(function(){i.status="fulfilled",i.value=n;for(var s=0;s<t.length;s++)(0,t[s])(n)},function(s){for(i.status="rejected",i.reason=s,s=0;s<t.length;s++)(0,t[s])(void 0)}),i}var jf=O.S;O.S=function(e,n){Ch=gn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Iy(e,n),jf!==null&&jf(e,n)};var va=T(null);function ls(){var e=va.current;return e!==null?e:qe.pooledCache}function lr(e,n){n===null?w(va,va.current):w(va,n.pool)}function Yf(){var e=ls();return e===null?null:{parent:$e._currentValue,pool:e}}var Ja=Error(o(460)),rs=Error(o(474)),rr=Error(o(542)),or={then:function(){}};function Pf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gf(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(gt,gt),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ff(e),e;default:if(typeof n.status=="string")n.then(gt,gt);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=n,e.status="pending",e.then(function(i){if(n.status==="pending"){var s=n;s.status="fulfilled",s.value=i}},function(i){if(n.status==="pending"){var s=n;s.status="rejected",s.reason=i}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ff(e),e}throw wa=n,Ja}}function Sa(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(wa=t,Ja):t}}var wa=null;function Wf(){if(wa===null)throw Error(o(459));var e=wa;return wa=null,e}function Ff(e){if(e===Ja||e===rr)throw Error(o(483))}var ei=null,Gi=0;function sr(e){var n=Gi;return Gi+=1,ei===null&&(ei=[]),Gf(ei,e,n)}function Wi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ur(e,n){throw n.$$typeof===x?Error(o(525)):(e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Vf(e){function n(E,A){if(e){var _=E.deletions;_===null?(E.deletions=[A],E.flags|=16):_.push(A)}}function t(E,A){if(!e)return null;for(;A!==null;)n(E,A),A=A.sibling;return null}function i(E){for(var A=new Map;E!==null;)E.key!==null?A.set(E.key,E):A.set(E.index,E),E=E.sibling;return A}function s(E,A){return E=bt(E,A),E.index=0,E.sibling=null,E}function u(E,A,_){return E.index=_,e?(_=E.alternate,_!==null?(_=_.index,_<A?(E.flags|=67108866,A):_):(E.flags|=67108866,A)):(E.flags|=1048576,A)}function h(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function v(E,A,_,Y){return A===null||A.tag!==6?(A=Qo(_,E.mode,Y),A.return=E,A):(A=s(A,_),A.return=E,A)}function C(E,A,_,Y){var le=_.type;return le===z?N(E,A,_.props.children,Y,_.key):A!==null&&(A.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ce&&Sa(le)===A.type)?(A=s(A,_.props),Wi(A,_),A.return=E,A):(A=nr(_.type,_.key,_.props,null,E.mode,Y),Wi(A,_),A.return=E,A)}function D(E,A,_,Y){return A===null||A.tag!==4||A.stateNode.containerInfo!==_.containerInfo||A.stateNode.implementation!==_.implementation?(A=Xo(_,E.mode,Y),A.return=E,A):(A=s(A,_.children||[]),A.return=E,A)}function N(E,A,_,Y,le){return A===null||A.tag!==7?(A=pa(_,E.mode,Y,le),A.return=E,A):(A=s(A,_),A.return=E,A)}function P(E,A,_){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Qo(""+A,E.mode,_),A.return=E,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case S:return _=nr(A.type,A.key,A.props,null,E.mode,_),Wi(_,A),_.return=E,_;case I:return A=Xo(A,E.mode,_),A.return=E,A;case ce:return A=Sa(A),P(E,A,_)}if(Q(A)||$(A))return A=pa(A,E.mode,_,null),A.return=E,A;if(typeof A.then=="function")return P(E,sr(A),_);if(A.$$typeof===G)return P(E,ir(E,A),_);ur(E,A)}return null}function R(E,A,_,Y){var le=A!==null?A.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return le!==null?null:v(E,A,""+_,Y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case S:return _.key===le?C(E,A,_,Y):null;case I:return _.key===le?D(E,A,_,Y):null;case ce:return _=Sa(_),R(E,A,_,Y)}if(Q(_)||$(_))return le!==null?null:N(E,A,_,Y,null);if(typeof _.then=="function")return R(E,A,sr(_),Y);if(_.$$typeof===G)return R(E,A,ir(E,_),Y);ur(E,_)}return null}function L(E,A,_,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return E=E.get(_)||null,v(A,E,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case S:return E=E.get(Y.key===null?_:Y.key)||null,C(A,E,Y,le);case I:return E=E.get(Y.key===null?_:Y.key)||null,D(A,E,Y,le);case ce:return Y=Sa(Y),L(E,A,_,Y,le)}if(Q(Y)||$(Y))return E=E.get(_)||null,N(A,E,Y,le,null);if(typeof Y.then=="function")return L(E,A,_,sr(Y),le);if(Y.$$typeof===G)return L(E,A,_,ir(A,Y),le);ur(A,Y)}return null}function J(E,A,_,Y){for(var le=null,_e=null,ne=A,ye=A=0,Te=null;ne!==null&&ye<_.length;ye++){ne.index>ye?(Te=ne,ne=null):Te=ne.sibling;var De=R(E,ne,_[ye],Y);if(De===null){ne===null&&(ne=Te);break}e&&ne&&De.alternate===null&&n(E,ne),A=u(De,A,ye),_e===null?le=De:_e.sibling=De,_e=De,ne=Te}if(ye===_.length)return t(E,ne),Ae&&vt(E,ye),le;if(ne===null){for(;ye<_.length;ye++)ne=P(E,_[ye],Y),ne!==null&&(A=u(ne,A,ye),_e===null?le=ne:_e.sibling=ne,_e=ne);return Ae&&vt(E,ye),le}for(ne=i(ne);ye<_.length;ye++)Te=L(ne,E,ye,_[ye],Y),Te!==null&&(e&&Te.alternate!==null&&ne.delete(Te.key===null?ye:Te.key),A=u(Te,A,ye),_e===null?le=Te:_e.sibling=Te,_e=Te);return e&&ne.forEach(function(la){return n(E,la)}),Ae&&vt(E,ye),le}function se(E,A,_,Y){if(_==null)throw Error(o(151));for(var le=null,_e=null,ne=A,ye=A=0,Te=null,De=_.next();ne!==null&&!De.done;ye++,De=_.next()){ne.index>ye?(Te=ne,ne=null):Te=ne.sibling;var la=R(E,ne,De.value,Y);if(la===null){ne===null&&(ne=Te);break}e&&ne&&la.alternate===null&&n(E,ne),A=u(la,A,ye),_e===null?le=la:_e.sibling=la,_e=la,ne=Te}if(De.done)return t(E,ne),Ae&&vt(E,ye),le;if(ne===null){for(;!De.done;ye++,De=_.next())De=P(E,De.value,Y),De!==null&&(A=u(De,A,ye),_e===null?le=De:_e.sibling=De,_e=De);return Ae&&vt(E,ye),le}for(ne=i(ne);!De.done;ye++,De=_.next())De=L(ne,E,ye,De.value,Y),De!==null&&(e&&De.alternate!==null&&ne.delete(De.key===null?ye:De.key),A=u(De,A,ye),_e===null?le=De:_e.sibling=De,_e=De);return e&&ne.forEach(function(Qb){return n(E,Qb)}),Ae&&vt(E,ye),le}function Be(E,A,_,Y){if(typeof _=="object"&&_!==null&&_.type===z&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case S:e:{for(var le=_.key;A!==null;){if(A.key===le){if(le=_.type,le===z){if(A.tag===7){t(E,A.sibling),Y=s(A,_.props.children),Y.return=E,E=Y;break e}}else if(A.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ce&&Sa(le)===A.type){t(E,A.sibling),Y=s(A,_.props),Wi(Y,_),Y.return=E,E=Y;break e}t(E,A);break}else n(E,A);A=A.sibling}_.type===z?(Y=pa(_.props.children,E.mode,Y,_.key),Y.return=E,E=Y):(Y=nr(_.type,_.key,_.props,null,E.mode,Y),Wi(Y,_),Y.return=E,E=Y)}return h(E);case I:e:{for(le=_.key;A!==null;){if(A.key===le)if(A.tag===4&&A.stateNode.containerInfo===_.containerInfo&&A.stateNode.implementation===_.implementation){t(E,A.sibling),Y=s(A,_.children||[]),Y.return=E,E=Y;break e}else{t(E,A);break}else n(E,A);A=A.sibling}Y=Xo(_,E.mode,Y),Y.return=E,E=Y}return h(E);case ce:return _=Sa(_),Be(E,A,_,Y)}if(Q(_))return J(E,A,_,Y);if($(_)){if(le=$(_),typeof le!="function")throw Error(o(150));return _=le.call(_),se(E,A,_,Y)}if(typeof _.then=="function")return Be(E,A,sr(_),Y);if(_.$$typeof===G)return Be(E,A,ir(E,_),Y);ur(E,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,A!==null&&A.tag===6?(t(E,A.sibling),Y=s(A,_),Y.return=E,E=Y):(t(E,A),Y=Qo(_,E.mode,Y),Y.return=E,E=Y),h(E)):t(E,A)}return function(E,A,_,Y){try{Gi=0;var le=Be(E,A,_,Y);return ei=null,le}catch(ne){if(ne===Ja||ne===rr)throw ne;var _e=Mn(29,ne,null,E.mode);return _e.lanes=Y,_e.return=E,_e}}}var xa=Vf(!0),Qf=Vf(!1),Yt=!1;function os(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ss(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Gt(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Re&2)!==0){var s=i.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),i.pending=n,n=er(e),Of(e,null,t),n}return Jl(e,i,n,t),er(e)}function Fi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Bc(e,t)}}function us(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var s=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var h={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};u===null?s=u=h:u=u.next=h,t=t.next}while(t!==null);u===null?s=u=n:u=u.next=n}else s=u=n;t={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var cs=!1;function Vi(){if(cs){var e=$a;if(e!==null)throw e}}function Qi(e,n,t,i){cs=!1;var s=e.updateQueue;Yt=!1;var u=s.firstBaseUpdate,h=s.lastBaseUpdate,v=s.shared.pending;if(v!==null){s.shared.pending=null;var C=v,D=C.next;C.next=null,h===null?u=D:h.next=D,h=C;var N=e.alternate;N!==null&&(N=N.updateQueue,v=N.lastBaseUpdate,v!==h&&(v===null?N.firstBaseUpdate=D:v.next=D,N.lastBaseUpdate=C))}if(u!==null){var P=s.baseState;h=0,N=D=C=null,v=u;do{var R=v.lane&-536870913,L=R!==v.lane;if(L?(Ce&R)===R:(i&R)===R){R!==0&&R===Za&&(cs=!0),N!==null&&(N=N.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var J=e,se=v;R=n;var Be=t;switch(se.tag){case 1:if(J=se.payload,typeof J=="function"){P=J.call(Be,P,R);break e}P=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=se.payload,R=typeof J=="function"?J.call(Be,P,R):J,R==null)break e;P=b({},P,R);break e;case 2:Yt=!0}}R=v.callback,R!==null&&(e.flags|=64,L&&(e.flags|=8192),L=s.callbacks,L===null?s.callbacks=[R]:L.push(R))}else L={lane:R,tag:v.tag,payload:v.payload,callback:v.callback,next:null},N===null?(D=N=L,C=P):N=N.next=L,h|=R;if(v=v.next,v===null){if(v=s.shared.pending,v===null)break;L=v,v=L.next,L.next=null,s.lastBaseUpdate=L,s.shared.pending=null}}while(!0);N===null&&(C=P),s.baseState=C,s.firstBaseUpdate=D,s.lastBaseUpdate=N,u===null&&(s.shared.lanes=0),Xt|=h,e.lanes=h,e.memoizedState=P}}function Xf(e,n){if(typeof e!="function")throw Error(o(191,e));e.call(n)}function Kf(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Xf(t[e],n)}var ni=T(null),cr=T(0);function Zf(e,n){e=Rt,w(cr,e),w(ni,n),Rt=e|n.baseLanes}function fs(){w(cr,Rt),w(ni,ni.current)}function ds(){Rt=cr.current,H(ni),H(cr)}var Ln=T(null),Kn=null;function Wt(e){var n=e.alternate;w(Ke,Ke.current&1),w(Ln,e),Kn===null&&(n===null||ni.current!==null||n.memoizedState!==null)&&(Kn=e)}function hs(e){w(Ke,Ke.current),w(Ln,e),Kn===null&&(Kn=e)}function $f(e){e.tag===22?(w(Ke,Ke.current),w(Ln,e),Kn===null&&(Kn=e)):Ft()}function Ft(){w(Ke,Ke.current),w(Ln,Ln.current)}function zn(e){H(Ln),Kn===e&&(Kn=null),H(Ke)}var Ke=T(0);function fr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||vu(t)||Su(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xt=0,pe=null,Ie=null,Je=null,dr=!1,ti=!1,ka=!1,hr=0,Xi=0,ai=null,By=0;function Qe(){throw Error(o(321))}function ms(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!On(e[t],n[t]))return!1;return!0}function ps(e,n,t,i,s,u){return xt=u,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Nd:Rs,ka=!1,u=t(i,s),ka=!1,ti&&(u=ed(n,t,i,s)),Jf(e),u}function Jf(e){O.H=$i;var n=Ie!==null&&Ie.next!==null;if(xt=0,Je=Ie=pe=null,dr=!1,Xi=0,ai=null,n)throw Error(o(300));e===null||en||(e=e.dependencies,e!==null&&ar(e)&&(en=!0))}function ed(e,n,t,i){pe=e;var s=0;do{if(ti&&(ai=null),Xi=0,ti=!1,25<=s)throw Error(o(301));if(s+=1,Je=Ie=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}O.H=Id,u=n(t,i)}while(ti);return u}function Hy(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?Ki(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(pe.flags|=1024),n}function gs(){var e=hr!==0;return hr=0,e}function ys(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function bs(e){if(dr){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}dr=!1}xt=0,Je=Ie=pe=null,ti=!1,Xi=hr=0,ai=null}function bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?pe.memoizedState=Je=e:Je=Je.next=e,Je}function Ze(){if(Ie===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=Je===null?pe.memoizedState:Je.next;if(n!==null)Je=n,Ie=e;else{if(e===null)throw pe.alternate===null?Error(o(467)):Error(o(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Je===null?pe.memoizedState=Je=e:Je=Je.next=e}return Je}function mr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ki(e){var n=Xi;return Xi+=1,ai===null&&(ai=[]),e=Gf(ai,e,n),n=pe,(Je===null?n.memoizedState:Je.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Nd:Rs),e}function pr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ki(e);if(e.$$typeof===G)return fn(e)}throw Error(o(438,String(e)))}function vs(e){var n=null,t=pe.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var i=pe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(n={data:i.data.map(function(s){return s.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=mr(),pe.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),i=0;i<e;i++)t[i]=ge;return n.index++,t}function kt(e,n){return typeof n=="function"?n(e):n}function gr(e){var n=Ze();return Ss(n,Ie,e)}function Ss(e,n,t){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=t;var s=e.baseQueue,u=i.pending;if(u!==null){if(s!==null){var h=s.next;s.next=u.next,u.next=h}n.baseQueue=s=u,i.pending=null}if(u=e.baseState,s===null)e.memoizedState=u;else{n=s.next;var v=h=null,C=null,D=n,N=!1;do{var P=D.lane&-536870913;if(P!==D.lane?(Ce&P)===P:(xt&P)===P){var R=D.revertLane;if(R===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),P===Za&&(N=!0);else if((xt&R)===R){D=D.next,R===Za&&(N=!0);continue}else P={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},C===null?(v=C=P,h=u):C=C.next=P,pe.lanes|=R,Xt|=R;P=D.action,ka&&t(u,P),u=D.hasEagerState?D.eagerState:t(u,P)}else R={lane:P,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},C===null?(v=C=R,h=u):C=C.next=R,pe.lanes|=P,Xt|=P;D=D.next}while(D!==null&&D!==n);if(C===null?h=u:C.next=v,!On(u,e.memoizedState)&&(en=!0,N&&(t=$a,t!==null)))throw t;e.memoizedState=u,e.baseState=h,e.baseQueue=C,i.lastRenderedState=u}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ws(e){var n=Ze(),t=n.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=e;var i=t.dispatch,s=t.pending,u=n.memoizedState;if(s!==null){t.pending=null;var h=s=s.next;do u=e(u,h.action),h=h.next;while(h!==s);On(u,n.memoizedState)||(en=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),t.lastRenderedState=u}return[u,i]}function nd(e,n,t){var i=pe,s=Ze(),u=Ae;if(u){if(t===void 0)throw Error(o(407));t=t()}else t=n();var h=!On((Ie||s).memoizedState,t);if(h&&(s.memoizedState=t,en=!0),s=s.queue,Cs(id.bind(null,i,s,e),[e]),s.getSnapshot!==n||h||Je!==null&&Je.memoizedState.tag&1){if(i.flags|=2048,ii(9,{destroy:void 0},ad.bind(null,i,s,t,n),null),qe===null)throw Error(o(349));u||(xt&127)!==0||td(i,n,t)}return t}function td(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=pe.updateQueue,n===null?(n=mr(),pe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ad(e,n,t,i){n.value=t,n.getSnapshot=i,ld(n)&&rd(e)}function id(e,n,t){return t(function(){ld(n)&&rd(e)})}function ld(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!On(e,t)}catch{return!0}}function rd(e){var n=ma(e,2);n!==null&&An(n,e,2)}function xs(e){var n=bn();if(typeof e=="function"){var t=e;if(e=t(),ka){vn(!0);try{t()}finally{vn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:e},n}function od(e,n,t,i){return e.baseState=t,Ss(e,Ie,typeof i=="function"?i:kt)}function qy(e,n,t,i,s){if(vr(e))throw Error(o(485));if(e=n.action,e!==null){var u={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){u.listeners.push(h)}};O.T!==null?t(!0):u.isTransition=!1,i(u),t=n.pending,t===null?(u.next=n.pending=u,sd(n,u)):(u.next=t.next,n.pending=t.next=u)}}function sd(e,n){var t=n.action,i=n.payload,s=e.state;if(n.isTransition){var u=O.T,h={};O.T=h;try{var v=t(s,i),C=O.S;C!==null&&C(h,v),ud(e,n,v)}catch(D){ks(e,n,D)}finally{u!==null&&h.types!==null&&(u.types=h.types),O.T=u}}else try{u=t(s,i),ud(e,n,u)}catch(D){ks(e,n,D)}}function ud(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(i){cd(e,n,i)},function(i){return ks(e,n,i)}):cd(e,n,t)}function cd(e,n,t){n.status="fulfilled",n.value=t,fd(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,sd(e,t)))}function ks(e,n,t){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do n.status="rejected",n.reason=t,fd(n),n=n.next;while(n!==i)}e.action=null}function fd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function dd(e,n){return n}function hd(e,n){if(Ae){var t=qe.formState;if(t!==null){e:{var i=pe;if(Ae){if(Pe){n:{for(var s=Pe,u=Xn;s.nodeType!==8;){if(!u){s=null;break n}if(s=Zn(s.nextSibling),s===null){s=null;break n}}u=s.data,s=u==="F!"||u==="F"?s:null}if(s){Pe=Zn(s.nextSibling),i=s.data==="F!";break e}}qt(i)}i=!1}i&&(n=t[0])}}return t=bn(),t.memoizedState=t.baseState=n,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dd,lastRenderedState:n},t.queue=i,t=Md.bind(null,pe,i),i.dispatch=t,i=xs(!1),u=Ds.bind(null,pe,!1,i.queue),i=bn(),s={state:n,dispatch:null,action:e,pending:null},i.queue=s,t=qy.bind(null,pe,s,u,t),s.dispatch=t,i.memoizedState=e,[n,t,!1]}function md(e){var n=Ze();return pd(n,Ie,e)}function pd(e,n,t){if(n=Ss(e,n,dd)[0],e=gr(kt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var i=Ki(n)}catch(h){throw h===Ja?rr:h}else i=n;n=Ze();var s=n.queue,u=s.dispatch;return t!==n.memoizedState&&(pe.flags|=2048,ii(9,{destroy:void 0},jy.bind(null,s,t),null)),[i,u,e]}function jy(e,n){e.action=n}function gd(e){var n=Ze(),t=Ie;if(t!==null)return pd(n,t,e);Ze(),n=n.memoizedState,t=Ze();var i=t.queue.dispatch;return t.memoizedState=e,[n,i,!1]}function ii(e,n,t,i){return e={tag:e,create:t,deps:i,inst:n,next:null},n=pe.updateQueue,n===null&&(n=mr(),pe.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e),e}function yd(){return Ze().memoizedState}function yr(e,n,t,i){var s=bn();pe.flags|=e,s.memoizedState=ii(1|n,{destroy:void 0},t,i===void 0?null:i)}function br(e,n,t,i){var s=Ze();i=i===void 0?null:i;var u=s.memoizedState.inst;Ie!==null&&i!==null&&ms(i,Ie.memoizedState.deps)?s.memoizedState=ii(n,u,t,i):(pe.flags|=e,s.memoizedState=ii(1|n,u,t,i))}function bd(e,n){yr(8390656,8,e,n)}function Cs(e,n){br(2048,8,e,n)}function Yy(e){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=mr(),pe.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function vd(e){var n=Ze().memoizedState;return Yy({ref:n,nextImpl:e}),function(){if((Re&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}function Sd(e,n){return br(4,2,e,n)}function wd(e,n){return br(4,4,e,n)}function xd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function kd(e,n,t){t=t!=null?t.concat([e]):null,br(4,4,xd.bind(null,n,e),t)}function Ts(){}function Cd(e,n){var t=Ze();n=n===void 0?null:n;var i=t.memoizedState;return n!==null&&ms(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function Td(e,n){var t=Ze();n=n===void 0?null:n;var i=t.memoizedState;if(n!==null&&ms(n,i[1]))return i[0];if(i=e(),ka){vn(!0);try{e()}finally{vn(!1)}}return t.memoizedState=[i,n],i}function As(e,n,t){return t===void 0||(xt&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Ah(),pe.lanes|=e,Xt|=e,t)}function Ad(e,n,t,i){return On(t,n)?t:ni.current!==null?(e=As(e,t,i),On(e,n)||(en=!0),e):(xt&42)===0||(xt&1073741824)!==0&&(Ce&261930)===0?(en=!0,e.memoizedState=t):(e=Ah(),pe.lanes|=e,Xt|=e,n)}function Ed(e,n,t,i,s){var u=F.p;F.p=u!==0&&8>u?u:8;var h=O.T,v={};O.T=v,Ds(e,!1,n,t);try{var C=s(),D=O.S;if(D!==null&&D(v,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var N=Uy(C,i);Zi(e,n,N,Un(e))}else Zi(e,n,i,Un(e))}catch(P){Zi(e,n,{then:function(){},status:"rejected",reason:P},Un())}finally{F.p=u,h!==null&&v.types!==null&&(h.types=v.types),O.T=h}}function Py(){}function Es(e,n,t,i){if(e.tag!==5)throw Error(o(476));var s=_d(e).queue;Ed(e,s,n,te,t===null?Py:function(){return Dd(e),t(i)})}function _d(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:te},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Dd(e){var n=_d(e);n.next===null&&(n=e.alternate.memoizedState),Zi(e,n.next.queue,{},Un())}function _s(){return fn(ml)}function Rd(){return Ze().memoizedState}function Od(){return Ze().memoizedState}function Gy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Un();e=Pt(t);var i=Gt(n,e,t);i!==null&&(An(i,n,t),Fi(i,n,t)),n={cache:as()},e.payload=n;return}n=n.return}}function Wy(e,n,t){var i=Un();t={lane:i,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},vr(e)?Ld(n,t):(t=Fo(e,n,t,i),t!==null&&(An(t,e,i),zd(t,n,i)))}function Md(e,n,t){var i=Un();Zi(e,n,t,i)}function Zi(e,n,t,i){var s={lane:i,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(vr(e))Ld(n,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var h=n.lastRenderedState,v=u(h,t);if(s.hasEagerState=!0,s.eagerState=v,On(v,h))return Jl(e,n,s,0),qe===null&&$l(),!1}catch{}if(t=Fo(e,n,s,i),t!==null)return An(t,e,i),zd(t,n,i),!0}return!1}function Ds(e,n,t,i){if(i={lane:2,revertLane:ou(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},vr(e)){if(n)throw Error(o(479))}else n=Fo(e,t,i,2),n!==null&&An(n,e,2)}function vr(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function Ld(e,n){ti=dr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function zd(e,n,t){if((t&4194048)!==0){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Bc(e,t)}}var $i={readContext:fn,use:pr,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};$i.useEffectEvent=Qe;var Nd={readContext:fn,use:pr,useCallback:function(e,n){return bn().memoizedState=[e,n===void 0?null:n],e},useContext:fn,useEffect:bd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,yr(4194308,4,xd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return yr(4194308,4,e,n)},useInsertionEffect:function(e,n){yr(4,2,e,n)},useMemo:function(e,n){var t=bn();n=n===void 0?null:n;var i=e();if(ka){vn(!0);try{e()}finally{vn(!1)}}return t.memoizedState=[i,n],i},useReducer:function(e,n,t){var i=bn();if(t!==void 0){var s=t(n);if(ka){vn(!0);try{t(n)}finally{vn(!1)}}}else s=n;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=Wy.bind(null,pe,e),[i.memoizedState,e]},useRef:function(e){var n=bn();return e={current:e},n.memoizedState=e},useState:function(e){e=xs(e);var n=e.queue,t=Md.bind(null,pe,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Ts,useDeferredValue:function(e,n){var t=bn();return As(t,e,n)},useTransition:function(){var e=xs(!1);return e=Ed.bind(null,pe,e.queue,!0,!1),bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var i=pe,s=bn();if(Ae){if(t===void 0)throw Error(o(407));t=t()}else{if(t=n(),qe===null)throw Error(o(349));(Ce&127)!==0||td(i,n,t)}s.memoizedState=t;var u={value:t,getSnapshot:n};return s.queue=u,bd(id.bind(null,i,u,e),[e]),i.flags|=2048,ii(9,{destroy:void 0},ad.bind(null,i,u,t,n),null),t},useId:function(){var e=bn(),n=qe.identifierPrefix;if(Ae){var t=rt,i=lt;t=(i&~(1<<32-He(i)-1)).toString(32)+t,n="_"+n+"R_"+t,t=hr++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=By++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:_s,useFormState:hd,useActionState:hd,useOptimistic:function(e){var n=bn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Ds.bind(null,pe,!0,t),t.dispatch=n,[e,n]},useMemoCache:vs,useCacheRefresh:function(){return bn().memoizedState=Gy.bind(null,pe)},useEffectEvent:function(e){var n=bn(),t={impl:e};return n.memoizedState=t,function(){if((Re&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}},Rs={readContext:fn,use:pr,useCallback:Cd,useContext:fn,useEffect:Cs,useImperativeHandle:kd,useInsertionEffect:Sd,useLayoutEffect:wd,useMemo:Td,useReducer:gr,useRef:yd,useState:function(){return gr(kt)},useDebugValue:Ts,useDeferredValue:function(e,n){var t=Ze();return Ad(t,Ie.memoizedState,e,n)},useTransition:function(){var e=gr(kt)[0],n=Ze().memoizedState;return[typeof e=="boolean"?e:Ki(e),n]},useSyncExternalStore:nd,useId:Rd,useHostTransitionStatus:_s,useFormState:md,useActionState:md,useOptimistic:function(e,n){var t=Ze();return od(t,Ie,e,n)},useMemoCache:vs,useCacheRefresh:Od};Rs.useEffectEvent=vd;var Id={readContext:fn,use:pr,useCallback:Cd,useContext:fn,useEffect:Cs,useImperativeHandle:kd,useInsertionEffect:Sd,useLayoutEffect:wd,useMemo:Td,useReducer:ws,useRef:yd,useState:function(){return ws(kt)},useDebugValue:Ts,useDeferredValue:function(e,n){var t=Ze();return Ie===null?As(t,e,n):Ad(t,Ie.memoizedState,e,n)},useTransition:function(){var e=ws(kt)[0],n=Ze().memoizedState;return[typeof e=="boolean"?e:Ki(e),n]},useSyncExternalStore:nd,useId:Rd,useHostTransitionStatus:_s,useFormState:gd,useActionState:gd,useOptimistic:function(e,n){var t=Ze();return Ie!==null?od(t,Ie,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:vs,useCacheRefresh:Od};Id.useEffectEvent=vd;function Os(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:b({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ms={enqueueSetState:function(e,n,t){e=e._reactInternals;var i=Un(),s=Pt(i);s.payload=n,t!=null&&(s.callback=t),n=Gt(e,s,i),n!==null&&(An(n,e,i),Fi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=Un(),s=Pt(i);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=Gt(e,s,i),n!==null&&(An(n,e,i),Fi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Un(),i=Pt(t);i.tag=2,n!=null&&(i.callback=n),n=Gt(e,i,t),n!==null&&(An(n,e,t),Fi(n,e,t))}};function Ud(e,n,t,i,s,u,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,h):n.prototype&&n.prototype.isPureReactComponent?!Bi(t,i)||!Bi(s,u):!0}function Bd(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&Ms.enqueueReplaceState(n,n.state,null)}function Ca(e,n){var t=n;if("ref"in n){t={};for(var i in n)i!=="ref"&&(t[i]=n[i])}if(e=e.defaultProps){t===n&&(t=b({},t));for(var s in e)t[s]===void 0&&(t[s]=e[s])}return t}function Hd(e){Zl(e)}function qd(e){console.error(e)}function jd(e){Zl(e)}function Sr(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(i){setTimeout(function(){throw i})}}function Yd(e,n,t){try{var i=e.onCaughtError;i(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Ls(e,n,t){return t=Pt(t),t.tag=3,t.payload={element:null},t.callback=function(){Sr(e,n)},t}function Pd(e){return e=Pt(e),e.tag=3,e}function Gd(e,n,t,i){var s=t.type.getDerivedStateFromError;if(typeof s=="function"){var u=i.value;e.payload=function(){return s(u)},e.callback=function(){Yd(n,t,i)}}var h=t.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){Yd(n,t,i),typeof s!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})})}function Fy(e,n,t,i,s){if(t.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(n=t.alternate,n!==null&&Ka(n,t,s,!0),t=Ln.current,t!==null){switch(t.tag){case 31:case 13:return Kn===null?Mr():t.alternate===null&&Xe===0&&(Xe=3),t.flags&=-257,t.flags|=65536,t.lanes=s,i===or?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([i]):n.add(i),iu(e,i,s)),!1;case 22:return t.flags|=65536,i===or?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([i])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([i]):t.add(i)),iu(e,i,s)),!1}throw Error(o(435,t.tag))}return iu(e,i,s),Mr(),!1}if(Ae)return n=Ln.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=s,i!==$o&&(e=Error(o(422),{cause:i}),ji(Fn(e,t)))):(i!==$o&&(n=Error(o(423),{cause:i}),ji(Fn(n,t))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Fn(i,t),s=Ls(e.stateNode,i,s),us(e,s),Xe!==4&&(Xe=2)),!1;var u=Error(o(520),{cause:i});if(u=Fn(u,t),rl===null?rl=[u]:rl.push(u),Xe!==4&&(Xe=2),n===null)return!0;i=Fn(i,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=s&-s,t.lanes|=e,e=Ls(t.stateNode,i,e),us(t,e),!1;case 1:if(n=t.type,u=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Kt===null||!Kt.has(u))))return t.flags|=65536,s&=-s,t.lanes|=s,s=Pd(s),Gd(s,e,t,i),us(t,s),!1}t=t.return}while(t!==null);return!1}var zs=Error(o(461)),en=!1;function dn(e,n,t,i){n.child=e===null?Qf(n,null,t,i):xa(n,e.child,t,i)}function Wd(e,n,t,i,s){t=t.render;var u=n.ref;if("ref"in i){var h={};for(var v in i)v!=="ref"&&(h[v]=i[v])}else h=i;return ba(n),i=ps(e,n,t,h,u,s),v=gs(),e!==null&&!en?(ys(e,n,s),Ct(e,n,s)):(Ae&&v&&Ko(n),n.flags|=1,dn(e,n,i,s),n.child)}function Fd(e,n,t,i,s){if(e===null){var u=t.type;return typeof u=="function"&&!Vo(u)&&u.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=u,Vd(e,n,u,i,s)):(e=nr(t.type,null,i,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!Ys(e,s)){var h=u.memoizedProps;if(t=t.compare,t=t!==null?t:Bi,t(h,i)&&e.ref===n.ref)return Ct(e,n,s)}return n.flags|=1,e=bt(u,i),e.ref=n.ref,e.return=n,n.child=e}function Vd(e,n,t,i,s){if(e!==null){var u=e.memoizedProps;if(Bi(u,i)&&e.ref===n.ref)if(en=!1,n.pendingProps=i=u,Ys(e,s))(e.flags&131072)!==0&&(en=!0);else return n.lanes=e.lanes,Ct(e,n,s)}return Ns(e,n,t,i,s)}function Qd(e,n,t,i){var s=i.children,u=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|t:t,e!==null){for(i=n.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~u}else i=0,n.child=null;return Xd(e,n,u,t,i)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&lr(n,u!==null?u.cachePool:null),u!==null?Zf(n,u):fs(),$f(n);else return i=n.lanes=536870912,Xd(e,n,u!==null?u.baseLanes|t:t,t,i)}else u!==null?(lr(n,u.cachePool),Zf(n,u),Ft(),n.memoizedState=null):(e!==null&&lr(n,null),fs(),Ft());return dn(e,n,s,t),n.child}function Ji(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Xd(e,n,t,i,s){var u=ls();return u=u===null?null:{parent:$e._currentValue,pool:u},n.memoizedState={baseLanes:t,cachePool:u},e!==null&&lr(n,null),fs(),$f(n),e!==null&&Ka(e,n,i,!0),n.childLanes=s,null}function wr(e,n){return n=kr({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Kd(e,n,t){return xa(n,e.child,null,t),e=wr(n,n.pendingProps),e.flags|=2,zn(n),n.memoizedState=null,e}function Vy(e,n,t){var i=n.pendingProps,s=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(i.mode==="hidden")return e=wr(n,i),n.lanes=536870912,Ji(null,e);if(hs(n),(e=Pe)?(e=sm(e,Xn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Bt!==null?{id:lt,overflow:rt}:null,retryLane:536870912,hydrationErrors:null},t=Lf(e),t.return=n,n.child=t,cn=n,Pe=null)):e=null,e===null)throw qt(n);return n.lanes=536870912,null}return wr(n,i)}var u=e.memoizedState;if(u!==null){var h=u.dehydrated;if(hs(n),s)if(n.flags&256)n.flags&=-257,n=Kd(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(o(558));else if(en||Ka(e,n,t,!1),s=(t&e.childLanes)!==0,en||s){if(i=qe,i!==null&&(h=Hc(i,t),h!==0&&h!==u.retryLane))throw u.retryLane=h,ma(e,h),An(i,e,h),zs;Mr(),n=Kd(e,n,t)}else e=u.treeContext,Pe=Zn(h.nextSibling),cn=n,Ae=!0,Ht=null,Xn=!1,e!==null&&If(n,e),n=wr(n,i),n.flags|=4096;return n}return e=bt(e.child,{mode:i.mode,children:i.children}),e.ref=n.ref,n.child=e,e.return=n,e}function xr(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(o(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function Ns(e,n,t,i,s){return ba(n),t=ps(e,n,t,i,void 0,s),i=gs(),e!==null&&!en?(ys(e,n,s),Ct(e,n,s)):(Ae&&i&&Ko(n),n.flags|=1,dn(e,n,t,s),n.child)}function Zd(e,n,t,i,s,u){return ba(n),n.updateQueue=null,t=ed(n,i,t,s),Jf(e),i=gs(),e!==null&&!en?(ys(e,n,u),Ct(e,n,u)):(Ae&&i&&Ko(n),n.flags|=1,dn(e,n,t,u),n.child)}function $d(e,n,t,i,s){if(ba(n),n.stateNode===null){var u=Fa,h=t.contextType;typeof h=="object"&&h!==null&&(u=fn(h)),u=new t(i,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ms,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=i,u.state=n.memoizedState,u.refs={},os(n),h=t.contextType,u.context=typeof h=="object"&&h!==null?fn(h):Fa,u.state=n.memoizedState,h=t.getDerivedStateFromProps,typeof h=="function"&&(Os(n,t,h,i),u.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(h=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),h!==u.state&&Ms.enqueueReplaceState(u,u.state,null),Qi(n,i,u,s),Vi(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),i=!0}else if(e===null){u=n.stateNode;var v=n.memoizedProps,C=Ca(t,v);u.props=C;var D=u.context,N=t.contextType;h=Fa,typeof N=="object"&&N!==null&&(h=fn(N));var P=t.getDerivedStateFromProps;N=typeof P=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=n.pendingProps!==v,N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||D!==h)&&Bd(n,u,i,h),Yt=!1;var R=n.memoizedState;u.state=R,Qi(n,i,u,s),Vi(),D=n.memoizedState,v||R!==D||Yt?(typeof P=="function"&&(Os(n,t,P,i),D=n.memoizedState),(C=Yt||Ud(n,t,C,i,R,D,h))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=D),u.props=i,u.state=D,u.context=h,i=C):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{u=n.stateNode,ss(e,n),h=n.memoizedProps,N=Ca(t,h),u.props=N,P=n.pendingProps,R=u.context,D=t.contextType,C=Fa,typeof D=="object"&&D!==null&&(C=fn(D)),v=t.getDerivedStateFromProps,(D=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==P||R!==C)&&Bd(n,u,i,C),Yt=!1,R=n.memoizedState,u.state=R,Qi(n,i,u,s),Vi();var L=n.memoizedState;h!==P||R!==L||Yt||e!==null&&e.dependencies!==null&&ar(e.dependencies)?(typeof v=="function"&&(Os(n,t,v,i),L=n.memoizedState),(N=Yt||Ud(n,t,N,i,R,L,C)||e!==null&&e.dependencies!==null&&ar(e.dependencies))?(D||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,L,C),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,L,C)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=L),u.props=i,u.state=L,u.context=C,i=N):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),i=!1)}return u=i,xr(e,n),i=(n.flags&128)!==0,u||i?(u=n.stateNode,t=i&&typeof t.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,e!==null&&i?(n.child=xa(n,e.child,null,s),n.child=xa(n,null,t,s)):dn(e,n,t,s),n.memoizedState=u.state,e=n.child):e=Ct(e,n,s),e}function Jd(e,n,t,i){return ga(),n.flags|=256,dn(e,n,t,i),n.child}var Is={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Us(e){return{baseLanes:e,cachePool:Yf()}}function Bs(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=In),e}function eh(e,n,t){var i=n.pendingProps,s=!1,u=(n.flags&128)!==0,h;if((h=u)||(h=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),h&&(s=!0,n.flags&=-129),h=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(s?Wt(n):Ft(),(e=Pe)?(e=sm(e,Xn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Bt!==null?{id:lt,overflow:rt}:null,retryLane:536870912,hydrationErrors:null},t=Lf(e),t.return=n,n.child=t,cn=n,Pe=null)):e=null,e===null)throw qt(n);return Su(e)?n.lanes=32:n.lanes=536870912,null}var v=i.children;return i=i.fallback,s?(Ft(),s=n.mode,v=kr({mode:"hidden",children:v},s),i=pa(i,s,t,null),v.return=n,i.return=n,v.sibling=i,n.child=v,i=n.child,i.memoizedState=Us(t),i.childLanes=Bs(e,h,t),n.memoizedState=Is,Ji(null,i)):(Wt(n),Hs(n,v))}var C=e.memoizedState;if(C!==null&&(v=C.dehydrated,v!==null)){if(u)n.flags&256?(Wt(n),n.flags&=-257,n=qs(e,n,t)):n.memoizedState!==null?(Ft(),n.child=e.child,n.flags|=128,n=null):(Ft(),v=i.fallback,s=n.mode,i=kr({mode:"visible",children:i.children},s),v=pa(v,s,t,null),v.flags|=2,i.return=n,v.return=n,i.sibling=v,n.child=i,xa(n,e.child,null,t),i=n.child,i.memoizedState=Us(t),i.childLanes=Bs(e,h,t),n.memoizedState=Is,n=Ji(null,i));else if(Wt(n),Su(v)){if(h=v.nextSibling&&v.nextSibling.dataset,h)var D=h.dgst;h=D,i=Error(o(419)),i.stack="",i.digest=h,ji({value:i,source:null,stack:null}),n=qs(e,n,t)}else if(en||Ka(e,n,t,!1),h=(t&e.childLanes)!==0,en||h){if(h=qe,h!==null&&(i=Hc(h,t),i!==0&&i!==C.retryLane))throw C.retryLane=i,ma(e,i),An(h,e,i),zs;vu(v)||Mr(),n=qs(e,n,t)}else vu(v)?(n.flags|=192,n.child=e.child,n=null):(e=C.treeContext,Pe=Zn(v.nextSibling),cn=n,Ae=!0,Ht=null,Xn=!1,e!==null&&If(n,e),n=Hs(n,i.children),n.flags|=4096);return n}return s?(Ft(),v=i.fallback,s=n.mode,C=e.child,D=C.sibling,i=bt(C,{mode:"hidden",children:i.children}),i.subtreeFlags=C.subtreeFlags&65011712,D!==null?v=bt(D,v):(v=pa(v,s,t,null),v.flags|=2),v.return=n,i.return=n,i.sibling=v,n.child=i,Ji(null,i),i=n.child,v=e.child.memoizedState,v===null?v=Us(t):(s=v.cachePool,s!==null?(C=$e._currentValue,s=s.parent!==C?{parent:C,pool:C}:s):s=Yf(),v={baseLanes:v.baseLanes|t,cachePool:s}),i.memoizedState=v,i.childLanes=Bs(e,h,t),n.memoizedState=Is,Ji(e.child,i)):(Wt(n),t=e.child,e=t.sibling,t=bt(t,{mode:"visible",children:i.children}),t.return=n,t.sibling=null,e!==null&&(h=n.deletions,h===null?(n.deletions=[e],n.flags|=16):h.push(e)),n.child=t,n.memoizedState=null,t)}function Hs(e,n){return n=kr({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function kr(e,n){return e=Mn(22,e,null,n),e.lanes=0,e}function qs(e,n,t){return xa(n,e.child,null,t),e=Hs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function nh(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),ns(e.return,n,t)}function js(e,n,t,i,s,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:s,treeForkCount:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=i,h.tail=t,h.tailMode=s,h.treeForkCount=u)}function th(e,n,t){var i=n.pendingProps,s=i.revealOrder,u=i.tail;i=i.children;var h=Ke.current,v=(h&2)!==0;if(v?(h=h&1|2,n.flags|=128):h&=1,w(Ke,h),dn(e,n,i,t),i=Ae?qi:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nh(e,t,n);else if(e.tag===19)nh(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&fr(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),js(n,!1,s,t,u,i);break;case"backwards":case"unstable_legacy-backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&fr(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}js(n,!0,t,null,u,i);break;case"together":js(n,!1,null,null,void 0,i);break;default:n.memoizedState=null}return n.child}function Ct(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Xt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Ka(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,t=bt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=bt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ys(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ar(e)))}function Qy(e,n,t){switch(n.tag){case 3:We(n,n.stateNode.containerInfo),jt(n,$e,e.memoizedState.cache),ga();break;case 27:case 5:Yn(n);break;case 4:We(n,n.stateNode.containerInfo);break;case 10:jt(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,hs(n),null;break;case 13:var i=n.memoizedState;if(i!==null)return i.dehydrated!==null?(Wt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?eh(e,n,t):(Wt(n),e=Ct(e,n,t),e!==null?e.sibling:null);Wt(n);break;case 19:var s=(e.flags&128)!==0;if(i=(t&n.childLanes)!==0,i||(Ka(e,n,t,!1),i=(t&n.childLanes)!==0),s){if(i)return th(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),w(Ke,Ke.current),i)break;return null;case 22:return n.lanes=0,Qd(e,n,t,n.pendingProps);case 24:jt(n,$e,e.memoizedState.cache)}return Ct(e,n,t)}function ah(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)en=!0;else{if(!Ys(e,t)&&(n.flags&128)===0)return en=!1,Qy(e,n,t);en=(e.flags&131072)!==0}else en=!1,Ae&&(n.flags&1048576)!==0&&Nf(n,qi,n.index);switch(n.lanes=0,n.tag){case 16:e:{var i=n.pendingProps;if(e=Sa(n.elementType),n.type=e,typeof e=="function")Vo(e)?(i=Ca(e,i),n.tag=1,n=$d(null,n,e,i,t)):(n.tag=0,n=Ns(null,n,e,i,t));else{if(e!=null){var s=e.$$typeof;if(s===re){n.tag=11,n=Wd(null,n,e,i,t);break e}else if(s===K){n.tag=14,n=Fd(null,n,e,i,t);break e}}throw n=ae(e)||e,Error(o(306,n,""))}}return n;case 0:return Ns(e,n,n.type,n.pendingProps,t);case 1:return i=n.type,s=Ca(i,n.pendingProps),$d(e,n,i,s,t);case 3:e:{if(We(n,n.stateNode.containerInfo),e===null)throw Error(o(387));i=n.pendingProps;var u=n.memoizedState;s=u.element,ss(e,n),Qi(n,i,null,t);var h=n.memoizedState;if(i=h.cache,jt(n,$e,i),i!==u.cache&&ts(n,[$e],t,!0),Vi(),i=h.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:h.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=Jd(e,n,i,t);break e}else if(i!==s){s=Fn(Error(o(424)),n),ji(s),n=Jd(e,n,i,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Pe=Zn(e.firstChild),cn=n,Ae=!0,Ht=null,Xn=!0,t=Qf(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ga(),i===s){n=Ct(e,n,t);break e}dn(e,n,i,t)}n=n.child}return n;case 26:return xr(e,n),e===null?(t=mm(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ae||(t=n.type,e=n.pendingProps,i=Hr(ie.current).createElement(t),i[un]=n,i[Sn]=e,hn(i,t,e),rn(i),n.stateNode=i):n.memoizedState=mm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Yn(n),e===null&&Ae&&(i=n.stateNode=fm(n.type,n.pendingProps,ie.current),cn=n,Xn=!0,s=Pe,ea(n.type)?(wu=s,Pe=Zn(i.firstChild)):Pe=s),dn(e,n,n.pendingProps.children,t),xr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((s=i=Pe)&&(i=Cb(i,n.type,n.pendingProps,Xn),i!==null?(n.stateNode=i,cn=n,Pe=Zn(i.firstChild),Xn=!1,s=!0):s=!1),s||qt(n)),Yn(n),s=n.type,u=n.pendingProps,h=e!==null?e.memoizedProps:null,i=u.children,gu(s,u)?i=null:h!==null&&gu(s,h)&&(n.flags|=32),n.memoizedState!==null&&(s=ps(e,n,Hy,null,null,t),ml._currentValue=s),xr(e,n),dn(e,n,i,t),n.child;case 6:return e===null&&Ae&&((e=t=Pe)&&(t=Tb(t,n.pendingProps,Xn),t!==null?(n.stateNode=t,cn=n,Pe=null,e=!0):e=!1),e||qt(n)),null;case 13:return eh(e,n,t);case 4:return We(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=xa(n,null,i,t):dn(e,n,i,t),n.child;case 11:return Wd(e,n,n.type,n.pendingProps,t);case 7:return dn(e,n,n.pendingProps,t),n.child;case 8:return dn(e,n,n.pendingProps.children,t),n.child;case 12:return dn(e,n,n.pendingProps.children,t),n.child;case 10:return i=n.pendingProps,jt(n,n.type,i.value),dn(e,n,i.children,t),n.child;case 9:return s=n.type._context,i=n.pendingProps.children,ba(n),s=fn(s),i=i(s),n.flags|=1,dn(e,n,i,t),n.child;case 14:return Fd(e,n,n.type,n.pendingProps,t);case 15:return Vd(e,n,n.type,n.pendingProps,t);case 19:return th(e,n,t);case 31:return Vy(e,n,t);case 22:return Qd(e,n,t,n.pendingProps);case 24:return ba(n),i=fn($e),e===null?(s=ls(),s===null&&(s=qe,u=as(),s.pooledCache=u,u.refCount++,u!==null&&(s.pooledCacheLanes|=t),s=u),n.memoizedState={parent:i,cache:s},os(n),jt(n,$e,s)):((e.lanes&t)!==0&&(ss(e,n),Qi(n,null,null,t),Vi()),s=e.memoizedState,u=n.memoizedState,s.parent!==i?(s={parent:i,cache:i},n.memoizedState=s,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=s),jt(n,$e,i)):(i=u.cache,jt(n,$e,i),i!==s.cache&&ts(n,[$e],t,!0))),dn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function Tt(e){e.flags|=4}function Ps(e,n,t,i,s){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Rh())e.flags|=8192;else throw wa=or,rs}else e.flags&=-16777217}function ih(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vm(n))if(Rh())e.flags|=8192;else throw wa=or,rs}function Cr(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ic():536870912,e.lanes|=n,si|=n)}function el(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ge(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function Xy(e,n,t){var i=n.pendingProps;switch(Zo(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(n),null;case 1:return Ge(n),null;case 3:return t=n.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),wt($e),Ne(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Xa(n)?Tt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Jo())),Ge(n),null;case 26:var s=n.type,u=n.memoizedState;return e===null?(Tt(n),u!==null?(Ge(n),ih(n,u)):(Ge(n),Ps(n,s,null,i,t))):u?u!==e.memoizedState?(Tt(n),Ge(n),ih(n,u)):(Ge(n),n.flags&=-16777217):(e=e.memoizedProps,e!==i&&Tt(n),Ge(n),Ps(n,s,e,i,t)),null;case 27:if(dt(n),t=ie.current,s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&Tt(n);else{if(!i){if(n.stateNode===null)throw Error(o(166));return Ge(n),null}e=Z.current,Xa(n)?Uf(n):(e=fm(s,i,t),n.stateNode=e,Tt(n))}return Ge(n),null;case 5:if(dt(n),s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&Tt(n);else{if(!i){if(n.stateNode===null)throw Error(o(166));return Ge(n),null}if(u=Z.current,Xa(n))Uf(n);else{var h=Hr(ie.current);switch(u){case 1:u=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:u=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":u=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":u=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":u=h.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?h.createElement("select",{is:i.is}):h.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?h.createElement(s,{is:i.is}):h.createElement(s)}}u[un]=n,u[Sn]=i;e:for(h=n.child;h!==null;){if(h.tag===5||h.tag===6)u.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}n.stateNode=u;e:switch(hn(u,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Tt(n)}}return Ge(n),Ps(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==i&&Tt(n);else{if(typeof i!="string"&&n.stateNode===null)throw Error(o(166));if(e=ie.current,Xa(n)){if(e=n.stateNode,t=n.memoizedProps,i=null,s=cn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[un]=n,e=!!(e.nodeValue===t||i!==null&&i.suppressHydrationWarning===!0||em(e.nodeValue,t)),e||qt(n,!0)}else e=Hr(e).createTextNode(i),e[un]=n,n.stateNode=e}return Ge(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(i=Xa(n),t!==null){if(e===null){if(!i)throw Error(o(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[un]=n}else ga(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ge(n),e=!1}else t=Jo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(zn(n),n):(zn(n),null);if((n.flags&128)!==0)throw Error(o(558))}return Ge(n),null;case 13:if(i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Xa(n),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[un]=n}else ga(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ge(n),s=!1}else s=Jo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return n.flags&256?(zn(n),n):(zn(n),null)}return zn(n),(n.flags&128)!==0?(n.lanes=t,n):(t=i!==null,e=e!==null&&e.memoizedState!==null,t&&(i=n.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==s&&(i.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Cr(n,n.updateQueue),Ge(n),null);case 4:return Ne(),e===null&&fu(n.stateNode.containerInfo),Ge(n),null;case 10:return wt(n.type),Ge(n),null;case 19:if(H(Ke),i=n.memoizedState,i===null)return Ge(n),null;if(s=(n.flags&128)!==0,u=i.rendering,u===null)if(s)el(i,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=fr(e),u!==null){for(n.flags|=128,el(i,!1),e=u.updateQueue,n.updateQueue=e,Cr(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Mf(t,e),t=t.sibling;return w(Ke,Ke.current&1|2),Ae&&vt(n,i.treeForkCount),n.child}e=e.sibling}i.tail!==null&&gn()>Dr&&(n.flags|=128,s=!0,el(i,!1),n.lanes=4194304)}else{if(!s)if(e=fr(u),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Cr(n,e),el(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Ae)return Ge(n),null}else 2*gn()-i.renderingStartTime>Dr&&t!==536870912&&(n.flags|=128,s=!0,el(i,!1),n.lanes=4194304);i.isBackwards?(u.sibling=n.child,n.child=u):(e=i.last,e!==null?e.sibling=u:n.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=gn(),e.sibling=null,t=Ke.current,w(Ke,s?t&1|2:t&1),Ae&&vt(n,i.treeForkCount),e):(Ge(n),null);case 22:case 23:return zn(n),ds(),i=n.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(n.flags|=8192):i&&(n.flags|=8192),i?(t&536870912)!==0&&(n.flags&128)===0&&(Ge(n),n.subtreeFlags&6&&(n.flags|=8192)):Ge(n),t=n.updateQueue,t!==null&&Cr(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==t&&(n.flags|=2048),e!==null&&H(va),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),wt($e),Ge(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function Ky(e,n){switch(Zo(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return wt($e),Ne(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(zn(n),n.alternate===null)throw Error(o(340));ga()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));ga()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return H(Ke),null;case 4:return Ne(),null;case 10:return wt(n.type),null;case 22:case 23:return zn(n),ds(),e!==null&&H(va),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return wt($e),null;case 25:return null;default:return null}}function lh(e,n){switch(Zo(n),n.tag){case 3:wt($e),Ne();break;case 26:case 27:case 5:dt(n);break;case 4:Ne();break;case 31:n.memoizedState!==null&&zn(n);break;case 13:zn(n);break;case 19:H(Ke);break;case 10:wt(n.type);break;case 22:case 23:zn(n),ds(),e!==null&&H(va);break;case 24:wt($e)}}function nl(e,n){try{var t=n.updateQueue,i=t!==null?t.lastEffect:null;if(i!==null){var s=i.next;t=s;do{if((t.tag&e)===e){i=void 0;var u=t.create,h=t.inst;i=u(),h.destroy=i}t=t.next}while(t!==s)}}catch(v){ze(n,n.return,v)}}function Vt(e,n,t){try{var i=n.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var u=s.next;i=u;do{if((i.tag&e)===e){var h=i.inst,v=h.destroy;if(v!==void 0){h.destroy=void 0,s=n;var C=t,D=v;try{D()}catch(N){ze(s,C,N)}}}i=i.next}while(i!==u)}}catch(N){ze(n,n.return,N)}}function rh(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Kf(n,t)}catch(i){ze(e,e.return,i)}}}function oh(e,n,t){t.props=Ca(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(i){ze(e,n,i)}}function tl(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof t=="function"?e.refCleanup=t(i):t.current=i}}catch(s){ze(e,n,s)}}function ot(e,n){var t=e.ref,i=e.refCleanup;if(t!==null)if(typeof i=="function")try{i()}catch(s){ze(e,n,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(s){ze(e,n,s)}else t.current=null}function sh(e){var n=e.type,t=e.memoizedProps,i=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&i.focus();break e;case"img":t.src?i.src=t.src:t.srcSet&&(i.srcset=t.srcSet)}}catch(s){ze(e,e.return,s)}}function Gs(e,n,t){try{var i=e.stateNode;bb(i,e.type,t,n),i[Sn]=n}catch(s){ze(e,e.return,s)}}function uh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ea(e.type)||e.tag===4}function Ws(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fs(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=gt));else if(i!==4&&(i===27&&ea(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Fs(e,n,t),e=e.sibling;e!==null;)Fs(e,n,t),e=e.sibling}function Tr(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(i===27&&ea(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Tr(e,n,t),e=e.sibling;e!==null;)Tr(e,n,t),e=e.sibling}function ch(e){var n=e.stateNode,t=e.memoizedProps;try{for(var i=e.type,s=n.attributes;s.length;)n.removeAttributeNode(s[0]);hn(n,i,t),n[un]=e,n[Sn]=t}catch(u){ze(e,e.return,u)}}var At=!1,nn=!1,Vs=!1,fh=typeof WeakSet=="function"?WeakSet:Set,on=null;function Zy(e,n){if(e=e.containerInfo,mu=Fr,e=kf(e),qo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var s=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{t.nodeType,u.nodeType}catch{t=null;break e}var h=0,v=-1,C=-1,D=0,N=0,P=e,R=null;n:for(;;){for(var L;P!==t||s!==0&&P.nodeType!==3||(v=h+s),P!==u||i!==0&&P.nodeType!==3||(C=h+i),P.nodeType===3&&(h+=P.nodeValue.length),(L=P.firstChild)!==null;)R=P,P=L;for(;;){if(P===e)break n;if(R===t&&++D===s&&(v=h),R===u&&++N===i&&(C=h),(L=P.nextSibling)!==null)break;P=R,R=P.parentNode}P=L}t=v===-1||C===-1?null:{start:v,end:C}}else t=null}t=t||{start:0,end:0}}else t=null;for(pu={focusedElem:e,selectionRange:t},Fr=!1,on=n;on!==null;)if(n=on,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,on=e;else for(;on!==null;){switch(n=on,u=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)s=e[t],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,t=n,s=u.memoizedProps,u=u.memoizedState,i=t.stateNode;try{var J=Ca(t.type,s);e=i.getSnapshotBeforeUpdate(J,u),i.__reactInternalSnapshotBeforeUpdate=e}catch(se){ze(t,t.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)bu(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=n.sibling,e!==null){e.return=n.return,on=e;break}on=n.return}}function dh(e,n,t){var i=t.flags;switch(t.tag){case 0:case 11:case 15:_t(e,t),i&4&&nl(5,t);break;case 1:if(_t(e,t),i&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(h){ze(t,t.return,h)}else{var s=Ca(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(s,n,e.__reactInternalSnapshotBeforeUpdate)}catch(h){ze(t,t.return,h)}}i&64&&rh(t),i&512&&tl(t,t.return);break;case 3:if(_t(e,t),i&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Kf(e,n)}catch(h){ze(t,t.return,h)}}break;case 27:n===null&&i&4&&ch(t);case 26:case 5:_t(e,t),n===null&&i&4&&sh(t),i&512&&tl(t,t.return);break;case 12:_t(e,t);break;case 31:_t(e,t),i&4&&ph(e,t);break;case 13:_t(e,t),i&4&&gh(e,t),i&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=rb.bind(null,t),Ab(e,t))));break;case 22:if(i=t.memoizedState!==null||At,!i){n=n!==null&&n.memoizedState!==null||nn,s=At;var u=nn;At=i,(nn=n)&&!u?Dt(e,t,(t.subtreeFlags&8772)!==0):_t(e,t),At=s,nn=u}break;case 30:break;default:_t(e,t)}}function hh(e){var n=e.alternate;n!==null&&(e.alternate=null,hh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ko(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Fe=null,xn=!1;function Et(e,n,t){for(t=t.child;t!==null;)mh(e,n,t),t=t.sibling}function mh(e,n,t){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(yn,t)}catch{}switch(t.tag){case 26:nn||ot(t,n),Et(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:nn||ot(t,n);var i=Fe,s=xn;ea(t.type)&&(Fe=t.stateNode,xn=!1),Et(e,n,t),fl(t.stateNode),Fe=i,xn=s;break;case 5:nn||ot(t,n);case 6:if(i=Fe,s=xn,Fe=null,Et(e,n,t),Fe=i,xn=s,Fe!==null)if(xn)try{(Fe.nodeType===9?Fe.body:Fe.nodeName==="HTML"?Fe.ownerDocument.body:Fe).removeChild(t.stateNode)}catch(u){ze(t,n,u)}else try{Fe.removeChild(t.stateNode)}catch(u){ze(t,n,u)}break;case 18:Fe!==null&&(xn?(e=Fe,rm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),gi(e)):rm(Fe,t.stateNode));break;case 4:i=Fe,s=xn,Fe=t.stateNode.containerInfo,xn=!0,Et(e,n,t),Fe=i,xn=s;break;case 0:case 11:case 14:case 15:Vt(2,t,n),nn||Vt(4,t,n),Et(e,n,t);break;case 1:nn||(ot(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"&&oh(t,n,i)),Et(e,n,t);break;case 21:Et(e,n,t);break;case 22:nn=(i=nn)||t.memoizedState!==null,Et(e,n,t),nn=i;break;default:Et(e,n,t)}}function ph(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{gi(e)}catch(t){ze(n,n.return,t)}}}function gh(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gi(e)}catch(t){ze(n,n.return,t)}}function $y(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new fh),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new fh),n;default:throw Error(o(435,e.tag))}}function Ar(e,n){var t=$y(e);n.forEach(function(i){if(!t.has(i)){t.add(i);var s=ob.bind(null,e,i);i.then(s,s)}})}function kn(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var s=t[i],u=e,h=n,v=h;e:for(;v!==null;){switch(v.tag){case 27:if(ea(v.type)){Fe=v.stateNode,xn=!1;break e}break;case 5:Fe=v.stateNode,xn=!1;break e;case 3:case 4:Fe=v.stateNode.containerInfo,xn=!0;break e}v=v.return}if(Fe===null)throw Error(o(160));mh(u,h,s),Fe=null,xn=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)yh(n,e),n=n.sibling}var tt=null;function yh(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Cn(e),i&4&&(Vt(3,e,e.return),nl(3,e),Vt(5,e,e.return));break;case 1:kn(n,e),Cn(e),i&512&&(nn||t===null||ot(t,t.return)),i&64&&At&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?i:t.concat(i))));break;case 26:var s=tt;if(kn(n,e),Cn(e),i&512&&(nn||t===null||ot(t,t.return)),i&4){var u=t!==null?t.memoizedState:null;if(i=e.memoizedState,t===null)if(i===null)if(e.stateNode===null){e:{i=e.type,t=e.memoizedProps,s=s.ownerDocument||s;n:switch(i){case"title":u=s.getElementsByTagName("title")[0],(!u||u[Di]||u[un]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=s.createElement(i),s.head.insertBefore(u,s.querySelector("head > title"))),hn(u,i,t),u[un]=e,rn(u),i=u;break e;case"link":var h=ym("link","href",s).get(i+(t.href||""));if(h){for(var v=0;v<h.length;v++)if(u=h[v],u.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&u.getAttribute("rel")===(t.rel==null?null:t.rel)&&u.getAttribute("title")===(t.title==null?null:t.title)&&u.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){h.splice(v,1);break n}}u=s.createElement(i),hn(u,i,t),s.head.appendChild(u);break;case"meta":if(h=ym("meta","content",s).get(i+(t.content||""))){for(v=0;v<h.length;v++)if(u=h[v],u.getAttribute("content")===(t.content==null?null:""+t.content)&&u.getAttribute("name")===(t.name==null?null:t.name)&&u.getAttribute("property")===(t.property==null?null:t.property)&&u.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&u.getAttribute("charset")===(t.charSet==null?null:t.charSet)){h.splice(v,1);break n}}u=s.createElement(i),hn(u,i,t),s.head.appendChild(u);break;default:throw Error(o(468,i))}u[un]=e,rn(u),i=u}e.stateNode=i}else bm(s,e.type,e.stateNode);else e.stateNode=gm(s,i,e.memoizedProps);else u!==i?(u===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):u.count--,i===null?bm(s,e.type,e.stateNode):gm(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Gs(e,e.memoizedProps,t.memoizedProps)}break;case 27:kn(n,e),Cn(e),i&512&&(nn||t===null||ot(t,t.return)),t!==null&&i&4&&Gs(e,e.memoizedProps,t.memoizedProps);break;case 5:if(kn(n,e),Cn(e),i&512&&(nn||t===null||ot(t,t.return)),e.flags&32){s=e.stateNode;try{Ha(s,"")}catch(J){ze(e,e.return,J)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Gs(e,s,t!==null?t.memoizedProps:s)),i&1024&&(Vs=!0);break;case 6:if(kn(n,e),Cn(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,t=e.stateNode;try{t.nodeValue=i}catch(J){ze(e,e.return,J)}}break;case 3:if(Yr=null,s=tt,tt=qr(n.containerInfo),kn(n,e),tt=s,Cn(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{gi(n.containerInfo)}catch(J){ze(e,e.return,J)}Vs&&(Vs=!1,bh(e));break;case 4:i=tt,tt=qr(e.stateNode.containerInfo),kn(n,e),Cn(e),tt=i;break;case 12:kn(n,e),Cn(e);break;case 31:kn(n,e),Cn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ar(e,i)));break;case 13:kn(n,e),Cn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(_r=gn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ar(e,i)));break;case 22:s=e.memoizedState!==null;var C=t!==null&&t.memoizedState!==null,D=At,N=nn;if(At=D||s,nn=N||C,kn(n,e),nn=N,At=D,Cn(e),i&8192)e:for(n=e.stateNode,n._visibility=s?n._visibility&-2:n._visibility|1,s&&(t===null||C||At||nn||Ta(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){C=t=n;try{if(u=C.stateNode,s)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{v=C.stateNode;var P=C.memoizedProps.style,R=P!=null&&P.hasOwnProperty("display")?P.display:null;v.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(J){ze(C,C.return,J)}}}else if(n.tag===6){if(t===null){C=n;try{C.stateNode.nodeValue=s?"":C.memoizedProps}catch(J){ze(C,C.return,J)}}}else if(n.tag===18){if(t===null){C=n;try{var L=C.stateNode;s?om(L,!0):om(C.stateNode,!1)}catch(J){ze(C,C.return,J)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}i&4&&(i=e.updateQueue,i!==null&&(t=i.retryQueue,t!==null&&(i.retryQueue=null,Ar(e,t))));break;case 19:kn(n,e),Cn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ar(e,i)));break;case 30:break;case 21:break;default:kn(n,e),Cn(e)}}function Cn(e){var n=e.flags;if(n&2){try{for(var t,i=e.return;i!==null;){if(uh(i)){t=i;break}i=i.return}if(t==null)throw Error(o(160));switch(t.tag){case 27:var s=t.stateNode,u=Ws(e);Tr(e,u,s);break;case 5:var h=t.stateNode;t.flags&32&&(Ha(h,""),t.flags&=-33);var v=Ws(e);Tr(e,v,h);break;case 3:case 4:var C=t.stateNode.containerInfo,D=Ws(e);Fs(e,D,C);break;default:throw Error(o(161))}}catch(N){ze(e,e.return,N)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function bh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;bh(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function _t(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)dh(e,n.alternate,n),n=n.sibling}function Ta(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Vt(4,n,n.return),Ta(n);break;case 1:ot(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&oh(n,n.return,t),Ta(n);break;case 27:fl(n.stateNode);case 26:case 5:ot(n,n.return),Ta(n);break;case 22:n.memoizedState===null&&Ta(n);break;case 30:Ta(n);break;default:Ta(n)}e=e.sibling}}function Dt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var i=n.alternate,s=e,u=n,h=u.flags;switch(u.tag){case 0:case 11:case 15:Dt(s,u,t),nl(4,u);break;case 1:if(Dt(s,u,t),i=u,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(D){ze(i,i.return,D)}if(i=u,s=i.updateQueue,s!==null){var v=i.stateNode;try{var C=s.shared.hiddenCallbacks;if(C!==null)for(s.shared.hiddenCallbacks=null,s=0;s<C.length;s++)Xf(C[s],v)}catch(D){ze(i,i.return,D)}}t&&h&64&&rh(u),tl(u,u.return);break;case 27:ch(u);case 26:case 5:Dt(s,u,t),t&&i===null&&h&4&&sh(u),tl(u,u.return);break;case 12:Dt(s,u,t);break;case 31:Dt(s,u,t),t&&h&4&&ph(s,u);break;case 13:Dt(s,u,t),t&&h&4&&gh(s,u);break;case 22:u.memoizedState===null&&Dt(s,u,t),tl(u,u.return);break;case 30:break;default:Dt(s,u,t)}n=n.sibling}}function Qs(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Yi(t))}function Xs(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yi(e))}function at(e,n,t,i){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)vh(e,n,t,i),n=n.sibling}function vh(e,n,t,i){var s=n.flags;switch(n.tag){case 0:case 11:case 15:at(e,n,t,i),s&2048&&nl(9,n);break;case 1:at(e,n,t,i);break;case 3:at(e,n,t,i),s&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yi(e)));break;case 12:if(s&2048){at(e,n,t,i),e=n.stateNode;try{var u=n.memoizedProps,h=u.id,v=u.onPostCommit;typeof v=="function"&&v(h,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){ze(n,n.return,C)}}else at(e,n,t,i);break;case 31:at(e,n,t,i);break;case 13:at(e,n,t,i);break;case 23:break;case 22:u=n.stateNode,h=n.alternate,n.memoizedState!==null?u._visibility&2?at(e,n,t,i):al(e,n):u._visibility&2?at(e,n,t,i):(u._visibility|=2,li(e,n,t,i,(n.subtreeFlags&10256)!==0||!1)),s&2048&&Qs(h,n);break;case 24:at(e,n,t,i),s&2048&&Xs(n.alternate,n);break;default:at(e,n,t,i)}}function li(e,n,t,i,s){for(s=s&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=e,h=n,v=t,C=i,D=h.flags;switch(h.tag){case 0:case 11:case 15:li(u,h,v,C,s),nl(8,h);break;case 23:break;case 22:var N=h.stateNode;h.memoizedState!==null?N._visibility&2?li(u,h,v,C,s):al(u,h):(N._visibility|=2,li(u,h,v,C,s)),s&&D&2048&&Qs(h.alternate,h);break;case 24:li(u,h,v,C,s),s&&D&2048&&Xs(h.alternate,h);break;default:li(u,h,v,C,s)}n=n.sibling}}function al(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,i=n,s=i.flags;switch(i.tag){case 22:al(t,i),s&2048&&Qs(i.alternate,i);break;case 24:al(t,i),s&2048&&Xs(i.alternate,i);break;default:al(t,i)}n=n.sibling}}var il=8192;function ri(e,n,t){if(e.subtreeFlags&il)for(e=e.child;e!==null;)Sh(e,n,t),e=e.sibling}function Sh(e,n,t){switch(e.tag){case 26:ri(e,n,t),e.flags&il&&e.memoizedState!==null&&Bb(t,tt,e.memoizedState,e.memoizedProps);break;case 5:ri(e,n,t);break;case 3:case 4:var i=tt;tt=qr(e.stateNode.containerInfo),ri(e,n,t),tt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=il,il=16777216,ri(e,n,t),il=i):ri(e,n,t));break;default:ri(e,n,t)}}function wh(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var i=n[t];on=i,kh(i,e)}wh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xh(e),e=e.sibling}function xh(e){switch(e.tag){case 0:case 11:case 15:ll(e),e.flags&2048&&Vt(9,e,e.return);break;case 3:ll(e);break;case 12:ll(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Er(e)):ll(e);break;default:ll(e)}}function Er(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var i=n[t];on=i,kh(i,e)}wh(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Vt(8,n,n.return),Er(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Er(n));break;default:Er(n)}e=e.sibling}}function kh(e,n){for(;on!==null;){var t=on;switch(t.tag){case 0:case 11:case 15:Vt(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var i=t.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Yi(t.memoizedState.cache)}if(i=t.child,i!==null)i.return=t,on=i;else e:for(t=e;on!==null;){i=on;var s=i.sibling,u=i.return;if(hh(i),i===t){on=null;break e}if(s!==null){s.return=u,on=s;break e}on=u}}}var Jy={getCacheForType:function(e){var n=fn($e),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return fn($e).controller.signal}},eb=typeof WeakMap=="function"?WeakMap:Map,Re=0,qe=null,we=null,Ce=0,Le=0,Nn=null,Qt=!1,oi=!1,Ks=!1,Rt=0,Xe=0,Xt=0,Aa=0,Zs=0,In=0,si=0,rl=null,Tn=null,$s=!1,_r=0,Ch=0,Dr=1/0,Rr=null,Kt=null,ln=0,Zt=null,ui=null,Ot=0,Js=0,eu=null,Th=null,ol=0,nu=null;function Un(){return(Re&2)!==0&&Ce!==0?Ce&-Ce:O.T!==null?ou():qc()}function Ah(){if(In===0)if((Ce&536870912)===0||Ae){var e=Bl;Bl<<=1,(Bl&3932160)===0&&(Bl=262144),In=e}else In=536870912;return e=Ln.current,e!==null&&(e.flags|=32),In}function An(e,n,t){(e===qe&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(ci(e,0),$t(e,Ce,In,!1)),_i(e,t),((Re&2)===0||e!==qe)&&(e===qe&&((Re&2)===0&&(Aa|=t),Xe===4&&$t(e,Ce,In,!1)),st(e))}function Eh(e,n,t){if((Re&6)!==0)throw Error(o(327));var i=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Ei(e,n),s=i?ab(e,n):au(e,n,!0),u=i;do{if(s===0){oi&&!i&&$t(e,n,0,!1);break}else{if(t=e.current.alternate,u&&!nb(t)){s=au(e,n,!1),u=!1;continue}if(s===2){if(u=n,e.errorRecoveryDisabledLanes&u)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){n=h;e:{var v=e;s=rl;var C=v.current.memoizedState.isDehydrated;if(C&&(ci(v,h).flags|=256),h=au(v,h,!1),h!==2){if(Ks&&!C){v.errorRecoveryDisabledLanes|=u,Aa|=u,s=4;break e}u=Tn,Tn=s,u!==null&&(Tn===null?Tn=u:Tn.push.apply(Tn,u))}s=h}if(u=!1,s!==2)continue}}if(s===1){ci(e,0),$t(e,n,0,!0);break}e:{switch(i=e,u=s,u){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:$t(i,n,In,!Qt);break e;case 2:Tn=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(s=_r+300-gn(),10<s)){if($t(i,n,In,!Qt),ql(i,0,!0)!==0)break e;Ot=n,i.timeoutHandle=im(_h.bind(null,i,t,Tn,Rr,$s,n,In,Aa,si,Qt,u,"Throttled",-0,0),s);break e}_h(i,t,Tn,Rr,$s,n,In,Aa,si,Qt,u,null,-0,0)}}break}while(!0);st(e)}function _h(e,n,t,i,s,u,h,v,C,D,N,P,R,L){if(e.timeoutHandle=-1,P=n.subtreeFlags,P&8192||(P&16785408)===16785408){P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gt},Sh(n,u,P);var J=(u&62914560)===u?_r-gn():(u&4194048)===u?Ch-gn():0;if(J=Hb(P,J),J!==null){Ot=u,e.cancelPendingCommit=J(Ih.bind(null,e,n,u,t,i,s,h,v,C,N,P,null,R,L)),$t(e,u,h,!D);return}}Ih(e,n,u,t,i,s,h,v,C)}function nb(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var i=0;i<t.length;i++){var s=t[i],u=s.getSnapshot;s=s.value;try{if(!On(u(),s))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $t(e,n,t,i){n&=~Zs,n&=~Aa,e.suspendedLanes|=n,e.pingedLanes&=~n,i&&(e.warmLanes|=n),i=e.expirationTimes;for(var s=n;0<s;){var u=31-He(s),h=1<<u;i[u]=-1,s&=~h}t!==0&&Uc(e,t,n)}function Or(){return(Re&6)===0?(sl(0),!1):!0}function tu(){if(we!==null){if(Le===0)var e=we.return;else e=we,St=ya=null,bs(e),ei=null,Gi=0,e=we;for(;e!==null;)lh(e.alternate,e),e=e.return;we=null}}function ci(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,wb(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Ot=0,tu(),qe=e,we=t=bt(e.current,null),Ce=n,Le=0,Nn=null,Qt=!1,oi=Ei(e,n),Ks=!1,si=In=Zs=Aa=Xt=Xe=0,Tn=rl=null,$s=!1,(n&8)!==0&&(n|=n&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=n;0<i;){var s=31-He(i),u=1<<s;n|=e[s],i&=~u}return Rt=n,$l(),t}function Dh(e,n){pe=null,O.H=$i,n===Ja||n===rr?(n=Wf(),Le=3):n===rs?(n=Wf(),Le=4):Le=n===zs?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Nn=n,we===null&&(Xe=1,Sr(e,Fn(n,e.current)))}function Rh(){var e=Ln.current;return e===null?!0:(Ce&4194048)===Ce?Kn===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===Kn:!1}function Oh(){var e=O.H;return O.H=$i,e===null?$i:e}function Mh(){var e=O.A;return O.A=Jy,e}function Mr(){Xe=4,Qt||(Ce&4194048)!==Ce&&Ln.current!==null||(oi=!0),(Xt&134217727)===0&&(Aa&134217727)===0||qe===null||$t(qe,Ce,In,!1)}function au(e,n,t){var i=Re;Re|=2;var s=Oh(),u=Mh();(qe!==e||Ce!==n)&&(Rr=null,ci(e,n)),n=!1;var h=Xe;e:do try{if(Le!==0&&we!==null){var v=we,C=Nn;switch(Le){case 8:tu(),h=6;break e;case 3:case 2:case 9:case 6:Ln.current===null&&(n=!0);var D=Le;if(Le=0,Nn=null,fi(e,v,C,D),t&&oi){h=0;break e}break;default:D=Le,Le=0,Nn=null,fi(e,v,C,D)}}tb(),h=Xe;break}catch(N){Dh(e,N)}while(!0);return n&&e.shellSuspendCounter++,St=ya=null,Re=i,O.H=s,O.A=u,we===null&&(qe=null,Ce=0,$l()),h}function tb(){for(;we!==null;)Lh(we)}function ab(e,n){var t=Re;Re|=2;var i=Oh(),s=Mh();qe!==e||Ce!==n?(Rr=null,Dr=gn()+500,ci(e,n)):oi=Ei(e,n);e:do try{if(Le!==0&&we!==null){n=we;var u=Nn;n:switch(Le){case 1:Le=0,Nn=null,fi(e,n,u,1);break;case 2:case 9:if(Pf(u)){Le=0,Nn=null,zh(n);break}n=function(){Le!==2&&Le!==9||qe!==e||(Le=7),st(e)},u.then(n,n);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:Pf(u)?(Le=0,Nn=null,zh(n)):(Le=0,Nn=null,fi(e,n,u,7));break;case 5:var h=null;switch(we.tag){case 26:h=we.memoizedState;case 5:case 27:var v=we;if(h?vm(h):v.stateNode.complete){Le=0,Nn=null;var C=v.sibling;if(C!==null)we=C;else{var D=v.return;D!==null?(we=D,Lr(D)):we=null}break n}}Le=0,Nn=null,fi(e,n,u,5);break;case 6:Le=0,Nn=null,fi(e,n,u,6);break;case 8:tu(),Xe=6;break e;default:throw Error(o(462))}}ib();break}catch(N){Dh(e,N)}while(!0);return St=ya=null,O.H=i,O.A=s,Re=t,we!==null?0:(qe=null,Ce=0,$l(),Xe)}function ib(){for(;we!==null&&!go();)Lh(we)}function Lh(e){var n=ah(e.alternate,e,Rt);e.memoizedProps=e.pendingProps,n===null?Lr(e):we=n}function zh(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Zd(t,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=Zd(t,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:bs(n);default:lh(t,n),n=we=Mf(n,Rt),n=ah(t,n,Rt)}e.memoizedProps=e.pendingProps,n===null?Lr(e):we=n}function fi(e,n,t,i){St=ya=null,bs(n),ei=null,Gi=0;var s=n.return;try{if(Fy(e,s,n,t,Ce)){Xe=1,Sr(e,Fn(t,e.current)),we=null;return}}catch(u){if(s!==null)throw we=s,u;Xe=1,Sr(e,Fn(t,e.current)),we=null;return}n.flags&32768?(Ae||i===1?e=!0:oi||(Ce&536870912)!==0?e=!1:(Qt=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ln.current,i!==null&&i.tag===13&&(i.flags|=16384))),Nh(n,e)):Lr(n)}function Lr(e){var n=e;do{if((n.flags&32768)!==0){Nh(n,Qt);return}e=n.return;var t=Xy(n.alternate,n,Rt);if(t!==null){we=t;return}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);Xe===0&&(Xe=5)}function Nh(e,n){do{var t=Ky(e.alternate,e);if(t!==null){t.flags&=32767,we=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){we=e;return}we=e=t}while(e!==null);Xe=6,we=null}function Ih(e,n,t,i,s,u,h,v,C){e.cancelPendingCommit=null;do zr();while(ln!==0);if((Re&6)!==0)throw Error(o(327));if(n!==null){if(n===e.current)throw Error(o(177));if(u=n.lanes|n.childLanes,u|=Wo,Ug(e,t,u,h,v,C),e===qe&&(we=qe=null,Ce=0),ui=n,Zt=e,Ot=t,Js=u,eu=s,Th=i,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sb(de,function(){return jh(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||i){i=O.T,O.T=null,s=F.p,F.p=2,h=Re,Re|=4;try{Zy(e,n,t)}finally{Re=h,F.p=s,O.T=i}}ln=1,Uh(),Bh(),Hh()}}function Uh(){if(ln===1){ln=0;var e=Zt,n=ui,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=O.T,O.T=null;var i=F.p;F.p=2;var s=Re;Re|=4;try{yh(n,e);var u=pu,h=kf(e.containerInfo),v=u.focusedElem,C=u.selectionRange;if(h!==v&&v&&v.ownerDocument&&xf(v.ownerDocument.documentElement,v)){if(C!==null&&qo(v)){var D=C.start,N=C.end;if(N===void 0&&(N=D),"selectionStart"in v)v.selectionStart=D,v.selectionEnd=Math.min(N,v.value.length);else{var P=v.ownerDocument||document,R=P&&P.defaultView||window;if(R.getSelection){var L=R.getSelection(),J=v.textContent.length,se=Math.min(C.start,J),Be=C.end===void 0?se:Math.min(C.end,J);!L.extend&&se>Be&&(h=Be,Be=se,se=h);var E=wf(v,se),A=wf(v,Be);if(E&&A&&(L.rangeCount!==1||L.anchorNode!==E.node||L.anchorOffset!==E.offset||L.focusNode!==A.node||L.focusOffset!==A.offset)){var _=P.createRange();_.setStart(E.node,E.offset),L.removeAllRanges(),se>Be?(L.addRange(_),L.extend(A.node,A.offset)):(_.setEnd(A.node,A.offset),L.addRange(_))}}}}for(P=[],L=v;L=L.parentNode;)L.nodeType===1&&P.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<P.length;v++){var Y=P[v];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Fr=!!mu,pu=mu=null}finally{Re=s,F.p=i,O.T=t}}e.current=n,ln=2}}function Bh(){if(ln===2){ln=0;var e=Zt,n=ui,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=O.T,O.T=null;var i=F.p;F.p=2;var s=Re;Re|=4;try{dh(e,n.alternate,n)}finally{Re=s,F.p=i,O.T=t}}ln=3}}function Hh(){if(ln===4||ln===3){ln=0,yo();var e=Zt,n=ui,t=Ot,i=Th;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ln=5:(ln=0,ui=Zt=null,qh(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Kt=null),wo(t),n=n.stateNode,an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(yn,n,void 0,(n.current.flags&128)===128)}catch{}if(i!==null){n=O.T,s=F.p,F.p=2,O.T=null;try{for(var u=e.onRecoverableError,h=0;h<i.length;h++){var v=i[h];u(v.value,{componentStack:v.stack})}}finally{O.T=n,F.p=s}}(Ot&3)!==0&&zr(),st(e),s=e.pendingLanes,(t&261930)!==0&&(s&42)!==0?e===nu?ol++:(ol=0,nu=e):ol=0,sl(0)}}function qh(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Yi(n)))}function zr(){return Uh(),Bh(),Hh(),jh()}function jh(){if(ln!==5)return!1;var e=Zt,n=Js;Js=0;var t=wo(Ot),i=O.T,s=F.p;try{F.p=32>t?32:t,O.T=null,t=eu,eu=null;var u=Zt,h=Ot;if(ln=0,ui=Zt=null,Ot=0,(Re&6)!==0)throw Error(o(331));var v=Re;if(Re|=4,xh(u.current),vh(u,u.current,h,t),Re=v,sl(0,!1),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(yn,u)}catch{}return!0}finally{F.p=s,O.T=i,qh(e,n)}}function Yh(e,n,t){n=Fn(t,n),n=Ls(e.stateNode,n,2),e=Gt(e,n,2),e!==null&&(_i(e,2),st(e))}function ze(e,n,t){if(e.tag===3)Yh(e,e,t);else for(;n!==null;){if(n.tag===3){Yh(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Kt===null||!Kt.has(i))){e=Fn(t,e),t=Pd(2),i=Gt(n,t,2),i!==null&&(Gd(t,i,n,e),_i(i,2),st(i));break}}n=n.return}}function iu(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new eb;var s=new Set;i.set(n,s)}else s=i.get(n),s===void 0&&(s=new Set,i.set(n,s));s.has(t)||(Ks=!0,s.add(t),e=lb.bind(null,e,n,t),n.then(e,e))}function lb(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,qe===e&&(Ce&t)===t&&(Xe===4||Xe===3&&(Ce&62914560)===Ce&&300>gn()-_r?(Re&2)===0&&ci(e,0):Zs|=t,si===Ce&&(si=0)),st(e)}function Ph(e,n){n===0&&(n=Ic()),e=ma(e,n),e!==null&&(_i(e,n),st(e))}function rb(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ph(e,t)}function ob(e,n){var t=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(n),Ph(e,t)}function sb(e,n){return Ma(e,n)}var Nr=null,di=null,lu=!1,Ir=!1,ru=!1,Jt=0;function st(e){e!==di&&e.next===null&&(di===null?Nr=di=e:di=di.next=e),Ir=!0,lu||(lu=!0,cb())}function sl(e,n){if(!ru&&Ir){ru=!0;do for(var t=!1,i=Nr;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var u=0;else{var h=i.suspendedLanes,v=i.pingedLanes;u=(1<<31-He(42|e)+1)-1,u&=s&~(h&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(t=!0,Vh(i,u))}else u=Ce,u=ql(i,i===qe?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||Ei(i,u)||(t=!0,Vh(i,u));i=i.next}while(t);ru=!1}}function ub(){Gh()}function Gh(){Ir=lu=!1;var e=0;Jt!==0&&Sb()&&(e=Jt);for(var n=gn(),t=null,i=Nr;i!==null;){var s=i.next,u=Wh(i,n);u===0?(i.next=null,t===null?Nr=s:t.next=s,s===null&&(di=t)):(t=i,(e!==0||(u&3)!==0)&&(Ir=!0)),i=s}ln!==0&&ln!==5||sl(e),Jt!==0&&(Jt=0)}function Wh(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var h=31-He(u),v=1<<h,C=s[h];C===-1?((v&t)===0||(v&i)!==0)&&(s[h]=Ig(v,n)):C<=n&&(e.expiredLanes|=v),u&=~v}if(n=qe,t=Ce,t=ql(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,t===0||e===n&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ai(i),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Ei(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(i!==null&&Ai(i),wo(t)){case 2:case 8:t=X;break;case 32:t=de;break;case 268435456:t=Me;break;default:t=de}return i=Fh.bind(null,e),t=Ma(t,i),e.callbackPriority=n,e.callbackNode=t,n}return i!==null&&i!==null&&Ai(i),e.callbackPriority=2,e.callbackNode=null,2}function Fh(e,n){if(ln!==0&&ln!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(zr()&&e.callbackNode!==t)return null;var i=Ce;return i=ql(e,e===qe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Eh(e,i,n),Wh(e,gn()),e.callbackNode!=null&&e.callbackNode===t?Fh.bind(null,e):null)}function Vh(e,n){if(zr())return null;Eh(e,n,!0)}function cb(){xb(function(){(Re&6)!==0?Ma(q,ub):Gh()})}function ou(){if(Jt===0){var e=Za;e===0&&(e=Ul,Ul<<=1,(Ul&261888)===0&&(Ul=256)),Jt=e}return Jt}function Qh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Gl(""+e)}function Xh(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function fb(e,n,t,i,s){if(n==="submit"&&t&&t.stateNode===s){var u=Qh((s[Sn]||null).action),h=i.submitter;h&&(n=(n=h[Sn]||null)?Qh(n.formAction):h.getAttribute("formAction"),n!==null&&(u=n,h=null));var v=new Ql("action","action",null,i,s);e.push({event:v,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Jt!==0){var C=h?Xh(s,h):new FormData(s);Es(t,{pending:!0,data:C,method:s.method,action:u},null,C)}}else typeof u=="function"&&(v.preventDefault(),C=h?Xh(s,h):new FormData(s),Es(t,{pending:!0,data:C,method:s.method,action:u},u,C))},currentTarget:s}]})}}for(var su=0;su<Go.length;su++){var uu=Go[su],db=uu.toLowerCase(),hb=uu[0].toUpperCase()+uu.slice(1);nt(db,"on"+hb)}nt(Af,"onAnimationEnd"),nt(Ef,"onAnimationIteration"),nt(_f,"onAnimationStart"),nt("dblclick","onDoubleClick"),nt("focusin","onFocus"),nt("focusout","onBlur"),nt(Dy,"onTransitionRun"),nt(Ry,"onTransitionStart"),nt(Oy,"onTransitionCancel"),nt(Df,"onTransitionEnd"),Ua("onMouseEnter",["mouseout","mouseover"]),Ua("onMouseLeave",["mouseout","mouseover"]),Ua("onPointerEnter",["pointerout","pointerover"]),Ua("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function Kh(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],s=i.event;i=i.listeners;e:{var u=void 0;if(n)for(var h=i.length-1;0<=h;h--){var v=i[h],C=v.instance,D=v.currentTarget;if(v=v.listener,C!==u&&s.isPropagationStopped())break e;u=v,s.currentTarget=D;try{u(s)}catch(N){Zl(N)}s.currentTarget=null,u=C}else for(h=0;h<i.length;h++){if(v=i[h],C=v.instance,D=v.currentTarget,v=v.listener,C!==u&&s.isPropagationStopped())break e;u=v,s.currentTarget=D;try{u(s)}catch(N){Zl(N)}s.currentTarget=null,u=C}}}}function xe(e,n){var t=n[xo];t===void 0&&(t=n[xo]=new Set);var i=e+"__bubble";t.has(i)||(Zh(n,e,2,!1),t.add(i))}function cu(e,n,t){var i=0;n&&(i|=4),Zh(t,e,i,n)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function fu(e){if(!e[Ur]){e[Ur]=!0,Pc.forEach(function(t){t!=="selectionchange"&&(mb.has(t)||cu(t,!1,e),cu(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ur]||(n[Ur]=!0,cu("selectionchange",!1,n))}}function Zh(e,n,t,i){switch(Am(n)){case 2:var s=Yb;break;case 8:s=Pb;break;default:s=Au}t=s.bind(null,n,t,e),s=void 0,!Oo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function du(e,n,t,i,s){var u=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var v=i.stateNode.containerInfo;if(v===s)break;if(h===4)for(h=i.return;h!==null;){var C=h.tag;if((C===3||C===4)&&h.stateNode.containerInfo===s)return;h=h.return}for(;v!==null;){if(h=za(v),h===null)return;if(C=h.tag,C===5||C===6||C===26||C===27){i=u=h;continue e}v=v.parentNode}}i=i.return}nf(function(){var D=u,N=Do(t),P=[];e:{var R=Rf.get(e);if(R!==void 0){var L=Ql,J=e;switch(e){case"keypress":if(Fl(t)===0)break e;case"keydown":case"keyup":L=oy;break;case"focusin":J="focus",L=No;break;case"focusout":J="blur",L=No;break;case"beforeblur":case"afterblur":L=No;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=cy;break;case Af:case Ef:case _f:L=$g;break;case Df:L=dy;break;case"scroll":case"scrollend":L=Vg;break;case"wheel":L=my;break;case"copy":case"cut":case"paste":L=ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=of;break;case"toggle":case"beforetoggle":L=gy}var se=(n&4)!==0,Be=!se&&(e==="scroll"||e==="scrollend"),E=se?R!==null?R+"Capture":null:R;se=[];for(var A=D,_;A!==null;){var Y=A;if(_=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||_===null||E===null||(Y=Oi(A,E),Y!=null&&se.push(cl(A,Y,_))),Be)break;A=A.return}0<se.length&&(R=new L(R,J,null,t,N),P.push({event:R,listeners:se}))}}if((n&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",R&&t!==_o&&(J=t.relatedTarget||t.fromElement)&&(za(J)||J[La]))break e;if((L||R)&&(R=N.window===N?N:(R=N.ownerDocument)?R.defaultView||R.parentWindow:window,L?(J=t.relatedTarget||t.toElement,L=D,J=J?za(J):null,J!==null&&(Be=f(J),se=J.tag,J!==Be||se!==5&&se!==27&&se!==6)&&(J=null)):(L=null,J=D),L!==J)){if(se=lf,Y="onMouseLeave",E="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(se=of,Y="onPointerLeave",E="onPointerEnter",A="pointer"),Be=L==null?R:Ri(L),_=J==null?R:Ri(J),R=new se(Y,A+"leave",L,t,N),R.target=Be,R.relatedTarget=_,Y=null,za(N)===D&&(se=new se(E,A+"enter",J,t,N),se.target=_,se.relatedTarget=Be,Y=se),Be=Y,L&&J)n:{for(se=pb,E=L,A=J,_=0,Y=E;Y;Y=se(Y))_++;Y=0;for(var le=A;le;le=se(le))Y++;for(;0<_-Y;)E=se(E),_--;for(;0<Y-_;)A=se(A),Y--;for(;_--;){if(E===A||A!==null&&E===A.alternate){se=E;break n}E=se(E),A=se(A)}se=null}else se=null;L!==null&&$h(P,R,L,se,!1),J!==null&&Be!==null&&$h(P,Be,J,se,!0)}}e:{if(R=D?Ri(D):window,L=R.nodeName&&R.nodeName.toLowerCase(),L==="select"||L==="input"&&R.type==="file")var _e=pf;else if(hf(R))if(gf)_e=Ay;else{_e=Cy;var ne=ky}else L=R.nodeName,!L||L.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?D&&Eo(D.elementType)&&(_e=pf):_e=Ty;if(_e&&(_e=_e(e,D))){mf(P,_e,t,N);break e}ne&&ne(e,R,D),e==="focusout"&&D&&R.type==="number"&&D.memoizedProps.value!=null&&Ao(R,"number",R.value)}switch(ne=D?Ri(D):window,e){case"focusin":(hf(ne)||ne.contentEditable==="true")&&(Pa=ne,jo=D,Hi=null);break;case"focusout":Hi=jo=Pa=null;break;case"mousedown":Yo=!0;break;case"contextmenu":case"mouseup":case"dragend":Yo=!1,Cf(P,t,N);break;case"selectionchange":if(_y)break;case"keydown":case"keyup":Cf(P,t,N)}var ye;if(Uo)e:{switch(e){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Ya?ff(e,t)&&(Te="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Te="onCompositionStart");Te&&(sf&&t.locale!=="ko"&&(Ya||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ya&&(ye=tf()):(Ut=N,Mo="value"in Ut?Ut.value:Ut.textContent,Ya=!0)),ne=Br(D,Te),0<ne.length&&(Te=new rf(Te,e,null,t,N),P.push({event:Te,listeners:ne}),ye?Te.data=ye:(ye=df(t),ye!==null&&(Te.data=ye)))),(ye=by?vy(e,t):Sy(e,t))&&(Te=Br(D,"onBeforeInput"),0<Te.length&&(ne=new rf("onBeforeInput","beforeinput",null,t,N),P.push({event:ne,listeners:Te}),ne.data=ye)),fb(P,e,D,t,N)}Kh(P,n)})}function cl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Br(e,n){for(var t=n+"Capture",i=[];e!==null;){var s=e,u=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||u===null||(s=Oi(e,t),s!=null&&i.unshift(cl(e,s,u)),s=Oi(e,n),s!=null&&i.push(cl(e,s,u))),e.tag===3)return i;e=e.return}return[]}function pb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $h(e,n,t,i,s){for(var u=n._reactName,h=[];t!==null&&t!==i;){var v=t,C=v.alternate,D=v.stateNode;if(v=v.tag,C!==null&&C===i)break;v!==5&&v!==26&&v!==27||D===null||(C=D,s?(D=Oi(t,u),D!=null&&h.unshift(cl(t,D,C))):s||(D=Oi(t,u),D!=null&&h.push(cl(t,D,C)))),t=t.return}h.length!==0&&e.push({event:n,listeners:h})}var gb=/\r\n?/g,yb=/\u0000|\uFFFD/g;function Jh(e){return(typeof e=="string"?e:""+e).replace(gb,`
`).replace(yb,"")}function em(e,n){return n=Jh(n),Jh(e)===n}function Ue(e,n,t,i,s,u){switch(t){case"children":typeof i=="string"?n==="body"||n==="textarea"&&i===""||Ha(e,i):(typeof i=="number"||typeof i=="bigint")&&n!=="body"&&Ha(e,""+i);break;case"className":Yl(e,"class",i);break;case"tabIndex":Yl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Yl(e,t,i);break;case"style":Jc(e,i,u);break;case"data":if(n!=="object"){Yl(e,"data",i);break}case"src":case"href":if(i===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(t);break}i=Gl(""+i),e.setAttribute(t,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(t==="formAction"?(n!=="input"&&Ue(e,n,"name",s.name,s,null),Ue(e,n,"formEncType",s.formEncType,s,null),Ue(e,n,"formMethod",s.formMethod,s,null),Ue(e,n,"formTarget",s.formTarget,s,null)):(Ue(e,n,"encType",s.encType,s,null),Ue(e,n,"method",s.method,s,null),Ue(e,n,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(t);break}i=Gl(""+i),e.setAttribute(t,i);break;case"onClick":i!=null&&(e.onclick=gt);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(t=i.__html,t!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=t}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}t=Gl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,""+i):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":i===!0?e.setAttribute(t,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,i):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(t,i):e.removeAttribute(t);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(t):e.setAttribute(t,i);break;case"popover":xe("beforetoggle",e),xe("toggle",e),jl(e,"popover",i);break;case"xlinkActuate":pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":pt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":pt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":pt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":pt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":jl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Wg.get(t)||t,jl(e,t,i))}}function hu(e,n,t,i,s,u){switch(t){case"style":Jc(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(t=i.__html,t!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=t}}break;case"children":typeof i=="string"?Ha(e,i):(typeof i=="number"||typeof i=="bigint")&&Ha(e,""+i);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gc.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(s=t.endsWith("Capture"),n=t.slice(2,s?t.length-7:void 0),u=e[Sn]||null,u=u!=null?u[t]:null,typeof u=="function"&&e.removeEventListener(n,u,s),typeof i=="function")){typeof u!="function"&&u!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,i,s);break e}t in e?e[t]=i:i===!0?e.setAttribute(t,""):jl(e,t,i)}}}function hn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var i=!1,s=!1,u;for(u in t)if(t.hasOwnProperty(u)){var h=t[u];if(h!=null)switch(u){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Ue(e,n,u,h,t,null)}}s&&Ue(e,n,"srcSet",t.srcSet,t,null),i&&Ue(e,n,"src",t.src,t,null);return;case"input":xe("invalid",e);var v=u=h=s=null,C=null,D=null;for(i in t)if(t.hasOwnProperty(i)){var N=t[i];if(N!=null)switch(i){case"name":s=N;break;case"type":h=N;break;case"checked":C=N;break;case"defaultChecked":D=N;break;case"value":u=N;break;case"defaultValue":v=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,n));break;default:Ue(e,n,i,N,t,null)}}Xc(e,u,v,C,D,h,s,!1);return;case"select":xe("invalid",e),i=h=u=null;for(s in t)if(t.hasOwnProperty(s)&&(v=t[s],v!=null))switch(s){case"value":u=v;break;case"defaultValue":h=v;break;case"multiple":i=v;default:Ue(e,n,s,v,t,null)}n=u,t=h,e.multiple=!!i,n!=null?Ba(e,!!i,n,!1):t!=null&&Ba(e,!!i,t,!0);return;case"textarea":xe("invalid",e),u=s=i=null;for(h in t)if(t.hasOwnProperty(h)&&(v=t[h],v!=null))switch(h){case"value":i=v;break;case"defaultValue":s=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:Ue(e,n,h,v,t,null)}Zc(e,i,s,u);return;case"option":for(C in t)t.hasOwnProperty(C)&&(i=t[C],i!=null)&&(C==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ue(e,n,C,i,t,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(i=0;i<ul.length;i++)xe(ul[i],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in t)if(t.hasOwnProperty(D)&&(i=t[D],i!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Ue(e,n,D,i,t,null)}return;default:if(Eo(n)){for(N in t)t.hasOwnProperty(N)&&(i=t[N],i!==void 0&&hu(e,n,N,i,t,void 0));return}}for(v in t)t.hasOwnProperty(v)&&(i=t[v],i!=null&&Ue(e,n,v,i,t,null))}function bb(e,n,t,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,u=null,h=null,v=null,C=null,D=null,N=null;for(L in t){var P=t[L];if(t.hasOwnProperty(L)&&P!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":C=P;default:i.hasOwnProperty(L)||Ue(e,n,L,null,i,P)}}for(var R in i){var L=i[R];if(P=t[R],i.hasOwnProperty(R)&&(L!=null||P!=null))switch(R){case"type":u=L;break;case"name":s=L;break;case"checked":D=L;break;case"defaultChecked":N=L;break;case"value":h=L;break;case"defaultValue":v=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(o(137,n));break;default:L!==P&&Ue(e,n,R,L,i,P)}}To(e,h,v,C,D,N,u,s);return;case"select":L=h=v=R=null;for(u in t)if(C=t[u],t.hasOwnProperty(u)&&C!=null)switch(u){case"value":break;case"multiple":L=C;default:i.hasOwnProperty(u)||Ue(e,n,u,null,i,C)}for(s in i)if(u=i[s],C=t[s],i.hasOwnProperty(s)&&(u!=null||C!=null))switch(s){case"value":R=u;break;case"defaultValue":v=u;break;case"multiple":h=u;default:u!==C&&Ue(e,n,s,u,i,C)}n=v,t=h,i=L,R!=null?Ba(e,!!t,R,!1):!!i!=!!t&&(n!=null?Ba(e,!!t,n,!0):Ba(e,!!t,t?[]:"",!1));return;case"textarea":L=R=null;for(v in t)if(s=t[v],t.hasOwnProperty(v)&&s!=null&&!i.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ue(e,n,v,null,i,s)}for(h in i)if(s=i[h],u=t[h],i.hasOwnProperty(h)&&(s!=null||u!=null))switch(h){case"value":R=s;break;case"defaultValue":L=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==u&&Ue(e,n,h,s,i,u)}Kc(e,R,L);return;case"option":for(var J in t)R=t[J],t.hasOwnProperty(J)&&R!=null&&!i.hasOwnProperty(J)&&(J==="selected"?e.selected=!1:Ue(e,n,J,null,i,R));for(C in i)R=i[C],L=t[C],i.hasOwnProperty(C)&&R!==L&&(R!=null||L!=null)&&(C==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":Ue(e,n,C,R,i,L));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in t)R=t[se],t.hasOwnProperty(se)&&R!=null&&!i.hasOwnProperty(se)&&Ue(e,n,se,null,i,R);for(D in i)if(R=i[D],L=t[D],i.hasOwnProperty(D)&&R!==L&&(R!=null||L!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,n));break;default:Ue(e,n,D,R,i,L)}return;default:if(Eo(n)){for(var Be in t)R=t[Be],t.hasOwnProperty(Be)&&R!==void 0&&!i.hasOwnProperty(Be)&&hu(e,n,Be,void 0,i,R);for(N in i)R=i[N],L=t[N],!i.hasOwnProperty(N)||R===L||R===void 0&&L===void 0||hu(e,n,N,R,i,L);return}}for(var E in t)R=t[E],t.hasOwnProperty(E)&&R!=null&&!i.hasOwnProperty(E)&&Ue(e,n,E,null,i,R);for(P in i)R=i[P],L=t[P],!i.hasOwnProperty(P)||R===L||R==null&&L==null||Ue(e,n,P,R,i,L)}function nm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),i=0;i<t.length;i++){var s=t[i],u=s.transferSize,h=s.initiatorType,v=s.duration;if(u&&v&&nm(h)){for(h=0,v=s.responseEnd,i+=1;i<t.length;i++){var C=t[i],D=C.startTime;if(D>v)break;var N=C.transferSize,P=C.initiatorType;N&&nm(P)&&(C=C.responseEnd,h+=N*(C<v?1:(v-D)/(C-D)))}if(--i,n+=8*(u+h)/(s.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var mu=null,pu=null;function Hr(e){return e.nodeType===9?e:e.ownerDocument}function tm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function am(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function gu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yu=null;function Sb(){var e=window.event;return e&&e.type==="popstate"?e===yu?!1:(yu=e,!0):(yu=null,!1)}var im=typeof setTimeout=="function"?setTimeout:void 0,wb=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,xb=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(e){return lm.resolve(null).then(e).catch(kb)}:im;function kb(e){setTimeout(function(){throw e})}function ea(e){return e==="head"}function rm(e,n){var t=n,i=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"||t==="/&"){if(i===0){e.removeChild(s),gi(n);return}i--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")i++;else if(t==="html")fl(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,fl(t);for(var u=t.firstChild;u;){var h=u.nextSibling,v=u.nodeName;u[Di]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&u.rel.toLowerCase()==="stylesheet"||t.removeChild(u),u=h}}else t==="body"&&fl(e.ownerDocument.body);t=s}while(t);gi(n)}function om(e,n){var t=e;e=0;do{var i=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=i}while(t)}function bu(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":bu(t),ko(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Cb(e,n,t,i){for(;e.nodeType===1;){var s=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Di])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var u=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Zn(e.nextSibling),e===null)break}return null}function Tb(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Zn(e.nextSibling),e===null))return null;return e}function sm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Zn(e.nextSibling),e===null))return null;return e}function vu(e){return e.data==="$?"||e.data==="$~"}function Su(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ab(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var i=function(){n(),t.removeEventListener("DOMContentLoaded",i)};t.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Zn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var wu=null;function um(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return Zn(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function cm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function fm(e,n,t){switch(n=Hr(t),e){case"html":if(e=n.documentElement,!e)throw Error(o(452));return e;case"head":if(e=n.head,!e)throw Error(o(453));return e;case"body":if(e=n.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function fl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ko(e)}var $n=new Map,dm=new Set;function qr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Mt=F.d;F.d={f:Eb,r:_b,D:Db,C:Rb,L:Ob,m:Mb,X:zb,S:Lb,M:Nb};function Eb(){var e=Mt.f(),n=Or();return e||n}function _b(e){var n=Na(e);n!==null&&n.tag===5&&n.type==="form"?Dd(n):Mt.r(e)}var hi=typeof document>"u"?null:document;function hm(e,n,t){var i=hi;if(i&&typeof n=="string"&&n){var s=Gn(n);s='link[rel="'+e+'"][href="'+s+'"]',typeof t=="string"&&(s+='[crossorigin="'+t+'"]'),dm.has(s)||(dm.add(s),e={rel:e,crossOrigin:t,href:n},i.querySelector(s)===null&&(n=i.createElement("link"),hn(n,"link",e),rn(n),i.head.appendChild(n)))}}function Db(e){Mt.D(e),hm("dns-prefetch",e,null)}function Rb(e,n){Mt.C(e,n),hm("preconnect",e,n)}function Ob(e,n,t){Mt.L(e,n,t);var i=hi;if(i&&e&&n){var s='link[rel="preload"][as="'+Gn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(s+='[imagesrcset="'+Gn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(s+='[imagesizes="'+Gn(t.imageSizes)+'"]')):s+='[href="'+Gn(e)+'"]';var u=s;switch(n){case"style":u=mi(e);break;case"script":u=pi(e)}$n.has(u)||(e=b({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),$n.set(u,e),i.querySelector(s)!==null||n==="style"&&i.querySelector(dl(u))||n==="script"&&i.querySelector(hl(u))||(n=i.createElement("link"),hn(n,"link",e),rn(n),i.head.appendChild(n)))}}function Mb(e,n){Mt.m(e,n);var t=hi;if(t&&e){var i=n&&typeof n.as=="string"?n.as:"script",s='link[rel="modulepreload"][as="'+Gn(i)+'"][href="'+Gn(e)+'"]',u=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=pi(e)}if(!$n.has(u)&&(e=b({rel:"modulepreload",href:e},n),$n.set(u,e),t.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(hl(u)))return}i=t.createElement("link"),hn(i,"link",e),rn(i),t.head.appendChild(i)}}}function Lb(e,n,t){Mt.S(e,n,t);var i=hi;if(i&&e){var s=Ia(i).hoistableStyles,u=mi(e);n=n||"default";var h=s.get(u);if(!h){var v={loading:0,preload:null};if(h=i.querySelector(dl(u)))v.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":n},t),(t=$n.get(u))&&xu(e,t);var C=h=i.createElement("link");rn(C),hn(C,"link",e),C._p=new Promise(function(D,N){C.onload=D,C.onerror=N}),C.addEventListener("load",function(){v.loading|=1}),C.addEventListener("error",function(){v.loading|=2}),v.loading|=4,jr(h,n,i)}h={type:"stylesheet",instance:h,count:1,state:v},s.set(u,h)}}}function zb(e,n){Mt.X(e,n);var t=hi;if(t&&e){var i=Ia(t).hoistableScripts,s=pi(e),u=i.get(s);u||(u=t.querySelector(hl(s)),u||(e=b({src:e,async:!0},n),(n=$n.get(s))&&ku(e,n),u=t.createElement("script"),rn(u),hn(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(s,u))}}function Nb(e,n){Mt.M(e,n);var t=hi;if(t&&e){var i=Ia(t).hoistableScripts,s=pi(e),u=i.get(s);u||(u=t.querySelector(hl(s)),u||(e=b({src:e,async:!0,type:"module"},n),(n=$n.get(s))&&ku(e,n),u=t.createElement("script"),rn(u),hn(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(s,u))}}function mm(e,n,t,i){var s=(s=ie.current)?qr(s):null;if(!s)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=mi(t.href),t=Ia(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=mi(t.href);var u=Ia(s).hoistableStyles,h=u.get(e);if(h||(s=s.ownerDocument||s,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,h),(u=s.querySelector(dl(e)))&&!u._p&&(h.instance=u,h.state.loading=5),$n.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},$n.set(e,t),u||Ib(s,e,t,h.state))),n&&i===null)throw Error(o(528,""));return h}if(n&&i!==null)throw Error(o(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=pi(t),t=Ia(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function mi(e){return'href="'+Gn(e)+'"'}function dl(e){return'link[rel="stylesheet"]['+e+"]"}function pm(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Ib(e,n,t,i){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?i.loading=1:(n=e.createElement("link"),i.preload=n,n.addEventListener("load",function(){return i.loading|=1}),n.addEventListener("error",function(){return i.loading|=2}),hn(n,"link",t),rn(n),e.head.appendChild(n))}function pi(e){return'[src="'+Gn(e)+'"]'}function hl(e){return"script[async]"+e}function gm(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var i=e.querySelector('style[data-href~="'+Gn(t.href)+'"]');if(i)return n.instance=i,rn(i),i;var s=b({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),rn(i),hn(i,"style",s),jr(i,t.precedence,e),n.instance=i;case"stylesheet":s=mi(t.href);var u=e.querySelector(dl(s));if(u)return n.state.loading|=4,n.instance=u,rn(u),u;i=pm(t),(s=$n.get(s))&&xu(i,s),u=(e.ownerDocument||e).createElement("link"),rn(u);var h=u;return h._p=new Promise(function(v,C){h.onload=v,h.onerror=C}),hn(u,"link",i),n.state.loading|=4,jr(u,t.precedence,e),n.instance=u;case"script":return u=pi(t.src),(s=e.querySelector(hl(u)))?(n.instance=s,rn(s),s):(i=t,(s=$n.get(u))&&(i=b({},t),ku(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),rn(s),hn(s,"link",i),e.head.appendChild(s),n.instance=s);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(i=n.instance,n.state.loading|=4,jr(i,t.precedence,e));return n.instance}function jr(e,n,t){for(var i=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,u=s,h=0;h<i.length;h++){var v=i[h];if(v.dataset.precedence===n)u=v;else if(u!==s)break}u?u.parentNode.insertBefore(e,u.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function xu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ku(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Yr=null;function ym(e,n,t){if(Yr===null){var i=new Map,s=Yr=new Map;s.set(t,i)}else s=Yr,i=s.get(t),i||(i=new Map,s.set(t,i));if(i.has(e))return i;for(i.set(e,null),t=t.getElementsByTagName(e),s=0;s<t.length;s++){var u=t[s];if(!(u[Di]||u[un]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var h=u.getAttribute(n)||"";h=e+h;var v=i.get(h);v?v.push(u):i.set(h,[u])}}return i}function bm(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Ub(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function vm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Bb(e,n,t,i){if(t.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var s=mi(i.href),u=n.querySelector(dl(s));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Pr.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=u,rn(u);return}u=n.ownerDocument||n,i=pm(i),(s=$n.get(s))&&xu(i,s),u=u.createElement("link"),rn(u);var h=u;h._p=new Promise(function(v,C){h.onload=v,h.onerror=C}),hn(u,"link",i),t.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Pr.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var Cu=0;function Hb(e,n){return e.stylesheets&&e.count===0&&Wr(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var i=setTimeout(function(){if(e.stylesheets&&Wr(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+n);0<e.imgBytes&&Cu===0&&(Cu=62500*vb());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wr(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Cu?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Pr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gr=null;function Wr(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gr=new Map,n.forEach(qb,e),Gr=null,Pr.call(e))}function qb(e,n){if(!(n.state.loading&4)){var t=Gr.get(e);if(t)var i=t.get(null);else{t=new Map,Gr.set(e,t);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<s.length;u++){var h=s[u];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(t.set(h.dataset.precedence,h),i=h)}i&&t.set(null,i)}s=n.instance,h=s.getAttribute("data-precedence"),u=t.get(h)||i,u===i&&t.set(null,s),t.set(h,s),this.count++,i=Pr.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),u?u.parentNode.insertBefore(s,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),n.state.loading|=4}}var ml={$$typeof:G,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function jb(e,n,t,i,s,u,h,v,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vo(0),this.hiddenUpdates=vo(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=u,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function Sm(e,n,t,i,s,u,h,v,C,D,N,P){return e=new jb(e,n,t,h,C,D,N,P,v),n=1,u===!0&&(n|=24),u=Mn(3,null,null,n),e.current=u,u.stateNode=e,n=as(),n.refCount++,e.pooledCache=n,n.refCount++,u.memoizedState={element:i,isDehydrated:t,cache:n},os(u),e}function wm(e){return e?(e=Fa,e):Fa}function xm(e,n,t,i,s,u){s=wm(s),i.context===null?i.context=s:i.pendingContext=s,i=Pt(n),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=Gt(e,i,n),t!==null&&(An(t,e,n),Fi(t,e,n))}function km(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Tu(e,n){km(e,n),(e=e.alternate)&&km(e,n)}function Cm(e){if(e.tag===13||e.tag===31){var n=ma(e,67108864);n!==null&&An(n,e,67108864),Tu(e,67108864)}}function Tm(e){if(e.tag===13||e.tag===31){var n=Un();n=So(n);var t=ma(e,n);t!==null&&An(t,e,n),Tu(e,n)}}var Fr=!0;function Yb(e,n,t,i){var s=O.T;O.T=null;var u=F.p;try{F.p=2,Au(e,n,t,i)}finally{F.p=u,O.T=s}}function Pb(e,n,t,i){var s=O.T;O.T=null;var u=F.p;try{F.p=8,Au(e,n,t,i)}finally{F.p=u,O.T=s}}function Au(e,n,t,i){if(Fr){var s=Eu(i);if(s===null)du(e,n,i,Vr,t),Em(e,i);else if(Wb(s,e,n,t,i))i.stopPropagation();else if(Em(e,i),n&4&&-1<Gb.indexOf(e)){for(;s!==null;){var u=Na(s);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var h=ua(u.pendingLanes);if(h!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;h;){var C=1<<31-He(h);v.entanglements[1]|=C,h&=~C}st(u),(Re&6)===0&&(Dr=gn()+500,sl(0))}}break;case 31:case 13:v=ma(u,2),v!==null&&An(v,u,2),Or(),Tu(u,2)}if(u=Eu(i),u===null&&du(e,n,i,Vr,t),u===s)break;s=u}s!==null&&i.stopPropagation()}else du(e,n,i,null,t)}}function Eu(e){return e=Do(e),_u(e)}var Vr=null;function _u(e){if(Vr=null,e=za(e),e!==null){var n=f(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=d(n),e!==null)return e;e=null}else if(t===31){if(e=p(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Vr=e,null}function Am(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bo()){case q:return 2;case X:return 8;case de:case Se:return 32;case Me:return 268435456;default:return 32}default:return 32}}var Du=!1,na=null,ta=null,aa=null,pl=new Map,gl=new Map,ia=[],Gb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Em(e,n){switch(e){case"focusin":case"focusout":na=null;break;case"dragenter":case"dragleave":ta=null;break;case"mouseover":case"mouseout":aa=null;break;case"pointerover":case"pointerout":pl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(n.pointerId)}}function yl(e,n,t,i,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:u,targetContainers:[s]},n!==null&&(n=Na(n),n!==null&&Cm(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function Wb(e,n,t,i,s){switch(n){case"focusin":return na=yl(na,e,n,t,i,s),!0;case"dragenter":return ta=yl(ta,e,n,t,i,s),!0;case"mouseover":return aa=yl(aa,e,n,t,i,s),!0;case"pointerover":var u=s.pointerId;return pl.set(u,yl(pl.get(u)||null,e,n,t,i,s)),!0;case"gotpointercapture":return u=s.pointerId,gl.set(u,yl(gl.get(u)||null,e,n,t,i,s)),!0}return!1}function _m(e){var n=za(e.target);if(n!==null){var t=f(n);if(t!==null){if(n=t.tag,n===13){if(n=d(t),n!==null){e.blockedOn=n,jc(e.priority,function(){Tm(t)});return}}else if(n===31){if(n=p(t),n!==null){e.blockedOn=n,jc(e.priority,function(){Tm(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Eu(e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);_o=i,t.target.dispatchEvent(i),_o=null}else return n=Na(t),n!==null&&Cm(n),e.blockedOn=t,!1;n.shift()}return!0}function Dm(e,n,t){Qr(e)&&t.delete(n)}function Fb(){Du=!1,na!==null&&Qr(na)&&(na=null),ta!==null&&Qr(ta)&&(ta=null),aa!==null&&Qr(aa)&&(aa=null),pl.forEach(Dm),gl.forEach(Dm)}function Xr(e,n){e.blockedOn===n&&(e.blockedOn=null,Du||(Du=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Fb)))}var Kr=null;function Rm(e){Kr!==e&&(Kr=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Kr===e&&(Kr=null);for(var n=0;n<e.length;n+=3){var t=e[n],i=e[n+1],s=e[n+2];if(typeof i!="function"){if(_u(i||t)===null)continue;break}var u=Na(t);u!==null&&(e.splice(n,3),n-=3,Es(u,{pending:!0,data:s,method:t.method,action:i},i,s))}}))}function gi(e){function n(C){return Xr(C,e)}na!==null&&Xr(na,e),ta!==null&&Xr(ta,e),aa!==null&&Xr(aa,e),pl.forEach(n),gl.forEach(n);for(var t=0;t<ia.length;t++){var i=ia[t];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ia.length&&(t=ia[0],t.blockedOn===null);)_m(t),t.blockedOn===null&&ia.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(i=0;i<t.length;i+=3){var s=t[i],u=t[i+1],h=s[Sn]||null;if(typeof u=="function")h||Rm(t);else if(h){var v=null;if(u&&u.hasAttribute("formAction")){if(s=u,h=u[Sn]||null)v=h.formAction;else if(_u(s)!==null)continue}else v=h.action;typeof v=="function"?t[i+1]=v:(t.splice(i,3),i-=3),Rm(t)}}}function Om(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(h){return s=h})},focusReset:"manual",scroll:"manual"})}function n(){s!==null&&(s(),s=null),i||setTimeout(t,20)}function t(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),s!==null&&(s(),s=null)}}}function Ru(e){this._internalRoot=e}Zr.prototype.render=Ru.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));var t=n.current,i=Un();xm(t,i,e,n,null,null)},Zr.prototype.unmount=Ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xm(e.current,2,null,e,null,null),Or(),n[La]=null}};function Zr(e){this._internalRoot=e}Zr.prototype.unstable_scheduleHydration=function(e){if(e){var n=qc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ia.length&&n!==0&&n<ia[t].priority;t++);ia.splice(t,0,e),t===0&&_m(e)}};var Mm=l.version;if(Mm!=="19.2.3")throw Error(o(527,Mm,"19.2.3"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Vb={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$r.isDisabled&&$r.supportsFiber)try{yn=$r.inject(Vb),an=$r}catch{}}return vl.createRoot=function(e,n){if(!c(e))throw Error(o(299));var t=!1,i="",s=Hd,u=qd,h=jd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError)),n=Sm(e,1,!1,null,null,t,i,null,s,u,h,Om),e[La]=n.current,fu(e),new Ru(n)},vl.hydrateRoot=function(e,n,t){if(!c(e))throw Error(o(299));var i=!1,s="",u=Hd,h=qd,v=jd,C=null;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(h=t.onCaughtError),t.onRecoverableError!==void 0&&(v=t.onRecoverableError),t.formState!==void 0&&(C=t.formState)),n=Sm(e,1,!0,n,t??null,i,s,C,u,h,v,Om),n.context=wm(null),t=n.current,i=Un(),i=So(i),s=Pt(i),s.callback=null,Gt(t,s,i),t=i,n.current.lanes=t,_i(n,t),st(n),e[La]=n.current,fu(e),new Zr(n)},vl.version="19.2.3",vl}var Ym;function iv(){if(Ym)return Lu.exports;Ym=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Lu.exports=av(),Lu.exports}var lv=iv();const rv=uo(lv);var Pm="popstate";function ov(a={}){function l(c,f){let{pathname:d="/",search:p="",hash:g=""}=Ea(c.location.hash.substring(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),ec("",{pathname:d,search:p,hash:g},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function r(c,f){let d=c.document.querySelector("base"),p="";if(d&&d.getAttribute("href")){let g=c.location.href,m=g.indexOf("#");p=m===-1?g:g.slice(0,m)}return p+"#"+(typeof f=="string"?f:_l(f))}function o(c,f){qn(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`)}return uv(l,r,o,a)}function Ve(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function qn(a,l){if(!a){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function sv(){return Math.random().toString(36).substring(2,10)}function Gm(a,l){return{usr:a.state,key:a.key,idx:l}}function ec(a,l,r=null,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof l=="string"?Ea(l):l,state:r,key:l&&l.key||o||sv()}}function _l({pathname:a="/",search:l="",hash:r=""}){return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),r&&r!=="#"&&(a+=r.charAt(0)==="#"?r:"#"+r),a}function Ea(a){let l={};if(a){let r=a.indexOf("#");r>=0&&(l.hash=a.substring(r),a=a.substring(0,r));let o=a.indexOf("?");o>=0&&(l.search=a.substring(o),a=a.substring(0,o)),a&&(l.pathname=a)}return l}function uv(a,l,r,o={}){let{window:c=document.defaultView,v5Compat:f=!1}=o,d=c.history,p="POP",g=null,m=y();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function y(){return(d.state||{idx:null}).idx}function b(){p="POP";let U=y(),M=U==null?null:U-m;m=U,g&&g({action:p,location:z.location,delta:M})}function x(U,M){p="PUSH";let W=ec(z.location,U,M);r&&r(W,U),m=y()+1;let G=Gm(W,m),re=z.createHref(W);try{d.pushState(G,"",re)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;c.location.assign(re)}f&&g&&g({action:p,location:z.location,delta:1})}function S(U,M){p="REPLACE";let W=ec(z.location,U,M);r&&r(W,U),m=y();let G=Gm(W,m),re=z.createHref(W);d.replaceState(G,"",re),f&&g&&g({action:p,location:z.location,delta:0})}function I(U){return cv(U)}let z={get action(){return p},get location(){return a(c,d)},listen(U){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener(Pm,b),g=U,()=>{c.removeEventListener(Pm,b),g=null}},createHref(U){return l(c,U)},createURL:I,encodeLocation(U){let M=I(U);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:x,replace:S,go(U){return d.go(U)}};return z}function cv(a,l=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Ve(r,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:_l(a);return o=o.replace(/ $/,"%20"),!l&&o.startsWith("//")&&(o=r+o),new URL(o,r)}function Lp(a,l,r="/"){return fv(a,l,r,!1)}function fv(a,l,r,o){let c=typeof l=="string"?Ea(l):l,f=zt(c.pathname||"/",r);if(f==null)return null;let d=zp(a);dv(d);let p=null;for(let g=0;p==null&&g<d.length;++g){let m=kv(f);p=wv(d[g],m,o)}return p}function zp(a,l=[],r=[],o="",c=!1){let f=(d,p,g=c,m)=>{let y={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(o)&&g)return;Ve(y.relativePath.startsWith(o),`Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(o.length)}let b=Lt([o,y.relativePath]),x=r.concat(y);d.children&&d.children.length>0&&(Ve(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),zp(d.children,l,x,b,g)),!(d.path==null&&!d.index)&&l.push({path:b,score:vv(b,d.index),routesMeta:x})};return a.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))f(d,p);else for(let g of Np(d.path))f(d,p,!0,g)}),l}function Np(a){let l=a.split("/");if(l.length===0)return[];let[r,...o]=l,c=r.endsWith("?"),f=r.replace(/\?$/,"");if(o.length===0)return c?[f,""]:[f];let d=Np(o.join("/")),p=[];return p.push(...d.map(g=>g===""?f:[f,g].join("/"))),c&&p.push(...d),p.map(g=>a.startsWith("/")&&g===""?"/":g)}function dv(a){a.sort((l,r)=>l.score!==r.score?r.score-l.score:Sv(l.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}var hv=/^:[\w-]+$/,mv=3,pv=2,gv=1,yv=10,bv=-2,Wm=a=>a==="*";function vv(a,l){let r=a.split("/"),o=r.length;return r.some(Wm)&&(o+=bv),l&&(o+=pv),r.filter(c=>!Wm(c)).reduce((c,f)=>c+(hv.test(f)?mv:f===""?gv:yv),o)}function Sv(a,l){return a.length===l.length&&a.slice(0,-1).every((o,c)=>o===l[c])?a[a.length-1]-l[l.length-1]:0}function wv(a,l,r=!1){let{routesMeta:o}=a,c={},f="/",d=[];for(let p=0;p<o.length;++p){let g=o[p],m=p===o.length-1,y=f==="/"?l:l.slice(f.length)||"/",b=ro({path:g.relativePath,caseSensitive:g.caseSensitive,end:m},y),x=g.route;if(!b&&m&&r&&!o[o.length-1].route.index&&(b=ro({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},y)),!b)return null;Object.assign(c,b.params),d.push({params:c,pathname:Lt([f,b.pathname]),pathnameBase:Ev(Lt([f,b.pathnameBase])),route:x}),b.pathnameBase!=="/"&&(f=Lt([f,b.pathnameBase]))}return d}function ro(a,l){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[r,o]=xv(a.path,a.caseSensitive,a.end),c=l.match(r);if(!c)return null;let f=c[0],d=f.replace(/(.)\/+$/,"$1"),p=c.slice(1);return{params:o.reduce((m,{paramName:y,isOptional:b},x)=>{if(y==="*"){let I=p[x]||"";d=f.slice(0,f.length-I.length).replace(/(.)\/+$/,"$1")}const S=p[x];return b&&!S?m[y]=void 0:m[y]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:d,pattern:a}}function xv(a,l=!1,r=!0){qn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],c="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,g)=>(o.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),c+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?c+="\\/*$":a!==""&&a!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),o]}function kv(a){try{return a.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return qn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),a}}function zt(a,l){if(l==="/")return a;if(!a.toLowerCase().startsWith(l.toLowerCase()))return null;let r=l.endsWith("/")?l.length-1:l.length,o=a.charAt(r);return o&&o!=="/"?null:a.slice(r)||"/"}var Ip=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cv=a=>Ip.test(a);function Tv(a,l="/"){let{pathname:r,search:o="",hash:c=""}=typeof a=="string"?Ea(a):a,f;if(r)if(Cv(r))f=r;else{if(r.includes("//")){let d=r;r=r.replace(/\/\/+/g,"/"),qn(!1,`Pathnames cannot have embedded double slashes - normalizing ${d} -> ${r}`)}r.startsWith("/")?f=Fm(r.substring(1),"/"):f=Fm(r,l)}else f=l;return{pathname:f,search:_v(o),hash:Dv(c)}}function Fm(a,l){let r=l.replace(/\/+$/,"").split("/");return a.split("/").forEach(c=>{c===".."?r.length>1&&r.pop():c!=="."&&r.push(c)}),r.length>1?r.join("/"):"/"}function Uu(a,l,r,o){return`Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Av(a){return a.filter((l,r)=>r===0||l.route.path&&l.route.path.length>0)}function mc(a){let l=Av(a);return l.map((r,o)=>o===l.length-1?r.pathname:r.pathnameBase)}function pc(a,l,r,o=!1){let c;typeof a=="string"?c=Ea(a):(c={...a},Ve(!c.pathname||!c.pathname.includes("?"),Uu("?","pathname","search",c)),Ve(!c.pathname||!c.pathname.includes("#"),Uu("#","pathname","hash",c)),Ve(!c.search||!c.search.includes("#"),Uu("#","search","hash",c)));let f=a===""||c.pathname==="",d=f?"/":c.pathname,p;if(d==null)p=r;else{let b=l.length-1;if(!o&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),b-=1;c.pathname=x.join("/")}p=b>=0?l[b]:"/"}let g=Tv(c,p),m=d&&d!=="/"&&d.endsWith("/"),y=(f||d===".")&&r.endsWith("/");return!g.pathname.endsWith("/")&&(m||y)&&(g.pathname+="/"),g}var Lt=a=>a.join("/").replace(/\/\/+/g,"/"),Ev=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),_v=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Dv=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,Rv=class{constructor(a,l,r,o=!1){this.status=a,this.statusText=l||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Ov(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Mv(a){return a.map(l=>l.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Up=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Bp(a,l){let r=a;if(typeof r!="string"||!Ip.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let o=r,c=!1;if(Up)try{let f=new URL(window.location.href),d=r.startsWith("//")?new URL(f.protocol+r):new URL(r),p=zt(d.pathname,l);d.origin===f.origin&&p!=null?r=p+d.search+d.hash:c=!0}catch{qn(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:c,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Hp=["POST","PUT","PATCH","DELETE"];new Set(Hp);var Lv=["GET",...Hp];new Set(Lv);var wi=j.createContext(null);wi.displayName="DataRouter";var co=j.createContext(null);co.displayName="DataRouterState";var zv=j.createContext(!1),qp=j.createContext({isTransitioning:!1});qp.displayName="ViewTransition";var Nv=j.createContext(new Map);Nv.displayName="Fetchers";var Iv=j.createContext(null);Iv.displayName="Await";var jn=j.createContext(null);jn.displayName="Navigation";var Rl=j.createContext(null);Rl.displayName="Location";var it=j.createContext({outlet:null,matches:[],isDataRoute:!1});it.displayName="Route";var gc=j.createContext(null);gc.displayName="RouteError";var jp="REACT_ROUTER_ERROR",Uv="REDIRECT",Bv="ROUTE_ERROR_RESPONSE";function Hv(a){if(a.startsWith(`${jp}:${Uv}:{`))try{let l=JSON.parse(a.slice(28));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.location=="string"&&typeof l.reloadDocument=="boolean"&&typeof l.replace=="boolean")return l}catch{}}function qv(a){if(a.startsWith(`${jp}:${Bv}:{`))try{let l=JSON.parse(a.slice(40));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string")return new Rv(l.status,l.statusText,l.data)}catch{}}function jv(a,{relative:l}={}){Ve(xi(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=j.useContext(jn),{hash:c,pathname:f,search:d}=Ol(a,{relative:l}),p=f;return r!=="/"&&(p=f==="/"?r:Lt([r,f])),o.createHref({pathname:p,search:d,hash:c})}function xi(){return j.useContext(Rl)!=null}function oa(){return Ve(xi(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Rl).location}var Yp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Pp(a){j.useContext(jn).static||j.useLayoutEffect(a)}function Gp(){let{isDataRoute:a}=j.useContext(it);return a?nS():Yv()}function Yv(){Ve(xi(),"useNavigate() may be used only in the context of a <Router> component.");let a=j.useContext(wi),{basename:l,navigator:r}=j.useContext(jn),{matches:o}=j.useContext(it),{pathname:c}=oa(),f=JSON.stringify(mc(o)),d=j.useRef(!1);return Pp(()=>{d.current=!0}),j.useCallback((g,m={})=>{if(qn(d.current,Yp),!d.current)return;if(typeof g=="number"){r.go(g);return}let y=pc(g,JSON.parse(f),c,m.relative==="path");a==null&&l!=="/"&&(y.pathname=y.pathname==="/"?l:Lt([l,y.pathname])),(m.replace?r.replace:r.push)(y,m.state,m)},[l,r,f,c,a])}j.createContext(null);function Pv(){let{matches:a}=j.useContext(it),l=a[a.length-1];return l?l.params:{}}function Ol(a,{relative:l}={}){let{matches:r}=j.useContext(it),{pathname:o}=oa(),c=JSON.stringify(mc(r));return j.useMemo(()=>pc(a,JSON.parse(c),o,l==="path"),[a,c,o,l])}function Gv(a,l){return Wp(a,l)}function Wp(a,l,r,o,c){Ve(xi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=j.useContext(jn),{matches:d}=j.useContext(it),p=d[d.length-1],g=p?p.params:{},m=p?p.pathname:"/",y=p?p.pathnameBase:"/",b=p&&p.route;{let W=b&&b.path||"";Vp(m,!b||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let x=oa(),S;if(l){let W=typeof l=="string"?Ea(l):l;Ve(y==="/"||W.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${W.pathname}" was given in the \`location\` prop.`),S=W}else S=x;let I=S.pathname||"/",z=I;if(y!=="/"){let W=y.replace(/^\//,"").split("/");z="/"+I.replace(/^\//,"").split("/").slice(W.length).join("/")}let U=Lp(a,{pathname:z});qn(b||U!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),qn(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=Xv(U&&U.map(W=>Object.assign({},W,{params:Object.assign({},g,W.params),pathname:Lt([y,f.encodeLocation?f.encodeLocation(W.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?y:Lt([y,f.encodeLocation?f.encodeLocation(W.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:W.pathnameBase])})),d,r,o,c);return l&&M?j.createElement(Rl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},M):M}function Wv(){let a=eS(),l=Ov(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),r=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",a),d=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:f},"ErrorBoundary")," or"," ",j.createElement("code",{style:f},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},l),r?j.createElement("pre",{style:c},r):null,d)}var Fv=j.createElement(Wv,null),Fp=class extends j.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){this.props.onError?this.props.onError(a,l):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const r=qv(a.digest);r&&(a=r)}let l=a!==void 0?j.createElement(it.Provider,{value:this.props.routeContext},j.createElement(gc.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?j.createElement(Vv,{error:a},l):l}};Fp.contextType=zv;var Bu=new WeakMap;function Vv({children:a,error:l}){let{basename:r}=j.useContext(jn);if(typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){let o=Hv(l.digest);if(o){let c=Bu.get(l);if(c)throw c;let f=Bp(o.location,r);if(Up&&!Bu.get(l))if(f.isExternal||o.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:o.replace}));throw Bu.set(l,d),d}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return a}function Qv({routeContext:a,match:l,children:r}){let o=j.useContext(wi);return o&&o.static&&o.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=l.route.id),j.createElement(it.Provider,{value:a},r)}function Xv(a,l=[],r=null,o=null,c=null){if(a==null){if(!r)return null;if(r.errors)a=r.matches;else if(l.length===0&&!r.initialized&&r.matches.length>0)a=r.matches;else return null}let f=a,d=r?.errors;if(d!=null){let y=f.findIndex(b=>b.route.id&&d?.[b.route.id]!==void 0);Ve(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,y+1))}let p=!1,g=-1;if(r)for(let y=0;y<f.length;y++){let b=f[y];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(g=y),b.route.id){let{loaderData:x,errors:S}=r,I=b.route.loader&&!x.hasOwnProperty(b.route.id)&&(!S||S[b.route.id]===void 0);if(b.route.lazy||I){p=!0,g>=0?f=f.slice(0,g+1):f=[f[0]];break}}}let m=r&&o?(y,b)=>{o(y,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Mv(r.matches),errorInfo:b})}:void 0;return f.reduceRight((y,b,x)=>{let S,I=!1,z=null,U=null;r&&(S=d&&b.route.id?d[b.route.id]:void 0,z=b.route.errorElement||Fv,p&&(g<0&&x===0?(Vp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,U=null):g===x&&(I=!0,U=b.route.hydrateFallbackElement||null)));let M=l.concat(f.slice(0,x+1)),W=()=>{let G;return S?G=z:I?G=U:b.route.Component?G=j.createElement(b.route.Component,null):b.route.element?G=b.route.element:G=y,j.createElement(Qv,{match:b,routeContext:{outlet:y,matches:M,isDataRoute:r!=null},children:G})};return r&&(b.route.ErrorBoundary||b.route.errorElement||x===0)?j.createElement(Fp,{location:r.location,revalidation:r.revalidation,component:z,error:S,children:W(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:m}):W()},null)}function yc(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kv(a){let l=j.useContext(wi);return Ve(l,yc(a)),l}function Zv(a){let l=j.useContext(co);return Ve(l,yc(a)),l}function $v(a){let l=j.useContext(it);return Ve(l,yc(a)),l}function bc(a){let l=$v(a),r=l.matches[l.matches.length-1];return Ve(r.route.id,`${a} can only be used on routes that contain a unique "id"`),r.route.id}function Jv(){return bc("useRouteId")}function eS(){let a=j.useContext(gc),l=Zv("useRouteError"),r=bc("useRouteError");return a!==void 0?a:l.errors?.[r]}function nS(){let{router:a}=Kv("useNavigate"),l=bc("useNavigate"),r=j.useRef(!1);return Pp(()=>{r.current=!0}),j.useCallback(async(c,f={})=>{qn(r.current,Yp),r.current&&(typeof c=="number"?await a.navigate(c):await a.navigate(c,{fromRouteId:l,...f}))},[a,l])}var Vm={};function Vp(a,l,r){!l&&!Vm[a]&&(Vm[a]=!0,qn(!1,r))}j.memo(tS);function tS({routes:a,future:l,state:r,onError:o}){return Wp(a,void 0,r,o,l)}function aS({to:a,replace:l,state:r,relative:o}){Ve(xi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=j.useContext(jn);qn(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=j.useContext(it),{pathname:d}=oa(),p=Gp(),g=pc(a,mc(f),d,o==="path"),m=JSON.stringify(g);return j.useEffect(()=>{p(JSON.parse(m),{replace:l,state:r,relative:o})},[p,m,o,l,r]),null}function nc(a){Ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function iS({basename:a="/",children:l=null,location:r,navigationType:o="POP",navigator:c,static:f=!1,unstable_useTransitions:d}){Ve(!xi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=a.replace(/^\/*/,"/"),g=j.useMemo(()=>({basename:p,navigator:c,static:f,unstable_useTransitions:d,future:{}}),[p,c,f,d]);typeof r=="string"&&(r=Ea(r));let{pathname:m="/",search:y="",hash:b="",state:x=null,key:S="default"}=r,I=j.useMemo(()=>{let z=zt(m,p);return z==null?null:{location:{pathname:z,search:y,hash:b,state:x,key:S},navigationType:o}},[p,m,y,b,x,S,o]);return qn(I!=null,`<Router basename="${p}"> is not able to match the URL "${m}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:j.createElement(jn.Provider,{value:g},j.createElement(Rl.Provider,{children:l,value:I}))}function lS({children:a,location:l}){return Gv(tc(a),l)}function tc(a,l=[]){let r=[];return j.Children.forEach(a,(o,c)=>{if(!j.isValidElement(o))return;let f=[...l,c];if(o.type===j.Fragment){r.push.apply(r,tc(o.props.children,f));return}Ve(o.type===nc,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ve(!o.props.index||!o.props.children,"An index route cannot have child routes.");let d={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=tc(o.props.children,f)),r.push(d)}),r}var ao="get",io="application/x-www-form-urlencoded";function fo(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function rS(a){return fo(a)&&a.tagName.toLowerCase()==="button"}function oS(a){return fo(a)&&a.tagName.toLowerCase()==="form"}function sS(a){return fo(a)&&a.tagName.toLowerCase()==="input"}function uS(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function cS(a,l){return a.button===0&&(!l||l==="_self")&&!uS(a)}var Jr=null;function fS(){if(Jr===null)try{new FormData(document.createElement("form"),0),Jr=!1}catch{Jr=!0}return Jr}var dS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hu(a){return a!=null&&!dS.has(a)?(qn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${io}"`),null):a}function hS(a,l){let r,o,c,f,d;if(oS(a)){let p=a.getAttribute("action");o=p?zt(p,l):null,r=a.getAttribute("method")||ao,c=Hu(a.getAttribute("enctype"))||io,f=new FormData(a)}else if(rS(a)||sS(a)&&(a.type==="submit"||a.type==="image")){let p=a.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||p.getAttribute("action");if(o=g?zt(g,l):null,r=a.getAttribute("formmethod")||p.getAttribute("method")||ao,c=Hu(a.getAttribute("formenctype"))||Hu(p.getAttribute("enctype"))||io,f=new FormData(p,a),!fS()){let{name:m,type:y,value:b}=a;if(y==="image"){let x=m?`${m}.`:"";f.append(`${x}x`,"0"),f.append(`${x}y`,"0")}else m&&f.append(m,b)}}else{if(fo(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=ao,o=null,c=io,d=a}return f&&c==="text/plain"&&(d=f,f=void 0),{action:o,method:r.toLowerCase(),encType:c,formData:f,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vc(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function mS(a,l,r,o){let c=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${o}`:c.pathname=`${c.pathname}.${o}`:c.pathname==="/"?c.pathname=`_root.${o}`:l&&zt(c.pathname,l)==="/"?c.pathname=`${l.replace(/\/$/,"")}/_root.${o}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${o}`,c}async function pS(a,l){if(a.id in l)return l[a.id];try{let r=await import(a.module);return l[a.id]=r,r}catch(r){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function gS(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function yS(a,l,r){let o=await Promise.all(a.map(async c=>{let f=l.routes[c.route.id];if(f){let d=await pS(f,r);return d.links?d.links():[]}return[]}));return wS(o.flat(1).filter(gS).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Qm(a,l,r,o,c,f){let d=(g,m)=>r[m]?g.route.id!==r[m].route.id:!0,p=(g,m)=>r[m].pathname!==g.pathname||r[m].route.path?.endsWith("*")&&r[m].params["*"]!==g.params["*"];return f==="assets"?l.filter((g,m)=>d(g,m)||p(g,m)):f==="data"?l.filter((g,m)=>{let y=o.routes[g.route.id];if(!y||!y.hasLoader)return!1;if(d(g,m)||p(g,m))return!0;if(g.route.shouldRevalidate){let b=g.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function bS(a,l,{includeHydrateFallback:r}={}){return vS(a.map(o=>{let c=l.routes[o.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),r&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function vS(a){return[...new Set(a)]}function SS(a){let l={},r=Object.keys(a).sort();for(let o of r)l[o]=a[o];return l}function wS(a,l){let r=new Set;return new Set(l),a.reduce((o,c)=>{let f=JSON.stringify(SS(c));return r.has(f)||(r.add(f),o.push({key:f,link:c})),o},[])}function Qp(){let a=j.useContext(wi);return vc(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function xS(){let a=j.useContext(co);return vc(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Sc=j.createContext(void 0);Sc.displayName="FrameworkContext";function Xp(){let a=j.useContext(Sc);return vc(a,"You must render this element inside a <HydratedRouter> element"),a}function kS(a,l){let r=j.useContext(Sc),[o,c]=j.useState(!1),[f,d]=j.useState(!1),{onFocus:p,onBlur:g,onMouseEnter:m,onMouseLeave:y,onTouchStart:b}=l,x=j.useRef(null);j.useEffect(()=>{if(a==="render"&&d(!0),a==="viewport"){let z=M=>{M.forEach(W=>{d(W.isIntersecting)})},U=new IntersectionObserver(z,{threshold:.5});return x.current&&U.observe(x.current),()=>{U.disconnect()}}},[a]),j.useEffect(()=>{if(o){let z=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(z)}}},[o]);let S=()=>{c(!0)},I=()=>{c(!1),d(!1)};return r?a!=="intent"?[f,x,{}]:[f,x,{onFocus:Sl(p,S),onBlur:Sl(g,I),onMouseEnter:Sl(m,S),onMouseLeave:Sl(y,I),onTouchStart:Sl(b,S)}]:[!1,x,{}]}function Sl(a,l){return r=>{a&&a(r),r.defaultPrevented||l(r)}}function CS({page:a,...l}){let{router:r}=Qp(),o=j.useMemo(()=>Lp(r.routes,a,r.basename),[r.routes,a,r.basename]);return o?j.createElement(AS,{page:a,matches:o,...l}):null}function TS(a){let{manifest:l,routeModules:r}=Xp(),[o,c]=j.useState([]);return j.useEffect(()=>{let f=!1;return yS(a,l,r).then(d=>{f||c(d)}),()=>{f=!0}},[a,l,r]),o}function AS({page:a,matches:l,...r}){let o=oa(),{future:c,manifest:f,routeModules:d}=Xp(),{basename:p}=Qp(),{loaderData:g,matches:m}=xS(),y=j.useMemo(()=>Qm(a,l,m,f,o,"data"),[a,l,m,f,o]),b=j.useMemo(()=>Qm(a,l,m,f,o,"assets"),[a,l,m,f,o]),x=j.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let z=new Set,U=!1;if(l.forEach(W=>{let G=f.routes[W.route.id];!G||!G.hasLoader||(!y.some(re=>re.route.id===W.route.id)&&W.route.id in g&&d[W.route.id]?.shouldRevalidate||G.hasClientLoader?U=!0:z.add(W.route.id))}),z.size===0)return[];let M=mS(a,p,c.unstable_trailingSlashAwareDataRequests,"data");return U&&z.size>0&&M.searchParams.set("_routes",l.filter(W=>z.has(W.route.id)).map(W=>W.route.id).join(",")),[M.pathname+M.search]},[p,c.unstable_trailingSlashAwareDataRequests,g,o,f,y,l,a,d]),S=j.useMemo(()=>bS(b,f),[b,f]),I=TS(b);return j.createElement(j.Fragment,null,x.map(z=>j.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...r})),S.map(z=>j.createElement("link",{key:z,rel:"modulepreload",href:z,...r})),I.map(({key:z,link:U})=>j.createElement("link",{key:z,nonce:r.nonce,...U})))}function ES(...a){return l=>{a.forEach(r=>{typeof r=="function"?r(l):r!=null&&(r.current=l)})}}var _S=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{_S&&(window.__reactRouterVersion="7.12.0")}catch{}function DS({basename:a,children:l,unstable_useTransitions:r,window:o}){let c=j.useRef();c.current==null&&(c.current=ov({window:o,v5Compat:!0}));let f=c.current,[d,p]=j.useState({action:f.action,location:f.location}),g=j.useCallback(m=>{r===!1?p(m):j.startTransition(()=>p(m))},[r]);return j.useLayoutEffect(()=>f.listen(g),[f,g]),j.createElement(iS,{basename:a,children:l,location:d.location,navigationType:d.action,navigator:f,unstable_useTransitions:r})}var Kp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zp=j.forwardRef(function({onClick:l,discover:r="render",prefetch:o="none",relative:c,reloadDocument:f,replace:d,state:p,target:g,to:m,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:x,...S},I){let{basename:z,unstable_useTransitions:U}=j.useContext(jn),M=typeof m=="string"&&Kp.test(m),W=Bp(m,z);m=W.to;let G=jv(m,{relative:c}),[re,oe,B]=kS(o,S),K=MS(m,{replace:d,state:p,target:g,preventScrollReset:y,relative:c,viewTransition:b,unstable_defaultShouldRevalidate:x,unstable_useTransitions:U});function ce(ge){l&&l(ge),ge.defaultPrevented||K(ge)}let fe=j.createElement("a",{...S,...B,href:W.absoluteURL||G,onClick:W.isExternal||f?l:ce,ref:ES(I,oe),target:g,"data-discover":!M&&r==="render"?"true":void 0});return re&&!M?j.createElement(j.Fragment,null,fe,j.createElement(CS,{page:G})):fe});Zp.displayName="Link";var $p=j.forwardRef(function({"aria-current":l="page",caseSensitive:r=!1,className:o="",end:c=!1,style:f,to:d,viewTransition:p,children:g,...m},y){let b=Ol(d,{relative:m.relative}),x=oa(),S=j.useContext(co),{navigator:I,basename:z}=j.useContext(jn),U=S!=null&&US(b)&&p===!0,M=I.encodeLocation?I.encodeLocation(b).pathname:b.pathname,W=x.pathname,G=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;r||(W=W.toLowerCase(),G=G?G.toLowerCase():null,M=M.toLowerCase()),G&&z&&(G=zt(G,z)||G);const re=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let oe=W===M||!c&&W.startsWith(M)&&W.charAt(re)==="/",B=G!=null&&(G===M||!c&&G.startsWith(M)&&G.charAt(M.length)==="/"),K={isActive:oe,isPending:B,isTransitioning:U},ce=oe?l:void 0,fe;typeof o=="function"?fe=o(K):fe=[o,oe?"active":null,B?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let ge=typeof f=="function"?f(K):f;return j.createElement(Zp,{...m,"aria-current":ce,className:fe,ref:y,style:ge,to:d,viewTransition:p},typeof g=="function"?g(K):g)});$p.displayName="NavLink";var RS=j.forwardRef(({discover:a="render",fetcherKey:l,navigate:r,reloadDocument:o,replace:c,state:f,method:d=ao,action:p,onSubmit:g,relative:m,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:x,...S},I)=>{let{unstable_useTransitions:z}=j.useContext(jn),U=NS(),M=IS(p,{relative:m}),W=d.toLowerCase()==="get"?"get":"post",G=typeof p=="string"&&Kp.test(p),re=oe=>{if(g&&g(oe),oe.defaultPrevented)return;oe.preventDefault();let B=oe.nativeEvent.submitter,K=B?.getAttribute("formmethod")||d,ce=()=>U(B||oe.currentTarget,{fetcherKey:l,method:K,navigate:r,replace:c,state:f,relative:m,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:x});z&&r!==!1?j.startTransition(()=>ce()):ce()};return j.createElement("form",{ref:I,method:W,action:M,onSubmit:o?g:re,...S,"data-discover":!G&&a==="render"?"true":void 0})});RS.displayName="Form";function OS(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jp(a){let l=j.useContext(wi);return Ve(l,OS(a)),l}function MS(a,{target:l,replace:r,state:o,preventScrollReset:c,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:p,unstable_useTransitions:g}={}){let m=Gp(),y=oa(),b=Ol(a,{relative:f});return j.useCallback(x=>{if(cS(x,l)){x.preventDefault();let S=r!==void 0?r:_l(y)===_l(b),I=()=>m(a,{replace:S,state:o,preventScrollReset:c,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:p});g?j.startTransition(()=>I()):I()}},[y,m,b,r,o,l,a,c,f,d,p,g])}var LS=0,zS=()=>`__${String(++LS)}__`;function NS(){let{router:a}=Jp("useSubmit"),{basename:l}=j.useContext(jn),r=Jv(),o=a.fetch,c=a.navigate;return j.useCallback(async(f,d={})=>{let{action:p,method:g,encType:m,formData:y,body:b}=hS(f,l);if(d.navigate===!1){let x=d.fetcherKey||zS();await o(x,r,d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:b,formMethod:d.method||g,formEncType:d.encType||m,flushSync:d.flushSync})}else await c(d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:b,formMethod:d.method||g,formEncType:d.encType||m,replace:d.replace,state:d.state,fromRouteId:r,flushSync:d.flushSync,viewTransition:d.viewTransition})},[o,c,l,r])}function IS(a,{relative:l}={}){let{basename:r}=j.useContext(jn),o=j.useContext(it);Ve(o,"useFormAction must be used inside a RouteContext");let[c]=o.matches.slice(-1),f={...Ol(a||".",{relative:l})},d=oa();if(a==null){f.search=d.search;let p=new URLSearchParams(f.search),g=p.getAll("index");if(g.some(y=>y==="")){p.delete("index"),g.filter(b=>b).forEach(b=>p.append("index",b));let y=p.toString();f.search=y?`?${y}`:""}}return(!a||a===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(f.pathname=f.pathname==="/"?r:Lt([r,f.pathname])),_l(f)}function US(a,{relative:l}={}){let r=j.useContext(qp);Ve(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Jp("useViewTransitionState"),c=Ol(a,{relative:l});if(!r.isTransitioning)return!1;let f=zt(r.currentLocation.pathname,o)||r.currentLocation.pathname,d=zt(r.nextLocation.pathname,o)||r.nextLocation.pathname;return ro(c.pathname,d)!=null||ro(c.pathname,f)!=null}const BS=`# 10 Grep Commands That'll Make You Feel Like a Linux Wizard


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
-   \`|\`  OR operator (with  \`-E\`  flag)`,HS=`# 5 Automation Scripts Every Linux User Should Know


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

This script cleans your system and keeps a record of when it happened and what was done. It removes unnecessary files, helping your Linux system stay clean, efficient, and free of disk space problems.`,qS=`# 10 Bash Scripts Every Linux SysAdmin Should Have Ready

## Script 1: System Health Monitor

This script checks CPU, memory, disk space, and running processes in one command.

\`\`\`
#!/bin/bash
echo "System Health Report"
echo "===================="
echo "Hostname: $(hostname)"
echo "Time: $(date)"
echo ""
echo "CPU Usage:"
top -bn1 | grep "Cpu(s)" | awk '{print "User: " $2 " System: " $4 " Idle: " $8}'
echo ""
echo "Memory Usage:"
free -h | awk '/^Mem:/ {print "Total: " $2 " Used: " $3 " Free: " $4}'
echo ""
echo "Disk Usage:"
df -h / | awk 'NR==2 {print "Used: " $3 " Available: " $4 " Usage: " $5}'
echo ""
echo "Load Average:"
uptime | awk -F'load average:' '{print $2}'

\`\`\`

Save as  \`health_check.sh\`. Run it daily in cron to catch problems before they escalate.

## Script 2: Automated Backup with Rotation

Backups fail when nobody manages them. This script backs up a directory and keeps only the last 7 days of backups.

\`\`\`
#!/bin/bash
BACKUP_DIR="/backups"
SOURCE_DIR="/var/www"
DAYS_TO_KEEP=7
DATE=$(date +%Y%m%d)
mkdir -p $BACKUP_DIR
tar czf $BACKUP_DIR/backup_$DATE.tar.gz $SOURCE_DIR
find $BACKUP_DIR -name "backup_*.tar.gz" -mtime +$DAYS_TO_KEEP -delete
echo "Backup completed: $DATE"

\`\`\`

Run this daily. It automatically removes old backups so you don't run out of disk space.

## Script 3: Log Rotation and Cleanup

Logs consume disk space quickly. This script cleans old logs and keeps your disk healthy.

\`\`\`
#!/bin/bash
LOG_DIR="/var/log"
DAYS_OLD=30
find $LOG_DIR -name "*.log" -type f -mtime +$DAYS_OLD -exec rm {} \\;
find $LOG_DIR -name "*.gz" -type f -mtime +$DAYS_OLD -exec rm {} \\;
echo "Old logs removed from $LOG_DIR"

\`\`\`

Pair this with logrotate for maximum efficiency.

## Script 4: Service Health Checker

This script checks if critical services are running and restarts them if they fail.

\`\`\`
#!/bin/bash
SERVICES=("nginx" "mysql" "redis-server")
for service in "\${SERVICES[@]}"
do
  if systemctl is-active --quiet $service; then
    echo "$service is running"
  else
    echo "$service is down. Attempting restart..."
    systemctl restart $service
    sleep 2
    if systemctl is-active --quiet $service; then
      echo "$service restarted successfully"
    else
      echo "Failed to restart $service"
    fi
  fi
done

\`\`\`

Run every 5 minutes in cron. Catches outages instantly.

## Script 5: User Activity Monitor

Track who logged in, when they logged in, and what they did.

\`\`\`
#!/bin/bash
echo "Last 10 User Logins:"
lastlog -t 1 | head -11
echo ""
echo "Currently Logged In Users:"
w -h
echo ""
echo "Failed Login Attempts (last 24 hours):"
grep "Failed password" /var/log/auth.log | tail -20 | wc -l

\`\`\`

Use this for security audits and compliance reporting.

## Script 6: Disk Space Alert

Get notified before your disk fills up completely.

\`\`\`
#!/bin/bash
THRESHOLD=80
EMAIL="admin@example.com"
USAGE=$(df / | awk 'NR==2 {print $5}' | cut -d'%' -f1)
if [ "$USAGE" -gt "$THRESHOLD" ]; then
  df -h | mail -s "Disk Space Alert: $USAGE%" $EMAIL
fi

\`\`\`

Run every hour. Prevention beats firefighting.

## Script 7: Port and Service Scanner

Quickly identify which ports are listening on your server.

\`\`\`
#!/bin/bash
echo "Open Ports and Services:"
netstat -tulpn | grep LISTEN | awk '{print $4, $7}' | while read port service
do
  echo "Port: $port Service: $service"
done

\`\`\`

Useful for security reviews and troubleshooting.

## Script 8: Database Backup with Timestamp

Backs up MySQL or MariaDB with automatic naming and compression.

\`\`\`
#!/bin/bash
DB_USER="root"
DB_PASSWORD="your_password"
BACKUP_DIR="/backups/mysql"
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR
mysqldump -u $DB_USER -p$DB_PASSWORD --all-databases | gzip > $BACKUP_DIR/db_backup_$DATE.sql.gz
echo "Database backup created: $DATE"

\`\`\`

Store your password in a secure  \`.my.cnf\`  file instead of hardcoding it.

## Script 9: File Permission Auditor

Check for files with risky permissions that could cause security issues.

\`\`\`
#!/bin/bash
echo "Files with world-writable permissions:"
find / -type f -perm -002 2>/dev/null | head -20
echo ""
echo "Files with SUID bit set:"
find / -type f -perm /4000 2>/dev/null | head -20
echo ""
echo "Recent modified files (last 24 hours):"
find / -type f -mtime -1 2>/dev/null | head -20

\`\`\`

Run this monthly for security compliance.

## Script 10: Process Resource Monitor

Find processes consuming the most CPU and memory.

\`\`\`
#!/bin/bash
echo "Top 5 CPU Consuming Processes:"
ps aux --sort=-%cpu | head -6
echo ""
echo "Top 5 Memory Consuming Processes:"
ps aux --sort=-%mem | head -6
echo ""
echo "Total Process Count:"
ps aux | wc -l

\`\`\`

Run this when you notice performance problems to identify the culprit.

## How to Use These Scripts

Create a scripts directory in your home folder:

\`\`\`
mkdir -p ~/bin
chmod +x ~/bin/*.sh

\`\`\`

Add this directory to your PATH in your  \`.bashrc\`:

\`\`\`
export PATH="$HOME/bin:$PATH"

\`\`\`

Then run any script from anywhere on your system.

## Scheduling Scripts with Cron

Run a health check every day:

\`\`\`
0 2 * * * /home/user/bin/health_check.sh

\`\`\`

Run backup rotation every 6 hours:

\`\`\`
0 */6 * * * /home/user/bin/backup.sh

\`\`\`

Run the service checker every 5 minutes:

\`\`\`
*/5 * * * * /home/user/bin/service_check.sh

\`\`\``,jS=`# 5 Bash Scripts That Will Transform Your DevOps Workflow


## 1. The Intelligent Health Check Script

Most health checks are binary: up or down. But what about performance degradation, memory leaks, or disk space issues that don't trigger alerts until it's too late?

\`\`\`
#!/bin/bash
# Smart health monitoring with graduated alerts
check_service_health() {
    local service=$1
    local warning_threshold=80
    local critical_threshold=95
    
    cpu_usage=$(ps -C $service -o %cpu --no-headers | awk '{sum+=$1} END {print sum}')
    memory_usage=$(ps -C $service -o %mem --no-headers | awk '{sum+=$1} END {print sum}')
    
    if (( $(echo "$cpu_usage > $critical_threshold" | bc -l) )); then
        echo "CRITICAL: $service CPU at \${cpu_usage}%" | logger -t health-check
        # Trigger immediate alert
    elif (( $(echo "$cpu_usage > $warning_threshold" | bc -l) )); then
        echo "WARNING: $service CPU at \${cpu_usage}%" | logger -t health-check
        # Log for trending analysis
    fi
}
\`\`\`

This script doesn't just check if a service is running — it predicts problems before they become outages. The magic is in the graduated alerting and historical logging.

## 2. The Zero-Downtime Deployment Script

Blue-green deployments are great in theory, but most teams struggle with the orchestration. This script handles the complexity:

\`\`\`
#!/bin/bash
# Zero-downtime deployment with automatic rollback
deploy_with_rollback() {
    local app_name=$1
    local new_version=$2
    
    # Health check function
    health_check() {
        curl -sf http://localhost:8080/health > /dev/null
        return $?
    }
    
    echo "Starting deployment of $app_name:$new_version"
    
    # Deploy to staging slot
    docker run -d --name \${app_name}_staging $app_name:$new_version
    
    # Wait for startup
    sleep 30
    
    # Verify health
    if health_check; then
        # Switch traffic
        docker stop \${app_name}_prod
        docker rename \${app_name}_staging \${app_name}_prod
        echo "Deployment successful"
    else
        # Automatic rollback
        docker stop \${app_name}_staging
        echo "Deployment failed - rolled back automatically"
        exit 1
    fi
}
\`\`\`

The key insight here is automated verification and rollback. Most deployment failures happen because someone forgot to check if the new version actually works.

## 3. The Log Analysis Powerhouse

Searching through gigabytes of logs manually is a career-killer. This script turns log analysis into actionable intelligence:

\`\`\`
#!/bin/bash
# Intelligent log analysis with pattern detection
analyze_logs() {
    local log_file=$1
    local time_window=\${2:-"1 hour ago"}
    
    echo "=== Error Summary (Last Hour) ==="
    grep -i "error\\|exception\\|failed" $log_file | 
    awk -v since="$(date -d "$time_window" +%s)" '
    {
        # Extract timestamp and convert to epoch
        if (match($0, /[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}/)) {
            ts = mktime(gensub(/[-:]/, " ", "g", substr($0, RSTART, RLENGTH)))
            if (ts > since) {
                errors[gensub(/.*([Ee]rror[^:]*):.*/, "\\\\1", "g")]++
            }
        }
    }
    END {
        for (error in errors) {
            printf "%-50s: %d occurrences\\n", error, errors[error]
        }
    }'
    
    echo -e "\\n=== Performance Trends ==="
    grep "response_time" $log_file | tail -100 | 
    awk '{print $NF}' | sort -n | 
    awk '{
        sum+=$1; 
        arr[NR]=$1
    } 
    END {
        printf "Average: %.2fms\\n", sum/NR
        printf "Median: %.2fms\\n", arr[int(NR/2)]
        printf "95th percentile: %.2fms\\n", arr[int(NR*0.95)]
    }'
}
\`\`\`

This transforms raw logs into executive-ready summaries. Instead of saying "there were some errors," you can say "we had 47 database timeout errors affecting the payment system."

## 4. The Infrastructure Provisioning Script

Infrastructure as Code doesn't mean you can't use Bash effectively. This script bridges the gap between cloud APIs and your deployment pipeline:

\`\`\`
#!/bin/bash
# Cloud-agnostic server provisioning
provision_server() {
    local environment=$1
    local server_type=$2
    
    # Configuration based on environment
    case $environment in
        "prod")
            instance_type="m5.large"
            backup_required=true
            ;;
        "staging")
            instance_type="t3.medium"
            backup_required=false
            ;;
    esac
    
    # Create server (AWS example)
    instance_id=$(aws ec2 run-instances \\
        --image-id ami-0abcdef1234567890 \\
        --instance-type $instance_type \\
        --security-group-ids sg-12345678 \\
        --subnet-id subnet-12345678 \\
        --tag-specifications "ResourceType=instance,Tags=[{Key=Environment,Value=$environment},{Key=Type,Value=$server_type}]" \\
        --query 'Instances[0].InstanceId' \\
        --output text)
    
    # Wait for server to be ready
    aws ec2 wait instance-running --instance-ids $instance_id
    
    # Get IP address
    ip_address=$(aws ec2 describe-instances \\
        --instance-ids $instance_id \\
        --query 'Reservations[0].Instances[0].PublicIpAddress' \\
        --output text)
    
    echo "Server provisioned: $ip_address (ID: $instance_id)"
    
    # Configure server
    configure_server $ip_address $environment
}
\`\`\`

The power here is in environment-aware provisioning and automatic configuration. One script that works across development, staging, and production.

## 5. The Backup and Disaster Recovery Script

Backups that don't work are worse than no backups at all. This script ensures your backups are actually recoverable:

\`\`\`
#!/bin/bash
# Backup with automatic verification
backup_and_verify() {
    local database=$1
    local backup_location=$2
    
    timestamp=$(date +%Y%m%d_%H%M%S)
    backup_file="\${backup_location}/\${database}_\${timestamp}.sql.gz"
    
    echo "Starting backup of $database"
    
    # Create backup
    mysqldump --single-transaction --routines --triggers $database | 
    gzip > $backup_file
    
    # Verify backup integrity
    if gunzip -t $backup_file; then
        echo "Backup integrity verified"
        
        # Test restore to temporary database
        temp_db="\${database}_restore_test"
        mysql -e "CREATE DATABASE $temp_db"
        
        gunzip -c $backup_file | mysql $temp_db
        
        # Verify row counts match
        original_rows=$(mysql -sN -e "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema='$database'")
        restored_rows=$(mysql -sN -e "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema='$temp_db'")
        
        if [ "$original_rows" -eq "$restored_rows" ]; then
            echo "Backup verification successful"
            # Upload to cloud storage
            aws s3 cp $backup_file s3://backups/$database/
        else
            echo "ALERT: Backup verification failed!"
            exit 1
        fi
        
        # Cleanup
        mysql -e "DROP DATABASE $temp_db"
    else
        echo "ALERT: Backup file corrupted!"
        exit 1
    fi
}
\`\`\`

This script doesn't just create backups — it proves they work by testing restoration.`,YS='# Git Essentials and Cheat Sheet.\n\n### 🟦 Basic Git Commands\n\n1.  `git init`  – Initialize a Git Repository  \n    Creates a new Git repository in the current project folder.  \n    `git init`\n2.  `git clone`  – Copy a Remote Repository  \n    Downloads a complete copy of a repo from GitHub or any Git server.  \n    `git clone https://github.com/user/repo.git`\n3.  `git status`  – View Working Directory Status  \n    Shows changes you made, staged files, and untracked files.  \n    `git status`\n4.  `git add`  – Stage Files for Commit  \n    Moves files to the staging area.  \n    `git add file.txt`  \n    `git add .`  # add all changes\n5.  `git commit`  – Save Changes to Repo  \n    Records staged changes.  \n    `git commit -m "Initial commit"`\n6.  `git config`  – Configure Git Username & Email  \n    Sets author identity for commits.  \n    📌 Example:  \n    `git config --global user.name "Your Name"`  \n    `git config --global user.email "your@email.com"`\n7.  `git log`  – View Commit History  \n    Shows commit messages, authors, and timestamps.  \n    `git log`\n8.  `git show`  – Show Details of a Commit  \n    Displays changes, metadata, and diffs for a commit.  \n    `git show <commit-hash>`\n9.  `git diff`  – Compare Changes  \n    Shows what changed before committing or between commits.  \n    `git diff`  # unstaged changes  \n    `git diff --staged`  # staged changes\n10.  `git reset`  – Unstage or Undo Commits  \n    Undo staged files or move HEAD to a previous commit.  \n    `git reset HEAD file.txt`\n\n### 🟩 Branching & Merging\n\n11.  `git branch`  – List/Create Branches  \n    `git branch`  # list branches  \n    `git branch feature-login`  # create new branch\n12.  `git checkout`  – Switch Branches  \n    Older method for switching branches.  \n    `git checkout feature-login`\n13.  `git switch`  – Modern Branch Switch Command  \n    `git switch feature-login`\n14.  `git merge`  – Merge Branches  \n    Combines one branch into another.  \n    `git merge feature-login`\n15.  `git rebase`  – Reapply Commits  \n    Cleans commit history when merging.  \n    `git rebase main`\n16.  `git cherry-pick`  – Apply a Specific Commit  \n    Used to apply a single commit from another branch.  \n    `git cherry-pick <commit-hash>`\n\n### 🟧 Remote Repository Commands\n\n17.  `git remote`  – Manage Remote URLs  \n    Add or check remotes.  \n    `git remote add origin https://github.com/user/repo.git`\n18.  `git push`  – Upload Changes to Remote  \n    Sends commits to GitHub or other servers.  \n    `git push origin main`\n19.  `git pull`  – Download & Merge Changes  \n    Fetches remote updates and merges them.  \n    📌 Example:  \n    `git pull origin main`\n20.  `git fetch`  – Download Changes (No Merge)  \n    Updates local metadata without affecting working files.  \n    `git fetch origin`\n21.  `git remote -v`  – Show Remote URLs  \n    Displays all connected remotes.  \n    `git remote -v`\n\n### 🟨 Stashing & Cleaning\n\n22.  `git stash`  – Save Uncommitted Work  \n    Temporarily store changes without committing.  \n    📌 Example:  \n    `git stash`\n23.  `git stash pop`  – Restore Stashed Work  \n    📌 Example:  \n    `git stash pop`\n24.  `git stash list`  – View Stashes  \n    `git stash list`\n25.  `git clean`  – Remove Untracked Files  \n    `git clean -f`\n\n### 🟪 Tagging\n\n26.  `git tag`  – Create a Tag  \n    Usually used for release versions.  \n    `git tag -a v1.0 -m "Version 1.0"`\n27.  Delete a Tag  \n    📌 Example:  \n    `git tag -d v1.0`\n28.  Push Tags to Remote  \n    📌 Example:  \n    `git push origin --tags`\n\n### 🟥 Advanced Git Commands\n\n29.  `git bisect`  – Find Bug Introduced Commit  \n    Binary search through commits to find where a bug started.  \n    `git bisect start`\n30.  `git blame`  – Show Line-by-Line Authors  \n    Shows who changed each line of a file.  \n    `git blame file.txt`\n31.  `git reflog`  – View All Reference Logs  \n    Shows all changes to HEAD (including deleted commits).  \n    `git reflog`\n32.  `git submodule`  – Manage Submodules  \n    Used when a project includes another Git repo inside it.  \n    `git submodule add https://github.com/user/repo.git`\n33.  `git archive`  – Create a Zip Archive of Repo  \n    📌 Example:  \n    `git archive --format=zip HEAD > archive.zip`\n34.  `git gc`  – Garbage Collection  \n    Cleans up unnecessary files and optimizes the repo.  \n    `git gc`\n\n### 🟦 GitHub-Specific (GH CLI) Commands\n\n35.  `gh auth login`  – Login to GitHub  \n    `gh auth login`\n36.  `gh repo clone`  – Clone Repo from GitHub  \n    📌 Example:  \n    `gh repo clone user/repo`\n37.  `gh issue list`  – List GitHub Issues  \n    `gh issue list`\n38.  `gh pr create`  – Create Pull Request  \n    `gh pr create --title "New Feature" --body "Description of the feature"`\n39.  `gh repo create`  – Create a New GitHub Repository  \n    `gh repo create my-repo`',PS=`# 4 Bash Commands that Should Never Be Run on Any Machine!

## Fork Bomb

Following mysteriously looking command is known as the Fork Bomb.

\`\`\`
Copy:(){ :|:& };:
\`\`\`

Never ever make the mistake of running this command to see what it does. (Nor does any other in this post!)

At first glance, this command looks odd. Some might even doubt its validity. It is only after a closer inspection that you will see it invokes a function that recurses without end, and each recursive call spawns a new process. Once executed, processes multiply rapidly, exhausting memory and ultimately crashing the system.

Here is a modified version of the same Bash command.

\`\`\`
Copy
func() {
  func | func &
};
func
\`\`\`

See it now? Scary, right?

But there is a way to prevent yourself from fork bombs. There is a mechanism to limit the number of processes a user can spawn. This can be done by editing the /etc/security/limits.conf.

Disclaimer — I've experienced the havoc of a fork bomb firsthand, and it's certainly humbling (and a bit embarrassing) for any developer.

## rm -rf /

Using rm is always a bit dangerous, so developers need to handle it carefully. Picture this: you mean to delete the current folder and its contents with  \`rm -rf ./\`, but you accidentally type  \`rm -rf /\`. Notice the missing dot? That tiny mistake tells your computer to start deleting everything — and just like that, your entire system is gone.

You should never run this command — unless you're getting a new machine and completely despise everything on your old one 😉.

A good safeguard to add in your .bashrc is the following.

\`\`\`
Copy
alias rm='rm -i --preserve-root'
\`\`\`

The above alias ensures that the rm command asks for confirmation before deleting anything and ensures that you never delete root by mistake.

If you are interested in many more bashrc tricks, check out the following article. 👇

[[LINK:4:https%3A%2F%2Flevelup.gitconnected.com%2Fstack-overflow-classics-i-stole-for-my-bashrc-you-should-too-db7de46b083e:Stack%20Overflow%20Classics%20I%20Stole%20for%20My%20.bashrc%20(You%20Should%20Too)My%20favorite%20shell%20hacks%E2%80%A6%20Ready%20to%20paste!gitconnected.com]]

## Data Eraser

Linux systems offer a command called  \`dd\`  that enables copying data at raw byte level. Operations performed through  \`dd\`  are not reversible and should thus be operated very carefully.

Now look at this command before we start its dissection.

\`\`\`
Copy
dd if=/dev/zero of=/dev/sda
\`\`\`

The  \`if=\`  specifies the source from which bytes should be copied to  \`of=\`. In Linux,  \`/dev/zero\`  is an infinite source of bytes and  \`/dev/sda\`  is your disk. Thus essentially, this command overwrites your disk with zeros. 💀

There are no railguards available in the  \`dd\`  command to prevent this from happening accidentally. The best we can do is to disable the  \`dd\`  command if we don't need it.

\`\`\`
Copy
alias dd='echo "dd command is not available"'
\`\`\`

## Kill All Processes

The famous  \`kill\`  command is used to stop a running process. While being a handy tool, it should also be used carefully.

Take a look at the following command -

\`\`\`
Copy
kill -9 -1
\`\`\`

The command above sends a SIGKILL to all the processes accessible to the current user. This results in all processes getting killed.

It is thus very important that we never run the  \`kill\`  command with sudo privileges.

## chmod -R 777 /

The famous  \`chmod\`  command is used to change the permissions of a file. When used along with its  \`-R\`  flag, the command modifies the permission of files recursively.

Setting permission of a file to  \`777\`  essentially means "Permit Everything"!

Similar to the  \`rm -rf /\`  command, a typo in your  \`chmod\`  command can get you to execute  \`chmod -R 777 /\`  on your machine. Running this command will mess up the permissions on all files present on your machine.

To prevent such unwanted permission modification, you can create an alias in your bashrc that acts as a railguard.

\`\`\`
Copy
alias chmod='chmod --preserve-root'
\`\`\``,GS=`# How to Convert FLAC Music to Apple Lossless and Sync to iPhone

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
`,WS=`# The Lazy Engineer's Guide to Generating AWS Architecture Diagrams (Automatically!)

## The New Way: Automatically Generate AWS Architecture Diagrams

Now, imagine a world where your diagram updates itself. Yes — no more dragging, no more crying, no more "is that an ALB or an ELB?" confusion. With modern tools and scripts, you can generate AWS architecture diagrams automatically — straight from your cloud environment. Here's how it works (the simple method you came for 👇):

### Step 1: Let AWS Do the Heavy Lifting

AWS offers tools like AWS Perspective and AWS Application Composer. They can scan your cloud resources and auto-generate architecture visuals. Want proof? Check the official AWS Perspective documentation. It's like hiring a robot designer — efficient, fast, and zero attitude.

### Step 2: Use Infrastructure-as-Code (IaC) Magic

If your infra is defined with Terraform or CloudFormation, you can plug tools like Hava, CloudSkew, or Diagrams (Python library) to generate diagrams directly from code. Here's a quick nerdy flex:

\`\`\`
from diagrams import Diagram, AWS
with Diagram("My AWS Infra", show=False):
    AWS.compute.EC2("App Server") >> AWS.database.RDS("Database")
\`\`\`

And boom 💥 — an auto-generated AWS diagram appears. (Meanwhile, your designer friend is still aligning arrows in Figma.)

### Step 3: Simplify & Style It

Even auto-generated diagrams can look messy. So take a minute to simplify the layers, group by services, and color-code major components. I like to follow hexagonal architecture principles — it keeps everything modular and clear. If you're into that kind of structure, you'll love this read: 👉  [Hexagonal vs Layered Architecture: Why Engineers Prefer It](https://medium.com/@cloudshark/hexagonal-vs-layered-architecture-why-engineers-prefer-it-5f8abe7634be?source=stats_homepage--------------------------------------------)

## Why This Method Works

By generating AWS diagrams automatically:

-   ✅ You stay synced with reality (no outdated screenshots).
-   ✅ You reduce manual effort by 80%.
-   ✅ You can version-control your diagrams with your IaC code.
-   ✅ And most importantly — you don't spend Friday night aligning boxes.

That's right — automation isn't just for pipelines. It's for your mental peace.

## Real Talk: Tools That Actually Work

Let's name-drop a few tools that make life easier (no sponsorships here, just real ones):

-   Hava.io → Auto-generates live AWS diagrams
-   CloudCraft → Beautiful 3D-like AWS visuals
-   Lucidscale → Syncs with your AWS account for visual mapping
-   Diagrams (Python) → For coders who hate GUIs but love code
-   AWS Application Composer → AWS's own visual builder

Pick your favorite poison. I use Diagrams + CloudCraft, because it feels like AWS meets Pixar.

## Pro Tips for Clean, Shareable AWS Architecture Diagrams

Want your diagram to look like it belongs in a Netflix case study? Do this:

-   Use official AWS icons → Download from  [AWS Architecture Icons](https://aws.amazon.com/architecture/icons/?utm_source=chatgpt.com)
-   Group logically → Frontend, backend, databases, etc.
-   Label everything → Because "that one box" won't make sense in 3 months.
-   Add notes for context → Especially for future engineers joining the project.
-   Limit arrows → It's a diagram, not a conspiracy theory board.

For inspiration, you can even check how large systems scale visually in  [Monolith vs Microservices: The Netflix Case Study](https://medium.com/shark-engineering/monolith-vs-microservices-scalability-netflix-case-study-c8fc8651b98d?source=stats_homepage--------------------------------------------).

## Real Example: My "Oh Wow" Moment

The first time I generated an AWS diagram automatically, I felt like Tony Stark watching J.A.R.V.I.S. visualize the Iron Man suit. I ran my Terraform through Hava, and in seconds — boom — my entire cloud layout appeared. All my EC2s, RDSs, Lambdas… everything mapped like a digital city. I may or may not have whispered, "Finally, AWS makes sense."

## Bonus: Keep It Synced and Documented

Once you've got your fancy auto-diagram, make sure to:

-   Regenerate it after major infra changes
-   Embed it in your internal docs or wikis
-   Version control it (store with your IaC)

Because outdated diagrams are like expired milk — nobody trusts them.
`,FS=`# Server Security Response Guide

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

That means attempted exploitation, not just scanning.`,VS=`# Make Your Home Computer Reachable From Anywhere (No Public IP, No Router Touching)
## What We Need

Tailscale: makes your laptop + home machine behave like they're on the same private LAN (even across the internet, across CGNAT with periodically changing IP addresses, across your devices, as long as each of them has Tailscale installed and running).

NoMachine: gives you a stable remote desktop session (typing feels normal, clipboard works, OAuth/browser stuff behaves, copy/pasting works out of the box without the need of configuring it).

## Step 0 — Decide Who is "Home" and Who is "Travel"

Home machine: the computer you want to reach (Windows / Linux / Mac).

Travel machine: your laptop (MacBook in my case).

You'll install Tailscale on both. You'll install NoMachine on both, too! On the home machine (server) and on your laptop (client).

## Step 1 — Install Tailscale on macOS (Your Travel Laptop)

If you like Homebrew:

\`\`\`
brew install --cask tailscale
open -a Tailscale

\`\`\`

Log in once in the Tailscale app. Done. (If your travel machine is a Linux or Windows, just follow the instructions on Step 2).

## Step 2 — Install Tailscale on the Home Machine

### Linux (Home)

\`\`\`
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up

\`\`\`

### Windows 10 (Home) — The Clean Scoop Route

\`\`\`
Open PowerShell and run:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
iwr -useb get.scoop.sh | iex
scoop bucket add extras
scoop install tailscale

\`\`\`

Then open Tailscale and log in.

## Step 3 — Get the Home Machine's Tailscale IP Address

On the home machine (or anywhere you have the Tailscale CLI):

\`\`\`
tailscale ip -4

\`\`\`

You'll get something like this: 100.xxx.xx.xxx. That's your "private LAN across the internet" address. Optional you can get it by:

\`\`\`
tailscale status

\`\`\`

You should see both machines listed. Test from your client machine (laptop) whether the IP address of the home is reachable:

\`\`\`
ping 100.xxx.xx.xxx

\`\`\`

There should be a positive result.

<br>
<br>

## THIS SHIT IS FUCKING OPTIONAL. 

<br>
<br>

## Step 4 — Install NoMachine

### Linux (Home Machine)

[[LINK:3:https%3A%2F%2Fwww.nomachine.com%2Feverybody%2Fnomachine-for-your-os:Go here]] and download the Linux package:

\`\`\`
https://www.nomachine.com/everybody/nomachine-for-your-os

\`\`\`

Install the .deb (Ubuntu/Debian example):

\`\`\`
sudo dpkg -i nomachine_*_amd64.deb
sudo apt -f install

\`\`\`

### Windows 10 (Home Machine)

Same download page, pick Windows installer, install normally.

### macOS (Travel Laptop)

\`\`\`
brew install --cask nomachine

\`\`\`

First launch on macOS: give it the permissions it asks for (Screen Recording etc.). Remote desktop apps need them.

## Step 5 — Quick "Is the Path Open?" Test (Optional, but Satisfying)

From your MacBook, test NoMachine's default port on the home machine's Tailscale IP:

\`\`\`
nc -vz 100.xxx.xx.xxx 4000

\`\`\`

If that connects, you're golden. (Port 4000 is the default NoMachine NX port.)

## Step 6 — Connect with NoMachine Over Tailscale

On your MacBook:

1.  Open NoMachine
2.  Create a new connection
3.  Host: the home machine's Tailscale IP (100.xxx.xx.xxx)
4.  Port: 4000

Connect and log in with your normal OS user. Now you're on your home desktop… from anywhere… without your router ever noticing.

## That's the Whole Trick

You didn't "expose" your home machine to the public internet. You didn't buy a static IP. You didn't fight router UI archaeology. You just gave your two devices a private network path (Tailscale) and used that path for a proper desktop session (NoMachine).

## Mini Checklist

### On Both Machines

On home machine:

\`\`\`
tailscale ip -4 # or tailscale status to get the tailscale IP address (100.xx.xxx.xxx)

\`\`\`

On your laptop, also here and set up a new connection in NoMachine to your home machine. You need for this — your username and password of your home machine and the Tailscale IP address of your home machine.

## Sanity Test

\`\`\`
nc -vz <tailscale-ip> 4000

\`\`\``,QS=`# How to Answer a CTO (How You SOUND Matters)

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
Calm, structured thinking under pressure.`,XS=`## Section 1: Linux Basics

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
    
5.  Add user to group? usermod -aG`,KS=`# Linux Security Cheat Sheet

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
    \`\`\``,ZS=`# 15 Linux One-Liners That Feel Like Cheating

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
-   1m ~ 5m ~ 15m — The load is consistent (stable).`,$S=`# Linux Commands: Find All SUID Binaries (for Privilege Escalation)

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
\`\`\``,JS=`# Linux Interview Questions



## Section 1: Linux Basics and Daily Work

1.  What happens internally when you run the ls command?
2.  Difference between su and sudo and when you would use each?
3.  Explain the Linux boot process in simple steps.
4.  What is the purpose of the /proc directory?
5.  How do you check OS version and kernel version?
6.  What is an inode and why is it important?
7.  Difference between hard link and soft link.
8.  What happens if /etc/fstab has a wrong entry?
9.  How do you find the largest files in a filesystem?
10.  What are runlevels or systemd targets and why do they matter?

## Section 2: File System and Storage

1.  Difference between ext4 and xfs.
2.  What is LVM and why is it used in servers?
3.  How do you extend a logical volume without downtime?
4.  What happens when a filesystem becomes 100 percent full?
5.  How do you check disk usage and inode usage?
6.  Difference between mount and umount.
7.  What is a bind mount?
8.  How do you troubleshoot disk I/O slowness?
9.  What is fsck and when should it be used?
10.  Explain the fields in /etc/fstab.

## Section 3: User Management and Permissions

1.  Difference between /etc/passwd, /etc/shadow, and /etc/group.
2.  Explain Linux file permissions using numeric values.
3.  What is sticky bit and where is it used?
4.  Difference between chmod, chown, and chgrp.
5.  What is umask and how does it affect new files?
6.  How do you lock and unlock a user account?
7.  How do you give sudo access safely?
8.  What do you do if the root password is lost?
9.  What is SELinux and why is disabling it risky?
10.  How do you check SELinux status and modes?

## Section 4: Process, CPU, and Memory

1.  Difference between process and thread.
2.  How do you find high CPU or memory consuming processes?
3.  What is nice and renice?
4.  What happens when the system runs out of memory?
5.  Difference between swap and RAM.
6.  How do you kill a hung process safely?
7.  What is load average and how do you read it?
8.  Why does Linux use free RAM?
9.  What causes zombie processes?
10.  How do you troubleshoot high system load?

## Section 5: Networking and Services

1.  How do you check IP address and routing table?
2.  Difference between TCP and UDP with real examples.
3.  What is DNS and how does name resolution work in Linux?
4.  Which file controls local hostname resolution?
5.  How do you check if a port is open or listening?
6.  Difference between starting and enabling a service.
7.  How do you troubleshoot a service that is not starting?
8.  What firewall tools have you used in Linux?
9.  How do you test network connectivity without ping?
10.  Server works with IP but not hostname. How do you fix it?`,ew=`# 12 Golden Rules for Low Latency Every System Design Engineer MUST Know

1.  ## Use Database Indexes to Reduce Access Time
    
    Database queries are often the primary bottleneck in application performance. Without proper indexing, databases perform full table scans that scale linearly with data size.
    
    \`\`\`
    
    // Without index: O(n) lookup
    // With index: O(log n) lookup
    
    type User struct {
        ID        int    \`gorm:"primaryKey"\`
        Email     string \`gorm:"index"\` // Indexed field
        Username  string \`gorm:"uniqueIndex"\`
        CreatedAt time.Time
    }
    
    // Query performance comparison
    // No index: 2000ms for 1M records
    // With index: 15ms for 1M records
            
    \`\`\`
    
    Benchmark: In production systems, adding a B-tree index on frequently queried columns can reduce query time from seconds to milliseconds for tables with millions of rows.
    
2.  ## Compress the Payload to Reduce Data Transfer Time
    
    Network bandwidth is finite. Compressing data before transmission reduces both transfer time and bandwidth costs.
    
    \`\`\`
    import (
        "compress/gzip"
        "bytes"
    )
    
    func compressPayload(data []byte) ([]byte, error) {
        var buf bytes.Buffer
        writer := gzip.NewWriter(&buf)
        
        if _, err := writer.Write(data); err != nil {
            return nil, err
        }
        writer.Close()
        
        return buf.Bytes(), nil
    }
    
    // Benchmark: 100KB JSON payload
    // Uncompressed: 100KB, 200ms transfer
    // Gzip compressed: 15KB, 30ms transfer
    // Compression ratio: 85% reduction
            
    \`\`\`
    
3.  ## Use CDN to Keep Data Closer to Users
    
    Content Delivery Networks cache static assets at edge locations worldwide, dramatically reducing round-trip time for geographically distributed users.
    
    \`\`\`
    type CDNConfig struct {
        Provider     string
        CacheTTL     time.Duration
        EdgeLocations []string
    }
    
    // Latency comparison:
    // Origin server (US-East): 250ms for EU users
    // CDN edge (EU): 15ms for EU users
    // Improvement: 94% reduction
            
    \`\`\`
    
4.  ## Group Requests to Reduce Network Overhead
    
    Multiple small requests create overhead from TCP handshakes, headers, and round-trips. Batching reduces this overhead significantly.
    
    \`\`\`
    type BatchRequest struct {
        Operations []Operation
        MaxSize    int
        Timeout    time.Duration
    }
    
    func (b *BatchRequest) Execute() []Result {
        batch := make([]Operation, 0, b.MaxSize)
        
        for _, op := range b.Operations {
            batch = append(batch, op)
            if len(batch) >= b.MaxSize {
                return processBatch(batch)
            }
        }
        return processBatch(batch)
    }
    
    // Performance: 1000 individual requests: 5000ms
    // 10 batched requests (100 each): 500ms
            
    \`\`\`
    
5.  ## Use HTTP/2 for Parallel Multiplexing
    
    HTTP/2 allows multiple requests over a single TCP connection, eliminating the overhead of establishing multiple connections.
    
    \`\`\`
    import "golang.org/x/net/http2"
    
    server := &http.Server{
        Addr: ":8443",
    }
    http2.ConfigureServer(server, &http2.Server{})
    
    // HTTP/1.1: 6 parallel connections, head-of-line blocking
    // HTTP/2: Single connection, unlimited streams
    // Latency reduction: 40-60% for asset-heavy pages
            
    \`\`\`
    
6.  ## Reduce External Dependencies
    
    Each external service call adds latency and potential failure points. Minimize dependencies or consolidate them.
    
    \`\`\`
    // Bad: Sequential external calls
    func getUserData(id string) (*User, error) {
        profile := fetchUserProfile(id)      // 50ms
        preferences := fetchPreferences(id)  // 50ms
        settings := fetchSettings(id)        // 50ms
        return combineData(profile, preferences, settings), nil
        // Total: 150ms
    }
    
    // Good: Parallel fetch or consolidated service
    func getUserDataOptimized(id string) (*User, error) {
        results := make(chan interface{}, 3)
        
        go func() { results <- fetchUserProfile(id) }()
        go func() { results <- fetchPreferences(id) }()
        go func() { results <- fetchSettings(id) }()
        
        // Total: 50ms (parallel execution)
        return combineResults(results), nil
            
    \`\`\`
    
7.  ## Use Cache to Serve Popular Data
    
    Caching eliminates repeated expensive operations by storing frequently accessed data in fast memory.
    
    \`\`\`
    import "github.com/patrickmn/go-cache"
    
    c := cache.New(5*time.Minute, 10*time.Minute)
    
    func getProduct(id string) (*Product, error) {
        if cached, found := c.Get(id); found {
            return cached.(*Product), nil // <1ms
        }
        
        product := fetchFromDB(id) // 20ms
        c.Set(id, product, cache.DefaultExpiration)
        return product, nil
    }
    
    // Cache hit ratio: 80%
    // Average latency: 0.8ms * 0.8 + 20ms * 0.2 = 4.64ms
    // Without cache: 20ms
            
    \`\`\`
    
8.  ## Add Load Balancer to Distribute Traffic
    
    Load balancers distribute requests across multiple servers, preventing any single server from becoming a bottleneck.
    
    \`\`\`
    type LoadBalancer struct {
        servers []*Server
        current int
    }
    
    func (lb *LoadBalancer) GetNextServer() *Server {
        server := lb.servers[lb.current]
        lb.current = (lb.current + 1) % len(lb.servers)
        return server
    }
    
    // Single server: 500 req/s, 100ms latency under load
    // 5 servers with LB: 2500 req/s, 20ms latency
            
    \`\`\`
    
9.  ## Scale Vertically with More Memory and Storage
    
    Increasing server resources reduces resource contention and allows more data to be processed in memory.
    
    \`\`\`
    // Memory impact on performance
    // 8GB RAM: Frequent disk swaps, 200ms query time
    // 32GB RAM: All hot data in memory, 5ms query time
    
    runtime.GOMAXPROCS(runtime.NumCPU()) // Use all available CPUs
            
    \`\`\`
    
10.  ## Use Connection Pooling
    
    Creating new database connections is expensive. Connection pools reuse existing connections, eliminating this overhead.
    
    \`\`\`
    import "database/sql"
    
    db, _ := sql.Open("postgres", connStr)
    db.SetMaxOpenConns(25)
    db.SetMaxIdleConns(10)
    db.SetConnMaxLifetime(5 * time.Minute)
    
    // New connection per request: 50ms overhead
    // Pooled connection: <1ms overhead
    // Throughput increase: 10x
            
    \`\`\`
    
11.  ## Use Efficient Data Serialization Formats
    
    JSON is human-readable but inefficient. Binary formats like Protocol Buffers reduce serialization time and payload size.
    
    \`\`\`
    // JSON serialization: 1000 objects = 250KB, 15ms
    // Protobuf serialization: 1000 objects = 85KB, 3ms
    // Performance gain: 5x faster, 66% smaller
    
    type User struct {
        ID   int64  \`json:"id"\`
        Name string \`json:"name"\`
    }
    
    // Use protobuf for high-performance scenarios
    // Use JSON for debugging and external APIs
            
    \`\`\`
    
12.  ## Use Message Queues for Background Processing
    
    Offload computationally intensive tasks to background workers, keeping the main request-response cycle fast.
    
    \`\`\`
    type TaskQueue struct {
        tasks chan Task
    }
    
    func (tq *TaskQueue) Enqueue(task Task) {
        tq.tasks <- task // Non-blocking, returns immediately
    }
    func (tq *TaskQueue) Worker() {
        for task := range tq.tasks {
            processTask(task) // Heavy computation happens async
        }
    }
    
    // Synchronous: 500ms response time
    // Async with queue: 5ms response time
            
    \`\`\``,nw=`# 9 Ridiculously Useful macOS Tahoe Settings You're 100% Not Using


## #1 Kill those auto-added menu bar icons with a single Terminal command


Open Terminal and run this:

\`\`\`
defaults write NSGlobalDomain NSMenuEnableActionImages -bool false
\`\`\`

Log out and log back in, and every auto-assigned icon disappears. Your menus go back to being clean text. Icons that developers specifically chose to add in their apps stay untouched, so this only removes the ones Apple's system automatically inserts.

If you want to try it for just one app first, you can target it specifically:

\`\`\`
defaults write com.apple.finder NSMenuEnableActionImages -bool NO
\`\`\`

And if you change your mind later:

\`\`\`
defaults delete NSGlobalDomain NSMenuEnableActionImages
\`\`\`

Source: Generated using IMGflip

## #2 Apply any SF Symbol to any folder, not just the ones Apple shows you


Here's how:

\`\`\`
xattr -w 'com.apple.icon.folder#S' '{"sym":"camera.viewfinder"}' /path/to/folder
\`\`\`

Replace  \`camera.viewfinder\`  with any valid SF Symbol name. You can browse the full library in  [Apple's SF Symbols app](https://developer.apple.com/sf-symbols/)  (free download from developer.apple.com) and use any symbol name you find there.

Source: Author Screenshot

It gets better. You can also use emoji:

\`\`\`
xattr -w 'com.apple.icon.folder#S' '{"emoji":"🔍"}' /path/to/folder
\`\`\`

Or even arbitrary text:

\`\`\`
xattr -w 'com.apple.icon.folder#S' '{"emoji":"WIP"}' /path/to/folder
\`\`\`

That  \`#S\`  in the command stands for XATTR_FLAG_SYNCABLE, which means the custom icon syncs through iCloud Drive to your other Macs. So you set it once, and it shows up everywhere.

To remove a custom icon:

\`\`\`
xattr -d 'com.apple.icon.folder#S' /path/to/folder
\`\`\`

## #3 Revert Liquid Glass tabs to how they used to look


\`\`\`
defaults write -g NSSolariumWindowTabs -bool NO
\`\`\`

That's it. No logout required for most apps (though some may need a restart). Your window tabs go back to the solid, clearly distinguishable style from macOS Sequoia, while everything else stays Liquid Glass.

To go back:

\`\`\`
defaults delete -g NSSolariumWindowTabs
\`\`\`

The key name "Solarium" is Apple's internal codename for the Liquid Glass window tab system, which is a fun little detail that confirms this is a deliberate toggle they built and chose not to expose. Make of that what you will.

## #4 Lock Screen clock customization exists, but it's hidden under Wallpaper settings

If you wanted to customize the clock font on your Mac's Lock Screen, where would you look? Lock Screen settings, probably. Maybe Display settings. Possibly Appearance.

It's under Wallpaper. System Settings > Wallpaper > Clock Appearance. From there, you get six font style options and a weight slider that controls the thickness of the clock text. You can also choose whether the customized clock appears only on the Lock Screen or on both the Lock Screen and the Screen Saver.`,tw=`# Most Feared Linux Commands to Know

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

This command turns experience into a searchable database. The longer you work in Linux, the more powerful it becomes.`,aw=`# Reflections on My Tenure at Iskaan

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
[Your Full Name]`,iw=`# I Showed This Resume Trick to 27 Developers — 19 Got 2x Offers in 30 Days
## Why Most Developer Resumes Get Ignored

Here's the uncomfortable truth: recruiters skim, not read. Not because they're lazy. Because they're buried. One role = 300–800 applications. Sometimes even more. They don't have time to admire your tech stack. They're scanning for signals. Fast.

Most resumes fail because they look like this:

-   Built REST APIs using Node.js
-   Worked with cross-functional teams
-   Implemented scalable systems
-   Improved performance

That's not information. That's fog. It doesn't tell me:

-   What you actually did
-   Why it mattered
-   What broke before you arrived
-   Or what changed after

So your resume becomes invisible. Not bad. Not good. Just… gray. And gray gets skipped.

## The Trick: Flip From "Responsibilities" to "Before → After → Proof"

Every one of the 19 who got offers used the same structure. Not a template. A lens. Instead of listing what they were responsible for, they framed each role like a tiny transformation story.

Three parts:

-   Before — what was broken, slow, messy, expensive, risky
-   After — what improved, changed, or became possible
-   Proof — a number, metric, or concrete outcome

That's it. Most resumes only do the middle part. And even that vaguely.

Let me show you the difference.

**Typical Resume Bullet**  
Worked on backend services using Java and Spring Boot

This says nothing. It doesn't tell me if you were useful. Or exceptional. Or replaceable.

**The Same Bullet Using the Trick**  
API response times were causing checkout drop-offs. Rebuilt core services in Spring Boot, cutting latency by 47% and increasing completed transactions by ~18%.

Now I know:

-   What hurt
-   What you touched
-   Why it mattered

Your brain just leaned forward reading that. That's not accidental.

## Why This Works (And Why Recruiters Notice)

Humans don't remember facts. They remember change. Before → After is how we process value. It's why case studies work. It's why product demos work. It's why movie trailers work.

Your resume should not be a list of tools. It should be a series of micro-transformations. This format answers the only question that matters: "If we hire you, what will actually get better?" Most resumes never answer that.

## The Copy-Paste Template

Here's the exact structure I gave them. Not "inspiration." Not "guidelines." Literal plug-and-play.

Use this for each bullet:

-   Problem: [What was broken / slow / risky / expensive / confusing]
-   Action: [What you built, changed, designed, or fixed]
-   Outcome: [Metric, result, or visible impact]

Now compress it into one tight sentence.

**Example:**  
Checkout failures were spiking due to race conditions. Refactored the payment pipeline with idempotent handlers and Redis locks, reducing failed transactions by 62%.

If you don't have metrics, don't panic. We'll fix that in the later section below.

## The Fear Everyone Has (And Why It's Wrong)

At least 10 of the 27 said some version of this:

-   "I don't want to exaggerate."
-   "I don't want to lie."
-   "I don't want to sound arrogant."

Here's the reality. If you say:

"Worked on microservices"

You're already misleading. You're underselling. You're hiding the truth behind vagueness. Clarity isn't arrogance. Specificity isn't lying. And confidence isn't fraud. If you did the work, you're allowed to describe the impact.

## How to Add Metrics When You Think You Don't Have Any

Most developers think they don't have numbers. They're wrong. You just haven't been trained to notice them. Look for:

-   Speed: load time, response time, build time, deploy time
-   Scale: users, requests, records, traffic
-   Reliability: uptime, error rate, crashes
-   Money: infra cost, cloud bills, refunds, conversions
-   Dev experience: setup time, onboarding time, PR cycle time

**Examples:**

Instead of:

Improved CI/CD pipeline

Try this:

CI builds were taking 18 minutes. Rebuilt the pipeline with parallel jobs and caching, cutting build time to under 7 minutes.

You don't need perfect accuracy. You need believable clarity. Approximate is fine. Vague is deadly.

## Where Most People Place This (And Why That's a Mistake)

Most resumes bury their best work at the bottom. Wrong. Your strongest transformation bullets should be:

-   At the top of each role
-   Or in a "Selected Wins" section

You have 6–8 seconds of attention. Lead with your best punch.

## What Changed for the 19 Who Got Offers

Patterns I saw:

-   Recruiters started replying instead of ghosting
-   Screening calls became shorter (less explaining)
-   Interviewers asked about impact, not trivia
-   Salary discussions shifted earlier

One developer friend messaged me: "They're quoting my resume back to me in interviews." That's the goal. When people remember your lines, you're no longer generic.

## A Brutal Reality Check

If your resume sounds like it could belong to anyone… it will. This trick doesn't make you smarter. It makes your value visible. And visibility beats talent that hides. Every time.

## One More Example (Before vs After)

**Before:**  
Built dashboards using React

**After:**  
Teams were blind to real-time outages. Built a React dashboard with live WebSocket feeds, cutting incident response time by ~35%.

Tell me which one you'd interview.

## A Quick Way to Rewrite Your Resume in 60 Minutes

Here's the exact process I gave them. Open your resume. Highlight every vague line. Ask:

-   What was broken before this existed?
-   What changed after I built it?
-   Add one concrete signal (number, behavior change, cost, speed)

Don't beautify. Don't format. Don't redesign. Just rewrite.`,lw=`# Run Claude Code Locally on Apple Silicon Using LM Studio and LiteLLM (Zero Cost)

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

Claude Code's agentic workflow is not tied to Anthropic's cloud — it only requires the Anthropic Messages API contract. By combining LM Studio, LiteLLM, and a strong open-source coding model, you can run the entire experience locally, privately, and at zero cost. This setup lowers the barrier to entry for agentic coding and makes it practical for everyday development.`,rw=`# Statement of Work (SOW)

Project Name: [Insert Project Name]

Prepared For: [Client Name]

Prepared By: [Your Company/Team Name]

Date: [Insert Date]

Version: [1.0 / Draft / Final]

## 1. Introduction

Provide a brief overview of the project, purpose, and objectives.

Example: The purpose of this project is to design and develop a [website/application/system] for [Client Name] to achieve [business objectives]. This SOW defines the scope, deliverables, timeline, and responsibilities for all parties.

## 2. Scope of Work

Clearly define what is included and, optionally, what is excluded.

### In Scope:

-   [Feature 1 / Deliverable 1]
-   [Feature 2 / Deliverable 2]
-   [Feature 3 / Deliverable 3]

### Out of Scope (optional but recommended):

-   [Feature / Task not included]

## 3. Deliverables

List all tangible outputs the client will receive. Include format, quantity, and specifications if necessary.

Example:

| Deliverable | Description | Format/Medium | Delivery Date 
|---|---|---|---|
| Website Design Mockups | High-fidelity UI/UX designs | Figma / PDF | [Date]
| Testing & QA Report | Bug reports and fixes | PDF / Jira tickets | [Date]

## 4. Timeline / Milestones

Outline phases, milestones, and estimated completion dates.

Example:

| Phase | Description | Start Date | End Date 
|---|---|---|---|
| Phase 1 | Requirements Gatherings | [Date] | [Date]
| Design & Prototyping | Phase 2 | [Date] | [Date]
## 5. Roles and Responsibilities

Define who does what.

### Client Responsibilities:

-   Provide timely feedback and approvals
-   Supply necessary assets, data, or access

### Vendor / Service Provider Responsibilities:

-   Deliver agreed-upon work on schedule
-   Maintain communication and report progress

## 6. Assumptions

List any assumptions that affect project scope, timeline, or budget.

Example: Client will provide access to existing systems within 5 business days. All content (text, images) will be provided by the client unless otherwise agreed.

## 7. Payment Terms

Outline pricing, payment milestones, and method.

Example:

Total Project Cost: $[Amount]

Payment Schedule:

-   30% upfront
-   40% upon design approval
-   30% upon project completion and delivery

Payment via [Bank Transfer / Credit Card / PayPal / Other].

## 8. Change Management

Explain how changes to scope or deliverables will be handled.

Example: Any changes requested after the SOW is signed will require a Change Request, which may impact timeline and cost.

## 9. Acceptance Criteria

Define how deliverables will be reviewed and approved.

Example: Deliverables are considered accepted when:

-   Client reviews and provides written approval
-   QA testing passes agreed-upon criteria

## 10. Terms & Conditions

Include legal terms, confidentiality, liability, or other contractual requirements.

Example:

-   Confidentiality of all client data will be maintained.
-   All intellectual property developed under this SOW will be owned by [Client Name], unless otherwise agreed.
-   Liability limits, dispute resolution, and termination clauses.

Signatures:

Name: ____________________

Title: ____________________

Date: ____________________

Signature: ____________________

[Client]

[Service Provider]`,ow=`# Passwordless SSH Login Using SSH Key Authentication (Step-by-Step Guide)

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
\`\`\``,sw=`# Secure SSH Like a Pro: 7 Steps Every Linux Admin Should Know

1.  ## Disable Root Login
    
    Because root should never be your front door.
    
    Direct root login = hacker shortcut. Lock it down:
    
    \`\`\`
    sudo nano /etc/ssh/sshd_config
    #PermitRootLogin yes → PermitRootLogin no
    sudo systemctl restart ssh
    \`\`\`
    
    Pro Tip: Create a sudo admin user:
    
    \`\`\`
    sudo adduser adminuser
    sudo usermod -aG sudo adminuser
    \`\`\`
    
    Why it matters: Attackers must compromise a regular user first — extra layer of defense.
    
2.  ## Use SSH Keys Instead of Passwords
    
    Because passwords are yesterday's security.
    
    Generate key pair locally:
    
    \`\`\`
    ssh-keygen -t ed25519 -C "you@example.com"
    ssh-copy-id adminuser@your_server_ip
    \`\`\`
    
    Disable password login:
    
    \`\`\`
    sudo nano /etc/ssh/sshd_config
    #PasswordAuthentication yes → PasswordAuthentication no
    sudo systemctl restart ssh
    \`\`\`
    
    Why it matters: Even if your username leaks, brute-force is nearly impossible.
    
    Pro Tip: Protect your private key with a password or hardware key.
    
3.  ## Change the Default SSH Port
    
    Because 22 is where the bots live.
    
    \`\`\`
    sudo nano /etc/ssh/sshd_config
    #Port 22 → Port 2222
    sudo ufw allow 2222/tcp
    sudo ufw delete allow 22/tcp
    sudo systemctl restart ssh
    \`\`\`
    
    Why it matters: Fewer automated login attempts — cleaner logs, less noise.
    
    Pro Tip: Document the custom port for your team.
    
4.  ## Use Fail2Ban or CrowdSec
    
    Because your firewall should fight back.
    
    Install Fail2Ban:
    
    \`\`\`
    sudo apt install fail2ban -y
    sudo systemctl enable --now fail2ban
    sudo nano /etc/fail2ban/jail.local
    \`\`\`
    
    Add:
    
    \`\`\`
    [sshd]
    enabled = true
    port = 2222
    maxretry = 3
    bantime = 10m
    findtime = 10m
    \`\`\`
    
    Restart:
    
    \`\`\`
    sudo systemctl restart fail2ban
    \`\`\`
    
    Why it matters: Blocks repeated failed logins automatically.
    
    Pro Tip: CrowdSec can provide community-shared IP reputation.
    
5.  ## Restrict SSH Access by IP / Firewall
    
    Because not everyone deserves a key.
    
    \`\`\`
    sudo ufw allow from 203.0.113.10 to any port 2222 proto tcp
    sudo ufw default deny incoming
    sudo ufw enable
    \`\`\`
    
    Or with Firewalld:
    
    \`\`\`
    sudo firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="203.0.113.10" port protocol="tcp" port="2222" accept'
    sudo firewall-cmd --reload
    \`\`\`
    
    Why it matters: Unauthorized networks cannot connect, even if the port is known.
    
    Pro Tip: Use VPC firewall rules or bastion hosts in cloud setups.
    
6.  ## Enforce Idle Session Timeouts
    
    Because every admin forgets to log out.
    
    \`\`\`
    sudo nano /etc/ssh/sshd_config
    ClientAliveInterval 300
    ClientAliveCountMax 2
    sudo systemctl restart ssh
    \`\`\`
    
    Why it matters: Idle sessions auto-disconnect, reducing risk from abandoned connections.
    
    Pro Tip: 5-minute intervals are safer in production.
    
7.  ## Enable Two-Factor Authentication (2FA)
    
    Because even keys can be stolen.
    
    Install PAM module:
    
    \`\`\`
    sudo apt install libpam-google-authenticator -y
    google-authenticator
    \`\`\`
    
    Edit PAM:
    
    \`\`\`
    sudo nano /etc/pam.d/sshd
    auth required pam_google_authenticator.so
    \`\`\`
    
    Update SSH config:
    
    \`\`\`
    sudo nano /etc/ssh/sshd_config
    ChallengeResponseAuthentication yes
    sudo systemctl restart ssh
    \`\`\`
    
    Why it matters: Even stolen keys aren't enough — TOTP protects access.
    
    Pro Tip: Backup your 2FA secrets securely.`,uw=`# Setting a Login Banner on Linux Servers 

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
\`\`\``,cw=`# What SRE Interviewers Really Look For

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

Used correctly, this boosts productivity massively.`,fw=`## Convert a Meeting from Video .mp4 to Audio with AI in Mac Terminal and Generating MoM's. 

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

> "Summarize the following meeting transcript into key decisions, action items, and important discussion points and generate a MoM for this."`,dw=`# 10 Underrated CLI Commands You've (Probably) Never Heard Of



1.  ## cbonsai - The Zen of ASCII Trees
    
    Let's start with something soothing.  \`cbonsai\`  generates beautiful ASCII bonsai trees right in your terminal.
    
    Run it with:
    
    \`\`\`
    cbonsai
    \`\`\`
    
    and you'll get a randomly generated tree. But the real magic happens with:
    
    \`\`\`
    cbonsai -l
    \`\`\`
    
    which lets you watch the tree grow. Add the  \`-i\`  flag to make it loop forever - a perfect minimalist terminal screensaver.
    
    You can also tweak colors, sizes, base types, and even random seeds. It's the most peaceful use of your CPU you'll ever find.
    
    Other terminal art favorites:
    
    -   \`cmatrix\`  - that Matrix rain effect.
    -   \`pipes.sh\`  - mesmerizing terminal pipelines.
    -   \`asciiquarium\`  - ASCII fish swimming across your screen.
2.  ## asciinema - Record Your Terminal Like a Pro
    
    \`asciinema\`  is a fantastic tool for recording terminal sessions - but unlike traditional screen recorders, it saves everything as plain text.
    
    To record:
    
    \`\`\`
    asciinema rec demo.cast
    \`\`\`
    
    Type whatever you want, then press  \`Ctrl+D\`  to finish. You can replay it with:
    
    \`\`\`
    asciinema play demo.cast
    \`\`\`
    
    The best part? You can embed the recording in web pages using the  [Asciinema Player](https://asciinema.org/), where viewers can copy commands directly from your demo. Perfect for tutorials and documentation.
    
    You can even turn recordings into GIFs or live-stream your session. It's clean, lightweight, and great for technical blogging.
    
3.  ## croc - Simple, Secure File Sharing
    
    Need to send a file between devices without dealing with SSH keys or Google Drive? Meet  \`croc\`.
    
    Just run:
    
    \`\`\`
    croc send file.txt
    \`\`\`
    
    It generates a random code phrase (like "blue-tiger-5"). On the other device:
    
    \`\`\`
    croc blue-tiger-5
    \`\`\`
    
    That's it — the file transfers securely using end-to-end encryption. It supports resumes, custom relays, and directory sharing too.  \`croc\`  is like AirDrop for the command line.
    
4.  ## ttyd - Access Your Terminal from the Browser
    
    \`ttyd\`  lets you share a live terminal session over the web. Run:
    
    \`\`\`
    ttyd zsh
    \`\`\`
    
    Then open the displayed URL — you'll see your terminal running in the browser.
    
    Add the  \`-w\`  flag to enable interactive mode, and pair it with Tailscale on a VPS, and you've got a powerful remote development setup. I often use it to run agentic AI systems remotely - it's like carrying your workstation in your pocket.
    
5.  ## jrnl - Journaling from the Command Line
    
    \`jrnl\`  (pronounced "journal") is a simple, open-source journaling tool for the terminal.
    
    Add an entry:
    
    \`\`\`
    jrnl Had a great day debugging.
    \`\`\`
    
    List your last 10 entries:
    
    \`\`\`
    jrnl -n 10
    \`\`\`
    
    It supports tags, encryption, timestamps, and multiple journals (for work, personal, or anything else). Minimal, elegant, and surprisingly effective for daily reflections — right from your terminal.
    
6.  ## curl wttr.in - Weather in Your Terminal
    
    Not a standalone app, but a clever trick. Run:
    
    \`\`\`
    curl wttr.in
    \`\`\`
    
    and you'll get a text-based weather report for your location.
    
    Want a specific city?
    
    \`\`\`
    curl wttr.in/Chicago
    \`\`\`
    
    It's a fun example of how APIs and ASCII art can blend beautifully inside a terminal.
    
7.  ## newsboat - RSS Reader for the Command Line
    
    \`newsboat\`  is a TUI-based RSS reader for the terminal. Add your favorite feeds to its config file, then run:
    
    \`\`\`
    newsboat
    \`\`\`
    
    You can browse articles, open links (with  \`links\`  or  \`lynx\`), and keep up with blogs - all without leaving the CLI. Great for distraction-free reading.
    
8.  ## lolcat - Rainbow Cat Output
    
    \`lolcat\`  is essentially  \`cat\`, but fabulous. It prints input text in rainbow gradients:
    
    \`\`\`
    echo "Hello, world!" | lolcat
    \`\`\`
    
    Add  \`-a\`  to animate the output line by line. Combine it with tools like  \`figlet\`  to create flashy welcome banners or Easter eggs in your setup.
    
9.  ## faker - Generate Fake Data Instantly
    
    \`faker\`  creates random but realistic data: names, emails, addresses, credit cards, passwords, hashes - you name it.
    
    Example:
    
    \`\`\`
    faker name
    \`\`\`
    
    It's perfect for testing or simulating users. You can use it both as a CLI or a Python library, which makes it versatile for automation scripts.
    
10.  ## grex - Generate Regex from Examples
    
    Writing regular expressions can be painful.  \`grex\`  fixes that by generating regex patterns from example strings.
    
    Example:
    
    \`\`\`
    grex file1.txt file2.txt
    \`\`\`
    
    It outputs a working regex that matches both. Add flags like  \`--digits\`  or  \`--repetitions\`  for more generalized patterns. It's a lifesaver when you know what you want to match but can't remember how.`,hw=`# Using Manga-Downloader on Mac

Go to site:
  [https://pkg.go.dev/github.com/elboletaire/manga-downloader#readme-installation](https://pkg.go.dev/github.com/elboletaire/manga-downloader#readme-installation)

## Download a Release

[https://github.com/elboletaire/manga-downloader/releases](https://github.com/elboletaire/manga-downloader/releases)

Check on the internet how to permanently download and run this.

## Use Mangadex Only to Download

[https://mangadex.org/](https://mangadex.org/)

Check flags on how to use CLI properly from the documentation.`,mw=`# Zabbix Automation For AWS Server Reboot

Restart EC2 Automatically When Server Goes Down Using Zabbixcost.

## What Problem Are We Solving?

Sometimes servers hang:

-   CPU stuck
-   Memory leak
-   Agent stops responding
-   SSH not reachable

Instead of waiting for a human:

-   Zabbix detects the issue
-   Automatically restarts the EC2
-   Notifies us when the server is back

Simple. Effective.

## Final Flow (High Level)

-   Zabbix checks agent status
-   Agent down for 10 minutes
-   Server uptime more than 1 hour
-   Zabbix runs a restart script
-   EC2 restarts
-   Agent comes back
-   Zabbix sends recovery notification

## Prerequisites

Before starting, make sure you have:

-   Zabbix 7.0 or higher
-   Zabbix agent installed on EC2
-   AWS CLI installed on Zabbix server
-   IAM permissions:
    -   ec2:DescribeInstances
    -   ec2:StopInstances
    -   ec2:StartInstances
-   Zabbix server can access AWS API
-   EC2 private IP is used in Zabbix host interface
-   Hostname {HOST.HOST} must contain the IP address of the server.

## Step 1: Create Restart Script on Zabbix Server

Script location (mandatory):

\`\`\`
Copy /usr/lib/zabbix/externalscripts/ec2_restart.sh
\`\`\`

Production-ready script - Restart EC2 Machine:

\`\`\`
#!/bin/bash
set -euo pipefail

# ---------------- CONFIG ----------------
AWS_CLI="aws"
TIMEOUT=500        # max wait time in seconds
POLL_INTERVAL=10   # seconds
# ----------------------------------------

usage() {
    echo "Usage: $0 <PRIVATE_IP>"
    exit 1
}

log() {
    echo "[INFO] $(date '+%Y-%m-%d %H:%M:%S') - $*"
}

error() {
    echo "[ERROR] $(date '+%Y-%m-%d %H:%M:%S') - $*" >&2
    exit 1
}

# ----------- INPUT VALIDATION -----------
IP="\${1:-}"
[ -z "$IP" ] && usage
# ----------------------------------------

log "Searching EC2 instance for IP: $IP"

INSTANCE_ID=$(  $AWS_CLI ec2 describe-instances \\
    --filters "Name=private-ip-address,Values=$IP" \\
    --query "Reservations[].Instances[].InstanceId" \\
    --output text)

[ -z "$INSTANCE_ID" ] && error "No instance found for IP $IP"

log "Found Instance ID: $INSTANCE_ID"

# ----------- STOP INSTANCE --------------
log "Stopping instance $INSTANCE_ID"
  $AWS_CLI ec2 stop-instances --instance-ids "$INSTANCE_ID" >/dev/null

log "Waiting for instance to stop..."
START_TIME=$(date +%s)
while true; do
    STATE=$(  $AWS_CLI ec2 describe-instances \\
        --instance-ids "$INSTANCE_ID" \\
        --query "Reservations[].Instances[].State.Name" \\
        --output text)

    [ "$STATE" = "stopped" ] && break

    NOW=$(date +%s)
    [ $((NOW - START_TIME)) -ge $TIMEOUT ] && error "Timeout waiting for stop"

    sleep $POLL_INTERVAL
done

log "Instance stopped successfully"

# ----------- START INSTANCE -------------
log "Starting instance $INSTANCE_ID"
  $AWS_CLI ec2 start-instances --instance-ids "$INSTANCE_ID" >/dev/null

log "Waiting for instance to run..."
START_TIME=$(date +%s)
while true; do
    STATE=$(  $AWS_CLI ec2 describe-instances \\
        --instance-ids "$INSTANCE_ID" \\
        --query "Reservations[].Instances[].State.Name" \\
        --output text)

    [ "$STATE" = "running" ] && break

    NOW=$(date +%s)
    [ $((NOW - START_TIME)) -ge $TIMEOUT ] && error "Timeout waiting for start"

    sleep $POLL_INTERVAL
done

log "Restart completed successfully"
log "IP: $IP | Instance ID: $INSTANCE_ID | State: $STATE"
\`\`\`

Note: We can also use this script for EC2 instance restart from CLI.

## Permissions

\`\`\`
Copy chown zabbix:zabbix /usr/lib/zabbix/externalscripts/ec2_restart.sh
chmod 750 /usr/lib/zabbix/externalscripts/ec2_restart.sh
\`\`\`

Test manually:

\`\`\`
Copy sudo -u zabbix /usr/lib/zabbix/externalscripts/ec2_restart.sh 10.0.1.25
\`\`\`

If this fails, Zabbix will fail.

## Step 2: Enable Remote Commands in Zabbix

Edit Zabbix server config:

\`\`\`
Copy vi /etc/zabbix/zabbix_server.conf
\`\`\`

Set:

\`\`\`
Copy EnableGlobalScripts=1
\`\`\`

Restart Zabbix server:

\`\`\`
Copy systemctl restart zabbix-server
\`\`\`

## Step 3: Create Script Object in Zabbix UI

Go to:

\`\`\`
Copy Alerts → Scripts → Create script
\`\`\`

Script details:

-   Name: Restart EC2 instance
-   Scope: Action operation
-   Type: Script
-   Execute on: Zabbix server
-   Commands:
    
    \`\`\`
    Copy /usr/lib/zabbix/externalscripts/ec2_restart.sh {HOST.IP}
    \`\`\`
    

Save.

## Step 4: Configure Triggers

Item 1: Agent availability (already exists)

-   Key: agent.ping
-   Value: 1 = agent up, 0 = agent down

Item 2: Server uptime (to ignore new servers)

Create item:

-   Name: Zabbix agent uptime
-   Type: Zabbix agent
-   Key: system.uptime
-   Update interval: 1m

Note: If you require more health checks before restart, you can add the SSH checks or Telnet checks.

## Step 5: Create Trigger Action (Automation)

Go to:

\`\`\`
Copy Alerts → Actions → Trigger actions → Create action
\`\`\`

Action name: Auto restart EC2 when agent is down

Conditions:

1.  Trigger equals: Choose the trigger.
2.  Select the Host groups (optional)

Problem Operations:

-   Add operation:
-   Operation: Restart EC2 instance
-   Target: Current host
-   Conditions: Event is not acknowledged

This executes the restart.

Recovery Operations (Success Notification):

-   Add recovery operation:
-   Operation type: Send message
-   Subject:
    
    \`\`\`
    Copy RECOVERED: {HOST.NAME} restarted successfully
    \`\`\`
    
-   Message:
    
    \`\`\`
    Copy Server has recovered after auto restart.
    Host: {HOST.NAME}
    IP: {HOST.IP}
    Recovery time: {EVENT.RECOVERY.TIME}
    \`\`\`
    
-   This message is sent only when the agent comes back.


## Step 6: Verify the Execution:

Go to:

\`\`\`
Copy Reports → Action log
\`\`\`

Verify the logs here.
`,pw=`# DevOps Commands Cheat Sheet (With Real-World Examples)

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
    
    Copy:  \`journalctl -u nginx\`  # Shows logs for the nginx service.`,gw=`# How to Write Markdown .md Files in Your Code and Push It to GitHub Pages (Deployment)

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

to publish the changes to the GitHub repo (main branch) and it will automatically push the new build to the gh-pages branch (where you can check the deployment status).`,yw=`Terminal Tools For Mac OS and Linux
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

nyancat in action`,bw=`# ✏️ Start writing

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
    style="width:200px; height:200px; object-fit:cover; border-radius:10px; display:block; margin:10px 0;">`,vw=Object.assign({"/public/docs/10 Grep Commands for Linux Systems.md":BS,"/public/docs/5 Useful Linux and Mac Automationn Scripts.md":HS,"/public/docs/Automated Bash Scripts For DevOps.md":qS,"/public/docs/Bash Scripts for Automation Workflow.md":jS,"/public/docs/Basic Git Commands.md":YS,"/public/docs/Dangerous Linux Commands.md":PS,"/public/docs/Download flac and convert to run on Mac and iPhone.md":GS,"/public/docs/Generate AWS Archietecture Diagrams Automatically.md":WS,"/public/docs/Hacking Prevention.md":FS,"/public/docs/Home Computer Accessable from Anywhere.md":VS,"/public/docs/Interview Preperation.md":QS,"/public/docs/Linux Basic and Advanced Questions.md":XS,"/public/docs/Linux Cheat Sheet.md":KS,"/public/docs/Linux Commands.md":ZS,"/public/docs/Linux Hacker Commands.md":$S,"/public/docs/Linux Interview Questions.md":JS,"/public/docs/Low Latency Setup Techniques Before Starting Projects.md":ew,"/public/docs/MacOS 26 Tahoe Settings.md":nw,"/public/docs/Most Feared Linux Commands.md":tw,"/public/docs/Reflection Of My Tenure at Iskaan.md":aw,"/public/docs/Resume Trick to Get 2x Offers.md":iw,"/public/docs/Run Claude Code Local On Mac.md":lw,"/public/docs/SOW Template.md":rw,"/public/docs/SSH Auth.md":ow,"/public/docs/SSH Security on New Server.md":sw,"/public/docs/Setting Up a Login Banner on Linux Server.md":uw,"/public/docs/Thinking Like an SRE.md":cw,"/public/docs/Transcribe and Generate MoM in Mac Terminal.md":fw,"/public/docs/Underrated CLI Commands.md":dw,"/public/docs/Use Manga Downloader on Mac.md":hw,"/public/docs/Zabbix Automation for AWS EC2 Restart.md":mw,"/public/docs/devopsCommands.md":pw,"/public/docs/howTo.md":gw,"/public/docs/macAndLinuxTerminalTools.md":yw,"/public/docs/nginx.md":bw}),wc=Object.entries(vw).map(([a,l])=>{const r=a.split("/").pop().replace(".md",""),o=l.match(/^#\s+(.*)/)?.[1]??r.replace(/-/g," ");return{slug:r,title:o,content:l}});function Sw(){return sn.jsx("aside",{style:qu.sidebar,children:wc.map(a=>sn.jsx($p,{to:`/docs/${a.slug}`,style:({isActive:l})=>({...qu.link,...l?qu.active:{}}),children:a.title},a.slug))})}const qu={sidebar:{width:260,padding:"1rem",background:"var(--sidebar-bg)",borderRight:"1px solid #e5e7eb"},link:{display:"block",padding:"1rem 1rem",borderRadius:8,textDecoration:"none",color:"var(--text)",marginBottom:4,borderBottom:"1px solid #ccc"},active:{background:"var(--active-bg)",color:"var(--active-text)",fontWeight:600}};function ww(a,l){const r={};return(a[a.length-1]===""?[...a,""]:a).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const xw=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,kw=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Cw={};function Xm(a,l){return(Cw.jsx?kw:xw).test(a)}const Tw=/[ \t\n\f\r]/g;function Aw(a){return typeof a=="object"?a.type==="text"?Km(a.value):!1:Km(a)}function Km(a){return a.replace(Tw,"")===""}class Ml{constructor(l,r,o){this.normal=r,this.property=l,o&&(this.space=o)}}Ml.prototype.normal={};Ml.prototype.property={};Ml.prototype.space=void 0;function eg(a,l){const r={},o={};for(const c of a)Object.assign(r,c.property),Object.assign(o,c.normal);return new Ml(r,o,l)}function ac(a){return a.toLowerCase()}class Dn{constructor(l,r){this.attribute=r,this.property=l}}Dn.prototype.attribute="";Dn.prototype.booleanish=!1;Dn.prototype.boolean=!1;Dn.prototype.commaOrSpaceSeparated=!1;Dn.prototype.commaSeparated=!1;Dn.prototype.defined=!1;Dn.prototype.mustUseProperty=!1;Dn.prototype.number=!1;Dn.prototype.overloadedBoolean=!1;Dn.prototype.property="";Dn.prototype.spaceSeparated=!1;Dn.prototype.space=void 0;let Ew=0;const be=_a(),tn=_a(),ic=_a(),V=_a(),je=_a(),vi=_a(),Bn=_a();function _a(){return 2**++Ew}const lc=Object.freeze(Object.defineProperty({__proto__:null,boolean:be,booleanish:tn,commaOrSpaceSeparated:Bn,commaSeparated:vi,number:V,overloadedBoolean:ic,spaceSeparated:je},Symbol.toStringTag,{value:"Module"})),ju=Object.keys(lc);class xc extends Dn{constructor(l,r,o,c){let f=-1;if(super(l,r),Zm(this,"space",c),typeof o=="number")for(;++f<ju.length;){const d=ju[f];Zm(this,ju[f],(o&lc[d])===lc[d])}}}xc.prototype.defined=!0;function Zm(a,l,r){r&&(a[l]=r)}function ki(a){const l={},r={};for(const[o,c]of Object.entries(a.properties)){const f=new xc(o,a.transform(a.attributes||{},o),c,a.space);a.mustUseProperty&&a.mustUseProperty.includes(o)&&(f.mustUseProperty=!0),l[o]=f,r[ac(o)]=o,r[ac(f.attribute)]=o}return new Ml(l,r,a.space)}const ng=ki({properties:{ariaActiveDescendant:null,ariaAtomic:tn,ariaAutoComplete:null,ariaBusy:tn,ariaChecked:tn,ariaColCount:V,ariaColIndex:V,ariaColSpan:V,ariaControls:je,ariaCurrent:null,ariaDescribedBy:je,ariaDetails:null,ariaDisabled:tn,ariaDropEffect:je,ariaErrorMessage:null,ariaExpanded:tn,ariaFlowTo:je,ariaGrabbed:tn,ariaHasPopup:null,ariaHidden:tn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:je,ariaLevel:V,ariaLive:null,ariaModal:tn,ariaMultiLine:tn,ariaMultiSelectable:tn,ariaOrientation:null,ariaOwns:je,ariaPlaceholder:null,ariaPosInSet:V,ariaPressed:tn,ariaReadOnly:tn,ariaRelevant:null,ariaRequired:tn,ariaRoleDescription:je,ariaRowCount:V,ariaRowIndex:V,ariaRowSpan:V,ariaSelected:tn,ariaSetSize:V,ariaSort:null,ariaValueMax:V,ariaValueMin:V,ariaValueNow:V,ariaValueText:null,role:null},transform(a,l){return l==="role"?l:"aria-"+l.slice(4).toLowerCase()}});function tg(a,l){return l in a?a[l]:l}function ag(a,l){return tg(a,l.toLowerCase())}const _w=ki({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:vi,acceptCharset:je,accessKey:je,action:null,allow:null,allowFullScreen:be,allowPaymentRequest:be,allowUserMedia:be,alt:null,as:null,async:be,autoCapitalize:null,autoComplete:je,autoFocus:be,autoPlay:be,blocking:je,capture:null,charSet:null,checked:be,cite:null,className:je,cols:V,colSpan:null,content:null,contentEditable:tn,controls:be,controlsList:je,coords:V|vi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:be,defer:be,dir:null,dirName:null,disabled:be,download:ic,draggable:tn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:be,formTarget:null,headers:je,height:V,hidden:ic,high:V,href:null,hrefLang:null,htmlFor:je,httpEquiv:je,id:null,imageSizes:null,imageSrcSet:null,inert:be,inputMode:null,integrity:null,is:null,isMap:be,itemId:null,itemProp:je,itemRef:je,itemScope:be,itemType:je,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:be,low:V,manifest:null,max:null,maxLength:V,media:null,method:null,min:null,minLength:V,multiple:be,muted:be,name:null,nonce:null,noModule:be,noValidate:be,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:be,optimum:V,pattern:null,ping:je,placeholder:null,playsInline:be,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:be,referrerPolicy:null,rel:je,required:be,reversed:be,rows:V,rowSpan:V,sandbox:je,scope:null,scoped:be,seamless:be,selected:be,shadowRootClonable:be,shadowRootDelegatesFocus:be,shadowRootMode:null,shape:null,size:V,sizes:null,slot:null,span:V,spellCheck:tn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:V,step:null,style:null,tabIndex:V,target:null,title:null,translate:null,type:null,typeMustMatch:be,useMap:null,value:tn,width:V,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:je,axis:null,background:null,bgColor:null,border:V,borderColor:null,bottomMargin:V,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:be,declare:be,event:null,face:null,frame:null,frameBorder:null,hSpace:V,leftMargin:V,link:null,longDesc:null,lowSrc:null,marginHeight:V,marginWidth:V,noResize:be,noHref:be,noShade:be,noWrap:be,object:null,profile:null,prompt:null,rev:null,rightMargin:V,rules:null,scheme:null,scrolling:tn,standby:null,summary:null,text:null,topMargin:V,valueType:null,version:null,vAlign:null,vLink:null,vSpace:V,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:be,disableRemotePlayback:be,prefix:null,property:null,results:V,security:null,unselectable:null},space:"html",transform:ag}),Dw=ki({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Bn,accentHeight:V,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:V,amplitude:V,arabicForm:null,ascent:V,attributeName:null,attributeType:null,azimuth:V,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:V,by:null,calcMode:null,capHeight:V,className:je,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:V,diffuseConstant:V,direction:null,display:null,dur:null,divisor:V,dominantBaseline:null,download:be,dx:null,dy:null,edgeMode:null,editable:null,elevation:V,enableBackground:null,end:null,event:null,exponent:V,externalResourcesRequired:null,fill:null,fillOpacity:V,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:vi,g2:vi,glyphName:vi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:V,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:V,horizOriginX:V,horizOriginY:V,id:null,ideographic:V,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:V,k:V,k1:V,k2:V,k3:V,k4:V,kernelMatrix:Bn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:V,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:V,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:V,overlineThickness:V,paintOrder:null,panose1:null,path:null,pathLength:V,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:je,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:V,pointsAtY:V,pointsAtZ:V,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Bn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Bn,rev:Bn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Bn,requiredFeatures:Bn,requiredFonts:Bn,requiredFormats:Bn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:V,specularExponent:V,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:V,strikethroughThickness:V,string:null,stroke:null,strokeDashArray:Bn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:V,strokeOpacity:V,strokeWidth:null,style:null,surfaceScale:V,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Bn,tabIndex:V,tableValues:null,target:null,targetX:V,targetY:V,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Bn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:V,underlineThickness:V,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:V,values:null,vAlphabetic:V,vMathematical:V,vectorEffect:null,vHanging:V,vIdeographic:V,version:null,vertAdvY:V,vertOriginX:V,vertOriginY:V,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:V,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:tg}),ig=ki({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(a,l){return"xlink:"+l.slice(5).toLowerCase()}}),lg=ki({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ag}),rg=ki({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(a,l){return"xml:"+l.slice(3).toLowerCase()}}),Rw={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Ow=/[A-Z]/g,$m=/-[a-z]/g,Mw=/^data[-\w.:]+$/i;function Lw(a,l){const r=ac(l);let o=l,c=Dn;if(r in a.normal)return a.property[a.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&Mw.test(l)){if(l.charAt(4)==="-"){const f=l.slice(5).replace($m,Nw);o="data"+f.charAt(0).toUpperCase()+f.slice(1)}else{const f=l.slice(4);if(!$m.test(f)){let d=f.replace(Ow,zw);d.charAt(0)!=="-"&&(d="-"+d),l="data"+d}}c=xc}return new c(o,l)}function zw(a){return"-"+a.toLowerCase()}function Nw(a){return a.charAt(1).toUpperCase()}const Iw=eg([ng,_w,ig,lg,rg],"html"),kc=eg([ng,Dw,ig,lg,rg],"svg");function Uw(a){return a.join(" ").trim()}var yi={},Yu,Jm;function Bw(){if(Jm)return Yu;Jm=1;var a=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,l=/\n/g,r=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,c=/^:\s*/,f=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,d=/^[;\s]*/,p=/^\s+|\s+$/g,g=`
`,m="/",y="*",b="",x="comment",S="declaration";function I(U,M){if(typeof U!="string")throw new TypeError("First argument must be a string");if(!U)return[];M=M||{};var W=1,G=1;function re(ae){var Q=ae.match(l);Q&&(W+=Q.length);var O=ae.lastIndexOf(g);G=~O?ae.length-O:G+ae.length}function oe(){var ae={line:W,column:G};return function(Q){return Q.position=new B(ae),fe(),Q}}function B(ae){this.start=ae,this.end={line:W,column:G},this.source=M.source}B.prototype.content=U;function K(ae){var Q=new Error(M.source+":"+W+":"+G+": "+ae);if(Q.reason=ae,Q.filename=M.source,Q.line=W,Q.column=G,Q.source=U,!M.silent)throw Q}function ce(ae){var Q=ae.exec(U);if(Q){var O=Q[0];return re(O),U=U.slice(O.length),Q}}function fe(){ce(r)}function ge(ae){var Q;for(ae=ae||[];Q=ee();)Q!==!1&&ae.push(Q);return ae}function ee(){var ae=oe();if(!(m!=U.charAt(0)||y!=U.charAt(1))){for(var Q=2;b!=U.charAt(Q)&&(y!=U.charAt(Q)||m!=U.charAt(Q+1));)++Q;if(Q+=2,b===U.charAt(Q-1))return K("End of comment missing");var O=U.slice(2,Q-2);return G+=2,re(O),U=U.slice(Q),G+=2,ae({type:x,comment:O})}}function $(){var ae=oe(),Q=ce(o);if(Q){if(ee(),!ce(c))return K("property missing ':'");var O=ce(f),F=ae({type:S,property:z(Q[0].replace(a,b)),value:O?z(O[0].replace(a,b)):b});return ce(d),F}}function Ee(){var ae=[];ge(ae);for(var Q;Q=$();)Q!==!1&&(ae.push(Q),ge(ae));return ae}return fe(),Ee()}function z(U){return U?U.replace(p,b):b}return Yu=I,Yu}var ep;function Hw(){if(ep)return yi;ep=1;var a=yi&&yi.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(yi,"__esModule",{value:!0}),yi.default=r;const l=a(Bw());function r(o,c){let f=null;if(!o||typeof o!="string")return f;const d=(0,l.default)(o),p=typeof c=="function";return d.forEach(g=>{if(g.type!=="declaration")return;const{property:m,value:y}=g;p?c(m,y,g):y&&(f=f||{},f[m]=y)}),f}return yi}var wl={},np;function qw(){if(np)return wl;np=1,Object.defineProperty(wl,"__esModule",{value:!0}),wl.camelCase=void 0;var a=/^--[a-zA-Z0-9_-]+$/,l=/-([a-z])/g,r=/^[^-]+$/,o=/^-(webkit|moz|ms|o|khtml)-/,c=/^-(ms)-/,f=function(m){return!m||r.test(m)||a.test(m)},d=function(m,y){return y.toUpperCase()},p=function(m,y){return"".concat(y,"-")},g=function(m,y){return y===void 0&&(y={}),f(m)?m:(m=m.toLowerCase(),y.reactCompat?m=m.replace(c,p):m=m.replace(o,p),m.replace(l,d))};return wl.camelCase=g,wl}var xl,tp;function jw(){if(tp)return xl;tp=1;var a=xl&&xl.__importDefault||function(c){return c&&c.__esModule?c:{default:c}},l=a(Hw()),r=qw();function o(c,f){var d={};return!c||typeof c!="string"||(0,l.default)(c,function(p,g){p&&g&&(d[(0,r.camelCase)(p,f)]=g)}),d}return o.default=o,xl=o,xl}var Yw=jw();const Pw=uo(Yw),og=sg("end"),Cc=sg("start");function sg(a){return l;function l(r){const o=r&&r.position&&r.position[a]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function Gw(a){const l=Cc(a),r=og(a);if(l&&r)return{start:l,end:r}}function Tl(a){return!a||typeof a!="object"?"":"position"in a||"type"in a?ap(a.position):"start"in a||"end"in a?ap(a):"line"in a||"column"in a?rc(a):""}function rc(a){return ip(a&&a.line)+":"+ip(a&&a.column)}function ap(a){return rc(a&&a.start)+"-"+rc(a&&a.end)}function ip(a){return a&&typeof a=="number"?a:1}class pn extends Error{constructor(l,r,o){super(),typeof r=="string"&&(o=r,r=void 0);let c="",f={},d=!1;if(r&&("line"in r&&"column"in r?f={place:r}:"start"in r&&"end"in r?f={place:r}:"type"in r?f={ancestors:[r],place:r.position}:f={...r}),typeof l=="string"?c=l:!f.cause&&l&&(d=!0,c=l.message,f.cause=l),!f.ruleId&&!f.source&&typeof o=="string"){const g=o.indexOf(":");g===-1?f.ruleId=o:(f.source=o.slice(0,g),f.ruleId=o.slice(g+1))}if(!f.place&&f.ancestors&&f.ancestors){const g=f.ancestors[f.ancestors.length-1];g&&(f.place=g.position)}const p=f.place&&"start"in f.place?f.place.start:f.place;this.ancestors=f.ancestors||void 0,this.cause=f.cause||void 0,this.column=p?p.column:void 0,this.fatal=void 0,this.file="",this.message=c,this.line=p?p.line:void 0,this.name=Tl(f.place)||"1:1",this.place=f.place||void 0,this.reason=this.message,this.ruleId=f.ruleId||void 0,this.source=f.source||void 0,this.stack=d&&f.cause&&typeof f.cause.stack=="string"?f.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}pn.prototype.file="";pn.prototype.name="";pn.prototype.reason="";pn.prototype.message="";pn.prototype.stack="";pn.prototype.column=void 0;pn.prototype.line=void 0;pn.prototype.ancestors=void 0;pn.prototype.cause=void 0;pn.prototype.fatal=void 0;pn.prototype.place=void 0;pn.prototype.ruleId=void 0;pn.prototype.source=void 0;const Tc={}.hasOwnProperty,Ww=new Map,Fw=/[A-Z]/g,Vw=new Set(["table","tbody","thead","tfoot","tr"]),Qw=new Set(["td","th"]),ug="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Xw(a,l){if(!l||l.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=l.filePath||void 0;let o;if(l.development){if(typeof l.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=a1(r,l.jsxDEV)}else{if(typeof l.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof l.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=t1(r,l.jsx,l.jsxs)}const c={Fragment:l.Fragment,ancestors:[],components:l.components||{},create:o,elementAttributeNameCase:l.elementAttributeNameCase||"react",evaluater:l.createEvaluater?l.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:l.ignoreInvalidStyle||!1,passKeys:l.passKeys!==!1,passNode:l.passNode||!1,schema:l.space==="svg"?kc:Iw,stylePropertyNameCase:l.stylePropertyNameCase||"dom",tableCellAlignToStyle:l.tableCellAlignToStyle!==!1},f=cg(c,a,void 0);return f&&typeof f!="string"?f:c.create(a,c.Fragment,{children:f||void 0},void 0)}function cg(a,l,r){if(l.type==="element")return Kw(a,l,r);if(l.type==="mdxFlowExpression"||l.type==="mdxTextExpression")return Zw(a,l);if(l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement")return Jw(a,l,r);if(l.type==="mdxjsEsm")return $w(a,l);if(l.type==="root")return e1(a,l,r);if(l.type==="text")return n1(a,l)}function Kw(a,l,r){const o=a.schema;let c=o;l.tagName.toLowerCase()==="svg"&&o.space==="html"&&(c=kc,a.schema=c),a.ancestors.push(l);const f=dg(a,l.tagName,!1),d=i1(a,l);let p=Ec(a,l);return Vw.has(l.tagName)&&(p=p.filter(function(g){return typeof g=="string"?!Aw(g):!0})),fg(a,d,f,l),Ac(d,p),a.ancestors.pop(),a.schema=o,a.create(l,f,d,r)}function Zw(a,l){if(l.data&&l.data.estree&&a.evaluater){const o=l.data.estree.body[0];return o.type,a.evaluater.evaluateExpression(o.expression)}Dl(a,l.position)}function $w(a,l){if(l.data&&l.data.estree&&a.evaluater)return a.evaluater.evaluateProgram(l.data.estree);Dl(a,l.position)}function Jw(a,l,r){const o=a.schema;let c=o;l.name==="svg"&&o.space==="html"&&(c=kc,a.schema=c),a.ancestors.push(l);const f=l.name===null?a.Fragment:dg(a,l.name,!0),d=l1(a,l),p=Ec(a,l);return fg(a,d,f,l),Ac(d,p),a.ancestors.pop(),a.schema=o,a.create(l,f,d,r)}function e1(a,l,r){const o={};return Ac(o,Ec(a,l)),a.create(l,a.Fragment,o,r)}function n1(a,l){return l.value}function fg(a,l,r,o){typeof r!="string"&&r!==a.Fragment&&a.passNode&&(l.node=o)}function Ac(a,l){if(l.length>0){const r=l.length>1?l:l[0];r&&(a.children=r)}}function t1(a,l,r){return o;function o(c,f,d,p){const m=Array.isArray(d.children)?r:l;return p?m(f,d,p):m(f,d)}}function a1(a,l){return r;function r(o,c,f,d){const p=Array.isArray(f.children),g=Cc(o);return l(c,f,d,p,{columnNumber:g?g.column-1:void 0,fileName:a,lineNumber:g?g.line:void 0},void 0)}}function i1(a,l){const r={};let o,c;for(c in l.properties)if(c!=="children"&&Tc.call(l.properties,c)){const f=r1(a,c,l.properties[c]);if(f){const[d,p]=f;a.tableCellAlignToStyle&&d==="align"&&typeof p=="string"&&Qw.has(l.tagName)?o=p:r[d]=p}}if(o){const f=r.style||(r.style={});f[a.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return r}function l1(a,l){const r={};for(const o of l.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&a.evaluater){const f=o.data.estree.body[0];f.type;const d=f.expression;d.type;const p=d.properties[0];p.type,Object.assign(r,a.evaluater.evaluateExpression(p.argument))}else Dl(a,l.position);else{const c=o.name;let f;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&a.evaluater){const p=o.value.data.estree.body[0];p.type,f=a.evaluater.evaluateExpression(p.expression)}else Dl(a,l.position);else f=o.value===null?!0:o.value;r[c]=f}return r}function Ec(a,l){const r=[];let o=-1;const c=a.passKeys?new Map:Ww;for(;++o<l.children.length;){const f=l.children[o];let d;if(a.passKeys){const g=f.type==="element"?f.tagName:f.type==="mdxJsxFlowElement"||f.type==="mdxJsxTextElement"?f.name:void 0;if(g){const m=c.get(g)||0;d=g+"-"+m,c.set(g,m+1)}}const p=cg(a,f,d);p!==void 0&&r.push(p)}return r}function r1(a,l,r){const o=Lw(a.schema,l);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=o.commaSeparated?ww(r):Uw(r)),o.property==="style"){let c=typeof r=="object"?r:o1(a,String(r));return a.stylePropertyNameCase==="css"&&(c=s1(c)),["style",c]}return[a.elementAttributeNameCase==="react"&&o.space?Rw[o.property]||o.property:o.attribute,r]}}function o1(a,l){try{return Pw(l,{reactCompat:!0})}catch(r){if(a.ignoreInvalidStyle)return{};const o=r,c=new pn("Cannot parse `style` attribute",{ancestors:a.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw c.file=a.filePath||void 0,c.url=ug+"#cannot-parse-style-attribute",c}}function dg(a,l,r){let o;if(!r)o={type:"Literal",value:l};else if(l.includes(".")){const c=l.split(".");let f=-1,d;for(;++f<c.length;){const p=Xm(c[f])?{type:"Identifier",name:c[f]}:{type:"Literal",value:c[f]};d=d?{type:"MemberExpression",object:d,property:p,computed:!!(f&&p.type==="Literal"),optional:!1}:p}o=d}else o=Xm(l)&&!/^[a-z]/.test(l)?{type:"Identifier",name:l}:{type:"Literal",value:l};if(o.type==="Literal"){const c=o.value;return Tc.call(a.components,c)?a.components[c]:c}if(a.evaluater)return a.evaluater.evaluateExpression(o);Dl(a)}function Dl(a,l){const r=new pn("Cannot handle MDX estrees without `createEvaluater`",{ancestors:a.ancestors,place:l,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=a.filePath||void 0,r.url=ug+"#cannot-handle-mdx-estrees-without-createevaluater",r}function s1(a){const l={};let r;for(r in a)Tc.call(a,r)&&(l[u1(r)]=a[r]);return l}function u1(a){let l=a.replace(Fw,c1);return l.slice(0,3)==="ms-"&&(l="-"+l),l}function c1(a){return"-"+a.toLowerCase()}const Pu={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},f1={};function d1(a,l){const r=f1,o=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,c=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return hg(a,o,c)}function hg(a,l,r){if(h1(a)){if("value"in a)return a.type==="html"&&!r?"":a.value;if(l&&"alt"in a&&a.alt)return a.alt;if("children"in a)return lp(a.children,l,r)}return Array.isArray(a)?lp(a,l,r):""}function lp(a,l,r){const o=[];let c=-1;for(;++c<a.length;)o[c]=hg(a[c],l,r);return o.join("")}function h1(a){return!!(a&&typeof a=="object")}const rp=document.createElement("i");function _c(a){const l="&"+a+";";rp.innerHTML=l;const r=rp.textContent;return r.charCodeAt(r.length-1)===59&&a!=="semi"||r===l?!1:r}function ft(a,l,r,o){const c=a.length;let f=0,d;if(l<0?l=-l>c?0:c+l:l=l>c?c:l,r=r>0?r:0,o.length<1e4)d=Array.from(o),d.unshift(l,r),a.splice(...d);else for(r&&a.splice(l,r);f<o.length;)d=o.slice(f,f+1e4),d.unshift(l,0),a.splice(...d),f+=1e4,l+=1e4}function Jn(a,l){return a.length>0?(ft(a,a.length,0,l),a):l}const op={}.hasOwnProperty;function m1(a){const l={};let r=-1;for(;++r<a.length;)p1(l,a[r]);return l}function p1(a,l){let r;for(r in l){const c=(op.call(a,r)?a[r]:void 0)||(a[r]={}),f=l[r];let d;if(f)for(d in f){op.call(c,d)||(c[d]=[]);const p=f[d];g1(c[d],Array.isArray(p)?p:p?[p]:[])}}}function g1(a,l){let r=-1;const o=[];for(;++r<l.length;)(l[r].add==="after"?a:o).push(l[r]);ft(a,0,0,o)}function mg(a,l){const r=Number.parseInt(a,l);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function Si(a){return a.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ct=sa(/[A-Za-z]/),Hn=sa(/[\dA-Za-z]/),y1=sa(/[#-'*+\--9=?A-Z^-~]/);function oc(a){return a!==null&&(a<32||a===127)}const sc=sa(/\d/),b1=sa(/[\dA-Fa-f]/),v1=sa(/[!-/:-@[-`{-~]/);function he(a){return a!==null&&a<-2}function _n(a){return a!==null&&(a<0||a===32)}function Oe(a){return a===-2||a===-1||a===32}const S1=sa(new RegExp("\\p{P}|\\p{S}","u")),w1=sa(/\s/);function sa(a){return l;function l(r){return r!==null&&r>-1&&a.test(String.fromCharCode(r))}}function Ci(a){const l=[];let r=-1,o=0,c=0;for(;++r<a.length;){const f=a.charCodeAt(r);let d="";if(f===37&&Hn(a.charCodeAt(r+1))&&Hn(a.charCodeAt(r+2)))c=2;else if(f<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(f))||(d=String.fromCharCode(f));else if(f>55295&&f<57344){const p=a.charCodeAt(r+1);f<56320&&p>56319&&p<57344?(d=String.fromCharCode(f,p),c=1):d="�"}else d=String.fromCharCode(f);d&&(l.push(a.slice(o,r),encodeURIComponent(d)),o=r+c+1,d=""),c&&(r+=c,c=0)}return l.join("")+a.slice(o)}function Ye(a,l,r,o){const c=o?o-1:Number.POSITIVE_INFINITY;let f=0;return d;function d(g){return Oe(g)?(a.enter(r),p(g)):l(g)}function p(g){return Oe(g)&&f++<c?(a.consume(g),p):(a.exit(r),l(g))}}const x1={tokenize:k1};function k1(a){const l=a.attempt(this.parser.constructs.contentInitial,o,c);let r;return l;function o(p){if(p===null){a.consume(p);return}return a.enter("lineEnding"),a.consume(p),a.exit("lineEnding"),Ye(a,l,"linePrefix")}function c(p){return a.enter("paragraph"),f(p)}function f(p){const g=a.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=g),r=g,d(p)}function d(p){if(p===null){a.exit("chunkText"),a.exit("paragraph"),a.consume(p);return}return he(p)?(a.consume(p),a.exit("chunkText"),f):(a.consume(p),d)}}const C1={tokenize:T1},sp={tokenize:A1};function T1(a){const l=this,r=[];let o=0,c,f,d;return p;function p(G){if(o<r.length){const re=r[o];return l.containerState=re[1],a.attempt(re[0].continuation,g,m)(G)}return m(G)}function g(G){if(o++,l.containerState._closeFlow){l.containerState._closeFlow=void 0,c&&W();const re=l.events.length;let oe=re,B;for(;oe--;)if(l.events[oe][0]==="exit"&&l.events[oe][1].type==="chunkFlow"){B=l.events[oe][1].end;break}M(o);let K=re;for(;K<l.events.length;)l.events[K][1].end={...B},K++;return ft(l.events,oe+1,0,l.events.slice(re)),l.events.length=K,m(G)}return p(G)}function m(G){if(o===r.length){if(!c)return x(G);if(c.currentConstruct&&c.currentConstruct.concrete)return I(G);l.interrupt=!!(c.currentConstruct&&!c._gfmTableDynamicInterruptHack)}return l.containerState={},a.check(sp,y,b)(G)}function y(G){return c&&W(),M(o),x(G)}function b(G){return l.parser.lazy[l.now().line]=o!==r.length,d=l.now().offset,I(G)}function x(G){return l.containerState={},a.attempt(sp,S,I)(G)}function S(G){return o++,r.push([l.currentConstruct,l.containerState]),x(G)}function I(G){if(G===null){c&&W(),M(0),a.consume(G);return}return c=c||l.parser.flow(l.now()),a.enter("chunkFlow",{_tokenizer:c,contentType:"flow",previous:f}),z(G)}function z(G){if(G===null){U(a.exit("chunkFlow"),!0),M(0),a.consume(G);return}return he(G)?(a.consume(G),U(a.exit("chunkFlow")),o=0,l.interrupt=void 0,p):(a.consume(G),z)}function U(G,re){const oe=l.sliceStream(G);if(re&&oe.push(null),G.previous=f,f&&(f.next=G),f=G,c.defineSkip(G.start),c.write(oe),l.parser.lazy[G.start.line]){let B=c.events.length;for(;B--;)if(c.events[B][1].start.offset<d&&(!c.events[B][1].end||c.events[B][1].end.offset>d))return;const K=l.events.length;let ce=K,fe,ge;for(;ce--;)if(l.events[ce][0]==="exit"&&l.events[ce][1].type==="chunkFlow"){if(fe){ge=l.events[ce][1].end;break}fe=!0}for(M(o),B=K;B<l.events.length;)l.events[B][1].end={...ge},B++;ft(l.events,ce+1,0,l.events.slice(K)),l.events.length=B}}function M(G){let re=r.length;for(;re-- >G;){const oe=r[re];l.containerState=oe[1],oe[0].exit.call(l,a)}r.length=G}function W(){c.write([null]),f=void 0,c=void 0,l.containerState._closeFlow=void 0}}function A1(a,l,r){return Ye(a,a.attempt(this.parser.constructs.document,l,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function up(a){if(a===null||_n(a)||w1(a))return 1;if(S1(a))return 2}function Dc(a,l,r){const o=[];let c=-1;for(;++c<a.length;){const f=a[c].resolveAll;f&&!o.includes(f)&&(l=f(l,r),o.push(f))}return l}const uc={name:"attention",resolveAll:E1,tokenize:_1};function E1(a,l){let r=-1,o,c,f,d,p,g,m,y;for(;++r<a.length;)if(a[r][0]==="enter"&&a[r][1].type==="attentionSequence"&&a[r][1]._close){for(o=r;o--;)if(a[o][0]==="exit"&&a[o][1].type==="attentionSequence"&&a[o][1]._open&&l.sliceSerialize(a[o][1]).charCodeAt(0)===l.sliceSerialize(a[r][1]).charCodeAt(0)){if((a[o][1]._close||a[r][1]._open)&&(a[r][1].end.offset-a[r][1].start.offset)%3&&!((a[o][1].end.offset-a[o][1].start.offset+a[r][1].end.offset-a[r][1].start.offset)%3))continue;g=a[o][1].end.offset-a[o][1].start.offset>1&&a[r][1].end.offset-a[r][1].start.offset>1?2:1;const b={...a[o][1].end},x={...a[r][1].start};cp(b,-g),cp(x,g),d={type:g>1?"strongSequence":"emphasisSequence",start:b,end:{...a[o][1].end}},p={type:g>1?"strongSequence":"emphasisSequence",start:{...a[r][1].start},end:x},f={type:g>1?"strongText":"emphasisText",start:{...a[o][1].end},end:{...a[r][1].start}},c={type:g>1?"strong":"emphasis",start:{...d.start},end:{...p.end}},a[o][1].end={...d.start},a[r][1].start={...p.end},m=[],a[o][1].end.offset-a[o][1].start.offset&&(m=Jn(m,[["enter",a[o][1],l],["exit",a[o][1],l]])),m=Jn(m,[["enter",c,l],["enter",d,l],["exit",d,l],["enter",f,l]]),m=Jn(m,Dc(l.parser.constructs.insideSpan.null,a.slice(o+1,r),l)),m=Jn(m,[["exit",f,l],["enter",p,l],["exit",p,l],["exit",c,l]]),a[r][1].end.offset-a[r][1].start.offset?(y=2,m=Jn(m,[["enter",a[r][1],l],["exit",a[r][1],l]])):y=0,ft(a,o-1,r-o+3,m),r=o+m.length-y-2;break}}for(r=-1;++r<a.length;)a[r][1].type==="attentionSequence"&&(a[r][1].type="data");return a}function _1(a,l){const r=this.parser.constructs.attentionMarkers.null,o=this.previous,c=up(o);let f;return d;function d(g){return f=g,a.enter("attentionSequence"),p(g)}function p(g){if(g===f)return a.consume(g),p;const m=a.exit("attentionSequence"),y=up(g),b=!y||y===2&&c||r.includes(g),x=!c||c===2&&y||r.includes(o);return m._open=!!(f===42?b:b&&(c||!x)),m._close=!!(f===42?x:x&&(y||!b)),l(g)}}function cp(a,l){a.column+=l,a.offset+=l,a._bufferIndex+=l}const D1={name:"autolink",tokenize:R1};function R1(a,l,r){let o=0;return c;function c(S){return a.enter("autolink"),a.enter("autolinkMarker"),a.consume(S),a.exit("autolinkMarker"),a.enter("autolinkProtocol"),f}function f(S){return ct(S)?(a.consume(S),d):S===64?r(S):m(S)}function d(S){return S===43||S===45||S===46||Hn(S)?(o=1,p(S)):m(S)}function p(S){return S===58?(a.consume(S),o=0,g):(S===43||S===45||S===46||Hn(S))&&o++<32?(a.consume(S),p):(o=0,m(S))}function g(S){return S===62?(a.exit("autolinkProtocol"),a.enter("autolinkMarker"),a.consume(S),a.exit("autolinkMarker"),a.exit("autolink"),l):S===null||S===32||S===60||oc(S)?r(S):(a.consume(S),g)}function m(S){return S===64?(a.consume(S),y):y1(S)?(a.consume(S),m):r(S)}function y(S){return Hn(S)?b(S):r(S)}function b(S){return S===46?(a.consume(S),o=0,y):S===62?(a.exit("autolinkProtocol").type="autolinkEmail",a.enter("autolinkMarker"),a.consume(S),a.exit("autolinkMarker"),a.exit("autolink"),l):x(S)}function x(S){if((S===45||Hn(S))&&o++<63){const I=S===45?x:b;return a.consume(S),I}return r(S)}}const ho={partial:!0,tokenize:O1};function O1(a,l,r){return o;function o(f){return Oe(f)?Ye(a,c,"linePrefix")(f):c(f)}function c(f){return f===null||he(f)?l(f):r(f)}}const pg={continuation:{tokenize:L1},exit:z1,name:"blockQuote",tokenize:M1};function M1(a,l,r){const o=this;return c;function c(d){if(d===62){const p=o.containerState;return p.open||(a.enter("blockQuote",{_container:!0}),p.open=!0),a.enter("blockQuotePrefix"),a.enter("blockQuoteMarker"),a.consume(d),a.exit("blockQuoteMarker"),f}return r(d)}function f(d){return Oe(d)?(a.enter("blockQuotePrefixWhitespace"),a.consume(d),a.exit("blockQuotePrefixWhitespace"),a.exit("blockQuotePrefix"),l):(a.exit("blockQuotePrefix"),l(d))}}function L1(a,l,r){const o=this;return c;function c(d){return Oe(d)?Ye(a,f,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):f(d)}function f(d){return a.attempt(pg,l,r)(d)}}function z1(a){a.exit("blockQuote")}const gg={name:"characterEscape",tokenize:N1};function N1(a,l,r){return o;function o(f){return a.enter("characterEscape"),a.enter("escapeMarker"),a.consume(f),a.exit("escapeMarker"),c}function c(f){return v1(f)?(a.enter("characterEscapeValue"),a.consume(f),a.exit("characterEscapeValue"),a.exit("characterEscape"),l):r(f)}}const yg={name:"characterReference",tokenize:I1};function I1(a,l,r){const o=this;let c=0,f,d;return p;function p(b){return a.enter("characterReference"),a.enter("characterReferenceMarker"),a.consume(b),a.exit("characterReferenceMarker"),g}function g(b){return b===35?(a.enter("characterReferenceMarkerNumeric"),a.consume(b),a.exit("characterReferenceMarkerNumeric"),m):(a.enter("characterReferenceValue"),f=31,d=Hn,y(b))}function m(b){return b===88||b===120?(a.enter("characterReferenceMarkerHexadecimal"),a.consume(b),a.exit("characterReferenceMarkerHexadecimal"),a.enter("characterReferenceValue"),f=6,d=b1,y):(a.enter("characterReferenceValue"),f=7,d=sc,y(b))}function y(b){if(b===59&&c){const x=a.exit("characterReferenceValue");return d===Hn&&!_c(o.sliceSerialize(x))?r(b):(a.enter("characterReferenceMarker"),a.consume(b),a.exit("characterReferenceMarker"),a.exit("characterReference"),l)}return d(b)&&c++<f?(a.consume(b),y):r(b)}}const fp={partial:!0,tokenize:B1},dp={concrete:!0,name:"codeFenced",tokenize:U1};function U1(a,l,r){const o=this,c={partial:!0,tokenize:oe};let f=0,d=0,p;return g;function g(B){return m(B)}function m(B){const K=o.events[o.events.length-1];return f=K&&K[1].type==="linePrefix"?K[2].sliceSerialize(K[1],!0).length:0,p=B,a.enter("codeFenced"),a.enter("codeFencedFence"),a.enter("codeFencedFenceSequence"),y(B)}function y(B){return B===p?(d++,a.consume(B),y):d<3?r(B):(a.exit("codeFencedFenceSequence"),Oe(B)?Ye(a,b,"whitespace")(B):b(B))}function b(B){return B===null||he(B)?(a.exit("codeFencedFence"),o.interrupt?l(B):a.check(fp,z,re)(B)):(a.enter("codeFencedFenceInfo"),a.enter("chunkString",{contentType:"string"}),x(B))}function x(B){return B===null||he(B)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),b(B)):Oe(B)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),Ye(a,S,"whitespace")(B)):B===96&&B===p?r(B):(a.consume(B),x)}function S(B){return B===null||he(B)?b(B):(a.enter("codeFencedFenceMeta"),a.enter("chunkString",{contentType:"string"}),I(B))}function I(B){return B===null||he(B)?(a.exit("chunkString"),a.exit("codeFencedFenceMeta"),b(B)):B===96&&B===p?r(B):(a.consume(B),I)}function z(B){return a.attempt(c,re,U)(B)}function U(B){return a.enter("lineEnding"),a.consume(B),a.exit("lineEnding"),M}function M(B){return f>0&&Oe(B)?Ye(a,W,"linePrefix",f+1)(B):W(B)}function W(B){return B===null||he(B)?a.check(fp,z,re)(B):(a.enter("codeFlowValue"),G(B))}function G(B){return B===null||he(B)?(a.exit("codeFlowValue"),W(B)):(a.consume(B),G)}function re(B){return a.exit("codeFenced"),l(B)}function oe(B,K,ce){let fe=0;return ge;function ge(Q){return B.enter("lineEnding"),B.consume(Q),B.exit("lineEnding"),ee}function ee(Q){return B.enter("codeFencedFence"),Oe(Q)?Ye(B,$,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Q):$(Q)}function $(Q){return Q===p?(B.enter("codeFencedFenceSequence"),Ee(Q)):ce(Q)}function Ee(Q){return Q===p?(fe++,B.consume(Q),Ee):fe>=d?(B.exit("codeFencedFenceSequence"),Oe(Q)?Ye(B,ae,"whitespace")(Q):ae(Q)):ce(Q)}function ae(Q){return Q===null||he(Q)?(B.exit("codeFencedFence"),K(Q)):ce(Q)}}}function B1(a,l,r){const o=this;return c;function c(d){return d===null?r(d):(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),f)}function f(d){return o.parser.lazy[o.now().line]?r(d):l(d)}}const Gu={name:"codeIndented",tokenize:q1},H1={partial:!0,tokenize:j1};function q1(a,l,r){const o=this;return c;function c(m){return a.enter("codeIndented"),Ye(a,f,"linePrefix",5)(m)}function f(m){const y=o.events[o.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?d(m):r(m)}function d(m){return m===null?g(m):he(m)?a.attempt(H1,d,g)(m):(a.enter("codeFlowValue"),p(m))}function p(m){return m===null||he(m)?(a.exit("codeFlowValue"),d(m)):(a.consume(m),p)}function g(m){return a.exit("codeIndented"),l(m)}}function j1(a,l,r){const o=this;return c;function c(d){return o.parser.lazy[o.now().line]?r(d):he(d)?(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),c):Ye(a,f,"linePrefix",5)(d)}function f(d){const p=o.events[o.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?l(d):he(d)?c(d):r(d)}}const Y1={name:"codeText",previous:G1,resolve:P1,tokenize:W1};function P1(a){let l=a.length-4,r=3,o,c;if((a[r][1].type==="lineEnding"||a[r][1].type==="space")&&(a[l][1].type==="lineEnding"||a[l][1].type==="space")){for(o=r;++o<l;)if(a[o][1].type==="codeTextData"){a[r][1].type="codeTextPadding",a[l][1].type="codeTextPadding",r+=2,l-=2;break}}for(o=r-1,l++;++o<=l;)c===void 0?o!==l&&a[o][1].type!=="lineEnding"&&(c=o):(o===l||a[o][1].type==="lineEnding")&&(a[c][1].type="codeTextData",o!==c+2&&(a[c][1].end=a[o-1][1].end,a.splice(c+2,o-c-2),l-=o-c-2,o=c+2),c=void 0);return a}function G1(a){return a!==96||this.events[this.events.length-1][1].type==="characterEscape"}function W1(a,l,r){let o=0,c,f;return d;function d(b){return a.enter("codeText"),a.enter("codeTextSequence"),p(b)}function p(b){return b===96?(a.consume(b),o++,p):(a.exit("codeTextSequence"),g(b))}function g(b){return b===null?r(b):b===32?(a.enter("space"),a.consume(b),a.exit("space"),g):b===96?(f=a.enter("codeTextSequence"),c=0,y(b)):he(b)?(a.enter("lineEnding"),a.consume(b),a.exit("lineEnding"),g):(a.enter("codeTextData"),m(b))}function m(b){return b===null||b===32||b===96||he(b)?(a.exit("codeTextData"),g(b)):(a.consume(b),m)}function y(b){return b===96?(a.consume(b),c++,y):c===o?(a.exit("codeTextSequence"),a.exit("codeText"),l(b)):(f.type="codeTextData",m(b))}}class F1{constructor(l){this.left=l?[...l]:[],this.right=[]}get(l){if(l<0||l>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+l+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return l<this.left.length?this.left[l]:this.right[this.right.length-l+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(l,r){const o=r??Number.POSITIVE_INFINITY;return o<this.left.length?this.left.slice(l,o):l>this.left.length?this.right.slice(this.right.length-o+this.left.length,this.right.length-l+this.left.length).reverse():this.left.slice(l).concat(this.right.slice(this.right.length-o+this.left.length).reverse())}splice(l,r,o){const c=r||0;this.setCursor(Math.trunc(l));const f=this.right.splice(this.right.length-c,Number.POSITIVE_INFINITY);return o&&kl(this.left,o),f.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(l){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(l)}pushMany(l){this.setCursor(Number.POSITIVE_INFINITY),kl(this.left,l)}unshift(l){this.setCursor(0),this.right.push(l)}unshiftMany(l){this.setCursor(0),kl(this.right,l.reverse())}setCursor(l){if(!(l===this.left.length||l>this.left.length&&this.right.length===0||l<0&&this.left.length===0))if(l<this.left.length){const r=this.left.splice(l,Number.POSITIVE_INFINITY);kl(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-l,Number.POSITIVE_INFINITY);kl(this.left,r.reverse())}}}function kl(a,l){let r=0;if(l.length<1e4)a.push(...l);else for(;r<l.length;)a.push(...l.slice(r,r+1e4)),r+=1e4}function bg(a){const l={};let r=-1,o,c,f,d,p,g,m;const y=new F1(a);for(;++r<y.length;){for(;r in l;)r=l[r];if(o=y.get(r),r&&o[1].type==="chunkFlow"&&y.get(r-1)[1].type==="listItemPrefix"&&(g=o[1]._tokenizer.events,f=0,f<g.length&&g[f][1].type==="lineEndingBlank"&&(f+=2),f<g.length&&g[f][1].type==="content"))for(;++f<g.length&&g[f][1].type!=="content";)g[f][1].type==="chunkText"&&(g[f][1]._isInFirstContentOfListItem=!0,f++);if(o[0]==="enter")o[1].contentType&&(Object.assign(l,V1(y,r)),r=l[r],m=!0);else if(o[1]._container){for(f=r,c=void 0;f--;)if(d=y.get(f),d[1].type==="lineEnding"||d[1].type==="lineEndingBlank")d[0]==="enter"&&(c&&(y.get(c)[1].type="lineEndingBlank"),d[1].type="lineEnding",c=f);else if(!(d[1].type==="linePrefix"||d[1].type==="listItemIndent"))break;c&&(o[1].end={...y.get(c)[1].start},p=y.slice(c,r),p.unshift(o),y.splice(c,r-c+1,p))}}return ft(a,0,Number.POSITIVE_INFINITY,y.slice(0)),!m}function V1(a,l){const r=a.get(l)[1],o=a.get(l)[2];let c=l-1;const f=[];let d=r._tokenizer;d||(d=o.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(d._contentTypeTextTrailing=!0));const p=d.events,g=[],m={};let y,b,x=-1,S=r,I=0,z=0;const U=[z];for(;S;){for(;a.get(++c)[1]!==S;);f.push(c),S._tokenizer||(y=o.sliceStream(S),S.next||y.push(null),b&&d.defineSkip(S.start),S._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=!0),d.write(y),S._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=void 0)),b=S,S=S.next}for(S=r;++x<p.length;)p[x][0]==="exit"&&p[x-1][0]==="enter"&&p[x][1].type===p[x-1][1].type&&p[x][1].start.line!==p[x][1].end.line&&(z=x+1,U.push(z),S._tokenizer=void 0,S.previous=void 0,S=S.next);for(d.events=[],S?(S._tokenizer=void 0,S.previous=void 0):U.pop(),x=U.length;x--;){const M=p.slice(U[x],U[x+1]),W=f.pop();g.push([W,W+M.length-1]),a.splice(W,2,M)}for(g.reverse(),x=-1;++x<g.length;)m[I+g[x][0]]=I+g[x][1],I+=g[x][1]-g[x][0]-1;return m}const Q1={resolve:K1,tokenize:Z1},X1={partial:!0,tokenize:$1};function K1(a){return bg(a),a}function Z1(a,l){let r;return o;function o(p){return a.enter("content"),r=a.enter("chunkContent",{contentType:"content"}),c(p)}function c(p){return p===null?f(p):he(p)?a.check(X1,d,f)(p):(a.consume(p),c)}function f(p){return a.exit("chunkContent"),a.exit("content"),l(p)}function d(p){return a.consume(p),a.exit("chunkContent"),r.next=a.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,c}}function $1(a,l,r){const o=this;return c;function c(d){return a.exit("chunkContent"),a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),Ye(a,f,"linePrefix")}function f(d){if(d===null||he(d))return r(d);const p=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?l(d):a.interrupt(o.parser.constructs.flow,r,l)(d)}}function vg(a,l,r,o,c,f,d,p,g){const m=g||Number.POSITIVE_INFINITY;let y=0;return b;function b(M){return M===60?(a.enter(o),a.enter(c),a.enter(f),a.consume(M),a.exit(f),x):M===null||M===32||M===41||oc(M)?r(M):(a.enter(o),a.enter(d),a.enter(p),a.enter("chunkString",{contentType:"string"}),z(M))}function x(M){return M===62?(a.enter(f),a.consume(M),a.exit(f),a.exit(c),a.exit(o),l):(a.enter(p),a.enter("chunkString",{contentType:"string"}),S(M))}function S(M){return M===62?(a.exit("chunkString"),a.exit(p),x(M)):M===null||M===60||he(M)?r(M):(a.consume(M),M===92?I:S)}function I(M){return M===60||M===62||M===92?(a.consume(M),S):S(M)}function z(M){return!y&&(M===null||M===41||_n(M))?(a.exit("chunkString"),a.exit(p),a.exit(d),a.exit(o),l(M)):y<m&&M===40?(a.consume(M),y++,z):M===41?(a.consume(M),y--,z):M===null||M===32||M===40||oc(M)?r(M):(a.consume(M),M===92?U:z)}function U(M){return M===40||M===41||M===92?(a.consume(M),z):z(M)}}function Sg(a,l,r,o,c,f){const d=this;let p=0,g;return m;function m(S){return a.enter(o),a.enter(c),a.consume(S),a.exit(c),a.enter(f),y}function y(S){return p>999||S===null||S===91||S===93&&!g||S===94&&!p&&"_hiddenFootnoteSupport"in d.parser.constructs?r(S):S===93?(a.exit(f),a.enter(c),a.consume(S),a.exit(c),a.exit(o),l):he(S)?(a.enter("lineEnding"),a.consume(S),a.exit("lineEnding"),y):(a.enter("chunkString",{contentType:"string"}),b(S))}function b(S){return S===null||S===91||S===93||he(S)||p++>999?(a.exit("chunkString"),y(S)):(a.consume(S),g||(g=!Oe(S)),S===92?x:b)}function x(S){return S===91||S===92||S===93?(a.consume(S),p++,b):b(S)}}function wg(a,l,r,o,c,f){let d;return p;function p(x){return x===34||x===39||x===40?(a.enter(o),a.enter(c),a.consume(x),a.exit(c),d=x===40?41:x,g):r(x)}function g(x){return x===d?(a.enter(c),a.consume(x),a.exit(c),a.exit(o),l):(a.enter(f),m(x))}function m(x){return x===d?(a.exit(f),g(d)):x===null?r(x):he(x)?(a.enter("lineEnding"),a.consume(x),a.exit("lineEnding"),Ye(a,m,"linePrefix")):(a.enter("chunkString",{contentType:"string"}),y(x))}function y(x){return x===d||x===null||he(x)?(a.exit("chunkString"),m(x)):(a.consume(x),x===92?b:y)}function b(x){return x===d||x===92?(a.consume(x),y):y(x)}}function Al(a,l){let r;return o;function o(c){return he(c)?(a.enter("lineEnding"),a.consume(c),a.exit("lineEnding"),r=!0,o):Oe(c)?Ye(a,o,r?"linePrefix":"lineSuffix")(c):l(c)}}const J1={name:"definition",tokenize:n0},e0={partial:!0,tokenize:t0};function n0(a,l,r){const o=this;let c;return f;function f(S){return a.enter("definition"),d(S)}function d(S){return Sg.call(o,a,p,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(S)}function p(S){return c=Si(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),S===58?(a.enter("definitionMarker"),a.consume(S),a.exit("definitionMarker"),g):r(S)}function g(S){return _n(S)?Al(a,m)(S):m(S)}function m(S){return vg(a,y,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(S)}function y(S){return a.attempt(e0,b,b)(S)}function b(S){return Oe(S)?Ye(a,x,"whitespace")(S):x(S)}function x(S){return S===null||he(S)?(a.exit("definition"),o.parser.defined.push(c),l(S)):r(S)}}function t0(a,l,r){return o;function o(p){return _n(p)?Al(a,c)(p):r(p)}function c(p){return wg(a,f,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(p)}function f(p){return Oe(p)?Ye(a,d,"whitespace")(p):d(p)}function d(p){return p===null||he(p)?l(p):r(p)}}const a0={name:"hardBreakEscape",tokenize:i0};function i0(a,l,r){return o;function o(f){return a.enter("hardBreakEscape"),a.consume(f),c}function c(f){return he(f)?(a.exit("hardBreakEscape"),l(f)):r(f)}}const l0={name:"headingAtx",resolve:r0,tokenize:o0};function r0(a,l){let r=a.length-2,o=3,c,f;return a[o][1].type==="whitespace"&&(o+=2),r-2>o&&a[r][1].type==="whitespace"&&(r-=2),a[r][1].type==="atxHeadingSequence"&&(o===r-1||r-4>o&&a[r-2][1].type==="whitespace")&&(r-=o+1===r?2:4),r>o&&(c={type:"atxHeadingText",start:a[o][1].start,end:a[r][1].end},f={type:"chunkText",start:a[o][1].start,end:a[r][1].end,contentType:"text"},ft(a,o,r-o+1,[["enter",c,l],["enter",f,l],["exit",f,l],["exit",c,l]])),a}function o0(a,l,r){let o=0;return c;function c(y){return a.enter("atxHeading"),f(y)}function f(y){return a.enter("atxHeadingSequence"),d(y)}function d(y){return y===35&&o++<6?(a.consume(y),d):y===null||_n(y)?(a.exit("atxHeadingSequence"),p(y)):r(y)}function p(y){return y===35?(a.enter("atxHeadingSequence"),g(y)):y===null||he(y)?(a.exit("atxHeading"),l(y)):Oe(y)?Ye(a,p,"whitespace")(y):(a.enter("atxHeadingText"),m(y))}function g(y){return y===35?(a.consume(y),g):(a.exit("atxHeadingSequence"),p(y))}function m(y){return y===null||y===35||_n(y)?(a.exit("atxHeadingText"),p(y)):(a.consume(y),m)}}const s0=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],hp=["pre","script","style","textarea"],u0={concrete:!0,name:"htmlFlow",resolveTo:d0,tokenize:h0},c0={partial:!0,tokenize:p0},f0={partial:!0,tokenize:m0};function d0(a){let l=a.length;for(;l--&&!(a[l][0]==="enter"&&a[l][1].type==="htmlFlow"););return l>1&&a[l-2][1].type==="linePrefix"&&(a[l][1].start=a[l-2][1].start,a[l+1][1].start=a[l-2][1].start,a.splice(l-2,2)),a}function h0(a,l,r){const o=this;let c,f,d,p,g;return m;function m(w){return y(w)}function y(w){return a.enter("htmlFlow"),a.enter("htmlFlowData"),a.consume(w),b}function b(w){return w===33?(a.consume(w),x):w===47?(a.consume(w),f=!0,z):w===63?(a.consume(w),c=3,o.interrupt?l:k):ct(w)?(a.consume(w),d=String.fromCharCode(w),U):r(w)}function x(w){return w===45?(a.consume(w),c=2,S):w===91?(a.consume(w),c=5,p=0,I):ct(w)?(a.consume(w),c=4,o.interrupt?l:k):r(w)}function S(w){return w===45?(a.consume(w),o.interrupt?l:k):r(w)}function I(w){const Z="CDATA[";return w===Z.charCodeAt(p++)?(a.consume(w),p===Z.length?o.interrupt?l:$:I):r(w)}function z(w){return ct(w)?(a.consume(w),d=String.fromCharCode(w),U):r(w)}function U(w){if(w===null||w===47||w===62||_n(w)){const Z=w===47,ue=d.toLowerCase();return!Z&&!f&&hp.includes(ue)?(c=1,o.interrupt?l(w):$(w)):s0.includes(d.toLowerCase())?(c=6,Z?(a.consume(w),M):o.interrupt?l(w):$(w)):(c=7,o.interrupt&&!o.parser.lazy[o.now().line]?r(w):f?W(w):G(w))}return w===45||Hn(w)?(a.consume(w),d+=String.fromCharCode(w),U):r(w)}function M(w){return w===62?(a.consume(w),o.interrupt?l:$):r(w)}function W(w){return Oe(w)?(a.consume(w),W):ge(w)}function G(w){return w===47?(a.consume(w),ge):w===58||w===95||ct(w)?(a.consume(w),re):Oe(w)?(a.consume(w),G):ge(w)}function re(w){return w===45||w===46||w===58||w===95||Hn(w)?(a.consume(w),re):oe(w)}function oe(w){return w===61?(a.consume(w),B):Oe(w)?(a.consume(w),oe):G(w)}function B(w){return w===null||w===60||w===61||w===62||w===96?r(w):w===34||w===39?(a.consume(w),g=w,K):Oe(w)?(a.consume(w),B):ce(w)}function K(w){return w===g?(a.consume(w),g=null,fe):w===null||he(w)?r(w):(a.consume(w),K)}function ce(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||_n(w)?oe(w):(a.consume(w),ce)}function fe(w){return w===47||w===62||Oe(w)?G(w):r(w)}function ge(w){return w===62?(a.consume(w),ee):r(w)}function ee(w){return w===null||he(w)?$(w):Oe(w)?(a.consume(w),ee):r(w)}function $(w){return w===45&&c===2?(a.consume(w),O):w===60&&c===1?(a.consume(w),F):w===62&&c===4?(a.consume(w),T):w===63&&c===3?(a.consume(w),k):w===93&&c===5?(a.consume(w),ve):he(w)&&(c===6||c===7)?(a.exit("htmlFlowData"),a.check(c0,H,Ee)(w)):w===null||he(w)?(a.exit("htmlFlowData"),Ee(w)):(a.consume(w),$)}function Ee(w){return a.check(f0,ae,H)(w)}function ae(w){return a.enter("lineEnding"),a.consume(w),a.exit("lineEnding"),Q}function Q(w){return w===null||he(w)?Ee(w):(a.enter("htmlFlowData"),$(w))}function O(w){return w===45?(a.consume(w),k):$(w)}function F(w){return w===47?(a.consume(w),d="",te):$(w)}function te(w){if(w===62){const Z=d.toLowerCase();return hp.includes(Z)?(a.consume(w),T):$(w)}return ct(w)&&d.length<8?(a.consume(w),d+=String.fromCharCode(w),te):$(w)}function ve(w){return w===93?(a.consume(w),k):$(w)}function k(w){return w===62?(a.consume(w),T):w===45&&c===2?(a.consume(w),k):$(w)}function T(w){return w===null||he(w)?(a.exit("htmlFlowData"),H(w)):(a.consume(w),T)}function H(w){return a.exit("htmlFlow"),l(w)}}function m0(a,l,r){const o=this;return c;function c(d){return he(d)?(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),f):r(d)}function f(d){return o.parser.lazy[o.now().line]?r(d):l(d)}}function p0(a,l,r){return o;function o(c){return a.enter("lineEnding"),a.consume(c),a.exit("lineEnding"),a.attempt(ho,l,r)}}const g0={name:"htmlText",tokenize:y0};function y0(a,l,r){const o=this;let c,f,d;return p;function p(k){return a.enter("htmlText"),a.enter("htmlTextData"),a.consume(k),g}function g(k){return k===33?(a.consume(k),m):k===47?(a.consume(k),oe):k===63?(a.consume(k),G):ct(k)?(a.consume(k),ce):r(k)}function m(k){return k===45?(a.consume(k),y):k===91?(a.consume(k),f=0,I):ct(k)?(a.consume(k),W):r(k)}function y(k){return k===45?(a.consume(k),S):r(k)}function b(k){return k===null?r(k):k===45?(a.consume(k),x):he(k)?(d=b,F(k)):(a.consume(k),b)}function x(k){return k===45?(a.consume(k),S):b(k)}function S(k){return k===62?O(k):k===45?x(k):b(k)}function I(k){const T="CDATA[";return k===T.charCodeAt(f++)?(a.consume(k),f===T.length?z:I):r(k)}function z(k){return k===null?r(k):k===93?(a.consume(k),U):he(k)?(d=z,F(k)):(a.consume(k),z)}function U(k){return k===93?(a.consume(k),M):z(k)}function M(k){return k===62?O(k):k===93?(a.consume(k),M):z(k)}function W(k){return k===null||k===62?O(k):he(k)?(d=W,F(k)):(a.consume(k),W)}function G(k){return k===null?r(k):k===63?(a.consume(k),re):he(k)?(d=G,F(k)):(a.consume(k),G)}function re(k){return k===62?O(k):G(k)}function oe(k){return ct(k)?(a.consume(k),B):r(k)}function B(k){return k===45||Hn(k)?(a.consume(k),B):K(k)}function K(k){return he(k)?(d=K,F(k)):Oe(k)?(a.consume(k),K):O(k)}function ce(k){return k===45||Hn(k)?(a.consume(k),ce):k===47||k===62||_n(k)?fe(k):r(k)}function fe(k){return k===47?(a.consume(k),O):k===58||k===95||ct(k)?(a.consume(k),ge):he(k)?(d=fe,F(k)):Oe(k)?(a.consume(k),fe):O(k)}function ge(k){return k===45||k===46||k===58||k===95||Hn(k)?(a.consume(k),ge):ee(k)}function ee(k){return k===61?(a.consume(k),$):he(k)?(d=ee,F(k)):Oe(k)?(a.consume(k),ee):fe(k)}function $(k){return k===null||k===60||k===61||k===62||k===96?r(k):k===34||k===39?(a.consume(k),c=k,Ee):he(k)?(d=$,F(k)):Oe(k)?(a.consume(k),$):(a.consume(k),ae)}function Ee(k){return k===c?(a.consume(k),c=void 0,Q):k===null?r(k):he(k)?(d=Ee,F(k)):(a.consume(k),Ee)}function ae(k){return k===null||k===34||k===39||k===60||k===61||k===96?r(k):k===47||k===62||_n(k)?fe(k):(a.consume(k),ae)}function Q(k){return k===47||k===62||_n(k)?fe(k):r(k)}function O(k){return k===62?(a.consume(k),a.exit("htmlTextData"),a.exit("htmlText"),l):r(k)}function F(k){return a.exit("htmlTextData"),a.enter("lineEnding"),a.consume(k),a.exit("lineEnding"),te}function te(k){return Oe(k)?Ye(a,ve,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):ve(k)}function ve(k){return a.enter("htmlTextData"),d(k)}}const Rc={name:"labelEnd",resolveAll:w0,resolveTo:x0,tokenize:k0},b0={tokenize:C0},v0={tokenize:T0},S0={tokenize:A0};function w0(a){let l=-1;const r=[];for(;++l<a.length;){const o=a[l][1];if(r.push(a[l]),o.type==="labelImage"||o.type==="labelLink"||o.type==="labelEnd"){const c=o.type==="labelImage"?4:2;o.type="data",l+=c}}return a.length!==r.length&&ft(a,0,a.length,r),a}function x0(a,l){let r=a.length,o=0,c,f,d,p;for(;r--;)if(c=a[r][1],f){if(c.type==="link"||c.type==="labelLink"&&c._inactive)break;a[r][0]==="enter"&&c.type==="labelLink"&&(c._inactive=!0)}else if(d){if(a[r][0]==="enter"&&(c.type==="labelImage"||c.type==="labelLink")&&!c._balanced&&(f=r,c.type!=="labelLink")){o=2;break}}else c.type==="labelEnd"&&(d=r);const g={type:a[f][1].type==="labelLink"?"link":"image",start:{...a[f][1].start},end:{...a[a.length-1][1].end}},m={type:"label",start:{...a[f][1].start},end:{...a[d][1].end}},y={type:"labelText",start:{...a[f+o+2][1].end},end:{...a[d-2][1].start}};return p=[["enter",g,l],["enter",m,l]],p=Jn(p,a.slice(f+1,f+o+3)),p=Jn(p,[["enter",y,l]]),p=Jn(p,Dc(l.parser.constructs.insideSpan.null,a.slice(f+o+4,d-3),l)),p=Jn(p,[["exit",y,l],a[d-2],a[d-1],["exit",m,l]]),p=Jn(p,a.slice(d+1)),p=Jn(p,[["exit",g,l]]),ft(a,f,a.length,p),a}function k0(a,l,r){const o=this;let c=o.events.length,f,d;for(;c--;)if((o.events[c][1].type==="labelImage"||o.events[c][1].type==="labelLink")&&!o.events[c][1]._balanced){f=o.events[c][1];break}return p;function p(x){return f?f._inactive?b(x):(d=o.parser.defined.includes(Si(o.sliceSerialize({start:f.end,end:o.now()}))),a.enter("labelEnd"),a.enter("labelMarker"),a.consume(x),a.exit("labelMarker"),a.exit("labelEnd"),g):r(x)}function g(x){return x===40?a.attempt(b0,y,d?y:b)(x):x===91?a.attempt(v0,y,d?m:b)(x):d?y(x):b(x)}function m(x){return a.attempt(S0,y,b)(x)}function y(x){return l(x)}function b(x){return f._balanced=!0,r(x)}}function C0(a,l,r){return o;function o(b){return a.enter("resource"),a.enter("resourceMarker"),a.consume(b),a.exit("resourceMarker"),c}function c(b){return _n(b)?Al(a,f)(b):f(b)}function f(b){return b===41?y(b):vg(a,d,p,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(b)}function d(b){return _n(b)?Al(a,g)(b):y(b)}function p(b){return r(b)}function g(b){return b===34||b===39||b===40?wg(a,m,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(b):y(b)}function m(b){return _n(b)?Al(a,y)(b):y(b)}function y(b){return b===41?(a.enter("resourceMarker"),a.consume(b),a.exit("resourceMarker"),a.exit("resource"),l):r(b)}}function T0(a,l,r){const o=this;return c;function c(p){return Sg.call(o,a,f,d,"reference","referenceMarker","referenceString")(p)}function f(p){return o.parser.defined.includes(Si(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?l(p):r(p)}function d(p){return r(p)}}function A0(a,l,r){return o;function o(f){return a.enter("reference"),a.enter("referenceMarker"),a.consume(f),a.exit("referenceMarker"),c}function c(f){return f===93?(a.enter("referenceMarker"),a.consume(f),a.exit("referenceMarker"),a.exit("reference"),l):r(f)}}const E0={name:"labelStartImage",resolveAll:Rc.resolveAll,tokenize:_0};function _0(a,l,r){const o=this;return c;function c(p){return a.enter("labelImage"),a.enter("labelImageMarker"),a.consume(p),a.exit("labelImageMarker"),f}function f(p){return p===91?(a.enter("labelMarker"),a.consume(p),a.exit("labelMarker"),a.exit("labelImage"),d):r(p)}function d(p){return p===94&&"_hiddenFootnoteSupport"in o.parser.constructs?r(p):l(p)}}const D0={name:"labelStartLink",resolveAll:Rc.resolveAll,tokenize:R0};function R0(a,l,r){const o=this;return c;function c(d){return a.enter("labelLink"),a.enter("labelMarker"),a.consume(d),a.exit("labelMarker"),a.exit("labelLink"),f}function f(d){return d===94&&"_hiddenFootnoteSupport"in o.parser.constructs?r(d):l(d)}}const Wu={name:"lineEnding",tokenize:O0};function O0(a,l){return r;function r(o){return a.enter("lineEnding"),a.consume(o),a.exit("lineEnding"),Ye(a,l,"linePrefix")}}const lo={name:"thematicBreak",tokenize:M0};function M0(a,l,r){let o=0,c;return f;function f(m){return a.enter("thematicBreak"),d(m)}function d(m){return c=m,p(m)}function p(m){return m===c?(a.enter("thematicBreakSequence"),g(m)):o>=3&&(m===null||he(m))?(a.exit("thematicBreak"),l(m)):r(m)}function g(m){return m===c?(a.consume(m),o++,g):(a.exit("thematicBreakSequence"),Oe(m)?Ye(a,p,"whitespace")(m):p(m))}}const En={continuation:{tokenize:I0},exit:B0,name:"list",tokenize:N0},L0={partial:!0,tokenize:H0},z0={partial:!0,tokenize:U0};function N0(a,l,r){const o=this,c=o.events[o.events.length-1];let f=c&&c[1].type==="linePrefix"?c[2].sliceSerialize(c[1],!0).length:0,d=0;return p;function p(S){const I=o.containerState.type||(S===42||S===43||S===45?"listUnordered":"listOrdered");if(I==="listUnordered"?!o.containerState.marker||S===o.containerState.marker:sc(S)){if(o.containerState.type||(o.containerState.type=I,a.enter(I,{_container:!0})),I==="listUnordered")return a.enter("listItemPrefix"),S===42||S===45?a.check(lo,r,m)(S):m(S);if(!o.interrupt||S===49)return a.enter("listItemPrefix"),a.enter("listItemValue"),g(S)}return r(S)}function g(S){return sc(S)&&++d<10?(a.consume(S),g):(!o.interrupt||d<2)&&(o.containerState.marker?S===o.containerState.marker:S===41||S===46)?(a.exit("listItemValue"),m(S)):r(S)}function m(S){return a.enter("listItemMarker"),a.consume(S),a.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||S,a.check(ho,o.interrupt?r:y,a.attempt(L0,x,b))}function y(S){return o.containerState.initialBlankLine=!0,f++,x(S)}function b(S){return Oe(S)?(a.enter("listItemPrefixWhitespace"),a.consume(S),a.exit("listItemPrefixWhitespace"),x):r(S)}function x(S){return o.containerState.size=f+o.sliceSerialize(a.exit("listItemPrefix"),!0).length,l(S)}}function I0(a,l,r){const o=this;return o.containerState._closeFlow=void 0,a.check(ho,c,f);function c(p){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,Ye(a,l,"listItemIndent",o.containerState.size+1)(p)}function f(p){return o.containerState.furtherBlankLines||!Oe(p)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,d(p)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,a.attempt(z0,l,d)(p))}function d(p){return o.containerState._closeFlow=!0,o.interrupt=void 0,Ye(a,a.attempt(En,l,r),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(p)}}function U0(a,l,r){const o=this;return Ye(a,c,"listItemIndent",o.containerState.size+1);function c(f){const d=o.events[o.events.length-1];return d&&d[1].type==="listItemIndent"&&d[2].sliceSerialize(d[1],!0).length===o.containerState.size?l(f):r(f)}}function B0(a){a.exit(this.containerState.type)}function H0(a,l,r){const o=this;return Ye(a,c,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function c(f){const d=o.events[o.events.length-1];return!Oe(f)&&d&&d[1].type==="listItemPrefixWhitespace"?l(f):r(f)}}const mp={name:"setextUnderline",resolveTo:q0,tokenize:j0};function q0(a,l){let r=a.length,o,c,f;for(;r--;)if(a[r][0]==="enter"){if(a[r][1].type==="content"){o=r;break}a[r][1].type==="paragraph"&&(c=r)}else a[r][1].type==="content"&&a.splice(r,1),!f&&a[r][1].type==="definition"&&(f=r);const d={type:"setextHeading",start:{...a[o][1].start},end:{...a[a.length-1][1].end}};return a[c][1].type="setextHeadingText",f?(a.splice(c,0,["enter",d,l]),a.splice(f+1,0,["exit",a[o][1],l]),a[o][1].end={...a[f][1].end}):a[o][1]=d,a.push(["exit",d,l]),a}function j0(a,l,r){const o=this;let c;return f;function f(m){let y=o.events.length,b;for(;y--;)if(o.events[y][1].type!=="lineEnding"&&o.events[y][1].type!=="linePrefix"&&o.events[y][1].type!=="content"){b=o.events[y][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||b)?(a.enter("setextHeadingLine"),c=m,d(m)):r(m)}function d(m){return a.enter("setextHeadingLineSequence"),p(m)}function p(m){return m===c?(a.consume(m),p):(a.exit("setextHeadingLineSequence"),Oe(m)?Ye(a,g,"lineSuffix")(m):g(m))}function g(m){return m===null||he(m)?(a.exit("setextHeadingLine"),l(m)):r(m)}}const Y0={tokenize:P0};function P0(a){const l=this,r=a.attempt(ho,o,a.attempt(this.parser.constructs.flowInitial,c,Ye(a,a.attempt(this.parser.constructs.flow,c,a.attempt(Q1,c)),"linePrefix")));return r;function o(f){if(f===null){a.consume(f);return}return a.enter("lineEndingBlank"),a.consume(f),a.exit("lineEndingBlank"),l.currentConstruct=void 0,r}function c(f){if(f===null){a.consume(f);return}return a.enter("lineEnding"),a.consume(f),a.exit("lineEnding"),l.currentConstruct=void 0,r}}const G0={resolveAll:kg()},W0=xg("string"),F0=xg("text");function xg(a){return{resolveAll:kg(a==="text"?V0:void 0),tokenize:l};function l(r){const o=this,c=this.parser.constructs[a],f=r.attempt(c,d,p);return d;function d(y){return m(y)?f(y):p(y)}function p(y){if(y===null){r.consume(y);return}return r.enter("data"),r.consume(y),g}function g(y){return m(y)?(r.exit("data"),f(y)):(r.consume(y),g)}function m(y){if(y===null)return!0;const b=c[y];let x=-1;if(b)for(;++x<b.length;){const S=b[x];if(!S.previous||S.previous.call(o,o.previous))return!0}return!1}}}function kg(a){return l;function l(r,o){let c=-1,f;for(;++c<=r.length;)f===void 0?r[c]&&r[c][1].type==="data"&&(f=c,c++):(!r[c]||r[c][1].type!=="data")&&(c!==f+2&&(r[f][1].end=r[c-1][1].end,r.splice(f+2,c-f-2),c=f+2),f=void 0);return a?a(r,o):r}}function V0(a,l){let r=0;for(;++r<=a.length;)if((r===a.length||a[r][1].type==="lineEnding")&&a[r-1][1].type==="data"){const o=a[r-1][1],c=l.sliceStream(o);let f=c.length,d=-1,p=0,g;for(;f--;){const m=c[f];if(typeof m=="string"){for(d=m.length;m.charCodeAt(d-1)===32;)p++,d--;if(d)break;d=-1}else if(m===-2)g=!0,p++;else if(m!==-1){f++;break}}if(l._contentTypeTextTrailing&&r===a.length&&(p=0),p){const m={type:r===a.length||g||p<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:f?d:o.start._bufferIndex+d,_index:o.start._index+f,line:o.end.line,column:o.end.column-p,offset:o.end.offset-p},end:{...o.end}};o.end={...m.start},o.start.offset===o.end.offset?Object.assign(o,m):(a.splice(r,0,["enter",m,l],["exit",m,l]),r+=2)}r++}return a}const Q0={42:En,43:En,45:En,48:En,49:En,50:En,51:En,52:En,53:En,54:En,55:En,56:En,57:En,62:pg},X0={91:J1},K0={[-2]:Gu,[-1]:Gu,32:Gu},Z0={35:l0,42:lo,45:[mp,lo],60:u0,61:mp,95:lo,96:dp,126:dp},$0={38:yg,92:gg},J0={[-5]:Wu,[-4]:Wu,[-3]:Wu,33:E0,38:yg,42:uc,60:[D1,g0],91:D0,92:[a0,gg],93:Rc,95:uc,96:Y1},ex={null:[uc,G0]},nx={null:[42,95]},tx={null:[]},ax=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:nx,contentInitial:X0,disable:tx,document:Q0,flow:Z0,flowInitial:K0,insideSpan:ex,string:$0,text:J0},Symbol.toStringTag,{value:"Module"}));function ix(a,l,r){let o={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const c={},f=[];let d=[],p=[];const g={attempt:K(oe),check:K(B),consume:W,enter:G,exit:re,interrupt:K(B,{interrupt:!0})},m={code:null,containerState:{},defineSkip:z,events:[],now:I,parser:a,previous:null,sliceSerialize:x,sliceStream:S,write:b};let y=l.tokenize.call(m,g);return l.resolveAll&&f.push(l),m;function b(ee){return d=Jn(d,ee),U(),d[d.length-1]!==null?[]:(ce(l,0),m.events=Dc(f,m.events,m),m.events)}function x(ee,$){return rx(S(ee),$)}function S(ee){return lx(d,ee)}function I(){const{_bufferIndex:ee,_index:$,line:Ee,column:ae,offset:Q}=o;return{_bufferIndex:ee,_index:$,line:Ee,column:ae,offset:Q}}function z(ee){c[ee.line]=ee.column,ge()}function U(){let ee;for(;o._index<d.length;){const $=d[o._index];if(typeof $=="string")for(ee=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===ee&&o._bufferIndex<$.length;)M($.charCodeAt(o._bufferIndex));else M($)}}function M(ee){y=y(ee)}function W(ee){he(ee)?(o.line++,o.column=1,o.offset+=ee===-3?2:1,ge()):ee!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===d[o._index].length&&(o._bufferIndex=-1,o._index++)),m.previous=ee}function G(ee,$){const Ee=$||{};return Ee.type=ee,Ee.start=I(),m.events.push(["enter",Ee,m]),p.push(Ee),Ee}function re(ee){const $=p.pop();return $.end=I(),m.events.push(["exit",$,m]),$}function oe(ee,$){ce(ee,$.from)}function B(ee,$){$.restore()}function K(ee,$){return Ee;function Ee(ae,Q,O){let F,te,ve,k;return Array.isArray(ae)?H(ae):"tokenize"in ae?H([ae]):T(ae);function T(ie){return ke;function ke(We){const Ne=We!==null&&ie[We],Yn=We!==null&&ie.null,dt=[...Array.isArray(Ne)?Ne:Ne?[Ne]:[],...Array.isArray(Yn)?Yn:Yn?[Yn]:[]];return H(dt)(We)}}function H(ie){return F=ie,te=0,ie.length===0?O:w(ie[te])}function w(ie){return ke;function ke(We){return k=fe(),ve=ie,ie.partial||(m.currentConstruct=ie),ie.name&&m.parser.constructs.disable.null.includes(ie.name)?ue():ie.tokenize.call($?Object.assign(Object.create(m),$):m,g,Z,ue)(We)}}function Z(ie){return ee(ve,k),Q}function ue(ie){return k.restore(),++te<F.length?w(F[te]):O}}}function ce(ee,$){ee.resolveAll&&!f.includes(ee)&&f.push(ee),ee.resolve&&ft(m.events,$,m.events.length-$,ee.resolve(m.events.slice($),m)),ee.resolveTo&&(m.events=ee.resolveTo(m.events,m))}function fe(){const ee=I(),$=m.previous,Ee=m.currentConstruct,ae=m.events.length,Q=Array.from(p);return{from:ae,restore:O};function O(){o=ee,m.previous=$,m.currentConstruct=Ee,m.events.length=ae,p=Q,ge()}}function ge(){o.line in c&&o.column<2&&(o.column=c[o.line],o.offset+=c[o.line]-1)}}function lx(a,l){const r=l.start._index,o=l.start._bufferIndex,c=l.end._index,f=l.end._bufferIndex;let d;if(r===c)d=[a[r].slice(o,f)];else{if(d=a.slice(r,c),o>-1){const p=d[0];typeof p=="string"?d[0]=p.slice(o):d.shift()}f>0&&d.push(a[c].slice(0,f))}return d}function rx(a,l){let r=-1;const o=[];let c;for(;++r<a.length;){const f=a[r];let d;if(typeof f=="string")d=f;else switch(f){case-5:{d="\r";break}case-4:{d=`
`;break}case-3:{d=`\r
`;break}case-2:{d=l?" ":"	";break}case-1:{if(!l&&c)continue;d=" ";break}default:d=String.fromCharCode(f)}c=f===-2,o.push(d)}return o.join("")}function ox(a){const o={constructs:m1([ax,...(a||{}).extensions||[]]),content:c(x1),defined:[],document:c(C1),flow:c(Y0),lazy:{},string:c(W0),text:c(F0)};return o;function c(f){return d;function d(p){return ix(o,f,p)}}}function sx(a){for(;!bg(a););return a}const pp=/[\0\t\n\r]/g;function ux(){let a=1,l="",r=!0,o;return c;function c(f,d,p){const g=[];let m,y,b,x,S;for(f=l+(typeof f=="string"?f.toString():new TextDecoder(d||void 0).decode(f)),b=0,l="",r&&(f.charCodeAt(0)===65279&&b++,r=void 0);b<f.length;){if(pp.lastIndex=b,m=pp.exec(f),x=m&&m.index!==void 0?m.index:f.length,S=f.charCodeAt(x),!m){l=f.slice(b);break}if(S===10&&b===x&&o)g.push(-3),o=void 0;else switch(o&&(g.push(-5),o=void 0),b<x&&(g.push(f.slice(b,x)),a+=x-b),S){case 0:{g.push(65533),a++;break}case 9:{for(y=Math.ceil(a/4)*4,g.push(-2);a++<y;)g.push(-1);break}case 10:{g.push(-4),a=1;break}default:o=!0,a=1}b=x+1}return p&&(o&&g.push(-5),l&&g.push(l),g.push(null)),g}}const cx=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function fx(a){return a.replace(cx,dx)}function dx(a,l,r){if(l)return l;if(r.charCodeAt(0)===35){const c=r.charCodeAt(1),f=c===120||c===88;return mg(r.slice(f?2:1),f?16:10)}return _c(r)||a}const Cg={}.hasOwnProperty;function hx(a,l,r){return typeof l!="string"&&(r=l,l=void 0),mx(r)(sx(ox(r).document().write(ux()(a,l,!0))))}function mx(a){const l={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:f(Oa),autolinkProtocol:fe,autolinkEmail:fe,atxHeading:f(Da),blockQuote:f(Yn),characterEscape:fe,characterReference:fe,codeFenced:f(dt),codeFencedFenceInfo:d,codeFencedFenceMeta:d,codeIndented:f(dt,d),codeText:f(Ti,d),codeTextData:fe,data:fe,codeFlowValue:fe,definition:f(zl),definitionDestinationString:d,definitionLabelString:d,definitionTitleString:d,emphasis:f(ht),hardBreakEscape:f(Ra),hardBreakTrailing:f(Ra),htmlFlow:f(Nl,d),htmlFlowData:fe,htmlText:f(Nl,d),htmlTextData:fe,image:f(Il),label:d,link:f(Oa),listItem:f(Ai),listItemValue:x,listOrdered:f(Ma,b),listUnordered:f(Ma),paragraph:f(go),reference:w,referenceString:d,resourceDestinationString:d,resourceTitleString:d,setextHeading:f(Da),strong:f(yo),thematicBreak:f(bo)},exit:{atxHeading:g(),atxHeadingSequence:oe,autolink:g(),autolinkEmail:Ne,autolinkProtocol:We,blockQuote:g(),characterEscapeValue:ge,characterReferenceMarkerHexadecimal:ue,characterReferenceMarkerNumeric:ue,characterReferenceValue:ie,characterReference:ke,codeFenced:g(U),codeFencedFence:z,codeFencedFenceInfo:S,codeFencedFenceMeta:I,codeFlowValue:ge,codeIndented:g(M),codeText:g(Q),codeTextData:ge,data:ge,definition:g(),definitionDestinationString:re,definitionLabelString:W,definitionTitleString:G,emphasis:g(),hardBreakEscape:g($),hardBreakTrailing:g($),htmlFlow:g(Ee),htmlFlowData:ge,htmlText:g(ae),htmlTextData:ge,image:g(F),label:ve,labelText:te,lineEnding:ee,link:g(O),listItem:g(),listOrdered:g(),listUnordered:g(),paragraph:g(),referenceString:Z,resourceDestinationString:k,resourceTitleString:T,resource:H,setextHeading:g(ce),setextHeadingLineSequence:K,setextHeadingText:B,strong:g(),thematicBreak:g()}};Tg(l,(a||{}).mdastExtensions||[]);const r={};return o;function o(q){let X={type:"root",children:[]};const de={stack:[X],tokenStack:[],config:l,enter:p,exit:m,buffer:d,resume:y,data:r},Se=[];let Me=-1;for(;++Me<q.length;)if(q[Me][1].type==="listOrdered"||q[Me][1].type==="listUnordered")if(q[Me][0]==="enter")Se.push(Me);else{const Rn=Se.pop();Me=c(q,Rn,Me)}for(Me=-1;++Me<q.length;){const Rn=l[q[Me][0]];Cg.call(Rn,q[Me][1].type)&&Rn[q[Me][1].type].call(Object.assign({sliceSerialize:q[Me][2].sliceSerialize},de),q[Me][1])}if(de.tokenStack.length>0){const Rn=de.tokenStack[de.tokenStack.length-1];(Rn[1]||gp).call(de,void 0,Rn[0])}for(X.position={start:ra(q.length>0?q[0][1].start:{line:1,column:1,offset:0}),end:ra(q.length>0?q[q.length-2][1].end:{line:1,column:1,offset:0})},Me=-1;++Me<l.transforms.length;)X=l.transforms[Me](X)||X;return X}function c(q,X,de){let Se=X-1,Me=-1,Rn=!1,mt,yn,an,vn;for(;++Se<=de;){const He=q[Se];switch(He[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{He[0]==="enter"?Me++:Me--,vn=void 0;break}case"lineEndingBlank":{He[0]==="enter"&&(mt&&!vn&&!Me&&!an&&(an=Se),vn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:vn=void 0}if(!Me&&He[0]==="enter"&&He[1].type==="listItemPrefix"||Me===-1&&He[0]==="exit"&&(He[1].type==="listUnordered"||He[1].type==="listOrdered")){if(mt){let Nt=Se;for(yn=void 0;Nt--;){const et=q[Nt];if(et[1].type==="lineEnding"||et[1].type==="lineEndingBlank"){if(et[0]==="exit")continue;yn&&(q[yn][1].type="lineEndingBlank",Rn=!0),et[1].type="lineEnding",yn=Nt}else if(!(et[1].type==="linePrefix"||et[1].type==="blockQuotePrefix"||et[1].type==="blockQuotePrefixWhitespace"||et[1].type==="blockQuoteMarker"||et[1].type==="listItemIndent"))break}an&&(!yn||an<yn)&&(mt._spread=!0),mt.end=Object.assign({},yn?q[yn][1].start:He[1].end),q.splice(yn||Se,0,["exit",mt,He[2]]),Se++,de++}if(He[1].type==="listItemPrefix"){const Nt={type:"listItem",_spread:!1,start:Object.assign({},He[1].start),end:void 0};mt=Nt,q.splice(Se,0,["enter",Nt,He[2]]),Se++,de++,an=void 0,vn=!0}}}return q[X][1]._spread=Rn,de}function f(q,X){return de;function de(Se){p.call(this,q(Se),Se),X&&X.call(this,Se)}}function d(){this.stack.push({type:"fragment",children:[]})}function p(q,X,de){this.stack[this.stack.length-1].children.push(q),this.stack.push(q),this.tokenStack.push([X,de||void 0]),q.position={start:ra(X.start),end:void 0}}function g(q){return X;function X(de){q&&q.call(this,de),m.call(this,de)}}function m(q,X){const de=this.stack.pop(),Se=this.tokenStack.pop();if(Se)Se[0].type!==q.type&&(X?X.call(this,q,Se[0]):(Se[1]||gp).call(this,q,Se[0]));else throw new Error("Cannot close `"+q.type+"` ("+Tl({start:q.start,end:q.end})+"): it’s not open");de.position.end=ra(q.end)}function y(){return d1(this.stack.pop())}function b(){this.data.expectingFirstListItemValue=!0}function x(q){if(this.data.expectingFirstListItemValue){const X=this.stack[this.stack.length-2];X.start=Number.parseInt(this.sliceSerialize(q),10),this.data.expectingFirstListItemValue=void 0}}function S(){const q=this.resume(),X=this.stack[this.stack.length-1];X.lang=q}function I(){const q=this.resume(),X=this.stack[this.stack.length-1];X.meta=q}function z(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function U(){const q=this.resume(),X=this.stack[this.stack.length-1];X.value=q.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function M(){const q=this.resume(),X=this.stack[this.stack.length-1];X.value=q.replace(/(\r?\n|\r)$/g,"")}function W(q){const X=this.resume(),de=this.stack[this.stack.length-1];de.label=X,de.identifier=Si(this.sliceSerialize(q)).toLowerCase()}function G(){const q=this.resume(),X=this.stack[this.stack.length-1];X.title=q}function re(){const q=this.resume(),X=this.stack[this.stack.length-1];X.url=q}function oe(q){const X=this.stack[this.stack.length-1];if(!X.depth){const de=this.sliceSerialize(q).length;X.depth=de}}function B(){this.data.setextHeadingSlurpLineEnding=!0}function K(q){const X=this.stack[this.stack.length-1];X.depth=this.sliceSerialize(q).codePointAt(0)===61?1:2}function ce(){this.data.setextHeadingSlurpLineEnding=void 0}function fe(q){const de=this.stack[this.stack.length-1].children;let Se=de[de.length-1];(!Se||Se.type!=="text")&&(Se=gn(),Se.position={start:ra(q.start),end:void 0},de.push(Se)),this.stack.push(Se)}function ge(q){const X=this.stack.pop();X.value+=this.sliceSerialize(q),X.position.end=ra(q.end)}function ee(q){const X=this.stack[this.stack.length-1];if(this.data.atHardBreak){const de=X.children[X.children.length-1];de.position.end=ra(q.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&l.canContainEols.includes(X.type)&&(fe.call(this,q),ge.call(this,q))}function $(){this.data.atHardBreak=!0}function Ee(){const q=this.resume(),X=this.stack[this.stack.length-1];X.value=q}function ae(){const q=this.resume(),X=this.stack[this.stack.length-1];X.value=q}function Q(){const q=this.resume(),X=this.stack[this.stack.length-1];X.value=q}function O(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const X=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=X,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function F(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const X=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=X,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function te(q){const X=this.sliceSerialize(q),de=this.stack[this.stack.length-2];de.label=fx(X),de.identifier=Si(X).toLowerCase()}function ve(){const q=this.stack[this.stack.length-1],X=this.resume(),de=this.stack[this.stack.length-1];if(this.data.inReference=!0,de.type==="link"){const Se=q.children;de.children=Se}else de.alt=X}function k(){const q=this.resume(),X=this.stack[this.stack.length-1];X.url=q}function T(){const q=this.resume(),X=this.stack[this.stack.length-1];X.title=q}function H(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function Z(q){const X=this.resume(),de=this.stack[this.stack.length-1];de.label=X,de.identifier=Si(this.sliceSerialize(q)).toLowerCase(),this.data.referenceType="full"}function ue(q){this.data.characterReferenceType=q.type}function ie(q){const X=this.sliceSerialize(q),de=this.data.characterReferenceType;let Se;de?(Se=mg(X,de==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Se=_c(X);const Me=this.stack[this.stack.length-1];Me.value+=Se}function ke(q){const X=this.stack.pop();X.position.end=ra(q.end)}function We(q){ge.call(this,q);const X=this.stack[this.stack.length-1];X.url=this.sliceSerialize(q)}function Ne(q){ge.call(this,q);const X=this.stack[this.stack.length-1];X.url="mailto:"+this.sliceSerialize(q)}function Yn(){return{type:"blockquote",children:[]}}function dt(){return{type:"code",lang:null,meta:null,value:""}}function Ti(){return{type:"inlineCode",value:""}}function zl(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ht(){return{type:"emphasis",children:[]}}function Da(){return{type:"heading",depth:0,children:[]}}function Ra(){return{type:"break"}}function Nl(){return{type:"html",value:""}}function Il(){return{type:"image",title:null,url:"",alt:null}}function Oa(){return{type:"link",title:null,url:"",children:[]}}function Ma(q){return{type:"list",ordered:q.type==="listOrdered",start:null,spread:q._spread,children:[]}}function Ai(q){return{type:"listItem",spread:q._spread,checked:null,children:[]}}function go(){return{type:"paragraph",children:[]}}function yo(){return{type:"strong",children:[]}}function gn(){return{type:"text",value:""}}function bo(){return{type:"thematicBreak"}}}function ra(a){return{line:a.line,column:a.column,offset:a.offset}}function Tg(a,l){let r=-1;for(;++r<l.length;){const o=l[r];Array.isArray(o)?Tg(a,o):px(a,o)}}function px(a,l){let r;for(r in l)if(Cg.call(l,r))switch(r){case"canContainEols":{const o=l[r];o&&a[r].push(...o);break}case"transforms":{const o=l[r];o&&a[r].push(...o);break}case"enter":case"exit":{const o=l[r];o&&Object.assign(a[r],o);break}}}function gp(a,l){throw a?new Error("Cannot close `"+a.type+"` ("+Tl({start:a.start,end:a.end})+"): a different token (`"+l.type+"`, "+Tl({start:l.start,end:l.end})+") is open"):new Error("Cannot close document, a token (`"+l.type+"`, "+Tl({start:l.start,end:l.end})+") is still open")}function gx(a){const l=this;l.parser=r;function r(o){return hx(o,{...l.data("settings"),...a,extensions:l.data("micromarkExtensions")||[],mdastExtensions:l.data("fromMarkdownExtensions")||[]})}}function yx(a,l){const r={type:"element",tagName:"blockquote",properties:{},children:a.wrap(a.all(l),!0)};return a.patch(l,r),a.applyData(l,r)}function bx(a,l){const r={type:"element",tagName:"br",properties:{},children:[]};return a.patch(l,r),[a.applyData(l,r),{type:"text",value:`
`}]}function vx(a,l){const r=l.value?l.value+`
`:"",o={},c=l.lang?l.lang.split(/\s+/):[];c.length>0&&(o.className=["language-"+c[0]]);let f={type:"element",tagName:"code",properties:o,children:[{type:"text",value:r}]};return l.meta&&(f.data={meta:l.meta}),a.patch(l,f),f=a.applyData(l,f),f={type:"element",tagName:"pre",properties:{},children:[f]},a.patch(l,f),f}function Sx(a,l){const r={type:"element",tagName:"del",properties:{},children:a.all(l)};return a.patch(l,r),a.applyData(l,r)}function wx(a,l){const r={type:"element",tagName:"em",properties:{},children:a.all(l)};return a.patch(l,r),a.applyData(l,r)}function xx(a,l){const r=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",o=String(l.identifier).toUpperCase(),c=Ci(o.toLowerCase()),f=a.footnoteOrder.indexOf(o);let d,p=a.footnoteCounts.get(o);p===void 0?(p=0,a.footnoteOrder.push(o),d=a.footnoteOrder.length):d=f+1,p+=1,a.footnoteCounts.set(o,p);const g={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+c,id:r+"fnref-"+c+(p>1?"-"+p:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(d)}]};a.patch(l,g);const m={type:"element",tagName:"sup",properties:{},children:[g]};return a.patch(l,m),a.applyData(l,m)}function kx(a,l){const r={type:"element",tagName:"h"+l.depth,properties:{},children:a.all(l)};return a.patch(l,r),a.applyData(l,r)}function Cx(a,l){if(a.options.allowDangerousHtml){const r={type:"raw",value:l.value};return a.patch(l,r),a.applyData(l,r)}}function Ag(a,l){const r=l.referenceType;let o="]";if(r==="collapsed"?o+="[]":r==="full"&&(o+="["+(l.label||l.identifier)+"]"),l.type==="imageReference")return[{type:"text",value:"!["+l.alt+o}];const c=a.all(l),f=c[0];f&&f.type==="text"?f.value="["+f.value:c.unshift({type:"text",value:"["});const d=c[c.length-1];return d&&d.type==="text"?d.value+=o:c.push({type:"text",value:o}),c}function Tx(a,l){const r=String(l.identifier).toUpperCase(),o=a.definitionById.get(r);if(!o)return Ag(a,l);const c={src:Ci(o.url||""),alt:l.alt};o.title!==null&&o.title!==void 0&&(c.title=o.title);const f={type:"element",tagName:"img",properties:c,children:[]};return a.patch(l,f),a.applyData(l,f)}function Ax(a,l){const r={src:Ci(l.url)};l.alt!==null&&l.alt!==void 0&&(r.alt=l.alt),l.title!==null&&l.title!==void 0&&(r.title=l.title);const o={type:"element",tagName:"img",properties:r,children:[]};return a.patch(l,o),a.applyData(l,o)}function Ex(a,l){const r={type:"text",value:l.value.replace(/\r?\n|\r/g," ")};a.patch(l,r);const o={type:"element",tagName:"code",properties:{},children:[r]};return a.patch(l,o),a.applyData(l,o)}function _x(a,l){const r=String(l.identifier).toUpperCase(),o=a.definitionById.get(r);if(!o)return Ag(a,l);const c={href:Ci(o.url||"")};o.title!==null&&o.title!==void 0&&(c.title=o.title);const f={type:"element",tagName:"a",properties:c,children:a.all(l)};return a.patch(l,f),a.applyData(l,f)}function Dx(a,l){const r={href:Ci(l.url)};l.title!==null&&l.title!==void 0&&(r.title=l.title);const o={type:"element",tagName:"a",properties:r,children:a.all(l)};return a.patch(l,o),a.applyData(l,o)}function Rx(a,l,r){const o=a.all(l),c=r?Ox(r):Eg(l),f={},d=[];if(typeof l.checked=="boolean"){const y=o[0];let b;y&&y.type==="element"&&y.tagName==="p"?b=y:(b={type:"element",tagName:"p",properties:{},children:[]},o.unshift(b)),b.children.length>0&&b.children.unshift({type:"text",value:" "}),b.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:l.checked,disabled:!0},children:[]}),f.className=["task-list-item"]}let p=-1;for(;++p<o.length;){const y=o[p];(c||p!==0||y.type!=="element"||y.tagName!=="p")&&d.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!c?d.push(...y.children):d.push(y)}const g=o[o.length-1];g&&(c||g.type!=="element"||g.tagName!=="p")&&d.push({type:"text",value:`
`});const m={type:"element",tagName:"li",properties:f,children:d};return a.patch(l,m),a.applyData(l,m)}function Ox(a){let l=!1;if(a.type==="list"){l=a.spread||!1;const r=a.children;let o=-1;for(;!l&&++o<r.length;)l=Eg(r[o])}return l}function Eg(a){const l=a.spread;return l??a.children.length>1}function Mx(a,l){const r={},o=a.all(l);let c=-1;for(typeof l.start=="number"&&l.start!==1&&(r.start=l.start);++c<o.length;){const d=o[c];if(d.type==="element"&&d.tagName==="li"&&d.properties&&Array.isArray(d.properties.className)&&d.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const f={type:"element",tagName:l.ordered?"ol":"ul",properties:r,children:a.wrap(o,!0)};return a.patch(l,f),a.applyData(l,f)}function Lx(a,l){const r={type:"element",tagName:"p",properties:{},children:a.all(l)};return a.patch(l,r),a.applyData(l,r)}function zx(a,l){const r={type:"root",children:a.wrap(a.all(l))};return a.patch(l,r),a.applyData(l,r)}function Nx(a,l){const r={type:"element",tagName:"strong",properties:{},children:a.all(l)};return a.patch(l,r),a.applyData(l,r)}function Ix(a,l){const r=a.all(l),o=r.shift(),c=[];if(o){const d={type:"element",tagName:"thead",properties:{},children:a.wrap([o],!0)};a.patch(l.children[0],d),c.push(d)}if(r.length>0){const d={type:"element",tagName:"tbody",properties:{},children:a.wrap(r,!0)},p=Cc(l.children[1]),g=og(l.children[l.children.length-1]);p&&g&&(d.position={start:p,end:g}),c.push(d)}const f={type:"element",tagName:"table",properties:{},children:a.wrap(c,!0)};return a.patch(l,f),a.applyData(l,f)}function Ux(a,l,r){const o=r?r.children:void 0,f=(o?o.indexOf(l):1)===0?"th":"td",d=r&&r.type==="table"?r.align:void 0,p=d?d.length:l.children.length;let g=-1;const m=[];for(;++g<p;){const b=l.children[g],x={},S=d?d[g]:void 0;S&&(x.align=S);let I={type:"element",tagName:f,properties:x,children:[]};b&&(I.children=a.all(b),a.patch(b,I),I=a.applyData(b,I)),m.push(I)}const y={type:"element",tagName:"tr",properties:{},children:a.wrap(m,!0)};return a.patch(l,y),a.applyData(l,y)}function Bx(a,l){const r={type:"element",tagName:"td",properties:{},children:a.all(l)};return a.patch(l,r),a.applyData(l,r)}const yp=9,bp=32;function Hx(a){const l=String(a),r=/\r?\n|\r/g;let o=r.exec(l),c=0;const f=[];for(;o;)f.push(vp(l.slice(c,o.index),c>0,!0),o[0]),c=o.index+o[0].length,o=r.exec(l);return f.push(vp(l.slice(c),c>0,!1)),f.join("")}function vp(a,l,r){let o=0,c=a.length;if(l){let f=a.codePointAt(o);for(;f===yp||f===bp;)o++,f=a.codePointAt(o)}if(r){let f=a.codePointAt(c-1);for(;f===yp||f===bp;)c--,f=a.codePointAt(c-1)}return c>o?a.slice(o,c):""}function qx(a,l){const r={type:"text",value:Hx(String(l.value))};return a.patch(l,r),a.applyData(l,r)}function jx(a,l){const r={type:"element",tagName:"hr",properties:{},children:[]};return a.patch(l,r),a.applyData(l,r)}const Yx={blockquote:yx,break:bx,code:vx,delete:Sx,emphasis:wx,footnoteReference:xx,heading:kx,html:Cx,imageReference:Tx,image:Ax,inlineCode:Ex,linkReference:_x,link:Dx,listItem:Rx,list:Mx,paragraph:Lx,root:zx,strong:Nx,table:Ix,tableCell:Bx,tableRow:Ux,text:qx,thematicBreak:jx,toml:eo,yaml:eo,definition:eo,footnoteDefinition:eo};function eo(){}const _g=-1,mo=0,El=1,oo=2,Oc=3,Mc=4,Lc=5,zc=6,Dg=7,Rg=8,Sp=typeof self=="object"?self:globalThis,Px=(a,l)=>{const r=(c,f)=>(a.set(f,c),c),o=c=>{if(a.has(c))return a.get(c);const[f,d]=l[c];switch(f){case mo:case _g:return r(d,c);case El:{const p=r([],c);for(const g of d)p.push(o(g));return p}case oo:{const p=r({},c);for(const[g,m]of d)p[o(g)]=o(m);return p}case Oc:return r(new Date(d),c);case Mc:{const{source:p,flags:g}=d;return r(new RegExp(p,g),c)}case Lc:{const p=r(new Map,c);for(const[g,m]of d)p.set(o(g),o(m));return p}case zc:{const p=r(new Set,c);for(const g of d)p.add(o(g));return p}case Dg:{const{name:p,message:g}=d;return r(new Sp[p](g),c)}case Rg:return r(BigInt(d),c);case"BigInt":return r(Object(BigInt(d)),c);case"ArrayBuffer":return r(new Uint8Array(d).buffer,d);case"DataView":{const{buffer:p}=new Uint8Array(d);return r(new DataView(p),d)}}return r(new Sp[f](d),c)};return o},wp=a=>Px(new Map,a)(0),bi="",{toString:Gx}={},{keys:Wx}=Object,Cl=a=>{const l=typeof a;if(l!=="object"||!a)return[mo,l];const r=Gx.call(a).slice(8,-1);switch(r){case"Array":return[El,bi];case"Object":return[oo,bi];case"Date":return[Oc,bi];case"RegExp":return[Mc,bi];case"Map":return[Lc,bi];case"Set":return[zc,bi];case"DataView":return[El,r]}return r.includes("Array")?[El,r]:r.includes("Error")?[Dg,r]:[oo,r]},no=([a,l])=>a===mo&&(l==="function"||l==="symbol"),Fx=(a,l,r,o)=>{const c=(d,p)=>{const g=o.push(d)-1;return r.set(p,g),g},f=d=>{if(r.has(d))return r.get(d);let[p,g]=Cl(d);switch(p){case mo:{let y=d;switch(g){case"bigint":p=Rg,y=d.toString();break;case"function":case"symbol":if(a)throw new TypeError("unable to serialize "+g);y=null;break;case"undefined":return c([_g],d)}return c([p,y],d)}case El:{if(g){let x=d;return g==="DataView"?x=new Uint8Array(d.buffer):g==="ArrayBuffer"&&(x=new Uint8Array(d)),c([g,[...x]],d)}const y=[],b=c([p,y],d);for(const x of d)y.push(f(x));return b}case oo:{if(g)switch(g){case"BigInt":return c([g,d.toString()],d);case"Boolean":case"Number":case"String":return c([g,d.valueOf()],d)}if(l&&"toJSON"in d)return f(d.toJSON());const y=[],b=c([p,y],d);for(const x of Wx(d))(a||!no(Cl(d[x])))&&y.push([f(x),f(d[x])]);return b}case Oc:return c([p,d.toISOString()],d);case Mc:{const{source:y,flags:b}=d;return c([p,{source:y,flags:b}],d)}case Lc:{const y=[],b=c([p,y],d);for(const[x,S]of d)(a||!(no(Cl(x))||no(Cl(S))))&&y.push([f(x),f(S)]);return b}case zc:{const y=[],b=c([p,y],d);for(const x of d)(a||!no(Cl(x)))&&y.push(f(x));return b}}const{message:m}=d;return c([p,{name:g,message:m}],d)};return f},xp=(a,{json:l,lossy:r}={})=>{const o=[];return Fx(!(l||r),!!l,new Map,o)(a),o},so=typeof structuredClone=="function"?(a,l)=>l&&("json"in l||"lossy"in l)?wp(xp(a,l)):structuredClone(a):(a,l)=>wp(xp(a,l));function Vx(a,l){const r=[{type:"text",value:"↩"}];return l>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(l)}]}),r}function Qx(a,l){return"Back to reference "+(a+1)+(l>1?"-"+l:"")}function Xx(a){const l=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",r=a.options.footnoteBackContent||Vx,o=a.options.footnoteBackLabel||Qx,c=a.options.footnoteLabel||"Footnotes",f=a.options.footnoteLabelTagName||"h2",d=a.options.footnoteLabelProperties||{className:["sr-only"]},p=[];let g=-1;for(;++g<a.footnoteOrder.length;){const m=a.footnoteById.get(a.footnoteOrder[g]);if(!m)continue;const y=a.all(m),b=String(m.identifier).toUpperCase(),x=Ci(b.toLowerCase());let S=0;const I=[],z=a.footnoteCounts.get(b);for(;z!==void 0&&++S<=z;){I.length>0&&I.push({type:"text",value:" "});let W=typeof r=="string"?r:r(g,S);typeof W=="string"&&(W={type:"text",value:W}),I.push({type:"element",tagName:"a",properties:{href:"#"+l+"fnref-"+x+(S>1?"-"+S:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(g,S),className:["data-footnote-backref"]},children:Array.isArray(W)?W:[W]})}const U=y[y.length-1];if(U&&U.type==="element"&&U.tagName==="p"){const W=U.children[U.children.length-1];W&&W.type==="text"?W.value+=" ":U.children.push({type:"text",value:" "}),U.children.push(...I)}else y.push(...I);const M={type:"element",tagName:"li",properties:{id:l+"fn-"+x},children:a.wrap(y,!0)};a.patch(m,M),p.push(M)}if(p.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:f,properties:{...so(d),id:"footnote-label"},children:[{type:"text",value:c}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:a.wrap(p,!0)},{type:"text",value:`
`}]}}const Og=(function(a){if(a==null)return Jx;if(typeof a=="function")return po(a);if(typeof a=="object")return Array.isArray(a)?Kx(a):Zx(a);if(typeof a=="string")return $x(a);throw new Error("Expected function, string, or object as test")});function Kx(a){const l=[];let r=-1;for(;++r<a.length;)l[r]=Og(a[r]);return po(o);function o(...c){let f=-1;for(;++f<l.length;)if(l[f].apply(this,c))return!0;return!1}}function Zx(a){const l=a;return po(r);function r(o){const c=o;let f;for(f in a)if(c[f]!==l[f])return!1;return!0}}function $x(a){return po(l);function l(r){return r&&r.type===a}}function po(a){return l;function l(r,o,c){return!!(ek(r)&&a.call(this,r,typeof o=="number"?o:void 0,c||void 0))}}function Jx(){return!0}function ek(a){return a!==null&&typeof a=="object"&&"type"in a}const Mg=[],nk=!0,kp=!1,tk="skip";function ak(a,l,r,o){let c;typeof l=="function"&&typeof r!="function"?(o=r,r=l):c=l;const f=Og(c),d=o?-1:1;p(a,void 0,[])();function p(g,m,y){const b=g&&typeof g=="object"?g:{};if(typeof b.type=="string"){const S=typeof b.tagName=="string"?b.tagName:typeof b.name=="string"?b.name:void 0;Object.defineProperty(x,"name",{value:"node ("+(g.type+(S?"<"+S+">":""))+")"})}return x;function x(){let S=Mg,I,z,U;if((!l||f(g,m,y[y.length-1]||void 0))&&(S=ik(r(g,y)),S[0]===kp))return S;if("children"in g&&g.children){const M=g;if(M.children&&S[0]!==tk)for(z=(o?M.children.length:-1)+d,U=y.concat(M);z>-1&&z<M.children.length;){const W=M.children[z];if(I=p(W,z,U)(),I[0]===kp)return I;z=typeof I[1]=="number"?I[1]:z+d}}return S}}}function ik(a){return Array.isArray(a)?a:typeof a=="number"?[nk,a]:a==null?Mg:[a]}function Lg(a,l,r,o){let c,f,d;typeof l=="function"&&typeof r!="function"?(f=void 0,d=l,c=r):(f=l,d=r,c=o),ak(a,f,p,c);function p(g,m){const y=m[m.length-1],b=y?y.children.indexOf(g):void 0;return d(g,b,y)}}const cc={}.hasOwnProperty,lk={};function rk(a,l){const r=l||lk,o=new Map,c=new Map,f=new Map,d={...Yx,...r.handlers},p={all:m,applyData:sk,definitionById:o,footnoteById:c,footnoteCounts:f,footnoteOrder:[],handlers:d,one:g,options:r,patch:ok,wrap:ck};return Lg(a,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const b=y.type==="definition"?o:c,x=String(y.identifier).toUpperCase();b.has(x)||b.set(x,y)}}),p;function g(y,b){const x=y.type,S=p.handlers[x];if(cc.call(p.handlers,x)&&S)return S(p,y,b);if(p.options.passThrough&&p.options.passThrough.includes(x)){if("children"in y){const{children:z,...U}=y,M=so(U);return M.children=p.all(y),M}return so(y)}return(p.options.unknownHandler||uk)(p,y,b)}function m(y){const b=[];if("children"in y){const x=y.children;let S=-1;for(;++S<x.length;){const I=p.one(x[S],y);if(I){if(S&&x[S-1].type==="break"&&(!Array.isArray(I)&&I.type==="text"&&(I.value=Cp(I.value)),!Array.isArray(I)&&I.type==="element")){const z=I.children[0];z&&z.type==="text"&&(z.value=Cp(z.value))}Array.isArray(I)?b.push(...I):b.push(I)}}}return b}}function ok(a,l){a.position&&(l.position=Gw(a))}function sk(a,l){let r=l;if(a&&a.data){const o=a.data.hName,c=a.data.hChildren,f=a.data.hProperties;if(typeof o=="string")if(r.type==="element")r.tagName=o;else{const d="children"in r?r.children:[r];r={type:"element",tagName:o,properties:{},children:d}}r.type==="element"&&f&&Object.assign(r.properties,so(f)),"children"in r&&r.children&&c!==null&&c!==void 0&&(r.children=c)}return r}function uk(a,l){const r=l.data||{},o="value"in l&&!(cc.call(r,"hProperties")||cc.call(r,"hChildren"))?{type:"text",value:l.value}:{type:"element",tagName:"div",properties:{},children:a.all(l)};return a.patch(l,o),a.applyData(l,o)}function ck(a,l){const r=[];let o=-1;for(l&&r.push({type:"text",value:`
`});++o<a.length;)o&&r.push({type:"text",value:`
`}),r.push(a[o]);return l&&a.length>0&&r.push({type:"text",value:`
`}),r}function Cp(a){let l=0,r=a.charCodeAt(l);for(;r===9||r===32;)l++,r=a.charCodeAt(l);return a.slice(l)}function Tp(a,l){const r=rk(a,l),o=r.one(a,void 0),c=Xx(r),f=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return c&&f.children.push({type:"text",value:`
`},c),f}function fk(a,l){return a&&"run"in a?async function(r,o){const c=Tp(r,{file:o,...l});await a.run(c,o)}:function(r,o){return Tp(r,{file:o,...a||l})}}function Ap(a){if(a)throw a}var Fu,Ep;function dk(){if(Ep)return Fu;Ep=1;var a=Object.prototype.hasOwnProperty,l=Object.prototype.toString,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,c=function(m){return typeof Array.isArray=="function"?Array.isArray(m):l.call(m)==="[object Array]"},f=function(m){if(!m||l.call(m)!=="[object Object]")return!1;var y=a.call(m,"constructor"),b=m.constructor&&m.constructor.prototype&&a.call(m.constructor.prototype,"isPrototypeOf");if(m.constructor&&!y&&!b)return!1;var x;for(x in m);return typeof x>"u"||a.call(m,x)},d=function(m,y){r&&y.name==="__proto__"?r(m,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):m[y.name]=y.newValue},p=function(m,y){if(y==="__proto__")if(a.call(m,y)){if(o)return o(m,y).value}else return;return m[y]};return Fu=function g(){var m,y,b,x,S,I,z=arguments[0],U=1,M=arguments.length,W=!1;for(typeof z=="boolean"&&(W=z,z=arguments[1]||{},U=2),(z==null||typeof z!="object"&&typeof z!="function")&&(z={});U<M;++U)if(m=arguments[U],m!=null)for(y in m)b=p(z,y),x=p(m,y),z!==x&&(W&&x&&(f(x)||(S=c(x)))?(S?(S=!1,I=b&&c(b)?b:[]):I=b&&f(b)?b:{},d(z,{name:y,newValue:g(W,I,x)})):typeof x<"u"&&d(z,{name:y,newValue:x}));return z},Fu}var hk=dk();const Vu=uo(hk);function fc(a){if(typeof a!="object"||a===null)return!1;const l=Object.getPrototypeOf(a);return(l===null||l===Object.prototype||Object.getPrototypeOf(l)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)}function mk(){const a=[],l={run:r,use:o};return l;function r(...c){let f=-1;const d=c.pop();if(typeof d!="function")throw new TypeError("Expected function as last argument, not "+d);p(null,...c);function p(g,...m){const y=a[++f];let b=-1;if(g){d(g);return}for(;++b<c.length;)(m[b]===null||m[b]===void 0)&&(m[b]=c[b]);c=m,y?pk(y,p)(...m):d(null,...m)}}function o(c){if(typeof c!="function")throw new TypeError("Expected `middelware` to be a function, not "+c);return a.push(c),l}}function pk(a,l){let r;return o;function o(...d){const p=a.length>d.length;let g;p&&d.push(c);try{g=a.apply(this,d)}catch(m){const y=m;if(p&&r)throw y;return c(y)}p||(g&&g.then&&typeof g.then=="function"?g.then(f,c):g instanceof Error?c(g):f(g))}function c(d,...p){r||(r=!0,l(d,...p))}function f(d){c(null,d)}}const ut={basename:gk,dirname:yk,extname:bk,join:vk,sep:"/"};function gk(a,l){if(l!==void 0&&typeof l!="string")throw new TypeError('"ext" argument must be a string');Ll(a);let r=0,o=-1,c=a.length,f;if(l===void 0||l.length===0||l.length>a.length){for(;c--;)if(a.codePointAt(c)===47){if(f){r=c+1;break}}else o<0&&(f=!0,o=c+1);return o<0?"":a.slice(r,o)}if(l===a)return"";let d=-1,p=l.length-1;for(;c--;)if(a.codePointAt(c)===47){if(f){r=c+1;break}}else d<0&&(f=!0,d=c+1),p>-1&&(a.codePointAt(c)===l.codePointAt(p--)?p<0&&(o=c):(p=-1,o=d));return r===o?o=d:o<0&&(o=a.length),a.slice(r,o)}function yk(a){if(Ll(a),a.length===0)return".";let l=-1,r=a.length,o;for(;--r;)if(a.codePointAt(r)===47){if(o){l=r;break}}else o||(o=!0);return l<0?a.codePointAt(0)===47?"/":".":l===1&&a.codePointAt(0)===47?"//":a.slice(0,l)}function bk(a){Ll(a);let l=a.length,r=-1,o=0,c=-1,f=0,d;for(;l--;){const p=a.codePointAt(l);if(p===47){if(d){o=l+1;break}continue}r<0&&(d=!0,r=l+1),p===46?c<0?c=l:f!==1&&(f=1):c>-1&&(f=-1)}return c<0||r<0||f===0||f===1&&c===r-1&&c===o+1?"":a.slice(c,r)}function vk(...a){let l=-1,r;for(;++l<a.length;)Ll(a[l]),a[l]&&(r=r===void 0?a[l]:r+"/"+a[l]);return r===void 0?".":Sk(r)}function Sk(a){Ll(a);const l=a.codePointAt(0)===47;let r=wk(a,!l);return r.length===0&&!l&&(r="."),r.length>0&&a.codePointAt(a.length-1)===47&&(r+="/"),l?"/"+r:r}function wk(a,l){let r="",o=0,c=-1,f=0,d=-1,p,g;for(;++d<=a.length;){if(d<a.length)p=a.codePointAt(d);else{if(p===47)break;p=47}if(p===47){if(!(c===d-1||f===1))if(c!==d-1&&f===2){if(r.length<2||o!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(g=r.lastIndexOf("/"),g!==r.length-1){g<0?(r="",o=0):(r=r.slice(0,g),o=r.length-1-r.lastIndexOf("/")),c=d,f=0;continue}}else if(r.length>0){r="",o=0,c=d,f=0;continue}}l&&(r=r.length>0?r+"/..":"..",o=2)}else r.length>0?r+="/"+a.slice(c+1,d):r=a.slice(c+1,d),o=d-c-1;c=d,f=0}else p===46&&f>-1?f++:f=-1}return r}function Ll(a){if(typeof a!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(a))}const xk={cwd:kk};function kk(){return"/"}function dc(a){return!!(a!==null&&typeof a=="object"&&"href"in a&&a.href&&"protocol"in a&&a.protocol&&a.auth===void 0)}function Ck(a){if(typeof a=="string")a=new URL(a);else if(!dc(a)){const l=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+a+"`");throw l.code="ERR_INVALID_ARG_TYPE",l}if(a.protocol!=="file:"){const l=new TypeError("The URL must be of scheme file");throw l.code="ERR_INVALID_URL_SCHEME",l}return Tk(a)}function Tk(a){if(a.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const l=a.pathname;let r=-1;for(;++r<l.length;)if(l.codePointAt(r)===37&&l.codePointAt(r+1)===50){const o=l.codePointAt(r+2);if(o===70||o===102){const c=new TypeError("File URL path must not include encoded / characters");throw c.code="ERR_INVALID_FILE_URL_PATH",c}}return decodeURIComponent(l)}const Qu=["history","path","basename","stem","extname","dirname"];class zg{constructor(l){let r;l?dc(l)?r={path:l}:typeof l=="string"||Ak(l)?r={value:l}:r=l:r={},this.cwd="cwd"in r?"":xk.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<Qu.length;){const f=Qu[o];f in r&&r[f]!==void 0&&r[f]!==null&&(this[f]=f==="history"?[...r[f]]:r[f])}let c;for(c in r)Qu.includes(c)||(this[c]=r[c])}get basename(){return typeof this.path=="string"?ut.basename(this.path):void 0}set basename(l){Ku(l,"basename"),Xu(l,"basename"),this.path=ut.join(this.dirname||"",l)}get dirname(){return typeof this.path=="string"?ut.dirname(this.path):void 0}set dirname(l){_p(this.basename,"dirname"),this.path=ut.join(l||"",this.basename)}get extname(){return typeof this.path=="string"?ut.extname(this.path):void 0}set extname(l){if(Xu(l,"extname"),_p(this.dirname,"extname"),l){if(l.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(l.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=ut.join(this.dirname,this.stem+(l||""))}get path(){return this.history[this.history.length-1]}set path(l){dc(l)&&(l=Ck(l)),Ku(l,"path"),this.path!==l&&this.history.push(l)}get stem(){return typeof this.path=="string"?ut.basename(this.path,this.extname):void 0}set stem(l){Ku(l,"stem"),Xu(l,"stem"),this.path=ut.join(this.dirname||"",l+(this.extname||""))}fail(l,r,o){const c=this.message(l,r,o);throw c.fatal=!0,c}info(l,r,o){const c=this.message(l,r,o);return c.fatal=void 0,c}message(l,r,o){const c=new pn(l,r,o);return this.path&&(c.name=this.path+":"+c.name,c.file=this.path),c.fatal=!1,this.messages.push(c),c}toString(l){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(l||void 0).decode(this.value)}}function Xu(a,l){if(a&&a.includes(ut.sep))throw new Error("`"+l+"` cannot be a path: did not expect `"+ut.sep+"`")}function Ku(a,l){if(!a)throw new Error("`"+l+"` cannot be empty")}function _p(a,l){if(!a)throw new Error("Setting `"+l+"` requires `path` to be set too")}function Ak(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const Ek=(function(a){const o=this.constructor.prototype,c=o[a],f=function(){return c.apply(f,arguments)};return Object.setPrototypeOf(f,o),f}),_k={}.hasOwnProperty;class Nc extends Ek{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=mk()}copy(){const l=new Nc;let r=-1;for(;++r<this.attachers.length;){const o=this.attachers[r];l.use(...o)}return l.data(Vu(!0,{},this.namespace)),l}data(l,r){return typeof l=="string"?arguments.length===2?(Ju("data",this.frozen),this.namespace[l]=r,this):_k.call(this.namespace,l)&&this.namespace[l]||void 0:l?(Ju("data",this.frozen),this.namespace=l,this):this.namespace}freeze(){if(this.frozen)return this;const l=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const c=r.call(l,...o);typeof c=="function"&&this.transformers.use(c)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(l){this.freeze();const r=to(l),o=this.parser||this.Parser;return Zu("parse",o),o(String(r),r)}process(l,r){const o=this;return this.freeze(),Zu("process",this.parser||this.Parser),$u("process",this.compiler||this.Compiler),r?c(void 0,r):new Promise(c);function c(f,d){const p=to(l),g=o.parse(p);o.run(g,p,function(y,b,x){if(y||!b||!x)return m(y);const S=b,I=o.stringify(S,x);Ok(I)?x.value=I:x.result=I,m(y,x)});function m(y,b){y||!b?d(y):f?f(b):r(void 0,b)}}}processSync(l){let r=!1,o;return this.freeze(),Zu("processSync",this.parser||this.Parser),$u("processSync",this.compiler||this.Compiler),this.process(l,c),Rp("processSync","process",r),o;function c(f,d){r=!0,Ap(f),o=d}}run(l,r,o){Dp(l),this.freeze();const c=this.transformers;return!o&&typeof r=="function"&&(o=r,r=void 0),o?f(void 0,o):new Promise(f);function f(d,p){const g=to(r);c.run(l,g,m);function m(y,b,x){const S=b||l;y?p(y):d?d(S):o(void 0,S,x)}}}runSync(l,r){let o=!1,c;return this.run(l,r,f),Rp("runSync","run",o),c;function f(d,p){Ap(d),c=p,o=!0}}stringify(l,r){this.freeze();const o=to(r),c=this.compiler||this.Compiler;return $u("stringify",c),Dp(l),c(l,o)}use(l,...r){const o=this.attachers,c=this.namespace;if(Ju("use",this.frozen),l!=null)if(typeof l=="function")g(l,r);else if(typeof l=="object")Array.isArray(l)?p(l):d(l);else throw new TypeError("Expected usable value, not `"+l+"`");return this;function f(m){if(typeof m=="function")g(m,[]);else if(typeof m=="object")if(Array.isArray(m)){const[y,...b]=m;g(y,b)}else d(m);else throw new TypeError("Expected usable value, not `"+m+"`")}function d(m){if(!("plugins"in m)&&!("settings"in m))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");p(m.plugins),m.settings&&(c.settings=Vu(!0,c.settings,m.settings))}function p(m){let y=-1;if(m!=null)if(Array.isArray(m))for(;++y<m.length;){const b=m[y];f(b)}else throw new TypeError("Expected a list of plugins, not `"+m+"`")}function g(m,y){let b=-1,x=-1;for(;++b<o.length;)if(o[b][0]===m){x=b;break}if(x===-1)o.push([m,...y]);else if(y.length>0){let[S,...I]=y;const z=o[x][1];fc(z)&&fc(S)&&(S=Vu(!0,z,S)),o[x]=[m,S,...I]}}}}const Dk=new Nc().freeze();function Zu(a,l){if(typeof l!="function")throw new TypeError("Cannot `"+a+"` without `parser`")}function $u(a,l){if(typeof l!="function")throw new TypeError("Cannot `"+a+"` without `compiler`")}function Ju(a,l){if(l)throw new Error("Cannot call `"+a+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Dp(a){if(!fc(a)||typeof a.type!="string")throw new TypeError("Expected node, got `"+a+"`")}function Rp(a,l,r){if(!r)throw new Error("`"+a+"` finished async. Use `"+l+"` instead")}function to(a){return Rk(a)?a:new zg(a)}function Rk(a){return!!(a&&typeof a=="object"&&"message"in a&&"messages"in a)}function Ok(a){return typeof a=="string"||Mk(a)}function Mk(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const Lk="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Op=[],Mp={allowDangerousHtml:!0},zk=/^(https?|ircs?|mailto|xmpp)$/i,Nk=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Ik(a){const l=Uk(a),r=Bk(a);return Hk(l.runSync(l.parse(r),r),a)}function Uk(a){const l=a.rehypePlugins||Op,r=a.remarkPlugins||Op,o=a.remarkRehypeOptions?{...a.remarkRehypeOptions,...Mp}:Mp;return Dk().use(gx).use(r).use(fk,o).use(l)}function Bk(a){const l=a.children||"",r=new zg;return typeof l=="string"&&(r.value=l),r}function Hk(a,l){const r=l.allowedElements,o=l.allowElement,c=l.components,f=l.disallowedElements,d=l.skipHtml,p=l.unwrapDisallowed,g=l.urlTransform||qk;for(const y of Nk)Object.hasOwn(l,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+Lk+y.id,void 0);return Lg(a,m),Xw(a,{Fragment:sn.Fragment,components:c,ignoreInvalidStyle:!0,jsx:sn.jsx,jsxs:sn.jsxs,passKeys:!0,passNode:!0});function m(y,b,x){if(y.type==="raw"&&x&&typeof b=="number")return d?x.children.splice(b,1):x.children[b]={type:"text",value:y.value},b;if(y.type==="element"){let S;for(S in Pu)if(Object.hasOwn(Pu,S)&&Object.hasOwn(y.properties,S)){const I=y.properties[S],z=Pu[S];(z===null||z.includes(y.tagName))&&(y.properties[S]=g(String(I||""),S,y))}}if(y.type==="element"){let S=r?!r.includes(y.tagName):f?f.includes(y.tagName):!1;if(!S&&o&&typeof b=="number"&&(S=!o(y,b,x)),S&&x&&typeof b=="number")return p&&y.children?x.children.splice(b,1,...y.children):x.children.splice(b,1),b}}}function qk(a){const l=a.indexOf(":"),r=a.indexOf("?"),o=a.indexOf("#"),c=a.indexOf("/");return l===-1||c!==-1&&l>c||r!==-1&&l>r||o!==-1&&l>o||zk.test(a.slice(0,l))?a:""}function jk(){const{slug:a}=Pv(),l=wc.find(r=>r.slug===a);return l?sn.jsx("div",{className:"markdown",children:sn.jsx(Ik,{children:l.content})}):sn.jsx("div",{children:"Document not found"})}function Yk(){return sn.jsx(DS,{children:sn.jsxs("div",{style:{display:"flex",minHeight:"100vh"},children:[sn.jsx(Sw,{}),sn.jsxs(lS,{children:[sn.jsx(nc,{path:"/",element:sn.jsx(aS,{to:`/docs/${wc[0].slug}`})}),sn.jsx(nc,{path:"/docs/:slug",element:sn.jsx(jk,{})})]})]})})}rv.createRoot(document.getElementById("root")).render(sn.jsx($b.StrictMode,{children:sn.jsx(Yk,{})}));
