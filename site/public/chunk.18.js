webpackJsonp([18], {
  269: function(e, t, n) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function i(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
    var a,
      u,
      s,
      f = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        return function(t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t;
        };
      })(),
      c = (function(e, t) {
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })(
        [
          '\n      <x-layout title="define()">\n        <x-marked src="',
          '"></x-marked>\n      </x-layout>\n    '
        ],
        [
          '\n      <x-layout title="define()">\n        <x-marked src="',
          '"></x-marked>\n      </x-layout>\n    '
        ]
      );
    n(26), n(30);
    var l = n(7),
      p = n(22),
      d =
        (0, l.define)(
          ((s = u = (function(e) {
            function t() {
              return (
                o(this, t),
                r(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              i(t, e),
              f(t, [
                {
                  key: 'render',
                  value: function() {
                    return this.$(
                      c,
                      "\n          The `define()` function takes a custom element constructor and defines it using the value of the `static is` class property that you define on your element.\n\n          ```js\n          import { define } from 'skatejs';\n\n          export default define(\n            class extends HTMLElement {\n              static is = 'my-element';\n            }\n          );\n          ```\n\n          If you're into the whole decorator thing, you can also use it like one:\n\n          ```js\n          @define\n          export default class extends HTMLElement {\n            static is = 'my-element';\n          }\n          ```\n        "
                    );
                  }
                }
              ]),
              t
            );
          })(p.Component)),
          (u.is = 'x-pages-utils-define'),
          (a = s))
        ) || a;
    t.default = d;
  }
});
