! function(e) {
    var r = [],
        t = !1,
        n = !1,
        i = {
            interval: 250,
            force_process: !1
        },
        a = e(window),
        o = [];

    function p() {
        n = !1;
        for (var t = 0, i = r.length; t < i; t++) {
            var a = (f = r[t], e(f).filter((function() {
                return e(this).is(":appeared")
            })));
            if (a.trigger("appear", [a]), o[t]) {
                var p = o[t].not(a);
                p.trigger("disappear", [p])
            }
            o[t] = a
        }
        var f
    }
    e.expr.pseudos.appeared = e.expr.createPseudo((function(r) {
        return function(r) {
            var t = e(r);
            if (!t.is(":visible")) return !1;
            var n = a.scrollLeft(),
                i = a.scrollTop(),
                o = t.offset(),
                p = o.left,
                f = o.top;
            return f + t.height() >= i && f - (t.data("appear-top-offset") || 0) <= i + a.height() && p + t.width() >= n && p - (t.data("appear-left-offset") || 0) <= n + a.width()
        }
    })), e.fn.extend({
        appear: function(r, t) {
            return e.appear(this, t), this
        }
    }), e.extend({
        appear: function(a, f) {
            var u = e.extend({}, i, f || {});
            if (!t) {
                var s = function() {
                    n || (n = !0, setTimeout(p, u.interval))
                };
                e(window).scroll(s).resize(s), t = !0
            }
            u.force_process && setTimeout(p, u.interval),
                function(e) {
                    r.push(e), o.push()
                }(a)
        },
        force_appear: function() {
            return !!t && (p(), !0)
        }
    })
}("undefined" != typeof module ? require("jquery") : jQuery);