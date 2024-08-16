(function() {
    const f = document.createElement("link").relList;
    if (f && f.supports && f.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) O(n);
    new MutationObserver(n => {
        for (const r of n)
            if (r.type === "childList")
                for (const h of r.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && O(h)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function d(n) {
        const r = {};
        return n.integrity && (r.integrity = n.integrity), n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? r.credentials = "include" : n.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }

    function O(n) {
        if (n.ep) return;
        n.ep = !0;
        const r = d(n);
        fetch(n.href, r)
    }
})();
var Ss = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Ds(m) {
    return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m
}
var Ii = {
    exports: {}
};
(function(m, f) {
    (function(d, O) {
        O(f)
    })(Ss, function(d) {
        var O = "1.9.4";

        function n(t) {
            var e, i, o, s;
            for (i = 1, o = arguments.length; i < o; i++) {
                s = arguments[i];
                for (e in s) t[e] = s[e]
            }
            return t
        }
        var r = Object.create || function() {
            function t() {}
            return function(e) {
                return t.prototype = e, new t
            }
        }();

        function h(t, e) {
            var i = Array.prototype.slice;
            if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
            var o = i.call(arguments, 2);
            return function() {
                return t.apply(e, o.length ? o.concat(i.call(arguments)) : arguments)
            }
        }
        var u = 0;

        function p(t) {
            return "_leaflet_id" in t || (t._leaflet_id = ++u), t._leaflet_id
        }

        function v(t, e, i) {
            var o, s, a, l;
            return l = function() {
                o = !1, s && (a.apply(i, s), s = !1)
            }, a = function() {
                o ? s = arguments : (t.apply(i, arguments), setTimeout(l, e), o = !0)
            }, a
        }

        function y(t, e, i) {
            var o = e[1],
                s = e[0],
                a = o - s;
            return t === o && i ? t : ((t - s) % a + a) % a + s
        }

        function x() {
            return !1
        }

        function z(t, e) {
            if (e === !1) return t;
            var i = Math.pow(10, e === void 0 ? 6 : e);
            return Math.round(t * i) / i
        }

        function Kt(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }

        function W(t) {
            return Kt(t).split(/\s+/)
        }

        function G(t, e) {
            Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? r(t.options) : {});
            for (var i in e) t.options[i] = e[i];
            return t.options
        }

        function kt(t, e, i) {
            var o = [];
            for (var s in t) o.push(encodeURIComponent(i ? s.toUpperCase() : s) + "=" + encodeURIComponent(t[s]));
            return (!e || e.indexOf("?") === -1 ? "?" : "&") + o.join("&")
        }
        var Ye = /\{ *([\w_ -]+) *\}/g;

        function Mt(t, e) {
            return t.replace(Ye, function(i, o) {
                var s = e[o];
                if (s === void 0) throw new Error("No value provided for variable " + i);
                return typeof s == "function" && (s = s(e)), s
            })
        }
        var at = Array.isArray || function(t) {
            return Object.prototype.toString.call(t) === "[object Array]"
        };

        function Xt(t, e) {
            for (var i = 0; i < t.length; i++)
                if (t[i] === e) return i;
            return -1
        }
        var Rt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

        function Jt(t) {
            return window["webkit" + t] || window["moz" + t] || window["ms" + t]
        }
        var $t = 0;

        function ve(t) {
            var e = +new Date,
                i = Math.max(0, 16 - (e - $t));
            return $t = e + i, window.setTimeout(t, i)
        }
        var b = window.requestAnimationFrame || Jt("RequestAnimationFrame") || ve,
            U = window.cancelAnimationFrame || Jt("CancelAnimationFrame") || Jt("CancelRequestAnimationFrame") || function(t) {
                window.clearTimeout(t)
            };

        function S(t, e, i) {
            if (i && b === ve) t.call(e);
            else return b.call(window, h(t, e))
        }

        function A(t) {
            t && U.call(window, t)
        }
        var j = {
            __proto__: null,
            extend: n,
            create: r,
            bind: h,
            get lastId() {
                return u
            },
            stamp: p,
            throttle: v,
            wrapNum: y,
            falseFn: x,
            formatNum: z,
            trim: Kt,
            splitWords: W,
            setOptions: G,
            getParamString: kt,
            template: Mt,
            isArray: at,
            indexOf: Xt,
            emptyImageUrl: Rt,
            requestFn: b,
            cancelFn: U,
            requestAnimFrame: S,
            cancelAnimFrame: A
        };

        function et() {}
        et.extend = function(t) {
            var e = function() {
                    G(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
                },
                i = e.__super__ = this.prototype,
                o = r(i);
            o.constructor = e, e.prototype = o;
            for (var s in this) Object.prototype.hasOwnProperty.call(this, s) && s !== "prototype" && s !== "__super__" && (e[s] = this[s]);
            return t.statics && n(e, t.statics), t.includes && (Et(t.includes), n.apply(null, [o].concat(t.includes))), n(o, t), delete o.statics, delete o.includes, o.options && (o.options = i.options ? r(i.options) : {}, n(o.options, t.options)), o._initHooks = [], o.callInitHooks = function() {
                if (!this._initHooksCalled) {
                    i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;
                    for (var a = 0, l = o._initHooks.length; a < l; a++) o._initHooks[a].call(this)
                }
            }, e
        }, et.include = function(t) {
            var e = this.prototype.options;
            return n(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this
        }, et.mergeOptions = function(t) {
            return n(this.prototype.options, t), this
        }, et.addInitHook = function(t) {
            var e = Array.prototype.slice.call(arguments, 1),
                i = typeof t == "function" ? t : function() {
                    this[t].apply(this, e)
                };
            return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this
        };

        function Et(t) {
            if (!(typeof L > "u" || !L || !L.Mixin)) {
                t = at(t) ? t : [t];
                for (var e = 0; e < t.length; e++) t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack)
            }
        }
        var tt = {
            on: function(t, e, i) {
                if (typeof t == "object")
                    for (var o in t) this._on(o, t[o], e);
                else {
                    t = W(t);
                    for (var s = 0, a = t.length; s < a; s++) this._on(t[s], e, i)
                }
                return this
            },
            off: function(t, e, i) {
                if (!arguments.length) delete this._events;
                else if (typeof t == "object")
                    for (var o in t) this._off(o, t[o], e);
                else {
                    t = W(t);
                    for (var s = arguments.length === 1, a = 0, l = t.length; a < l; a++) s ? this._off(t[a]) : this._off(t[a], e, i)
                }
                return this
            },
            _on: function(t, e, i, o) {
                if (typeof e != "function") {
                    console.warn("wrong listener type: " + typeof e);
                    return
                }
                if (this._listens(t, e, i) === !1) {
                    i === this && (i = void 0);
                    var s = {
                        fn: e,
                        ctx: i
                    };
                    o && (s.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(s)
                }
            },
            _off: function(t, e, i) {
                var o, s, a;
                if (this._events && (o = this._events[t], !!o)) {
                    if (arguments.length === 1) {
                        if (this._firingCount)
                            for (s = 0, a = o.length; s < a; s++) o[s].fn = x;
                        delete this._events[t];
                        return
                    }
                    if (typeof e != "function") {
                        console.warn("wrong listener type: " + typeof e);
                        return
                    }
                    var l = this._listens(t, e, i);
                    if (l !== !1) {
                        var c = o[l];
                        this._firingCount && (c.fn = x, this._events[t] = o = o.slice()), o.splice(l, 1)
                    }
                }
            },
            fire: function(t, e, i) {
                if (!this.listens(t, i)) return this;
                var o = n({}, e, {
                    type: t,
                    target: this,
                    sourceTarget: e && e.sourceTarget || this
                });
                if (this._events) {
                    var s = this._events[t];
                    if (s) {
                        this._firingCount = this._firingCount + 1 || 1;
                        for (var a = 0, l = s.length; a < l; a++) {
                            var c = s[a],
                                _ = c.fn;
                            c.once && this.off(t, _, c.ctx), _.call(c.ctx || this, o)
                        }
                        this._firingCount--
                    }
                }
                return i && this._propagateEvent(o), this
            },
            listens: function(t, e, i, o) {
                typeof t != "string" && console.warn('"string" type argument expected');
                var s = e;
                typeof e != "function" && (o = !!e, s = void 0, i = void 0);
                var a = this._events && this._events[t];
                if (a && a.length && this._listens(t, s, i) !== !1) return !0;
                if (o) {
                    for (var l in this._eventParents)
                        if (this._eventParents[l].listens(t, e, i, o)) return !0
                }
                return !1
            },
            _listens: function(t, e, i) {
                if (!this._events) return !1;
                var o = this._events[t] || [];
                if (!e) return !!o.length;
                i === this && (i = void 0);
                for (var s = 0, a = o.length; s < a; s++)
                    if (o[s].fn === e && o[s].ctx === i) return s;
                return !1
            },
            once: function(t, e, i) {
                if (typeof t == "object")
                    for (var o in t) this._on(o, t[o], e, !0);
                else {
                    t = W(t);
                    for (var s = 0, a = t.length; s < a; s++) this._on(t[s], e, i, !0)
                }
                return this
            },
            addEventParent: function(t) {
                return this._eventParents = this._eventParents || {}, this._eventParents[p(t)] = t, this
            },
            removeEventParent: function(t) {
                return this._eventParents && delete this._eventParents[p(t)], this
            },
            _propagateEvent: function(t) {
                for (var e in this._eventParents) this._eventParents[e].fire(t.type, n({
                    layer: t.target,
                    propagatedFrom: t.target
                }, t), !0)
            }
        };
        tt.addEventListener = tt.on, tt.removeEventListener = tt.clearAllEventListeners = tt.off, tt.addOneTimeEventListener = tt.once, tt.fireEvent = tt.fire, tt.hasEventListeners = tt.listens;
        var ht = et.extend(tt);

        function M(t, e, i) {
            this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
        }
        var Ot = Math.trunc || function(t) {
            return t > 0 ? Math.floor(t) : Math.ceil(t)
        };
        M.prototype = {
            clone: function() {
                return new M(this.x, this.y)
            },
            add: function(t) {
                return this.clone()._add(T(t))
            },
            _add: function(t) {
                return this.x += t.x, this.y += t.y, this
            },
            subtract: function(t) {
                return this.clone()._subtract(T(t))
            },
            _subtract: function(t) {
                return this.x -= t.x, this.y -= t.y, this
            },
            divideBy: function(t) {
                return this.clone()._divideBy(t)
            },
            _divideBy: function(t) {
                return this.x /= t, this.y /= t, this
            },
            multiplyBy: function(t) {
                return this.clone()._multiplyBy(t)
            },
            _multiplyBy: function(t) {
                return this.x *= t, this.y *= t, this
            },
            scaleBy: function(t) {
                return new M(this.x * t.x, this.y * t.y)
            },
            unscaleBy: function(t) {
                return new M(this.x / t.x, this.y / t.y)
            },
            round: function() {
                return this.clone()._round()
            },
            _round: function() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this
            },
            floor: function() {
                return this.clone()._floor()
            },
            _floor: function() {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
            },
            ceil: function() {
                return this.clone()._ceil()
            },
            _ceil: function() {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
            },
            trunc: function() {
                return this.clone()._trunc()
            },
            _trunc: function() {
                return this.x = Ot(this.x), this.y = Ot(this.y), this
            },
            distanceTo: function(t) {
                t = T(t);
                var e = t.x - this.x,
                    i = t.y - this.y;
                return Math.sqrt(e * e + i * i)
            },
            equals: function(t) {
                return t = T(t), t.x === this.x && t.y === this.y
            },
            contains: function(t) {
                return t = T(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
            },
            toString: function() {
                return "Point(" + z(this.x) + ", " + z(this.y) + ")"
            }
        };

        function T(t, e, i) {
            return t instanceof M ? t : at(t) ? new M(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new M(t.x, t.y) : new M(t, e, i)
        }

        function N(t, e) {
            if (t)
                for (var i = e ? [t, e] : t, o = 0, s = i.length; o < s; o++) this.extend(i[o])
        }
        N.prototype = {
            extend: function(t) {
                var e, i;
                if (!t) return this;
                if (t instanceof M || typeof t[0] == "number" || "x" in t) e = i = T(t);
                else if (t = Y(t), e = t.min, i = t.max, !e || !i) return this;
                return !this.min && !this.max ? (this.min = e.clone(), this.max = i.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)), this
            },
            getCenter: function(t) {
                return T((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
            },
            getBottomLeft: function() {
                return T(this.min.x, this.max.y)
            },
            getTopRight: function() {
                return T(this.max.x, this.min.y)
            },
            getTopLeft: function() {
                return this.min
            },
            getBottomRight: function() {
                return this.max
            },
            getSize: function() {
                return this.max.subtract(this.min)
            },
            contains: function(t) {
                var e, i;
                return typeof t[0] == "number" || t instanceof M ? t = T(t) : t = Y(t), t instanceof N ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
            },
            intersects: function(t) {
                t = Y(t);
                var e = this.min,
                    i = this.max,
                    o = t.min,
                    s = t.max,
                    a = s.x >= e.x && o.x <= i.x,
                    l = s.y >= e.y && o.y <= i.y;
                return a && l
            },
            overlaps: function(t) {
                t = Y(t);
                var e = this.min,
                    i = this.max,
                    o = t.min,
                    s = t.max,
                    a = s.x > e.x && o.x < i.x,
                    l = s.y > e.y && o.y < i.y;
                return a && l
            },
            isValid: function() {
                return !!(this.min && this.max)
            },
            pad: function(t) {
                var e = this.min,
                    i = this.max,
                    o = Math.abs(e.x - i.x) * t,
                    s = Math.abs(e.y - i.y) * t;
                return Y(T(e.x - o, e.y - s), T(i.x + o, i.y + s))
            },
            equals: function(t) {
                return t ? (t = Y(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1
            }
        };

        function Y(t, e) {
            return !t || t instanceof N ? t : new N(t, e)
        }

        function ot(t, e) {
            if (t)
                for (var i = e ? [t, e] : t, o = 0, s = i.length; o < s; o++) this.extend(i[o])
        }
        ot.prototype = {
            extend: function(t) {
                var e = this._southWest,
                    i = this._northEast,
                    o, s;
                if (t instanceof H) o = t, s = t;
                else if (t instanceof ot) {
                    if (o = t._southWest, s = t._northEast, !o || !s) return this
                } else return t ? this.extend(Z(t) || K(t)) : this;
                return !e && !i ? (this._southWest = new H(o.lat, o.lng), this._northEast = new H(s.lat, s.lng)) : (e.lat = Math.min(o.lat, e.lat), e.lng = Math.min(o.lng, e.lng), i.lat = Math.max(s.lat, i.lat), i.lng = Math.max(s.lng, i.lng)), this
            },
            pad: function(t) {
                var e = this._southWest,
                    i = this._northEast,
                    o = Math.abs(e.lat - i.lat) * t,
                    s = Math.abs(e.lng - i.lng) * t;
                return new ot(new H(e.lat - o, e.lng - s), new H(i.lat + o, i.lng + s))
            },
            getCenter: function() {
                return new H((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
            },
            getSouthWest: function() {
                return this._southWest
            },
            getNorthEast: function() {
                return this._northEast
            },
            getNorthWest: function() {
                return new H(this.getNorth(), this.getWest())
            },
            getSouthEast: function() {
                return new H(this.getSouth(), this.getEast())
            },
            getWest: function() {
                return this._southWest.lng
            },
            getSouth: function() {
                return this._southWest.lat
            },
            getEast: function() {
                return this._northEast.lng
            },
            getNorth: function() {
                return this._northEast.lat
            },
            contains: function(t) {
                typeof t[0] == "number" || t instanceof H || "lat" in t ? t = Z(t) : t = K(t);
                var e = this._southWest,
                    i = this._northEast,
                    o, s;
                return t instanceof ot ? (o = t.getSouthWest(), s = t.getNorthEast()) : o = s = t, o.lat >= e.lat && s.lat <= i.lat && o.lng >= e.lng && s.lng <= i.lng
            },
            intersects: function(t) {
                t = K(t);
                var e = this._southWest,
                    i = this._northEast,
                    o = t.getSouthWest(),
                    s = t.getNorthEast(),
                    a = s.lat >= e.lat && o.lat <= i.lat,
                    l = s.lng >= e.lng && o.lng <= i.lng;
                return a && l
            },
            overlaps: function(t) {
                t = K(t);
                var e = this._southWest,
                    i = this._northEast,
                    o = t.getSouthWest(),
                    s = t.getNorthEast(),
                    a = s.lat > e.lat && o.lat < i.lat,
                    l = s.lng > e.lng && o.lng < i.lng;
                return a && l
            },
            toBBoxString: function() {
                return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
            },
            equals: function(t, e) {
                return t ? (t = K(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) : !1
            },
            isValid: function() {
                return !!(this._southWest && this._northEast)
            }
        };

        function K(t, e) {
            return t instanceof ot ? t : new ot(t, e)
        }

        function H(t, e, i) {
            if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
            this.lat = +t, this.lng = +e, i !== void 0 && (this.alt = +i)
        }
        H.prototype = {
            equals: function(t, e) {
                if (!t) return !1;
                t = Z(t);
                var i = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
                return i <= (e === void 0 ? 1e-9 : e)
            },
            toString: function(t) {
                return "LatLng(" + z(this.lat, t) + ", " + z(this.lng, t) + ")"
            },
            distanceTo: function(t) {
                return Ct.distance(this, Z(t))
            },
            wrap: function() {
                return Ct.wrapLatLng(this)
            },
            toBounds: function(t) {
                var e = 180 * t / 40075017,
                    i = e / Math.cos(Math.PI / 180 * this.lat);
                return K([this.lat - e, this.lng - i], [this.lat + e, this.lng + i])
            },
            clone: function() {
                return new H(this.lat, this.lng, this.alt)
            }
        };

        function Z(t, e, i) {
            return t instanceof H ? t : at(t) && typeof t[0] != "object" ? t.length === 3 ? new H(t[0], t[1], t[2]) : t.length === 2 ? new H(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new H(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new H(t, e, i)
        }
        var Lt = {
                latLngToPoint: function(t, e) {
                    var i = this.projection.project(t),
                        o = this.scale(e);
                    return this.transformation._transform(i, o)
                },
                pointToLatLng: function(t, e) {
                    var i = this.scale(e),
                        o = this.transformation.untransform(t, i);
                    return this.projection.unproject(o)
                },
                project: function(t) {
                    return this.projection.project(t)
                },
                unproject: function(t) {
                    return this.projection.unproject(t)
                },
                scale: function(t) {
                    return 256 * Math.pow(2, t)
                },
                zoom: function(t) {
                    return Math.log(t / 256) / Math.LN2
                },
                getProjectedBounds: function(t) {
                    if (this.infinite) return null;
                    var e = this.projection.bounds,
                        i = this.scale(t),
                        o = this.transformation.transform(e.min, i),
                        s = this.transformation.transform(e.max, i);
                    return new N(o, s)
                },
                infinite: !1,
                wrapLatLng: function(t) {
                    var e = this.wrapLng ? y(t.lng, this.wrapLng, !0) : t.lng,
                        i = this.wrapLat ? y(t.lat, this.wrapLat, !0) : t.lat,
                        o = t.alt;
                    return new H(i, e, o)
                },
                wrapLatLngBounds: function(t) {
                    var e = t.getCenter(),
                        i = this.wrapLatLng(e),
                        o = e.lat - i.lat,
                        s = e.lng - i.lng;
                    if (o === 0 && s === 0) return t;
                    var a = t.getSouthWest(),
                        l = t.getNorthEast(),
                        c = new H(a.lat - o, a.lng - s),
                        _ = new H(l.lat - o, l.lng - s);
                    return new ot(c, _)
                }
            },
            Ct = n({}, Lt, {
                wrapLng: [-180, 180],
                R: 6371e3,
                distance: function(t, e) {
                    var i = Math.PI / 180,
                        o = t.lat * i,
                        s = e.lat * i,
                        a = Math.sin((e.lat - t.lat) * i / 2),
                        l = Math.sin((e.lng - t.lng) * i / 2),
                        c = a * a + Math.cos(o) * Math.cos(s) * l * l,
                        _ = 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c));
                    return this.R * _
                }
            }),
            Bi = 6378137,
            Ke = {
                R: Bi,
                MAX_LATITUDE: 85.0511287798,
                project: function(t) {
                    var e = Math.PI / 180,
                        i = this.MAX_LATITUDE,
                        o = Math.max(Math.min(i, t.lat), -i),
                        s = Math.sin(o * e);
                    return new M(this.R * t.lng * e, this.R * Math.log((1 + s) / (1 - s)) / 2)
                },
                unproject: function(t) {
                    var e = 180 / Math.PI;
                    return new H((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
                },
                bounds: function() {
                    var t = Bi * Math.PI;
                    return new N([-t, -t], [t, t])
                }()
            };

        function Xe(t, e, i, o) {
            if (at(t)) {
                this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
                return
            }
            this._a = t, this._b = e, this._c = i, this._d = o
        }
        Xe.prototype = {
            transform: function(t, e) {
                return this._transform(t.clone(), e)
            },
            _transform: function(t, e) {
                return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
            },
            untransform: function(t, e) {
                return e = e || 1, new M((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
            }
        };

        function Qt(t, e, i, o) {
            return new Xe(t, e, i, o)
        }
        var Je = n({}, Ct, {
                code: "EPSG:3857",
                projection: Ke,
                transformation: function() {
                    var t = .5 / (Math.PI * Ke.R);
                    return Qt(t, .5, -t, .5)
                }()
            }),
            so = n({}, Je, {
                code: "EPSG:900913"
            });

        function Ri(t) {
            return document.createElementNS("http://www.w3.org/2000/svg", t)
        }

        function Ni(t, e) {
            var i = "",
                o, s, a, l, c, _;
            for (o = 0, a = t.length; o < a; o++) {
                for (c = t[o], s = 0, l = c.length; s < l; s++) _ = c[s], i += (s ? "L" : "M") + _.x + " " + _.y;
                i += e ? P.svg ? "z" : "x" : ""
            }
            return i || "M0 0"
        }
        var $e = document.documentElement.style,
            ye = "ActiveXObject" in window,
            ro = ye && !document.addEventListener,
            Hi = "msLaunchUri" in navigator && !("documentMode" in document),
            Qe = pt("webkit"),
            Ui = pt("android"),
            Gi = pt("android 2") || pt("android 3"),
            ao = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
            ho = Ui && pt("Google") && ao < 537 && !("AudioNode" in window),
            ti = !!window.opera,
            Fi = !Hi && pt("chrome"),
            Wi = pt("gecko") && !Qe && !ti && !ye,
            lo = !Fi && pt("safari"),
            Vi = pt("phantom"),
            ji = "OTransition" in $e,
            uo = navigator.platform.indexOf("Win") === 0,
            qi = ye && "transition" in $e,
            ei = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !Gi,
            Yi = "MozPerspective" in $e,
            co = !window.L_DISABLE_3D && (qi || ei || Yi) && !ji && !Vi,
            te = typeof orientation < "u" || pt("mobile"),
            _o = te && Qe,
            fo = te && ei,
            Ki = !window.PointerEvent && window.MSPointerEvent,
            Xi = !!(window.PointerEvent || Ki),
            Ji = "ontouchstart" in window || !!window.TouchEvent,
            po = !window.L_NO_TOUCH && (Ji || Xi),
            mo = te && ti,
            go = te && Wi,
            vo = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
            yo = function() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    window.addEventListener("testPassiveEventSupport", x, e), window.removeEventListener("testPassiveEventSupport", x, e)
                } catch {}
                return t
            }(),
            Lo = function() {
                return !!document.createElement("canvas").getContext
            }(),
            ii = !!(document.createElementNS && Ri("svg").createSVGRect),
            wo = !!ii && function() {
                var t = document.createElement("div");
                return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg"
            }(),
            xo = !ii && function() {
                try {
                    var t = document.createElement("div");
                    t.innerHTML = '<v:shape adj="1"/>';
                    var e = t.firstChild;
                    return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object"
                } catch {
                    return !1
                }
            }(),
            bo = navigator.platform.indexOf("Mac") === 0,
            Po = navigator.platform.indexOf("Linux") === 0;

        function pt(t) {
            return navigator.userAgent.toLowerCase().indexOf(t) >= 0
        }
        var P = {
                ie: ye,
                ielt9: ro,
                edge: Hi,
                webkit: Qe,
                android: Ui,
                android23: Gi,
                androidStock: ho,
                opera: ti,
                chrome: Fi,
                gecko: Wi,
                safari: lo,
                phantom: Vi,
                opera12: ji,
                win: uo,
                ie3d: qi,
                webkit3d: ei,
                gecko3d: Yi,
                any3d: co,
                mobile: te,
                mobileWebkit: _o,
                mobileWebkit3d: fo,
                msPointer: Ki,
                pointer: Xi,
                touch: po,
                touchNative: Ji,
                mobileOpera: mo,
                mobileGecko: go,
                retina: vo,
                passiveEvents: yo,
                canvas: Lo,
                svg: ii,
                vml: xo,
                inlineSvg: wo,
                mac: bo,
                linux: Po
            },
            $i = P.msPointer ? "MSPointerDown" : "pointerdown",
            Qi = P.msPointer ? "MSPointerMove" : "pointermove",
            tn = P.msPointer ? "MSPointerUp" : "pointerup",
            en = P.msPointer ? "MSPointerCancel" : "pointercancel",
            ni = {
                touchstart: $i,
                touchmove: Qi,
                touchend: tn,
                touchcancel: en
            },
            nn = {
                touchstart: So,
                touchmove: Le,
                touchend: Le,
                touchcancel: Le
            },
            Nt = {},
            on = !1;

        function To(t, e, i) {
            return e === "touchstart" && Co(), nn[e] ? (i = nn[e].bind(this, i), t.addEventListener(ni[e], i, !1), i) : (console.warn("wrong event specified:", e), x)
        }

        function ko(t, e, i) {
            if (!ni[e]) {
                console.warn("wrong event specified:", e);
                return
            }
            t.removeEventListener(ni[e], i, !1)
        }

        function Mo(t) {
            Nt[t.pointerId] = t
        }

        function Eo(t) {
            Nt[t.pointerId] && (Nt[t.pointerId] = t)
        }

        function sn(t) {
            delete Nt[t.pointerId]
        }

        function Co() {
            on || (document.addEventListener($i, Mo, !0), document.addEventListener(Qi, Eo, !0), document.addEventListener(tn, sn, !0), document.addEventListener(en, sn, !0), on = !0)
        }

        function Le(t, e) {
            if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
                e.touches = [];
                for (var i in Nt) e.touches.push(Nt[i]);
                e.changedTouches = [e], t(e)
            }
        }

        function So(t, e) {
            e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && nt(e), Le(t, e)
        }

        function Do(t) {
            var e = {},
                i, o;
            for (o in t) i = t[o], e[o] = i && i.bind ? i.bind(t) : i;
            return t = e, e.type = "dblclick", e.detail = 2, e.isTrusted = !1, e._simulated = !0, e
        }
        var Oo = 200;

        function Io(t, e) {
            t.addEventListener("dblclick", e);
            var i = 0,
                o;

            function s(a) {
                if (a.detail !== 1) {
                    o = a.detail;
                    return
                }
                if (!(a.pointerType === "mouse" || a.sourceCapabilities && !a.sourceCapabilities.firesTouchEvents)) {
                    var l = un(a);
                    if (!(l.some(function(_) {
                            return _ instanceof HTMLLabelElement && _.attributes.for
                        }) && !l.some(function(_) {
                            return _ instanceof HTMLInputElement || _ instanceof HTMLSelectElement
                        }))) {
                        var c = Date.now();
                        c - i <= Oo ? (o++, o === 2 && e(Do(a))) : o = 1, i = c
                    }
                }
            }
            return t.addEventListener("click", s), {
                dblclick: e,
                simDblclick: s
            }
        }

        function zo(t, e) {
            t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick)
        }
        var oi = be(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
            ee = be(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
            rn = ee === "webkitTransition" || ee === "OTransition" ? ee + "End" : "transitionend";

        function an(t) {
            return typeof t == "string" ? document.getElementById(t) : t
        }

        function ie(t, e) {
            var i = t.style[e] || t.currentStyle && t.currentStyle[e];
            if ((!i || i === "auto") && document.defaultView) {
                var o = document.defaultView.getComputedStyle(t, null);
                i = o ? o[e] : null
            }
            return i === "auto" ? null : i
        }

        function R(t, e, i) {
            var o = document.createElement(t);
            return o.className = e || "", i && i.appendChild(o), o
        }

        function V(t) {
            var e = t.parentNode;
            e && e.removeChild(t)
        }

        function we(t) {
            for (; t.firstChild;) t.removeChild(t.firstChild)
        }

        function Ht(t) {
            var e = t.parentNode;
            e && e.lastChild !== t && e.appendChild(t)
        }

        function Ut(t) {
            var e = t.parentNode;
            e && e.firstChild !== t && e.insertBefore(t, e.firstChild)
        }

        function si(t, e) {
            if (t.classList !== void 0) return t.classList.contains(e);
            var i = xe(t);
            return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
        }

        function D(t, e) {
            if (t.classList !== void 0)
                for (var i = W(e), o = 0, s = i.length; o < s; o++) t.classList.add(i[o]);
            else if (!si(t, e)) {
                var a = xe(t);
                ri(t, (a ? a + " " : "") + e)
            }
        }

        function q(t, e) {
            t.classList !== void 0 ? t.classList.remove(e) : ri(t, Kt((" " + xe(t) + " ").replace(" " + e + " ", " ")))
        }

        function ri(t, e) {
            t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e
        }

        function xe(t) {
            return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal
        }

        function lt(t, e) {
            "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && Ao(t, e)
        }

        function Ao(t, e) {
            var i = !1,
                o = "DXImageTransform.Microsoft.Alpha";
            try {
                i = t.filters.item(o)
            } catch {
                if (e === 1) return
            }
            e = Math.round(e * 100), i ? (i.Enabled = e !== 100, i.Opacity = e) : t.style.filter += " progid:" + o + "(opacity=" + e + ")"
        }

        function be(t) {
            for (var e = document.documentElement.style, i = 0; i < t.length; i++)
                if (t[i] in e) return t[i];
            return !1
        }

        function It(t, e, i) {
            var o = e || new M(0, 0);
            t.style[oi] = (P.ie3d ? "translate(" + o.x + "px," + o.y + "px)" : "translate3d(" + o.x + "px," + o.y + "px,0)") + (i ? " scale(" + i + ")" : "")
        }

        function X(t, e) {
            t._leaflet_pos = e, P.any3d ? It(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
        }

        function zt(t) {
            return t._leaflet_pos || new M(0, 0)
        }
        var ne, oe, ai;
        if ("onselectstart" in document) ne = function() {
            C(window, "selectstart", nt)
        }, oe = function() {
            F(window, "selectstart", nt)
        };
        else {
            var se = be(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
            ne = function() {
                if (se) {
                    var t = document.documentElement.style;
                    ai = t[se], t[se] = "none"
                }
            }, oe = function() {
                se && (document.documentElement.style[se] = ai, ai = void 0)
            }
        }

        function hi() {
            C(window, "dragstart", nt)
        }

        function li() {
            F(window, "dragstart", nt)
        }
        var Pe, ui;

        function ci(t) {
            for (; t.tabIndex === -1;) t = t.parentNode;
            t.style && (Te(), Pe = t, ui = t.style.outlineStyle, t.style.outlineStyle = "none", C(window, "keydown", Te))
        }

        function Te() {
            Pe && (Pe.style.outlineStyle = ui, Pe = void 0, ui = void 0, F(window, "keydown", Te))
        }

        function hn(t) {
            do t = t.parentNode; while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
            return t
        }

        function di(t) {
            var e = t.getBoundingClientRect();
            return {
                x: e.width / t.offsetWidth || 1,
                y: e.height / t.offsetHeight || 1,
                boundingClientRect: e
            }
        }
        var Zo = {
            __proto__: null,
            TRANSFORM: oi,
            TRANSITION: ee,
            TRANSITION_END: rn,
            get: an,
            getStyle: ie,
            create: R,
            remove: V,
            empty: we,
            toFront: Ht,
            toBack: Ut,
            hasClass: si,
            addClass: D,
            removeClass: q,
            setClass: ri,
            getClass: xe,
            setOpacity: lt,
            testProp: be,
            setTransform: It,
            setPosition: X,
            getPosition: zt,
            get disableTextSelection() {
                return ne
            },
            get enableTextSelection() {
                return oe
            },
            disableImageDrag: hi,
            enableImageDrag: li,
            preventOutline: ci,
            restoreOutline: Te,
            getSizedParentNode: hn,
            getScale: di
        };

        function C(t, e, i, o) {
            if (e && typeof e == "object")
                for (var s in e) fi(t, s, e[s], i);
            else {
                e = W(e);
                for (var a = 0, l = e.length; a < l; a++) fi(t, e[a], i, o)
            }
            return this
        }
        var mt = "_leaflet_events";

        function F(t, e, i, o) {
            if (arguments.length === 1) ln(t), delete t[mt];
            else if (e && typeof e == "object")
                for (var s in e) pi(t, s, e[s], i);
            else if (e = W(e), arguments.length === 2) ln(t, function(c) {
                return Xt(e, c) !== -1
            });
            else
                for (var a = 0, l = e.length; a < l; a++) pi(t, e[a], i, o);
            return this
        }

        function ln(t, e) {
            for (var i in t[mt]) {
                var o = i.split(/\d/)[0];
                (!e || e(o)) && pi(t, o, null, null, i)
            }
        }
        var _i = {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            wheel: !("onwheel" in window) && "mousewheel"
        };

        function fi(t, e, i, o) {
            var s = e + p(i) + (o ? "_" + p(o) : "");
            if (t[mt] && t[mt][s]) return this;
            var a = function(c) {
                    return i.call(o || t, c || window.event)
                },
                l = a;
            !P.touchNative && P.pointer && e.indexOf("touch") === 0 ? a = To(t, e, a) : P.touch && e === "dblclick" ? a = Io(t, a) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(_i[e] || e, a, P.passiveEvents ? {
                passive: !1
            } : !1) : e === "mouseenter" || e === "mouseleave" ? (a = function(c) {
                c = c || window.event, gi(t, c) && l(c)
            }, t.addEventListener(_i[e], a, !1)) : t.addEventListener(e, l, !1) : t.attachEvent("on" + e, a), t[mt] = t[mt] || {}, t[mt][s] = a
        }

        function pi(t, e, i, o, s) {
            s = s || e + p(i) + (o ? "_" + p(o) : "");
            var a = t[mt] && t[mt][s];
            if (!a) return this;
            !P.touchNative && P.pointer && e.indexOf("touch") === 0 ? ko(t, e, a) : P.touch && e === "dblclick" ? zo(t, a) : "removeEventListener" in t ? t.removeEventListener(_i[e] || e, a, !1) : t.detachEvent("on" + e, a), t[mt][s] = null
        }

        function At(t) {
            return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this
        }

        function mi(t) {
            return fi(t, "wheel", At), this
        }

        function re(t) {
            return C(t, "mousedown touchstart dblclick contextmenu", At), t._leaflet_disable_click = !0, this
        }

        function nt(t) {
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
        }

        function Zt(t) {
            return nt(t), At(t), this
        }

        function un(t) {
            if (t.composedPath) return t.composedPath();
            for (var e = [], i = t.target; i;) e.push(i), i = i.parentNode;
            return e
        }

        function cn(t, e) {
            if (!e) return new M(t.clientX, t.clientY);
            var i = di(e),
                o = i.boundingClientRect;
            return new M((t.clientX - o.left) / i.x - e.clientLeft, (t.clientY - o.top) / i.y - e.clientTop)
        }
        var Bo = P.linux && P.chrome ? window.devicePixelRatio : P.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;

        function dn(t) {
            return P.edge ? t.wheelDeltaY / 2 : t.deltaY && t.deltaMode === 0 ? -t.deltaY / Bo : t.deltaY && t.deltaMode === 1 ? -t.deltaY * 20 : t.deltaY && t.deltaMode === 2 ? -t.deltaY * 60 : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? -t.detail * 20 : t.detail ? t.detail / -32765 * 60 : 0
        }

        function gi(t, e) {
            var i = e.relatedTarget;
            if (!i) return !0;
            try {
                for (; i && i !== t;) i = i.parentNode
            } catch {
                return !1
            }
            return i !== t
        }
        var Ro = {
                __proto__: null,
                on: C,
                off: F,
                stopPropagation: At,
                disableScrollPropagation: mi,
                disableClickPropagation: re,
                preventDefault: nt,
                stop: Zt,
                getPropagationPath: un,
                getMousePosition: cn,
                getWheelDelta: dn,
                isExternalTarget: gi,
                addListener: C,
                removeListener: F
            },
            _n = ht.extend({
                run: function(t, e, i, o) {
                    this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(o || .5, .2), this._startPos = zt(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
                },
                stop: function() {
                    this._inProgress && (this._step(!0), this._complete())
                },
                _animate: function() {
                    this._animId = S(this._animate, this), this._step()
                },
                _step: function(t) {
                    var e = +new Date - this._startTime,
                        i = this._duration * 1e3;
                    e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete())
                },
                _runFrame: function(t, e) {
                    var i = this._startPos.add(this._offset.multiplyBy(t));
                    e && i._round(), X(this._el, i), this.fire("step")
                },
                _complete: function() {
                    A(this._animId), this._inProgress = !1, this.fire("end")
                },
                _easeOut: function(t) {
                    return 1 - Math.pow(1 - t, this._easeOutPower)
                }
            }),
            B = ht.extend({
                options: {
                    crs: Je,
                    center: void 0,
                    zoom: void 0,
                    minZoom: void 0,
                    maxZoom: void 0,
                    layers: [],
                    maxBounds: void 0,
                    renderer: void 0,
                    zoomAnimation: !0,
                    zoomAnimationThreshold: 4,
                    fadeAnimation: !0,
                    markerZoomAnimation: !0,
                    transform3DLimit: 8388608,
                    zoomSnap: 1,
                    zoomDelta: 1,
                    trackResize: !0
                },
                initialize: function(t, e) {
                    e = G(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = h(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(Z(e.center), e.zoom, {
                        reset: !0
                    }), this.callInitHooks(), this._zoomAnimated = ee && P.any3d && !P.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), C(this._proxy, rn, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
                },
                setView: function(t, e, i) {
                    if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(Z(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && i !== !0) {
                        i.animate !== void 0 && (i.zoom = n({
                            animate: i.animate
                        }, i.zoom), i.pan = n({
                            animate: i.animate,
                            duration: i.duration
                        }, i.pan));
                        var o = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
                        if (o) return clearTimeout(this._sizeTimer), this
                    }
                    return this._resetView(t, e, i.pan && i.pan.noMoveStart), this
                },
                setZoom: function(t, e) {
                    return this._loaded ? this.setView(this.getCenter(), t, {
                        zoom: e
                    }) : (this._zoom = t, this)
                },
                zoomIn: function(t, e) {
                    return t = t || (P.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e)
                },
                zoomOut: function(t, e) {
                    return t = t || (P.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e)
                },
                setZoomAround: function(t, e, i) {
                    var o = this.getZoomScale(e),
                        s = this.getSize().divideBy(2),
                        a = t instanceof M ? t : this.latLngToContainerPoint(t),
                        l = a.subtract(s).multiplyBy(1 - 1 / o),
                        c = this.containerPointToLatLng(s.add(l));
                    return this.setView(c, e, {
                        zoom: i
                    })
                },
                _getBoundsCenterZoom: function(t, e) {
                    e = e || {}, t = t.getBounds ? t.getBounds() : K(t);
                    var i = T(e.paddingTopLeft || e.padding || [0, 0]),
                        o = T(e.paddingBottomRight || e.padding || [0, 0]),
                        s = this.getBoundsZoom(t, !1, i.add(o));
                    if (s = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, s) : s, s === 1 / 0) return {
                        center: t.getCenter(),
                        zoom: s
                    };
                    var a = o.subtract(i).divideBy(2),
                        l = this.project(t.getSouthWest(), s),
                        c = this.project(t.getNorthEast(), s),
                        _ = this.unproject(l.add(c).divideBy(2).add(a), s);
                    return {
                        center: _,
                        zoom: s
                    }
                },
                fitBounds: function(t, e) {
                    if (t = K(t), !t.isValid()) throw new Error("Bounds are not valid.");
                    var i = this._getBoundsCenterZoom(t, e);
                    return this.setView(i.center, i.zoom, e)
                },
                fitWorld: function(t) {
                    return this.fitBounds([
                        [-90, -180],
                        [90, 180]
                    ], t)
                },
                panTo: function(t, e) {
                    return this.setView(t, this._zoom, {
                        pan: e
                    })
                },
                panBy: function(t, e) {
                    if (t = T(t).round(), e = e || {}, !t.x && !t.y) return this.fire("moveend");
                    if (e.animate !== !0 && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                    if (this._panAnim || (this._panAnim = new _n, this._panAnim.on({
                            step: this._onPanTransitionStep,
                            end: this._onPanTransitionEnd
                        }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
                        D(this._mapPane, "leaflet-pan-anim");
                        var i = this._getMapPanePos().subtract(t).round();
                        this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
                    } else this._rawPanBy(t), this.fire("move").fire("moveend");
                    return this
                },
                flyTo: function(t, e, i) {
                    if (i = i || {}, i.animate === !1 || !P.any3d) return this.setView(t, e, i);
                    this._stop();
                    var o = this.project(this.getCenter()),
                        s = this.project(t),
                        a = this.getSize(),
                        l = this._zoom;
                    t = Z(t), e = e === void 0 ? l : e;
                    var c = Math.max(a.x, a.y),
                        _ = c * this.getZoomScale(l, e),
                        g = s.distanceTo(o) || 1,
                        w = 1.42,
                        k = w * w;

                    function I(J) {
                        var Be = J ? -1 : 1,
                            ks = J ? _ : c,
                            Ms = _ * _ - c * c + Be * k * k * g * g,
                            Es = 2 * ks * k * g,
                            Ei = Ms / Es,
                            qn = Math.sqrt(Ei * Ei + 1) - Ei,
                            Cs = qn < 1e-9 ? -18 : Math.log(qn);
                        return Cs
                    }

                    function st(J) {
                        return (Math.exp(J) - Math.exp(-J)) / 2
                    }

                    function it(J) {
                        return (Math.exp(J) + Math.exp(-J)) / 2
                    }

                    function ct(J) {
                        return st(J) / it(J)
                    }
                    var rt = I(0);

                    function qt(J) {
                        return c * (it(rt) / it(rt + w * J))
                    }

                    function xs(J) {
                        return c * (it(rt) * ct(rt + w * J) - st(rt)) / k
                    }

                    function bs(J) {
                        return 1 - Math.pow(1 - J, 1.5)
                    }
                    var Ps = Date.now(),
                        Vn = (I(1) - rt) / w,
                        Ts = i.duration ? 1e3 * i.duration : 1e3 * Vn * .8;

                    function jn() {
                        var J = (Date.now() - Ps) / Ts,
                            Be = bs(J) * Vn;
                        J <= 1 ? (this._flyToFrame = S(jn, this), this._move(this.unproject(o.add(s.subtract(o).multiplyBy(xs(Be) / g)), l), this.getScaleZoom(c / qt(Be), l), {
                            flyTo: !0
                        })) : this._move(t, e)._moveEnd(!0)
                    }
                    return this._moveStart(!0, i.noMoveStart), jn.call(this), this
                },
                flyToBounds: function(t, e) {
                    var i = this._getBoundsCenterZoom(t, e);
                    return this.flyTo(i.center, i.zoom, e)
                },
                setMaxBounds: function(t) {
                    return t = K(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this)
                },
                setMinZoom: function(t) {
                    var e = this.options.minZoom;
                    return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
                },
                setMaxZoom: function(t) {
                    var e = this.options.maxZoom;
                    return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
                },
                panInsideBounds: function(t, e) {
                    this._enforcingBounds = !0;
                    var i = this.getCenter(),
                        o = this._limitCenter(i, this._zoom, K(t));
                    return i.equals(o) || this.panTo(o, e), this._enforcingBounds = !1, this
                },
                panInside: function(t, e) {
                    e = e || {};
                    var i = T(e.paddingTopLeft || e.padding || [0, 0]),
                        o = T(e.paddingBottomRight || e.padding || [0, 0]),
                        s = this.project(this.getCenter()),
                        a = this.project(t),
                        l = this.getPixelBounds(),
                        c = Y([l.min.add(i), l.max.subtract(o)]),
                        _ = c.getSize();
                    if (!c.contains(a)) {
                        this._enforcingBounds = !0;
                        var g = a.subtract(c.getCenter()),
                            w = c.extend(a).getSize().subtract(_);
                        s.x += g.x < 0 ? -w.x : w.x, s.y += g.y < 0 ? -w.y : w.y, this.panTo(this.unproject(s), e), this._enforcingBounds = !1
                    }
                    return this
                },
                invalidateSize: function(t) {
                    if (!this._loaded) return this;
                    t = n({
                        animate: !1,
                        pan: !0
                    }, t === !0 ? {
                        animate: !0
                    } : t);
                    var e = this.getSize();
                    this._sizeChanged = !0, this._lastCenter = null;
                    var i = this.getSize(),
                        o = e.divideBy(2).round(),
                        s = i.divideBy(2).round(),
                        a = o.subtract(s);
                    return !a.x && !a.y ? this : (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(h(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                        oldSize: e,
                        newSize: i
                    }))
                },
                stop: function() {
                    return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
                },
                locate: function(t) {
                    if (t = this._locateOptions = n({
                            timeout: 1e4,
                            watch: !1
                        }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                        code: 0,
                        message: "Geolocation not supported."
                    }), this;
                    var e = h(this._handleGeolocationResponse, this),
                        i = h(this._handleGeolocationError, this);
                    return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
                },
                stopLocate: function() {
                    return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
                },
                _handleGeolocationError: function(t) {
                    if (this._container._leaflet_id) {
                        var e = t.code,
                            i = t.message || (e === 1 ? "permission denied" : e === 2 ? "position unavailable" : "timeout");
                        this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                            code: e,
                            message: "Geolocation error: " + i + "."
                        })
                    }
                },
                _handleGeolocationResponse: function(t) {
                    if (this._container._leaflet_id) {
                        var e = t.coords.latitude,
                            i = t.coords.longitude,
                            o = new H(e, i),
                            s = o.toBounds(t.coords.accuracy * 2),
                            a = this._locateOptions;
                        if (a.setView) {
                            var l = this.getBoundsZoom(s);
                            this.setView(o, a.maxZoom ? Math.min(l, a.maxZoom) : l)
                        }
                        var c = {
                            latlng: o,
                            bounds: s,
                            timestamp: t.timestamp
                        };
                        for (var _ in t.coords) typeof t.coords[_] == "number" && (c[_] = t.coords[_]);
                        this.fire("locationfound", c)
                    }
                },
                addHandler: function(t, e) {
                    if (!e) return this;
                    var i = this[t] = new e(this);
                    return this._handlers.push(i), this.options[t] && i.enable(), this
                },
                remove: function() {
                    if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                    try {
                        delete this._container._leaflet_id, delete this._containerId
                    } catch {
                        this._container._leaflet_id = void 0, this._containerId = void 0
                    }
                    this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), V(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (A(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
                    var t;
                    for (t in this._layers) this._layers[t].remove();
                    for (t in this._panes) V(this._panes[t]);
                    return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
                },
                createPane: function(t, e) {
                    var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
                        o = R("div", i, e || this._mapPane);
                    return t && (this._panes[t] = o), o
                },
                getCenter: function() {
                    return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint())
                },
                getZoom: function() {
                    return this._zoom
                },
                getBounds: function() {
                    var t = this.getPixelBounds(),
                        e = this.unproject(t.getBottomLeft()),
                        i = this.unproject(t.getTopRight());
                    return new ot(e, i)
                },
                getMinZoom: function() {
                    return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom
                },
                getMaxZoom: function() {
                    return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
                },
                getBoundsZoom: function(t, e, i) {
                    t = K(t), i = T(i || [0, 0]);
                    var o = this.getZoom() || 0,
                        s = this.getMinZoom(),
                        a = this.getMaxZoom(),
                        l = t.getNorthWest(),
                        c = t.getSouthEast(),
                        _ = this.getSize().subtract(i),
                        g = Y(this.project(c, o), this.project(l, o)).getSize(),
                        w = P.any3d ? this.options.zoomSnap : 1,
                        k = _.x / g.x,
                        I = _.y / g.y,
                        st = e ? Math.max(k, I) : Math.min(k, I);
                    return o = this.getScaleZoom(st, o), w && (o = Math.round(o / (w / 100)) * (w / 100), o = e ? Math.ceil(o / w) * w : Math.floor(o / w) * w), Math.max(s, Math.min(a, o))
                },
                getSize: function() {
                    return (!this._size || this._sizeChanged) && (this._size = new M(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
                },
                getPixelBounds: function(t, e) {
                    var i = this._getTopLeftPoint(t, e);
                    return new N(i, i.add(this.getSize()))
                },
                getPixelOrigin: function() {
                    return this._checkIfLoaded(), this._pixelOrigin
                },
                getPixelWorldBounds: function(t) {
                    return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t)
                },
                getPane: function(t) {
                    return typeof t == "string" ? this._panes[t] : t
                },
                getPanes: function() {
                    return this._panes
                },
                getContainer: function() {
                    return this._container
                },
                getZoomScale: function(t, e) {
                    var i = this.options.crs;
                    return e = e === void 0 ? this._zoom : e, i.scale(t) / i.scale(e)
                },
                getScaleZoom: function(t, e) {
                    var i = this.options.crs;
                    e = e === void 0 ? this._zoom : e;
                    var o = i.zoom(t * i.scale(e));
                    return isNaN(o) ? 1 / 0 : o
                },
                project: function(t, e) {
                    return e = e === void 0 ? this._zoom : e, this.options.crs.latLngToPoint(Z(t), e)
                },
                unproject: function(t, e) {
                    return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(T(t), e)
                },
                layerPointToLatLng: function(t) {
                    var e = T(t).add(this.getPixelOrigin());
                    return this.unproject(e)
                },
                latLngToLayerPoint: function(t) {
                    var e = this.project(Z(t))._round();
                    return e._subtract(this.getPixelOrigin())
                },
                wrapLatLng: function(t) {
                    return this.options.crs.wrapLatLng(Z(t))
                },
                wrapLatLngBounds: function(t) {
                    return this.options.crs.wrapLatLngBounds(K(t))
                },
                distance: function(t, e) {
                    return this.options.crs.distance(Z(t), Z(e))
                },
                containerPointToLayerPoint: function(t) {
                    return T(t).subtract(this._getMapPanePos())
                },
                layerPointToContainerPoint: function(t) {
                    return T(t).add(this._getMapPanePos())
                },
                containerPointToLatLng: function(t) {
                    var e = this.containerPointToLayerPoint(T(t));
                    return this.layerPointToLatLng(e)
                },
                latLngToContainerPoint: function(t) {
                    return this.layerPointToContainerPoint(this.latLngToLayerPoint(Z(t)))
                },
                mouseEventToContainerPoint: function(t) {
                    return cn(t, this._container)
                },
                mouseEventToLayerPoint: function(t) {
                    return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
                },
                mouseEventToLatLng: function(t) {
                    return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
                },
                _initContainer: function(t) {
                    var e = this._container = an(t);
                    if (e) {
                        if (e._leaflet_id) throw new Error("Map container is already initialized.")
                    } else throw new Error("Map container not found.");
                    C(e, "scroll", this._onScroll, this), this._containerId = p(e)
                },
                _initLayout: function() {
                    var t = this._container;
                    this._fadeAnimated = this.options.fadeAnimation && P.any3d, D(t, "leaflet-container" + (P.touch ? " leaflet-touch" : "") + (P.retina ? " leaflet-retina" : "") + (P.ielt9 ? " leaflet-oldie" : "") + (P.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                    var e = ie(t, "position");
                    e !== "absolute" && e !== "relative" && e !== "fixed" && e !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
                },
                _initPanes: function() {
                    var t = this._panes = {};
                    this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), X(this._mapPane, new M(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (D(t.markerPane, "leaflet-zoom-hide"), D(t.shadowPane, "leaflet-zoom-hide"))
                },
                _resetView: function(t, e, i) {
                    X(this._mapPane, new M(0, 0));
                    var o = !this._loaded;
                    this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
                    var s = this._zoom !== e;
                    this._moveStart(s, i)._move(t, e)._moveEnd(s), this.fire("viewreset"), o && this.fire("load")
                },
                _moveStart: function(t, e) {
                    return t && this.fire("zoomstart"), e || this.fire("movestart"), this
                },
                _move: function(t, e, i, o) {
                    e === void 0 && (e = this._zoom);
                    var s = this._zoom !== e;
                    return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), o ? i && i.pinch && this.fire("zoom", i) : ((s || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)), this
                },
                _moveEnd: function(t) {
                    return t && this.fire("zoomend"), this.fire("moveend")
                },
                _stop: function() {
                    return A(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
                },
                _rawPanBy: function(t) {
                    X(this._mapPane, this._getMapPanePos().subtract(t))
                },
                _getZoomSpan: function() {
                    return this.getMaxZoom() - this.getMinZoom()
                },
                _panInsideMaxBounds: function() {
                    this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
                },
                _checkIfLoaded: function() {
                    if (!this._loaded) throw new Error("Set map center and zoom first.")
                },
                _initEvents: function(t) {
                    this._targets = {}, this._targets[p(this._container)] = this;
                    var e = t ? F : C;
                    e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), P.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
                },
                _onResize: function() {
                    A(this._resizeRequest), this._resizeRequest = S(function() {
                        this.invalidateSize({
                            debounceMoveend: !0
                        })
                    }, this)
                },
                _onScroll: function() {
                    this._container.scrollTop = 0, this._container.scrollLeft = 0
                },
                _onMoveEnd: function() {
                    var t = this._getMapPanePos();
                    Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
                },
                _findEventTargets: function(t, e) {
                    for (var i = [], o, s = e === "mouseout" || e === "mouseover", a = t.target || t.srcElement, l = !1; a;) {
                        if (o = this._targets[p(a)], o && (e === "click" || e === "preclick") && this._draggableMoved(o)) {
                            l = !0;
                            break
                        }
                        if (o && o.listens(e, !0) && (s && !gi(a, t) || (i.push(o), s)) || a === this._container) break;
                        a = a.parentNode
                    }
                    return !i.length && !l && !s && this.listens(e, !0) && (i = [this]), i
                },
                _isClickDisabled: function(t) {
                    for (; t && t !== this._container;) {
                        if (t._leaflet_disable_click) return !0;
                        t = t.parentNode
                    }
                },
                _handleDOMEvent: function(t) {
                    var e = t.target || t.srcElement;
                    if (!(!this._loaded || e._leaflet_disable_events || t.type === "click" && this._isClickDisabled(e))) {
                        var i = t.type;
                        i === "mousedown" && ci(e), this._fireDOMEvent(t, i)
                    }
                },
                _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
                _fireDOMEvent: function(t, e, i) {
                    if (t.type === "click") {
                        var o = n({}, t);
                        o.type = "preclick", this._fireDOMEvent(o, o.type, i)
                    }
                    var s = this._findEventTargets(t, e);
                    if (i) {
                        for (var a = [], l = 0; l < i.length; l++) i[l].listens(e, !0) && a.push(i[l]);
                        s = a.concat(s)
                    }
                    if (s.length) {
                        e === "contextmenu" && nt(t);
                        var c = s[0],
                            _ = {
                                originalEvent: t
                            };
                        if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
                            var g = c.getLatLng && (!c._radius || c._radius <= 10);
                            _.containerPoint = g ? this.latLngToContainerPoint(c.getLatLng()) : this.mouseEventToContainerPoint(t), _.layerPoint = this.containerPointToLayerPoint(_.containerPoint), _.latlng = g ? c.getLatLng() : this.layerPointToLatLng(_.layerPoint)
                        }
                        for (l = 0; l < s.length; l++)
                            if (s[l].fire(e, _, !0), _.originalEvent._stopped || s[l].options.bubblingMouseEvents === !1 && Xt(this._mouseEvents, e) !== -1) return
                    }
                },
                _draggableMoved: function(t) {
                    return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
                },
                _clearHandlers: function() {
                    for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable()
                },
                whenReady: function(t, e) {
                    return this._loaded ? t.call(e || this, {
                        target: this
                    }) : this.on("load", t, e), this
                },
                _getMapPanePos: function() {
                    return zt(this._mapPane) || new M(0, 0)
                },
                _moved: function() {
                    var t = this._getMapPanePos();
                    return t && !t.equals([0, 0])
                },
                _getTopLeftPoint: function(t, e) {
                    var i = t && e !== void 0 ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
                    return i.subtract(this._getMapPanePos())
                },
                _getNewPixelOrigin: function(t, e) {
                    var i = this.getSize()._divideBy(2);
                    return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
                },
                _latLngToNewLayerPoint: function(t, e, i) {
                    var o = this._getNewPixelOrigin(i, e);
                    return this.project(t, e)._subtract(o)
                },
                _latLngBoundsToNewLayerBounds: function(t, e, i) {
                    var o = this._getNewPixelOrigin(i, e);
                    return Y([this.project(t.getSouthWest(), e)._subtract(o), this.project(t.getNorthWest(), e)._subtract(o), this.project(t.getSouthEast(), e)._subtract(o), this.project(t.getNorthEast(), e)._subtract(o)])
                },
                _getCenterLayerPoint: function() {
                    return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                },
                _getCenterOffset: function(t) {
                    return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
                },
                _limitCenter: function(t, e, i) {
                    if (!i) return t;
                    var o = this.project(t, e),
                        s = this.getSize().divideBy(2),
                        a = new N(o.subtract(s), o.add(s)),
                        l = this._getBoundsOffset(a, i, e);
                    return Math.abs(l.x) <= 1 && Math.abs(l.y) <= 1 ? t : this.unproject(o.add(l), e)
                },
                _limitOffset: function(t, e) {
                    if (!e) return t;
                    var i = this.getPixelBounds(),
                        o = new N(i.min.add(t), i.max.add(t));
                    return t.add(this._getBoundsOffset(o, e))
                },
                _getBoundsOffset: function(t, e, i) {
                    var o = Y(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
                        s = o.min.subtract(t.min),
                        a = o.max.subtract(t.max),
                        l = this._rebound(s.x, -a.x),
                        c = this._rebound(s.y, -a.y);
                    return new M(l, c)
                },
                _rebound: function(t, e) {
                    return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
                },
                _limitZoom: function(t) {
                    var e = this.getMinZoom(),
                        i = this.getMaxZoom(),
                        o = P.any3d ? this.options.zoomSnap : 1;
                    return o && (t = Math.round(t / o) * o), Math.max(e, Math.min(i, t))
                },
                _onPanTransitionStep: function() {
                    this.fire("move")
                },
                _onPanTransitionEnd: function() {
                    q(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
                },
                _tryAnimatedPan: function(t, e) {
                    var i = this._getCenterOffset(t)._trunc();
                    return (e && e.animate) !== !0 && !this.getSize().contains(i) ? !1 : (this.panBy(i, e), !0)
                },
                _createAnimProxy: function() {
                    var t = this._proxy = R("div", "leaflet-proxy leaflet-zoom-animated");
                    this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
                        var i = oi,
                            o = this._proxy.style[i];
                        It(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), o === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd()
                    }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this)
                },
                _destroyAnimProxy: function() {
                    V(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy
                },
                _animMoveEnd: function() {
                    var t = this.getCenter(),
                        e = this.getZoom();
                    It(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
                },
                _catchTransitionEnd: function(t) {
                    this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
                },
                _nothingToAnimate: function() {
                    return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                },
                _tryAnimatedZoom: function(t, e, i) {
                    if (this._animatingZoom) return !0;
                    if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                    var o = this.getZoomScale(e),
                        s = this._getCenterOffset(t)._divideBy(1 - 1 / o);
                    return i.animate !== !0 && !this.getSize().contains(s) ? !1 : (S(function() {
                        this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0)
                    }, this), !0)
                },
                _animateZoom: function(t, e, i, o) {
                    this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, D(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                        center: t,
                        zoom: e,
                        noUpdate: o
                    }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(h(this._onZoomTransitionEnd, this), 250))
                },
                _onZoomTransitionEnd: function() {
                    this._animatingZoom && (this._mapPane && q(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0))
                }
            });

        function No(t, e) {
            return new B(t, e)
        }
        var dt = et.extend({
                options: {
                    position: "topright"
                },
                initialize: function(t) {
                    G(this, t)
                },
                getPosition: function() {
                    return this.options.position
                },
                setPosition: function(t) {
                    var e = this._map;
                    return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
                },
                getContainer: function() {
                    return this._container
                },
                addTo: function(t) {
                    this.remove(), this._map = t;
                    var e = this._container = this.onAdd(t),
                        i = this.getPosition(),
                        o = t._controlCorners[i];
                    return D(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? o.insertBefore(e, o.firstChild) : o.appendChild(e), this._map.on("unload", this.remove, this), this
                },
                remove: function() {
                    return this._map ? (V(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this
                },
                _refocusOnMap: function(t) {
                    this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
                }
            }),
            ae = function(t) {
                return new dt(t)
            };
        B.include({
            addControl: function(t) {
                return t.addTo(this), this
            },
            removeControl: function(t) {
                return t.remove(), this
            },
            _initControlPos: function() {
                var t = this._controlCorners = {},
                    e = "leaflet-",
                    i = this._controlContainer = R("div", e + "control-container", this._container);

                function o(s, a) {
                    var l = e + s + " " + e + a;
                    t[s + a] = R("div", l, i)
                }
                o("top", "left"), o("top", "right"), o("bottom", "left"), o("bottom", "right")
            },
            _clearControlPos: function() {
                for (var t in this._controlCorners) V(this._controlCorners[t]);
                V(this._controlContainer), delete this._controlCorners, delete this._controlContainer
            }
        });
        var fn = dt.extend({
                options: {
                    collapsed: !0,
                    position: "topright",
                    autoZIndex: !0,
                    hideSingleBase: !1,
                    sortLayers: !1,
                    sortFunction: function(t, e, i, o) {
                        return i < o ? -1 : o < i ? 1 : 0
                    }
                },
                initialize: function(t, e, i) {
                    G(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
                    for (var o in t) this._addLayer(t[o], o);
                    for (o in e) this._addLayer(e[o], o, !0)
                },
                onAdd: function(t) {
                    this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
                    for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
                    return this._container
                },
                addTo: function(t) {
                    return dt.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
                },
                onRemove: function() {
                    this._map.off("zoomend", this._checkDisabledLayers, this);
                    for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
                },
                addBaseLayer: function(t, e) {
                    return this._addLayer(t, e), this._map ? this._update() : this
                },
                addOverlay: function(t, e) {
                    return this._addLayer(t, e, !0), this._map ? this._update() : this
                },
                removeLayer: function(t) {
                    t.off("add remove", this._onLayerChange, this);
                    var e = this._getLayer(p(t));
                    return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this
                },
                expand: function() {
                    D(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
                    var t = this._map.getSize().y - (this._container.offsetTop + 50);
                    return t < this._section.clientHeight ? (D(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : q(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
                },
                collapse: function() {
                    return q(this._container, "leaflet-control-layers-expanded"), this
                },
                _initLayout: function() {
                    var t = "leaflet-control-layers",
                        e = this._container = R("div", t),
                        i = this.options.collapsed;
                    e.setAttribute("aria-haspopup", !0), re(e), mi(e);
                    var o = this._section = R("section", t + "-list");
                    i && (this._map.on("click", this.collapse, this), C(e, {
                        mouseenter: this._expandSafely,
                        mouseleave: this.collapse
                    }, this));
                    var s = this._layersLink = R("a", t + "-toggle", e);
                    s.href = "#", s.title = "Layers", s.setAttribute("role", "button"), C(s, {
                        keydown: function(a) {
                            a.keyCode === 13 && this._expandSafely()
                        },
                        click: function(a) {
                            nt(a), this._expandSafely()
                        }
                    }, this), i || this.expand(), this._baseLayersList = R("div", t + "-base", o), this._separator = R("div", t + "-separator", o), this._overlaysList = R("div", t + "-overlays", o), e.appendChild(o)
                },
                _getLayer: function(t) {
                    for (var e = 0; e < this._layers.length; e++)
                        if (this._layers[e] && p(this._layers[e].layer) === t) return this._layers[e]
                },
                _addLayer: function(t, e, i) {
                    this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                        layer: t,
                        name: e,
                        overlay: i
                    }), this.options.sortLayers && this._layers.sort(h(function(o, s) {
                        return this.options.sortFunction(o.layer, s.layer, o.name, s.name)
                    }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
                },
                _update: function() {
                    if (!this._container) return this;
                    we(this._baseLayersList), we(this._overlaysList), this._layerControlInputs = [];
                    var t, e, i, o, s = 0;
                    for (i = 0; i < this._layers.length; i++) o = this._layers[i], this._addItem(o), e = e || o.overlay, t = t || !o.overlay, s += o.overlay ? 0 : 1;
                    return this.options.hideSingleBase && (t = t && s > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this
                },
                _onLayerChange: function(t) {
                    this._handlingClick || this._update();
                    var e = this._getLayer(p(t.target)),
                        i = e.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
                    i && this._map.fire(i, e)
                },
                _createRadioElement: function(t, e) {
                    var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
                        o = document.createElement("div");
                    return o.innerHTML = i, o.firstChild
                },
                _addItem: function(t) {
                    var e = document.createElement("label"),
                        i = this._map.hasLayer(t.layer),
                        o;
                    t.overlay ? (o = document.createElement("input"), o.type = "checkbox", o.className = "leaflet-control-layers-selector", o.defaultChecked = i) : o = this._createRadioElement("leaflet-base-layers_" + p(this), i), this._layerControlInputs.push(o), o.layerId = p(t.layer), C(o, "click", this._onInputClick, this);
                    var s = document.createElement("span");
                    s.innerHTML = " " + t.name;
                    var a = document.createElement("span");
                    e.appendChild(a), a.appendChild(o), a.appendChild(s);
                    var l = t.overlay ? this._overlaysList : this._baseLayersList;
                    return l.appendChild(e), this._checkDisabledLayers(), e
                },
                _onInputClick: function() {
                    if (!this._preventClick) {
                        var t = this._layerControlInputs,
                            e, i, o = [],
                            s = [];
                        this._handlingClick = !0;
                        for (var a = t.length - 1; a >= 0; a--) e = t[a], i = this._getLayer(e.layerId).layer, e.checked ? o.push(i) : e.checked || s.push(i);
                        for (a = 0; a < s.length; a++) this._map.hasLayer(s[a]) && this._map.removeLayer(s[a]);
                        for (a = 0; a < o.length; a++) this._map.hasLayer(o[a]) || this._map.addLayer(o[a]);
                        this._handlingClick = !1, this._refocusOnMap()
                    }
                },
                _checkDisabledLayers: function() {
                    for (var t = this._layerControlInputs, e, i, o = this._map.getZoom(), s = t.length - 1; s >= 0; s--) e = t[s], i = this._getLayer(e.layerId).layer, e.disabled = i.options.minZoom !== void 0 && o < i.options.minZoom || i.options.maxZoom !== void 0 && o > i.options.maxZoom
                },
                _expandIfNotCollapsed: function() {
                    return this._map && !this.options.collapsed && this.expand(), this
                },
                _expandSafely: function() {
                    var t = this._section;
                    this._preventClick = !0, C(t, "click", nt), this.expand();
                    var e = this;
                    setTimeout(function() {
                        F(t, "click", nt), e._preventClick = !1
                    })
                }
            }),
            Ho = function(t, e, i) {
                return new fn(t, e, i)
            },
            vi = dt.extend({
                options: {
                    position: "topleft",
                    zoomInText: '<span aria-hidden="true">+</span>',
                    zoomInTitle: "Zoom in",
                    zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
                    zoomOutTitle: "Zoom out"
                },
                onAdd: function(t) {
                    var e = "leaflet-control-zoom",
                        i = R("div", e + " leaflet-bar"),
                        o = this.options;
                    return this._zoomInButton = this._createButton(o.zoomInText, o.zoomInTitle, e + "-in", i, this._zoomIn), this._zoomOutButton = this._createButton(o.zoomOutText, o.zoomOutTitle, e + "-out", i, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
                },
                onRemove: function(t) {
                    t.off("zoomend zoomlevelschange", this._updateDisabled, this)
                },
                disable: function() {
                    return this._disabled = !0, this._updateDisabled(), this
                },
                enable: function() {
                    return this._disabled = !1, this._updateDisabled(), this
                },
                _zoomIn: function(t) {
                    !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                },
                _zoomOut: function(t) {
                    !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                },
                _createButton: function(t, e, i, o, s) {
                    var a = R("a", i, o);
                    return a.innerHTML = t, a.href = "#", a.title = e, a.setAttribute("role", "button"), a.setAttribute("aria-label", e), re(a), C(a, "click", Zt), C(a, "click", s, this), C(a, "click", this._refocusOnMap, this), a
                },
                _updateDisabled: function() {
                    var t = this._map,
                        e = "leaflet-disabled";
                    q(this._zoomInButton, e), q(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (D(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (D(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"))
                }
            });
        B.mergeOptions({
            zoomControl: !0
        }), B.addInitHook(function() {
            this.options.zoomControl && (this.zoomControl = new vi, this.addControl(this.zoomControl))
        });
        var Uo = function(t) {
                return new vi(t)
            },
            pn = dt.extend({
                options: {
                    position: "bottomleft",
                    maxWidth: 100,
                    metric: !0,
                    imperial: !0
                },
                onAdd: function(t) {
                    var e = "leaflet-control-scale",
                        i = R("div", e),
                        o = this.options;
                    return this._addScales(o, e + "-line", i), t.on(o.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
                },
                onRemove: function(t) {
                    t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                },
                _addScales: function(t, e, i) {
                    t.metric && (this._mScale = R("div", e, i)), t.imperial && (this._iScale = R("div", e, i))
                },
                _update: function() {
                    var t = this._map,
                        e = t.getSize().y / 2,
                        i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
                    this._updateScales(i)
                },
                _updateScales: function(t) {
                    this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
                },
                _updateMetric: function(t) {
                    var e = this._getRoundNum(t),
                        i = e < 1e3 ? e + " m" : e / 1e3 + " km";
                    this._updateScale(this._mScale, i, e / t)
                },
                _updateImperial: function(t) {
                    var e = t * 3.2808399,
                        i, o, s;
                    e > 5280 ? (i = e / 5280, o = this._getRoundNum(i), this._updateScale(this._iScale, o + " mi", o / i)) : (s = this._getRoundNum(e), this._updateScale(this._iScale, s + " ft", s / e))
                },
                _updateScale: function(t, e, i) {
                    t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e
                },
                _getRoundNum: function(t) {
                    var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                        i = t / e;
                    return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i
                }
            }),
            Go = function(t) {
                return new pn(t)
            },
            Fo = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
            yi = dt.extend({
                options: {
                    position: "bottomright",
                    prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (P.inlineSvg ? Fo + " " : "") + "Leaflet</a>"
                },
                initialize: function(t) {
                    G(this, t), this._attributions = {}
                },
                onAdd: function(t) {
                    t.attributionControl = this, this._container = R("div", "leaflet-control-attribution"), re(this._container);
                    for (var e in t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                    return this._update(), t.on("layeradd", this._addAttribution, this), this._container
                },
                onRemove: function(t) {
                    t.off("layeradd", this._addAttribution, this)
                },
                _addAttribution: function(t) {
                    t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function() {
                        this.removeAttribution(t.layer.getAttribution())
                    }, this))
                },
                setPrefix: function(t) {
                    return this.options.prefix = t, this._update(), this
                },
                addAttribution: function(t) {
                    return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
                },
                removeAttribution: function(t) {
                    return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
                },
                _update: function() {
                    if (this._map) {
                        var t = [];
                        for (var e in this._attributions) this._attributions[e] && t.push(e);
                        var i = [];
                        this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ')
                    }
                }
            });
        B.mergeOptions({
            attributionControl: !0
        }), B.addInitHook(function() {
            this.options.attributionControl && new yi().addTo(this)
        });
        var Wo = function(t) {
            return new yi(t)
        };
        dt.Layers = fn, dt.Zoom = vi, dt.Scale = pn, dt.Attribution = yi, ae.layers = Ho, ae.zoom = Uo, ae.scale = Go, ae.attribution = Wo;
        var gt = et.extend({
            initialize: function(t) {
                this._map = t
            },
            enable: function() {
                return this._enabled ? this : (this._enabled = !0, this.addHooks(), this)
            },
            disable: function() {
                return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
            },
            enabled: function() {
                return !!this._enabled
            }
        });
        gt.addTo = function(t, e) {
            return t.addHandler(e, this), this
        };
        var Vo = {
                Events: tt
            },
            mn = P.touch ? "touchstart mousedown" : "mousedown",
            St = ht.extend({
                options: {
                    clickTolerance: 3
                },
                initialize: function(t, e, i, o) {
                    G(this, o), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i
                },
                enable: function() {
                    this._enabled || (C(this._dragStartTarget, mn, this._onDown, this), this._enabled = !0)
                },
                disable: function() {
                    this._enabled && (St._dragging === this && this.finishDrag(!0), F(this._dragStartTarget, mn, this._onDown, this), this._enabled = !1, this._moved = !1)
                },
                _onDown: function(t) {
                    if (this._enabled && (this._moved = !1, !si(this._element, "leaflet-zoom-anim"))) {
                        if (t.touches && t.touches.length !== 1) {
                            St._dragging === this && this.finishDrag();
                            return
                        }
                        if (!(St._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (St._dragging = this, this._preventOutline && ci(this._element), hi(), ne(), !this._moving)) {
                            this.fire("down");
                            var e = t.touches ? t.touches[0] : t,
                                i = hn(this._element);
                            this._startPoint = new M(e.clientX, e.clientY), this._startPos = zt(this._element), this._parentScale = di(i);
                            var o = t.type === "mousedown";
                            C(document, o ? "mousemove" : "touchmove", this._onMove, this), C(document, o ? "mouseup" : "touchend touchcancel", this._onUp, this)
                        }
                    }
                },
                _onMove: function(t) {
                    if (this._enabled) {
                        if (t.touches && t.touches.length > 1) {
                            this._moved = !0;
                            return
                        }
                        var e = t.touches && t.touches.length === 1 ? t.touches[0] : t,
                            i = new M(e.clientX, e.clientY)._subtract(this._startPoint);
                        !i.x && !i.y || Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, nt(t), this._moved || (this.fire("dragstart"), this._moved = !0, D(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), D(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, this._lastEvent = t, this._updatePosition())
                    }
                },
                _updatePosition: function() {
                    var t = {
                        originalEvent: this._lastEvent
                    };
                    this.fire("predrag", t), X(this._element, this._newPos), this.fire("drag", t)
                },
                _onUp: function() {
                    this._enabled && this.finishDrag()
                },
                finishDrag: function(t) {
                    q(document.body, "leaflet-dragging"), this._lastTarget && (q(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), F(document, "mousemove touchmove", this._onMove, this), F(document, "mouseup touchend touchcancel", this._onUp, this), li(), oe();
                    var e = this._moved && this._moving;
                    this._moving = !1, St._dragging = !1, e && this.fire("dragend", {
                        noInertia: t,
                        distance: this._newPos.distanceTo(this._startPos)
                    })
                }
            });

        function gn(t, e, i) {
            var o, s = [1, 4, 2, 8],
                a, l, c, _, g, w, k, I;
            for (a = 0, w = t.length; a < w; a++) t[a]._code = Bt(t[a], e);
            for (c = 0; c < 4; c++) {
                for (k = s[c], o = [], a = 0, w = t.length, l = w - 1; a < w; l = a++) _ = t[a], g = t[l], _._code & k ? g._code & k || (I = ke(g, _, k, e, i), I._code = Bt(I, e), o.push(I)) : (g._code & k && (I = ke(g, _, k, e, i), I._code = Bt(I, e), o.push(I)), o.push(_));
                t = o
            }
            return t
        }

        function vn(t, e) {
            var i, o, s, a, l, c, _, g, w;
            if (!t || t.length === 0) throw new Error("latlngs not passed");
            ut(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
            var k = Z([0, 0]),
                I = K(t),
                st = I.getNorthWest().distanceTo(I.getSouthWest()) * I.getNorthEast().distanceTo(I.getNorthWest());
            st < 1700 && (k = Li(t));
            var it = t.length,
                ct = [];
            for (i = 0; i < it; i++) {
                var rt = Z(t[i]);
                ct.push(e.project(Z([rt.lat - k.lat, rt.lng - k.lng])))
            }
            for (c = _ = g = 0, i = 0, o = it - 1; i < it; o = i++) s = ct[i], a = ct[o], l = s.y * a.x - a.y * s.x, _ += (s.x + a.x) * l, g += (s.y + a.y) * l, c += l * 3;
            c === 0 ? w = ct[0] : w = [_ / c, g / c];
            var qt = e.unproject(T(w));
            return Z([qt.lat + k.lat, qt.lng + k.lng])
        }

        function Li(t) {
            for (var e = 0, i = 0, o = 0, s = 0; s < t.length; s++) {
                var a = Z(t[s]);
                e += a.lat, i += a.lng, o++
            }
            return Z([e / o, i / o])
        }
        var jo = {
            __proto__: null,
            clipPolygon: gn,
            polygonCenter: vn,
            centroid: Li
        };

        function yn(t, e) {
            if (!e || !t.length) return t.slice();
            var i = e * e;
            return t = Ko(t, i), t = Yo(t, i), t
        }

        function Ln(t, e, i) {
            return Math.sqrt(he(t, e, i, !0))
        }

        function qo(t, e, i) {
            return he(t, e, i)
        }

        function Yo(t, e) {
            var i = t.length,
                o = typeof Uint8Array < "u" ? Uint8Array : Array,
                s = new o(i);
            s[0] = s[i - 1] = 1, wi(t, s, e, 0, i - 1);
            var a, l = [];
            for (a = 0; a < i; a++) s[a] && l.push(t[a]);
            return l
        }

        function wi(t, e, i, o, s) {
            var a = 0,
                l, c, _;
            for (c = o + 1; c <= s - 1; c++) _ = he(t[c], t[o], t[s], !0), _ > a && (l = c, a = _);
            a > i && (e[l] = 1, wi(t, e, i, o, l), wi(t, e, i, l, s))
        }

        function Ko(t, e) {
            for (var i = [t[0]], o = 1, s = 0, a = t.length; o < a; o++) Xo(t[o], t[s]) > e && (i.push(t[o]), s = o);
            return s < a - 1 && i.push(t[a - 1]), i
        }
        var wn;

        function xn(t, e, i, o, s) {
            var a = o ? wn : Bt(t, i),
                l = Bt(e, i),
                c, _, g;
            for (wn = l;;) {
                if (!(a | l)) return [t, e];
                if (a & l) return !1;
                c = a || l, _ = ke(t, e, c, i, s), g = Bt(_, i), c === a ? (t = _, a = g) : (e = _, l = g)
            }
        }

        function ke(t, e, i, o, s) {
            var a = e.x - t.x,
                l = e.y - t.y,
                c = o.min,
                _ = o.max,
                g, w;
            return i & 8 ? (g = t.x + a * (_.y - t.y) / l, w = _.y) : i & 4 ? (g = t.x + a * (c.y - t.y) / l, w = c.y) : i & 2 ? (g = _.x, w = t.y + l * (_.x - t.x) / a) : i & 1 && (g = c.x, w = t.y + l * (c.x - t.x) / a), new M(g, w, s)
        }

        function Bt(t, e) {
            var i = 0;
            return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
        }

        function Xo(t, e) {
            var i = e.x - t.x,
                o = e.y - t.y;
            return i * i + o * o
        }

        function he(t, e, i, o) {
            var s = e.x,
                a = e.y,
                l = i.x - s,
                c = i.y - a,
                _ = l * l + c * c,
                g;
            return _ > 0 && (g = ((t.x - s) * l + (t.y - a) * c) / _, g > 1 ? (s = i.x, a = i.y) : g > 0 && (s += l * g, a += c * g)), l = t.x - s, c = t.y - a, o ? l * l + c * c : new M(s, a)
        }

        function ut(t) {
            return !at(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u"
        }

        function bn(t) {
            return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ut(t)
        }

        function Pn(t, e) {
            var i, o, s, a, l, c, _, g;
            if (!t || t.length === 0) throw new Error("latlngs not passed");
            ut(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
            var w = Z([0, 0]),
                k = K(t),
                I = k.getNorthWest().distanceTo(k.getSouthWest()) * k.getNorthEast().distanceTo(k.getNorthWest());
            I < 1700 && (w = Li(t));
            var st = t.length,
                it = [];
            for (i = 0; i < st; i++) {
                var ct = Z(t[i]);
                it.push(e.project(Z([ct.lat - w.lat, ct.lng - w.lng])))
            }
            for (i = 0, o = 0; i < st - 1; i++) o += it[i].distanceTo(it[i + 1]) / 2;
            if (o === 0) g = it[0];
            else
                for (i = 0, a = 0; i < st - 1; i++)
                    if (l = it[i], c = it[i + 1], s = l.distanceTo(c), a += s, a > o) {
                        _ = (a - o) / s, g = [c.x - _ * (c.x - l.x), c.y - _ * (c.y - l.y)];
                        break
                    } var rt = e.unproject(T(g));
            return Z([rt.lat + w.lat, rt.lng + w.lng])
        }
        var Jo = {
                __proto__: null,
                simplify: yn,
                pointToSegmentDistance: Ln,
                closestPointOnSegment: qo,
                clipSegment: xn,
                _getEdgeIntersection: ke,
                _getBitCode: Bt,
                _sqClosestPointOnSegment: he,
                isFlat: ut,
                _flat: bn,
                polylineCenter: Pn
            },
            xi = {
                project: function(t) {
                    return new M(t.lng, t.lat)
                },
                unproject: function(t) {
                    return new H(t.y, t.x)
                },
                bounds: new N([-180, -90], [180, 90])
            },
            bi = {
                R: 6378137,
                R_MINOR: 6356752314245179e-9,
                bounds: new N([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
                project: function(t) {
                    var e = Math.PI / 180,
                        i = this.R,
                        o = t.lat * e,
                        s = this.R_MINOR / i,
                        a = Math.sqrt(1 - s * s),
                        l = a * Math.sin(o),
                        c = Math.tan(Math.PI / 4 - o / 2) / Math.pow((1 - l) / (1 + l), a / 2);
                    return o = -i * Math.log(Math.max(c, 1e-10)), new M(t.lng * e * i, o)
                },
                unproject: function(t) {
                    for (var e = 180 / Math.PI, i = this.R, o = this.R_MINOR / i, s = Math.sqrt(1 - o * o), a = Math.exp(-t.y / i), l = Math.PI / 2 - 2 * Math.atan(a), c = 0, _ = .1, g; c < 15 && Math.abs(_) > 1e-7; c++) g = s * Math.sin(l), g = Math.pow((1 - g) / (1 + g), s / 2), _ = Math.PI / 2 - 2 * Math.atan(a * g) - l, l += _;
                    return new H(l * e, t.x * e / i)
                }
            },
            $o = {
                __proto__: null,
                LonLat: xi,
                Mercator: bi,
                SphericalMercator: Ke
            },
            Qo = n({}, Ct, {
                code: "EPSG:3395",
                projection: bi,
                transformation: function() {
                    var t = .5 / (Math.PI * bi.R);
                    return Qt(t, .5, -t, .5)
                }()
            }),
            Tn = n({}, Ct, {
                code: "EPSG:4326",
                projection: xi,
                transformation: Qt(1 / 180, 1, -1 / 180, .5)
            }),
            ts = n({}, Lt, {
                projection: xi,
                transformation: Qt(1, 0, -1, 0),
                scale: function(t) {
                    return Math.pow(2, t)
                },
                zoom: function(t) {
                    return Math.log(t) / Math.LN2
                },
                distance: function(t, e) {
                    var i = e.lng - t.lng,
                        o = e.lat - t.lat;
                    return Math.sqrt(i * i + o * o)
                },
                infinite: !0
            });
        Lt.Earth = Ct, Lt.EPSG3395 = Qo, Lt.EPSG3857 = Je, Lt.EPSG900913 = so, Lt.EPSG4326 = Tn, Lt.Simple = ts;
        var _t = ht.extend({
            options: {
                pane: "overlayPane",
                attribution: null,
                bubblingMouseEvents: !0
            },
            addTo: function(t) {
                return t.addLayer(this), this
            },
            remove: function() {
                return this.removeFrom(this._map || this._mapToAdd)
            },
            removeFrom: function(t) {
                return t && t.removeLayer(this), this
            },
            getPane: function(t) {
                return this._map.getPane(t ? this.options[t] || t : this.options.pane)
            },
            addInteractiveTarget: function(t) {
                return this._map._targets[p(t)] = this, this
            },
            removeInteractiveTarget: function(t) {
                return delete this._map._targets[p(t)], this
            },
            getAttribution: function() {
                return this.options.attribution
            },
            _layerAdd: function(t) {
                var e = t.target;
                if (e.hasLayer(this)) {
                    if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
                        var i = this.getEvents();
                        e.on(i, this), this.once("remove", function() {
                            e.off(i, this)
                        }, this)
                    }
                    this.onAdd(e), this.fire("add"), e.fire("layeradd", {
                        layer: this
                    })
                }
            }
        });
        B.include({
            addLayer: function(t) {
                if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
                var e = p(t);
                return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this)
            },
            removeLayer: function(t) {
                var e = p(t);
                return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", {
                    layer: t
                }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
            },
            hasLayer: function(t) {
                return p(t) in this._layers
            },
            eachLayer: function(t, e) {
                for (var i in this._layers) t.call(e, this._layers[i]);
                return this
            },
            _addLayers: function(t) {
                t = t ? at(t) ? t : [t] : [];
                for (var e = 0, i = t.length; e < i; e++) this.addLayer(t[e])
            },
            _addZoomLimit: function(t) {
                (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[p(t)] = t, this._updateZoomLevels())
            },
            _removeZoomLimit: function(t) {
                var e = p(t);
                this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels())
            },
            _updateZoomLevels: function() {
                var t = 1 / 0,
                    e = -1 / 0,
                    i = this._getZoomSpan();
                for (var o in this._zoomBoundLayers) {
                    var s = this._zoomBoundLayers[o].options;
                    t = s.minZoom === void 0 ? t : Math.min(t, s.minZoom), e = s.maxZoom === void 0 ? e : Math.max(e, s.maxZoom)
                }
                this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
            }
        });
        var Gt = _t.extend({
                initialize: function(t, e) {
                    G(this, e), this._layers = {};
                    var i, o;
                    if (t)
                        for (i = 0, o = t.length; i < o; i++) this.addLayer(t[i])
                },
                addLayer: function(t) {
                    var e = this.getLayerId(t);
                    return this._layers[e] = t, this._map && this._map.addLayer(t), this
                },
                removeLayer: function(t) {
                    var e = t in this._layers ? t : this.getLayerId(t);
                    return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
                },
                hasLayer: function(t) {
                    var e = typeof t == "number" ? t : this.getLayerId(t);
                    return e in this._layers
                },
                clearLayers: function() {
                    return this.eachLayer(this.removeLayer, this)
                },
                invoke: function(t) {
                    var e = Array.prototype.slice.call(arguments, 1),
                        i, o;
                    for (i in this._layers) o = this._layers[i], o[t] && o[t].apply(o, e);
                    return this
                },
                onAdd: function(t) {
                    this.eachLayer(t.addLayer, t)
                },
                onRemove: function(t) {
                    this.eachLayer(t.removeLayer, t)
                },
                eachLayer: function(t, e) {
                    for (var i in this._layers) t.call(e, this._layers[i]);
                    return this
                },
                getLayer: function(t) {
                    return this._layers[t]
                },
                getLayers: function() {
                    var t = [];
                    return this.eachLayer(t.push, t), t
                },
                setZIndex: function(t) {
                    return this.invoke("setZIndex", t)
                },
                getLayerId: function(t) {
                    return p(t)
                }
            }),
            es = function(t, e) {
                return new Gt(t, e)
            },
            wt = Gt.extend({
                addLayer: function(t) {
                    return this.hasLayer(t) ? this : (t.addEventParent(this), Gt.prototype.addLayer.call(this, t), this.fire("layeradd", {
                        layer: t
                    }))
                },
                removeLayer: function(t) {
                    return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Gt.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                        layer: t
                    })) : this
                },
                setStyle: function(t) {
                    return this.invoke("setStyle", t)
                },
                bringToFront: function() {
                    return this.invoke("bringToFront")
                },
                bringToBack: function() {
                    return this.invoke("bringToBack")
                },
                getBounds: function() {
                    var t = new ot;
                    for (var e in this._layers) {
                        var i = this._layers[e];
                        t.extend(i.getBounds ? i.getBounds() : i.getLatLng())
                    }
                    return t
                }
            }),
            is = function(t, e) {
                return new wt(t, e)
            },
            Ft = et.extend({
                options: {
                    popupAnchor: [0, 0],
                    tooltipAnchor: [0, 0],
                    crossOrigin: !1
                },
                initialize: function(t) {
                    G(this, t)
                },
                createIcon: function(t) {
                    return this._createIcon("icon", t)
                },
                createShadow: function(t) {
                    return this._createIcon("shadow", t)
                },
                _createIcon: function(t, e) {
                    var i = this._getIconUrl(t);
                    if (!i) {
                        if (t === "icon") throw new Error("iconUrl not set in Icon options (see the docs).");
                        return null
                    }
                    var o = this._createImg(i, e && e.tagName === "IMG" ? e : null);
                    return this._setIconStyles(o, t), (this.options.crossOrigin || this.options.crossOrigin === "") && (o.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), o
                },
                _setIconStyles: function(t, e) {
                    var i = this.options,
                        o = i[e + "Size"];
                    typeof o == "number" && (o = [o, o]);
                    var s = T(o),
                        a = T(e === "shadow" && i.shadowAnchor || i.iconAnchor || s && s.divideBy(2, !0));
                    t.className = "leaflet-marker-" + e + " " + (i.className || ""), a && (t.style.marginLeft = -a.x + "px", t.style.marginTop = -a.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px")
                },
                _createImg: function(t, e) {
                    return e = e || document.createElement("img"), e.src = t, e
                },
                _getIconUrl: function(t) {
                    return P.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
                }
            });

        function ns(t) {
            return new Ft(t)
        }
        var le = Ft.extend({
                options: {
                    iconUrl: "marker-icon.png",
                    iconRetinaUrl: "marker-icon-2x.png",
                    shadowUrl: "marker-shadow.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    tooltipAnchor: [16, -28],
                    shadowSize: [41, 41]
                },
                _getIconUrl: function(t) {
                    return typeof le.imagePath != "string" && (le.imagePath = this._detectIconPath()), (this.options.imagePath || le.imagePath) + Ft.prototype._getIconUrl.call(this, t)
                },
                _stripUrl: function(t) {
                    var e = function(i, o, s) {
                        var a = o.exec(i);
                        return a && a[s]
                    };
                    return t = e(t, /^url\((['"])?(.+)\1\)$/, 2), t && e(t, /^(.*)marker-icon\.png$/, 1)
                },
                _detectIconPath: function() {
                    var t = R("div", "leaflet-default-icon-path", document.body),
                        e = ie(t, "background-image") || ie(t, "backgroundImage");
                    if (document.body.removeChild(t), e = this._stripUrl(e), e) return e;
                    var i = document.querySelector('link[href$="leaflet.css"]');
                    return i ? i.href.substring(0, i.href.length - 11 - 1) : ""
                }
            }),
            kn = gt.extend({
                initialize: function(t) {
                    this._marker = t
                },
                addHooks: function() {
                    var t = this._marker._icon;
                    this._draggable || (this._draggable = new St(t, t, !0)), this._draggable.on({
                        dragstart: this._onDragStart,
                        predrag: this._onPreDrag,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this).enable(), D(t, "leaflet-marker-draggable")
                },
                removeHooks: function() {
                    this._draggable.off({
                        dragstart: this._onDragStart,
                        predrag: this._onPreDrag,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this).disable(), this._marker._icon && q(this._marker._icon, "leaflet-marker-draggable")
                },
                moved: function() {
                    return this._draggable && this._draggable._moved
                },
                _adjustPan: function(t) {
                    var e = this._marker,
                        i = e._map,
                        o = this._marker.options.autoPanSpeed,
                        s = this._marker.options.autoPanPadding,
                        a = zt(e._icon),
                        l = i.getPixelBounds(),
                        c = i.getPixelOrigin(),
                        _ = Y(l.min._subtract(c).add(s), l.max._subtract(c).subtract(s));
                    if (!_.contains(a)) {
                        var g = T((Math.max(_.max.x, a.x) - _.max.x) / (l.max.x - _.max.x) - (Math.min(_.min.x, a.x) - _.min.x) / (l.min.x - _.min.x), (Math.max(_.max.y, a.y) - _.max.y) / (l.max.y - _.max.y) - (Math.min(_.min.y, a.y) - _.min.y) / (l.min.y - _.min.y)).multiplyBy(o);
                        i.panBy(g, {
                            animate: !1
                        }), this._draggable._newPos._add(g), this._draggable._startPos._add(g), X(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = S(this._adjustPan.bind(this, t))
                    }
                },
                _onDragStart: function() {
                    this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart")
                },
                _onPreDrag: function(t) {
                    this._marker.options.autoPan && (A(this._panRequest), this._panRequest = S(this._adjustPan.bind(this, t)))
                },
                _onDrag: function(t) {
                    var e = this._marker,
                        i = e._shadow,
                        o = zt(e._icon),
                        s = e._map.layerPointToLatLng(o);
                    i && X(i, o), e._latlng = s, t.latlng = s, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t)
                },
                _onDragEnd: function(t) {
                    A(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
                }
            }),
            Me = _t.extend({
                options: {
                    icon: new le,
                    interactive: !0,
                    keyboard: !0,
                    title: "",
                    alt: "Marker",
                    zIndexOffset: 0,
                    opacity: 1,
                    riseOnHover: !1,
                    riseOffset: 250,
                    pane: "markerPane",
                    shadowPane: "shadowPane",
                    bubblingMouseEvents: !1,
                    autoPanOnFocus: !0,
                    draggable: !1,
                    autoPan: !1,
                    autoPanPadding: [50, 50],
                    autoPanSpeed: 10
                },
                initialize: function(t, e) {
                    G(this, e), this._latlng = Z(t)
                },
                onAdd: function(t) {
                    this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
                },
                onRemove: function(t) {
                    this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
                },
                getEvents: function() {
                    return {
                        zoom: this.update,
                        viewreset: this.update
                    }
                },
                getLatLng: function() {
                    return this._latlng
                },
                setLatLng: function(t) {
                    var e = this._latlng;
                    return this._latlng = Z(t), this.update(), this.fire("move", {
                        oldLatLng: e,
                        latlng: this._latlng
                    })
                },
                setZIndexOffset: function(t) {
                    return this.options.zIndexOffset = t, this.update()
                },
                getIcon: function() {
                    return this.options.icon
                },
                setIcon: function(t) {
                    return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
                },
                getElement: function() {
                    return this._icon
                },
                update: function() {
                    if (this._icon && this._map) {
                        var t = this._map.latLngToLayerPoint(this._latlng).round();
                        this._setPos(t)
                    }
                    return this
                },
                _initIcon: function() {
                    var t = this.options,
                        e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                        i = t.icon.createIcon(this._icon),
                        o = !1;
                    i !== this._icon && (this._icon && this._removeIcon(), o = !0, t.title && (i.title = t.title), i.tagName === "IMG" && (i.alt = t.alt || "")), D(i, e), t.keyboard && (i.tabIndex = "0", i.setAttribute("role", "button")), this._icon = i, t.riseOnHover && this.on({
                        mouseover: this._bringToFront,
                        mouseout: this._resetZIndex
                    }), this.options.autoPanOnFocus && C(i, "focus", this._panOnFocus, this);
                    var s = t.icon.createShadow(this._shadow),
                        a = !1;
                    s !== this._shadow && (this._removeShadow(), a = !0), s && (D(s, e), s.alt = ""), this._shadow = s, t.opacity < 1 && this._updateOpacity(), o && this.getPane().appendChild(this._icon), this._initInteraction(), s && a && this.getPane(t.shadowPane).appendChild(this._shadow)
                },
                _removeIcon: function() {
                    this.options.riseOnHover && this.off({
                        mouseover: this._bringToFront,
                        mouseout: this._resetZIndex
                    }), this.options.autoPanOnFocus && F(this._icon, "focus", this._panOnFocus, this), V(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
                },
                _removeShadow: function() {
                    this._shadow && V(this._shadow), this._shadow = null
                },
                _setPos: function(t) {
                    this._icon && X(this._icon, t), this._shadow && X(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
                },
                _updateZIndex: function(t) {
                    this._icon && (this._icon.style.zIndex = this._zIndex + t)
                },
                _animateZoom: function(t) {
                    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                    this._setPos(e)
                },
                _initInteraction: function() {
                    if (this.options.interactive && (D(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), kn)) {
                        var t = this.options.draggable;
                        this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new kn(this), t && this.dragging.enable()
                    }
                },
                setOpacity: function(t) {
                    return this.options.opacity = t, this._map && this._updateOpacity(), this
                },
                _updateOpacity: function() {
                    var t = this.options.opacity;
                    this._icon && lt(this._icon, t), this._shadow && lt(this._shadow, t)
                },
                _bringToFront: function() {
                    this._updateZIndex(this.options.riseOffset)
                },
                _resetZIndex: function() {
                    this._updateZIndex(0)
                },
                _panOnFocus: function() {
                    var t = this._map;
                    if (t) {
                        var e = this.options.icon.options,
                            i = e.iconSize ? T(e.iconSize) : T(0, 0),
                            o = e.iconAnchor ? T(e.iconAnchor) : T(0, 0);
                        t.panInside(this._latlng, {
                            paddingTopLeft: o,
                            paddingBottomRight: i.subtract(o)
                        })
                    }
                },
                _getPopupAnchor: function() {
                    return this.options.icon.options.popupAnchor
                },
                _getTooltipAnchor: function() {
                    return this.options.icon.options.tooltipAnchor
                }
            });

        function os(t, e) {
            return new Me(t, e)
        }
        var Dt = _t.extend({
                options: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 3,
                    opacity: 1,
                    lineCap: "round",
                    lineJoin: "round",
                    dashArray: null,
                    dashOffset: null,
                    fill: !1,
                    fillColor: null,
                    fillOpacity: .2,
                    fillRule: "evenodd",
                    interactive: !0,
                    bubblingMouseEvents: !0
                },
                beforeAdd: function(t) {
                    this._renderer = t.getRenderer(this)
                },
                onAdd: function() {
                    this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
                },
                onRemove: function() {
                    this._renderer._removePath(this)
                },
                redraw: function() {
                    return this._map && this._renderer._updatePath(this), this
                },
                setStyle: function(t) {
                    return G(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this
                },
                bringToFront: function() {
                    return this._renderer && this._renderer._bringToFront(this), this
                },
                bringToBack: function() {
                    return this._renderer && this._renderer._bringToBack(this), this
                },
                getElement: function() {
                    return this._path
                },
                _reset: function() {
                    this._project(), this._update()
                },
                _clickTolerance: function() {
                    return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0)
                }
            }),
            Ee = Dt.extend({
                options: {
                    fill: !0,
                    radius: 10
                },
                initialize: function(t, e) {
                    G(this, e), this._latlng = Z(t), this._radius = this.options.radius
                },
                setLatLng: function(t) {
                    var e = this._latlng;
                    return this._latlng = Z(t), this.redraw(), this.fire("move", {
                        oldLatLng: e,
                        latlng: this._latlng
                    })
                },
                getLatLng: function() {
                    return this._latlng
                },
                setRadius: function(t) {
                    return this.options.radius = this._radius = t, this.redraw()
                },
                getRadius: function() {
                    return this._radius
                },
                setStyle: function(t) {
                    var e = t && t.radius || this._radius;
                    return Dt.prototype.setStyle.call(this, t), this.setRadius(e), this
                },
                _project: function() {
                    this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
                },
                _updateBounds: function() {
                    var t = this._radius,
                        e = this._radiusY || t,
                        i = this._clickTolerance(),
                        o = [t + i, e + i];
                    this._pxBounds = new N(this._point.subtract(o), this._point.add(o))
                },
                _update: function() {
                    this._map && this._updatePath()
                },
                _updatePath: function() {
                    this._renderer._updateCircle(this)
                },
                _empty: function() {
                    return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
                },
                _containsPoint: function(t) {
                    return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
                }
            });

        function ss(t, e) {
            return new Ee(t, e)
        }
        var Pi = Ee.extend({
            initialize: function(t, e, i) {
                if (typeof e == "number" && (e = n({}, i, {
                        radius: e
                    })), G(this, e), this._latlng = Z(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                this._mRadius = this.options.radius
            },
            setRadius: function(t) {
                return this._mRadius = t, this.redraw()
            },
            getRadius: function() {
                return this._mRadius
            },
            getBounds: function() {
                var t = [this._radius, this._radiusY || this._radius];
                return new ot(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
            },
            setStyle: Dt.prototype.setStyle,
            _project: function() {
                var t = this._latlng.lng,
                    e = this._latlng.lat,
                    i = this._map,
                    o = i.options.crs;
                if (o.distance === Ct.distance) {
                    var s = Math.PI / 180,
                        a = this._mRadius / Ct.R / s,
                        l = i.project([e + a, t]),
                        c = i.project([e - a, t]),
                        _ = l.add(c).divideBy(2),
                        g = i.unproject(_).lat,
                        w = Math.acos((Math.cos(a * s) - Math.sin(e * s) * Math.sin(g * s)) / (Math.cos(e * s) * Math.cos(g * s))) / s;
                    (isNaN(w) || w === 0) && (w = a / Math.cos(Math.PI / 180 * e)), this._point = _.subtract(i.getPixelOrigin()), this._radius = isNaN(w) ? 0 : _.x - i.project([g, t - w]).x, this._radiusY = _.y - l.y
                } else {
                    var k = o.unproject(o.project(this._latlng).subtract([this._mRadius, 0]));
                    this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(k).x
                }
                this._updateBounds()
            }
        });

        function rs(t, e, i) {
            return new Pi(t, e, i)
        }
        var xt = Dt.extend({
            options: {
                smoothFactor: 1,
                noClip: !1
            },
            initialize: function(t, e) {
                G(this, e), this._setLatLngs(t)
            },
            getLatLngs: function() {
                return this._latlngs
            },
            setLatLngs: function(t) {
                return this._setLatLngs(t), this.redraw()
            },
            isEmpty: function() {
                return !this._latlngs.length
            },
            closestLayerPoint: function(t) {
                for (var e = 1 / 0, i = null, o = he, s, a, l = 0, c = this._parts.length; l < c; l++)
                    for (var _ = this._parts[l], g = 1, w = _.length; g < w; g++) {
                        s = _[g - 1], a = _[g];
                        var k = o(t, s, a, !0);
                        k < e && (e = k, i = o(t, s, a))
                    }
                return i && (i.distance = Math.sqrt(e)), i
            },
            getCenter: function() {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                return Pn(this._defaultShape(), this._map.options.crs)
            },
            getBounds: function() {
                return this._bounds
            },
            addLatLng: function(t, e) {
                return e = e || this._defaultShape(), t = Z(t), e.push(t), this._bounds.extend(t), this.redraw()
            },
            _setLatLngs: function(t) {
                this._bounds = new ot, this._latlngs = this._convertLatLngs(t)
            },
            _defaultShape: function() {
                return ut(this._latlngs) ? this._latlngs : this._latlngs[0]
            },
            _convertLatLngs: function(t) {
                for (var e = [], i = ut(t), o = 0, s = t.length; o < s; o++) i ? (e[o] = Z(t[o]), this._bounds.extend(e[o])) : e[o] = this._convertLatLngs(t[o]);
                return e
            },
            _project: function() {
                var t = new N;
                this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds())
            },
            _updateBounds: function() {
                var t = this._clickTolerance(),
                    e = new M(t, t);
                this._rawPxBounds && (this._pxBounds = new N([this._rawPxBounds.min.subtract(e), this._rawPxBounds.max.add(e)]))
            },
            _projectLatlngs: function(t, e, i) {
                var o = t[0] instanceof H,
                    s = t.length,
                    a, l;
                if (o) {
                    for (l = [], a = 0; a < s; a++) l[a] = this._map.latLngToLayerPoint(t[a]), i.extend(l[a]);
                    e.push(l)
                } else
                    for (a = 0; a < s; a++) this._projectLatlngs(t[a], e, i)
            },
            _clipPoints: function() {
                var t = this._renderer._bounds;
                if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
                    if (this.options.noClip) {
                        this._parts = this._rings;
                        return
                    }
                    var e = this._parts,
                        i, o, s, a, l, c, _;
                    for (i = 0, s = 0, a = this._rings.length; i < a; i++)
                        for (_ = this._rings[i], o = 0, l = _.length; o < l - 1; o++) c = xn(_[o], _[o + 1], t, o, !0), c && (e[s] = e[s] || [], e[s].push(c[0]), (c[1] !== _[o + 1] || o === l - 2) && (e[s].push(c[1]), s++))
                }
            },
            _simplifyPoints: function() {
                for (var t = this._parts, e = this.options.smoothFactor, i = 0, o = t.length; i < o; i++) t[i] = yn(t[i], e)
            },
            _update: function() {
                this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
            },
            _updatePath: function() {
                this._renderer._updatePoly(this)
            },
            _containsPoint: function(t, e) {
                var i, o, s, a, l, c, _ = this._clickTolerance();
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (i = 0, a = this._parts.length; i < a; i++)
                    for (c = this._parts[i], o = 0, l = c.length, s = l - 1; o < l; s = o++)
                        if (!(!e && o === 0) && Ln(t, c[s], c[o]) <= _) return !0;
                return !1
            }
        });

        function as(t, e) {
            return new xt(t, e)
        }
        xt._flat = bn;
        var Wt = xt.extend({
            options: {
                fill: !0
            },
            isEmpty: function() {
                return !this._latlngs.length || !this._latlngs[0].length
            },
            getCenter: function() {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                return vn(this._defaultShape(), this._map.options.crs)
            },
            _convertLatLngs: function(t) {
                var e = xt.prototype._convertLatLngs.call(this, t),
                    i = e.length;
                return i >= 2 && e[0] instanceof H && e[0].equals(e[i - 1]) && e.pop(), e
            },
            _setLatLngs: function(t) {
                xt.prototype._setLatLngs.call(this, t), ut(this._latlngs) && (this._latlngs = [this._latlngs])
            },
            _defaultShape: function() {
                return ut(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
            },
            _clipPoints: function() {
                var t = this._renderer._bounds,
                    e = this.options.weight,
                    i = new M(e, e);
                if (t = new N(t.min.subtract(i), t.max.add(i)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
                    if (this.options.noClip) {
                        this._parts = this._rings;
                        return
                    }
                    for (var o = 0, s = this._rings.length, a; o < s; o++) a = gn(this._rings[o], t, !0), a.length && this._parts.push(a)
                }
            },
            _updatePath: function() {
                this._renderer._updatePoly(this, !0)
            },
            _containsPoint: function(t) {
                var e = !1,
                    i, o, s, a, l, c, _, g;
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (a = 0, _ = this._parts.length; a < _; a++)
                    for (i = this._parts[a], l = 0, g = i.length, c = g - 1; l < g; c = l++) o = i[l], s = i[c], o.y > t.y != s.y > t.y && t.x < (s.x - o.x) * (t.y - o.y) / (s.y - o.y) + o.x && (e = !e);
                return e || xt.prototype._containsPoint.call(this, t, !0)
            }
        });

        function hs(t, e) {
            return new Wt(t, e)
        }
        var bt = wt.extend({
            initialize: function(t, e) {
                G(this, e), this._layers = {}, t && this.addData(t)
            },
            addData: function(t) {
                var e = at(t) ? t : t.features,
                    i, o, s;
                if (e) {
                    for (i = 0, o = e.length; i < o; i++) s = e[i], (s.geometries || s.geometry || s.features || s.coordinates) && this.addData(s);
                    return this
                }
                var a = this.options;
                if (a.filter && !a.filter(t)) return this;
                var l = Ce(t, a);
                return l ? (l.feature = Oe(t), l.defaultOptions = l.options, this.resetStyle(l), a.onEachFeature && a.onEachFeature(t, l), this.addLayer(l)) : this
            },
            resetStyle: function(t) {
                return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = n({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this)
            },
            setStyle: function(t) {
                return this.eachLayer(function(e) {
                    this._setLayerStyle(e, t)
                }, this)
            },
            _setLayerStyle: function(t, e) {
                t.setStyle && (typeof e == "function" && (e = e(t.feature)), t.setStyle(e))
            }
        });

        function Ce(t, e) {
            var i = t.type === "Feature" ? t.geometry : t,
                o = i ? i.coordinates : null,
                s = [],
                a = e && e.pointToLayer,
                l = e && e.coordsToLatLng || Ti,
                c, _, g, w;
            if (!o && !i) return null;
            switch (i.type) {
                case "Point":
                    return c = l(o), Mn(a, t, c, e);
                case "MultiPoint":
                    for (g = 0, w = o.length; g < w; g++) c = l(o[g]), s.push(Mn(a, t, c, e));
                    return new wt(s);
                case "LineString":
                case "MultiLineString":
                    return _ = Se(o, i.type === "LineString" ? 0 : 1, l), new xt(_, e);
                case "Polygon":
                case "MultiPolygon":
                    return _ = Se(o, i.type === "Polygon" ? 1 : 2, l), new Wt(_, e);
                case "GeometryCollection":
                    for (g = 0, w = i.geometries.length; g < w; g++) {
                        var k = Ce({
                            geometry: i.geometries[g],
                            type: "Feature",
                            properties: t.properties
                        }, e);
                        k && s.push(k)
                    }
                    return new wt(s);
                case "FeatureCollection":
                    for (g = 0, w = i.features.length; g < w; g++) {
                        var I = Ce(i.features[g], e);
                        I && s.push(I)
                    }
                    return new wt(s);
                default:
                    throw new Error("Invalid GeoJSON object.")
            }
        }

        function Mn(t, e, i, o) {
            return t ? t(e, i) : new Me(i, o && o.markersInheritOptions && o)
        }

        function Ti(t) {
            return new H(t[1], t[0], t[2])
        }

        function Se(t, e, i) {
            for (var o = [], s = 0, a = t.length, l; s < a; s++) l = e ? Se(t[s], e - 1, i) : (i || Ti)(t[s]), o.push(l);
            return o
        }

        function ki(t, e) {
            return t = Z(t), t.alt !== void 0 ? [z(t.lng, e), z(t.lat, e), z(t.alt, e)] : [z(t.lng, e), z(t.lat, e)]
        }

        function De(t, e, i, o) {
            for (var s = [], a = 0, l = t.length; a < l; a++) s.push(e ? De(t[a], ut(t[a]) ? 0 : e - 1, i, o) : ki(t[a], o));
            return !e && i && s.length > 0 && s.push(s[0].slice()), s
        }

        function Vt(t, e) {
            return t.feature ? n({}, t.feature, {
                geometry: e
            }) : Oe(e)
        }

        function Oe(t) {
            return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
                type: "Feature",
                properties: {},
                geometry: t
            }
        }
        var Mi = {
            toGeoJSON: function(t) {
                return Vt(this, {
                    type: "Point",
                    coordinates: ki(this.getLatLng(), t)
                })
            }
        };
        Me.include(Mi), Pi.include(Mi), Ee.include(Mi), xt.include({
            toGeoJSON: function(t) {
                var e = !ut(this._latlngs),
                    i = De(this._latlngs, e ? 1 : 0, !1, t);
                return Vt(this, {
                    type: (e ? "Multi" : "") + "LineString",
                    coordinates: i
                })
            }
        }), Wt.include({
            toGeoJSON: function(t) {
                var e = !ut(this._latlngs),
                    i = e && !ut(this._latlngs[0]),
                    o = De(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
                return e || (o = [o]), Vt(this, {
                    type: (i ? "Multi" : "") + "Polygon",
                    coordinates: o
                })
            }
        }), Gt.include({
            toMultiPoint: function(t) {
                var e = [];
                return this.eachLayer(function(i) {
                    e.push(i.toGeoJSON(t).geometry.coordinates)
                }), Vt(this, {
                    type: "MultiPoint",
                    coordinates: e
                })
            },
            toGeoJSON: function(t) {
                var e = this.feature && this.feature.geometry && this.feature.geometry.type;
                if (e === "MultiPoint") return this.toMultiPoint(t);
                var i = e === "GeometryCollection",
                    o = [];
                return this.eachLayer(function(s) {
                    if (s.toGeoJSON) {
                        var a = s.toGeoJSON(t);
                        if (i) o.push(a.geometry);
                        else {
                            var l = Oe(a);
                            l.type === "FeatureCollection" ? o.push.apply(o, l.features) : o.push(l)
                        }
                    }
                }), i ? Vt(this, {
                    geometries: o,
                    type: "GeometryCollection"
                }) : {
                    type: "FeatureCollection",
                    features: o
                }
            }
        });

        function En(t, e) {
            return new bt(t, e)
        }
        var ls = En,
            Ie = _t.extend({
                options: {
                    opacity: 1,
                    alt: "",
                    interactive: !1,
                    crossOrigin: !1,
                    errorOverlayUrl: "",
                    zIndex: 1,
                    className: ""
                },
                initialize: function(t, e, i) {
                    this._url = t, this._bounds = K(e), G(this, i)
                },
                onAdd: function() {
                    this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (D(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
                },
                onRemove: function() {
                    V(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
                },
                setOpacity: function(t) {
                    return this.options.opacity = t, this._image && this._updateOpacity(), this
                },
                setStyle: function(t) {
                    return t.opacity && this.setOpacity(t.opacity), this
                },
                bringToFront: function() {
                    return this._map && Ht(this._image), this
                },
                bringToBack: function() {
                    return this._map && Ut(this._image), this
                },
                setUrl: function(t) {
                    return this._url = t, this._image && (this._image.src = t), this
                },
                setBounds: function(t) {
                    return this._bounds = K(t), this._map && this._reset(), this
                },
                getEvents: function() {
                    var t = {
                        zoom: this._reset,
                        viewreset: this._reset
                    };
                    return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                },
                setZIndex: function(t) {
                    return this.options.zIndex = t, this._updateZIndex(), this
                },
                getBounds: function() {
                    return this._bounds
                },
                getElement: function() {
                    return this._image
                },
                _initImage: function() {
                    var t = this._url.tagName === "IMG",
                        e = this._image = t ? this._url : R("img");
                    if (D(e, "leaflet-image-layer"), this._zoomAnimated && D(e, "leaflet-zoom-animated"), this.options.className && D(e, this.options.className), e.onselectstart = x, e.onmousemove = x, e.onload = h(this.fire, this, "load"), e.onerror = h(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
                        this._url = e.src;
                        return
                    }
                    e.src = this._url, e.alt = this.options.alt
                },
                _animateZoom: function(t) {
                    var e = this._map.getZoomScale(t.zoom),
                        i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                    It(this._image, i, e)
                },
                _reset: function() {
                    var t = this._image,
                        e = new N(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                        i = e.getSize();
                    X(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px"
                },
                _updateOpacity: function() {
                    lt(this._image, this.options.opacity)
                },
                _updateZIndex: function() {
                    this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex)
                },
                _overlayOnError: function() {
                    this.fire("error");
                    var t = this.options.errorOverlayUrl;
                    t && this._url !== t && (this._url = t, this._image.src = t)
                },
                getCenter: function() {
                    return this._bounds.getCenter()
                }
            }),
            us = function(t, e, i) {
                return new Ie(t, e, i)
            },
            Cn = Ie.extend({
                options: {
                    autoplay: !0,
                    loop: !0,
                    keepAspectRatio: !0,
                    muted: !1,
                    playsInline: !0
                },
                _initImage: function() {
                    var t = this._url.tagName === "VIDEO",
                        e = this._image = t ? this._url : R("video");
                    if (D(e, "leaflet-image-layer"), this._zoomAnimated && D(e, "leaflet-zoom-animated"), this.options.className && D(e, this.options.className), e.onselectstart = x, e.onmousemove = x, e.onloadeddata = h(this.fire, this, "load"), t) {
                        for (var i = e.getElementsByTagName("source"), o = [], s = 0; s < i.length; s++) o.push(i[s].src);
                        this._url = i.length > 0 ? o : [e.src];
                        return
                    }
                    at(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
                    for (var a = 0; a < this._url.length; a++) {
                        var l = R("source");
                        l.src = this._url[a], e.appendChild(l)
                    }
                }
            });

        function cs(t, e, i) {
            return new Cn(t, e, i)
        }
        var Sn = Ie.extend({
            _initImage: function() {
                var t = this._image = this._url;
                D(t, "leaflet-image-layer"), this._zoomAnimated && D(t, "leaflet-zoom-animated"), this.options.className && D(t, this.options.className), t.onselectstart = x, t.onmousemove = x
            }
        });

        function ds(t, e, i) {
            return new Sn(t, e, i)
        }
        var vt = _t.extend({
            options: {
                interactive: !1,
                offset: [0, 0],
                className: "",
                pane: void 0,
                content: ""
            },
            initialize: function(t, e) {
                t && (t instanceof H || at(t)) ? (this._latlng = Z(t), G(this, e)) : (G(this, t), this._source = e), this.options.content && (this._content = this.options.content)
            },
            openOn: function(t) {
                return t = arguments.length ? t : this._source._map, t.hasLayer(this) || t.addLayer(this), this
            },
            close: function() {
                return this._map && this._map.removeLayer(this), this
            },
            toggle: function(t) {
                return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this
            },
            onAdd: function(t) {
                this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && lt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && lt(this._container, 1), this.bringToFront(), this.options.interactive && (D(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container))
            },
            onRemove: function(t) {
                t._fadeAnimated ? (lt(this._container, 0), this._removeTimeout = setTimeout(h(V, void 0, this._container), 200)) : V(this._container), this.options.interactive && (q(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container))
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                return this._latlng = Z(t), this._map && (this._updatePosition(), this._adjustPan()), this
            },
            getContent: function() {
                return this._content
            },
            setContent: function(t) {
                return this._content = t, this.update(), this
            },
            getElement: function() {
                return this._container
            },
            update: function() {
                this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
            },
            getEvents: function() {
                var t = {
                    zoom: this._updatePosition,
                    viewreset: this._updatePosition
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            isOpen: function() {
                return !!this._map && this._map.hasLayer(this)
            },
            bringToFront: function() {
                return this._map && Ht(this._container), this
            },
            bringToBack: function() {
                return this._map && Ut(this._container), this
            },
            _prepareOpen: function(t) {
                var e = this._source;
                if (!e._map) return !1;
                if (e instanceof wt) {
                    e = null;
                    var i = this._source._layers;
                    for (var o in i)
                        if (i[o]._map) {
                            e = i[o];
                            break
                        } if (!e) return !1;
                    this._source = e
                }
                if (!t)
                    if (e.getCenter) t = e.getCenter();
                    else if (e.getLatLng) t = e.getLatLng();
                else if (e.getBounds) t = e.getBounds().getCenter();
                else throw new Error("Unable to get source layer LatLng.");
                return this.setLatLng(t), this._map && this.update(), !0
            },
            _updateContent: function() {
                if (this._content) {
                    var t = this._contentNode,
                        e = typeof this._content == "function" ? this._content(this._source || this) : this._content;
                    if (typeof e == "string") t.innerHTML = e;
                    else {
                        for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                        t.appendChild(e)
                    }
                    this.fire("contentupdate")
                }
            },
            _updatePosition: function() {
                if (this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng),
                        e = T(this.options.offset),
                        i = this._getAnchor();
                    this._zoomAnimated ? X(this._container, t.add(i)) : e = e.add(t).add(i);
                    var o = this._containerBottom = -e.y,
                        s = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                    this._container.style.bottom = o + "px", this._container.style.left = s + "px"
                }
            },
            _getAnchor: function() {
                return [0, 0]
            }
        });
        B.include({
            _initOverlay: function(t, e, i, o) {
                var s = e;
                return s instanceof t || (s = new t(o).setContent(e)), i && s.setLatLng(i), s
            }
        }), _t.include({
            _initOverlay: function(t, e, i, o) {
                var s = i;
                return s instanceof t ? (G(s, o), s._source = this) : (s = e && !o ? e : new t(o, this), s.setContent(i)), s
            }
        });
        var ze = vt.extend({
                options: {
                    pane: "popupPane",
                    offset: [0, 7],
                    maxWidth: 300,
                    minWidth: 50,
                    maxHeight: null,
                    autoPan: !0,
                    autoPanPaddingTopLeft: null,
                    autoPanPaddingBottomRight: null,
                    autoPanPadding: [5, 5],
                    keepInView: !1,
                    closeButton: !0,
                    autoClose: !0,
                    closeOnEscapeKey: !0,
                    className: ""
                },
                openOn: function(t) {
                    return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, vt.prototype.openOn.call(this, t)
                },
                onAdd: function(t) {
                    vt.prototype.onAdd.call(this, t), t.fire("popupopen", {
                        popup: this
                    }), this._source && (this._source.fire("popupopen", {
                        popup: this
                    }, !0), this._source instanceof Dt || this._source.on("preclick", At))
                },
                onRemove: function(t) {
                    vt.prototype.onRemove.call(this, t), t.fire("popupclose", {
                        popup: this
                    }), this._source && (this._source.fire("popupclose", {
                        popup: this
                    }, !0), this._source instanceof Dt || this._source.off("preclick", At))
                },
                getEvents: function() {
                    var t = vt.prototype.getEvents.call(this);
                    return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t
                },
                _initLayout: function() {
                    var t = "leaflet-popup",
                        e = this._container = R("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                        i = this._wrapper = R("div", t + "-content-wrapper", e);
                    if (this._contentNode = R("div", t + "-content", i), re(e), mi(this._contentNode), C(e, "contextmenu", At), this._tipContainer = R("div", t + "-tip-container", e), this._tip = R("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                        var o = this._closeButton = R("a", t + "-close-button", e);
                        o.setAttribute("role", "button"), o.setAttribute("aria-label", "Close popup"), o.href = "#close", o.innerHTML = '<span aria-hidden="true">&#215;</span>', C(o, "click", function(s) {
                            nt(s), this.close()
                        }, this)
                    }
                },
                _updateLayout: function() {
                    var t = this._contentNode,
                        e = t.style;
                    e.width = "", e.whiteSpace = "nowrap";
                    var i = t.offsetWidth;
                    i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
                    var o = t.offsetHeight,
                        s = this.options.maxHeight,
                        a = "leaflet-popup-scrolled";
                    s && o > s ? (e.height = s + "px", D(t, a)) : q(t, a), this._containerWidth = this._container.offsetWidth
                },
                _animateZoom: function(t) {
                    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                        i = this._getAnchor();
                    X(this._container, e.add(i))
                },
                _adjustPan: function() {
                    if (this.options.autoPan) {
                        if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
                            this._autopanning = !1;
                            return
                        }
                        var t = this._map,
                            e = parseInt(ie(this._container, "marginBottom"), 10) || 0,
                            i = this._container.offsetHeight + e,
                            o = this._containerWidth,
                            s = new M(this._containerLeft, -i - this._containerBottom);
                        s._add(zt(this._container));
                        var a = t.layerPointToContainerPoint(s),
                            l = T(this.options.autoPanPadding),
                            c = T(this.options.autoPanPaddingTopLeft || l),
                            _ = T(this.options.autoPanPaddingBottomRight || l),
                            g = t.getSize(),
                            w = 0,
                            k = 0;
                        a.x + o + _.x > g.x && (w = a.x + o - g.x + _.x), a.x - w - c.x < 0 && (w = a.x - c.x), a.y + i + _.y > g.y && (k = a.y + i - g.y + _.y), a.y - k - c.y < 0 && (k = a.y - c.y), (w || k) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([w, k]))
                    }
                },
                _getAnchor: function() {
                    return T(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
                }
            }),
            _s = function(t, e) {
                return new ze(t, e)
            };
        B.mergeOptions({
            closePopupOnClick: !0
        }), B.include({
            openPopup: function(t, e, i) {
                return this._initOverlay(ze, t, e, i).openOn(this), this
            },
            closePopup: function(t) {
                return t = arguments.length ? t : this._popup, t && t.close(), this
            }
        }), _t.include({
            bindPopup: function(t, e) {
                return this._popup = this._initOverlay(ze, this._popup, t, e), this._popupHandlersAdded || (this.on({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                }), this._popupHandlersAdded = !0), this
            },
            unbindPopup: function() {
                return this._popup && (this.off({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                }), this._popupHandlersAdded = !1, this._popup = null), this
            },
            openPopup: function(t) {
                return this._popup && (this instanceof wt || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this
            },
            closePopup: function() {
                return this._popup && this._popup.close(), this
            },
            togglePopup: function() {
                return this._popup && this._popup.toggle(this), this
            },
            isPopupOpen: function() {
                return this._popup ? this._popup.isOpen() : !1
            },
            setPopupContent: function(t) {
                return this._popup && this._popup.setContent(t), this
            },
            getPopup: function() {
                return this._popup
            },
            _openPopup: function(t) {
                if (!(!this._popup || !this._map)) {
                    Zt(t);
                    var e = t.layer || t.target;
                    if (this._popup._source === e && !(e instanceof Dt)) {
                        this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
                        return
                    }
                    this._popup._source = e, this.openPopup(t.latlng)
                }
            },
            _movePopup: function(t) {
                this._popup.setLatLng(t.latlng)
            },
            _onKeyPress: function(t) {
                t.originalEvent.keyCode === 13 && this._openPopup(t)
            }
        });
        var Ae = vt.extend({
                options: {
                    pane: "tooltipPane",
                    offset: [0, 0],
                    direction: "auto",
                    permanent: !1,
                    sticky: !1,
                    opacity: .9
                },
                onAdd: function(t) {
                    vt.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                        tooltip: this
                    }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", {
                        tooltip: this
                    }, !0))
                },
                onRemove: function(t) {
                    vt.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                        tooltip: this
                    }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", {
                        tooltip: this
                    }, !0))
                },
                getEvents: function() {
                    var t = vt.prototype.getEvents.call(this);
                    return this.options.permanent || (t.preclick = this.close), t
                },
                _initLayout: function() {
                    var t = "leaflet-tooltip",
                        e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
                    this._contentNode = this._container = R("div", e), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + p(this))
                },
                _updateLayout: function() {},
                _adjustPan: function() {},
                _setPosition: function(t) {
                    var e, i, o = this._map,
                        s = this._container,
                        a = o.latLngToContainerPoint(o.getCenter()),
                        l = o.layerPointToContainerPoint(t),
                        c = this.options.direction,
                        _ = s.offsetWidth,
                        g = s.offsetHeight,
                        w = T(this.options.offset),
                        k = this._getAnchor();
                    c === "top" ? (e = _ / 2, i = g) : c === "bottom" ? (e = _ / 2, i = 0) : c === "center" ? (e = _ / 2, i = g / 2) : c === "right" ? (e = 0, i = g / 2) : c === "left" ? (e = _, i = g / 2) : l.x < a.x ? (c = "right", e = 0, i = g / 2) : (c = "left", e = _ + (w.x + k.x) * 2, i = g / 2), t = t.subtract(T(e, i, !0)).add(w).add(k), q(s, "leaflet-tooltip-right"), q(s, "leaflet-tooltip-left"), q(s, "leaflet-tooltip-top"), q(s, "leaflet-tooltip-bottom"), D(s, "leaflet-tooltip-" + c), X(s, t)
                },
                _updatePosition: function() {
                    var t = this._map.latLngToLayerPoint(this._latlng);
                    this._setPosition(t)
                },
                setOpacity: function(t) {
                    this.options.opacity = t, this._container && lt(this._container, t)
                },
                _animateZoom: function(t) {
                    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                    this._setPosition(e)
                },
                _getAnchor: function() {
                    return T(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
                }
            }),
            fs = function(t, e) {
                return new Ae(t, e)
            };
        B.include({
            openTooltip: function(t, e, i) {
                return this._initOverlay(Ae, t, e, i).openOn(this), this
            },
            closeTooltip: function(t) {
                return t.close(), this
            }
        }), _t.include({
            bindTooltip: function(t, e) {
                return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Ae, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
            },
            unbindTooltip: function() {
                return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
            },
            _initTooltipInteractions: function(t) {
                if (!(!t && this._tooltipHandlersAdded)) {
                    var e = t ? "off" : "on",
                        i = {
                            remove: this.closeTooltip,
                            move: this._moveTooltip
                        };
                    this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, i.click = this._openTooltip, this._map ? this._addFocusListeners() : i.add = this._addFocusListeners), this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), this[e](i), this._tooltipHandlersAdded = !t
                }
            },
            openTooltip: function(t) {
                return this._tooltip && (this instanceof wt || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this
            },
            closeTooltip: function() {
                if (this._tooltip) return this._tooltip.close()
            },
            toggleTooltip: function() {
                return this._tooltip && this._tooltip.toggle(this), this
            },
            isTooltipOpen: function() {
                return this._tooltip.isOpen()
            },
            setTooltipContent: function(t) {
                return this._tooltip && this._tooltip.setContent(t), this
            },
            getTooltip: function() {
                return this._tooltip
            },
            _addFocusListeners: function() {
                this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this)
            },
            _addFocusListenersOnLayer: function(t) {
                var e = typeof t.getElement == "function" && t.getElement();
                e && (C(e, "focus", function() {
                    this._tooltip._source = t, this.openTooltip()
                }, this), C(e, "blur", this.closeTooltip, this))
            },
            _setAriaDescribedByOnLayer: function(t) {
                var e = typeof t.getElement == "function" && t.getElement();
                e && e.setAttribute("aria-describedby", this._tooltip._container.id)
            },
            _openTooltip: function(t) {
                if (!(!this._tooltip || !this._map)) {
                    if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
                        this._openOnceFlag = !0;
                        var e = this;
                        this._map.once("moveend", function() {
                            e._openOnceFlag = !1, e._openTooltip(t)
                        });
                        return
                    }
                    this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0)
                }
            },
            _moveTooltip: function(t) {
                var e = t.latlng,
                    i, o;
                this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), o = this._map.containerPointToLayerPoint(i), e = this._map.layerPointToLatLng(o)), this._tooltip.setLatLng(e)
            }
        });
        var Dn = Ft.extend({
            options: {
                iconSize: [12, 12],
                html: !1,
                bgPos: null,
                className: "leaflet-div-icon"
            },
            createIcon: function(t) {
                var e = t && t.tagName === "DIV" ? t : document.createElement("div"),
                    i = this.options;
                if (i.html instanceof Element ? (we(e), e.appendChild(i.html)) : e.innerHTML = i.html !== !1 ? i.html : "", i.bgPos) {
                    var o = T(i.bgPos);
                    e.style.backgroundPosition = -o.x + "px " + -o.y + "px"
                }
                return this._setIconStyles(e, "icon"), e
            },
            createShadow: function() {
                return null
            }
        });

        function ps(t) {
            return new Dn(t)
        }
        Ft.Default = le;
        var ue = _t.extend({
            options: {
                tileSize: 256,
                opacity: 1,
                updateWhenIdle: P.mobile,
                updateWhenZooming: !0,
                updateInterval: 200,
                zIndex: 1,
                bounds: null,
                minZoom: 0,
                maxZoom: void 0,
                maxNativeZoom: void 0,
                minNativeZoom: void 0,
                noWrap: !1,
                pane: "tilePane",
                className: "",
                keepBuffer: 2
            },
            initialize: function(t) {
                G(this, t)
            },
            onAdd: function() {
                this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView()
            },
            beforeAdd: function(t) {
                t._addZoomLimit(this)
            },
            onRemove: function(t) {
                this._removeAllTiles(), V(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
            },
            bringToFront: function() {
                return this._map && (Ht(this._container), this._setAutoZIndex(Math.max)), this
            },
            bringToBack: function() {
                return this._map && (Ut(this._container), this._setAutoZIndex(Math.min)), this
            },
            getContainer: function() {
                return this._container
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._updateOpacity(), this
            },
            setZIndex: function(t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            isLoading: function() {
                return this._loading
            },
            redraw: function() {
                if (this._map) {
                    this._removeAllTiles();
                    var t = this._clampZoom(this._map.getZoom());
                    t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update()
                }
                return this
            },
            getEvents: function() {
                var t = {
                    viewprereset: this._invalidateAll,
                    viewreset: this._resetView,
                    zoom: this._resetView,
                    moveend: this._onMoveEnd
                };
                return this.options.updateWhenIdle || (this._onMove || (this._onMove = v(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            createTile: function() {
                return document.createElement("div")
            },
            getTileSize: function() {
                var t = this.options.tileSize;
                return t instanceof M ? t : new M(t, t)
            },
            _updateZIndex: function() {
                this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex)
            },
            _setAutoZIndex: function(t) {
                for (var e = this.getPane().children, i = -t(-1 / 0, 1 / 0), o = 0, s = e.length, a; o < s; o++) a = e[o].style.zIndex, e[o] !== this._container && a && (i = t(i, +a));
                isFinite(i) && (this.options.zIndex = i + t(-1, 1), this._updateZIndex())
            },
            _updateOpacity: function() {
                if (this._map && !P.ielt9) {
                    lt(this._container, this.options.opacity);
                    var t = +new Date,
                        e = !1,
                        i = !1;
                    for (var o in this._tiles) {
                        var s = this._tiles[o];
                        if (!(!s.current || !s.loaded)) {
                            var a = Math.min(1, (t - s.loaded) / 200);
                            lt(s.el, a), a < 1 ? e = !0 : (s.active ? i = !0 : this._onOpaqueTile(s), s.active = !0)
                        }
                    }
                    i && !this._noPrune && this._pruneTiles(), e && (A(this._fadeFrame), this._fadeFrame = S(this._updateOpacity, this))
                }
            },
            _onOpaqueTile: x,
            _initContainer: function() {
                this._container || (this._container = R("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
            },
            _updateLevels: function() {
                var t = this._tileZoom,
                    e = this.options.maxZoom;
                if (t !== void 0) {
                    for (var i in this._levels) i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (V(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
                    var o = this._levels[t],
                        s = this._map;
                    return o || (o = this._levels[t] = {}, o.el = R("div", "leaflet-tile-container leaflet-zoom-animated", this._container), o.el.style.zIndex = e, o.origin = s.project(s.unproject(s.getPixelOrigin()), t).round(), o.zoom = t, this._setZoomTransform(o, s.getCenter(), s.getZoom()), x(o.el.offsetWidth), this._onCreateLevel(o)), this._level = o, o
                }
            },
            _onUpdateLevel: x,
            _onRemoveLevel: x,
            _onCreateLevel: x,
            _pruneTiles: function() {
                if (this._map) {
                    var t, e, i = this._map.getZoom();
                    if (i > this.options.maxZoom || i < this.options.minZoom) {
                        this._removeAllTiles();
                        return
                    }
                    for (t in this._tiles) e = this._tiles[t], e.retain = e.current;
                    for (t in this._tiles)
                        if (e = this._tiles[t], e.current && !e.active) {
                            var o = e.coords;
                            this._retainParent(o.x, o.y, o.z, o.z - 5) || this._retainChildren(o.x, o.y, o.z, o.z + 2)
                        } for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                }
            },
            _removeTilesAtZoom: function(t) {
                for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e)
            },
            _removeAllTiles: function() {
                for (var t in this._tiles) this._removeTile(t)
            },
            _invalidateAll: function() {
                for (var t in this._levels) V(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
                this._removeAllTiles(), this._tileZoom = void 0
            },
            _retainParent: function(t, e, i, o) {
                var s = Math.floor(t / 2),
                    a = Math.floor(e / 2),
                    l = i - 1,
                    c = new M(+s, +a);
                c.z = +l;
                var _ = this._tileCoordsToKey(c),
                    g = this._tiles[_];
                return g && g.active ? (g.retain = !0, !0) : (g && g.loaded && (g.retain = !0), l > o ? this._retainParent(s, a, l, o) : !1)
            },
            _retainChildren: function(t, e, i, o) {
                for (var s = 2 * t; s < 2 * t + 2; s++)
                    for (var a = 2 * e; a < 2 * e + 2; a++) {
                        var l = new M(s, a);
                        l.z = i + 1;
                        var c = this._tileCoordsToKey(l),
                            _ = this._tiles[c];
                        if (_ && _.active) {
                            _.retain = !0;
                            continue
                        } else _ && _.loaded && (_.retain = !0);
                        i + 1 < o && this._retainChildren(s, a, i + 1, o)
                    }
            },
            _resetView: function(t) {
                var e = t && (t.pinch || t.flyTo);
                this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
            },
            _animateZoom: function(t) {
                this._setView(t.center, t.zoom, !0, t.noUpdate)
            },
            _clampZoom: function(t) {
                var e = this.options;
                return e.minNativeZoom !== void 0 && t < e.minNativeZoom ? e.minNativeZoom : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t ? e.maxNativeZoom : t
            },
            _setView: function(t, e, i, o) {
                var s = Math.round(e);
                this.options.maxZoom !== void 0 && s > this.options.maxZoom || this.options.minZoom !== void 0 && s < this.options.minZoom ? s = void 0 : s = this._clampZoom(s);
                var a = this.options.updateWhenZooming && s !== this._tileZoom;
                (!o || a) && (this._tileZoom = s, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), s !== void 0 && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e)
            },
            _setZoomTransforms: function(t, e) {
                for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e)
            },
            _setZoomTransform: function(t, e, i) {
                var o = this._map.getZoomScale(i, t.zoom),
                    s = t.origin.multiplyBy(o).subtract(this._map._getNewPixelOrigin(e, i)).round();
                P.any3d ? It(t.el, s, o) : X(t.el, s)
            },
            _resetGrid: function() {
                var t = this._map,
                    e = t.options.crs,
                    i = this._tileSize = this.getTileSize(),
                    o = this._tileZoom,
                    s = this._map.getPixelWorldBounds(this._tileZoom);
                s && (this._globalTileRange = this._pxBoundsToTileRange(s)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], o).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], o).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], o).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], o).y / i.y)]
            },
            _onMoveEnd: function() {
                !this._map || this._map._animatingZoom || this._update()
            },
            _getTiledPixelBounds: function(t) {
                var e = this._map,
                    i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                    o = e.getZoomScale(i, this._tileZoom),
                    s = e.project(t, this._tileZoom).floor(),
                    a = e.getSize().divideBy(o * 2);
                return new N(s.subtract(a), s.add(a))
            },
            _update: function(t) {
                var e = this._map;
                if (e) {
                    var i = this._clampZoom(e.getZoom());
                    if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
                        var o = this._getTiledPixelBounds(t),
                            s = this._pxBoundsToTileRange(o),
                            a = s.getCenter(),
                            l = [],
                            c = this.options.keepBuffer,
                            _ = new N(s.getBottomLeft().subtract([c, -c]), s.getTopRight().add([c, -c]));
                        if (!(isFinite(s.min.x) && isFinite(s.min.y) && isFinite(s.max.x) && isFinite(s.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                        for (var g in this._tiles) {
                            var w = this._tiles[g].coords;
                            (w.z !== this._tileZoom || !_.contains(new M(w.x, w.y))) && (this._tiles[g].current = !1)
                        }
                        if (Math.abs(i - this._tileZoom) > 1) {
                            this._setView(t, i);
                            return
                        }
                        for (var k = s.min.y; k <= s.max.y; k++)
                            for (var I = s.min.x; I <= s.max.x; I++) {
                                var st = new M(I, k);
                                if (st.z = this._tileZoom, !!this._isValidTile(st)) {
                                    var it = this._tiles[this._tileCoordsToKey(st)];
                                    it ? it.current = !0 : l.push(st)
                                }
                            }
                        if (l.sort(function(rt, qt) {
                                return rt.distanceTo(a) - qt.distanceTo(a)
                            }), l.length !== 0) {
                            this._loading || (this._loading = !0, this.fire("loading"));
                            var ct = document.createDocumentFragment();
                            for (I = 0; I < l.length; I++) this._addTile(l[I], ct);
                            this._level.el.appendChild(ct)
                        }
                    }
                }
            },
            _isValidTile: function(t) {
                var e = this._map.options.crs;
                if (!e.infinite) {
                    var i = this._globalTileRange;
                    if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return !1
                }
                if (!this.options.bounds) return !0;
                var o = this._tileCoordsToBounds(t);
                return K(this.options.bounds).overlaps(o)
            },
            _keyToBounds: function(t) {
                return this._tileCoordsToBounds(this._keyToTileCoords(t))
            },
            _tileCoordsToNwSe: function(t) {
                var e = this._map,
                    i = this.getTileSize(),
                    o = t.scaleBy(i),
                    s = o.add(i),
                    a = e.unproject(o, t.z),
                    l = e.unproject(s, t.z);
                return [a, l]
            },
            _tileCoordsToBounds: function(t) {
                var e = this._tileCoordsToNwSe(t),
                    i = new ot(e[0], e[1]);
                return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i
            },
            _tileCoordsToKey: function(t) {
                return t.x + ":" + t.y + ":" + t.z
            },
            _keyToTileCoords: function(t) {
                var e = t.split(":"),
                    i = new M(+e[0], +e[1]);
                return i.z = +e[2], i
            },
            _removeTile: function(t) {
                var e = this._tiles[t];
                e && (V(e.el), delete this._tiles[t], this.fire("tileunload", {
                    tile: e.el,
                    coords: this._keyToTileCoords(t)
                }))
            },
            _initTile: function(t) {
                D(t, "leaflet-tile");
                var e = this.getTileSize();
                t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = x, t.onmousemove = x, P.ielt9 && this.options.opacity < 1 && lt(t, this.options.opacity)
            },
            _addTile: function(t, e) {
                var i = this._getTilePos(t),
                    o = this._tileCoordsToKey(t),
                    s = this.createTile(this._wrapCoords(t), h(this._tileReady, this, t));
                this._initTile(s), this.createTile.length < 2 && S(h(this._tileReady, this, t, null, s)), X(s, i), this._tiles[o] = {
                    el: s,
                    coords: t,
                    current: !0
                }, e.appendChild(s), this.fire("tileloadstart", {
                    tile: s,
                    coords: t
                })
            },
            _tileReady: function(t, e, i) {
                e && this.fire("tileerror", {
                    error: e,
                    tile: i,
                    coords: t
                });
                var o = this._tileCoordsToKey(t);
                i = this._tiles[o], i && (i.loaded = +new Date, this._map._fadeAnimated ? (lt(i.el, 0), A(this._fadeFrame), this._fadeFrame = S(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (D(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
                    tile: i.el,
                    coords: t
                })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), P.ielt9 || !this._map._fadeAnimated ? S(this._pruneTiles, this) : setTimeout(h(this._pruneTiles, this), 250)))
            },
            _getTilePos: function(t) {
                return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
            },
            _wrapCoords: function(t) {
                var e = new M(this._wrapX ? y(t.x, this._wrapX) : t.x, this._wrapY ? y(t.y, this._wrapY) : t.y);
                return e.z = t.z, e
            },
            _pxBoundsToTileRange: function(t) {
                var e = this.getTileSize();
                return new N(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
            },
            _noTilesToLoad: function() {
                for (var t in this._tiles)
                    if (!this._tiles[t].loaded) return !1;
                return !0
            }
        });

        function ms(t) {
            return new ue(t)
        }
        var jt = ue.extend({
            options: {
                minZoom: 0,
                maxZoom: 19,
                subdomains: "abc",
                errorTileUrl: "",
                zoomOffset: 0,
                tms: !1,
                zoomReverse: !1,
                detectRetina: !1,
                crossOrigin: !1,
                referrerPolicy: !1
            },
            initialize: function(t, e) {
                this._url = t, e = G(this, e), e.detectRetina && P.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove)
            },
            setUrl: function(t, e) {
                return this._url === t && e === void 0 && (e = !0), this._url = t, e || this.redraw(), this
            },
            createTile: function(t, e) {
                var i = document.createElement("img");
                return C(i, "load", h(this._tileOnLoad, this, e, i)), C(i, "error", h(this._tileOnError, this, e, i)), (this.options.crossOrigin || this.options.crossOrigin === "") && (i.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (i.referrerPolicy = this.options.referrerPolicy), i.alt = "", i.src = this.getTileUrl(t), i
            },
            getTileUrl: function(t) {
                var e = {
                    r: P.retina ? "@2x" : "",
                    s: this._getSubdomain(t),
                    x: t.x,
                    y: t.y,
                    z: this._getZoomForUrl()
                };
                if (this._map && !this._map.options.crs.infinite) {
                    var i = this._globalTileRange.max.y - t.y;
                    this.options.tms && (e.y = i), e["-y"] = i
                }
                return Mt(this._url, n(e, this.options))
            },
            _tileOnLoad: function(t, e) {
                P.ielt9 ? setTimeout(h(t, this, null, e), 0) : t(null, e)
            },
            _tileOnError: function(t, e, i) {
                var o = this.options.errorTileUrl;
                o && e.getAttribute("src") !== o && (e.src = o), t(i, e)
            },
            _onTileRemove: function(t) {
                t.tile.onload = null
            },
            _getZoomForUrl: function() {
                var t = this._tileZoom,
                    e = this.options.maxZoom,
                    i = this.options.zoomReverse,
                    o = this.options.zoomOffset;
                return i && (t = e - t), t + o
            },
            _getSubdomain: function(t) {
                var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                return this.options.subdomains[e]
            },
            _abortLoading: function() {
                var t, e;
                for (t in this._tiles)
                    if (this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = x, e.onerror = x, !e.complete)) {
                        e.src = Rt;
                        var i = this._tiles[t].coords;
                        V(e), delete this._tiles[t], this.fire("tileabort", {
                            tile: e,
                            coords: i
                        })
                    }
            },
            _removeTile: function(t) {
                var e = this._tiles[t];
                if (e) return e.el.setAttribute("src", Rt), ue.prototype._removeTile.call(this, t)
            },
            _tileReady: function(t, e, i) {
                if (!(!this._map || i && i.getAttribute("src") === Rt)) return ue.prototype._tileReady.call(this, t, e, i)
            }
        });

        function On(t, e) {
            return new jt(t, e)
        }
        var In = jt.extend({
            defaultWmsParams: {
                service: "WMS",
                request: "GetMap",
                layers: "",
                styles: "",
                format: "image/jpeg",
                transparent: !1,
                version: "1.1.1"
            },
            options: {
                crs: null,
                uppercase: !1
            },
            initialize: function(t, e) {
                this._url = t;
                var i = n({}, this.defaultWmsParams);
                for (var o in e) o in this.options || (i[o] = e[o]);
                e = G(this, e);
                var s = e.detectRetina && P.retina ? 2 : 1,
                    a = this.getTileSize();
                i.width = a.x * s, i.height = a.y * s, this.wmsParams = i
            },
            onAdd: function(t) {
                this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
                this.wmsParams[e] = this._crs.code, jt.prototype.onAdd.call(this, t)
            },
            getTileUrl: function(t) {
                var e = this._tileCoordsToNwSe(t),
                    i = this._crs,
                    o = Y(i.project(e[0]), i.project(e[1])),
                    s = o.min,
                    a = o.max,
                    l = (this._wmsVersion >= 1.3 && this._crs === Tn ? [s.y, s.x, a.y, a.x] : [s.x, s.y, a.x, a.y]).join(","),
                    c = jt.prototype.getTileUrl.call(this, t);
                return c + kt(this.wmsParams, c, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + l
            },
            setParams: function(t, e) {
                return n(this.wmsParams, t), e || this.redraw(), this
            }
        });

        function gs(t, e) {
            return new In(t, e)
        }
        jt.WMS = In, On.wms = gs;
        var Pt = _t.extend({
                options: {
                    padding: .1
                },
                initialize: function(t) {
                    G(this, t), p(this), this._layers = this._layers || {}
                },
                onAdd: function() {
                    this._container || (this._initContainer(), D(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
                },
                onRemove: function() {
                    this.off("update", this._updatePaths, this), this._destroyContainer()
                },
                getEvents: function() {
                    var t = {
                        viewreset: this._reset,
                        zoom: this._onZoom,
                        moveend: this._update,
                        zoomend: this._onZoomEnd
                    };
                    return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
                },
                _onAnimZoom: function(t) {
                    this._updateTransform(t.center, t.zoom)
                },
                _onZoom: function() {
                    this._updateTransform(this._map.getCenter(), this._map.getZoom())
                },
                _updateTransform: function(t, e) {
                    var i = this._map.getZoomScale(e, this._zoom),
                        o = this._map.getSize().multiplyBy(.5 + this.options.padding),
                        s = this._map.project(this._center, e),
                        a = o.multiplyBy(-i).add(s).subtract(this._map._getNewPixelOrigin(t, e));
                    P.any3d ? It(this._container, a, i) : X(this._container, a)
                },
                _reset: function() {
                    this._update(), this._updateTransform(this._center, this._zoom);
                    for (var t in this._layers) this._layers[t]._reset()
                },
                _onZoomEnd: function() {
                    for (var t in this._layers) this._layers[t]._project()
                },
                _updatePaths: function() {
                    for (var t in this._layers) this._layers[t]._update()
                },
                _update: function() {
                    var t = this.options.padding,
                        e = this._map.getSize(),
                        i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                    this._bounds = new N(i, i.add(e.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
                }
            }),
            zn = Pt.extend({
                options: {
                    tolerance: 0
                },
                getEvents: function() {
                    var t = Pt.prototype.getEvents.call(this);
                    return t.viewprereset = this._onViewPreReset, t
                },
                _onViewPreReset: function() {
                    this._postponeUpdatePaths = !0
                },
                onAdd: function() {
                    Pt.prototype.onAdd.call(this), this._draw()
                },
                _initContainer: function() {
                    var t = this._container = document.createElement("canvas");
                    C(t, "mousemove", this._onMouseMove, this), C(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), C(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d")
                },
                _destroyContainer: function() {
                    A(this._redrawRequest), delete this._ctx, V(this._container), F(this._container), delete this._container
                },
                _updatePaths: function() {
                    if (!this._postponeUpdatePaths) {
                        var t;
                        this._redrawBounds = null;
                        for (var e in this._layers) t = this._layers[e], t._update();
                        this._redraw()
                    }
                },
                _update: function() {
                    if (!(this._map._animatingZoom && this._bounds)) {
                        Pt.prototype._update.call(this);
                        var t = this._bounds,
                            e = this._container,
                            i = t.getSize(),
                            o = P.retina ? 2 : 1;
                        X(e, t.min), e.width = o * i.x, e.height = o * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", P.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                    }
                },
                _reset: function() {
                    Pt.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
                },
                _initPath: function(t) {
                    this._updateDashArray(t), this._layers[p(t)] = t;
                    var e = t._order = {
                        layer: t,
                        prev: this._drawLast,
                        next: null
                    };
                    this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast
                },
                _addPath: function(t) {
                    this._requestRedraw(t)
                },
                _removePath: function(t) {
                    var e = t._order,
                        i = e.next,
                        o = e.prev;
                    i ? i.prev = o : this._drawLast = o, o ? o.next = i : this._drawFirst = i, delete t._order, delete this._layers[p(t)], this._requestRedraw(t)
                },
                _updatePath: function(t) {
                    this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
                },
                _updateStyle: function(t) {
                    this._updateDashArray(t), this._requestRedraw(t)
                },
                _updateDashArray: function(t) {
                    if (typeof t.options.dashArray == "string") {
                        var e = t.options.dashArray.split(/[, ]+/),
                            i = [],
                            o, s;
                        for (s = 0; s < e.length; s++) {
                            if (o = Number(e[s]), isNaN(o)) return;
                            i.push(o)
                        }
                        t.options._dashArray = i
                    } else t.options._dashArray = t.options.dashArray
                },
                _requestRedraw: function(t) {
                    this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || S(this._redraw, this))
                },
                _extendRedrawBounds: function(t) {
                    if (t._pxBounds) {
                        var e = (t.options.weight || 0) + 1;
                        this._redrawBounds = this._redrawBounds || new N, this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
                    }
                },
                _redraw: function() {
                    this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
                },
                _clear: function() {
                    var t = this._redrawBounds;
                    if (t) {
                        var e = t.getSize();
                        this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
                    } else this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore()
                },
                _draw: function() {
                    var t, e = this._redrawBounds;
                    if (this._ctx.save(), e) {
                        var i = e.getSize();
                        this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip()
                    }
                    this._drawing = !0;
                    for (var o = this._drawFirst; o; o = o.next) t = o.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
                    this._drawing = !1, this._ctx.restore()
                },
                _updatePoly: function(t, e) {
                    if (this._drawing) {
                        var i, o, s, a, l = t._parts,
                            c = l.length,
                            _ = this._ctx;
                        if (c) {
                            for (_.beginPath(), i = 0; i < c; i++) {
                                for (o = 0, s = l[i].length; o < s; o++) a = l[i][o], _[o ? "lineTo" : "moveTo"](a.x, a.y);
                                e && _.closePath()
                            }
                            this._fillStroke(_, t)
                        }
                    }
                },
                _updateCircle: function(t) {
                    if (!(!this._drawing || t._empty())) {
                        var e = t._point,
                            i = this._ctx,
                            o = Math.max(Math.round(t._radius), 1),
                            s = (Math.max(Math.round(t._radiusY), 1) || o) / o;
                        s !== 1 && (i.save(), i.scale(1, s)), i.beginPath(), i.arc(e.x, e.y / s, o, 0, Math.PI * 2, !1), s !== 1 && i.restore(), this._fillStroke(i, t)
                    }
                },
                _fillStroke: function(t, e) {
                    var i = e.options;
                    i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && i.weight !== 0 && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke())
                },
                _onClick: function(t) {
                    for (var e = this._map.mouseEventToLayerPoint(t), i, o, s = this._drawFirst; s; s = s.next) i = s.layer, i.options.interactive && i._containsPoint(e) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(i)) && (o = i);
                    this._fireEvent(o ? [o] : !1, t)
                },
                _onMouseMove: function(t) {
                    if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
                        var e = this._map.mouseEventToLayerPoint(t);
                        this._handleMouseHover(t, e)
                    }
                },
                _handleMouseOut: function(t) {
                    var e = this._hoveredLayer;
                    e && (q(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1)
                },
                _handleMouseHover: function(t, e) {
                    if (!this._mouseHoverThrottled) {
                        for (var i, o, s = this._drawFirst; s; s = s.next) i = s.layer, i.options.interactive && i._containsPoint(e) && (o = i);
                        o !== this._hoveredLayer && (this._handleMouseOut(t), o && (D(this._container, "leaflet-interactive"), this._fireEvent([o], t, "mouseover"), this._hoveredLayer = o)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(h(function() {
                            this._mouseHoverThrottled = !1
                        }, this), 32)
                    }
                },
                _fireEvent: function(t, e, i) {
                    this._map._fireDOMEvent(e, i || e.type, t)
                },
                _bringToFront: function(t) {
                    var e = t._order;
                    if (e) {
                        var i = e.next,
                            o = e.prev;
                        if (i) i.prev = o;
                        else return;
                        o ? o.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t)
                    }
                },
                _bringToBack: function(t) {
                    var e = t._order;
                    if (e) {
                        var i = e.next,
                            o = e.prev;
                        if (o) o.next = i;
                        else return;
                        i ? i.prev = o : o && (this._drawLast = o), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t)
                    }
                }
            });

        function An(t) {
            return P.canvas ? new zn(t) : null
        }
        var ce = function() {
                try {
                    return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                        function(t) {
                            return document.createElement("<lvml:" + t + ' class="lvml">')
                        }
                } catch {}
                return function(t) {
                    return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
            }(),
            vs = {
                _initContainer: function() {
                    this._container = R("div", "leaflet-vml-container")
                },
                _update: function() {
                    this._map._animatingZoom || (Pt.prototype._update.call(this), this.fire("update"))
                },
                _initPath: function(t) {
                    var e = t._container = ce("shape");
                    D(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = ce("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[p(t)] = t
                },
                _addPath: function(t) {
                    var e = t._container;
                    this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e)
                },
                _removePath: function(t) {
                    var e = t._container;
                    V(e), t.removeInteractiveTarget(e), delete this._layers[p(t)]
                },
                _updateStyle: function(t) {
                    var e = t._stroke,
                        i = t._fill,
                        o = t.options,
                        s = t._container;
                    s.stroked = !!o.stroke, s.filled = !!o.fill, o.stroke ? (e || (e = t._stroke = ce("stroke")), s.appendChild(e), e.weight = o.weight + "px", e.color = o.color, e.opacity = o.opacity, o.dashArray ? e.dashStyle = at(o.dashArray) ? o.dashArray.join(" ") : o.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = o.lineCap.replace("butt", "flat"), e.joinstyle = o.lineJoin) : e && (s.removeChild(e), t._stroke = null), o.fill ? (i || (i = t._fill = ce("fill")), s.appendChild(i), i.color = o.fillColor || o.color, i.opacity = o.fillOpacity) : i && (s.removeChild(i), t._fill = null)
                },
                _updateCircle: function(t) {
                    var e = t._point.round(),
                        i = Math.round(t._radius),
                        o = Math.round(t._radiusY || i);
                    this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + o + " 0," + 65535 * 360)
                },
                _setPath: function(t, e) {
                    t._path.v = e
                },
                _bringToFront: function(t) {
                    Ht(t._container)
                },
                _bringToBack: function(t) {
                    Ut(t._container)
                }
            },
            Ze = P.vml ? ce : Ri,
            de = Pt.extend({
                _initContainer: function() {
                    this._container = Ze("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Ze("g"), this._container.appendChild(this._rootGroup)
                },
                _destroyContainer: function() {
                    V(this._container), F(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
                },
                _update: function() {
                    if (!(this._map._animatingZoom && this._bounds)) {
                        Pt.prototype._update.call(this);
                        var t = this._bounds,
                            e = t.getSize(),
                            i = this._container;
                        (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), X(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update")
                    }
                },
                _initPath: function(t) {
                    var e = t._path = Ze("path");
                    t.options.className && D(e, t.options.className), t.options.interactive && D(e, "leaflet-interactive"), this._updateStyle(t), this._layers[p(t)] = t
                },
                _addPath: function(t) {
                    this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
                },
                _removePath: function(t) {
                    V(t._path), t.removeInteractiveTarget(t._path), delete this._layers[p(t)]
                },
                _updatePath: function(t) {
                    t._project(), t._update()
                },
                _updateStyle: function(t) {
                    var e = t._path,
                        i = t.options;
                    e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
                },
                _updatePoly: function(t, e) {
                    this._setPath(t, Ni(t._parts, e))
                },
                _updateCircle: function(t) {
                    var e = t._point,
                        i = Math.max(Math.round(t._radius), 1),
                        o = Math.max(Math.round(t._radiusY), 1) || i,
                        s = "a" + i + "," + o + " 0 1,0 ",
                        a = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + s + i * 2 + ",0 " + s + -i * 2 + ",0 ";
                    this._setPath(t, a)
                },
                _setPath: function(t, e) {
                    t._path.setAttribute("d", e)
                },
                _bringToFront: function(t) {
                    Ht(t._path)
                },
                _bringToBack: function(t) {
                    Ut(t._path)
                }
            });
        P.vml && de.include(vs);

        function Zn(t) {
            return P.svg || P.vml ? new de(t) : null
        }
        B.include({
            getRenderer: function(t) {
                var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
                return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e
            },
            _getPaneRenderer: function(t) {
                if (t === "overlayPane" || t === void 0) return !1;
                var e = this._paneRenderers[t];
                return e === void 0 && (e = this._createRenderer({
                    pane: t
                }), this._paneRenderers[t] = e), e
            },
            _createRenderer: function(t) {
                return this.options.preferCanvas && An(t) || Zn(t)
            }
        });
        var Bn = Wt.extend({
            initialize: function(t, e) {
                Wt.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
            },
            setBounds: function(t) {
                return this.setLatLngs(this._boundsToLatLngs(t))
            },
            _boundsToLatLngs: function(t) {
                return t = K(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
            }
        });

        function ys(t, e) {
            return new Bn(t, e)
        }
        de.create = Ze, de.pointsToPath = Ni, bt.geometryToLayer = Ce, bt.coordsToLatLng = Ti, bt.coordsToLatLngs = Se, bt.latLngToCoords = ki, bt.latLngsToCoords = De, bt.getFeature = Vt, bt.asFeature = Oe, B.mergeOptions({
            boxZoom: !0
        });
        var Rn = gt.extend({
            initialize: function(t) {
                this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
            },
            addHooks: function() {
                C(this._container, "mousedown", this._onMouseDown, this)
            },
            removeHooks: function() {
                F(this._container, "mousedown", this._onMouseDown, this)
            },
            moved: function() {
                return this._moved
            },
            _destroy: function() {
                V(this._pane), delete this._pane
            },
            _resetState: function() {
                this._resetStateTimeout = 0, this._moved = !1
            },
            _clearDeferredResetState: function() {
                this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
            },
            _onMouseDown: function(t) {
                if (!t.shiftKey || t.which !== 1 && t.button !== 1) return !1;
                this._clearDeferredResetState(), this._resetState(), ne(), hi(), this._startPoint = this._map.mouseEventToContainerPoint(t), C(document, {
                    contextmenu: Zt,
                    mousemove: this._onMouseMove,
                    mouseup: this._onMouseUp,
                    keydown: this._onKeyDown
                }, this)
            },
            _onMouseMove: function(t) {
                this._moved || (this._moved = !0, this._box = R("div", "leaflet-zoom-box", this._container), D(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
                var e = new N(this._point, this._startPoint),
                    i = e.getSize();
                X(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px"
            },
            _finish: function() {
                this._moved && (V(this._box), q(this._container, "leaflet-crosshair")), oe(), li(), F(document, {
                    contextmenu: Zt,
                    mousemove: this._onMouseMove,
                    mouseup: this._onMouseUp,
                    keydown: this._onKeyDown
                }, this)
            },
            _onMouseUp: function(t) {
                if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
                    this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(h(this._resetState, this), 0);
                    var e = new ot(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                    this._map.fitBounds(e).fire("boxzoomend", {
                        boxZoomBounds: e
                    })
                }
            },
            _onKeyDown: function(t) {
                t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState())
            }
        });
        B.addInitHook("addHandler", "boxZoom", Rn), B.mergeOptions({
            doubleClickZoom: !0
        });
        var Nn = gt.extend({
            addHooks: function() {
                this._map.on("dblclick", this._onDoubleClick, this)
            },
            removeHooks: function() {
                this._map.off("dblclick", this._onDoubleClick, this)
            },
            _onDoubleClick: function(t) {
                var e = this._map,
                    i = e.getZoom(),
                    o = e.options.zoomDelta,
                    s = t.originalEvent.shiftKey ? i - o : i + o;
                e.options.doubleClickZoom === "center" ? e.setZoom(s) : e.setZoomAround(t.containerPoint, s)
            }
        });
        B.addInitHook("addHandler", "doubleClickZoom", Nn), B.mergeOptions({
            dragging: !0,
            inertia: !0,
            inertiaDeceleration: 3400,
            inertiaMaxSpeed: 1 / 0,
            easeLinearity: .2,
            worldCopyJump: !1,
            maxBoundsViscosity: 0
        });
        var Hn = gt.extend({
            addHooks: function() {
                if (!this._draggable) {
                    var t = this._map;
                    this._draggable = new St(t._mapPane, t._container), this._draggable.on({
                        dragstart: this._onDragStart,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
                }
                D(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
            },
            removeHooks: function() {
                q(this._map._container, "leaflet-grab"), q(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
            },
            moved: function() {
                return this._draggable && this._draggable._moved
            },
            moving: function() {
                return this._draggable && this._draggable._moving
            },
            _onDragStart: function() {
                var t = this._map;
                if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                    var e = K(this._map.options.maxBounds);
                    this._offsetLimit = Y(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
                } else this._offsetLimit = null;
                t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
            },
            _onDrag: function(t) {
                if (this._map.options.inertia) {
                    var e = this._lastTime = +new Date,
                        i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                    this._positions.push(i), this._times.push(e), this._prunePositions(e)
                }
                this._map.fire("move", t).fire("drag", t)
            },
            _prunePositions: function(t) {
                for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift()
            },
            _onZoomEnd: function() {
                var t = this._map.getSize().divideBy(2),
                    e = this._map.latLngToLayerPoint([0, 0]);
                this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
            },
            _viscousLimit: function(t, e) {
                return t - (t - e) * this._viscosity
            },
            _onPreDragLimit: function() {
                if (!(!this._viscosity || !this._offsetLimit)) {
                    var t = this._draggable._newPos.subtract(this._draggable._startPos),
                        e = this._offsetLimit;
                    t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
                }
            },
            _onPreDragWrap: function() {
                var t = this._worldWidth,
                    e = Math.round(t / 2),
                    i = this._initialWorldOffset,
                    o = this._draggable._newPos.x,
                    s = (o - e + i) % t + e - i,
                    a = (o + e + i) % t - e - i,
                    l = Math.abs(s + i) < Math.abs(a + i) ? s : a;
                this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = l
            },
            _onDragEnd: function(t) {
                var e = this._map,
                    i = e.options,
                    o = !i.inertia || t.noInertia || this._times.length < 2;
                if (e.fire("dragend", t), o) e.fire("moveend");
                else {
                    this._prunePositions(+new Date);
                    var s = this._lastPos.subtract(this._positions[0]),
                        a = (this._lastTime - this._times[0]) / 1e3,
                        l = i.easeLinearity,
                        c = s.multiplyBy(l / a),
                        _ = c.distanceTo([0, 0]),
                        g = Math.min(i.inertiaMaxSpeed, _),
                        w = c.multiplyBy(g / _),
                        k = g / (i.inertiaDeceleration * l),
                        I = w.multiplyBy(-k / 2).round();
                    !I.x && !I.y ? e.fire("moveend") : (I = e._limitOffset(I, e.options.maxBounds), S(function() {
                        e.panBy(I, {
                            duration: k,
                            easeLinearity: l,
                            noMoveStart: !0,
                            animate: !0
                        })
                    }))
                }
            }
        });
        B.addInitHook("addHandler", "dragging", Hn), B.mergeOptions({
            keyboard: !0,
            keyboardPanDelta: 80
        });
        var Un = gt.extend({
            keyCodes: {
                left: [37],
                right: [39],
                down: [40],
                up: [38],
                zoomIn: [187, 107, 61, 171],
                zoomOut: [189, 109, 54, 173]
            },
            initialize: function(t) {
                this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
            },
            addHooks: function() {
                var t = this._map._container;
                t.tabIndex <= 0 && (t.tabIndex = "0"), C(t, {
                    focus: this._onFocus,
                    blur: this._onBlur,
                    mousedown: this._onMouseDown
                }, this), this._map.on({
                    focus: this._addHooks,
                    blur: this._removeHooks
                }, this)
            },
            removeHooks: function() {
                this._removeHooks(), F(this._map._container, {
                    focus: this._onFocus,
                    blur: this._onBlur,
                    mousedown: this._onMouseDown
                }, this), this._map.off({
                    focus: this._addHooks,
                    blur: this._removeHooks
                }, this)
            },
            _onMouseDown: function() {
                if (!this._focused) {
                    var t = document.body,
                        e = document.documentElement,
                        i = t.scrollTop || e.scrollTop,
                        o = t.scrollLeft || e.scrollLeft;
                    this._map._container.focus(), window.scrollTo(o, i)
                }
            },
            _onFocus: function() {
                this._focused = !0, this._map.fire("focus")
            },
            _onBlur: function() {
                this._focused = !1, this._map.fire("blur")
            },
            _setPanDelta: function(t) {
                var e = this._panKeys = {},
                    i = this.keyCodes,
                    o, s;
                for (o = 0, s = i.left.length; o < s; o++) e[i.left[o]] = [-1 * t, 0];
                for (o = 0, s = i.right.length; o < s; o++) e[i.right[o]] = [t, 0];
                for (o = 0, s = i.down.length; o < s; o++) e[i.down[o]] = [0, t];
                for (o = 0, s = i.up.length; o < s; o++) e[i.up[o]] = [0, -1 * t]
            },
            _setZoomDelta: function(t) {
                var e = this._zoomKeys = {},
                    i = this.keyCodes,
                    o, s;
                for (o = 0, s = i.zoomIn.length; o < s; o++) e[i.zoomIn[o]] = t;
                for (o = 0, s = i.zoomOut.length; o < s; o++) e[i.zoomOut[o]] = -t
            },
            _addHooks: function() {
                C(document, "keydown", this._onKeyDown, this)
            },
            _removeHooks: function() {
                F(document, "keydown", this._onKeyDown, this)
            },
            _onKeyDown: function(t) {
                if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                    var e = t.keyCode,
                        i = this._map,
                        o;
                    if (e in this._panKeys) {
                        if (!i._panAnim || !i._panAnim._inProgress)
                            if (o = this._panKeys[e], t.shiftKey && (o = T(o).multiplyBy(3)), i.options.maxBounds && (o = i._limitOffset(T(o), i.options.maxBounds)), i.options.worldCopyJump) {
                                var s = i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(o)));
                                i.panTo(s)
                            } else i.panBy(o)
                    } else if (e in this._zoomKeys) i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
                    else if (e === 27 && i._popup && i._popup.options.closeOnEscapeKey) i.closePopup();
                    else return;
                    Zt(t)
                }
            }
        });
        B.addInitHook("addHandler", "keyboard", Un), B.mergeOptions({
            scrollWheelZoom: !0,
            wheelDebounceTime: 40,
            wheelPxPerZoomLevel: 60
        });
        var Gn = gt.extend({
            addHooks: function() {
                C(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0
            },
            removeHooks: function() {
                F(this._map._container, "wheel", this._onWheelScroll, this)
            },
            _onWheelScroll: function(t) {
                var e = dn(t),
                    i = this._map.options.wheelDebounceTime;
                this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
                var o = Math.max(i - (+new Date - this._startTime), 0);
                clearTimeout(this._timer), this._timer = setTimeout(h(this._performZoom, this), o), Zt(t)
            },
            _performZoom: function() {
                var t = this._map,
                    e = t.getZoom(),
                    i = this._map.options.zoomSnap || 0;
                t._stop();
                var o = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
                    s = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(o)))) / Math.LN2,
                    a = i ? Math.ceil(s / i) * i : s,
                    l = t._limitZoom(e + (this._delta > 0 ? a : -a)) - e;
                this._delta = 0, this._startTime = null, l && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + l) : t.setZoomAround(this._lastMousePos, e + l))
            }
        });
        B.addInitHook("addHandler", "scrollWheelZoom", Gn);
        var Ls = 600;
        B.mergeOptions({
            tapHold: P.touchNative && P.safari && P.mobile,
            tapTolerance: 15
        });
        var Fn = gt.extend({
            addHooks: function() {
                C(this._map._container, "touchstart", this._onDown, this)
            },
            removeHooks: function() {
                F(this._map._container, "touchstart", this._onDown, this)
            },
            _onDown: function(t) {
                if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
                    var e = t.touches[0];
                    this._startPos = this._newPos = new M(e.clientX, e.clientY), this._holdTimeout = setTimeout(h(function() {
                        this._cancel(), this._isTapValid() && (C(document, "touchend", nt), C(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e))
                    }, this), Ls), C(document, "touchend touchcancel contextmenu", this._cancel, this), C(document, "touchmove", this._onMove, this)
                }
            },
            _cancelClickPrevent: function t() {
                F(document, "touchend", nt), F(document, "touchend touchcancel", t)
            },
            _cancel: function() {
                clearTimeout(this._holdTimeout), F(document, "touchend touchcancel contextmenu", this._cancel, this), F(document, "touchmove", this._onMove, this)
            },
            _onMove: function(t) {
                var e = t.touches[0];
                this._newPos = new M(e.clientX, e.clientY)
            },
            _isTapValid: function() {
                return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
            },
            _simulateEvent: function(t, e) {
                var i = new MouseEvent(t, {
                    bubbles: !0,
                    cancelable: !0,
                    view: window,
                    screenX: e.screenX,
                    screenY: e.screenY,
                    clientX: e.clientX,
                    clientY: e.clientY
                });
                i._simulated = !0, e.target.dispatchEvent(i)
            }
        });
        B.addInitHook("addHandler", "tapHold", Fn), B.mergeOptions({
            touchZoom: P.touch,
            bounceAtZoomLimits: !0
        });
        var Wn = gt.extend({
            addHooks: function() {
                D(this._map._container, "leaflet-touch-zoom"), C(this._map._container, "touchstart", this._onTouchStart, this)
            },
            removeHooks: function() {
                q(this._map._container, "leaflet-touch-zoom"), F(this._map._container, "touchstart", this._onTouchStart, this)
            },
            _onTouchStart: function(t) {
                var e = this._map;
                if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
                    var i = e.mouseEventToContainerPoint(t.touches[0]),
                        o = e.mouseEventToContainerPoint(t.touches[1]);
                    this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(o)._divideBy(2))), this._startDist = i.distanceTo(o), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), C(document, "touchmove", this._onTouchMove, this), C(document, "touchend touchcancel", this._onTouchEnd, this), nt(t)
                }
            },
            _onTouchMove: function(t) {
                if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
                    var e = this._map,
                        i = e.mouseEventToContainerPoint(t.touches[0]),
                        o = e.mouseEventToContainerPoint(t.touches[1]),
                        s = i.distanceTo(o) / this._startDist;
                    if (this._zoom = e.getScaleZoom(s, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && s < 1 || this._zoom > e.getMaxZoom() && s > 1) && (this._zoom = e._limitZoom(this._zoom)), e.options.touchZoom === "center") {
                        if (this._center = this._startLatLng, s === 1) return
                    } else {
                        var a = i._add(o)._divideBy(2)._subtract(this._centerPoint);
                        if (s === 1 && a.x === 0 && a.y === 0) return;
                        this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(a), this._zoom)
                    }
                    this._moved || (e._moveStart(!0, !1), this._moved = !0), A(this._animRequest);
                    var l = h(e._move, e, this._center, this._zoom, {
                        pinch: !0,
                        round: !1
                    }, void 0);
                    this._animRequest = S(l, this, !0), nt(t)
                }
            },
            _onTouchEnd: function() {
                if (!this._moved || !this._zooming) {
                    this._zooming = !1;
                    return
                }
                this._zooming = !1, A(this._animRequest), F(document, "touchmove", this._onTouchMove, this), F(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))
            }
        });
        B.addInitHook("addHandler", "touchZoom", Wn), B.BoxZoom = Rn, B.DoubleClickZoom = Nn, B.Drag = Hn, B.Keyboard = Un, B.ScrollWheelZoom = Gn, B.TapHold = Fn, B.TouchZoom = Wn, d.Bounds = N, d.Browser = P, d.CRS = Lt, d.Canvas = zn, d.Circle = Pi, d.CircleMarker = Ee, d.Class = et, d.Control = dt, d.DivIcon = Dn, d.DivOverlay = vt, d.DomEvent = Ro, d.DomUtil = Zo, d.Draggable = St, d.Evented = ht, d.FeatureGroup = wt, d.GeoJSON = bt, d.GridLayer = ue, d.Handler = gt, d.Icon = Ft, d.ImageOverlay = Ie, d.LatLng = H, d.LatLngBounds = ot, d.Layer = _t, d.LayerGroup = Gt, d.LineUtil = Jo, d.Map = B, d.Marker = Me, d.Mixin = Vo, d.Path = Dt, d.Point = M, d.PolyUtil = jo, d.Polygon = Wt, d.Polyline = xt, d.Popup = ze, d.PosAnimation = _n, d.Projection = $o, d.Rectangle = Bn, d.Renderer = Pt, d.SVG = de, d.SVGOverlay = Sn, d.TileLayer = jt, d.Tooltip = Ae, d.Transformation = Xe, d.Util = j, d.VideoOverlay = Cn, d.bind = h, d.bounds = Y, d.canvas = An, d.circle = rs, d.circleMarker = ss, d.control = ae, d.divIcon = ps, d.extend = n, d.featureGroup = is, d.geoJSON = En, d.geoJson = ls, d.gridLayer = ms, d.icon = ns, d.imageOverlay = us, d.latLng = Z, d.latLngBounds = K, d.layerGroup = es, d.map = No, d.marker = os, d.point = T, d.polygon = hs, d.polyline = as, d.popup = _s, d.rectangle = ys, d.setOptions = G, d.stamp = p, d.svg = Zn, d.svgOverlay = ds, d.tileLayer = On, d.tooltip = fs, d.transformation = Qt, d.version = O, d.videoOverlay = cs;
        var ws = window.L;
        d.noConflict = function() {
            return window.L = ws, this
        }, window.L = d
    })
})(Ii, Ii.exports);
var Os = Ii.exports;
const $ = Ds(Os);
(function(m, f, d) {
    function O(n, r) {
        for (;
            (n = n.parentElement) && !n.classList.contains(r););
        return n
    }
    L.drawVersion = "1.0.4", L.Draw = {}, L.drawLocal = {
            draw: {
                toolbar: {
                    actions: {
                        title: "Cancel drawing",
                        text: "Cancel"
                    },
                    finish: {
                        title: "Finish drawing",
                        text: "Finish"
                    },
                    undo: {
                        title: "Delete last point drawn",
                        text: "Delete last point"
                    },
                    buttons: {
                        polyline: "Draw a polyline",
                        polygon: "Draw a polygon",
                        rectangle: "Draw a rectangle",
                        circle: "Draw a circle",
                        marker: "Draw a marker",
                        circlemarker: "Draw a circlemarker"
                    }
                },
                handlers: {
                    circle: {
                        tooltip: {
                            start: "Click and drag to draw circle."
                        },
                        radius: "Radius"
                    },
                    circlemarker: {
                        tooltip: {
                            start: "Click map to place circle marker."
                        }
                    },
                    marker: {
                        tooltip: {
                            start: "Click map to place marker."
                        }
                    },
                    polygon: {
                        tooltip: {
                            start: "Click to start drawing shape.",
                            cont: "Click to continue drawing shape.",
                            end: "Click first point to close this shape."
                        }
                    },
                    polyline: {
                        error: "<strong>Error:</strong> shape edges cannot cross!",
                        tooltip: {
                            start: "Click to start drawing line.",
                            cont: "Click to continue drawing line.",
                            end: "Click last point to finish line."
                        }
                    },
                    rectangle: {
                        tooltip: {
                            start: "Click and drag to draw rectangle."
                        }
                    },
                    simpleshape: {
                        tooltip: {
                            end: "Release mouse to finish drawing."
                        }
                    }
                }
            },
            edit: {
                toolbar: {
                    actions: {
                        save: {
                            title: "Save changes",
                            text: "Save"
                        },
                        cancel: {
                            title: "Cancel editing, discards all changes",
                            text: "Cancel"
                        },
                        clearAll: {
                            title: "Clear all layers",
                            text: "Clear All"
                        }
                    },
                    buttons: {
                        edit: "Edit layers",
                        editDisabled: "No layers to edit",
                        remove: "Delete layers",
                        removeDisabled: "No layers to delete"
                    }
                },
                handlers: {
                    edit: {
                        tooltip: {
                            text: "Drag handles or markers to edit features.",
                            subtext: "Click cancel to undo changes."
                        }
                    },
                    remove: {
                        tooltip: {
                            text: "Click on a feature to remove."
                        }
                    }
                }
            }
        }, L.Draw.Event = {}, L.Draw.Event.CREATED = "draw:created", L.Draw.Event.EDITED = "draw:edited", L.Draw.Event.DELETED = "draw:deleted", L.Draw.Event.DRAWSTART = "draw:drawstart", L.Draw.Event.DRAWSTOP = "draw:drawstop", L.Draw.Event.DRAWVERTEX = "draw:drawvertex", L.Draw.Event.EDITSTART = "draw:editstart", L.Draw.Event.EDITMOVE = "draw:editmove", L.Draw.Event.EDITRESIZE = "draw:editresize", L.Draw.Event.EDITVERTEX = "draw:editvertex", L.Draw.Event.EDITSTOP = "draw:editstop", L.Draw.Event.DELETESTART = "draw:deletestart", L.Draw.Event.DELETESTOP = "draw:deletestop", L.Draw.Event.TOOLBAROPENED = "draw:toolbaropened", L.Draw.Event.TOOLBARCLOSED = "draw:toolbarclosed", L.Draw.Event.MARKERCONTEXT = "draw:markercontext", L.Draw = L.Draw || {}, L.Draw.Feature = L.Handler.extend({
            initialize: function(n, r) {
                this._map = n, this._container = n._container, this._overlayPane = n._panes.overlayPane, this._popupPane = n._panes.popupPane, r && r.shapeOptions && (r.shapeOptions = L.Util.extend({}, this.options.shapeOptions, r.shapeOptions)), L.setOptions(this, r);
                var h = L.version.split(".");
                parseInt(h[0], 10) === 1 && parseInt(h[1], 10) >= 2 ? L.Draw.Feature.include(L.Evented.prototype) : L.Draw.Feature.include(L.Mixin.Events)
            },
            enable: function() {
                this._enabled || (L.Handler.prototype.enable.call(this), this.fire("enabled", {
                    handler: this.type
                }), this._map.fire(L.Draw.Event.DRAWSTART, {
                    layerType: this.type
                }))
            },
            disable: function() {
                this._enabled && (L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DRAWSTOP, {
                    layerType: this.type
                }), this.fire("disabled", {
                    handler: this.type
                }))
            },
            addHooks: function() {
                var n = this._map;
                n && (L.DomUtil.disableTextSelection(), n.getContainer().focus(), this._tooltip = new L.Draw.Tooltip(this._map), L.DomEvent.on(this._container, "keyup", this._cancelDrawing, this))
            },
            removeHooks: function() {
                this._map && (L.DomUtil.enableTextSelection(), this._tooltip.dispose(), this._tooltip = null, L.DomEvent.off(this._container, "keyup", this._cancelDrawing, this))
            },
            setOptions: function(n) {
                L.setOptions(this, n)
            },
            _fireCreatedEvent: function(n) {
                this._map.fire(L.Draw.Event.CREATED, {
                    layer: n,
                    layerType: this.type
                })
            },
            _cancelDrawing: function(n) {
                n.keyCode === 27 && (this._map.fire("draw:canceled", {
                    layerType: this.type
                }), this.disable())
            }
        }), L.Draw.Polyline = L.Draw.Feature.extend({
            statics: {
                TYPE: "polyline"
            },
            Poly: L.Polyline,
            options: {
                allowIntersection: !0,
                repeatMode: !1,
                drawError: {
                    color: "#b00b00",
                    timeout: 2500
                },
                icon: new L.DivIcon({
                    iconSize: new L.Point(8, 8),
                    className: "leaflet-div-icon leaflet-editing-icon"
                }),
                touchIcon: new L.DivIcon({
                    iconSize: new L.Point(20, 20),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
                }),
                guidelineDistance: 20,
                maxGuideLineLength: 4e3,
                shapeOptions: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 4,
                    opacity: .5,
                    fill: !1,
                    clickable: !0
                },
                metric: !0,
                feet: !0,
                nautic: !1,
                showLength: !0,
                zIndexOffset: 2e3,
                factor: 1,
                maxPoints: 0
            },
            initialize: function(n, r) {
                L.Browser.touch && (this.options.icon = this.options.touchIcon), this.options.drawError.message = L.drawLocal.draw.handlers.polyline.error, r && r.drawError && (r.drawError = L.Util.extend({}, this.options.drawError, r.drawError)), this.type = L.Draw.Polyline.TYPE, L.Draw.Feature.prototype.initialize.call(this, n, r)
            },
            addHooks: function() {
                L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._markers = [], this._markerGroup = new L.LayerGroup, this._map.addLayer(this._markerGroup), this._poly = new L.Polyline([], this.options.shapeOptions), this._tooltip.updateContent(this._getTooltipText()), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
                    icon: L.divIcon({
                        className: "leaflet-mouse-marker",
                        iconAnchor: [20, 20],
                        iconSize: [40, 40]
                    }),
                    opacity: 0,
                    zIndexOffset: this.options.zIndexOffset
                })), this._mouseMarker.on("mouseout", this._onMouseOut, this).on("mousemove", this._onMouseMove, this).on("mousedown", this._onMouseDown, this).on("mouseup", this._onMouseUp, this).addTo(this._map), this._map.on("mouseup", this._onMouseUp, this).on("mousemove", this._onMouseMove, this).on("zoomlevelschange", this._onZoomEnd, this).on("touchstart", this._onTouch, this).on("zoomend", this._onZoomEnd, this))
            },
            removeHooks: function() {
                L.Draw.Feature.prototype.removeHooks.call(this), this._clearHideErrorTimeout(), this._cleanUpShape(), this._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers, this._map.removeLayer(this._poly), delete this._poly, this._mouseMarker.off("mousedown", this._onMouseDown, this).off("mouseout", this._onMouseOut, this).off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._clearGuides(), this._map.off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this).off("zoomlevelschange", this._onZoomEnd, this).off("zoomend", this._onZoomEnd, this).off("touchstart", this._onTouch, this).off("click", this._onTouch, this)
            },
            deleteLastVertex: function() {
                if (!(this._markers.length <= 1)) {
                    var n = this._markers.pop(),
                        r = this._poly,
                        h = r.getLatLngs(),
                        u = h.splice(-1, 1)[0];
                    this._poly.setLatLngs(h), this._markerGroup.removeLayer(n), r.getLatLngs().length < 2 && this._map.removeLayer(r), this._vertexChanged(u, !1)
                }
            },
            addVertex: function(n) {
                if (this._markers.length >= 2 && !this.options.allowIntersection && this._poly.newLatLngIntersects(n)) return void this._showErrorTooltip();
                this._errorShown && this._hideErrorTooltip(), this._markers.push(this._createMarker(n)), this._poly.addLatLng(n), this._poly.getLatLngs().length === 2 && this._map.addLayer(this._poly), this._vertexChanged(n, !0)
            },
            completeShape: function() {
                this._markers.length <= 1 || !this._shapeIsValid() || (this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable())
            },
            _finishShape: function() {
                var n = this._poly._defaultShape ? this._poly._defaultShape() : this._poly.getLatLngs(),
                    r = this._poly.newLatLngIntersects(n[n.length - 1]);
                if (!this.options.allowIntersection && r || !this._shapeIsValid()) return void this._showErrorTooltip();
                this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable()
            },
            _shapeIsValid: function() {
                return !0
            },
            _onZoomEnd: function() {
                this._markers !== null && this._updateGuide()
            },
            _onMouseMove: function(n) {
                var r = this._map.mouseEventToLayerPoint(n.originalEvent),
                    h = this._map.layerPointToLatLng(r);
                this._currentLatLng = h, this._updateTooltip(h), this._updateGuide(r), this._mouseMarker.setLatLng(h), L.DomEvent.preventDefault(n.originalEvent)
            },
            _vertexChanged: function(n, r) {
                this._map.fire(L.Draw.Event.DRAWVERTEX, {
                    layers: this._markerGroup
                }), this._updateFinishHandler(), this._updateRunningMeasure(n, r), this._clearGuides(), this._updateTooltip()
            },
            _onMouseDown: function(n) {
                if (!this._clickHandled && !this._touchHandled && !this._disableMarkers) {
                    this._onMouseMove(n), this._clickHandled = !0, this._disableNewMarkers();
                    var r = n.originalEvent,
                        h = r.clientX,
                        u = r.clientY;
                    this._startPoint.call(this, h, u)
                }
            },
            _startPoint: function(n, r) {
                this._mouseDownOrigin = L.point(n, r)
            },
            _onMouseUp: function(n) {
                var r = n.originalEvent,
                    h = r.clientX,
                    u = r.clientY;
                this._endPoint.call(this, h, u, n), this._clickHandled = null
            },
            _endPoint: function(n, r, h) {
                if (this._mouseDownOrigin) {
                    var u = L.point(n, r).distanceTo(this._mouseDownOrigin),
                        p = this._calculateFinishDistance(h.latlng);
                    this.options.maxPoints > 1 && this.options.maxPoints == this._markers.length + 1 ? (this.addVertex(h.latlng), this._finishShape()) : p < 10 && L.Browser.touch ? this._finishShape() : Math.abs(u) < 9 * (m.devicePixelRatio || 1) && this.addVertex(h.latlng), this._enableNewMarkers()
                }
                this._mouseDownOrigin = null
            },
            _onTouch: function(n) {
                var r, h, u = n.originalEvent;
                !u.touches || !u.touches[0] || this._clickHandled || this._touchHandled || this._disableMarkers || (r = u.touches[0].clientX, h = u.touches[0].clientY, this._disableNewMarkers(), this._touchHandled = !0, this._startPoint.call(this, r, h), this._endPoint.call(this, r, h, n), this._touchHandled = null), this._clickHandled = null
            },
            _onMouseOut: function() {
                this._tooltip && this._tooltip._onMouseOut.call(this._tooltip)
            },
            _calculateFinishDistance: function(n) {
                var r;
                if (this._markers.length > 0) {
                    var h;
                    if (this.type === L.Draw.Polyline.TYPE) h = this._markers[this._markers.length - 1];
                    else {
                        if (this.type !== L.Draw.Polygon.TYPE) return 1 / 0;
                        h = this._markers[0]
                    }
                    var u = this._map.latLngToContainerPoint(h.getLatLng()),
                        p = new L.Marker(n, {
                            icon: this.options.icon,
                            zIndexOffset: 2 * this.options.zIndexOffset
                        }),
                        v = this._map.latLngToContainerPoint(p.getLatLng());
                    r = u.distanceTo(v)
                } else r = 1 / 0;
                return r
            },
            _updateFinishHandler: function() {
                var n = this._markers.length;
                n > 1 && this._markers[n - 1].on("click", this._finishShape, this), n > 2 && this._markers[n - 2].off("click", this._finishShape, this)
            },
            _createMarker: function(n) {
                var r = new L.Marker(n, {
                    icon: this.options.icon,
                    zIndexOffset: 2 * this.options.zIndexOffset
                });
                return this._markerGroup.addLayer(r), r
            },
            _updateGuide: function(n) {
                var r = this._markers ? this._markers.length : 0;
                r > 0 && (n = n || this._map.latLngToLayerPoint(this._currentLatLng), this._clearGuides(), this._drawGuide(this._map.latLngToLayerPoint(this._markers[r - 1].getLatLng()), n))
            },
            _updateTooltip: function(n) {
                var r = this._getTooltipText();
                n && this._tooltip.updatePosition(n), this._errorShown || this._tooltip.updateContent(r)
            },
            _drawGuide: function(n, r) {
                var h, u, p, v = Math.floor(Math.sqrt(Math.pow(r.x - n.x, 2) + Math.pow(r.y - n.y, 2))),
                    y = this.options.guidelineDistance,
                    x = this.options.maxGuideLineLength,
                    z = v > x ? v - x : y;
                for (this._guidesContainer || (this._guidesContainer = L.DomUtil.create("div", "leaflet-draw-guides", this._overlayPane)); z < v; z += this.options.guidelineDistance) h = z / v, u = {
                    x: Math.floor(n.x * (1 - h) + h * r.x),
                    y: Math.floor(n.y * (1 - h) + h * r.y)
                }, p = L.DomUtil.create("div", "leaflet-draw-guide-dash", this._guidesContainer), p.style.backgroundColor = this._errorShown ? this.options.drawError.color : this.options.shapeOptions.color, L.DomUtil.setPosition(p, u)
            },
            _updateGuideColor: function(n) {
                if (this._guidesContainer)
                    for (var r = 0, h = this._guidesContainer.childNodes.length; r < h; r++) this._guidesContainer.childNodes[r].style.backgroundColor = n
            },
            _clearGuides: function() {
                if (this._guidesContainer)
                    for (; this._guidesContainer.firstChild;) this._guidesContainer.removeChild(this._guidesContainer.firstChild)
            },
            _getTooltipText: function() {
                var n, r, h = this.options.showLength;
                return this._markers.length === 0 ? n = {
                    text: L.drawLocal.draw.handlers.polyline.tooltip.start
                } : (r = h ? this._getMeasurementString() : "", n = this._markers.length === 1 ? {
                    text: L.drawLocal.draw.handlers.polyline.tooltip.cont,
                    subtext: r
                } : {
                    text: L.drawLocal.draw.handlers.polyline.tooltip.end,
                    subtext: r
                }), n
            },
            _updateRunningMeasure: function(n, r) {
                var h, u, p = this._markers.length;
                this._markers.length === 1 ? this._measurementRunningTotal = 0 : (h = p - (r ? 2 : 1), u = L.GeometryUtil.isVersion07x() ? n.distanceTo(this._markers[h].getLatLng()) * (this.options.factor || 1) : this._map.distance(n, this._markers[h].getLatLng()) * (this.options.factor || 1), this._measurementRunningTotal += u * (r ? 1 : -1))
            },
            _getMeasurementString: function() {
                var n, r = this._currentLatLng,
                    h = this._markers[this._markers.length - 1].getLatLng();
                return n = L.GeometryUtil.isVersion07x() ? h && r && r.distanceTo ? this._measurementRunningTotal + r.distanceTo(h) * (this.options.factor || 1) : this._measurementRunningTotal || 0 : h && r ? this._measurementRunningTotal + this._map.distance(r, h) * (this.options.factor || 1) : this._measurementRunningTotal || 0, L.GeometryUtil.readableDistance(n, this.options.metric, this.options.feet, this.options.nautic, this.options.precision)
            },
            _showErrorTooltip: function() {
                this._errorShown = !0, this._tooltip.showAsError().updateContent({
                    text: this.options.drawError.message
                }), this._updateGuideColor(this.options.drawError.color), this._poly.setStyle({
                    color: this.options.drawError.color
                }), this._clearHideErrorTimeout(), this._hideErrorTimeout = setTimeout(L.Util.bind(this._hideErrorTooltip, this), this.options.drawError.timeout)
            },
            _hideErrorTooltip: function() {
                this._errorShown = !1, this._clearHideErrorTimeout(), this._tooltip.removeError().updateContent(this._getTooltipText()), this._updateGuideColor(this.options.shapeOptions.color), this._poly.setStyle({
                    color: this.options.shapeOptions.color
                })
            },
            _clearHideErrorTimeout: function() {
                this._hideErrorTimeout && (clearTimeout(this._hideErrorTimeout), this._hideErrorTimeout = null)
            },
            _disableNewMarkers: function() {
                this._disableMarkers = !0
            },
            _enableNewMarkers: function() {
                setTimeout((function() {
                    this._disableMarkers = !1
                }).bind(this), 50)
            },
            _cleanUpShape: function() {
                this._markers.length > 1 && this._markers[this._markers.length - 1].off("click", this._finishShape, this)
            },
            _fireCreatedEvent: function() {
                var n = new this.Poly(this._poly.getLatLngs(), this.options.shapeOptions);
                L.Draw.Feature.prototype._fireCreatedEvent.call(this, n)
            }
        }), L.Draw.Polygon = L.Draw.Polyline.extend({
            statics: {
                TYPE: "polygon"
            },
            Poly: L.Polygon,
            options: {
                showArea: !1,
                showLength: !1,
                shapeOptions: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 4,
                    opacity: .5,
                    fill: !0,
                    fillColor: null,
                    fillOpacity: .2,
                    clickable: !0
                },
                metric: !0,
                feet: !0,
                nautic: !1,
                precision: {}
            },
            initialize: function(n, r) {
                L.Draw.Polyline.prototype.initialize.call(this, n, r), this.type = L.Draw.Polygon.TYPE
            },
            _updateFinishHandler: function() {
                var n = this._markers.length;
                n === 1 && this._markers[0].on("click", this._finishShape, this), n > 2 && (this._markers[n - 1].on("dblclick", this._finishShape, this), n > 3 && this._markers[n - 2].off("dblclick", this._finishShape, this))
            },
            _getTooltipText: function() {
                var n, r;
                return this._markers.length === 0 ? n = L.drawLocal.draw.handlers.polygon.tooltip.start : this._markers.length < 3 ? (n = L.drawLocal.draw.handlers.polygon.tooltip.cont, r = this._getMeasurementString()) : (n = L.drawLocal.draw.handlers.polygon.tooltip.end, r = this._getMeasurementString()), {
                    text: n,
                    subtext: r
                }
            },
            _getMeasurementString: function() {
                var n = this._area,
                    r = "";
                return n || this.options.showLength ? (this.options.showLength && (r = L.Draw.Polyline.prototype._getMeasurementString.call(this)), n && (r += "<br>" + L.GeometryUtil.readableArea(n, this.options.metric, this.options.precision)), r) : null
            },
            _shapeIsValid: function() {
                return this._markers.length >= 3
            },
            _vertexChanged: function(n, r) {
                var h;
                !this.options.allowIntersection && this.options.showArea && (h = this._poly.getLatLngs(), this._area = L.GeometryUtil.geodesicArea(h)), L.Draw.Polyline.prototype._vertexChanged.call(this, n, r)
            },
            _cleanUpShape: function() {
                var n = this._markers.length;
                n > 0 && (this._markers[0].off("click", this._finishShape, this), n > 2 && this._markers[n - 1].off("dblclick", this._finishShape, this))
            }
        }), L.SimpleShape = {}, L.Draw.SimpleShape = L.Draw.Feature.extend({
            options: {
                repeatMode: !1
            },
            initialize: function(n, r) {
                this._endLabelText = L.drawLocal.draw.handlers.simpleshape.tooltip.end, L.Draw.Feature.prototype.initialize.call(this, n, r)
            },
            addHooks: function() {
                L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._mapDraggable = this._map.dragging.enabled(), this._mapDraggable && this._map.dragging.disable(), this._container.style.cursor = "crosshair", this._tooltip.updateContent({
                    text: this._initialLabelText
                }), this._map.on("mousedown", this._onMouseDown, this).on("mousemove", this._onMouseMove, this).on("touchstart", this._onMouseDown, this).on("touchmove", this._onMouseMove, this), f.addEventListener("touchstart", L.DomEvent.preventDefault, {
                    passive: !1
                }))
            },
            removeHooks: function() {
                L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._mapDraggable && this._map.dragging.enable(), this._container.style.cursor = "", this._map.off("mousedown", this._onMouseDown, this).off("mousemove", this._onMouseMove, this).off("touchstart", this._onMouseDown, this).off("touchmove", this._onMouseMove, this), L.DomEvent.off(f, "mouseup", this._onMouseUp, this), L.DomEvent.off(f, "touchend", this._onMouseUp, this), f.removeEventListener("touchstart", L.DomEvent.preventDefault), this._shape && (this._map.removeLayer(this._shape), delete this._shape)), this._isDrawing = !1
            },
            _getTooltipText: function() {
                return {
                    text: this._endLabelText
                }
            },
            _onMouseDown: function(n) {
                this._isDrawing = !0, this._startLatLng = n.latlng, L.DomEvent.on(f, "mouseup", this._onMouseUp, this).on(f, "touchend", this._onMouseUp, this).preventDefault(n.originalEvent)
            },
            _onMouseMove: function(n) {
                var r = n.latlng;
                this._tooltip.updatePosition(r), this._isDrawing && (this._tooltip.updateContent(this._getTooltipText()), this._drawShape(r))
            },
            _onMouseUp: function() {
                this._shape && this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable()
            }
        }), L.Draw.Rectangle = L.Draw.SimpleShape.extend({
            statics: {
                TYPE: "rectangle"
            },
            options: {
                shapeOptions: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 4,
                    opacity: .5,
                    fill: !0,
                    fillColor: null,
                    fillOpacity: .2,
                    clickable: !0
                },
                showArea: !0,
                metric: !0
            },
            initialize: function(n, r) {
                this.type = L.Draw.Rectangle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.rectangle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, n, r)
            },
            disable: function() {
                this._enabled && (this._isCurrentlyTwoClickDrawing = !1, L.Draw.SimpleShape.prototype.disable.call(this))
            },
            _onMouseUp: function(n) {
                if (!this._shape && !this._isCurrentlyTwoClickDrawing) return void(this._isCurrentlyTwoClickDrawing = !0);
                this._isCurrentlyTwoClickDrawing && !O(n.target, "leaflet-pane") || L.Draw.SimpleShape.prototype._onMouseUp.call(this)
            },
            _drawShape: function(n) {
                this._shape ? this._shape.setBounds(new L.LatLngBounds(this._startLatLng, n)) : (this._shape = new L.Rectangle(new L.LatLngBounds(this._startLatLng, n), this.options.shapeOptions), this._map.addLayer(this._shape))
            },
            _fireCreatedEvent: function() {
                var n = new L.Rectangle(this._shape.getBounds(), this.options.shapeOptions);
                L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, n)
            },
            _getTooltipText: function() {
                var n, r, h, u = L.Draw.SimpleShape.prototype._getTooltipText.call(this),
                    p = this._shape,
                    v = this.options.showArea;
                return p && (n = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), r = L.GeometryUtil.geodesicArea(n), h = v ? L.GeometryUtil.readableArea(r, this.options.metric) : ""), {
                    text: u.text,
                    subtext: h
                }
            }
        }), L.Draw.Marker = L.Draw.Feature.extend({
            statics: {
                TYPE: "marker"
            },
            options: {
                icon: new L.Icon.Default,
                repeatMode: !1,
                zIndexOffset: 2e3
            },
            initialize: function(n, r) {
                this.type = L.Draw.Marker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.marker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, n, r)
            },
            addHooks: function() {
                L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._tooltip.updateContent({
                    text: this._initialLabelText
                }), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
                    icon: L.divIcon({
                        className: "leaflet-mouse-marker",
                        iconAnchor: [20, 20],
                        iconSize: [40, 40]
                    }),
                    opacity: 0,
                    zIndexOffset: this.options.zIndexOffset
                })), this._mouseMarker.on("click", this._onClick, this).addTo(this._map), this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onTouch, this))
            },
            removeHooks: function() {
                L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._map.off("click", this._onClick, this).off("click", this._onTouch, this), this._marker && (this._marker.off("click", this._onClick, this), this._map.removeLayer(this._marker), delete this._marker), this._mouseMarker.off("click", this._onClick, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._map.off("mousemove", this._onMouseMove, this))
            },
            _onMouseMove: function(n) {
                var r = n.latlng;
                this._tooltip.updatePosition(r), this._mouseMarker.setLatLng(r), this._marker ? (r = this._mouseMarker.getLatLng(), this._marker.setLatLng(r)) : (this._marker = this._createMarker(r), this._marker.on("click", this._onClick, this), this._map.on("click", this._onClick, this).addLayer(this._marker))
            },
            _createMarker: function(n) {
                return new L.Marker(n, {
                    icon: this.options.icon,
                    zIndexOffset: this.options.zIndexOffset
                })
            },
            _onClick: function() {
                this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable()
            },
            _onTouch: function(n) {
                this._onMouseMove(n), this._onClick()
            },
            _fireCreatedEvent: function() {
                var n = new L.Marker.Touch(this._marker.getLatLng(), {
                    icon: this.options.icon
                });
                L.Draw.Feature.prototype._fireCreatedEvent.call(this, n)
            }
        }), L.Draw.CircleMarker = L.Draw.Marker.extend({
            statics: {
                TYPE: "circlemarker"
            },
            options: {
                stroke: !0,
                color: "#3388ff",
                weight: 4,
                opacity: .5,
                fill: !0,
                fillColor: null,
                fillOpacity: .2,
                clickable: !0,
                zIndexOffset: 2e3
            },
            initialize: function(n, r) {
                this.type = L.Draw.CircleMarker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circlemarker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, n, r)
            },
            _fireCreatedEvent: function() {
                var n = new L.CircleMarker(this._marker.getLatLng(), this.options);
                L.Draw.Feature.prototype._fireCreatedEvent.call(this, n)
            },
            _createMarker: function(n) {
                return new L.CircleMarker(n, this.options)
            }
        }), L.Draw.Circle = L.Draw.SimpleShape.extend({
            statics: {
                TYPE: "circle"
            },
            options: {
                shapeOptions: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 4,
                    opacity: .5,
                    fill: !0,
                    fillColor: null,
                    fillOpacity: .2,
                    clickable: !0
                },
                showRadius: !0,
                metric: !0,
                feet: !0,
                nautic: !1
            },
            initialize: function(n, r) {
                this.type = L.Draw.Circle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, n, r)
            },
            _drawShape: function(n) {
                if (L.GeometryUtil.isVersion07x()) var r = this._startLatLng.distanceTo(n);
                else var r = this._map.distance(this._startLatLng, n);
                this._shape ? this._shape.setRadius(r) : (this._shape = new L.Circle(this._startLatLng, r, this.options.shapeOptions), this._map.addLayer(this._shape))
            },
            _fireCreatedEvent: function() {
                var n = new L.Circle(this._startLatLng, this._shape.getRadius(), this.options.shapeOptions);
                L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, n)
            },
            _onMouseMove: function(n) {
                var r, h = n.latlng,
                    u = this.options.showRadius,
                    p = this.options.metric;
                if (this._tooltip.updatePosition(h), this._isDrawing) {
                    this._drawShape(h), r = this._shape.getRadius().toFixed(1);
                    var v = "";
                    u && (v = L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(r, p, this.options.feet, this.options.nautic)), this._tooltip.updateContent({
                        text: this._endLabelText,
                        subtext: v
                    })
                }
            }
        }), L.Edit = L.Edit || {}, L.Edit.Marker = L.Handler.extend({
            initialize: function(n, r) {
                this._marker = n, L.setOptions(this, r)
            },
            addHooks: function() {
                var n = this._marker;
                n.dragging.enable(), n.on("dragend", this._onDragEnd, n), this._toggleMarkerHighlight()
            },
            removeHooks: function() {
                var n = this._marker;
                n.dragging.disable(), n.off("dragend", this._onDragEnd, n), this._toggleMarkerHighlight()
            },
            _onDragEnd: function(n) {
                var r = n.target;
                r.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, {
                    layer: r
                })
            },
            _toggleMarkerHighlight: function() {
                var n = this._marker._icon;
                n && (n.style.display = "none", L.DomUtil.hasClass(n, "leaflet-edit-marker-selected") ? (L.DomUtil.removeClass(n, "leaflet-edit-marker-selected"), this._offsetMarker(n, -4)) : (L.DomUtil.addClass(n, "leaflet-edit-marker-selected"), this._offsetMarker(n, 4)), n.style.display = "")
            },
            _offsetMarker: function(n, r) {
                var h = parseInt(n.style.marginTop, 10) - r,
                    u = parseInt(n.style.marginLeft, 10) - r;
                n.style.marginTop = h + "px", n.style.marginLeft = u + "px"
            }
        }), L.Marker.addInitHook(function() {
            L.Edit.Marker && (this.editing = new L.Edit.Marker(this), this.options.editable && this.editing.enable())
        }), L.Edit = L.Edit || {}, L.Edit.Poly = L.Handler.extend({
            initialize: function(n) {
                this.latlngs = [n._latlngs], n._holes && (this.latlngs = this.latlngs.concat(n._holes)), this._poly = n, this._poly.on("revert-edited", this._updateLatLngs, this)
            },
            _defaultShape: function() {
                return L.Polyline._flat ? L.Polyline._flat(this._poly._latlngs) ? this._poly._latlngs : this._poly._latlngs[0] : this._poly._latlngs
            },
            _eachVertexHandler: function(n) {
                for (var r = 0; r < this._verticesHandlers.length; r++) n(this._verticesHandlers[r])
            },
            addHooks: function() {
                this._initHandlers(), this._eachVertexHandler(function(n) {
                    n.addHooks()
                })
            },
            removeHooks: function() {
                this._eachVertexHandler(function(n) {
                    n.removeHooks()
                })
            },
            updateMarkers: function() {
                this._eachVertexHandler(function(n) {
                    n.updateMarkers()
                })
            },
            _initHandlers: function() {
                this._verticesHandlers = [];
                for (var n = 0; n < this.latlngs.length; n++) this._verticesHandlers.push(new L.Edit.PolyVerticesEdit(this._poly, this.latlngs[n], this._poly.options.poly))
            },
            _updateLatLngs: function(n) {
                this.latlngs = [n.layer._latlngs], n.layer._holes && (this.latlngs = this.latlngs.concat(n.layer._holes))
            }
        }), L.Edit.PolyVerticesEdit = L.Handler.extend({
            options: {
                icon: new L.DivIcon({
                    iconSize: new L.Point(8, 8),
                    className: "leaflet-div-icon leaflet-editing-icon"
                }),
                touchIcon: new L.DivIcon({
                    iconSize: new L.Point(20, 20),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
                }),
                drawError: {
                    color: "#b00b00",
                    timeout: 1e3
                }
            },
            initialize: function(n, r, h) {
                L.Browser.touch && (this.options.icon = this.options.touchIcon), this._poly = n, h && h.drawError && (h.drawError = L.Util.extend({}, this.options.drawError, h.drawError)), this._latlngs = r, L.setOptions(this, h)
            },
            _defaultShape: function() {
                return L.Polyline._flat ? L.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0] : this._latlngs
            },
            addHooks: function() {
                var n = this._poly,
                    r = n._path;
                n instanceof L.Polygon || (n.options.fill = !1, n.options.editing && (n.options.editing.fill = !1)), r && n.options.editing && n.options.editing.className && (n.options.original.className && n.options.original.className.split(" ").forEach(function(h) {
                    L.DomUtil.removeClass(r, h)
                }), n.options.editing.className.split(" ").forEach(function(h) {
                    L.DomUtil.addClass(r, h)
                })), n.setStyle(n.options.editing), this._poly._map && (this._map = this._poly._map, this._markerGroup || this._initMarkers(), this._poly._map.addLayer(this._markerGroup))
            },
            removeHooks: function() {
                var n = this._poly,
                    r = n._path;
                r && n.options.editing && n.options.editing.className && (n.options.editing.className.split(" ").forEach(function(h) {
                    L.DomUtil.removeClass(r, h)
                }), n.options.original.className && n.options.original.className.split(" ").forEach(function(h) {
                    L.DomUtil.addClass(r, h)
                })), n.setStyle(n.options.original), n._map && (n._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers)
            },
            updateMarkers: function() {
                this._markerGroup.clearLayers(), this._initMarkers()
            },
            _initMarkers: function() {
                this._markerGroup || (this._markerGroup = new L.LayerGroup), this._markers = [];
                var n, r, h, u, p = this._defaultShape();
                for (n = 0, h = p.length; n < h; n++) u = this._createMarker(p[n], n), u.on("click", this._onMarkerClick, this), u.on("contextmenu", this._onContextMenu, this), this._markers.push(u);
                var v, y;
                for (n = 0, r = h - 1; n < h; r = n++)(n !== 0 || L.Polygon && this._poly instanceof L.Polygon) && (v = this._markers[r], y = this._markers[n], this._createMiddleMarker(v, y), this._updatePrevNext(v, y))
            },
            _createMarker: function(n, r) {
                var h = new L.Marker.Touch(n, {
                    draggable: !0,
                    icon: this.options.icon
                });
                return h._origLatLng = n, h._index = r, h.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._fireEdit, this).on("touchmove", this._onTouchMove, this).on("touchend", this._fireEdit, this).on("MSPointerMove", this._onTouchMove, this).on("MSPointerUp", this._fireEdit, this), this._markerGroup.addLayer(h), h
            },
            _onMarkerDragStart: function() {
                this._poly.fire("editstart")
            },
            _spliceLatLngs: function() {
                var n = this._defaultShape(),
                    r = [].splice.apply(n, arguments);
                return this._poly._convertLatLngs(n, !0), this._poly.redraw(), r
            },
            _removeMarker: function(n) {
                var r = n._index;
                this._markerGroup.removeLayer(n), this._markers.splice(r, 1), this._spliceLatLngs(r, 1), this._updateIndexes(r, -1), n.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._fireEdit, this).off("touchmove", this._onMarkerDrag, this).off("touchend", this._fireEdit, this).off("click", this._onMarkerClick, this).off("MSPointerMove", this._onTouchMove, this).off("MSPointerUp", this._fireEdit, this)
            },
            _fireEdit: function() {
                this._poly.edited = !0, this._poly.fire("edit"), this._poly._map.fire(L.Draw.Event.EDITVERTEX, {
                    layers: this._markerGroup,
                    poly: this._poly
                })
            },
            _onMarkerDrag: function(n) {
                var r = n.target,
                    h = this._poly,
                    u = L.LatLngUtil.cloneLatLng(r._origLatLng);
                if (L.extend(r._origLatLng, r._latlng), h.options.poly) {
                    var p = h._map._editTooltip;
                    if (!h.options.poly.allowIntersection && h.intersects()) {
                        L.extend(r._origLatLng, u), r.setLatLng(u);
                        var v = h.options.color;
                        h.setStyle({
                            color: this.options.drawError.color
                        }), p && p.updateContent({
                            text: L.drawLocal.draw.handlers.polyline.error
                        }), setTimeout(function() {
                            h.setStyle({
                                color: v
                            }), p && p.updateContent({
                                text: L.drawLocal.edit.handlers.edit.tooltip.text,
                                subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
                            })
                        }, 1e3)
                    }
                }
                r._middleLeft && r._middleLeft.setLatLng(this._getMiddleLatLng(r._prev, r)), r._middleRight && r._middleRight.setLatLng(this._getMiddleLatLng(r, r._next)), this._poly._bounds._southWest = L.latLng(1 / 0, 1 / 0), this._poly._bounds._northEast = L.latLng(-1 / 0, -1 / 0);
                var y = this._poly.getLatLngs();
                this._poly._convertLatLngs(y, !0), this._poly.redraw(), this._poly.fire("editdrag")
            },
            _onMarkerClick: function(n) {
                var r = L.Polygon && this._poly instanceof L.Polygon ? 4 : 3,
                    h = n.target;
                this._defaultShape().length < r || (this._removeMarker(h), this._updatePrevNext(h._prev, h._next), h._middleLeft && this._markerGroup.removeLayer(h._middleLeft), h._middleRight && this._markerGroup.removeLayer(h._middleRight), h._prev && h._next ? this._createMiddleMarker(h._prev, h._next) : h._prev ? h._next || (h._prev._middleRight = null) : h._next._middleLeft = null, this._fireEdit())
            },
            _onContextMenu: function(n) {
                var r = n.target;
                this._poly, this._poly._map.fire(L.Draw.Event.MARKERCONTEXT, {
                    marker: r,
                    layers: this._markerGroup,
                    poly: this._poly
                }), L.DomEvent.stopPropagation
            },
            _onTouchMove: function(n) {
                var r = this._map.mouseEventToLayerPoint(n.originalEvent.touches[0]),
                    h = this._map.layerPointToLatLng(r),
                    u = n.target;
                L.extend(u._origLatLng, h), u._middleLeft && u._middleLeft.setLatLng(this._getMiddleLatLng(u._prev, u)), u._middleRight && u._middleRight.setLatLng(this._getMiddleLatLng(u, u._next)), this._poly.redraw(), this.updateMarkers()
            },
            _updateIndexes: function(n, r) {
                this._markerGroup.eachLayer(function(h) {
                    h._index > n && (h._index += r)
                })
            },
            _createMiddleMarker: function(n, r) {
                var h, u, p, v = this._getMiddleLatLng(n, r),
                    y = this._createMarker(v);
                y.setOpacity(.6), n._middleRight = r._middleLeft = y, u = function() {
                    y.off("touchmove", u, this);
                    var x = r._index;
                    y._index = x, y.off("click", h, this).on("click", this._onMarkerClick, this), v.lat = y.getLatLng().lat, v.lng = y.getLatLng().lng, this._spliceLatLngs(x, 0, v), this._markers.splice(x, 0, y), y.setOpacity(1), this._updateIndexes(x, 1), r._index++, this._updatePrevNext(n, y), this._updatePrevNext(y, r), this._poly.fire("editstart")
                }, p = function() {
                    y.off("dragstart", u, this), y.off("dragend", p, this), y.off("touchmove", u, this), this._createMiddleMarker(n, y), this._createMiddleMarker(y, r)
                }, h = function() {
                    u.call(this), p.call(this), this._fireEdit()
                }, y.on("click", h, this).on("dragstart", u, this).on("dragend", p, this).on("touchmove", u, this), this._markerGroup.addLayer(y)
            },
            _updatePrevNext: function(n, r) {
                n && (n._next = r), r && (r._prev = n)
            },
            _getMiddleLatLng: function(n, r) {
                var h = this._poly._map,
                    u = h.project(n.getLatLng()),
                    p = h.project(r.getLatLng());
                return h.unproject(u._add(p)._divideBy(2))
            }
        }), L.Polyline.addInitHook(function() {
            this.editing || (L.Edit.Poly && (this.editing = new L.Edit.Poly(this), this.options.editable && this.editing.enable()), this.on("add", function() {
                this.editing && this.editing.enabled() && this.editing.addHooks()
            }), this.on("remove", function() {
                this.editing && this.editing.enabled() && this.editing.removeHooks()
            }))
        }), L.Edit = L.Edit || {}, L.Edit.SimpleShape = L.Handler.extend({
            options: {
                moveIcon: new L.DivIcon({
                    iconSize: new L.Point(8, 8),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move"
                }),
                resizeIcon: new L.DivIcon({
                    iconSize: new L.Point(8, 8),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize"
                }),
                touchMoveIcon: new L.DivIcon({
                    iconSize: new L.Point(20, 20),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon"
                }),
                touchResizeIcon: new L.DivIcon({
                    iconSize: new L.Point(20, 20),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon"
                })
            },
            initialize: function(n, r) {
                L.Browser.touch && (this.options.moveIcon = this.options.touchMoveIcon, this.options.resizeIcon = this.options.touchResizeIcon), this._shape = n, L.Util.setOptions(this, r)
            },
            addHooks: function() {
                var n = this._shape;
                this._shape._map && (this._map = this._shape._map, n.setStyle(n.options.editing), n._map && (this._map = n._map, this._markerGroup || this._initMarkers(), this._map.addLayer(this._markerGroup)))
            },
            removeHooks: function() {
                var n = this._shape;
                if (n.setStyle(n.options.original), n._map) {
                    this._unbindMarker(this._moveMarker);
                    for (var r = 0, h = this._resizeMarkers.length; r < h; r++) this._unbindMarker(this._resizeMarkers[r]);
                    this._resizeMarkers = null, this._map.removeLayer(this._markerGroup), delete this._markerGroup
                }
                this._map = null
            },
            updateMarkers: function() {
                this._markerGroup.clearLayers(), this._initMarkers()
            },
            _initMarkers: function() {
                this._markerGroup || (this._markerGroup = new L.LayerGroup), this._createMoveMarker(), this._createResizeMarker()
            },
            _createMoveMarker: function() {},
            _createResizeMarker: function() {},
            _createMarker: function(n, r) {
                var h = new L.Marker.Touch(n, {
                    draggable: !0,
                    icon: r,
                    zIndexOffset: 10
                });
                return this._bindMarker(h), this._markerGroup.addLayer(h), h
            },
            _bindMarker: function(n) {
                n.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._onMarkerDragEnd, this).on("touchstart", this._onTouchStart, this).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onTouchEnd, this).on("MSPointerUp", this._onTouchEnd, this)
            },
            _unbindMarker: function(n) {
                n.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._onMarkerDragEnd, this).off("touchstart", this._onTouchStart, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onTouchEnd, this).off("MSPointerUp", this._onTouchEnd, this)
            },
            _onMarkerDragStart: function(n) {
                n.target.setOpacity(0), this._shape.fire("editstart")
            },
            _fireEdit: function() {
                this._shape.edited = !0, this._shape.fire("edit")
            },
            _onMarkerDrag: function(n) {
                var r = n.target,
                    h = r.getLatLng();
                r === this._moveMarker ? this._move(h) : this._resize(h), this._shape.redraw(), this._shape.fire("editdrag")
            },
            _onMarkerDragEnd: function(n) {
                n.target.setOpacity(1), this._fireEdit()
            },
            _onTouchStart: function(n) {
                if (L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, n), typeof this._getCorners == "function") {
                    var r = this._getCorners(),
                        h = n.target,
                        u = h._cornerIndex;
                    h.setOpacity(0), this._oppositeCorner = r[(u + 2) % 4], this._toggleCornerMarkers(0, u)
                }
                this._shape.fire("editstart")
            },
            _onTouchMove: function(n) {
                var r = this._map.mouseEventToLayerPoint(n.originalEvent.touches[0]),
                    h = this._map.layerPointToLatLng(r);
                return n.target === this._moveMarker ? this._move(h) : this._resize(h), this._shape.redraw(), !1
            },
            _onTouchEnd: function(n) {
                n.target.setOpacity(1), this.updateMarkers(), this._fireEdit()
            },
            _move: function() {},
            _resize: function() {}
        }), L.Edit = L.Edit || {}, L.Edit.Rectangle = L.Edit.SimpleShape.extend({
            _createMoveMarker: function() {
                var n = this._shape.getBounds(),
                    r = n.getCenter();
                this._moveMarker = this._createMarker(r, this.options.moveIcon)
            },
            _createResizeMarker: function() {
                var n = this._getCorners();
                this._resizeMarkers = [];
                for (var r = 0, h = n.length; r < h; r++) this._resizeMarkers.push(this._createMarker(n[r], this.options.resizeIcon)), this._resizeMarkers[r]._cornerIndex = r
            },
            _onMarkerDragStart: function(n) {
                L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, n);
                var r = this._getCorners(),
                    h = n.target,
                    u = h._cornerIndex;
                this._oppositeCorner = r[(u + 2) % 4], this._toggleCornerMarkers(0, u)
            },
            _onMarkerDragEnd: function(n) {
                var r, h, u = n.target;
                u === this._moveMarker && (r = this._shape.getBounds(), h = r.getCenter(), u.setLatLng(h)), this._toggleCornerMarkers(1), this._repositionCornerMarkers(), L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, n)
            },
            _move: function(n) {
                for (var r, h = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), u = this._shape.getBounds(), p = u.getCenter(), v = [], y = 0, x = h.length; y < x; y++) r = [h[y].lat - p.lat, h[y].lng - p.lng], v.push([n.lat + r[0], n.lng + r[1]]);
                this._shape.setLatLngs(v), this._repositionCornerMarkers(), this._map.fire(L.Draw.Event.EDITMOVE, {
                    layer: this._shape
                })
            },
            _resize: function(n) {
                var r;
                this._shape.setBounds(L.latLngBounds(n, this._oppositeCorner)), r = this._shape.getBounds(), this._moveMarker.setLatLng(r.getCenter()), this._map.fire(L.Draw.Event.EDITRESIZE, {
                    layer: this._shape
                })
            },
            _getCorners: function() {
                var n = this._shape.getBounds();
                return [n.getNorthWest(), n.getNorthEast(), n.getSouthEast(), n.getSouthWest()]
            },
            _toggleCornerMarkers: function(n) {
                for (var r = 0, h = this._resizeMarkers.length; r < h; r++) this._resizeMarkers[r].setOpacity(n)
            },
            _repositionCornerMarkers: function() {
                for (var n = this._getCorners(), r = 0, h = this._resizeMarkers.length; r < h; r++) this._resizeMarkers[r].setLatLng(n[r])
            }
        }), L.Rectangle.addInitHook(function() {
            L.Edit.Rectangle && (this.editing = new L.Edit.Rectangle(this), this.options.editable && this.editing.enable())
        }), L.Edit = L.Edit || {}, L.Edit.CircleMarker = L.Edit.SimpleShape.extend({
            _createMoveMarker: function() {
                var n = this._shape.getLatLng();
                this._moveMarker = this._createMarker(n, this.options.moveIcon)
            },
            _createResizeMarker: function() {
                this._resizeMarkers = []
            },
            _move: function(n) {
                if (this._resizeMarkers.length) {
                    var r = this._getResizeMarkerPoint(n);
                    this._resizeMarkers[0].setLatLng(r)
                }
                this._shape.setLatLng(n), this._map.fire(L.Draw.Event.EDITMOVE, {
                    layer: this._shape
                })
            }
        }), L.CircleMarker.addInitHook(function() {
            L.Edit.CircleMarker && (this.editing = new L.Edit.CircleMarker(this), this.options.editable && this.editing.enable()), this.on("add", function() {
                this.editing && this.editing.enabled() && this.editing.addHooks()
            }), this.on("remove", function() {
                this.editing && this.editing.enabled() && this.editing.removeHooks()
            })
        }), L.Edit = L.Edit || {}, L.Edit.Circle = L.Edit.CircleMarker.extend({
            _createResizeMarker: function() {
                var n = this._shape.getLatLng(),
                    r = this._getResizeMarkerPoint(n);
                this._resizeMarkers = [], this._resizeMarkers.push(this._createMarker(r, this.options.resizeIcon))
            },
            _getResizeMarkerPoint: function(n) {
                var r = this._shape._radius * Math.cos(Math.PI / 4),
                    h = this._map.project(n);
                return this._map.unproject([h.x + r, h.y - r])
            },
            _resize: function(n) {
                var r = this._moveMarker.getLatLng();
                L.GeometryUtil.isVersion07x() ? radius = r.distanceTo(n) : radius = this._map.distance(r, n), this._shape.setRadius(radius), this._map.editTooltip && this._map._editTooltip.updateContent({
                    text: L.drawLocal.edit.handlers.edit.tooltip.subtext + "<br />" + L.drawLocal.edit.handlers.edit.tooltip.text,
                    subtext: L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(radius, !0, this.options.feet, this.options.nautic)
                }), this._shape.setRadius(radius), this._map.fire(L.Draw.Event.EDITRESIZE, {
                    layer: this._shape
                })
            }
        }), L.Circle.addInitHook(function() {
            L.Edit.Circle && (this.editing = new L.Edit.Circle(this), this.options.editable && this.editing.enable())
        }), L.Map.mergeOptions({
            touchExtend: !0
        }), L.Map.TouchExtend = L.Handler.extend({
            initialize: function(n) {
                this._map = n, this._container = n._container, this._pane = n._panes.overlayPane
            },
            addHooks: function() {
                L.DomEvent.on(this._container, "touchstart", this._onTouchStart, this), L.DomEvent.on(this._container, "touchend", this._onTouchEnd, this), L.DomEvent.on(this._container, "touchmove", this._onTouchMove, this), this._detectIE() ? (L.DomEvent.on(this._container, "MSPointerDown", this._onTouchStart, this), L.DomEvent.on(this._container, "MSPointerUp", this._onTouchEnd, this), L.DomEvent.on(this._container, "MSPointerMove", this._onTouchMove, this), L.DomEvent.on(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.on(this._container, "touchcancel", this._onTouchCancel, this), L.DomEvent.on(this._container, "touchleave", this._onTouchLeave, this))
            },
            removeHooks: function() {
                L.DomEvent.off(this._container, "touchstart", this._onTouchStart, this), L.DomEvent.off(this._container, "touchend", this._onTouchEnd, this), L.DomEvent.off(this._container, "touchmove", this._onTouchMove, this), this._detectIE() ? (L.DomEvent.off(this._container, "MSPointerDown", this._onTouchStart, this), L.DomEvent.off(this._container, "MSPointerUp", this._onTouchEnd, this), L.DomEvent.off(this._container, "MSPointerMove", this._onTouchMove, this), L.DomEvent.off(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.off(this._container, "touchcancel", this._onTouchCancel, this), L.DomEvent.off(this._container, "touchleave", this._onTouchLeave, this))
            },
            _touchEvent: function(n, r) {
                var h = {};
                if (n.touches !== void 0) {
                    if (!n.touches.length) return;
                    h = n.touches[0]
                } else if (n.pointerType !== "touch" || (h = n, !this._filterClick(n))) return;
                var u = this._map.mouseEventToContainerPoint(h),
                    p = this._map.mouseEventToLayerPoint(h),
                    v = this._map.layerPointToLatLng(p);
                this._map.fire(r, {
                    latlng: v,
                    layerPoint: p,
                    containerPoint: u,
                    pageX: h.pageX,
                    pageY: h.pageY,
                    originalEvent: n
                })
            },
            _filterClick: function(n) {
                var r = n.timeStamp || n.originalEvent.timeStamp,
                    h = L.DomEvent._lastClick && r - L.DomEvent._lastClick;
                return h && h > 100 && h < 500 || n.target._simulatedClick && !n._simulated ? (L.DomEvent.stop(n), !1) : (L.DomEvent._lastClick = r, !0)
            },
            _onTouchStart: function(n) {
                this._map._loaded && this._touchEvent(n, "touchstart")
            },
            _onTouchEnd: function(n) {
                this._map._loaded && this._touchEvent(n, "touchend")
            },
            _onTouchCancel: function(n) {
                if (this._map._loaded) {
                    var r = "touchcancel";
                    this._detectIE() && (r = "pointercancel"), this._touchEvent(n, r)
                }
            },
            _onTouchLeave: function(n) {
                this._map._loaded && this._touchEvent(n, "touchleave")
            },
            _onTouchMove: function(n) {
                this._map._loaded && this._touchEvent(n, "touchmove")
            },
            _detectIE: function() {
                var n = m.navigator.userAgent,
                    r = n.indexOf("MSIE ");
                if (r > 0) return parseInt(n.substring(r + 5, n.indexOf(".", r)), 10);
                if (n.indexOf("Trident/") > 0) {
                    var h = n.indexOf("rv:");
                    return parseInt(n.substring(h + 3, n.indexOf(".", h)), 10)
                }
                var u = n.indexOf("Edge/");
                return u > 0 && parseInt(n.substring(u + 5, n.indexOf(".", u)), 10)
            }
        }), L.Map.addInitHook("addHandler", "touchExtend", L.Map.TouchExtend), L.Marker.Touch = L.Marker.extend({
            _initInteraction: function() {
                return this.addInteractiveTarget ? L.Marker.prototype._initInteraction.apply(this) : this._initInteractionLegacy()
            },
            _initInteractionLegacy: function() {
                if (this.options.clickable) {
                    var n = this._icon,
                        r = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu", "touchstart", "touchend", "touchmove"];
                    this._detectIE ? r.concat(["MSPointerDown", "MSPointerUp", "MSPointerMove", "MSPointerCancel"]) : r.concat(["touchcancel"]), L.DomUtil.addClass(n, "leaflet-clickable"), L.DomEvent.on(n, "click", this._onMouseClick, this), L.DomEvent.on(n, "keypress", this._onKeyPress, this);
                    for (var h = 0; h < r.length; h++) L.DomEvent.on(n, r[h], this._fireMouseEvent, this);
                    L.Handler.MarkerDrag && (this.dragging = new L.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
                }
            },
            _detectIE: function() {
                var n = m.navigator.userAgent,
                    r = n.indexOf("MSIE ");
                if (r > 0) return parseInt(n.substring(r + 5, n.indexOf(".", r)), 10);
                if (n.indexOf("Trident/") > 0) {
                    var h = n.indexOf("rv:");
                    return parseInt(n.substring(h + 3, n.indexOf(".", h)), 10)
                }
                var u = n.indexOf("Edge/");
                return u > 0 && parseInt(n.substring(u + 5, n.indexOf(".", u)), 10)
            }
        }), L.LatLngUtil = {
            cloneLatLngs: function(n) {
                for (var r = [], h = 0, u = n.length; h < u; h++) Array.isArray(n[h]) ? r.push(L.LatLngUtil.cloneLatLngs(n[h])) : r.push(this.cloneLatLng(n[h]));
                return r
            },
            cloneLatLng: function(n) {
                return L.latLng(n.lat, n.lng)
            }
        },
        function() {
            var n = {
                km: 2,
                ha: 2,
                m: 0,
                mi: 2,
                ac: 2,
                yd: 0,
                ft: 0,
                nm: 2
            };
            L.GeometryUtil = L.extend(L.GeometryUtil || {}, {
                geodesicArea: function(r) {
                    var h, u, p = r.length,
                        v = 0,
                        y = Math.PI / 180;
                    if (p > 2) {
                        for (var x = 0; x < p; x++) h = r[x], u = r[(x + 1) % p], v += (u.lng - h.lng) * y * (2 + Math.sin(h.lat * y) + Math.sin(u.lat * y));
                        v = 6378137 * v * 6378137 / 2
                    }
                    return Math.abs(v)
                },
                formattedNumber: function(r, h) {
                    var u = parseFloat(r).toFixed(h),
                        p = L.drawLocal.format && L.drawLocal.format.numeric,
                        v = p && p.delimiters,
                        y = v && v.thousands,
                        x = v && v.decimal;
                    if (y || x) {
                        var z = u.split(".");
                        u = y ? z[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + y) : z[0], x = x || ".", z.length > 1 && (u = u + x + z[1])
                    }
                    return u
                },
                readableArea: function(r, h, y) {
                    var p, v, y = L.Util.extend({}, n, y);
                    return h ? (v = ["ha", "m"], type = typeof h, type === "string" ? v = [h] : type !== "boolean" && (v = h), p = r >= 1e6 && v.indexOf("km") !== -1 ? L.GeometryUtil.formattedNumber(1e-6 * r, y.km) + " kmÂ²" : r >= 1e4 && v.indexOf("ha") !== -1 ? L.GeometryUtil.formattedNumber(1e-4 * r, y.ha) + " ha" : L.GeometryUtil.formattedNumber(r, y.m) + " mÂ²") : (r /= .836127, p = r >= 3097600 ? L.GeometryUtil.formattedNumber(r / 3097600, y.mi) + " miÂ²" : r >= 4840 ? L.GeometryUtil.formattedNumber(r / 4840, y.ac) + " acres" : L.GeometryUtil.formattedNumber(r, y.yd) + " ydÂ²"), p
                },
                readableDistance: function(r, h, u, p, x) {
                    var y, x = L.Util.extend({}, n, x);
                    switch (h ? typeof h == "string" ? h : "metric" : u ? "feet" : p ? "nauticalMile" : "yards") {
                        case "metric":
                            y = r > 1e3 ? L.GeometryUtil.formattedNumber(r / 1e3, x.km) + " km" : L.GeometryUtil.formattedNumber(r, x.m) + " m";
                            break;
                        case "feet":
                            r *= 3.28083, y = L.GeometryUtil.formattedNumber(r, x.ft) + " ft";
                            break;
                        case "nauticalMile":
                            r *= .53996, y = L.GeometryUtil.formattedNumber(r / 1e3, x.nm) + " nm";
                            break;
                        case "yards":
                        default:
                            r *= 1.09361, y = r > 1760 ? L.GeometryUtil.formattedNumber(r / 1760, x.mi) + " miles" : L.GeometryUtil.formattedNumber(r, x.yd) + " yd"
                    }
                    return y
                },
                isVersion07x: function() {
                    var r = L.version.split(".");
                    return parseInt(r[0], 10) === 0 && parseInt(r[1], 10) === 7
                }
            })
        }(), L.Util.extend(L.LineUtil, {
            segmentsIntersect: function(n, r, h, u) {
                return this._checkCounterclockwise(n, h, u) !== this._checkCounterclockwise(r, h, u) && this._checkCounterclockwise(n, r, h) !== this._checkCounterclockwise(n, r, u)
            },
            _checkCounterclockwise: function(n, r, h) {
                return (h.y - n.y) * (r.x - n.x) > (r.y - n.y) * (h.x - n.x)
            }
        }), L.Polyline.include({
            intersects: function() {
                var n, r, h, u = this._getProjectedPoints(),
                    p = u ? u.length : 0;
                if (this._tooFewPointsForIntersection()) return !1;
                for (n = p - 1; n >= 3; n--)
                    if (r = u[n - 1], h = u[n], this._lineSegmentsIntersectsRange(r, h, n - 2)) return !0;
                return !1
            },
            newLatLngIntersects: function(n, r) {
                return !!this._map && this.newPointIntersects(this._map.latLngToLayerPoint(n), r)
            },
            newPointIntersects: function(n, r) {
                var h = this._getProjectedPoints(),
                    u = h ? h.length : 0,
                    p = h ? h[u - 1] : null,
                    v = u - 2;
                return !this._tooFewPointsForIntersection(1) && this._lineSegmentsIntersectsRange(p, n, v, r ? 1 : 0)
            },
            _tooFewPointsForIntersection: function(n) {
                var r = this._getProjectedPoints(),
                    h = r ? r.length : 0;
                return h += n || 0, !r || h <= 3
            },
            _lineSegmentsIntersectsRange: function(n, r, h, u) {
                var p, v, y = this._getProjectedPoints();
                u = u || 0;
                for (var x = h; x > u; x--)
                    if (p = y[x - 1], v = y[x], L.LineUtil.segmentsIntersect(n, r, p, v)) return !0;
                return !1
            },
            _getProjectedPoints: function() {
                if (!this._defaultShape) return this._originalPoints;
                for (var n = [], r = this._defaultShape(), h = 0; h < r.length; h++) n.push(this._map.latLngToLayerPoint(r[h]));
                return n
            }
        }), L.Polygon.include({
            intersects: function() {
                var n, r, h, u, p = this._getProjectedPoints();
                return !this._tooFewPointsForIntersection() && (!!L.Polyline.prototype.intersects.call(this) || (n = p.length, r = p[0], h = p[n - 1], u = n - 2, this._lineSegmentsIntersectsRange(h, r, u, 1)))
            }
        }), L.Control.Draw = L.Control.extend({
            options: {
                position: "topleft",
                draw: {},
                edit: !1
            },
            initialize: function(n) {
                if (L.version < "0.7") throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");
                L.Control.prototype.initialize.call(this, n);
                var r;
                this._toolbars = {}, L.DrawToolbar && this.options.draw && (r = new L.DrawToolbar(this.options.draw), this._toolbars[L.DrawToolbar.TYPE] = r, this._toolbars[L.DrawToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.EditToolbar && this.options.edit && (r = new L.EditToolbar(this.options.edit), this._toolbars[L.EditToolbar.TYPE] = r, this._toolbars[L.EditToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.toolbar = this
            },
            onAdd: function(n) {
                var r, h = L.DomUtil.create("div", "leaflet-draw"),
                    u = !1;
                for (var p in this._toolbars) this._toolbars.hasOwnProperty(p) && (r = this._toolbars[p].addToolbar(n)) && (u || (L.DomUtil.hasClass(r, "leaflet-draw-toolbar-top") || L.DomUtil.addClass(r.childNodes[0], "leaflet-draw-toolbar-top"), u = !0), h.appendChild(r));
                return h
            },
            onRemove: function() {
                for (var n in this._toolbars) this._toolbars.hasOwnProperty(n) && this._toolbars[n].removeToolbar()
            },
            setDrawingOptions: function(n) {
                for (var r in this._toolbars) this._toolbars[r] instanceof L.DrawToolbar && this._toolbars[r].setOptions(n)
            },
            _toolbarEnabled: function(n) {
                var r = n.target;
                for (var h in this._toolbars) this._toolbars[h] !== r && this._toolbars[h].disable()
            }
        }), L.Map.mergeOptions({
            drawControlTooltips: !0,
            drawControl: !1
        }), L.Map.addInitHook(function() {
            this.options.drawControl && (this.drawControl = new L.Control.Draw, this.addControl(this.drawControl))
        }), L.Toolbar = L.Class.extend({
            initialize: function(n) {
                L.setOptions(this, n), this._modes = {}, this._actionButtons = [], this._activeMode = null;
                var r = L.version.split(".");
                parseInt(r[0], 10) === 1 && parseInt(r[1], 10) >= 2 ? L.Toolbar.include(L.Evented.prototype) : L.Toolbar.include(L.Mixin.Events)
            },
            enabled: function() {
                return this._activeMode !== null
            },
            disable: function() {
                this.enabled() && this._activeMode.handler.disable()
            },
            addToolbar: function(n) {
                var r, h = L.DomUtil.create("div", "leaflet-draw-section"),
                    u = 0,
                    p = this._toolbarClass || "",
                    v = this.getModeHandlers(n);
                for (this._toolbarContainer = L.DomUtil.create("div", "leaflet-draw-toolbar leaflet-bar"), this._map = n, r = 0; r < v.length; r++) v[r].enabled && this._initModeHandler(v[r].handler, this._toolbarContainer, u++, p, v[r].title);
                if (u) return this._lastButtonIndex = --u, this._actionsContainer = L.DomUtil.create("ul", "leaflet-draw-actions"), h.appendChild(this._toolbarContainer), h.appendChild(this._actionsContainer), h
            },
            removeToolbar: function() {
                for (var n in this._modes) this._modes.hasOwnProperty(n) && (this._disposeButton(this._modes[n].button, this._modes[n].handler.enable, this._modes[n].handler), this._modes[n].handler.disable(), this._modes[n].handler.off("enabled", this._handlerActivated, this).off("disabled", this._handlerDeactivated, this));
                this._modes = {};
                for (var r = 0, h = this._actionButtons.length; r < h; r++) this._disposeButton(this._actionButtons[r].button, this._actionButtons[r].callback, this);
                this._actionButtons = [], this._actionsContainer = null
            },
            _initModeHandler: function(n, r, h, u, p) {
                var v = n.type;
                this._modes[v] = {}, this._modes[v].handler = n, this._modes[v].button = this._createButton({
                    type: v,
                    title: p,
                    className: u + "-" + v,
                    container: r,
                    callback: this._modes[v].handler.enable,
                    context: this._modes[v].handler
                }), this._modes[v].buttonIndex = h, this._modes[v].handler.on("enabled", this._handlerActivated, this).on("disabled", this._handlerDeactivated, this)
            },
            _detectIOS: function() {
                return /iPad|iPhone|iPod/.test(navigator.userAgent) && !m.MSStream
            },
            _createButton: function(n) {
                var r = L.DomUtil.create("a", n.className || "", n.container),
                    h = L.DomUtil.create("span", "sr-only", n.container);
                r.href = "#", r.appendChild(h), n.title && (r.title = n.title, h.innerHTML = n.title), n.text && (r.innerHTML = n.text, h.innerHTML = n.text);
                var u = this._detectIOS() ? "touchstart" : "click";
                return L.DomEvent.on(r, "click", L.DomEvent.stopPropagation).on(r, "mousedown", L.DomEvent.stopPropagation).on(r, "dblclick", L.DomEvent.stopPropagation).on(r, "touchstart", L.DomEvent.stopPropagation).on(r, "click", L.DomEvent.preventDefault).on(r, u, n.callback, n.context), r
            },
            _disposeButton: function(n, r) {
                var h = this._detectIOS() ? "touchstart" : "click";
                L.DomEvent.off(n, "click", L.DomEvent.stopPropagation).off(n, "mousedown", L.DomEvent.stopPropagation).off(n, "dblclick", L.DomEvent.stopPropagation).off(n, "touchstart", L.DomEvent.stopPropagation).off(n, "click", L.DomEvent.preventDefault).off(n, h, r)
            },
            _handlerActivated: function(n) {
                this.disable(), this._activeMode = this._modes[n.handler], L.DomUtil.addClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._showActionsToolbar(), this.fire("enable")
            },
            _handlerDeactivated: function() {
                this._hideActionsToolbar(), L.DomUtil.removeClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._activeMode = null, this.fire("disable")
            },
            _createActions: function(n) {
                var r, h, u, p, v = this._actionsContainer,
                    y = this.getActions(n),
                    x = y.length;
                for (h = 0, u = this._actionButtons.length; h < u; h++) this._disposeButton(this._actionButtons[h].button, this._actionButtons[h].callback);
                for (this._actionButtons = []; v.firstChild;) v.removeChild(v.firstChild);
                for (var z = 0; z < x; z++) "enabled" in y[z] && !y[z].enabled || (r = L.DomUtil.create("li", "", v), p = this._createButton({
                    title: y[z].title,
                    text: y[z].text,
                    container: r,
                    callback: y[z].callback,
                    context: y[z].context
                }), this._actionButtons.push({
                    button: p,
                    callback: y[z].callback
                }))
            },
            _showActionsToolbar: function() {
                var n = this._activeMode.buttonIndex,
                    r = this._lastButtonIndex,
                    h = this._activeMode.button.offsetTop - 1;
                this._createActions(this._activeMode.handler), this._actionsContainer.style.top = h + "px", n === 0 && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-top")), n === r && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-bottom")), this._actionsContainer.style.display = "block", this._map.fire(L.Draw.Event.TOOLBAROPENED)
            },
            _hideActionsToolbar: function() {
                this._actionsContainer.style.display = "none", L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-top"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-bottom"), this._map.fire(L.Draw.Event.TOOLBARCLOSED)
            }
        }), L.Draw = L.Draw || {}, L.Draw.Tooltip = L.Class.extend({
            initialize: function(n) {
                this._map = n, this._popupPane = n._panes.popupPane, this._visible = !1, this._container = n.options.drawControlTooltips ? L.DomUtil.create("div", "leaflet-draw-tooltip", this._popupPane) : null, this._singleLineLabel = !1, this._map.on("mouseout", this._onMouseOut, this)
            },
            dispose: function() {
                this._map.off("mouseout", this._onMouseOut, this), this._container && (this._popupPane.removeChild(this._container), this._container = null)
            },
            updateContent: function(n) {
                return this._container ? (n.subtext = n.subtext || "", n.subtext.length !== 0 || this._singleLineLabel ? n.subtext.length > 0 && this._singleLineLabel && (L.DomUtil.removeClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !1) : (L.DomUtil.addClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !0), this._container.innerHTML = (n.subtext.length > 0 ? '<span class="leaflet-draw-tooltip-subtext">' + n.subtext + "</span><br />" : "") + "<span>" + n.text + "</span>", n.text || n.subtext ? (this._visible = !0, this._container.style.visibility = "inherit") : (this._visible = !1, this._container.style.visibility = "hidden"), this) : this
            },
            updatePosition: function(n) {
                var r = this._map.latLngToLayerPoint(n),
                    h = this._container;
                return this._container && (this._visible && (h.style.visibility = "inherit"), L.DomUtil.setPosition(h, r)), this
            },
            showAsError: function() {
                return this._container && L.DomUtil.addClass(this._container, "leaflet-error-draw-tooltip"), this
            },
            removeError: function() {
                return this._container && L.DomUtil.removeClass(this._container, "leaflet-error-draw-tooltip"), this
            },
            _onMouseOut: function() {
                this._container && (this._container.style.visibility = "hidden")
            }
        }), L.DrawToolbar = L.Toolbar.extend({
            statics: {
                TYPE: "draw"
            },
            options: {
                polyline: {},
                polygon: {},
                rectangle: {},
                circle: {},
                marker: {},
                circlemarker: {}
            },
            initialize: function(n) {
                for (var r in this.options) this.options.hasOwnProperty(r) && n[r] && (n[r] = L.extend({}, this.options[r], n[r]));
                this._toolbarClass = "leaflet-draw-draw", L.Toolbar.prototype.initialize.call(this, n)
            },
            getModeHandlers: function(n) {
                return [{
                    enabled: this.options.polyline,
                    handler: new L.Draw.Polyline(n, this.options.polyline),
                    title: L.drawLocal.draw.toolbar.buttons.polyline
                }, {
                    enabled: this.options.polygon,
                    handler: new L.Draw.Polygon(n, this.options.polygon),
                    title: L.drawLocal.draw.toolbar.buttons.polygon
                }, {
                    enabled: this.options.rectangle,
                    handler: new L.Draw.Rectangle(n, this.options.rectangle),
                    title: L.drawLocal.draw.toolbar.buttons.rectangle
                }, {
                    enabled: this.options.circle,
                    handler: new L.Draw.Circle(n, this.options.circle),
                    title: L.drawLocal.draw.toolbar.buttons.circle
                }, {
                    enabled: this.options.marker,
                    handler: new L.Draw.Marker(n, this.options.marker),
                    title: L.drawLocal.draw.toolbar.buttons.marker
                }, {
                    enabled: this.options.circlemarker,
                    handler: new L.Draw.CircleMarker(n, this.options.circlemarker),
                    title: L.drawLocal.draw.toolbar.buttons.circlemarker
                }]
            },
            getActions: function(n) {
                return [{
                    enabled: n.completeShape,
                    title: L.drawLocal.draw.toolbar.finish.title,
                    text: L.drawLocal.draw.toolbar.finish.text,
                    callback: n.completeShape,
                    context: n
                }, {
                    enabled: n.deleteLastVertex,
                    title: L.drawLocal.draw.toolbar.undo.title,
                    text: L.drawLocal.draw.toolbar.undo.text,
                    callback: n.deleteLastVertex,
                    context: n
                }, {
                    title: L.drawLocal.draw.toolbar.actions.title,
                    text: L.drawLocal.draw.toolbar.actions.text,
                    callback: this.disable,
                    context: this
                }]
            },
            setOptions: function(n) {
                L.setOptions(this, n);
                for (var r in this._modes) this._modes.hasOwnProperty(r) && n.hasOwnProperty(r) && this._modes[r].handler.setOptions(n[r])
            }
        }), L.EditToolbar = L.Toolbar.extend({
            statics: {
                TYPE: "edit"
            },
            options: {
                edit: {
                    selectedPathOptions: {
                        dashArray: "10, 10",
                        fill: !0,
                        fillColor: "#fe57a1",
                        fillOpacity: .1,
                        maintainColor: !1
                    }
                },
                remove: {},
                poly: null,
                featureGroup: null
            },
            initialize: function(n) {
                n.edit && (n.edit.selectedPathOptions === void 0 && (n.edit.selectedPathOptions = this.options.edit.selectedPathOptions), n.edit.selectedPathOptions = L.extend({}, this.options.edit.selectedPathOptions, n.edit.selectedPathOptions)), n.remove && (n.remove = L.extend({}, this.options.remove, n.remove)), n.poly && (n.poly = L.extend({}, this.options.poly, n.poly)), this._toolbarClass = "leaflet-draw-edit", L.Toolbar.prototype.initialize.call(this, n), this._selectedFeatureCount = 0
            },
            getModeHandlers: function(n) {
                var r = this.options.featureGroup;
                return [{
                    enabled: this.options.edit,
                    handler: new L.EditToolbar.Edit(n, {
                        featureGroup: r,
                        selectedPathOptions: this.options.edit.selectedPathOptions,
                        poly: this.options.poly
                    }),
                    title: L.drawLocal.edit.toolbar.buttons.edit
                }, {
                    enabled: this.options.remove,
                    handler: new L.EditToolbar.Delete(n, {
                        featureGroup: r
                    }),
                    title: L.drawLocal.edit.toolbar.buttons.remove
                }]
            },
            getActions: function(n) {
                var r = [{
                    title: L.drawLocal.edit.toolbar.actions.save.title,
                    text: L.drawLocal.edit.toolbar.actions.save.text,
                    callback: this._save,
                    context: this
                }, {
                    title: L.drawLocal.edit.toolbar.actions.cancel.title,
                    text: L.drawLocal.edit.toolbar.actions.cancel.text,
                    callback: this.disable,
                    context: this
                }];
                return n.removeAllLayers && r.push({
                    title: L.drawLocal.edit.toolbar.actions.clearAll.title,
                    text: L.drawLocal.edit.toolbar.actions.clearAll.text,
                    callback: this._clearAllLayers,
                    context: this
                }), r
            },
            addToolbar: function(n) {
                var r = L.Toolbar.prototype.addToolbar.call(this, n);
                return this._checkDisabled(), this.options.featureGroup.on("layeradd layerremove", this._checkDisabled, this), r
            },
            removeToolbar: function() {
                this.options.featureGroup.off("layeradd layerremove", this._checkDisabled, this), L.Toolbar.prototype.removeToolbar.call(this)
            },
            disable: function() {
                this.enabled() && (this._activeMode.handler.revertLayers(), L.Toolbar.prototype.disable.call(this))
            },
            _save: function() {
                this._activeMode.handler.save(), this._activeMode && this._activeMode.handler.disable()
            },
            _clearAllLayers: function() {
                this._activeMode.handler.removeAllLayers(), this._activeMode && this._activeMode.handler.disable()
            },
            _checkDisabled: function() {
                var n, r = this.options.featureGroup,
                    h = r.getLayers().length !== 0;
                this.options.edit && (n = this._modes[L.EditToolbar.Edit.TYPE].button, h ? L.DomUtil.removeClass(n, "leaflet-disabled") : L.DomUtil.addClass(n, "leaflet-disabled"), n.setAttribute("title", h ? L.drawLocal.edit.toolbar.buttons.edit : L.drawLocal.edit.toolbar.buttons.editDisabled)), this.options.remove && (n = this._modes[L.EditToolbar.Delete.TYPE].button, h ? L.DomUtil.removeClass(n, "leaflet-disabled") : L.DomUtil.addClass(n, "leaflet-disabled"), n.setAttribute("title", h ? L.drawLocal.edit.toolbar.buttons.remove : L.drawLocal.edit.toolbar.buttons.removeDisabled))
            }
        }), L.EditToolbar.Edit = L.Handler.extend({
            statics: {
                TYPE: "edit"
            },
            initialize: function(n, r) {
                if (L.Handler.prototype.initialize.call(this, n), L.setOptions(this, r), this._featureGroup = r.featureGroup, !(this._featureGroup instanceof L.FeatureGroup)) throw new Error("options.featureGroup must be a L.FeatureGroup");
                this._uneditedLayerProps = {}, this.type = L.EditToolbar.Edit.TYPE;
                var h = L.version.split(".");
                parseInt(h[0], 10) === 1 && parseInt(h[1], 10) >= 2 ? L.EditToolbar.Edit.include(L.Evented.prototype) : L.EditToolbar.Edit.include(L.Mixin.Events)
            },
            enable: function() {
                !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {
                    handler: this.type
                }), this._map.fire(L.Draw.Event.EDITSTART, {
                    handler: this.type
                }), L.Handler.prototype.enable.call(this), this._featureGroup.on("layeradd", this._enableLayerEdit, this).on("layerremove", this._disableLayerEdit, this))
            },
            disable: function() {
                this._enabled && (this._featureGroup.off("layeradd", this._enableLayerEdit, this).off("layerremove", this._disableLayerEdit, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.EDITSTOP, {
                    handler: this.type
                }), this.fire("disabled", {
                    handler: this.type
                }))
            },
            addHooks: function() {
                var n = this._map;
                n && (n.getContainer().focus(), this._featureGroup.eachLayer(this._enableLayerEdit, this), this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({
                    text: L.drawLocal.edit.handlers.edit.tooltip.text,
                    subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
                }), n._editTooltip = this._tooltip, this._updateTooltip(), this._map.on("mousemove", this._onMouseMove, this).on("touchmove", this._onMouseMove, this).on("MSPointerMove", this._onMouseMove, this).on(L.Draw.Event.EDITVERTEX, this._updateTooltip, this))
            },
            removeHooks: function() {
                this._map && (this._featureGroup.eachLayer(this._disableLayerEdit, this), this._uneditedLayerProps = {}, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this).off("touchmove", this._onMouseMove, this).off("MSPointerMove", this._onMouseMove, this).off(L.Draw.Event.EDITVERTEX, this._updateTooltip, this))
            },
            revertLayers: function() {
                this._featureGroup.eachLayer(function(n) {
                    this._revertLayer(n)
                }, this)
            },
            save: function() {
                var n = new L.LayerGroup;
                this._featureGroup.eachLayer(function(r) {
                    r.edited && (n.addLayer(r), r.edited = !1)
                }), this._map.fire(L.Draw.Event.EDITED, {
                    layers: n
                })
            },
            _backupLayer: function(n) {
                var r = L.Util.stamp(n);
                this._uneditedLayerProps[r] || (n instanceof L.Polyline || n instanceof L.Polygon || n instanceof L.Rectangle ? this._uneditedLayerProps[r] = {
                    latlngs: L.LatLngUtil.cloneLatLngs(n.getLatLngs())
                } : n instanceof L.Circle ? this._uneditedLayerProps[r] = {
                    latlng: L.LatLngUtil.cloneLatLng(n.getLatLng()),
                    radius: n.getRadius()
                } : (n instanceof L.Marker || n instanceof L.CircleMarker) && (this._uneditedLayerProps[r] = {
                    latlng: L.LatLngUtil.cloneLatLng(n.getLatLng())
                }))
            },
            _getTooltipText: function() {
                return {
                    text: L.drawLocal.edit.handlers.edit.tooltip.text,
                    subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
                }
            },
            _updateTooltip: function() {
                this._tooltip.updateContent(this._getTooltipText())
            },
            _revertLayer: function(n) {
                var r = L.Util.stamp(n);
                n.edited = !1, this._uneditedLayerProps.hasOwnProperty(r) && (n instanceof L.Polyline || n instanceof L.Polygon || n instanceof L.Rectangle ? n.setLatLngs(this._uneditedLayerProps[r].latlngs) : n instanceof L.Circle ? (n.setLatLng(this._uneditedLayerProps[r].latlng), n.setRadius(this._uneditedLayerProps[r].radius)) : (n instanceof L.Marker || n instanceof L.CircleMarker) && n.setLatLng(this._uneditedLayerProps[r].latlng), n.fire("revert-edited", {
                    layer: n
                }))
            },
            _enableLayerEdit: function(n) {
                var r, h, u = n.layer || n.target || n;
                this._backupLayer(u), this.options.poly && (h = L.Util.extend({}, this.options.poly), u.options.poly = h), this.options.selectedPathOptions && (r = L.Util.extend({}, this.options.selectedPathOptions), r.maintainColor && (r.color = u.options.color, r.fillColor = u.options.fillColor), u.options.original = L.extend({}, u.options), u.options.editing = r), u instanceof L.Marker ? (u.editing && u.editing.enable(), u.dragging.enable(), u.on("dragend", this._onMarkerDragEnd).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onMarkerDragEnd, this).on("MSPointerUp", this._onMarkerDragEnd, this)) : u.editing.enable()
            },
            _disableLayerEdit: function(n) {
                var r = n.layer || n.target || n;
                r.edited = !1, r.editing && r.editing.disable(), delete r.options.editing, delete r.options.original, this._selectedPathOptions && (r instanceof L.Marker ? this._toggleMarkerHighlight(r) : (r.setStyle(r.options.previousOptions), delete r.options.previousOptions)), r instanceof L.Marker ? (r.dragging.disable(), r.off("dragend", this._onMarkerDragEnd, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onMarkerDragEnd, this).off("MSPointerUp", this._onMarkerDragEnd, this)) : r.editing.disable()
            },
            _onMouseMove: function(n) {
                this._tooltip.updatePosition(n.latlng)
            },
            _onMarkerDragEnd: function(n) {
                var r = n.target;
                r.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, {
                    layer: r
                })
            },
            _onTouchMove: function(n) {
                var r = n.originalEvent.changedTouches[0],
                    h = this._map.mouseEventToLayerPoint(r),
                    u = this._map.layerPointToLatLng(h);
                n.target.setLatLng(u)
            },
            _hasAvailableLayers: function() {
                return this._featureGroup.getLayers().length !== 0
            }
        }), L.EditToolbar.Delete = L.Handler.extend({
            statics: {
                TYPE: "remove"
            },
            initialize: function(n, r) {
                if (L.Handler.prototype.initialize.call(this, n), L.Util.setOptions(this, r), this._deletableLayers = this.options.featureGroup, !(this._deletableLayers instanceof L.FeatureGroup)) throw new Error("options.featureGroup must be a L.FeatureGroup");
                this.type = L.EditToolbar.Delete.TYPE;
                var h = L.version.split(".");
                parseInt(h[0], 10) === 1 && parseInt(h[1], 10) >= 2 ? L.EditToolbar.Delete.include(L.Evented.prototype) : L.EditToolbar.Delete.include(L.Mixin.Events)
            },
            enable: function() {
                !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {
                    handler: this.type
                }), this._map.fire(L.Draw.Event.DELETESTART, {
                    handler: this.type
                }), L.Handler.prototype.enable.call(this), this._deletableLayers.on("layeradd", this._enableLayerDelete, this).on("layerremove", this._disableLayerDelete, this))
            },
            disable: function() {
                this._enabled && (this._deletableLayers.off("layeradd", this._enableLayerDelete, this).off("layerremove", this._disableLayerDelete, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DELETESTOP, {
                    handler: this.type
                }), this.fire("disabled", {
                    handler: this.type
                }))
            },
            addHooks: function() {
                var n = this._map;
                n && (n.getContainer().focus(), this._deletableLayers.eachLayer(this._enableLayerDelete, this), this._deletedLayers = new L.LayerGroup, this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({
                    text: L.drawLocal.edit.handlers.remove.tooltip.text
                }), this._map.on("mousemove", this._onMouseMove, this))
            },
            removeHooks: function() {
                this._map && (this._deletableLayers.eachLayer(this._disableLayerDelete, this), this._deletedLayers = null, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this))
            },
            revertLayers: function() {
                this._deletedLayers.eachLayer(function(n) {
                    this._deletableLayers.addLayer(n), n.fire("revert-deleted", {
                        layer: n
                    })
                }, this)
            },
            save: function() {
                this._map.fire(L.Draw.Event.DELETED, {
                    layers: this._deletedLayers
                })
            },
            removeAllLayers: function() {
                this._deletableLayers.eachLayer(function(n) {
                    this._removeLayer({
                        layer: n
                    })
                }, this), this.save()
            },
            _enableLayerDelete: function(n) {
                (n.layer || n.target || n).on("click", this._removeLayer, this)
            },
            _disableLayerDelete: function(n) {
                var r = n.layer || n.target || n;
                r.off("click", this._removeLayer, this), this._deletedLayers.removeLayer(r)
            },
            _removeLayer: function(n) {
                var r = n.layer || n.target || n;
                this._deletableLayers.removeLayer(r), this._deletedLayers.addLayer(r), r.fire("deleted")
            },
            _onMouseMove: function(n) {
                this._tooltip.updatePosition(n.latlng)
            },
            _hasAvailableLayers: function() {
                return this._deletableLayers.getLayers().length !== 0
            }
        })
})(window, document);
var zi;
(function(m) {
    m[m.Millisecond = 1] = "Millisecond", m[m.Second = 1e3] = "Second", m[m.Minute = 6e4] = "Minute", m[m.Hour = 36e5] = "Hour", m[m.Day = 864e5] = "Day", m[m.Month = 2592e6] = "Month", m[m.Year = 31536e6] = "Year"
})(zi || (zi = {}));
const Is = {
    googleSatellite: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    googleHybrid: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
    arcGIS: "https://services.arcgisonline.com/ArcGis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png",
    osm: "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
};
var zs = (m => (m.Contestant = "Contestant", m.Hunter = "Hunter", m.HiddenFromMap = "HiddenFromMap", m.Eliminated = "Eliminated", m.InGulagCurrently = "InGulagCurrently", m.OutOfGulag = "OutOfGulag", m))(zs || {});
const Yn = (m, f = 6) => {
        const d = 10 ** f;
        return Math.round(m * d) / d
    },
    As = ({
        latitude: m,
        longitude: f
    }) => ({
        latitude: Yn(m),
        longitude: Yn(f)
    }),
    Kn = As({
        latitude: 28.48294818572977,
        longitude: -97.7688713596665
    }),
    Jn = () => [
        [28.489291, -97.778188],
        [28.486608, -97.777426],
        [28.478838, -97.773392],
        [28.474349, -97.771055],
        [28.473971, -97.768223],
        [28.480045, -97.766378],
        [28.480271, -97.762901],
        [28.481026, -97.760284],
        [28.481403, -97.757451],
        [28.481214, -97.756636],
        [28.481403, -97.755735],
        [28.482497, -97.756593],
        [28.486193, -97.755906],
        [28.489437, -97.755992],
        [28.489292, -97.778183]
    ].map(([m, f]) => ({
        latitude: m,
        longitude: f
    })),
    Re = 6e6,
    $n = new Set(["snoopy"]),
    Qn = new Map,
    to = new Map,
    Tt = new Map;

function eo(m) {
    const f = Tt.get(m);
    f && f.setTooltipContent(m + ": " + (to.get(m) ?? "Unknown") + "% battery, " + (Qn.get(m) ?? "Unknown") + " lives remaining")
}
async function io() {
    try {
        const m = await fetch("https://appapi.iceposeidon.com/public").then(f => f.json());
        if (Array.isArray(m))
            for (const f of m) Qn.set(f.name, f.lives_remaining), eo(f.name)
    } catch {}
}
setInterval(async () => {
    io()
}, zi.Minute);
setTimeout(() => {
    io()
}, 1e3 * 1.5);

function Zs(m) {
    const f = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    return m.appendChild(f), f
}

function Bs(m) {
    const f = document.createElementNS("http://www.w3.org/2000/svg", "mask");
    f.setAttribute("id", "mask"), m.appendChild(f);
    const d = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    return d.setAttribute("x", "0"), d.setAttribute("y", "0"), d.setAttribute("width", "100%"), d.setAttribute("height", "100%"), d.setAttribute("fill", "white"), f.appendChild(d), f
}

function Rs({
    mapID: m,
    tileServer: f = Is.arcGIS,
    showGoal: d = !1,
    mapOptions: O,
    radiusMeters: n,
    center: r,
    totalBoundary: h
}) {
    const u = [r.latitude, r.longitude],
        p = $.circle(u, {
            fillOpacity: 0,
            radius: n,
            color: "rgba(0, 255, 0, 0.6)"
        }),
        v = $.circleMarker(u, {
            radius: 2,
            color: "magenta",
            fillColor: "cyan",
            fillOpacity: 1
        }),
        y = $.layerGroup([v, p]),
        x = $.polygon(h.map(b => [b.latitude, b.longitude]), {
            color: "rgba(255,0,0,0.5)",
            fillOpacity: 0
        }),
        z = $.polygon(h.map(b => [b.latitude, b.longitude]), {
            color: "rgba(255,0,0,0.3)",
            fillOpacity: .6
        }),
        Kt = $.layerGroup([z, x]),
        W = $.map(m, {
            attributionControl: !1,
            minZoom: 15,
            zoomSnap: 1,
            layers: [y, Kt],
            center: u,
            maxBoundsViscosity: .6,
            maxBounds: z.getBounds().pad(1),
            ...O
        });
    W.setView(u, 15);
    const G = $.GridLayer.prototype._initTile;
    $.GridLayer.include({
        _initTile: function(b) {
            G.call(this, b);
            const U = this.getTileSize();
            b.style.width = U.x + 1 + "px", b.style.height = U.y + 1 + "px"
        }
    }), $.tileLayer(f).addTo(W);

    function kt() {
        const b = W.getPanes().overlayPane.querySelector("svg"),
            U = (b == null ? void 0 : b.querySelector("defs")) || Zs(b),
            S = U.querySelector("#mask") || Bs(U),
            A = W.latLngToLayerPoint(p.getLatLng()),
            j = p.getRadius() / W.distance(W.containerPointToLatLng([0, 0]), W.containerPointToLatLng([1, 0])),
            et = "M " + A.x + " " + A.y + " m -" + j + ", 0 a " + j + "," + j + " 0 1,0 " + j * 2 + ",0 a " + j + "," + j + " 0 1,0 -" + j * 2 + ",0";
        Ye(S, et);
        const Et = z.getElement();
        Et && Et.setAttribute("mask", "url(#mask)")
    }

    function Ye(b, U) {
        for (; b.childNodes.length > 1;) b.removeChild(b.lastChild);
        const S = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        S.setAttribute("x", "0"), S.setAttribute("y", "0"), S.setAttribute("width", "100%"), S.setAttribute("height", "100%"), S.setAttribute("fill", "white"), b.appendChild(S);
        const A = document.createElementNS("http://www.w3.org/2000/svg", "path");
        A.setAttribute("d", U), A.setAttribute("fill", "black"), b.appendChild(A)
    }
    W.on("zoom", kt), W.on("move", kt), kt(), kt();
    const Mt = new Map;

    function at(b, U, S) {
        const A = performance.now(),
            j = b.getLatLng(),
            et = U.lat - j.lat,
            Et = U.lng - j.lng;
        Mt.has(b._leaflet_id) && cancelAnimationFrame(Mt.get(b._leaflet_id));

        function tt() {
            const Ot = performance.now() - A,
                T = Math.min(Ot / S, 1),
                N = j.lat + et * T,
                Y = j.lng + Et * T;
            if (b.setLatLng([N, Y]), T < 1) {
                const ot = requestAnimationFrame(tt);
                Mt.set(b._leaflet_id, ot)
            } else Mt.delete(b._leaflet_id)
        }
        const ht = requestAnimationFrame(tt);
        Mt.set(b._leaflet_id, ht)
    }

    function Xt({
        kickUsername: b,
        displayName: U,
        flags: S,
        lat: A,
        lng: j,
        avatar: et,
        real: Et,
        battery: tt
    }) {
        if ($n.has(b)) return;
        U || (U = b), Et || (j = (j + Kn.longitude * Re) / Re, A = (A + Kn.latitude * Re) / Re);
        const ht = $.latLng(A, j),
            M = Tt.get(b),
            Ot = Tt.get("n-" + b);
        if (M) M.setOpacity(1), at(M, ht, 4e3), Ot && Ot.setLatLng(ht);
        else {
            const T = [];
            S.includes(2) && T.push("hunter"), S.includes(5) && T.push("ingulag");
            const N = $.marker(ht, {
                icon: $.divIcon({
                    className: "user-marker",
                    html: '<a target="_blank" style="text-decoration:none;" href="https://kick.com/' + b + `">
					<div class="user-marker-inner ` + T.join(" ") + `">
						<div style="display:flex;align-content:center;">
							<img class="avatar-image" style="margin-right:5px;border-radius:5px;" src="https://map.iceposeidon.com` + (et != null && et.startsWith("/") ? et : "/" + b + ".webp") + `" height="16px" width="16px" />
							<div class="username">` + U + `</div>
						</div>
					</div>
				</a>`
                })
            }).addTo(W).bindTooltip("Loading", {
                direction: "bottom",
                offset: [0, -20]
            }).setOpacity(.35);
            if (eo(b), tt && to.set(b, tt), N.on("mouseover", Y => {
                    Y.target.openPopup()
                }), Tt.set(b, N), d) {
                const Y = $.marker(ht, {
                    icon: $.divIcon({
                        html: '<div style="width: 5px; height: 5px; background-color: magenta; border-radius: 50%; transform: translateX(-50%);"></div>',
                        className: ""
                    })
                }).addTo(W);
                Tt.set("n-" + b, Y)
            }
        }
    }

    function Rt(b) {
        var U, S;
        (U = Tt.get(b)) == null || U.remove(), (S = Tt.get("n-" + b)) == null || S.remove(), Tt.delete(b), Tt.delete("n-" + b)
    }

    function Jt(b) {
        p.setRadius(b.current_circle_radius_meters), p.setLatLng([b.current_circle_center_latitude, b.current_circle_center_longitude]), v.setLatLng([b.current_circle_center_latitude, b.current_circle_center_longitude]), kt()
    }
    const $t = () => {
        const U = new Date().toLocaleString("en-US", {
                timeZone: "America/Chicago"
            }),
            S = new Date(U).getHours() + 1;
        let A = "";
        S >= 4 && S < 8 ? A = "evening" : S >= 8 && S < 20 ? A = "daytime" : S >= 20 && S <= 21 ? A = "evening" : A = "nighttime", A = "daytime";
        const j = document.getElementById("map");
        j && (j.classList.remove("daytime", "evening", "nighttime"), j.classList.add(A))
    };
    $t(), setInterval($t, 60 * 60 * 1e3);
    for (const [b, U] of [
            [28.486115, -97.76903],
            [28.484921, -97.774269],
            [28.478329, -97.766972],
            [28.47948, -97.769594],
            [28.482586, -97.771165],
            [28.480669, -97.763382],
            [28.485161, -97.760405],
            [28.481198, -97.758624],
            [28.488157, -97.762859]
        ]) $.marker([b, U], {
        icon: $.divIcon({
            className: "user-marker",
            html: '<img style="height:25px;max-height:25px; margin-left:-8px;margin-top:-6px; opacity:0.75;" src="/water.png" />'
        })
    }).addTo(W);
    const ve = [
        [
            [28.4865, -97.77349],
            [28.48755, -97.77241],
            [28.48836, -97.77376],
            [28.48771, -97.7746]
        ],
        [
            [28.48706, -97.77565],
            [28.48696, -97.77615],
            [28.48806, -97.77703],
            [28.48852, -97.77619],
            [28.4876, -97.77552]
        ]
    ];
    for (const b of ve) {
        const U = $.polygon(b.map(([S, A]) => [S, A]), {
            color: "rgba(0,0,0,0.9)",
            fillOpacity: .6
        });
        U.addTo(W), $.marker(U.getCenter(), {
            icon: $.divIcon({
                className: "oob",
                html: '<p class="oob">DONT ENTER ðŸš«</p>'
            })
        }).addTo(W)
    }
    return {
        updateUserLocation: Xt,
        deleteUser: Rt,
        map: W,
        update: Jt
    }
}
let E;
const ft = new Array(32).fill(void 0);
ft.push(void 0, null, !0, !1);

function _e(m) {
    return ft[m]
}
const no = new TextDecoder("utf-8", {
    ignoreBOM: !0,
    fatal: !0
});
no.decode();
let Ne = null;

function Yt() {
    return (Ne === null || Ne.buffer !== E.memory.buffer) && (Ne = new Uint8Array(E.memory.buffer)), Ne
}

function He(m, f) {
    return no.decode(Yt().subarray(m, m + f))
}
let fe = ft.length;

function Ci(m) {
    fe === ft.length && ft.push(ft.length + 1);
    const f = fe;
    return fe = ft[f], ft[f] = m, f
}
let yt = 0;
const Fe = new TextEncoder("utf-8"),
    Ns = typeof Fe.encodeInto == "function" ? function(m, f) {
        return Fe.encodeInto(m, f)
    } : function(m, f) {
        const d = Fe.encode(m);
        return f.set(d), {
            read: m.length,
            written: d.length
        }
    };

function Xn(m, f, d) {
    if (d === void 0) {
        const u = Fe.encode(m),
            p = f(u.length);
        return Yt().subarray(p, p + u.length).set(u), yt = u.length, p
    }
    let O = m.length,
        n = f(O);
    const r = Yt();
    let h = 0;
    for (; h < O; h++) {
        const u = m.charCodeAt(h);
        if (u > 127) break;
        r[n + h] = u
    }
    if (h !== O) {
        h !== 0 && (m = m.slice(h)), n = d(n, O, O = h + m.length * 3);
        const u = Yt().subarray(n + h, n + O),
            p = Ns(m, u);
        h += p.written
    }
    return yt = h, n
}
let Ue = null;

function Q() {
    return (Ue === null || Ue.buffer !== E.memory.buffer) && (Ue = new Int32Array(E.memory.buffer)), Ue
}

function Hs(m) {
    m < 36 || (ft[m] = fe, fe = m)
}

function pe(m) {
    const f = _e(m);
    return Hs(m), f
}

function me(m, f) {
    const d = f(m.length * 1);
    return Yt().set(m, d / 1), yt = m.length, d
}
let We = 32;

function Us(m) {
    if (We == 1) throw new Error("out of js stack");
    return ft[--We] = m, We
}

function Ai(m, f) {
    return Yt().subarray(m / 1, m / 1 + f)
}

function Gs(m, f) {
    try {
        const u = E.__wbindgen_add_to_stack_pointer(-16),
            p = me(m, E.__wbindgen_malloc),
            v = yt;
        E.compress(u, p, v, Us(f));
        var d = Q()[u / 4 + 0],
            O = Q()[u / 4 + 1],
            n = Q()[u / 4 + 2],
            r = Q()[u / 4 + 3];
        if (r) throw pe(n);
        var h = Ai(d, O).slice();
        return E.__wbindgen_free(d, O * 1), h
    } finally {
        E.__wbindgen_add_to_stack_pointer(16), ft[We++] = void 0
    }
}

function Fs(m) {
    try {
        const h = E.__wbindgen_add_to_stack_pointer(-16),
            u = me(m, E.__wbindgen_malloc),
            p = yt;
        E.decompress(h, u, p);
        var f = Q()[h / 4 + 0],
            d = Q()[h / 4 + 1],
            O = Q()[h / 4 + 2],
            n = Q()[h / 4 + 3];
        if (n) throw pe(O);
        var r = Ai(f, d).slice();
        return E.__wbindgen_free(f, d * 1), r
    } finally {
        E.__wbindgen_add_to_stack_pointer(16)
    }
}

function Si(m) {
    return m == null
}
const Ws = Object.freeze({
    ResultSuccess: 1,
    1: "ResultSuccess",
    NeedsMoreInput: 2,
    2: "NeedsMoreInput",
    NeedsMoreOutput: 3,
    3: "NeedsMoreOutput"
});
class ge {
    static __wrap(f) {
        const d = Object.create(ge.prototype);
        return d.ptr = f, d
    }
    __destroy_into_raw() {
        const f = this.ptr;
        return this.ptr = 0, f
    }
    free() {
        const f = this.__destroy_into_raw();
        E.__wbg_brotlistreamresult_free(f)
    }
    get code() {
        return E.__wbg_get_brotlistreamresult_code(this.ptr) >>> 0
    }
    set code(f) {
        E.__wbg_set_brotlistreamresult_code(this.ptr, f)
    }
    get buf() {
        try {
            const n = E.__wbindgen_add_to_stack_pointer(-16);
            E.__wbg_get_brotlistreamresult_buf(n, this.ptr);
            var f = Q()[n / 4 + 0],
                d = Q()[n / 4 + 1],
                O = Ai(f, d).slice();
            return E.__wbindgen_free(f, d * 1), O
        } finally {
            E.__wbindgen_add_to_stack_pointer(16)
        }
    }
    set buf(f) {
        const d = me(f, E.__wbindgen_malloc),
            O = yt;
        E.__wbg_set_brotlistreamresult_buf(this.ptr, d, O)
    }
    get input_offset() {
        return E.__wbg_get_brotlistreamresult_input_offset(this.ptr) >>> 0
    }
    set input_offset(f) {
        E.__wbg_set_brotlistreamresult_input_offset(this.ptr, f)
    }
}
class je {
    static __wrap(f) {
        const d = Object.create(je.prototype);
        return d.ptr = f, d
    }
    __destroy_into_raw() {
        const f = this.ptr;
        return this.ptr = 0, f
    }
    free() {
        const f = this.__destroy_into_raw();
        E.__wbg_compressstream_free(f)
    }
    constructor(f) {
        const d = E.compressstream_new(!Si(f), Si(f) ? 0 : f);
        return je.__wrap(d)
    }
    compress(f, d) {
        try {
            const p = E.__wbindgen_add_to_stack_pointer(-16);
            var O = Si(f) ? 0 : me(f, E.__wbindgen_malloc),
                n = yt;
            E.compressstream_compress(p, this.ptr, O, n, d);
            var r = Q()[p / 4 + 0],
                h = Q()[p / 4 + 1],
                u = Q()[p / 4 + 2];
            if (u) throw pe(h);
            return ge.__wrap(r)
        } finally {
            E.__wbindgen_add_to_stack_pointer(16)
        }
    }
    total_out() {
        return E.compressstream_total_out(this.ptr) >>> 0
    }
}
class qe {
    static __wrap(f) {
        const d = Object.create(qe.prototype);
        return d.ptr = f, d
    }
    __destroy_into_raw() {
        const f = this.ptr;
        return this.ptr = 0, f
    }
    free() {
        const f = this.__destroy_into_raw();
        E.__wbg_decompressstream_free(f)
    }
    constructor() {
        const f = E.decompressstream_new();
        return qe.__wrap(f)
    }
    decompress(f, d) {
        try {
            const h = E.__wbindgen_add_to_stack_pointer(-16),
                u = me(f, E.__wbindgen_malloc),
                p = yt;
            E.decompressstream_decompress(h, this.ptr, u, p, d);
            var O = Q()[h / 4 + 0],
                n = Q()[h / 4 + 1],
                r = Q()[h / 4 + 2];
            if (r) throw pe(n);
            return ge.__wrap(O)
        } finally {
            E.__wbindgen_add_to_stack_pointer(16)
        }
    }
    total_out() {
        return E.decompressstream_total_out(this.ptr) >>> 0
    }
}
async function Vs(m, f) {
    if (typeof Response == "function" && m instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming == "function") try {
            return await WebAssembly.instantiateStreaming(m, f)
        } catch (O) {
            if (m.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", O);
            else throw O
        }
        const d = await m.arrayBuffer();
        return await WebAssembly.instantiate(d, f)
    } else {
        const d = await WebAssembly.instantiate(m, f);
        return d instanceof WebAssembly.Instance ? {
            instance: d,
            module: m
        } : d
    }
}
async function Zi(m) {
    typeof m > "u" && (m = new URL("/assets/brotli_wasm_bg-NfWIZley.wasm", import.meta.url));
    const f = {};
    f.wbg = {}, f.wbg.__wbindgen_is_undefined = function(n) {
        return _e(n) === void 0
    }, f.wbg.__wbindgen_is_object = function(n) {
        const r = _e(n);
        return typeof r == "object" && r !== null
    }, f.wbg.__wbindgen_string_new = function(n, r) {
        const h = He(n, r);
        return Ci(h)
    }, f.wbg.__wbindgen_error_new = function(n, r) {
        const h = new Error(He(n, r));
        return Ci(h)
    }, f.wbg.__wbindgen_json_serialize = function(n, r) {
        const h = _e(r),
            u = JSON.stringify(h === void 0 ? null : h),
            p = Xn(u, E.__wbindgen_malloc, E.__wbindgen_realloc),
            v = yt;
        Q()[n / 4 + 1] = v, Q()[n / 4 + 0] = p
    }, f.wbg.__wbg_new_693216e109162396 = function() {
        const n = new Error;
        return Ci(n)
    }, f.wbg.__wbg_stack_0ddaca5d1abfb52f = function(n, r) {
        const h = _e(r).stack,
            u = Xn(h, E.__wbindgen_malloc, E.__wbindgen_realloc),
            p = yt;
        Q()[n / 4 + 1] = p, Q()[n / 4 + 0] = u
    }, f.wbg.__wbg_error_09919627ac0992f5 = function(n, r) {
        try {
            console.error(He(n, r))
        } finally {
            E.__wbindgen_free(n, r)
        }
    }, f.wbg.__wbindgen_object_drop_ref = function(n) {
        pe(n)
    }, f.wbg.__wbindgen_throw = function(n, r) {
        throw new Error(He(n, r))
    }, (typeof m == "string" || typeof Request == "function" && m instanceof Request || typeof URL == "function" && m instanceof URL) && (m = fetch(m));
    const {
        instance: d,
        module: O
    } = await Vs(await m, f);
    return E = d.exports, Zi.__wbindgen_wasm_module = O, E
}
const js = Object.freeze(Object.defineProperty({
        __proto__: null,
        BrotliStreamResult: ge,
        BrotliStreamResultCode: Ws,
        CompressStream: je,
        DecompressStream: qe,
        compress: Gs,
        decompress: Fs,
        default: Zi
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    qs = Zi().then(() => js);
var Ys = {
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1
};
const Ve = {
        wsUrl: Ys.VITE_WS_URL,
        wasKilled: !1
    },
    Ge = {
        a: "m",
        b: "n",
        c: "o",
        d: "p",
        e: "q",
        f: "r",
        g: "s",
        h: "t",
        i: "u",
        j: "v",
        k: "w",
        l: "x",
        m: "y",
        n: "z",
        o: "a",
        p: "b",
        q: "c",
        r: "d",
        s: "e",
        t: "f",
        u: "g",
        v: "h",
        w: "i",
        x: "j",
        y: "k",
        z: "l",
        0: "5",
        1: "6",
        2: "7",
        3: "8",
        4: "9",
        5: "0",
        6: "1",
        7: "2",
        8: "3",
        9: "4",
        A: "N",
        B: "O",
        C: "P",
        D: "Q",
        E: "R",
        F: "S",
        G: "T",
        H: "U",
        I: "V",
        J: "W",
        K: "X",
        L: "Y",
        M: "Z",
        N: "A",
        O: "B",
        P: "C",
        Q: "D",
        R: "E",
        S: "F",
        T: "G",
        U: "H",
        V: "I",
        W: "J",
        X: "K",
        Y: "L",
        Z: "M"
    };

function Ks(m) {
    return m === "DISABLE" || m.startsWith("HIDE:")
}

function Xs(m, f) {
    const d = new TextDecoder().decode(f(m));
    return Ks(d) ? d : JSON.parse(d).map((n, r) => {
        if (typeof n == "string") return n.replace(/./g, h => Object.keys(Ge).find(u => Ge[u] === h) || h);
        if (Array.isArray(n)) return n.map(h => typeof h == "string" ? h.replace(/./g, u => Object.keys(Ge).find(p => Ge[p] === u) || u) : typeof h == "number" ? h - 25 * r : Array.isArray(h) ? h.map(u => u - 25 * r) : h)
    })
}

function Di(m) {
    var d;
    alert("The map has been disabled. Come back later.");
    Ve.wasKilled = !0;
    d = document.getElementById("map");
    const f = document.createElement("div");
    f.style.position = "absolute";
    f.style.top = "0";
    f.style.left = "50%";
    f.style.transform = "translateX(-50%)";
    f.style.fontSize = "2rem";
    f.style.color = "red";
    f.style.fontWeight = "bold";
    f.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    f.style.padding = "15px 30px";
    f.style.borderRadius = "25px";
    f.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
    f.style.zIndex = "1000";
    f.innerHTML = 'The map has been disabled. Come back later.';
    document.body.appendChild(f);
}
async function oo(m = 0) {
    if (Ve.wasKilled) return;
    const f = await qs;
    let d = new WebSocket("https://ws.iceposeidon.com/ws");
    d.addEventListener("message", async O => {
        const n = await O.data.arrayBuffer(),
            r = Xs(new Uint8Array(n), f.decompress);
        if (typeof r == "string") {
            if (r.startsWith("HIDE:")) {
                const h = r.replace("HIDE:", "");
                $n.add(h), Oi.deleteUser(h)
            } else if (r === "DISABLE") {
                Di(), d == null || d.close();
                return
            }
        } else
            for (const h of r)
                if (h[0] === "S") {
                    const u = h,
                        [, p, v, y, x, z] = u;
                    if (Oi.update({
                            current_circle_center_latitude: x,
                            current_circle_center_longitude: z,
                            current_circle_radius_meters: y
                        }), !p) {
                        Di(), d == null || d.close();
                        return
                    }
                } else {
                    const u = h;
                    Oi.updateUserLocation({
                        kickUsername: u[0],
                        displayName: typeof u[1] == "string" ? u[1] : null,
                        flags: u[2],
                        lat: u[3],
                        lng: u[4],
                        avatar: typeof u[5] == "string" ? u[5] : null,
                        real: !1,
                        battery: u[6]
                    })
                }
    }), d.addEventListener("close", () => {
        if (!Ve.wasKilled) {
            if (d == null || d.close(), d = null, m >= 5) {
                Ve.wasKilled = !0, Di();
                return
            }
            setTimeout(() => {
                oo(m + 1)
            }, 1e3 * (m + Math.ceil(Math.random() * 10)))
        }
    })
}
oo();
const Js = Jn(),
    Oi = Rs({
        mapID: "map",
        totalBoundary: Jn(),
        center: Js[0],
        radiusMeters: 0
    });
