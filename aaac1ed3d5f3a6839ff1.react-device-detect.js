(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"4Ebc":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,i=t("mXGw"),a=(r=i)&&"object"==typeof r&&"default"in r?r.default:r,o=new(t("Baaw")),s=o.getBrowser(),l=(o.getCPU(),o.getDevice()),u=o.getEngine(),c=o.getOS(),m=o.getUA(),d=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||n};function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p="mobile",O="tablet",E="smarttv",C="console",N="wearable",V=void 0,P="Chrome",F="Firefox",S="Opera",W="Yandex",j="Safari",L="Internet Explorer",T="Edge",A="Chromium",M="IE",k="Mobile Safari",_="iOS",B="Android",D="Windows Phone",x={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},I=function(e,n,t,r,i){return{isBrowser:e,browserMajorVersion:d(n.major),browserFullVersion:d(n.version),browserName:d(n.name),engineName:d(t.name),engineVersion:d(t.version),osName:d(r.name),osVersion:d(r.version),userAgent:d(i)}},U=function(e,n,t,r){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(t,!0).forEach((function(n){h(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,{vendor:d(n.vendor),model:d(n.model),os:d(t.name),osVersion:d(t.version),ua:d(r)})},z=function(e,n,t,r){return{isSmartTV:e,engineName:d(n.name),engineVersion:d(n.version),osName:d(t.name),osVersion:d(t.version),userAgent:d(r)}},J=function(e,n,t,r){return{isConsole:e,engineName:d(n.name),engineVersion:d(n.version),osName:d(t.name),osVersion:d(t.version),userAgent:d(r)}},Y=function(e,n,t,r){return{isWearable:e,engineName:d(n.name),engineVersion:d(n.version),osName:d(t.name),osVersion:d(t.version),userAgent:d(r)}},G=function(e){switch(e){case p:return{isMobile:!0};case O:return{isTablet:!0};case E:return{isSmartTV:!0};case C:return{isConsole:!0};case N:return{isWearable:!0};case V:return{isBrowser:!0};default:return x}}(l.type);var H=l.type===E,R=l.type===C,X=l.type===N,q=s.name===k,K=s.name===A,Q=function(){switch(l.type){case p:case O:return!0;default:return!1}}(),Z=l.type===p,$=l.type===O,ee=l.type===V,ne=c.name===B,te=c.name===D,re=c.name===_,ie=s.name===P,ae=s.name===F,oe=s.name===j||s.name===k,se=s.name===S,le=s.name===L||s.name===M,ue=d(c.version),ce=d(c.name),me=d(s.version),de=d(s.major),fe=d(s.name),ve=d(l.vendor),he=d(l.model),ye=d(u.name),we=d(u.version),ge=d(m),be=s.name===T,pe=s.name===W,Oe=d(l.type,"");n.AndroidView=function(e){var n=e.renderWithFragment,t=e.children,r=e.viewClassName,o=e.style;return ne?n?a.createElement(i.Fragment,null,t):a.createElement("div",{className:r,style:o},t):null},n.BrowserView=function(e){var n=e.renderWithFragment,t=e.children,r=e.viewClassName,o=e.style;return ee?n?a.createElement(i.Fragment,null,t):a.createElement("div",{className:r,style:o},t):null},n.ConsoleView=function(e){var n=e.renderWithFragment,t=e.children,r=e.viewClassName,o=e.style;return R?n?a.createElement(i.Fragment,null,t):a.createElement("div",{className:r,style:o},t):null},n.CustomView=function(e){var n=e.renderWithFragment,t=e.children,r=e.viewClassName,o=e.style;return e.condition?n?a.createElement(i.Fragment,null,t):a.createElement("div",{className:r,style:o},t):null},n.IEView=function(e){var n=e.renderWithFragment,t=e.children,r=e.viewClassName,o=e.style;return le?n?a.createElement(i.Fragment,null,t):a.createElement("div",{className:r,style:o},t):null},n.IOSView=function(e){var n=e.renderWithFragment,t=e.children,r=e.viewClassName,o=e.style;return re?n?a.createElement(i.Fragment,null,t):a.createElement("div",{className:r,style:o},t):null},n.MobileOnlyView=function(e){var n=e.renderWithFragment,t=e.children,r=e.viewClassName,o=e.style;return Z?n?a.createElement(i.Fragment,null,t):a.createElement("div",{className:r,style:o},t):null},n.MobileView=function(e){var n=e.renderWithFragment,t=e.children,r=e.viewClassName,o=e.style;return Q?n?a.createElement(i.Fragment,null,t):a.createElement("div",{className:r,style:o},t):null},n.SmartTVView=function(e){var n=e.renderWithFragment,t=e.children,r=e.viewClassName,o=e.style;return H?n?a.createElement(i.Fragment,null,t):a.createElement("div",{className:r,style:o},t):null},n.TabletView=function(e){var n=e.renderWithFragment,t=e.children,r=e.viewClassName,o=e.style;return $?n?a.createElement(i.Fragment,null,t):a.createElement("div",{className:r,style:o},t):null},n.WearableView=function(e){var n=e.renderWithFragment,t=e.children,r=e.viewClassName,o=e.style;return X?n?a.createElement(i.Fragment,null,t):a.createElement("div",{className:r,style:o},t):null},n.WinPhoneView=function(e){var n=e.renderWithFragment,t=e.children,r=e.viewClassName,o=e.style;return te?n?a.createElement(i.Fragment,null,t):a.createElement("div",{className:r,style:o},t):null},n.browserName=fe,n.browserVersion=de,n.deviceDetect=function(){var e=G.isBrowser,n=G.isMobile,t=G.isTablet,r=G.isSmartTV,i=G.isConsole,a=G.isWearable;return e?I(e,s,u,c,m):r?z(r,u,c,m):i?J(i,u,c,m):n?U(G,l,c,m):t?U(G,l,c,m):a?Y(a,u,c,m):void 0},n.deviceType=Oe,n.engineName=ye,n.engineVersion=we,n.fullBrowserVersion=me,n.getUA=ge,n.isAndroid=ne,n.isBrowser=ee,n.isChrome=ie,n.isChromium=K,n.isConsole=R,n.isEdge=be,n.isFirefox=ae,n.isIE=le,n.isIOS=re,n.isMobile=Q,n.isMobileOnly=Z,n.isMobileSafari=q,n.isOpera=se,n.isSafari=oe,n.isSmartTV=H,n.isTablet=$,n.isWearable=X,n.isWinPhone=te,n.isYandex=pe,n.mobileModel=he,n.mobileVendor=ve,n.osName=ce,n.osVersion=ue,n.withOrientationChange=function(e){return function(n){function t(e){var n,r,i;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(i=w(t).call(this,e))||"object"!=typeof i&&"function"!=typeof i?b(r):i).isEventListenerAdded=!1,n.handleOrientationChange=n.handleOrientationChange.bind(b(n)),n.onOrientationChange=n.onOrientationChange.bind(b(n)),n.onPageLoad=n.onPageLoad.bind(b(n)),n.state={isLandscape:!1,isPortrait:!1},n}var r,i,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(t,n),r=t,(i=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"==typeof window?"undefined":f(window))&&Q&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return a.createElement(e,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait})}}])&&v(r.prototype,i),o&&v(r,o),t}(a.Component)}}}]);
//# sourceMappingURL=aaac1ed3d5f3a6839ff1.react-device-detect.js.map