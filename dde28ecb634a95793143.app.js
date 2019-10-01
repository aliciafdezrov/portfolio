/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + "dde28ecb634a95793143" + "." + ({"4":"vendors~pdfjsWorker"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/portfolio/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Ret3");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1XzP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__("mXGw");
const react_md_1 = __webpack_require__("3iwl");
const Dividers_1 = __webpack_require__("bg2r");
const TechnologyRow_1 = __webpack_require__("zGwV");
class KnowledgePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "central-div" },
            React.createElement(react_md_1.Paper, { className: "title-paper", zDepth: 2 },
                React.createElement("div", { className: "knowledges-title" },
                    React.createElement("h4", null, "Tecnolog\u00EDas y herramientas"),
                    React.createElement(Dividers_1.default, null)),
                React.createElement("div", { className: "blocks-container" },
                    React.createElement("div", null,
                        React.createElement("h3", null, "MERN Stack"),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 90, label: "React" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 80, label: "Redux" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 75, label: "Webpack" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 80, label: "NodeJS" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 90, label: "Jest" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 90, label: "ES6" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 75, label: "Express" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 75, label: "Nginx" })),
                    React.createElement("div", null,
                        React.createElement("h3", null, "J2EE Stack"),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 95, label: "J2EE" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 95, label: "Java" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 80, label: "JUnit" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 80, label: "Mockito" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 90, label: "Maven" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 90, label: "Wildfly" })),
                    React.createElement("div", null,
                        React.createElement("h3", null, "Devops"),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 80, label: "Docker" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 80, label: "Docker Compose" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 80, label: "Docker Swarm" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 80, label: "Jenkins" })),
                    React.createElement("div", null,
                        React.createElement("h3", null, "Otros"),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 45, label: "GraphQL" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 95, label: "RestFull" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 100, label: "Git" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 90, label: "MySQL" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 70, label: "Oracle" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 90, label: "MongoDB" }),
                        React.createElement(TechnologyRow_1.TechnologyRow, { percent: 90, label: "Clean Code" }))))));
    }
}
exports.KnowledgePage = KnowledgePage;


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3JQV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "CV.pdf";

/***/ }),

/***/ "3Jfs":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "repository-open-graph-template.png";

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "5PuQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__("mXGw");
const react_md_1 = __webpack_require__("3iwl");
const backgroundImage = __webpack_require__("e5Bg");
class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(react_md_1.Media, { style: { margin: '0px' } },
                React.createElement("div", { className: "title-style" },
                    React.createElement("h1", null, "Alicia Fern\u00E1ndez Rovira"),
                    React.createElement("h4", null, "Desarrollador Full-Stack en M\u00E1laga")),
                React.createElement("img", { className: "image-style", src: backgroundImage, alt: "Laptop" }))));
    }
}
exports.HomePage = HomePage;


/***/ }),

/***/ "6zlt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__("mXGw");
const react_md_1 = __webpack_require__("3iwl");
const Avatars_1 = __webpack_require__("KPH1");
const Lists_1 = __webpack_require__("7CSj");
const ListItem_1 = __webpack_require__("SjVu");
const FontIcons_1 = __webpack_require__("B7Yq");
const Dividers_1 = __webpack_require__("bg2r");
const react_device_detect_1 = __webpack_require__("4Ebc");
const photo = __webpack_require__("3Jfs");
class ContactPage extends React.Component {
    constructor(props) {
        super(props);
    }
    openLink(linkDestination) {
        let link = document.createElement('a');
        link.href = linkDestination;
        link.click();
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(react_device_detect_1.BrowserView, null,
                React.createElement("div", { className: "central-div" },
                    React.createElement(react_md_1.Paper, { className: "title-paper white-background contact-page-container", zDepth: 2 },
                        React.createElement("div", null,
                            React.createElement(React.Fragment, null,
                                React.createElement("div", { className: "contact-title contact-text-div" },
                                    React.createElement("h4", null, "Informaci\u00F3n de contacto"),
                                    React.createElement(Dividers_1.Divider, null)),
                                React.createElement("div", { className: "contact-title contact-list" },
                                    React.createElement(Lists_1.default, null,
                                        React.createElement(ListItem_1.default, { primaryText: "aliciafdezrov@gmail.com", onClick: () => this.openLink("https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=Petición%20desde%20cv&to=aliciafdezrov@gmail.com&body=Cuerpo+del+mensaje"), leftIcon: React.createElement(FontIcons_1.default, null, "mail") }),
                                        React.createElement(ListItem_1.default, { primaryText: "M\u00E1laga, 29012 (Spain)", leftIcon: React.createElement(FontIcons_1.default, null, "place") })),
                                    React.createElement("div", { style: { paddingTop: '2vh' } },
                                        React.createElement("a", { href: "https://www.linkedin.com/in/alicia-fern\u00E1ndez-rovira-70885811a", target: "_blank" }, "https://www.linkedin.com/in/alicia-fern\u00E1ndez-rovira-70885811a")),
                                    React.createElement("div", { style: { paddingTop: '2vh' } },
                                        React.createElement("a", { href: "https://github.com/aliciafdezrov", target: "_blank" }, "https://github.com/aliciafdezrov")))),
                            React.createElement(React.Fragment, null,
                                React.createElement("div", null,
                                    React.createElement("h4", null, "Un poco m\u00E1s sobre mi"),
                                    React.createElement(Dividers_1.Divider, null),
                                    React.createElement("p", null, "Llevo desde 2016 trabajando, primero con una beca compagin\u00E1ndolo con mis estudios y m\u00E1s tarde contratada.Desde ese momento he estado trabajando como Desarrolladora Full-Stack. Siempre participando activamente en el dise\u00F1o, creaci\u00F3n y gesti\u00F3n de bases de datos, backend y frontend.")))),
                        React.createElement("div", { className: "avatar-style" },
                            React.createElement(Avatars_1.Avatar, { alt: "Me", src: photo, className: "avatar" }))))),
            React.createElement(react_device_detect_1.MobileView, null,
                React.createElement("div", { className: "central-div" },
                    React.createElement(react_md_1.Paper, { className: "title-paper white-background contact-page-container", zDepth: 2 },
                        React.createElement("div", null,
                            React.createElement("div", { className: "contact-title contact-text-div" },
                                React.createElement("h4", null, "Informaci\u00F3n de contacto"),
                                React.createElement(Dividers_1.Divider, null)),
                            React.createElement("div", { className: "contact-title contact-list" },
                                React.createElement(Lists_1.default, null,
                                    React.createElement(ListItem_1.default, { primaryText: "aliciafdezrov@gmail.com", onClick: () => this.openLink("mailto:aliciafdezrov@gmail.com?subject=Petición%20desde%20cv"), leftIcon: React.createElement(FontIcons_1.default, null, "mail") })),
                                React.createElement("div", { style: { paddingTop: '1vh' } },
                                    React.createElement("a", { href: "https://www.linkedin.com/in/alicia-fern\u00E1ndez-rovira-70885811a", target: "_blank" }, "linkedin/alicia-fern\u00E1ndez-rovira")),
                                React.createElement("div", { style: { paddingTop: '1vh' } },
                                    React.createElement("a", { href: "https://github.com/aliciafdezrov", target: "_blank" }, "github.com/aliciafdezrov"))),
                            React.createElement("div", { className: "contact-title contact-text-div" },
                                React.createElement("h4", null, "Un poco m\u00E1s sobre mi"),
                                React.createElement(Dividers_1.Divider, null),
                                React.createElement("p", null, "Llevo desde 2016 trabajando, primero con una beca compagin\u00E1ndolo con mis estudios y m\u00E1s tarde contratada.Desde ese momento he estado trabajando como Desarrolladora Full-Stack. Siempre participando activamente en el dise\u00F1o, creaci\u00F3n y gesti\u00F3n de bases de datos, backend y frontend."))),
                        React.createElement("div", { className: "avatar-style" },
                            React.createElement(Avatars_1.Avatar, { alt: "Me", src: photo, className: "avatar" })))))));
    }
}
exports.ContactPage = ContactPage;


/***/ }),

/***/ "CAur":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__("mXGw");
const react_md_1 = __webpack_require__("3iwl");
const HomePage_1 = __webpack_require__("5PuQ");
const ExperiencePage_1 = __webpack_require__("sTeW");
const KnowledgesPage_1 = __webpack_require__("1XzP");
const AcademicPage_1 = __webpack_require__("M4Ng");
const ContactPage_1 = __webpack_require__("6zlt");
const BottomNavigations_1 = __webpack_require__("ph+7");
const MyDocument_1 = __webpack_require__("cD4s");
const react_device_detect_1 = __webpack_require__("4Ebc");
const Buttons_1 = __webpack_require__("OyIr");
const cv = __webpack_require__("3JQV");
const react_transition_group_1 = __webpack_require__("3sBZ");
const components = [
    React.createElement(HomePage_1.HomePage, { key: "home" }),
    React.createElement(AcademicPage_1.AcademicPage, { key: "academic" }),
    React.createElement(ExperiencePage_1.ExperiencePage, { key: "experience" }),
    React.createElement(KnowledgesPage_1.KnowledgePage, { key: "knowledge" }),
    React.createElement(ContactPage_1.ContactPage, { key: "contact" }),
    React.createElement("div", null,
        React.createElement(react_device_detect_1.BrowserView, null,
            React.createElement(MyDocument_1.MyDocument, { key: "cv" })),
        React.createElement(react_device_detect_1.MobileView, null,
            React.createElement("div", { style: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                    height: '100vh',
                    width: '100vw'
                } },
                React.createElement(Buttons_1.default, { primary: true, raised: true, href: cv, download: true }, "\u00A1Pulsa para descargar!"))))
];
const themes = ['home', 'academic', 'experience', 'knowledge', 'contact', 'cv'];
class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            transition: 'slide-forward'
        };
    }
    onChangeIndex(newIndex) {
        if (this.state.activeIndex < newIndex) {
            this.setState({ transition: 'slide-forward' });
        }
        else {
            this.setState({ transition: 'slide-reverse' });
        }
        setTimeout(() => {
            this.setState({ activeIndex: newIndex });
        }, 0);
    }
    render() {
        let links = [{
                label: 'Home',
                icon: React.createElement(react_md_1.FontIcon, null, "home"),
            }, {
                label: 'Académico',
                icon: React.createElement(react_md_1.FontIcon, null, "school"),
            }, {
                label: 'Experiencia',
                icon: React.createElement(react_md_1.FontIcon, null, "laptop"),
            }, {
                label: 'Tecnologías',
                icon: React.createElement(react_md_1.FontIcon, null, "star_border"),
            }, {
                label: 'Sobre mi',
                icon: React.createElement(react_md_1.FontIcon, null, "person_outline"),
            }, {
                label: 'Descarga',
                icon: React.createElement(react_md_1.FontIcon, null, "cloud_download"),
            }];
        return (React.createElement("div", { className: "wrapper" },
            React.createElement("div", null,
                React.createElement(react_transition_group_1.SwitchTransition, null,
                    React.createElement(react_transition_group_1.CSSTransition, { key: this.state.activeIndex, timeout: 300, classNames: this.state.transition }, components[this.state.activeIndex]))),
            React.createElement("div", { className: `bottom-navigations__dynamic--${themes[this.state.activeIndex]}` },
                React.createElement("div", { className: "dashboard-section" },
                    React.createElement(BottomNavigations_1.BottomNavigation, { dynamic: true, links: links, colored: true, activeIndex: this.state.activeIndex, onNavChange: this.onChangeIndex.bind(this) })))));
    }
}
exports.DashboardPage = DashboardPage;


/***/ }),

/***/ "M4Ng":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__("mXGw");
const react_md_1 = __webpack_require__("3iwl");
const Dividers_1 = __webpack_require__("bg2r");
const rc_steps_1 = __webpack_require__("93Te");
__webpack_require__("h+vt");
__webpack_require__("ikrR");
const react_device_detect_1 = __webpack_require__("4Ebc");
class AcademicPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStudiesStep: 0,
            currentProjectStep: 0,
            currentLanguageStep: 0,
        };
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(react_device_detect_1.BrowserView, null,
                React.createElement("div", { className: "central-div" },
                    React.createElement(react_md_1.Paper, { className: "title-paper", zDepth: 2 },
                        React.createElement("div", null,
                            React.createElement("div", { className: "academic-titles" },
                                React.createElement("h4", null, "Estudios")),
                            React.createElement(Dividers_1.default, null),
                            React.createElement("div", { className: "steps-style" },
                                React.createElement(rc_steps_1.default, { direction: "vertical", current: this.state.currentStudiesStep, onChange: (current) => this.setState({ currentStudiesStep: current }) },
                                    React.createElement(rc_steps_1.Step, { title: "Sept 2013 - Sept 2017", description: "Grado Ingenier\u00EDa de la Salud (Universidad de M\u00E1laga)" })))),
                        React.createElement("div", null,
                            React.createElement("div", { className: "academic-titles" },
                                React.createElement("h4", null, "Proyectos acad\u00E9micos")),
                            React.createElement(Dividers_1.default, null),
                            React.createElement("div", { className: "steps-style" },
                                React.createElement(rc_steps_1.default, { direction: "vertical", current: this.state.currentProjectStep, onChange: (current) => this.setState({ currentProjectStep: current }) },
                                    React.createElement(rc_steps_1.Step, { title: "Seminario en optimizacio\u0301n para la reconstruccio\u0301n de redes ge\u0301nicas (Universidad de Ma\u0301laga) (2015)", description: "Asistencia a un seminario proporcionado por la Universidad de Ma\u0301laga 2015(3 meses)\n                                                        Seminario realizado con una duracio\u0301n de tres meses relacionado con la optimizacio\u0301n en la reconstruccio\u0301n de redes ge\u0301nicas haciendo uso de metaheuri\u0301stica" }),
                                    React.createElement(rc_steps_1.Step, { title: "Desarrollo de una aplicacio\u0301n Android (Universidad de Ma\u0301laga) (2016)", description: "Aplicacio\u0301n Android para pacientes con EPOC 2016(4 meses)\n                                                    Se participo\u0301 en el desarrollo de una aplicacio\u0301n Android destinada a mejorar la adhesio\u0301n al tratamiento en paciente con Enfermedad Pulmonar Obstructiva Cro\u0301nica (EPOC). Posteriormente se present\u00F3 dicha aplicacio\u0301n en el Reto Salud Andaluci\u0301a." }),
                                    React.createElement(rc_steps_1.Step, { title: "Proyecto Innovacio\u0301n educativa en Biologi\u0301a y Ciencias O\u0301micas (Universidad de Ma\u0301laga) (2016)", description: "Estudio sobre problemas de inferencia filogene\u0301tica realizado para la Universidad de Ma\u0301laga 2016(2 meses)" }),
                                    React.createElement(rc_steps_1.Step, { title: "Aplicacio\u0301n para la generacio\u0301n de mapas de calor (Universidad de Ma\u0301laga) (2017-2018)", description: "Desarrollo de una aplicacio\u0301n iniciado a partir de un Proyecto de Investigacio\u0301n.\nA partir de la Beca realizada surgio\u0301 el disen\u0303o, desarrollo y mantenimiento de una aplicacio\u0301n destinada a la generacio\u0301n de mapas de calor a partir de datos de expresio\u0301n ge\u0301nica para cualquier tipo de ana\u0301lisis cli\u0301nico posterior a realizar." })))),
                        React.createElement("div", null,
                            React.createElement("div", { className: "academic-titles" },
                                React.createElement("h4", null, "Idiomas")),
                            React.createElement(Dividers_1.default, null),
                            React.createElement("div", { className: "steps-style" },
                                React.createElement(rc_steps_1.default, { direction: "vertical", current: this.state.currentLanguageStep, onChange: (current) => this.setState({ currentLanguageStep: current }) },
                                    React.createElement(rc_steps_1.Step, { title: "Espa\u00F1ol", description: "Lengua materna" }),
                                    React.createElement(rc_steps_1.Step, { title: "Ingl\u00E9s", description: "En proceso de obtenci\u00F3n del certificado B2 de Cambridge" }))))))),
            React.createElement(react_device_detect_1.MobileView, null,
                React.createElement("div", { className: "central-div" },
                    React.createElement(react_md_1.Paper, { className: "title-paper", zDepth: 2 },
                        React.createElement("div", null,
                            React.createElement("div", { className: "academic-titles" },
                                React.createElement("h4", null, "Estudios")),
                            React.createElement(Dividers_1.default, null),
                            React.createElement("div", { className: "steps-style" },
                                React.createElement(rc_steps_1.default, { direction: "vertical", current: this.state.currentStudiesStep, onChange: (current) => this.setState({ currentStudiesStep: current }) },
                                    React.createElement(rc_steps_1.Step, { title: "Sept 2013 - Sept 2017", description: "Grado Ingenier\u00EDa de la Salud (Universidad de M\u00E1laga)" })))),
                        React.createElement("div", null,
                            React.createElement("div", { className: "academic-titles" },
                                React.createElement("h4", null, "Proyectos acad\u00E9micos")),
                            React.createElement(Dividers_1.default, null),
                            React.createElement("div", { className: "steps-style" },
                                React.createElement(rc_steps_1.default, { direction: "vertical", current: this.state.currentProjectStep, onChange: (current) => this.setState({ currentProjectStep: current }) },
                                    React.createElement(rc_steps_1.Step, { title: "Seminario en optimizacio\u0301n para la reconstruccio\u0301n de redes ge\u0301nicas (Universidad de Ma\u0301laga) (2015)" }),
                                    React.createElement(rc_steps_1.Step, { title: "Desarrollo de una aplicacio\u0301n Android (Universidad de Ma\u0301laga) (2016)" }),
                                    React.createElement(rc_steps_1.Step, { title: "Proyecto Innovacio\u0301n educativa en Biologi\u0301a y Ciencias O\u0301micas (Universidad de Ma\u0301laga) (2016)" }),
                                    React.createElement(rc_steps_1.Step, { title: "Aplicacio\u0301n para la generacio\u0301n de mapas de calor (Universidad de Ma\u0301laga) (2017-2018)" })))),
                        React.createElement("div", null,
                            React.createElement("div", { className: "academic-titles" },
                                React.createElement("h4", null, "Idiomas")),
                            React.createElement(Dividers_1.default, null),
                            React.createElement("div", { className: "steps-style" },
                                React.createElement(rc_steps_1.default, { direction: "vertical", current: this.state.currentLanguageStep, onChange: (current) => this.setState({ currentLanguageStep: current }) },
                                    React.createElement(rc_steps_1.Step, { title: "Espa\u00F1ol", description: "Lengua materna" }),
                                    React.createElement(rc_steps_1.Step, { title: "Ingl\u00E9s", description: "En proceso de obtenci\u00F3n del certificado B2 de Cambridge" })))))))));
    }
}
exports.AcademicPage = AcademicPage;


/***/ }),

/***/ "Ret3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__("mXGw");
const ReactDOM = __webpack_require__("xARA");
const DashboardPage_1 = __webpack_require__("CAur");
class Index {
    constructor() {
        ReactDOM.render((React.createElement(DashboardPage_1.DashboardPage, null)), document.getElementById('root'));
    }
}
new Index();


/***/ }),

/***/ "cD4s":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__("mXGw");
const react_pdf_1 = __webpack_require__("ncg+");
const react_toastify_1 = __webpack_require__("2KSd");
__webpack_require__("v1MJ");
const react_md_1 = __webpack_require__("3iwl");
const file = __webpack_require__("3JQV");
const notify = () => react_toastify_1.toast('⚠️ ¿Te gustaría descargarlo? ', {
    position: "top-right",
    autoClose: 15000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    containerId: 'Download'
});
class MyDocument extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1,
            loading: true
        };
        this.onDocumentLoadSuccess = ({ numPages }) => {
            this.setState({ numPages });
            this.setState({ loading: false });
            notify();
        };
    }
    nextPage() {
        if (this.state.pageNumber < this.state.numPages) {
            this.setState({ pageNumber: this.state.pageNumber + 1 });
        }
    }
    prevPage() {
        if (this.state.pageNumber > 1) {
            this.setState({ pageNumber: this.state.pageNumber - 1 });
        }
    }
    downloadFile() {
        let link = document.createElement('a');
        link.href = file;
        link.download = file;
        link.click();
    }
    render() {
        return (React.createElement("div", { style: { display: "flex", marginLeft: "30vw" } },
            React.createElement("div", null,
                React.createElement("div", null,
                    React.createElement(react_toastify_1.ToastContainer, { containerId: 'Download', onClick: () => this.downloadFile(), position: react_toastify_1.toast.POSITION.TOP_LEFT }))),
            React.createElement("div", { className: "container-fluid fab-style" },
                React.createElement("div", { className: "fab-left" },
                    React.createElement(react_md_1.Button, { floating: true, primary: true, onClick: () => this.prevPage() }, "arrow_left")),
                React.createElement("div", { className: "document-wrapper" },
                    React.createElement(react_pdf_1.Document, { file: file, error: "Algo fue mal al cargar el cv. Env\u00EDame un correo al email de contacto y puedo enviartelo personalmente.", loading: "Cargando el archivo...", onLoadSuccess: this.onDocumentLoadSuccess },
                        React.createElement(react_pdf_1.Page, { className: "page-wrapper", renderMode: 'svg', pageNumber: this.state.pageNumber }))),
                React.createElement("div", { className: "fab-right" },
                    React.createElement(react_md_1.Button, { floating: true, primary: true, onClick: () => this.nextPage() }, "arrow_right")))));
    }
}
exports.MyDocument = MyDocument;


/***/ }),

/***/ "cTR+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("1sm7");
const React = __webpack_require__("mXGw");
const rc_progress_1 = __webpack_require__("WyKr");
const chroma = __webpack_require__("+G64");
const react_device_detect_1 = __webpack_require__("4Ebc");
class ProgressComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 0,
            color: '#108ee9'
        };
        this.increase();
    }
    increase() {
        let newPercent = this.state.percent + 4;
        let scale = chroma.scale(['#108ee9', '#87d068']);
        this.setState({ color: scale(this.state.percent / 100).hex() });
        if (newPercent >= this.props.percent) {
            clearTimeout();
            return;
        }
        this.setState({ percent: newPercent });
        setTimeout(() => {
            this.increase();
        }, 0);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(react_device_detect_1.BrowserView, null,
                React.createElement(rc_progress_1.Line, { percent: this.state.percent, strokeLinecap: "round", strokeWidth: 2, strokeColor: this.state.color })),
            React.createElement(react_device_detect_1.MobileView, null,
                React.createElement(rc_progress_1.Line, { percent: this.state.percent, strokeLinecap: "round", strokeWidth: 4, strokeColor: this.state.color }))));
    }
}
exports.ProgressComponent = ProgressComponent;


/***/ }),

/***/ "e5Bg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ash-edmonds-510566-unsplash.jpg";

/***/ }),

/***/ "sTeW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__("mXGw");
const rc_steps_1 = __webpack_require__("93Te");
__webpack_require__("h+vt");
__webpack_require__("ikrR");
const react_md_1 = __webpack_require__("3iwl");
const Dividers_1 = __webpack_require__("bg2r");
const react_device_detect_1 = __webpack_require__("4Ebc");
class ExperiencePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0
        };
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(react_device_detect_1.BrowserView, null,
                React.createElement("div", { className: "central-div" },
                    React.createElement(react_md_1.Paper, { className: "title-paper", zDepth: 2 },
                        React.createElement("div", { className: "academic-titles" },
                            React.createElement("h4", null, "Experiencia profesional")),
                        React.createElement(Dividers_1.default, null),
                        React.createElement("div", { className: "steps-style" },
                            React.createElement(rc_steps_1.default, { direction: "vertical", current: this.state.currentStep, onChange: (current) => this.setState({ currentStep: current }) },
                                React.createElement(rc_steps_1.Step, { title: "Desarrollador Full-Stack (GSL)", subtitle: "[Abr 2018 - Actualidad]", description: React.createElement("div", { className: "paragraph" },
                                        React.createElement("p", null,
                                            "Desarrollo de una aplicaci\u00F3n web de gesti\u00F3n cl\u00EDnica. Desarrollo del sistema al completo incluyendo gesti\u00F3n de servidores usando Docker Swarm y de las bases de datos con el motor MySQL.",
                                            React.createElement("br", null),
                                            "Un backend y frontend diferenciados, usando en ambos casos JavaScript y Rest. El frontend se desarroll\u00F3 usando React, Redux y Webpack. El backend usando nodeJS con un servidor express y webpack.")) }),
                                React.createElement(rc_steps_1.Step, { title: "Desarrollador (Grupo AL)", subtitle: "[Ene 2017 - Abr 2018]", description: React.createElement("div", { className: "paragraph" },
                                        React.createElement("p", null,
                                            "Se han desarrollado proyectos en colaboraci\u00F3n con el Ayuntamiento de Alicante. La creaci\u00F3n de dichos proyectos tiene como objetivo la refactorizaci\u00F3n de servicios ya existentes del Portal de Administrinaci\u00F3n Electr\u00F3nica pudiendo migrar su uso a un entorno tecnol\u00F3gico m\u00E1s actualizado y accesible. Se migraron servicios SOAP a servicios REST haciendo uso de J2EE, autenticaci\u00F3n con JWT, base de datos MySQL y gesti\u00F3n de certificados electr\u00F3nicos en servidores de aplicaciones Wildfly.",
                                            React.createElement("br", null),
                                            "Adem\u00E1s se realizaron tareas de DevOps, actualizando una plataforma de integraci\u00F3n con Jenkins y creando un cliente web para un servicio REST destinado a posibilitar a cualquier desarrollador su uso sin conocimientos del funcionamiento interno de la misma.")) }),
                                React.createElement(rc_steps_1.Step, { title: "Desarrollador de Big Data y metaheur\u00EDstica (Universidad de M\u00E1laga)", subtitle: "[Sept 2016 - Ene 2018]", description: React.createElement("div", { className: "paragraph" },
                                        React.createElement("p", null,
                                            "Programador Full Stack perteneciente a un grupo de investigaci\u00F3n en la Universidad de M\u00E1laga en el equipo de desarrollo.",
                                            React.createElement("br", null),
                                            "El trabajo se organiz\u00F3 utilizando Scrum como puesta en pr\u00E1ctica de las metodolog\u00EDas de desarrollo \u00E1giles.",
                                            React.createElement("br", null),
                                            "La participaci\u00F3n se ha realizado a lo largo de diferentes proyectos creando la arquitectura de los mismo desde cero. Todos los proyectos han estado orientados a su desarrollo haciendo uso de patrones de dise\u00F1o, arquitecturas J2EE y orientados a microservicios garantizamdo la eficiencia y estabilidad de los mismos.",
                                            React.createElement("br", null),
                                            "Los proyectos se han desarrollado realizando una diferenciaci\u00F3n entre el back-end y el front-end con la interacci\u00F3n conjunta entre ambos permitiendo un mayor grado de control sobre ambas. Adem\u00E1s se orientaron realizando un control de versiones con Git, una virtualizaci\u00F3n de los sistemas usando Docker y una perspectiva de integraci\u00F3n continua.",
                                            React.createElement("br", null),
                                            "Se ha hecho uso de diferentes tecnolog\u00EDas y herramientas como Apache Spark, React o Redux para producir aplicaciones webs que realizasen el an\u00E1lisis de grandes vol\u00FAmenes de datos.")) })))))),
            React.createElement(react_device_detect_1.MobileView, null,
                React.createElement("div", { className: "central-div" },
                    React.createElement(react_md_1.Paper, { className: "title-paper", zDepth: 2 },
                        React.createElement("div", { className: "academic-titles" },
                            React.createElement("h4", null, "Experiencia profesional")),
                        React.createElement(Dividers_1.default, null),
                        React.createElement("div", { className: "steps-style" },
                            React.createElement(rc_steps_1.default, { direction: "vertical", current: this.state.currentStep, onChange: (current) => this.setState({ currentStep: current }) },
                                React.createElement(rc_steps_1.Step, { title: "Desarrolladora Full-Stack en GSL Servicio de Prevenci\u00F3n", subtitle: "[Abr 2018 - Actualidad]" }),
                                React.createElement(rc_steps_1.Step, { title: "Desarrolladora Full-Stack en Grupo AL", subtitle: "[Ene 2017 - Abr 2018]" }),
                                React.createElement(rc_steps_1.Step, { title: "Desarrolladora Full-Stack en la Universidad de M\u00E1laga", subtitle: "[Sept 2016 - Ene 2018]" }))))))));
    }
}
exports.ExperiencePage = ExperiencePage;


/***/ }),

/***/ "zGwV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("1sm7");
const React = __webpack_require__("mXGw");
const ProgressComponent_1 = __webpack_require__("cTR+");
class TechnologyRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "technology-container" },
            React.createElement("div", { className: "technology-label" },
                React.createElement("label", null, this.props.label)),
            React.createElement("div", { className: "technology-progress" },
                React.createElement(ProgressComponent_1.ProgressComponent, { percent: this.props.percent }))));
    }
}
exports.TechnologyRow = TechnologyRow;


/***/ })

/******/ });