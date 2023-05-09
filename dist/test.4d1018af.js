// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "\n.skin *{margin:0; padding:0; box-sizing: border-box;}\n.skin *::before, .skin *::after{box-sizing: border-box;}\n\n.skin {\n    position: relative;\n    border: 10px solid black;\n    width: 400px;\n    height: 456px;\n    left: 200px;\n    top: 10px;\n    z-index: 2;\n    border-radius: 240px 240px 194px 194px;\n    background: white;    \n}\n\n.ears{\n    background: black;\n    width: 71px;\n    height: 90px;\n    position: absolute;\n    top: 10px;\n    left: -5px;\n    z-index: 1;\n    border-radius: 50%;\n    box-shadow: 329px 0 0 0 black;\n}\n.left.hand{\n    border: 1px solid black;\n    width: 72px;\n    height: 72px;\n    position: absolute;\n    top: 250px;\n    left: -75px;\n    border-radius: 50%;\n    background: black;\n}\n.left.hand::before{\n    content: '';\n    display: block;\n    left: 3px;\n    top: -53px;\n    border: 35px solid;\n    border-color: transparent black black transparent;\n    position: absolute;\n}\n.right.hand{\n    width: 64px;\n    height: 126px;\n    top: 120px;\n    left: 370px;\n    position: absolute;\n    transform: rotate(40deg);\n    border-radius: 40px 49px 0 89px;\n    background: black;\n}\n.right.hand::before{\n    content: '';\n    position: absolute;\n    left: 30px;\n    top: 30px;\n    width:14px;\n    height: 25px;\n    border-radius: 8px 8px 0 16px;\n    transform: rotate(20deg);\n    background: red;\n}\n.right.hand::after{\n    content: '';\n    position: absolute;\n    width: 14px;\n    height: 25px;\n    left: 23px;\n    top: 34px;\n    border-radius: 8px 8px 16px 0;\n    transform: rotate(-70deg);\n    background: red;\n}\n\n.feet{\n    width:75px;\n    height: 110px;\n    top: 420px;\n    left: 95px;\n    position: absolute;\n    background: black;\n    border-radius: 20px 50% 10px 30px;\n}\n.feet::before{\n    content: '';\n    width:75px;\n    height: 110px;\n    left: 130px;\n    position: absolute;\n    background: black;\n    border-radius: 50% 20px 30px 10px;\n}\n.face{\n    width: 278px;\n    height: 230px;\n    border: 1px solid red;\n    top: 45px;\n    left: 52px;\n    position: absolute;\n    border-top-left-radius: 50% 60%;\n    border-top-right-radius: 50% 60%;\n    border-bottom-left-radius: 41% 42%;\n    border-bottom-right-radius: 41% 42%;\n    border: 5px solid blue;\n    box-shadow: \n      0 0 0 5px yellow,\n      0 0 0 10px black,\n      0 0 0 15px green,\n      0 0 0 20px red;\n}\n.eyes{\n    width: 70px;\n    height: 100px;\n    top: 100px;\n    left: 90px;\n    position: absolute;\n    border-radius: 50%;\n    transform: rotate(35deg);\n    background: black;\n}\n.eyes::before{\n    content: '';\n    width: 70px;\n    height: 100px;\n    background: black;\n    left: 110px;\n    top: -70px;\n    border-radius: 50%;\n    transform: rotate(-70deg);\n    position: absolute;\n}\n.nose{\n    width: 25px;\n    height: 16px;\n    position: absolute;\n    background: black;\n    top: 160px;\n    left: 180px;\n    border-radius: 5px 5px 50% 50%;\n}\n.mouth{\n    border: 2px solid black;\n    width: 30px;\n    height: 8px;\n    position: absolute;\n    top: 185px;\n    left: 178px;\n    border-radius: 0 0 50% 50%;\n    background: red;\n}\n.iris{\n    border: 5px solid white;\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    top: 130px;\n    left: 123px;\n    border-radius: 50%;\n    background: black;\n    box-shadow: 0 0 0 0 gray;\n    z-index: 3;\n}\n.iris::before{\n    content: '';\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background: black;\n    position: absolute;\n    border: 5px solid white;\n    left: 100px;\n    top: -5px;\n    box-shadow: 0 0 0 -5px cyan;\n}\n.highlight{\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: white;\n    left: 127px;\n    top: 139px;\n    position: absolute;\n    box-shadow: 120px 0 0 0 white;\n    z-index: 4;\n}";
exports.default = string;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = require("./css.js");

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  n: 1,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  init: function init() {
    player.ui.demo.innerText = _css2.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substring(0, player.n);
    player.play();
    player.bindEvents();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;
    if (player.n > _css2.default.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = _css2.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substring(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};

player.init();
},{"./css.js":"css.js"}],"C:\\Users\\yang\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '61355' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\yang\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.4d1018af.map