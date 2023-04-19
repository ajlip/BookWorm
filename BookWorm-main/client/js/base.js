/*!
 * Bootstrap v5.2.2 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e(require("@popperjs/core")))
        : "function" == typeof define && define.amd
            ? define(["@popperjs/core"], e)
            : ((t =
                "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
                e(t.Popper));
})(this, function (t) {
    "use strict";
    function e(t) {
        if (t && t.__esModule) return t;
        const e = Object.create(null, {
            [Symbol.toStringTag]: { value: "Module" },
        });
        if (t)
            for (const i in t)
                if ("default" !== i) {
                    const s = Object.getOwnPropertyDescriptor(t, i);
                    Object.defineProperty(
                        e,
                        i,
                        s.get ? s : { enumerable: !0, get: () => t[i] }
                    );
                }
        return (e.default = t), Object.freeze(e);
    }
    const i = e(t),
        s = "transitionend",
        n = (t) => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
                    (e = i && "#" !== i ? i.trim() : null);
            }
            return e;
        },
        o = (t) => {
            const e = n(t);
            return e && document.querySelector(e) ? e : null;
        },
        r = (t) => {
            const e = n(t);
            return e ? document.querySelector(e) : null;
        },
        a = (t) => {
            t.dispatchEvent(new Event(s));
        },
        l = (t) =>
            !(!t || "object" != typeof t) &&
            (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        c = (t) =>
            l(t)
                ? t.jquery
                    ? t[0]
                    : t
                : "string" == typeof t && t.length > 0
                    ? document.querySelector(t)
                    : null,
        h = (t) => {
            if (!l(t) || 0 === t.getClientRects().length) return !1;
            const e =
                    "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                i = t.closest("details:not([open])");
            if (!i) return e;
            if (i !== t) {
                const e = t.closest("summary");
                if (e && e.parentNode !== i) return !1;
                if (null === e) return !1;
            }
            return e;
        },
        d = (t) =>
            !t ||
            t.nodeType !== Node.ELEMENT_NODE ||
            !!t.classList.contains("disabled") ||
            (void 0 !== t.disabled
                ? t.disabled
                : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        u = (t) => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot
                ? t
                : t.parentNode
                    ? u(t.parentNode)
                    : null;
        },
        _ = () => {},
        g = (t) => {
            t.offsetHeight;
        },
        f = () =>
            window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
                ? window.jQuery
                : null,
        p = [],
        m = () => "rtl" === document.documentElement.dir,
        b = (t) => {
            var e;
            (e = () => {
                const e = f();
                if (e) {
                    const i = t.NAME,
                        s = e.fn[i];
                    (e.fn[i] = t.jQueryInterface),
                        (e.fn[i].Constructor = t),
                        (e.fn[i].noConflict = () => ((e.fn[i] = s), t.jQueryInterface));
                }
            }),
                "loading" === document.readyState
                    ? (p.length ||
                    document.addEventListener("DOMContentLoaded", () => {
                        for (const t of p) t();
                    }),
                        p.push(e))
                    : e();
        },
        v = (t) => {
            "function" == typeof t && t();
        },
        y = (t, e, i = !0) => {
            if (!i) return void v(t);
            const n =
                ((t) => {
                    if (!t) return 0;
                    let { transitionDuration: e, transitionDelay: i } =
                        window.getComputedStyle(t);
                    const s = Number.parseFloat(e),
                        n = Number.parseFloat(i);
                    return s || n
                        ? ((e = e.split(",")[0]),
                            (i = i.split(",")[0]),
                        1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
                        : 0;
                })(e) + 5;
            let o = !1;
            const r = ({ target: i }) => {
                i === e && ((o = !0), e.removeEventListener(s, r), v(t));
            };
            e.addEventListener(s, r),
                setTimeout(() => {
                    o || a(e);
                }, n);
        },
        w = (t, e, i, s) => {
            const n = t.length;
            let o = t.indexOf(e);
            return -1 === o
                ? !i && s
                    ? t[n - 1]
                    : t[0]
                : ((o += i ? 1 : -1),
                s && (o = (o + n) % n),
                    t[Math.max(0, Math.min(o, n - 1))]);
        },
        A = /[^.]*(?=\..*)\.|.*/,
        E = /\..*/,
        C = /::\d+$/,
        T = {};
    let k = 1;
    const L = { mouseenter: "mouseover", mouseleave: "mouseout" },
        O = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
        ]);
    function I(t, e) {
        return (e && `${e}::${k++}`) || t.uidEvent || k++;
    }
    function S(t) {
        const e = I(t);
        return (t.uidEvent = e), (T[e] = T[e] || {}), T[e];
    }
    function D(t, e, i = null) {
        return Object.values(t).find(
            (t) => t.callable === e && t.delegationSelector === i
        );
    }
    function N(t, e, i) {
        const s = "string" == typeof e,
            n = s ? i : e || i;
        let o = j(t);
        return O.has(o) || (o = t), [s, n, o];
    }
    function P(t, e, i, s, n) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = N(e, i, s);
        if (e in L) {
            const t = (t) =>
                function (e) {
                    if (
                        !e.relatedTarget ||
                        (e.relatedTarget !== e.delegateTarget &&
                            !e.delegateTarget.contains(e.relatedTarget))
                    )
                        return t.call(this, e);
                };
            r = t(r);
        }
        const l = S(t),
            c = l[a] || (l[a] = {}),
            h = D(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && n);
        const d = I(r, e.replace(A, "")),
            u = o
                ? (function (t, e, i) {
                    return function s(n) {
                        const o = t.querySelectorAll(e);
                        for (let { target: r } = n; r && r !== this; r = r.parentNode)
                            for (const a of o)
                                if (a === r)
                                    return (
                                        F(n, { delegateTarget: r }),
                                        s.oneOff && $.off(t, n.type, e, i),
                                            i.apply(r, [n])
                                    );
                    };
                })(t, i, r)
                : (function (t, e) {
                    return function i(s) {
                        return (
                            F(s, { delegateTarget: t }),
                            i.oneOff && $.off(t, s.type, e),
                                e.apply(t, [s])
                        );
                    };
                })(t, r);
        (u.delegationSelector = o ? i : null),
            (u.callable = r),
            (u.oneOff = n),
            (u.uidEvent = d),
            (c[d] = u),
            t.addEventListener(a, u, o);
    }
    function x(t, e, i, s, n) {
        const o = D(e[i], s, n);
        o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]);
    }
    function M(t, e, i, s) {
        const n = e[i] || {};
        for (const o of Object.keys(n))
            if (o.includes(s)) {
                const s = n[o];
                x(t, e, i, s.callable, s.delegationSelector);
            }
    }
    function j(t) {
        return (t = t.replace(E, "")), L[t] || t;
    }
    const $ = {
        on(t, e, i, s) {
            P(t, e, i, s, !1);
        },
        one(t, e, i, s) {
            P(t, e, i, s, !0);
        },
        off(t, e, i, s) {
            if ("string" != typeof e || !t) return;
            const [n, o, r] = N(e, i, s),
                a = r !== e,
                l = S(t),
                c = l[r] || {},
                h = e.startsWith(".");
            if (void 0 === o) {
                if (h) for (const i of Object.keys(l)) M(t, l, i, e.slice(1));
                for (const i of Object.keys(c)) {
                    const s = i.replace(C, "");
                    if (!a || e.includes(s)) {
                        const e = c[i];
                        x(t, l, r, e.callable, e.delegationSelector);
                    }
                }
            } else {
                if (!Object.keys(c).length) return;
                x(t, l, r, o, n ? i : null);
            }
        },
        trigger(t, e, i) {
            if ("string" != typeof e || !t) return null;
            const s = f();
            let n = null,
                o = !0,
                r = !0,
                a = !1;
            e !== j(e) &&
            s &&
            ((n = s.Event(e, i)),
                s(t).trigger(n),
                (o = !n.isPropagationStopped()),
                (r = !n.isImmediatePropagationStopped()),
                (a = n.isDefaultPrevented()));
            let l = new Event(e, { bubbles: o, cancelable: !0 });
            return (
                (l = F(l, i)),
                a && l.preventDefault(),
                r && t.dispatchEvent(l),
                l.defaultPrevented && n && n.preventDefault(),
                    l
            );
        },
    };
    function F(t, e) {
        for (const [i, s] of Object.entries(e || {}))
            try {
                t[i] = s;
            } catch (e) {
                Object.defineProperty(t, i, { configurable: !0, get: () => s });
            }
        return t;
    }
    const z = new Map(),
        H = {
            set(t, e, i) {
                z.has(t) || z.set(t, new Map());
                const s = z.get(t);
                s.has(e) || 0 === s.size
                    ? s.set(e, i)
                    : console.error(
                        `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                            Array.from(s.keys())[0]
                        }.`
                    );
            },
            get: (t, e) => (z.has(t) && z.get(t).get(e)) || null,
            remove(t, e) {
                if (!z.has(t)) return;
                const i = z.get(t);
                i.delete(e), 0 === i.size && z.delete(t);
            },
        };
    function q(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t));
        } catch (e) {
            return t;
        }
    }
    function B(t) {
        return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
    }
    const W = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${B(e)}`, i);
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${B(e)}`);
        },
        getDataAttributes(t) {
            if (!t) return {};
            const e = {},
                i = Object.keys(t.dataset).filter(
                    (t) => t.startsWith("bs") && !t.startsWith("bsConfig")
                );
            for (const s of i) {
                let i = s.replace(/^bs/, "");
                (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                    (e[i] = q(t.dataset[s]));
            }
            return e;
        },
        getDataAttribute: (t, e) => q(t.getAttribute(`data-bs-${B(e)}`)),
    };
    class R {
        static get Default() {
            return {};
        }
        static get DefaultType() {
            return {};
        }
        static get NAME() {
            throw new Error(
                'You have to implement the static method "NAME", for each component!'
            );
        }
        _getConfig(t) {
            return (
                (t = this._mergeConfigObj(t)),
                    (t = this._configAfterMerge(t)),
                    this._typeCheckConfig(t),
                    t
            );
        }
        _configAfterMerge(t) {
            return t;
        }
        _mergeConfigObj(t, e) {
            const i = l(e) ? W.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ...("object" == typeof i ? i : {}),
                ...(l(e) ? W.getDataAttributes(e) : {}),
                ...("object" == typeof t ? t : {}),
            };
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const s of Object.keys(e)) {
                const n = e[s],
                    o = t[s],
                    r = l(o)
                        ? "element"
                        : null == (i = o)
                            ? `${i}`
                            : Object.prototype.toString
                                .call(i)
                                .match(/\s([a-z]+)/i)[1]
                                .toLowerCase();
                if (!new RegExp(n).test(r))
                    throw new TypeError(
                        `${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`
                    );
            }
            var i;
        }
    }
    class V extends R {
        constructor(t, e) {
            super(),
            (t = c(t)) &&
            ((this._element = t),
                (this._config = this._getConfig(e)),
                H.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            H.remove(this._element, this.constructor.DATA_KEY),
                $.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
        }
        _queueCallback(t, e, i = !0) {
            y(t, e, i);
        }
        _getConfig(t) {
            return (
                (t = this._mergeConfigObj(t, this._element)),
                    (t = this._configAfterMerge(t)),
                    this._typeCheckConfig(t),
                    t
            );
        }
        static getInstance(t) {
            return H.get(c(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return (
                this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
            );
        }
        static get VERSION() {
            return "5.2.2";
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`;
        }
    }
    const K = (t, e = "hide") => {
        const i = `click.dismiss${t.EVENT_KEY}`,
            s = t.NAME;
        $.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
            if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), d(this)))
                return;
            const n = r(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(n)[e]();
        });
    };
    class Q extends V {
        static get NAME() {
            return "alert";
        }
        close() {
            if ($.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t);
        }
        _destroyElement() {
            this._element.remove(),
                $.trigger(this._element, "closed.bs.alert"),
                this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Q.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    K(Q, "close"), b(Q);
    const X = '[data-bs-toggle="button"]';
    class Y extends V {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute(
                "aria-pressed",
                this._element.classList.toggle("active")
            );
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Y.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    $.on(document, "click.bs.button.data-api", X, (t) => {
        t.preventDefault();
        const e = t.target.closest(X);
        Y.getOrCreateInstance(e).toggle();
    }),
        b(Y);
    const U = {
            find: (t, e = document.documentElement) =>
                [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) =>
                Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
            parents(t, e) {
                const i = [];
                let s = t.parentNode.closest(e);
                for (; s; ) i.push(s), (s = s.parentNode.closest(e));
                return i;
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i; ) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling;
                }
                return [];
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i; ) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling;
                }
                return [];
            },
            focusableChildren(t) {
                const e = [
                    "a",
                    "button",
                    "input",
                    "textarea",
                    "select",
                    "details",
                    "[tabindex]",
                    '[contenteditable="true"]',
                ]
                    .map((t) => `${t}:not([tabindex^="-"])`)
                    .join(",");
                return this.find(e, t).filter((t) => !d(t) && h(t));
            },
        },
        G = { endCallback: null, leftCallback: null, rightCallback: null },
        J = {
            endCallback: "(function|null)",
            leftCallback: "(function|null)",
            rightCallback: "(function|null)",
        };
    class Z extends R {
        constructor(t, e) {
            super(),
                (this._element = t),
            t &&
            Z.isSupported() &&
            ((this._config = this._getConfig(e)),
                (this._deltaX = 0),
                (this._supportPointerEvents = Boolean(window.PointerEvent)),
                this._initEvents());
        }
        static get Default() {
            return G;
        }
        static get DefaultType() {
            return J;
        }
        static get NAME() {
            return "swipe";
        }
        dispose() {
            $.off(this._element, ".bs.swipe");
        }
        _start(t) {
            this._supportPointerEvents
                ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
                : (this._deltaX = t.touches[0].clientX);
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) &&
            (this._deltaX = t.clientX - this._deltaX),
                this._handleSwipe(),
                v(this._config.endCallback);
        }
        _move(t) {
            this._deltaX =
                t.touches && t.touches.length > 1
                    ? 0
                    : t.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            (this._deltaX = 0),
            e && v(e > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
            this._supportPointerEvents
                ? ($.on(this._element, "pointerdown.bs.swipe", (t) => this._start(t)),
                    $.on(this._element, "pointerup.bs.swipe", (t) => this._end(t)),
                    this._element.classList.add("pointer-event"))
                : ($.on(this._element, "touchstart.bs.swipe", (t) => this._start(t)),
                    $.on(this._element, "touchmove.bs.swipe", (t) => this._move(t)),
                    $.on(this._element, "touchend.bs.swipe", (t) => this._end(t)));
        }
        _eventIsPointerPenTouch(t) {
            return (
                this._supportPointerEvents &&
                ("pen" === t.pointerType || "touch" === t.pointerType)
            );
        }
        static isSupported() {
            return (
                "ontouchstart" in document.documentElement ||
                navigator.maxTouchPoints > 0
            );
        }
    }
    const tt = "next",
        et = "prev",
        it = "left",
        st = "right",
        nt = "slid.bs.carousel",
        ot = "carousel",
        rt = "active",
        at = { ArrowLeft: st, ArrowRight: it },
        lt = {
            interval: 5e3,
            keyboard: !0,
            pause: "hover",
            ride: !1,
            touch: !0,
            wrap: !0,
        },
        ct = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean",
        };
    class ht extends V {
        constructor(t, e) {
            super(t, e),
                (this._interval = null),
                (this._activeElement = null),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._swipeHelper = null),
                (this._indicatorsElement = U.findOne(
                    ".carousel-indicators",
                    this._element
                )),
                this._addEventListeners(),
            this._config.ride === ot && this.cycle();
        }
        static get Default() {
            return lt;
        }
        static get DefaultType() {
            return ct;
        }
        static get NAME() {
            return "carousel";
        }
        next() {
            this._slide(tt);
        }
        nextWhenVisible() {
            !document.hidden && h(this._element) && this.next();
        }
        prev() {
            this._slide(et);
        }
        pause() {
            this._isSliding && a(this._element), this._clearInterval();
        }
        cycle() {
            this._clearInterval(),
                this._updateInterval(),
                (this._interval = setInterval(
                    () => this.nextWhenVisible(),
                    this._config.interval
                ));
        }
        _maybeEnableCycle() {
            this._config.ride &&
            (this._isSliding
                ? $.one(this._element, nt, () => this.cycle())
                : this.cycle());
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding)
                return void $.one(this._element, nt, () => this.to(t));
            const i = this._getItemIndex(this._getActive());
            if (i === t) return;
            const s = t > i ? tt : et;
            this._slide(s, e[t]);
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(t) {
            return (t.defaultInterval = t.interval), t;
        }
        _addEventListeners() {
            this._config.keyboard &&
            $.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
            "hover" === this._config.pause &&
            ($.on(this._element, "mouseenter.bs.carousel", () => this.pause()),
                $.on(this._element, "mouseleave.bs.carousel", () =>
                    this._maybeEnableCycle()
                )),
            this._config.touch && Z.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            for (const t of U.find(".carousel-item img", this._element))
                $.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
            const t = {
                leftCallback: () => this._slide(this._directionToOrder(it)),
                rightCallback: () => this._slide(this._directionToOrder(st)),
                endCallback: () => {
                    "hover" === this._config.pause &&
                    (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                        (this.touchTimeout = setTimeout(
                            () => this._maybeEnableCycle(),
                            500 + this._config.interval
                        )));
                },
            };
            this._swipeHelper = new Z(this._element, t);
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = at[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t);
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = U.findOne(".active", this._indicatorsElement);
            e.classList.remove(rt), e.removeAttribute("aria-current");
            const i = U.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(rt), i.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval;
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            const i = this._getActive(),
                s = t === tt,
                n = e || w(this._getItems(), i, s, this._config.wrap);
            if (n === i) return;
            const o = this._getItemIndex(n),
                r = (e) =>
                    $.trigger(this._element, e, {
                        relatedTarget: n,
                        direction: this._orderToDirection(t),
                        from: this._getItemIndex(i),
                        to: o,
                    });
            if (r("slide.bs.carousel").defaultPrevented) return;
            if (!i || !n) return;
            const a = Boolean(this._interval);
            this.pause(),
                (this._isSliding = !0),
                this._setActiveIndicatorElement(o),
                (this._activeElement = n);
            const l = s ? "carousel-item-start" : "carousel-item-end",
                c = s ? "carousel-item-next" : "carousel-item-prev";
            n.classList.add(c),
                g(n),
                i.classList.add(l),
                n.classList.add(l),
                this._queueCallback(
                    () => {
                        n.classList.remove(l, c),
                            n.classList.add(rt),
                            i.classList.remove(rt, c, l),
                            (this._isSliding = !1),
                            r(nt);
                    },
                    i,
                    this._isAnimated()
                ),
            a && this.cycle();
        }
        _isAnimated() {
            return this._element.classList.contains("slide");
        }
        _getActive() {
            return U.findOne(".active.carousel-item", this._element);
        }
        _getItems() {
            return U.find(".carousel-item", this._element);
        }
        _clearInterval() {
            this._interval &&
            (clearInterval(this._interval), (this._interval = null));
        }
        _directionToOrder(t) {
            return m() ? (t === it ? et : tt) : t === it ? tt : et;
        }
        _orderToDirection(t) {
            return m() ? (t === et ? it : st) : t === et ? st : it;
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = ht.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                            throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                } else e.to(t);
            });
        }
    }
    $.on(
        document,
        "click.bs.carousel.data-api",
        "[data-bs-slide], [data-bs-slide-to]",
        function (t) {
            const e = r(this);
            if (!e || !e.classList.contains(ot)) return;
            t.preventDefault();
            const i = ht.getOrCreateInstance(e),
                s = this.getAttribute("data-bs-slide-to");
            return s
                ? (i.to(s), void i._maybeEnableCycle())
                : "next" === W.getDataAttribute(this, "slide")
                    ? (i.next(), void i._maybeEnableCycle())
                    : (i.prev(), void i._maybeEnableCycle());
        }
    ),
        $.on(window, "load.bs.carousel.data-api", () => {
            const t = U.find('[data-bs-ride="carousel"]');
            for (const e of t) ht.getOrCreateInstance(e);
        }),
        b(ht);
    const dt = "show",
        ut = "collapse",
        _t = "collapsing",
        gt = '[data-bs-toggle="collapse"]',
        ft = { parent: null, toggle: !0 },
        pt = { parent: "(null|element)", toggle: "boolean" };
    class mt extends V {
        constructor(t, e) {
            super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
            const i = U.find(gt);
            for (const t of i) {
                const e = o(t),
                    i = U.find(e).filter((t) => t === this._element);
                null !== e && i.length && this._triggerArray.push(t);
            }
            this._initializeChildren(),
            this._config.parent ||
            this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle();
        }
        static get Default() {
            return ft;
        }
        static get DefaultType() {
            return pt;
        }
        static get NAME() {
            return "collapse";
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (
                (this._config.parent &&
                (t = this._getFirstLevelChildren(
                    ".collapse.show, .collapse.collapsing"
                )
                    .filter((t) => t !== this._element)
                    .map((t) => mt.getOrCreateInstance(t, { toggle: !1 }))),
                t.length && t[0]._isTransitioning)
            )
                return;
            if ($.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            for (const e of t) e.hide();
            const e = this._getDimension();
            this._element.classList.remove(ut),
                this._element.classList.add(_t),
                (this._element.style[e] = 0),
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                (this._isTransitioning = !0);
            const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback(
                () => {
                    (this._isTransitioning = !1),
                        this._element.classList.remove(_t),
                        this._element.classList.add(ut, dt),
                        (this._element.style[e] = ""),
                        $.trigger(this._element, "shown.bs.collapse");
                },
                this._element,
                !0
            ),
                (this._element.style[e] = `${this._element[i]}px`);
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            (this._element.style[t] = `${
                this._element.getBoundingClientRect()[t]
            }px`),
                g(this._element),
                this._element.classList.add(_t),
                this._element.classList.remove(ut, dt);
            for (const t of this._triggerArray) {
                const e = r(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
            }
            (this._isTransitioning = !0),
                (this._element.style[t] = ""),
                this._queueCallback(
                    () => {
                        (this._isTransitioning = !1),
                            this._element.classList.remove(_t),
                            this._element.classList.add(ut),
                            $.trigger(this._element, "hidden.bs.collapse");
                    },
                    this._element,
                    !0
                );
        }
        _isShown(t = this._element) {
            return t.classList.contains(dt);
        }
        _configAfterMerge(t) {
            return (t.toggle = Boolean(t.toggle)), (t.parent = c(t.parent)), t;
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal")
                ? "width"
                : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(gt);
            for (const e of t) {
                const t = r(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t));
            }
        }
        _getFirstLevelChildren(t) {
            const e = U.find(":scope .collapse .collapse", this._config.parent);
            return U.find(t, this._config.parent).filter((t) => !e.includes(t));
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length)
                for (const i of t)
                    i.classList.toggle("collapsed", !e),
                        i.setAttribute("aria-expanded", e);
        }
        static jQueryInterface(t) {
            const e = {};
            return (
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
                    this.each(function () {
                        const i = mt.getOrCreateInstance(this, e);
                        if ("string" == typeof t) {
                            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                            i[t]();
                        }
                    })
            );
        }
    }
    $.on(document, "click.bs.collapse.data-api", gt, function (t) {
        ("A" === t.target.tagName ||
            (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
        t.preventDefault();
        const e = o(this),
            i = U.find(e);
        for (const t of i) mt.getOrCreateInstance(t, { toggle: !1 }).toggle();
    }),
        b(mt);
    const bt = "dropdown",
        vt = "ArrowUp",
        yt = "ArrowDown",
        wt = "click.bs.dropdown.data-api",
        At = "keydown.bs.dropdown.data-api",
        Et = "show",
        Ct = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Tt = `${Ct}.show`,
        kt = ".dropdown-menu",
        Lt = m() ? "top-end" : "top-start",
        Ot = m() ? "top-start" : "top-end",
        It = m() ? "bottom-end" : "bottom-start",
        St = m() ? "bottom-start" : "bottom-end",
        Dt = m() ? "left-start" : "right-start",
        Nt = m() ? "right-start" : "left-start",
        Pt = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle",
        },
        xt = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)",
        };
    class Mt extends V {
        constructor(t, e) {
            super(t, e),
                (this._popper = null),
                (this._parent = this._element.parentNode),
                (this._menu =
                    U.next(this._element, kt)[0] ||
                    U.prev(this._element, kt)[0] ||
                    U.findOne(kt, this._parent)),
                (this._inNavbar = this._detectNavbar());
        }
        static get Default() {
            return Pt;
        }
        static get DefaultType() {
            return xt;
        }
        static get NAME() {
            return bt;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (d(this._element) || this._isShown()) return;
            const t = { relatedTarget: this._element };
            if (!$.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                if (
                    (this._createPopper(),
                    "ontouchstart" in document.documentElement &&
                    !this._parent.closest(".navbar-nav"))
                )
                    for (const t of [].concat(...document.body.children))
                        $.on(t, "mouseover", _);
                this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    this._menu.classList.add(Et),
                    this._element.classList.add(Et),
                    $.trigger(this._element, "shown.bs.dropdown", t);
            }
        }
        hide() {
            if (d(this._element) || !this._isShown()) return;
            const t = { relatedTarget: this._element };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            (this._inNavbar = this._detectNavbar()),
            this._popper && this._popper.update();
        }
        _completeHide(t) {
            if (!$.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                    for (const t of [].concat(...document.body.children))
                        $.off(t, "mouseover", _);
                this._popper && this._popper.destroy(),
                    this._menu.classList.remove(Et),
                    this._element.classList.remove(Et),
                    this._element.setAttribute("aria-expanded", "false"),
                    W.removeDataAttribute(this._menu, "popper"),
                    $.trigger(this._element, "hidden.bs.dropdown", t);
            }
        }
        _getConfig(t) {
            if (
                "object" == typeof (t = super._getConfig(t)).reference &&
                !l(t.reference) &&
                "function" != typeof t.reference.getBoundingClientRect
            )
                throw new TypeError(
                    `${bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                );
            return t;
        }
        _createPopper() {
            if (void 0 === i)
                throw new TypeError(
                    "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                );
            let t = this._element;
            "parent" === this._config.reference
                ? (t = this._parent)
                : l(this._config.reference)
                    ? (t = c(this._config.reference))
                    : "object" == typeof this._config.reference &&
                    (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = i.createPopper(t, this._menu, e);
        }
        _isShown() {
            return this._menu.classList.contains(Et);
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return Dt;
            if (t.classList.contains("dropstart")) return Nt;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e =
                "end" ===
                getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? (e ? Ot : Lt) : e ? St : It;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t
                ? t.split(",").map((t) => Number.parseInt(t, 10))
                : "function" == typeof t
                    ? (e) => t(e, this._element)
                    : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                ],
            };
            return (
                (this._inNavbar || "static" === this._config.display) &&
                (W.setDataAttribute(this._menu, "popper", "static"),
                    (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
                    {
                        ...t,
                        ...("function" == typeof this._config.popperConfig
                            ? this._config.popperConfig(t)
                            : this._config.popperConfig),
                    }
            );
        }
        _selectMenuItem({ key: t, target: e }) {
            const i = U.find(
                ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                this._menu
            ).filter((t) => h(t));
            i.length && w(i, e, t === yt, !i.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Mt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
            const e = U.find(Tt);
            for (const i of e) {
                const e = Mt.getInstance(i);
                if (!e || !1 === e._config.autoClose) continue;
                const s = t.composedPath(),
                    n = s.includes(e._menu);
                if (
                    s.includes(e._element) ||
                    ("inside" === e._config.autoClose && !n) ||
                    ("outside" === e._config.autoClose && n)
                )
                    continue;
                if (
                    e._menu.contains(t.target) &&
                    (("keyup" === t.type && "Tab" === t.key) ||
                        /input|select|option|textarea|form/i.test(t.target.tagName))
                )
                    continue;
                const o = { relatedTarget: e._element };
                "click" === t.type && (o.clickEvent = t), e._completeHide(o);
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName),
                i = "Escape" === t.key,
                s = [vt, yt].includes(t.key);
            if (!s && !i) return;
            if (e && !i) return;
            t.preventDefault();
            const n = this.matches(Ct)
                    ? this
                    : U.prev(this, Ct)[0] ||
                    U.next(this, Ct)[0] ||
                    U.findOne(Ct, t.delegateTarget.parentNode),
                o = Mt.getOrCreateInstance(n);
            if (s) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), n.focus());
        }
    }
    $.on(document, At, Ct, Mt.dataApiKeydownHandler),
        $.on(document, At, kt, Mt.dataApiKeydownHandler),
        $.on(document, wt, Mt.clearMenus),
        $.on(document, "keyup.bs.dropdown.data-api", Mt.clearMenus),
        $.on(document, wt, Ct, function (t) {
            t.preventDefault(), Mt.getOrCreateInstance(this).toggle();
        }),
        b(Mt);
    const jt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        $t = ".sticky-top",
        Ft = "padding-right",
        zt = "margin-right";
    class Ht {
        constructor() {
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
                this._setElementAttributes(this._element, Ft, (e) => e + t),
                this._setElementAttributes(jt, Ft, (e) => e + t),
                this._setElementAttributes($t, zt, (e) => e - t);
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, Ft),
                this._resetElementAttributes(jt, Ft),
                this._resetElementAttributes($t, zt);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(t, e, i) {
            const s = this.getWidth();
            this._applyManipulationCallback(t, (t) => {
                if (t !== this._element && window.innerWidth > t.clientWidth + s)
                    return;
                this._saveInitialAttribute(t, e);
                const n = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(n))}px`);
            });
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && W.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t) => {
                const i = W.getDataAttribute(t, e);
                null !== i
                    ? (W.removeDataAttribute(t, e), t.style.setProperty(e, i))
                    : t.style.removeProperty(e);
            });
        }
        _applyManipulationCallback(t, e) {
            if (l(t)) e(t);
            else for (const i of U.find(t, this._element)) e(i);
        }
    }
    const qt = "show",
        Bt = "mousedown.bs.backdrop",
        Wt = {
            className: "modal-backdrop",
            clickCallback: null,
            isAnimated: !1,
            isVisible: !0,
            rootElement: "body",
        },
        Rt = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)",
        };
    class Vt extends R {
        constructor(t) {
            super(),
                (this._config = this._getConfig(t)),
                (this._isAppended = !1),
                (this._element = null);
        }
        static get Default() {
            return Wt;
        }
        static get DefaultType() {
            return Rt;
        }
        static get NAME() {
            return "backdrop";
        }
        show(t) {
            if (!this._config.isVisible) return void v(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && g(e),
                e.classList.add(qt),
                this._emulateAnimation(() => {
                    v(t);
                });
        }
        hide(t) {
            this._config.isVisible
                ? (this._getElement().classList.remove(qt),
                    this._emulateAnimation(() => {
                        this.dispose(), v(t);
                    }))
                : v(t);
        }
        dispose() {
            this._isAppended &&
            ($.off(this._element, Bt),
                this._element.remove(),
                (this._isAppended = !1));
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                (t.className = this._config.className),
                this._config.isAnimated && t.classList.add("fade"),
                    (this._element = t);
            }
            return this._element;
        }
        _configAfterMerge(t) {
            return (t.rootElement = c(t.rootElement)), t;
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t),
                $.on(t, Bt, () => {
                    v(this._config.clickCallback);
                }),
                (this._isAppended = !0);
        }
        _emulateAnimation(t) {
            y(t, this._getElement(), this._config.isAnimated);
        }
    }
    const Kt = ".bs.focustrap",
        Qt = "backward",
        Xt = { autofocus: !0, trapElement: null },
        Yt = { autofocus: "boolean", trapElement: "element" };
    class Ut extends R {
        constructor(t) {
            super(),
                (this._config = this._getConfig(t)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null);
        }
        static get Default() {
            return Xt;
        }
        static get DefaultType() {
            return Yt;
        }
        static get NAME() {
            return "focustrap";
        }
        activate() {
            this._isActive ||
            (this._config.autofocus && this._config.trapElement.focus(),
                $.off(document, Kt),
                $.on(document, "focusin.bs.focustrap", (t) => this._handleFocusin(t)),
                $.on(document, "keydown.tab.bs.focustrap", (t) =>
                    this._handleKeydown(t)
                ),
                (this._isActive = !0));
        }
        deactivate() {
            this._isActive && ((this._isActive = !1), $.off(document, Kt));
        }
        _handleFocusin(t) {
            const { trapElement: e } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target))
                return;
            const i = U.focusableChildren(e);
            0 === i.length
                ? e.focus()
                : this._lastTabNavDirection === Qt
                    ? i[i.length - 1].focus()
                    : i[0].focus();
        }
        _handleKeydown(t) {
            "Tab" === t.key &&
            (this._lastTabNavDirection = t.shiftKey ? Qt : "forward");
        }
    }
    const Gt = "hidden.bs.modal",
        Jt = "show.bs.modal",
        Zt = "modal-open",
        te = "show",
        ee = "modal-static",
        ie = { backdrop: !0, focus: !0, keyboard: !0 },
        se = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean",
        };
    class ne extends V {
        constructor(t, e) {
            super(t, e),
                (this._dialog = U.findOne(".modal-dialog", this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new Ht()),
                this._addEventListeners();
        }
        static get Default() {
            return ie;
        }
        static get DefaultType() {
            return se;
        }
        static get NAME() {
            return "modal";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown ||
            this._isTransitioning ||
            $.trigger(this._element, Jt, { relatedTarget: t }).defaultPrevented ||
            ((this._isShown = !0),
                (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add(Zt),
                this._adjustDialog(),
                this._backdrop.show(() => this._showElement(t)));
        }
        hide() {
            this._isShown &&
            !this._isTransitioning &&
            ($.trigger(this._element, "hide.bs.modal").defaultPrevented ||
                ((this._isShown = !1),
                    (this._isTransitioning = !0),
                    this._focustrap.deactivate(),
                    this._element.classList.remove(te),
                    this._queueCallback(
                        () => this._hideModal(),
                        this._element,
                        this._isAnimated()
                    )));
        }
        dispose() {
            for (const t of [window, this._dialog]) $.off(t, ".bs.modal");
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new Vt({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated(),
            });
        }
        _initializeFocusTrap() {
            return new Ut({ trapElement: this._element });
        }
        _showElement(t) {
            document.body.contains(this._element) ||
            document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0);
            const e = U.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0),
                g(this._element),
                this._element.classList.add(te),
                this._queueCallback(
                    () => {
                        this._config.focus && this._focustrap.activate(),
                            (this._isTransitioning = !1),
                            $.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
                    },
                    this._dialog,
                    this._isAnimated()
                );
        }
        _addEventListeners() {
            $.on(this._element, "keydown.dismiss.bs.modal", (t) => {
                if ("Escape" === t.key)
                    return this._config.keyboard
                        ? (t.preventDefault(), void this.hide())
                        : void this._triggerBackdropTransition();
            }),
                $.on(window, "resize.bs.modal", () => {
                    this._isShown && !this._isTransitioning && this._adjustDialog();
                }),
                $.on(this._element, "mousedown.dismiss.bs.modal", (t) => {
                    $.one(this._element, "click.dismiss.bs.modal", (e) => {
                        this._element === t.target &&
                        this._element === e.target &&
                        ("static" !== this._config.backdrop
                            ? this._config.backdrop && this.hide()
                            : this._triggerBackdropTransition());
                    });
                });
        }
        _hideModal() {
            (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                    document.body.classList.remove(Zt),
                        this._resetAdjustments(),
                        this._scrollBar.reset(),
                        $.trigger(this._element, Gt);
                });
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
                return;
            const t =
                    this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._element.style.overflowY;
            "hidden" === e ||
            this._element.classList.contains(ee) ||
            (t || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(ee),
                this._queueCallback(() => {
                    this._element.classList.remove(ee),
                        this._queueCallback(() => {
                            this._element.style.overflowY = e;
                        }, this._dialog);
                }, this._dialog),
                this._element.focus());
        }
        _adjustDialog() {
            const t =
                    this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0;
            if (i && !t) {
                const t = m() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`;
            }
            if (!i && t) {
                const t = m() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`;
            }
        }
        _resetAdjustments() {
            (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
        }
        static jQueryInterface(t, e) {
            return this.each(function () {
                const i = ne.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e);
                }
            });
        }
    }
    $.on(
        document,
        "click.bs.modal.data-api",
        '[data-bs-toggle="modal"]',
        function (t) {
            const e = r(this);
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                $.one(e, Jt, (t) => {
                    t.defaultPrevented ||
                    $.one(e, Gt, () => {
                        h(this) && this.focus();
                    });
                });
            const i = U.findOne(".modal.show");
            i && ne.getInstance(i).hide(), ne.getOrCreateInstance(e).toggle(this);
        }
    ),
        K(ne),
        b(ne);
    const oe = "show",
        re = "showing",
        ae = "hiding",
        le = ".offcanvas.show",
        ce = "hidePrevented.bs.offcanvas",
        he = "hidden.bs.offcanvas",
        de = { backdrop: !0, keyboard: !0, scroll: !1 },
        ue = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean",
        };
    class _e extends V {
        constructor(t, e) {
            super(t, e),
                (this._isShown = !1),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                this._addEventListeners();
        }
        static get Default() {
            return de;
        }
        static get DefaultType() {
            return ue;
        }
        static get NAME() {
            return "offcanvas";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown ||
            $.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
                .defaultPrevented ||
            ((this._isShown = !0),
                this._backdrop.show(),
            this._config.scroll || new Ht().hide(),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add(re),
                this._queueCallback(
                    () => {
                        (this._config.scroll && !this._config.backdrop) ||
                        this._focustrap.activate(),
                            this._element.classList.add(oe),
                            this._element.classList.remove(re),
                            $.trigger(this._element, "shown.bs.offcanvas", {
                                relatedTarget: t,
                            });
                    },
                    this._element,
                    !0
                ));
        }
        hide() {
            this._isShown &&
            ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
                (this._focustrap.deactivate(),
                    this._element.blur(),
                    (this._isShown = !1),
                    this._element.classList.add(ae),
                    this._backdrop.hide(),
                    this._queueCallback(
                        () => {
                            this._element.classList.remove(oe, ae),
                                this._element.removeAttribute("aria-modal"),
                                this._element.removeAttribute("role"),
                            this._config.scroll || new Ht().reset(),
                                $.trigger(this._element, he);
                        },
                        this._element,
                        !0
                    )));
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Vt({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t
                    ? () => {
                        "static" !== this._config.backdrop
                            ? this.hide()
                            : $.trigger(this._element, ce);
                    }
                    : null,
            });
        }
        _initializeFocusTrap() {
            return new Ut({ trapElement: this._element });
        }
        _addEventListeners() {
            $.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
                "Escape" === t.key &&
                (this._config.keyboard ? this.hide() : $.trigger(this._element, ce));
            });
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = _e.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    $.on(
        document,
        "click.bs.offcanvas.data-api",
        '[data-bs-toggle="offcanvas"]',
        function (t) {
            const e = r(this);
            if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)))
                return;
            $.one(e, he, () => {
                h(this) && this.focus();
            });
            const i = U.findOne(le);
            i && i !== e && _e.getInstance(i).hide(),
                _e.getOrCreateInstance(e).toggle(this);
        }
    ),
        $.on(window, "load.bs.offcanvas.data-api", () => {
            for (const t of U.find(le)) _e.getOrCreateInstance(t).show();
        }),
        $.on(window, "resize.bs.offcanvas", () => {
            for (const t of U.find("[aria-modal][class*=show][class*=offcanvas-]"))
                "fixed" !== getComputedStyle(t).position &&
                _e.getOrCreateInstance(t).hide();
        }),
        K(_e),
        b(_e);
    const ge = new Set([
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
        ]),
        fe = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        pe =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        me = (t, e) => {
            const i = t.nodeName.toLowerCase();
            return e.includes(i)
                ? !ge.has(i) || Boolean(fe.test(t.nodeValue) || pe.test(t.nodeValue))
                : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
        },
        be = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        },
        ve = {
            allowList: be,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>",
        },
        ye = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string",
        },
        we = {
            entry: "(string|element|function|null)",
            selector: "(string|element)",
        };
    class Ae extends R {
        constructor(t) {
            super(), (this._config = this._getConfig(t));
        }
        static get Default() {
            return ve;
        }
        static get DefaultType() {
            return ye;
        }
        static get NAME() {
            return "TemplateFactory";
        }
        getContent() {
            return Object.values(this._config.content)
                .map((t) => this._resolvePossibleFunction(t))
                .filter(Boolean);
        }
        hasContent() {
            return this.getContent().length > 0;
        }
        changeContent(t) {
            return (
                this._checkContent(t),
                    (this._config.content = { ...this._config.content, ...t }),
                    this
            );
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, i] of Object.entries(this._config.content))
                this._setContent(t, i, e);
            const e = t.children[0],
                i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")), e;
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content);
        }
        _checkContent(t) {
            for (const [e, i] of Object.entries(t))
                super._typeCheckConfig({ selector: e, entry: i }, we);
        }
        _setContent(t, e, i) {
            const s = U.findOne(i, t);
            s &&
            ((e = this._resolvePossibleFunction(e))
                ? l(e)
                    ? this._putElementInTemplate(c(e), s)
                    : this._config.html
                        ? (s.innerHTML = this._maybeSanitize(e))
                        : (s.textContent = e)
                : s.remove());
        }
        _maybeSanitize(t) {
            return this._config.sanitize
                ? (function (t, e, i) {
                    if (!t.length) return t;
                    if (i && "function" == typeof i) return i(t);
                    const s = new window.DOMParser().parseFromString(t, "text/html"),
                        n = [].concat(...s.body.querySelectorAll("*"));
                    for (const t of n) {
                        const i = t.nodeName.toLowerCase();
                        if (!Object.keys(e).includes(i)) {
                            t.remove();
                            continue;
                        }
                        const s = [].concat(...t.attributes),
                            n = [].concat(e["*"] || [], e[i] || []);
                        for (const e of s) me(e, n) || t.removeAttribute(e.nodeName);
                    }
                    return s.body.innerHTML;
                })(t, this._config.allowList, this._config.sanitizeFn)
                : t;
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t(this) : t;
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) return (e.innerHTML = ""), void e.append(t);
            e.textContent = t.textContent;
        }
    }
    const Ee = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Ce = "fade",
        Te = "show",
        ke = ".modal",
        Le = "hide.bs.modal",
        Oe = "hover",
        Ie = "focus",
        Se = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: m() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: m() ? "right" : "left",
        },
        De = {
            allowList: be,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 0],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus",
        },
        Ne = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
        };
    class Pe extends V {
        constructor(t, e) {
            if (void 0 === i)
                throw new TypeError(
                    "Bootstrap's tooltips require Popper (https://popper.js.org)"
                );
            super(t, e),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._isHovered = null),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._templateFactory = null),
                (this._newContent = null),
                (this.tip = null),
                this._setListeners(),
            this._config.selector || this._fixTitle();
        }
        static get Default() {
            return De;
        }
        static get DefaultType() {
            return Ne;
        }
        static get NAME() {
            return "tooltip";
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle() {
            this._isEnabled &&
            ((this._activeTrigger.click = !this._activeTrigger.click),
                this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
            clearTimeout(this._timeout),
                $.off(this._element.closest(ke), Le, this._hideModalHandler),
            this.tip && this.tip.remove(),
            this._element.getAttribute("data-bs-original-title") &&
            this._element.setAttribute(
                "title",
                this._element.getAttribute("data-bs-original-title")
            ),
                this._disposePopper(),
                super.dispose();
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = $.trigger(this._element, this.constructor.eventName("show")),
                e = (
                    u(this._element) || this._element.ownerDocument.documentElement
                ).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this.tip && (this.tip.remove(), (this.tip = null));
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const { container: s } = this._config;
            if (
                (this._element.ownerDocument.documentElement.contains(this.tip) ||
                (s.append(i),
                    $.trigger(this._element, this.constructor.eventName("inserted"))),
                    this._popper
                        ? this._popper.update()
                        : (this._popper = this._createPopper(i)),
                    i.classList.add(Te),
                "ontouchstart" in document.documentElement)
            )
                for (const t of [].concat(...document.body.children))
                    $.on(t, "mouseover", _);
            this._queueCallback(
                () => {
                    $.trigger(this._element, this.constructor.eventName("shown")),
                    !1 === this._isHovered && this._leave(),
                        (this._isHovered = !1);
                },
                this.tip,
                this._isAnimated()
            );
        }
        hide() {
            if (!this._isShown()) return;
            if (
                $.trigger(this._element, this.constructor.eventName("hide"))
                    .defaultPrevented
            )
                return;
            const t = this._getTipElement();
            if ((t.classList.remove(Te), "ontouchstart" in document.documentElement))
                for (const t of [].concat(...document.body.children))
                    $.off(t, "mouseover", _);
            (this._activeTrigger.click = !1),
                (this._activeTrigger.focus = !1),
                (this._activeTrigger.hover = !1),
                (this._isHovered = null),
                this._queueCallback(
                    () => {
                        this._isWithActiveTrigger() ||
                        (this._isHovered || t.remove(),
                            this._element.removeAttribute("aria-describedby"),
                            $.trigger(this._element, this.constructor.eventName("hidden")),
                            this._disposePopper());
                    },
                    this.tip,
                    this._isAnimated()
                );
        }
        update() {
            this._popper && this._popper.update();
        }
        _isWithContent() {
            return Boolean(this._getTitle());
        }
        _getTipElement() {
            return (
                this.tip ||
                (this.tip = this._createTipElement(
                    this._newContent || this._getContentForTemplate()
                )),
                    this.tip
            );
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(Ce, Te),
                e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = ((t) => {
                do {
                    t += Math.floor(1e6 * Math.random());
                } while (document.getElementById(t));
                return t;
            })(this.constructor.NAME).toString();
            return (
                e.setAttribute("id", i), this._isAnimated() && e.classList.add(Ce), e
            );
        }
        setContent(t) {
            (this._newContent = t),
            this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(t) {
            return (
                this._templateFactory
                    ? this._templateFactory.changeContent(t)
                    : (this._templateFactory = new Ae({
                        ...this._config,
                        content: t,
                        extraClass: this._resolvePossibleFunction(
                            this._config.customClass
                        ),
                    })),
                    this._templateFactory
            );
        }
        _getContentForTemplate() {
            return { ".tooltip-inner": this._getTitle() };
        }
        _getTitle() {
            return (
                this._resolvePossibleFunction(this._config.title) ||
                this._element.getAttribute("data-bs-original-title")
            );
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(
                t.delegateTarget,
                this._getDelegateConfig()
            );
        }
        _isAnimated() {
            return (
                this._config.animation || (this.tip && this.tip.classList.contains(Ce))
            );
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(Te);
        }
        _createPopper(t) {
            const e =
                    "function" == typeof this._config.placement
                        ? this._config.placement.call(this, t, this._element)
                        : this._config.placement,
                s = Se[e.toUpperCase()];
            return i.createPopper(this._element, t, this._getPopperConfig(s));
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t
                ? t.split(",").map((t) => Number.parseInt(t, 10))
                : "function" == typeof t
                    ? (e) => t(e, this._element)
                    : t;
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t;
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: { fallbackPlacements: this._config.fallbackPlacements },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    {
                        name: "arrow",
                        options: { element: `.${this.constructor.NAME}-arrow` },
                    },
                    {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: (t) => {
                            this._getTipElement().setAttribute(
                                "data-popper-placement",
                                t.state.placement
                            );
                        },
                    },
                ],
            };
            return {
                ...e,
                ...("function" == typeof this._config.popperConfig
                    ? this._config.popperConfig(e)
                    : this._config.popperConfig),
            };
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)
                if ("click" === e)
                    $.on(
                        this._element,
                        this.constructor.eventName("click"),
                        this._config.selector,
                        (t) => {
                            this._initializeOnDelegatedTarget(t).toggle();
                        }
                    );
                else if ("manual" !== e) {
                    const t =
                            e === Oe
                                ? this.constructor.eventName("mouseenter")
                                : this.constructor.eventName("focusin"),
                        i =
                            e === Oe
                                ? this.constructor.eventName("mouseleave")
                                : this.constructor.eventName("focusout");
                    $.on(this._element, t, this._config.selector, (t) => {
                        const e = this._initializeOnDelegatedTarget(t);
                        (e._activeTrigger["focusin" === t.type ? Ie : Oe] = !0), e._enter();
                    }),
                        $.on(this._element, i, this._config.selector, (t) => {
                            const e = this._initializeOnDelegatedTarget(t);
                            (e._activeTrigger["focusout" === t.type ? Ie : Oe] =
                                e._element.contains(t.relatedTarget)),
                                e._leave();
                        });
                }
            (this._hideModalHandler = () => {
                this._element && this.hide();
            }),
                $.on(this._element.closest(ke), Le, this._hideModalHandler);
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t &&
            (this._element.getAttribute("aria-label") ||
            this._element.textContent.trim() ||
            this._element.setAttribute("aria-label", t),
                this._element.setAttribute("data-bs-original-title", t),
                this._element.removeAttribute("title"));
        }
        _enter() {
            this._isShown() || this._isHovered
                ? (this._isHovered = !0)
                : ((this._isHovered = !0),
                    this._setTimeout(() => {
                        this._isHovered && this.show();
                    }, this._config.delay.show));
        }
        _leave() {
            this._isWithActiveTrigger() ||
            ((this._isHovered = !1),
                this._setTimeout(() => {
                    this._isHovered || this.hide();
                }, this._config.delay.hide));
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(t) {
            const e = W.getDataAttributes(this._element);
            for (const t of Object.keys(e)) Ee.has(t) && delete e[t];
            return (
                (t = { ...e, ...("object" == typeof t && t ? t : {}) }),
                    (t = this._mergeConfigObj(t)),
                    (t = this._configAfterMerge(t)),
                    this._typeCheckConfig(t),
                    t
            );
        }
        _configAfterMerge(t) {
            return (
                (t.container = !1 === t.container ? document.body : c(t.container)),
                "number" == typeof t.delay &&
                (t.delay = { show: t.delay, hide: t.delay }),
                "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content && (t.content = t.content.toString()),
                    t
            );
        }
        _getDelegateConfig() {
            const t = {};
            for (const e in this._config)
                this.constructor.Default[e] !== this._config[e] &&
                (t[e] = this._config[e]);
            return (t.selector = !1), (t.trigger = "manual"), t;
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), (this._popper = null));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Pe.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    b(Pe);
    const xe = {
            ...Pe.Default,
            content: "",
            offset: [0, 8],
            placement: "right",
            template:
                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click",
        },
        Me = { ...Pe.DefaultType, content: "(null|string|element|function)" };
    class je extends Pe {
        static get Default() {
            return xe;
        }
        static get DefaultType() {
            return Me;
        }
        static get NAME() {
            return "popover";
        }
        _isWithContent() {
            return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent(),
            };
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = je.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    b(je);
    const $e = "click.bs.scrollspy",
        Fe = "active",
        ze = "[href]",
        He = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: !1,
            target: null,
            threshold: [0.1, 0.5, 1],
        },
        qe = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
            threshold: "array",
        };
    class Be extends V {
        constructor(t, e) {
            super(t, e),
                (this._targetLinks = new Map()),
                (this._observableSections = new Map()),
                (this._rootElement =
                    "visible" === getComputedStyle(this._element).overflowY
                        ? null
                        : this._element),
                (this._activeTarget = null),
                (this._observer = null),
                (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
                this.refresh();
        }
        static get Default() {
            return He;
        }
        static get DefaultType() {
            return qe;
        }
        static get NAME() {
            return "scrollspy";
        }
        refresh() {
            this._initializeTargetsAndObservables(),
                this._maybeEnableSmoothScroll(),
                this._observer
                    ? this._observer.disconnect()
                    : (this._observer = this._getNewObserver());
            for (const t of this._observableSections.values())
                this._observer.observe(t);
        }
        dispose() {
            this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(t) {
            return (
                (t.target = c(t.target) || document.body),
                    (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
                "string" == typeof t.threshold &&
                (t.threshold = t.threshold
                    .split(",")
                    .map((t) => Number.parseFloat(t))),
                    t
            );
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll &&
            ($.off(this._config.target, $e),
                $.on(this._config.target, $e, ze, (t) => {
                    const e = this._observableSections.get(t.target.hash);
                    if (e) {
                        t.preventDefault();
                        const i = this._rootElement || window,
                            s = e.offsetTop - this._element.offsetTop;
                        if (i.scrollTo)
                            return void i.scrollTo({ top: s, behavior: "smooth" });
                        i.scrollTop = s;
                    }
                }));
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin,
            };
            return new IntersectionObserver((t) => this._observerCallback(t), t);
        }
        _observerCallback(t) {
            const e = (t) => this._targetLinks.get(`#${t.target.id}`),
                i = (t) => {
                    (this._previousScrollData.visibleEntryTop = t.target.offsetTop),
                        this._process(e(t));
                },
                s = (this._rootElement || document.documentElement).scrollTop,
                n = s >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = s;
            for (const o of t) {
                if (!o.isIntersecting) {
                    (this._activeTarget = null), this._clearActiveClass(e(o));
                    continue;
                }
                const t =
                    o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (n && t) {
                    if ((i(o), !s)) return;
                } else n || t || i(o);
            }
        }
        _initializeTargetsAndObservables() {
            (this._targetLinks = new Map()), (this._observableSections = new Map());
            const t = U.find(ze, this._config.target);
            for (const e of t) {
                if (!e.hash || d(e)) continue;
                const t = U.findOne(e.hash, this._element);
                h(t) &&
                (this._targetLinks.set(e.hash, e),
                    this._observableSections.set(e.hash, t));
            }
        }
        _process(t) {
            this._activeTarget !== t &&
            (this._clearActiveClass(this._config.target),
                (this._activeTarget = t),
                t.classList.add(Fe),
                this._activateParents(t),
                $.trigger(this._element, "activate.bs.scrollspy", {
                    relatedTarget: t,
                }));
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item"))
                U.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(Fe);
            else
                for (const e of U.parents(t, ".nav, .list-group"))
                    for (const t of U.prev(
                        e,
                        ".nav-link, .nav-item > .nav-link, .list-group-item"
                    ))
                        t.classList.add(Fe);
        }
        _clearActiveClass(t) {
            t.classList.remove(Fe);
            const e = U.find("[href].active", t);
            for (const t of e) t.classList.remove(Fe);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Be.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    $.on(window, "load.bs.scrollspy.data-api", () => {
        for (const t of U.find('[data-bs-spy="scroll"]')) Be.getOrCreateInstance(t);
    }),
        b(Be);
    const We = "ArrowLeft",
        Re = "ArrowRight",
        Ve = "ArrowUp",
        Ke = "ArrowDown",
        Qe = "active",
        Xe = "fade",
        Ye = "show",
        Ue =
            '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Ge = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Ue}`;
    class Je extends V {
        constructor(t) {
            super(t),
                (this._parent = this._element.closest(
                    '.list-group, .nav, [role="tablist"]'
                )),
            this._parent &&
            (this._setInitialAttributes(this._parent, this._getChildren()),
                $.on(this._element, "keydown.bs.tab", (t) => this._keydown(t)));
        }
        static get NAME() {
            return "tab";
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(),
                i = e ? $.trigger(e, "hide.bs.tab", { relatedTarget: t }) : null;
            $.trigger(t, "show.bs.tab", { relatedTarget: e }).defaultPrevented ||
            (i && i.defaultPrevented) ||
            (this._deactivate(e, t), this._activate(t, e));
        }
        _activate(t, e) {
            t &&
            (t.classList.add(Qe),
                this._activate(r(t)),
                this._queueCallback(
                    () => {
                        "tab" === t.getAttribute("role")
                            ? (t.removeAttribute("tabindex"),
                                t.setAttribute("aria-selected", !0),
                                this._toggleDropDown(t, !0),
                                $.trigger(t, "shown.bs.tab", { relatedTarget: e }))
                            : t.classList.add(Ye);
                    },
                    t,
                    t.classList.contains(Xe)
                ));
        }
        _deactivate(t, e) {
            t &&
            (t.classList.remove(Qe),
                t.blur(),
                this._deactivate(r(t)),
                this._queueCallback(
                    () => {
                        "tab" === t.getAttribute("role")
                            ? (t.setAttribute("aria-selected", !1),
                                t.setAttribute("tabindex", "-1"),
                                this._toggleDropDown(t, !1),
                                $.trigger(t, "hidden.bs.tab", { relatedTarget: e }))
                            : t.classList.remove(Ye);
                    },
                    t,
                    t.classList.contains(Xe)
                ));
        }
        _keydown(t) {
            if (![We, Re, Ve, Ke].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = [Re, Ke].includes(t.key),
                i = w(
                    this._getChildren().filter((t) => !d(t)),
                    t.target,
                    e,
                    !0
                );
            i && (i.focus({ preventScroll: !0 }), Je.getOrCreateInstance(i).show());
        }
        _getChildren() {
            return U.find(Ge, this._parent);
        }
        _getActiveElem() {
            return this._getChildren().find((t) => this._elemIsActive(t)) || null;
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e) this._setInitialAttributesOnChild(t);
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t),
                i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e),
            i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
            e || t.setAttribute("tabindex", "-1"),
                this._setAttributeIfNotExists(t, "role", "tab"),
                this._setInitialAttributesOnTargetPanel(t);
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = r(t);
            e &&
            (this._setAttributeIfNotExists(e, "role", "tabpanel"),
            t.id &&
            this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`));
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            const s = (t, s) => {
                const n = U.findOne(t, i);
                n && n.classList.toggle(s, e);
            };
            s(".dropdown-toggle", Qe),
                s(".dropdown-menu", Ye),
                i.setAttribute("aria-expanded", e);
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i);
        }
        _elemIsActive(t) {
            return t.classList.contains(Qe);
        }
        _getInnerElement(t) {
            return t.matches(Ge) ? t : U.findOne(Ge, t);
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t;
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Je.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    $.on(document, "click.bs.tab", Ue, function (t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        d(this) || Je.getOrCreateInstance(this).show();
    }),
        $.on(window, "load.bs.tab", () => {
            for (const t of U.find(
                '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
            ))
                Je.getOrCreateInstance(t);
        }),
        b(Je);
    const Ze = "hide",
        ti = "show",
        ei = "showing",
        ii = { animation: "boolean", autohide: "boolean", delay: "number" },
        si = { animation: !0, autohide: !0, delay: 5e3 };
    class ni extends V {
        constructor(t, e) {
            super(t, e),
                (this._timeout = null),
                (this._hasMouseInteraction = !1),
                (this._hasKeyboardInteraction = !1),
                this._setListeners();
        }
        static get Default() {
            return si;
        }
        static get DefaultType() {
            return ii;
        }
        static get NAME() {
            return "toast";
        }
        show() {
            $.trigger(this._element, "show.bs.toast").defaultPrevented ||
            (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
                this._element.classList.remove(Ze),
                g(this._element),
                this._element.classList.add(ti, ei),
                this._queueCallback(
                    () => {
                        this._element.classList.remove(ei),
                            $.trigger(this._element, "shown.bs.toast"),
                            this._maybeScheduleHide();
                    },
                    this._element,
                    this._config.animation
                ));
        }
        hide() {
            this.isShown() &&
            ($.trigger(this._element, "hide.bs.toast").defaultPrevented ||
                (this._element.classList.add(ei),
                    this._queueCallback(
                        () => {
                            this._element.classList.add(Ze),
                                this._element.classList.remove(ei, ti),
                                $.trigger(this._element, "hidden.bs.toast");
                        },
                        this._element,
                        this._config.animation
                    )));
        }
        dispose() {
            this._clearTimeout(),
            this.isShown() && this._element.classList.remove(ti),
                super.dispose();
        }
        isShown() {
            return this._element.classList.contains(ti);
        }
        _maybeScheduleHide() {
            this._config.autohide &&
            (this._hasMouseInteraction ||
                this._hasKeyboardInteraction ||
                (this._timeout = setTimeout(() => {
                    this.hide();
                }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i ||
            this._element.contains(i) ||
            this._maybeScheduleHide();
        }
        _setListeners() {
            $.on(this._element, "mouseover.bs.toast", (t) =>
                this._onInteraction(t, !0)
            ),
                $.on(this._element, "mouseout.bs.toast", (t) =>
                    this._onInteraction(t, !1)
                ),
                $.on(this._element, "focusin.bs.toast", (t) =>
                    this._onInteraction(t, !0)
                ),
                $.on(this._element, "focusout.bs.toast", (t) =>
                    this._onInteraction(t, !1)
                );
        }
        _clearTimeout() {
            clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = ni.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return (
        K(ni),
            b(ni),
            {
                Alert: Q,
                Button: Y,
                Carousel: ht,
                Collapse: mt,
                Dropdown: Mt,
                Modal: ne,
                Offcanvas: _e,
                Popover: je,
                ScrollSpy: Be,
                Tab: Je,
                Toast: ni,
                Tooltip: Pe,
            }
    );
});
//# sourceMappingURL=bootstrap.min.js.map
