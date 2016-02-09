// Hat 728 JFK
var anim = function() {
        var k, t, n, a, o, s, r, d, u, c, m, p, f, y, w, g, x, C, H, z, q, v, B, A, D, h = setTimeout;
        return g = function() {
            x(), h(d, 250)
        }, 
        x = function() {
            k = w("firstscreen"), t = w("instacredit"), n = w("amaze"), a = w("happen"), e = w("thehawaiian"), o = w("book-frame"), s = w("fare"), B = w("branding"), A = w("cta"), D = w("legal")
        }, 
        d = function() {
            setTimeout( function () {
                C();
            }, 100);
        }, 
        C = function() {
            twn.to(k, 8, { // k is firstscreen, 7 is transition speed in seconds.
                y: -96, // background position change to this value
            }),
           twn.to(t, .6, {  //t =instacredit .6 is speed of opacity and display implementation
                opacity: 0,
                delay: .9,
            }), twn.to(n, .6, {  //n = amaze
                opacity: 1,
                delay:  1,
                onComplete: h, //h fades and animates to left; off screen 
                onCompleteParams: [u, 1000] //calls next function, delay until called
            })
        }, 
        u = function() {
            twn.to(n, 1.075, { //transitions n = "amaze" out
                opacity: 0,
                onComplete: h,
                onCompleteParams: [H, 0]
            })
        }, 
        H = function() {
           twn.to(a, 1, {  //fades "a = happen" to opacity: 1
                opacity: 1,
                onComplete: h,
                onCompleteParams: [z, 1000]
            })
        }, 
        z = function() {
                twn.to(a, 1, {  // transitions "a = happen" to opacity 0 
                opacity: 0,
                delay: 0,
                ease: "quad-ease-out"
            }), twn.to(o, 1.5, {  // o = book-frame
                y: 14,
                opacity: 1,
                delay: 1,
                ease: "quad-ease-in-out",
            }), 
            twn.to(A, 1.5, {  // A = cta
                y: 28,
                opacity: 1,
                delay: 1,
                ease: "quad-ease-in-out",
            }), 
            twn.to(e, 1.5, {  // e = thehawaiian
                y: 22,
                opacity: 1,
                delay: 1,
                ease: "quad-ease-in-out",
            }), 
             twn.to(B, 1.5, {  // B = branding
                y: 0,
                opacity: 1,
                delay: 1,
                ease: "quad-ease-in-out",
                // onComplete: w,
                onCompleteParams: [w, 1500]
            })
        }, 
        // CallBack Function.
        w = function(e) {
            return document.getElementById(e)
        }, {
            init: g
        }
    }(),
    main = function() {
        var e, t, n, a, o, i;
        return o = function() {
            e = document.getElementById("num"), 
            t = document.getElementById("legal"), 
            i()
        }, 
        i = function() {
            var e = (new Date).getTime();
            n = new XMLHttpRequest, 
            n.onload = a, 
            n.open("GET", "https://alldigital.cwunited.com/hawaiianairlines/banners/XML_Joystick2.xml?cache=" + e, !1), 
            n.send()
        }, 
        a = function() {
            if (200 === this.status && null !== this.responseXML) {
                var n = this.responseXML,
                    m = n.getElementsByTagName("pricing"),
                    q = n.getElementsByTagName("to"),
                    p = n.getElementsByTagName("from");
                    for (var x = 0; x < m.length; x++) {
                        if (p[x].childNodes[0].nodeValue.trim() == "JFK" && q[x].childNodes[0].nodeValue.trim() == "HNL") {
                            var a = n.getElementsByTagName("price")[x].childNodes[0].nodeValue.trim();
                                // --CSS values need to be adjusted---
                            if(a.length > 3){  
                                var sheet = window.document.styleSheets[0];
                                sheet.insertRule('#from-dollar {left: -5px !important; }', 0);
                                sheet.insertRule('#price {left: -10px; font-size:60px !important; }', 0);
                                sheet.insertRule('#price {padding-top: 4px !important; }', 0);
                                sheet.insertRule('#asterisk {left: 124px !important; }', 0);
                                sheet.insertRule('#asterisk {top: -60px !important; }', 0);
                                sheet.insertRule('#return {right: -1px !important; }', 0);
                             };
                            var o = n.getElementsByTagName("deadline")[x].childNodes[0].nodeValue.trim();
                        }
                    }
                e.innerHTML = a, t.innerHTML = "*Includes roundtrip, taxes and fees. Book by " + o + ".";
            } else console.log("fail");
            anim.init()
        }, 
        {
            init: o
        }
    }(),
    twn = function() {
        var e, t, n, a = ["0", "Moz", "Webkit"],
            o = {},
            i = "cubic-bezier",
            s = "ease-in",
            l = "ease-out",
            r = "ease-in-out",
            d = {},
            u = "quad-",
            c = "cubic-",
            m = "quart-",
            p = "quint-",
            f = "sine-",
            y = "expo-",
            w = "circ-",
            g = "back-",
            x = 0,
            C = "Top",
            q = "Bottom",
            v = "Left",
            h = "Right",
            T = "margin",
            E = "padding",
            P = ["top", "left", "width", "height", "x", "y", "opacity", "backgroundColor", "rotation", "scaleX", "scaleY", T + C, T + h, T + q, T + v, E + C, E + h, E + q, E + v, "delay", "ease", "onComplete", "onCompleteParams"];
        return d.linear = "linear", d[s] = s, d[l] = l, d[r] = r, d[u + s] = i + "(0.550, 0.085, 0.680, 0.530)", d[c + s] = i + "(0.550, 0.055, 0.675, 0.190)", d[m + s] = i + "(0.895, 0.030, 0.685, 0.220)", d[p + s] = i + "(0.755, 0.050, 0.855, 0.060)", d[f + s] = i + "(0.470, 0, 0.745, 0.715)", d[y + s] = i + "(0.950, 0.050, 0.795, 0.035)", d[w + s] = i + "(0.600, 0.040, 0.980, 0.335)", d[g + s] = i + "(0.600, -0.280, 0.735, 0.045)", d[u + l] = i + "(0.250, 0.460, 0.450, 0.940)", d[c + l] = i + "(0.215, 0.610, 0.355, 1)", d[m + l] = i + "(0.165, 0.840, 0.440, 1)", d[p + l] = i + "(0.230, 1, 0.320, 1)", d[f + l] = i + "(0.390, 0.575, 0.565, 1)", d[y + l] = i + "(0.190, 1, 0.220, 1)", d[w + l] = i + "(0.075, 0.820, 0.165, 1)", d[g + l] = i + "(0.175, 0.885, 0.320, 1.275)", d[u + r] = i + "(0.455, 0.030, 0.515, 0.955)", d[c + r] = i + "(0.645, 0.045, 0.355, 1)", d[m + r] = i + "(0.770, 0, 0.175, 1)", d[p + r] = i + "(0.860, 0, 0.070, 1)", d[f + r] = i + "(0.445, 0.050, 0.550, 0.950)", d[y + r] = i + "(1, 0, 0, 1)", d[w + r] = i + "(0.785, 0.135, 0.150, 0.860)", d[g + r] = i + "(0.680, -0.550, 0.265, 1.550)", e = function(e, n, o) {
            var i, s = a.length,
                l = o.delay || 0,
                r = o.ease || "linear",
                u = n ? "all " + n + "s " + (d[r] || r) + " " + l + "s" : "none";
            for (i = function() {
                    e.removeEventListener("webkitTransitionEnd", i), e.removeEventListener("transitionend", i), setTimeout(function() {
                        o.onComplete.apply(o.scope, o.onCompleteParams)
                    }, 0)
                }, e.removeEventListener("webkitTransitionEnd", i), e.removeEventListener("transitionend", i), o.onComplete && (e.addEventListener("webkitTransitionEnd", i), e.addEventListener("transitionend", i)); s--;) e.style[a[s] + "Transition"] = u;
            e.style.transition = u, t(e, o)
        }, 
        t = function(e, t) {
            for (var n, a = P.length, i = "", s = "", l = ""; a--;) {
                var r = P[a];
                t.hasOwnProperty(r) && (/delay|ease|onComplete|onCompleteParams|scope/.test(r) || (/left|width|top|height|margin|padding/.test(r) ? e.style[r] = t[r] + "px" : /^x|^y|rotation|scaleX|scaleY/.test(r) ? (n = !0, o[e.id] || (o[e.id || (e.id = "twn" + x++)] = {
                    id: e.id,
                    x: 0,
                    y: 0,
                    rotation: 0,
                    scaleX: 1,
                    scaleY: 1,
                    xOffset: e.offsetLeft,
                    yOffset: e.offsetTop,
                    rotationOffset: 0,
                    scaleXOffset: 0,
                    scaleYOffset: 0
                }), o[e.id][r] = t[r] - o[e.id][r + "Offset"]) : e.style[r] = t[r]))
            }
            n && (i = " translate(" + o[e.id].x + "px, " + o[e.id].y + "px)", l = " scale(" + o[e.id].scaleX + ", " + o[e.id].scaleY + ")", s = " rotate(" + o[e.id].rotation + "deg)", e.style.WebkitTransform = e.style.transform = i + l + s)
        }, 
        n = function(e, t) {
            setTimeout(e, 1e3 * t)
        }, {
            to: e,
            set: t,
            delay: n
        }
    }();