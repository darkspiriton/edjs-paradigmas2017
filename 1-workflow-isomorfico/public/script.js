!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";function division(a,b){return a/b}function modulo(a,b){return a%b}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=division,exports.modulo=modulo},{}],2:[function(require,module,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _suma=require("./suma"),_resta=require("./resta"),_resta2=_interopRequireDefault(_resta),_division=require("./division"),_division2=_interopRequireDefault(_division),_producto=require("./producto"),c=(_interopRequireDefault(_producto),console.log);c((0,_suma.suma)(6,7)),c((0,_resta2.default)(16,27)),c((0,_division2.default)(100,4)),c((0,_division.modulo)(100,33)),c((0,_producto.cuadrado)(5)),c((0,_producto.potencia)(2,5)),c((0,_producto.cuadrado)(9))},{"./division":1,"./producto":3,"./resta":4,"./suma":5}],3:[function(require,module,exports){"use strict";function producto(a,b){return a*b}function cuadrado(a){return a*a}function potencia(b,e){return Math.pow(b,e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=producto,exports.cuadrado=cuadrado,exports.potencia=potencia},{}],4:[function(require,module,exports){"use strict";function resta(a,b){return a-b}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=resta},{}],5:[function(require,module,exports){"use strict";function suma(a,b){return a+b}Object.defineProperty(exports,"__esModule",{value:!0}),exports.suma=suma},{}]},{},[2]);