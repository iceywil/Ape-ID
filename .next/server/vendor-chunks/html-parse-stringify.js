"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/html-parse-stringify";
exports.ids = ["vendor-chunks/html-parse-stringify"];
exports.modules = {

/***/ "(ssr)/./node_modules/html-parse-stringify/dist/html-parse-stringify.module.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/html-parse-stringify/dist/html-parse-stringify.module.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var void_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! void-elements */ \"(ssr)/./node_modules/void-elements/index.js\");\n/* harmony import */ var void_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(void_elements__WEBPACK_IMPORTED_MODULE_0__);\nvar t=/\\s([^'\"/\\s><]+?)[\\s/>]|([^\\s=]+)=\\s?(\".*?\"|'.*?')/g;function n(n){var r={type:\"tag\",name:\"\",voidElement:!1,attrs:{},children:[]},i=n.match(/<\\/?([^\\s]+?)[/\\s>]/);if(i&&(r.name=i[1],((void_elements__WEBPACK_IMPORTED_MODULE_0___default())[i[1]]||\"/\"===n.charAt(n.length-2))&&(r.voidElement=!0),r.name.startsWith(\"!--\"))){var s=n.indexOf(\"--\\x3e\");return{type:\"comment\",comment:-1!==s?n.slice(4,s):\"\"}}for(var a=new RegExp(t),c=null;null!==(c=a.exec(n));)if(c[0].trim())if(c[1]){var o=c[1].trim(),l=[o,\"\"];o.indexOf(\"=\")>-1&&(l=o.split(\"=\")),r.attrs[l[0]]=l[1],a.lastIndex--}else c[2]&&(r.attrs[c[2]]=c[3].trim().substring(1,c[3].length-1));return r}var r=/<[a-zA-Z0-9\\-\\!\\/](?:\"[^\"]*\"|'[^']*'|[^'\">])*>/g,i=/^\\s*$/,s=Object.create(null);function a(e,t){switch(t.type){case\"text\":return e+t.content;case\"tag\":return e+=\"<\"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'=\"'+e[n]+'\"');return t.length?\" \"+t.join(\" \"):\"\"}(t.attrs):\"\")+(t.voidElement?\"/>\":\">\"),t.voidElement?e:e+t.children.reduce(a,\"\")+\"</\"+t.name+\">\";case\"comment\":return e+\"\\x3c!--\"+t.comment+\"--\\x3e\"}}var c={parse:function(e,t){t||(t={}),t.components||(t.components=s);var a,c=[],o=[],l=-1,m=!1;if(0!==e.indexOf(\"<\")){var u=e.indexOf(\"<\");c.push({type:\"text\",content:-1===u?e:e.substring(0,u)})}return e.replace(r,function(r,s){if(m){if(r!==\"</\"+a.name+\">\")return;m=!1}var u,f=\"/\"!==r.charAt(1),h=r.startsWith(\"\\x3c!--\"),p=s+r.length,d=e.charAt(p);if(h){var v=n(r);return l<0?(c.push(v),c):((u=o[l]).children.push(v),c)}if(f&&(l++,\"tag\"===(a=n(r)).type&&t.components[a.name]&&(a.type=\"component\",m=!0),a.voidElement||m||!d||\"<\"===d||a.children.push({type:\"text\",content:e.slice(p,e.indexOf(\"<\",p))}),0===l&&c.push(a),(u=o[l-1])&&u.children.push(a),o[l]=a),(!f||a.voidElement)&&(l>-1&&(a.voidElement||a.name===r.slice(2,-1))&&(l--,a=-1===l?c:o[l]),!m&&\"<\"!==d&&d)){u=-1===l?c:o[l].children;var x=e.indexOf(\"<\",p),g=e.slice(p,-1===x?void 0:x);i.test(g)&&(g=\" \"),(x>-1&&l+u.length>=0||\" \"!==g)&&u.push({type:\"text\",content:g})}}),c},stringify:function(e){return e.reduce(function(e,t){return e+a(\"\",t)},\"\")}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (c);\n//# sourceMappingURL=html-parse-stringify.module.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHRtbC1wYXJzZS1zdHJpbmdpZnkvZGlzdC9odG1sLXBhcnNlLXN0cmluZ2lmeS5tb2R1bGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZCLDJEQUEyRCxjQUFjLE9BQU8sMENBQTBDLGFBQWEsa0NBQWtDLG9CQUFvQixzREFBQyxtRkFBbUYsMEJBQTBCLE9BQU8sK0NBQStDLCtCQUErQixxQkFBcUIseUJBQXlCLDJCQUEyQixxRUFBcUUsa0VBQWtFLFNBQVMsd0ZBQXdGLGdCQUFnQixlQUFlLDhCQUE4QixvREFBb0QsU0FBUyx1Q0FBdUMsbUNBQW1DLGlHQUFpRyxxREFBcUQsT0FBTyxvQkFBb0IsUUFBUSxpQ0FBaUMsMEJBQTBCLHVCQUF1QixxQkFBcUIsUUFBUSw4Q0FBOEMsRUFBRSxpQ0FBaUMsTUFBTSw4QkFBOEIsS0FBSywrRUFBK0UsTUFBTSxXQUFXLHVEQUF1RCxrSUFBa0ksZ0RBQWdELHNLQUFzSyx5QkFBeUIsb0RBQW9ELDJEQUEyRCxzQkFBc0IsR0FBRyxJQUFJLHVCQUF1Qiw4QkFBOEIsaUJBQWlCLE9BQU8saUVBQWUsQ0FBQyxFQUFDO0FBQ3RpRSIsInNvdXJjZXMiOlsiL1VzZXJzL2EvRGVza3RvcC9QUk9KRVRTL2hhY2svZXRoZ2wvbm9kZV9tb2R1bGVzL2h0bWwtcGFyc2Utc3RyaW5naWZ5L2Rpc3QvaHRtbC1wYXJzZS1zdHJpbmdpZnkubW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlIGZyb21cInZvaWQtZWxlbWVudHNcIjt2YXIgdD0vXFxzKFteJ1wiL1xccz48XSs/KVtcXHMvPl18KFteXFxzPV0rKT1cXHM/KFwiLio/XCJ8Jy4qPycpL2c7ZnVuY3Rpb24gbihuKXt2YXIgcj17dHlwZTpcInRhZ1wiLG5hbWU6XCJcIix2b2lkRWxlbWVudDohMSxhdHRyczp7fSxjaGlsZHJlbjpbXX0saT1uLm1hdGNoKC88XFwvPyhbXlxcc10rPylbL1xccz5dLyk7aWYoaSYmKHIubmFtZT1pWzFdLChlW2lbMV1dfHxcIi9cIj09PW4uY2hhckF0KG4ubGVuZ3RoLTIpKSYmKHIudm9pZEVsZW1lbnQ9ITApLHIubmFtZS5zdGFydHNXaXRoKFwiIS0tXCIpKSl7dmFyIHM9bi5pbmRleE9mKFwiLS1cXHgzZVwiKTtyZXR1cm57dHlwZTpcImNvbW1lbnRcIixjb21tZW50Oi0xIT09cz9uLnNsaWNlKDQscyk6XCJcIn19Zm9yKHZhciBhPW5ldyBSZWdFeHAodCksYz1udWxsO251bGwhPT0oYz1hLmV4ZWMobikpOylpZihjWzBdLnRyaW0oKSlpZihjWzFdKXt2YXIgbz1jWzFdLnRyaW0oKSxsPVtvLFwiXCJdO28uaW5kZXhPZihcIj1cIik+LTEmJihsPW8uc3BsaXQoXCI9XCIpKSxyLmF0dHJzW2xbMF1dPWxbMV0sYS5sYXN0SW5kZXgtLX1lbHNlIGNbMl0mJihyLmF0dHJzW2NbMl1dPWNbM10udHJpbSgpLnN1YnN0cmluZygxLGNbM10ubGVuZ3RoLTEpKTtyZXR1cm4gcn12YXIgcj0vPFthLXpBLVowLTlcXC1cXCFcXC9dKD86XCJbXlwiXSpcInwnW14nXSonfFteJ1wiPl0pKj4vZyxpPS9eXFxzKiQvLHM9T2JqZWN0LmNyZWF0ZShudWxsKTtmdW5jdGlvbiBhKGUsdCl7c3dpdGNoKHQudHlwZSl7Y2FzZVwidGV4dFwiOnJldHVybiBlK3QuY29udGVudDtjYXNlXCJ0YWdcIjpyZXR1cm4gZSs9XCI8XCIrdC5uYW1lKyh0LmF0dHJzP2Z1bmN0aW9uKGUpe3ZhciB0PVtdO2Zvcih2YXIgbiBpbiBlKXQucHVzaChuKyc9XCInK2Vbbl0rJ1wiJyk7cmV0dXJuIHQubGVuZ3RoP1wiIFwiK3Quam9pbihcIiBcIik6XCJcIn0odC5hdHRycyk6XCJcIikrKHQudm9pZEVsZW1lbnQ/XCIvPlwiOlwiPlwiKSx0LnZvaWRFbGVtZW50P2U6ZSt0LmNoaWxkcmVuLnJlZHVjZShhLFwiXCIpK1wiPC9cIit0Lm5hbWUrXCI+XCI7Y2FzZVwiY29tbWVudFwiOnJldHVybiBlK1wiXFx4M2MhLS1cIit0LmNvbW1lbnQrXCItLVxceDNlXCJ9fXZhciBjPXtwYXJzZTpmdW5jdGlvbihlLHQpe3R8fCh0PXt9KSx0LmNvbXBvbmVudHN8fCh0LmNvbXBvbmVudHM9cyk7dmFyIGEsYz1bXSxvPVtdLGw9LTEsbT0hMTtpZigwIT09ZS5pbmRleE9mKFwiPFwiKSl7dmFyIHU9ZS5pbmRleE9mKFwiPFwiKTtjLnB1c2goe3R5cGU6XCJ0ZXh0XCIsY29udGVudDotMT09PXU/ZTplLnN1YnN0cmluZygwLHUpfSl9cmV0dXJuIGUucmVwbGFjZShyLGZ1bmN0aW9uKHIscyl7aWYobSl7aWYociE9PVwiPC9cIithLm5hbWUrXCI+XCIpcmV0dXJuO209ITF9dmFyIHUsZj1cIi9cIiE9PXIuY2hhckF0KDEpLGg9ci5zdGFydHNXaXRoKFwiXFx4M2MhLS1cIikscD1zK3IubGVuZ3RoLGQ9ZS5jaGFyQXQocCk7aWYoaCl7dmFyIHY9bihyKTtyZXR1cm4gbDwwPyhjLnB1c2godiksYyk6KCh1PW9bbF0pLmNoaWxkcmVuLnB1c2godiksYyl9aWYoZiYmKGwrKyxcInRhZ1wiPT09KGE9bihyKSkudHlwZSYmdC5jb21wb25lbnRzW2EubmFtZV0mJihhLnR5cGU9XCJjb21wb25lbnRcIixtPSEwKSxhLnZvaWRFbGVtZW50fHxtfHwhZHx8XCI8XCI9PT1kfHxhLmNoaWxkcmVuLnB1c2goe3R5cGU6XCJ0ZXh0XCIsY29udGVudDplLnNsaWNlKHAsZS5pbmRleE9mKFwiPFwiLHApKX0pLDA9PT1sJiZjLnB1c2goYSksKHU9b1tsLTFdKSYmdS5jaGlsZHJlbi5wdXNoKGEpLG9bbF09YSksKCFmfHxhLnZvaWRFbGVtZW50KSYmKGw+LTEmJihhLnZvaWRFbGVtZW50fHxhLm5hbWU9PT1yLnNsaWNlKDIsLTEpKSYmKGwtLSxhPS0xPT09bD9jOm9bbF0pLCFtJiZcIjxcIiE9PWQmJmQpKXt1PS0xPT09bD9jOm9bbF0uY2hpbGRyZW47dmFyIHg9ZS5pbmRleE9mKFwiPFwiLHApLGc9ZS5zbGljZShwLC0xPT09eD92b2lkIDA6eCk7aS50ZXN0KGcpJiYoZz1cIiBcIiksKHg+LTEmJmwrdS5sZW5ndGg+PTB8fFwiIFwiIT09ZykmJnUucHVzaCh7dHlwZTpcInRleHRcIixjb250ZW50Omd9KX19KSxjfSxzdHJpbmdpZnk6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVkdWNlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUrYShcIlwiLHQpfSxcIlwiKX19O2V4cG9ydCBkZWZhdWx0IGM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odG1sLXBhcnNlLXN0cmluZ2lmeS5tb2R1bGUuanMubWFwXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/html-parse-stringify/dist/html-parse-stringify.module.js\n");

/***/ })

};
;