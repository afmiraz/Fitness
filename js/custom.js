!function (e) {
  var r = {};function n(t) {
    if (r[t]) return r[t].exports;var o = r[t] = { i: t, l: !1, exports: {} };return e[t].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }n.m = e, n.c = r, n.d = function (e, r, t) {
    n.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, n.t = function (e, r) {
    if (1 & r && (e = n(e)), 8 & r) return e;if (4 & r && "object" == typeof e && e && e.__esModule) return e;var t = Object.create(null);if (n.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var o in e) n.d(t, o, function (r) {
      return e[r];
    }.bind(null, o));return t;
  }, n.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return n.d(r, "a", r), r;
  }, n.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, n.p = "", n(n.s = 0);
}([function (e, r, n) {
  var t = n(1),
      o = t.getEmbedOptions,
      i = t.embedOpacity,
      u = window.rendererData.spinner;i(u.id, u.color, u.backgroundColor);var a = window.rendererData,
      c = !1,
      d = !1,
      l = function () {
    var e = document.getElementById(a.spinner.id);e && (e.style.display = "none");
  },
      s = function () {
    document.getElementById(a.rootDomNode).style.opacity = 1;
  },
      f = function () {
    return c && d;
  };-1 !== window.location.search.indexOf("typeform-welcome=0") && (a.form.welcome_screens = []), -1 === window.location.search.indexOf("add-placeholder-ws") || a.form.welcome_screens || (a.form.welcome_screens = [{ ref: "placeholder-welcome-screen", title: a.form.title, properties: { show_button: !0 } }]), window.renderer.renderer({ domNode: document.getElementById(a.rootDomNode), form: a.form, messages: a.messages, trackingInfo: a.trackingInfo, stripeToken: a.stripeToken, isLivePreview: !1, onFormLoaded: function () {
      c = !0, f() && (l(), s());
    }, embedSettings: o(window.location.search), disableSubmit: window.location.search.includes(""), disableTracking: window.location.search.includes("disable-tracking=true"), accessScheduling: a.accessScheduling }), setTimeout(function () {
    l(), s();
  }, 5e3), setTimeout(function () {
    d = !0, f() && (l(), s());
  }, a.showBranding ? 2e3 : 0);
}, function (e, r) {
  var n = function () {
    return function (e, r) {
      if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return function (e, r) {
        var n = [],
            t = !0,
            o = !1,
            i = void 0;try {
          for (var u, a = e[Symbol.iterator](); !(t = (u = a.next()).done) && (n.push(u.value), !r || n.length !== r); t = !0);
        } catch (e) {
          o = !0, i = e;
        } finally {
          try {
            !t && a.return && a.return();
          } finally {
            if (o) throw i;
          }
        }return n;
      }(e, r);throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();var t = function (e) {
    var r = e.split("&").map(function (e) {
      var r = e.split("="),
          t = n(r, 2);return function (e, r, n) {
        return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
      }({}, t[0], t[1]);
    });return r.reduce(function (e, r) {
      return Object.assign(r, e);
    }, {});
  },
      o = { "embed-widget": "standard", "embed-fullpage": "fullpage", "popup-classic": "popup", "popup-drawer": "popup", "popup-blank": "popup" },
      i = { minimalFooter: { key: "embed-hide-footer", transformValue: function (e) {
        return "true" === e;
      } }, mode: { key: "typeform-embed", transformValue: function (e) {
        return o[e];
      } }, hideHeaders: { key: "embed-hide-headers", transformValue: function (e) {
        return "true" === e;
      } }, backgroundOpacity: { key: "embed-opacity", transformValue: function (e) {
        return r = 100, n = parseInt(e, 10), (u(n) ? r : n) / 100;var r, n;
      } } },
      u = function (e) {
    return e != e;
  };e.exports = { getEmbedOptions: function (e) {
      var r,
          n,
          o = t(e.substring(1));return r = function (e) {
        var r = e.key;return (0, e.transformValue)(o[r]);
      }, n = i, Object.keys(n).reduce(function (e, t) {
        return e[t] = r(n[t], t, n), e;
      }, {});
    }, embedOpacity: function (e, r, n) {
      var t = window.location.search.replace(/^.*embed-opacity=(\d+).*$/, "$1"),
          o = parseInt(t, 10) / 100;o = u(o) ? 1 : o;var i = document.getElementById(e);i && (i.style.background = "rgba(" + n.red + ", " + n.green + ", " + n.blue + ", " + o + ")", i.style.color = r);
    } };
}]);