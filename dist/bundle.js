/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./src/notmain.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n//Document Sizeing adjustment\r\n//------------------\r\n//Scene & Render\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\r\n//------------------\r\n//Camera\r\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\r\ncamera.position.z = 5;\r\n//------------------\r\n//Texture Import\r\nconst texture = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader().load(\"assets/pz.png\");\r\n//------------------\r\n//Circles Sizes\r\nlet circleR = 2;\r\nlet circleEdges = 8;\r\nconst geometry = new three__WEBPACK_IMPORTED_MODULE_0__.CircleGeometry(circleR, 4);\r\nconst material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({ map: texture });\r\nconst mainCircle = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);\r\nmainCircle.rotation.x = -1;\r\nmainCircle.rotation.z = 0.78;\r\nmainCircle.position.x = -6.9;\r\nconst circleCoverGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.CircleGeometry(circleR / 2, circleEdges);\r\nconst circleCoverMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({ color: 0x333333 });\r\nconst coverCircle = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(circleCoverGeometry, circleCoverMaterial);\r\n//------------------\r\n//Scene Creating sector\r\nscene.add(coverCircle);\r\nscene.add(mainCircle);\r\nrenderer.setAnimationLoop(function () {\r\n    renderer.render(scene, camera);\r\n});\r\nrenderer.setSize(window.innerWidth, window.innerHeight);\r\ndocument.body.appendChild(renderer.domElement);\r\n//------------------\r\nlet sawChanger = 1;\r\nlet negative = 1;\r\nlet sawDirection = 1;\r\nlet MAX = false;\r\nlet MIN = true;\r\nfunction animate() {\r\n    requestAnimationFrame(animate);\r\n    mainCircle.position.x += sawDirection * 0.04;\r\n    if (mainCircle.position.x >= 7) {\r\n        MAX = true;\r\n        MIN = false;\r\n        console.log(MAX, MIN);\r\n    }\r\n    if (-7 >= mainCircle.position.x) {\r\n        MAX = false;\r\n        MIN = true;\r\n    }\r\n    if (!MIN) {\r\n        sawDirection = -1;\r\n        negative = -1;\r\n    }\r\n    if (!MAX) {\r\n        sawDirection = 1;\r\n        negative = 1;\r\n    }\r\n    console.log(mainCircle.position.x);\r\n    sawChanger += 1;\r\n    coverCircle.rotation.z += negative * 0.06;\r\n}\r\nanimate();\r\n\n\n//# sourceURL=webpack://tjs/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/notmain.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;