import {
  u as et,
  v as Wt,
  w as Ie,
  T as xt,
  a as Oe,
  s as uo,
  b as Kl,
  c as Bu,
  r as hi,
} from "./scrollToSection.Db-gEvAU.js";
import {
  i as Mr,
  r as E,
  c as u,
  _ as re,
  d as ie,
  o as Me,
  a as Ot,
  b as c,
  e as h,
  f as P,
  t as ee,
  g as M,
  n as At,
  h as X,
  j as Be,
  F as ve,
  k as Te,
  l as ze,
  w as de,
  m as Le,
  p as He,
  q as K,
  s as Ee,
  u as je,
  v as Xe,
  x as ae,
  y as he,
  z as hn,
  A as xe,
  B as Or,
  C as Ql,
  D as Vt,
  E as Ut,
  G as qn,
  H as Xl,
  I as ba,
  J as Ct,
  K as L,
  L as Zl,
  M as Ua,
  N as Lu,
  O as xu,
  P as Jl,
  Q as es,
  R as ar,
  S as Wa,
  T as Mt,
  U as fi,
  V as Ru,
  W as Nu,
  X as Hu,
} from "./_plugin-vue_export-helper.CANbEX6B.js";
import {
  S as Da,
  L as nr,
  M as or,
  a as Vu,
  B as pa,
  D as Uu,
  b as ya,
  c as fn,
  E as la,
  d as xa,
  e as ts,
  f as as,
  Z as Yu,
  g as $u,
  h as Fu,
  P as ns,
  i as Wu,
  A as Gu,
  j as qu,
  k as ju,
  l as Ar,
  I as bi,
  m as Do,
  n as zu,
  o as Ku,
  p as Qu,
  q as yi,
  r as Nn,
  s as Hn,
  t as Mo,
  u as os,
  v as Xu,
  w as Zu,
  x as Ju,
  y as ec,
  z as _i,
  C as rs,
  F as wi,
  G as tc,
  H as ac,
  J as nc,
  K as rr,
  N as is,
  O as oc,
  Q as rc,
  R as ic,
  T as ki,
  U as lc,
  V as Mn,
  W as Si,
  X as Ti,
  Y as sc,
  _ as uc,
  $ as cc,
  a0 as dc,
  a1 as ls,
  a2 as lo,
  a3 as mc,
  a4 as gc,
  a5 as vc,
  a6 as pc,
  a7 as hc,
  a8 as Ci,
  a9 as fc,
} from "./index.CP7zNiCq.js";
/* empty css                        */ import {
  g as ss,
  a as bc,
  s as Pi,
  b as yc,
  i as _c,
  c as ln,
  d as wc,
} from "./addDocumentElements.Bl2gEXqr.js";
/*!
 * vue-router v4.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ var Ii;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Ii || (Ii = {}));
var Ei;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Ei || (Ei = {}));
var Di;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Di || (Di = {}));
const kc = Symbol(""),
  Sc = Symbol("");
function Tc() {
  return Mr(kc);
}
function us() {
  return Mr(Sc);
}
const Mi = E(null),
  ot = E({}),
  Oi = E(!1),
  nt = () => {
    const e = ($) => {
        Mi.value = $;
      },
      n = ($) => {
        ot.value = $;
      },
      a = ($) => {
        Oi.value = $;
      },
      t = u(() => ot.value.pages || {}),
      o = u(() => ot.value.blocks),
      i = u(() => ot.value.elements),
      r = u(() => ot.value.nav),
      l = u(() => ot.value.homePageId),
      s = u(() => ot.value.isNavHidden),
      d = u(() => ot.value.cookieBannerAcceptText),
      g = u(() => ot.value.cookieBannerDisclaimer),
      m = u(() => ot.value.cookieBannerDeclineText),
      v = u(() => ot.value.blogReadingTimeText),
      p = u(() => ot.value.meta),
      b = u(() => ot.value.metaTitle),
      _ = u(() => ot.value.forms),
      T = u(() => ot.value.styles),
      y = u(() => ot.value.domain),
      w = u(() => ot.value.siteId),
      O = u(() => ot.value.ecommerceShoppingCart),
      C = u(() => ot.value.blogCategories),
      x = u(() => ot.value.languageSwitcherLanguages),
      F = u(() => ot.value.currentPageId),
      Y = u(() => t.value[F.value]),
      j = u(() => ot.value.currentLocale),
      q = u(() => ot.value.languageKeys),
      S = ({ pageId: $ }) => {
        if (!t.value[$]) return null;
        const z = t.value[$].slug;
        return [Da, p.value.defaultLocale].includes(j.value)
          ? l.value === $
            ? "/"
            : `/${z}`
          : l.value === $
          ? `/${j.value}`
          : `/${j.value}/${z}`;
      };
    return {
      website: Mi,
      pageData: ot,
      pages: t,
      blocks: o,
      elements: i,
      nav: r,
      homePageId: l,
      isNavHidden: s,
      cookieBannerAcceptText: d,
      cookieBannerDisclaimer: g,
      cookieBannerDeclineText: m,
      blogReadingTimeText: v,
      meta: p,
      metaTitle: b,
      forms: _,
      styles: T,
      domain: y,
      siteId: w,
      ecommerceShoppingCart: O,
      blogCategories: C,
      languageSwitcherLanguages: x,
      currentPageId: F,
      currentLocale: j,
      languageKeys: q,
      currentPageData: Y,
      setWebsite: e,
      setPageData: n,
      getPagePathFromId: S,
      getButtonHref: ({
        isFormButton: $,
        linkedPageId: z,
        linkType: N,
        href: I,
      }) => ($ ? null : I || (N === nr.PAGE && z ? S({ pageId: z }) : I)),
      setIsSiteEngine: a,
      isSiteEngine: Oi,
    };
  },
  Ai = E(!0),
  cs = () => {
    const e = (n) => {
      Ai.value = n;
    };
    return { hasUserScrolled: u(() => !Ai.value), setIntersectingState: e };
  },
  Cc = ie({
    __name: "StickyTrigger",
    setup(e, { expose: n }) {
      n();
      const a = { threshold: 1 },
        t = E(null),
        o = E(null),
        { setIntersectingState: i } = cs();
      Me(() => {
        (o.value = new IntersectionObserver(([{ isIntersecting: l }]) => {
          i(l);
        }, a)),
          t.value && o.value.observe(t.value);
      }),
        Ot(() => {
          o.value?.disconnect();
        });
      const r = {
        OBSERVER_OPTIONS: a,
        stickyTriggerRef: t,
        observer: o,
        setIntersectingState: i,
      };
      return (
        Object.defineProperty(r, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  }),
  Pc = { ref: "stickyTriggerRef", class: "sticky-trigger" };
function Ic(e, n, a, t, o, i) {
  return c(), h("div", Pc, null, 512);
}
const Ec = re(Cc, [["render", Ic]]),
  Bi = 1600,
  Li = 1224,
  xi = 12,
  Ri = 1224,
  _a = 1920,
  Dc = (e, n) => {
    const [a, t, o, i] = n.split("/").map(Number.parseFloat),
      { styles: r } = e.settings ?? {},
      l = Number.parseFloat(r?.["row-size"]) ?? 48,
      s = Number.parseFloat(r?.["column-gap"]) ?? 24,
      d = Number.parseFloat(r?.["row-gap"]) ?? 16,
      g = (Li - (xi - 1) * s) / xi,
      m = (_a - Bi) / 2 + s,
      v = (Bi - Li) / 2 - s;
    let p = _a;
    const b = o - a,
      _ = b * l + (b - 1) * d;
    return (
      t !== 1 && (p -= m),
      i !== 17 && (p -= m),
      t > 2 && (p -= v),
      i < 16 && (p -= v),
      t > 3 && (p -= (t - 3) * (g + s)),
      i < 15 && (p -= (15 - i) * (g + s)),
      i - t === 1 && (p = g),
      { width: p, height: _ }
    );
  },
  Ni = (e) => Object.prototype.toString.call(e) === "[object Object]",
  sn = (e) => {
    const n = e.split(" "),
      a = n.length;
    if (a < 1 || a > 4) throw new Error(`Cannot parse ${a} sides`);
    return ((o, i = o, r = o, l = i) => ({
      top: o,
      right: i,
      bottom: r,
      left: l,
    }))(...n);
  },
  Mc = ["padding", "m-padding", "block-padding"],
  Oc = ["border-radius"],
  Gt = (e, n = "") =>
    Ni(e)
      ? Object.entries(e).reduce((a, [t, o]) => {
          const i = n ? `${n}-${t}` : `--${t}`;
          if (Ni(o)) return { ...a, ...Gt(o, i) };
          const r = Mc.includes(t)
            ? Object.entries(sn(o)).reduce(
                (l, [s, d]) => ({ ...l, [`${i}-${s}`]: d, [i]: o }),
                {}
              )
            : { [i]: o };
          return { ...a, ...(Oc.includes(t) ? { [i]: `${o}px` } : r) };
        }, {})
      : {},
  ds = (e, n, a) =>
    !e || !n
      ? null
      : e === "assets"
      ? `https://assets.zyrosite.com/${a}/${n}`
      : e === "unsplash"
      ? `https://images.unsplash.com/${n}`
      : n,
  Ac = /^[\p{L}\p{N}+._-]{1,80}@[\p{L}\p{N}.-]{1,80}\.[A-Za-z]{1,15}$/u,
  Bc = /^\+*\({0,1}\d{1,4}\){0,1}[\d./s-]*$/,
  Lc = /^\d+$/,
  xc = (e) =>
    typeof e != "string" ? "" : e.charAt(0).toUpperCase() + e.slice(1),
  on = (e) => {
    const n = e.split(/[/\\]/).pop(),
      a = n.lastIndexOf(".");
    return n === "" || a < 1 ? "" : n.slice(a + 1).toLowerCase();
  },
  Rc = [
    Vu,
    "https://assets.zyrosite.space",
    "https://assets.zyrosite.com",
    "https://cdn.zyrosite.com",
  ],
  Nc = "https://images.unsplash.com",
  Hc = "cdn-cgi/image",
  Br = [{ width: 360, height: 640 }],
  Lr = [1, 2, 2.625, 3],
  Vc = [{ width: 1440 }, { width: 1920 }],
  xr = [1, 2],
  Rr = 16,
  Vn = (e, n = Rr) =>
    [`(min-width: ${or}px) ${e}px`, `calc(100vw - ${n * 2}px)`].join(", "),
  Uc = (e, n, a = {}) => {
    const t = a.fit || (a.shouldContain ? "scale-down" : "crop"),
      o = [
        "format=auto",
        a.width && `w=${a.width}`,
        a.height && `h=${a.height}`,
        `fit=${t}`,
        a.isLossless && "q=100",
        a.format && `f=${a.format}`,
        a.trim && `trim=${a.trim}`,
        a.quality && !a.isLossless && `q=${a.quality}`,
      ]
        .filter((r) => !!r)
        .join(",");
    let [, i] = n.split(e);
    for (; i.startsWith("/"); ) i = i.replace("/", "");
    return `${e}/${Hc}/${o}/${i}`;
  },
  Yc = (e, n = {}) => {
    const a = new URL(e);
    return (
      a.searchParams.set("auto", n.format || "format"),
      a.searchParams.set("fit", n.shouldContain ? "clip" : "crop"),
      n.width && a.searchParams.set("w", n.width),
      n.height && a.searchParams.set("h", n.height),
      n.isLossless && a.searchParams.set("q", 100),
      a.href
    );
  },
  ut = (e, n, a, t = {}) => {
    const o = ds(e, n, a);
    if (!o) return null;
    if (on(o) === "svg" || on(o) === "ico" || on(o) === "gif") return o;
    const i = Rc.find((r) => o.includes(r));
    return i ? Uc(i, o, t) : o.includes(Nc) ? Yc(o, t) : o;
  },
  wa = (e, n, a, t = {}) => {
    const o = Vc.map((l) =>
      xr.map((s) => {
        const d = Math.round(l.width * s);
        return `${ut(e, n, a, { ...t, width: d })} ${d}w`;
      })
    ).join(",");
    return `${Br.map((l) =>
      Lr.map((s) => {
        const d = Math.round(l.width * s),
          g = { ...t, width: d };
        return (
          t.isMobileFullScreen && (g.height = Math.round(l.height * s)),
          `${ut(e, n, a, g)} ${d}w`
        );
      })
    ).join(",")},${o}`;
  },
  Ra = (e, n, a, t = {}) => {
    if (!t.width) return wa(e, n, a, t);
    const o = xr
        .map((s) => {
          const d = Math.round(t.width * s),
            g = Math.round(t.height * s);
          return `${ut(e, n, a, { ...t, width: d, height: g })} ${d}w`;
        })
        .join(","),
      i = (t.mobilePadding ?? Rr) * 2;
    return `${Br.map((s) => {
      const d = s.width - i;
      return Lr.map((g) => {
        const m = t.width / t.height,
          v = Math.round(d * g),
          p = Math.round(v / m);
        return `${ut(e, n, a, { ...t, width: v, height: p })} ${v}w`;
      }).join(",");
    }).join(",")},${o}`;
  },
  $c = (e, n, a, t = {}) => {
    if (!t.width) return wa(e, n, a, t);
    const o = xr
        .map((l) => {
          const s = Math.round(t.width * l),
            d = Math.round(t.height * l);
          return `${ut(e, n, a, { ...t, width: s, height: d })} ${s}w`;
        })
        .join(","),
      i = (t.mobilePadding ?? Rr) * 2;
    return `${Br.map((l) => {
      const s = Math.round(
        (l.width - i + t.columnGap) / t.columnCount - t.columnGap
      );
      return Lr.map((d) => {
        const g = Math.round(s * d),
          m = Math.round(s * d);
        return `${ut(e, n, a, {
          ...t,
          width: m,
          height: !t.isMasonryLayout && m,
        })} ${g}w`;
      }).join(",");
    }).join(",")},${o}`;
  },
  Fc = () => {
    const { meta: e } = nt(),
      n = E("z-cookies-consent"),
      a = E("1"),
      t = u(() => !!a.value),
      o = u(() => a.value === "1"),
      i = u(() => a.value !== "0");
    return (
      Me(() => {
        const s = ss(window.location.hostname);
        (n.value = `z-cookies-consent-${s}`), (a.value = bc(n.value));
      }),
      {
        acceptCookies: () => {
          Pi(n.value, 1, 365),
            (a.value = "1"),
            yc({ siteMeta: e.value, areCookiesAllowed: i.value });
        },
        declineCookies: () => {
          Pi(n.value, 0, 1), (a.value = "0");
        },
        hasUserConsentedCookieBanner: t,
        hasUserAcceptedCookies: o,
        areCookiesAllowed: i,
      }
    );
  },
  Wc = ie({
    __name: "CookieBanner",
    props: {
      disclaimer: { type: String, required: !0 },
      acceptText: { type: String, default: "Accept" },
      declineText: { type: String, default: "Decline" },
      siteMeta: { type: Object, required: !0 },
    },
    setup(e, { expose: n }) {
      n();
      const {
          acceptCookies: a,
          declineCookies: t,
          hasUserConsentedCookieBanner: o,
        } = Fc(),
        i = {
          acceptCookies: a,
          declineCookies: t,
          hasUserConsentedCookieBanner: o,
          get isAppPrerendering() {
            return _c;
          },
        };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  Gc = { key: 0, class: "cookie-banner" },
  qc = { class: "cookie-banner__frame" },
  jc = { class: "cookie-banner__text" },
  zc = { class: "cookie-banner__controls" };
function Kc(e, n, a, t, o, i) {
  return !t.isAppPrerendering && !t.hasUserConsentedCookieBanner
    ? (c(),
      h("div", Gc, [
        P("div", qc, [
          P("p", jc, ee(a.disclaimer), 1),
          P("div", zc, [
            P(
              "button",
              {
                class: "control-button primary",
                onClick:
                  n[0] ||
                  (n[0] = (...r) => t.acceptCookies && t.acceptCookies(...r)),
              },
              ee(a.acceptText),
              1
            ),
            P(
              "button",
              {
                class: "control-button",
                onClick:
                  n[1] ||
                  (n[1] = (...r) => t.declineCookies && t.declineCookies(...r)),
              },
              ee(a.declineText),
              1
            ),
          ]),
        ]),
      ]))
    : M("", !0);
}
const Qc = re(Wc, [["render", Kc]]),
  Xc = (e) => {
    const n = e.colors.map((a) => a.value).join(", ");
    return `linear-gradient(${e.angle}deg, ${n})`;
  },
  Zc = ie({
    __name: "BlockBackground",
    props: {
      type: { default: pa.COLOR },
      alt: {},
      overlayOpacity: {},
      src: {},
      srcset: {},
      isEager: { type: Boolean },
      gradient: {},
      color: {},
      isFixed: { type: Boolean },
      isInPreviewMode: { type: Boolean, default: !1 },
      isMobile: { type: Boolean, default: !1 },
      isOpacityDisabled: { type: Boolean, default: !1 },
      videoPoster: {},
    },
    setup(e, { expose: n }) {
      n(),
        et((p) => ({
          "595a5996": i.value,
          "6f6ae15c": r.value.xStart,
          "6c01301e": r.value.yStart,
          "70174fcb": r.value.xEnd,
          fd391e70: s.value,
        }));
      const a = e,
        t = u(() => a.type === pa.VIDEO),
        o = u(() => a.type === pa.IMAGE),
        i = u(() =>
          a.type === pa.GRADIENT && a.gradient
            ? Xc(a.gradient)
            : a.isOpacityDisabled
            ? a.type === pa.COLOR
              ? a.color
              : "rgb(255, 255, 255)"
            : a.type === pa.COLOR
            ? a.color
            : "transparent"
        ),
        r = u(() => {
          const b = (((a.gradient?.angle || 0) + 90) * Math.PI) / 180,
            _ = `${Math.round(50 - 50 * Math.cos(b))}%`,
            T = `${Math.round(50 - 50 * Math.sin(b))}%`,
            y = `${Math.round(50 + 50 * Math.cos(b))}%`,
            w = `${Math.round(50 + 50 * Math.sin(b))}%`;
          return { xStart: _, yStart: T, xEnd: y, yEnd: w };
        }),
        l = u(
          () =>
            [pa.IMAGE, pa.VIDEO].includes(a.type) &&
            !a.isOpacityDisabled &&
            a.overlayOpacity
        ),
        s = u(() => {
          const p = a.overlayOpacity ? a.overlayOpacity : 0;
          return l.value && !a.isOpacityDisabled && p;
        }),
        d = E(null),
        g = E(Mr("mobileFrame")),
        m = u(() => {
          if (a.isInPreviewMode && a.isMobile && a.isFixed && g.value) {
            const p = g.value.getBoundingClientRect();
            return {
              height: `${p.height}px`,
              width: `${p.width}px`,
              top: `${p.top}px`,
              left: "50%",
              transform: "translate(-50%, 0)",
            };
          }
          return {};
        });
      Me(() => {
        At(() => {
          d.value?.classList.add("transition-with-bg");
        });
      });
      const v = {
        props: a,
        isVideoBackground: t,
        isImageBackground: o,
        backgroundColor: i,
        gradientBackgroundPosition: r,
        isBackgroundOverlayShown: l,
        backgroundOverlayOpacity: s,
        blockBackgroundRef: d,
        mobileFrame: g,
        mobilePreviewStyles: m,
        get BACKGROUND_TYPES() {
          return pa;
        },
      };
      return (
        Object.defineProperty(v, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        v
      );
    },
  }),
  Jc = ["alt", "src", "srcset", "loading"],
  ed = ["src", "poster"];
function td(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      {
        ref: "blockBackgroundRef",
        class: X([
          "block-background",
          {
            "block-background--fixed": a.isFixed,
            "block-background--animated-gradient":
              a.type === t.BACKGROUND_TYPES.GRADIENT && a.gradient?.isAnimated,
          },
        ]),
      },
      [
        t.isImageBackground
          ? (c(),
            h(
              "img",
              {
                key: a.src,
                alt: a.alt,
                src: "/banner.png",
                width: "100vw",
                sizes: "(max-width: 500px) 800px, 100vw",
                loading: a.isEager ? "eager" : "lazy",
                class: X([
                  "block-background__image",
                  { "block-background__image--fixed": a.isFixed },
                ]),
                style: Be(t.mobilePreviewStyles),
              },
              null,
              14,
              Jc
            ))
          : M("", !0),
        t.isVideoBackground
          ? (c(),
            h(
              "video",
              {
                key: a.src,
                src: a.src,
                autoplay: "",
                muted: "",
                loop: "",
                playsinline: "",
                class: X([
                  "block-background__image",
                  { "block-background__video--fixed": a.isFixed },
                ]),
                style: Be(t.mobilePreviewStyles),
                poster: a.videoPoster,
              },
              null,
              14,
              ed
            ))
          : M("", !0),
        t.isBackgroundOverlayShown
          ? (c(),
            h(
              "div",
              {
                key: 2,
                class: X([
                  "block-background__overlay",
                  { "block-background__overlay--fixed": a.isFixed },
                ]),
              },
              null,
              2
            ))
          : M("", !0),
      ],
      2
    )
  );
}
const Nr = re(Zc, [["render", td]]),
  ad = ie({
    props: {
      categories: { type: Array, default: () => [] },
      blogCategories: { type: Object, default: () => ({}) },
    },
    methods: {
      getCategoryNameById(e) {
        return this.blogCategories[e]?.name?.toUpperCase();
      },
    },
  }),
  nd = { class: "categories" },
  od = ["onClick"];
function rd(e, n, a, t, o, i) {
  return (
    c(),
    h("p", nd, [
      (c(!0),
      h(
        ve,
        null,
        Te(
          e.categories,
          (r, l) => (
            c(),
            h(
              "span",
              {
                key: r,
                class: "categories__item",
                onClick: (s) => e.$emit("filter-category", e.categories[l]),
              },
              ee(e.getCategoryNameById(r)),
              9,
              od
            )
          )
        ),
        128
      )),
    ])
  );
}
const ms = re(ad, [
    ["render", rd],
    ["__scopeId", "data-v-17a7aef3"],
  ]),
  id = ie({
    __name: "BlockBlogListItemMeta",
    props: {
      authorName: { type: String, default: "" },
      minutesAmount: { type: String, default: "0" },
      blogReadingTimeText: { type: String, default: "" },
      date: { type: String, default: "" },
      showAvatar: { type: Boolean, default: !0 },
      showName: { type: Boolean, default: !0 },
      showDate: { type: Boolean, default: !0 },
      showMinutes: { type: Boolean, default: !0 },
    },
    setup(e, { expose: n }) {
      n();
      const a = {
        get DEFAULT_MIN_READ_TEXT() {
          return Uu;
        },
      };
      return (
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  }),
  ld = { class: "blog-list-item-meta" },
  sd = { class: "font-secondary" },
  ud = { class: "blog-list-item-meta__author-name" },
  cd = { class: "blog-list-item-meta__subtitle" },
  dd = { key: 0 },
  md = { key: 1 };
function gd(e, n, a, t, o, i) {
  const r = ze("qa");
  return (
    c(),
    h("div", ld, [
      P("div", sd, [
        de((c(), h("p", ud, [Le(ee(a.authorName), 1)])), [
          [Wt, a.showName],
          [r, "blog-author"],
        ]),
        de(
          P(
            "p",
            cd,
            [
              a.showDate && a.date
                ? (c(), h("span", dd, ee(a.date), 1))
                : M("", !0),
              a.showMinutes
                ? (c(),
                  h(
                    "span",
                    md,
                    ee(
                      `${a.minutesAmount} ${
                        a.blogReadingTimeText || t.DEFAULT_MIN_READ_TEXT
                      }`
                    ),
                    1
                  ))
                : M("", !0),
            ],
            512
          ),
          [[Wt, a.showDate || a.showMinutes]]
        ),
      ]),
    ])
  );
}
const gs = re(id, [
    ["render", gd],
    ["__scopeId", "data-v-88ffe988"],
  ]),
  vs = (e) => new Date(e).toLocaleDateString("en-US"),
  Hr = ie({
    name: "BlockBlogHeader",
    components: { BlockBlogListItemMeta: gs, BlockBlogListItemCategories: ms },
    props: {
      data: { type: Object, required: !0 },
      currentBlogPage: { type: Object, required: !0 },
      blogCategories: { type: Object, default: () => ({}) },
      blogReadingTimeText: { type: [String, void 0], default: void 0 },
    },
    setup(e) {
      const a = u(() => `${e.data.settings.blogTitleFontSize || 32}px`);
      return {
        getFormattedNumericDate: vs,
        DATA_ATTRIBUTE_ANIMATION_ROLE: ya,
        DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT: fn,
        blogTitleTextSize: a,
      };
    },
    computed: {
      categories() {
        return this.currentBlogPage?.categories ?? [];
      },
      meta() {
        return this.currentBlogPage?.meta ?? {};
      },
      authorName() {
        return this.meta?.authorName;
      },
      shownItems() {
        return this.data?.settings?.shownItems ?? {};
      },
      areCategoriesShown() {
        return this.shownItems.categories && this.categories.length;
      },
    },
  }),
  Hi = () => {
    et((e) => ({ "21ab201a": e.blogTitleTextSize }));
  },
  Vi = Hr.setup;
Hr.setup = Vi ? (e, n) => (Hi(), Vi(e, n)) : Hi;
const vd = { class: "block-blog-header__content" },
  pd = { class: "font-primary block-blog-header__title" },
  hd = { key: 0, class: "font-secondary block-blog-header__description" };
function fd(e, n, a, t, o, i) {
  const r = He("BlockBlogListItemCategories"),
    l = He("BlockBlogListItemMeta"),
    s = ze("qa");
  return de(
    (c(),
    h(
      "div",
      Xe({
        class: "block-blog-header",
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]:
          e.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT,
      }),
      [
        P("div", vd, [
          de((c(), h("h1", pd, [Le(ee(e.meta.title), 1)])), [
            [s, "blog-label-posttitle"],
          ]),
          e.shownItems.description
            ? de((c(), h("p", hd, [Le(ee(e.meta.description), 1)])), [
                [s, "blog-label-postdescription"],
              ])
            : M("", !0),
          e.areCategoriesShown
            ? de(
                (c(),
                K(
                  r,
                  {
                    key: 1,
                    class: "font-secondary",
                    categories: e.categories,
                    "blog-categories": e.blogCategories,
                  },
                  null,
                  8,
                  ["categories", "blog-categories"]
                )),
                [[s, "blog-label-category"]]
              )
            : M("", !0),
          Ee(
            l,
            je(
              {
                authorName: e.authorName,
                minutesAmount: e.currentBlogPage.minutesToRead,
                date: e.getFormattedNumericDate(e.currentBlogPage.date),
                showAvatar: e.shownItems.avatar,
                showName: e.shownItems.authorFullName,
                showDate: e.shownItems.date,
                showMinutes: e.shownItems.minutesToRead,
              },
              { "blog-reading-time-text": e.blogReadingTimeText }
            ),
            null,
            16,
            ["blog-reading-time-text"]
          ),
        ]),
      ],
      16
    )),
    [[s, "blog-postinformation"]]
  );
}
const bd = re(Hr, [
    ["render", fd],
    ["__scopeId", "data-v-dfe4e670"],
  ]),
  ir = E(!1),
  Ui = E(null),
  lr = ({ blockId: e }) => ({
    isSearchOpenedInCurrentBlock: u(() => Ui.value === e && ir.value),
    toggleSearchDropdown: (t) => {
      (Ui.value = e), (ir.value = t);
    },
  }),
  On = 16,
  ga = 1224,
  ta = 360,
  ps = ta - On * 2,
  Yi = 16,
  yd = ie({
    __name: "BlockLayoutWrapper",
    props: {
      isMobileLegacy: { type: Boolean, default: !1 },
      isBlockResponsive: { type: Boolean, default: !1 },
      isForcedOnTop: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n(),
        et((s) => ({
          c467b54c: i.value,
          "2c660f9c": o.value,
          "6ced7b1e": t.value,
          "1f9bbfe2": r.value,
        }));
      const a = e,
        t = u(() =>
          a.isBlockResponsive && !a.isInPreviewMode
            ? `0 ${(On * 100) / ta}vw`
            : `0 ${On}px`
        ),
        o = u(() => `${ta}px`),
        i = u(() => `${ga}px`),
        r = u(() => `0 ${On}px`),
        l = {
          props: a,
          mobileBlockPaddingCSSVar: t,
          mobileMaxWidthCSSVar: o,
          maxWidthCSSVar: i,
          tabletBlockPaddingCSSVar: r,
        };
      return (
        Object.defineProperty(l, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        l
      );
    },
  });
function _d(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      {
        class: X([
          "block-layout",
          {
            "block-layout--legacy": a.isMobileLegacy,
            "block-layout--layout": !a.isMobileLegacy,
            "block-layout--forcedOnTop": a.isForcedOnTop,
          },
        ]),
      },
      [ae(e.$slots, "default")],
      2
    )
  );
}
const wd = re(yd, [["render", _d]]),
  $i = ({ blockElements: e, elementPositionKey: n }) =>
    e?.length ? Math.max(...e.map((a) => a[n].top + a[n].height)) : 0,
  kd = [ts, as],
  Sd = ({ lowestElementBottom: e, sectionMinHeight: n }) => {
    const t = e >= n ? 0 : n - e;
    return e ? `${t}px` : "1fr";
  },
  co = ({ blockElementsWithPosition: e }) => {
    try {
      const n = e.flatMap(({ position: t }) => [t.top, t.height + t.top]);
      return [...new Set([0, ...n])].sort((t, o) => t - o);
    } catch (n) {
      console.error(n);
    }
  },
  sr = ({
    rowTopsUniqueSorted: e,
    columnsLeftUniqueSorted: n,
    elementPosition: a,
  }) => {
    const { top: t, left: o, width: i, height: r } = a,
      l = e.indexOf(t) + 1,
      s = e.indexOf(t + r) + 1,
      d = n.indexOf(o) + 1,
      g = n.indexOf(o + i) + 1;
    return { rowStart: l, rowEnd: s, columnStart: d, columnEnd: g };
  },
  mo = ({ blockElementsWithPosition: e, blockWidth: n }) => {
    const a = e.flatMap(({ position: o }) => [o.left, o.width + o.left]);
    return [...new Set([0, ...a, n])].sort((o, i) => o - i);
  },
  Un = ({ blockElements: e, elementPositionKey: n }) =>
    e.map((a) => ({ ...a, position: a[n] })),
  Fi = ({
    blockElements: e,
    elementPositionKey: n,
    buildResponsiveGrid: a,
  }) => {
    const t = n === la ? ps : ga,
      o = Un({ blockElements: e, elementPositionKey: n });
    return mo({ blockElementsWithPosition: o, blockWidth: t })
      .map((s, d, g) => (d === 0 ? s : s - g[d - 1]))
      .filter((s) => s !== 0)
      .map((s) => (a ? `${(s / t) * 100}%` : `${s}px`))
      .join(" ");
  },
  Td = ({ gridRows: e }) => e.filter((n) => n !== 0),
  Cd = ({ gridRows: e }) => e.map((n) => `${n}px`),
  Pd = ({ gridRows: e }) => e.map((n) => `minmax(${n}px, auto)`),
  Id = ({ gridRows: e, responsiveRows: n, isMobile: a }) =>
    e.map((t, o) =>
      n.includes(o + 1) ? "auto" : `${(t * 100) / (a ? ta : ga)}vw`
    ),
  Oo = ({ gridRows: e, lastRowHeight: n }) => `${e.join(" ")} ${n}`,
  eo = ({
    blockElements: e,
    elementPositionKey: n,
    buildResponsiveGrid: a,
    responsiveRows: t,
    lowestElementBottom: o,
    sectionMinHeight: i,
  }) => {
    const r = n === la,
      l = Un({ blockElements: e, elementPositionKey: n }),
      d = co({ blockElementsWithPosition: l }).map((p, b, _) =>
        b === 0 ? p : p - _[b - 1]
      ),
      g = Sd({ lowestElementBottom: o, sectionMinHeight: i }),
      m = Td({ gridRows: d });
    if (!a) {
      const p = Cd({ gridRows: m });
      return Oo({ gridRows: p, lastRowHeight: g });
    }
    if (!t) {
      const p = Pd({ gridRows: m });
      return Oo({ gridRows: p, lastRowHeight: g });
    }
    const v = Id({ gridRows: m, responsiveRows: t, isMobile: r });
    return Oo({ gridRows: v, lastRowHeight: g });
  },
  Wi = ({ blockElements: e, elementPositionKey: n }) => {
    const a = Un({ blockElements: e, elementPositionKey: n }),
      t = co({ blockElementsWithPosition: a }),
      o = mo({ blockElementsWithPosition: a, blockWidth: n === la ? ps : ga });
    return e
      .filter((i) => !kd.includes(i.type))
      .reduce((i, r) => {
        const { rowEnd: l, rowStart: s } = sr({
            rowTopsUniqueSorted: t,
            columnsLeftUniqueSorted: o,
            elementPosition: r[n],
          }),
          d = l > s ? l - s : 1,
          g = [...new Array(d).keys()].map((m, v) => s + v);
        return i.some((m) => g.includes(m)) ? i : [...i, l - 1];
      }, []);
  },
  Ed = (e, n) => {
    const a = Un({ blockElements: e, elementPositionKey: xa }),
      t = co({ blockElementsWithPosition: a }),
      o = mo({ blockElementsWithPosition: a, blockWidth: ga }),
      i = Un({ blockElements: e, elementPositionKey: la }),
      r = co({ blockElementsWithPosition: i }),
      l = mo({ blockElementsWithPosition: i, blockWidth: ga });
    return e.map((s) => {
      const {
          rowStart: d,
          rowEnd: g,
          columnStart: m,
          columnEnd: v,
        } = sr({
          rowTopsUniqueSorted: t,
          columnsLeftUniqueSorted: o,
          elementPosition: s.desktop,
        }),
        {
          rowStart: p,
          rowEnd: b,
          columnStart: _,
          columnEnd: T,
        } = sr({
          rowTopsUniqueSorted: r,
          columnsLeftUniqueSorted: l,
          elementPosition: s.mobile,
        });
      return {
        ...s,
        settings: {
          ...s.settings,
          styles: {
            ...(s.settings?.styles || {}),
            "z-index": n.indexOf(s.elementId) + 1,
            "grid-row": `${d}/${g}`,
            "grid-column": `${m}/${v}`,
            "m-grid-row": `${p}/${b}`,
            "m-grid-column": `${_}/${T}`,
          },
        },
      };
    });
  },
  ur = ({
    blockData: e,
    siteElements: n,
    shouldBuildResponsive: a = !0,
  } = {}) => {
    const t = E(a),
      o = u(() =>
        e.value.components.map((C) => ({ ...n.value[C], elementId: C }))
      ),
      i = u(() =>
        o?.value?.length
          ? $i({ blockElements: o.value, elementPositionKey: la })
          : null
      ),
      r = u(() =>
        o?.value?.length
          ? $i({ blockElements: o.value, elementPositionKey: xa })
          : null
      ),
      l = u(() =>
        e.value.mobile?.minHeight && i.value
          ? "auto"
          : `${e.value.mobile?.minHeight || Yi}px`
      ),
      s = u(() =>
        e.value.desktop?.minHeight && r.value
          ? "auto"
          : `${e.value.desktop?.minHeight}px`
      ),
      d = u(() => e.value.components.some((C) => !n.value[C].mobile)),
      g = u(() =>
        eo({
          blockElements: o.value,
          elementPositionKey: xa,
          buildResponsiveGrid: t.value,
        })
      ),
      m = u(() =>
        Fi({
          blockElements: o.value,
          elementPositionKey: xa,
          buildResponsiveGrid: t.value,
        })
      ),
      v = u(() =>
        Fi({
          blockElements: o.value,
          elementPositionKey: la,
          buildResponsiveGrid: t.value,
        })
      ),
      p = u(() => Wi({ blockElements: o.value, elementPositionKey: la })),
      b = u(() =>
        eo({
          blockElements: o.value,
          elementPositionKey: la,
          buildResponsiveGrid: t.value,
          responsiveRows: p.value,
          lowestElementBottom: i.value,
          sectionMinHeight: e.value.mobile?.minHeight,
        })
      ),
      _ = u(() =>
        eo({
          blockElements: o.value,
          elementPositionKey: la,
          buildResponsiveGrid: t.value,
        })
      ),
      T = u(() => Wi({ blockElements: o.value, elementPositionKey: xa })),
      y = u(() =>
        eo({
          blockElements: o.value,
          elementPositionKey: xa,
          buildResponsiveGrid: t.value,
          responsiveRows: T.value,
          lowestElementBottom: r.value,
          sectionMinHeight: e.value.desktop?.minHeight,
        })
      ),
      w = u(() => Ed(o.value, e.value.zindexes)),
      O = u(() => ({
        "--m-grid-template-rows": b.value,
        "--t-grid-template-rows": _.value,
        "--small-desktop-grid-template-rows": y.value,
        "--grid-template-rows": g.value,
        "--m-grid-template-columns": v.value,
        "--grid-template-columns": m.value,
        "--m-block-min-height": l.value,
        "--t-block-min-height": `${e.value.mobile?.minHeight || Yi}px`,
        "--small-desktop-block-min-height": s.value,
        "--block-min-height": `${e.value.desktop.minHeight}px`,
      }));
    return {
      blockElements: o,
      layoutElements: w,
      buildResponsiveGrid: t,
      layoutCSSVars: O,
      isMobileLegacy: d,
    };
  },
  Dd = ie({
    name: "LayoutElementWrapper",
    props: {
      elementData: { type: Object, required: !0 },
      isForcedOnTop: { type: Boolean, default: !1 },
      isMobileLegacy: { type: Boolean, default: !1 },
      isMobileView: { type: Boolean, default: !1 },
    },
    computed: {
      settings() {
        return this.elementData.settings;
      },
      styles() {
        return this.settings.styles;
      },
      innerBackgroundValue() {
        const { innerBackground: e } = this.elementData;
        if (!e) return {};
        const n = e[e.current];
        return e.current !== "image"
          ? { "--gridItemInnerBackground": n }
          : {
              "--gridItemInnerBackground": `url(${n})`,
              "--gridItemInnerBackgroundOverlayOpacity":
                "overlay-opacity" in e ? e["overlay-opacity"] : null,
            };
      },
      isHiddenDesktop() {
        return this.elementData.desktop.isHidden;
      },
      isHiddenMobile() {
        return this.elementData.mobile.isHidden;
      },
      computedStyles() {
        return {
          ...Gt(this.styles),
          ...this.innerBackgroundValue,
          ...(this.isHiddenDesktop &&
            !this.isMobileView && { "--hidden-element-z-index": 0 }),
          ...(this.isHiddenMobile &&
            this.isMobileView && { "--m-hidden-element-z-index": 0 }),
          ...(this.isForcedOnTop && { "--z-index": Yu }),
        };
      },
    },
  });
function Md(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      {
        class: X([
          "layout-element",
          {
            "layout-element--legacy": e.isMobileLegacy,
            "layout-element--layout": !e.isMobileLegacy,
          },
        ]),
        style: Be(e.computedStyles),
      },
      [ae(e.$slots, "default")],
      6
    )
  );
}
const Od = re(Dd, [["render", Md]]),
  Ad = ie({
    __name: "GridButton",
    props: {
      tagName: { default: "a" },
      href: { default: null },
      target: { default: null },
      rel: { default: null },
      type: { default: "primary" },
      buttonType: { default: null },
      content: { default: "" },
      isDisabled: { type: Boolean, default: !1 },
      isLoading: { type: Boolean, default: !1 },
      fontSizeMobile: { default: null },
      fontSizeDesktop: { default: null },
      fontFamily: { default: null },
      fontWeight: { default: null },
      borderWidth: { default: null },
      borderRadius: { default: null },
      backgroundColor: { default: null },
      fontColor: { default: null },
      borderColor: { default: null },
      backgroundColorHover: { default: null },
      fontColorHover: { default: null },
      borderColorHover: { default: null },
      mobileElementWidth: { default: 0 },
      mobileElementHeight: { default: 0 },
      isInBuilder: { type: Boolean, default: !1 },
    },
    emits: ["click", "drag", "dragstart"],
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = u(() => `${(a.mobileElementWidth * 100) / ta}vw`),
        o = u(() => `${(a.mobileElementHeight * 100) / ta}vw`),
        i = u(() => ({
          "--font-size-mobile": a.fontSizeMobile
            ? `${a.fontSizeMobile}px`
            : null,
          "--font-size-desktop": a.fontSizeDesktop
            ? `${a.fontSizeDesktop}px`
            : null,
          "--font-family": a.fontFamily,
          "--font-weight": a.fontWeight,
          "--border-radius":
            a.borderRadius === 0 || a.borderRadius
              ? `${a.borderRadius}px`
              : null,
          "--border-width":
            a.borderWidth === 0 || a.borderWidth ? `${a.borderWidth}px` : "0px",
          "--background-color": a.backgroundColor,
          "--font-color": a.fontColor,
          "--border-color": a.borderColor || "rgb(26, 26, 26)",
          "--background-color-hover": a.backgroundColorHover,
          "--font-color-hover": a.fontColorHover,
          "--border-color-hover": a.borderColorHover,
          "--m-height": a.isInBuilder ? "100%" : o.value,
          "--m-width": a.isInBuilder ? "100%" : t.value,
        })),
        r = u(() => ({
          "grid-button--empty": !a.content,
          [`grid-button--${a.type}`]: a.type,
          loading: a.isLoading,
        })),
        l = {
          props: a,
          mobileWidthCSSVar: t,
          mobileHeightCSSVar: o,
          buttonCSSVars: i,
          computedClass: r,
        };
      return (
        Object.defineProperty(l, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        l
      );
    },
  });
function Bd(e, n, a, t, o, i) {
  return (
    c(),
    K(
      hn(a.tagName),
      {
        type: a.buttonType,
        name: a.buttonType,
        href: a.href,
        disabled: a.isDisabled,
        target: a.target,
        rel: a.rel,
        class: X(["grid-button", t.computedClass]),
        "aria-hidden": a.isLoading,
        style: Be(t.buttonCSSVars),
        onClick: n[0] || (n[0] = (r) => e.$emit("click", r)),
        onDrag: n[1] || (n[1] = (r) => e.$emit("drag", r)),
        onDragstart: n[2] || (n[2] = (r) => e.$emit("dragstart", r)),
      },
      { default: he(() => [Le(ee(a.content), 1)]), _: 1 },
      40,
      [
        "type",
        "name",
        "href",
        "disabled",
        "target",
        "rel",
        "class",
        "aria-hidden",
        "style",
      ]
    )
  );
}
const Ga = re(Ad, [
    ["render", Bd],
    ["__scopeId", "data-v-4a176f12"],
  ]),
  Yn = (e, { href: n } = {}) => ({
    href: n,
    type: u(() => e.data.settings?.type),
    fontSizeMobile: u(() => e.data.mobile?.fontSize),
    fontSizeDesktop: u(() => e.data.desktop?.fontSize),
    fontFamily: u(() => e.data.fontFamily),
    fontWeight: u(() => e.data.fontWeight),
    borderWidth: u(() => e.data.borderWidth),
    borderRadius: u(() => e.data.borderRadius),
    backgroundColor: u(() => e.data.backgroundColor),
    fontColor: u(() => e.data.fontColor),
    borderColor: u(() => e.data.borderColor),
    backgroundColorHover: u(() => e.data.backgroundColorHover),
    fontColorHover: u(() => e.data.fontColorHover),
    borderColorHover: u(() => e.data.borderColorHover),
    buttonType: u(() => (e.data.settings.isFormButton ? "submit" : null)),
    tagName: u(() => (e.data.settings.isFormButton ? "button" : "a")),
    target: u(() => e.data.target),
    rel: u(() => e.data.rel),
    content: u(() => e.data.content),
    mobileElementWidth: u(() => e.data.mobile.width),
    mobileElementHeight: u(() => e.data.mobile.height),
  }),
  Ld = {
    __name: "GridButtonProviderUser",
    props: {
      data: { type: Object, required: !0 },
      currentLocale: { type: String, required: !0 },
      mobileElementWidth: { type: Number, default: null },
      mobileElementHeight: { type: Number, default: null },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { getButtonHref: t } = nt(),
        {
          tagName: o,
          href: i,
          target: r,
          rel: l,
          type: s,
          buttonType: d,
          content: g,
          fontSizeMobile: m,
          fontSizeDesktop: v,
          fontFamily: p,
          fontWeight: b,
          borderWidth: _,
          borderRadius: T,
          backgroundColor: y,
          fontColor: w,
          borderColor: O,
          backgroundColorHover: C,
          fontColorHover: x,
          borderColorHover: F,
        } = Yn(a, {
          href: u(() =>
            t({
              isFormButton: a.data.settings.isFormButton,
              linkedPageId: a.data.linkedPageId,
              linkType: a.data.linkType,
              href: a.data.href,
            })
          ),
        }),
        Y = {
          props: a,
          getButtonHref: t,
          tagName: o,
          href: i,
          target: r,
          rel: l,
          type: s,
          buttonType: d,
          content: g,
          fontSizeMobile: m,
          fontSizeDesktop: v,
          fontFamily: p,
          fontWeight: b,
          borderWidth: _,
          borderRadius: T,
          backgroundColor: y,
          fontColor: w,
          borderColor: O,
          backgroundColorHover: C,
          fontColorHover: x,
          borderColorHover: F,
          computed: u,
          get useSiteGlobal() {
            return nt;
          },
          GridButton: Ga,
          get useGridButton() {
            return Yn;
          },
        };
      return (
        Object.defineProperty(Y, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        Y
      );
    },
  };
function xd(e, n, a, t, o, i) {
  return (
    c(),
    K(
      t.GridButton,
      {
        "tag-name": t.tagName,
        href: t.href,
        target: t.target,
        rel: t.rel,
        type: t.type,
        "button-type": t.buttonType,
        content: t.content,
        "font-size-mobile": t.fontSizeMobile,
        "font-size-desktop": t.fontSizeDesktop,
        "font-family": t.fontFamily,
        "font-weight": t.fontWeight,
        "border-width": t.borderWidth,
        "border-radius": t.borderRadius,
        "background-color": t.backgroundColor,
        "font-color": t.fontColor,
        "border-color": t.borderColor,
        "background-color-hover": t.backgroundColorHover,
        "font-color-hover": t.fontColorHover,
        "border-color-hover": t.borderColorHover,
        "mobile-element-width": a.mobileElementWidth,
        "mobile-element-height": a.mobileElementHeight,
      },
      null,
      8,
      [
        "tag-name",
        "href",
        "target",
        "rel",
        "type",
        "button-type",
        "content",
        "font-size-mobile",
        "font-size-desktop",
        "font-family",
        "font-weight",
        "border-width",
        "border-radius",
        "background-color",
        "font-color",
        "border-color",
        "background-color-hover",
        "font-color-hover",
        "border-color-hover",
        "mobile-element-width",
        "mobile-element-height",
      ]
    )
  );
}
const Rd = re(Ld, [["render", xd]]),
  Nd = (e, n) => {
    const a = u(() => n.ecommerce?.products),
      t = u(() => e.data.settings?.productId),
      o = u(() => e.data.settings?.productVariantId);
    return { storeProducts: a, productId: t, productVariantId: o };
  },
  Ao = E(""),
  Gi = E({}),
  aa = () => ({
    openEcommerceModal: (t) => {
      Ao.value = t;
    },
    closeEcommerceModal: () => {
      Ao.value = null;
    },
    openEcommerceModalName: Ao,
    productPreviewData: Gi,
    setProductPreviewData: (t) => {
      Gi.value = t;
    },
  }),
  Vr = "https://cdn.zyrosite.com/cdn-builder-placeholders",
  ft = `${Vr}/ecommerce-product`,
  rt = `${Vr}/instagram`,
  Hd = `${Vr}/password-page`;
var tn = ((e) => (
    (e.DEFAULT = "default"),
    (e.PRICE_LTH = "priceLTH"),
    (e.PRICE_HTL = "priceHTL"),
    (e.MOST_RECENT = "mostRecent"),
    e
  ))(tn || {}),
  Ft = ((e) => (
    (e.CONTAIN = "contain"),
    (e.COVER = "cover"),
    (e.LANDSCAPE = "landscape"),
    (e.PORTRAIT = "portrait"),
    e
  ))(Ft || {}),
  Ta = ((e) => (
    (e.NO_EFFECT = "no_effect"),
    (e.ZOOM = "zoom"),
    (e.SWAP_IMAGE = "swap_image"),
    e
  ))(Ta || {});
const Qt = {
  id: -1,
  title: "Product name",
  subtitle: null,
  description: `This is a sample product description. You can use it to describe your product,		from its size, weight, and color to other characteristics like material, and so on.
		
Make sure you highlight the best qualities and the most important functions		that the product has. Make your customers want it and tell them how the product		could help make their life easier or simply more beautiful. After you have added		your product description in the store settings, it will appear here automatically`,
  images: [],
  options: [],
  product_collections: [],
  ribbon_text: null,
  site_product_selection: null,
  type: { value: "physical" },
  thumbnail: null,
  variants: [
    {
      id: "",
      manage_inventory: !1,
      prices: [
        {
          amount: 0,
          currency_code: "USD",
          sale_amount: null,
          currency: {
            code: "USD",
            decimal_digits: 2,
            template: "$$1",
            name: "US Dollar",
            symbol: "$",
            symbol_native: "$",
            name_plural: "US dollars",
            rounding: 0,
            min_amount: 0,
          },
        },
      ],
      options: [],
    },
  ],
  purchasable: !0,
  additional_info: [],
};
(({ ...Qt, images: `${ft}`, thumbnail: `${ft}` },
{ ...Qt, images: `${ft}`, thumbnail: `${ft}` }),
  { ...Qt, images: `${ft}`, thumbnail: `${ft}` },
  { ...Qt, images: `${ft}`, thumbnail: `${ft}` },
  { ...Qt, images: `${ft}`, thumbnail: `${ft}` },
  { ...Qt, images: `${ft}`, thumbnail: `${ft}` },
  { ...Qt, images: `${ft}`, thumbnail: `${ft}` },
  { ...Qt, images: `${ft}`, thumbnail: `${ft}` });
const cr = "donation",
  qt = "booking",
  dr = "hours",
  Vd = ["BlockEcommerceProduct", "BlockEcommerceProductList"],
  qi = {
    INSUFFICIENT_INVENTORY: "insufficient_inventory",
    BOOKING_UNAVAILABLE: "booking_slot_not_available",
  },
  Ud = "demo_01G0E9P2R0CFTNBWEEFCEV8EG5",
  mr = "shopping-cart-items",
  Yd = 864e5,
  hs = "site_product_selection",
  Ur = "lowest_price_first",
  an = 160,
  $d = {
    [tn.DEFAULT]: "",
    [tn.PRICE_LTH]: "order=ASC&sort_by=price",
    [tn.PRICE_HTL]: "order=DESC&sort_by=price",
    [tn.MOST_RECENT]: "order=DESC&sort_by=created_at",
  };
var An = ((e) => ((e.IMAGE = "image"), (e.VIDEO = "video"), e))(An || {});
const Ya = "https://api-ecommerce.hostinger.com/store",
  fs = async (e, n = {}) => {
    const {
        productIds: a,
        bodyProductIds: t,
        sort: o,
        offset: i,
        limit: r,
        collectionId: l,
      } = n,
      s = new URLSearchParams(o);
    a?.length > 1
      ? a?.forEach((m) => s.append("ids[]", m))
      : a?.length && s.set("ids[]", a[0]),
      typeof i == "number" && r && (s.set("offset", i), s.set("limit", r)),
      l && s.set("collection_ids[]", l);
    let d;
    return (
      t
        ? (d = await fetch(`${Ya}/${e}/products?${s.toString()}`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ids: t }),
          }))
        : (d = await fetch(`${Ya}/${e}/products?${s.toString()}`)),
      await d.json()
    );
  },
  bs = async (e, n) => {
    const a = n.map((i) => `product_ids[]=${i}`).join("&");
    return (
      await (
        await fetch(`${Ya}/${e}/variants?fields=inventory_quantity&${a}`)
      ).json()
    ).variants;
  },
  Fd = async ({
    items: e,
    successUrl: n,
    cancelUrl: a,
    checkoutUrl: t,
    locale: o,
    storeId: i,
  }) =>
    fetch(`${Ya}/${i}/checkout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "omit",
      body: JSON.stringify({
        items: e,
        successUrl: n,
        cancelUrl: a,
        checkoutUrl: t,
        locale: o,
      }),
    }).then(async (r) => {
      const l = await r.json();
      if (r.ok) return l.url;
      throw l;
    }),
  Wd = async (e, n) =>
    fetch(`${Ya}/time-slots`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "omit",
      body: JSON.stringify({
        booking_event_id: e,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        date: n,
      }),
    }).then(async (a) => {
      const t = await a.json();
      if (a.ok) return t.slots;
      throw t;
    }),
  Gd = async ({ bookingId: e, fromDate: n, toDate: a }) =>
    fetch(`${Ya}/availability`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "omit",
      body: JSON.stringify({
        booking_event_id: e,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        from_date: n,
        to_date: a,
      }),
    }).then(async (t) => {
      const o = await t.json();
      if (t.ok) return o.disabled_dates;
      throw o;
    }),
  qd = async (e) => await (await fetch(`${Ya}/${e}/collections`)).json(),
  jn = () => {
    const { openEcommerceModal: e } = aa(),
      { meta: n, ecommerceShoppingCart: a, isSiteEngine: t } = nt();
    let o = "";
    const i = E("");
    Me(() => {
      (o = n.value?.ecommerceStoreId),
        (i.value = `${window.location.origin}${window.location.pathname}`);
    });
    function r(d) {
      const g = d.some((p) => p.type.value === cr),
        m = d.some((p) => p.type.value === qt);
      let v = "";
      return (
        m ? (v = `&product=${qt}`) : g && (v = `&product=${cr}`),
        `${i.value}?open-modal=EcommerceCheckoutSuccess${v}`
      );
    }
    async function l(d) {
      const g = d.reduce(
          (p, b) =>
            p.find((T) => T.variant_id === b.variants[0].id)
              ? p.map((T) =>
                  T.variant_id === b.variants[0].id
                    ? { variant_id: T.variant_id, quantity: T.quantity + 1 }
                    : T
                )
              : [
                  ...p,
                  {
                    variant_id: b.variants[0].id,
                    quantity: 1,
                    time_slot: b.variants[0].booking_event?.time_slot,
                    time_zone: b.variants[0].booking_event?.time_zone,
                  },
                ],
          []
        ),
        m = a.value?.lang || "en";
      let v = await Fd({
        items: g,
        cancelUrl: i.value,
        successUrl: r(d),
        ...(!t.value && { checkoutUrl: `${window.location.origin}/checkout` }),
        locale: m,
        storeId: o,
      });
      return (v = new URL(v)), v.searchParams.set("lang", m), v.toString();
    }
    async function s(d) {
      if (!o) {
        e("EcommerceCheckoutFailed");
        return;
      }
      try {
        const g = await l(d);
        window.location.assign(g);
      } catch (g) {
        g.code === qi.INSUFFICIENT_INVENTORY
          ? e("EcommerceOutOfStock")
          : g.code === qi.BOOKING_UNAVAILABLE
          ? e("EcommerceBookingUnavailable")
          : e("EcommerceCheckoutFailed");
      }
    }
    return { initiateCheckout: s, storeId: o };
  },
  gr = (e) => e.ecommerceStoreId ?? e.demoEcommerceStoreId ?? Ud,
  ji = () => {
    const e = window.localStorage.getItem(mr);
    if (!e) return [];
    const n = JSON.parse(e);
    return n.payload.length
      ? Date.now() > n.expiry
        ? (window.localStorage.removeItem(mr), [])
        : n.payload
      : [];
  },
  Ka = E([]),
  Bo = E([]),
  _n = E([]),
  wn = E([]),
  zi = E(null),
  Ki = E(!1),
  Qi = E(!1),
  Xi = E({}),
  Zi = E({}),
  Ji = E(!1),
  jd = E(!1),
  na = ({ blockId: e } = { blockId: "global" }) => {
    const { meta: n, pages: a } = nt(),
      t = u(() => n.value[$u] === Fu),
      o = u(() => !!n.value?.ecommerceStoreId),
      i = u(() => Xi.value[e || ""] ?? !1),
      r = u(() => Zi.value[e || ""] ?? !1),
      l = u(() =>
        _n.value.reduce(
          (j, q) =>
            j.find((B) => B.product.variants[0].id === q.variants[0].id)
              ? j.map((B) =>
                  B.product.variants[0].id === q.variants[0].id
                    ? { ...B, quantity: B.quantity + 1 }
                    : B
                )
              : [...j, { product: q, quantity: 1 }],
          []
        )
      ),
      s = (j, q) => {
        if (_n.value.length >= an) return !1;
        const S = Ka.value.find(($) => $.id === j),
          B = S?.variants.find(($) => $.id === q);
        if (!S || !B) return !1;
        if (B.manage_inventory) {
          const z =
              l.value.find(
                (I) =>
                  I.product.id === j &&
                  I.product.variants.some((H) => H.id === B.id)
              )?.quantity || 0,
            N = wn.value.find((I) => I.id === q)?.inventory_quantity;
          return z < N;
        }
        return !0;
      },
      d = u(() => Object.values(a.value).filter((j) => j.type === ns)),
      g = (j) => {
        e && (Xi.value[e] = j);
      },
      m = (j) => {
        e && (Zi.value[e] = j);
      },
      v = (j) => {
        Ji.value = j;
      },
      p = (j) => {
        Qi.value = j;
      },
      b = (j) => {
        const q = j.reduce(
          (S, B) => {
            const $ = S.some((z) => z.id === B.id);
            return [...S, ...($ ? [] : [B])];
          },
          [...Ka.value]
        );
        Ka.value = q;
      },
      _ = (j) => {
        Bo.value = j;
      },
      T = (j) => {
        Ki.value = j;
      },
      y = (j) => {
        _n.value = j || [];
        const q = { payload: j, expiry: Date.now() + Yd };
        window.localStorage.setItem(mr, JSON.stringify(q));
      },
      w = (j) => {
        zi.value = j;
      },
      O = (j) => {
        const q = j.reduce(
          (S, B) => {
            const $ = S.some((z) => z.id === B.id);
            return [...S, ...($ ? [] : [B])];
          },
          [...wn.value]
        );
        wn.value = q;
      },
      C = ({ cartItems: j }) =>
        (j || _n.value).reduce((q, S) => {
          const B = Ka.value.find((A) => A.id === S.id),
            $ = B?.variants.find((A) => S.variants.some((G) => A.id === G.id)),
            z = q.reduce(
              (A, G) => (G.variants.some((k) => k.id === $?.id) ? A + 1 : A),
              0
            ),
            N = wn.value.find((A) => A.id === $?.id)?.inventory_quantity,
            I = !$?.manage_inventory || z < N,
            H =
              B?.type.value === qt
                ? {
                    ...S.variants[0].booking_event,
                    time_slot: S.variants[0].booking_event.time_slot,
                    date: S.variants[0].booking_event.date,
                  }
                : null;
          return B && $ && I
            ? [...q, { ...B, variants: [{ ...$, booking_event: H }] }]
            : q;
        }, []),
      x = async (j) => {
        const q = gr(n.value);
        if (!q) return;
        try {
          const B = await bs(q, j);
          O(B);
        } catch (B) {
          console.error(B);
        }
        const S = await C({ cartItems: ji() });
        y(S);
      };
    return {
      products: Ka,
      shoppingCartItems: _n,
      selectedBookingProductId: zi,
      variantsQuantity: wn,
      isShoppingCartOpen: Ki,
      isCheckoutLoading: Qi,
      isLoading: i,
      isLoaded: r,
      isProductPageLoaded: jd,
      isStoreTypeZyro: t,
      isEcommerceStoreCreated: o,
      quantifiedCartItemsList: l,
      canAddToCart: s,
      productPages: d,
      setIsLoading: g,
      setIsLoaded: m,
      setIsCheckoutLoading: p,
      setStoreProducts: b,
      setCategories: _,
      setShoppingCartOpen: T,
      setShoppingCartItems: y,
      setSelectedBookingId: w,
      setVariantsQuantity: O,
      fetchProducts: async (j) => {
        const q = gr(n.value);
        if (!q) return;
        const $ = [...ji().map((z) => z.id), ...j].filter(
          (z, N, I) => !Ka.value.some((H) => H.id === z) && I.indexOf(z) === N
        );
        if (!$.length) {
          r.value || m(!0);
          return;
        }
        m(!1), g(!0);
        try {
          const z = await fs(q, { productIds: $ }),
            N = z.products.map(({ id: I }) => I);
          b(z.products), await x(N);
        } catch (z) {
          console.error(z);
        } finally {
          g(!1), m(!0);
        }
      },
      updateVariantsQuantity: x,
      refreshCartItems: C,
      fetchCategories: async (j, q) => {
        if (!q || Bo.value.length) return [];
        try {
          return await qd(j);
        } catch (S) {
          return console.error(S), [];
        }
      },
      categories: Bo,
      setIsCategoriesLoaded: v,
      isCategoriesLoaded: Ji,
    };
  },
  zd = ie({
    name: "GridEcommerceButtonProviderUser",
    components: { GridButton: Ga },
    props: {
      data: { type: Object, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      mobileElementWidth: { type: Number, default: null },
      mobileElementHeight: { type: Number, default: null },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const { getButtonHref: n } = nt(),
        {
          canAddToCart: a,
          isShoppingCartOpen: t,
          products: o,
          shoppingCartItems: i,
          setShoppingCartOpen: r,
          setShoppingCartItems: l,
          setSelectedBookingId: s,
        } = na(),
        { initiateCheckout: d } = jn(),
        { openEcommerceModal: g } = aa(),
        {
          content: m,
          type: v,
          fontSizeMobile: p,
          fontSizeDesktop: b,
          fontFamily: _,
          fontWeight: T,
          borderRadius: y,
          backgroundColor: w,
          fontColor: O,
          borderColor: C,
          borderWidth: x,
          backgroundColorHover: F,
          fontColorHover: Y,
          borderColorHover: j,
        } = Yn(e, {
          href: u(() =>
            n({
              isFormButton: e.data.settings.isFormButton,
              linkedPageId: e.data.linkedPageId,
              linkType: e.data.linkType,
              href: e.data.href,
            })
          ),
        }),
        {
          productId: q,
          productVariantId: S,
          storeProducts: B,
        } = Nd(e, { ecommerce: { products: o.value } }),
        $ = u(() => o.value.find((N) => N.id === q.value)),
        z = u(() => !a(q.value, S.value));
      return {
        openEcommerceModal: g,
        productId: q,
        productVariantId: S,
        content: m,
        type: v,
        fontSizeMobile: p,
        fontSizeDesktop: b,
        fontFamily: _,
        fontWeight: T,
        borderRadius: y,
        borderWidth: x,
        backgroundColor: w,
        fontColor: O,
        borderColor: C,
        backgroundColorHover: F,
        fontColorHover: Y,
        borderColorHover: j,
        initiateCheckout: d,
        shoppingCartItems: i,
        storeProducts: B,
        isAddToCartDisabled: z,
        product: $,
        canAddToCart: a,
        isShoppingCartOpen: t,
        setShoppingCartOpen: r,
        setShoppingCartItems: l,
        setSelectedBookingId: s,
      };
    },
    data() {
      return { isLoading: !1 };
    },
    methods: {
      async handleClick() {
        if (this.product?.type.value === qt) {
          this.setSelectedBookingId(this.productId),
            this.openEcommerceModal("EcommerceBookingEventSelect");
          return;
        }
        if (ln() || this.isInPreviewMode) {
          this.openEcommerceModal("EcommerceMessageButtonDisabled");
          return;
        }
        const e = this.product?.variants.find(
            (a) => a.id === this.productVariantId
          ),
          n = { ...this.product, variants: [e] };
        this.isCartVisible
          ? (this.setShoppingCartItems([...this.shoppingCartItems, n]),
            this.manageCartOpenState())
          : ((this.isLoading = !0),
            await this.initiateCheckout([n]).then(() => {
              this.isLoading = !1;
            }));
      },
      manageCartOpenState() {
        this.isShoppingCartOpen || this.setShoppingCartOpen(!0);
      },
    },
  });
function Kd(e, n, a, t, o, i) {
  const r = He("GridButton"),
    l = ze("qa");
  return de(
    (c(),
    K(
      r,
      {
        "tag-name": "button",
        content: e.content,
        type: e.type,
        "is-disabled": e.isAddToCartDisabled,
        "is-loading": e.isLoading,
        "font-size-mobile": e.fontSizeMobile,
        "font-size-desktop": e.fontSizeDesktop,
        "font-family": e.fontFamily,
        "font-weight": e.fontWeight,
        "border-radius": e.borderRadius,
        "border-width": e.borderWidth,
        "background-color": e.backgroundColor,
        "font-color": e.fontColor,
        "border-color": e.borderColor,
        "background-color-hover": e.backgroundColorHover,
        "font-color-hover": e.fontColorHover,
        "border-color-hover": e.borderColorHover,
        "mobile-element-width": e.mobileElementWidth,
        "mobile-element-height": e.mobileElementHeight,
        onClick: e.handleClick,
      },
      null,
      8,
      [
        "content",
        "type",
        "is-disabled",
        "is-loading",
        "font-size-mobile",
        "font-size-desktop",
        "font-family",
        "font-weight",
        "border-radius",
        "border-width",
        "background-color",
        "font-color",
        "border-color",
        "background-color-hover",
        "font-color-hover",
        "border-color-hover",
        "mobile-element-width",
        "mobile-element-height",
        "onClick",
      ]
    )),
    [[l, "button-ecommerce-checkout"]]
  );
}
const Qd = re(zd, [["render", Kd]]),
  Xd = ie({
    __name: "GridEmbed",
    props: {
      srcdoc: { default: "" },
      shouldRender: { type: Boolean, default: !1 },
      height: { default: null },
      id: {},
    },
    emits: ["iframe-height-updated"],
    setup(e, { expose: n, emit: a }) {
      n(), et((b) => ({ "0f9b1820": g.value, "6b5ffce2": m.value }));
      const t = e,
        o = a,
        i = E(!1),
        r = E(),
        l = E(0),
        s = E(),
        d = (b) => (b ? (l.value > b ? l.value : b) : l.value),
        g = u(() => `${d(t.height)}px`),
        m = u(() => `${d(t.heightMobile)}px`),
        v = () => {
          if (i.value) return;
          i.value = !0;
          const b = s.value?.contentWindow?.document.querySelector("html");
          new ResizeObserver(([{ contentRect: T }]) => {
            requestAnimationFrame(() => {
              T.height !== l.value &&
                ((l.value = T.height), o("iframe-height-updated", l.value));
            });
          }).observe(b);
        };
      xe(
        () => t.shouldRender,
        (b) => {
          b &&
            !i.value &&
            (r.value = setInterval(() => {
              const T =
                !!(s.value?.contentWindow?.document.querySelector("body"))
                  .children.length;
              if (i.value) {
                clearInterval(r.value);
                return;
              }
              T && (v(), clearInterval(r.value));
            }, 1500));
        }
      );
      const p = {
        props: t,
        emit: o,
        isObserverRunning: i,
        observerInterval: r,
        observedHeight: l,
        gridEmbedIframeRef: s,
        getCurrentEmbedHeight: d,
        height: g,
        heightMobile: m,
        observeGridEmbed: v,
      };
      return (
        Object.defineProperty(p, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        p
      );
    },
  }),
  Zd = ["id"],
  Jd = ["srcdoc"];
function em(e, n, a, t, o, i) {
  const r = ze("qa");
  return de(
    (c(),
    h(
      "div",
      { id: a.id, class: "grid-embed" },
      [
        a.shouldRender
          ? (c(),
            h(
              "iframe",
              {
                key: 0,
                ref: "gridEmbedIframeRef",
                class: "grid-embed__iframe",
                srcdoc: a.srcdoc,
                title: "custom code element",
                onLoad: t.observeGridEmbed,
              },
              null,
              40,
              Jd
            ))
          : M("", !0),
      ],
      8,
      Zd
    )),
    [[r, "builder-gridelement-gridembed"]]
  );
}
const tm = re(Xd, [
    ["render", em],
    ["__scopeId", "data-v-be5adba7"],
  ]),
  am = `
<style>
	html {
		overflow: hidden;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
 	}

 	iframe {
 		max-width: 100%;
 	}
</style>
`,
  nm = (e) => {
    const n = document.createElement("div");
    n.innerHTML = e;
    const a = [...n.children].reduce(
      (t, o) =>
        o.tagName === "STYLE"
          ? { ...t, styles: `${t.styles} ${o.outerHTML}` }
          : o.tagName === "SCRIPT"
          ? { ...t, scripts: `${t.scripts} ${o.outerHTML}` }
          : { ...t, html: `${t.html} ${o.outerHTML}` },
      { styles: am, scripts: "", html: "" }
    );
    return `<!DOCTYPE html>
	<head>${a.styles}</head>
	<body>${a.html}${a.scripts}</body>
</html>`;
  },
  om = "500px",
  ys = (e, n = om) => {
    const a = E(!1),
      t = E(null);
    try {
      Me(() => {
        t.value = new IntersectionObserver(
          ([{ isIntersecting: i }]) => {
            i && ((a.value = !0), t.value?.disconnect());
          },
          { threshold: 0, rootMargin: n }
        );
      });
      const o = Or(() => {
        if (e.value && t.value) {
          const i = e.value.$el ?? e.value;
          t.value.observe(i), o();
        }
      });
      Ot(() => t.value?.disconnect());
    } catch (o) {
      console.error(o);
    }
    return { isObserved: a };
  },
  rm = ie({
    __name: "GridEmbedProviderUser",
    props: { data: {}, id: {} },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = E(null),
        { isObserved: o } = ys(t),
        i = E(null);
      Me(() => {
        i.value = nm(a.data.content ?? "");
      });
      const r = {
        props: a,
        gridEmbedRef: t,
        isObserved: o,
        srcdoc: i,
        GridEmbed: tm,
      };
      return (
        Object.defineProperty(r, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  });
function im(e, n, a, t, o, i) {
  return (
    c(),
    K(
      t.GridEmbed,
      {
        id: a.id,
        ref: "gridEmbedRef",
        "should-render": t.isObserved,
        srcdoc: t.srcdoc,
        height: a.data.settings.styles.height,
      },
      null,
      8,
      ["id", "should-render", "srcdoc", "height"]
    )
  );
}
const lm = re(rm, [["render", im]]),
  Lo = ({ value: e = "", validation: n, validationMessages: a }) => {
    const t = [];
    return (
      n.includes("required") && !e.replace(/ /g, "") && t.push(a.required),
      e.replace(/ /g, "") &&
        (n.includes("email") && !Ac.test(e) && t.push(a.email),
        n.includes("phone") && !Bc.test(e) && t.push(a.phone)),
      t
    );
  },
  sm = ie({
    props: {
      modelValue: { type: String, default: "" },
      label: { type: String, default: null },
      placeholder: { type: String, default: null },
      isRequired: { type: Boolean, default: !1 },
      isRequiredAsteriskVisible: { type: Boolean, default: !0 },
      isInteractive: { type: Boolean, default: !0 },
      areErrorsShown: { type: Boolean, default: !1 },
      validationErrors: { type: Array, required: !1, default: () => [] },
      theme: { type: String, required: !0 },
      tag: {
        type: String,
        default: "input",
        validator: (e) => ["textarea", "input"].includes(e),
      },
    },
    emits: ["update:model-value"],
    data() {
      return { gridInputValue: "" };
    },
    computed: {
      computedClasses() {
        return [
          { "input__component--textarea": this.tag === "textarea" },
          { "input__component--read-only": !this.isInteractive },
          `input__component--${this.theme}`,
        ];
      },
    },
  }),
  um = ["placeholder", "value", "readonly", "tabindex"],
  cm = ["placeholder", "value", "readonly", "tabindex"],
  dm = { key: 2 };
function mm(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: X(["input", `input--${e.theme}`]) },
      [
        P(
          "label",
          { class: X(["input__label", `input__label--${e.theme}`]) },
          ee(e.label) +
            ee(e.isRequired && e.isRequiredAsteriskVisible ? "*" : ""),
          3
        ),
        e.tag === "input"
          ? (c(),
            h(
              "input",
              {
                key: 0,
                placeholder: e.placeholder,
                type: "text",
                class: X(["input__component", e.computedClasses]),
                value: e.modelValue,
                readonly: !e.isInteractive,
                tabindex: e.isInteractive ? 0 : -1,
                onInput:
                  n[0] ||
                  (n[0] = (r) => e.$emit("update:model-value", r.target.value)),
                onClick: n[1] || (n[1] = Ie(() => {}, ["prevent"])),
                onDragstart: n[2] || (n[2] = Ie(() => {}, ["prevent"])),
                onDrag: n[3] || (n[3] = Ie(() => {}, ["prevent"])),
              },
              null,
              42,
              um
            ))
          : M("", !0),
        e.tag === "textarea"
          ? (c(),
            h(
              "textarea",
              {
                key: 1,
                placeholder: e.placeholder,
                type: "text",
                class: X(["input__component", e.computedClasses]),
                value: e.modelValue,
                readonly: !e.isInteractive,
                tabindex: e.isInteractive ? 0 : -1,
                onInput:
                  n[4] ||
                  (n[4] = (r) => e.$emit("update:model-value", r.target.value)),
                onClick: n[5] || (n[5] = Ie(() => {}, ["prevent"])),
                onDragstart: n[6] || (n[6] = Ie(() => {}, ["prevent"])),
                onDrag: n[7] || (n[7] = Ie(() => {}, ["prevent"])),
              },
              null,
              42,
              cm
            ))
          : M("", !0),
        e.validationErrors.length && e.areErrorsShown
          ? (c(),
            h("div", dm, [
              (c(!0),
              h(
                ve,
                null,
                Te(
                  e.validationErrors,
                  (r) => (
                    c(),
                    h(
                      "p",
                      { key: r, class: "input__error-message text-body-2" },
                      ee(r),
                      1
                    )
                  )
                ),
                128
              )),
            ]))
          : M("", !0),
      ],
      2
    )
  );
}
const gm = re(sm, [
    ["render", mm],
    ["__scopeId", "data-v-ee2fb8ad"],
  ]),
  vm = ie({
    name: "GridSelectInput",
    props: {
      name: { type: String, required: !0 },
      id: { type: String, required: !0 },
      tag: { type: String, required: !0 },
      selectedOptions: { type: Array, required: !0 },
      isInteractive: { type: Boolean, default: !0 },
      theme: { type: String, required: !0 },
      isSelected: { type: Boolean, required: !0 },
    },
    emits: ["select-option", "remove-selection", "add-selection"],
    computed: {
      labelClasses() {
        return [
          { "input__label--read-only": !this.isInteractive },
          `select-input--${this.theme}`,
        ];
      },
      inputClasses() {
        return [{ "input__component--read-only": !this.isInteractive }];
      },
    },
    methods: {
      selectOption() {
        if (!this.isInteractive) return;
        const e = { id: this.id, value: this.name };
        this.tag !== "checkbox"
          ? this.$emit("select-option", e)
          : this.isSelected
          ? this.$emit("remove-selection", e)
          : this.$emit("add-selection", e);
      },
    },
  }),
  pm = ["for"],
  hm = ["id", "type", "checked", "tabindex"];
function fm(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "label",
      { class: X(["select-input", e.labelClasses]), for: e.id },
      [
        (c(),
        h(
          "input",
          {
            id: e.id,
            key: e.isSelected,
            type: e.tag,
            class: X(["select-input__input", e.inputClasses]),
            checked: e.isSelected,
            tabindex: e.isInteractive ? 0 : -1,
            onInput:
              n[0] ||
              (n[0] = Ie(
                (...r) => e.selectOption && e.selectOption(...r),
                ["stop"]
              )),
            onDragstart: n[1] || (n[1] = Ie(() => {}, ["prevent"])),
            onDrag: n[2] || (n[2] = Ie(() => {}, ["prevent"])),
          },
          null,
          42,
          hm
        )),
        Le(" " + ee(e.name), 1),
      ],
      10,
      pm
    )
  );
}
const bm = re(vm, [
    ["render", fm],
    ["__scopeId", "data-v-3b89e969"],
  ]),
  ym = ie({
    name: "GridSelectInputsWrapper",
    components: { GridSelectInput: bm },
    props: {
      label: { type: String, default: null },
      isRequired: { type: Boolean, default: !1 },
      isTextArea: { type: Boolean, default: !1 },
      isInteractive: { type: Boolean, default: !0 },
      areErrorsShown: { type: Boolean, default: !1 },
      validationErrors: { type: Array, required: !1, default: () => [] },
      theme: { type: String, required: !0 },
      tag: {
        type: String,
        required: !0,
        validator: (e) => ["radio", "checkbox"].includes(e),
      },
      options: { type: Array, required: !0 },
    },
    emits: ["input"],
    data() {
      return { selectedOptions: [] };
    },
    watch: {
      selectedOptions() {
        const e = this.selectedOptions.map(({ value: n }) => n).toString();
        this.$emit("input", e);
      },
    },
    methods: {
      isSelected(e) {
        return this.selectedOptions.some(({ id: n }) => n === e);
      },
      removeSelection(e) {
        const n = this.selectedOptions.filter((a) => a.id !== e.id);
        this.selectedOptions = n;
      },
      addSelection(e) {
        this.selectedOptions = [...this.selectedOptions, e];
      },
      selectOption(e) {
        this.selectedOptions = [e];
      },
    },
  }),
  _m = { key: 0 };
function wm(e, n, a, t, o, i) {
  const r = He("GridSelectInput");
  return (
    c(),
    h(
      "div",
      { class: X(["input", `input--${e.theme}`]) },
      [
        P(
          "label",
          {
            class: X([
              "input__label input__label--read-only",
              [`input__label--${e.theme}`],
            ]),
          },
          ee(e.label) + ee(e.isRequired ? "*" : ""),
          3
        ),
        (c(!0),
        h(
          ve,
          null,
          Te(
            e.options,
            (l) => (
              c(),
              h("div", { key: l.id, class: "input__options" }, [
                Ee(
                  r,
                  {
                    id: l.id,
                    name: l.value,
                    tag: e.tag,
                    "is-selected": e.isSelected(l.id),
                    theme: e.theme,
                    "is-interactive": e.isInteractive,
                    "selected-options": e.selectedOptions,
                    onRemoveSelection: e.removeSelection,
                    onAddSelection: e.addSelection,
                    onSelectOption: e.selectOption,
                  },
                  null,
                  8,
                  [
                    "id",
                    "name",
                    "tag",
                    "is-selected",
                    "theme",
                    "is-interactive",
                    "selected-options",
                    "onRemoveSelection",
                    "onAddSelection",
                    "onSelectOption",
                  ]
                ),
              ])
            )
          ),
          128
        )),
        e.validationErrors.length && e.areErrorsShown
          ? (c(),
            h("div", _m, [
              (c(!0),
              h(
                ve,
                null,
                Te(
                  e.validationErrors,
                  (l) => (
                    c(),
                    h(
                      "p",
                      { key: l, class: "input__error-message text-body-2" },
                      ee(l),
                      1
                    )
                  )
                ),
                128
              )),
            ]))
          : M("", !0),
      ],
      2
    )
  );
}
const km = re(ym, [
    ["render", wm],
    ["__scopeId", "data-v-d57bc6de"],
  ]),
  Sm = {
    __name: "GridForm",
    props: {
      id: { type: String, required: !0 },
      settings: { type: Object, required: !0 },
      submitButtonData: { type: Object, required: !0 },
      formId: { type: String, default: null },
      isError: { type: Boolean, default: !1 },
      showSuccessMessage: { type: Boolean, default: !1 },
      isUserSite: { type: Boolean, default: !1 },
      theme: {
        type: String,
        validator: (e) => ["dark", "light"].includes(e),
        default: "light",
      },
      formJustify: { type: String, default: null },
      formButtonJustifySelf: { type: String, default: null },
      mobileFormButtonJustifySelf: { type: String, default: null },
      formBackgroundColor: { type: String, default: null },
      formBorderWidth: { type: String, default: null },
      formBorderColor: { type: String, default: null },
      formBorderRadius: { type: String, default: null },
      formPadding: { type: String, default: null },
      submitButtonBackgroundColor: { type: String, default: null },
      submitButtonBackgroundColorHover: { type: String, default: null },
      submitButtonFontColor: { type: String, default: null },
      submitButtonFontColorHover: { type: String, default: null },
      submitButtonBorderColor: { type: String, default: null },
      submitButtonBorderColorHover: { type: String, default: null },
      submitButtonFontFamily: { type: String, default: null },
      submitButtonFontWeight: { type: Number, default: null },
      submitButtonFontSizeMobile: { type: Number, default: null },
      submitButtonFontSizeDesktop: { type: Number, default: null },
      submitButtonBorderWidth: { type: Number, default: null },
      submitButtonBorderRadius: { type: Number, default: null },
      inputFillColor: { type: String, default: null },
      inputFillColorHover: { type: String, default: null },
      formFontFamily: { type: String, default: null },
      formFontWeight: { type: Number, default: null },
      labelTextColor: { type: String, default: null },
      labelTextSize: { type: Number, default: null },
      mobileLabelTextSize: { type: Number, default: null },
      inputTextColor: { type: String, default: null },
      inputTextColorHover: { type: String, default: null },
      inputTextSize: { type: Number, default: null },
      mobileInputTextSize: { type: Number, default: null },
      inputBorderColor: { type: String, default: null },
      inputBorderColorHover: { type: String, default: null },
      inputBorderWidth: { type: Number, default: null },
      inputBorderRadius: { type: Number, default: null },
      elementsVerticalSpacing: { type: Number, default: null },
      mobileElementsVerticalSpacing: { type: Number, default: null },
    },
    emits: ["on-submit"],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        i = E({}),
        r = E({}),
        l = E(!1),
        s = u(() =>
          t.settings.schema.reduce(
            (_, T) => ({
              ..._,
              [T.name]: {
                validation: T.validation.flat(),
                validationMessages: T["validation-messages"],
              },
            }),
            {}
          )
        ),
        d = u(() => {
          const _ = Number.isInteger(t.elementsVerticalSpacing)
              ? `${t.elementsVerticalSpacing}px`
              : null,
            T = Number.isInteger(t.mobileElementsVerticalSpacing)
              ? `${t.mobileElementsVerticalSpacing}px`
              : null;
          return {
            "--form-flex": t.formJustify ? null : "0 1 100%",
            "--form-button-justify-self": t.formButtonJustifySelf,
            "--m-form-button-justify-self": t.mobileFormButtonJustifySelf,
            "--form-background-color": t.formBackgroundColor,
            "--form-border-width": `${t.formBorderWidth}px`,
            "--form-border-color": t.formBorderColor,
            "--form-border-radius": `${t.formBorderRadius}px`,
            "--form-padding": t.formPadding ? `${t.formPadding}px` : null,
            "--form-font-family": t.formFontFamily,
            "--form-font-weight": t.formFontWeight,
            "--input-fill-color": t.inputFillColor,
            "--input-fill-color--hover":
              t.inputFillColorHover || t.inputFillColor,
            "--label-text-color": t.labelTextColor,
            "--label-text-size": t.labelTextSize
              ? `${t.labelTextSize}px`
              : null,
            "--m-label-text-size": t.mobileLabelTextSize
              ? `${t.mobileLabelTextSize}px`
              : null,
            "--input-text-color": t.inputTextColor,
            "--input-text-color--hover":
              t.inputTextColorHover || t.inputTextColor,
            "--input-text-size": t.inputTextSize
              ? `${t.inputTextSize}px`
              : null,
            "--m-input-text-size": t.mobileInputTextSize
              ? `${t.mobileInputTextSize}px`
              : null,
            "--input-height": t.inputTextSize ? "auto" : "48px",
            "--input-border-color": t.inputBorderColor,
            "--input-border-color--hover":
              t.inputBorderColorHover || t.inputBorderColor,
            "--input-border-width": t.inputBorderWidth
              ? `${t.inputBorderWidth}px`
              : null,
            "--input-border-radius": t.inputBorderRadius
              ? `${t.inputBorderRadius}px`
              : null,
            "--form-elements-vertical-spacing": _,
            "--m-form-elements-vertical-spacing": T,
            "--form-spacing": "var(--formSpacing)",
            "--grid-item-inner-padding": "var(--gridItemInnerPadding)",
            "--grid-item-inner-background": "var(--gridItemInnerBackground)",
          };
        }),
        g = () =>
          t.settings.schema.flatMap(({ name: _ }) => {
            const T = Lo({ value: r.value[_]?.value, ...s.value[_] });
            return (i.value = { ...i.value, [_]: T }), T;
          }),
        m = (_, T) => {
          (i.value = { ...i.value, [_]: Lo({ value: T, ...s.value[_] }) }),
            (r.value = {
              ...r.value,
              [_]: {
                value: T,
                type:
                  t.settings.schema.find(({ name: y }) => y === _)
                    .validationType || "text",
              },
            });
        },
        v = () => {
          r.value = Object.fromEntries(
            Object.entries(r.value).map(([_, { value: T, type: y }]) => [
              _,
              { value: T.trim(), type: y },
            ])
          );
        },
        b = {
          props: t,
          emit: o,
          validationErrors: i,
          formValues: r,
          areErrorsVisible: l,
          validationRules: s,
          formCSSVars: d,
          validateForm: g,
          updateField: m,
          trimFormValues: v,
          handleSubmit: () => {
            v();
            const _ = g();
            (l.value = _.length > 0), l.value || o("on-submit", r.value);
          },
          computed: u,
          ref: E,
          get validateInput() {
            return Lo;
          },
          GridButton: Ga,
          GridInput: gm,
          GridSelectInputsWrapper: km,
        };
      return (
        Object.defineProperty(b, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        b
      );
    },
  },
  Tm = ["id"],
  Cm = ["name"];
function Pm(e, n, a, t, o, i) {
  const r = ze("qa");
  return (
    c(),
    h(
      "div",
      {
        id: a.id,
        class: X([
          "form",
          { "form--single-field": a.settings.type === "singleField" },
        ]),
        style: Be(t.formCSSVars),
      },
      [
        P(
          "form",
          {
            class: X([
              "form__control",
              { "form__control--invisible": a.showSuccessMessage || a.isError },
            ]),
            name: a.formId,
            onSubmit: Ie(t.handleSubmit, ["prevent"]),
          },
          [
            (c(!0),
            h(
              ve,
              null,
              Te(
                a.settings.schema,
                (l) => (
                  c(),
                  h(
                    ve,
                    { key: l.id },
                    [
                      l.type === "GridInput"
                        ? de(
                            (c(),
                            K(
                              t.GridInput,
                              {
                                key: 0,
                                theme: a.theme,
                                tag: l.tag,
                                placeholder: l.placeholder,
                                label: l.inputLabel,
                                "is-required":
                                  t.validationRules[l.name].validation.includes(
                                    "required"
                                  ),
                                "is-required-asterisk-visible":
                                  a.settings.schema.length > 1,
                                "validation-errors": t.validationErrors[l.name],
                                "are-errors-shown": t.areErrorsVisible,
                                "is-interactive": a.isUserSite,
                                "model-value": t.formValues[l.name]?.value,
                                "onUpdate:modelValue": (s) =>
                                  t.updateField(l.name, s),
                              },
                              null,
                              8,
                              [
                                "theme",
                                "tag",
                                "placeholder",
                                "label",
                                "is-required",
                                "is-required-asterisk-visible",
                                "validation-errors",
                                "are-errors-shown",
                                "is-interactive",
                                "model-value",
                                "onUpdate:modelValue",
                              ]
                            )),
                            [[r, `form-field-${l.inputLabel}`]]
                          )
                        : M("", !0),
                      l.type === "GridSelectInput"
                        ? de(
                            (c(),
                            K(
                              t.GridSelectInputsWrapper,
                              {
                                key: 1,
                                theme: a.theme,
                                tag: l.tag,
                                options: l.options,
                                placeholder: l.placeholder,
                                label: l.inputLabel,
                                "is-required":
                                  t.validationRules[l.name].validation.includes(
                                    "required"
                                  ),
                                "validation-errors": t.validationErrors[l.name],
                                "are-errors-shown": t.areErrorsVisible,
                                "is-interactive": a.isUserSite,
                                onInput: (s) => t.updateField(l.name, s),
                              },
                              null,
                              8,
                              [
                                "theme",
                                "tag",
                                "options",
                                "placeholder",
                                "label",
                                "is-required",
                                "validation-errors",
                                "are-errors-shown",
                                "is-interactive",
                                "onInput",
                              ]
                            )),
                            [[r, `form-field-${l.inputLabel}`]]
                          )
                        : M("", !0),
                    ],
                    64
                  )
                )
              ),
              128
            )),
            Ee(
              t.GridButton,
              {
                content: a.submitButtonData.content,
                type: a.submitButtonData.settings.type,
                "background-color": a.submitButtonBackgroundColor,
                "background-color-hover": a.submitButtonBackgroundColorHover,
                "font-color": a.submitButtonFontColor,
                "font-color-hover": a.submitButtonFontColorHover,
                "border-color": a.submitButtonBorderColor,
                "border-color-hover": a.submitButtonBorderColorHover,
                "font-family": a.submitButtonFontFamily,
                "font-weight": a.submitButtonFontWeight,
                "font-size-mobile": a.submitButtonFontSizeMobile,
                "font-size-desktop": a.submitButtonFontSizeDesktop,
                "border-width": a.submitButtonBorderWidth,
                "border-radius": a.submitButtonBorderRadius,
                class: "form__button",
                "button-type": "submit",
                "tag-name": "button",
              },
              null,
              8,
              [
                "content",
                "type",
                "background-color",
                "background-color-hover",
                "font-color",
                "font-color-hover",
                "border-color",
                "border-color-hover",
                "font-family",
                "font-weight",
                "font-size-mobile",
                "font-size-desktop",
                "border-width",
                "border-radius",
              ]
            ),
          ],
          42,
          Cm
        ),
        ae(e.$slots, "default", {}, void 0, !0),
      ],
      14,
      Tm
    )
  );
}
const Im = re(Sm, [
    ["render", Pm],
    ["__scopeId", "data-v-77575ff3"],
  ]),
  Em = ie({
    __name: "ZyroLoader",
    props: {
      color: { default: "var(--color-dark)" },
      secondaryColor: { default: "transparent" },
      size: { default: "40px" },
      weight: { default: "4px" },
    },
    setup(e, { expose: n }) {
      n(),
        et((t) => ({
          "42b67250": t.size,
          "75767d07": t.weight,
          "1338e6f4": t.color,
          "3bb5d1de": t.secondaryColor,
        }));
      const a = {};
      return (
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  }),
  Dm = { class: "loader" },
  Mm = Ql(
    '<div class="loader__element" data-v-bc3d69bf></div><div class="loader__element" data-v-bc3d69bf></div><div class="loader__element" data-v-bc3d69bf></div><div class="loader__element" data-v-bc3d69bf></div><div class="loader__element" data-v-bc3d69bf></div>',
    5
  ),
  Om = [Mm];
function Am(e, n, a, t, o, i) {
  return c(), h("div", Dm, Om);
}
const Yr = re(Em, [
    ["render", Am],
    ["__scopeId", "data-v-bc3d69bf"],
  ]),
  Bm = "light",
  Lm = 200,
  xm = { SHOW_MESSAGE: "showMessage", LINK_TO_PAGE: "linkToPage" },
  Rm = ie({
    __name: "PostSubmitElement",
    props: {
      successMessage: { default: "" },
      isError: { type: Boolean, default: !1 },
      isLoading: { type: Boolean, default: !1 },
      showSuccessMessage: { type: Boolean, default: !1 },
      theme: { default: Bm },
      hasBorderWidth: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = E(null),
        o = u(() => ({
          "--submit-element-border": a.hasBorderWidth
            ? ""
            : "var(--color-gray)",
        }));
      xe(t, () => {
        t.value &&
          t.value.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      const i = {
        props: a,
        postSubmitRef: t,
        submitElementCSSVars: o,
        ZyroLoader: Yr,
      };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  _s = (e) => (Vt("data-v-f643cf2b"), (e = e()), Ut(), e),
  Nm = { key: 1, class: "success-message__heading" },
  Hm = { key: 0 },
  Vm = { key: 2 },
  Um = _s(() =>
    P("div", { class: "submit-message__heading" }, " Something went wrong ", -1)
  ),
  Ym = _s(() => P("div", null, " Please try again later ", -1)),
  $m = [Um, Ym];
function Fm(e, n, a, t, o, i) {
  return a.isLoading || a.showSuccessMessage || a.isError
    ? (c(),
      h(
        "div",
        {
          key: 0,
          ref: "postSubmitRef",
          class: X(["submit-message", `submit-message--${a.theme}`]),
          style: Be(t.submitElementCSSVars),
        },
        [
          a.isLoading
            ? (c(),
              K(t.ZyroLoader, {
                key: 0,
                color: "var(--grid-button-primary-background-color)",
              }))
            : a.showSuccessMessage && !a.isError
            ? (c(),
              h("div", Nm, [
                Le(ee(a.successMessage) + " ", 1),
                a.isInPreviewMode
                  ? (c(),
                    h(
                      "div",
                      Hm,
                      " Note: Forms submitted in preview mode won't appear in Form submissions. "
                    ))
                  : M("", !0),
              ]))
            : M("", !0),
          a.isError && !a.isLoading ? (c(), h("div", Vm, $m)) : M("", !0),
        ],
        6
      ))
    : M("", !0);
}
const Wm = re(Rm, [
    ["render", Fm],
    ["__scopeId", "data-v-f643cf2b"],
  ]),
  Gm = ie({
    components: { GridForm: Im, PostSubmitElement: Wm },
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      currentLocale: { type: String, required: !0 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup() {
      const { meta: e, forms: n, getPagePathFromId: a } = nt();
      return { meta: e, forms: n, getPagePathFromId: a };
    },
    data() {
      return { isLoading: !1, showSuccessMessage: !1, isError: !1 };
    },
    methods: {
      async saveData({ token: e, model: n, elementId: a }) {
        await fetch(
          `https://builder-backend.hostinger.com/u1/data/v3/post/${e}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            credentials: "omit",
            mode: "cors",
            body: JSON.stringify({ elementId: a, formData: n }),
          }
        ).then((t) => {
          if (!t.ok) throw new Error(t.statusText);
          return t;
        });
      },
      async onSubmit(e) {
        if (this.meta.isDemoTemplate || this.isInPreviewMode) {
          this.showSuccessMessage = !0;
          return;
        }
        this.isLoading = !0;
        let n = !1;
        setTimeout(() => {
          (n = !0),
            (this.isLoading = !(this.showSuccessMessage || this.isError));
        }, Lm);
        try {
          await this.saveData({
            token: this.forms[this.data.formId].token,
            model: Object.fromEntries(
              Object.entries(e).map(([i, r]) => [i, r])
            ),
            elementId: this.data.elementId,
          }),
            (this.showSuccessMessage = !0);
          const { submitAction: a } = this.data.settings;
          if (!a || a.id === xm.SHOW_MESSAGE) return;
          const { pageId: t } = this.data.settings.submitRedirectPage,
            o = this.getPagePathFromId({ pageId: t });
          this.$router.push({ path: o });
        } catch (a) {
          console.error(a), (this.isError = !0);
        } finally {
          n && (this.isLoading = !1);
        }
      },
    },
  });
function qm(e, n, a, t, o, i) {
  const r = He("PostSubmitElement"),
    l = He("GridForm");
  return (
    c(),
    K(
      l,
      {
        id: e.id,
        "form-id": e.data.formId,
        settings: e.data.settings,
        "submit-button-data": e.data.submitButtonData,
        "submit-button-background-color": e.data.submitButtonBackgroundColor,
        "submit-button-background-color-hover":
          e.data.submitButtonBackgroundColorHover,
        "submit-button-font-color": e.data.submitButtonFontColor,
        "submit-button-font-color-hover": e.data.submitButtonFontColorHover,
        "submit-button-border-color": e.data.submitButtonBorderColor,
        "submit-button-border-color-hover": e.data.submitButtonBorderColorHover,
        "submit-button-font-family": e.data.submitButtonFontFamily,
        "submit-button-font-weight": e.data.submitButtonFontWeight,
        "submit-button-font-size-mobile": e.data.mobile?.submitButtonFontSize,
        "submit-button-font-size-desktop": e.data.desktop?.submitButtonFontSize,
        "submit-button-border-width": e.data.submitButtonBorderWidth,
        "submit-button-border-radius": e.data.submitButtonBorderRadius,
        "show-success-message": e.showSuccessMessage,
        "is-error": e.isError,
        "is-user-site": !0,
        theme: e.data.settings.theme,
        "form-justify": e.data.settings.styles.justify,
        "form-button-justify-self":
          e.data.submitButtonData.settings.styles.align,
        "mobile-form-button-justify-self":
          e.data.submitButtonData.settings.styles["m-align"],
        "form-background-color": e.data.formBackgroundColor,
        "form-border-width": e.data.formBorderWidth,
        "form-border-color": e.data.formBorderColor,
        "form-border-radius": e.data.formBorderRadius,
        "form-padding": e.data.formPadding,
        "input-fill-color": e.data.inputFillColor,
        "input-fill-color-hover": e.data.inputFillColorHover,
        "form-font-family": e.data.formFontFamily,
        "form-font-weight": e.data.formFontWeight,
        "label-text-color": e.data.labelTextColor,
        "label-text-size": e.data.desktop?.labelTextSize,
        "mobile-label-text-size": e.data.mobile?.labelTextSize,
        "input-text-color": e.data.inputTextColor,
        "input-text-color-hover": e.data.inputTextColorHover,
        "input-text-size": e.data.desktop?.inputTextSize,
        "mobile-input-text-size": e.data.mobile?.inputTextSize,
        "input-border-color": e.data.inputBorderColor,
        "input-border-color-hover": e.data.inputBorderColorHover,
        "input-border-width": e.data.inputBorderWidth,
        "input-border-radius": e.data.inputBorderRadius,
        "elements-vertical-spacing":
          e.data.desktop?.formElementsVerticalSpacing,
        "mobile-elements-vertical-spacing":
          e.data.mobile?.formElementsVerticalSpacing,
        onOnSubmit: e.onSubmit,
      },
      {
        default: he(() => [
          Ee(
            r,
            {
              "show-success-message": e.showSuccessMessage,
              "success-message": e.data.settings.successMessage,
              "is-loading": e.isLoading,
              "is-error": e.isError,
              theme: e.data.settings.theme,
              "has-border-width": e.data.formBorderWidth !== 0,
              "is-in-preview-mode": e.isInPreviewMode,
            },
            null,
            8,
            [
              "show-success-message",
              "success-message",
              "is-loading",
              "is-error",
              "theme",
              "has-border-width",
              "is-in-preview-mode",
            ]
          ),
        ]),
        _: 1,
      },
      8,
      [
        "id",
        "form-id",
        "settings",
        "submit-button-data",
        "submit-button-background-color",
        "submit-button-background-color-hover",
        "submit-button-font-color",
        "submit-button-font-color-hover",
        "submit-button-border-color",
        "submit-button-border-color-hover",
        "submit-button-font-family",
        "submit-button-font-weight",
        "submit-button-font-size-mobile",
        "submit-button-font-size-desktop",
        "submit-button-border-width",
        "submit-button-border-radius",
        "show-success-message",
        "is-error",
        "theme",
        "form-justify",
        "form-button-justify-self",
        "mobile-form-button-justify-self",
        "form-background-color",
        "form-border-width",
        "form-border-color",
        "form-border-radius",
        "form-padding",
        "input-fill-color",
        "input-fill-color-hover",
        "form-font-family",
        "form-font-weight",
        "label-text-color",
        "label-text-size",
        "mobile-label-text-size",
        "input-text-color",
        "input-text-color-hover",
        "input-text-size",
        "mobile-input-text-size",
        "input-border-color",
        "input-border-color-hover",
        "input-border-width",
        "input-border-radius",
        "elements-vertical-spacing",
        "mobile-elements-vertical-spacing",
        "onOnSubmit",
      ]
    )
  );
}
const jm = re(Gm, [["render", qm]]),
  zm = ie({
    __name: "GridImage",
    props: {
      src: {},
      alt: {},
      href: { default: null },
      preventDrag: { type: Boolean },
      sizes: {},
      srcset: {},
      tagName: { default: Wu },
      target: { default: null },
      rel: { default: null },
      isLightboxEnabled: { type: Boolean },
      isUnstyled: { type: Boolean },
      resetMobilePosition: { type: Boolean, default: !0 },
      elementWidth: { default: 0 },
      elementHeight: { default: 0 },
      mobileBorderRadius: { default: 0 },
      desktopBorderRadius: { default: 0 },
      cropCssVars: { default: null },
      isOverflowVisible: { type: Boolean },
      isEager: { type: Boolean },
      isMobileImage: { type: Boolean },
      isInBuilder: { type: Boolean },
      isSvg: { type: Boolean },
      shapeMaskSource: { default: null },
      isInPreviewMode: { type: Boolean },
      overlayOpacity: { default: 0 },
    },
    emits: ["image-load", "image-click"],
    setup(e, { expose: n, emit: a }) {
      n(),
        et((O) => ({
          "08a09b3a": b.value,
          "41b9bd48": T.value,
          "143cc87a": p.value,
          68139491: m.value,
          "161b5a04": v.value,
          ed9f83f0: _.value,
          "6c589be4": s.value,
          cb1185de: d.value,
        }));
      const t = e,
        o = a,
        i = E(null),
        r = E(!1),
        l = u(
          () =>
            t.elementHeight !== null && t.elementHeight > 0 && t.isMobileImage
        ),
        s = u(() =>
          t.isInBuilder
            ? "100%"
            : t.isInPreviewMode
            ? `${t.elementWidth}px`
            : l.value
            ? `${(t.elementWidth * 100) / ta}vw`
            : "100%"
        ),
        d = u(() =>
          t.isInBuilder
            ? "auto"
            : t.isInPreviewMode
            ? `${t.elementHeight}px`
            : l.value
            ? `${(t.elementHeight * 100) / ta}vw`
            : "auto"
        ),
        g = u(() => ({
          "--overflow": t.isOverflowVisible ? "visible" : null,
          ...t.cropCssVars,
        })),
        m = u(() =>
          t.isInBuilder ? "100%" : `${(t.elementWidth * 100) / ga}vw`
        ),
        v = u(() =>
          t.isInBuilder ? "100%" : `${(t.elementHeight * 100) / ga}vw`
        ),
        p = u(() =>
          t.overlayOpacity ? `rgba(0, 0, 0, ${t.overlayOpacity / 100})` : null
        ),
        b = u(() =>
          t.shapeMaskSource
            ? null
            : t.desktopBorderRadius
            ? t.desktopBorderRadius
            : t.mobileBorderRadius
            ? t.mobileBorderRadius
            : null
        ),
        _ = u(() =>
          t.shapeMaskSource
            ? null
            : t.mobileBorderRadius
            ? t.mobileBorderRadius
            : t.desktopBorderRadius
            ? t.desktopBorderRadius
            : null
        ),
        T = u(() => t.shapeMaskSource && `url('${t.shapeMaskSource}')`),
        y = () => {
          o("image-load"), (r.value = !0);
        };
      Me(() => {
        if (i.value) {
          if (i.value?.complete) {
            y();
            return;
          }
          i.value.addEventListener("load", y);
        }
      }),
        qn(() => {
          i.value && i.value.removeEventListener("load", y);
        });
      const w = {
        props: t,
        emit: o,
        imageRef: i,
        isLoaded: r,
        isMobileLayoutImage: l,
        mobileWidthCSSVar: s,
        mobileHeightCSSVar: d,
        imageCSSVars: g,
        smallDesktopWidthCSSVar: m,
        smallDesktopHeightCSSVar: v,
        overlayOpacityCSSVar: p,
        desktopBorderRadiusCSSVar: b,
        mobileBorderRadiusCSSVar: _,
        shapeMaskSourceCssVar: T,
        handleImageLoadEvent: y,
        get ANCHOR_TAG() {
          return Gu;
        },
        get DATA_ATTRIBUTE_ANIMATION_ROLE() {
          return ya;
        },
        get DATA_ATTRIBUTE_SELECTOR() {
          return qu;
        },
        get DATA_ATTRIBUTE_SELECTOR_IMAGE() {
          return ju;
        },
        get DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE() {
          return Ar;
        },
      };
      return (
        Object.defineProperty(w, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        w
      );
    },
  }),
  Km = ["alt", "src", "srcset", "sizes", "height", "width", "loading"];
function Qm(e, n, a, t, o, i) {
  const r = ze("qa");
  return (
    c(),
    K(
      hn(a.tagName),
      Xe({
        href: a.href,
        target: a.target,
        rel: a.rel,
        title: a.alt,
        style: t.imageCSSVars,
        class: [
          "image",
          {
            "image--zoom": a.isLightboxEnabled,
            "image--grid": !a.isUnstyled,
            "image--unstyled": a.isUnstyled,
            "image--link": a.tagName === t.ANCHOR_TAG,
            loaded: t.isLoaded,
          },
        ],
        [t.DATA_ATTRIBUTE_SELECTOR || ""]: t.DATA_ATTRIBUTE_SELECTOR_IMAGE,
        [t.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]:
          t.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE,
        onClick: n[0] || (n[0] = (l) => e.$emit("image-click", l)),
      }),
      {
        default: he(() => [
          de(
            P(
              "img",
              je(
                {
                  ref: "imageRef",
                  alt: a.alt,
                  src: "/logo.jpg",
                  sizes: a.sizes,
                  height: a.elementHeight,
                  width: a.elementWidth,
                  loading: a.isEager ? "eager" : "lazy",
                  class: {
                    "image__image--unstyled": a.isUnstyled,
                    "image__image--cropped": !!a.cropCssVars,
                    image__image: !a.isUnstyled,
                    "image__image--reset-m-position": a.resetMobilePosition,
                    "image__image--svg": a.isSvg,
                  },
                },
                Xl(
                  {
                    drag: a.preventDrag
                      ? (l) => l.preventDefault()
                      : () => null,
                    dragstart: a.preventDrag
                      ? (l) => l.preventDefault()
                      : () => null,
                  },
                  !0
                )
              ),
              null,
              16,
              Km
            ),
            [[r, "builder-gridelement-gridimage"]]
          ),
          ae(e.$slots, "default", {}, void 0, !0),
        ]),
        _: 3,
      },
      16,
      ["href", "target", "rel", "title", "style", "class"]
    )
  );
}
const ws = re(zm, [
    ["render", Qm],
    ["__scopeId", "data-v-47c05b4e"],
  ]),
  el = (e, n) => {
    const a = Array(e).fill([]);
    return n.reduce((t, o, i) => {
      const r = i % e;
      return (t[r] = [...t[r], { ...o, originalIndex: i }]), t;
    }, a);
  },
  Xm = ie({
    name: "GridGallery",
    components: { GridImage: ws },
    props: {
      columnCount: { type: Number, required: !0 },
      columnGap: { type: Number, required: !0 },
      mobileColumnCount: { type: Number, required: !0 },
      mobileColumnGap: { type: Number, required: !0 },
      gridImages: { type: Array, required: !0 },
      isLightboxEnabled: { type: Boolean, required: !1 },
      isMasonryLayout: { type: Boolean, default: !1 },
      loadImages: { type: Boolean, default: !0 },
    },
    emits: ["image-load"],
    setup(e) {
      const n = u(() => el(e.columnCount, e.gridImages)),
        a = u(() => el(e.mobileColumnCount, e.gridImages));
      return { masonryColumns: n, mobileMasonryColumns: a };
    },
    computed: {
      gridGalleryCSSVars() {
        return {
          "--column-gap": `${this.columnGap}px`,
          "--column-count": this.columnCount,
          "--m-column-gap": `${this.mobileColumnGap}px`,
          "--m-column-count": this.mobileColumnCount,
        };
      },
    },
  }),
  Zm = { class: "gallery" };
function Jm(e, n, a, t, o, i) {
  const r = He("GridImage");
  return (
    c(),
    h("div", Zm, [
      e.isMasonryLayout
        ? (c(),
          h(
            "div",
            {
              key: 0,
              class: "gallery__masonry",
              style: Be(e.gridGalleryCSSVars),
            },
            [
              (c(!0),
              h(
                ve,
                null,
                Te(
                  e.mobileMasonryColumns,
                  (l, s) => (
                    c(),
                    h(
                      "div",
                      { key: s, class: "gallery__masonry-mobile-columns" },
                      [
                        (c(!0),
                        h(
                          ve,
                          null,
                          Te(
                            l,
                            (d, g) => (
                              c(),
                              K(
                                r,
                                {
                                  key: `${g}${d.src}`,
                                  class: "gallery__masonry-image",
                                  alt: d.alt,
                                  src: e.loadImages ? d.src : "",
                                  srcset: d.srcset,
                                  sizes: d.sizes,
                                  "element-width": d.width,
                                  "prevent-drag": "",
                                  "is-eager": "",
                                  "is-unstyled": "",
                                  "reset-mobile-position": !1,
                                  "is-lightbox-enabled": e.isLightboxEnabled,
                                  onImageClick: (m) =>
                                    e.$emit("image-click", d.originalIndex),
                                  onImageLoad:
                                    n[0] ||
                                    (n[0] = (m) => e.$emit("image-load")),
                                },
                                null,
                                8,
                                [
                                  "alt",
                                  "src",
                                  "srcset",
                                  "sizes",
                                  "element-width",
                                  "is-lightbox-enabled",
                                  "onImageClick",
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]
                    )
                  )
                ),
                128
              )),
              (c(!0),
              h(
                ve,
                null,
                Te(
                  e.masonryColumns,
                  (l, s) => (
                    c(),
                    h(
                      "div",
                      { key: s, class: "gallery__masonry-desktop-columns" },
                      [
                        (c(!0),
                        h(
                          ve,
                          null,
                          Te(
                            l,
                            (d, g) => (
                              c(),
                              K(
                                r,
                                {
                                  key: `${g}${d.src}`,
                                  class: "gallery__masonry-image",
                                  alt: d.alt,
                                  src: e.loadImages ? d.src : "",
                                  srcset: d.srcset,
                                  sizes: d.sizes,
                                  "element-width": d.width,
                                  "prevent-drag": "",
                                  "is-eager": "",
                                  "is-unstyled": "",
                                  "reset-mobile-position": !1,
                                  "is-lightbox-enabled": e.isLightboxEnabled,
                                  onImageClick: (m) =>
                                    e.$emit("image-click", d.originalIndex),
                                  onImageLoad:
                                    n[1] ||
                                    (n[1] = (m) => e.$emit("image-load")),
                                },
                                null,
                                8,
                                [
                                  "alt",
                                  "src",
                                  "srcset",
                                  "sizes",
                                  "element-width",
                                  "is-lightbox-enabled",
                                  "onImageClick",
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]
                    )
                  )
                ),
                128
              )),
            ],
            4
          ))
        : (c(),
          h(
            "div",
            { key: 1, class: "gallery__grid", style: Be(e.gridGalleryCSSVars) },
            [
              (c(!0),
              h(
                ve,
                null,
                Te(
                  e.gridImages,
                  (l, s) => (
                    c(),
                    h("div", { key: `${s}${l.src}`, class: "gallery__block" }, [
                      (c(),
                      K(
                        r,
                        {
                          key: `${s}${l.src}`,
                          alt: l.alt,
                          src: e.loadImages ? l.src : "",
                          srcset: l.srcset,
                          sizes: l.sizes,
                          "element-width": l.width,
                          "element-height": l.height,
                          "prevent-drag": "",
                          "is-lightbox-enabled": e.isLightboxEnabled,
                          "reset-mobile-position": !1,
                          "is-eager": "",
                          class: "gallery__image",
                          onImageClick: (d) => e.$emit("image-click", s),
                          onImageLoad:
                            n[2] || (n[2] = (d) => e.$emit("image-load")),
                        },
                        null,
                        8,
                        [
                          "alt",
                          "src",
                          "srcset",
                          "sizes",
                          "element-width",
                          "element-height",
                          "is-lightbox-enabled",
                          "onImageClick",
                        ]
                      )),
                    ])
                  )
                ),
                128
              )),
            ],
            4
          )),
      ae(e.$slots, "default", {}, void 0, !0),
    ])
  );
}
const eg = re(Xm, [
    ["render", Jm],
    ["__scopeId", "data-v-0346154b"],
  ]),
  tg = (e) => {
    const n = u(() => e.data.images.length > 0),
      a = u(() => Number.parseInt(e.data.desktop.columnCount || 1, 10)),
      t = u(() => Number.parseInt(e.data.desktop.columnGap || 0, 10)),
      o = u(() => Number.parseInt(e.data.mobile.columnCount || 1, 10)),
      i = u(() => Number.parseInt(e.data.mobile.columnGap || 0, 10)),
      r = u(() => e.data.settings.layout === "masonry");
    return {
      hasGridImages: n,
      columnCount: a,
      columnGap: t,
      isMasonryLayout: r,
      mobileColumnCount: o,
      mobileColumnGap: i,
    };
  },
  st = {
    Backspace: "Backspace",
    ShiftLeft: "ShiftLeft",
    Escape: "Escape",
    Space: "Space",
    ArrowLeft: "ArrowLeft",
    ArrowUp: "ArrowUp",
    ArrowRight: "ArrowRight",
    ArrowDown: "ArrowDown",
    Delete: "Delete",
    KeyX: "KeyX",
    KeyC: "KeyC",
    KeyD: "KeyD",
    KeyY: "KeyY",
    KeyZ: "KeyZ",
    OSLeft: "OSLeft",
    NumLockSlash: "NumLockSlash",
    KeySlash: "Slash",
    Enter: "Enter",
    BracketLeft: "BracketLeft",
    BracketRight: "BracketRight",
  },
  ag = {
    8: st.Backspace,
    16: st.ShiftLeft,
    27: st.Escape,
    32: st.Space,
    37: st.ArrowLeft,
    38: st.ArrowUp,
    39: st.ArrowRight,
    40: st.ArrowDown,
    46: st.Delete,
    67: st.KeyC,
    68: st.KeyD,
    88: st.KeyX,
    89: st.KeyY,
    90: st.KeyZ,
    91: st.OSLeft,
    111: st.NumLockSlash,
    191: st.KeySlash,
    219: st.BracketLeft,
    221: st.BracketRight,
  },
  xo = (e) => {
    let n;
    return (
      e
        ? e.code !== void 0
          ? (n = e.code === "MetaLeft" ? "OSLeft" : e.code)
          : e.keyCode !== void 0 && (n = ag[e.keyCode])
        : (n = void 0),
      n
    );
  },
  Oa = E([]),
  Aa = E(null),
  un = () => {
    const e = u(() => Oa.value.length > 0),
      n = u(() => Oa.value.length > 1),
      a = u(() => Oa.value.length - 1),
      t = u(() => Aa.value === Oa.value.length - 1),
      o = u(() => Aa.value === 0),
      i = u(() => Oa.value[Aa.value]),
      r = (b) => {
        Aa.value = b;
      },
      l = (b) => {
        Oa.value = Array.isArray(b) ? b : [b];
      },
      s = () => (o.value ? r(a.value) : r(Aa.value - 1)),
      d = () => (t.value ? r(0) : r(Aa.value + 1)),
      g = () => {
        l([]), r(null);
      },
      m = () => {
        n.value || g();
      },
      v = (b, _ = 0) => {
        l(b), r(_);
      },
      p = (b) => {
        xo(b) === st.ArrowRight && d(),
          xo(b) === st.ArrowLeft && s(),
          xo(b) === st.Escape && g();
      };
    return {
      lightboxImages: u(() => Oa.value),
      currentLightboxImageIndex: u(() => Aa.value),
      currentLightboxImage: i,
      lastImageIndex: a,
      isFirstImage: o,
      isLastImage: t,
      isLightboxOpen: e,
      isImageGalleryMode: n,
      setLightboxImages: l,
      setCurrentLightboxImageIndex: r,
      goToNextImage: d,
      goToPreviousImage: s,
      handleLightboxNav: p,
      closeLightbox: g,
      addImagesToLightbox: v,
      onLightboxClickOutside: m,
    };
  },
  ng = "lightbox",
  og = ie({
    name: "GridGalleryProviderUser",
    components: { GridGallery: eg },
    props: {
      data: { type: Object, required: !0 },
      mobileBlockPadding: { type: String, default: "0px" },
      elementWidth: { type: Number, default: null },
      elementHeight: { type: Number, default: null },
    },
    emits: ["image-load"],
    setup(e) {
      const { siteId: n } = nt(),
        {
          columnCount: a,
          columnGap: t,
          isMasonryLayout: o,
          mobileColumnCount: i,
          mobileColumnGap: r,
        } = tg(e),
        { addImagesToLightbox: l } = un(),
        s = u(() => {
          const { right: w } = sn(e.mobileBlockPadding ?? "");
          return Number.parseInt(w, 10) || 0;
        }),
        d = E(!1),
        g = () => {
          d.value = window.matchMedia(`(max-width: ${or}px)`).matches;
        };
      Me(() => {
        g(), window.addEventListener("resize", g);
      }),
        qn(() => {
          window.removeEventListener("resize", g);
        });
      const m = u(() => (d.value ? i.value : a.value)),
        v = u(() => Math.ceil((t.value + e.elementWidth) / m.value) - t.value),
        p = u(() => !o.value && v.value),
        b = u(() =>
          [`(min-width: ${or}px) ${v.value}px`, `${100 / m.value}vw`].join(", ")
        ),
        _ = u(() =>
          e.data.images.map((w) => {
            const O = u(() =>
                ut(w.origin, w.path, n.value, {
                  width: v.value,
                  height: p.value,
                })
              ),
              C = u(() =>
                $c(w.origin, w.path, n.value, {
                  width: v.value,
                  height: p.value,
                  columnCount: m.value,
                  columnGap: t.value,
                  mobilePadding: s.value,
                  isMasonryLayout: o.value,
                })
              );
            return {
              ...w,
              src: O.value,
              srcset: C.value,
              sizes: b.value,
              width: v.value,
              height: p.value,
            };
          })
        ),
        T = u(() => e.data.settings.imageClickAction === ng);
      return {
        gridImages: _,
        isLightboxEnabled: T,
        handleGalleryImageClick: (w) => {
          if (T.value) {
            const O = e.data.images.map((C) => ({
              alt: C.alt,
              src: ds(C.origin, C.path, n.value),
            }));
            l(O, w);
          }
        },
        columnCount: a,
        columnGap: t,
        isMasonryLayout: o,
        mobileColumnCount: i,
        mobileColumnGap: r,
      };
    },
  });
function rg(e, n, a, t, o, i) {
  const r = He("GridGallery");
  return (
    c(),
    K(
      r,
      {
        "grid-images": e.gridImages,
        "is-lightbox-enabled": e.isLightboxEnabled,
        "column-count": e.columnCount,
        "column-gap": e.columnGap,
        "mobile-column-count": e.mobileColumnCount,
        "mobile-column-gap": e.mobileColumnGap,
        "is-masonry-layout": e.isMasonryLayout,
        onImageClick: e.handleGalleryImageClick,
        onImageLoad: n[0] || (n[0] = (l) => e.$emit("image-load")),
      },
      null,
      8,
      [
        "grid-images",
        "is-lightbox-enabled",
        "column-count",
        "column-gap",
        "mobile-column-count",
        "mobile-column-gap",
        "is-masonry-layout",
        "onImageClick",
      ]
    )
  );
}
const ig = re(og, [["render", rg]]),
  lg = (e, n, a) => Math.min(Math.max(e, n), a),
  tl = 1920,
  al = ({
    isAspectRatioBiggerThanContainer: e,
    scale: n,
    containerHeight: a,
    containerWidth: t,
    naturalImageHeight: o,
    naturalImageWidth: i,
  }) => {
    if (e) {
      const r = a / o;
      return Math.round(i * r * n);
    }
    return Math.round(t * n);
  },
  nl = ({
    isAspectRatioBiggerThanContainer: e,
    scale: n,
    containerHeight: a,
    containerWidth: t,
    naturalImageHeight: o,
    naturalImageWidth: i,
  }) => {
    if (!e) {
      const r = t / i;
      return Math.round(o * r * n);
    }
    return Math.round(a * n);
  },
  to = ({
    offsetInPx: e,
    imageSize: n,
    containerSize: a,
    offsetInPercent: t,
  }) => {
    if (!e) return t;
    const o = (n - a) / 100;
    return lg(t + e / o, 0, 100);
  },
  ao = ({ imageSize: e, containerSize: n, offset: a }) => (n - e) * (a / 100),
  ol = ({
    prefix: e,
    left: n,
    top: a,
    scale: t,
    isAspectRatioLargerThanContainer: o,
  }) => ({
    [`--${e}-left`]: `${n}px`,
    [`--${e}-top`]: `${a}px`,
    [`--${e}-scale`]: t,
    [`--${e}-width`]: o ? "auto" : "100%",
    [`--${e}-height`]: o ? "100%" : "auto",
  }),
  rl = ({
    left: e,
    top: n,
    imageWidth: a,
    imageHeight: t,
    containerWidth: o,
    containerHeight: i,
  }) => ({
    left: Math.round(Math.abs(e)),
    top: Math.round(Math.abs(n)),
    right: Math.round(a - o - Math.abs(e)),
    bottom: Math.round(t - i - Math.abs(n)),
    imageWidth: a,
    imageHeight: t,
  }),
  sg = (e, n) => {
    if (e > tl) {
      const a = tl / e;
      return { width: Math.round(e * a), height: Math.round(n * a) };
    }
    return { width: e, height: n };
  },
  il = (e, { dragDeltaYPosition: n, dragDeltaXPosition: a, href: t } = {}) => {
    const o = u(() =>
        sg(e.data.fullResolutionWidth, e.data.fullResolutionHeight)
      ),
      i = u(() => o.value.width),
      r = u(() => o.value.height),
      l = () => i.value / r.value,
      s = u(() => e.data.desktop?.crop),
      d = u(() => e.renderedPosition || e.data.desktop),
      g = u(() => d.value.width),
      m = u(() => d.value.height),
      v = u(() => g.value / m.value),
      p = u(() => l() > v.value),
      b = u(() =>
        al({
          isAspectRatioBiggerThanContainer: p.value,
          scale: s.value.scale,
          containerHeight: m.value,
          containerWidth: g.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      _ = u(() =>
        nl({
          isAspectRatioBiggerThanContainer: p.value,
          scale: s.value.scale,
          containerHeight: m.value,
          containerWidth: g.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      T = u(() =>
        to({
          offsetInPx: -n?.value,
          imageSize: _.value,
          containerSize: m.value,
          offsetInPercent: s.value.top,
        })
      ),
      y = u(() =>
        ao({ imageSize: _.value, containerSize: m.value, offset: T.value })
      ),
      w = u(() =>
        to({
          offsetInPx: -a?.value,
          imageSize: b.value,
          containerSize: g.value,
          offsetInPercent: s.value.left,
        })
      ),
      O = u(() =>
        ao({ imageSize: b.value, containerSize: g.value, offset: w.value })
      ),
      C = u(() =>
        rl({
          left: O.value,
          top: y.value,
          imageWidth: b.value,
          imageHeight: _.value,
          containerWidth: g.value,
          containerHeight: m.value,
        })
      ),
      x = u(() => e.data.mobile.crop || s.value),
      F = u(() => e.renderedPosition || e.data.mobile),
      Y = u(() => F.value.width),
      j = u(() => F.value.height),
      q = u(() => Y.value / j.value),
      S = u(() => l() > q.value),
      B = u(() =>
        al({
          isAspectRatioBiggerThanContainer: S.value,
          scale: x.value.scale,
          containerHeight: j.value,
          containerWidth: Y.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      $ = u(() =>
        nl({
          isAspectRatioBiggerThanContainer: S.value,
          scale: x.value.scale,
          containerHeight: j.value,
          containerWidth: Y.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      z = u(() =>
        to({
          offsetInPx: -n?.value,
          imageSize: $.value,
          containerSize: j.value,
          offsetInPercent: x.value.top,
        })
      ),
      N = u(() =>
        ao({ imageSize: $.value, containerSize: j.value, offset: z.value })
      ),
      I = u(() =>
        to({
          offsetInPx: -a?.value,
          imageSize: B.value,
          containerSize: Y.value,
          offsetInPercent: x.value.left,
        })
      ),
      H = u(() =>
        ao({ imageSize: B.value, containerSize: Y.value, offset: I.value })
      ),
      A = u(() =>
        rl({
          left: H.value,
          top: N.value,
          imageWidth: B.value,
          imageHeight: $.value,
          containerWidth: Y.value,
          containerHeight: j.value,
        })
      ),
      G = u(() => {
        const k = !["svg", "ico", "gif"].includes(on(e.data.settings.path));
        if (!s.value || !i.value || !r.value || !k) return null;
        const f = ol({
            prefix: "desktop",
            left: O.value,
            top: y.value,
            scale: s.value.scale,
            isAspectRatioLargerThanContainer: p.value,
          }),
          W = ol({
            prefix: "mobile",
            left: H.value,
            top: N.value,
            scale: x.value.scale,
            isAspectRatioLargerThanContainer: S.value,
          });
        return { ...f, ...W };
      });
    return {
      href: t,
      cropCSSVars: G,
      desktopCropParams: C,
      mobileCropParams: A,
      desktopTop: y,
      desktopLeft: O,
      mobileLeft: H,
      mobileTop: N,
      desktopTopPercentWithOffset: T,
      desktopLeftPercentWithOffset: w,
    };
  },
  ug = {
    __name: "GridImageProviderUser",
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      lcp: { type: Object, default: () => ({}) },
      mobileBlockPadding: { type: String, default: "0px" },
      elementWidth: { type: Number, default: null },
      elementHeight: { type: Number, default: null },
      mobileElementWidth: { type: Number, default: null },
      mobileElementHeight: { type: Number, default: null },
      resetMobilePosition: { type: Boolean, default: !0 },
      currentLocale: { type: String, required: !0 },
      mobileBorderRadius: { type: Number, default: 0 },
      desktopBorderRadius: { type: Number, default: 0 },
      shapeMaskSource: { type: String, default: null },
      isInPreviewMode: { type: Boolean, default: !1 },
      overlayOpacity: { type: Number, default: 0 },
    },
    setup(e, { expose: n }) {
      n(), et((z) => ({ b7f102c8: x.value, "2a0ccada": F.value }));
      const a = e,
        { addImagesToLightbox: t } = un(),
        { siteId: o, getPagePathFromId: i } = nt(),
        {
          cropCSSVars: r,
          desktopCropParams: l,
          mobileCropParams: s,
          href: d,
        } = il(a, {
          href: u(() =>
            a.data.linkType === nr.PAGE
              ? i({ pageId: a.data.linkedPageId })
              : a.data.href
          ),
        }),
        g = (z) => {
          const { fullResolutionWidth: N, fullResolutionHeight: I } = a.data,
            {
              left: H,
              top: A,
              right: G,
              bottom: k,
              imageWidth: f,
              imageHeight: W,
            } = z,
            U = H / f,
            Z = A / W,
            J = G / f,
            R = k / W;
          return { left: N * U, top: I * Z, right: N * J, bottom: I * R };
        },
        m = (z) => {
          const { top: N, right: I, bottom: H, left: A } = g(z);
          return `${N};${I};${H};${A}`;
        },
        v = u(() => [a.data.settings.origin, a.data.settings.path, o.value]),
        p = u(() =>
          r.value
            ? ut(...v.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain: !1,
                trim: m(l.value),
              })
            : ut(...v.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain:
                  a.data.settings.styles["object-fit"] === "contain",
              })
        ),
        b = u(() => on(a.data.settings.path) === "svg"),
        _ = u(() => a.mobileElementWidth && a.mobileElementHeight),
        T = u(() =>
          !a.mobileElementHeight || a.mobileElementHeight < 0
            ? p.value
            : r.value
            ? ut(...v.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                shouldContain: !1,
                trim: m(s.value),
              })
            : ut(...v.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                shouldContain: !1,
              })
        ),
        y = u(() =>
          r.value
            ? Ra(...v.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain: !1,
                mobilePadding: 0,
                trim: m(l.value),
              })
            : Ra(...v.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain:
                  a.data.settings.styles["object-fit"] === "contain",
              })
        ),
        w = u(() =>
          !a.mobileElementHeight || a.mobileElementHeight < 0
            ? y.value
            : r.value
            ? Ra(...v.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                shouldContain: !1,
                mobilePadding: 0,
                trim: m(s.value),
              })
            : Ra(...v.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                mobilePadding: 0,
                shouldContain: !1,
              })
        ),
        O = u(() => {
          const { right: z } = sn(a.mobileBlockPadding ?? ""),
            N = z ? Number.parseInt(z, 10) : null;
          return Vn(a.elementWidth, N);
        }),
        C = () => {
          a.data.settings.clickAction === Do &&
            t({
              src: ut(a.data.settings.origin, a.data.settings.path, o.value),
              srcset: wa(a.data.settings.origin, a.data.settings.path, o.value),
              alt: a.data.settings.alt,
            });
        },
        x = u(() => `${a.elementHeight}px`),
        F = u(() => `${a.mobileElementHeight}px`),
        Y = u(() => a.data.settings.alt),
        j = u(() => (a.data.settings.clickAction === bi ? "a" : "div")),
        q = u(() => a.data.target),
        S = u(() => a.data.rel),
        B = u(() => a.data.settings.clickAction === Do),
        $ = {
          props: a,
          addImagesToLightbox: t,
          siteId: o,
          getPagePathFromId: i,
          cropCSSVars: r,
          desktopCropParams: l,
          mobileCropParams: s,
          href: d,
          calculateFullResolutionTrim: g,
          constructTrimParamForCloudflare: m,
          imagePathParams: v,
          src: p,
          isSvg: b,
          isMobileLayout: _,
          mobileSrc: T,
          srcset: y,
          mobileSrcset: w,
          sizes: O,
          handleImageClick: C,
          elementHeightCssVar: x,
          mobileElementHeightCssVar: F,
          alt: Y,
          tagName: j,
          target: q,
          rel: S,
          isLightboxEnabled: B,
          computed: u,
          GridImage: ws,
          get useLightbox() {
            return un;
          },
          get IMAGE_CLICK_ACTION_LINK() {
            return bi;
          },
          get IMAGE_CLICK_ACTION_LIGHTBOX() {
            return Do;
          },
          get LINK_TYPE() {
            return nr;
          },
          get getOptimizedSrc() {
            return ut;
          },
          get getGridItemSrcset() {
            return Ra;
          },
          get getGridItemSizes() {
            return Vn;
          },
          get getFullWidthSrcset() {
            return wa;
          },
          get parseCSSSides() {
            return sn;
          },
          get useGridImage() {
            return il;
          },
          get getExtension() {
            return on;
          },
          get useSiteGlobal() {
            return nt;
          },
        };
      return (
        Object.defineProperty($, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        $
      );
    },
  },
  cg = ["id"];
function dg(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      {
        id: a.id,
        class: X([
          "image-wrapper",
          { "image-wrapper--layout": t.isMobileLayout },
        ]),
      },
      [
        Ee(
          t.GridImage,
          {
            class: "image-wrapper--desktop",
            alt: t.alt,
            href: t.href,
            sizes: t.sizes,
            src: t.src,
            srcset: t.srcset,
            "tag-name": t.tagName,
            target: t.target,
            rel: t.rel,
            "is-eager": a.lcp.type === "grid-image" && a.lcp.id === a.id,
            "is-lightbox-enabled": t.isLightboxEnabled,
            "element-height": a.elementHeight,
            "element-width": a.elementWidth,
            "shape-mask-source": a.shapeMaskSource,
            "reset-mobile-position": a.resetMobilePosition,
            "mobile-border-radius": a.mobileBorderRadius,
            "desktop-border-radius": a.desktopBorderRadius,
            "is-in-preview-mode": a.isInPreviewMode,
            "overlay-opacity": a.overlayOpacity,
            onImageClick: t.handleImageClick,
          },
          null,
          8,
          [
            "alt",
            "href",
            "sizes",
            "src",
            "srcset",
            "tag-name",
            "target",
            "rel",
            "is-eager",
            "is-lightbox-enabled",
            "element-height",
            "element-width",
            "shape-mask-source",
            "reset-mobile-position",
            "mobile-border-radius",
            "desktop-border-radius",
            "is-in-preview-mode",
            "overlay-opacity",
          ]
        ),
        t.isMobileLayout
          ? (c(),
            K(
              t.GridImage,
              {
                key: 0,
                "is-mobile-image": !0,
                class: "image-wrapper--mobile",
                alt: t.alt,
                href: t.href,
                sizes: t.sizes,
                src: t.mobileSrc,
                srcset: t.mobileSrcset,
                "tag-name": t.tagName,
                "is-svg": t.isSvg,
                target: t.target,
                rel: t.rel,
                "is-eager": a.lcp.type === "grid-image" && a.lcp.id === a.id,
                "is-lightbox-enabled": t.isLightboxEnabled,
                "element-height": a.mobileElementHeight,
                "element-width": a.mobileElementWidth,
                "shape-mask-source": a.shapeMaskSource,
                "reset-mobile-position": a.resetMobilePosition,
                "mobile-border-radius": a.mobileBorderRadius,
                "desktop-border-radius": a.desktopBorderRadius,
                "overlay-opacity": a.overlayOpacity,
                "is-in-preview-mode": a.isInPreviewMode,
                onImageClick: t.handleImageClick,
              },
              null,
              8,
              [
                "alt",
                "href",
                "sizes",
                "src",
                "srcset",
                "tag-name",
                "is-svg",
                "target",
                "rel",
                "is-eager",
                "is-lightbox-enabled",
                "element-height",
                "element-width",
                "shape-mask-source",
                "reset-mobile-position",
                "mobile-border-radius",
                "desktop-border-radius",
                "overlay-opacity",
                "is-in-preview-mode",
              ]
            ))
          : M("", !0),
      ],
      10,
      cg
    )
  );
}
const mg = re(ug, [
    ["render", dg],
    ["__scopeId", "data-v-db1c8849"],
  ]),
  gg = ie({
    props: {
      src: { type: String, default: null },
      alt: { type: String, default: null },
      poster: { type: String, default: null },
    },
    emits: ["media-load"],
  }),
  vg = ["src", "poster"],
  pg = ["src", "alt"];
function hg(e, n, a, t, o, i) {
  return (
    c(),
    h("figure", null, [
      e.src.includes("video") || e.src.includes(".mp4")
        ? (c(),
          h(
            "video",
            {
              key: 0,
              src: e.src,
              poster: e.poster,
              class: "media-item",
              controls: "",
              onProgressOnce: n[0] || (n[0] = (r) => e.$emit("media-load")),
            },
            null,
            40,
            vg
          ))
        : (c(),
          h(
            "img",
            {
              key: 1,
              src: e.src,
              alt: e.alt,
              class: "media-item",
              onLoad: n[1] || (n[1] = (r) => e.$emit("media-load")),
            },
            null,
            40,
            pg
          )),
    ])
  );
}
const fg = re(gg, [
    ["render", hg],
    ["__scopeId", "data-v-c35ee7e4"],
  ]),
  bg = ie({
    components: { GridInstagramFeedMediaItemFigure: fg },
    props: {
      src: { type: String, default: null },
      alt: { type: String, default: null },
      href: { type: String, default: null },
      poster: { type: String, default: null },
    },
    data() {
      return {
        DATA_ATTRIBUTE_ANIMATION_ROLE: ya,
        DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE: Ar,
        isLoaded: !1,
      };
    },
  }),
  yg = ["href"],
  _g = { key: 1 },
  wg = { key: 2, class: "placeholder" };
function kg(e, n, a, t, o, i) {
  const r = He("GridInstagramFeedMediaItemFigure");
  return (
    c(),
    h(
      "div",
      Xe({
        class: ["media-wrapper", { loaded: e.isLoaded }],
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]:
          e.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE,
      }),
      [
        e.src && e.href
          ? (c(),
            h(
              "a",
              {
                key: 0,
                title: "Open instagram page of this image",
                href: e.href,
                rel: "noopener",
                target: "_blank",
              },
              [
                Ee(
                  r,
                  {
                    src: e.src,
                    alt: e.alt,
                    poster: e.poster,
                    onMediaLoad: n[0] || (n[0] = (l) => (e.isLoaded = !0)),
                  },
                  null,
                  8,
                  ["src", "alt", "poster"]
                ),
              ],
              8,
              yg
            ))
          : e.src && !e.href
          ? (c(),
            h("div", _g, [
              Ee(
                r,
                {
                  src: e.src,
                  alt: e.alt,
                  poster: e.poster,
                  onMediaLoad: n[1] || (n[1] = (l) => (e.isLoaded = !0)),
                },
                null,
                8,
                ["src", "alt", "poster"]
              ),
            ]))
          : (c(), h("div", wg)),
      ],
      16
    )
  );
}
const Sg = re(bg, [
    ["render", kg],
    ["__scopeId", "data-v-8ece2404"],
  ]),
  Tg = ie({
    components: { GridInstagramFeedMediaItem: Sg },
    props: {
      id: { type: String, required: !0 },
      media: { type: Array, default: () => [] },
    },
  }),
  Cg = ["id"];
function Pg(e, n, a, t, o, i) {
  const r = He("GridInstagramFeedMediaItem");
  return (
    c(),
    h(
      "div",
      { id: e.id, class: "instagram-feed" },
      [
        (c(!0),
        h(
          ve,
          null,
          Te(
            e.media,
            (l) => (
              c(),
              K(
                r,
                {
                  key: l.src,
                  src: l.src,
                  href: l.href,
                  alt: l.alt,
                  poster: l.poster,
                },
                null,
                8,
                ["src", "href", "alt", "poster"]
              )
            )
          ),
          128
        )),
      ],
      8,
      Cg
    )
  );
}
const Ig = re(Tg, [["render", Pg]]),
  ll = [
    { alt: "Workstation", id: "qc2YaEHSYsc", src: `${rt}/workstation.jpg` },
    {
      alt: "Waterfall between rocks",
      id: "ifnzcFXUmH0",
      src: `${rt}/waterfall-between-rocks.jpg`,
    },
    {
      alt: "Trees with snow",
      id: "J2vryWaTqlB",
      src: `${rt}/trees-with-snow.png`,
    },
    { alt: "Tree buds", id: "ZzmFPZuw7S1", src: `${rt}/tree-buds.jpg` },
    {
      alt: "Tiger drinking water",
      id: "k37Jfax7a6k",
      src: `${rt}/tiger-drinking-water.jpg`,
    },
    {
      alt: "Tall well preserved buildings",
      id: "gTNSQDsXWp7",
      src: `${rt}/tall-well-preserved-buildings.jpg`,
    },
    {
      alt: "Sunny beautiful wall",
      id: "QEdmdqjqcMf",
      src: `${rt}/sunny-beautiful-wall.jpg`,
    },
    { alt: "Stereo gear", id: "iUXujDl2onh", src: `${rt}/stereo-gear.jpg` },
    { alt: "Rooftop oasis", id: "LWHjQE4HOv7", src: `${rt}/rooftop-oasis.jpg` },
    { alt: "Rocky beach", id: "o4qz1QOQcpJ", src: `${rt}/rocky-beach.jpg` },
    {
      alt: "Photographer holding camera",
      id: "VAHQ4wGABhK",
      src: `${rt}/photographer-holding-camera.jpg`,
    },
    { alt: "Koi fishes", id: "zg35JVHQ4wG", src: `${rt}/koi-fishes.jpg` },
    {
      alt: "Human head artificially created",
      id: "zg35JVl8GY2",
      src: `${rt}/human-head-artificially-created.jpg`,
    },
    {
      alt: "Horse eating grass",
      id: "dBwJoATZJBH",
      src: `${rt}/horse-eating-grass.jpg`,
    },
    {
      alt: "Fluffy decoration in water",
      id: "HR21NDsphkV",
      src: `${rt}/fluffy-docoration-in-water.jpg`,
    },
    {
      alt: "Elk looking at camera",
      id: "oLq0J4X2h2P",
      src: `${rt}/elk-looking-at-camera.jpg`,
    },
    {
      alt: "Dog running in snow",
      id: "dbULY2RIxXc",
      src: `${rt}/dog-running-in-snow.jpg`,
    },
    {
      alt: "Clean workspace",
      id: "WRmXHA1JA8H",
      src: `${rt}/clean-workspace.jpg`,
    },
    {
      alt: "Cinematic food shot",
      id: "YgbHW4EtzbY",
      src: `${rt}/cinematic-food-shot.jpg`,
    },
    {
      alt: "Christmas houses",
      id: "Eyoj1y8hvYz",
      src: `${rt}/christmas-houses.jpg`,
    },
    {
      alt: "Bird sitting on branch",
      id: "yQKxjLtI8eg",
      src: `${rt}/bird-sitting-on-branch.jpg`,
    },
    {
      alt: "Beautiful entry to private property",
      id: "1StnvFtqFjR",
      src: `${rt}/beautiful-entry-to-private-property.jpg`,
    },
    {
      alt: "African animals",
      id: "nPjqWNmfFf0",
      src: `${rt}/african-animals.jpg`,
    },
    { alt: "Workspace", id: "7gsm5H6lHSH", src: `${rt}/workspace.jpg` },
  ],
  Eg = "https://graph.instagram.com/me/media",
  Dg = ["id", "permalink", "caption", "media_url", "thumbnail_url"],
  Mg = ({
    elementId: e,
    elementData: n,
    siteId: a,
    getInstagramTokenHandler: t,
    cleanupCallback: o,
  }) => {
    const i = u(() => n.value.settings["item-count"]),
      r = E(null),
      l = E([]),
      s = u(() =>
        l.value.length > 0
          ? l.value.filter(({ src: m }) => typeof m < "u").slice(0, i.value)
          : new Array(i.value).fill({})
      ),
      d = async () => {
        const m = new URL(Eg);
        m.searchParams.set("fields", Dg.join(",")),
          m.searchParams.set("access_token", r.value);
        const v = await fetch(m.toString());
        return v.ok
          ? (await v.json()).data
          : Promise.reject(new Error("Failed to fetch Instagram media"));
      };
    return {
      media: s,
      init: async () => {
        try {
          r.value = await t({ siteId: a, elementId: e.value });
        } catch {
          l.value = ll;
          return;
        }
        try {
          const m = await d();
          l.value = m.map((v) => ({
            id: v.id,
            src: v.media_url,
            alt: v.caption,
            href: v.permalink,
            poster: v.thumbnail_url,
          }));
        } catch (m) {
          throw ((l.value = ll), o && o(r.value), m);
        }
      },
      itemGap: u(() => n.value.settings.styles["item-gap"]),
    };
  },
  Og = ie({
    components: { GridInstagramFeed: Ig },
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
    },
    emits: ["media-loaded"],
    setup(e, n) {
      const { siteId: a } = nt(),
        t = u(() => e.id),
        o = u(() => e.data),
        i = async ({ siteId: s, elementId: d }) =>
          (
            await (
              await fetch(
                `https://builder-backend.hostinger.com/u1/instagram/token/${s}/${d}`
              )
            ).json()
          ).accessToken,
        { media: r, init: l } = Mg({
          elementId: t,
          elementData: o,
          siteId: a.value,
          getInstagramTokenHandler: i,
        });
      return (
        Me(() => {
          l();
        }),
        xe(
          r,
          async (s) => {
            s?.length && (await At(), n.emit("media-loaded"));
          },
          { immediate: !1 }
        ),
        { media: r }
      );
    },
  });
function Ag(e, n, a, t, o, i) {
  const r = He("GridInstagramFeed");
  return c(), K(r, { id: e.id, media: e.media }, null, 8, ["id", "media"]);
}
const Bg = re(Og, [["render", Ag]]),
  Lg = ie({
    name: "GridMap",
    props: {
      isIframeLoaded: { type: Boolean, default: !1 },
      shouldRender: { type: Boolean, default: !0 },
      src: { type: String, required: !0 },
    },
    computed: {
      renderSrc() {
        return this.shouldRender ? this.src : null;
      },
    },
  }),
  xg = ["src"],
  Rg = { class: "grid-map__pin" };
function Ng(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: X(["grid-map", { "grid-map--loading": !e.isIframeLoaded }]) },
      [
        P(
          "iframe",
          {
            ref: "iframeRef",
            class: "grid-map__frame",
            width: "100%",
            height: "100%",
            src: e.renderSrc,
          },
          null,
          8,
          xg
        ),
        de(P("div", Rg, null, 512), [[Wt, !e.isIframeLoaded]]),
      ],
      2
    )
  );
}
const Hg = re(Lg, [
    ["render", Ng],
    ["__scopeId", "data-v-3b334315"],
  ]),
  Vg = (e, n) => {
    try {
      const { isObserved: a } = ys(n),
        t = E(!1),
        o = ba({
          src: u(() => e.data.settings?.src),
          shouldRender: u(() => a.value),
          isIframeLoaded: u(() => t.value),
        }),
        i = Or(() => {
          const r = n.value?.$refs;
          r &&
            (r.iframeRef.addEventListener("load", () => {
              t.value = !0;
            }),
            i());
        });
      return { composedProps: o };
    } catch (a) {
      console.error(a);
    }
  },
  Ug = ie({
    name: "GridMapProviderUser",
    components: { GridMap: Hg },
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      const n = E(null),
        { composedProps: a } = Vg(e, n);
      return { mapRef: n, composedProps: a };
    },
  });
function Yg(e, n, a, t, o, i) {
  const r = He("GridMap");
  return c(), K(r, je({ ref: "mapRef" }, e.composedProps), null, 16);
}
const $g = re(Ug, [["render", Yg]]),
  Fg = ie({
    __name: "GridSocialIcons",
    props: {
      links: { default: () => [] },
      preventLinks: { type: Boolean, default: !1 },
      direction: { default: "row" },
      directionMobile: { default: null },
      preventSpacing: { type: Boolean, default: !1 },
      fullHeight: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = u(() => ["social-icons", `social-icons--${a.direction}`]),
        o = u(() => ({
          "--m-icon-direction": a.directionMobile || a.direction,
          "--icon-padding-vertical":
            a.direction === "column" ? "var(--space-between-icons)" : "0",
          "--icon-padding-horizontal":
            a.direction === "row" ? "var(--space-between-icons)" : "0",
          ...(a.fullHeight && { height: "100%" }),
          ...(a.preventSpacing && { "--space-between-icons": "0px" }),
          ...(a.directionMobile && {
            "--m-icon-padding-vertical":
              a.directionMobile === "column"
                ? "var(--space-between-icons)"
                : "0",
            "--m-icon-padding-horizontal":
              a.directionMobile === "row" ? "var(--space-between-icons)" : "0",
          }),
        })),
        i = { props: a, computedClass: t, computedStyles: o };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  Wg = ["href", "title", "innerHTML"];
function Gg(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: X(t.computedClass), style: Be(t.computedStyles) },
      [
        (c(!0),
        h(
          ve,
          null,
          Te(
            a.links,
            ({ link: r, svg: l, title: s }) => (
              c(),
              h(
                "a",
                je(
                  {
                    key: r,
                    href: r,
                    target: "_blank",
                    rel: "noopener",
                    title: s,
                    class: "social-icons__link",
                  },
                  Xl({
                    dragstart: a.preventLinks
                      ? (d) => d.preventDefault()
                      : () => null,
                    click: a.preventLinks
                      ? (d) => d.preventDefault()
                      : () => null,
                  }),
                  { innerHTML: l }
                ),
                null,
                16,
                Wg
              )
            )
          ),
          128
        )),
      ],
      6
    )
  );
}
const ks = re(Fg, [
    ["render", Gg],
    ["__scopeId", "data-v-1ee40361"],
  ]),
  qg = (e) => {
    const n = u(() => e.data.settings.styles);
    return ba({
      links: u(() =>
        e.data.links.map((t) => ({ ...t, title: `Go to ${xc(t.icon)} page` }))
      ),
      direction: u(() => n.value["icon-direction"]),
      directionMobile: u(() => n.value["m-icon-direction"]),
      fullHeight: u(() => !n.value.justify),
      preventSpacing: u(() =>
        n.value["icon-spacing"] !== "center" ||
        n.value["icon-direction"] === "column"
          ? !n.value.justify
          : !n.value.align
      ),
    });
  },
  jg = ie({
    components: { GridSocialIcons: ks },
    props: { data: { type: Object, required: !0 } },
    setup(e, n) {
      return { composedProps: qg(e) };
    },
  });
function zg(e, n, a, t, o, i) {
  const r = He("GridSocialIcons");
  return c(), K(r, Xe(Ct(e.composedProps)), null, 16);
}
const Kg = re(jg, [["render", zg]]),
  Qg = E(null),
  Xg = (e) => {
    const n = u(() => e.data.settings?.priceId || ""),
      a = u(() => e.data.settings?.paymentType || "payment");
    return { stripeInstance: Qg, priceId: n, paymentType: a };
  },
  Zg = "https://js.stripe.com/v3",
  Jg = ie({
    name: "GridStripeButtonProviderUser",
    components: { GridButton: Ga },
    props: {
      data: { type: Object, required: !0 },
      successPageSlug: { type: String, required: !0 },
      cancellationPageSlug: { type: String, required: !0 },
      stripePublicApiKey: { type: String, default: "" },
    },
    setup(e) {
      const { getButtonHref: n } = nt(),
        { content: a, type: t } = Yn(e, {
          href: u(() =>
            n({
              isFormButton: e.data.settings.isFormButton,
              linkedPageId: e.data.linkedPageId,
              linkType: e.data.linkType,
              href: e.data.href,
            })
          ),
        }),
        { stripeInstance: o, priceId: i, paymentType: r } = Xg(e),
        l = E(!1),
        s = () =>
          new Promise((g, m) => {
            if (!!(o.value && window.Stripe)) {
              g();
              return;
            }
            const p = document.createElement("script");
            p.addEventListener("load", () => {
              window.Stripe &&
                ((o.value = window.Stripe(e.stripePublicApiKey)), g());
            }),
              p.addEventListener("error", () => {
                m();
              }),
              (p.src = Zg),
              document.head.appendChild(p);
          });
      return {
        content: a,
        type: t,
        isLoadingStripeScript: l,
        handleClick: async () => {
          i.value &&
            ((l.value = !0),
            await s(),
            (l.value = !1),
            o.value
              .redirectToCheckout({
                lineItems: [{ price: i.value, quantity: 1 }],
                mode: r.value,
                successUrl: `${window.location.origin}/${e.successPageSlug}`,
                cancelUrl: `${window.location.origin}/${e.cancellationPageSlug}`,
              })
              .then((g) => {
                g.error && console.error(g.error.message);
              }));
        },
      };
    },
  });
function ev(e, n, a, t, o, i) {
  const r = He("GridButton"),
    l = ze("qa");
  return de(
    (c(),
    K(
      r,
      {
        "tag-name": "button",
        content: e.content,
        type: e.type,
        "is-disabled": e.isLoadingStripeScript,
        onClick: e.handleClick,
      },
      null,
      8,
      ["content", "type", "is-disabled", "onClick"]
    )),
    [[l, "button-stripe-checkout"]]
  );
}
const tv = re(Jg, [["render", ev]]),
  av = {
    __name: "GridTextBox",
    props: {
      textAlign: { type: String, default: null },
      textAlignMobile: { type: String, default: null },
      backgroundColor: { type: String, default: null },
      content: { type: String, default: null },
    },
    setup(e, { expose: n }) {
      n(),
        et((l) => ({
          "6ce2bb40": o.value,
          "00f7905c": t.value,
          a82e6ffc: i.value,
        }));
      const a = e,
        t = u(() => a.backgroundColor),
        o = u(() => (a.textAlign === "justify" ? "normal" : "break-spaces")),
        i = u(() =>
          a.textAlignMobile && a.textAlignMobile === "justify"
            ? "normal"
            : o.value
        ),
        r = {
          props: a,
          backgroundColor: t,
          whiteSpace: o,
          whiteSpaceMobile: i,
          computed: u,
        };
      return (
        Object.defineProperty(r, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  },
  nv = ["innerHTML"],
  ov = { key: 1, class: "text-box" };
function rv(e, n, a, t, o, i) {
  return a.content
    ? (c(),
      h(
        "div",
        { key: 0, class: "text-box", innerHTML: a.content },
        null,
        8,
        nv
      ))
    : (c(), h("div", ov, [ae(e.$slots, "default")]));
}
const Ss = re(av, [["render", rv]]),
  iv = {
    __name: "GridTextBoxProviderUser",
    props: { data: { type: Object, required: !0 } },
    setup(e, { expose: n }) {
      n();
      const a = { GridTextBox: Ss };
      return (
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  };
function lv(e, n, a, t, o, i) {
  return (
    c(),
    K(
      t.GridTextBox,
      {
        "text-align": a.data.settings.styles.text,
        "text-align-mobile": a.data.settings.styles["m-text"],
        "background-color": a.data.backgroundColor,
        content: a.data.content,
      },
      null,
      8,
      ["text-align", "text-align-mobile", "background-color", "content"]
    )
  );
}
const sv = re(iv, [["render", lv]]),
  St = { YOUTUBE: "youtube", VIMEO: "vimeo" },
  zn = "0",
  go = "1",
  uv = zn,
  cv = zn,
  dv = go,
  mv = zn,
  gv = zn,
  vv = go;
St.YOUTUBE;
const pv = /t=\d+/g,
  Tt = {
    AUTOPLAY: "autoplay",
    LOOP: "loop",
    CONTROLS: "controls",
    AUTOPAUSE: "autopause",
    PLAYLIST: "playlist",
    PLAYSINLINE: "playsinline",
    ALBUM: "h",
    MUTE: { [St.YOUTUBE]: "mute", [St.VIMEO]: "muted" },
    TIME: "t",
    START: "start",
  },
  hv = {
    [St.YOUTUBE]: "https://www.youtube.com/embed/",
    [St.VIMEO]: "https://player.vimeo.com/video/",
  },
  vr = {
    [St.YOUTUBE]:
      /^.*(?:youtu\.be\/|vi?\/|u\/\w\/|embed\/|watch\/|shorts\/|\?vi?=|&vi?=)([^#&?]{11}).*/,
    [St.VIMEO]:
      /https:\/\/(?:vimeo.com|player.vimeo.com)\/(?:video\/)?(\d*)(.*)/,
  },
  fv = "https://vimeo.com/api/oembed.json?url=https://vimeo.com",
  bv = {
    __name: "GridVideo",
    props: {
      renderIframe: { type: Boolean, default: !1 },
      renderPicture: { type: Boolean, default: !0 },
      src: { type: String, required: !0 },
      provider: { type: String, default: St.YOUTUBE },
      jpg: { type: String, default: "" },
      webp: { type: String, default: "" },
    },
    setup(e, { expose: n }) {
      n(), et((i) => ({ "60d8e812": t.value }));
      const a = E(!1),
        t = u(() => (a.value ? "transparent" : "var(--color-dark)")),
        o = {
          isIframeLoaded: a,
          backgroundColor: t,
          get PROVIDERS() {
            return St;
          },
          computed: u,
          ref: E,
        };
      return (
        Object.defineProperty(o, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  },
  yv = { class: "video" },
  _v = ["src"],
  wv = ["srcset"],
  kv = ["src"];
function Sv(e, n, a, t, o, i) {
  const r = ze("qa");
  return (
    c(),
    h("div", yv, [
      a.renderIframe
        ? (c(),
          h(
            "iframe",
            {
              key: 0,
              src: a.src,
              class: "video__frame",
              allow:
                "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
              allowfullscreen: "",
              width: "100%",
              height: "100%",
              onLoad: n[0] || (n[0] = (l) => (t.isIframeLoaded = !0)),
            },
            null,
            40,
            _v
          ))
        : a.renderPicture && (a.jpg || a.webp)
        ? (c(),
          h(
            ve,
            { key: 1 },
            [
              P("picture", null, [
                P(
                  "source",
                  { type: "image/webp", srcset: a.webp },
                  null,
                  8,
                  wv
                ),
                de(
                  P(
                    "img",
                    {
                      referrerpolicy: "origin",
                      class: "video__placeholder",
                      height: "100%",
                      width: "100%",
                      src: a.jpg,
                    },
                    null,
                    8,
                    kv
                  ),
                  [[r, "builder-gridelement-gridvideo"]]
                ),
              ]),
              P(
                "button",
                {
                  type: "button",
                  class: X(`video__play video__play--${a.provider}`),
                },
                null,
                2
              ),
            ],
            64
          ))
        : M("", !0),
    ])
  );
}
const Tv = re(bv, [
    ["render", Sv],
    ["__scopeId", "data-v-ad3c9850"],
  ]),
  sl = {
    jpg: "https://i.ytimg.com/vi/hqdefault.jpg",
    webp: "https://i.ytimg.com/vi_webp/hqdefault.webp",
  },
  Cv = async (e) => {
    const n = await fetch(`${fv}/${e}`);
    if (!n.ok) return sl;
    const a = await n.json();
    if (!a.thumbnail_url) return sl;
    const t = a.thumbnail_url.replace("_295x166", "_720");
    return {
      jpg: t.replace(".webp", ".jpg"),
      webp: t.replace(".jpg", ".webp"),
    };
  },
  Pv = async (e, n) => {
    switch (e) {
      case St.YOUTUBE:
        return {
          jpg: `https://i.ytimg.com/vi/${n}/hqdefault.jpg`,
          webp: `https://i.ytimg.com/vi_webp/${n}/hqdefault.webp`,
        };
      case St.VIMEO:
        return Cv(n);
      default:
        return { jpg: null, webp: null };
    }
  },
  Ts = (e, n, a, t) => {
    const o = n === St.VIMEO ? e.split("/")[1] : null,
      i = n === St.VIMEO ? e.split("/")[0] : e,
      r = t.match(pv),
      l = n === St.YOUTUBE && r ? { [Tt.START]: r[0].slice(2) ?? 0 } : {},
      s = Tt.MUTE[n],
      d = new URLSearchParams({
        [Tt.ALBUM]: o,
        [Tt.PLAYLIST]: i,
        [Tt.AUTOPLAY]: a?.[Tt.AUTOPLAY] ?? uv,
        [Tt.CONTROLS]: a?.[Tt.CONTROLS] ?? dv,
        [Tt.LOOP]: a?.[Tt.LOOP] ?? cv,
        [Tt.AUTOPAUSE]: mv,
        [Tt.PLAYSINLINE]: vv,
        [s]: gv,
        ...l,
      }).toString();
    return `${hv[n]}${i}?${d}`;
  },
  Iv = async (e, n) => {
    const a = Object.entries(vr).find(([, g]) => e?.match(g)),
      t = a && a.length === 2;
    if (!t) return { url: e, isUrlValid: !1 };
    const [o, i] = a,
      r = e.match(i),
      l = [r[1], r[2]].join(""),
      { jpg: s, webp: d } = await Pv(o, l);
    return {
      src: Ts(l, o, n, e),
      isUrlValid: t,
      jpg: s,
      webp: d,
      provider: o,
      id: l,
    };
  },
  Ev = (e) => {
    const n = ba({
        src: null,
        provider: null,
        width: null,
        height: null,
        webp: null,
        jpg: null,
      }),
      a = ba({
        src: u(() => n.src ?? e.data.settings.src),
        provider: u(() => n.provider ?? e.data.settings.provider),
        width: u(() => n.width ?? e.data.settings.width),
        height: u(() => n.height ?? e.data.settings.height),
        webp: u(() => n.webp ?? e.data.settings.webp),
        jpg: u(() => n.jpg ?? e.data.settings.jpg),
      });
    return (
      Or(() => {
        (e.data.settings.src !== a.src || !e.data.settings.jpg) &&
          Iv(e.data.settings.src).then((t) => {
            Object.entries(t).forEach(([o, i]) => {
              n[o] = i;
            });
          });
      }),
      { composedProps: a }
    );
  },
  Dv = ie({
    name: "GridVideoProviderUser",
    components: { GridVideo: Tv },
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      const { composedProps: n } = Ev(e),
        a = E(null),
        t = u(
          () => e.data.settings.src?.includes(`${[Tt.AUTOPLAY]}=${go}`) ?? !1
        ),
        o = u(() => {
          const s = Tt.MUTE[n.provider];
          return t.value
            ? n.src.replace(`${[s]}=${zn}`, `${[s]}=${go}`)
            : n.src;
        }),
        i = E(!1),
        r = E(!1),
        l = () => {
          const s = new IntersectionObserver(
            ([{ isIntersecting: d }]) => {
              d && (t.value ? (i.value = !0) : (r.value = !0), s.disconnect());
            },
            { threshold: 0 }
          );
          s.observe(a.value.$el), (i.value = !0);
        };
      return (
        Me(() => {
          l();
        }),
        {
          videoRef: a,
          composedProps: n,
          composedSrc: o,
          renderIframe: i,
          renderPicture: r,
        }
      );
    },
  });
function Mv(e, n, a, t, o, i) {
  const r = He("GridVideo");
  return (
    c(),
    K(
      r,
      je({ ref: "videoRef" }, e.composedProps, {
        src: e.composedSrc,
        "render-iframe": e.renderIframe,
        "render-picture": e.renderPicture,
        onClickOnce: n[0] || (n[0] = (l) => (e.renderIframe = !0)),
      }),
      null,
      16,
      ["src", "render-iframe", "render-picture"]
    )
  );
}
const Ov = re(Dv, [["render", Mv]]),
  Av = ie({
    name: "GridShape",
    props: { svg: { type: String, required: !0 } },
  }),
  Bv = ["innerHTML"];
function Lv(e, n, a, t, o, i) {
  return c(), h("div", { class: "grid-shape", innerHTML: e.svg }, null, 8, Bv);
}
const xv = re(Av, [["render", Lv]]),
  Rv = ie({
    name: "GridShapeProviderUser",
    components: { GridShape: xv },
    props: {
      data: { type: Object, required: !0 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    computed: {
      cssVars() {
        const e = (this.data.mobile.height * 100) / ta,
          n = (this.data.desktop.height * 100) / ga;
        return {
          "--shape-height": `${this.data.desktop.height}px`,
          "--m-shape-height": this.isInPreviewMode
            ? `${this.data.mobile.height}px`
            : `${e}vw`,
          "--t-shape-height": `${this.data.mobile.height}px`,
          "--small-desktop-shape-height": `${n}vw`,
          "--shape-color": `${this.data.color}`,
        };
      },
    },
  });
function Nv(e, n, a, t, o, i) {
  const r = He("GridShape");
  return (
    c(),
    K(r, { svg: e.data.svg, style: Be(e.cssVars) }, null, 8, ["svg", "style"])
  );
}
const Hv = re(Rv, [["render", Nv]]),
  Vv = ie({
    __name: "ProductMediaElement",
    props: {
      mediaType: { default: An.IMAGE },
      alt: {},
      src: {},
      isEager: { type: Boolean, default: !1 },
      objectFit: { default: "cover" },
      imageRatio: {},
      width: { default: 0 },
      height: { default: 0 },
      enableSrcset: { type: Boolean, default: !1 },
      imageOrigin: { default: "other" },
      isLossless: { type: Boolean, default: !1 },
      siteId: { default: "" },
      secondaryImageSrc: {},
      isVideoAutoplayDisabled: { type: Boolean },
      isVideoDisabled: { type: Boolean },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = E(a.src),
        o = E(),
        i = E(!1),
        r = u(() => (a.enableSrcset ? Vn(a.width) : void 0)),
        l = (p) => {
          const b = p.match(vr[St.YOUTUBE])?.[1];
          return Ts(b, St.YOUTUBE, { [Tt.AUTOPLAY]: 1, [Tt.CONTROLS]: 1 }, p);
        },
        s = (p) =>
          a.mediaType === An.VIDEO
            ? `https://i.ytimg.com/vi_webp/${
                p.match(vr[St.YOUTUBE])?.[1]
              }/hqdefault.webp`
            : p,
        d = (p) => {
          const b = s(p);
          return ut(a.imageOrigin, b, a.siteId, {
            width: a.width,
            height: a.height,
            shouldContain: a.objectFit === "contain",
            isLossless: a.isLossless,
          });
        },
        g = (p) => {
          if (!a.enableSrcset) return;
          const b = s(p);
          return Ra(a.imageOrigin, b, a.siteId, {
            width: a.width,
            height: a.height,
            shouldContain: a.objectFit === "contain",
            isLossless: a.isLossless,
          });
        },
        m = () => {
          if (a.secondaryImageSrc) {
            const p = new Image(),
              b = g(a.secondaryImageSrc);
            (p.src = d(a.secondaryImageSrc)), b && (p.srcset = b);
          }
        };
      xe(
        () => a.imageRatio,
        (p, b) => {
          p !== b && ((t.value = d(a.src)), (o.value = g(a.src)));
        }
      ),
        xe(
          () => a.src,
          () => {
            (t.value = d(a.src)), (o.value = g(a.src));
          }
        ),
        xe(
          () => a.secondaryImageSrc,
          () => {
            m();
          }
        ),
        Me(() => {
          (t.value = d(a.src)), (o.value = g(a.src)), m();
        });
      const v = {
        props: a,
        imageUrl: t,
        srcset: o,
        isLoaded: i,
        sizes: r,
        getVideoUrl: l,
        getMediaImageUrl: s,
        getOptimizedImageUrl: d,
        getSrcSet: g,
        preloadSecondaryImage: m,
        get EcommerceProductMediaType() {
          return An;
        },
      };
      return (
        Object.defineProperty(v, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        v
      );
    },
  }),
  Uv = ["src"],
  Yv = ["loading", "src", "alt", "srcset", "sizes"];
function $v(e, n, a, t, o, i) {
  return (
    c(),
    K(
      xt,
      { appear: "", name: "fade", mode: "out-in" },
      {
        default: he(() => [
          !a.isVideoDisabled &&
          a.mediaType === t.EcommerceProductMediaType.VIDEO &&
          !a.isVideoAutoplayDisabled
            ? (c(),
              h(
                "iframe",
                {
                  key: 0,
                  src: t.getVideoUrl(a.src),
                  allow:
                    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                  allowfullscreen: "",
                  width: 140,
                  height: 140,
                },
                null,
                8,
                Uv
              ))
            : (c(),
              h(
                "img",
                je({ key: 1 }, e.$attrs, {
                  loading: a.isEager ? "eager" : "lazy",
                  src: t.imageUrl,
                  alt: a.alt,
                  srcset: t.srcset,
                  sizes: t.sizes,
                  class: [
                    "ecommerce-product-image",
                    { "ecommerce-product-image--loading": !t.isLoaded },
                  ],
                  onLoad: n[0] || (n[0] = (r) => (t.isLoaded = !0)),
                  onError: n[1] || (n[1] = (r) => (t.isLoaded = !0)),
                }),
                null,
                16,
                Yv
              )),
        ]),
        _: 1,
      }
    )
  );
}
const _o = re(Vv, [["render", $v]]);
function wo(e) {
  return Jl() ? (es(e), !0) : !1;
}
function rn(e) {
  return typeof e == "function" ? e() : L(e);
}
const $r = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Fv = (e) => e != null,
  Wv = Object.prototype.toString,
  Gv = (e) => Wv.call(e) === "[object Object]",
  Bn = () => {},
  pr = qv();
function qv() {
  var e, n;
  return (
    $r &&
    ((e = window?.navigator) == null ? void 0 : e.userAgent) &&
    (/iP(ad|hone|od)/.test(window.navigator.userAgent) ||
      (((n = window?.navigator) == null ? void 0 : n.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(window?.navigator.userAgent)))
  );
}
function jv(e) {
  return Zl();
}
function zv(...e) {
  if (e.length !== 1) return Ua(...e);
  const n = e[0];
  return typeof n == "function" ? Lu(xu(() => ({ get: n, set: Bn }))) : E(n);
}
function Cs(e, n = !0, a) {
  jv() ? Me(e, a) : n ? e() : At(e);
}
function Lt(e) {
  var n;
  const a = rn(e);
  return (n = a?.$el) != null ? n : a;
}
const Kn = $r ? window : void 0,
  Kv = $r ? window.document : void 0;
function Na(...e) {
  let n, a, t, o;
  if (
    (typeof e[0] == "string" || Array.isArray(e[0])
      ? (([a, t, o] = e), (n = Kn))
      : ([n, a, t, o] = e),
    !n)
  )
    return Bn;
  Array.isArray(a) || (a = [a]), Array.isArray(t) || (t = [t]);
  const i = [],
    r = () => {
      i.forEach((g) => g()), (i.length = 0);
    },
    l = (g, m, v, p) => (
      g.addEventListener(m, v, p), () => g.removeEventListener(m, v, p)
    ),
    s = xe(
      () => [Lt(n), rn(o)],
      ([g, m]) => {
        if ((r(), !g)) return;
        const v = Gv(m) ? { ...m } : m;
        i.push(...a.flatMap((p) => t.map((b) => l(g, p, b, v))));
      },
      { immediate: !0, flush: "post" }
    ),
    d = () => {
      s(), r();
    };
  return wo(d), d;
}
let ul = !1;
function ko(e, n, a = {}) {
  const {
    window: t = Kn,
    ignore: o = [],
    capture: i = !0,
    detectIframe: r = !1,
  } = a;
  if (!t) return Bn;
  pr &&
    !ul &&
    ((ul = !0),
    Array.from(t.document.body.children).forEach((v) =>
      v.addEventListener("click", Bn)
    ),
    t.document.documentElement.addEventListener("click", Bn));
  let l = !0;
  const s = (v) =>
      o.some((p) => {
        if (typeof p == "string")
          return Array.from(t.document.querySelectorAll(p)).some(
            (b) => b === v.target || v.composedPath().includes(b)
          );
        {
          const b = Lt(p);
          return b && (v.target === b || v.composedPath().includes(b));
        }
      }),
    g = [
      Na(
        t,
        "click",
        (v) => {
          const p = Lt(e);
          if (!(!p || p === v.target || v.composedPath().includes(p))) {
            if ((v.detail === 0 && (l = !s(v)), !l)) {
              l = !0;
              return;
            }
            n(v);
          }
        },
        { passive: !0, capture: i }
      ),
      Na(
        t,
        "pointerdown",
        (v) => {
          const p = Lt(e);
          l = !s(v) && !!(p && !v.composedPath().includes(p));
        },
        { passive: !0 }
      ),
      r &&
        Na(t, "blur", (v) => {
          setTimeout(() => {
            var p;
            const b = Lt(e);
            ((p = t.document.activeElement) == null ? void 0 : p.tagName) ===
              "IFRAME" &&
              !b?.contains(t.document.activeElement) &&
              n(v);
          }, 0);
        }),
    ].filter(Boolean);
  return () => g.forEach((v) => v());
}
function Qv() {
  const e = E(!1),
    n = Zl();
  return (
    n &&
      Me(() => {
        e.value = !0;
      }, n),
    e
  );
}
function Ps(e) {
  const n = Qv();
  return u(() => (n.value, !!e()));
}
function Xv(e, n, a = {}) {
  const { window: t = Kn, ...o } = a;
  let i;
  const r = Ps(() => t && "MutationObserver" in t),
    l = () => {
      i && (i.disconnect(), (i = void 0));
    },
    s = u(() => {
      const v = rn(e),
        p = (Array.isArray(v) ? v : [v]).map(Lt).filter(Fv);
      return new Set(p);
    }),
    d = xe(
      () => s.value,
      (v) => {
        l(),
          r.value &&
            t &&
            v.size &&
            ((i = new MutationObserver(n)), v.forEach((p) => i.observe(p, o)));
      },
      { immediate: !0, flush: "post" }
    ),
    g = () => i?.takeRecords(),
    m = () => {
      l(), d();
    };
  return wo(m), { isSupported: r, stop: m, takeRecords: g };
}
function Zv(e = {}) {
  const { document: n = Kv } = e;
  if (!n) return E("visible");
  const a = E(n.visibilityState);
  return (
    Na(n, "visibilitychange", () => {
      a.value = n.visibilityState;
    }),
    a
  );
}
function Is(e, n, a = {}) {
  const { window: t = Kn, ...o } = a;
  let i;
  const r = Ps(() => t && "ResizeObserver" in t),
    l = () => {
      i && (i.disconnect(), (i = void 0));
    },
    s = u(() => (Array.isArray(e) ? e.map((m) => Lt(m)) : [Lt(e)])),
    d = xe(
      s,
      (m) => {
        if ((l(), r.value && t)) {
          i = new ResizeObserver(n);
          for (const v of m) v && i.observe(v, o);
        }
      },
      { immediate: !0, flush: "post" }
    ),
    g = () => {
      l(), d();
    };
  return wo(g), { isSupported: r, stop: g };
}
function Jv(e, n = {}) {
  const {
      reset: a = !0,
      windowResize: t = !0,
      windowScroll: o = !0,
      immediate: i = !0,
    } = n,
    r = E(0),
    l = E(0),
    s = E(0),
    d = E(0),
    g = E(0),
    m = E(0),
    v = E(0),
    p = E(0);
  function b() {
    const _ = Lt(e);
    if (!_) {
      a &&
        ((r.value = 0),
        (l.value = 0),
        (s.value = 0),
        (d.value = 0),
        (g.value = 0),
        (m.value = 0),
        (v.value = 0),
        (p.value = 0));
      return;
    }
    const T = _.getBoundingClientRect();
    (r.value = T.height),
      (l.value = T.bottom),
      (s.value = T.left),
      (d.value = T.right),
      (g.value = T.top),
      (m.value = T.width),
      (v.value = T.x),
      (p.value = T.y);
  }
  return (
    Is(e, b),
    xe(
      () => Lt(e),
      (_) => !_ && b()
    ),
    Xv(e, b, { attributeFilter: ["style", "class"] }),
    o && Na("scroll", b, { capture: !0, passive: !0 }),
    t && Na("resize", b, { passive: !0 }),
    Cs(() => {
      i && b();
    }),
    {
      height: r,
      bottom: l,
      left: s,
      right: d,
      top: g,
      width: m,
      x: v,
      y: p,
      update: b,
    }
  );
}
function ep(e, n = { width: 0, height: 0 }, a = {}) {
  const { window: t = Kn, box: o = "content-box" } = a,
    i = u(() => {
      var m, v;
      return (v = (m = Lt(e)) == null ? void 0 : m.namespaceURI) == null
        ? void 0
        : v.includes("svg");
    }),
    r = E(n.width),
    l = E(n.height),
    { stop: s } = Is(
      e,
      ([m]) => {
        const v =
          o === "border-box"
            ? m.borderBoxSize
            : o === "content-box"
            ? m.contentBoxSize
            : m.devicePixelContentBoxSize;
        if (t && i.value) {
          const p = Lt(e);
          if (p) {
            const b = t.getComputedStyle(p);
            (r.value = Number.parseFloat(b.width)),
              (l.value = Number.parseFloat(b.height));
          }
        } else if (v) {
          const p = Array.isArray(v) ? v : [v];
          (r.value = p.reduce((b, { inlineSize: _ }) => b + _, 0)),
            (l.value = p.reduce((b, { blockSize: _ }) => b + _, 0));
        } else
          (r.value = m.contentRect.width), (l.value = m.contentRect.height);
      },
      a
    );
  Cs(() => {
    const m = Lt(e);
    m &&
      ((r.value = "offsetWidth" in m ? m.offsetWidth : n.width),
      (l.value = "offsetHeight" in m ? m.offsetHeight : n.height));
  });
  const d = xe(
    () => Lt(e),
    (m) => {
      (r.value = m ? n.width : 0), (l.value = m ? n.height : 0);
    }
  );
  function g() {
    s(), d();
  }
  return { width: r, height: l, stop: g };
}
function Ro(e) {
  return typeof Window < "u" && e instanceof Window
    ? e.document.documentElement
    : typeof Document < "u" && e instanceof Document
    ? e.documentElement
    : e;
}
function Es(e) {
  const n = window.getComputedStyle(e);
  if (
    n.overflowX === "scroll" ||
    n.overflowY === "scroll" ||
    (n.overflowX === "auto" && e.clientWidth < e.scrollWidth) ||
    (n.overflowY === "auto" && e.clientHeight < e.scrollHeight)
  )
    return !0;
  {
    const a = e.parentNode;
    return !a || a.tagName === "BODY" ? !1 : Es(a);
  }
}
function tp(e) {
  const n = e || window.event,
    a = n.target;
  return Es(a)
    ? !1
    : n.touches.length > 1
    ? !0
    : (n.preventDefault && n.preventDefault(), !1);
}
const no = new WeakMap();
function Ds(e, n = !1) {
  const a = E(n);
  let t = null;
  xe(
    zv(e),
    (r) => {
      const l = Ro(rn(r));
      if (l) {
        const s = l;
        no.get(s) || no.set(s, s.style.overflow),
          a.value && (s.style.overflow = "hidden");
      }
    },
    { immediate: !0 }
  );
  const o = () => {
      const r = Ro(rn(e));
      !r ||
        a.value ||
        (pr &&
          (t = Na(
            r,
            "touchmove",
            (l) => {
              tp(l);
            },
            { passive: !1 }
          )),
        (r.style.overflow = "hidden"),
        (a.value = !0));
    },
    i = () => {
      var r;
      const l = Ro(rn(e));
      !l ||
        !a.value ||
        (pr && t?.(),
        (l.style.overflow = (r = no.get(l)) != null ? r : ""),
        no.delete(l),
        (a.value = !1));
    };
  return (
    wo(i),
    u({
      get() {
        return a.value;
      },
      set(r) {
        r ? o() : i();
      },
    })
  );
}
const cl = 45,
  ap = ie({
    __name: "SiteElementSearchBar",
    props: {
      placeholderText: {},
      noResultsText: {},
      fillColor: {},
      fillColorHover: {},
      textAndIconColor: {},
      textAndIconColorHover: {},
      resultItemHoverColor: {},
      fontFamily: {},
      borderColor: {},
      borderColorHover: {},
      borderRadius: {},
      translations: {},
      siteId: {},
      searchTerm: { default: "" },
      results: { default: null },
      isLoading: { type: Boolean, default: !1 },
    },
    emits: ["update:search-term", "is-dropdown-open"],
    setup(e, { expose: n, emit: a }) {
      n(),
        et((w) => ({
          "267fbace": w.fontFamily,
          f40754b4: w.textAndIconColor,
          "02e01b36": w.textAndIconColorHover,
          "53b91c91": v.value,
          a5727d5e: w.borderColor,
          "20c4e4da": w.fillColor,
          d7a57b2a: w.borderColorHover,
          "42d4ec82": w.fillColorHover,
          "4bcb8afd": w.resultItemHoverColor,
          "47e68280": t,
        }));
      const t = `${cl}px`,
        o = a,
        i = e,
        r = E(null),
        l = E(!1),
        s = E([]),
        d = E(-1),
        g = u(() => i.isLoading),
        m = u(() => i.results),
        v = u(() => `${i.borderRadius}px`),
        p = () => {
          i.results && d.value < i.results.length - 1 && (d.value += 1);
        },
        b = () => {
          d.value > 0 && (d.value -= 1);
        },
        _ = () => {
          const w = s.value[d.value];
          if (!w) return;
          const O = new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0,
            view: window,
          });
          w.dispatchEvent(O);
        },
        T = () => {
          (l.value = !1), o("update:search-term", ""), (d.value = -1);
        };
      xe([m, g], () => {
        (l.value = !!m.value || g.value), o("is-dropdown-open", l.value);
      }),
        Me(() => {
          ko(r, () => {
            T();
          });
        });
      const y = {
        IMAGE_DIMENSIONS_PX: cl,
        IMAGE_DIMENSIONS_PX_STRING: t,
        emit: o,
        props: i,
        searchBarRef: r,
        isSearchResultDropdownVisible: l,
        itemLinksRefs: s,
        highlightedItemIndex: d,
        isLoading: g,
        results: m,
        borderRadiusInPx: v,
        highlightNextItem: p,
        highlightPreviousItem: b,
        redirectToHighlightedItem: _,
        dropdownCloseHandler: T,
        ZyroLoader: Yr,
        ProductMediaElement: _o,
      };
      return (
        Object.defineProperty(y, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        y
      );
    },
  }),
  np = {
    ref: "searchBarRef",
    class: "site-element-search-bar",
    "aria-owns": "search-results",
    tabindex: "0",
    "aria-haspopup": "listbox",
  },
  op = { class: "site-element-search-bar__input-wrapper" },
  rp = ["placeholder", "value", "onKeydown"],
  ip = {
    key: 0,
    id: "search-results",
    role: "listbox",
    class: "site-element-search-bar__dropdown",
  },
  lp = { key: 1, class: "site-element-search-bar__dropdown-no-results" },
  sp = ["area-selected"],
  up = ["href", "onMouseover", "onFocus", "onKeydown"],
  cp = { class: "search-result-item__content" },
  dp = { class: "search-result-item__title" },
  mp = { class: "search-result-item__price" },
  gp = { key: 0 },
  vp = { key: 0 },
  pp = { key: 0, class: "search-result-item__sale-price" },
  hp = { key: 1 };
function fp(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      np,
      [
        P("div", op, [
          P(
            "input",
            {
              class: "site-element-search-bar__input",
              placeholder: t.props.placeholderText,
              value: t.props.searchTerm,
              onInput:
                n[0] ||
                (n[0] = (r) => t.emit("update:search-term", r.target.value)),
              onKeydown: [
                Oe(Ie(t.highlightNextItem, ["prevent"]), ["down"]),
                Oe(Ie(t.highlightPreviousItem, ["prevent"]), ["up"]),
                Oe(t.redirectToHighlightedItem, ["enter"]),
              ],
            },
            null,
            40,
            rp
          ),
          t.isSearchResultDropdownVisible
            ? (c(),
              h("div", {
                key: 0,
                class: "site-element-search-bar__dropdown-close",
                onClick: t.dropdownCloseHandler,
              }))
            : M("", !0),
        ]),
        t.isSearchResultDropdownVisible
          ? (c(),
            h("ul", ip, [
              t.props.isLoading
                ? (c(),
                  K(
                    t.ZyroLoader,
                    {
                      key: 0,
                      size: "30px",
                      color: t.props.textAndIconColorHover,
                      class: "site-element-search-bar__loader",
                    },
                    null,
                    8,
                    ["color"]
                  ))
                : !t.props.results || t.props.results.length === 0
                ? (c(), h("p", lp, ee(a.noResultsText), 1))
                : (c(!0),
                  h(
                    ve,
                    { key: 2 },
                    Te(
                      t.props.results,
                      (r, l) => (
                        c(),
                        h(
                          "li",
                          {
                            key: r.id,
                            role: "option",
                            "area-selected": l === t.highlightedItemIndex,
                          },
                          [
                            P(
                              "a",
                              {
                                ref_for: !0,
                                ref: "itemLinksRefs",
                                href: r.href,
                                class: X([
                                  "search-result-item",
                                  {
                                    "search-result-item--highlighted":
                                      l === t.highlightedItemIndex,
                                  },
                                ]),
                                onMouseover: (s) =>
                                  (t.highlightedItemIndex = l),
                                onFocus: (s) => (t.highlightedItemIndex = l),
                                onKeydown: Oe(
                                  Ie(t.redirectToHighlightedItem, ["prevent"]),
                                  ["enter"]
                                ),
                              },
                              [
                                r.thumbnail
                                  ? (c(),
                                    K(
                                      t.ProductMediaElement,
                                      {
                                        key: 0,
                                        src: r.thumbnail,
                                        alt: r.title,
                                        class: "search-result-item__image",
                                        width: t.IMAGE_DIMENSIONS_PX,
                                        height: t.IMAGE_DIMENSIONS_PX,
                                        "site-id": t.props.siteId,
                                        "enable-srcset": "",
                                      },
                                      null,
                                      8,
                                      ["src", "alt", "site-id"]
                                    ))
                                  : M("", !0),
                                P("div", cp, [
                                  P("h3", dp, ee(r.title), 1),
                                  P("p", mp, [
                                    r.isInStock
                                      ? (c(),
                                        h("span", gp, [
                                          r.price?.length
                                            ? (c(),
                                              h("span", vp, [
                                                r.oldPrice
                                                  ? (c(),
                                                    h(
                                                      "span",
                                                      pp,
                                                      ee(r.oldPrice),
                                                      1
                                                    ))
                                                  : M("", !0),
                                                Le(" " + ee(r.price), 1),
                                              ]))
                                            : M("", !0),
                                        ]))
                                      : (c(),
                                        h(
                                          "span",
                                          hp,
                                          ee(a.translations.soldOut),
                                          1
                                        )),
                                  ]),
                                ]),
                              ],
                              42,
                              up
                            ),
                          ],
                          8,
                          sp
                        )
                      )
                    ),
                    128
                  )),
            ]))
          : M("", !0),
      ],
      512
    )
  );
}
const bp = re(ap, [["render", fp]]),
  yp = (e, n) => {
    let a;
    return function () {
      const o = () => Reflect.apply(e, this, arguments);
      clearTimeout(a), (a = setTimeout(o, n));
    };
  },
  _p = { 6: 18, 5: 15, 4: 12, 3: 9, 2: 6, 1: 3 },
  wp = (e) => e?.variants[0].booking_event?.length_unit === dr;
function hr(e) {
  return e?.variants[0].booking_event?.length || 0;
}
const Fr = (e, n) => {
    const a = (t) => Math.round(t * 100) / 100;
    return wp(e)
      ? `${a(hr(e) / 1e3 / 60 / 60)} ${n.hourShort}`
      : `${a(hr(e) / 1e3 / 60)} ${n.minuteShort}`;
  },
  Ln = (e) =>
    e[hs] !== Ur
      ? !1
      : !e.variants.every((n, a, t) => {
          const o = t[0]?.prices?.[0] ?? t[0],
            i = n?.prices?.[0] ?? n,
            r = o.sale_amount ?? o.amount,
            l = i.sale_amount ?? i.amount;
          return r === l;
        }),
  Dn = ({ variantsQuantity: e, variantId: n }) =>
    e.find((a) => a.id === n)?.inventory_quantity || 0,
  Ms = ({ product: e, variantsQuantity: n }) =>
    e.variants.reduce(
      (a, t) => a + Dn({ variantsQuantity: n, variantId: t.id }),
      0
    ),
  kp = ({ product: e, variantsQuantity: n }) =>
    e.variants[0].manage_inventory
      ? Ms({ product: e, variantsQuantity: n }) > 0
      : !0,
  Sp = ({ variants: e }) =>
    e.reduce((n, a) =>
      (n.sale_amount || n.amount) <= (a.sale_amount || a.amount) ? n : a
    );
function da({ amount: e, currency: n, isPriceDisplayedWithCurrency: a = !0 }) {
  if (!n) return a ? "€0.00" : "0.00";
  const t = Number(e) || 0,
    i = Number(t / 10 ** n.decimal_digits).toFixed(n.decimal_digits);
  return a ? n.template.replace("$1", i) : i;
}
const Tp = "https://builder-backend.hostinger.com/public",
  Cp = async ({ query: e, indices: n, pageSize: a = 5, storeId: t }) => {
    if (!e) return [];
    const o = await fetch(`${Tp}/search`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: e, indices: n, storeId: t, pageSize: a }),
      }),
      { results: i } = await o.json();
    return i.products.hits;
  },
  dl = 400,
  Pp = ie({
    __name: "SiteElementSearchBarProviderSiteEngine",
    props: {
      data: { type: Object, required: !0 },
      blockId: { type: String, required: !0 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { meta: t, siteId: o, ecommerceShoppingCart: i } = nt(),
        r = u(() => i.value?.translations || {}),
        { toggleSearchDropdown: l } = lr({ blockId: a.blockId }),
        s = E(""),
        d = E(!1),
        g = E(null),
        m = u(() => t.value.ecommerceStoreId),
        v = u(() =>
          g.value
            ? g.value.map((T) => {
                const y =
                    T.site_product_selection === Ur
                      ? Sp({ variants: T.variants })
                      : T.variants[0],
                  {
                    amount: w,
                    sale_amount: O,
                    currency_decimal_digits: C,
                    currency_template: x,
                    manage_inventory: F,
                  } = y,
                  Y = { decimal_digits: C, template: x },
                  j = `/product-redirect/${T.id}`,
                  q = w && Ln(T) ? `${r.value.from} ` : "",
                  S = w ? `${q}${da({ amount: O || w, currency: Y })}` : "",
                  B = O ? da({ amount: w, currency: Y }) : null,
                  $ =
                    !F ||
                    (!!w && kp({ product: T, variantsQuantity: T.variants }));
                return {
                  id: T.id,
                  thumbnail: T.thumbnail,
                  title: T.title,
                  href: j,
                  price: S,
                  oldPrice: B,
                  isInStock: $,
                };
              })
            : null
        ),
        p = yp(async () => {
          (d.value = !0),
            s.value && m.value
              ? (g.value = await Cp({
                  query: s.value,
                  indices: [zu],
                  storeId: m.value,
                }))
              : (g.value = null),
            (d.value = !1);
        }, dl),
        _ = {
          TIMEOUT_MS_SEARCH_DEBOUNCE: dl,
          props: a,
          meta: t,
          siteId: o,
          ecommerceShoppingCart: i,
          ecommerceTranslations: r,
          toggleSearchDropdown: l,
          searchTerm: s,
          isLoading: d,
          results: g,
          storeId: m,
          computedResults: v,
          searchHandler: p,
          updateSearchTerm: ({ newValue: T }) => {
            (s.value = T), p();
          },
          SiteElementSearchBar: bp,
        };
      return (
        Object.defineProperty(_, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        _
      );
    },
  });
function Ip(e, n, a, t, o, i) {
  return (
    c(),
    K(
      t.SiteElementSearchBar,
      {
        "placeholder-text": t.props.data.placeholderText,
        "no-results-text": t.props.data.noResultsText,
        "fill-color": t.props.data.fillColor,
        "fill-color-hover": t.props.data.fillColorHover,
        "text-and-icon-color": t.props.data.textAndIconColor,
        "text-and-icon-color-hover": t.props.data.textAndIconColorHover,
        "font-family": t.props.data.fontFamily,
        "border-color": t.props.data.borderColor,
        "border-color-hover": t.props.data.borderColorHover,
        "border-radius": t.props.data.borderRadius,
        "is-loading": t.isLoading,
        "result-item-hover-color": t.props.data.resultItemHoverColor,
        results: t.computedResults,
        "search-term": t.searchTerm,
        "site-id": t.siteId,
        translations: t.ecommerceTranslations,
        "onUpdate:searchTerm":
          n[0] || (n[0] = (r) => t.updateSearchTerm({ newValue: r })),
        onIsDropdownOpen: t.toggleSearchDropdown,
      },
      null,
      8,
      [
        "placeholder-text",
        "no-results-text",
        "fill-color",
        "fill-color-hover",
        "text-and-icon-color",
        "text-and-icon-color-hover",
        "font-family",
        "border-color",
        "border-color-hover",
        "border-radius",
        "is-loading",
        "result-item-hover-color",
        "results",
        "search-term",
        "site-id",
        "translations",
        "onIsDropdownOpen",
      ]
    )
  );
}
const Ep = re(Pp, [["render", Ip]]),
  kn = E(!1),
  Sn = E(!1),
  No = E(!1),
  Ho = E(""),
  Qa = E(null),
  Vo = E(!1),
  Xa = E(null),
  cn = ({ elementData: e, data: n, elementId: a, blockId: t = null } = {}) => {
    const o = E(null),
      i = E(null),
      r = E(null),
      l = e || n || {},
      s = (y) => `transition transition--${y}`,
      d = u(() => {
        const y = a && Ku.includes(l.type),
          w = !a && !Qu.includes(l.type);
        if (y || w) return "";
        const O = s(l.animation?.name);
        return yi.includes(l.type) ? `${O} transition--root-hidden` : O;
      }),
      g = u(() => {
        const y = Qa.value && a === Qa.value,
          w = Xa.value && t === Xa.value;
        return !kn.value || (Qa.value && !y) || (Xa.value && !w)
          ? ""
          : No.value;
      }),
      m = u(() => (Sn.value ? Nn : null)),
      v = async (y) => {
        y.forEach(({ target: w, isIntersecting: O }) => {
          if (!O) {
            w.removeAttribute(Hn);
            return;
          }
          r.value?.unobserve(w), w.setAttribute(Hn, Nn);
        });
      },
      p = ({ root: y = null } = {}) => {
        l.animation?.name &&
          (r.value = new IntersectionObserver(v, { threshold: 0, root: y }));
      },
      b = async (y) => {
        if (l.animation?.name)
          if ((await At(), yi.includes(l.type))) {
            const w = y?.querySelectorAll(`[${ya}="${Ar}"]`),
              O = y?.querySelectorAll(`[${ya}="${fn}"]`);
            [...w, ...O].forEach((x) => r.value?.observe(x));
          } else r.value?.observe(y);
      },
      _ = () => {
        window.clearTimeout(o.value),
          window.clearTimeout(i.value),
          (kn.value = !1),
          (Sn.value = !1);
      },
      T = ({ animation: y, id: w = null, block: O = null }) => {
        _(),
          y !== "none" &&
            ((Xa.value = O),
            (Qa.value = w),
            (Ho.value = y),
            (kn.value = !0),
            (No.value = s(Ho.value)),
            (o.value = setTimeout(() => {
              Sn.value = !0;
            }, 500)),
            (i.value = setTimeout(() => {
              (kn.value = !1),
                (Sn.value = !1),
                (Qa.value = null),
                (Xa.value = null);
            }, 2e3)));
      };
    return (
      xe(Vo, async (y) => {
        y && (await At(), (Vo.value = !1));
      }),
      {
        intersectionObserver: r,
        animationClass: d,
        animationInEditorClass: No,
        animationInEditorComponentId: Qa,
        animationInEditorBlockId: Xa,
        isAnimationDisplayedInEditor: kn,
        isAnimationDisplayedInEditorActive: Sn,
        animationInEditorName: Ho,
        addIntersectionObserver: p,
        observe: b,
        displayAnimationInEditor: T,
        shouldMountAnimationsInPreview: Vo,
        customAnimationClass: g,
        animationAttributeStateValue: m,
        addTransition: v,
      }
    );
  },
  Dp = {
    __name: "LayoutElementProviderUser",
    props: {
      elementId: { type: String, required: !0 },
      blockId: { type: String, required: !0 },
      elementData: { type: Object, required: !0 },
      overrideWidth: { type: Number, default: null },
      overrideHeight: { type: Number, default: null },
      isMobileLegacy: { type: Boolean, default: !1 },
      lcp: { type: Object, default: () => ({}) },
      siteLanguagePages: { type: Object, required: !0 },
      stripePublicApiKey: { type: String, default: "" },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n(), et((w) => ({ "11a26299": p.value, "5ac4fa85": b.value }));
      const a = e,
        t = E(null),
        {
          intersectionObserver: o,
          animationClass: i,
          addIntersectionObserver: r,
          observe: l,
        } = cn({ elementData: a.elementData, elementId: a.elementId }),
        s = u(() => Object.values(a.siteLanguagePages)[0]),
        d = u(() => a.elementData.mobile?.isHidden || !1),
        g = u(() => a.elementData.desktop?.isHidden || !1),
        m = u(() =>
          a.elementData.type !== Mo
            ? ""
            : (
                a.siteLanguagePages[a.elementData.settings?.successPageId] ||
                s.value
              ).slug
        ),
        v = u(() =>
          a.elementData.type !== Mo
            ? ""
            : (
                a.siteLanguagePages[
                  a.elementData.settings?.cancellationPageId
                ] || s.value
              ).slug
        ),
        p = u(() => `${a.elementData.desktop.height}px`),
        b = u(() => `${a.elementData.mobile.height}px`),
        _ = async () => {
          await l(t.value?.$el);
        },
        T = async () => {
          const O = [_i, wi].includes(a.elementData.type),
            x =
              t.value?.$el.getBoundingClientRect().height > window.innerHeight,
            F = !O && x && t.value ? t.value.$el.parentElement : null;
          r({ root: F }), O || (await _());
        };
      Me(async () => {
        await T();
      }),
        Ot(() => o.value?.disconnect());
      const y = {
        props: a,
        elementRef: t,
        intersectionObserver: o,
        animationClass: i,
        addIntersectionObserver: r,
        observe: l,
        firstLanguagePage: s,
        isMobileElementHidden: d,
        isDesktopElementHidden: g,
        stripeSuccessPageSlug: m,
        stripeCancellationPageSlug: v,
        elementHeightDesktop: p,
        elementHeightMobile: b,
        observeElement: _,
        initiateAnimations: T,
        get ELEMENT_TYPE_BUTTON() {
          return os;
        },
        get ELEMENT_TYPE_STRIPE_BUTTON() {
          return Mo;
        },
        get ELEMENT_TYPE_ECOMMERCE_BUTTON() {
          return Xu;
        },
        get ELEMENT_TYPE_MAP() {
          return ts;
        },
        get ELEMENT_TYPE_VIDEO() {
          return as;
        },
        get ELEMENT_TYPE_IMAGE() {
          return Zu;
        },
        get ELEMENT_TYPE_TEXT_BOX() {
          return Ju;
        },
        get ELEMENT_TYPE_FORM() {
          return ec;
        },
        get ELEMENT_TYPE_INSTAGRAM_FEED() {
          return _i;
        },
        get ELEMENT_TYPE_SOCIAL_ICONS() {
          return rs;
        },
        get ELEMENT_TYPE_GALLERY() {
          return wi;
        },
        get ELEMENT_TYPE_EMBED() {
          return tc;
        },
        get ELEMENT_TYPE_SHAPE() {
          return ac;
        },
        get ELEMENT_TYPE_SEARCH_BAR() {
          return nc;
        },
        LayoutElementWrapper: Od,
        GridButtonProviderUser: Rd,
        GridEcommerceButtonProviderUser: Qd,
        GridEmbedProviderUser: lm,
        GridFormProviderUser: jm,
        GridGalleryProviderUser: ig,
        GridImageProviderUser: mg,
        GridInstagramFeedProviderUser: Bg,
        GridMapProviderUser: $g,
        GridSocialIconsProviderUser: Kg,
        GridStripeButtonProviderUser: tv,
        GridTextBoxProviderUser: sv,
        GridVideoProviderUser: Ov,
        GridShapeProviderUser: Hv,
        SiteElementSearchBarProviderSiteEngine: Ep,
        get useSiteEngineAnimations() {
          return cn;
        },
        computed: u,
        onMounted: Me,
        onBeforeUnmount: Ot,
        ref: E,
        get isSearchDropdownOpen() {
          return ir;
        },
      };
      return (
        Object.defineProperty(y, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        y
      );
    },
  };
function Mp(e, n, a, t, o, i) {
  const r = ze("qa");
  return (
    c(),
    K(
      t.LayoutElementWrapper,
      {
        ref: "elementRef",
        class: X([
          "layout-element",
          [
            {
              "layout-element--desktop-element-hidden":
                t.isDesktopElementHidden,
              "layout-element--mobile-element-hidden": t.isMobileElementHidden,
            },
            t.animationClass,
          ],
        ]),
        "element-data": a.elementData,
        "is-forced-on-top":
          t.isSearchDropdownOpen &&
          a.elementData.type === t.ELEMENT_TYPE_SEARCH_BAR,
        "is-mobile-legacy": a.isMobileLegacy,
      },
      {
        default: he(() => [
          a.elementData.type === t.ELEMENT_TYPE_BUTTON
            ? de(
                (c(),
                K(
                  t.GridButtonProviderUser,
                  {
                    key: 0,
                    id: a.elementId,
                    data: a.elementData,
                    "current-locale": a.currentLocale,
                    "mobile-element-width": a.elementData.mobile.width,
                    "mobile-element-height": a.elementData.mobile.height,
                    class:
                      "layout-element__component layout-element__component--GridButton",
                  },
                  null,
                  8,
                  [
                    "id",
                    "data",
                    "current-locale",
                    "mobile-element-width",
                    "mobile-element-height",
                  ]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : M("", !0),
          a.elementData.type === t.ELEMENT_TYPE_STRIPE_BUTTON
            ? de(
                (c(),
                K(
                  t.GridStripeButtonProviderUser,
                  {
                    key: 1,
                    id: a.elementId,
                    data: a.elementData,
                    "success-page-slug": t.stripeSuccessPageSlug,
                    "cancellation-page-slug": t.stripeCancellationPageSlug,
                    "stripe-public-api-key": a.stripePublicApiKey,
                    class:
                      "layout-element__component layout-element__component--GridStripeButton",
                  },
                  null,
                  8,
                  [
                    "id",
                    "data",
                    "success-page-slug",
                    "cancellation-page-slug",
                    "stripe-public-api-key",
                  ]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : M("", !0),
          a.elementData.type === t.ELEMENT_TYPE_ECOMMERCE_BUTTON
            ? de(
                (c(),
                K(
                  t.GridEcommerceButtonProviderUser,
                  {
                    key: 2,
                    id: a.elementId,
                    data: a.elementData,
                    "is-cart-visible": a.isCartVisible,
                    "mobile-element-width": a.elementData.mobile.width,
                    "mobile-element-height": a.elementData.mobile.height,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                    class:
                      "layout-element__component layout-element__component--GridEcommerceButton",
                  },
                  null,
                  8,
                  [
                    "id",
                    "data",
                    "is-cart-visible",
                    "mobile-element-width",
                    "mobile-element-height",
                    "is-in-preview-mode",
                  ]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : M("", !0),
          a.elementData.type === t.ELEMENT_TYPE_FORM
            ? de(
                (c(),
                K(
                  t.GridFormProviderUser,
                  {
                    key: 3,
                    id: a.elementId,
                    data: a.elementData,
                    "current-locale": a.currentLocale,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                    class:
                      "layout-element__component layout-element__component--GridForm",
                  },
                  null,
                  8,
                  ["id", "data", "current-locale", "is-in-preview-mode"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : M("", !0),
          a.elementData.type === t.ELEMENT_TYPE_VIDEO
            ? de(
                (c(),
                K(
                  t.GridVideoProviderUser,
                  {
                    key: 4,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridVideo",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : M("", !0),
          a.elementData.type === t.ELEMENT_TYPE_TEXT_BOX
            ? de(
                (c(),
                K(
                  t.GridTextBoxProviderUser,
                  {
                    key: 5,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridTextBox",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : M("", !0),
          a.elementData.type === t.ELEMENT_TYPE_MAP
            ? de(
                (c(),
                K(
                  t.GridMapProviderUser,
                  {
                    key: 6,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridMap",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : M("", !0),
          a.elementData.type === t.ELEMENT_TYPE_SOCIAL_ICONS
            ? de(
                (c(),
                K(
                  t.GridSocialIconsProviderUser,
                  {
                    key: 7,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridSocialIcons",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : M("", !0),
          a.elementData.type === t.ELEMENT_TYPE_GALLERY
            ? de(
                (c(),
                K(
                  t.GridGalleryProviderUser,
                  {
                    key: 8,
                    id: a.elementId,
                    data: a.elementData,
                    "element-width": a.elementData.desktop.width,
                    "element-height": a.elementData.desktop.height,
                    class:
                      "layout-element__component layout-element__component--GridGallery",
                    onImageLoad: t.observeElement,
                  },
                  null,
                  8,
                  ["id", "data", "element-width", "element-height"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : M("", !0),
          a.elementData.type === t.ELEMENT_TYPE_IMAGE
            ? de(
                (c(),
                K(
                  t.GridImageProviderUser,
                  {
                    key: 9,
                    id: a.elementId,
                    lcp: a.lcp,
                    data: a.elementData,
                    "mobile-element-width": a.elementData.mobile.width,
                    "mobile-element-height": a.elementData.mobile.height,
                    "element-width": a.elementData.desktop.width,
                    "element-height": a.elementData.desktop.height,
                    "reset-mobile-position": a.isMobileLegacy,
                    "current-locale": a.currentLocale,
                    "mobile-border-radius": a.elementData.mobile.borderRadius,
                    "desktop-border-radius": a.elementData.desktop.borderRadius,
                    "shape-mask-source": a.elementData.shapeMaskSource,
                    "overlay-opacity": a.elementData.overlayOpacity,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                    class:
                      "layout-element__component layout-element__component--GridImage",
                  },
                  null,
                  8,
                  [
                    "id",
                    "lcp",
                    "data",
                    "mobile-element-width",
                    "mobile-element-height",
                    "element-width",
                    "element-height",
                    "reset-mobile-position",
                    "current-locale",
                    "mobile-border-radius",
                    "desktop-border-radius",
                    "shape-mask-source",
                    "overlay-opacity",
                    "is-in-preview-mode",
                  ]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : M("", !0),
          a.elementData.type === t.ELEMENT_TYPE_INSTAGRAM_FEED
            ? de(
                (c(),
                K(
                  t.GridInstagramFeedProviderUser,
                  {
                    key: 10,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridInstagramFeed",
                    onMediaLoaded: t.observeElement,
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : M("", !0),
          a.elementData.type === t.ELEMENT_TYPE_EMBED
            ? de(
                (c(),
                K(
                  t.GridEmbedProviderUser,
                  {
                    key: 11,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridEmbed",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : M("", !0),
          a.elementData.type === t.ELEMENT_TYPE_SHAPE
            ? de(
                (c(),
                K(
                  t.GridShapeProviderUser,
                  {
                    key: 12,
                    id: a.elementId,
                    data: a.elementData,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                    class:
                      "layout-element__component layout-element__component--GridShape",
                  },
                  null,
                  8,
                  ["id", "data", "is-in-preview-mode"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : M("", !0),
          a.elementData.type === t.ELEMENT_TYPE_SEARCH_BAR
            ? de(
                (c(),
                K(
                  t.SiteElementSearchBarProviderSiteEngine,
                  {
                    key: 13,
                    id: a.elementId,
                    data: a.elementData,
                    class: "layout-element__component",
                    "block-id": a.blockId,
                  },
                  null,
                  8,
                  ["id", "data", "block-id"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : M("", !0),
          ae(e.$slots, "default", {}, void 0, !0),
        ]),
        _: 3,
      },
      8,
      ["class", "element-data", "is-forced-on-top", "is-mobile-legacy"]
    )
  );
}
const Op = re(Dp, [
    ["render", Mp],
    ["__scopeId", "data-v-9ddc5313"],
  ]),
  Ap = {
    __name: "BlockLayoutProviderUser",
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      components: { type: Object, default: () => ({}) },
      lcp: { type: Object, default: () => ({}) },
      siteLanguagePages: { type: Object, required: !0 },
      stripePublicApiKey: { type: String, default: "" },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { isSearchOpenedInCurrentBlock: t } = lr({ blockId: a.blockId }),
        { components: o } = ar(a),
        i = u(() => a.data),
        {
          layoutElements: r,
          layoutCSSVars: l,
          isMobileLegacy: s,
        } = ur({
          blockData: i,
          siteElements: o,
          shouldBuildResponsive: !a.isInPreviewMode,
        }),
        d = {
          props: a,
          isSearchOpenedInCurrentBlock: t,
          siteElements: o,
          blockData: i,
          layoutElements: r,
          layoutCSSVars: l,
          isMobileLegacy: s,
          toRefs: ar,
          computed: u,
          get useSearchElementDropdown() {
            return lr;
          },
          BlockLayoutWrapper: wd,
          get useBlockLayout() {
            return ur;
          },
          LayoutElementProviderUser: Op,
        };
      return (
        Object.defineProperty(d, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        d
      );
    },
  };
function Bp(e, n, a, t, o, i) {
  return (
    c(),
    K(
      t.BlockLayoutWrapper,
      {
        ref: "blockLayout",
        style: Be(t.layoutCSSVars),
        "is-mobile-legacy": t.isMobileLegacy,
        "is-block-responsive": "",
        "is-forced-on-top": t.isSearchOpenedInCurrentBlock,
        "is-in-preview-mode": t.props.isInPreviewMode,
      },
      {
        default: he(() => [
          (c(!0),
          h(
            ve,
            null,
            Te(
              t.layoutElements,
              (r) => (
                c(),
                K(
                  t.LayoutElementProviderUser,
                  {
                    key: r.elementId,
                    "is-mobile-legacy": t.isMobileLegacy,
                    "element-id": r.elementId,
                    "element-data": r,
                    lcp: a.lcp,
                    "is-cart-visible": a.isCartVisible,
                    "current-locale": a.currentLocale,
                    "site-language-pages": a.siteLanguagePages,
                    "stripe-public-api-key": a.stripePublicApiKey,
                    "block-id": a.blockId,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                  },
                  null,
                  8,
                  [
                    "is-mobile-legacy",
                    "element-id",
                    "element-data",
                    "lcp",
                    "is-cart-visible",
                    "current-locale",
                    "site-language-pages",
                    "stripe-public-api-key",
                    "block-id",
                    "is-in-preview-mode",
                  ]
                )
              )
            ),
            128
          )),
        ]),
        _: 1,
      },
      8,
      ["style", "is-mobile-legacy", "is-forced-on-top", "is-in-preview-mode"]
    )
  );
}
const Lp = re(Ap, [["render", Bp]]),
  xp = ie({
    __name: "ZyroPagination",
    props: { currentPage: {}, pageCount: {}, color: { default: null } },
    emits: ["change-page"],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        i = u(() => ({ "--button-color": t.color })),
        r = u(() => {
          if (5 > t.pageCount)
            return [...new Array(t.pageCount + 1).keys()].slice(1);
          const d = 4 / 2,
            g = Array.from({ length: 4 }).fill(0);
          if (t.currentPage <= d + 1) {
            g[0] = 1;
            const v = g.map((p, b) => g[0] + b);
            return v.push(t.pageCount), v;
          }
          if (t.currentPage >= t.pageCount - d + 1) {
            const v = g.map((p, b) => t.pageCount - b);
            return v.reverse().unshift(1), v;
          }
          g[0] = t.currentPage - d + 1;
          const m = g.map((v, p) => g[0] + p);
          return m.unshift(1), (m[m.length - 1] = t.pageCount), m;
        }),
        l = { props: t, emit: o, computedStyle: i, paginationTriggersList: r };
      return (
        Object.defineProperty(l, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        l
      );
    },
  }),
  Os = (e) => (Vt("data-v-1ee2fd7c"), (e = e()), Ut(), e),
  Rp = ["disabled"],
  Np = Os(() =>
    P(
      "svg",
      {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        P("path", {
          d: "M7 1L1 7L7 13",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  Hp = [Np],
  Vp = ["data-testId", "disabled", "onClick"],
  Up = ["disabled"],
  Yp = Os(() =>
    P(
      "svg",
      {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        P("path", {
          d: "M1 13L7 7L1 1",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  $p = [Yp];
function Fp(e, n, a, t, o, i) {
  return a.pageCount > 1
    ? (c(),
      h(
        "div",
        { key: 0, class: "pagination", style: Be(t.computedStyle) },
        [
          P(
            "button",
            {
              disabled: a.currentPage === 1,
              class: "pagination__button",
              "data-testId": "button-previous",
              onClick:
                n[0] ||
                (n[0] = (r) =>
                  t.emit("change-page", Math.max(1, a.currentPage - 1))),
            },
            Hp,
            8,
            Rp
          ),
          (c(!0),
          h(
            ve,
            null,
            Te(
              t.paginationTriggersList,
              (r) => (
                c(),
                h(
                  "button",
                  {
                    key: `${r}-trigger`,
                    class: X([
                      "pagination__button pagination__trigger",
                      { "pagination__trigger--current": r === a.currentPage },
                    ]),
                    "data-testId": `button-${r}`,
                    disabled: a.currentPage === r,
                    onClick: (l) => t.emit("change-page", r),
                  },
                  ee(r),
                  11,
                  Vp
                )
              )
            ),
            128
          )),
          P(
            "button",
            {
              disabled: a.currentPage === a.pageCount,
              class: "pagination__button",
              "data-testId": "button-next",
              onClick:
                n[1] ||
                (n[1] = (r) =>
                  t.emit(
                    "change-page",
                    Math.min(a.pageCount, a.currentPage + 1)
                  )),
            },
            $p,
            8,
            Up
          ),
        ],
        4
      ))
    : M("", !0);
}
const As = re(xp, [
    ["render", Fp],
    ["__scopeId", "data-v-1ee2fd7c"],
  ]),
  fr = 1800,
  Wp = 1080,
  ml = 100,
  Gp = {
    __name: "BlockBlogListItem",
    props: {
      post: { type: Object, default: () => ({}) },
      authorName: { type: String, default: null },
      shownItems: {
        type: Object,
        default: () => ({
          authorFullName: !0,
          coverImage: !0,
          title: !0,
          description: !0,
          date: !0,
          categories: !0,
          avatar: !0,
          minutesToRead: !0,
        }),
      },
      coverObjectFit: { type: String, default: "cover" },
      cursor: { type: String, default: "pointer" },
      blogCategories: { type: Object, default: () => ({}) },
      isAnimationActive: { type: Boolean, default: !1 },
      blogReadingTimeText: { type: [String, void 0], default: void 0 },
      blogTitleTextSize: { type: Number, default: 24 },
    },
    emits: ["post-click", "filter-category"],
    setup(e, { expose: n }) {
      n(), et((m) => ({ "74783e9f": o.value }));
      const a = e,
        t = E(),
        o = u(() => `${a.blogTitleTextSize}px`),
        i = u(() => a.post?.coverImageAlt ?? ""),
        r = u(() => Vn(fr, null)),
        l = u(() => a.post?.categories ?? []),
        s = u(
          () =>
            !!a.shownItems.coverImage &&
            (a.post?.coverImageSrc || a.post?.coverImageSrcset)
        ),
        d = u(() => {
          const m = t.value?.getBoundingClientRect();
          if (!m || !window || !document) return !0;
          const { top: v } = m,
            { innerHeight: p } = window,
            { clientHeight: b } = document.documentElement;
          return v <= (p || b) + ml;
        }),
        g = {
          props: a,
          VERTICAL_VIEWPORT_OFFSET: ml,
          coverImageContainerRef: t,
          blogTitleTextSize: o,
          coverImageAlt: i,
          sizes: r,
          categories: l,
          isCoverImageShown: s,
          isElementInViewport: d,
          BlockBlogListItemCategories: ms,
          BlockBlogListItemMeta: gs,
          get BLOG_POST_COVER_IMAGE_MAX_WIDTH() {
            return fr;
          },
          get getFormattedNumericDate() {
            return vs;
          },
          get getGridItemSizes() {
            return Vn;
          },
          get DATA_ATTRIBUTE_ANIMATION_ROLE() {
            return ya;
          },
          get DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT() {
            return fn;
          },
          get DATA_ATTRIBUTE_ANIMATION_STATE() {
            return Hn;
          },
          get DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE() {
            return Nn;
          },
          computed: u,
          ref: E,
        };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  },
  qp = ["href"],
  jp = { class: "block-blog-list-item__cover-image-wrapper" },
  zp = ["alt", "src", "srcset", "sizes", "loading"],
  Kp = ["href"];
function Qp(e, n, a, t, o, i) {
  const r = ze("qa");
  return (
    c(),
    h(
      "div",
      Xe({
        class: "block-blog-list-item",
        [t.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]:
          t.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT,
        [t.DATA_ATTRIBUTE_ANIMATION_STATE || ""]: a.isAnimationActive
          ? t.DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE
          : null,
      }),
      [
        ae(e.$slots, "block-blog-list-item-overlay", {}, void 0, !0),
        t.isCoverImageShown
          ? de(
              (c(),
              h(
                "a",
                {
                  key: 0,
                  ref: "coverImageContainerRef",
                  href: a.post.slug,
                  class: "block-blog-list-item__cover-image-container",
                  onClick:
                    n[0] ||
                    (n[0] = Ie((l) => e.$emit("post-click"), ["prevent"])),
                },
                [
                  P("div", jp, [
                    P(
                      "img",
                      {
                        class: "block-blog-list-item__cover-image",
                        alt: t.coverImageAlt,
                        src: a.post.coverImageSrc,
                        srcset: a.post.coverImageSrcset,
                        sizes: t.sizes,
                        loading: t.isElementInViewport ? void 0 : "lazy",
                      },
                      null,
                      8,
                      zp
                    ),
                  ]),
                ],
                8,
                qp
              )),
              [[r, "blog-list-item-image"]]
            )
          : M("", !0),
        de(
          Ee(
            t.BlockBlogListItemCategories,
            {
              class: "font-secondary",
              categories: t.categories,
              "blog-categories": a.blogCategories,
              onFilterCategory:
                n[1] || (n[1] = (l) => e.$emit("filter-category", l)),
            },
            null,
            8,
            ["categories", "blog-categories"]
          ),
          [[Wt, a.shownItems.categories && t.categories.length]]
        ),
        P(
          "a",
          {
            class: "block-blog-list-item__content",
            href: a.post.slug,
            onClick:
              n[2] || (n[2] = Ie((l) => e.$emit("post-click"), ["prevent"])),
          },
          [
            de(
              P(
                "h3",
                { class: "font-primary block-blog-list-item__title" },
                ee(a.post.meta.title),
                513
              ),
              [[Wt, a.shownItems.title]]
            ),
            de(
              P(
                "p",
                { class: "block-blog-list-item__description font-secondary" },
                ee(a.post.meta.description),
                513
              ),
              [[Wt, a.shownItems.description]]
            ),
            Ee(
              t.BlockBlogListItemMeta,
              je(
                {
                  authorName: a.authorName,
                  minutesAmount: a.post.minutesToRead,
                  date: t.getFormattedNumericDate(a.post.date),
                  showAvatar: a.shownItems.avatar,
                  showName: a.shownItems.authorFullName,
                  showDate: a.shownItems.date,
                  showMinutes: a.shownItems.minutesToRead,
                },
                { "blog-reading-time-text": a.blogReadingTimeText }
              ),
              null,
              16,
              ["blog-reading-time-text"]
            ),
          ],
          8,
          Kp
        ),
      ],
      16
    )
  );
}
const Xp = re(Gp, [
    ["render", Qp],
    ["__scopeId", "data-v-d6576b2a"],
  ]),
  Zp = "Show all posts",
  gl = 46,
  vl = 24,
  Jp = {
    __name: "BlockBlogList",
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      lcp: { type: Object, default: () => ({}) },
      posts: { type: Object, default: () => ({}) },
      blogCategories: { type: Object, default: () => ({}) },
      blogReadingTimeText: { type: [String, void 0], default: void 0 },
    },
    emits: ["post-click"],
    setup(e, { expose: n, emit: a }) {
      n(), et((O) => ({ b98dc8de: d.value, "8ed4469a": s.value }));
      const t = e,
        o = a,
        i = E(0),
        r = E(null),
        l = E(!1),
        s = u(() => Number.parseInt(t.data.settings.postColumnCount, 10)),
        d = u(() => `${gl}px`),
        g = u(() => t.data.settings.blogTitleFontSize || vl),
        m = u(() => {
          const {
              categories: O,
              showAllPosts: C,
              showWithoutCategories: x,
            } = t.data.settings,
            F = C
              ? t.posts
              : Object.fromEntries(
                  Object.entries(t.posts).filter(([, Y]) => {
                    const j = O.some((S) => Y.categories.includes(S));
                    return (x && Y.categories.length === 0) || j;
                  })
                );
          return r.value
            ? Object.fromEntries(
                Object.entries(F).filter(([, Y]) =>
                  Y.categories.includes(r.value)
                )
              )
            : F;
        }),
        v = u(() => {
          const O = new Date().setHours(0, 0, 0, 0);
          return Object.fromEntries(
            Object.entries(m.value).filter(([, C]) => {
              if (C?.isScheduled) {
                const x = new Date(C.date).setHours(0, 0, 0, 0);
                return x && O >= x && !C.isDraft;
              }
              return !C.isDraft;
            })
          );
        }),
        p = u(() =>
          Object.values(v.value).sort(
            (O, C) => Date.parse(C.date) - Date.parse(O.date)
          )
        ),
        b = u(() =>
          p.value.slice(
            (i.value > 0 ? i.value - 1 : 0) * t.data.settings.postsPerPage,
            i.value * t.data.settings.postsPerPage
          )
        ),
        _ = u(() =>
          Math.ceil(Object.keys(v.value).length / t.data.settings.postsPerPage)
        ),
        T = () => {
          const O = new URLSearchParams(window.location.search),
            C = Number.parseInt(O.get("page"), 10) || 1;
          C !== i.value && (i.value = C);
        },
        y = (O) => {
          (i.value = O), (l.value = !0);
          const C = new URL(window.location);
          C.searchParams.set("page", i.value),
            window.history.pushState(null, "", C.toString()),
            uo({ linkToSection: `#${t.blockId}` });
        };
      xe(b, (O) => {
        O.length === 0 && i.value > 1 && (i.value -= 1);
      }),
        xe(r, () => {
          l.value = !0;
        }),
        Me(() => {
          const O = new URLSearchParams(window.location.search),
            C = Number.parseInt(O.get("page"), 10) || 1;
          i.value !== C && (i.value = C),
            window.addEventListener("popstate", () => {
              T();
            });
        }),
        Ot(() => {
          window.removeEventListener("popstate", T);
        });
      const w = {
        SHOW_ALL_POSTS_LABEL: Zp,
        BLOG_LIST_PADDING_X: gl,
        props: t,
        emit: o,
        currentPage: i,
        filteredCategoryId: r,
        isAnimationActive: l,
        postColumnCount: s,
        blogListPaddingXCssVar: d,
        BLOG_TITLE_FONT_SIZE_FALLBACK: vl,
        blogTitleTextSize: g,
        postsToRender: m,
        activePostsToRender: v,
        sortedPosts: p,
        currentPageItems: b,
        pageCount: _,
        handleBrowserNavigationPageChange: T,
        setCurrentPage: y,
        get scrollToSection() {
          return uo;
        },
        ZyroPagination: As,
        BlockBlogListItem: Xp,
        ref: E,
        onMounted: Me,
        onBeforeUnmount: Ot,
        computed: u,
        watch: xe,
      };
      return (
        Object.defineProperty(w, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        w
      );
    },
  },
  eh = ["id"],
  th = { key: 0, class: "block-blog-list__filter" },
  ah = { key: 2, class: "block-blog-list__empty-block" };
function nh(e, n, a, t, o, i) {
  const r = ze("qa");
  return de(
    (c(),
    h(
      "div",
      { id: a.blockId, ref: "blogList", class: "block-blog-list" },
      [
        t.filteredCategoryId
          ? (c(),
            h("div", th, [
              Le(ee(a.blogCategories[t.filteredCategoryId].name) + " ", 1),
              P(
                "button",
                {
                  class: "block-blog-list__filter-button",
                  onClick:
                    n[0] || (n[0] = (l) => (t.filteredCategoryId = null)),
                },
                ee(t.SHOW_ALL_POSTS_LABEL)
              ),
            ]))
          : M("", !0),
        t.currentPageItems.length
          ? (c(),
            h(
              "div",
              {
                key: 1,
                class: X([
                  "block-blog-list__list",
                  { "block-blog-list__list--one-col": t.postColumnCount === 1 },
                ]),
              },
              [
                (c(!0),
                h(
                  ve,
                  null,
                  Te(t.currentPageItems, (l, s) =>
                    de(
                      (c(),
                      K(
                        t.BlockBlogListItem,
                        {
                          key: `post-${s}`,
                          post: l,
                          "author-name": l.meta.authorName,
                          "cover-object-fit":
                            a.data.settings.styles["cover-object-fit"],
                          "shown-items": a.data.settings.shownItems,
                          "blog-categories": a.blogCategories,
                          "is-animation-active": t.isAnimationActive,
                          "blog-reading-time-text": a.blogReadingTimeText,
                          "blog-title-text-size": t.blogTitleTextSize,
                          onFilterCategory:
                            n[1] || (n[1] = (d) => (t.filteredCategoryId = d)),
                          onPostClick: (d) => t.emit("post-click", l),
                        },
                        {
                          "block-blog-list-item-overlay": he(() => [
                            ae(
                              e.$slots,
                              "block-blog-list-overlay",
                              { post: l },
                              void 0,
                              !0
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        [
                          "post",
                          "author-name",
                          "cover-object-fit",
                          "shown-items",
                          "blog-categories",
                          "is-animation-active",
                          "blog-reading-time-text",
                          "blog-title-text-size",
                          "onPostClick",
                        ]
                      )),
                      [[r, "blog-list-item"]]
                    )
                  ),
                  128
                )),
              ],
              2
            ))
          : (c(),
            h("div", ah, [
              ae(e.$slots, "block-blog-list-empty-block", {}, void 0, !0),
            ])),
        Ee(
          t.ZyroPagination,
          {
            class: "block-blog-list__pagination",
            "current-page": t.currentPage,
            "page-count": t.pageCount,
            onChangePage: t.setCurrentPage,
          },
          null,
          8,
          ["current-page", "page-count"]
        ),
      ],
      8,
      eh
    )),
    [[r, "builder-section-blog"]]
  );
}
const oh = re(Jp, [
    ["render", nh],
    ["__scopeId", "data-v-772574a1"],
  ]),
  rh = ie({
    name: "BlockBlogListProviderUser",
    components: { BlockBlogList: oh },
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      currentLocale: { type: String, default: Da },
    },
    setup() {
      const {
        blogReadingTimeText: e,
        siteId: n,
        pages: a,
        blogCategories: t,
        meta: o,
      } = nt();
      return {
        blogReadingTimeText: e,
        siteId: n,
        pages: a,
        blogCategories: t,
        meta: o,
      };
    },
    computed: {
      publishedBlogPages() {
        return Object.fromEntries(
          Object.entries(this.pages).filter(
            ([, e]) => e.type === rr && !e.isDraft
          )
        );
      },
      blogPosts() {
        const e = this.currentLocale === this.meta.defaultLocale;
        return Object.fromEntries(
          Object.entries(this.publishedBlogPages).map(([n, a]) => {
            const t = Ra(a.coverImageOrigin, a.coverImagePath, this.siteId, {
              width: fr,
              height: Wp,
            });
            return [
              n,
              {
                id: n,
                ...a,
                coverImageSrcset: t,
                slug: `/${e ? "" : `${this.currentLocale}/`}${a.slug}`,
              },
            ];
          })
        );
      },
    },
  });
function ih(e, n, a, t, o, i) {
  const r = He("BlockBlogList");
  return (
    c(),
    K(
      r,
      {
        data: e.data,
        "block-id": e.blockId,
        posts: e.blogPosts,
        "blog-categories": e.blogCategories,
        "blog-reading-time-text": e.blogReadingTimeText,
      },
      null,
      8,
      ["data", "block-id", "posts", "blog-categories", "blog-reading-time-text"]
    )
  );
}
const lh = re(rh, [["render", ih]]),
  Wr = ie({
    props: {
      columnCount: { type: Number, default: 3 },
      imageRatio: { type: String, default: "original" },
      isCategoryListEnabled: { type: Boolean, default: !1 },
      isFullWidth: { type: Boolean, default: !1 },
    },
  }),
  pl = () => {
    et((e) => ({ "1bed821c": e.columnCount }));
  },
  hl = Wr.setup;
Wr.setup = hl ? (e, n) => (pl(), hl(e, n)) : pl;
const Bs = (e) => (Vt("data-v-4ad892a8"), (e = e()), Ut(), e),
  sh = { key: 0, class: "skeleton-loader__categories" },
  uh = { class: "skeleton-loader__wrapper" },
  ch = { key: 0, class: "skeleton-loader__category" },
  dh = { class: "skeleton-loader__list" },
  mh = Bs(() => P("div", { class: "skeleton-loader__text" }, null, -1)),
  gh = Bs(() => P("div", { class: "skeleton-loader__text" }, null, -1));
function vh(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      {
        class: X([
          "skeleton-loader",
          { "skeleton-loader--full-width": e.isFullWidth },
        ]),
      },
      [
        e.isCategoryListEnabled ? (c(), h("div", sh)) : M("", !0),
        P("div", uh, [
          e.isCategoryListEnabled ? (c(), h("div", ch)) : M("", !0),
          P("div", dh, [
            (c(!0),
            h(
              ve,
              null,
              Te(
                e.columnCount,
                (r) => (
                  c(),
                  h("div", { key: r, class: "skeleton-loader__item" }, [
                    P(
                      "div",
                      {
                        class: X([
                          "skeleton-loader__image-placeholder",
                          `skeleton-loader__image-placeholder--${e.imageRatio}`,
                        ]),
                      },
                      null,
                      2
                    ),
                    mh,
                    gh,
                  ])
                )
              ),
              128
            )),
          ]),
        ]),
      ],
      2
    )
  );
}
const ph = re(Wr, [
    ["render", vh],
    ["__scopeId", "data-v-4ad892a8"],
  ]),
  hh = ie({
    props: {
      textColorVars: { type: Object, default: () => ({}) },
      emptyPageMessage: { type: String, required: !0 },
    },
    computed: {
      computedStyles() {
        return { ...Gt(this.textColorVars) };
      },
    },
  }),
  fh = P(
    "svg",
    {
      class: "product-list-empty-state__icon",
      width: "41",
      height: "40",
      viewBox: "0 0 41 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      P("path", {
        d: "M10.5 3.33334L5.5 10V33.3333C5.5 34.2174 5.85119 35.0652 6.47631 35.6904C7.10143 36.3155 7.94928 36.6667 8.83333 36.6667H32.1667C33.0507 36.6667 33.8986 36.3155 34.5237 35.6904C35.1488 35.0652 35.5 34.2174 35.5 33.3333V10L30.5 3.33334H10.5Z",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
      P("path", {
        d: "M5.5 10H35.5",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
      P("path", {
        d: "M27.1663 16.6667C27.1663 18.4348 26.464 20.1305 25.2137 21.3807C23.9635 22.631 22.2678 23.3334 20.4997 23.3334C18.7316 23.3334 17.0359 22.631 15.7856 21.3807C14.5354 20.1305 13.833 18.4348 13.833 16.6667",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ],
    -1
  );
function bh(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: "product-list-empty-state", style: Be(e.computedStyles) },
      [fh, P("h6", null, ee(e.emptyPageMessage), 1)],
      4
    )
  );
}
const yh = re(hh, [["render", bh]]),
  _h = {
    props: {
      text: { type: String, default: "" },
      ribbonStyle: { type: Object, default: () => ({}) },
    },
    computed: {
      computedStyles() {
        return { ...Gt(this.ribbonStyle) };
      },
    },
  },
  wh = { class: "ecommerce-product-ribbon__text" };
function kh(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: "ecommerce-product-ribbon", style: Be(i.computedStyles) },
      [P("p", wh, ee(a.text), 1)],
      4
    )
  );
}
const Sh = re(_h, [["render", kh]]),
  Th = ie({
    __name: "ProductListItem",
    props: {
      imageUrl: {},
      secondaryImage: {},
      title: {},
      price: { default: null },
      textAlign: { default: "left" },
      isEager: { type: Boolean, default: !1 },
      imageWidth: {},
      imageHeight: {},
      duration: {},
      productType: { default: "" },
      translations: { default: () => ({}) },
      isStoreQuantityTracked: { type: Boolean },
      quantity: {},
      isButtonEnabled: { type: Boolean, default: !1 },
      buttonDisplay: { default: "" },
      buttonText: { default: "" },
      buttonStyle: { default: () => ({}) },
      buttonType: { default: "primary" },
      buttonBorderWidth: { default: 0 },
      isPriceRangeShown: { type: Boolean },
      ribbon: { default: "" },
      ribbonStyle: { default: () => ({}) },
      siteId: { default: "" },
      isPurchasable: { type: Boolean },
      imageRatio: { default: Ft.COVER },
      imageHoverEffect: {},
      imageBorderRadius: {},
      isMobileView: { type: Boolean },
      isButtonFullWidth: { type: Boolean },
    },
    emits: ["button-click"],
    setup(e, { expose: n }) {
      n(), et((Y) => ({ "4336ea15": C.value, b87d5ce4: _.value }));
      const a = { [ya]: fn },
        t = `${ft}/placeholder.png`,
        o = e,
        i = E(),
        r = E(!1),
        l = u(() =>
          o.imageHoverEffect === Ta.SWAP_IMAGE ? o.secondaryImage?.url : null
        ),
        s = u(() => !o.isStoreQuantityTracked || o.quantity > 0),
        d = u(() => o.productType === qt),
        g = u(() => d.value && !o.price?.amount),
        m = u(
          () =>
            o.buttonText ||
            (d.value
              ? o.translations?.bookNow || "Book now"
              : o.translations?.addToBag || "Add to bag")
        ),
        v = u(() => ({
          normal: o.buttonStyle[`grid-button-${o.buttonType}-border-color`],
          hover:
            o.buttonStyle[`grid-button-${o.buttonType}-border-color-hover`],
        })),
        p = u(() => ({
          normal: o.buttonStyle[`grid-button-${o.buttonType}-background-color`],
          hover:
            o.buttonStyle[`grid-button-${o.buttonType}-background-color-hover`],
        })),
        b = u(() => ({ ...Gt(o.buttonStyle) })),
        _ = u(() => (o.imageRatio === Ft.CONTAIN ? "contain" : "cover")),
        T = u(
          () =>
            o.secondaryImage && r.value && o.imageHoverEffect === Ta.SWAP_IMAGE
        ),
        y = u(() => (T.value ? o.secondaryImage?.url || "" : o.imageUrl || t)),
        w = u(() => (T.value ? o.secondaryImage?.type : An.IMAGE)),
        O = u(() => o.imageHoverEffect === Ta.ZOOM && r.value),
        C = u(() => (o.imageRatio === Ft.CONTAIN ? "0%" : o.imageBorderRadius)),
        x = u(() =>
          g.value
            ? o.translations?.free || "Free"
            : da({ amount: o.price?.amount, currency: o.price?.currency })
        );
      xe(
        () => o.imageHoverEffect,
        (Y) => {
          o.isMobileView ||
            (clearTimeout(i.value),
            Y === Ta.SWAP_IMAGE
              ? ((r.value = !0),
                (i.value = setTimeout(() => {
                  r.value = !1;
                }, 1e3)))
              : Y === Ta.ZOOM
              ? ((r.value = !0),
                (i.value = setTimeout(() => {
                  r.value = !1;
                }, 1e3)))
              : (r.value = !1));
        }
      );
      const F = {
        CUSTOM_ATTRIBUTES: a,
        PRODUCT_PLACEHOLDER_IMAGE: t,
        props: o,
        animationTimeout: i,
        isProductHovered: r,
        secondaryImageSrc: l,
        isInStock: s,
        isProductTypeBooking: d,
        isFreeBookingProduct: g,
        blockButtonText: m,
        buttonBorderColor: v,
        buttonBackgroundColor: p,
        computedStyles: b,
        objectFit: _,
        isSecodaryImageShown: T,
        imageSrc: y,
        mediaType: w,
        isImageZoomedIn: O,
        imageBorderRadius: C,
        formattedPrice: x,
        GridButton: Ga,
        get PRODUCT_TYPE_BOOKING() {
          return qt;
        },
        get formatPrice() {
          return da;
        },
        ProductMediaElement: _o,
        ProductRibbon: Sh,
        get ImageHoverEffect() {
          return Ta;
        },
      };
      return (
        Object.defineProperty(F, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        F
      );
    },
  }),
  Ch = { class: "product-list-item__details" },
  Ph = { class: "product-list-item__title" },
  Ih = { key: 0, class: "product-list-item__price-range" },
  Eh = { key: 0, class: "product-list-item__price-content" },
  Dh = { key: 1, class: "product-list-item__duration" },
  Mh = { key: 1, class: "product-list-item__text" };
function Oh(e, n, a, t, o, i) {
  const r = ze("qa");
  return (
    c(),
    h(
      "div",
      je(
        {
          class: ["product-list-item", `product-list-item--${a.textAlign}`],
          style: t.computedStyles,
        },
        t.CUSTOM_ATTRIBUTES
      ),
      [
        P(
          "div",
          {
            class: "product-list-item__content",
            onMouseenter:
              n[0] || (n[0] = (l) => (t.isProductHovered = !a.isMobileView)),
            onMouseleave: n[1] || (n[1] = (l) => (t.isProductHovered = !1)),
          },
          [
            de(
              (c(),
              h(
                "div",
                {
                  class: X(`
					product-list-item__image-wrapper
					product-list-item__image-wrapper--${a.imageRatio}
					${
            a.imageHoverEffect === t.ImageHoverEffect.NO_EFFECT
              ? "product-list-item__image-wrapper--bg-animation"
              : ""
          }
				`),
                },
                [
                  Ee(
                    t.ProductMediaElement,
                    {
                      src: t.imageSrc,
                      "secondary-image-src": t.secondaryImageSrc,
                      "media-type": t.mediaType,
                      alt: a.title,
                      class: X(`
						product-list-item__image
						product-list-item__image ${
              t.isImageZoomedIn ? "product-list-item__image--zoomed-in" : ""
            }
						${
              a.imageHoverEffect === t.ImageHoverEffect.ZOOM
                ? "product-list-item__image--zoom-animation"
                : ""
            }
					`),
                      "is-eager": a.isEager,
                      width: a.imageWidth,
                      height: a.imageHeight,
                      "site-id": a.siteId,
                      "object-fit": t.objectFit,
                      "image-ratio": a.imageRatio,
                      "enable-srcset": "",
                      "is-video-disabled": "",
                      "is-lossless": !0,
                    },
                    null,
                    8,
                    [
                      "src",
                      "secondary-image-src",
                      "media-type",
                      "alt",
                      "class",
                      "is-eager",
                      "width",
                      "height",
                      "site-id",
                      "object-fit",
                      "image-ratio",
                    ]
                  ),
                  a.ribbon
                    ? (c(),
                      K(
                        t.ProductRibbon,
                        {
                          key: 0,
                          text: a.ribbon,
                          "ribbon-style": a.ribbonStyle,
                        },
                        null,
                        8,
                        ["text", "ribbon-style"]
                      ))
                    : M("", !0),
                ],
                2
              )),
              [[r, "product-list-section-item-image"]]
            ),
            P("div", Ch, [
              de((c(), h("h6", Ph, [Le(ee(a.title), 1)])), [
                [r, "product-list-section-item-title"],
              ]),
              a.price
                ? de(
                    (c(),
                    h(
                      "div",
                      {
                        key: 0,
                        class: X([
                          "product-list-item__price-wrapper",
                          {
                            "product-list-item__price-wrapper--with-booking":
                              a.productType === t.PRODUCT_TYPE_BOOKING,
                          },
                        ]),
                      },
                      [
                        t.isInStock
                          ? (c(),
                            h(
                              ve,
                              { key: 0 },
                              [
                                P("p", null, [
                                  a.isPriceRangeShown && !a.price.sale_amount
                                    ? (c(),
                                      h("span", Ih, ee(a.translations.from), 1))
                                    : M("", !0),
                                  P(
                                    "span",
                                    {
                                      class: X({
                                        "product-list-item__price":
                                          a.price.sale_amount,
                                        "product-list-item__booking-price":
                                          a.productType ===
                                          t.PRODUCT_TYPE_BOOKING,
                                      }),
                                    },
                                    ee(t.formattedPrice),
                                    3
                                  ),
                                ]),
                                a.price.sale_amount
                                  ? (c(),
                                    h("p", Eh, [
                                      a.isPriceRangeShown
                                        ? (c(),
                                          h(
                                            ve,
                                            { key: 0 },
                                            [Le(ee(a.translations.from), 1)],
                                            64
                                          ))
                                        : M("", !0),
                                      Le(
                                        " " +
                                          ee(
                                            t.formatPrice({
                                              amount: a.price.sale_amount,
                                              currency: a.price.currency,
                                            })
                                          ),
                                        1
                                      ),
                                    ]))
                                  : M("", !0),
                                a.productType === t.PRODUCT_TYPE_BOOKING
                                  ? (c(), h("p", Dh, ee(a.duration), 1))
                                  : M("", !0),
                              ],
                              64
                            ))
                          : (c(), h("p", Mh, ee(a.translations.soldOut), 1)),
                      ],
                      2
                    )),
                    [[r, "product-list-section-item-price"]]
                  )
                : M("", !0),
            ]),
          ],
          32
        ),
        a.isButtonEnabled && a.isPurchasable
          ? (c(),
            h(
              "div",
              {
                key: 0,
                class: X([
                  "product-list-item__button-wrapper",
                  {
                    "product-list-item__button-wrapper--hidden": !t.isInStock,
                    "product-list-item__button-wrapper--with-hover":
                      a.buttonDisplay === "hover",
                  },
                ]),
                onClick: n[3] || (n[3] = Ie(() => {}, ["prevent", "stop"])),
              },
              [
                de(
                  Ee(
                    t.GridButton,
                    {
                      type: a.buttonType,
                      content: t.blockButtonText,
                      class: X([
                        "product-list-item__button",
                        [
                          `product-list-item__button--${a.buttonType}`,
                          {
                            "product-list-item__button--full-width":
                              a.isButtonFullWidth,
                          },
                        ],
                      ]),
                      "tag-name": "button",
                      "border-width": a.buttonBorderWidth,
                      "border-color": t.buttonBorderColor.normal,
                      "border-color-hover": t.buttonBorderColor.hover,
                      "background-color": t.buttonBackgroundColor.normal,
                      "background-color-hover": t.buttonBackgroundColor.hover,
                      onClick: n[2] || (n[2] = (l) => e.$emit("button-click")),
                    },
                    null,
                    8,
                    [
                      "type",
                      "content",
                      "class",
                      "border-width",
                      "border-color",
                      "border-color-hover",
                      "background-color",
                      "background-color-hover",
                    ]
                  ),
                  [[r, "productlistsection-btn-addtobag"]]
                ),
              ],
              2
            ))
          : M("", !0),
      ],
      16
    )
  );
}
const Ah = re(Th, [
    ["render", Oh],
    ["__scopeId", "data-v-2c41ee88"],
  ]),
  Bh = ie({
    __name: "ProductSortDropdown",
    props: { productSorting: {}, sorting: {}, translations: {} },
    emits: ["sort-changed"],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        i = u(() => ({ color: t.productSorting.textColor || "#000" })),
        r = { props: t, emit: o, computedSelectStyles: i };
      return (
        Object.defineProperty(r, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  }),
  Lh = { class: "product-list-sorting" },
  xh = { class: "product-list-sorting__select-wrapper" },
  Rh = ["value"],
  Nh = ["value"];
function Hh(e, n, a, t, o, i) {
  return (
    c(),
    h("div", Lh, [
      P(
        "label",
        {
          for: "sorting-options",
          style: Be(t.computedSelectStyles),
          class: "product-list-sorting__label",
        },
        ee(a.translations.sortBy) + ": ",
        5
      ),
      P("div", xh, [
        P(
          "select",
          {
            id: "sorting-options",
            class: "product-list-sorting__select",
            value: t.props.sorting,
            style: Be(t.computedSelectStyles),
            onChange: n[0] || (n[0] = (r) => t.emit("sort-changed", r)),
          },
          [
            (c(!0),
            h(
              ve,
              null,
              Te(
                a.productSorting.sortingOptions,
                (r) => (
                  c(),
                  h(
                    "option",
                    { key: r.id, value: r.value },
                    ee(a.translations[r.id]),
                    9,
                    Nh
                  )
                )
              ),
              128
            )),
          ],
          44,
          Rh
        ),
      ]),
    ])
  );
}
const Vh = re(Bh, [
    ["render", Hh],
    ["__scopeId", "data-v-ee7326c1"],
  ]),
  Ls = (e) => {
    const n = new URL(window.location.href);
    return (
      e ? n.searchParams.set("category", e) : n.searchParams.delete("category"),
      n.href
    );
  },
  Uh = ie({
    __name: "CategoryList",
    props: {
      categories: {},
      currentCategoryId: { default: "" },
      translations: {},
      isMobileView: { type: Boolean, default: !1 },
      isLinkDisabled: { type: Boolean, default: !1 },
      defaultCategory: {},
      blockId: {},
    },
    emits: ["category-click"],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        i = us(),
        r = E({}),
        l = (m) => (t.isLinkDisabled ? i.fullPath : Ls(m)),
        s = (m) => {
          o("category-click", m), uo({ linkToSection: `#${t.blockId}` });
        },
        d = () => {
          (r.value =
            t.categories?.reduce((m, v) => ((m[v.id] = l(v.id)), m), {}) || {}),
            (r.value.all = l(""));
        };
      Me(() => {
        d();
      });
      const g = {
        props: t,
        emit: o,
        route: i,
        categoryUrls: r,
        getCategoryUrl: l,
        handleCategoryClick: s,
        setCategoryUrls: d,
        get DATA_ATTRIBUTE_PREVENT_NATIVE_CLICK() {
          return is;
        },
      };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  }),
  Yh = { class: "category-list" },
  $h = { class: "category-list__title" },
  Fh = { class: "category-list__list" },
  Wh = ["href"],
  Gh = ["href", "onClick"],
  qh = { class: "category-list__slot" };
function jh(e, n, a, t, o, i) {
  return (
    c(),
    h("div", Yh, [
      P("h2", $h, ee(a.translations.browseBy), 1),
      P("ul", Fh, [
        P("li", null, [
          P(
            "a",
            Xe({
              class: [
                "category-list__link text-body",
                {
                  "text-body-small": a.isMobileView,
                  active: !a.currentCategoryId,
                },
              ],
              href: t.categoryUrls.all,
              [t.DATA_ATTRIBUTE_PREVENT_NATIVE_CLICK || ""]: !0,
              onClick:
                n[0] ||
                (n[0] = Ie((r) => t.handleCategoryClick(""), ["prevent"])),
            }),
            ee(a.defaultCategory.title),
            17,
            Wh
          ),
        ]),
        (c(!0),
        h(
          ve,
          null,
          Te(
            a.categories,
            (r) => (
              c(),
              h("li", { key: r.id }, [
                P(
                  "a",
                  Xe({
                    class: [
                      "category-list__link text-body",
                      {
                        "text-body-small": a.isMobileView,
                        active: a.currentCategoryId === r.id,
                      },
                    ],
                    href: t.categoryUrls[r.id],
                    [t.DATA_ATTRIBUTE_PREVENT_NATIVE_CLICK || ""]: !0,
                    onClick: Ie(
                      (l) => t.handleCategoryClick(r.id),
                      ["prevent"]
                    ),
                  }),
                  ee(r.title),
                  17,
                  Gh
                ),
              ])
            )
          ),
          128
        )),
      ]),
      P("div", qh, [ae(e.$slots, "mobile", {}, void 0, !0)]),
    ])
  );
}
const zh = re(Uh, [
    ["render", jh],
    ["__scopeId", "data-v-3511c6a3"],
  ]),
  br = (e) =>
    e.variants.reduce((n, a) => {
      const t = n.prices[0]?.sale_amount || n.prices[0]?.amount,
        o = a.prices[0]?.sale_amount || a.prices[0]?.amount;
      return t < o ? n : a;
    }),
  Kh = (e) =>
    e.variants.reduce((n, a) => {
      const t = n.prices[0]?.sale_amount || n.prices[0]?.amount,
        o = a.prices[0]?.sale_amount || a.prices[0]?.amount;
      return t > o ? n : a;
    }),
  fl = 200,
  Qh = ie({
    __name: "BlockEcommerceProductList",
    props: {
      blockId: {},
      pageCount: {},
      currentPage: {},
      products: {},
      totalProductCount: {},
      productPages: { default: () => ({}) },
      blockStyle: { default: () => ({}) },
      textColorVars: { default: () => ({}) },
      isProductListShown: { type: Boolean, default: !0 },
      isLoading: { type: Boolean },
      isCategoriesLoaded: { type: Boolean },
      isEager: { type: Boolean },
      columnCount: {},
      translations: {},
      productCategoryId: { default: "" },
      isButtonEnabled: { type: Boolean },
      buttonDisplay: { default: "" },
      buttonText: { default: "" },
      buttonStyle: { default: () => ({}) },
      buttonType: { default: "primary" },
      buttonBorderWidth: { default: 0 },
      ribbonStyle: { default: () => ({}) },
      isProductListItemLinkDisabled: { type: Boolean },
      siteId: {},
      variantsQuantity: {},
      productSorting: { default: () => ({ enabled: !1 }) },
      sorting: { default: $d[tn.DEFAULT] },
      imageRatio: { default: Ft.COVER },
      categories: {},
      isCategoryListEnabled: { type: Boolean, default: !1 },
      backgroundColor: { default: "var(--color-light)" },
      isMobileView: { type: Boolean, default: !1 },
      imageHoverEffect: { default: Ta.NO_EFFECT },
      isCategoryItemLinkDisabled: { type: Boolean },
      productIds: {},
      isFullWidth: { type: Boolean },
      isTotalProductCountShown: { type: Boolean },
      columnGap: { default: 24 },
      rowGap: { default: void 0 },
      isListCentered: { type: Boolean },
      isButtonFullWidth: { type: Boolean },
    },
    emits: [
      "product-click",
      "button-click",
      "page-changed",
      "sort-changed",
      "category-click",
    ],
    setup(e, { expose: n, emit: a }) {
      n(),
        et((U) => ({
          "323868d3": f.value,
          c302c2ce: s.value,
          "5c478660": C.value,
          "4fe0db04": x.value,
          "64476a28": y.value,
        }));
      const t = e,
        o = a,
        i = us(),
        r = Ua(() => t.isMobileView),
        l = u(() => (r.value ? 1 : 3)),
        s = u(() => t.columnCount || l.value),
        d = E(!1),
        g = E(null),
        m = E(null),
        v = E(0),
        p = E(null),
        b = u(() => ({ [Hn]: d.value ? Nn : null })),
        _ = u(
          () =>
            t.translations.onlineStoreNoProducts ||
            "No publicly visible products"
        ),
        T = u(() => t.blockStyle?.textAlign),
        y = u(() => {
          const U = (s.value - 1) * t.columnGap,
            Z = t.isCategoryListEnabled ? fl : 0,
            J = v.value || (typeof window < "u" && window?.innerWidth) || Ri,
            D = (t.isFullWidth ? J : Ri) - U - Z;
          return Math.floor(D / s.value);
        }),
        w = u(() =>
          t.imageRatio === Ft.LANDSCAPE
            ? { width: 16, height: 9 }
            : t.imageRatio === Ft.PORTRAIT
            ? { width: 4, height: 5 }
            : { width: 1, height: 1 }
        ),
        O = u(() => {
          const U = (y.value * w.value.height) / w.value.width;
          return Math.floor(U);
        }),
        C = u(() => `${t.columnGap}px`),
        x = u(() => `${t.rowGap ?? t.columnGap}px`),
        F = u(() => ({
          id: "",
          title: t.translations.allProducts || "All products",
        })),
        Y = u(
          () =>
            t.categories?.find(({ id: Z }) => Z === t.productCategoryId)
              ?.title || F.value.title
        ),
        j = u(() => Gt(t.textColorVars)),
        q = u(() =>
          t.totalProductCount > 1
            ? `${t.totalProductCount} ${t.translations.products || "products"}`
            : `${t.totalProductCount} ${t.translations.product || "product"}`
        ),
        S = u(() => t.isListCentered && t.productIds.length === 1),
        B = u(
          () =>
            t.productSorting.enabled && t.productSorting.sortingOptions?.length
        ),
        $ = async (U) => {
          (d.value = !1), o("page-changed", U), await At(), (d.value = !0);
          const Z = document.getElementById(t.blockId),
            J = Z?.getBoundingClientRect();
          (J && J.top >= 0 && J.bottom <= window.innerHeight) ||
            Z?.scrollIntoView({ behavior: "smooth" });
        },
        z = (U) => Object.values(t.productPages).find((Z) => Z.productId === U),
        N = (U) => {
          if (t.isProductListItemLinkDisabled) return i;
          const Z = z(U);
          return Z ? { path: `/${Z.slug}` } : { path: "/" };
        },
        I = (U) => (Ln(U) ? br(U).prices[0] : U.variants[0].prices[0]),
        H = (U) => (Ln(U) && br(U).image_url) || U.thumbnail,
        A = (U) => U.images[1],
        G = () => {
          g.value && p.value.observe(g.value);
        },
        { height: k } = ep(m),
        f = u(() =>
          k.value === null || k.value === void 0 ? "auto" : `${k.value}px`
        );
      xe(
        () => t.isFullWidth,
        (U) => {
          U ? G() : p.value?.disconnect();
        }
      ),
        Me(() => {
          (p.value = new ResizeObserver((U) => {
            const { width: Z } = U[0].contentRect;
            v.value = Z;
          })),
            t.isFullWidth && G();
        });
      const W = {
        MAX_WIDTH_CATEGORY_LIST: fl,
        props: t,
        emit: o,
        route: i,
        isMobileView: r,
        columnCountDefaultValue: l,
        columnCountValue: s,
        isAnimationActive: d,
        blockProductListRef: g,
        productListContentContainerRef: m,
        blockListWidth: v,
        resizeObserver: p,
        customAttributes: b,
        emptyPageMessage: _,
        textAlign: T,
        imageWidth: y,
        imageAspectRatioValues: w,
        imageHeight: O,
        columnGapSize: C,
        rowGapSize: x,
        defaultCategory: F,
        currentCategoryTitle: Y,
        computedStyles: j,
        productCountText: q,
        isSingleColumnCentered: S,
        isSortingShown: B,
        handlePageChange: $,
        getItemProductPage: z,
        getItemProductPageTo: N,
        getSmallestProductPrice: I,
        getProductImage: H,
        getSecondaryProductImage: A,
        observeList: G,
        productListHeightRef: k,
        productListHeight: f,
        ListSkeletonLoader: ph,
        ZyroPagination: As,
        ProductListEmptyState: yh,
        ProductListItem: Ah,
        ProductSortDropdown: Vh,
        CategoryList: zh,
        get getFormattedBookingDuration() {
          return Fr;
        },
        get isProductPriceRangeShown() {
          return Ln;
        },
        get getFullProductQuantity() {
          return Ms;
        },
      };
      return (
        Object.defineProperty(W, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        W
      );
    },
  }),
  Xh = ["id"],
  Zh = {
    ref: "productListContentContainerRef",
    class: "block-product-list__content-container",
  },
  Jh = { key: 0, class: "block-product-list__category" },
  ef = { key: 2, style: { width: "100%" } },
  tf = { ref: "productList", class: "product-list" },
  af = { key: 0, class: "product-list__header" },
  nf = { key: 0, class: "product-list__total-count" },
  of = { key: 3, class: "block-product-list__empty-state" };
function rf(e, n, a, t, o, i) {
  const r = He("RouterLink");
  return (
    c(),
    h(
      "div",
      {
        id: a.blockId,
        ref: "blockProductListRef",
        style: Be(t.computedStyles),
        class: X([
          "block-product-list",
          { "block-product-list--with-categories": a.isCategoryListEnabled },
        ]),
      },
      [
        P(
          "div",
          {
            class: X([
              "block-product-list__wrapper",
              { "block-product-list__wrapper--full-width": a.isFullWidth },
            ]),
          },
          [
            a.isCategoriesLoaded && a.isCategoryListEnabled
              ? (c(),
                K(
                  t.CategoryList,
                  {
                    key: 0,
                    class: "category-list",
                    translations: a.translations,
                    categories: a.categories,
                    "current-category-id": a.productCategoryId,
                    "is-mobile-view": t.isMobileView,
                    "default-category": t.defaultCategory,
                    "is-link-disabled": a.isCategoryItemLinkDisabled,
                    "block-id": a.blockId,
                    onCategoryClick:
                      n[1] || (n[1] = (l) => t.emit("category-click", l)),
                  },
                  {
                    mobile: he(() => [
                      !a.isTotalProductCountShown && t.isSortingShown
                        ? (c(),
                          K(
                            t.ProductSortDropdown,
                            {
                              key: 0,
                              "product-sorting": a.productSorting,
                              sorting: a.sorting,
                              translations: a.translations,
                              class: "product-list__sort",
                              onSortChanged:
                                n[0] ||
                                (n[0] = (l) => t.emit("sort-changed", l)),
                            },
                            null,
                            8,
                            ["product-sorting", "sorting", "translations"]
                          ))
                        : M("", !0),
                    ]),
                    _: 1,
                  },
                  8,
                  [
                    "translations",
                    "categories",
                    "current-category-id",
                    "is-mobile-view",
                    "default-category",
                    "is-link-disabled",
                    "block-id",
                  ]
                ))
              : M("", !0),
            P(
              "div",
              Zh,
              [
                a.isCategoryListEnabled && a.isCategoriesLoaded
                  ? (c(), h("h3", Jh, ee(t.currentCategoryTitle), 1))
                  : M("", !0),
                a.isLoading
                  ? (c(),
                    K(
                      t.ListSkeletonLoader,
                      {
                        key: 1,
                        "column-count": t.columnCountValue,
                        "image-ratio": a.imageRatio,
                        "is-category-list-enabled":
                          a.isCategoryListEnabled && !a.isCategoriesLoaded,
                        "is-full-width": a.isFullWidth,
                      },
                      null,
                      8,
                      [
                        "column-count",
                        "image-ratio",
                        "is-category-list-enabled",
                        "is-full-width",
                      ]
                    ))
                  : a.isProductListShown
                  ? (c(),
                    h("div", ef, [
                      P(
                        "div",
                        tf,
                        [
                          a.isTotalProductCountShown || t.isSortingShown
                            ? (c(),
                              h("div", af, [
                                a.isTotalProductCountShown
                                  ? (c(), h("p", nf, ee(t.productCountText), 1))
                                  : M("", !0),
                                t.isSortingShown
                                  ? (c(),
                                    K(
                                      t.ProductSortDropdown,
                                      {
                                        key: 1,
                                        "product-sorting": a.productSorting,
                                        sorting: a.sorting,
                                        translations: a.translations,
                                        class: X([
                                          "product-list__sort",
                                          {
                                            "product-list__sort--hidden-mobile":
                                              !a.isTotalProductCountShown &&
                                              a.isCategoryListEnabled,
                                          },
                                        ]),
                                        onSortChanged:
                                          n[2] ||
                                          (n[2] = (l) =>
                                            t.emit("sort-changed", l)),
                                      },
                                      null,
                                      8,
                                      [
                                        "product-sorting",
                                        "sorting",
                                        "translations",
                                        "class",
                                      ]
                                    ))
                                  : M("", !0),
                              ]))
                            : M("", !0),
                          P(
                            "div",
                            {
                              class: X([
                                "product-list__content",
                                {
                                  "product-list__content--single-column":
                                    t.isSingleColumnCentered,
                                },
                              ]),
                            },
                            [
                              (c(!0),
                              h(
                                ve,
                                null,
                                Te(
                                  a.products,
                                  (l, s) => (
                                    c(),
                                    K(
                                      r,
                                      {
                                        key: `product-${s}-${l.id}`,
                                        to: t.getItemProductPageTo(l.id),
                                        class: "product-list__link",
                                      },
                                      {
                                        default: he(() => [
                                          Ee(
                                            t.ProductListItem,
                                            je(t.customAttributes, {
                                              "image-url": t.getProductImage(l),
                                              "secondary-image":
                                                t.getSecondaryProductImage(l),
                                              title: l.title,
                                              ribbon: l.ribbon_text,
                                              price:
                                                t.getSmallestProductPrice(l),
                                              "text-align": t.textAlign,
                                              "is-eager": a.isEager && s === 0,
                                              duration:
                                                t.getFormattedBookingDuration(
                                                  l,
                                                  a.translations
                                                ),
                                              "image-width": t.imageWidth,
                                              "image-height": t.imageHeight,
                                              "image-ratio": a.imageRatio,
                                              "image-hover-effect":
                                                a.imageHoverEffect,
                                              "image-border-radius":
                                                a.blockStyle?.imageBorderRadius,
                                              "is-store-quantity-tracked":
                                                l.variants[0].manage_inventory,
                                              "is-price-range-shown":
                                                t.isProductPriceRangeShown(l),
                                              quantity:
                                                t.getFullProductQuantity({
                                                  product: l,
                                                  variantsQuantity:
                                                    a.variantsQuantity,
                                                }),
                                              "product-type": l.type.value,
                                              translations: a.translations,
                                              "is-mobile-view": t.isMobileView,
                                              "is-button-enabled":
                                                a.isButtonEnabled,
                                              "button-display": a.buttonDisplay,
                                              "button-text": a.buttonText,
                                              "button-style": a.buttonStyle,
                                              "button-type": a.buttonType,
                                              "button-border-width":
                                                a.buttonBorderWidth,
                                              "ribbon-style": a.ribbonStyle,
                                              "is-purchasable":
                                                l.purchasable ?? !0,
                                              "is-button-full-width":
                                                a.isButtonFullWidth,
                                              "site-id": a.siteId,
                                              onClick: (d) =>
                                                e.$emit("product-click", l),
                                              onButtonClick: (d) =>
                                                e.$emit("button-click", l),
                                            }),
                                            null,
                                            16,
                                            [
                                              "image-url",
                                              "secondary-image",
                                              "title",
                                              "ribbon",
                                              "price",
                                              "text-align",
                                              "is-eager",
                                              "duration",
                                              "image-width",
                                              "image-height",
                                              "image-ratio",
                                              "image-hover-effect",
                                              "image-border-radius",
                                              "is-store-quantity-tracked",
                                              "is-price-range-shown",
                                              "quantity",
                                              "product-type",
                                              "translations",
                                              "is-mobile-view",
                                              "is-button-enabled",
                                              "button-display",
                                              "button-text",
                                              "button-style",
                                              "button-type",
                                              "button-border-width",
                                              "ribbon-style",
                                              "is-purchasable",
                                              "is-button-full-width",
                                              "site-id",
                                              "onClick",
                                              "onButtonClick",
                                            ]
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["to"]
                                    )
                                  )
                                ),
                                128
                              )),
                            ],
                            2
                          ),
                          Ee(
                            t.ZyroPagination,
                            {
                              "current-page": a.currentPage,
                              "page-count": a.pageCount,
                              class: "product-list__pagination",
                              color: "var(--body-color)",
                              onChangePage:
                                n[3] || (n[3] = (l) => t.handlePageChange(l)),
                            },
                            null,
                            8,
                            ["current-page", "page-count"]
                          ),
                        ],
                        512
                      ),
                    ]))
                  : (c(),
                    h("div", of, [
                      Ee(
                        t.ProductListEmptyState,
                        {
                          "text-color-vars": a.textColorVars,
                          "empty-page-message": t.emptyPageMessage,
                        },
                        null,
                        8,
                        ["text-color-vars", "empty-page-message"]
                      ),
                    ])),
              ],
              512
            ),
          ],
          2
        ),
      ],
      14,
      Xh
    )
  );
}
const lf = re(Qh, [
    ["render", rf],
    ["__scopeId", "data-v-4ce8614b"],
  ]),
  sf = (e) => {
    const n = u(() => (e.isMobileView ? "mobile" : "desktop")),
      a = u(() => e.data.settings?.styles),
      t = u(() => e.data.settings?.imageHoverEffect),
      o = u(() => e.data.textColorVars),
      i = u(() => e.data[n.value]?.columnCount),
      r = u(() => e.data[n.value]?.columnGap),
      l = u(() => e.data[n.value]?.rowGap),
      s = u(() => e.data.productCategoryId),
      d = u(() => e.data.isButtonEnabled ?? !1),
      g = u(() => e.data.buttonDisplay),
      m = u(() => e.data.buttonText),
      v = u(() => e.data.buttonStyle),
      p = u(() => e.data.buttonType),
      b = u(() => e.data.buttonBorderWidth),
      _ = u(() => e.data.ribbonStyle),
      T = u(() => e.data.imageRatio),
      y = u(() => e.data.background.color),
      w = u(() => e.data.isCategoryListEnabled),
      O = u(() => e.data.productIds),
      C = u(() => e.data.isFullWidth),
      x = u(() => e.data.isTotalProductCountShown),
      F = u(() => e.data.isListCentered),
      Y = u(() => e.data.isButtonFullWidth),
      j = u(() => ({
        ...e.data.productSorting,
        sortingOptions: e.data.productSorting?.sortingOptions?.filter(
          (S) => S.isEnabled
        ),
      })),
      q = u(() => e.data.productsPerPage || _p[i.value || 2]);
    return {
      textColorVars: o,
      blockStyle: a,
      imageHoverEffect: t,
      columnCount: i,
      productsPerPage: q,
      productCategoryId: s,
      isButtonEnabled: d,
      buttonDisplay: g,
      buttonText: m,
      buttonStyle: v,
      buttonType: p,
      buttonBorderWidth: b,
      ribbonStyle: _,
      imageRatio: T,
      backgroundColor: y,
      isCategoryListEnabled: w,
      productSorting: j,
      isFullWidth: C,
      isTotalProductCountShown: x,
      productIds: O,
      columnGap: r,
      rowGap: l,
      isListCentered: F,
      isButtonFullWidth: Y,
    };
  },
  uf = ie({
    __name: "BlockEcommerceProductListProviderUser",
    props: {
      blockId: {},
      data: {},
      lcp: {},
      ecommerceTranslations: {},
      currentLocale: { default: Da },
      blocks: { default: () => ({}) },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
      isMobileView: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { meta: t, siteId: o } = nt(),
        {
          isLoading: i,
          productPages: r,
          isShoppingCartOpen: l,
          shoppingCartItems: s,
          categories: d,
          fetchCategories: g,
          setCategories: m,
          setIsLoading: v,
          setIsLoaded: p,
          isCategoriesLoaded: b,
          setShoppingCartOpen: _,
          setShoppingCartItems: T,
          setIsCheckoutLoading: y,
          setSelectedBookingId: w,
          setStoreProducts: O,
          setVariantsQuantity: C,
          setIsCategoriesLoaded: x,
        } = na({ blockId: a.blockId }),
        {
          openEcommerceModal: F,
          closeEcommerceModal: Y,
          setProductPreviewData: j,
        } = aa(),
        { initiateCheckout: q } = jn(),
        {
          blockStyle: S,
          textColorVars: B,
          columnCount: $,
          productsPerPage: z,
          productCategoryId: N,
          isButtonEnabled: I,
          buttonDisplay: H,
          buttonText: A,
          buttonStyle: G,
          buttonType: k,
          buttonBorderWidth: f,
          ribbonStyle: W,
          imageRatio: U,
          productSorting: Z,
          backgroundColor: J,
          isCategoryListEnabled: R,
          imageHoverEffect: D,
          isFullWidth: pe,
          isTotalProductCountShown: Se,
          columnGap: ge,
          rowGap: me,
          isButtonFullWidth: ce,
          isListCentered: Q,
        } = sf(a),
        ne = E(0),
        be = E(1),
        se = E([]),
        Ae = E(0),
        Ye = E(N.value),
        Rt = E([]),
        Qe = E(
          (a.data.productSorting?.enabled &&
            a.data.productSorting?.sortingOptions?.find(
              ({ isEnabled: te }) => te
            )?.value) ||
            ""
        ),
        Yt = u(() => a.blocks[a.blockId]?.productIds),
        yt = async ({ sort: te, page: we, categoryId: ye = Ye.value }) => {
          const Je = gr(t.value);
          if (Je) {
            p(!1), v(!0);
            try {
              const _t = (
                  await Promise.allSettled([
                    g(Je, R.value),
                    fs(Je, {
                      bodyProductIds: Yt.value,
                      offset: (we - 1) * z.value,
                      limit: z.value,
                      collectionId: ye,
                      sort:
                        !te && ye ? "order=ASC&sort_by=collection_order" : te,
                    }),
                  ])
                ).map((za) => (za.status === "fulfilled" ? za.value : {})),
                [Jn, ja] = _t,
                Ou = ja.products.map(({ id: za }) => za),
                pi = await bs(Je, Ou);
              Jn.collections?.length &&
                m(
                  Jn.collections.sort((za, Au) =>
                    za.title.localeCompare(Au.title)
                  )
                ),
                (se.value = ja.products),
                (Ae.value = ja.count),
                (Rt.value = pi),
                (ne.value = Math.ceil(ja.count / ja.limit)),
                O(ja.products),
                C(pi);
            } catch (lt) {
              console.error(lt);
            } finally {
              v(!1), p(!0), x(!0);
            }
          }
        },
        Bt = E(!1),
        Nt = u(() => `store-page-${a.blockId}`),
        ht = u(() => !!se.value?.length),
        $t = u(() => i.value || !Bt.value),
        ra = (te) => {
          (be.value = te),
            yt({ page: te, sort: Qe.value, categoryId: Ye.value });
        },
        zt = (te) => {
          const we = te.target.value;
          (Qe.value = we),
            yt({ sort: we, page: be.value, categoryId: Ye.value });
        },
        V = (te, we) => {
          if (((be.value = 1), (Ye.value = te), !a.isInPreviewMode)) {
            const ye = Ls(te);
            window.history.pushState({}, "", ye);
          }
          yt({ sort: Qe.value, page: we || be.value, categoryId: Ye.value });
        },
        ue = (te) => {
          Ye.value !== te && V(te);
        },
        le = async (te) => {
          if (a.isInPreviewMode) {
            F("EcommerceMessageButtonDisabled");
            return;
          }
          if (te.options.length) {
            const ye = Object.values(r.value).find(
                (_t) => _t.productId === te.id
              ),
              lt = Object.keys(a.blocks)
                .filter((_t) => a.blocks[_t].type === "BlockEcommerceProduct")
                .find((_t) => ye?.blocks?.includes(_t));
            if (!lt) {
              if (!ye) {
                window.location.assign("/");
                return;
              }
              window.location.assign(`/${ye.slug}`);
              return;
            }
            j(a.blocks[lt]), F("EcommerceProductPreview");
            return;
          }
          const we = [{ ...te, variants: [te.variants[0]] }];
          if ((await Y(), te.type.value === qt)) {
            w(te.id), F("EcommerceBookingEventSelect");
            return;
          }
          if (a.isCartVisible) {
            if ((T([...s.value, ...we]), l.value)) return;
            _(!0);
          } else
            y(!0),
              await q(we).then(() => {
                y(!1);
              });
        },
        Ce = () => {
          const we =
              new URLSearchParams(window.location.search).get(Nt.value) || "1",
            ye = Number.parseInt(we, 10);
          ye !== be.value && (be.value = ye);
        },
        Ne = () => {
          const we = new URLSearchParams(window.location.search).get(
            "category"
          );
          we !== Ye.value &&
            ((Ye.value = we),
            yt({ sort: Qe.value, page: be.value, categoryId: we || "" }));
        },
        Ze = () => {
          Ce(), Ne();
        };
      Me(() => {
        Bt.value = !0;
        const te = new URLSearchParams(window.location.search),
          we = te.get(Nt.value) || "1",
          ye = Number.parseInt(we, 10),
          Je = te.get("category"),
          lt = ye !== be.value;
        if (lt && !Je) (be.value = ye), ra(ye);
        else if (Je) {
          const _t = lt ? ye : be.value;
          V(Je, _t);
        } else yt({ sort: Qe.value, page: be.value, categoryId: Ye.value });
        window.addEventListener("popstate", () => {
          Ze();
        });
      }),
        Ot(() => {
          window.removeEventListener("popstate", Ze);
        });
      const dt = {
        props: a,
        meta: t,
        siteId: o,
        isEcommerceLoading: i,
        productPages: r,
        isShoppingCartOpen: l,
        shoppingCartItems: s,
        categories: d,
        fetchCategories: g,
        setCategories: m,
        setIsLoading: v,
        setIsLoaded: p,
        isCategoriesLoaded: b,
        setShoppingCartOpen: _,
        setShoppingCartItems: T,
        setIsCheckoutLoading: y,
        setSelectedBookingId: w,
        setStoreProducts: O,
        setVariantsQuantity: C,
        setIsCategoriesLoaded: x,
        openEcommerceModal: F,
        closeEcommerceModal: Y,
        setProductPreviewData: j,
        initiateCheckout: q,
        blockStyle: S,
        textColorVars: B,
        columnCount: $,
        productsPerPage: z,
        productCategoryId: N,
        isButtonEnabled: I,
        buttonDisplay: H,
        buttonText: A,
        buttonStyle: G,
        buttonType: k,
        buttonBorderWidth: f,
        ribbonStyle: W,
        imageRatio: U,
        productSorting: Z,
        backgroundColor: J,
        isCategoryListEnabled: R,
        imageHoverEffect: D,
        isFullWidth: pe,
        isTotalProductCountShown: Se,
        columnGap: ge,
        rowGap: me,
        isButtonFullWidth: ce,
        isListCentered: Q,
        pageCount: ne,
        currentPage: be,
        products: se,
        totalProductCount: Ae,
        currentCategoryId: Ye,
        variantsQuantity: Rt,
        sorting: Qe,
        productIds: Yt,
        fetchProducts: yt,
        isClientLoaded: Bt,
        blockStorePageQuery: Nt,
        isProductListShown: ht,
        isLoading: $t,
        handlePageChange: ra,
        handleSortChange: zt,
        handleCategoryChange: V,
        handleCategoryClick: ue,
        handleButtonClick: le,
        handleBrowserNavigationPageChange: Ce,
        handleBrowserNavigationCategoryChange: Ne,
        handleWindowPopState: Ze,
        BlockEcommerceProductList: lf,
      };
      return (
        Object.defineProperty(dt, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        dt
      );
    },
  });
function cf(e, n, a, t, o, i) {
  return (
    c(),
    K(
      t.BlockEcommerceProductList,
      {
        "block-id": a.blockId,
        "block-style": t.blockStyle,
        "text-color-vars": t.textColorVars,
        "is-product-list-shown": t.isProductListShown,
        "products-per-page": t.productsPerPage,
        "column-count": t.columnCount,
        "page-count": t.pageCount,
        "total-product-count": t.totalProductCount,
        "current-page": t.currentPage,
        "product-pages": t.productPages,
        "product-category-id": t.currentCategoryId,
        "is-button-enabled": t.isButtonEnabled,
        "button-display": t.buttonDisplay,
        "button-text": t.buttonText,
        "button-style": t.buttonStyle,
        "button-type": t.buttonType,
        "button-border-width": t.buttonBorderWidth,
        "is-loading": t.isLoading,
        "is-categories-loaded": t.isCategoriesLoaded,
        "ribbon-style": t.ribbonStyle,
        products: t.products,
        translations: a.ecommerceTranslations,
        "image-ratio": t.imageRatio,
        "image-hover-effect": t.imageHoverEffect,
        "is-eager":
          a.lcp.type === "block-ecommerce-product-list" &&
          a.lcp.id === a.blockId,
        "site-id": t.siteId,
        "variants-quantity": t.variantsQuantity,
        "product-sorting": t.productSorting,
        sorting: t.sorting,
        "background-color": t.backgroundColor,
        "is-category-list-enabled": t.isCategoryListEnabled,
        categories: t.categories,
        "product-ids": t.productIds,
        "is-full-width": t.isFullWidth,
        "is-total-product-count-shown": t.isTotalProductCountShown,
        "column-gap": t.columnGap,
        "row-gap": t.rowGap,
        "is-category-item-link-disabled": a.isInPreviewMode,
        "is-button-full-width": t.isButtonFullWidth,
        "is-list-centered": t.isListCentered,
        "is-mobile-view": a.isMobileView,
        onPageChanged: t.handlePageChange,
        onSortChanged: t.handleSortChange,
        onButtonClick: t.handleButtonClick,
        onCategoryClick: t.handleCategoryClick,
      },
      null,
      8,
      [
        "block-id",
        "block-style",
        "text-color-vars",
        "is-product-list-shown",
        "products-per-page",
        "column-count",
        "page-count",
        "total-product-count",
        "current-page",
        "product-pages",
        "product-category-id",
        "is-button-enabled",
        "button-display",
        "button-text",
        "button-style",
        "button-type",
        "button-border-width",
        "is-loading",
        "is-categories-loaded",
        "ribbon-style",
        "products",
        "translations",
        "image-ratio",
        "image-hover-effect",
        "is-eager",
        "site-id",
        "variants-quantity",
        "product-sorting",
        "sorting",
        "background-color",
        "is-category-list-enabled",
        "categories",
        "product-ids",
        "is-full-width",
        "is-total-product-count-shown",
        "column-gap",
        "row-gap",
        "is-category-item-link-disabled",
        "is-button-full-width",
        "is-list-centered",
        "is-mobile-view",
      ]
    )
  );
}
const df = re(uf, [["render", cf]]),
  xs = ({
    move: e = { swipe: !1, drag: !1 },
    onMoveLeft: n = () => {},
    onMoveRight: a = () => {},
    onMoveUp: t = () => {},
    onMoveDown: o = () => {},
  }) => {
    let i = null,
      r = null;
    const l = e.swipe && e.drag,
      s = e.swipe || e.drag;
    function d(T) {
      return T.touches;
    }
    function g(T) {
      const y = d(T)[0];
      (i = y.clientX), (r = y.clientY);
    }
    function m(T) {
      const y = new Image();
      (y.src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="),
        T.dataTransfer.setDragImage(y, 0, 0),
        (i = T.clientX),
        (r = T.clientY);
    }
    const v = (T, y) => {
        Math.abs(T) > Math.abs(y) ? (T > 0 ? n() : a()) : y > 0 ? t() : o(),
          (i = null),
          (r = null);
      },
      p = (T) => {
        if (!i || !r) return;
        const y = T.touches[0].clientX,
          w = T.touches[0].clientY,
          O = i - y,
          C = r - w;
        v(O, C);
      },
      b = (T) => {
        if (!i || !r) return;
        const y = i - T.clientX,
          w = r - T.clientY;
        v(y, w);
      };
    return {
      enableMoveEvents: (T = !0, y = null) => {
        const w = y === null ? document : y,
          O = T ? "addEventListener" : "removeEventListener";
        if (l)
          w[O]("touchstart", g, !1),
            w[O]("touchmove", p, !1),
            w[O]("dragstart", m, !1),
            w[O]("drag", b, !1);
        else if (s) {
          const C = e.swipe ? g : m,
            x = e.swipe ? p : b;
          w[O](e.swipe ? "touchstart" : "dragstart", C, !1),
            w[O](e.swipe ? "touchmove" : "drag", x, !1);
        }
      },
    };
  },
  mf = ie({
    __name: "Carousel",
    props: {
      mediaItems: {},
      productTitle: {},
      arrowsColor: { default: "unset" },
      navigationThumbnailArrowsColor: { default: "unset" },
      galleryPlacement: { default: "left" },
      imageRatio: { default: "unset" },
      imageBorderRadius: { default: "unset" },
      isEager: { type: Boolean, default: !1 },
      variantImage: { default: null },
      isQuickPreview: { type: Boolean, default: !1 },
      isVariantImagePreselected: { type: Boolean, default: !1 },
      siteId: { default: "" },
    },
    emits: ["image-click"],
    setup(e, { expose: n }) {
      n();
      const a = `${ft}/placeholder.png`,
        t = e,
        o = { url: a, type: "image" },
        i = E(),
        r = E(0),
        l = E(""),
        s = E(0),
        d = E(0),
        g = Ua(() => (t.mediaItems.length ? t.mediaItems : [o])),
        m = u(() => t.galleryPlacement === "left"),
        v = u(() => {
          let A = 0;
          switch (!0) {
            case r.value < (m.value ? 920 : 900):
              A = 4;
              break;
            case r.value < (m.value ? 1060 : 1020):
              A = 5;
              break;
            case r.value < (m.value ? 1250 : 1160):
              A = 6;
              break;
            case r.value < (m.value ? 1400 : 1320):
              A = 7;
              break;
            default:
              A = m.value ? 7 : 8;
          }
          return d.value !== 0 && d.value + A < t.mediaItems.length ? A - 1 : A;
        }),
        p = u(() => t.mediaItems.slice(d.value, d.value + v.value)),
        b = u(() => p.value.some((A) => A.url === t.mediaItems[s.value].url)),
        _ = u(() => t.mediaItems.length > 1),
        T = u(() => _.value && !t.isQuickPreview),
        y = u(() =>
          t.mediaItems.length < v.value
            ? !1
            : d.value + v.value < t.mediaItems.length
        ),
        w = u(() => {
          switch (t.imageRatio) {
            case Ft.COVER:
            case Ft.LANDSCAPE:
            case Ft.PORTRAIT:
              return "cover";
            default:
              return "contain";
          }
        }),
        O = u(() => (t.isQuickPreview ? oc : rc)),
        C = u(() => {
          const A = m.value ? ic : O.value;
          switch (t.imageRatio) {
            case Ft.LANDSCAPE:
              return A * 0.75;
            case Ft.PORTRAIT:
              return A * 1.333;
            default:
              return;
          }
        }),
        x = u(() => ({
          "--image-max-width": `${O.value}px`,
          "--image-max-width-small": `${ki}px`,
          "--image-object-fit": w.value,
          "--image-border-radius":
            w.value === "cover" ? t.imageBorderRadius : 0,
          "--arrow-color": t.arrowsColor,
          "--thumbnail-arrow-color": t.navigationThumbnailArrowsColor,
        })),
        F = () => {
          t.mediaItems.length - s.value < v.value
            ? (d.value = t.mediaItems.length - v.value)
            : (d.value = s.value);
        },
        Y = () => {
          (r.value = window.innerWidth), v.value < t.mediaItems.length && F();
        },
        j = (A) => p.value[A].url === t.mediaItems[s.value].url,
        q = (A) => {
          s.value = t.mediaItems.findIndex((G) => G.url === p.value[A].url);
        },
        S = () => {
          (l.value = "right"),
            (s.value = s.value === t.mediaItems.length - 1 ? 0 : s.value + 1),
            b.value ||
              (d.value + v.value === t.mediaItems.length
                ? (d.value = 0)
                : (F(), v.value !== p.value.length && F()));
        },
        B = () => {
          (l.value = "left"),
            (s.value = s.value === 0 ? t.mediaItems.length - 1 : s.value - 1),
            b.value ||
              (d.value === 0 ? (d.value = t.mediaItems.length - v.value) : F());
        },
        $ = () => {
          const A = v.value;
          d.value += 1;
          const G = v.value;
          A !== G && y.value && $();
        },
        z = () => {
          d.value -= 1;
        },
        N = (A) => {
          if (!_.value) return;
          const { enableMoveEvents: G } = xs({
            move: { drag: !1, swipe: !0 },
            onMoveLeft: S,
            onMoveRight: B,
          });
          G(A, i.value);
        },
        I = () => {
          const A = t.mediaItems.findIndex((G) => G.url === t.variantImage);
          A > -1 && (s.value = A);
        };
      xe(
        () => t.variantImage,
        () => {
          I(), b.value || F();
        }
      ),
        Me(() => {
          (r.value = window.innerWidth),
            window.addEventListener("resize", Y),
            t.isVariantImagePreselected && I(),
            N(!0);
        }),
        Ot(() => {
          window.removeEventListener("resize", Y), N(!1);
        });
      const H = {
        PRODUCT_PLACEHOLDER_IMAGE: a,
        props: t,
        placeholderImageData: o,
        carouselRef: i,
        windowWidth: r,
        slideDirection: l,
        currentIndex: s,
        imageListStartIndex: d,
        mediaItems: g,
        isGalleryLeft: m,
        imagePreviewAmount: v,
        thumbnails: p,
        isThumbnailVisible: b,
        isMoreThanOneImage: _,
        isArrowsShown: T,
        isRightImageArrowShown: y,
        objectFit: w,
        imageMaxWidth: O,
        imageMaxHeight: C,
        carouselStyle: x,
        presetThumbnailPosition: F,
        resizeEventHandler: Y,
        isImageMatch: j,
        handleThumbnailClick: q,
        goToNextSlide: S,
        goToPreviousSlide: B,
        moveImageListRight: $,
        moveImageListLeft: z,
        enableCarouselMoveEvents: N,
        setVariantImage: I,
        ProductMediaElement: _o,
        get PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX() {
          return ki;
        },
      };
      return (
        Object.defineProperty(H, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        H
      );
    },
  }),
  gf = P(
    "span",
    { class: "product-carousel__arrow product-carousel__arrow--left" },
    null,
    -1
  ),
  vf = [gf],
  pf = P(
    "span",
    { class: "product-carousel__arrow product-carousel__arrow--right" },
    null,
    -1
  ),
  hf = [pf],
  ff = ["onClick"],
  bf = { class: "product-carousel__dots-wrapper" },
  yf = ["onClick"];
function _f(e, n, a, t, o, i) {
  const r = ze("qa");
  return (
    c(),
    h(
      "div",
      {
        class: X([
          "product-carousel",
          { "product-carousel--left": t.isGalleryLeft },
        ]),
        style: Be(t.carouselStyle),
      },
      [
        P(
          "div",
          {
            ref: "carouselRef",
            class: X(`
				product-carousel__image-wrapper
				product-carousel__image-wrapper--${a.imageRatio}${
              t.isGalleryLeft ? "-left" : ""
            }
			`),
          },
          [
            t.isArrowsShown
              ? (c(),
                h(
                  ve,
                  { key: 0 },
                  [
                    de(
                      (c(),
                      h(
                        "button",
                        {
                          class:
                            "product-carousel__slider-button product-carousel__slider-button--left",
                          onClick: t.goToPreviousSlide,
                        },
                        vf
                      )),
                      [[r, "product-carousel-button-prev"]]
                    ),
                    de(
                      (c(),
                      h(
                        "button",
                        {
                          class:
                            "product-carousel__slider-button product-carousel__slider-button--right",
                          onClick: t.goToNextSlide,
                        },
                        hf
                      )),
                      [[r, "product-carousel-button-next"]]
                    ),
                  ],
                  64
                ))
              : M("", !0),
            Ee(
              xt,
              {
                name: `slide-${t.slideDirection}`,
                mode: "out-in",
                class: "product-carousel__image-content",
              },
              {
                default: he(() => [
                  (c(),
                  K(
                    t.ProductMediaElement,
                    {
                      key: t.mediaItems[t.currentIndex].url,
                      src: t.mediaItems[t.currentIndex].url,
                      "media-type": t.mediaItems[t.currentIndex].type,
                      alt: a.productTitle,
                      class:
                        "product-carousel__image product-carousel__main-image",
                      "is-eager": a.isEager,
                      "object-fit": t.objectFit,
                      width: t.imageMaxWidth,
                      height: t.imageMaxHeight,
                      "enable-srcset": "",
                      onClick:
                        n[0] ||
                        (n[0] = (l) => e.$emit("image-click", t.currentIndex)),
                    },
                    null,
                    8,
                    [
                      "src",
                      "media-type",
                      "alt",
                      "is-eager",
                      "object-fit",
                      "width",
                      "height",
                    ]
                  )),
                ]),
                _: 1,
              },
              8,
              ["name"]
            ),
          ],
          2
        ),
        t.isMoreThanOneImage
          ? (c(),
            h(
              ve,
              { key: 0 },
              [
                a.isQuickPreview
                  ? M("", !0)
                  : (c(),
                    h(
                      "div",
                      {
                        key: 0,
                        class: X([
                          "product-carousel__image-list",
                          {
                            "product-carousel__image-list-left":
                              t.isGalleryLeft,
                          },
                        ]),
                      },
                      [
                        t.imageListStartIndex !== 0
                          ? de(
                              (c(),
                              h(
                                "button",
                                {
                                  key: 0,
                                  class: X([
                                    "product-carousel__image-arrow",
                                    {
                                      "product-carousel__image-arrow--left":
                                        !t.isGalleryLeft,
                                      "product-carousel__image-arrow--top":
                                        t.isGalleryLeft,
                                    },
                                  ]),
                                  onClick: t.moveImageListLeft,
                                },
                                null,
                                2
                              )),
                              [[r, "product-carousel-image-button-left"]]
                            )
                          : M("", !0),
                        P(
                          "div",
                          {
                            class: X({
                              "product-carousel__image-list-element-wrapper-left":
                                t.isGalleryLeft,
                            }),
                          },
                          [
                            (c(!0),
                            h(
                              ve,
                              null,
                              Te(
                                t.thumbnails,
                                (l, s) => (
                                  c(),
                                  h(
                                    "button",
                                    {
                                      key: `image-${s}-${l.url}`,
                                      class: X([
                                        "product-carousel__image-list-element",
                                        {
                                          "product-carousel__image-list-element--active":
                                            t.isImageMatch(s),
                                        },
                                      ]),
                                      onClick: (d) => t.handleThumbnailClick(s),
                                    },
                                    [
                                      Ee(
                                        t.ProductMediaElement,
                                        {
                                          src: l.url,
                                          alt: a.productTitle,
                                          "media-type": l.type,
                                          class: "product-carousel__image",
                                          "is-eager": a.isEager,
                                          "object-fit": a.imageRatio,
                                          "is-video-autoplay-disabled": "",
                                          "site-id": a.siteId,
                                          width:
                                            t.PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX,
                                          height:
                                            t.PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX,
                                        },
                                        null,
                                        8,
                                        [
                                          "src",
                                          "alt",
                                          "media-type",
                                          "is-eager",
                                          "object-fit",
                                          "site-id",
                                          "width",
                                          "height",
                                        ]
                                      ),
                                    ],
                                    10,
                                    ff
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          2
                        ),
                        t.isRightImageArrowShown
                          ? de(
                              (c(),
                              h(
                                "button",
                                {
                                  key: 1,
                                  class: X([
                                    "product-carousel__image-arrow",
                                    {
                                      "product-carousel__image-arrow--right":
                                        !t.isGalleryLeft,
                                      "product-carousel__image-arrow--bottom":
                                        t.isGalleryLeft,
                                    },
                                  ]),
                                  onClick: t.moveImageListRight,
                                },
                                null,
                                2
                              )),
                              [[r, "product-carousel-image-button-right"]]
                            )
                          : M("", !0),
                      ],
                      2
                    )),
                P("div", bf, [
                  (c(!0),
                  h(
                    ve,
                    null,
                    Te(
                      t.mediaItems,
                      (l, s) => (
                        c(),
                        h(
                          "button",
                          {
                            key: `image-dot-${s}`,
                            class: "product-carousel__dot-button",
                            onClick: (d) => (t.currentIndex = s),
                          },
                          [
                            P(
                              "span",
                              {
                                class: X([
                                  "product-carousel__dot",
                                  {
                                    "product-carousel__dot--active":
                                      s === t.currentIndex,
                                  },
                                ]),
                              },
                              null,
                              2
                            ),
                          ],
                          8,
                          yf
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ],
              64
            ))
          : M("", !0),
      ],
      6
    )
  );
}
const wf = re(mf, [["render", _f]]),
  kf = ie({
    __name: "OptionSelect",
    props: {
      title: {},
      labelKey: { default: "value" },
      options: { default: () => ({}) },
      value: { default: "" },
    },
    emits: ["set-value"],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = a,
        i = {
          emit: t,
          updateSelectedValue: (r) => {
            const l = r.target?.value;
            t("set-value", l);
          },
        };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  Sf = { class: "option-select" },
  Tf = { class: "option-select__label" },
  Cf = { class: "option-select__select-wrapper" },
  Pf = ["value"],
  If = ["value"];
function Ef(e, n, a, t, o, i) {
  const r = ze("qa");
  return (
    c(),
    h("div", Sf, [
      P("p", Tf, ee(a.title), 1),
      P("div", Cf, [
        de(
          (c(),
          h(
            "select",
            {
              value: a.value,
              class: "option-select__select",
              onChange: n[0] || (n[0] = (l) => t.updateSelectedValue(l)),
            },
            [
              (c(!0),
              h(
                ve,
                null,
                Te(
                  a.options,
                  (l, s) => (
                    c(),
                    h(
                      "option",
                      { key: `option-${s}`, value: l.id },
                      ee(l[a.labelKey]),
                      9,
                      If
                    )
                  )
                ),
                128
              )),
            ],
            40,
            Pf
          )),
          [[r, "product-section-select-button"]]
        ),
      ]),
    ])
  );
}
const Df = re(kf, [
    ["render", Ef],
    ["__scopeId", "data-v-4f73632f"],
  ]),
  Mf = {
    props: {
      imageBorderRadius: { type: String, default: "0" },
      textAlign: { type: String, default: "" },
    },
    computed: {
      computedStyles() {
        return { "--image-border-radius": this.imageBorderRadius };
      },
    },
  },
  Rs = (e) => (Vt("data-v-13b9db75"), (e = e()), Ut(), e),
  Of = Rs(() => P("div", { class: "skeleton-loader__image" }, null, -1)),
  Af = Rs(() =>
    P(
      "div",
      { class: "skeleton-loader__title skeleton-loader__text" },
      null,
      -1
    )
  );
function Bf(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: "skeleton-loader", style: Be(i.computedStyles) },
      [
        Of,
        P(
          "div",
          {
            class: X([
              "skeleton-loader__wrapper",
              { "skeleton-loader__wrapper--center": a.textAlign === "center" },
            ]),
          },
          [
            Af,
            (c(),
            h(
              ve,
              null,
              Te(10, (r) =>
                P("div", { key: r, class: "skeleton-loader__text" })
              ),
              64
            )),
          ],
          2
        ),
      ],
      4
    )
  );
}
const Lf = re(Mf, [
    ["render", Bf],
    ["__scopeId", "data-v-13b9db75"],
  ]),
  xf = ie({
    name: "QuantityPicker",
    props: {
      qaSelector: { type: String, default: "" },
      isStockAvailable: { type: Boolean, default: !0 },
      quantity: { type: Number, required: !0 },
      size: { type: Number, default: 48 },
      fontSize: { type: Number, default: 16 },
      isCartStyle: { type: Boolean, default: !1 },
      isInputDisabled: { type: Boolean, default: !1 },
      isLimitReached: { type: Boolean, default: !1 },
    },
    emits: ["quantity-change"],
    data() {
      return { inputValue: this.quantity };
    },
    computed: {
      computedStyles() {
        return {
          "--size": `${this.size}px`,
          "--font-size": `${this.fontSize}px`,
        };
      },
      isIncreaseDisabled() {
        return !this.isStockAvailable || this.isLimitReached;
      },
    },
    watch: {
      quantity(e) {
        this.inputValue = e;
      },
    },
    methods: {
      handleQuantityInput(e) {
        const n = e.target?.value;
        if (n.match(Lc)) this.$emit("quantity-change", Number(e.target.value));
        else if (n === "") return;
        this.inputValue = this.quantity;
      },
      handleEmptyInput(e) {
        e.target?.value === "" &&
          (this.$emit("quantity-change", 1), (this.inputValue = 1));
      },
    },
  }),
  Rf = ["disabled"],
  Nf = ["disabled"];
function Hf(e, n, a, t, o, i) {
  const r = ze("qa");
  return (
    c(),
    h(
      "span",
      {
        class: X([
          "quantity-picker",
          { "quantity-picker--cart-style": e.isCartStyle },
        ]),
        style: Be(e.computedStyles),
      },
      [
        de(
          (c(),
          h(
            "button",
            {
              class: X([
                "quantity-picker__control",
                {
                  "quantity-picker__control--rounded quantity-picker__control--bigger":
                    e.isCartStyle,
                },
              ]),
              onClick:
                n[0] ||
                (n[0] = (l) => e.$emit("quantity-change", e.quantity - 1)),
            },
            [Le(" - ")],
            2
          )),
          [[r, `${e.qaSelector}-btn-decrease`]]
        ),
        de(
          P(
            "input",
            {
              "onUpdate:modelValue": n[1] || (n[1] = (l) => (e.inputValue = l)),
              disabled: e.isInputDisabled,
              class: X([
                "quantity-picker__amount",
                { "quantity-picker__amount--borderless": e.isCartStyle },
              ]),
              onInput:
                n[2] ||
                (n[2] = (...l) =>
                  e.handleQuantityInput && e.handleQuantityInput(...l)),
              onBlur:
                n[3] ||
                (n[3] = (...l) =>
                  e.handleEmptyInput && e.handleEmptyInput(...l)),
            },
            null,
            42,
            Rf
          ),
          [
            [Kl, e.inputValue],
            [r, `${e.qaSelector}-text-qty`],
          ]
        ),
        de(
          (c(),
          h(
            "button",
            {
              class: X([
                "quantity-picker__control",
                {
                  "quantity-picker__control--rounded quantity-picker__control--bigger":
                    e.isCartStyle,
                },
              ]),
              disabled: e.isIncreaseDisabled,
              onClick:
                n[4] ||
                (n[4] = (l) => e.$emit("quantity-change", e.quantity + 1)),
            },
            [Le(" + ")],
            10,
            Nf
          )),
          [[r, `${e.qaSelector}-btn-increaseq`]]
        ),
      ],
      6
    )
  );
}
const Ns = re(xf, [
    ["render", Hf],
    ["__scopeId", "data-v-9766ec29"],
  ]),
  Vf = ie({
    __name: "AdditionalInfoSections",
    props: { productDescription: {}, data: {} },
    setup(e, { expose: n }) {
      n();
      const a = E(0),
        t = E({}),
        l = {
          activeTab: a,
          infoButtonRef: t,
          setActiveTab: (s) => {
            if (a.value === s) {
              a.value = -1;
              return;
            }
            (a.value = s),
              setTimeout(() => {
                t.value[s].scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }, 200);
          },
          unsetHeightForTransition: (s) => {
            s.style.height = "0";
          },
          setScrollHeightForTransition: (s) => {
            (s.style.height = `${s.scrollHeight}px`),
              setTimeout(() => {
                s.style.height = "";
              }, 200);
          },
        };
      return (
        Object.defineProperty(l, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        l
      );
    },
  }),
  Uf = { class: "additional-info-sections" },
  Yf = ["onClick"],
  $f = { class: "additional-info-sections__item-title" },
  Ff = ["innerHTML"];
function Wf(e, n, a, t, o, i) {
  return (
    c(),
    h("div", Uf, [
      (c(!0),
      h(
        ve,
        null,
        Te(
          a.data,
          (r, l) => (
            c(),
            h(
              "button",
              {
                key: r.id,
                class: "additional-info-sections__item",
                onClick: (s) => t.setActiveTab(l),
              },
              [
                P(
                  "div",
                  {
                    ref_for: !0,
                    ref: (s) => (t.infoButtonRef[l] = s),
                    class: "additional-info-sections__item-title-wrapper",
                  },
                  [
                    P("h2", $f, ee(r.title), 1),
                    P(
                      "span",
                      {
                        class: X([
                          "additional-info-sections__icon",
                          {
                            "additional-info-sections__icon--active":
                              t.activeTab === l,
                          },
                        ]),
                      },
                      null,
                      2
                    ),
                  ],
                  512
                ),
                Ee(
                  xt,
                  {
                    name: "accordion",
                    onEnter: t.setScrollHeightForTransition,
                    onBeforeEnter: t.unsetHeightForTransition,
                    onBeforeLeave: t.setScrollHeightForTransition,
                    onLeave: t.unsetHeightForTransition,
                  },
                  {
                    default: he(() => [
                      de(
                        P(
                          "p",
                          {
                            class: "additional-info-sections__item-description",
                            innerHTML: r.description,
                          },
                          null,
                          8,
                          Ff
                        ),
                        [[Wt, t.activeTab === l]]
                      ),
                    ]),
                    _: 2,
                  },
                  1024
                ),
              ],
              8,
              Yf
            )
          )
        ),
        128
      )),
    ])
  );
}
const Gf = re(Vf, [
    ["render", Wf],
    ["__scopeId", "data-v-9b7c3ab8"],
  ]),
  Uo = 5,
  Tn = 1,
  qf = ie({
    __name: "BlockEcommerceProduct",
    props: {
      blockId: {},
      productData: {},
      blockStyle: { default: () => ({}) },
      textColorVars: { default: () => ({}) },
      blockButtonText: { default: "" },
      blockButtonStyle: { default: () => ({}) },
      blockButtonType: { default: "primary" },
      blockButtonBorderWidth: { default: 0 },
      navigationArrowsColor: { default: "" },
      navigationThumbnailArrowsColor: { default: "" },
      galleryPlacement: { default: "" },
      imageRatio: { default: "cover" },
      imageBorderRadius: { default: "0%" },
      isLoading: { type: Boolean, default: !1 },
      isCheckoutLoading: { type: Boolean, default: !1 },
      canAddToCart: { type: Function, default: () => !0 },
      isEager: { type: Boolean, default: !1 },
      translations: {},
      quantifiedCartItemsList: { default: () => [] },
      isQuantityPickerEnabled: { type: Boolean },
      productPages: { default: () => ({}) },
      isQuickPreview: { type: Boolean, default: !1 },
      isCartVisible: { type: Boolean },
      siteId: {},
      shoppingCartItems: { default: () => [] },
      variantsQuantity: {},
      currentPageType: { default: "default" },
      isMobileView: { type: Boolean },
    },
    emits: ["buy-button-click", "click-more", "image-click"],
    setup(e, { expose: n, emit: a }) {
      n(), et((me) => ({ aeef47ca: g.value }));
      const t = { [ya]: fn },
        o = e,
        i = a,
        r = E(1),
        l = E(""),
        s = E(!1),
        d = E(Qt),
        g = u(() => `${ta}px`),
        m = u(() => o.currentPageType === ns),
        v = u(() => ({
          normal:
            o.blockButtonStyle[
              `grid-button-${o.blockButtonType}-background-color`
            ],
          hover:
            o.blockButtonStyle[
              `grid-button-${o.blockButtonType}-background-color-hover`
            ],
        })),
        p = u(() => ({
          hover:
            o.blockButtonStyle[
              `grid-button-${o.blockButtonType}-border-color-hover`
            ],
          normal:
            o.blockButtonStyle[`grid-button-${o.blockButtonType}-border-color`],
        })),
        b = u(() => o.blockStyle?.textAlign),
        _ = u(() => o.productData),
        T = u(() =>
          _.value.options.length
            ? _.value.options.map((me) => ({
                ...me.values.filter(
                  (ce, Q, ne) =>
                    ne.findIndex((be) => be.value === ce.value) === Q
                ),
              }))
            : []
        ),
        y = u(() => d.value?.variants[0]),
        w = u(
          () =>
            o.productData.purchasable === void 0 || o.productData.purchasable
        ),
        O = (me) => {
          const ce = y.value?.options.find(
            (Q) => Q.option_id === T.value[me][0].option_id
          );
          return Object.values(T.value[me]).find((Q) => ce?.value === Q.value)
            ?.id;
        },
        C = u(() =>
          d.value.id ? y.value?.prices[0] : _.value?.variants[0].prices[0]
        ),
        x = u(
          () =>
            o.quantifiedCartItemsList.find(
              (me) => me.product.variants[0].id === y.value?.id
            )?.quantity || 0
        ),
        F = u(() => (o.isCartVisible ? r.value + x.value : r.value)),
        Y = u(() =>
          y.value?.manage_inventory
            ? F.value <
              Dn({
                variantsQuantity: o.variantsQuantity,
                variantId: y.value?.id,
              })
            : !0
        ),
        j = u(() => ({ ...Gt({ ...o.textColorVars, ...o.blockButtonStyle }) })),
        q = u(
          () => !_.value?.options.length || (_.value?.options.length && d.value)
        ),
        S = u(() => _.value?.type.value === qt),
        B = u(() => !o.canAddToCart(_.value?.id, d.value?.variants[0].id)),
        $ = u(() => S.value && !C.value?.amount),
        z = u(
          () =>
            o.blockButtonText ||
            (S.value
              ? o.translations?.bookNow || "Book now"
              : o.translations?.addToBag || "Add to bag")
        ),
        N = u(() =>
          $.value
            ? o.translations?.free || "Free"
            : da({ amount: C.value?.amount, currency: C.value?.currency })
        ),
        I = u(() => _.value?.variants[0].booking_event?.location),
        H = u(() => Fr(_.value, o.translations)),
        A = u(
          () =>
            y.value?.manage_inventory &&
            Dn({
              variantsQuantity: o.variantsQuantity,
              variantId: y.value?.id,
            }) === 0
        ),
        G = u(() => !!y.value?.manage_inventory),
        k = u(() => {
          if (!o.productPages) return "/";
          const me = Object.values(o.productPages).find(
            (ce) => ce.productId === _.value.id
          );
          return me ? `/${me.slug}` : "/";
        }),
        f = u(() => {
          const me = Dn({
            variantsQuantity: o.variantsQuantity,
            variantId: y.value?.id,
          });
          return A.value || x.value === me
            ? o.translations.outOfStock
            : `${me <= Uo ? me : `${Uo}+`} ${o.translations.inStock} `;
        }),
        W = u(() =>
          [...(_.value?.additional_info || [])].sort(
            (me, ce) => me.order - ce.order
          )
        ),
        U = u(() => _.value?.description && !o.isQuickPreview),
        Z = u(() => W.value.length && o.isMobileView),
        J = (me) => ({ ..._.value, variants: [me] }),
        R = () => {
          if (!_.value) return Qt;
          if (_.value[hs] === Ur) {
            const ce = _.value.variants.reduce((be, se) => {
                const Ae = be.prices[0]?.sale_amount || be.prices[0]?.amount,
                  Ye = se.prices[0]?.sale_amount || se.prices[0]?.amount;
                return Ae <= Ye ? be : se;
              }),
              Q = T.value.map(
                (be) =>
                  Object.values(be).find((se) =>
                    ce.options.some((Ae) => Ae.value === se.value)
                  ) || {}
              ),
              ne = { ...ce, options: [...Q] };
            return J(ne);
          }
          const me = _.value.variants.find((ce) =>
            ce.options.every((Q) =>
              T.value.some((ne) => ne[0].value === Q.value)
            )
          );
          return J(me || _.value.variants[0]);
        },
        D = () => {
          const me = new Array(r.value).fill(d.value);
          (r.value = Tn), i("buy-button-click", me);
        },
        pe = (me) => {
          r.value = Tn;
          const ce =
              _.value.options
                .map((se) => se.values.find((Ae) => Ae.id === me))
                .find((se) => se) || {},
            ne = [
              ...y.value?.options.filter((se) => se.option_id !== ce.option_id),
              ce,
            ],
            be = _.value.variants.find((se) =>
              se.options.every((Ae) =>
                ne.some(
                  (Ye) => Ye.value === Ae.value && Ye.option_id === Ae.option_id
                )
              )
            );
          be && (d.value = J(be));
        },
        Se = (me) => {
          const ce = y.value?.manage_inventory;
          if (((s.value = o.shoppingCartItems.length + me >= an), ce)) {
            const Q = Dn({
              variantsQuantity: o.variantsQuantity,
              variantId: y.value?.id,
            });
            if (x.value + me > Q || s.value) {
              const ne = Math.min(Q - x.value, an - o.shoppingCartItems.length);
              r.value = ne;
              return;
            }
          } else if (s.value) {
            r.value = an - o.shoppingCartItems.length;
            return;
          }
          if (me <= 0) {
            r.value = Tn;
            return;
          }
          r.value = me;
        };
      Me(() => {
        _.value && (d.value = R());
      }),
        xe(_, (me, ce) => {
          JSON.stringify(me) !== JSON.stringify(ce) && (d.value = R());
        }),
        xe(d, (me, ce) => {
          (ce?.id === -1 && !me?.site_product_selection) ||
            (JSON.stringify(me) !== JSON.stringify(ce) &&
              me?.variants[0].image_url &&
              (l.value = me.variants[0].image_url));
        }),
        xe(
          () => o.shoppingCartItems,
          (me) => {
            const ce = me?.length || 0;
            (r.value = Tn), (s.value = ce + r.value >= an);
          },
          { immediate: !0 }
        );
      const ge = {
        MAX_STOCK_AMOUNT_TO_SHOW: Uo,
        DEFAULT_PICKER_VALUE: Tn,
        CUSTOM_ATTRIBUTES: t,
        props: o,
        emit: i,
        selectedQuantity: r,
        variantImage: l,
        isLimitReached: s,
        selectedVariant: d,
        mobileMaxWidthCSSVar: g,
        isBlockInProductPage: m,
        buttonBackgroundColor: v,
        buttonBorderColor: p,
        textAlign: b,
        productData: _,
        uniqueOptionSelections: T,
        selectedValueVariant: y,
        isPurchasable: w,
        selectedOption: O,
        priceData: C,
        quantityInCart: x,
        totalQuantitySelected: F,
        isStockAvailable: Y,
        computedStyles: j,
        isPriceShown: q,
        isProductTypeBooking: S,
        isAddToCartDisabled: B,
        isFreeBookingProduct: $,
        buttonText: z,
        formattedPrice: N,
        location: I,
        formattedBookingDuration: H,
        isOutOfStock: A,
        isStockInfoShown: G,
        productPagePath: k,
        stockInfoText: f,
        productAdditionalInfo: W,
        isDescriptionVisible: U,
        isDescriptionShownOnMobileWithAdditionalSections: Z,
        getProductWithSelectedVariant: J,
        getInitiallySelectedVariant: R,
        handleButtonClick: D,
        handleVariantOptionChange: pe,
        handleQuantityChange: Se,
        Carousel: wf,
        OptionSelect: Df,
        GridButton: Ga,
        get formatPrice() {
          return da;
        },
        get isProductPriceRangeShown() {
          return Ln;
        },
        ProductSkeletonLoader: Lf,
        QuantityPicker: Ns,
        AdditionalInfoSections: Gf,
      };
      return (
        Object.defineProperty(ge, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        ge
      );
    },
  }),
  jf = ["id"],
  zf = { class: "block-product__image-content-wrapper" },
  Kf = ["innerHTML"],
  Qf = { class: "block-product__content-wrapper" },
  Xf = { class: "block-product__price-data-wrapper" },
  Zf = { key: 0, class: "block-product__title" },
  Jf = { key: 1, class: "block-product__title" },
  eb = { class: "block-product__subtitle" },
  tb = { class: "block-product__additional-info" },
  ab = { key: 0, class: "block-product__price body-large" },
  nb = { key: 1, class: "block-product__duration body-large" },
  ob = { key: 3, class: "block-product__location" },
  rb = { key: 4, class: "block-product__option-select-wrapper" },
  ib = { key: 0, class: "block-product__stock-text" },
  lb = { key: 0, class: "block-product__button-wrapper" },
  sb = ["innerHTML"];
function ub(e, n, a, t, o, i) {
  const r = He("RouterLink"),
    l = ze("qa");
  return (
    c(),
    h(
      "div",
      je(
        { id: a.blockId, class: "block-product-wrapper" },
        t.CUSTOM_ATTRIBUTES
      ),
      [
        a.isLoading || !t.productData
          ? (c(),
            K(
              t.ProductSkeletonLoader,
              {
                key: 0,
                "image-border-radius": a.imageBorderRadius,
                "text-align": t.textAlign,
              },
              null,
              8,
              ["image-border-radius", "text-align"]
            ))
          : (c(),
            h(
              "div",
              {
                key: 1,
                class: X([
                  "block-product",
                  {
                    "block-product--centered": t.textAlign === "center",
                    "block-product--in-preview": a.isQuickPreview,
                  },
                ]),
                style: Be(t.computedStyles),
              },
              [
                P("div", zf, [
                  Ee(
                    t.Carousel,
                    {
                      "media-items": t.productData.images,
                      "product-title": t.productData.title,
                      "arrows-color": a.navigationArrowsColor,
                      "navigation-thumbnail-arrows-color":
                        a.navigationThumbnailArrowsColor,
                      "gallery-placement": a.galleryPlacement,
                      "image-ratio": a.imageRatio,
                      "image-border-radius": a.imageBorderRadius,
                      "is-eager": a.isEager,
                      "site-id": a.siteId,
                      "variant-image": t.variantImage,
                      "is-quick-preview": a.isQuickPreview,
                      "is-variant-image-preselected":
                        t.isProductPriceRangeShown(t.productData),
                      onImageClick:
                        n[0] || (n[0] = (s) => e.$emit("image-click", s)),
                    },
                    null,
                    8,
                    [
                      "media-items",
                      "product-title",
                      "arrows-color",
                      "navigation-thumbnail-arrows-color",
                      "gallery-placement",
                      "image-ratio",
                      "image-border-radius",
                      "is-eager",
                      "site-id",
                      "variant-image",
                      "is-quick-preview",
                      "is-variant-image-preselected",
                    ]
                  ),
                  t.isDescriptionVisible &&
                  t.productAdditionalInfo.length &&
                  !a.isMobileView
                    ? (c(),
                      h(
                        "p",
                        {
                          key: 0,
                          class:
                            "block-product__description block-product__description--under-image",
                          innerHTML: t.productData.description,
                        },
                        null,
                        8,
                        Kf
                      ))
                    : M("", !0),
                ]),
                P("div", Qf, [
                  P("div", Xf, [
                    t.isBlockInProductPage
                      ? de(
                          (c(), h("h1", Zf, [Le(ee(t.productData.title), 1)])),
                          [[l, "builder-product-section-title"]]
                        )
                      : de(
                          (c(), h("h3", Jf, [Le(ee(t.productData.title), 1)])),
                          [[l, "builder-product-section-title"]]
                        ),
                    P("h5", eb, ee(t.productData.subtitle), 1),
                    Object.keys(t.priceData || {})?.length
                      ? (c(),
                        h(
                          "div",
                          {
                            key: 2,
                            class: X([
                              "block-product__price-wrapper",
                              {
                                "block-product__price-wrapper--with-duration":
                                  t.isProductTypeBooking,
                              },
                            ]),
                          },
                          [
                            t.isPriceShown
                              ? (c(),
                                h(
                                  "p",
                                  {
                                    key: 0,
                                    class: X([
                                      "block-product__price body-large",
                                      {
                                        "block-product__price--sale":
                                          t.priceData.sale_amount,
                                      },
                                    ]),
                                  },
                                  ee(t.formattedPrice),
                                  3
                                ))
                              : M("", !0),
                            P("div", tb, [
                              t.priceData.sale_amount && t.isPriceShown
                                ? (c(),
                                  h(
                                    "p",
                                    ab,
                                    ee(
                                      t.formatPrice({
                                        amount: t.priceData.sale_amount,
                                        currency: t.priceData.currency,
                                      })
                                    ),
                                    1
                                  ))
                                : M("", !0),
                              t.isProductTypeBooking
                                ? (c(),
                                  h("p", nb, ee(t.formattedBookingDuration), 1))
                                : M("", !0),
                            ]),
                          ],
                          2
                        ))
                      : M("", !0),
                    t.isProductTypeBooking
                      ? (c(), h("p", ob, ee(t.location), 1))
                      : M("", !0),
                    t.productData.options.length
                      ? (c(),
                        h("div", rb, [
                          (c(!0),
                          h(
                            ve,
                            null,
                            Te(
                              t.productData.options,
                              (s, d) => (
                                c(),
                                K(
                                  t.OptionSelect,
                                  {
                                    key: `option-${d}`,
                                    value: t.selectedOption(d),
                                    options: t.uniqueOptionSelections[d],
                                    title: s.title,
                                    class: X([
                                      "block-product__option-select",
                                      {
                                        "block-product__option-select--centered":
                                          t.textAlign === "center",
                                      },
                                    ]),
                                    "label-key": "value",
                                    onSetValue:
                                      n[1] ||
                                      (n[1] = (g) =>
                                        t.handleVariantOptionChange(g)),
                                  },
                                  null,
                                  8,
                                  ["value", "options", "title", "class"]
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : M("", !0),
                    !t.isProductTypeBooking &&
                    a.isQuantityPickerEnabled &&
                    t.isPurchasable
                      ? (c(),
                        h(
                          "div",
                          {
                            key: 5,
                            class: X([
                              "block-product__quantity-wrapper",
                              {
                                "block-product__quantity-wrapper--disabled":
                                  t.isOutOfStock || t.isAddToCartDisabled,
                              },
                            ]),
                          },
                          [
                            Ee(
                              t.QuantityPicker,
                              {
                                "qa-selector": "productpage",
                                quantity: t.selectedQuantity,
                                "is-limit-reached": t.isLimitReached,
                                "is-stock-available": t.isStockAvailable,
                                onQuantityChange: t.handleQuantityChange,
                              },
                              null,
                              8,
                              [
                                "quantity",
                                "is-limit-reached",
                                "is-stock-available",
                              ]
                            ),
                            t.isStockInfoShown
                              ? (c(), h("p", ib, ee(t.stockInfoText), 1))
                              : M("", !0),
                          ],
                          2
                        ))
                      : M("", !0),
                  ]),
                  t.isPurchasable
                    ? (c(),
                      h("div", lb, [
                        de(
                          Ee(
                            t.GridButton,
                            {
                              type: a.blockButtonType,
                              content: t.buttonText,
                              class: X([
                                "block-product__button",
                                `block-product__button--${a.blockButtonType}`,
                              ]),
                              "is-loading": a.isCheckoutLoading,
                              "tag-name": "button",
                              disabled: t.isAddToCartDisabled,
                              "border-width": a.blockButtonBorderWidth,
                              "border-color": t.buttonBorderColor.normal,
                              "border-color-hover": t.buttonBorderColor.hover,
                              "background-color":
                                t.buttonBackgroundColor.normal,
                              "background-color-hover":
                                t.buttonBackgroundColor.hover,
                              onClick: t.handleButtonClick,
                            },
                            null,
                            8,
                            [
                              "type",
                              "content",
                              "class",
                              "is-loading",
                              "disabled",
                              "border-width",
                              "border-color",
                              "border-color-hover",
                              "background-color",
                              "background-color-hover",
                            ]
                          ),
                          [[l, "productsection-btn-addtobag"]]
                        ),
                      ]))
                    : M("", !0),
                  t.isDescriptionVisible &&
                  (t.isDescriptionShownOnMobileWithAdditionalSections ||
                    !t.productAdditionalInfo.length)
                    ? de(
                        (c(),
                        h(
                          "p",
                          {
                            key: 1,
                            class: "block-product__description",
                            innerHTML: t.productData.description,
                          },
                          null,
                          8,
                          sb
                        )),
                        [[l, "builder-product-section-description"]]
                      )
                    : M("", !0),
                  t.productAdditionalInfo
                    ? (c(),
                      K(
                        t.AdditionalInfoSections,
                        {
                          key: 2,
                          data: t.productAdditionalInfo,
                          "product-description": t.productData.description,
                        },
                        null,
                        8,
                        ["data", "product-description"]
                      ))
                    : a.isQuickPreview
                    ? (c(),
                      K(
                        r,
                        {
                          key: 3,
                          to: { path: t.productPagePath },
                          class: "block-product__link body-large",
                          onClick:
                            n[2] || (n[2] = (s) => e.$emit("click-more")),
                        },
                        {
                          default: he(() => [
                            Le(ee(a.translations.moreDetails), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["to"]
                      ))
                    : M("", !0),
                ]),
              ],
              6
            )),
      ],
      16,
      jf
    )
  );
}
const cb = re(qf, [["render", ub]]),
  db = (e) => {
    const n = u(() => e.data.product.id),
      a = u(() => e.data.settings?.styles),
      t = u(() => e.data.textColorVars),
      o = u(() => e.data.buttonText),
      i = u(() => e.data.buttonStyle),
      r = u(() => e.data.buttonType),
      l = u(() => e.data.buttonBorderWidth),
      s = u(() => e.data.navigationArrowsColor),
      d = u(() => e.data.navigationThumbnailArrowsColor),
      g = u(() => e.data.galleryPlacement),
      m = u(() => e.data.imageRatio),
      v = u(() => e.data.imageBorderRadius),
      p = u(() => e.data.isQuantityPickerEnabled ?? !0);
    return {
      productId: n,
      blockStyle: a,
      blockButtonText: o,
      blockButtonStyle: i,
      blockButtonType: r,
      blockButtonBorderWidth: l,
      textColorVars: t,
      imageBorderRadius: v,
      navigationArrowsColor: s,
      navigationThumbnailArrowsColor: d,
      galleryPlacement: g,
      imageRatio: m,
      isQuantityPickerEnabled: p,
    };
  },
  mb = (e) => e.replace(/<[^>]*>/g, ""),
  gb = ({ product: e, pageSlug: n }) => {
    const a = ss(window.location.hostname),
      { variants: t } = e,
      o = t.length > 1,
      i = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: e.title,
        image: e.images.map((r) => r.url),
        description: e.description ? mb(e.description) : "",
        offers: {},
      };
    if (o) {
      const l = br(e).prices[0],
        s = da({
          amount: l.sale_amount || l.amount,
          currency: l.currency,
          isPriceDisplayedWithCurrency: !1,
        }),
        g = Kh(e).prices[0],
        m = da({
          amount: g.sale_amount || g.amount,
          currency: g.currency,
          isPriceDisplayedWithCurrency: !1,
        });
      i.offers = {
        "@type": "AggregateOffer",
        url: `https://${a}/${n}`,
        priceCurrency: g.currency.code,
        lowPrice: s,
        highPrice: m,
      };
    } else {
      const l = t[0].prices[0],
        s = da({
          amount: l.sale_amount || l.amount,
          currency: l.currency,
          isPriceDisplayedWithCurrency: !1,
        });
      i.offers = {
        "@type": "Offer",
        url: `https://${a}/${n}`,
        priceCurrency: l.currency.code,
        price: s,
        availability: "https://schema.org/InStock",
      };
    }
    return i;
  },
  vb = ({ product: e, pageSlug: n }) => {
    const a = {
      type: "element",
      tagName: "script",
      properties: {
        [lc]: `jsonld-product-${e.id}`,
        type: "application/ld+json",
      },
      children: [],
    };
    (a.children = [
      { type: "text", value: JSON.stringify(gb({ product: e, pageSlug: n })) },
    ]),
      wc(a);
  },
  pb = ie({
    __name: "BlockEcommerceProductProviderUser",
    props: {
      blockId: { default: "" },
      data: {},
      lcp: { default: () => ({}) },
      ecommerceTranslations: { default: () => ({}) },
      isQuickPreview: { type: Boolean, default: !1 },
      productPages: { default: () => [] },
      isCartVisible: { type: Boolean, default: !1 },
      currentPageType: { default: "default" },
      isInPreviewMode: { type: Boolean, default: !1 },
      isMobileView: { type: Boolean },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { siteId: t } = nt(),
        {
          quantifiedCartItemsList: o,
          canAddToCart: i,
          isShoppingCartOpen: r,
          products: l,
          shoppingCartItems: s,
          variantsQuantity: d,
          isCheckoutLoading: g,
          isLoading: m,
          isLoaded: v,
          setShoppingCartOpen: p,
          setShoppingCartItems: b,
          setIsCheckoutLoading: _,
          setSelectedBookingId: T,
        } = na(),
        { openEcommerceModal: y, closeEcommerceModal: w } = aa(),
        { initiateCheckout: O } = jn(),
        { addImagesToLightbox: C } = un(),
        {
          productId: x,
          blockStyle: F,
          blockButtonText: Y,
          blockButtonStyle: j,
          blockButtonType: q,
          blockButtonBorderWidth: S,
          textColorVars: B,
          imageBorderRadius: $,
          navigationArrowsColor: z,
          navigationThumbnailArrowsColor: N,
          galleryPlacement: I,
          imageRatio: H,
          isQuantityPickerEnabled: A,
        } = db(a),
        G = u(() => l.value.find((D) => D.id === x.value) || Qt),
        k = u(() => a.productPages.find((D) => D.productId === G.value.id)),
        f = E(null),
        W = () => {
          setTimeout(() => {
            f.value = Nn;
          }, 100);
        },
        U = () => {
          r.value || p(!0);
        },
        Z = (D) => {
          const pe = G.value.images.map((Se) => ({
            alt: G.value.title,
            src: Se.url,
          }));
          C(pe, D);
        },
        J = async (D) => {
          if ((await w(), G.value.type.value === qt)) {
            T(x.value), y("EcommerceBookingEventSelect");
            return;
          }
          if (ln() || a.isInPreviewMode) {
            y("EcommerceMessageButtonDisabled");
            return;
          }
          a.isCartVisible
            ? (b([...s.value, ...D]), U())
            : (_(!0), await O(D), _(!1));
        };
      Me(() => {
        W();
      }),
        Ot(() => {
          w();
        }),
        xe(G, () => {
          G.value &&
            k.value &&
            vb({ product: G.value, pageSlug: k.value?.slug });
        });
      const R = {
        props: a,
        siteId: t,
        quantifiedCartItemsList: o,
        canAddToCart: i,
        isShoppingCartOpen: r,
        products: l,
        shoppingCartItems: s,
        variantsQuantity: d,
        isCheckoutLoading: g,
        isLoading: m,
        isLoaded: v,
        setShoppingCartOpen: p,
        setShoppingCartItems: b,
        setIsCheckoutLoading: _,
        setSelectedBookingId: T,
        openEcommerceModal: y,
        closeEcommerceModal: w,
        initiateCheckout: O,
        addImagesToLightbox: C,
        productId: x,
        blockStyle: F,
        blockButtonText: Y,
        blockButtonStyle: j,
        blockButtonType: q,
        blockButtonBorderWidth: S,
        textColorVars: B,
        imageBorderRadius: $,
        navigationArrowsColor: z,
        navigationThumbnailArrowsColor: N,
        galleryPlacement: I,
        imageRatio: H,
        isQuantityPickerEnabled: A,
        product: G,
        productPage: k,
        animationState: f,
        setAnimationState: W,
        manageCartOpenState: U,
        handleImageClick: Z,
        handleBuyButtonClick: J,
        get DATA_ATTRIBUTE_ANIMATION_STATE() {
          return Hn;
        },
        BlockEcommerceProduct: cb,
      };
      return (
        Object.defineProperty(R, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        R
      );
    },
  });
function hb(e, n, a, t, o, i) {
  return (
    c(),
    K(
      t.BlockEcommerceProduct,
      je(
        {
          blockId: a.blockId,
          blockStyle: t.blockStyle,
          blockButtonText: t.blockButtonText,
          blockButtonStyle: t.blockButtonStyle,
          blockButtonType: t.blockButtonType,
          blockButtonBorderWidth: t.blockButtonBorderWidth,
          textColorVars: t.textColorVars,
          imageBorderRadius: t.imageBorderRadius,
          navigationArrowsColor: t.navigationArrowsColor,
          navigationThumbnailArrowsColor: t.navigationThumbnailArrowsColor,
          galleryPlacement: t.galleryPlacement,
          imageRatio: t.imageRatio,
          isQuantityPickerEnabled: t.isQuantityPickerEnabled,
          quantifiedCartItemsList: t.quantifiedCartItemsList,
          isCheckoutLoading: t.isCheckoutLoading,
          productPages: a.productPages,
          isQuickPreview: a.isQuickPreview,
          currentPageType: a.currentPageType,
        },
        {
          "is-mobile-view": a.isMobileView,
          "product-data": t.product,
          "can-add-to-cart": t.canAddToCart,
          "is-loading": (t.isLoading || !t.isLoaded) && t.productId !== -1,
          translations: a.ecommerceTranslations,
          "is-cart-visible": a.isCartVisible,
          "is-eager":
            a.lcp.type === "block-ecommerce-product" && a.lcp.id === a.blockId,
          [t.DATA_ATTRIBUTE_ANIMATION_STATE || ""]: t.animationState,
          "site-id": t.siteId,
          "shopping-cart-items": t.shoppingCartItems,
          "variants-quantity": t.variantsQuantity,
          onBuyButtonClick: t.handleBuyButtonClick,
          onClickMore: t.closeEcommerceModal,
          onImageClick: t.handleImageClick,
        }
      ),
      null,
      16,
      [
        "is-mobile-view",
        "product-data",
        "can-add-to-cart",
        "is-loading",
        "translations",
        "is-cart-visible",
        "is-eager",
        "site-id",
        "shopping-cart-items",
        "variants-quantity",
        "onClickMore",
      ]
    )
  );
}
const Hs = re(pb, [["render", hb]]),
  fb = E({}),
  yr = "forward",
  bl = "backward",
  bb = ({
    isAutoplayEnabled: e,
    isLoopEnabled: n,
    autoplayInterval: a,
    isTransitioning: t,
    slides: o,
  } = {}) => {
    const i = E(0),
      r = E(""),
      l = E(null),
      s = u(() => o.value.length),
      d = u(() => i.value === o.value.length - 1),
      g = u(() => i.value === 0),
      m = u(() => (!d.value || n.value) && s.value > 1 && !t.value),
      v = u(() => (!g.value || n.value) && s.value > 1 && !t.value),
      p = () => {
        if (m.value) {
          if (((r.value = yr), n.value && d.value)) {
            i.value = 0;
            return;
          }
          i.value += 1;
        }
      },
      b = () => {
        if (v.value) {
          if (((r.value = bl), n.value && g.value)) {
            i.value = o.value.length - 1;
            return;
          }
          i.value -= 1;
        }
      },
      _ = (O) => {
        (r.value = O > i.value ? yr : bl), (i.value = O);
      },
      T = () => {
        l.value = setInterval(() => {
          (!n.value && d.value) || p();
        }, a.value * 1e3);
      },
      y = () => {
        l.value && (clearInterval(l.value), (l.value = null));
      },
      w = () => {
        y(), e.value && T();
      };
    return (
      e &&
        (e.value && T(),
        xe(e, () => {
          e.value ? T() : y();
        }),
        xe(Zv(), (O) => {
          O === "visible" ? T() : y();
        })),
      a &&
        xe(a, () => {
          w();
        }),
      {
        slideshowRefs: fb,
        slideToNext: p,
        slideToPrevious: b,
        slideTo: _,
        slideDirection: r,
        slideCount: s,
        currentSlideIndex: i,
        slides: o,
        isLoopEnabled: n,
        isAutoplayEnabled: e,
        autoplayInterval: a,
        resetAutoplayInterval: w,
        setAutoplayInterval: T,
        clearAutoplayInterval: y,
        canSlideToNext: m,
        canSlideToPrevious: v,
      }
    );
  },
  Gr = ie({
    props: {
      slides: { type: Array, required: !0 },
      isLoopEnabled: { type: Boolean, default: !1 },
      currentSlideIndex: { type: Number, default: 0 },
      slideDirection: { type: String, default: yr },
      arrowColor: { type: String, default: "rgb(255, 255, 255)" },
      dotColor: { type: String, default: "rgb(255, 255, 255)" },
      isNextButtonDisabled: { type: Boolean, default: !1 },
      isPreviousButtonDisabled: { type: Boolean, default: !1 },
      isNavigationArrowsVisible: { type: Boolean, default: !0 },
      isNavigationDotsVisible: { type: Boolean, default: !0 },
      isTransitioning: { type: Boolean, default: !1 },
      desktopMinHeight: { type: Number, required: !0 },
      mobileMinHeight: { type: Number, required: !0 },
      websiteId: { type: String, default: "" },
    },
    emits: [
      "transition-start",
      "transition-end",
      "next-slide",
      "previous-slide",
      "dot-click",
    ],
    setup() {
      return { FULL_WIDTH: _a, getOptimizedSrc: ut };
    },
    computed: {
      isNextSlideButtonVisible() {
        if (this.isLoopEnabled) return this.isNavigationArrowsVisible;
        const e = this.currentSlideIndex === this.slides.length - 1;
        return this.isNavigationArrowsVisible && !e;
      },
      isPreviousSlideButtonVisible() {
        if (this.isLoopEnabled) return this.isNavigationArrowsVisible;
        const e =
          this.isNavigationArrowsVisible && this.currentSlideIndex === 0;
        return this.isNavigationArrowsVisible && !e;
      },
    },
  }),
  yl = () => {
    et((e) => ({
      fd06db1c: e.desktopMinHeight,
      "1f7ca1af": e.arrowColor,
      "56d289af": e.dotColor,
      "3b9747e2": e.mobileMinHeight,
    }));
  },
  _l = Gr.setup;
Gr.setup = _l ? (e, n) => (yl(), _l(e, n)) : yl;
const Vs = (e) => (Vt("data-v-f3299b46"), (e = e()), Ut(), e),
  yb = { class: "slideshow" },
  _b = ["alt", "src"],
  wb = ["disabled"],
  kb = Vs(() =>
    P(
      "svg",
      {
        width: "14",
        height: "26",
        viewBox: "0 0 14 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        P("path", {
          d: "M1 25L13 13L1 1",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  Sb = [kb],
  Tb = ["disabled"],
  Cb = Vs(() =>
    P(
      "svg",
      {
        width: "14",
        height: "26",
        viewBox: "0 0 14 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        P("path", {
          d: "M1 25L13 13L1 1",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  Pb = [Cb],
  Ib = { key: 2, class: "slideshow__dots" },
  Eb = ["onClick"];
function Db(e, n, a, t, o, i) {
  return (
    c(),
    h("div", yb, [
      Ee(
        Bu,
        {
          name: `slide-${e.slideDirection}`,
          onLeave: n[0] || (n[0] = (r) => e.$emit("transition-start")),
          onAfterLeave: n[1] || (n[1] = (r) => e.$emit("transition-end")),
        },
        {
          default: he(() => [
            (c(!0),
            h(
              ve,
              null,
              Te(e.slides, (r, l) =>
                de(
                  (c(),
                  h(
                    "img",
                    {
                      key: `${r.path}-${l}`,
                      alt: r.alt || "",
                      class: "slide",
                      src: e.getOptimizedSrc(r.origin, r.path, e.websiteId, {
                        width: e.FULL_WIDTH,
                      }),
                    },
                    null,
                    8,
                    _b
                  )),
                  [[Wt, e.currentSlideIndex === l]]
                )
              ),
              128
            )),
          ]),
          _: 1,
        },
        8,
        ["name"]
      ),
      e.isNextSlideButtonVisible
        ? (c(),
          h(
            "button",
            {
              key: 0,
              class: X([
                "slideshow-nav-button slideshow-nav-button--right",
                { "is-transitioning": e.isTransitioning },
              ]),
              disabled: e.isNextButtonDisabled,
              onClick: n[2] || (n[2] = (r) => e.$emit("next-slide")),
            },
            Sb,
            10,
            wb
          ))
        : M("", !0),
      e.isPreviousSlideButtonVisible
        ? (c(),
          h(
            "button",
            {
              key: 1,
              class: X([
                "slideshow-nav-button slideshow-nav-button--left",
                { "is-transitioning": e.isTransitioning },
              ]),
              disabled: e.isPreviousButtonDisabled,
              onClick: n[3] || (n[3] = (r) => e.$emit("previous-slide")),
            },
            Pb,
            10,
            Tb
          ))
        : M("", !0),
      e.isNavigationDotsVisible
        ? (c(),
          h("div", Ib, [
            (c(!0),
            h(
              ve,
              null,
              Te(
                e.slides,
                (r, l) => (
                  c(),
                  h(
                    "button",
                    {
                      key: `${r.path}-${l}`,
                      class: X([
                        "dot",
                        { "dot--current": e.currentSlideIndex === l },
                      ]),
                      onClick: (s) => e.$emit("dot-click", l),
                    },
                    null,
                    10,
                    Eb
                  )
                )
              ),
              128
            )),
          ]))
        : M("", !0),
    ])
  );
}
const Mb = re(Gr, [
    ["render", Db],
    ["__scopeId", "data-v-f3299b46"],
  ]),
  Ob = ie({
    components: { BlockImageSlideshow: Mb },
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, default: () => ({}) },
      websiteId: { type: String, default: "" },
    },
    setup(e) {
      const { data: n } = ar(e),
        a = E(!1),
        t = u(() => `${n.value.desktop.minHeight}px`),
        o = u(() => `${n.value.mobile.minHeight}px`),
        i = u(() => n.value.settings.styles.navigationDotsColor),
        r = u(() => n.value.settings.styles.navigationArrowsColor),
        l = u(() => n.value.slides),
        s = u(() => n.value.isLoopEnabled),
        d = u(() => n.value.isAutoplayEnabled),
        g = u(() => n.value.autoplayInterval),
        m = u(() => n.value.isNavigationDotsVisible),
        v = u(() => n.value.isNavigationArrowsVisible),
        p = u(() => n.value.desktop.minHeight),
        b = u(() => n.value.mobile.minHeight),
        {
          slideDirection: _,
          currentSlideIndex: T,
          canSlideToNext: y,
          canSlideToPrevious: w,
          slideToNext: O,
          slideToPrevious: C,
          slideTo: x,
          resetAutoplayInterval: F,
          clearAutoplayInterval: Y,
        } = bb({
          isAutoplayEnabled: d,
          isLoopEnabled: s,
          autoplayInterval: g,
          isTransitioning: a,
          slides: l,
        });
      return {
        canSlideToNext: y,
        canSlideToPrevious: w,
        desktopHeight: t,
        mobileHeight: o,
        slides: l,
        currentSlideIndex: T,
        slideDirection: _,
        isLoopEnabled: s,
        isTransitioning: a,
        resetAutoplayInterval: F,
        dotColor: i,
        arrowColor: r,
        isNavigationDotsVisible: m,
        isNavigationArrowsVisible: v,
        clearAutoplayInterval: Y,
        slideToNext: O,
        slideToPrevious: C,
        slideTo: x,
        desktopMinHeight: p,
        mobileMinHeight: b,
      };
    },
  });
function Ab(e, n, a, t, o, i) {
  const r = He("BlockImageSlideshow");
  return (
    c(),
    K(
      r,
      {
        slides: e.slides,
        "is-loop-enabled": e.isLoopEnabled,
        "current-slide-index": e.currentSlideIndex,
        "slide-direction": e.slideDirection,
        "dot-color": e.dotColor,
        "is-navigation-arrows-visible": e.isNavigationArrowsVisible,
        "is-navigation-dots-visible": e.isNavigationDotsVisible,
        "arrow-color": e.arrowColor,
        "is-next-button-disabled": !e.canSlideToNext,
        "is-previous-button-disabled": !e.canSlideToPrevious,
        "desktop-min-height": e.desktopMinHeight,
        "mobile-min-height": e.mobileMinHeight,
        "website-id": e.websiteId,
        onTransitionStart: n[0] || (n[0] = (l) => (e.isTransitioning = !0)),
        onTransitionEnd: n[1] || (n[1] = (l) => (e.isTransitioning = !1)),
        onMouseenter: e.clearAutoplayInterval,
        onMouseleave: e.resetAutoplayInterval,
        onNextSlide: e.slideToNext,
        onPreviousSlide: e.slideToPrevious,
        onDotClick: e.slideTo,
      },
      null,
      8,
      [
        "slides",
        "is-loop-enabled",
        "current-slide-index",
        "slide-direction",
        "dot-color",
        "is-navigation-arrows-visible",
        "is-navigation-dots-visible",
        "arrow-color",
        "is-next-button-disabled",
        "is-previous-button-disabled",
        "desktop-min-height",
        "mobile-min-height",
        "website-id",
        "onMouseenter",
        "onMouseleave",
        "onNextSlide",
        "onPreviousSlide",
        "onDotClick",
      ]
    )
  );
}
const Bb = re(Ob, [["render", Ab]]),
  wl = 360,
  Lb = {
    __name: "BlockUser",
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      lcp: { type: Object, default: () => ({}) },
      currentLocale: { type: String, default: Da },
      style: { type: Object, default: () => ({}) },
      ecommerceTranslations: { type: Object, default: () => ({}) },
      isCartVisible: { type: Boolean, default: !1 },
      pageId: { type: String, required: !0 },
      currentPageType: { type: String, default: "default" },
      isInPreviewMode: { type: Boolean, default: !1 },
      screenWidth: { type: Number, default: 0 },
      isFirstVisibleDesktopBlock: { type: Boolean, default: !1 },
      isFirstVisibleMobileBlock: { type: Boolean, default: !1 },
      isSiteEngine: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = E(null),
        { productPages: o, isLoaded: i } = na({ blockId: a.id }),
        {
          blocks: r,
          elements: l,
          pages: s,
          siteId: d,
          blogReadingTimeText: g,
          blogCategories: m,
          siteId: v,
          meta: p,
        } = nt(),
        {
          addIntersectionObserver: b,
          observe: _,
          intersectionObserver: T,
          animationClass: y,
        } = cn({ data: a.data }),
        w = u(() => a.currentLocale),
        O = u(() => a.screenWidth <= Mn),
        C = u(() =>
          a.data.desktop?.isHidden
            ? a.isInPreviewMode
              ? a.screenWidth > Mn
              : !0
            : !1
        ),
        x = u(() =>
          a.data.mobile?.isHidden ? (a.isInPreviewMode ? O.value : !0) : !1
        ),
        F = u(() => ({ ...a.style, ...Gt(a.data?.settings?.styles) })),
        Y = u(() => {
          if (!a.data?.settings?.styles["m-block-padding"]) return !1;
          const { top: H, bottom: A } = sn(
            a.data.settings.styles["m-block-padding"]
          );
          return Number.parseInt(H, 10) + Number.parseInt(A, 10) > wl;
        }),
        j = u(() =>
          a.data.background?.current === "video"
            ? a.data.background.video.videoSrc
            : ut(a.data.background.origin, a.data.background.path, v.value, {
                width: _a,
              })
        ),
        q = u(() =>
          wa(a.data.background.origin, a.data.background.path, v.value, {
            isMobileFullScreen: Y.value,
          })
        ),
        S = u(() => a.data.slot === "footer"),
        B = u(() => {
          if (a.data.type !== Si) return null;
          const [, H] = Object.entries(s.value).find(
            ([A, G]) => G.type === rr && A === a.pageId
          );
          return H;
        }),
        $ = u(() => p.value.stripePublicApiKey),
        z = u(() => a.data.type === Ti),
        N = async () => {
          b(), (!z.value || i.value) && (await _(t.value));
        };
      Me(async () => {
        await N();
      }),
        Ot(() => T.value?.disconnect()),
        xe([w, i], async ([H, A], [G]) => {
          (A || H !== G) && z.value && (await _(t.value));
        });
      const I = {
        MOBILE_FULL_HEIGT_THRESHOLD: wl,
        props: a,
        blockRef: t,
        productPages: o,
        isEcommerceProductsLoaded: i,
        siteBlocks: r,
        siteElements: l,
        siteLanguagePages: s,
        websiteId: d,
        blogReadingTimeText: g,
        blogCategories: m,
        siteId: v,
        meta: p,
        addIntersectionObserver: b,
        observe: _,
        intersectionObserver: T,
        animationClass: y,
        currentSiteLocale: w,
        isMobile: O,
        isDesktopBlockHidden: C,
        isMobileBlockHidden: x,
        computedStyles: F,
        isMobileFullScreen: Y,
        backgroundSrc: j,
        backgroundSrcSet: q,
        isBlockFooter: S,
        currentBlogPage: B,
        stripePublicApiKey: $,
        isEcommerceBlock: z,
        initiateAnimations: N,
        computed: u,
        onMounted: Me,
        onBeforeUnmount: Ot,
        ref: E,
        watch: xe,
        BlockBackground: Nr,
        BlockBlogHeader: bd,
        get PAGE_TYPE_BLOG() {
          return rr;
        },
        get SYSTEM_LOCALE() {
          return Da;
        },
        get BLOCK_TYPE_LAYOUT() {
          return sc;
        },
        get BLOCK_TYPE_BLOG_HEADER() {
          return Si;
        },
        get BLOCK_TYPE_BLOG_LIST() {
          return uc;
        },
        get BLOCK_TYPE_IMAGE_SLIDESHOW() {
          return cc;
        },
        get BLOCK_TYPE_ECOMMERCE_PRODUCT() {
          return dc;
        },
        get BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST() {
          return Ti;
        },
        get MEDIA_MOBILE_SCREEN_BREAKPOINT() {
          return Mn;
        },
        get FULL_WIDTH() {
          return _a;
        },
        get getFullWidthSrcset() {
          return wa;
        },
        get getOptimizedSrc() {
          return ut;
        },
        get useSiteGlobal() {
          return nt;
        },
        get objectToCssVariables() {
          return Gt;
        },
        get parseCSSSides() {
          return sn;
        },
        BlockLayoutProviderUser: Lp,
        BlockBlogListProviderUser: lh,
        BlockEcommerceProductListProviderUser: df,
        BlockEcommerceProductProviderUser: Hs,
        BlockImageSlideshowProviderUser: Bb,
        get useSiteEngineAnimations() {
          return cn;
        },
        get useEcommerceGlobal() {
          return na;
        },
      };
      return (
        Object.defineProperty(I, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        I
      );
    },
  },
  xb = ["id"];
function Rb(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "section",
      {
        id: a.id,
        ref: "blockRef",
        class: X([
          "block",
          [
            t.animationClass,
            {
              "block--footer": t.isBlockFooter,
              "block--desktop-hidden": t.isDesktopBlockHidden,
              "block--mobile-hidden": t.isMobileBlockHidden,
              "block--desktop-first-visible": a.isFirstVisibleDesktopBlock,
              "block--mobile-first-visible": a.isFirstVisibleMobileBlock,
            },
          ],
        ]),
        style: Be(t.computedStyles),
      },
      [
        a.data.background
          ? (c(),
            K(
              t.BlockBackground,
              {
                key: 0,
                "overlay-opacity": a.data.background["overlay-opacity"],
                type: a.data.background.current,
                color: a.data.background.color,
                gradient: a.data.background.gradient,
                src: t.backgroundSrc,
                srcset: t.backgroundSrcSet,
                "is-eager":
                  a.lcp.type === "block-background" && a.lcp.id === a.id,
                "is-fixed": a.data.attachment === "fixed",
                alt: a.data.background && a.data.background.alt,
                "is-in-preview-mode": t.props.isInPreviewMode,
                "is-mobile": t.isMobile,
                "video-poster": a.data.background?.video?.videoThumbnailSrc,
              },
              null,
              8,
              [
                "overlay-opacity",
                "type",
                "color",
                "gradient",
                "src",
                "srcset",
                "is-eager",
                "is-fixed",
                "alt",
                "is-in-preview-mode",
                "is-mobile",
                "video-poster",
              ]
            ))
          : M("", !0),
        a.data.type === t.BLOCK_TYPE_LAYOUT
          ? (c(),
            K(
              t.BlockLayoutProviderUser,
              {
                key: 1,
                lcp: a.lcp,
                data: a.data,
                "block-id": a.id,
                components: t.siteElements,
                "current-locale": a.currentLocale,
                "is-cart-visible": a.isCartVisible,
                "site-language-pages": t.siteLanguagePages,
                "stripe-public-api-key": t.stripePublicApiKey,
                "is-in-preview-mode": t.props.isInPreviewMode,
              },
              null,
              8,
              [
                "lcp",
                "data",
                "block-id",
                "components",
                "current-locale",
                "is-cart-visible",
                "site-language-pages",
                "stripe-public-api-key",
                "is-in-preview-mode",
              ]
            ))
          : M("", !0),
        a.data.type === t.BLOCK_TYPE_BLOG_HEADER
          ? (c(),
            K(
              t.BlockBlogHeader,
              {
                key: 2,
                data: a.data,
                "current-blog-page": t.currentBlogPage,
                "blog-categories": t.blogCategories,
                "blog-reading-time-text": t.blogReadingTimeText,
              },
              null,
              8,
              [
                "data",
                "current-blog-page",
                "blog-categories",
                "blog-reading-time-text",
              ]
            ))
          : M("", !0),
        a.data.type === t.BLOCK_TYPE_BLOG_LIST
          ? (c(),
            K(
              t.BlockBlogListProviderUser,
              {
                key: 3,
                data: a.data,
                "block-id": a.id,
                "current-locale": a.currentLocale,
              },
              null,
              8,
              ["data", "block-id", "current-locale"]
            ))
          : M("", !0),
        a.data.type === t.BLOCK_TYPE_IMAGE_SLIDESHOW
          ? (c(),
            K(
              t.BlockImageSlideshowProviderUser,
              {
                key: 4,
                data: a.data,
                "block-id": a.id,
                "website-id": t.websiteId,
              },
              null,
              8,
              ["data", "block-id", "website-id"]
            ))
          : M("", !0),
        a.data.type === t.BLOCK_TYPE_ECOMMERCE_PRODUCT
          ? (c(),
            K(
              t.BlockEcommerceProductProviderUser,
              {
                key: 5,
                lcp: a.lcp,
                data: a.data,
                "block-id": a.id,
                "product-pages": t.productPages,
                "is-cart-visible": a.isCartVisible,
                "ecommerce-translations": a.ecommerceTranslations,
                "current-page-type": a.currentPageType,
                "is-in-preview-mode": t.props.isInPreviewMode,
                "is-mobile-view": t.isMobile,
                "is-site-engine": t.props.isSiteEngine,
              },
              null,
              8,
              [
                "lcp",
                "data",
                "block-id",
                "product-pages",
                "is-cart-visible",
                "ecommerce-translations",
                "current-page-type",
                "is-in-preview-mode",
                "is-mobile-view",
                "is-site-engine",
              ]
            ))
          : M("", !0),
        a.data.type === t.BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST
          ? (c(),
            K(
              t.BlockEcommerceProductListProviderUser,
              {
                key: 6,
                lcp: a.lcp,
                data: a.data,
                "block-id": a.id,
                blocks: t.siteBlocks,
                "current-locale": a.currentLocale,
                "is-cart-visible": a.isCartVisible,
                "ecommerce-translations": a.ecommerceTranslations,
                "is-in-preview-mode": t.props.isInPreviewMode,
                "is-mobile-view": t.isMobile,
                "is-site-engine": t.props.isSiteEngine,
              },
              null,
              8,
              [
                "lcp",
                "data",
                "block-id",
                "blocks",
                "current-locale",
                "is-cart-visible",
                "ecommerce-translations",
                "is-in-preview-mode",
                "is-mobile-view",
                "is-site-engine",
              ]
            ))
          : M("", !0),
      ],
      14,
      xb
    )
  );
}
const Nb = re(Lb, [
    ["render", Rb],
    ["__scopeId", "data-v-e8cefd05"],
  ]),
  Hb = ie({
    __name: "BlockStickyBarLayout",
    props: { blockStyles: {} },
    setup(e, { expose: n }) {
      n(),
        et((s) => ({
          c718ec72: o.value,
          "387a0b1e": L(ls),
          "720ca36e": t.value,
          "16937fe2": i.value,
        }));
      const a = e,
        t = u(() => `${ta}px`),
        o = u(() => `${ga}px`),
        i = u(() => `0 ${On}px`),
        r = u(() => Gt(a.blockStyles)),
        l = {
          props: a,
          mobileMaxWidthCSSVar: t,
          maxWidthCSSVar: o,
          tabletBlockPaddingCSSVar: i,
          computedStyles: r,
        };
      return (
        Object.defineProperty(l, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        l
      );
    },
  });
function Vb(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: "block-sticky-bar-layout", style: Be(t.computedStyles) },
      [ae(e.$slots, "default", {}, void 0, !0)],
      4
    )
  );
}
const Ub = re(Hb, [
    ["render", Vb],
    ["__scopeId", "data-v-a943a874"],
  ]),
  Yb = ie({
    __name: "BlockStickyBarProviderUser",
    props: {
      data: {},
      components: {},
      isInPreviewMode: { type: Boolean },
      lcp: {},
      screenWidth: { default: 0 },
    },
    setup(e, { expose: n }) {
      n(), et((x) => ({ 36519825: L(ls) }));
      const a = { [ya]: fn },
        t = e,
        { siteId: o } = nt(),
        { layoutCSSVars: i } = ur({
          blockData: u(() => t.data),
          siteElements: u(() => t.components),
          shouldBuildResponsive: !t.isInPreviewMode,
        }),
        {
          addIntersectionObserver: r,
          observe: l,
          intersectionObserver: s,
          animationClass: d,
        } = cn({
          elementData: null,
          data: t.data,
          elementId: null,
          blockId: lo,
        }),
        g = E(null),
        m = u(() => t.data.background?.origin || null),
        v = u(() => t.data.background?.path || null),
        p = u(() => t.screenWidth <= Mn),
        b = u(() =>
          t.data.desktop?.isHidden
            ? t.isInPreviewMode
              ? t.screenWidth > Mn
              : !0
            : !1
        ),
        _ = u(() =>
          t.data.mobile?.isHidden ? (t.isInPreviewMode ? p.value : !0) : !1
        ),
        T = u(() => ut(m.value, v.value, o.value, { width: _a })),
        y = u(() => wa(m.value, v.value, o.value, { isMobileFullScreen: !1 })),
        w = u(() => t.data.attachment === "fixed"),
        O = async () => {
          r(), await l(g.value);
        };
      Me(async () => {
        await O();
      }),
        Ot(() => s.value?.disconnect());
      const C = {
        CUSTOM_ATTRIBUTES: a,
        props: t,
        siteId: o,
        layoutCSSVars: i,
        addIntersectionObserver: r,
        observe: l,
        intersectionObserver: s,
        animationClass: d,
        blockRef: g,
        backgroundOrigin: m,
        backgroundPath: v,
        isMobile: p,
        isDesktopBlockHidden: b,
        isMobileBlockHidden: _,
        backgroundSrc: T,
        backgroundSrcSet: y,
        isBlockBackgroundFixed: w,
        initiateAnimations: O,
        BlockBackground: Nr,
        BlockStickyBarLayout: Ub,
        GridTextBox: Ss,
      };
      return (
        Object.defineProperty(C, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        C
      );
    },
  });
function $b(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "section",
      {
        ref: "blockRef",
        class: X([
          "block-sticky-bar",
          [
            {
              "block-sticky-bar--desktop-hidden": t.isDesktopBlockHidden,
              "block-sticky-bar--mobile-hidden": t.isMobileBlockHidden,
            },
          ],
        ]),
      },
      [
        a.data.background
          ? (c(),
            K(
              t.BlockBackground,
              {
                key: 0,
                class: "block-sticky-bar__background",
                "overlay-opacity": a.data.background["overlay-opacity"],
                type: a.data.background.current,
                gradient: a.data.background.gradient,
                color: a.data.background.color,
                src: t.backgroundSrc,
                srcset: t.backgroundSrcSet,
                "is-fixed": t.isBlockBackgroundFixed,
                alt: a.data.background && a.data.background.alt,
              },
              null,
              8,
              [
                "overlay-opacity",
                "type",
                "gradient",
                "color",
                "src",
                "srcset",
                "is-fixed",
                "alt",
              ]
            ))
          : M("", !0),
        Ee(
          t.BlockStickyBarLayout,
          {
            "block-styles": a.data.settings.styles,
            style: Be(t.layoutCSSVars),
            class: X(t.animationClass),
          },
          {
            default: he(() => [
              (c(!0),
              h(
                ve,
                null,
                Te(
                  a.data.items,
                  (r, l) => (
                    c(),
                    K(
                      t.GridTextBox,
                      je(
                        {
                          key: `sticky-element-${l}`,
                          class: "block-sticky-bar__element",
                          "text-align": "flex-start",
                          "text-align-mobile": "flex-start",
                          content: r.content,
                        },
                        t.CUSTOM_ATTRIBUTES
                      ),
                      null,
                      16,
                      ["content"]
                    )
                  )
                ),
                128
              )),
            ]),
            _: 1,
          },
          8,
          ["block-styles", "style", "class"]
        ),
      ],
      2
    )
  );
}
const Fb = re(Yb, [
    ["render", $b],
    ["__scopeId", "data-v-5d1419da"],
  ]),
  Wb = "https://builder-backend.hostinger.com/u1/sites",
  Gb = {
    verifyPagePassword: async ({
      siteId: e,
      pageId: n,
      locale: a,
      password: t,
    }) =>
      fetch(`${Wb}/verify-page-password`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          siteId: e,
          pageId: n,
          language: a,
          password: t,
        }),
      }),
  },
  qb = {
    src: "/_astro-1723987639367/lock.CUuFZ5nx.svg",
    width: 40,
    height: 40,
    format: "svg",
  },
  jb = ie({
    __name: "PasswordPage",
    props: {
      siteId: {},
      pageId: {},
      locale: {},
      currentPageData: {},
      isCurrentPageHomepage: { type: Boolean, default: !1 },
      inPreviewMode: { type: Boolean, default: !1 },
      defaultLocale: {},
      homepageName: {},
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { pageData: t, setPageData: o } = nt(),
        i = E(!1),
        r = E(""),
        l = E(""),
        s = u(() => a.currentPageData?.meta?.passwordDesign ?? ""),
        d = u(
          () => a.currentPageData?.meta?.passwordHeadingText ?? "Guest Area"
        ),
        g = u(
          () =>
            a.currentPageData?.meta?.passwordSubheadingText ??
            "Please enter the password to access the page"
        ),
        m = u(() => a.currentPageData?.meta?.passwordButtonText ?? "Enter"),
        v = u(
          () =>
            a.currentPageData?.meta?.passwordPlaceholderText ?? "Type password"
        ),
        p = u(() => a.currentPageData?.meta?.passwordBackText ?? "Back to"),
        b = u(() => s.value === mc),
        _ = u(() => s.value === gc),
        T = async () => {
          if (r.value) {
            i.value = !0;
            try {
              const C = await Gb.verifyPagePassword({
                siteId: a.siteId,
                pageId: a.pageId,
                locale: a.locale,
                password: r.value,
              });
              if (C.ok) {
                const { pageData: x } = await C.json();
                o({
                  ...t.value,
                  pages: { ...t.value.pages, ...x.pages },
                  blocks: { ...t.value.blocks, ...x.blocks },
                  elements: { ...t.value.elements, ...x.elements },
                });
                return;
              }
              C.status === 401
                ? (l.value = "Please enter the correct password")
                : C.status === 429
                ? (l.value = "Too many attempts. Please try again later")
                : (l.value = "An error occurred. Please try again later");
            } catch {
              l.value = "An error occurred. Please try again later";
            } finally {
              i.value = !1;
            }
          }
        },
        y = u(() =>
          a.locale && a.locale !== a.defaultLocale ? `/${a.locale}` : "/"
        ),
        w = u(() => !a.inPreviewMode && !a.isCurrentPageHomepage);
      Me(() => {
        document.body.style.overflow = "hidden";
      }),
        Ot(() => {
          document.body.style.overflow = "";
        });
      const O = {
        props: a,
        pageData: t,
        setPageData: o,
        isLoading: i,
        password: r,
        errorMessage: l,
        passwordPageStyle: s,
        passwordPageHeading: d,
        passwordPageSubheading: g,
        passwordPageButtonText: m,
        passwordPlaceholder: v,
        passwordBackText: p,
        isCalmTheme: b,
        isPopularTheme: _,
        handleUnlockSubmit: T,
        homepageLink: y,
        isHomepageLinkShown: w,
        get PASSWORD_PAGE_PLACEHOLDERS_BASE_PATH() {
          return Hd;
        },
        ZyroLoader: Yr,
      };
      return (
        Object.defineProperty(O, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        O
      );
    },
  }),
  zb = (e) => (Vt("data-v-4d3d551f"), (e = e()), Ut(), e),
  Kb = { key: 0, class: "password-page__background-wave-wrapper" },
  Qb = zb(() =>
    P("div", { class: "password-page__background-wave" }, null, -1)
  ),
  Xb = [Qb],
  Zb = ["src"],
  Jb = { key: 0, class: "password-page__icon-lock", src: qb },
  ey = { class: "password-page__heading" },
  ty = { for: "password", class: "password-page__label" },
  ay = ["placeholder"],
  ny = { key: 1, class: "password-page__error-message" },
  oy = ["disabled"],
  ry = { key: 1 },
  iy = { key: 2, class: "password-page__homepage-link" },
  ly = ["href"];
function sy(e, n, a, t, o, i) {
  const r = ze("qa");
  return (
    c(),
    h(
      "main",
      {
        class: X([
          "password-page",
          {
            "password-page--calm": t.isCalmTheme,
            "password-page--popular": t.isPopularTheme,
          },
        ]),
      },
      [
        t.isCalmTheme
          ? de((c(), h("div", Kb, Xb)), [[r, "password-page-background-calm"]])
          : M("", !0),
        t.isPopularTheme
          ? de(
              (c(),
              h(
                "img",
                {
                  key: 1,
                  class: "password-page__background-image",
                  src: `${t.PASSWORD_PAGE_PLACEHOLDERS_BASE_PATH}/guest-area-background-popular.png`,
                },
                null,
                8,
                Zb
              )),
              [[r, "password-page-background-popular"]]
            )
          : M("", !0),
        P(
          "form",
          {
            class: "password-page__form",
            onSubmit: Ie(t.handleUnlockSubmit, ["prevent"]),
          },
          [
            t.isCalmTheme ? (c(), h("img", Jb)) : M("", !0),
            de((c(), h("h1", ey, [Le(ee(t.passwordPageHeading), 1)])), [
              [r, "password-page-heading"],
            ]),
            de((c(), h("label", ty, [Le(ee(t.passwordPageSubheading), 1)])), [
              [r, "password-page-subheading"],
            ]),
            de(
              P(
                "input",
                {
                  id: "password",
                  "onUpdate:modelValue":
                    n[0] || (n[0] = (l) => (t.password = l)),
                  type: "password",
                  autocomplete: "off",
                  autocapitalize: "off",
                  autocorrect: "off",
                  name: "password",
                  placeholder: t.passwordPlaceholder,
                  required: "",
                  class: X([
                    "password-page__input",
                    { "password-page__input--error": t.errorMessage },
                  ]),
                  onBlur: n[1] || (n[1] = (l) => (t.errorMessage = "")),
                },
                null,
                42,
                ay
              ),
              [
                [Kl, t.password],
                [r, "password-page-placeholder"],
              ]
            ),
            t.errorMessage
              ? (c(), h("p", ny, ee(t.errorMessage), 1))
              : M("", !0),
            de(
              (c(),
              h(
                "button",
                {
                  class: "password-page__button",
                  disabled: t.isLoading,
                  type: "submit",
                },
                [
                  t.isLoading
                    ? (c(), K(t.ZyroLoader, { key: 0, size: "24px" }))
                    : (c(), h("span", ry, ee(t.passwordPageButtonText), 1)),
                ],
                8,
                oy
              )),
              [[r, "password-page-button"]]
            ),
            t.isHomepageLinkShown
              ? de(
                  (c(),
                  h("p", iy, [
                    Le(ee(t.passwordBackText) + " ", 1),
                    P(
                      "a",
                      {
                        href: t.homepageLink,
                        class: "password-page__homepage-link-text",
                      },
                      ee(a.homepageName),
                      9,
                      ly
                    ),
                  ])),
                  [[r, "password-page-footer"]]
                )
              : M("", !0),
          ],
          32
        ),
      ],
      2
    )
  );
}
const uy = re(jb, [
    ["render", sy],
    ["__scopeId", "data-v-4d3d551f"],
  ]),
  cy = {},
  dy = Ql(
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-334df6f8><path d="M2 4H3.33333H14" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M5.3335 4.00004V2.66671C5.3335 2.31309 5.47397 1.97395 5.72402 1.7239C5.97407 1.47385 6.31321 1.33337 6.66683 1.33337H9.3335C9.68712 1.33337 10.0263 1.47385 10.2763 1.7239C10.5264 1.97395 10.6668 2.31309 10.6668 2.66671V4.00004M12.6668 4.00004V13.3334C12.6668 13.687 12.5264 14.0261 12.2763 14.2762C12.0263 14.5262 11.6871 14.6667 11.3335 14.6667H4.66683C4.31321 14.6667 3.97407 14.5262 3.72402 14.2762C3.47397 14.0261 3.3335 13.687 3.3335 13.3334V4.00004H12.6668Z" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M6.6665 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M9.3335 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path></svg>',
    1
  ),
  my = [dy];
function gy(e, n) {
  return (
    c(),
    h(
      "button",
      {
        class: "delete-button",
        onClick: n[0] || (n[0] = (a) => e.$emit("handle-button-click")),
      },
      my
    )
  );
}
const vy = re(cy, [
    ["render", gy],
    ["__scopeId", "data-v-334df6f8"],
  ]),
  py = {},
  hy = (e) => (Vt("data-v-2f9813ef"), (e = e()), Ut(), e),
  fy = { class: "close-button" },
  by = hy(() =>
    P(
      "svg",
      {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        P("path", {
          d: "M12 4L4 12",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        P("path", {
          d: "M4 4L12 12",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  yy = [by];
function _y(e, n) {
  return c(), h("button", fy, yy);
}
const qr = re(py, [
    ["render", _y],
    ["__scopeId", "data-v-2f9813ef"],
  ]),
  wy = ie({
    name: "Drawer",
    components: { CloseButton: qr },
    props: {
      placement: {
        type: String,
        default: "right",
        validator: (e) => ["right", "left"].includes(e),
      },
      width: { type: String, default: "350px" },
      alwaysShowCloseButton: { type: Boolean, default: !0 },
      isOpen: { type: Boolean, default: !1 },
      topPositionMobile: { type: String, default: "0px" },
    },
    emits: ["close-drawer"],
    setup(e, n) {
      const a = E(null);
      return (
        Me(() => {
          ko(a, () => {
            n.emit("close-drawer");
          });
        }),
        { siteDrawerRef: a }
      );
    },
    computed: {
      computedStyles() {
        return {
          "--sidebar-width": this.width,
          "--sidebar-top-mobile": this.topPositionMobile,
        };
      },
    },
    methods: {
      closeDrawer() {
        this.$emit("close-drawer");
      },
    },
  }),
  ky = { class: "site-drawer__content" };
function Sy(e, n, a, t, o, i) {
  const r = He("CloseButton"),
    l = ze("qa");
  return (
    c(),
    h("div", null, [
      e.isOpen
        ? (c(),
          h(
            "div",
            {
              key: 0,
              class: X([
                "site-drawer-overlay",
                { "site-drawer-overlay--open": e.isOpen },
              ]),
              onTouchend: n[0] || (n[0] = Ie(() => {}, ["stop", "prevent"])),
            },
            null,
            34
          ))
        : M("", !0),
      Ee(
        xt,
        {
          name:
            e.placement === "right"
              ? "drawer-slide-right"
              : "drawer-slide-left",
        },
        {
          default: he(() => [
            e.isOpen
              ? (c(),
                h(
                  "aside",
                  {
                    key: 0,
                    ref: "siteDrawerRef",
                    class: X([
                      {
                        "site-drawer--left": e.placement === "left",
                        "site-drawer--right": e.placement === "right",
                      },
                      "site-drawer",
                    ]),
                    style: Be(e.computedStyles),
                  },
                  [
                    P("div", ky, [
                      de(
                        (c(),
                        h(
                          "span",
                          {
                            class: X([
                              "site-drawer__close-button",
                              {
                                "site-drawer__close-button--hide-mobile":
                                  !e.alwaysShowCloseButton,
                              },
                            ]),
                            onClick:
                              n[1] ||
                              (n[1] = (...s) =>
                                e.closeDrawer && e.closeDrawer(...s)),
                          },
                          [Ee(r)],
                          2
                        )),
                        [[l, "builder-sitedrawer-btn-close"]]
                      ),
                      ae(e.$slots, "default", {}, void 0, !0),
                    ]),
                  ],
                  6
                ))
              : M("", !0),
          ]),
          _: 3,
        },
        8,
        ["name"]
      ),
    ])
  );
}
const Ty = re(wy, [
    ["render", Sy],
    ["__scopeId", "data-v-12672165"],
  ]),
  kl = 90,
  Cy = ie({
    components: {
      Drawer: Ty,
      DeleteButton: vy,
      ProductMediaElement: _o,
      QuantityPicker: Ns,
    },
    props: {
      isLoading: { type: Boolean, default: !1 },
      isShoppingCartOpen: { type: Boolean, default: !1 },
      translations: { type: Object, default: null },
      language: { type: String, default: "en" },
      isHeaderSticky: { type: Boolean, default: !1 },
      isNavHidden: { type: Boolean, default: !1 },
      siteId: { type: String, default: null },
      quantifiedCartItemsList: { type: Array, default: () => [] },
      products: { type: Array, default: () => [] },
      shoppingCartItems: { type: Array, default: () => [] },
      variantsQuantity: { type: Array, default: () => [] },
    },
    emits: [
      "close-shopping-cart",
      "checkout-button-click",
      "set-shopping-cart-items",
    ],
    data() {
      return {
        IMAGE_WIDTH_PX: kl,
        isHeaderVisible: !1,
        topPositionMobile: "0px",
        resizeObserver: null,
      };
    },
    computed: {
      totalPrice() {
        return this.quantifiedCartItemsList.reduce(
          (e, n) =>
            e +
            (n.product?.variants[0]?.prices[0]?.sale_amount ||
              n.product?.variants[0]?.prices[0]?.amount ||
              0) *
              n.quantity,
          0
        );
      },
      currencyCode() {
        return this.products[0]?.variants[0]?.prices[0]?.currency;
      },
      computedStyle() {
        return { "--image-width": `${kl}px` };
      },
      isLimitReached() {
        return this.shoppingCartItems.length >= an;
      },
    },
    watch: {
      isShoppingCartOpen(e) {
        document.documentElement.style.overflow = e ? "hidden" : "auto";
      },
      headerHeight() {
        this.setHeaderVisibilityValues();
      },
    },
    mounted() {
      const e = document.querySelector(".block-header");
      e &&
        ((this.resizeObserver = new ResizeObserver(() => {
          this.setHeaderHeight();
        })),
        this.resizeObserver.observe(e)),
        window.addEventListener("scroll", this.setHeaderVisibilityValues);
    },
    beforeUnmount() {
      this.resizeObserver?.disconnect(),
        window.removeEventListener("scroll", this.setHeaderVisibilityValues);
    },
    methods: {
      getFormattedBookingDuration: Fr,
      formatPrice: da,
      isStockAvailable(e) {
        if (e.product.variants[0].manage_inventory) {
          const a =
            this.variantsQuantity.find((t) => t.id === e.product.variants[0].id)
              ?.inventory_quantity || 0;
          return e.quantity < a;
        }
        return !0;
      },
      handleQuantityChange(e, n) {
        if (e > n.quantity) {
          this.increaseQuantity(n);
          return;
        }
        this.decreaseQuantity(n);
      },
      decreaseQuantity(e) {
        const n = [...this.shoppingCartItems],
          a = this.shoppingCartItems.filter(
            (o) => o.variants[0].id === e.product.variants[0].id
          ),
          t = this.shoppingCartItems.lastIndexOf(a[a.length - 1]);
        n.splice(t, 1), this.$emit("set-shopping-cart-items", n);
      },
      increaseQuantity(e) {
        this.$emit("set-shopping-cart-items", [
          ...this.shoppingCartItems,
          e.product,
        ]);
      },
      removeProduct(e) {
        const n = this.shoppingCartItems.filter(
          (a) => a.variants[0].id !== e.variants[0].id
        );
        this.$emit("set-shopping-cart-items", n);
      },
      closeShoppingCart() {
        this.$emit("close-shopping-cart");
      },
      setHeaderVisibility() {
        this.isHeaderVisible =
          this.isHeaderSticky ||
          (this.isNavHidden
            ? !1
            : window.scrollY <= Number(this.headerHeight) * 0.4);
      },
      setTopPositionMobile() {
        const e = this.isHeaderSticky
          ? this.headerHeight
          : this.headerHeight - window.scrollY;
        this.topPositionMobile = `${
          this.isHeaderVisible ? Math.floor(e) - 1 : 0
        }px`;
      },
      setHeaderVisibilityValues() {
        this.setHeaderVisibility(), this.setTopPositionMobile();
      },
      setHeaderHeight() {
        this.headerHeight =
          document.querySelector(".block-header")?.clientHeight;
      },
      getFormattedSelectedDate(e) {
        return (
          new Date(
            e.product?.variants[0]?.booking_event?.date
          ).toLocaleDateString(this.language) || null
        );
      },
      getFormattedTime(e) {
        const n = new Date(e.product?.variants[0]?.booking_event?.time_slot),
          a = n.getTime(),
          t = new Date(a + hr(e.product)),
          o = n.toLocaleTimeString(this.language, {
            hour: "2-digit",
            minute: "2-digit",
          }),
          i = t.toLocaleTimeString(this.language, {
            hour: "2-digit",
            minute: "2-digit",
          });
        return `${o} - ${i}`;
      },
      isProductBookingType(e) {
        return e.product?.type.value === qt;
      },
      getProductImage(e) {
        return e.product.variants[0].image_url || e.product.thumbnail;
      },
    },
  }),
  Us = (e) => (Vt("data-v-2eb32a13"), (e = e()), Ut(), e),
  Py = { class: "cart" },
  Iy = { class: "cart__content" },
  Ey = {
    key: 0,
    class: "cart__content-title cart__content-title--with-margin",
  },
  Dy = { key: 1, class: "cart__content-title" },
  My = { class: "cart__list" },
  Oy = { class: "cart__title" },
  Ay = { key: 0, class: "cart__text" },
  By = { key: 1, class: "cart__text cart__sale-price" },
  Ly = { class: "cart__text cart__duration" },
  xy = { class: "cart__time-wrapper" },
  Ry = Us(() =>
    P(
      "svg",
      {
        width: "16",
        height: "18",
        viewBox: "0 0 16 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "cart__time-icon",
      },
      [
        P("path", {
          d: "M5.5 8.3335H3.83333V10.0002H5.5V8.3335ZM8.83333 8.3335H7.16667V10.0002H8.83333V8.3335ZM12.1667 8.3335H10.5V10.0002H12.1667V8.3335ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24167 2.50016 0.5 3.25016 0.5 4.16683V15.8335C0.5 16.2755 0.675595 16.6994 0.988155 17.012C1.30072 17.3246 1.72464 17.5002 2.16667 17.5002H13.8333C14.2754 17.5002 14.6993 17.3246 15.0118 17.012C15.3244 16.6994 15.5 16.2755 15.5 15.8335V4.16683C15.5 3.7248 15.3244 3.30088 15.0118 2.98832C14.6993 2.67576 14.2754 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V6.66683H13.8333V15.8335Z",
          fill: "currentColor",
        }),
      ],
      -1
    )
  ),
  Ny = { class: "cart__text cart__text--lighter" },
  Hy = { class: "cart__time-wrapper" },
  Vy = Us(() =>
    P(
      "svg",
      {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "cart__time-icon",
      },
      [
        P("path", {
          d: "M9.00001 15.6665C12.6667 15.6665 15.6667 12.6665 15.6667 8.99984C15.6667 5.33317 12.6667 2.33317 9.00001 2.33317C5.33334 2.33317 2.33334 5.33317 2.33334 8.99984C2.33334 12.6665 5.33334 15.6665 9.00001 15.6665ZM9.00001 0.666504C13.5833 0.666504 17.3333 4.4165 17.3333 8.99984C17.3333 13.5832 13.5833 17.3332 9.00001 17.3332C4.41667 17.3332 0.666672 13.5832 0.666672 8.99984C0.666672 4.4165 4.41667 0.666504 9.00001 0.666504ZM13.1667 8.58317V9.83317H8.16667V4.83317H9.41667V8.58317H13.1667Z",
          fill: "currentColor",
        }),
      ],
      -1
    )
  ),
  Uy = { class: "cart__text cart__text--lighter" },
  Yy = { key: 3, class: "cart__quantity" },
  $y = { class: "cart__quantity-title" },
  Fy = { key: 0, class: "cart__footer" },
  Wy = { class: "cart__title cart__title--with-slot" };
function Gy(e, n, a, t, o, i) {
  const r = He("ProductMediaElement"),
    l = He("QuantityPicker"),
    s = He("DeleteButton"),
    d = He("Drawer"),
    g = ze("qa");
  return (
    c(),
    K(
      d,
      {
        "is-open": e.isShoppingCartOpen,
        "top-position-mobile": e.topPositionMobile,
        style: Be(e.computedStyle),
        onCloseDrawer: e.closeShoppingCart,
      },
      {
        default: he(() => [
          P("div", Py, [
            P("div", Iy, [
              e.quantifiedCartItemsList.length
                ? (c(), h("p", Dy, ee(e.translations.shoppingBag), 1))
                : de(
                    (c(),
                    h("p", Ey, [Le(ee(e.translations.shoppingBagEmpty), 1)])),
                    [[g, "shoppingcart-text-emptystate"]]
                  ),
              P("ul", My, [
                (c(!0),
                h(
                  ve,
                  null,
                  Te(
                    e.quantifiedCartItemsList,
                    (m) => (
                      c(),
                      h(
                        "li",
                        {
                          key: m.product.variants[0].id,
                          class: "cart__list-item",
                        },
                        [
                          m.product.thumbnail
                            ? (c(),
                              K(
                                r,
                                {
                                  key: 0,
                                  src: e.getProductImage(m),
                                  alt: m.product.title,
                                  class: "cart__list-item-image",
                                  width: e.IMAGE_WIDTH_PX,
                                  height: e.IMAGE_WIDTH_PX,
                                  "site-id": e.siteId,
                                  "enable-srcset": "",
                                },
                                null,
                                8,
                                ["src", "alt", "width", "height", "site-id"]
                              ))
                            : M("", !0),
                          P("div", null, [
                            de(
                              (c(), h("p", Oy, [Le(ee(m.product.title), 1)])),
                              [[g, "shoppingcart-text-product"]]
                            ),
                            m.product.options.length
                              ? de(
                                  (c(),
                                  h("p", Ay, [
                                    Le(ee(m.product.variants[0].title), 1),
                                  ])),
                                  [[g, "shoppingcart-text-variant"]]
                                )
                              : M("", !0),
                            de(
                              (c(),
                              h(
                                "p",
                                {
                                  class: X([
                                    "cart__text cart__price",
                                    {
                                      "cart__price--strikethrough":
                                        m.product.variants[0].prices[0]
                                          .sale_amount,
                                    },
                                  ]),
                                },
                                [
                                  Le(
                                    ee(
                                      e.formatPrice({
                                        amount:
                                          m.product.variants[0].prices[0]
                                            .amount,
                                        currency:
                                          m.product.variants[0].prices[0]
                                            .currency,
                                      })
                                    ),
                                    1
                                  ),
                                ],
                                2
                              )),
                              [[g, "shoppingcart-text-price"]]
                            ),
                            m.product.variants[0].prices[0].sale_amount
                              ? de(
                                  (c(),
                                  h("p", By, [
                                    Le(
                                      ee(
                                        e.formatPrice({
                                          amount:
                                            m.product.variants[0].prices[0]
                                              .sale_amount,
                                          currency:
                                            m.product.variants[0].prices[0]
                                              .currency,
                                        })
                                      ),
                                      1
                                    ),
                                  ])),
                                  [[g, "shoppingcart-text-saleprice"]]
                                )
                              : M("", !0),
                            e.isProductBookingType(m)
                              ? (c(),
                                h(
                                  ve,
                                  { key: 2 },
                                  [
                                    de(
                                      (c(),
                                      h("p", Ly, [
                                        Le(
                                          ee(
                                            e.getFormattedBookingDuration(
                                              m.product,
                                              e.translations
                                            )
                                          ),
                                          1
                                        ),
                                      ])),
                                      [[g, "shoppingcart-text-duration"]]
                                    ),
                                    P("div", xy, [
                                      Ry,
                                      P(
                                        "p",
                                        Ny,
                                        ee(e.getFormattedSelectedDate(m)),
                                        1
                                      ),
                                    ]),
                                    P("div", Hy, [
                                      Vy,
                                      P("p", Uy, ee(e.getFormattedTime(m)), 1),
                                    ]),
                                  ],
                                  64
                                ))
                              : (c(),
                                h("p", Yy, [
                                  P(
                                    "span",
                                    $y,
                                    ee(e.translations.quantityShort) + ": ",
                                    1
                                  ),
                                  Ee(
                                    l,
                                    {
                                      "qa-selector": "shoppingcart",
                                      "is-cart-style": "",
                                      size: 26,
                                      "font-size": 14,
                                      quantity: m.quantity,
                                      "is-input-disabled": "",
                                      "is-limit-reached": e.isLimitReached,
                                      "is-stock-available":
                                        e.isStockAvailable(m),
                                      onQuantityChange: (v) =>
                                        e.handleQuantityChange(v, m),
                                    },
                                    null,
                                    8,
                                    [
                                      "quantity",
                                      "is-limit-reached",
                                      "is-stock-available",
                                      "onQuantityChange",
                                    ]
                                  ),
                                ])),
                          ]),
                          de(
                            Ee(
                              s,
                              {
                                class: "cart__remove-button",
                                onHandleButtonClick: (v) =>
                                  e.removeProduct(m.product),
                              },
                              null,
                              8,
                              ["onHandleButtonClick"]
                            ),
                            [[g, "shoppingcart-btn-delete"]]
                          ),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            e.quantifiedCartItemsList.length
              ? (c(),
                h("div", Fy, [
                  de(
                    (c(),
                    h("p", Wy, [
                      Le(ee(e.translations.subtotal) + ": ", 1),
                      P(
                        "span",
                        null,
                        ee(
                          e.formatPrice({
                            amount: e.totalPrice,
                            currency: e.currencyCode,
                          })
                        ),
                        1
                      ),
                    ])),
                    [[g, "shoppingcart-text-subtotal"]]
                  ),
                  de(
                    (c(),
                    h(
                      "button",
                      {
                        class: X([
                          "cart__text cart__checkout-button",
                          { loading: e.isLoading },
                        ]),
                        onClick:
                          n[0] ||
                          (n[0] = (m) => e.$emit("checkout-button-click")),
                      },
                      [Le(ee(e.translations.checkout), 1)],
                      2
                    )),
                    [[g, "shoppingcart-btn-checkout"]]
                  ),
                ]))
              : M("", !0),
          ]),
        ]),
        _: 1,
      },
      8,
      ["is-open", "top-position-mobile", "style", "onCloseDrawer"]
    )
  );
}
const qy = re(Cy, [
    ["render", Gy],
    ["__scopeId", "data-v-2eb32a13"],
  ]),
  jy = ie({
    components: { EcommerceShoppingCart: qy },
    props: {
      headerHeight: { type: Number, default: 0 },
      ecommerceTranslations: { type: Object, default: () => ({}) },
      language: { type: String, default: "en" },
      currentPageEcommerceBlocks: { type: Array, default: () => [] },
      currentPageEcommerceComponents: { type: Array, default: () => [] },
      isHeaderSticky: { type: Boolean, default: !1 },
      isNavHidden: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const { siteId: n } = nt(),
        {
          quantifiedCartItemsList: a,
          products: t,
          isShoppingCartOpen: o,
          isCheckoutLoading: i,
          shoppingCartItems: r,
          variantsQuantity: l,
          fetchProducts: s,
          setShoppingCartOpen: d,
          setShoppingCartItems: g,
          setIsCheckoutLoading: m,
        } = na(),
        { openEcommerceModal: v } = aa(),
        { initiateCheckout: p } = jn();
      return {
        openEcommerceModal: v,
        initiateCheckout: p,
        quantifiedCartItemsList: a,
        products: t,
        isShoppingCartOpen: o,
        isCheckoutLoading: i,
        shoppingCartItems: r,
        variantsQuantity: l,
        fetchProducts: s,
        setShoppingCartOpen: d,
        setShoppingCartItems: g,
        setIsCheckoutLoading: m,
        siteId: n,
      };
    },
    computed: {
      currentPageEcommerceElements() {
        return [
          ...this.currentPageEcommerceBlocks,
          ...this.currentPageEcommerceComponents,
        ];
      },
      productIds() {
        const n = this.currentPageEcommerceElements
          .reduce((a, t) => {
            let o = [];
            switch (t.type) {
              case "BlockEcommerceProduct":
                o = [...o, t.product?.id];
                break;
              case "GridEcommerceButton":
                o = [...o, t.settings?.productId];
                break;
            }
            return [...a, ...o];
          }, [])
          .filter((a) => a !== -1);
        return [...new Set(n)];
      },
    },
    watch: {
      currentPageEcommerceElements: {
        async handler(e, n) {
          JSON.stringify(e) !== JSON.stringify(n) &&
            (await this.loadProducts());
        },
      },
    },
    mounted() {
      this.loadProducts();
    },
    methods: {
      async loadProducts() {
        await this.fetchProducts(this.productIds);
      },
      async initCheckout() {
        if (ln() || this.isInPreviewMode) {
          this.openEcommerceModal("EcommerceMessageButtonDisabled");
          return;
        }
        this.isCheckoutLoading ||
          (this.setIsCheckoutLoading(!0),
          await this.initiateCheckout(this.shoppingCartItems).then(() => {
            this.setShoppingCartOpen(!1), this.setIsCheckoutLoading(!1);
          }));
      },
    },
  });
function zy(e, n, a, t, o, i) {
  const r = He("EcommerceShoppingCart"),
    l = ze("qa");
  return de(
    (c(),
    K(
      r,
      {
        "is-shopping-cart-open": e.isShoppingCartOpen,
        "is-loading": e.isCheckoutLoading,
        "header-height": e.headerHeight,
        "is-header-sticky": e.isHeaderSticky,
        "is-nav-hidden": e.isNavHidden,
        translations: e.ecommerceTranslations,
        language: e.language,
        "site-id": e.siteId,
        "quantified-cart-items-list": e.quantifiedCartItemsList,
        products: e.products,
        "shopping-cart-items": e.shoppingCartItems,
        "variants-quantity": e.variantsQuantity,
        onCheckoutButtonClick: e.initCheckout,
        onCloseShoppingCart: n[0] || (n[0] = (s) => e.setShoppingCartOpen(!1)),
        onSetShoppingCartItems: e.setShoppingCartItems,
      },
      null,
      8,
      [
        "is-shopping-cart-open",
        "is-loading",
        "header-height",
        "is-header-sticky",
        "is-nav-hidden",
        "translations",
        "language",
        "site-id",
        "quantified-cart-items-list",
        "products",
        "shopping-cart-items",
        "variants-quantity",
        "onCheckoutButtonClick",
        "onSetShoppingCartItems",
      ]
    )),
    [[l, "user-section-zyroecommerceshoppingcart"]]
  );
}
const Ky = re(jy, [["render", zy]]),
  Qy = ie({
    components: { CloseButton: qr },
    props: {
      backgroundColor: { type: String, default: "var(--color-light)" },
      padding: { type: String, default: "16px" },
      width: { type: String, default: "auto" },
      maxWidth: { type: String, default: "unset" },
      overflow: { type: String, default: "unset" },
      height: { type: String, default: "auto" },
      mobileHeight: { type: String, default: "" },
    },
    setup() {
      const { closeEcommerceModal: e } = aa();
      return { closeEcommerceModal: e };
    },
    computed: {
      modalStyle() {
        return {
          "--modal-background-color": this.backgroundColor,
          "--padding": this.padding,
          "--width": this.width,
          "--max-width": this.maxWidth,
          "--overflow": this.overflow,
          "--height": this.height,
          "--mobile-height": this.mobileHeight || this.height,
        };
      },
    },
    mounted() {
      this.$refs.modal?.focus();
    },
    methods: {
      handleCloseModalAction() {
        this.closeEcommerceModal();
        const e = new URLSearchParams(window.location.search);
        if (!e.get("open-modal")) return;
        e.delete("open-modal"), e.delete("product");
        const n = e.toString();
        n && window.history.pushState(null, null, `?${n}`);
      },
    },
  }),
  Xy = { class: "modal-wrapper" };
function Zy(e, n, a, t, o, i) {
  const r = He("CloseButton");
  return (
    c(),
    K(
      xt,
      { name: "fade" },
      {
        default: he(() => [
          P("div", Xy, [
            P("div", {
              tabindex: "-1",
              class: "modal-backdrop",
              onClick:
                n[0] ||
                (n[0] = (...l) =>
                  e.handleCloseModalAction && e.handleCloseModalAction(...l)),
            }),
            P(
              "div",
              {
                ref: "modal",
                style: Be(e.modalStyle),
                class: "modal",
                tabindex: "0",
                "aria-modal": "true",
                onKeydown:
                  n[1] ||
                  (n[1] = Oe(
                    (...l) =>
                      e.handleCloseModalAction &&
                      e.handleCloseModalAction(...l),
                    ["esc"]
                  )),
              },
              [
                Ee(
                  r,
                  {
                    class: "modal__close-button",
                    onClick: e.handleCloseModalAction,
                  },
                  null,
                  8,
                  ["onClick"]
                ),
                ae(e.$slots, "default", {}, void 0, !0),
              ],
              36
            ),
          ]),
        ]),
        _: 3,
      }
    )
  );
}
const bn = re(Qy, [
    ["render", Zy],
    ["__scopeId", "data-v-35831679"],
  ]),
  Jy = {
    __name: "EcommerceProductPreview",
    props: {
      translations: { type: Object, default: () => {} },
      isQuickPreview: { type: Boolean, default: !1 },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { productPreviewData: t } = aa(),
        { siteId: o } = nt(),
        { productPages: i } = na(),
        r = u(() =>
          ut(t.value.background.origin, t.value.background.path, o.value, {
            width: _a,
          })
        ),
        l = u(() =>
          wa(t.value.background.origin, t.value.background.path, o.value, {
            isMobileFullScreen: !1,
          })
        ),
        s = {
          props: a,
          productPreviewData: t,
          siteId: o,
          productPages: i,
          backgroundSrc: r,
          backgroundSrcSet: l,
          BlockBackground: Nr,
          ModalLayout: bn,
          BlockEcommerceProductProviderUser: Hs,
          computed: u,
          get useEcommerceModal() {
            return aa;
          },
          get getFullWidthSrcset() {
            return wa;
          },
          get getOptimizedSrc() {
            return ut;
          },
          get FULL_WIDTH() {
            return _a;
          },
          get useEcommerceGlobal() {
            return na;
          },
          get useSiteGlobal() {
            return nt;
          },
        };
      return (
        Object.defineProperty(s, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  },
  e_ = { class: "ecommerce-product-preview__content-wrapper" };
function t_(e, n, a, t, o, i) {
  const r = ze("qa");
  return (
    c(),
    K(
      t.ModalLayout,
      {
        ref: "modal",
        "max-width": "905px",
        width: "100%",
        padding: "0",
        height: "auto",
        overflow: "auto",
        class: "ecommerce-product-preview",
      },
      {
        default: he(() => [
          de(
            (c(),
            h("div", e_, [
              t.productPreviewData.background
                ? (c(),
                  K(
                    t.BlockBackground,
                    {
                      key: 0,
                      "overlay-opacity":
                        t.productPreviewData.background["overlay-opacity"],
                      type: t.productPreviewData.background.current,
                      color: t.productPreviewData.background.color,
                      gradient: t.productPreviewData.background.gradient,
                      src: t.backgroundSrc,
                      srcset: t.backgroundSrcSet,
                      "is-fixed": t.productPreviewData.attachment === "fixed",
                      alt:
                        t.productPreviewData.background &&
                        t.productPreviewData.background.alt,
                      "video-poster":
                        t.productPreviewData.background.video
                          ?.videoThumbnailSrc,
                      class: "ecommerce-product-preview__background",
                    },
                    null,
                    8,
                    [
                      "overlay-opacity",
                      "type",
                      "color",
                      "gradient",
                      "src",
                      "srcset",
                      "is-fixed",
                      "alt",
                      "video-poster",
                    ]
                  ))
                : M("", !0),
              Ee(
                t.BlockEcommerceProductProviderUser,
                {
                  class: "ecommerce-product-preview__content",
                  "is-quick-preview": a.isQuickPreview,
                  data: t.productPreviewData,
                  "product-pages": t.productPages,
                  "is-cart-visible": a.isCartVisible,
                  "ecommerce-translations": a.translations,
                },
                null,
                8,
                [
                  "is-quick-preview",
                  "data",
                  "product-pages",
                  "is-cart-visible",
                  "ecommerce-translations",
                ]
              ),
            ])),
            [[r, "productpreview-modal"]]
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const a_ = re(Jy, [
  ["render", t_],
  ["__scopeId", "data-v-73116588"],
]);
function jt(e) {
  "@babel/helpers - typeof";
  return (
    (jt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (n) {
            return typeof n;
          }
        : function (n) {
            return n &&
              typeof Symbol == "function" &&
              n.constructor === Symbol &&
              n !== Symbol.prototype
              ? "symbol"
              : typeof n;
          }),
    jt(e)
  );
}
function De(e) {
  if (e === null || e === !0 || e === !1) return NaN;
  var n = Number(e);
  return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
}
function ke(e, n) {
  if (n.length < e)
    throw new TypeError(
      e +
        " argument" +
        (e > 1 ? "s" : "") +
        " required, but only " +
        n.length +
        " present"
    );
}
function Pe(e) {
  ke(1, arguments);
  var n = Object.prototype.toString.call(e);
  return e instanceof Date || (jt(e) === "object" && n === "[object Date]")
    ? new Date(e.getTime())
    : typeof e == "number" || n === "[object Number]"
    ? new Date(e)
    : ((typeof e == "string" || n === "[object String]") &&
        typeof console < "u" &&
        (console.warn(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
        ),
        console.warn(new Error().stack)),
      new Date(NaN));
}
function ha(e, n) {
  ke(2, arguments);
  var a = Pe(e),
    t = De(n);
  return isNaN(t) ? new Date(NaN) : (t && a.setDate(a.getDate() + t), a);
}
function Zt(e, n) {
  ke(2, arguments);
  var a = Pe(e),
    t = De(n);
  if (isNaN(t)) return new Date(NaN);
  if (!t) return a;
  var o = a.getDate(),
    i = new Date(a.getTime());
  i.setMonth(a.getMonth() + t + 1, 0);
  var r = i.getDate();
  return o >= r ? i : (a.setFullYear(i.getFullYear(), i.getMonth(), o), a);
}
function Ys(e, n) {
  if ((ke(2, arguments), !n || jt(n) !== "object")) return new Date(NaN);
  var a = n.years ? De(n.years) : 0,
    t = n.months ? De(n.months) : 0,
    o = n.weeks ? De(n.weeks) : 0,
    i = n.days ? De(n.days) : 0,
    r = n.hours ? De(n.hours) : 0,
    l = n.minutes ? De(n.minutes) : 0,
    s = n.seconds ? De(n.seconds) : 0,
    d = Pe(e),
    g = t || a ? Zt(d, t + a * 12) : d,
    m = i || o ? ha(g, i + o * 7) : g,
    v = l + r * 60,
    p = s + v * 60,
    b = p * 1e3,
    _ = new Date(m.getTime() + b);
  return _;
}
function n_(e, n) {
  ke(2, arguments);
  var a = Pe(e).getTime(),
    t = De(n);
  return new Date(a + t);
}
var o_ = {};
function va() {
  return o_;
}
function $a(e, n) {
  var a, t, o, i, r, l, s, d;
  ke(1, arguments);
  var g = va(),
    m = De(
      (a =
        (t =
          (o =
            (i = n?.weekStartsOn) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (l = r.options) === null ||
                l === void 0
              ? void 0
              : l.weekStartsOn) !== null && o !== void 0
            ? o
            : g.weekStartsOn) !== null && t !== void 0
          ? t
          : (s = g.locale) === null ||
            s === void 0 ||
            (d = s.options) === null ||
            d === void 0
          ? void 0
          : d.weekStartsOn) !== null && a !== void 0
        ? a
        : 0
    );
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = Pe(e),
    p = v.getDay(),
    b = (p < m ? 7 : 0) + p - m;
  return v.setDate(v.getDate() - b), v.setHours(0, 0, 0, 0), v;
}
function vo(e) {
  return ke(1, arguments), $a(e, { weekStartsOn: 1 });
}
function r_(e) {
  ke(1, arguments);
  var n = Pe(e),
    a = n.getFullYear(),
    t = new Date(0);
  t.setFullYear(a + 1, 0, 4), t.setHours(0, 0, 0, 0);
  var o = vo(t),
    i = new Date(0);
  i.setFullYear(a, 0, 4), i.setHours(0, 0, 0, 0);
  var r = vo(i);
  return n.getTime() >= o.getTime()
    ? a + 1
    : n.getTime() >= r.getTime()
    ? a
    : a - 1;
}
function i_(e) {
  ke(1, arguments);
  var n = r_(e),
    a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var t = vo(a);
  return t;
}
function po(e) {
  var n = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return n.setUTCFullYear(e.getFullYear()), e.getTime() - n.getTime();
}
function Sl(e) {
  ke(1, arguments);
  var n = Pe(e);
  return n.setHours(0, 0, 0, 0), n;
}
var l_ = 864e5;
function s_(e, n) {
  ke(2, arguments);
  var a = Sl(e),
    t = Sl(n),
    o = a.getTime() - po(a),
    i = t.getTime() - po(t);
  return Math.round((o - i) / l_);
}
function u_(e, n) {
  ke(2, arguments);
  var a = De(n),
    t = a * 3;
  return Zt(e, t);
}
function jr(e, n) {
  ke(2, arguments);
  var a = De(n);
  return Zt(e, a * 12);
}
var zr = 6e4,
  Kr = 36e5,
  c_ = 1e3;
function $s(e) {
  return (
    ke(1, arguments),
    e instanceof Date ||
      (jt(e) === "object" &&
        Object.prototype.toString.call(e) === "[object Date]")
  );
}
function xn(e) {
  if ((ke(1, arguments), !$s(e) && typeof e != "number")) return !1;
  var n = Pe(e);
  return !isNaN(Number(n));
}
function Tl(e) {
  ke(1, arguments);
  var n = Pe(e),
    a = Math.floor(n.getMonth() / 3) + 1;
  return a;
}
function Fs(e, n) {
  var a;
  ke(1, arguments);
  var t = e || {},
    o = Pe(t.start),
    i = Pe(t.end),
    r = i.getTime();
  if (!(o.getTime() <= r)) throw new RangeError("Invalid interval");
  var l = [],
    s = o;
  s.setHours(0, 0, 0, 0);
  var d = Number((a = void 0) !== null && a !== void 0 ? a : 1);
  if (d < 1 || isNaN(d))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; s.getTime() <= r; )
    l.push(Pe(s)), s.setDate(s.getDate() + d), s.setHours(0, 0, 0, 0);
  return l;
}
function $n(e) {
  ke(1, arguments);
  var n = Pe(e),
    a = n.getMonth(),
    t = a - (a % 3);
  return n.setMonth(t, 1), n.setHours(0, 0, 0, 0), n;
}
function d_(e) {
  ke(1, arguments);
  var n = e || {},
    a = Pe(n.start),
    t = Pe(n.end),
    o = t.getTime();
  if (!(a.getTime() <= o)) throw new RangeError("Invalid interval");
  var i = $n(a),
    r = $n(t);
  o = r.getTime();
  for (var l = [], s = i; s.getTime() <= o; ) l.push(Pe(s)), (s = u_(s, 1));
  return l;
}
function m_(e) {
  ke(1, arguments);
  var n = Pe(e),
    a = n.getFullYear();
  return n.setFullYear(a + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function g_(e) {
  ke(1, arguments);
  var n = Pe(e),
    a = new Date(0);
  return a.setFullYear(n.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a;
}
function v_(e, n) {
  var a, t, o, i, r, l, s, d;
  ke(1, arguments);
  var g = va(),
    m = De(
      (a =
        (t =
          (o =
            (i = n?.weekStartsOn) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (l = r.options) === null ||
                l === void 0
              ? void 0
              : l.weekStartsOn) !== null && o !== void 0
            ? o
            : g.weekStartsOn) !== null && t !== void 0
          ? t
          : (s = g.locale) === null ||
            s === void 0 ||
            (d = s.options) === null ||
            d === void 0
          ? void 0
          : d.weekStartsOn) !== null && a !== void 0
        ? a
        : 0
    );
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = Pe(e),
    p = v.getDay(),
    b = (p < m ? -7 : 0) + 6 - (p - m);
  return v.setDate(v.getDate() + b), v.setHours(23, 59, 59, 999), v;
}
function Cl(e) {
  ke(1, arguments);
  var n = Pe(e),
    a = n.getMonth(),
    t = a - (a % 3) + 3;
  return n.setMonth(t, 0), n.setHours(23, 59, 59, 999), n;
}
function Ws(e, n) {
  ke(2, arguments);
  var a = De(n);
  return n_(e, -a);
}
var p_ = 864e5;
function h_(e) {
  ke(1, arguments);
  var n = Pe(e),
    a = n.getTime();
  n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
  var t = n.getTime(),
    o = a - t;
  return Math.floor(o / p_) + 1;
}
function dn(e) {
  ke(1, arguments);
  var n = 1,
    a = Pe(e),
    t = a.getUTCDay(),
    o = (t < n ? 7 : 0) + t - n;
  return a.setUTCDate(a.getUTCDate() - o), a.setUTCHours(0, 0, 0, 0), a;
}
function Gs(e) {
  ke(1, arguments);
  var n = Pe(e),
    a = n.getUTCFullYear(),
    t = new Date(0);
  t.setUTCFullYear(a + 1, 0, 4), t.setUTCHours(0, 0, 0, 0);
  var o = dn(t),
    i = new Date(0);
  i.setUTCFullYear(a, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var r = dn(i);
  return n.getTime() >= o.getTime()
    ? a + 1
    : n.getTime() >= r.getTime()
    ? a
    : a - 1;
}
function f_(e) {
  ke(1, arguments);
  var n = Gs(e),
    a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var t = dn(a);
  return t;
}
var b_ = 6048e5;
function qs(e) {
  ke(1, arguments);
  var n = Pe(e),
    a = dn(n).getTime() - f_(n).getTime();
  return Math.round(a / b_) + 1;
}
function Fa(e, n) {
  var a, t, o, i, r, l, s, d;
  ke(1, arguments);
  var g = va(),
    m = De(
      (a =
        (t =
          (o =
            (i = n?.weekStartsOn) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (l = r.options) === null ||
                l === void 0
              ? void 0
              : l.weekStartsOn) !== null && o !== void 0
            ? o
            : g.weekStartsOn) !== null && t !== void 0
          ? t
          : (s = g.locale) === null ||
            s === void 0 ||
            (d = s.options) === null ||
            d === void 0
          ? void 0
          : d.weekStartsOn) !== null && a !== void 0
        ? a
        : 0
    );
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = Pe(e),
    p = v.getUTCDay(),
    b = (p < m ? 7 : 0) + p - m;
  return v.setUTCDate(v.getUTCDate() - b), v.setUTCHours(0, 0, 0, 0), v;
}
function Qr(e, n) {
  var a, t, o, i, r, l, s, d;
  ke(1, arguments);
  var g = Pe(e),
    m = g.getUTCFullYear(),
    v = va(),
    p = De(
      (a =
        (t =
          (o =
            (i = n?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (l = r.options) === null ||
                l === void 0
              ? void 0
              : l.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : v.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (s = v.locale) === null ||
            s === void 0 ||
            (d = s.options) === null ||
            d === void 0
          ? void 0
          : d.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    );
  if (!(p >= 1 && p <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var b = new Date(0);
  b.setUTCFullYear(m + 1, 0, p), b.setUTCHours(0, 0, 0, 0);
  var _ = Fa(b, n),
    T = new Date(0);
  T.setUTCFullYear(m, 0, p), T.setUTCHours(0, 0, 0, 0);
  var y = Fa(T, n);
  return g.getTime() >= _.getTime()
    ? m + 1
    : g.getTime() >= y.getTime()
    ? m
    : m - 1;
}
function y_(e, n) {
  var a, t, o, i, r, l, s, d;
  ke(1, arguments);
  var g = va(),
    m = De(
      (a =
        (t =
          (o =
            (i = n?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (l = r.options) === null ||
                l === void 0
              ? void 0
              : l.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : g.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (s = g.locale) === null ||
            s === void 0 ||
            (d = s.options) === null ||
            d === void 0
          ? void 0
          : d.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    ),
    v = Qr(e, n),
    p = new Date(0);
  p.setUTCFullYear(v, 0, m), p.setUTCHours(0, 0, 0, 0);
  var b = Fa(p, n);
  return b;
}
var __ = 6048e5;
function js(e, n) {
  ke(1, arguments);
  var a = Pe(e),
    t = Fa(a, n).getTime() - y_(a, n).getTime();
  return Math.round(t / __) + 1;
}
function Ke(e, n) {
  for (var a = e < 0 ? "-" : "", t = Math.abs(e).toString(); t.length < n; )
    t = "0" + t;
  return a + t;
}
var ka = {
    y: function (n, a) {
      var t = n.getUTCFullYear(),
        o = t > 0 ? t : 1 - t;
      return Ke(a === "yy" ? o % 100 : o, a.length);
    },
    M: function (n, a) {
      var t = n.getUTCMonth();
      return a === "M" ? String(t + 1) : Ke(t + 1, 2);
    },
    d: function (n, a) {
      return Ke(n.getUTCDate(), a.length);
    },
    a: function (n, a) {
      var t = n.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (a) {
        case "a":
        case "aa":
          return t.toUpperCase();
        case "aaa":
          return t;
        case "aaaaa":
          return t[0];
        case "aaaa":
        default:
          return t === "am" ? "a.m." : "p.m.";
      }
    },
    h: function (n, a) {
      return Ke(n.getUTCHours() % 12 || 12, a.length);
    },
    H: function (n, a) {
      return Ke(n.getUTCHours(), a.length);
    },
    m: function (n, a) {
      return Ke(n.getUTCMinutes(), a.length);
    },
    s: function (n, a) {
      return Ke(n.getUTCSeconds(), a.length);
    },
    S: function (n, a) {
      var t = a.length,
        o = n.getUTCMilliseconds(),
        i = Math.floor(o * Math.pow(10, t - 3));
      return Ke(i, a.length);
    },
  },
  Za = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  w_ = {
    G: function (n, a, t) {
      var o = n.getUTCFullYear() > 0 ? 1 : 0;
      switch (a) {
        case "G":
        case "GG":
        case "GGG":
          return t.era(o, { width: "abbreviated" });
        case "GGGGG":
          return t.era(o, { width: "narrow" });
        case "GGGG":
        default:
          return t.era(o, { width: "wide" });
      }
    },
    y: function (n, a, t) {
      if (a === "yo") {
        var o = n.getUTCFullYear(),
          i = o > 0 ? o : 1 - o;
        return t.ordinalNumber(i, { unit: "year" });
      }
      return ka.y(n, a);
    },
    Y: function (n, a, t, o) {
      var i = Qr(n, o),
        r = i > 0 ? i : 1 - i;
      if (a === "YY") {
        var l = r % 100;
        return Ke(l, 2);
      }
      return a === "Yo"
        ? t.ordinalNumber(r, { unit: "year" })
        : Ke(r, a.length);
    },
    R: function (n, a) {
      var t = Gs(n);
      return Ke(t, a.length);
    },
    u: function (n, a) {
      var t = n.getUTCFullYear();
      return Ke(t, a.length);
    },
    Q: function (n, a, t) {
      var o = Math.ceil((n.getUTCMonth() + 1) / 3);
      switch (a) {
        case "Q":
          return String(o);
        case "QQ":
          return Ke(o, 2);
        case "Qo":
          return t.ordinalNumber(o, { unit: "quarter" });
        case "QQQ":
          return t.quarter(o, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return t.quarter(o, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return t.quarter(o, { width: "wide", context: "formatting" });
      }
    },
    q: function (n, a, t) {
      var o = Math.ceil((n.getUTCMonth() + 1) / 3);
      switch (a) {
        case "q":
          return String(o);
        case "qq":
          return Ke(o, 2);
        case "qo":
          return t.ordinalNumber(o, { unit: "quarter" });
        case "qqq":
          return t.quarter(o, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return t.quarter(o, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return t.quarter(o, { width: "wide", context: "standalone" });
      }
    },
    M: function (n, a, t) {
      var o = n.getUTCMonth();
      switch (a) {
        case "M":
        case "MM":
          return ka.M(n, a);
        case "Mo":
          return t.ordinalNumber(o + 1, { unit: "month" });
        case "MMM":
          return t.month(o, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return t.month(o, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return t.month(o, { width: "wide", context: "formatting" });
      }
    },
    L: function (n, a, t) {
      var o = n.getUTCMonth();
      switch (a) {
        case "L":
          return String(o + 1);
        case "LL":
          return Ke(o + 1, 2);
        case "Lo":
          return t.ordinalNumber(o + 1, { unit: "month" });
        case "LLL":
          return t.month(o, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return t.month(o, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return t.month(o, { width: "wide", context: "standalone" });
      }
    },
    w: function (n, a, t, o) {
      var i = js(n, o);
      return a === "wo"
        ? t.ordinalNumber(i, { unit: "week" })
        : Ke(i, a.length);
    },
    I: function (n, a, t) {
      var o = qs(n);
      return a === "Io"
        ? t.ordinalNumber(o, { unit: "week" })
        : Ke(o, a.length);
    },
    d: function (n, a, t) {
      return a === "do"
        ? t.ordinalNumber(n.getUTCDate(), { unit: "date" })
        : ka.d(n, a);
    },
    D: function (n, a, t) {
      var o = h_(n);
      return a === "Do"
        ? t.ordinalNumber(o, { unit: "dayOfYear" })
        : Ke(o, a.length);
    },
    E: function (n, a, t) {
      var o = n.getUTCDay();
      switch (a) {
        case "E":
        case "EE":
        case "EEE":
          return t.day(o, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return t.day(o, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return t.day(o, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return t.day(o, { width: "wide", context: "formatting" });
      }
    },
    e: function (n, a, t, o) {
      var i = n.getUTCDay(),
        r = (i - o.weekStartsOn + 8) % 7 || 7;
      switch (a) {
        case "e":
          return String(r);
        case "ee":
          return Ke(r, 2);
        case "eo":
          return t.ordinalNumber(r, { unit: "day" });
        case "eee":
          return t.day(i, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return t.day(i, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return t.day(i, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return t.day(i, { width: "wide", context: "formatting" });
      }
    },
    c: function (n, a, t, o) {
      var i = n.getUTCDay(),
        r = (i - o.weekStartsOn + 8) % 7 || 7;
      switch (a) {
        case "c":
          return String(r);
        case "cc":
          return Ke(r, a.length);
        case "co":
          return t.ordinalNumber(r, { unit: "day" });
        case "ccc":
          return t.day(i, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return t.day(i, { width: "narrow", context: "standalone" });
        case "cccccc":
          return t.day(i, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return t.day(i, { width: "wide", context: "standalone" });
      }
    },
    i: function (n, a, t) {
      var o = n.getUTCDay(),
        i = o === 0 ? 7 : o;
      switch (a) {
        case "i":
          return String(i);
        case "ii":
          return Ke(i, a.length);
        case "io":
          return t.ordinalNumber(i, { unit: "day" });
        case "iii":
          return t.day(o, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return t.day(o, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return t.day(o, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return t.day(o, { width: "wide", context: "formatting" });
      }
    },
    a: function (n, a, t) {
      var o = n.getUTCHours(),
        i = o / 12 >= 1 ? "pm" : "am";
      switch (a) {
        case "a":
        case "aa":
          return t.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return t
            .dayPeriod(i, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return t.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return t.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    b: function (n, a, t) {
      var o = n.getUTCHours(),
        i;
      switch (
        (o === 12
          ? (i = Za.noon)
          : o === 0
          ? (i = Za.midnight)
          : (i = o / 12 >= 1 ? "pm" : "am"),
        a)
      ) {
        case "b":
        case "bb":
          return t.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return t
            .dayPeriod(i, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return t.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return t.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    B: function (n, a, t) {
      var o = n.getUTCHours(),
        i;
      switch (
        (o >= 17
          ? (i = Za.evening)
          : o >= 12
          ? (i = Za.afternoon)
          : o >= 4
          ? (i = Za.morning)
          : (i = Za.night),
        a)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return t.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return t.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return t.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    h: function (n, a, t) {
      if (a === "ho") {
        var o = n.getUTCHours() % 12;
        return o === 0 && (o = 12), t.ordinalNumber(o, { unit: "hour" });
      }
      return ka.h(n, a);
    },
    H: function (n, a, t) {
      return a === "Ho"
        ? t.ordinalNumber(n.getUTCHours(), { unit: "hour" })
        : ka.H(n, a);
    },
    K: function (n, a, t) {
      var o = n.getUTCHours() % 12;
      return a === "Ko"
        ? t.ordinalNumber(o, { unit: "hour" })
        : Ke(o, a.length);
    },
    k: function (n, a, t) {
      var o = n.getUTCHours();
      return (
        o === 0 && (o = 24),
        a === "ko" ? t.ordinalNumber(o, { unit: "hour" }) : Ke(o, a.length)
      );
    },
    m: function (n, a, t) {
      return a === "mo"
        ? t.ordinalNumber(n.getUTCMinutes(), { unit: "minute" })
        : ka.m(n, a);
    },
    s: function (n, a, t) {
      return a === "so"
        ? t.ordinalNumber(n.getUTCSeconds(), { unit: "second" })
        : ka.s(n, a);
    },
    S: function (n, a) {
      return ka.S(n, a);
    },
    X: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (a) {
        case "X":
          return Il(r);
        case "XXXX":
        case "XX":
          return Ba(r);
        case "XXXXX":
        case "XXX":
        default:
          return Ba(r, ":");
      }
    },
    x: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      switch (a) {
        case "x":
          return Il(r);
        case "xxxx":
        case "xx":
          return Ba(r);
        case "xxxxx":
        case "xxx":
        default:
          return Ba(r, ":");
      }
    },
    O: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      switch (a) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Pl(r, ":");
        case "OOOO":
        default:
          return "GMT" + Ba(r, ":");
      }
    },
    z: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      switch (a) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Pl(r, ":");
        case "zzzz":
        default:
          return "GMT" + Ba(r, ":");
      }
    },
    t: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = Math.floor(i.getTime() / 1e3);
      return Ke(r, a.length);
    },
    T: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTime();
      return Ke(r, a.length);
    },
  };
function Pl(e, n) {
  var a = e > 0 ? "-" : "+",
    t = Math.abs(e),
    o = Math.floor(t / 60),
    i = t % 60;
  if (i === 0) return a + String(o);
  var r = n;
  return a + String(o) + r + Ke(i, 2);
}
function Il(e, n) {
  if (e % 60 === 0) {
    var a = e > 0 ? "-" : "+";
    return a + Ke(Math.abs(e) / 60, 2);
  }
  return Ba(e, n);
}
function Ba(e, n) {
  var a = n || "",
    t = e > 0 ? "-" : "+",
    o = Math.abs(e),
    i = Ke(Math.floor(o / 60), 2),
    r = Ke(o % 60, 2);
  return t + i + a + r;
}
var El = function (n, a) {
    switch (n) {
      case "P":
        return a.date({ width: "short" });
      case "PP":
        return a.date({ width: "medium" });
      case "PPP":
        return a.date({ width: "long" });
      case "PPPP":
      default:
        return a.date({ width: "full" });
    }
  },
  zs = function (n, a) {
    switch (n) {
      case "p":
        return a.time({ width: "short" });
      case "pp":
        return a.time({ width: "medium" });
      case "ppp":
        return a.time({ width: "long" });
      case "pppp":
      default:
        return a.time({ width: "full" });
    }
  },
  k_ = function (n, a) {
    var t = n.match(/(P+)(p+)?/) || [],
      o = t[1],
      i = t[2];
    if (!i) return El(n, a);
    var r;
    switch (o) {
      case "P":
        r = a.dateTime({ width: "short" });
        break;
      case "PP":
        r = a.dateTime({ width: "medium" });
        break;
      case "PPP":
        r = a.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        r = a.dateTime({ width: "full" });
        break;
    }
    return r.replace("{{date}}", El(o, a)).replace("{{time}}", zs(i, a));
  },
  _r = { p: zs, P: k_ },
  S_ = ["D", "DD"],
  T_ = ["YY", "YYYY"];
function Ks(e) {
  return S_.indexOf(e) !== -1;
}
function Qs(e) {
  return T_.indexOf(e) !== -1;
}
function ho(e, n, a) {
  if (e === "YYYY")
    throw new RangeError(
      "Use `yyyy` instead of `YYYY` (in `"
        .concat(n, "`) for formatting years to the input `")
        .concat(
          a,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "YY")
    throw new RangeError(
      "Use `yy` instead of `YY` (in `"
        .concat(n, "`) for formatting years to the input `")
        .concat(
          a,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "D")
    throw new RangeError(
      "Use `d` instead of `D` (in `"
        .concat(n, "`) for formatting days of the month to the input `")
        .concat(
          a,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "DD")
    throw new RangeError(
      "Use `dd` instead of `DD` (in `"
        .concat(n, "`) for formatting days of the month to the input `")
        .concat(
          a,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
}
var C_ = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  P_ = function (n, a, t) {
    var o,
      i = C_[n];
    return (
      typeof i == "string"
        ? (o = i)
        : a === 1
        ? (o = i.one)
        : (o = i.other.replace("{{count}}", a.toString())),
      t != null && t.addSuffix
        ? t.comparison && t.comparison > 0
          ? "in " + o
          : o + " ago"
        : o
    );
  };
function Yo(e) {
  return function () {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = n.width ? String(n.width) : e.defaultWidth,
      t = e.formats[a] || e.formats[e.defaultWidth];
    return t;
  };
}
var I_ = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  E_ = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  D_ = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  M_ = {
    date: Yo({ formats: I_, defaultWidth: "full" }),
    time: Yo({ formats: E_, defaultWidth: "full" }),
    dateTime: Yo({ formats: D_, defaultWidth: "full" }),
  },
  O_ = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  A_ = function (n, a, t, o) {
    return O_[n];
  };
function Cn(e) {
  return function (n, a) {
    var t = a != null && a.context ? String(a.context) : "standalone",
      o;
    if (t === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth,
        r = a != null && a.width ? String(a.width) : i;
      o = e.formattingValues[r] || e.formattingValues[i];
    } else {
      var l = e.defaultWidth,
        s = a != null && a.width ? String(a.width) : e.defaultWidth;
      o = e.values[s] || e.values[l];
    }
    var d = e.argumentCallback ? e.argumentCallback(n) : n;
    return o[d];
  };
}
var B_ = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  L_ = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  x_ = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  R_ = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  N_ = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  H_ = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  V_ = function (n, a) {
    var t = Number(n),
      o = t % 100;
    if (o > 20 || o < 10)
      switch (o % 10) {
        case 1:
          return t + "st";
        case 2:
          return t + "nd";
        case 3:
          return t + "rd";
      }
    return t + "th";
  },
  U_ = {
    ordinalNumber: V_,
    era: Cn({ values: B_, defaultWidth: "wide" }),
    quarter: Cn({
      values: L_,
      defaultWidth: "wide",
      argumentCallback: function (n) {
        return n - 1;
      },
    }),
    month: Cn({ values: x_, defaultWidth: "wide" }),
    day: Cn({ values: R_, defaultWidth: "wide" }),
    dayPeriod: Cn({
      values: N_,
      defaultWidth: "wide",
      formattingValues: H_,
      defaultFormattingWidth: "wide",
    }),
  };
function Pn(e) {
  return function (n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = a.width,
      o = (t && e.matchPatterns[t]) || e.matchPatterns[e.defaultMatchWidth],
      i = n.match(o);
    if (!i) return null;
    var r = i[0],
      l = (t && e.parsePatterns[t]) || e.parsePatterns[e.defaultParseWidth],
      s = Array.isArray(l)
        ? $_(l, function (m) {
            return m.test(r);
          })
        : Y_(l, function (m) {
            return m.test(r);
          }),
      d;
    (d = e.valueCallback ? e.valueCallback(s) : s),
      (d = a.valueCallback ? a.valueCallback(d) : d);
    var g = n.slice(r.length);
    return { value: d, rest: g };
  };
}
function Y_(e, n) {
  for (var a in e) if (e.hasOwnProperty(a) && n(e[a])) return a;
}
function $_(e, n) {
  for (var a = 0; a < e.length; a++) if (n(e[a])) return a;
}
function F_(e) {
  return function (n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = n.match(e.matchPattern);
    if (!t) return null;
    var o = t[0],
      i = n.match(e.parsePattern);
    if (!i) return null;
    var r = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    r = a.valueCallback ? a.valueCallback(r) : r;
    var l = n.slice(o.length);
    return { value: r, rest: l };
  };
}
var W_ = /^(\d+)(th|st|nd|rd)?/i,
  G_ = /\d+/i,
  q_ = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  j_ = { any: [/^b/i, /^(a|c)/i] },
  z_ = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  K_ = { any: [/1/i, /2/i, /3/i, /4/i] },
  Q_ = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  X_ = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  Z_ = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  J_ = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  e0 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  t0 = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  a0 = {
    ordinalNumber: F_({
      matchPattern: W_,
      parsePattern: G_,
      valueCallback: function (n) {
        return parseInt(n, 10);
      },
    }),
    era: Pn({
      matchPatterns: q_,
      defaultMatchWidth: "wide",
      parsePatterns: j_,
      defaultParseWidth: "any",
    }),
    quarter: Pn({
      matchPatterns: z_,
      defaultMatchWidth: "wide",
      parsePatterns: K_,
      defaultParseWidth: "any",
      valueCallback: function (n) {
        return n + 1;
      },
    }),
    month: Pn({
      matchPatterns: Q_,
      defaultMatchWidth: "wide",
      parsePatterns: X_,
      defaultParseWidth: "any",
    }),
    day: Pn({
      matchPatterns: Z_,
      defaultMatchWidth: "wide",
      parsePatterns: J_,
      defaultParseWidth: "any",
    }),
    dayPeriod: Pn({
      matchPatterns: e0,
      defaultMatchWidth: "any",
      parsePatterns: t0,
      defaultParseWidth: "any",
    }),
  },
  Xs = {
    code: "en-US",
    formatDistance: P_,
    formatLong: M_,
    formatRelative: A_,
    localize: U_,
    match: a0,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  },
  n0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  o0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  r0 = /^'([^]*?)'?$/,
  i0 = /''/g,
  l0 = /[a-zA-Z]/;
function Pa(e, n, a) {
  var t, o, i, r, l, s, d, g, m, v, p, b, _, T, y, w, O, C;
  ke(2, arguments);
  var x = String(n),
    F = va(),
    Y =
      (t = (o = a?.locale) !== null && o !== void 0 ? o : F.locale) !== null &&
      t !== void 0
        ? t
        : Xs,
    j = De(
      (i =
        (r =
          (l =
            (s = a?.firstWeekContainsDate) !== null && s !== void 0
              ? s
              : a == null ||
                (d = a.locale) === null ||
                d === void 0 ||
                (g = d.options) === null ||
                g === void 0
              ? void 0
              : g.firstWeekContainsDate) !== null && l !== void 0
            ? l
            : F.firstWeekContainsDate) !== null && r !== void 0
          ? r
          : (m = F.locale) === null ||
            m === void 0 ||
            (v = m.options) === null ||
            v === void 0
          ? void 0
          : v.firstWeekContainsDate) !== null && i !== void 0
        ? i
        : 1
    );
  if (!(j >= 1 && j <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var q = De(
    (p =
      (b =
        (_ =
          (T = a?.weekStartsOn) !== null && T !== void 0
            ? T
            : a == null ||
              (y = a.locale) === null ||
              y === void 0 ||
              (w = y.options) === null ||
              w === void 0
            ? void 0
            : w.weekStartsOn) !== null && _ !== void 0
          ? _
          : F.weekStartsOn) !== null && b !== void 0
        ? b
        : (O = F.locale) === null ||
          O === void 0 ||
          (C = O.options) === null ||
          C === void 0
        ? void 0
        : C.weekStartsOn) !== null && p !== void 0
      ? p
      : 0
  );
  if (!(q >= 0 && q <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!Y.localize)
    throw new RangeError("locale must contain localize property");
  if (!Y.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var S = Pe(e);
  if (!xn(S)) throw new RangeError("Invalid time value");
  var B = po(S),
    $ = Ws(S, B),
    z = {
      firstWeekContainsDate: j,
      weekStartsOn: q,
      locale: Y,
      _originalDate: S,
    },
    N = x
      .match(o0)
      .map(function (I) {
        var H = I[0];
        if (H === "p" || H === "P") {
          var A = _r[H];
          return A(I, Y.formatLong);
        }
        return I;
      })
      .join("")
      .match(n0)
      .map(function (I) {
        if (I === "''") return "'";
        var H = I[0];
        if (H === "'") return s0(I);
        var A = w_[H];
        if (A)
          return (
            !(a != null && a.useAdditionalWeekYearTokens) &&
              Qs(I) &&
              ho(I, n, String(e)),
            !(a != null && a.useAdditionalDayOfYearTokens) &&
              Ks(I) &&
              ho(I, n, String(e)),
            A($, I, Y.localize, z)
          );
        if (H.match(l0))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              H +
              "`"
          );
        return I;
      })
      .join("");
  return N;
}
function s0(e) {
  var n = e.match(r0);
  return n ? n[1].replace(i0, "'") : e;
}
function u0(e, n) {
  if (e == null)
    throw new TypeError(
      "assign requires that input parameter not be null or undefined"
    );
  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
  return e;
}
function c0(e) {
  ke(1, arguments);
  var n = Pe(e),
    a = n.getDay();
  return a;
}
function d0(e) {
  ke(1, arguments);
  var n = Pe(e),
    a = n.getFullYear(),
    t = n.getMonth(),
    o = new Date(0);
  return o.setFullYear(a, t + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function Jt(e) {
  ke(1, arguments);
  var n = Pe(e),
    a = n.getHours();
  return a;
}
var m0 = 6048e5;
function g0(e) {
  ke(1, arguments);
  var n = Pe(e),
    a = vo(n).getTime() - i_(n).getTime();
  return Math.round(a / m0) + 1;
}
function ma(e) {
  ke(1, arguments);
  var n = Pe(e),
    a = n.getMinutes();
  return a;
}
function $e(e) {
  ke(1, arguments);
  var n = Pe(e),
    a = n.getMonth();
  return a;
}
function mn(e) {
  ke(1, arguments);
  var n = Pe(e),
    a = n.getSeconds();
  return a;
}
function v0(e, n) {
  var a, t, o, i, r, l, s, d;
  ke(1, arguments);
  var g = Pe(e),
    m = g.getFullYear(),
    v = va(),
    p = De(
      (a =
        (t =
          (o =
            (i = n?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (l = r.options) === null ||
                l === void 0
              ? void 0
              : l.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : v.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (s = v.locale) === null ||
            s === void 0 ||
            (d = s.options) === null ||
            d === void 0
          ? void 0
          : d.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    );
  if (!(p >= 1 && p <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var b = new Date(0);
  b.setFullYear(m + 1, 0, p), b.setHours(0, 0, 0, 0);
  var _ = $a(b, n),
    T = new Date(0);
  T.setFullYear(m, 0, p), T.setHours(0, 0, 0, 0);
  var y = $a(T, n);
  return g.getTime() >= _.getTime()
    ? m + 1
    : g.getTime() >= y.getTime()
    ? m
    : m - 1;
}
function p0(e, n) {
  var a, t, o, i, r, l, s, d;
  ke(1, arguments);
  var g = va(),
    m = De(
      (a =
        (t =
          (o =
            (i = n?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (l = r.options) === null ||
                l === void 0
              ? void 0
              : l.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : g.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (s = g.locale) === null ||
            s === void 0 ||
            (d = s.options) === null ||
            d === void 0
          ? void 0
          : d.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    ),
    v = v0(e, n),
    p = new Date(0);
  p.setFullYear(v, 0, m), p.setHours(0, 0, 0, 0);
  var b = $a(p, n);
  return b;
}
var h0 = 6048e5;
function f0(e, n) {
  ke(1, arguments);
  var a = Pe(e),
    t = $a(a, n).getTime() - p0(a, n).getTime();
  return Math.round(t / h0) + 1;
}
function Re(e) {
  return ke(1, arguments), Pe(e).getFullYear();
}
function Fn(e, n) {
  ke(2, arguments);
  var a = Pe(e),
    t = Pe(n);
  return a.getTime() > t.getTime();
}
function Wn(e, n) {
  ke(2, arguments);
  var a = Pe(e),
    t = Pe(n);
  return a.getTime() < t.getTime();
}
function nn(e, n) {
  ke(2, arguments);
  var a = Pe(e),
    t = Pe(n);
  return a.getTime() === t.getTime();
}
function Dl(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var a = 0, t = new Array(n); a < n; a++) t[a] = e[a];
  return t;
}
function b0(e, n) {
  if (e) {
    if (typeof e == "string") return Dl(e, n);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (a === "Object" && e.constructor && (a = e.constructor.name),
      a === "Map" || a === "Set")
    )
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Dl(e, n);
  }
}
function Ml(e, n) {
  var a = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!a) {
    if (Array.isArray(e) || (a = b0(e)) || n) {
      a && (e = a);
      var t = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
        },
        e: function (d) {
          throw d;
        },
        f: o,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0,
    r = !1,
    l;
  return {
    s: function () {
      a = a.call(e);
    },
    n: function () {
      var d = a.next();
      return (i = d.done), d;
    },
    e: function (d) {
      (r = !0), (l = d);
    },
    f: function () {
      try {
        !i && a.return != null && a.return();
      } finally {
        if (r) throw l;
      }
    },
  };
}
function _e(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function wr(e, n) {
  return (
    (wr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, o) {
          return (t.__proto__ = o), t;
        }),
    wr(e, n)
  );
}
function Fe(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(n && n.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    n && wr(e, n);
}
function fo(e) {
  return (
    (fo = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (a) {
          return a.__proto__ || Object.getPrototypeOf(a);
        }),
    fo(e)
  );
}
function Zs() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (Zs = function () {
    return !!e;
  })();
}
function y0(e, n) {
  if (n && (jt(n) === "object" || typeof n == "function")) return n;
  if (n !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return _e(e);
}
function We(e) {
  var n = Zs();
  return function () {
    var t = fo(e),
      o;
    if (n) {
      var i = fo(this).constructor;
      o = Reflect.construct(t, arguments, i);
    } else o = t.apply(this, arguments);
    return y0(this, o);
  };
}
function Ve(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function _0(e, n) {
  if (jt(e) != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var t = a.call(e, n);
    if (jt(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Js(e) {
  var n = _0(e, "string");
  return jt(n) == "symbol" ? n : String(n);
}
function w0(e, n) {
  for (var a = 0; a < n.length; a++) {
    var t = n[a];
    (t.enumerable = t.enumerable || !1),
      (t.configurable = !0),
      "value" in t && (t.writable = !0),
      Object.defineProperty(e, Js(t.key), t);
  }
}
function Ue(e, n, a) {
  return (
    n && w0(e.prototype, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function fe(e, n, a) {
  return (
    (n = Js(n)),
    n in e
      ? Object.defineProperty(e, n, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = a),
    e
  );
}
var k0 = 10,
  eu = (function () {
    function e() {
      Ve(this, e), fe(this, "priority", void 0), fe(this, "subPriority", 0);
    }
    return (
      Ue(e, [
        {
          key: "validate",
          value: function (a, t) {
            return !0;
          },
        },
      ]),
      e
    );
  })(),
  S0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a(t, o, i, r, l) {
      var s;
      return (
        Ve(this, a),
        (s = n.call(this)),
        (s.value = t),
        (s.validateValue = o),
        (s.setValue = i),
        (s.priority = r),
        l && (s.subPriority = l),
        s
      );
    }
    return (
      Ue(a, [
        {
          key: "validate",
          value: function (o, i) {
            return this.validateValue(o, this.value, i);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return this.setValue(o, i, this.value, r);
          },
        },
      ]),
      a
    );
  })(eu),
  T0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", k0),
        fe(_e(t), "subPriority", -1),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "set",
          value: function (o, i) {
            if (i.timestampIsSet) return o;
            var r = new Date(0);
            return (
              r.setFullYear(
                o.getUTCFullYear(),
                o.getUTCMonth(),
                o.getUTCDate()
              ),
              r.setHours(
                o.getUTCHours(),
                o.getUTCMinutes(),
                o.getUTCSeconds(),
                o.getUTCMilliseconds()
              ),
              r
            );
          },
        },
      ]),
      a
    );
  })(eu),
  qe = (function () {
    function e() {
      Ve(this, e),
        fe(this, "incompatibleTokens", void 0),
        fe(this, "priority", void 0),
        fe(this, "subPriority", void 0);
    }
    return (
      Ue(e, [
        {
          key: "run",
          value: function (a, t, o, i) {
            var r = this.parse(a, t, o, i);
            return r
              ? {
                  setter: new S0(
                    r.value,
                    this.validate,
                    this.set,
                    this.priority,
                    this.subPriority
                  ),
                  rest: r.rest,
                }
              : null;
          },
        },
        {
          key: "validate",
          value: function (a, t, o) {
            return !0;
          },
        },
      ]),
      e
    );
  })(),
  C0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 140),
        fe(_e(t), "incompatibleTokens", ["R", "u", "t", "T"]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "G":
              case "GG":
              case "GGG":
                return (
                  r.era(o, { width: "abbreviated" }) ||
                  r.era(o, { width: "narrow" })
                );
              case "GGGGG":
                return r.era(o, { width: "narrow" });
              case "GGGG":
              default:
                return (
                  r.era(o, { width: "wide" }) ||
                  r.era(o, { width: "abbreviated" }) ||
                  r.era(o, { width: "narrow" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return (
              (i.era = r),
              o.setUTCFullYear(r, 0, 1),
              o.setUTCHours(0, 0, 0, 0),
              o
            );
          },
        },
      ]),
      a
    );
  })(qe),
  mt = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/,
  },
  sa = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
  };
function gt(e, n) {
  return e && { value: n(e.value), rest: e.rest };
}
function it(e, n) {
  var a = n.match(e);
  return a ? { value: parseInt(a[0], 10), rest: n.slice(a[0].length) } : null;
}
function ua(e, n) {
  var a = n.match(e);
  if (!a) return null;
  if (a[0] === "Z") return { value: 0, rest: n.slice(1) };
  var t = a[1] === "+" ? 1 : -1,
    o = a[2] ? parseInt(a[2], 10) : 0,
    i = a[3] ? parseInt(a[3], 10) : 0,
    r = a[5] ? parseInt(a[5], 10) : 0;
  return { value: t * (o * Kr + i * zr + r * c_), rest: n.slice(a[0].length) };
}
function tu(e) {
  return it(mt.anyDigitsSigned, e);
}
function ct(e, n) {
  switch (e) {
    case 1:
      return it(mt.singleDigit, n);
    case 2:
      return it(mt.twoDigits, n);
    case 3:
      return it(mt.threeDigits, n);
    case 4:
      return it(mt.fourDigits, n);
    default:
      return it(new RegExp("^\\d{1," + e + "}"), n);
  }
}
function bo(e, n) {
  switch (e) {
    case 1:
      return it(mt.singleDigitSigned, n);
    case 2:
      return it(mt.twoDigitsSigned, n);
    case 3:
      return it(mt.threeDigitsSigned, n);
    case 4:
      return it(mt.fourDigitsSigned, n);
    default:
      return it(new RegExp("^-?\\d{1," + e + "}"), n);
  }
}
function Xr(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function au(e, n) {
  var a = n > 0,
    t = a ? n : 1 - n,
    o;
  if (t <= 50) o = e || 100;
  else {
    var i = t + 50,
      r = Math.floor(i / 100) * 100,
      l = e >= i % 100;
    o = e + r - (l ? 100 : 0);
  }
  return a ? o : 1 - o;
}
function nu(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
var P0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 130),
        fe(_e(t), "incompatibleTokens", [
          "Y",
          "R",
          "u",
          "w",
          "I",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            var l = function (d) {
              return { year: d, isTwoDigitYear: i === "yy" };
            };
            switch (i) {
              case "y":
                return gt(ct(4, o), l);
              case "yo":
                return gt(r.ordinalNumber(o, { unit: "year" }), l);
              default:
                return gt(ct(i.length, o), l);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i.isTwoDigitYear || i.year > 0;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            var l = o.getUTCFullYear();
            if (r.isTwoDigitYear) {
              var s = au(r.year, l);
              return o.setUTCFullYear(s, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
            }
            var d = !("era" in i) || i.era === 1 ? r.year : 1 - r.year;
            return o.setUTCFullYear(d, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  I0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 130),
        fe(_e(t), "incompatibleTokens", [
          "y",
          "R",
          "u",
          "Q",
          "q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "i",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            var l = function (d) {
              return { year: d, isTwoDigitYear: i === "YY" };
            };
            switch (i) {
              case "Y":
                return gt(ct(4, o), l);
              case "Yo":
                return gt(r.ordinalNumber(o, { unit: "year" }), l);
              default:
                return gt(ct(i.length, o), l);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i.isTwoDigitYear || i.year > 0;
          },
        },
        {
          key: "set",
          value: function (o, i, r, l) {
            var s = Qr(o, l);
            if (r.isTwoDigitYear) {
              var d = au(r.year, s);
              return (
                o.setUTCFullYear(d, 0, l.firstWeekContainsDate),
                o.setUTCHours(0, 0, 0, 0),
                Fa(o, l)
              );
            }
            var g = !("era" in i) || i.era === 1 ? r.year : 1 - r.year;
            return (
              o.setUTCFullYear(g, 0, l.firstWeekContainsDate),
              o.setUTCHours(0, 0, 0, 0),
              Fa(o, l)
            );
          },
        },
      ]),
      a
    );
  })(qe),
  E0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 130),
        fe(_e(t), "incompatibleTokens", [
          "G",
          "y",
          "Y",
          "u",
          "Q",
          "q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i) {
            return bo(i === "R" ? 4 : i.length, o);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            var l = new Date(0);
            return l.setUTCFullYear(r, 0, 4), l.setUTCHours(0, 0, 0, 0), dn(l);
          },
        },
      ]),
      a
    );
  })(qe),
  D0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 130),
        fe(_e(t), "incompatibleTokens", [
          "G",
          "y",
          "Y",
          "R",
          "w",
          "I",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i) {
            return bo(i === "u" ? 4 : i.length, o);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCFullYear(r, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  M0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 120),
        fe(_e(t), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "Q":
              case "QQ":
                return ct(i.length, o);
              case "Qo":
                return r.ordinalNumber(o, { unit: "quarter" });
              case "QQQ":
                return (
                  r.quarter(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) || r.quarter(o, { width: "narrow", context: "formatting" })
                );
              case "QQQQQ":
                return r.quarter(o, { width: "narrow", context: "formatting" });
              case "QQQQ":
              default:
                return (
                  r.quarter(o, { width: "wide", context: "formatting" }) ||
                  r.quarter(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.quarter(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 4;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMonth((r - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  O0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 120),
        fe(_e(t), "incompatibleTokens", [
          "Y",
          "R",
          "Q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "q":
              case "qq":
                return ct(i.length, o);
              case "qo":
                return r.ordinalNumber(o, { unit: "quarter" });
              case "qqq":
                return (
                  r.quarter(o, {
                    width: "abbreviated",
                    context: "standalone",
                  }) || r.quarter(o, { width: "narrow", context: "standalone" })
                );
              case "qqqqq":
                return r.quarter(o, { width: "narrow", context: "standalone" });
              case "qqqq":
              default:
                return (
                  r.quarter(o, { width: "wide", context: "standalone" }) ||
                  r.quarter(o, {
                    width: "abbreviated",
                    context: "standalone",
                  }) ||
                  r.quarter(o, { width: "narrow", context: "standalone" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 4;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMonth((r - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  A0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "L",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        fe(_e(t), "priority", 110),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            var l = function (d) {
              return d - 1;
            };
            switch (i) {
              case "M":
                return gt(it(mt.month, o), l);
              case "MM":
                return gt(ct(2, o), l);
              case "Mo":
                return gt(r.ordinalNumber(o, { unit: "month" }), l);
              case "MMM":
                return (
                  r.month(o, { width: "abbreviated", context: "formatting" }) ||
                  r.month(o, { width: "narrow", context: "formatting" })
                );
              case "MMMMM":
                return r.month(o, { width: "narrow", context: "formatting" });
              case "MMMM":
              default:
                return (
                  r.month(o, { width: "wide", context: "formatting" }) ||
                  r.month(o, { width: "abbreviated", context: "formatting" }) ||
                  r.month(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 11;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMonth(r, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  B0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 110),
        fe(_e(t), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "M",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            var l = function (d) {
              return d - 1;
            };
            switch (i) {
              case "L":
                return gt(it(mt.month, o), l);
              case "LL":
                return gt(ct(2, o), l);
              case "Lo":
                return gt(r.ordinalNumber(o, { unit: "month" }), l);
              case "LLL":
                return (
                  r.month(o, { width: "abbreviated", context: "standalone" }) ||
                  r.month(o, { width: "narrow", context: "standalone" })
                );
              case "LLLLL":
                return r.month(o, { width: "narrow", context: "standalone" });
              case "LLLL":
              default:
                return (
                  r.month(o, { width: "wide", context: "standalone" }) ||
                  r.month(o, { width: "abbreviated", context: "standalone" }) ||
                  r.month(o, { width: "narrow", context: "standalone" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 11;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMonth(r, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe);
function L0(e, n, a) {
  ke(2, arguments);
  var t = Pe(e),
    o = De(n),
    i = js(t, a) - o;
  return t.setUTCDate(t.getUTCDate() - i * 7), t;
}
var x0 = (function (e) {
  Fe(a, e);
  var n = We(a);
  function a() {
    var t;
    Ve(this, a);
    for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
      i[r] = arguments[r];
    return (
      (t = n.call.apply(n, [this].concat(i))),
      fe(_e(t), "priority", 100),
      fe(_e(t), "incompatibleTokens", [
        "y",
        "R",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "i",
        "t",
        "T",
      ]),
      t
    );
  }
  return (
    Ue(a, [
      {
        key: "parse",
        value: function (o, i, r) {
          switch (i) {
            case "w":
              return it(mt.week, o);
            case "wo":
              return r.ordinalNumber(o, { unit: "week" });
            default:
              return ct(i.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 1 && i <= 53;
        },
      },
      {
        key: "set",
        value: function (o, i, r, l) {
          return Fa(L0(o, r, l), l);
        },
      },
    ]),
    a
  );
})(qe);
function R0(e, n) {
  ke(2, arguments);
  var a = Pe(e),
    t = De(n),
    o = qs(a) - t;
  return a.setUTCDate(a.getUTCDate() - o * 7), a;
}
var N0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 100),
        fe(_e(t), "incompatibleTokens", [
          "y",
          "Y",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "I":
                return it(mt.week, o);
              case "Io":
                return r.ordinalNumber(o, { unit: "week" });
              default:
                return ct(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 53;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return dn(R0(o, r));
          },
        },
      ]),
      a
    );
  })(qe),
  H0 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  V0 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  U0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 90),
        fe(_e(t), "subPriority", 1),
        fe(_e(t), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "d":
                return it(mt.date, o);
              case "do":
                return r.ordinalNumber(o, { unit: "date" });
              default:
                return ct(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            var r = o.getUTCFullYear(),
              l = nu(r),
              s = o.getUTCMonth();
            return l ? i >= 1 && i <= V0[s] : i >= 1 && i <= H0[s];
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCDate(r), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  Y0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 90),
        fe(_e(t), "subpriority", 1),
        fe(_e(t), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "E",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "D":
              case "DD":
                return it(mt.dayOfYear, o);
              case "Do":
                return r.ordinalNumber(o, { unit: "date" });
              default:
                return ct(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            var r = o.getUTCFullYear(),
              l = nu(r);
            return l ? i >= 1 && i <= 366 : i >= 1 && i <= 365;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMonth(0, r), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe);
function Zr(e, n, a) {
  var t, o, i, r, l, s, d, g;
  ke(2, arguments);
  var m = va(),
    v = De(
      (t =
        (o =
          (i =
            (r = a?.weekStartsOn) !== null && r !== void 0
              ? r
              : a == null ||
                (l = a.locale) === null ||
                l === void 0 ||
                (s = l.options) === null ||
                s === void 0
              ? void 0
              : s.weekStartsOn) !== null && i !== void 0
            ? i
            : m.weekStartsOn) !== null && o !== void 0
          ? o
          : (d = m.locale) === null ||
            d === void 0 ||
            (g = d.options) === null ||
            g === void 0
          ? void 0
          : g.weekStartsOn) !== null && t !== void 0
        ? t
        : 0
    );
  if (!(v >= 0 && v <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Pe(e),
    b = De(n),
    _ = p.getUTCDay(),
    T = b % 7,
    y = (T + 7) % 7,
    w = (y < v ? 7 : 0) + b - _;
  return p.setUTCDate(p.getUTCDate() + w), p;
}
var $0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 90),
        fe(_e(t), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "E":
              case "EE":
              case "EEE":
                return (
                  r.day(o, { width: "abbreviated", context: "formatting" }) ||
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
              case "EEEEE":
                return r.day(o, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return (
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
              case "EEEE":
              default:
                return (
                  r.day(o, { width: "wide", context: "formatting" }) ||
                  r.day(o, { width: "abbreviated", context: "formatting" }) ||
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 6;
          },
        },
        {
          key: "set",
          value: function (o, i, r, l) {
            return (o = Zr(o, r, l)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  F0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 90),
        fe(_e(t), "incompatibleTokens", [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "E",
          "i",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r, l) {
            var s = function (g) {
              var m = Math.floor((g - 1) / 7) * 7;
              return ((g + l.weekStartsOn + 6) % 7) + m;
            };
            switch (i) {
              case "e":
              case "ee":
                return gt(ct(i.length, o), s);
              case "eo":
                return gt(r.ordinalNumber(o, { unit: "day" }), s);
              case "eee":
                return (
                  r.day(o, { width: "abbreviated", context: "formatting" }) ||
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
              case "eeeee":
                return r.day(o, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return (
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
              case "eeee":
              default:
                return (
                  r.day(o, { width: "wide", context: "formatting" }) ||
                  r.day(o, { width: "abbreviated", context: "formatting" }) ||
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 6;
          },
        },
        {
          key: "set",
          value: function (o, i, r, l) {
            return (o = Zr(o, r, l)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  W0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 90),
        fe(_e(t), "incompatibleTokens", [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "E",
          "i",
          "e",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r, l) {
            var s = function (g) {
              var m = Math.floor((g - 1) / 7) * 7;
              return ((g + l.weekStartsOn + 6) % 7) + m;
            };
            switch (i) {
              case "c":
              case "cc":
                return gt(ct(i.length, o), s);
              case "co":
                return gt(r.ordinalNumber(o, { unit: "day" }), s);
              case "ccc":
                return (
                  r.day(o, { width: "abbreviated", context: "standalone" }) ||
                  r.day(o, { width: "short", context: "standalone" }) ||
                  r.day(o, { width: "narrow", context: "standalone" })
                );
              case "ccccc":
                return r.day(o, { width: "narrow", context: "standalone" });
              case "cccccc":
                return (
                  r.day(o, { width: "short", context: "standalone" }) ||
                  r.day(o, { width: "narrow", context: "standalone" })
                );
              case "cccc":
              default:
                return (
                  r.day(o, { width: "wide", context: "standalone" }) ||
                  r.day(o, { width: "abbreviated", context: "standalone" }) ||
                  r.day(o, { width: "short", context: "standalone" }) ||
                  r.day(o, { width: "narrow", context: "standalone" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 6;
          },
        },
        {
          key: "set",
          value: function (o, i, r, l) {
            return (o = Zr(o, r, l)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe);
function G0(e, n) {
  ke(2, arguments);
  var a = De(n);
  a % 7 === 0 && (a = a - 7);
  var t = 1,
    o = Pe(e),
    i = o.getUTCDay(),
    r = a % 7,
    l = (r + 7) % 7,
    s = (l < t ? 7 : 0) + a - i;
  return o.setUTCDate(o.getUTCDate() + s), o;
}
var q0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 90),
        fe(_e(t), "incompatibleTokens", [
          "y",
          "Y",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "E",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            var l = function (d) {
              return d === 0 ? 7 : d;
            };
            switch (i) {
              case "i":
              case "ii":
                return ct(i.length, o);
              case "io":
                return r.ordinalNumber(o, { unit: "day" });
              case "iii":
                return gt(
                  r.day(o, { width: "abbreviated", context: "formatting" }) ||
                    r.day(o, { width: "short", context: "formatting" }) ||
                    r.day(o, { width: "narrow", context: "formatting" }),
                  l
                );
              case "iiiii":
                return gt(
                  r.day(o, { width: "narrow", context: "formatting" }),
                  l
                );
              case "iiiiii":
                return gt(
                  r.day(o, { width: "short", context: "formatting" }) ||
                    r.day(o, { width: "narrow", context: "formatting" }),
                  l
                );
              case "iiii":
              default:
                return gt(
                  r.day(o, { width: "wide", context: "formatting" }) ||
                    r.day(o, { width: "abbreviated", context: "formatting" }) ||
                    r.day(o, { width: "short", context: "formatting" }) ||
                    r.day(o, { width: "narrow", context: "formatting" }),
                  l
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 7;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return (o = G0(o, r)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  j0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 80),
        fe(_e(t), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "a":
              case "aa":
              case "aaa":
                return (
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
              case "aaaaa":
                return r.dayPeriod(o, {
                  width: "narrow",
                  context: "formatting",
                });
              case "aaaa":
              default:
                return (
                  r.dayPeriod(o, { width: "wide", context: "formatting" }) ||
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCHours(Xr(r), 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  z0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 80),
        fe(_e(t), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "b":
              case "bb":
              case "bbb":
                return (
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
              case "bbbbb":
                return r.dayPeriod(o, {
                  width: "narrow",
                  context: "formatting",
                });
              case "bbbb":
              default:
                return (
                  r.dayPeriod(o, { width: "wide", context: "formatting" }) ||
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCHours(Xr(r), 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  K0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 80),
        fe(_e(t), "incompatibleTokens", ["a", "b", "t", "T"]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "B":
              case "BB":
              case "BBB":
                return (
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
              case "BBBBB":
                return r.dayPeriod(o, {
                  width: "narrow",
                  context: "formatting",
                });
              case "BBBB":
              default:
                return (
                  r.dayPeriod(o, { width: "wide", context: "formatting" }) ||
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCHours(Xr(r), 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  Q0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 70),
        fe(_e(t), "incompatibleTokens", ["H", "K", "k", "t", "T"]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "h":
                return it(mt.hour12h, o);
              case "ho":
                return r.ordinalNumber(o, { unit: "hour" });
              default:
                return ct(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 12;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            var l = o.getUTCHours() >= 12;
            return (
              l && r < 12
                ? o.setUTCHours(r + 12, 0, 0, 0)
                : !l && r === 12
                ? o.setUTCHours(0, 0, 0, 0)
                : o.setUTCHours(r, 0, 0, 0),
              o
            );
          },
        },
      ]),
      a
    );
  })(qe),
  X0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 70),
        fe(_e(t), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "H":
                return it(mt.hour23h, o);
              case "Ho":
                return r.ordinalNumber(o, { unit: "hour" });
              default:
                return ct(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 23;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCHours(r, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  Z0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 70),
        fe(_e(t), "incompatibleTokens", ["h", "H", "k", "t", "T"]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "K":
                return it(mt.hour11h, o);
              case "Ko":
                return r.ordinalNumber(o, { unit: "hour" });
              default:
                return ct(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 11;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            var l = o.getUTCHours() >= 12;
            return (
              l && r < 12
                ? o.setUTCHours(r + 12, 0, 0, 0)
                : o.setUTCHours(r, 0, 0, 0),
              o
            );
          },
        },
      ]),
      a
    );
  })(qe),
  J0 = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 70),
        fe(_e(t), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "k":
                return it(mt.hour24h, o);
              case "ko":
                return r.ordinalNumber(o, { unit: "hour" });
              default:
                return ct(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 24;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            var l = r <= 24 ? r % 24 : r;
            return o.setUTCHours(l, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  ew = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 60),
        fe(_e(t), "incompatibleTokens", ["t", "T"]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "m":
                return it(mt.minute, o);
              case "mo":
                return r.ordinalNumber(o, { unit: "minute" });
              default:
                return ct(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 59;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMinutes(r, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  tw = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 50),
        fe(_e(t), "incompatibleTokens", ["t", "T"]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "s":
                return it(mt.second, o);
              case "so":
                return r.ordinalNumber(o, { unit: "second" });
              default:
                return ct(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 59;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCSeconds(r, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  aw = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 30),
        fe(_e(t), "incompatibleTokens", ["t", "T"]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i) {
            var r = function (s) {
              return Math.floor(s * Math.pow(10, -i.length + 3));
            };
            return gt(ct(i.length, o), r);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMilliseconds(r), o;
          },
        },
      ]),
      a
    );
  })(qe),
  nw = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 10),
        fe(_e(t), "incompatibleTokens", ["t", "T", "x"]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i) {
            switch (i) {
              case "X":
                return ua(sa.basicOptionalMinutes, o);
              case "XX":
                return ua(sa.basic, o);
              case "XXXX":
                return ua(sa.basicOptionalSeconds, o);
              case "XXXXX":
                return ua(sa.extendedOptionalSeconds, o);
              case "XXX":
              default:
                return ua(sa.extended, o);
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return i.timestampIsSet ? o : new Date(o.getTime() - r);
          },
        },
      ]),
      a
    );
  })(qe),
  ow = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 10),
        fe(_e(t), "incompatibleTokens", ["t", "T", "X"]),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o, i) {
            switch (i) {
              case "x":
                return ua(sa.basicOptionalMinutes, o);
              case "xx":
                return ua(sa.basic, o);
              case "xxxx":
                return ua(sa.basicOptionalSeconds, o);
              case "xxxxx":
                return ua(sa.extendedOptionalSeconds, o);
              case "xxx":
              default:
                return ua(sa.extended, o);
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return i.timestampIsSet ? o : new Date(o.getTime() - r);
          },
        },
      ]),
      a
    );
  })(qe),
  rw = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 40),
        fe(_e(t), "incompatibleTokens", "*"),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o) {
            return tu(o);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return [new Date(r * 1e3), { timestampIsSet: !0 }];
          },
        },
      ]),
      a
    );
  })(qe),
  iw = (function (e) {
    Fe(a, e);
    var n = We(a);
    function a() {
      var t;
      Ve(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        fe(_e(t), "priority", 20),
        fe(_e(t), "incompatibleTokens", "*"),
        t
      );
    }
    return (
      Ue(a, [
        {
          key: "parse",
          value: function (o) {
            return tu(o);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return [new Date(r), { timestampIsSet: !0 }];
          },
        },
      ]),
      a
    );
  })(qe),
  lw = {
    G: new C0(),
    y: new P0(),
    Y: new I0(),
    R: new E0(),
    u: new D0(),
    Q: new M0(),
    q: new O0(),
    M: new A0(),
    L: new B0(),
    w: new x0(),
    I: new N0(),
    d: new U0(),
    D: new Y0(),
    E: new $0(),
    e: new F0(),
    c: new W0(),
    i: new q0(),
    a: new j0(),
    b: new z0(),
    B: new K0(),
    h: new Q0(),
    H: new X0(),
    K: new Z0(),
    k: new J0(),
    m: new ew(),
    s: new tw(),
    S: new aw(),
    X: new nw(),
    x: new ow(),
    t: new rw(),
    T: new iw(),
  },
  sw = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  uw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  cw = /^'([^]*?)'?$/,
  dw = /''/g,
  mw = /\S/,
  gw = /[a-zA-Z]/;
function kr(e, n, a, t) {
  var o, i, r, l, s, d, g, m, v, p, b, _, T, y;
  ke(3, arguments);
  var w = String(e),
    O = String(n),
    C = va(),
    x =
      (o = (i = void 0) !== null && i !== void 0 ? i : C.locale) !== null &&
      o !== void 0
        ? o
        : Xs;
  if (!x.match) throw new RangeError("locale must contain match property");
  var F = De(
    (r =
      (l =
        (s = (d = void 0) !== null && d !== void 0 ? d : void 0) !== null &&
        s !== void 0
          ? s
          : C.firstWeekContainsDate) !== null && l !== void 0
        ? l
        : (g = C.locale) === null ||
          g === void 0 ||
          (m = g.options) === null ||
          m === void 0
        ? void 0
        : m.firstWeekContainsDate) !== null && r !== void 0
      ? r
      : 1
  );
  if (!(F >= 1 && F <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var Y = De(
    (v =
      (p =
        (b = (_ = void 0) !== null && _ !== void 0 ? _ : void 0) !== null &&
        b !== void 0
          ? b
          : C.weekStartsOn) !== null && p !== void 0
        ? p
        : (T = C.locale) === null ||
          T === void 0 ||
          (y = T.options) === null ||
          y === void 0
        ? void 0
        : y.weekStartsOn) !== null && v !== void 0
      ? v
      : 0
  );
  if (!(Y >= 0 && Y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (O === "") return w === "" ? Pe(a) : new Date(NaN);
  var j = { firstWeekContainsDate: F, weekStartsOn: Y, locale: x },
    q = [new T0()],
    S = O.match(uw)
      .map(function (J) {
        var R = J[0];
        if (R in _r) {
          var D = _r[R];
          return D(J, x.formatLong);
        }
        return J;
      })
      .join("")
      .match(sw),
    B = [],
    $ = Ml(S),
    z;
  try {
    var N = function () {
      var R = z.value;
      !(t != null && t.useAdditionalWeekYearTokens) && Qs(R) && ho(R, O, e),
        !(t != null && t.useAdditionalDayOfYearTokens) && Ks(R) && ho(R, O, e);
      var D = R[0],
        pe = lw[D];
      if (pe) {
        var Se = pe.incompatibleTokens;
        if (Array.isArray(Se)) {
          var ge = B.find(function (ce) {
            return Se.includes(ce.token) || ce.token === D;
          });
          if (ge)
            throw new RangeError(
              "The format string mustn't contain `"
                .concat(ge.fullToken, "` and `")
                .concat(R, "` at the same time")
            );
        } else if (pe.incompatibleTokens === "*" && B.length > 0)
          throw new RangeError(
            "The format string mustn't contain `".concat(
              R,
              "` and any other token at the same time"
            )
          );
        B.push({ token: D, fullToken: R });
        var me = pe.run(w, R, x.match, j);
        if (!me) return { v: new Date(NaN) };
        q.push(me.setter), (w = me.rest);
      } else {
        if (D.match(gw))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              D +
              "`"
          );
        if (
          (R === "''" ? (R = "'") : D === "'" && (R = vw(R)),
          w.indexOf(R) === 0)
        )
          w = w.slice(R.length);
        else return { v: new Date(NaN) };
      }
    };
    for ($.s(); !(z = $.n()).done; ) {
      var I = N();
      if (jt(I) === "object") return I.v;
    }
  } catch (J) {
    $.e(J);
  } finally {
    $.f();
  }
  if (w.length > 0 && mw.test(w)) return new Date(NaN);
  var H = q
      .map(function (J) {
        return J.priority;
      })
      .sort(function (J, R) {
        return R - J;
      })
      .filter(function (J, R, D) {
        return D.indexOf(J) === R;
      })
      .map(function (J) {
        return q
          .filter(function (R) {
            return R.priority === J;
          })
          .sort(function (R, D) {
            return D.subPriority - R.subPriority;
          });
      })
      .map(function (J) {
        return J[0];
      }),
    A = Pe(a);
  if (isNaN(A.getTime())) return new Date(NaN);
  var G = Ws(A, po(A)),
    k = {},
    f = Ml(H),
    W;
  try {
    for (f.s(); !(W = f.n()).done; ) {
      var U = W.value;
      if (!U.validate(G, j)) return new Date(NaN);
      var Z = U.set(G, k, j);
      Array.isArray(Z) ? ((G = Z[0]), u0(k, Z[1])) : (G = Z);
    }
  } catch (J) {
    f.e(J);
  } finally {
    f.f();
  }
  return G;
}
function vw(e) {
  return e.match(cw)[1].replace(dw, "'");
}
function Ol(e, n) {
  ke(2, arguments);
  var a = $n(e),
    t = $n(n);
  return a.getTime() === t.getTime();
}
function pw(e, n) {
  ke(2, arguments);
  var a = De(n);
  return ha(e, -a);
}
function hw(e, n) {
  var a;
  ke(1, arguments);
  var t = De((a = void 0) !== null && a !== void 0 ? a : 2);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (
    !(
      typeof e == "string" ||
      Object.prototype.toString.call(e) === "[object String]"
    )
  )
    return new Date(NaN);
  var o = _w(e),
    i;
  if (o.date) {
    var r = ww(o.date, t);
    i = kw(r.restDateString, r.year);
  }
  if (!i || isNaN(i.getTime())) return new Date(NaN);
  var l = i.getTime(),
    s = 0,
    d;
  if (o.time && ((s = Sw(o.time)), isNaN(s))) return new Date(NaN);
  if (o.timezone) {
    if (((d = Tw(o.timezone)), isNaN(d))) return new Date(NaN);
  } else {
    var g = new Date(l + s),
      m = new Date(0);
    return (
      m.setFullYear(g.getUTCFullYear(), g.getUTCMonth(), g.getUTCDate()),
      m.setHours(
        g.getUTCHours(),
        g.getUTCMinutes(),
        g.getUTCSeconds(),
        g.getUTCMilliseconds()
      ),
      m
    );
  }
  return new Date(l + s + d);
}
var oo = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  fw = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  bw =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  yw = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function _w(e) {
  var n = {},
    a = e.split(oo.dateTimeDelimiter),
    t;
  if (a.length > 2) return n;
  if (
    (/:/.test(a[0])
      ? (t = a[0])
      : ((n.date = a[0]),
        (t = a[1]),
        oo.timeZoneDelimiter.test(n.date) &&
          ((n.date = e.split(oo.timeZoneDelimiter)[0]),
          (t = e.substr(n.date.length, e.length)))),
    t)
  ) {
    var o = oo.timezone.exec(t);
    o ? ((n.time = t.replace(o[1], "")), (n.timezone = o[1])) : (n.time = t);
  }
  return n;
}
function ww(e, n) {
  var a = new RegExp(
      "^(?:(\\d{4}|[+-]\\d{" +
        (4 + n) +
        "})|(\\d{2}|[+-]\\d{" +
        (2 + n) +
        "})$)"
    ),
    t = e.match(a);
  if (!t) return { year: NaN, restDateString: "" };
  var o = t[1] ? parseInt(t[1]) : null,
    i = t[2] ? parseInt(t[2]) : null;
  return {
    year: i === null ? o : i * 100,
    restDateString: e.slice((t[1] || t[2]).length),
  };
}
function kw(e, n) {
  if (n === null) return new Date(NaN);
  var a = e.match(fw);
  if (!a) return new Date(NaN);
  var t = !!a[4],
    o = In(a[1]),
    i = In(a[2]) - 1,
    r = In(a[3]),
    l = In(a[4]),
    s = In(a[5]) - 1;
  if (t) return Dw(n, l, s) ? Cw(n, l, s) : new Date(NaN);
  var d = new Date(0);
  return !Iw(n, i, r) || !Ew(n, o)
    ? new Date(NaN)
    : (d.setUTCFullYear(n, i, Math.max(o, r)), d);
}
function In(e) {
  return e ? parseInt(e) : 1;
}
function Sw(e) {
  var n = e.match(bw);
  if (!n) return NaN;
  var a = $o(n[1]),
    t = $o(n[2]),
    o = $o(n[3]);
  return Mw(a, t, o) ? a * Kr + t * zr + o * 1e3 : NaN;
}
function $o(e) {
  return (e && parseFloat(e.replace(",", "."))) || 0;
}
function Tw(e) {
  if (e === "Z") return 0;
  var n = e.match(yw);
  if (!n) return 0;
  var a = n[1] === "+" ? -1 : 1,
    t = parseInt(n[2]),
    o = (n[3] && parseInt(n[3])) || 0;
  return Ow(t, o) ? a * (t * Kr + o * zr) : NaN;
}
function Cw(e, n, a) {
  var t = new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var o = t.getUTCDay() || 7,
    i = (n - 1) * 7 + a + 1 - o;
  return t.setUTCDate(t.getUTCDate() + i), t;
}
var Pw = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ou(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function Iw(e, n, a) {
  return n >= 0 && n <= 11 && a >= 1 && a <= (Pw[n] || (ou(e) ? 29 : 28));
}
function Ew(e, n) {
  return n >= 1 && n <= (ou(e) ? 366 : 365);
}
function Dw(e, n, a) {
  return n >= 1 && n <= 53 && a >= 0 && a <= 6;
}
function Mw(e, n, a) {
  return e === 24
    ? n === 0 && a === 0
    : a >= 0 && a < 60 && n >= 0 && n < 60 && e >= 0 && e < 25;
}
function Ow(e, n) {
  return n >= 0 && n <= 59;
}
function ru(e, n) {
  ke(2, arguments);
  var a = Pe(e),
    t = De(n),
    o = a.getFullYear(),
    i = a.getDate(),
    r = new Date(0);
  r.setFullYear(o, t, 15), r.setHours(0, 0, 0, 0);
  var l = d0(r);
  return a.setMonth(t, Math.min(i, l)), a;
}
function at(e, n) {
  if ((ke(2, arguments), jt(n) !== "object" || n === null))
    throw new RangeError("values parameter must be an object");
  var a = Pe(e);
  return isNaN(a.getTime())
    ? new Date(NaN)
    : (n.year != null && a.setFullYear(n.year),
      n.month != null && (a = ru(a, n.month)),
      n.date != null && a.setDate(De(n.date)),
      n.hours != null && a.setHours(De(n.hours)),
      n.minutes != null && a.setMinutes(De(n.minutes)),
      n.seconds != null && a.setSeconds(De(n.seconds)),
      n.milliseconds != null && a.setMilliseconds(De(n.milliseconds)),
      a);
}
function iu(e, n) {
  ke(2, arguments);
  var a = Pe(e),
    t = De(n);
  return a.setHours(t), a;
}
function Jr(e, n) {
  ke(2, arguments);
  var a = Pe(e),
    t = De(n);
  return a.setMilliseconds(t), a;
}
function lu(e, n) {
  ke(2, arguments);
  var a = Pe(e),
    t = De(n);
  return a.setMinutes(t), a;
}
function ei(e, n) {
  ke(2, arguments);
  var a = Pe(e),
    t = De(n);
  return a.setSeconds(t), a;
}
function ca(e, n) {
  ke(2, arguments);
  var a = Pe(e),
    t = De(n);
  return isNaN(a.getTime()) ? new Date(NaN) : (a.setFullYear(t), a);
}
function gn(e, n) {
  ke(2, arguments);
  var a = De(n);
  return Zt(e, -a);
}
function Aw(e, n) {
  if ((ke(2, arguments), !n || jt(n) !== "object")) return new Date(NaN);
  var a = n.years ? De(n.years) : 0,
    t = n.months ? De(n.months) : 0,
    o = n.weeks ? De(n.weeks) : 0,
    i = n.days ? De(n.days) : 0,
    r = n.hours ? De(n.hours) : 0,
    l = n.minutes ? De(n.minutes) : 0,
    s = n.seconds ? De(n.seconds) : 0,
    d = gn(e, t + a * 12),
    g = pw(d, i + o * 7),
    m = l + r * 60,
    v = s + m * 60,
    p = v * 1e3,
    b = new Date(g.getTime() - p);
  return b;
}
function su(e, n) {
  ke(2, arguments);
  var a = De(n);
  return jr(e, -a);
}
function yn() {
  return (
    c(),
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        P("path", {
          d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z",
        }),
        P("path", {
          d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z",
        }),
        P("path", {
          d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z",
        }),
        P("path", {
          d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z",
        }),
      ]
    )
  );
}
yn.compatConfig = { MODE: 3 };
function uu() {
  return (
    c(),
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        P("path", {
          d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z",
        }),
        P("path", {
          d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z",
        }),
      ]
    )
  );
}
uu.compatConfig = { MODE: 3 };
function ti() {
  return (
    c(),
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        P("path", {
          d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z",
        }),
      ]
    )
  );
}
ti.compatConfig = { MODE: 3 };
function ai() {
  return (
    c(),
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        P("path", {
          d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z",
        }),
      ]
    )
  );
}
ai.compatConfig = { MODE: 3 };
function ni() {
  return (
    c(),
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        P("path", {
          d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z",
        }),
        P("path", {
          d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z",
        }),
      ]
    )
  );
}
ni.compatConfig = { MODE: 3 };
function oi() {
  return (
    c(),
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        P("path", {
          d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z",
        }),
      ]
    )
  );
}
oi.compatConfig = { MODE: 3 };
function ri() {
  return (
    c(),
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        P("path", {
          d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z",
        }),
      ]
    )
  );
}
ri.compatConfig = { MODE: 3 };
function ii(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var cu = { exports: {} };
(function (e) {
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(cu);
var Bw = cu.exports,
  Sr = { exports: {} };
(function (e, n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = a);
  function a(t) {
    if (t === null || t === !0 || t === !1) return NaN;
    var o = Number(t);
    return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
  }
  e.exports = n.default;
})(Sr, Sr.exports);
var Lw = Sr.exports;
const xw = ii(Lw);
var Tr = { exports: {} };
(function (e, n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = a);
  function a(t) {
    var o = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
    return o.setUTCFullYear(t.getFullYear()), t.getTime() - o.getTime();
  }
  e.exports = n.default;
})(Tr, Tr.exports);
var Rw = Tr.exports;
const Al = ii(Rw);
function Nw(e, n) {
  var a = Yw(n);
  return a.formatToParts ? Vw(a, e) : Uw(a, e);
}
var Hw = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 };
function Vw(e, n) {
  try {
    for (var a = e.formatToParts(n), t = [], o = 0; o < a.length; o++) {
      var i = Hw[a[o].type];
      i >= 0 && (t[i] = parseInt(a[o].value, 10));
    }
    return t;
  } catch (r) {
    if (r instanceof RangeError) return [NaN];
    throw r;
  }
}
function Uw(e, n) {
  var a = e.format(n).replace(/\u200E/g, ""),
    t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var Fo = {};
function Yw(e) {
  if (!Fo[e]) {
    var n = new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: "America/New_York",
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date("2014-06-25T04:00:00.123Z")),
      a =
        n === "06/25/2014, 00:00:00" || n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    Fo[e] = a
      ? new Intl.DateTimeFormat("en-US", {
          hour12: !1,
          timeZone: e,
          year: "numeric",
          month: "numeric",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      : new Intl.DateTimeFormat("en-US", {
          hourCycle: "h23",
          timeZone: e,
          year: "numeric",
          month: "numeric",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
  }
  return Fo[e];
}
function li(e, n, a, t, o, i, r) {
  var l = new Date(0);
  return l.setUTCFullYear(e, n, a), l.setUTCHours(t, o, i, r), l;
}
var Bl = 36e5,
  $w = 6e4,
  Wo = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/,
  };
function si(e, n, a) {
  var t, o;
  if (e === "" || ((t = Wo.timezoneZ.exec(e)), t)) return 0;
  var i;
  if (((t = Wo.timezoneHH.exec(e)), t))
    return (i = parseInt(t[1], 10)), Ll(i) ? -(i * Bl) : NaN;
  if (((t = Wo.timezoneHHMM.exec(e)), t)) {
    i = parseInt(t[1], 10);
    var r = parseInt(t[2], 10);
    return Ll(i, r) ? ((o = Math.abs(i) * Bl + r * $w), i > 0 ? -o : o) : NaN;
  }
  if (Gw(e)) {
    n = new Date(n || Date.now());
    var l = a ? n : Fw(n),
      s = Cr(l, e),
      d = a ? s : Ww(n, s, e);
    return -d;
  }
  return NaN;
}
function Fw(e) {
  return li(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function Cr(e, n) {
  var a = Nw(e, n),
    t = li(a[0], a[1] - 1, a[2], a[3] % 24, a[4], a[5], 0).getTime(),
    o = e.getTime(),
    i = o % 1e3;
  return (o -= i >= 0 ? i : 1e3 + i), t - o;
}
function Ww(e, n, a) {
  var t = e.getTime(),
    o = t - n,
    i = Cr(new Date(o), a);
  if (n === i) return n;
  o -= i - n;
  var r = Cr(new Date(o), a);
  return i === r ? i : Math.max(i, r);
}
function Ll(e, n) {
  return -23 <= e && e <= 23 && (n == null || (0 <= n && n <= 59));
}
var xl = {};
function Gw(e) {
  if (xl[e]) return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), (xl[e] = !0), !0;
  } catch {
    return !1;
  }
}
var du =
    /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,
  Go = 36e5,
  Rl = 6e4,
  qw = 2,
  Dt = {
    dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
    datePattern: /^([0-9W+-]+)(.*)/,
    plainTime: /:/,
    YY: /^(\d{2})$/,
    YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
    YYYY: /^(\d{4})/,
    YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    timeZone: du,
  };
function Pr(e, n) {
  if (arguments.length < 1)
    throw new TypeError(
      "1 argument required, but only " + arguments.length + " present"
    );
  if (e === null) return new Date(NaN);
  var a = n || {},
    t = a.additionalDigits == null ? qw : xw(a.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  )
    return new Date(e.getTime());
  if (
    typeof e == "number" ||
    Object.prototype.toString.call(e) === "[object Number]"
  )
    return new Date(e);
  if (
    !(
      typeof e == "string" ||
      Object.prototype.toString.call(e) === "[object String]"
    )
  )
    return new Date(NaN);
  var o = jw(e),
    i = zw(o.date, t),
    r = i.year,
    l = i.restDateString,
    s = Kw(l, r);
  if (isNaN(s)) return new Date(NaN);
  if (s) {
    var d = s.getTime(),
      g = 0,
      m;
    if (o.time && ((g = Qw(o.time)), isNaN(g))) return new Date(NaN);
    if (o.timeZone || a.timeZone) {
      if (((m = si(o.timeZone || a.timeZone, new Date(d + g))), isNaN(m)))
        return new Date(NaN);
    } else (m = Al(new Date(d + g))), (m = Al(new Date(d + g + m)));
    return new Date(d + g + m);
  } else return new Date(NaN);
}
function jw(e) {
  var n = {},
    a = Dt.dateTimePattern.exec(e),
    t;
  if (
    (a
      ? ((n.date = a[1]), (t = a[3]))
      : ((a = Dt.datePattern.exec(e)),
        a ? ((n.date = a[1]), (t = a[2])) : ((n.date = null), (t = e))),
    t)
  ) {
    var o = Dt.timeZone.exec(t);
    o
      ? ((n.time = t.replace(o[1], "")), (n.timeZone = o[1].trim()))
      : (n.time = t);
  }
  return n;
}
function zw(e, n) {
  var a = Dt.YYY[n],
    t = Dt.YYYYY[n],
    o;
  if (((o = Dt.YYYY.exec(e) || t.exec(e)), o)) {
    var i = o[1];
    return { year: parseInt(i, 10), restDateString: e.slice(i.length) };
  }
  if (((o = Dt.YY.exec(e) || a.exec(e)), o)) {
    var r = o[1];
    return { year: parseInt(r, 10) * 100, restDateString: e.slice(r.length) };
  }
  return { year: null };
}
function Kw(e, n) {
  if (n === null) return null;
  var a, t, o, i;
  if (e.length === 0) return (t = new Date(0)), t.setUTCFullYear(n), t;
  if (((a = Dt.MM.exec(e)), a))
    return (
      (t = new Date(0)),
      (o = parseInt(a[1], 10) - 1),
      Hl(n, o) ? (t.setUTCFullYear(n, o), t) : new Date(NaN)
    );
  if (((a = Dt.DDD.exec(e)), a)) {
    t = new Date(0);
    var r = parseInt(a[1], 10);
    return Jw(n, r) ? (t.setUTCFullYear(n, 0, r), t) : new Date(NaN);
  }
  if (((a = Dt.MMDD.exec(e)), a)) {
    (t = new Date(0)), (o = parseInt(a[1], 10) - 1);
    var l = parseInt(a[2], 10);
    return Hl(n, o, l) ? (t.setUTCFullYear(n, o, l), t) : new Date(NaN);
  }
  if (((a = Dt.Www.exec(e)), a))
    return (i = parseInt(a[1], 10) - 1), Vl(n, i) ? Nl(n, i) : new Date(NaN);
  if (((a = Dt.WwwD.exec(e)), a)) {
    i = parseInt(a[1], 10) - 1;
    var s = parseInt(a[2], 10) - 1;
    return Vl(n, i, s) ? Nl(n, i, s) : new Date(NaN);
  }
  return null;
}
function Qw(e) {
  var n, a, t;
  if (((n = Dt.HH.exec(e)), n))
    return (
      (a = parseFloat(n[1].replace(",", "."))), qo(a) ? (a % 24) * Go : NaN
    );
  if (((n = Dt.HHMM.exec(e)), n))
    return (
      (a = parseInt(n[1], 10)),
      (t = parseFloat(n[2].replace(",", "."))),
      qo(a, t) ? (a % 24) * Go + t * Rl : NaN
    );
  if (((n = Dt.HHMMSS.exec(e)), n)) {
    (a = parseInt(n[1], 10)), (t = parseInt(n[2], 10));
    var o = parseFloat(n[3].replace(",", "."));
    return qo(a, t, o) ? (a % 24) * Go + t * Rl + o * 1e3 : NaN;
  }
  return null;
}
function Nl(e, n, a) {
  (n = n || 0), (a = a || 0);
  var t = new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var o = t.getUTCDay() || 7,
    i = n * 7 + a + 1 - o;
  return t.setUTCDate(t.getUTCDate() + i), t;
}
var Xw = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  Zw = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function mu(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function Hl(e, n, a) {
  if (n < 0 || n > 11) return !1;
  if (a != null) {
    if (a < 1) return !1;
    var t = mu(e);
    if ((t && a > Zw[n]) || (!t && a > Xw[n])) return !1;
  }
  return !0;
}
function Jw(e, n) {
  if (n < 1) return !1;
  var a = mu(e);
  return !((a && n > 366) || (!a && n > 365));
}
function Vl(e, n, a) {
  return !(n < 0 || n > 52 || (a != null && (a < 0 || a > 6)));
}
function qo(e, n, a) {
  return !(
    (e != null && (e < 0 || e >= 25)) ||
    (n != null && (n < 0 || n >= 60)) ||
    (a != null && (a < 0 || a >= 60))
  );
}
var Ir = { exports: {} },
  Er = { exports: {} };
(function (e, n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = a);
  function a(t, o) {
    if (t == null)
      throw new TypeError(
        "assign requires that input parameter not be null or undefined"
      );
    for (var i in o)
      Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
    return t;
  }
  e.exports = n.default;
})(Er, Er.exports);
var ek = Er.exports;
(function (e, n) {
  var a = Bw.default;
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = o);
  var t = a(ek);
  function o(i) {
    return (0, t.default)({}, i);
  }
  e.exports = n.default;
})(Ir, Ir.exports);
var tk = Ir.exports;
const ak = ii(tk);
function nk(e, n, a) {
  var t = Pr(e, a),
    o = si(n, t, !0),
    i = new Date(t.getTime() - o),
    r = new Date(0);
  return (
    r.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()),
    r.setHours(
      i.getUTCHours(),
      i.getUTCMinutes(),
      i.getUTCSeconds(),
      i.getUTCMilliseconds()
    ),
    r
  );
}
function ok(e, n, a) {
  if (typeof e == "string" && !e.match(du)) {
    var t = ak(a);
    return (t.timeZone = n), Pr(e, t);
  }
  var o = Pr(e, a),
    i = li(
      o.getFullYear(),
      o.getMonth(),
      o.getDate(),
      o.getHours(),
      o.getMinutes(),
      o.getSeconds(),
      o.getMilliseconds()
    ).getTime(),
    r = si(n, new Date(i));
  return new Date(i + r);
}
function Ul(e) {
  return (n) =>
    new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" })
      .format(new Date(`2017-01-0${n}T00:00:00+00:00`))
      .slice(0, 2);
}
function rk(e) {
  return (n) =>
    Pa(new Date(`2017-01-0${n}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const ik = (e, n, a) => {
    const t = [1, 2, 3, 4, 5, 6, 7];
    let o;
    if (e !== null)
      try {
        o = t.map(rk(e));
      } catch {
        o = t.map(Ul(n));
      }
    else o = t.map(Ul(n));
    const i = o.slice(0, a),
      r = o.slice(a + 1, o.length);
    return [o[a]].concat(...r).concat(...i);
  },
  ui = (e, n) => {
    const a = [];
    for (let t = +e[0]; t <= +e[1]; t++) a.push({ value: +t, text: `${t}` });
    return n ? a.reverse() : a;
  },
  gu = (e, n, a) => {
    const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
      const r = i < 10 ? `0${i}` : i;
      return new Date(`2017-${r}-01T00:00:00+00:00`);
    });
    if (e !== null)
      try {
        const i = a === "long" ? "MMMM" : "MMM";
        return t.map((r, l) => {
          const s = Pa(r, i, { locale: e });
          return { text: s.charAt(0).toUpperCase() + s.substring(1), value: l };
        });
      } catch {}
    const o = new Intl.DateTimeFormat(n, { month: a, timeZone: "UTC" });
    return t.map((i, r) => {
      const l = o.format(i);
      return { text: l.charAt(0).toUpperCase() + l.substring(1), value: r };
    });
  },
  lk = (e) =>
    [
      12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11,
    ][e],
  pt = (e) => {
    const n = L(e);
    return n != null && n.$el ? n?.$el : n;
  },
  sk = (e) => Object.assign({ type: "dot" }, e),
  vu = (e) => (Array.isArray(e) ? !!e[0] && !!e[1] : !1),
  yo = {
    prop: (e) => `"${e}" prop must be enabled!`,
    dateArr: (e) =>
      `You need to use array as "model-value" binding in order to support "${e}"`,
  },
  bt = (e) => e,
  Yl = (e) => (e === 0 ? e : !e || isNaN(+e) ? null : +e),
  $l = (e) => e === null,
  uk = (e) => {
    if (e)
      return [
        ...e.querySelectorAll("input, button, select, textarea, a[href]"),
      ][0];
  },
  ck = (e) => {
    const n = [],
      a = (t) => t.filter((o) => o);
    for (let t = 0; t < e.length; t += 3) {
      const o = [e[t], e[t + 1], e[t + 2]];
      n.push(a(o));
    }
    return n;
  },
  Gn = (e, n, a) => {
    const t = a != null,
      o = n != null;
    if (!t && !o) return !1;
    const i = +a,
      r = +n;
    return t && o ? +e > i || +e < r : t ? +e > i : o ? +e < r : !1;
  },
  vn = (e, n) =>
    ck(e).map((a) =>
      a.map((t) => {
        const { active: o, disabled: i, isBetween: r, highlighted: l } = n(t);
        return {
          ...t,
          active: o,
          disabled: i,
          className: {
            dp__overlay_cell_active: o,
            dp__overlay_cell: !o,
            dp__overlay_cell_disabled: i,
            dp__overlay_cell_pad: !0,
            dp__overlay_cell_active_disabled: i && o,
            dp__cell_in_between: r,
            "dp--highlighted": l,
          },
        };
      })
    ),
  Ia = (e, n, a = !1) => {
    e &&
      n.allowStopPropagation &&
      (a && e.stopImmediatePropagation(), e.stopPropagation());
  },
  dk = () =>
    [
      "a[href]",
      "area[href]",
      "input:not([disabled]):not([type='hidden'])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "button:not([disabled])",
      "[tabindex]:not([tabindex='-1'])",
      "[data-datepicker-instance]",
    ].join(", ");
function mk(e, n) {
  let a = [...document.querySelectorAll(dk())];
  a = a.filter(
    (o) => !e.contains(o) || o.hasAttribute("data-datepicker-instance")
  );
  const t = a.indexOf(e);
  if (t >= 0 && (n ? t - 1 >= 0 : t + 1 <= a.length))
    return a[t + (n ? -1 : 1)];
}
const gk = (e, n) => {
    let a;
    return function (...t) {
      clearTimeout(a),
        (a = setTimeout(() => {
          e(...t);
        }, n));
    };
  },
  Fl = (e, n, a, t, o) => {
    const i = kr(e, n.slice(0, e.length), new Date());
    return xn(i) && $s(i)
      ? t || o
        ? i
        : at(i, {
            hours: +a.hours,
            minutes: +a?.minutes,
            seconds: +a?.seconds,
            milliseconds: 0,
          })
      : null;
  },
  vk = (e, n, a, t, o) => {
    const i = Array.isArray(a) ? a[0] : a;
    if (typeof n == "string") return Fl(e, n, i, t, o);
    if (Array.isArray(n)) {
      let r = null;
      for (const l of n) if (((r = Fl(e, l, i, t, o)), r)) break;
      return r;
    }
    return typeof n == "function" ? n(e) : null;
  },
  oe = (e) => (e ? new Date(e) : new Date()),
  pk = (e, n, a) => {
    if (n) {
      const o = (e.getMonth() + 1).toString().padStart(2, "0"),
        i = e.getDate().toString().padStart(2, "0"),
        r = e.getHours().toString().padStart(2, "0"),
        l = e.getMinutes().toString().padStart(2, "0"),
        s = a ? e.getSeconds().toString().padStart(2, "0") : "00";
      return `${e.getFullYear()}-${o}-${i}T${r}:${l}:${s}.000Z`;
    }
    const t = Date.UTC(
      e.getUTCFullYear(),
      e.getUTCMonth(),
      e.getUTCDate(),
      e.getUTCHours(),
      e.getUTCMinutes(),
      e.getUTCSeconds()
    );
    return new Date(t).toISOString();
  },
  It = (e) => {
    let n = oe(JSON.parse(JSON.stringify(e)));
    return (n = iu(n, 0)), (n = lu(n, 0)), (n = ei(n, 0)), (n = Jr(n, 0)), n;
  },
  Ea = (e, n, a, t) => {
    let o = e ? oe(e) : oe();
    return (
      (n || n === 0) && (o = iu(o, +n)),
      (a || a === 0) && (o = lu(o, +a)),
      (t || t === 0) && (o = ei(o, +t)),
      Jr(o, 0)
    );
  },
  kt = (e, n) => (!e || !n ? !1 : Wn(It(e), It(n))),
  Ge = (e, n) => (!e || !n ? !1 : nn(It(e), It(n))),
  Pt = (e, n) => (!e || !n ? !1 : Fn(It(e), It(n))),
  So = (e, n, a) =>
    e != null && e[0] && e != null && e[1]
      ? Pt(a, e[0]) && kt(a, e[1])
      : e != null && e[0] && n
      ? (Pt(a, e[0]) && kt(a, n)) || (kt(a, e[0]) && Pt(a, n))
      : !1,
  Xt = (e) => {
    const n = at(new Date(e), { date: 1 });
    return It(n);
  },
  jo = (e, n, a) =>
    n && (a || a === 0)
      ? Object.fromEntries(
          ["hours", "minutes", "seconds"].map((t) =>
            t === n ? [t, a] : [t, isNaN(+e[t]) ? void 0 : +e[t]]
          )
        )
      : {
          hours: isNaN(+e.hours) ? void 0 : +e.hours,
          minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
          seconds: isNaN(+e.seconds) ? void 0 : +e.seconds,
        },
  Ha = (e) => ({ hours: Jt(e), minutes: ma(e), seconds: mn(e) }),
  pu = (e, n) => {
    if (n) {
      const a = Re(oe(n));
      if (a > e) return 12;
      if (a === e) return $e(oe(n));
    }
  },
  hu = (e, n) => {
    if (n) {
      const a = Re(oe(n));
      return a < e ? -1 : a === e ? $e(oe(n)) : void 0;
    }
  },
  pn = (e) => {
    if (e) return Re(oe(e));
  },
  ea = (e, n) => (n ? nk(e, n) : e),
  fu = (e, n) => (n ? ok(e, n) : e),
  hk = (e) => (e instanceof Date ? e : hw(e)),
  bu = (e, n) => {
    const a = Pt(e, n) ? n : e,
      t = Pt(n, e) ? n : e;
    return Fs({ start: a, end: t });
  },
  fk = (e) => {
    const n = Zt(e, 1);
    return { month: $e(n), year: Re(n) };
  },
  so = (e, n, a) => {
    const t = $a(ea(e, n), { weekStartsOn: +a }),
      o = v_(ea(e, n), { weekStartsOn: +a });
    return [t, o];
  },
  yu = (e, n) => {
    const a = { hours: Jt(oe()), minutes: ma(oe()), seconds: n ? mn(oe()) : 0 };
    return Object.assign(a, e);
  },
  Ca = (e, n, a) => [
    at(oe(e), { date: 1 }),
    at(oe(), { month: n, year: a, date: 1 }),
  ],
  fa = (e, n, a) => {
    let t = e ? oe(e) : oe();
    return (n || n === 0) && (t = ru(t, n)), a && (t = ca(t, a)), t;
  },
  _u = (e, n, a, t, o) => {
    if (!t || (o && !n) || (!o && !a)) return !1;
    const i = o ? Zt(e, 1) : gn(e, 1),
      r = [$e(i), Re(i)];
    return o ? !yk(...r, n) : !bk(...r, a);
  },
  bk = (e, n, a) => kt(...Ca(a, e, n)) || Ge(...Ca(a, e, n)),
  yk = (e, n, a) => Pt(...Ca(a, e, n)) || Ge(...Ca(a, e, n)),
  wu = (e, n, a, t, o, i, r) => {
    if (typeof n == "function" && !r) return n(e);
    const l = a ? { locale: a } : void 0;
    return Array.isArray(e)
      ? `${Pa(e[0], i, l)}${o && !e[1] ? "" : t}${e[1] ? Pa(e[1], i, l) : ""}`
      : Pa(e, i, l);
  },
  Ja = (e) => {
    if (e) return null;
    throw new Error(yo.prop("partial-range"));
  },
  ro = (e, n) => {
    if (n) return e();
    throw new Error(yo.prop("range"));
  },
  Dr = (e) =>
    Array.isArray(e) ? xn(e[0]) && (e[1] ? xn(e[1]) : !0) : e ? xn(e) : !1,
  _k = (e, n) =>
    at(n ?? oe(), {
      hours: +e.hours || 0,
      minutes: +e.minutes || 0,
      seconds: +e.seconds || 0,
    }),
  zo = (e, n, a, t) => {
    if (!e) return !0;
    if (t) {
      const o = a === "max" ? Wn(e, n) : Fn(e, n),
        i = { seconds: 0, milliseconds: 0 };
      return o || nn(at(e, i), at(n, i));
    }
    return a === "max"
      ? e.getTime() <= n.getTime()
      : e.getTime() >= n.getTime();
  },
  Ko = (e, n, a) => (e ? _k(e, n) : oe(a ?? n)),
  Wl = (e, n, a, t, o) => {
    if (Array.isArray(t)) {
      const r = Ko(e, t[0], n),
        l = Ko(e, t[1], n);
      return zo(t[0], r, a, !!n) && zo(t[1], l, a, !!n) && o;
    }
    const i = Ko(e, t, n);
    return zo(t, i, a, !!n) && o;
  },
  Qo = (e) => at(oe(), Ha(e)),
  wk = (e, n) =>
    Array.isArray(e)
      ? e
          .map((a) => oe(a))
          .filter((a) => Re(oe(a)) === n)
          .map((a) => $e(a))
      : [],
  ku = (e, n, a) =>
    typeof e == "function"
      ? e({ month: n, year: a })
      : !!e.months.find((t) => t.month === n && t.year === a),
  ci = (e, n) => (typeof e == "function" ? e(n) : e.years.includes(n)),
  En = ba({ menuFocused: !1, shiftKeyInMenu: !1 }),
  Su = () => {
    const e = (a) => {
        En.menuFocused = a;
      },
      n = (a) => {
        En.shiftKeyInMenu !== a && (En.shiftKeyInMenu = a);
      };
    return {
      control: u(() => ({
        shiftKeyInMenu: En.shiftKeyInMenu,
        menuFocused: En.menuFocused,
      })),
      setMenuFocused: e,
      setShiftKey: n,
    };
  },
  tt = ba({
    monthYear: [],
    calendar: [],
    time: [],
    actionRow: [],
    selectionGrid: [],
    timePicker: { 0: [], 1: [] },
    monthPicker: [],
  }),
  Xo = E(null),
  io = E(!1),
  Zo = E(!1),
  Jo = E(!1),
  er = E(!1),
  Et = E(0),
  wt = E(0),
  Ma = () => {
    const e = u(() =>
        io.value
          ? [...tt.selectionGrid, tt.actionRow].filter((m) => m.length)
          : Zo.value
          ? [
              ...tt.timePicker[0],
              ...tt.timePicker[1],
              er.value ? [] : [Xo.value],
              tt.actionRow,
            ].filter((m) => m.length)
          : Jo.value
          ? [...tt.monthPicker, tt.actionRow]
          : [tt.monthYear, ...tt.calendar, tt.time, tt.actionRow].filter(
              (m) => m.length
            )
      ),
      n = (m) => {
        Et.value = m ? Et.value + 1 : Et.value - 1;
        let v = null;
        e.value[wt.value] && (v = e.value[wt.value][Et.value]),
          v || (Et.value = m ? Et.value - 1 : Et.value + 1);
      },
      a = (m) => {
        (wt.value === 0 && !m) ||
          (wt.value === e.value.length && m) ||
          ((wt.value = m ? wt.value + 1 : wt.value - 1),
          e.value[wt.value]
            ? e.value[wt.value] &&
              !e.value[wt.value][Et.value] &&
              Et.value !== 0 &&
              (Et.value = e.value[wt.value].length - 1)
            : (wt.value = m ? wt.value - 1 : wt.value + 1));
      },
      t = (m) => {
        let v = null;
        e.value[wt.value] && (v = e.value[wt.value][Et.value]),
          v
            ? v.focus({ preventScroll: !io.value })
            : (Et.value = m ? Et.value - 1 : Et.value + 1);
      },
      o = () => {
        n(!0), t(!0);
      },
      i = () => {
        n(!1), t(!1);
      },
      r = () => {
        a(!1), t(!0);
      },
      l = () => {
        a(!0), t(!0);
      },
      s = (m, v) => {
        tt[v] = m;
      },
      d = (m, v) => {
        tt[v] = m;
      },
      g = () => {
        (Et.value = 0), (wt.value = 0);
      };
    return {
      buildMatrix: s,
      buildMultiLevelMatrix: d,
      setTimePickerBackRef: (m) => {
        Xo.value = m;
      },
      setSelectionGrid: (m) => {
        (io.value = m), g(), m || (tt.selectionGrid = []);
      },
      setTimePicker: (m, v = !1) => {
        (Zo.value = m),
          (er.value = v),
          g(),
          m || ((tt.timePicker[0] = []), (tt.timePicker[1] = []));
      },
      setTimePickerElements: (m, v = 0) => {
        tt.timePicker[v] = m;
      },
      arrowRight: o,
      arrowLeft: i,
      arrowUp: r,
      arrowDown: l,
      clearArrowNav: () => {
        (tt.monthYear = []),
          (tt.calendar = []),
          (tt.time = []),
          (tt.actionRow = []),
          (tt.selectionGrid = []),
          (tt.timePicker[0] = []),
          (tt.timePicker[1] = []),
          (io.value = !1),
          (Zo.value = !1),
          (er.value = !1),
          (Jo.value = !1),
          g(),
          (Xo.value = null);
      },
      setMonthPicker: (m) => {
        (Jo.value = m), g();
      },
      refSets: tt,
    };
  },
  Gl = (e) => ({
    menuAppearTop: "dp-menu-appear-top",
    menuAppearBottom: "dp-menu-appear-bottom",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down",
    ...(e ?? {}),
  }),
  kk = (e) => ({
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (n) => `Increment ${n}`,
    decrementValue: (n) => `Decrement ${n}`,
    openTpOverlay: (n) => `Open ${n} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    nextYear: "Next year",
    prevYear: "Previous year",
    day: () => "",
    ...(e ?? {}),
  }),
  ql = (e) =>
    e ? (typeof e == "boolean" ? (e ? 2 : 0) : +e >= 2 ? +e : 2) : 0,
  Sk = (e) => {
    const n = typeof e == "object" && e,
      a = { static: !0, solo: !1 };
    if (!e) return { ...a, count: ql(!1) };
    const t = n ? e : {},
      o = n ? t.count ?? !0 : e,
      i = ql(o);
    return Object.assign(a, t, { count: i });
  },
  Tk = (e, n, a) => e || (typeof a == "string" ? a : n),
  Ck = (e) => (typeof e == "boolean" ? (e ? Gl({}) : !1) : Gl(e)),
  Pk = (e) => {
    const n = {
      enterSubmit: !0,
      tabSubmit: !0,
      openMenu: !0,
      selectOnFocus: !1,
      rangeSeparator: " - ",
    };
    return typeof e == "object"
      ? { ...n, ...(e ?? {}), enabled: !0 }
      : { ...n, enabled: e };
  },
  Ik = (e) => ({
    months: [],
    years: [],
    times: { hours: [], minutes: [], seconds: [] },
    ...(e ?? {}),
  }),
  Ek = (e) => ({
    showSelect: !0,
    showCancel: !0,
    showNow: !1,
    showPreview: !0,
    ...(e ?? {}),
  }),
  Dk = (e) => {
    const n = { input: !1 };
    return typeof e == "object"
      ? { ...n, ...(e ?? {}), enabled: !0 }
      : { enabled: e, ...n };
  },
  Mk = (e) => ({
    allowStopPropagation: !0,
    closeOnScroll: !1,
    modeHeight: 255,
    allowPreventDefault: !1,
    closeOnClearValue: !0,
    closeOnAutoApply: !0,
    noSwipe: !1,
    keepActionRow: !1,
    onClickOutside: void 0,
    tabOutClosesMenu: !0,
    ...(e ?? {}),
  }),
  Ok = (e, n, a) => {
    const t = {
      dates: Array.isArray(e) ? e.map((o) => oe(o)) : [],
      years: [],
      months: [],
      quarters: [],
      weeks: [],
      weekdays: n,
      options: { highlightDisabled: a },
    };
    return typeof e == "function" ? e : { ...t, ...(e ?? {}) };
  },
  Ak = (e) =>
    typeof e == "object"
      ? { type: e.type, hideOnOffsetDates: e.hideOnOffsetDates ?? !1 }
      : { type: e, hideOnOffsetDates: !1 },
  vt = (e) => {
    const n = () => {
        const y = e.enableSeconds ? ":ss" : "";
        return e.is24 ? `HH:mm${y}` : `hh:mm${y} aa`;
      },
      a = () =>
        e.format
          ? e.format
          : e.monthPicker
          ? "MM/yyyy"
          : e.timePicker
          ? n()
          : e.weekPicker
          ? "MM/dd/yyyy"
          : e.yearPicker
          ? "yyyy"
          : e.quarterPicker
          ? "QQQ/yyyy"
          : e.enableTimePicker
          ? `MM/dd/yyyy, ${n()}`
          : "MM/dd/yyyy",
      t = (y) => yu(y, e.enableSeconds),
      o = () =>
        e.range
          ? e.startTime && Array.isArray(e.startTime)
            ? [t(e.startTime[0]), t(e.startTime[1])]
            : null
          : e.startTime && !Array.isArray(e.startTime)
          ? t(e.startTime)
          : null,
      i = u(() => Sk(e.multiCalendars)),
      r = u(() => o()),
      l = u(() => kk(e.ariaLabels)),
      s = u(() => Ik(e.filters)),
      d = u(() => Ck(e.transitions)),
      g = u(() => Ek(e.actionRow)),
      m = u(() => Tk(e.previewFormat, e.format, a())),
      v = u(() => Pk(e.textInput)),
      p = u(() => Dk(e.inline)),
      b = u(() => Mk(e.config)),
      _ = u(() =>
        Ok(e.highlight, e.highlightWeekDays, e.highlightDisabledDays)
      ),
      T = u(() => Ak(e.weekNumbers));
    return {
      defaultedTransitions: d,
      defaultedMultiCalendars: i,
      defaultedStartTime: r,
      defaultedAriaLabels: l,
      defaultedFilters: s,
      defaultedActionRow: g,
      defaultedPreviewFormat: m,
      defaultedTextInput: v,
      defaultedInline: p,
      defaultedConfig: b,
      defaultedHighlight: _,
      defaultedWeekNumbers: T,
      getDefaultPattern: a,
      getDefaultStartTime: o,
    };
  },
  Bk = (e, n, a) => {
    const t = E(),
      { defaultedTextInput: o, getDefaultPattern: i } = vt(n),
      r = E(""),
      l = Ua(n, "format");
    xe(t, () => {
      e("internal-model-change", t.value);
    }),
      xe(l, () => {
        N();
      });
    const s = (f) => fu(f, n.timezone),
      d = (f) => ea(f, n.timezone),
      g = (f, W, U = !1) =>
        wu(
          f,
          n.format,
          n.formatLocale,
          o.value.rangeSeparator,
          n.modelAuto,
          W ?? i(),
          U
        ),
      m = (f) =>
        f
          ? n.modelType
            ? H(f)
            : {
                hours: Jt(f),
                minutes: ma(f),
                seconds: n.enableSeconds ? mn(f) : 0,
              }
          : null,
      v = (f) => (n.modelType ? H(f) : { month: $e(f), year: Re(f) }),
      p = (f) =>
        Array.isArray(f)
          ? n.multiDates
            ? f.map((W) => b(W, ca(oe(), W)))
            : ro(
                () => [
                  ca(oe(), f[0]),
                  f[1] ? ca(oe(), f[1]) : Ja(n.partialRange),
                ],
                n.range
              )
          : ca(oe(), +f),
      b = (f, W) =>
        (typeof f == "string" || typeof f == "number") && n.modelType
          ? I(f)
          : W,
      _ = (f) =>
        Array.isArray(f)
          ? [
              b(f[0], Ea(null, +f[0].hours, +f[0].minutes, f[0].seconds)),
              b(f[1], Ea(null, +f[1].hours, +f[1].minutes, f[1].seconds)),
            ]
          : b(f, Ea(null, f.hours, f.minutes, f.seconds)),
      T = (f) =>
        Array.isArray(f)
          ? n.multiDates
            ? f.map((W) => b(W, fa(null, +W.month, +W.year)))
            : ro(
                () => [
                  b(f[0], fa(null, +f[0].month, +f[0].year)),
                  b(
                    f[1],
                    f[1]
                      ? fa(null, +f[1].month, +f[1].year)
                      : Ja(n.partialRange)
                  ),
                ],
                n.range
              )
          : b(f, fa(null, +f.month, +f.year)),
      y = (f) => {
        if (Array.isArray(f)) return f.map((W) => I(W));
        throw new Error(yo.dateArr("multi-dates"));
      },
      w = (f) => {
        if (Array.isArray(f)) return [oe(f[0]), oe(f[1])];
        throw new Error(yo.dateArr("week-picker"));
      },
      O = (f) =>
        n.modelAuto
          ? Array.isArray(f)
            ? [I(f[0]), I(f[1])]
            : n.autoApply
            ? [I(f)]
            : [I(f), null]
          : Array.isArray(f)
          ? ro(() => [I(f[0]), f[1] ? I(f[1]) : Ja(n.partialRange)], n.range)
          : I(f),
      C = () => {
        Array.isArray(t.value) &&
          n.range &&
          t.value.length === 1 &&
          t.value.push(Ja(n.partialRange));
      },
      x = () => {
        const f = t.value;
        return [H(f[0]), f[1] ? H(f[1]) : Ja(n.partialRange)];
      },
      F = () => (t.value[1] ? x() : H(bt(t.value[0]))),
      Y = () => (t.value || []).map((f) => H(f)),
      j = () => (
        C(),
        n.modelAuto
          ? F()
          : n.multiDates
          ? Y()
          : Array.isArray(t.value)
          ? ro(() => x(), n.range)
          : H(bt(t.value))
      ),
      q = (f) =>
        !f || (Array.isArray(f) && !f.length)
          ? null
          : n.timePicker
          ? _(bt(f))
          : n.monthPicker
          ? T(bt(f))
          : n.yearPicker
          ? p(bt(f))
          : n.multiDates
          ? y(bt(f))
          : n.weekPicker
          ? w(bt(f))
          : O(bt(f)),
      S = (f) => {
        const W = q(f);
        Dr(bt(W))
          ? ((t.value = bt(W)), N())
          : ((t.value = null), (r.value = ""));
      },
      B = () => {
        const f = (W) => Pa(W, o.value.format);
        return `${f(t.value[0])} ${o.value.rangeSeparator} ${
          t.value[1] ? f(t.value[1]) : ""
        }`;
      },
      $ = () =>
        a.value && t.value
          ? Array.isArray(t.value)
            ? B()
            : Pa(t.value, o.value.format)
          : g(t.value),
      z = () =>
        t.value
          ? n.multiDates
            ? t.value.map((f) => g(f)).join("; ")
            : o.value.enabled && typeof o.value.format == "string"
            ? $()
            : g(t.value)
          : "",
      N = () => {
        !n.format ||
        typeof n.format == "string" ||
        (o.value.enabled && typeof o.value.format == "string")
          ? (r.value = z())
          : (r.value = n.format(t.value));
      },
      I = (f) => {
        if (n.utc) {
          const W = new Date(f);
          return n.utc === "preserve"
            ? new Date(W.getTime() + W.getTimezoneOffset() * 6e4)
            : W;
        }
        return n.modelType
          ? n.modelType === "date" || n.modelType === "timestamp"
            ? d(new Date(f))
            : n.modelType === "format" &&
              (typeof n.format == "string" || !n.format)
            ? kr(f, i(), new Date())
            : d(kr(f, n.modelType, new Date()))
          : d(new Date(f));
      },
      H = (f) =>
        f
          ? n.utc
            ? pk(f, n.utc === "preserve", n.enableSeconds)
            : n.modelType
            ? n.modelType === "timestamp"
              ? +s(f)
              : n.modelType === "format" &&
                (typeof n.format == "string" || !n.format)
              ? g(s(f))
              : g(s(f), n.modelType, !0)
            : s(f)
          : "",
      A = (f, W = !1) => {
        if ((e("update:model-value", f), n.emitTimezone && W)) {
          const U = Array.isArray(f)
            ? f.map((Z) => ea(bt(Z)), n.emitTimezone)
            : ea(bt(f), n.emitTimezone);
          e("update:model-timezone-value", U);
        }
      },
      G = (f) =>
        Array.isArray(t.value)
          ? n.multiDates
            ? t.value.map((W) => f(W))
            : [f(t.value[0]), t.value[1] ? f(t.value[1]) : Ja(n.partialRange)]
          : f(bt(t.value)),
      k = (f) => A(bt(G(f)));
    return {
      inputValue: r,
      internalModelValue: t,
      checkBeforeEmit: () =>
        t.value
          ? n.range
            ? n.partialRange
              ? t.value.length >= 1
              : t.value.length === 2
            : !!t.value
          : !1,
      parseExternalModelValue: S,
      formatInputValue: N,
      emitModelValue: () => (
        N(),
        n.monthPicker
          ? k(v)
          : n.timePicker
          ? k(m)
          : n.yearPicker
          ? k(Re)
          : n.weekPicker
          ? A(
              t.value.map((f) => H(f)),
              !0
            )
          : A(j(), !0)
      ),
    };
  },
  Lk = (e, n) => {
    const { defaultedFilters: a } = vt(e),
      { validateMonthYearInRange: t } = qa(e),
      o = (d, g) => {
        let m = d;
        return a.value.months.includes($e(m))
          ? ((m = g ? Zt(d, 1) : gn(d, 1)), o(m, g))
          : m;
      },
      i = (d, g) => {
        let m = d;
        return a.value.years.includes(Re(m))
          ? ((m = g ? jr(d, 1) : su(d, 1)), i(m, g))
          : m;
      },
      r = (d, g = !1) => {
        const m = at(new Date(), { month: e.month, year: e.year });
        let v = d ? Zt(m, 1) : gn(m, 1);
        e.disableYearSelect && (v = ca(v, e.year));
        let p = $e(v),
          b = Re(v);
        a.value.months.includes(p) && ((v = o(v, d)), (p = $e(v)), (b = Re(v))),
          a.value.years.includes(b) && ((v = i(v, d)), (b = Re(v))),
          t(p, b, d, e.preventMinMaxNavigation) && l(p, b, g);
      },
      l = (d, g, m) => {
        n("update-month-year", { month: d, year: g, fromNav: m });
      },
      s = u(
        () => (d) =>
          _u(
            at(new Date(), { month: e.month, year: e.year }),
            e.maxDate,
            e.minDate,
            e.preventMinMaxNavigation,
            d
          )
      );
    return { handleMonthYearChange: r, isDisabled: s, updateMonthYear: l };
  };
var en = ((e) => (
    (e.center = "center"), (e.left = "left"), (e.right = "right"), e
  ))(en || {}),
  Kt = ((e) => ((e.month = "month"), (e.year = "year"), e))(Kt || {}),
  La = ((e) => ((e.top = "top"), (e.bottom = "bottom"), e))(La || {}),
  Va = ((e) => (
    (e.header = "header"),
    (e.calendar = "calendar"),
    (e.timePicker = "timePicker"),
    e
  ))(Va || {}),
  ia = ((e) => (
    (e.month = "month"),
    (e.year = "year"),
    (e.calendar = "calendar"),
    (e.time = "time"),
    (e.minutes = "minutes"),
    (e.hours = "hours"),
    (e.seconds = "seconds"),
    e
  ))(ia || {});
const xk = ({
    menuRef: e,
    menuRefInner: n,
    inputRef: a,
    pickerWrapperRef: t,
    inline: o,
    emit: i,
    props: r,
    slots: l,
  }) => {
    const s = E({}),
      d = E(!1),
      g = E({ top: "0", left: "0" }),
      m = E(!1),
      v = Ua(r, "teleportCenter");
    xe(v, () => {
      (g.value = JSON.parse(JSON.stringify({}))), C();
    });
    const p = (I) => {
        if (r.teleport) {
          const H = I.getBoundingClientRect();
          return { left: H.left + window.scrollX, top: H.top + window.scrollY };
        }
        return { top: 0, left: 0 };
      },
      b = (I, H) => {
        g.value.left = `${I + H - s.value.width}px`;
      },
      _ = (I) => {
        g.value.left = `${I}px`;
      },
      T = (I, H) => {
        r.position === en.left && _(I),
          r.position === en.right && b(I, H),
          r.position === en.center &&
            (g.value.left = `${I + H / 2 - s.value.width / 2}px`);
      },
      y = (I) => {
        const { width: H, height: A } = I.getBoundingClientRect(),
          { top: G, left: k } = r.altPosition ? r.altPosition(I) : p(I);
        return { top: +G, left: +k, width: H, height: A };
      },
      w = () => {
        (g.value.left = "50%"),
          (g.value.top = "50%"),
          (g.value.transform = "translate(-50%, -50%)"),
          (g.value.position = "fixed"),
          delete g.value.opacity;
      },
      O = () => {
        const I = pt(a),
          { top: H, left: A, transform: G } = r.altPosition(I);
        g.value = { top: `${H}px`, left: `${A}px`, transform: G ?? "" };
      },
      C = (I = !0) => {
        var H;
        if (!o.value.enabled) {
          if (v.value) return w();
          if (r.altPosition !== null) return O();
          if (I) {
            const A = r.teleport
              ? (H = n.value) == null
                ? void 0
                : H.$el
              : e.value;
            A && (s.value = A.getBoundingClientRect()),
              i("recalculate-position");
          }
          return B();
        }
      },
      x = ({ inputEl: I, left: H, width: A }) => {
        window.screen.width > 768 && !d.value && T(H, A), j(I);
      },
      F = (I) => {
        const { top: H, left: A, height: G, width: k } = y(I);
        (g.value.top = `${G + H + +r.offset}px`),
          (m.value = !1),
          d.value || (g.value.left = `${A + k / 2 - s.value.width / 2}px`),
          x({ inputEl: I, left: A, width: k });
      },
      Y = (I) => {
        const { top: H, left: A, width: G } = y(I);
        (g.value.top = `${H - +r.offset - s.value.height}px`),
          (m.value = !0),
          x({ inputEl: I, left: A, width: G });
      },
      j = (I) => {
        if (r.autoPosition) {
          const { left: H, width: A } = y(I),
            { left: G, right: k } = s.value;
          if (!d.value) {
            if (Math.abs(G) !== Math.abs(k)) {
              if (G <= 0) return (d.value = !0), _(H);
              if (k >= document.documentElement.clientWidth)
                return (d.value = !0), b(H, A);
            }
            return T(H, A);
          }
        }
      },
      q = () => {
        const I = pt(a);
        if (I) {
          const { height: H } = s.value,
            { top: A, height: G } = I.getBoundingClientRect(),
            k = window.innerHeight - A - G,
            f = A;
          return H <= k
            ? La.bottom
            : H > k && H <= f
            ? La.top
            : k >= f
            ? La.bottom
            : La.top;
        }
        return La.bottom;
      },
      S = (I) => (q() === La.bottom ? F(I) : Y(I)),
      B = () => {
        const I = pt(a);
        if (I) return r.autoPosition ? S(I) : F(I);
      },
      $ = function (I) {
        if (I) {
          const H = I.scrollHeight > I.clientHeight,
            A = window.getComputedStyle(I).overflowY.indexOf("hidden") !== -1;
          return H && !A;
        }
        return !0;
      },
      z = function (I) {
        return !I ||
          I === document.body ||
          I.nodeType === Node.DOCUMENT_FRAGMENT_NODE
          ? window
          : $(I)
          ? I
          : z(I.parentNode);
      },
      N = (I) => {
        if (I)
          switch (r.position) {
            case en.left:
              return { left: 0, transform: "translateX(0)" };
            case en.right:
              return { left: `${I.width}px`, transform: "translateX(-100%)" };
            default:
              return {
                left: `${I.width / 2}px`,
                transform: "translateX(-50%)",
              };
          }
        return {};
      };
    return {
      openOnTop: m,
      menuStyle: g,
      xCorrect: d,
      setMenuPosition: C,
      getScrollableParent: z,
      shadowRender: (I, H) => {
        var A, G, k;
        const f = document.createElement("div"),
          W = (A = pt(a)) == null ? void 0 : A.getBoundingClientRect();
        f.setAttribute("id", "dp--temp-container");
        const U =
          (G = t.value) != null && G.clientWidth ? t.value : document.body;
        U.append(f);
        const Z = N(W),
          J = Nu(
            I,
            {
              ...H,
              shadow: !0,
              style: { opacity: 0, position: "absolute", ...Z },
            },
            Object.fromEntries(
              Object.keys(l)
                .filter((R) => ["right-sidebar", "left-sidebar"].includes(R))
                .map((R) => [R, l[R]])
            )
          );
        hi(J, f),
          (s.value = (k = J.el) == null ? void 0 : k.getBoundingClientRect()),
          hi(null, f),
          U.removeChild(f);
      },
    };
  },
  Sa = [
    { name: "clock-icon", use: ["time", "calendar", "shared"] },
    {
      name: "arrow-left",
      use: ["month-year", "calendar", "shared", "year-mode"],
    },
    {
      name: "arrow-right",
      use: ["month-year", "calendar", "shared", "year-mode"],
    },
    { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
    { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
    {
      name: "calendar-icon",
      use: ["month-year", "time", "calendar", "shared", "year-mode"],
    },
    { name: "day", use: ["calendar", "shared"] },
    { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
    {
      name: "year-overlay-value",
      use: ["calendar", "month-year", "shared", "year-mode"],
    },
    { name: "year-overlay", use: ["month-year", "shared"] },
    { name: "month-overlay", use: ["month-year", "shared"] },
    { name: "month-overlay-header", use: ["month-year", "shared"] },
    { name: "year-overlay-header", use: ["month-year", "shared"] },
    { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
    { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
    { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
    { name: "hours", use: ["calendar", "time", "shared"] },
    { name: "minutes", use: ["calendar", "time", "shared"] },
    { name: "month", use: ["calendar", "month-year", "shared"] },
    { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
    { name: "action-buttons", use: ["action"] },
    { name: "action-preview", use: ["action"] },
    { name: "calendar-header", use: ["calendar", "shared"] },
    { name: "marker-tooltip", use: ["calendar", "shared"] },
    { name: "action-extra", use: ["menu"] },
    { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
    { name: "am-pm-button", use: ["calendar", "time", "shared"] },
    { name: "left-sidebar", use: ["menu"] },
    { name: "right-sidebar", use: ["menu"] },
    { name: "month-year", use: ["month-year", "shared"] },
    { name: "time-picker", use: ["menu", "shared"] },
    { name: "action-row", use: ["action"] },
    { name: "marker", use: ["calendar", "shared"] },
    { name: "quarter", use: ["shared"] },
  ],
  Rk = [
    { name: "trigger" },
    { name: "input-icon" },
    { name: "clear-icon" },
    { name: "dp-input" },
  ],
  Nk = {
    all: () => Sa,
    monthYear: () => Sa.filter((e) => e.use.includes("month-year")),
    input: () => Rk,
    timePicker: () => Sa.filter((e) => e.use.includes("time")),
    action: () => Sa.filter((e) => e.use.includes("action")),
    calendar: () => Sa.filter((e) => e.use.includes("calendar")),
    menu: () => Sa.filter((e) => e.use.includes("menu")),
    shared: () => Sa.filter((e) => e.use.includes("shared")),
    yearMode: () => Sa.filter((e) => e.use.includes("year-mode")),
  },
  Ht = (e, n, a) => {
    const t = [];
    return (
      Nk[n]().forEach((o) => {
        e[o.name] && t.push(o.name);
      }),
      a != null &&
        a.length &&
        a.forEach((o) => {
          o.slot && t.push(o.slot);
        }),
      t
    );
  },
  Qn = (e) => {
    const n = u(() => (t) => e.value ? (t ? e.value.open : e.value.close) : ""),
      a = u(
        () => (t) =>
          e.value ? (t ? e.value.menuAppearTop : e.value.menuAppearBottom) : ""
      );
    return { transitionName: n, showTransition: !!e.value, menuTransition: a };
  },
  Xn = (e, n) => {
    const a = oe(ea(new Date(), e.timezone)),
      t = E([{ month: $e(a), year: Re(a) }]),
      o = ba({
        hours: e.range ? [Jt(a), Jt(a)] : Jt(a),
        minutes: e.range ? [ma(a), ma(a)] : ma(a),
        seconds: e.range ? [0, 0] : 0,
      }),
      i = u({
        get: () => e.internalModelValue,
        set: (s) => {
          !e.readonly && !e.disabled && n("update:internal-model-value", s);
        },
      }),
      r = u(() => (s) => t.value[s] ? t.value[s].month : 0),
      l = u(() => (s) => t.value[s] ? t.value[s].year : 0);
    return { calendars: t, time: o, modelValue: i, month: r, year: l };
  },
  Hk = (e, n) => {
    const { defaultedMultiCalendars: a, defaultedHighlight: t } = vt(n),
      { isDisabled: o, matchDate: i } = qa(n),
      r = E(null),
      l = E(oe(ea(new Date(), n.timezone))),
      s = (k) => {
        (!k.current && n.hideOffsetDates) || (r.value = k.value);
      },
      d = () => {
        r.value = null;
      },
      g = (k) =>
        Array.isArray(e.value) && n.range && e.value[0] && r.value
          ? k
            ? Pt(r.value, e.value[0])
            : kt(r.value, e.value[0])
          : !0,
      m = (k, f) => {
        const W = () =>
            e.value ? (f ? e.value[0] || null : e.value[1]) : null,
          U = e.value && Array.isArray(e.value) ? W() : null;
        return Ge(oe(k.value), U);
      },
      v = (k) => {
        const f = Array.isArray(e.value) ? e.value[0] : null;
        return k ? !kt(r.value ?? null, f) : !0;
      },
      p = (k, f = !0) =>
        (n.range || n.weekPicker) &&
        Array.isArray(e.value) &&
        e.value.length === 2
          ? n.hideOffsetDates && !k.current
            ? !1
            : Ge(oe(k.value), e.value[f ? 0 : 1])
          : n.range
          ? (m(k, f) && v(f)) ||
            (Ge(k.value, Array.isArray(e.value) ? e.value[0] : null) && g(f))
          : !1,
      b = (k, f, W) =>
        Array.isArray(e.value) && e.value[0] && e.value.length === 1
          ? k
            ? !1
            : W
            ? Pt(e.value[0], f.value)
            : kt(e.value[0], f.value)
          : !1,
      _ = (k) =>
        !e.value || (n.hideOffsetDates && !k.current)
          ? !1
          : n.range
          ? n.modelAuto && Array.isArray(e.value)
            ? Ge(k.value, e.value[0] ? e.value[0] : l.value)
            : !1
          : n.multiDates && Array.isArray(e.value)
          ? e.value.some((f) => Ge(f, k.value))
          : Ge(k.value, e.value ? e.value : l.value),
      T = (k) => {
        if (n.autoRange || n.weekPicker) {
          if (r.value) {
            if (n.hideOffsetDates && !k.current) return !1;
            const f = ha(r.value, +n.autoRange),
              W = so(oe(r.value), n.timezone, n.weekStart);
            return n.weekPicker ? Ge(W[1], oe(k.value)) : Ge(f, oe(k.value));
          }
          return !1;
        }
        return !1;
      },
      y = (k) => {
        if (n.autoRange || n.weekPicker) {
          if (r.value) {
            const f = ha(r.value, +n.autoRange);
            if (n.hideOffsetDates && !k.current) return !1;
            const W = so(oe(r.value), n.timezone, n.weekStart);
            return n.weekPicker
              ? Pt(k.value, W[0]) && kt(k.value, W[1])
              : Pt(k.value, r.value) && kt(k.value, f);
          }
          return !1;
        }
        return !1;
      },
      w = (k) => {
        if (n.autoRange || n.weekPicker) {
          if (r.value) {
            if (n.hideOffsetDates && !k.current) return !1;
            const f = so(oe(r.value), n.timezone, n.weekStart);
            return n.weekPicker ? Ge(f[0], k.value) : Ge(r.value, k.value);
          }
          return !1;
        }
        return !1;
      },
      O = (k) => So(e.value, r.value, k.value),
      C = () =>
        n.modelAuto && Array.isArray(n.internalModelValue)
          ? !!n.internalModelValue[0]
          : !1,
      x = () => (n.modelAuto ? vu(n.internalModelValue) : !0),
      F = (k) => {
        if ((Array.isArray(e.value) && e.value.length) || n.weekPicker)
          return !1;
        const f = n.range ? !p(k) && !p(k, !1) : !0;
        return !o(k.value) && !_(k) && !(!k.current && n.hideOffsetDates) && f;
      },
      Y = (k) => (n.range ? (n.modelAuto ? C() && _(k) : !1) : _(k)),
      j = (k) => {
        var f;
        return t.value
          ? typeof t.value == "function"
            ? t.value(k.value)
            : i(
                k.value,
                (f = n.arrMapValues) != null && f.highlightedDates
                  ? n.arrMapValues.highlightedDates
                  : t.value.dates
              )
          : !1;
      },
      q = (k) => {
        const f = o(k.value);
        return (
          f &&
          (typeof t.value == "function"
            ? !t.value(k.value, f)
            : !t.value.options.highlightDisabled)
        );
      },
      S = (k) => {
        var f;
        return typeof t.value == "function"
          ? t.value(k.value)
          : (f = t.value.weekdays) == null
          ? void 0
          : f.includes(k.value.getDay());
      },
      B = (k) =>
        (n.range || n.weekPicker) &&
        (!(a.value.count > 0) || k.current) &&
        x() &&
        !(!k.current && n.hideOffsetDates) &&
        !_(k)
          ? O(k)
          : !1,
      $ = (k) => {
        const { isRangeStart: f, isRangeEnd: W } = I(k),
          U = n.range ? f || W : !1;
        return {
          dp__cell_offset: !k.current,
          dp__pointer:
            !n.disabled && !(!k.current && n.hideOffsetDates) && !o(k.value),
          dp__cell_disabled: o(k.value),
          dp__cell_highlight:
            !q(k) &&
            (j(k) || S(k)) &&
            !Y(k) &&
            !U &&
            !w(k) &&
            !(B(k) && n.weekPicker) &&
            !W,
          dp__cell_highlight_active: !q(k) && (j(k) || S(k)) && Y(k),
          dp__today: !n.noToday && Ge(k.value, l.value) && k.current,
        };
      },
      z = (k) => ({ dp__active_date: Y(k), dp__date_hover: F(k) }),
      N = (k) => ({
        ...H(k),
        ...A(k),
        dp__range_between_week: B(k) && n.weekPicker,
      }),
      I = (k) => {
        const f = a.value.count > 0 ? k.current && p(k) && x() : p(k) && x(),
          W =
            a.value.count > 0 ? k.current && p(k, !1) && x() : p(k, !1) && x();
        return { isRangeStart: f, isRangeEnd: W };
      },
      H = (k) => {
        const { isRangeStart: f, isRangeEnd: W } = I(k);
        return {
          dp__range_start: f,
          dp__range_end: W,
          dp__range_between: B(k) && !n.weekPicker,
          dp__date_hover_start: b(F(k), k, !0),
          dp__date_hover_end: b(F(k), k, !1),
        };
      },
      A = (k) => ({
        ...H(k),
        dp__cell_auto_range: y(k),
        dp__cell_auto_range_start: w(k),
        dp__cell_auto_range_end: T(k),
      }),
      G = (k) =>
        n.range
          ? n.autoRange
            ? A(k)
            : n.modelAuto
            ? { ...z(k), ...H(k) }
            : H(k)
          : n.weekPicker
          ? N(k)
          : z(k);
    return {
      setHoverDate: s,
      clearHoverDate: d,
      getDayClassData: (k) =>
        n.hideOffsetDates && !k.current
          ? {}
          : {
              ...$(k),
              ...G(k),
              [n.dayClass ? n.dayClass(k.value) : ""]: !0,
              [n.calendarCellClassName]: !!n.calendarCellClassName,
            },
    };
  },
  qa = (e) => {
    const { defaultedFilters: n, defaultedHighlight: a } = vt(e),
      t = () => {
        if (e.timezone) return e.timezone;
        if (e.utc) return "UTC";
      },
      o = (S) => {
        const B = It(i(oe(S))).toISOString(),
          [$] = B.split("T");
        return $;
      },
      i = (S) => (e.utc === "preserve" ? fu(S, t()) : ea(S, t())),
      r = (S) => {
        var B;
        const $ = e.maxDate ? Pt(S, i(oe(e.maxDate))) : !1,
          z = e.minDate ? kt(S, i(oe(e.minDate))) : !1,
          N = g(
            i(S),
            (B = e.arrMapValues) != null && B.disabledDates
              ? e.arrMapValues.disabledDates
              : e.disabledDates
          ),
          I = n.value.months.map((f) => +f).includes($e(S)),
          H = e.disabledWeekDays.length
            ? e.disabledWeekDays.some((f) => +f === c0(S))
            : !1,
          A = v(S),
          G = Re(S),
          k = G < +e.yearRange[0] || G > +e.yearRange[1];
        return !($ || z || N || I || k || H || A);
      },
      l = (S, B) => kt(...Ca(e.minDate, S, B)) || Ge(...Ca(e.minDate, S, B)),
      s = (S, B) => Pt(...Ca(e.maxDate, S, B)) || Ge(...Ca(e.maxDate, S, B)),
      d = (S, B, $) => {
        let z = !1;
        return (
          e.maxDate && $ && s(S, B) && (z = !0),
          e.minDate && !$ && l(S, B) && (z = !0),
          z
        );
      },
      g = (S, B) =>
        S
          ? B instanceof Map
            ? !!B.get(o(S))
            : Array.isArray(B)
            ? B.some(($) => Ge(i(oe($)), S))
            : B
            ? B(oe(JSON.parse(JSON.stringify(S))))
            : !1
          : !0,
      m = (S, B, $, z) => {
        let N = !1;
        return (
          z
            ? e.minDate && e.maxDate
              ? (N = d(S, B, $))
              : ((e.minDate && l(S, B)) || (e.maxDate && s(S, B))) && (N = !0)
            : (N = !0),
          N
        );
      },
      v = (S) => {
        var B, $, z, N, I;
        return Array.isArray(e.allowedDates) &&
          !((B = e.allowedDates) != null && B.length)
          ? !0
          : ($ = e.arrMapValues) != null && $.allowedDates
          ? !g(S, (z = e.arrMapValues) == null ? void 0 : z.allowedDates)
          : (N = e.allowedDates) != null && N.length
          ? !(
              (I = e.allowedDates) != null && I.some((H) => Ge(It(H), i(It(S))))
            )
          : !1;
      },
      p = (S) => !r(S),
      b = (S) =>
        e.noDisabledRange
          ? !Fs({ start: S[0], end: S[1] }).some((B) => p(B))
          : !0,
      _ = (S, B, $ = 0) => {
        if (Array.isArray(B) && B[$]) {
          const z = s_(S, B[$]),
            N = bu(B[$], S),
            I = N.length === 1 ? 0 : N.filter((A) => p(A)).length,
            H = Math.abs(z) - I;
          if (e.minRange && e.maxRange)
            return H >= +e.minRange && H <= +e.maxRange;
          if (e.minRange) return H >= +e.minRange;
          if (e.maxRange) return H <= +e.maxRange;
        }
        return !0;
      },
      T = (S) => new Map(S.map((B) => [o(B), !0])),
      y = (S) => Array.isArray(S) && S.length > 0,
      w = () => {
        const S = {
          disabledDates: null,
          allowedDates: null,
          highlightedDates: null,
        };
        return (
          y(e.allowedDates) && (S.allowedDates = T(e.allowedDates)),
          typeof a.value != "function" &&
            y(a.value.dates) &&
            (S.highlightedDates = T(a.value.dates)),
          y(e.disabledDates) && (S.disabledDates = T(e.disabledDates)),
          S
        );
      },
      O = () =>
        !e.enableTimePicker ||
        e.monthPicker ||
        e.yearPicker ||
        e.ignoreTimeValidation,
      C = (S) =>
        Array.isArray(S)
          ? [S[0] ? Qo(S[0]) : null, S[1] ? Qo(S[1]) : null]
          : Qo(S),
      x = (S, B, $) =>
        S.find((z) =>
          +z.hours === Jt(B) && z.minutes === "*"
            ? !0
            : +z.minutes === ma(B) && +z.hours === Jt(B)
        ) && $,
      F = (S, B, $) => {
        const [z, N] = S,
          [I, H] = B;
        return !x(z, I, $) && !x(N, H, $) && $;
      },
      Y = (S, B) => {
        const $ = Array.isArray(B) ? B : [B];
        return Array.isArray(e.disabledTimes)
          ? Array.isArray(e.disabledTimes[0])
            ? F(e.disabledTimes, $, S)
            : !$.some((z) => x(e.disabledTimes, z, S))
          : S;
      },
      j = (S, B) => {
        const $ = Array.isArray(B)
            ? [Ha(B[0]), B[1] ? Ha(B[1]) : void 0]
            : Ha(B),
          z = !e.disabledTimes($);
        return S && z;
      },
      q = (S, B) =>
        e.disabledTimes
          ? Array.isArray(e.disabledTimes)
            ? Y(B, S)
            : j(B, S)
          : B;
    return {
      isDisabled: p,
      validateDate: r,
      validateMonthYearInRange: m,
      isDateRangeAllowed: b,
      checkMinMaxRange: _,
      matchDate: g,
      mapDatesArrToMap: w,
      isValidTime: (S) => {
        let B = !0;
        if (!S || O()) return !0;
        const $ = !e.minDate && !e.maxDate ? C(S) : S;
        return (
          (e.maxTime || e.maxDate) &&
            (B = Wl(e.maxTime, e.maxDate, "max", bt($), B)),
          (e.minTime || e.minDate) &&
            (B = Wl(e.minTime, e.minDate, "min", bt($), B)),
          q(S, B)
        );
      },
    };
  },
  To = () => {
    const e = u(() => (t, o) => t?.includes(o)),
      n = u(() => (t, o) => t.count ? (t.solo ? !0 : o === 0) : !0),
      a = u(() => (t, o) => t.count ? (t.solo ? !0 : o === t.count - 1) : !0);
    return { hideNavigationButtons: e, showLeftIcon: n, showRightIcon: a };
  },
  Vk = (e, n, a) => {
    const t = E(0),
      o = ba({
        [Va.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
        [Va.calendar]: !1,
        [Va.header]: !1,
      }),
      i = u(() => e.monthPicker),
      r = (m) => {
        var v;
        if ((v = e.flow) != null && v.length) {
          if (!m && i.value) return g();
          (o[m] = !0), Object.keys(o).filter((p) => !o[p]).length || g();
        }
      },
      l = () => {
        var m;
        (m = e.flow) != null &&
          m.length &&
          t.value !== -1 &&
          ((t.value += 1), n("flow-step", t.value), g());
      },
      s = () => {
        t.value = -1;
      },
      d = (m, v, ...p) => {
        e.flow[t.value] === m && a.value && a.value[v](...p);
      },
      g = () => {
        d(ia.month, "toggleMonthPicker", !0),
          d(ia.year, "toggleYearPicker", !0),
          d(ia.calendar, "toggleTimePicker", !1, !0),
          d(ia.time, "toggleTimePicker", !0, !0);
        const m = e.flow[t.value];
        (m === ia.hours || m === ia.minutes || m === ia.seconds) &&
          d(m, "toggleTimePicker", !0, !0, m);
      };
    return { childMount: r, updateFlowStep: l, resetFlow: s, flowStep: t };
  },
  Co = {
    multiCalendars: {
      type: [Boolean, Number, String, Object],
      default: void 0,
    },
    modelValue: { type: [String, Date, Array, Object, Number], default: null },
    modelType: { type: String, default: null },
    position: { type: String, default: "center" },
    dark: { type: Boolean, default: !1 },
    format: { type: [String, Function], default: () => null },
    autoPosition: { type: Boolean, default: !0 },
    altPosition: { type: Function, default: null },
    transitions: { type: [Boolean, Object], default: !0 },
    formatLocale: { type: Object, default: null },
    utc: { type: [Boolean, String], default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    offset: { type: [Number, String], default: 10 },
    hideNavigation: { type: Array, default: () => [] },
    timezone: { type: String, default: null },
    emitTimezone: { type: String, default: null },
    vertical: { type: Boolean, default: !1 },
    disableMonthYearSelect: { type: Boolean, default: !1 },
    disableYearSelect: { type: Boolean, default: !1 },
    menuClassName: { type: String, default: null },
    dayClass: { type: Function, default: null },
    yearRange: { type: Array, default: () => [1900, 2100] },
    calendarCellClassName: { type: String, default: null },
    enableTimePicker: { type: Boolean, default: !0 },
    autoApply: { type: Boolean, default: !1 },
    disabledDates: { type: [Array, Function], default: () => [] },
    monthNameFormat: { type: String, default: "short" },
    startDate: { type: [Date, String], default: null },
    startTime: { type: [Object, Array], default: null },
    hideOffsetDates: { type: Boolean, default: !1 },
    autoRange: { type: [Number, String], default: null },
    noToday: { type: Boolean, default: !1 },
    disabledWeekDays: { type: Array, default: () => [] },
    allowedDates: { type: Array, default: null },
    nowButtonLabel: { type: String, default: "Now" },
    markers: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    spaceConfirm: { type: Boolean, default: !0 },
    monthChangeOnArrows: { type: Boolean, default: !0 },
    presetDates: { type: Array, default: () => [] },
    flow: { type: Array, default: () => [] },
    partialFlow: { type: Boolean, default: !1 },
    preventMinMaxNavigation: { type: Boolean, default: !1 },
    minRange: { type: [Number, String], default: null },
    maxRange: { type: [Number, String], default: null },
    multiDatesLimit: { type: [Number, String], default: null },
    reverseYears: { type: Boolean, default: !1 },
    weekPicker: { type: Boolean, default: !1 },
    filters: { type: Object, default: () => ({}) },
    arrowNavigation: { type: Boolean, default: !1 },
    disableTimeRangeValidation: { type: Boolean, default: !1 },
    highlight: { type: [Array, Function, Object], default: null },
    highlightWeekDays: { type: Array, default: null },
    highlightDisabledDays: { type: Boolean, default: !1 },
    teleport: { type: [String, Boolean, Object], default: null },
    teleportCenter: { type: Boolean, default: !1 },
    locale: { type: String, default: "en-Us" },
    weekNumName: { type: String, default: "W" },
    weekStart: { type: [Number, String], default: 1 },
    weekNumbers: { type: [String, Function, Object], default: null },
    calendarClassName: { type: String, default: null },
    monthChangeOnScroll: { type: [Boolean, String], default: !0 },
    dayNames: { type: [Function, Array], default: null },
    monthPicker: { type: Boolean, default: !1 },
    customProps: { type: Object, default: null },
    yearPicker: { type: Boolean, default: !1 },
    modelAuto: { type: Boolean, default: !1 },
    selectText: { type: String, default: "Select" },
    cancelText: { type: String, default: "Cancel" },
    previewFormat: { type: [String, Function], default: () => "" },
    multiDates: { type: Boolean, default: !1 },
    partialRange: { type: Boolean, default: !0 },
    ignoreTimeValidation: { type: Boolean, default: !1 },
    minDate: { type: [Date, String], default: null },
    maxDate: { type: [Date, String], default: null },
    minTime: { type: Object, default: null },
    maxTime: { type: Object, default: null },
    name: { type: String, default: null },
    placeholder: { type: String, default: "" },
    hideInputIcon: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    state: { type: Boolean, default: null },
    required: { type: Boolean, default: !1 },
    autocomplete: { type: String, default: "off" },
    inputClassName: { type: String, default: null },
    fixedStart: { type: Boolean, default: !1 },
    fixedEnd: { type: Boolean, default: !1 },
    timePicker: { type: Boolean, default: !1 },
    enableSeconds: { type: Boolean, default: !1 },
    is24: { type: Boolean, default: !0 },
    noHoursOverlay: { type: Boolean, default: !1 },
    noMinutesOverlay: { type: Boolean, default: !1 },
    noSecondsOverlay: { type: Boolean, default: !1 },
    hoursGridIncrement: { type: [String, Number], default: 1 },
    minutesGridIncrement: { type: [String, Number], default: 5 },
    secondsGridIncrement: { type: [String, Number], default: 5 },
    hoursIncrement: { type: [Number, String], default: 1 },
    minutesIncrement: { type: [Number, String], default: 1 },
    secondsIncrement: { type: [Number, String], default: 1 },
    range: { type: Boolean, default: !1 },
    uid: { type: String, default: null },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    inline: { type: [Boolean, Object], default: !1 },
    textInput: { type: [Boolean, Object], default: !1 },
    noDisabledRange: { type: Boolean, default: !1 },
    sixWeeks: { type: [Boolean, String], default: !1 },
    actionRow: { type: Object, default: () => ({}) },
    focusStartDate: { type: Boolean, default: !1 },
    disabledTimes: { type: [Function, Array], default: void 0 },
    showLastInRange: { type: Boolean, default: !0 },
    timePickerInline: { type: Boolean, default: !1 },
    calendar: { type: Function, default: null },
    config: { type: Object, default: void 0 },
    quarterPicker: { type: Boolean, default: !1 },
    yearFirst: { type: Boolean, default: !1 },
  },
  oa = {
    ...Co,
    shadow: { type: Boolean, default: !1 },
    flowStep: { type: Number, default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    arrMapValues: { type: Object, default: () => ({}) },
    noOverlayFocus: { type: Boolean, default: !1 },
  },
  Uk = { key: 1, class: "dp__input_wrap" },
  Yk = [
    "id",
    "name",
    "inputmode",
    "placeholder",
    "disabled",
    "readonly",
    "required",
    "value",
    "autocomplete",
    "aria-label",
    "aria-disabled",
    "aria-invalid",
  ],
  $k = { key: 2, class: "dp__clear_icon" },
  Fk = ie({
    compatConfig: { MODE: 3 },
    __name: "DatepickerInput",
    props: {
      isMenuOpen: { type: Boolean, default: !1 },
      inputValue: { type: String, default: "" },
      ...Co,
    },
    emits: [
      "clear",
      "open",
      "update:input-value",
      "set-input-date",
      "close",
      "select-date",
      "set-empty-date",
      "toggle",
      "focus-prev",
      "focus",
      "blur",
      "real-blur",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        {
          defaultedTextInput: i,
          defaultedAriaLabels: r,
          defaultedInline: l,
          defaultedConfig: s,
          getDefaultPattern: d,
          getDefaultStartTime: g,
        } = vt(o),
        { checkMinMaxRange: m } = qa(o),
        v = E(),
        p = E(null),
        b = E(!1),
        _ = E(!1),
        T = u(() => ({
          dp__pointer: !o.disabled && !o.readonly && !i.value.enabled,
          dp__disabled: o.disabled,
          dp__input_readonly: !i.value.enabled,
          dp__input: !0,
          dp__input_icon_pad: !o.hideInputIcon,
          dp__input_valid: !!o.state,
          dp__input_invalid: o.state === !1,
          dp__input_focus: b.value || o.isMenuOpen,
          dp__input_reg: !i.value.enabled,
          [o.inputClassName]: !!o.inputClassName,
        })),
        y = () => {
          t("set-input-date", null),
            o.autoApply && (t("set-empty-date"), (v.value = null));
        },
        w = (N) => {
          const I = g();
          return vk(
            N,
            i.value.format ?? d(),
            I ?? yu({}, o.enableSeconds),
            o.inputValue,
            _.value
          );
        },
        O = (N) => {
          const { rangeSeparator: I } = i.value,
            [H, A] = N.split(`${I}`);
          if (H) {
            const G = w(H.trim()),
              k = A ? w(A.trim()) : null,
              f = G && k ? [G, k] : [G];
            m(k, f, 0) && (v.value = G ? f : null);
          }
        },
        C = () => {
          _.value = !0;
        },
        x = (N) => {
          if (o.range) O(N);
          else if (o.multiDates) {
            const I = N.split(";");
            v.value = I.map((H) => w(H.trim())).filter((H) => H);
          } else v.value = w(N);
        },
        F = (N) => {
          var I;
          const H =
            typeof N == "string"
              ? N
              : (I = N.target) == null
              ? void 0
              : I.value;
          H !== ""
            ? (i.value.openMenu && !o.isMenuOpen && t("open"),
              x(H),
              t("set-input-date", v.value))
            : y(),
            (_.value = !1),
            t("update:input-value", H);
        },
        Y = (N) => {
          i.value.enabled
            ? (x(N.target.value),
              i.value.enterSubmit && Dr(v.value) && o.inputValue !== ""
                ? (t("set-input-date", v.value, !0), (v.value = null))
                : i.value.enterSubmit &&
                  o.inputValue === "" &&
                  ((v.value = null), t("clear")))
            : S(N);
        },
        j = (N) => {
          i.value.enabled && i.value.tabSubmit && x(N.target.value),
            i.value.tabSubmit && Dr(v.value) && o.inputValue !== ""
              ? (t("set-input-date", v.value, !0, !0), (v.value = null))
              : i.value.tabSubmit &&
                o.inputValue === "" &&
                ((v.value = null), t("clear", !0));
        },
        q = () => {
          var N;
          (b.value = !0),
            t("focus"),
            i.value.enabled &&
              i.value.selectOnFocus &&
              ((N = p.value) == null || N.select());
        },
        S = (N) => {
          N.preventDefault(),
            Ia(N, s.value, !0),
            i.value.enabled &&
            i.value.openMenu &&
            !l.value.input &&
            !o.isMenuOpen
              ? t("open")
              : i.value.enabled || t("toggle");
        },
        B = () => {
          t("real-blur"),
            (b.value = !1),
            (!o.isMenuOpen || (l.value.enabled && l.value.input)) && t("blur"),
            o.autoApply &&
              i.value.enabled &&
              v.value &&
              !o.isMenuOpen &&
              (t("set-input-date", v.value),
              t("select-date"),
              (v.value = null));
        },
        $ = (N) => {
          Ia(N, s.value, !0), t("clear");
        },
        z = (N) => {
          if (!i.value.enabled) {
            if (N.code === "Tab") return;
            N.preventDefault();
          }
        };
      return (
        n({
          focusInput: () => {
            var N;
            (N = p.value) == null || N.focus({ preventScroll: !0 });
          },
          setParsedDate: (N) => {
            v.value = N;
          },
        }),
        (N, I) => {
          var H;
          return (
            c(),
            h("div", { onClick: S }, [
              N.$slots.trigger && !N.$slots["dp-input"] && !L(l).enabled
                ? ae(N.$slots, "trigger", { key: 0 })
                : M("", !0),
              !N.$slots.trigger && (!L(l).enabled || L(l).input)
                ? (c(),
                  h("div", Uk, [
                    N.$slots["dp-input"] && !N.$slots.trigger && !L(l).enabled
                      ? ae(N.$slots, "dp-input", {
                          key: 0,
                          value: e.inputValue,
                          isMenuOpen: e.isMenuOpen,
                          onInput: F,
                          onEnter: Y,
                          onTab: j,
                          onClear: $,
                          onBlur: B,
                          onKeypress: z,
                          onPaste: C,
                          openMenu: () => N.$emit("open"),
                          closeMenu: () => N.$emit("close"),
                          toggleMenu: () => N.$emit("toggle"),
                        })
                      : M("", !0),
                    N.$slots["dp-input"]
                      ? M("", !0)
                      : (c(),
                        h(
                          "input",
                          {
                            key: 1,
                            id: N.uid ? `dp-input-${N.uid}` : void 0,
                            ref_key: "inputRef",
                            ref: p,
                            name: N.name,
                            class: X(T.value),
                            inputmode: L(i).enabled ? "text" : "none",
                            placeholder: N.placeholder,
                            disabled: N.disabled,
                            readonly: N.readonly,
                            required: N.required,
                            value: e.inputValue,
                            autocomplete: N.autocomplete,
                            "aria-label": (H = L(r)) == null ? void 0 : H.input,
                            "aria-disabled": N.disabled || void 0,
                            "aria-invalid": N.state === !1 ? !0 : void 0,
                            onInput: F,
                            onKeydown: [Oe(Y, ["enter"]), Oe(j, ["tab"]), z],
                            onBlur: B,
                            onFocus: q,
                            onKeypress: z,
                            onPaste: C,
                          },
                          null,
                          42,
                          Yk
                        )),
                    P("div", { onClick: I[2] || (I[2] = (A) => t("toggle")) }, [
                      N.$slots["input-icon"] && !N.hideInputIcon
                        ? (c(),
                          h(
                            "span",
                            {
                              key: 0,
                              class: "dp__input_icon",
                              onClick: I[0] || (I[0] = (A) => t("toggle")),
                            },
                            [ae(N.$slots, "input-icon")]
                          ))
                        : M("", !0),
                      !N.$slots["input-icon"] &&
                      !N.hideInputIcon &&
                      !N.$slots["dp-input"]
                        ? (c(),
                          K(L(yn), {
                            key: 1,
                            class: "dp__input_icon dp__input_icons",
                            onClick: I[1] || (I[1] = (A) => t("toggle")),
                          }))
                        : M("", !0),
                    ]),
                    N.$slots["clear-icon"] &&
                    e.inputValue &&
                    N.clearable &&
                    !N.disabled &&
                    !N.readonly
                      ? (c(),
                        h("span", $k, [
                          ae(N.$slots, "clear-icon", { clear: $ }),
                        ]))
                      : M("", !0),
                    N.clearable &&
                    !N.$slots["clear-icon"] &&
                    e.inputValue &&
                    !N.disabled &&
                    !N.readonly
                      ? (c(),
                        K(L(uu), {
                          key: 3,
                          class: "dp__clear_icon dp__input_icons",
                          onClick:
                            I[3] || (I[3] = Ie((A) => $(A), ["prevent"])),
                        }))
                      : M("", !0),
                  ]))
                : M("", !0),
            ])
          );
        }
      );
    },
  }),
  Wk = ["title"],
  Gk = { class: "dp__action_buttons" },
  qk = ["disabled"],
  jk = ie({
    compatConfig: { MODE: 3 },
    __name: "ActionRow",
    props: {
      menuMount: { type: Boolean, default: !1 },
      calendarWidth: { type: Number, default: 0 },
      ...oa,
    },
    emits: ["close-picker", "select-date", "select-now", "invalid-select"],
    setup(e, { emit: n }) {
      const a = n,
        t = e,
        {
          defaultedActionRow: o,
          defaultedPreviewFormat: i,
          defaultedMultiCalendars: r,
          defaultedTextInput: l,
          defaultedInline: s,
          getDefaultPattern: d,
        } = vt(t),
        { isValidTime: g } = qa(t),
        { buildMatrix: m } = Ma(),
        v = E(null),
        p = E(null);
      Me(() => {
        t.arrowNavigation && m([pt(v), pt(p)], "actionRow");
      });
      const b = u(() =>
          t.range && !t.partialRange && t.internalModelValue
            ? t.internalModelValue.length === 2
            : !0
        ),
        _ = u(() => !T.value || !y.value || !b.value),
        T = u(() =>
          !t.enableTimePicker || t.ignoreTimeValidation
            ? !0
            : g(t.internalModelValue)
        ),
        y = u(() =>
          t.monthPicker
            ? t.range && Array.isArray(t.internalModelValue)
              ? !t.internalModelValue.filter((S) => !j(S)).length
              : j(t.internalModelValue)
            : !0
        ),
        w = () => {
          const S = i.value;
          return t.timePicker || t.monthPicker, S(bt(t.internalModelValue));
        },
        O = () => {
          const S = t.internalModelValue;
          return r.value.count > 0
            ? `${C(S[0])} - ${C(S[1])}`
            : [C(S[0]), C(S[1])];
        },
        C = (S) =>
          wu(
            S,
            i.value,
            t.formatLocale,
            l.value.rangeSeparator,
            t.modelAuto,
            d()
          ),
        x = u(() =>
          !t.internalModelValue || !t.menuMount
            ? ""
            : typeof i.value == "string"
            ? Array.isArray(t.internalModelValue)
              ? t.internalModelValue.length === 2 && t.internalModelValue[1]
                ? O()
                : t.multiDates
                ? t.internalModelValue.map((S) => `${C(S)}`)
                : t.modelAuto
                ? `${C(t.internalModelValue[0])}`
                : `${C(t.internalModelValue[0])} -`
              : C(t.internalModelValue)
            : w()
        ),
        F = () => (t.multiDates ? "; " : " - "),
        Y = u(() => (Array.isArray(x.value) ? x.value.join(F()) : x.value)),
        j = (S) => {
          if (!t.monthPicker) return !0;
          let B = !0;
          const $ = oe(Xt(S));
          if (t.minDate && t.maxDate) {
            const z = oe(Xt(t.minDate)),
              N = oe(Xt(t.maxDate));
            return (Pt($, z) && kt($, N)) || Ge($, z) || Ge($, N);
          }
          if (t.minDate) {
            const z = oe(Xt(t.minDate));
            B = Pt($, z) || Ge($, z);
          }
          if (t.maxDate) {
            const z = oe(Xt(t.maxDate));
            B = kt($, z) || Ge($, z);
          }
          return B;
        },
        q = () => {
          T.value && y.value && b.value
            ? a("select-date")
            : a("invalid-select");
        };
      return (S, B) => (
        c(),
        h(
          "div",
          {
            class: "dp__action_row",
            style: Be(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {}),
          },
          [
            S.$slots["action-row"]
              ? ae(
                  S.$slots,
                  "action-row",
                  Xe(
                    je(
                      { key: 0 },
                      {
                        internalModelValue: S.internalModelValue,
                        disabled: _.value,
                        selectDate: () => S.$emit("select-date"),
                        closePicker: () => S.$emit("close-picker"),
                      }
                    )
                  )
                )
              : (c(),
                h(
                  ve,
                  { key: 1 },
                  [
                    L(o).showPreview
                      ? (c(),
                        h(
                          "div",
                          {
                            key: 0,
                            class: "dp__selection_preview",
                            title: Y.value,
                          },
                          [
                            S.$slots["action-preview"]
                              ? ae(S.$slots, "action-preview", {
                                  key: 0,
                                  value: S.internalModelValue,
                                })
                              : M("", !0),
                            S.$slots["action-preview"]
                              ? M("", !0)
                              : (c(),
                                h(ve, { key: 1 }, [Le(ee(Y.value), 1)], 64)),
                          ],
                          8,
                          Wk
                        ))
                      : M("", !0),
                    P("div", Gk, [
                      S.$slots["action-buttons"]
                        ? ae(S.$slots, "action-buttons", {
                            key: 0,
                            value: S.internalModelValue,
                          })
                        : M("", !0),
                      S.$slots["action-buttons"]
                        ? M("", !0)
                        : (c(),
                          h(
                            ve,
                            { key: 1 },
                            [
                              !L(s).enabled && L(o).showCancel
                                ? (c(),
                                  h(
                                    "button",
                                    {
                                      key: 0,
                                      ref_key: "cancelButtonRef",
                                      ref: v,
                                      type: "button",
                                      class:
                                        "dp__action_button dp__action_cancel",
                                      onClick:
                                        B[0] ||
                                        (B[0] = ($) => S.$emit("close-picker")),
                                      onKeydown: [
                                        B[1] ||
                                          (B[1] = Oe(
                                            ($) => S.$emit("close-picker"),
                                            ["enter"]
                                          )),
                                        B[2] ||
                                          (B[2] = Oe(
                                            ($) => S.$emit("close-picker"),
                                            ["space"]
                                          )),
                                      ],
                                    },
                                    ee(S.cancelText),
                                    545
                                  ))
                                : M("", !0),
                              L(o).showNow
                                ? (c(),
                                  h(
                                    "button",
                                    {
                                      key: 1,
                                      ref_key: "cancelButtonRef",
                                      ref: v,
                                      type: "button",
                                      class:
                                        "dp__action_button dp__action_cancel",
                                      onClick:
                                        B[3] ||
                                        (B[3] = ($) => S.$emit("select-now")),
                                      onKeydown: [
                                        B[4] ||
                                          (B[4] = Oe(
                                            ($) => S.$emit("select-now"),
                                            ["enter"]
                                          )),
                                        B[5] ||
                                          (B[5] = Oe(
                                            ($) => S.$emit("select-now"),
                                            ["space"]
                                          )),
                                      ],
                                    },
                                    ee(S.nowButtonLabel),
                                    545
                                  ))
                                : M("", !0),
                              L(o).showSelect
                                ? (c(),
                                  h(
                                    "button",
                                    {
                                      key: 2,
                                      ref_key: "selectButtonRef",
                                      ref: p,
                                      type: "button",
                                      class:
                                        "dp__action_button dp__action_select",
                                      disabled: _.value,
                                      onKeydown: [
                                        Oe(q, ["enter"]),
                                        Oe(q, ["space"]),
                                      ],
                                      onClick: q,
                                    },
                                    ee(S.selectText),
                                    41,
                                    qk
                                  ))
                                : M("", !0),
                            ],
                            64
                          )),
                    ]),
                  ],
                  64
                )),
          ],
          4
        )
      );
    },
  }),
  zk = ["onKeydown"],
  Kk = { class: "dp__selection_grid_header" },
  Qk = [
    "aria-selected",
    "aria-disabled",
    "onClick",
    "onKeydown",
    "onMouseover",
  ],
  Xk = ["aria-label"],
  Zn = ie({
    __name: "SelectionOverlay",
    props: {
      items: {},
      type: {},
      isLast: { type: Boolean },
      arrowNavigation: { type: Boolean },
      skipButtonRef: { type: Boolean },
      headerRefs: {},
      hideNavigation: {},
      escClose: { type: Boolean },
      useRelative: { type: Boolean },
      height: {},
      textInput: { type: [Boolean, Object] },
      config: {},
      noOverlayFocus: { type: Boolean },
      focusValue: {},
    },
    emits: ["selected", "toggle", "reset-flow", "hover-value"],
    setup(e, { expose: n, emit: a }) {
      const {
          setSelectionGrid: t,
          buildMultiLevelMatrix: o,
          setMonthPicker: i,
        } = Ma(),
        r = a,
        l = e,
        {
          defaultedAriaLabels: s,
          defaultedTextInput: d,
          defaultedConfig: g,
        } = vt(l),
        { hideNavigationButtons: m } = To(),
        v = E(!1),
        p = E(null),
        b = E(null),
        _ = E([]),
        T = E(),
        y = E(null),
        w = E(0),
        O = E(null);
      Hu(() => {
        p.value = null;
      }),
        Me(() => {
          At().then(() => B()), l.noOverlayFocus || x(), C(!0);
        }),
        qn(() => C(!1));
      const C = (k) => {
          var f;
          l.arrowNavigation &&
            ((f = l.headerRefs) != null && f.length ? i(k) : t(k));
        },
        x = () => {
          var k;
          const f = pt(b);
          f &&
            (d.value.enabled ||
              (p.value
                ? (k = p.value) == null || k.focus({ preventScroll: !0 })
                : f.focus({ preventScroll: !0 })),
            (v.value = f.clientHeight < f.scrollHeight));
        },
        F = u(() => ({
          dp__overlay: !0,
          "dp--overlay-absolute": !l.useRelative,
          "dp--overlay-relative": l.useRelative,
        })),
        Y = u(() =>
          l.useRelative ? { height: `${l.height}px`, width: "260px" } : void 0
        ),
        j = u(() => ({ dp__overlay_col: !0 })),
        q = u(() => ({
          dp__btn: !0,
          dp__button: !0,
          dp__overlay_action: !0,
          dp__over_action_scroll: v.value,
          dp__button_bottom: l.isLast,
        })),
        S = u(() => {
          var k, f;
          return {
            dp__overlay_container: !0,
            dp__container_flex:
              ((k = l.items) == null ? void 0 : k.length) <= 6,
            dp__container_block:
              ((f = l.items) == null ? void 0 : f.length) > 6,
          };
        });
      xe(
        () => l.items,
        () => B(),
        { deep: !0 }
      );
      const B = () => {
          At().then(() => {
            const k = pt(p),
              f = pt(b),
              W = pt(y),
              U = pt(O),
              Z = W ? W.getBoundingClientRect().height : 0;
            f &&
              (f.getBoundingClientRect().height
                ? (w.value = f.getBoundingClientRect().height - Z)
                : (w.value = g.value.modeHeight - Z)),
              k &&
                U &&
                (U.scrollTop =
                  k.offsetTop -
                  U.offsetTop -
                  (w.value / 2 - k.getBoundingClientRect().height) -
                  Z);
          });
        },
        $ = (k) => {
          k.disabled || r("selected", k.value);
        },
        z = () => {
          r("toggle"), r("reset-flow");
        },
        N = () => {
          l.escClose && z();
        },
        I = (k, f, W, U) => {
          k &&
            ((f.active || f.value === l.focusValue) && (p.value = k),
            l.arrowNavigation &&
              (Array.isArray(_.value[W])
                ? (_.value[W][U] = k)
                : (_.value[W] = [k]),
              H()));
        },
        H = () => {
          var k, f;
          const W =
            (k = l.headerRefs) != null && k.length
              ? [l.headerRefs].concat(_.value)
              : _.value.concat([l.skipButtonRef ? [] : [y.value]]);
          o(
            bt(W),
            (f = l.headerRefs) != null && f.length
              ? "monthPicker"
              : "selectionGrid"
          );
        },
        A = (k) => {
          l.arrowNavigation || Ia(k, g.value, !0);
        },
        G = (k) => {
          (T.value = k), r("hover-value", k);
        };
      return (
        n({ focusGrid: x }),
        (k, f) => {
          var W;
          return (
            c(),
            h(
              "div",
              {
                ref_key: "gridWrapRef",
                ref: b,
                class: X(F.value),
                style: Be(Y.value),
                role: "dialog",
                tabindex: "0",
                onKeydown: [
                  Oe(Ie(N, ["prevent"]), ["esc"]),
                  f[0] ||
                    (f[0] = Oe(
                      Ie((U) => A(U), ["prevent"]),
                      ["left"]
                    )),
                  f[1] ||
                    (f[1] = Oe(
                      Ie((U) => A(U), ["prevent"]),
                      ["up"]
                    )),
                  f[2] ||
                    (f[2] = Oe(
                      Ie((U) => A(U), ["prevent"]),
                      ["down"]
                    )),
                  f[3] ||
                    (f[3] = Oe(
                      Ie((U) => A(U), ["prevent"]),
                      ["right"]
                    )),
                ],
              },
              [
                P(
                  "div",
                  {
                    ref_key: "containerRef",
                    ref: O,
                    class: X(S.value),
                    role: "grid",
                    style: Be({ height: `${w.value}px` }),
                  },
                  [
                    P("div", Kk, [ae(k.$slots, "header")]),
                    k.$slots.overlay
                      ? ae(k.$slots, "overlay", { key: 0 })
                      : (c(!0),
                        h(
                          ve,
                          { key: 1 },
                          Te(
                            k.items,
                            (U, Z) => (
                              c(),
                              h(
                                "div",
                                {
                                  key: Z,
                                  class: X([
                                    "dp__overlay_row",
                                    { dp__flex_row: k.items.length >= 3 },
                                  ]),
                                  role: "row",
                                },
                                [
                                  (c(!0),
                                  h(
                                    ve,
                                    null,
                                    Te(
                                      U,
                                      (J, R) => (
                                        c(),
                                        h(
                                          "div",
                                          {
                                            key: J.value,
                                            ref_for: !0,
                                            ref: (D) => I(D, J, Z, R),
                                            role: "gridcell",
                                            class: X(j.value),
                                            "aria-selected": J.active,
                                            "aria-disabled":
                                              J.disabled || void 0,
                                            tabindex: "0",
                                            onClick: (D) => $(J),
                                            onKeydown: [
                                              Oe(
                                                Ie((D) => $(J), ["prevent"]),
                                                ["enter"]
                                              ),
                                              Oe(
                                                Ie((D) => $(J), ["prevent"]),
                                                ["space"]
                                              ),
                                            ],
                                            onMouseover: (D) => G(J.value),
                                          },
                                          [
                                            P(
                                              "div",
                                              { class: X(J.className) },
                                              [
                                                k.$slots.item
                                                  ? ae(k.$slots, "item", {
                                                      key: 0,
                                                      item: J,
                                                    })
                                                  : M("", !0),
                                                k.$slots.item
                                                  ? M("", !0)
                                                  : (c(),
                                                    h(
                                                      ve,
                                                      { key: 1 },
                                                      [Le(ee(J.text), 1)],
                                                      64
                                                    )),
                                              ],
                                              2
                                            ),
                                          ],
                                          42,
                                          Qk
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ],
                                2
                              )
                            )
                          ),
                          128
                        )),
                  ],
                  6
                ),
                k.$slots["button-icon"]
                  ? de(
                      (c(),
                      h(
                        "button",
                        {
                          key: 0,
                          ref_key: "toggleButton",
                          ref: y,
                          type: "button",
                          "aria-label":
                            (W = L(s)) == null ? void 0 : W.toggleOverlay,
                          class: X(q.value),
                          tabindex: "0",
                          onClick: z,
                          onKeydown: [Oe(z, ["enter"]), Oe(z, ["tab"])],
                        },
                        [ae(k.$slots, "button-icon")],
                        42,
                        Xk
                      )),
                      [[Wt, !L(m)(k.hideNavigation, k.type)]]
                    )
                  : M("", !0),
              ],
              46,
              zk
            )
          );
        }
      );
    },
  }),
  Po = ie({
    __name: "InstanceWrap",
    props: { multiCalendars: {}, stretch: { type: Boolean } },
    setup(e) {
      const n = e,
        a = u(() =>
          n.multiCalendars > 0 ? [...Array(n.multiCalendars).keys()] : [0]
        ),
        t = u(() => ({ dp__instance_calendar: n.multiCalendars > 0 }));
      return (o, i) => (
        c(),
        h(
          "div",
          {
            class: X({
              dp__menu_inner: !o.stretch,
              "dp--menu--inner-stretched": o.stretch,
              dp__flex_display: o.multiCalendars > 0,
            }),
          },
          [
            (c(!0),
            h(
              ve,
              null,
              Te(
                a.value,
                (r, l) => (
                  c(),
                  h(
                    "div",
                    { key: r, class: X(t.value) },
                    [ae(o.$slots, "default", { instance: r, index: l })],
                    2
                  )
                )
              ),
              128
            )),
          ],
          2
        )
      );
    },
  }),
  Zk = ["aria-label", "aria-disabled"],
  Rn = ie({
    compatConfig: { MODE: 3 },
    __name: "ArrowBtn",
    props: { ariaLabel: {}, disabled: { type: Boolean } },
    emits: ["activate", "set-ref"],
    setup(e, { emit: n }) {
      const a = n,
        t = E(null);
      return (
        Me(() => a("set-ref", t)),
        (o, i) => (
          c(),
          h(
            "button",
            {
              ref_key: "elRef",
              ref: t,
              type: "button",
              class: "dp__btn dp--arrow-btn-nav",
              tabindex: "0",
              "aria-label": o.ariaLabel,
              "aria-disabled": o.disabled || void 0,
              onClick: i[0] || (i[0] = (r) => o.$emit("activate")),
              onKeydown: [
                i[1] ||
                  (i[1] = Oe(
                    Ie((r) => o.$emit("activate"), ["prevent"]),
                    ["enter"]
                  )),
                i[2] ||
                  (i[2] = Oe(
                    Ie((r) => o.$emit("activate"), ["prevent"]),
                    ["space"]
                  )),
              ],
            },
            [
              P(
                "span",
                {
                  class: X([
                    "dp__inner_nav",
                    { dp__inner_nav_disabled: o.disabled },
                  ]),
                },
                [ae(o.$slots, "default")],
                2
              ),
            ],
            40,
            Zk
          )
        )
      );
    },
  }),
  Jk = { class: "dp--year-mode-picker" },
  e1 = ["aria-label"],
  Tu = ie({
    __name: "YearModePicker",
    props: {
      ...oa,
      showYearPicker: { type: Boolean, default: !1 },
      items: { type: Array, default: () => [] },
      instance: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      isDisabled: { type: Function, default: () => !1 },
    },
    emits: ["toggle-year-picker", "year-select", "handle-year"],
    setup(e, { emit: n }) {
      const a = n,
        t = e,
        { showRightIcon: o, showLeftIcon: i } = To(),
        {
          defaultedConfig: r,
          defaultedMultiCalendars: l,
          defaultedAriaLabels: s,
          defaultedTransitions: d,
        } = vt(t),
        { showTransition: g, transitionName: m } = Qn(d),
        v = (_ = !1, T) => {
          a("toggle-year-picker", { flow: _, show: T });
        },
        p = (_) => {
          a("year-select", _);
        },
        b = (_ = !1) => {
          a("handle-year", _);
        };
      return (_, T) => {
        var y, w, O;
        return (
          c(),
          h("div", Jk, [
            L(i)(L(l), e.instance)
              ? (c(),
                K(
                  Rn,
                  {
                    key: 0,
                    ref: "mpPrevIconRef",
                    "aria-label": (y = L(s)) == null ? void 0 : y.prevYear,
                    disabled: e.isDisabled(!1),
                    onActivate: T[0] || (T[0] = (C) => b(!1)),
                  },
                  {
                    default: he(() => [
                      _.$slots["arrow-left"]
                        ? ae(_.$slots, "arrow-left", { key: 0 })
                        : M("", !0),
                      _.$slots["arrow-left"]
                        ? M("", !0)
                        : (c(), K(L(ti), { key: 1 })),
                    ]),
                    _: 3,
                  },
                  8,
                  ["aria-label", "disabled"]
                ))
              : M("", !0),
            P(
              "button",
              {
                ref: "mpYearButtonRef",
                class: "dp__btn dp--year-select",
                type: "button",
                "aria-label": (w = L(s)) == null ? void 0 : w.openYearsOverlay,
                onClick: T[1] || (T[1] = () => v(!1)),
                onKeydown: T[2] || (T[2] = Oe(() => v(!1), ["enter"])),
              },
              [
                _.$slots.year
                  ? ae(_.$slots, "year", { key: 0, year: e.year })
                  : M("", !0),
                _.$slots.year
                  ? M("", !0)
                  : (c(), h(ve, { key: 1 }, [Le(ee(e.year), 1)], 64)),
              ],
              40,
              e1
            ),
            L(o)(L(l), e.instance)
              ? (c(),
                K(
                  Rn,
                  {
                    key: 1,
                    ref: "mpNextIconRef",
                    "aria-label": (O = L(s)) == null ? void 0 : O.nextYear,
                    disabled: e.isDisabled(!0),
                    onActivate: T[3] || (T[3] = (C) => b(!0)),
                  },
                  {
                    default: he(() => [
                      _.$slots["arrow-right"]
                        ? ae(_.$slots, "arrow-right", { key: 0 })
                        : M("", !0),
                      _.$slots["arrow-right"]
                        ? M("", !0)
                        : (c(), K(L(ai), { key: 1 })),
                    ]),
                    _: 3,
                  },
                  8,
                  ["aria-label", "disabled"]
                ))
              : M("", !0),
            Ee(
              xt,
              { name: L(m)(e.showYearPicker), css: L(g) },
              {
                default: he(() => [
                  e.showYearPicker
                    ? (c(),
                      K(
                        Zn,
                        {
                          key: 0,
                          items: e.items,
                          "text-input": _.textInput,
                          "esc-close": _.escClose,
                          config: _.config,
                          "is-last": _.autoApply && !L(r).keepActionRow,
                          "hide-navigation": _.hideNavigation,
                          type: "year",
                          onToggle: v,
                          onSelected: T[4] || (T[4] = (C) => p(C)),
                        },
                        Mt(
                          {
                            "button-icon": he(() => [
                              _.$slots["calendar-icon"]
                                ? ae(_.$slots, "calendar-icon", { key: 0 })
                                : M("", !0),
                              _.$slots["calendar-icon"]
                                ? M("", !0)
                                : (c(), K(L(yn), { key: 1 })),
                            ]),
                            _: 2,
                          },
                          [
                            _.$slots["year-overlay-value"]
                              ? {
                                  name: "item",
                                  fn: he(({ item: C }) => [
                                    ae(_.$slots, "year-overlay-value", {
                                      text: C.text,
                                      value: C.value,
                                    }),
                                  ]),
                                  key: "0",
                                }
                              : void 0,
                          ]
                        ),
                        1032,
                        [
                          "items",
                          "text-input",
                          "esc-close",
                          "config",
                          "is-last",
                          "hide-navigation",
                        ]
                      ))
                    : M("", !0),
                ]),
                _: 3,
              },
              8,
              ["name", "css"]
            ),
          ])
        );
      };
    },
  }),
  di = (e, n, a) => {
    if (n.value && Array.isArray(n.value))
      if (n.value.some((t) => Ge(e, t))) {
        const t = n.value.filter((o) => !Ge(o, e));
        n.value = t.length ? t : null;
      } else ((a && +a > n.value.length) || !a) && n.value.push(e);
    else n.value = [e];
  },
  mi = (e, n, a) => {
    let t = e.value ? e.value.slice() : [];
    return (
      t.length === 2 && t[1] !== null && (t = []),
      t.length
        ? kt(n, t[0])
          ? (t.unshift(n), a("range-start", t[0]), a("range-start", t[1]))
          : ((t[1] = n), a("range-end", n))
        : ((t = [n]), a("range-start", n)),
      (e.value = t),
      t
    );
  },
  Io = (e, n, a, t) => {
    e[0] && e[1] && a && n("auto-apply"),
      e[0] && !e[1] && t && a && n("auto-apply");
  },
  Cu = (e) => {
    Array.isArray(e.value) && e.value.length <= 2 && e.range
      ? (e.modelValue.value = e.value.map((n) => ea(oe(n), e.timezone)))
      : Array.isArray(e.value) ||
        (e.modelValue.value = ea(oe(e.value), e.timezone));
  },
  Pu = ({
    multiCalendars: e,
    highlight: n,
    calendars: a,
    modelValue: t,
    props: o,
    year: i,
    month: r,
    emit: l,
  }) => {
    const s = u(() => ui(o.yearRange, o.reverseYears)),
      d = E([!1]),
      g = u(() => (C, x) => {
        const F = at(Xt(new Date()), { month: r.value(C), year: i.value(C) });
        return _u(F, o.maxDate, o.minDate, o.preventMinMaxNavigation, x);
      }),
      m = () => {
        for (let C = 0; C < e.value.count; C++)
          if (C === 0) a.value[C] = a.value[0];
          else {
            const x = at(oe(), a.value[C - 1]);
            a.value[C] = { month: $e(x), year: Re(jr(x, 1)) };
          }
      },
      v = (C) => {
        if (!C) return m();
        const x = at(oe(), a.value[C]);
        return (a.value[0].year = Re(su(x, e.value.count - 1))), m();
      },
      p = (C) => (o.focusStartDate ? C[0] : C[1] ? C[1] : C[0]),
      b = () => {
        if (t.value) {
          const C = Array.isArray(t.value) ? p(t.value) : t.value;
          a.value[0] = { month: $e(C), year: Re(C) };
        }
      };
    Me(() => {
      b(), e.value.count && m();
    });
    const _ = (C, x) => {
        (a.value[x].year = C), e.value.count && !e.value.solo && v(x);
      },
      T = u(
        () => (C) =>
          vn(s.value, (x) => {
            const F = i.value(C) === x.value,
              Y = Gn(x.value, pn(o.minDate), pn(o.maxDate)),
              j = ci(n.value, x.value);
            return { active: F, disabled: Y, highlighted: j };
          })
      ),
      y = (C, x) => {
        _(C, x), O(x);
      },
      w = (C, x = !1) => {
        if (!g.value(C, x)) {
          const F = x ? i.value(C) + 1 : i.value(C) - 1;
          _(F, C);
        }
      },
      O = (C, x = !1, F) => {
        x || l("reset-flow"),
          F !== void 0 ? (d.value[C] = F) : (d.value[C] = !d.value[C]),
          d.value || l("overlay-closed");
      };
    return {
      isDisabled: g,
      groupedYears: T,
      showYearPicker: d,
      selectYear: _,
      toggleYearPicker: O,
      handleYearSelect: y,
      handleYear: w,
    };
  },
  t1 = (e, n) => {
    const {
        defaultedMultiCalendars: a,
        defaultedAriaLabels: t,
        defaultedTransitions: o,
        defaultedConfig: i,
        defaultedHighlight: r,
      } = vt(e),
      { modelValue: l, year: s, month: d, calendars: g } = Xn(e, n),
      m = u(() => gu(e.formatLocale, e.locale, e.monthNameFormat)),
      v = E(null),
      {
        selectYear: p,
        groupedYears: b,
        showYearPicker: _,
        toggleYearPicker: T,
        handleYearSelect: y,
        handleYear: w,
        isDisabled: O,
      } = Pu({
        modelValue: l,
        multiCalendars: a,
        highlight: r,
        calendars: g,
        year: s,
        month: d,
        props: e,
        emit: n,
      });
    Me(() => {
      e.startDate &&
        ((l.value && e.focusStartDate) || !l.value) &&
        p(Re(oe(e.startDate)), 0);
    });
    const C = (A) =>
        A ? { month: $e(A), year: Re(A) } : { month: null, year: null },
      x = () =>
        l.value
          ? Array.isArray(l.value)
            ? l.value.map((A) => C(A))
            : C(l.value)
          : C(),
      F = (A, G) => {
        const k = g.value[A],
          f = x();
        return Array.isArray(f)
          ? f.some((W) => W.year === k?.year && W.month === G)
          : k?.year === f.year && G === f.month;
      },
      Y = (A, G, k) => {
        var f, W;
        const U = x();
        return Array.isArray(U)
          ? s.value(G) === ((f = U[k]) == null ? void 0 : f.year) &&
              A === ((W = U[k]) == null ? void 0 : W.month)
          : !1;
      },
      j = (A, G) => {
        if (e.range) {
          const k = x();
          if (Array.isArray(l.value) && Array.isArray(k)) {
            const f = Y(A, G, 0) || Y(A, G, 1),
              W = fa(Xt(oe()), A, s.value(G));
            return So(l.value, v.value, W) && !f;
          }
          return !1;
        }
        return !1;
      },
      q = u(
        () => (A) =>
          vn(m.value, (G) => {
            const k = F(A, G.value),
              f =
                Gn(
                  G.value,
                  pu(s.value(A), e.minDate),
                  hu(s.value(A), e.maxDate)
                ) || wk(e.disabledDates, s.value(A)).includes(G.value),
              W = j(G.value, A),
              U = ku(r.value, G.value, s.value(A));
            return { active: k, disabled: f, isBetween: W, highlighted: U };
          })
      ),
      S = (A, G) => fa(Xt(oe()), A, s.value(G)),
      B = (A, G) => {
        const k = l.value ? l.value : Xt(new Date());
        (l.value = fa(k, A, s.value(G))), n("auto-apply");
      },
      $ = (A, G) => {
        const k = mi(l, S(A, G), n);
        Io(k, n, e.autoApply, e.modelAuto);
      },
      z = (A, G) => {
        di(S(A, G), l, e.multiDatesLimit), n("auto-apply", !0);
      },
      N = (A, G) => (
        (g.value[G].month = A),
        H(G, g.value[G].year, A),
        e.multiDates ? z(A, G) : e.range ? $(A, G) : B(A, G)
      ),
      I = (A, G) => {
        p(A, G), H(G, A, null);
      },
      H = (A, G, k) => {
        let f = k;
        if (!f && f !== 0) {
          const W = x();
          f = Array.isArray(W) ? W[A].month : W.month;
        }
        n("update-month-year", { instance: A, year: G, month: f });
      };
    return {
      groupedMonths: q,
      groupedYears: b,
      year: s,
      isDisabled: O,
      defaultedMultiCalendars: a,
      defaultedAriaLabels: t,
      defaultedTransitions: o,
      defaultedConfig: i,
      showYearPicker: _,
      modelValue: l,
      presetDate: (A, G) => {
        Cu({
          value: A,
          modelValue: l,
          range: e.range,
          timezone: G ? void 0 : e.timezone,
        }),
          n("auto-apply");
      },
      setHoverDate: (A, G) => {
        v.value = S(A, G);
      },
      selectMonth: N,
      selectYear: I,
      toggleYearPicker: T,
      handleYearSelect: y,
      handleYear: w,
      getModelMonthYear: x,
    };
  },
  a1 = ie({
    compatConfig: { MODE: 3 },
    __name: "MonthPicker",
    props: { ...oa },
    emits: [
      "update:internal-model-value",
      "overlay-closed",
      "reset-flow",
      "range-start",
      "range-end",
      "auto-apply",
      "update-month-year",
      "mount",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = Wa(),
        i = Ht(o, "yearMode"),
        r = e;
      Me(() => {
        r.shadow || t("mount", null);
      });
      const {
        groupedMonths: l,
        groupedYears: s,
        year: d,
        isDisabled: g,
        defaultedMultiCalendars: m,
        defaultedConfig: v,
        showYearPicker: p,
        modelValue: b,
        presetDate: _,
        setHoverDate: T,
        selectMonth: y,
        selectYear: w,
        toggleYearPicker: O,
        handleYearSelect: C,
        handleYear: x,
        getModelMonthYear: F,
      } = t1(r, t);
      return (
        n({
          getSidebarProps: () => ({
            modelValue: b,
            year: d,
            getModelMonthYear: F,
            selectMonth: y,
            selectYear: w,
            handleYear: x,
          }),
          presetDate: _,
          toggleYearPicker: (Y) => O(0, Y),
        }),
        (Y, j) => (
          c(),
          K(
            Po,
            { "multi-calendars": L(m).count, stretch: "" },
            {
              default: he(({ instance: q }) => [
                Y.$slots["month-year"]
                  ? ae(
                      Y.$slots,
                      "month-year",
                      Xe(
                        je(
                          { key: 0 },
                          {
                            year: L(d),
                            months: L(l)(q),
                            years: L(s)(q),
                            selectMonth: L(y),
                            selectYear: L(w),
                            instance: q,
                          }
                        )
                      )
                    )
                  : (c(),
                    K(
                      Zn,
                      {
                        key: 1,
                        items: L(l)(q),
                        "arrow-navigation": Y.arrowNavigation,
                        "is-last": Y.autoApply && !L(v).keepActionRow,
                        "esc-close": Y.escClose,
                        height: L(v).modeHeight,
                        config: Y.config,
                        "no-overlay-focus": !!(Y.noOverlayFocus || Y.textInput),
                        "use-relative": "",
                        type: "month",
                        onSelected: (S) => L(y)(S, q),
                        onHoverValue: (S) => L(T)(S, q),
                      },
                      {
                        header: he(() => [
                          Ee(
                            Tu,
                            je(Y.$props, {
                              items: L(s)(q),
                              instance: q,
                              "show-year-picker": L(p)[q],
                              year: L(d)(q),
                              "is-disabled": (S) => L(g)(q, S),
                              onHandleYear: (S) => L(x)(q, S),
                              onYearSelect: (S) => L(C)(S, q),
                              onToggleYearPicker: (S) =>
                                L(O)(q, S?.flow, S?.show),
                            }),
                            Mt({ _: 2 }, [
                              Te(L(i), (S, B) => ({
                                name: S,
                                fn: he(($) => [ae(Y.$slots, S, Xe(Ct($)))]),
                              })),
                            ]),
                            1040,
                            [
                              "items",
                              "instance",
                              "show-year-picker",
                              "year",
                              "is-disabled",
                              "onHandleYear",
                              "onYearSelect",
                              "onToggleYearPicker",
                            ]
                          ),
                        ]),
                        _: 2,
                      },
                      1032,
                      [
                        "items",
                        "arrow-navigation",
                        "is-last",
                        "esc-close",
                        "height",
                        "config",
                        "no-overlay-focus",
                        "onSelected",
                        "onHoverValue",
                      ]
                    )),
              ]),
              _: 3,
            },
            8,
            ["multi-calendars"]
          )
        )
      );
    },
  }),
  n1 = (e, n) => {
    const { modelValue: a } = Xn(e, n),
      t = E(null),
      { defaultedHighlight: o, defaultedFilters: i } = vt(e),
      r = E();
    Me(() => {
      e.startDate &&
        ((a.value && e.focusStartDate) || !a.value) &&
        (r.value = Re(oe(e.startDate)));
    });
    const l = (m) =>
        Array.isArray(a.value)
          ? a.value.some((v) => Re(v) === m)
          : a.value
          ? Re(a.value) === m
          : !1,
      s = (m) =>
        e.range && Array.isArray(a.value) ? So(a.value, t.value, g(m)) : !1,
      d = u(() =>
        vn(ui(e.yearRange, e.reverseYears), (m) => {
          const v = l(m.value),
            p =
              Gn(m.value, pn(e.minDate), pn(e.maxDate)) ||
              i.value.years.includes(m.value),
            b = s(m.value) && !v,
            _ = ci(o.value, m.value);
          return { active: v, disabled: p, isBetween: b, highlighted: _ };
        })
      ),
      g = (m) => ca(Xt(new Date()), m);
    return {
      groupedYears: d,
      modelValue: a,
      focusYear: r,
      setHoverValue: (m) => {
        t.value = ca(Xt(new Date()), m);
      },
      selectYear: (m) => {
        var v;
        if (e.multiDates)
          return (
            a.value
              ? Array.isArray(a.value) &&
                (((v = a.value) == null
                  ? void 0
                  : v.map((p) => Re(p))
                ).includes(m)
                  ? (a.value = a.value.filter((p) => Re(p) !== m))
                  : a.value.push(ca(It(oe()), m)))
              : (a.value = [ca(It(oe()), m)]),
            n("auto-apply", !0)
          );
        if (e.range) {
          const p = mi(a, g(m), n);
          return Io(p, n, e.autoApply, e.modelAuto);
        }
        (a.value = g(m)), n("auto-apply");
      },
    };
  },
  o1 = ie({
    compatConfig: { MODE: 3 },
    __name: "YearPicker",
    props: { ...oa },
    emits: [
      "update:internal-model-value",
      "reset-flow",
      "range-start",
      "range-end",
      "auto-apply",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        {
          groupedYears: i,
          modelValue: r,
          focusYear: l,
          selectYear: s,
          setHoverValue: d,
        } = n1(o, t),
        { defaultedConfig: g } = vt(o);
      return (
        n({ getSidebarProps: () => ({ modelValue: r, selectYear: s }) }),
        (m, v) => (
          c(),
          h("div", null, [
            m.$slots["month-year"]
              ? ae(
                  m.$slots,
                  "month-year",
                  Xe(je({ key: 0 }, { years: L(i), selectYear: L(s) }))
                )
              : (c(),
                K(
                  Zn,
                  {
                    key: 1,
                    items: L(i),
                    "is-last": m.autoApply && !L(g).keepActionRow,
                    height: L(g).modeHeight,
                    config: m.config,
                    "no-overlay-focus": !!(m.noOverlayFocus || m.textInput),
                    "focus-value": L(l),
                    type: "year",
                    "use-relative": "",
                    onSelected: L(s),
                    onHoverValue: L(d),
                  },
                  Mt({ _: 2 }, [
                    m.$slots["year-overlay-value"]
                      ? {
                          name: "item",
                          fn: he(({ item: p }) => [
                            ae(m.$slots, "year-overlay-value", {
                              text: p.text,
                              value: p.value,
                            }),
                          ]),
                          key: "0",
                        }
                      : void 0,
                  ]),
                  1032,
                  [
                    "items",
                    "is-last",
                    "height",
                    "config",
                    "no-overlay-focus",
                    "focus-value",
                    "onSelected",
                    "onHoverValue",
                  ]
                )),
          ])
        )
      );
    },
  }),
  r1 = { key: 0, class: "dp__time_input" },
  i1 = ["aria-label", "onKeydown", "onClick"],
  l1 = P("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1),
  s1 = P("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1),
  u1 = ["aria-label", "disabled", "onKeydown", "onClick"],
  c1 = ["aria-label", "onKeydown", "onClick"],
  d1 = P("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1),
  m1 = P("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1),
  g1 = { key: 0 },
  v1 = ["aria-label", "onKeydown"],
  p1 = ie({
    compatConfig: { MODE: 3 },
    __name: "TimeInput",
    props: {
      hours: { type: Number, default: 0 },
      minutes: { type: Number, default: 0 },
      seconds: { type: Number, default: 0 },
      closeTimePickerBtn: { type: Object, default: null },
      order: { type: Number, default: 0 },
      disabledTimesConfig: { type: Function, default: null },
      validateTime: { type: Function, default: () => !1 },
      ...oa,
    },
    emits: [
      "set-hours",
      "set-minutes",
      "update:hours",
      "update:minutes",
      "update:seconds",
      "reset-flow",
      "mounted",
      "overlay-closed",
      "am-pm-change",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        { setTimePickerElements: i, setTimePickerBackRef: r } = Ma(),
        {
          defaultedAriaLabels: l,
          defaultedTransitions: s,
          defaultedFilters: d,
          defaultedConfig: g,
        } = vt(o),
        { transitionName: m, showTransition: v } = Qn(s),
        p = ba({ hours: !1, minutes: !1, seconds: !1 }),
        b = E("AM"),
        _ = E(null),
        T = E([]);
      Me(() => {
        t("mounted");
      });
      const y = (D) =>
          at(new Date(), {
            hours: D.hours,
            minutes: D.minutes,
            seconds: o.enableSeconds ? D.seconds : 0,
            milliseconds: 0,
          }),
        w = u(() => (D) => N(D, o[D]) || C(D, o[D])),
        O = u(() => ({
          hours: o.hours,
          minutes: o.minutes,
          seconds: o.seconds,
        })),
        C = (D, pe) =>
          o.range && !o.disableTimeRangeValidation
            ? !o.validateTime(D, pe)
            : !1,
        x = (D, pe) => {
          if (o.range && !o.disableTimeRangeValidation) {
            const Se = pe ? +o[`${D}Increment`] : -+o[`${D}Increment`],
              ge = o[D] + Se;
            return !o.validateTime(D, ge);
          }
          return !1;
        },
        F = u(() => (D) => !H(+o[D] + +o[`${D}Increment`], D) || x(D, !0)),
        Y = u(() => (D) => !H(+o[D] - +o[`${D}Increment`], D) || x(D, !1)),
        j = (D, pe) => Ys(at(oe(), D), pe),
        q = (D, pe) => Aw(at(oe(), D), pe),
        S = u(() => ({
          dp__time_col: !0,
          dp__time_col_block: !o.timePickerInline,
          dp__time_col_reg_block:
            !o.enableSeconds && o.is24 && !o.timePickerInline,
          dp__time_col_reg_inline:
            !o.enableSeconds && o.is24 && o.timePickerInline,
          dp__time_col_reg_with_button: !o.enableSeconds && !o.is24,
          dp__time_col_sec: o.enableSeconds && o.is24,
          dp__time_col_sec_with_button: o.enableSeconds && !o.is24,
        })),
        B = u(() => {
          const D = [
            { type: "hours" },
            { type: "", separator: !0 },
            { type: "minutes" },
          ];
          return o.enableSeconds
            ? D.concat([{ type: "", separator: !0 }, { type: "seconds" }])
            : D;
        }),
        $ = u(() => B.value.filter((D) => !D.separator)),
        z = u(() => (D) => {
          if (D === "hours") {
            const pe = W(+o.hours);
            return { text: pe < 10 ? `0${pe}` : `${pe}`, value: pe };
          }
          return { text: o[D] < 10 ? `0${o[D]}` : `${o[D]}`, value: o[D] };
        }),
        N = (D, pe) => {
          var Se;
          if (!o.disabledTimesConfig) return !1;
          const ge = o.disabledTimesConfig(
            o.order,
            D === "hours" ? pe : void 0
          );
          return ge[D] ? !!((Se = ge[D]) != null && Se.includes(pe)) : !0;
        },
        I = (D) => {
          const pe = o.is24 ? 24 : 12,
            Se = D === "hours" ? pe : 60,
            ge = +o[`${D}GridIncrement`],
            me = D === "hours" && !o.is24 ? ge : 0,
            ce = [];
          for (let Q = me; Q < Se; Q += ge)
            ce.push({ value: Q, text: Q < 10 ? `0${Q}` : `${Q}` });
          return (
            D === "hours" && !o.is24 && ce.push({ value: 0, text: "12" }),
            vn(ce, (Q) => ({
              active: !1,
              disabled:
                d.value.times[D].includes(Q.value) ||
                !H(Q.value, D) ||
                N(D, Q.value) ||
                C(D, Q.value),
            }))
          );
        },
        H = (D, pe) => {
          const Se = o.minTime ? y(jo(o.minTime)) : null,
            ge = o.maxTime ? y(jo(o.maxTime)) : null,
            me = y(jo(O.value, pe, D));
          return Se && ge
            ? (Wn(me, ge) || nn(me, ge)) && (Fn(me, Se) || nn(me, Se))
            : Se
            ? Fn(me, Se) || nn(me, Se)
            : ge
            ? Wn(me, ge) || nn(me, ge)
            : !0;
        },
        A = (D) => o[`no${D[0].toUpperCase() + D.slice(1)}Overlay`],
        G = (D) => {
          A(D) || ((p[D] = !p[D]), p[D] || t("overlay-closed"));
        },
        k = (D) => (D === "hours" ? Jt : D === "minutes" ? ma : mn),
        f = (D, pe = !0) => {
          const Se = pe ? j : q,
            ge = pe ? +o[`${D}Increment`] : -+o[`${D}Increment`];
          H(+o[D] + ge, D) &&
            t(
              `update:${D}`,
              k(D)(Se({ [D]: +o[D] }, { [D]: +o[`${D}Increment`] }))
            );
        },
        W = (D) =>
          o.is24 ? D : (D >= 12 ? (b.value = "PM") : (b.value = "AM"), lk(D)),
        U = () => {
          b.value === "PM"
            ? ((b.value = "AM"), t("update:hours", o.hours - 12))
            : ((b.value = "PM"), t("update:hours", o.hours + 12)),
            t("am-pm-change", b.value);
        },
        Z = (D) => {
          p[D] = !0;
        },
        J = (D, pe, Se) => {
          if (D && o.arrowNavigation) {
            Array.isArray(T.value[pe])
              ? (T.value[pe][Se] = D)
              : (T.value[pe] = [D]);
            const ge = T.value.reduce(
              (me, ce) => ce.map((Q, ne) => [...(me[ne] || []), ce[ne]]),
              []
            );
            r(o.closeTimePickerBtn),
              _.value && (ge[1] = ge[1].concat(_.value)),
              i(ge, o.order);
          }
        },
        R = (D, pe) => (
          G(D),
          D === "hours" && !o.is24
            ? t(`update:${D}`, b.value === "PM" ? pe + 12 : pe)
            : t(`update:${D}`, pe)
        );
      return (
        n({ openChildCmp: Z }),
        (D, pe) => {
          var Se;
          return D.disabled
            ? M("", !0)
            : (c(),
              h("div", r1, [
                (c(!0),
                h(
                  ve,
                  null,
                  Te(B.value, (ge, me) => {
                    var ce, Q, ne;
                    return (
                      c(),
                      h(
                        "div",
                        { key: me, class: X(S.value) },
                        [
                          ge.separator
                            ? (c(), h(ve, { key: 0 }, [Le(" : ")], 64))
                            : (c(),
                              h(
                                ve,
                                { key: 1 },
                                [
                                  P(
                                    "button",
                                    {
                                      ref_for: !0,
                                      ref: (be) => J(be, me, 0),
                                      type: "button",
                                      class: X({
                                        dp__btn: !0,
                                        dp__inc_dec_button: !D.timePickerInline,
                                        dp__inc_dec_button_inline:
                                          D.timePickerInline,
                                        dp__tp_inline_btn_top:
                                          D.timePickerInline,
                                        dp__inc_dec_button_disabled: F.value(
                                          ge.type
                                        ),
                                      }),
                                      "aria-label":
                                        (ce = L(l)) == null
                                          ? void 0
                                          : ce.incrementValue(ge.type),
                                      tabindex: "0",
                                      onKeydown: [
                                        Oe(
                                          Ie((be) => f(ge.type), ["prevent"]),
                                          ["enter"]
                                        ),
                                        Oe(
                                          Ie((be) => f(ge.type), ["prevent"]),
                                          ["space"]
                                        ),
                                      ],
                                      onClick: (be) => f(ge.type),
                                    },
                                    [
                                      o.timePickerInline
                                        ? (c(), h(ve, { key: 1 }, [l1, s1], 64))
                                        : (c(),
                                          h(
                                            ve,
                                            { key: 0 },
                                            [
                                              D.$slots["arrow-up"]
                                                ? ae(D.$slots, "arrow-up", {
                                                    key: 0,
                                                  })
                                                : M("", !0),
                                              D.$slots["arrow-up"]
                                                ? M("", !0)
                                                : (c(), K(L(oi), { key: 1 })),
                                            ],
                                            64
                                          )),
                                    ],
                                    42,
                                    i1
                                  ),
                                  P(
                                    "button",
                                    {
                                      ref_for: !0,
                                      ref: (be) => J(be, me, 1),
                                      type: "button",
                                      "aria-label":
                                        (Q = L(l)) == null
                                          ? void 0
                                          : Q.openTpOverlay(ge.type),
                                      class: X({
                                        dp__time_display: !0,
                                        dp__time_display_block:
                                          !D.timePickerInline,
                                        dp__time_display_inline:
                                          D.timePickerInline,
                                        "dp--time-invalid": w.value(ge.type),
                                        "dp--time-overlay-btn": !w.value(
                                          ge.type
                                        ),
                                      }),
                                      disabled: A(ge.type),
                                      tabindex: "0",
                                      onKeydown: [
                                        Oe(
                                          Ie((be) => G(ge.type), ["prevent"]),
                                          ["enter"]
                                        ),
                                        Oe(
                                          Ie((be) => G(ge.type), ["prevent"]),
                                          ["space"]
                                        ),
                                      ],
                                      onClick: (be) => G(ge.type),
                                    },
                                    [
                                      D.$slots[ge.type]
                                        ? ae(D.$slots, ge.type, {
                                            key: 0,
                                            text: z.value(ge.type).text,
                                            value: z.value(ge.type).value,
                                          })
                                        : M("", !0),
                                      D.$slots[ge.type]
                                        ? M("", !0)
                                        : (c(),
                                          h(
                                            ve,
                                            { key: 1 },
                                            [Le(ee(z.value(ge.type).text), 1)],
                                            64
                                          )),
                                    ],
                                    42,
                                    u1
                                  ),
                                  P(
                                    "button",
                                    {
                                      ref_for: !0,
                                      ref: (be) => J(be, me, 2),
                                      type: "button",
                                      class: X({
                                        dp__btn: !0,
                                        dp__inc_dec_button: !D.timePickerInline,
                                        dp__inc_dec_button_inline:
                                          D.timePickerInline,
                                        dp__tp_inline_btn_bottom:
                                          D.timePickerInline,
                                        dp__inc_dec_button_disabled: Y.value(
                                          ge.type
                                        ),
                                      }),
                                      "aria-label":
                                        (ne = L(l)) == null
                                          ? void 0
                                          : ne.decrementValue(ge.type),
                                      tabindex: "0",
                                      onKeydown: [
                                        Oe(
                                          Ie(
                                            (be) => f(ge.type, !1),
                                            ["prevent"]
                                          ),
                                          ["enter"]
                                        ),
                                        Oe(
                                          Ie(
                                            (be) => f(ge.type, !1),
                                            ["prevent"]
                                          ),
                                          ["space"]
                                        ),
                                      ],
                                      onClick: (be) => f(ge.type, !1),
                                    },
                                    [
                                      o.timePickerInline
                                        ? (c(), h(ve, { key: 1 }, [d1, m1], 64))
                                        : (c(),
                                          h(
                                            ve,
                                            { key: 0 },
                                            [
                                              D.$slots["arrow-down"]
                                                ? ae(D.$slots, "arrow-down", {
                                                    key: 0,
                                                  })
                                                : M("", !0),
                                              D.$slots["arrow-down"]
                                                ? M("", !0)
                                                : (c(), K(L(ri), { key: 1 })),
                                            ],
                                            64
                                          )),
                                    ],
                                    42,
                                    c1
                                  ),
                                ],
                                64
                              )),
                        ],
                        2
                      )
                    );
                  }),
                  128
                )),
                D.is24
                  ? M("", !0)
                  : (c(),
                    h("div", g1, [
                      D.$slots["am-pm-button"]
                        ? ae(D.$slots, "am-pm-button", {
                            key: 0,
                            toggle: U,
                            value: b.value,
                          })
                        : M("", !0),
                      D.$slots["am-pm-button"]
                        ? M("", !0)
                        : (c(),
                          h(
                            "button",
                            {
                              key: 1,
                              ref_key: "amPmButton",
                              ref: _,
                              type: "button",
                              class: "dp__pm_am_button",
                              role: "button",
                              "aria-label":
                                (Se = L(l)) == null ? void 0 : Se.amPmButton,
                              tabindex: "0",
                              onClick: U,
                              onKeydown: [
                                Oe(Ie(U, ["prevent"]), ["enter"]),
                                Oe(Ie(U, ["prevent"]), ["space"]),
                              ],
                            },
                            ee(b.value),
                            41,
                            v1
                          )),
                    ])),
                (c(!0),
                h(
                  ve,
                  null,
                  Te(
                    $.value,
                    (ge, me) => (
                      c(),
                      K(
                        xt,
                        { key: me, name: L(m)(p[ge.type]), css: L(v) },
                        {
                          default: he(() => [
                            p[ge.type]
                              ? (c(),
                                K(
                                  Zn,
                                  {
                                    key: 0,
                                    items: I(ge.type),
                                    "is-last":
                                      D.autoApply && !L(g).keepActionRow,
                                    "esc-close": D.escClose,
                                    type: ge.type,
                                    "text-input": D.textInput,
                                    config: D.config,
                                    "arrow-navigation": D.arrowNavigation,
                                    onSelected: (ce) => R(ge.type, ce),
                                    onToggle: (ce) => G(ge.type),
                                    onResetFlow:
                                      pe[0] ||
                                      (pe[0] = (ce) => D.$emit("reset-flow")),
                                  },
                                  Mt(
                                    {
                                      "button-icon": he(() => [
                                        D.$slots["clock-icon"]
                                          ? ae(D.$slots, "clock-icon", {
                                              key: 0,
                                            })
                                          : M("", !0),
                                        D.$slots["clock-icon"]
                                          ? M("", !0)
                                          : (c(),
                                            K(
                                              hn(
                                                D.timePickerInline
                                                  ? L(yn)
                                                  : L(ni)
                                              ),
                                              { key: 1 }
                                            )),
                                      ]),
                                      _: 2,
                                    },
                                    [
                                      D.$slots[`${ge.type}-overlay-value`]
                                        ? {
                                            name: "item",
                                            fn: he(({ item: ce }) => [
                                              ae(
                                                D.$slots,
                                                `${ge.type}-overlay-value`,
                                                {
                                                  text: ce.text,
                                                  value: ce.value,
                                                }
                                              ),
                                            ]),
                                            key: "0",
                                          }
                                        : void 0,
                                    ]
                                  ),
                                  1032,
                                  [
                                    "items",
                                    "is-last",
                                    "esc-close",
                                    "type",
                                    "text-input",
                                    "config",
                                    "arrow-navigation",
                                    "onSelected",
                                    "onToggle",
                                  ]
                                ))
                              : M("", !0),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["name", "css"]
                      )
                    )
                  ),
                  128
                )),
              ]));
        }
      );
    },
  }),
  h1 = { class: "dp--tp-wrap" },
  f1 = ["aria-label", "tabindex"],
  b1 = ["tabindex"],
  y1 = ["aria-label"],
  Iu = ie({
    compatConfig: { MODE: 3 },
    __name: "TimePicker",
    props: {
      hours: { type: [Number, Array], default: 0 },
      minutes: { type: [Number, Array], default: 0 },
      seconds: { type: [Number, Array], default: 0 },
      disabledTimesConfig: { type: Function, default: null },
      validateTime: { type: Function, default: () => !1 },
      ...oa,
    },
    emits: [
      "update:hours",
      "update:minutes",
      "update:seconds",
      "mount",
      "reset-flow",
      "overlay-opened",
      "overlay-closed",
      "am-pm-change",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        { buildMatrix: i, setTimePicker: r } = Ma(),
        l = Wa(),
        {
          defaultedTransitions: s,
          defaultedAriaLabels: d,
          defaultedTextInput: g,
          defaultedConfig: m,
        } = vt(o),
        { transitionName: v, showTransition: p } = Qn(s),
        { hideNavigationButtons: b } = To(),
        _ = E(null),
        T = E(null),
        y = E([]),
        w = E(null);
      Me(() => {
        t("mount"),
          !o.timePicker && o.arrowNavigation
            ? i([pt(_.value)], "time")
            : r(!0, o.timePicker);
      });
      const O = u(() =>
          o.range && o.modelAuto ? vu(o.internalModelValue) : !0
        ),
        C = E(!1),
        x = (I) => ({
          hours: Array.isArray(o.hours) ? o.hours[I] : o.hours,
          minutes: Array.isArray(o.minutes) ? o.minutes[I] : o.minutes,
          seconds: Array.isArray(o.seconds) ? o.seconds[I] : o.seconds,
        }),
        F = u(() => {
          const I = [];
          if (o.range) for (let H = 0; H < 2; H++) I.push(x(H));
          else I.push(x(0));
          return I;
        }),
        Y = (I, H = !1, A = "") => {
          H || t("reset-flow"),
            (C.value = I),
            t(I ? "overlay-opened" : "overlay-closed"),
            o.arrowNavigation && r(I),
            At(() => {
              A !== "" && y.value[0] && y.value[0].openChildCmp(A);
            });
        },
        j = u(() => ({
          dp__btn: !0,
          dp__button: !0,
          dp__button_bottom: o.autoApply && !m.value.keepActionRow,
        })),
        q = Ht(l, "timePicker"),
        S = (I, H, A) =>
          o.range ? (H === 0 ? [I, F.value[1][A]] : [F.value[0][A], I]) : I,
        B = (I) => {
          t("update:hours", I);
        },
        $ = (I) => {
          t("update:minutes", I);
        },
        z = (I) => {
          t("update:seconds", I);
        },
        N = () => {
          if (w.value && !g.value.enabled && !o.noOverlayFocus) {
            const I = uk(w.value);
            I && I.focus({ preventScroll: !0 });
          }
        };
      return (
        n({ toggleTimePicker: Y }),
        (I, H) => {
          var A;
          return (
            c(),
            h("div", h1, [
              !I.timePicker && !I.timePickerInline
                ? de(
                    (c(),
                    h(
                      "button",
                      {
                        key: 0,
                        ref_key: "openTimePickerBtn",
                        ref: _,
                        type: "button",
                        class: X(j.value),
                        "aria-label":
                          (A = L(d)) == null ? void 0 : A.openTimePicker,
                        tabindex: I.noOverlayFocus ? void 0 : 0,
                        onKeydown: [
                          H[0] || (H[0] = Oe((G) => Y(!0), ["enter"])),
                          H[1] || (H[1] = Oe((G) => Y(!0), ["space"])),
                        ],
                        onClick: H[2] || (H[2] = (G) => Y(!0)),
                      },
                      [
                        I.$slots["clock-icon"]
                          ? ae(I.$slots, "clock-icon", { key: 0 })
                          : M("", !0),
                        I.$slots["clock-icon"]
                          ? M("", !0)
                          : (c(), K(L(ni), { key: 1 })),
                      ],
                      42,
                      f1
                    )),
                    [[Wt, !L(b)(I.hideNavigation, "time")]]
                  )
                : M("", !0),
              Ee(
                xt,
                { name: L(v)(C.value), css: L(p) && !I.timePickerInline },
                {
                  default: he(() => {
                    var G;
                    return [
                      C.value || I.timePicker || I.timePickerInline
                        ? (c(),
                          h(
                            "div",
                            {
                              key: 0,
                              ref_key: "overlayRef",
                              ref: w,
                              class: X({
                                dp__overlay: !I.timePickerInline,
                                "dp--overlay-absolute":
                                  !o.timePicker && !I.timePickerInline,
                                "dp--overlay-relative": o.timePicker,
                              }),
                              style: Be(
                                I.timePicker
                                  ? { height: `${L(m).modeHeight}px` }
                                  : void 0
                              ),
                              tabindex: I.timePickerInline ? void 0 : 0,
                            },
                            [
                              P(
                                "div",
                                {
                                  class: X(
                                    I.timePickerInline
                                      ? "dp__time_picker_inline_container"
                                      : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                                  ),
                                  style: { display: "flex" },
                                },
                                [
                                  I.$slots["time-picker-overlay"]
                                    ? ae(I.$slots, "time-picker-overlay", {
                                        key: 0,
                                        hours: e.hours,
                                        minutes: e.minutes,
                                        seconds: e.seconds,
                                        setHours: B,
                                        setMinutes: $,
                                        setSeconds: z,
                                      })
                                    : M("", !0),
                                  I.$slots["time-picker-overlay"]
                                    ? M("", !0)
                                    : (c(),
                                      h(
                                        "div",
                                        {
                                          key: 1,
                                          class: X(
                                            I.timePickerInline
                                              ? "dp__flex"
                                              : "dp__overlay_row dp__flex_row"
                                          ),
                                        },
                                        [
                                          (c(!0),
                                          h(
                                            ve,
                                            null,
                                            Te(F.value, (k, f) =>
                                              de(
                                                (c(),
                                                K(
                                                  p1,
                                                  je(
                                                    { key: f },
                                                    {
                                                      ...I.$props,
                                                      order: f,
                                                      hours: k.hours,
                                                      minutes: k.minutes,
                                                      seconds: k.seconds,
                                                      closeTimePickerBtn:
                                                        T.value,
                                                      disabledTimesConfig:
                                                        e.disabledTimesConfig,
                                                      disabled:
                                                        f === 0
                                                          ? I.fixedStart
                                                          : I.fixedEnd,
                                                    },
                                                    {
                                                      ref_for: !0,
                                                      ref_key: "timeInputRefs",
                                                      ref: y,
                                                      "validate-time": (W, U) =>
                                                        e.validateTime(
                                                          W,
                                                          S(U, f, W)
                                                        ),
                                                      "onUpdate:hours": (W) =>
                                                        B(S(W, f, "hours")),
                                                      "onUpdate:minutes": (W) =>
                                                        $(S(W, f, "minutes")),
                                                      "onUpdate:seconds": (W) =>
                                                        z(S(W, f, "seconds")),
                                                      onMounted: N,
                                                      onOverlayClosed: N,
                                                      onAmPmChange:
                                                        H[3] ||
                                                        (H[3] = (W) =>
                                                          I.$emit(
                                                            "am-pm-change",
                                                            W
                                                          )),
                                                    }
                                                  ),
                                                  Mt({ _: 2 }, [
                                                    Te(L(q), (W, U) => ({
                                                      name: W,
                                                      fn: he((Z) => [
                                                        ae(
                                                          I.$slots,
                                                          W,
                                                          Xe(Ct(Z))
                                                        ),
                                                      ]),
                                                    })),
                                                  ]),
                                                  1040,
                                                  [
                                                    "validate-time",
                                                    "onUpdate:hours",
                                                    "onUpdate:minutes",
                                                    "onUpdate:seconds",
                                                  ]
                                                )),
                                                [[Wt, f === 0 ? !0 : O.value]]
                                              )
                                            ),
                                            128
                                          )),
                                        ],
                                        2
                                      )),
                                  !I.timePicker && !I.timePickerInline
                                    ? de(
                                        (c(),
                                        h(
                                          "button",
                                          {
                                            key: 2,
                                            ref_key: "closeTimePickerBtn",
                                            ref: T,
                                            type: "button",
                                            class: X(j.value),
                                            "aria-label":
                                              (G = L(d)) == null
                                                ? void 0
                                                : G.closeTimePicker,
                                            tabindex: "0",
                                            onKeydown: [
                                              H[4] ||
                                                (H[4] = Oe(
                                                  (k) => Y(!1),
                                                  ["enter"]
                                                )),
                                              H[5] ||
                                                (H[5] = Oe(
                                                  (k) => Y(!1),
                                                  ["space"]
                                                )),
                                            ],
                                            onClick:
                                              H[6] || (H[6] = (k) => Y(!1)),
                                          },
                                          [
                                            I.$slots["calendar-icon"]
                                              ? ae(I.$slots, "calendar-icon", {
                                                  key: 0,
                                                })
                                              : M("", !0),
                                            I.$slots["calendar-icon"]
                                              ? M("", !0)
                                              : (c(), K(L(yn), { key: 1 })),
                                          ],
                                          42,
                                          y1
                                        )),
                                        [[Wt, !L(b)(I.hideNavigation, "time")]]
                                      )
                                    : M("", !0),
                                ],
                                2
                              ),
                            ],
                            14,
                            b1
                          ))
                        : M("", !0),
                    ];
                  }),
                  _: 3,
                },
                8,
                ["name", "css"]
              ),
            ])
          );
        }
      );
    },
  }),
  Eu = (e, n, a, t) => {
    const o = (y, w) => (Array.isArray(n[y]) ? n[y][w] : n[y]),
      i = (y) =>
        e.enableSeconds
          ? Array.isArray(n.seconds)
            ? n.seconds[y]
            : n.seconds
          : 0,
      r = (y, w) =>
        y
          ? w !== void 0
            ? Ea(y, o("hours", w), o("minutes", w), i(w))
            : Ea(y, n.hours, n.minutes, i())
          : ei(oe(), i(w)),
      l = (y, w) => {
        n[y] = w;
      },
      s = (y, w) => {
        const O = Object.fromEntries(
          Object.keys(n).map((C) => (C === y ? [C, w] : [C, n[C]].slice()))
        );
        if (e.range && !e.disableTimeRangeValidation) {
          const C = (F) =>
              a.value
                ? Ea(a.value[F], O.hours[F], O.minutes[F], O.seconds[F])
                : null,
            x = (F) => Jr(a.value[F], 0);
          return !(Ge(C(0), C(1)) && (Fn(C(0), x(1)) || Wn(C(1), x(0))));
        }
        return !0;
      },
      d = (y, w) => {
        s(y, w) && (l(y, w), t && t());
      },
      g = (y) => {
        d("hours", y);
      },
      m = (y) => {
        d("minutes", y);
      },
      v = (y) => {
        d("seconds", y);
      },
      p = (y, w, O, C) => {
        w && g(y), !w && !O && m(y), O && v(y), a.value && C(a.value);
      },
      b = (y) => {
        if (y) {
          const w = Array.isArray(y),
            O = w ? [+y[0].hours, +y[1].hours] : +y.hours,
            C = w ? [+y[0].minutes, +y[1].minutes] : +y.minutes,
            x = w ? [+y[0].seconds, +y[1].seconds] : +y.seconds;
          l("hours", O), l("minutes", C), e.enableSeconds && l("seconds", x);
        }
      },
      _ = (y, w) => {
        const O = {
          hours: Array.isArray(n.hours) ? n.hours[y] : n.hours,
          disabledArr: [],
        };
        return (
          (w || w === 0) && (O.hours = w),
          Array.isArray(e.disabledTimes) &&
            (O.disabledArr =
              e.range && Array.isArray(e.disabledTimes[y])
                ? e.disabledTimes[y]
                : e.disabledTimes),
          O
        );
      },
      T = u(() => (y, w) => {
        var O;
        if (Array.isArray(e.disabledTimes)) {
          const { disabledArr: C, hours: x } = _(y, w),
            F = C.filter((Y) => +Y.hours === x);
          return ((O = F[0]) == null ? void 0 : O.minutes) === "*"
            ? { hours: [x], minutes: void 0, seconds: void 0 }
            : {
                hours: [],
                minutes: F?.map((Y) => +Y.minutes) ?? [],
                seconds: F?.map((Y) => (Y.seconds ? +Y.seconds : void 0)) ?? [],
              };
        }
        return { hours: [], minutes: [], seconds: [] };
      });
    return {
      setTime: l,
      updateHours: g,
      updateMinutes: m,
      updateSeconds: v,
      getSetDateTime: r,
      updateTimeValues: p,
      getSecondsValue: i,
      assignStartTime: b,
      validateTime: s,
      disabledTimesConfig: T,
    };
  },
  _1 = (e, n) => {
    const { modelValue: a, time: t } = Xn(e, n),
      { defaultedStartTime: o } = vt(e),
      {
        updateTimeValues: i,
        getSetDateTime: r,
        setTime: l,
        assignStartTime: s,
        disabledTimesConfig: d,
        validateTime: g,
      } = Eu(e, t, a),
      m = (w) => {
        const { hours: O, minutes: C, seconds: x } = w;
        return { hours: +O, minutes: +C, seconds: x ? +x : 0 };
      },
      v = () => {
        if (e.startTime) {
          if (Array.isArray(e.startTime)) {
            const O = m(e.startTime[0]),
              C = m(e.startTime[1]);
            return [at(oe(), O), at(oe(), C)];
          }
          const w = m(e.startTime);
          return at(oe(), w);
        }
        return e.range ? [null, null] : null;
      },
      p = () => {
        if (e.range) {
          const [w, O] = v();
          a.value = [r(w, 0), r(O, 1)];
        } else a.value = r(v());
      },
      b = (w) =>
        Array.isArray(w) ? [Ha(oe(w[0])), Ha(oe(w[1]))] : [Ha(w ?? oe())],
      _ = (w, O, C) => {
        l("hours", w), l("minutes", O), l("seconds", e.enableSeconds ? C : 0);
      },
      T = () => {
        const [w, O] = b(a.value);
        return e.range
          ? _(
              [w.hours, O.hours],
              [w.minutes, O.minutes],
              [w.seconds, O.minutes]
            )
          : _(w.hours, w.minutes, w.seconds);
      };
    Me(() => {
      if (!e.shadow) return s(o.value), a.value ? T() : p();
    });
    const y = () => {
      Array.isArray(a.value)
        ? (a.value = a.value.map((w, O) => w && r(w, O)))
        : (a.value = r(a.value)),
        n("time-update");
    };
    return {
      modelValue: a,
      time: t,
      disabledTimesConfig: d,
      updateTime: (w, O = !0, C = !1) => {
        i(w, O, C, y);
      },
      validateTime: g,
    };
  },
  w1 = ie({
    compatConfig: { MODE: 3 },
    __name: "TimePickerSolo",
    props: { ...oa },
    emits: ["update:internal-model-value", "time-update", "am-pm-change"],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        i = Wa(),
        r = Ht(i, "timePicker"),
        {
          time: l,
          modelValue: s,
          disabledTimesConfig: d,
          updateTime: g,
          validateTime: m,
        } = _1(o, t);
      return (
        n({
          getSidebarProps: () => ({ modelValue: s, time: l, updateTime: g }),
        }),
        (v, p) => (
          c(),
          K(
            Po,
            { "multi-calendars": 0, stretch: "" },
            {
              default: he(() => [
                Ee(
                  Iu,
                  je(v.$props, {
                    hours: L(l).hours,
                    minutes: L(l).minutes,
                    seconds: L(l).seconds,
                    "internal-model-value": v.internalModelValue,
                    "disabled-times-config": L(d),
                    "validate-time": L(m),
                    "onUpdate:hours": p[0] || (p[0] = (b) => L(g)(b)),
                    "onUpdate:minutes": p[1] || (p[1] = (b) => L(g)(b, !1)),
                    "onUpdate:seconds": p[2] || (p[2] = (b) => L(g)(b, !1, !0)),
                    onAmPmChange:
                      p[3] || (p[3] = (b) => v.$emit("am-pm-change", b)),
                  }),
                  Mt({ _: 2 }, [
                    Te(L(r), (b, _) => ({
                      name: b,
                      fn: he((T) => [ae(v.$slots, b, Xe(Ct(T)))]),
                    })),
                  ]),
                  1040,
                  [
                    "hours",
                    "minutes",
                    "seconds",
                    "internal-model-value",
                    "disabled-times-config",
                    "validate-time",
                  ]
                ),
              ]),
              _: 3,
            }
          )
        )
      );
    },
  }),
  k1 = { class: "dp__month_year_row" },
  S1 = ["aria-label", "onClick", "onKeydown"],
  T1 = ie({
    compatConfig: { MODE: 3 },
    __name: "DpHeader",
    props: {
      month: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      instance: { type: Number, default: 0 },
      years: { type: Array, default: () => [] },
      months: { type: Array, default: () => [] },
      ...oa,
    },
    emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        {
          defaultedTransitions: i,
          defaultedAriaLabels: r,
          defaultedMultiCalendars: l,
          defaultedFilters: s,
          defaultedConfig: d,
          defaultedHighlight: g,
        } = vt(o),
        { transitionName: m, showTransition: v } = Qn(i),
        { buildMatrix: p } = Ma(),
        {
          handleMonthYearChange: b,
          isDisabled: _,
          updateMonthYear: T,
        } = Lk(o, t),
        { showLeftIcon: y, showRightIcon: w } = To(),
        O = E(!1),
        C = E(!1),
        x = E([null, null, null, null]);
      Me(() => {
        t("mount");
      });
      const F = (f) => ({
          get: () => o[f],
          set: (W) => {
            const U = f === Kt.month ? Kt.year : Kt.month;
            t("update-month-year", { [f]: W, [U]: o[U] }),
              f === Kt.month ? N(!0) : I(!0);
          },
        }),
        Y = u(F(Kt.month)),
        j = u(F(Kt.year)),
        q = u(() => (f) => ({
          month: o.month,
          year: o.year,
          items: f === Kt.month ? o.months : o.years,
          instance: o.instance,
          updateMonthYear: T,
          toggle: f === Kt.month ? N : I,
        })),
        S = u(
          () =>
            o.months.find((W) => W.value === o.month) || { text: "", value: 0 }
        ),
        B = u(() =>
          vn(o.months, (f) => {
            const W = o.month === f.value,
              U =
                Gn(f.value, pu(o.year, o.minDate), hu(o.year, o.maxDate)) ||
                s.value.months.includes(f.value),
              Z = ku(g.value, f.value, o.year);
            return { active: W, disabled: U, highlighted: Z };
          })
        ),
        $ = u(() =>
          vn(o.years, (f) => {
            const W = o.year === f.value,
              U =
                Gn(f.value, pn(o.minDate), pn(o.maxDate)) ||
                s.value.years.includes(f.value),
              Z = ci(g.value, f.value);
            return { active: W, disabled: U, highlighted: Z };
          })
        ),
        z = (f, W) => {
          W !== void 0 ? (f.value = W) : (f.value = !f.value),
            f.value || t("overlay-closed");
        },
        N = (f = !1, W) => {
          H(f), z(O, W);
        },
        I = (f = !1, W) => {
          H(f), z(C, W);
        },
        H = (f) => {
          f || t("reset-flow");
        },
        A = (f, W) => {
          o.arrowNavigation && ((x.value[W] = pt(f)), p(x.value, "monthYear"));
        },
        G = u(() => {
          var f, W;
          return [
            {
              type: Kt.month,
              index: 1,
              toggle: N,
              modelValue: Y.value,
              updateModelValue: (U) => (Y.value = U),
              text: S.value.text,
              showSelectionGrid: O.value,
              items: B.value,
              ariaLabel: (f = r.value) == null ? void 0 : f.openMonthsOverlay,
            },
            {
              type: Kt.year,
              index: 2,
              toggle: I,
              modelValue: j.value,
              updateModelValue: (U) => (j.value = U),
              text: o.year,
              showSelectionGrid: C.value,
              items: $.value,
              ariaLabel: (W = r.value) == null ? void 0 : W.openYearsOverlay,
            },
          ];
        }),
        k = u(() =>
          o.disableYearSelect
            ? [G.value[0]]
            : o.yearFirst
            ? [...G.value].reverse()
            : G.value
        );
      return (
        n({
          toggleMonthPicker: N,
          toggleYearPicker: I,
          handleMonthYearChange: b,
        }),
        (f, W) => {
          var U, Z, J;
          return (
            c(),
            h("div", k1, [
              f.$slots["month-year"]
                ? ae(
                    f.$slots,
                    "month-year",
                    Xe(
                      je(
                        { key: 0 },
                        {
                          month: e.month,
                          year: e.year,
                          months: e.months,
                          years: e.years,
                          updateMonthYear: L(T),
                          handleMonthYearChange: L(b),
                          instance: e.instance,
                        }
                      )
                    )
                  )
                : (c(),
                  h(
                    ve,
                    { key: 1 },
                    [
                      L(y)(L(l), e.instance) && !f.vertical
                        ? (c(),
                          K(
                            Rn,
                            {
                              key: 0,
                              "aria-label":
                                (U = L(r)) == null ? void 0 : U.prevMonth,
                              disabled: L(_)(!1),
                              onActivate: W[0] || (W[0] = (R) => L(b)(!1, !0)),
                              onSetRef: W[1] || (W[1] = (R) => A(R, 0)),
                            },
                            {
                              default: he(() => [
                                f.$slots["arrow-left"]
                                  ? ae(f.$slots, "arrow-left", { key: 0 })
                                  : M("", !0),
                                f.$slots["arrow-left"]
                                  ? M("", !0)
                                  : (c(), K(L(ti), { key: 1 })),
                              ]),
                              _: 3,
                            },
                            8,
                            ["aria-label", "disabled"]
                          ))
                        : M("", !0),
                      P(
                        "div",
                        {
                          class: X([
                            "dp__month_year_wrap",
                            { dp__year_disable_select: f.disableYearSelect },
                          ]),
                        },
                        [
                          (c(!0),
                          h(
                            ve,
                            null,
                            Te(
                              k.value,
                              (R, D) => (
                                c(),
                                h(
                                  ve,
                                  { key: R.type },
                                  [
                                    P(
                                      "button",
                                      {
                                        ref_for: !0,
                                        ref: (pe) => A(pe, D + 1),
                                        type: "button",
                                        class: "dp__btn dp__month_year_select",
                                        tabindex: "0",
                                        "aria-label": R.ariaLabel,
                                        onClick: R.toggle,
                                        onKeydown: [
                                          Oe(Ie(R.toggle, ["prevent"]), [
                                            "enter",
                                          ]),
                                          Oe(Ie(R.toggle, ["prevent"]), [
                                            "space",
                                          ]),
                                        ],
                                      },
                                      [
                                        f.$slots[R.type]
                                          ? ae(f.$slots, R.type, {
                                              key: 0,
                                              text: R.text,
                                              value: o[R.type],
                                            })
                                          : M("", !0),
                                        f.$slots[R.type]
                                          ? M("", !0)
                                          : (c(),
                                            h(
                                              ve,
                                              { key: 1 },
                                              [Le(ee(R.text), 1)],
                                              64
                                            )),
                                      ],
                                      40,
                                      S1
                                    ),
                                    Ee(
                                      xt,
                                      {
                                        name: L(m)(R.showSelectionGrid),
                                        css: L(v),
                                      },
                                      {
                                        default: he(() => [
                                          R.showSelectionGrid
                                            ? (c(),
                                              K(
                                                Zn,
                                                {
                                                  key: 0,
                                                  items: R.items,
                                                  "arrow-navigation":
                                                    f.arrowNavigation,
                                                  "hide-navigation":
                                                    f.hideNavigation,
                                                  "is-last":
                                                    f.autoApply &&
                                                    !L(d).keepActionRow,
                                                  "skip-button-ref": !1,
                                                  config: f.config,
                                                  type: R.type,
                                                  "header-refs": [],
                                                  "esc-close": f.escClose,
                                                  "text-input": f.textInput,
                                                  onSelected:
                                                    R.updateModelValue,
                                                  onToggle: R.toggle,
                                                },
                                                Mt(
                                                  {
                                                    "button-icon": he(() => [
                                                      f.$slots["calendar-icon"]
                                                        ? ae(
                                                            f.$slots,
                                                            "calendar-icon",
                                                            { key: 0 }
                                                          )
                                                        : M("", !0),
                                                      f.$slots["calendar-icon"]
                                                        ? M("", !0)
                                                        : (c(),
                                                          K(L(yn), { key: 1 })),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  [
                                                    f.$slots[
                                                      `${R.type}-overlay-value`
                                                    ]
                                                      ? {
                                                          name: "item",
                                                          fn: he(
                                                            ({ item: pe }) => [
                                                              ae(
                                                                f.$slots,
                                                                `${R.type}-overlay-value`,
                                                                {
                                                                  text: pe.text,
                                                                  value:
                                                                    pe.value,
                                                                }
                                                              ),
                                                            ]
                                                          ),
                                                          key: "0",
                                                        }
                                                      : void 0,
                                                    f.$slots[
                                                      `${R.type}-overlay`
                                                    ]
                                                      ? {
                                                          name: "overlay",
                                                          fn: he(() => [
                                                            ae(
                                                              f.$slots,
                                                              `${R.type}-overlay`,
                                                              Xe(
                                                                Ct(
                                                                  q.value(
                                                                    R.type
                                                                  )
                                                                )
                                                              )
                                                            ),
                                                          ]),
                                                          key: "1",
                                                        }
                                                      : void 0,
                                                    f.$slots[
                                                      `${R.type}-overlay-header`
                                                    ]
                                                      ? {
                                                          name: "header",
                                                          fn: he(() => [
                                                            ae(
                                                              f.$slots,
                                                              `${R.type}-overlay-header`,
                                                              {
                                                                toggle:
                                                                  R.toggle,
                                                              }
                                                            ),
                                                          ]),
                                                          key: "2",
                                                        }
                                                      : void 0,
                                                  ]
                                                ),
                                                1032,
                                                [
                                                  "items",
                                                  "arrow-navigation",
                                                  "hide-navigation",
                                                  "is-last",
                                                  "config",
                                                  "type",
                                                  "esc-close",
                                                  "text-input",
                                                  "onSelected",
                                                  "onToggle",
                                                ]
                                              ))
                                            : M("", !0),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["name", "css"]
                                    ),
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                        ],
                        2
                      ),
                      L(y)(L(l), e.instance) && f.vertical
                        ? (c(),
                          K(
                            Rn,
                            {
                              key: 1,
                              "aria-label":
                                (Z = L(r)) == null ? void 0 : Z.prevMonth,
                              disabled: L(_)(!1),
                              onActivate: W[2] || (W[2] = (R) => L(b)(!1, !0)),
                            },
                            {
                              default: he(() => [
                                f.$slots["arrow-up"]
                                  ? ae(f.$slots, "arrow-up", { key: 0 })
                                  : M("", !0),
                                f.$slots["arrow-up"]
                                  ? M("", !0)
                                  : (c(), K(L(oi), { key: 1 })),
                              ]),
                              _: 3,
                            },
                            8,
                            ["aria-label", "disabled"]
                          ))
                        : M("", !0),
                      L(w)(L(l), e.instance)
                        ? (c(),
                          K(
                            Rn,
                            {
                              key: 2,
                              ref: "rightIcon",
                              disabled: L(_)(!0),
                              "aria-label":
                                (J = L(r)) == null ? void 0 : J.nextMonth,
                              onActivate: W[3] || (W[3] = (R) => L(b)(!0, !0)),
                              onSetRef:
                                W[4] ||
                                (W[4] = (R) =>
                                  A(R, f.disableYearSelect ? 2 : 3)),
                            },
                            {
                              default: he(() => [
                                f.$slots[
                                  f.vertical ? "arrow-down" : "arrow-right"
                                ]
                                  ? ae(
                                      f.$slots,
                                      f.vertical ? "arrow-down" : "arrow-right",
                                      { key: 0 }
                                    )
                                  : M("", !0),
                                f.$slots[
                                  f.vertical ? "arrow-down" : "arrow-right"
                                ]
                                  ? M("", !0)
                                  : (c(),
                                    K(hn(f.vertical ? L(ri) : L(ai)), {
                                      key: 1,
                                    })),
                              ]),
                              _: 3,
                            },
                            8,
                            ["disabled", "aria-label"]
                          ))
                        : M("", !0),
                    ],
                    64
                  )),
            ])
          );
        }
      );
    },
  }),
  C1 = ["aria-label"],
  P1 = { class: "dp__calendar_header", role: "row" },
  I1 = { key: 0, class: "dp__calendar_header_item", role: "gridcell" },
  E1 = P("div", { class: "dp__calendar_header_separator" }, null, -1),
  D1 = ["aria-label"],
  M1 = { key: 0, role: "gridcell", class: "dp__calendar_item dp__week_num" },
  O1 = { class: "dp__cell_inner" },
  A1 = [
    "id",
    "aria-selected",
    "aria-disabled",
    "aria-label",
    "onClick",
    "onKeydown",
    "onMouseenter",
    "onMouseleave",
  ],
  B1 = ie({
    compatConfig: { MODE: 3 },
    __name: "DpCalendar",
    props: {
      mappedDates: { type: Array, default: () => [] },
      instance: { type: Number, default: 0 },
      month: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      ...oa,
    },
    emits: [
      "select-date",
      "set-hover-date",
      "handle-scroll",
      "mount",
      "handle-swipe",
      "handle-space",
      "tooltip-open",
      "tooltip-close",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        { buildMultiLevelMatrix: i } = Ma(),
        {
          defaultedTransitions: r,
          defaultedConfig: l,
          defaultedAriaLabels: s,
          defaultedMultiCalendars: d,
          defaultedWeekNumbers: g,
        } = vt(o),
        m = E(null),
        v = E({ bottom: "", left: "", transform: "" }),
        p = E([]),
        b = E(null),
        _ = E(!0),
        T = E(""),
        y = E({ startX: 0, endX: 0, startY: 0, endY: 0 }),
        w = E([]),
        O = E({ left: "50%" }),
        C = u(() => (o.calendar ? o.calendar(o.mappedDates) : o.mappedDates)),
        x = u(() =>
          o.dayNames
            ? Array.isArray(o.dayNames)
              ? o.dayNames
              : o.dayNames(o.locale, +o.weekStart)
            : ik(o.formatLocale, o.locale, +o.weekStart)
        );
      Me(() => {
        t("mount", { cmp: "calendar", refs: p }),
          l.value.noSwipe ||
            (b.value &&
              (b.value.addEventListener("touchstart", I, { passive: !1 }),
              b.value.addEventListener("touchend", H, { passive: !1 }),
              b.value.addEventListener("touchmove", A, { passive: !1 }))),
          o.monthChangeOnScroll &&
            b.value &&
            b.value.addEventListener("wheel", f, { passive: !1 });
      });
      const F = (R) =>
          R
            ? o.vertical
              ? "vNext"
              : "next"
            : o.vertical
            ? "vPrevious"
            : "previous",
        Y = (R, D) => {
          if (o.transitions) {
            const pe = It(fa(oe(), o.month, o.year));
            (T.value = Pt(It(fa(oe(), R, D)), pe)
              ? r.value[F(!0)]
              : r.value[F(!1)]),
              (_.value = !1),
              At(() => {
                _.value = !0;
              });
          }
        },
        j = u(() => ({ [o.calendarClassName]: !!o.calendarClassName })),
        q = u(() => (R) => {
          const D = sk(R);
          return {
            dp__marker_dot: D.type === "dot",
            dp__marker_line: D.type === "line",
          };
        }),
        S = u(() => (R) => Ge(R, m.value)),
        B = u(() => ({
          dp__calendar: !0,
          dp__calendar_next: d.value.count > 0 && o.instance !== 0,
        })),
        $ = u(() => (R) => o.hideOffsetDates ? R.current : !0),
        z = async (R, D, pe) => {
          var Se, ge;
          if (
            (t("set-hover-date", R),
            (ge = (Se = R.marker) == null ? void 0 : Se.tooltip) != null &&
              ge.length)
          ) {
            const me = pt(p.value[D][pe]);
            if (me) {
              const { width: ce, height: Q } = me.getBoundingClientRect();
              m.value = R.value;
              let ne = { left: `${ce / 2}px` },
                be = -50;
              if ((await At(), w.value[0])) {
                const { left: se, width: Ae } =
                  w.value[0].getBoundingClientRect();
                se < 0 &&
                  ((ne = { left: "0" }),
                  (be = 0),
                  (O.value.left = `${ce / 2}px`)),
                  window.innerWidth < se + Ae &&
                    ((ne = { right: "0" }),
                    (be = 0),
                    (O.value.left = `${Ae - ce / 2}px`));
              }
              (v.value = {
                bottom: `${Q}px`,
                ...ne,
                transform: `translateX(${be}%)`,
              }),
                t("tooltip-open", R.marker);
            }
          }
        },
        N = (R) => {
          m.value &&
            ((m.value = null),
            (v.value = JSON.parse(
              JSON.stringify({ bottom: "", left: "", transform: "" })
            )),
            t("tooltip-close", R.marker));
        },
        I = (R) => {
          (y.value.startX = R.changedTouches[0].screenX),
            (y.value.startY = R.changedTouches[0].screenY);
        },
        H = (R) => {
          (y.value.endX = R.changedTouches[0].screenX),
            (y.value.endY = R.changedTouches[0].screenY),
            G();
        },
        A = (R) => {
          o.vertical && !o.inline && R.preventDefault();
        },
        G = () => {
          const R = o.vertical ? "Y" : "X";
          Math.abs(y.value[`start${R}`] - y.value[`end${R}`]) > 10 &&
            t(
              "handle-swipe",
              y.value[`start${R}`] > y.value[`end${R}`] ? "right" : "left"
            );
        },
        k = (R, D, pe) => {
          R &&
            (Array.isArray(p.value[D])
              ? (p.value[D][pe] = R)
              : (p.value[D] = [R])),
            o.arrowNavigation && i(p.value, "calendar");
        },
        f = (R) => {
          o.monthChangeOnScroll && (R.preventDefault(), t("handle-scroll", R));
        },
        W = (R) =>
          g.value.type === "local"
            ? f0(R.value, { weekStartsOn: +o.weekStart })
            : g.value.type === "iso"
            ? g0(R.value)
            : typeof g.value.type == "function"
            ? g.value.type(R.value)
            : "",
        U = (R) => {
          const D = R[0];
          return g.value.hideOnOffsetDates
            ? R.some((pe) => pe.current)
              ? W(D)
              : ""
            : W(D);
        },
        Z = (R, D) => {
          Ia(R, l.value), t("select-date", D);
        },
        J = (R) => {
          Ia(R, l.value);
        };
      return (
        n({ triggerTransition: Y }),
        (R, D) => {
          var pe;
          return (
            c(),
            h(
              "div",
              { class: X(B.value) },
              [
                P(
                  "div",
                  {
                    ref_key: "calendarWrapRef",
                    ref: b,
                    role: "grid",
                    class: X(j.value),
                    "aria-label":
                      (pe = L(s)) == null ? void 0 : pe.calendarWrap,
                  },
                  [
                    (c(),
                    h(
                      ve,
                      { key: 0 },
                      [
                        P("div", P1, [
                          R.weekNumbers
                            ? (c(), h("div", I1, ee(R.weekNumName), 1))
                            : M("", !0),
                          (c(!0),
                          h(
                            ve,
                            null,
                            Te(
                              x.value,
                              (Se, ge) => (
                                c(),
                                h(
                                  "div",
                                  {
                                    key: ge,
                                    class: "dp__calendar_header_item",
                                    role: "gridcell",
                                  },
                                  [
                                    R.$slots["calendar-header"]
                                      ? ae(R.$slots, "calendar-header", {
                                          key: 0,
                                          day: Se,
                                          index: ge,
                                        })
                                      : M("", !0),
                                    R.$slots["calendar-header"]
                                      ? M("", !0)
                                      : (c(),
                                        h(ve, { key: 1 }, [Le(ee(Se), 1)], 64)),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        E1,
                        Ee(
                          xt,
                          { name: T.value, css: !!R.transitions },
                          {
                            default: he(() => {
                              var Se;
                              return [
                                _.value
                                  ? (c(),
                                    h(
                                      "div",
                                      {
                                        key: 0,
                                        class: "dp__calendar",
                                        role: "rowgroup",
                                        "aria-label":
                                          ((Se = L(s)) == null
                                            ? void 0
                                            : Se.calendarDays) || void 0,
                                      },
                                      [
                                        (c(!0),
                                        h(
                                          ve,
                                          null,
                                          Te(
                                            C.value,
                                            (ge, me) => (
                                              c(),
                                              h(
                                                "div",
                                                {
                                                  key: me,
                                                  class: "dp__calendar_row",
                                                  role: "row",
                                                },
                                                [
                                                  R.weekNumbers
                                                    ? (c(),
                                                      h("div", M1, [
                                                        P(
                                                          "div",
                                                          O1,
                                                          ee(U(ge.days)),
                                                          1
                                                        ),
                                                      ]))
                                                    : M("", !0),
                                                  (c(!0),
                                                  h(
                                                    ve,
                                                    null,
                                                    Te(ge.days, (ce, Q) => {
                                                      var ne, be, se;
                                                      return (
                                                        c(),
                                                        h(
                                                          "div",
                                                          {
                                                            id: ce.value
                                                              .toISOString()
                                                              .split("T")[0],
                                                            ref_for: !0,
                                                            ref: (Ae) =>
                                                              k(Ae, me, Q),
                                                            key: Q + me,
                                                            role: "gridcell",
                                                            class:
                                                              "dp__calendar_item",
                                                            "aria-selected":
                                                              ce.classData
                                                                .dp__active_date ||
                                                              ce.classData
                                                                .dp__range_start ||
                                                              ce.classData
                                                                .dp__range_start,
                                                            "aria-disabled":
                                                              ce.classData
                                                                .dp__cell_disabled ||
                                                              void 0,
                                                            "aria-label":
                                                              (be =
                                                                (ne = L(s)) ==
                                                                null
                                                                  ? void 0
                                                                  : ne.day) ==
                                                              null
                                                                ? void 0
                                                                : be.call(
                                                                    ne,
                                                                    ce
                                                                  ),
                                                            tabindex: "0",
                                                            onClick: Ie(
                                                              (Ae) => Z(Ae, ce),
                                                              ["prevent"]
                                                            ),
                                                            onKeydown: [
                                                              Oe(
                                                                (Ae) =>
                                                                  R.$emit(
                                                                    "select-date",
                                                                    ce
                                                                  ),
                                                                ["enter"]
                                                              ),
                                                              Oe(
                                                                (Ae) =>
                                                                  R.$emit(
                                                                    "handle-space",
                                                                    ce
                                                                  ),
                                                                ["space"]
                                                              ),
                                                            ],
                                                            onMouseenter: (
                                                              Ae
                                                            ) => z(ce, me, Q),
                                                            onMouseleave: (
                                                              Ae
                                                            ) => N(ce),
                                                          },
                                                          [
                                                            P(
                                                              "div",
                                                              {
                                                                class: X([
                                                                  "dp__cell_inner",
                                                                  ce.classData,
                                                                ]),
                                                              },
                                                              [
                                                                R.$slots.day &&
                                                                $.value(ce)
                                                                  ? ae(
                                                                      R.$slots,
                                                                      "day",
                                                                      {
                                                                        key: 0,
                                                                        day: +ce.text,
                                                                        date: ce.value,
                                                                      }
                                                                    )
                                                                  : M("", !0),
                                                                R.$slots.day
                                                                  ? M("", !0)
                                                                  : (c(),
                                                                    h(
                                                                      ve,
                                                                      {
                                                                        key: 1,
                                                                      },
                                                                      [
                                                                        Le(
                                                                          ee(
                                                                            ce.text
                                                                          ),
                                                                          1
                                                                        ),
                                                                      ],
                                                                      64
                                                                    )),
                                                                ce.marker &&
                                                                $.value(ce)
                                                                  ? (c(),
                                                                    h(
                                                                      ve,
                                                                      {
                                                                        key: 2,
                                                                      },
                                                                      [
                                                                        R.$slots
                                                                          .marker
                                                                          ? ae(
                                                                              R.$slots,
                                                                              "marker",
                                                                              {
                                                                                key: 0,
                                                                                marker:
                                                                                  ce.marker,
                                                                                day: +ce.text,
                                                                                date: ce.value,
                                                                              }
                                                                            )
                                                                          : (c(),
                                                                            h(
                                                                              "div",
                                                                              {
                                                                                key: 1,
                                                                                class:
                                                                                  X(
                                                                                    q.value(
                                                                                      ce.marker
                                                                                    )
                                                                                  ),
                                                                                style:
                                                                                  Be(
                                                                                    ce
                                                                                      .marker
                                                                                      .color
                                                                                      ? {
                                                                                          backgroundColor:
                                                                                            ce
                                                                                              .marker
                                                                                              .color,
                                                                                        }
                                                                                      : {}
                                                                                  ),
                                                                              },
                                                                              null,
                                                                              6
                                                                            )),
                                                                      ],
                                                                      64
                                                                    ))
                                                                  : M("", !0),
                                                                S.value(
                                                                  ce.value
                                                                )
                                                                  ? (c(),
                                                                    h(
                                                                      "div",
                                                                      {
                                                                        key: 3,
                                                                        ref_for:
                                                                          !0,
                                                                        ref_key:
                                                                          "activeTooltip",
                                                                        ref: w,
                                                                        class:
                                                                          "dp__marker_tooltip",
                                                                        style:
                                                                          Be(
                                                                            v.value
                                                                          ),
                                                                      },
                                                                      [
                                                                        (se =
                                                                          ce.marker) !=
                                                                          null &&
                                                                        se.tooltip
                                                                          ? (c(),
                                                                            h(
                                                                              "div",
                                                                              {
                                                                                key: 0,
                                                                                class:
                                                                                  "dp__tooltip_content",
                                                                                onClick:
                                                                                  J,
                                                                              },
                                                                              [
                                                                                (c(
                                                                                  !0
                                                                                ),
                                                                                h(
                                                                                  ve,
                                                                                  null,
                                                                                  Te(
                                                                                    ce
                                                                                      .marker
                                                                                      .tooltip,
                                                                                    (
                                                                                      Ae,
                                                                                      Ye
                                                                                    ) => (
                                                                                      c(),
                                                                                      h(
                                                                                        "div",
                                                                                        {
                                                                                          key: Ye,
                                                                                          class:
                                                                                            "dp__tooltip_text",
                                                                                        },
                                                                                        [
                                                                                          R
                                                                                            .$slots[
                                                                                            "marker-tooltip"
                                                                                          ]
                                                                                            ? ae(
                                                                                                R.$slots,
                                                                                                "marker-tooltip",
                                                                                                {
                                                                                                  key: 0,
                                                                                                  tooltip:
                                                                                                    Ae,
                                                                                                  day: ce.value,
                                                                                                }
                                                                                              )
                                                                                            : M(
                                                                                                "",
                                                                                                !0
                                                                                              ),
                                                                                          R
                                                                                            .$slots[
                                                                                            "marker-tooltip"
                                                                                          ]
                                                                                            ? M(
                                                                                                "",
                                                                                                !0
                                                                                              )
                                                                                            : (c(),
                                                                                              h(
                                                                                                ve,
                                                                                                {
                                                                                                  key: 1,
                                                                                                },
                                                                                                [
                                                                                                  P(
                                                                                                    "div",
                                                                                                    {
                                                                                                      class:
                                                                                                        "dp__tooltip_mark",
                                                                                                      style:
                                                                                                        Be(
                                                                                                          Ae.color
                                                                                                            ? {
                                                                                                                backgroundColor:
                                                                                                                  Ae.color,
                                                                                                              }
                                                                                                            : {}
                                                                                                        ),
                                                                                                    },
                                                                                                    null,
                                                                                                    4
                                                                                                  ),
                                                                                                  P(
                                                                                                    "div",
                                                                                                    null,
                                                                                                    ee(
                                                                                                      Ae.text
                                                                                                    ),
                                                                                                    1
                                                                                                  ),
                                                                                                ],
                                                                                                64
                                                                                              )),
                                                                                        ]
                                                                                      )
                                                                                    )
                                                                                  ),
                                                                                  128
                                                                                )),
                                                                                P(
                                                                                  "div",
                                                                                  {
                                                                                    class:
                                                                                      "dp__arrow_bottom_tp",
                                                                                    style:
                                                                                      Be(
                                                                                        O.value
                                                                                      ),
                                                                                  },
                                                                                  null,
                                                                                  4
                                                                                ),
                                                                              ]
                                                                            ))
                                                                          : M(
                                                                              "",
                                                                              !0
                                                                            ),
                                                                      ],
                                                                      4
                                                                    ))
                                                                  : M("", !0),
                                                              ],
                                                              2
                                                            ),
                                                          ],
                                                          40,
                                                          A1
                                                        )
                                                      );
                                                    }),
                                                    128
                                                  )),
                                                ]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ],
                                      8,
                                      D1
                                    ))
                                  : M("", !0),
                              ];
                            }),
                            _: 3,
                          },
                          8,
                          ["name", "css"]
                        ),
                      ],
                      64
                    )),
                  ],
                  10,
                  C1
                ),
              ],
              2
            )
          );
        }
      );
    },
  }),
  jl = (e) => Array.isArray(e),
  L1 = (e, n, a, t) => {
    const o = E([]),
      { modelValue: i, calendars: r, time: l } = Xn(e, n),
      { defaultedMultiCalendars: s, defaultedStartTime: d } = vt(e),
      {
        validateMonthYearInRange: g,
        isDisabled: m,
        isDateRangeAllowed: v,
        checkMinMaxRange: p,
      } = qa(e),
      {
        updateTimeValues: b,
        getSetDateTime: _,
        setTime: T,
        assignStartTime: y,
        validateTime: w,
        disabledTimesConfig: O,
      } = Eu(e, l, i, t),
      C = u(() => (V) => r.value[V] ? r.value[V].month : 0),
      x = u(() => (V) => r.value[V] ? r.value[V].year : 0),
      F = (V, ue, le) => {
        var Ce, Ne;
        r.value[V] || (r.value[V] = { month: 0, year: 0 }),
          (r.value[V].month = $l(ue)
            ? (Ce = r.value[V]) == null
              ? void 0
              : Ce.month
            : ue),
          (r.value[V].year = $l(le)
            ? (Ne = r.value[V]) == null
              ? void 0
              : Ne.year
            : le);
      },
      Y = () => {
        e.autoApply && n("select-date");
      };
    xe(i, (V, ue) => {
      JSON.stringify(V) !== JSON.stringify(ue) && S();
    }),
      Me(() => {
        e.shadow ||
          (i.value || (f(), d.value && y(d.value)),
          S(!0),
          e.focusStartDate && e.startDate && f());
      });
    const j = u(() => {
        var V;
        return (V = e.flow) != null && V.length && !e.partialFlow
          ? e.flowStep === e.flow.length
          : !0;
      }),
      q = () => {
        e.autoApply && j.value && n("auto-apply", e.partialFlow);
      },
      S = (V = !1) => {
        if (i.value)
          return Array.isArray(i.value)
            ? ((o.value = i.value), H(V))
            : $(i.value, V);
        if (s.value.count && V && !e.startDate) return B(oe(), V);
      },
      B = (V, ue = !1) => {
        if (
          ((!s.value.count || !s.value.static || ue) && F(0, $e(V), Re(V)),
          s.value.count && (!s.value.solo || !i.value))
        )
          for (let le = 1; le < s.value.count; le++) {
            const Ce = at(oe(), {
                month: C.value(le - 1),
                year: x.value(le - 1),
              }),
              Ne = Ys(Ce, { months: 1 });
            r.value[le] = { month: $e(Ne), year: Re(Ne) };
          }
      },
      $ = (V, ue) => {
        B(V),
          T("hours", Jt(V)),
          T("minutes", ma(V)),
          T("seconds", mn(V)),
          s.value.count && ue && k();
      },
      z = (V) => {
        if (s.value.count) {
          if (s.value.solo) return 0;
          const ue = $e(V[0]),
            le = $e(V[1]);
          return Math.abs(le - ue) < s.value.count ? 0 : 1;
        }
        return 1;
      },
      N = (V, ue) => {
        V[1] && e.showLastInRange ? B(V[z(V)], ue) : B(V[0], ue);
        const le = (Ce, Ne) => [Ce(V[0]), V[1] ? Ce(V[1]) : l[Ne][1]];
        T("hours", le(Jt, "hours")),
          T("minutes", le(ma, "minutes")),
          T("seconds", le(mn, "seconds"));
      },
      I = (V, ue) => {
        if ((e.range || e.weekPicker) && !e.multiDates) return N(V, ue);
        if (e.multiDates && ue) {
          const le = V[V.length - 1];
          return $(le, ue);
        }
      },
      H = (V) => {
        const ue = i.value;
        I(ue, V), s.value.count && s.value.solo && k();
      },
      A = (V, ue) => {
        const le = at(oe(), { month: C.value(ue), year: x.value(ue) }),
          Ce = V < 0 ? Zt(le, 1) : gn(le, 1);
        g($e(Ce), Re(Ce), V < 0, e.preventMinMaxNavigation) &&
          (F(ue, $e(Ce), Re(Ce)),
          n("update-month-year", { instance: ue, month: $e(Ce), year: Re(Ce) }),
          s.value.count && !s.value.solo && G(ue),
          a());
      },
      G = (V) => {
        for (let ue = V - 1; ue >= 0; ue--) {
          const le = gn(
            at(oe(), { month: C.value(ue + 1), year: x.value(ue + 1) }),
            1
          );
          F(ue, $e(le), Re(le));
        }
        for (let ue = V + 1; ue <= s.value.count - 1; ue++) {
          const le = Zt(
            at(oe(), { month: C.value(ue - 1), year: x.value(ue - 1) }),
            1
          );
          F(ue, $e(le), Re(le));
        }
      },
      k = () => {
        if (Array.isArray(i.value) && i.value.length === 2) {
          const V = oe(oe(i.value[1] ? i.value[1] : Zt(i.value[0], 1))),
            [ue, le] = [$e(i.value[0]), Re(i.value[0])],
            [Ce, Ne] = [$e(i.value[1]), Re(i.value[1])];
          (ue !== Ce || (ue === Ce && le !== Ne)) &&
            s.value.solo &&
            F(1, $e(V), Re(V));
        } else
          i.value &&
            !Array.isArray(i.value) &&
            (F(0, $e(i.value), Re(i.value)), B(oe()));
      },
      f = () => {
        e.startDate &&
          (F(0, $e(oe(e.startDate)), Re(oe(e.startDate))),
          s.value.count && G(0));
      },
      W = gk((V, ue) => {
        e.monthChangeOnScroll &&
          A(e.monthChangeOnScroll !== "inverse" ? -V.deltaY : V.deltaY, ue);
      }, 50),
      U = (V, ue, le = !1) => {
        e.monthChangeOnArrows && e.vertical === le && Z(V, ue);
      },
      Z = (V, ue) => {
        A(V === "right" ? -1 : 1, ue);
      },
      J = (V) =>
        e.markers.find((ue) => Ge(hk(V.value), ea(oe(ue.date), e.timezone))),
      R = (V, ue) => {
        switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
          case "prepend":
            return [!0, !1];
          case "center":
            return [V == 0, !0];
          case "fair":
            return [V == 0 || ue > V, !0];
          case "append":
            return [!1, !1];
          default:
            return [!1, !1];
        }
      },
      D = (V, ue, le, Ce) => {
        if (e.sixWeeks && V.length < 6) {
          const Ne = 6 - V.length,
            Ze = (ue.getDay() + 7 - Ce) % 7,
            dt = 6 - ((le.getDay() + 7 - Ce) % 7),
            [te, we] = R(Ze, dt);
          for (let ye = 1; ye <= Ne; ye++)
            if (we ? !!(ye % 2) == te : te) {
              const Je = V[0].days[0],
                lt = pe(ha(Je.value, -7), $e(ue));
              V.unshift({ days: lt });
            } else {
              const Je = V[V.length - 1],
                lt = Je.days[Je.days.length - 1],
                _t = pe(ha(lt.value, 1), $e(ue));
              V.push({ days: _t });
            }
        }
        return V;
      },
      pe = (V, ue) => {
        const le = oe(V),
          Ce = [];
        for (let Ne = 0; Ne < 7; Ne++) {
          const Ze = ha(le, Ne),
            dt = $e(Ze) !== ue;
          Ce.push({
            text: e.hideOffsetDates && dt ? "" : Ze.getDate(),
            value: Ze,
            current: !dt,
            classData: {},
          });
        }
        return Ce;
      },
      Se = (V, ue) => {
        const le = [],
          Ce = new Date(ue, V),
          Ne = new Date(ue, V + 1, 0),
          Ze = e.weekStart,
          dt = $a(Ce, { weekStartsOn: Ze }),
          te = (we) => {
            const ye = pe(we, V);
            if (
              (le.push({ days: ye }),
              !le[le.length - 1].days.some((Je) => Ge(It(Je.value), It(Ne))))
            ) {
              const Je = ha(we, 7);
              te(Je);
            }
          };
        return te(dt), D(le, Ce, Ne, Ze);
      },
      ge = (V) => (
        (i.value = so(oe(V.value), e.timezone, e.weekStart)),
        n("date-update", V.value),
        q()
      ),
      me = (V) => {
        const ue = Ea(oe(V.value), l.hours, l.minutes, Rt());
        n("date-update", ue),
          e.multiDates ? di(ue, i, e.multiDatesLimit) : (i.value = ue),
          t(),
          At().then(() => {
            q();
          });
      },
      ce = (V) =>
        e.noDisabledRange ? bu(o.value[0], V).some((ue) => m(ue)) : !1,
      Q = () => {
        (o.value = i.value ? i.value.slice() : []),
          o.value.length === 2 &&
            !(e.fixedStart || e.fixedEnd) &&
            (o.value = []);
      },
      ne = (V, ue) => {
        const le = [oe(V.value), ha(oe(V.value), +e.autoRange)];
        v(le)
          ? (ue && be(V.value), (o.value = le))
          : n("invalid-date", V.value);
      },
      be = (V) => {
        const ue = $e(oe(V)),
          le = Re(oe(V));
        if ((F(0, ue, le), s.value.count > 0))
          for (let Ce = 1; Ce < s.value.count; Ce++) {
            const Ne = fk(
              at(oe(V), { year: C.value(Ce - 1), month: x.value(Ce - 1) })
            );
            F(Ce, Ne.month, Ne.year);
          }
      },
      se = (V) =>
        Array.isArray(i.value) && i.value.length === 2
          ? e.fixedStart && (Pt(V, i.value[0]) || Ge(V, i.value[0]))
            ? [i.value[0], V]
            : e.fixedEnd && (kt(V, i.value[1]) || Ge(V, i.value[1]))
            ? [V, i.value[1]]
            : (n("invalid-fixed-range", V), i.value)
          : [],
      Ae = (V) => {
        if (ce(V.value) || !p(V.value, i.value, e.fixedStart ? 0 : 1))
          return n("invalid-date", V.value);
        o.value = se(oe(V.value));
      },
      Ye = (V, ue) => {
        if ((Q(), e.autoRange)) return ne(V, ue);
        if (e.fixedStart || e.fixedEnd) return Ae(V);
        o.value[0]
          ? p(oe(V.value), i.value) && !ce(V.value)
            ? kt(oe(V.value), oe(o.value[0]))
              ? (o.value.unshift(oe(V.value)), n("range-end", o.value[0]))
              : ((o.value[1] = oe(V.value)), n("range-end", o.value[1]))
            : (e.autoApply && n("auto-apply-invalid", V.value),
              n("invalid-date", V.value))
          : ((o.value[0] = oe(V.value)), n("range-start", o.value[0]));
      },
      Rt = (V = !0) =>
        e.enableSeconds
          ? Array.isArray(l.seconds)
            ? V
              ? l.seconds[0]
              : l.seconds[1]
            : l.seconds
          : 0,
      Qe = (V) => {
        o.value[V] = Ea(o.value[V], l.hours[V], l.minutes[V], Rt(V !== 1));
      },
      Yt = () => {
        var V, ue;
        o.value[0] &&
          o.value[1] &&
          +((V = o.value) == null ? void 0 : V[0]) >
            +((ue = o.value) == null ? void 0 : ue[1]) &&
          (o.value.reverse(),
          n("range-start", o.value[0]),
          n("range-end", o.value[1]));
      },
      yt = () => {
        o.value.length &&
          (o.value[0] && !o.value[1] ? Qe(0) : (Qe(0), Qe(1), t()),
          Yt(),
          (i.value = o.value.slice()),
          Io(o.value, n, e.autoApply, e.modelAuto));
      },
      Bt = (V, ue = !1) => {
        if (m(V.value) || (!V.current && e.hideOffsetDates))
          return n("invalid-date", V.value);
        if (e.weekPicker) return ge(V);
        if (!e.range) return me(V);
        jl(l.hours) && jl(l.minutes) && !e.multiDates && (Ye(V, ue), yt());
      },
      Nt = (V, ue) => {
        var le;
        F(V, ue.month, ue.year),
          s.value.count && !s.value.solo && G(V),
          n("update-month-year", {
            instance: V,
            month: ue.month,
            year: ue.year,
          }),
          a(s.value.solo ? V : void 0);
        const Ce =
          (le = e.flow) != null && le.length ? e.flow[e.flowStep] : void 0;
        !ue.fromNav && (Ce === ia.month || Ce === ia.year) && t();
      },
      ht = (V, ue) => {
        Cu({
          value: V,
          modelValue: i,
          range: e.range,
          timezone: ue ? void 0 : e.timezone,
        }),
          Y(),
          e.multiCalendars && At().then(() => S(!0));
      },
      $t = () => {
        e.range
          ? i.value && Array.isArray(i.value) && i.value[0]
            ? (i.value = kt(oe(), i.value[0])
                ? [oe(), i.value[0]]
                : [i.value[0], oe()])
            : (i.value = [oe()])
          : (i.value = oe()),
          Y();
      },
      ra = () => {
        if (Array.isArray(i.value))
          if (e.multiDates) {
            const V = zt();
            i.value[i.value.length - 1] = _(V);
          } else i.value = i.value.map((V, ue) => V && _(V, ue));
        else i.value = _(i.value);
        n("time-update");
      },
      zt = () =>
        Array.isArray(i.value) && i.value.length
          ? i.value[i.value.length - 1]
          : null;
    return {
      calendars: r,
      modelValue: i,
      month: C,
      year: x,
      time: l,
      disabledTimesConfig: O,
      validateTime: w,
      getCalendarDays: Se,
      getMarker: J,
      handleScroll: W,
      handleSwipe: Z,
      handleArrow: U,
      selectDate: Bt,
      updateMonthYear: Nt,
      presetDate: ht,
      selectCurrentDate: $t,
      updateTime: (V, ue = !0, le = !1) => {
        b(V, ue, le, ra);
      },
    };
  },
  x1 = { key: 0 },
  R1 = ie({
    __name: "DatePicker",
    props: { ...oa },
    emits: [
      "tooltip-open",
      "tooltip-close",
      "mount",
      "update:internal-model-value",
      "update-flow-step",
      "reset-flow",
      "auto-apply",
      "focus-menu",
      "select-date",
      "range-start",
      "range-end",
      "invalid-fixed-range",
      "time-update",
      "am-pm-change",
      "time-picker-open",
      "time-picker-close",
      "recalculate-position",
      "update-month-year",
      "auto-apply-invalid",
      "date-update",
      "invalid-date",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        {
          calendars: i,
          month: r,
          year: l,
          modelValue: s,
          time: d,
          disabledTimesConfig: g,
          validateTime: m,
          getCalendarDays: v,
          getMarker: p,
          handleArrow: b,
          handleScroll: _,
          handleSwipe: T,
          selectDate: y,
          updateMonthYear: w,
          presetDate: O,
          selectCurrentDate: C,
          updateTime: x,
        } = L1(o, t, k, f),
        F = Wa(),
        { setHoverDate: Y, getDayClassData: j, clearHoverDate: q } = Hk(s, o),
        { defaultedMultiCalendars: S } = vt(o),
        B = E([]),
        $ = E([]),
        z = E(null),
        N = Ht(F, "calendar"),
        I = Ht(F, "monthYear"),
        H = Ht(F, "timePicker"),
        A = (U) => {
          o.shadow || t("mount", U);
        };
      xe(
        i,
        () => {
          o.shadow ||
            setTimeout(() => {
              t("recalculate-position");
            }, 0);
        },
        { deep: !0 }
      );
      const G = u(
        () => (U) =>
          v(r.value(U), l.value(U)).map((Z) => ({
            ...Z,
            days: Z.days.map(
              (J) => ((J.marker = p(J)), (J.classData = j(J)), J)
            ),
          }))
      );
      function k(U) {
        var Z;
        U || U === 0
          ? (Z = $.value[U]) == null ||
            Z.triggerTransition(r.value(U), l.value(U))
          : $.value.forEach((J, R) =>
              J.triggerTransition(r.value(R), l.value(R))
            );
      }
      function f() {
        t("update-flow-step");
      }
      const W = (U, Z = !1) => {
        y(U, Z), o.spaceConfirm && t("select-date");
      };
      return (
        n({
          clearHoverDate: q,
          presetDate: O,
          selectCurrentDate: C,
          toggleMonthPicker: (U, Z, J = 0) => {
            var R;
            (R = B.value[J]) == null || R.toggleMonthPicker(U, Z);
          },
          toggleYearPicker: (U, Z, J = 0) => {
            var R;
            (R = B.value[J]) == null || R.toggleYearPicker(U, Z);
          },
          toggleTimePicker: (U, Z, J) => {
            var R;
            (R = z.value) == null || R.toggleTimePicker(U, Z, J);
          },
          handleArrow: b,
          updateMonthYear: w,
          getSidebarProps: () => ({
            modelValue: s,
            month: r,
            year: l,
            time: d,
            updateTime: x,
            updateMonthYear: w,
            selectDate: y,
            presetDate: O,
          }),
        }),
        (U, Z) => (
          c(),
          h(
            ve,
            null,
            [
              Ee(
                Po,
                { "multi-calendars": L(S).count },
                {
                  default: he(({ instance: J, index: R }) => [
                    U.disableMonthYearSelect
                      ? M("", !0)
                      : (c(),
                        K(
                          T1,
                          je(
                            {
                              key: 0,
                              ref: (D) => {
                                D && (B.value[R] = D);
                              },
                              months: L(gu)(
                                U.formatLocale,
                                U.locale,
                                U.monthNameFormat
                              ),
                              years: L(ui)(U.yearRange, U.reverseYears),
                              month: L(r)(J),
                              year: L(l)(J),
                              instance: J,
                            },
                            U.$props,
                            {
                              onMount: Z[0] || (Z[0] = (D) => A(L(Va).header)),
                              onResetFlow:
                                Z[1] || (Z[1] = (D) => U.$emit("reset-flow")),
                              onUpdateMonthYear: (D) => L(w)(J, D),
                              onOverlayClosed:
                                Z[2] || (Z[2] = (D) => U.$emit("focus-menu")),
                            }
                          ),
                          Mt({ _: 2 }, [
                            Te(L(I), (D, pe) => ({
                              name: D,
                              fn: he((Se) => [ae(U.$slots, D, Xe(Ct(Se)))]),
                            })),
                          ]),
                          1040,
                          [
                            "months",
                            "years",
                            "month",
                            "year",
                            "instance",
                            "onUpdateMonthYear",
                          ]
                        )),
                    Ee(
                      B1,
                      je(
                        {
                          ref: (D) => {
                            D && ($.value[R] = D);
                          },
                          "mapped-dates": G.value(J),
                          month: L(r)(J),
                          year: L(l)(J),
                          instance: J,
                        },
                        U.$props,
                        {
                          onSelectDate: (D) => L(y)(D, J !== 1),
                          onHandleSpace: (D) => W(D, J !== 1),
                          onSetHoverDate: Z[3] || (Z[3] = (D) => L(Y)(D)),
                          onHandleScroll: (D) => L(_)(D, J),
                          onHandleSwipe: (D) => L(T)(D, J),
                          onMount: Z[4] || (Z[4] = (D) => A(L(Va).calendar)),
                          onResetFlow:
                            Z[5] || (Z[5] = (D) => U.$emit("reset-flow")),
                          onTooltipOpen:
                            Z[6] || (Z[6] = (D) => U.$emit("tooltip-open", D)),
                          onTooltipClose:
                            Z[7] || (Z[7] = (D) => U.$emit("tooltip-close", D)),
                        }
                      ),
                      Mt({ _: 2 }, [
                        Te(L(N), (D, pe) => ({
                          name: D,
                          fn: he((Se) => [ae(U.$slots, D, Xe(Ct({ ...Se })))]),
                        })),
                      ]),
                      1040,
                      [
                        "mapped-dates",
                        "month",
                        "year",
                        "instance",
                        "onSelectDate",
                        "onHandleSpace",
                        "onHandleScroll",
                        "onHandleSwipe",
                      ]
                    ),
                  ]),
                  _: 3,
                },
                8,
                ["multi-calendars"]
              ),
              U.enableTimePicker
                ? (c(),
                  h("div", x1, [
                    U.$slots["time-picker"]
                      ? ae(
                          U.$slots,
                          "time-picker",
                          Xe(je({ key: 0 }, { time: L(d), updateTime: L(x) }))
                        )
                      : (c(),
                        K(
                          Iu,
                          je(
                            { key: 1, ref_key: "timePickerRef", ref: z },
                            U.$props,
                            {
                              hours: L(d).hours,
                              minutes: L(d).minutes,
                              seconds: L(d).seconds,
                              "internal-model-value": U.internalModelValue,
                              "disabled-times-config": L(g),
                              "validate-time": L(m),
                              onMount:
                                Z[8] || (Z[8] = (J) => A(L(Va).timePicker)),
                              "onUpdate:hours": Z[9] || (Z[9] = (J) => L(x)(J)),
                              "onUpdate:minutes":
                                Z[10] || (Z[10] = (J) => L(x)(J, !1)),
                              "onUpdate:seconds":
                                Z[11] || (Z[11] = (J) => L(x)(J, !1, !0)),
                              onResetFlow:
                                Z[12] || (Z[12] = (J) => U.$emit("reset-flow")),
                              onOverlayClosed:
                                Z[13] ||
                                (Z[13] = (J) => U.$emit("time-picker-close")),
                              onOverlayOpened:
                                Z[14] ||
                                (Z[14] = (J) => U.$emit("time-picker-open", J)),
                              onAmPmChange:
                                Z[15] ||
                                (Z[15] = (J) => U.$emit("am-pm-change", J)),
                            }
                          ),
                          Mt({ _: 2 }, [
                            Te(L(H), (J, R) => ({
                              name: J,
                              fn: he((D) => [ae(U.$slots, J, Xe(Ct(D)))]),
                            })),
                          ]),
                          1040,
                          [
                            "hours",
                            "minutes",
                            "seconds",
                            "internal-model-value",
                            "disabled-times-config",
                            "validate-time",
                          ]
                        )),
                  ]))
                : M("", !0),
            ],
            64
          )
        )
      );
    },
  }),
  N1 = (e, n) => {
    const a = E(),
      {
        defaultedMultiCalendars: t,
        defaultedConfig: o,
        defaultedHighlight: i,
      } = vt(e),
      { modelValue: r, year: l, month: s, calendars: d } = Xn(e, n),
      { isDisabled: g } = qa(e),
      {
        selectYear: m,
        groupedYears: v,
        showYearPicker: p,
        isDisabled: b,
        toggleYearPicker: _,
        handleYearSelect: T,
        handleYear: y,
      } = Pu({
        modelValue: r,
        multiCalendars: t,
        highlight: i,
        calendars: d,
        month: s,
        year: l,
        props: e,
        emit: n,
      }),
      w = (q, S) =>
        [q, S].map((B) => Pa(B, "MMMM", { locale: e.formatLocale })).join("-"),
      O = u(
        () => (q) =>
          r.value
            ? Array.isArray(r.value)
              ? r.value.some((S) => Ol(q, S))
              : Ol(r.value, q)
            : !1
      ),
      C = (q) => {
        if (e.range) {
          if (Array.isArray(r.value)) {
            const S = Ge(q, r.value[0]) || Ge(q, r.value[1]);
            return So(r.value, a.value, q) && !S;
          }
          return !1;
        }
        return !1;
      },
      x = u(() => (q) => {
        const S = at(new Date(), { year: l.value(q) });
        return d_({ start: g_(S), end: m_(S) }).map((B) => {
          const $ = $n(B),
            z = Cl(B),
            N = g(B),
            I = C($),
            H =
              typeof i.value == "function"
                ? i.value({ quarter: Tl($), year: Re($) })
                : !!i.value.quarters.find(
                    (A) => A.quarter === Tl($) && A.year === Re($)
                  );
          return {
            text: w($, z),
            value: $,
            active: O.value($),
            highlighted: H,
            disabled: N,
            isBetween: I,
          };
        });
      }),
      F = (q) => {
        di(q, r, e.multiDatesLimit), n("auto-apply", !0);
      },
      Y = (q) => {
        const S = mi(r, q, n);
        Io(S, n, e.autoApply, e.modelAuto);
      },
      j = (q) => {
        (r.value = q), n("auto-apply");
      };
    return {
      defaultedConfig: o,
      defaultedMultiCalendars: t,
      groupedYears: v,
      year: l,
      isDisabled: b,
      quarters: x,
      showYearPicker: p,
      modelValue: r,
      setHoverDate: (q) => {
        a.value = q;
      },
      selectYear: m,
      selectQuarter: (q, S, B) => {
        if (!B)
          return (
            (d.value[S].month = $e(Cl(q))),
            e.multiDates ? F(q) : e.range ? Y(q) : j(q)
          );
      },
      toggleYearPicker: _,
      handleYearSelect: T,
      handleYear: y,
    };
  },
  H1 = { class: "dp--quarter-items" },
  V1 = ["disabled", "onClick", "onMouseover"],
  U1 = ie({
    compatConfig: { MODE: 3 },
    __name: "QuarterPicker",
    props: { ...oa },
    emits: [
      "update:internal-model-value",
      "reset-flow",
      "overlay-closed",
      "auto-apply",
      "range-start",
      "range-end",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        i = Wa(),
        r = Ht(i, "yearMode"),
        {
          defaultedMultiCalendars: l,
          defaultedConfig: s,
          groupedYears: d,
          year: g,
          isDisabled: m,
          quarters: v,
          modelValue: p,
          showYearPicker: b,
          setHoverDate: _,
          selectQuarter: T,
          toggleYearPicker: y,
          handleYearSelect: w,
          handleYear: O,
        } = N1(o, t);
      return (
        n({
          getSidebarProps: () => ({
            modelValue: p,
            year: g,
            selectQuarter: T,
            handleYearSelect: w,
            handleYear: O,
          }),
        }),
        (C, x) => (
          c(),
          K(
            Po,
            { "multi-calendars": L(l).count, stretch: "" },
            {
              default: he(({ instance: F }) => [
                P(
                  "div",
                  {
                    class: "dp-quarter-picker-wrap",
                    style: Be({ minHeight: `${L(s).modeHeight}px` }),
                  },
                  [
                    P("div", null, [
                      Ee(
                        Tu,
                        je(C.$props, {
                          items: L(d)(F),
                          instance: F,
                          "show-year-picker": L(b)[F],
                          year: L(g)(F),
                          "is-disabled": (Y) => L(m)(F, Y),
                          onHandleYear: (Y) => L(O)(F, Y),
                          onYearSelect: (Y) => L(w)(Y, F),
                          onToggleYearPicker: (Y) => L(y)(F, Y?.flow, Y?.show),
                        }),
                        Mt({ _: 2 }, [
                          Te(L(r), (Y, j) => ({
                            name: Y,
                            fn: he((q) => [ae(C.$slots, Y, Xe(Ct(q)))]),
                          })),
                        ]),
                        1040,
                        [
                          "items",
                          "instance",
                          "show-year-picker",
                          "year",
                          "is-disabled",
                          "onHandleYear",
                          "onYearSelect",
                          "onToggleYearPicker",
                        ]
                      ),
                    ]),
                    P("div", H1, [
                      (c(!0),
                      h(
                        ve,
                        null,
                        Te(
                          L(v)(F),
                          (Y, j) => (
                            c(),
                            h("div", { key: j }, [
                              P(
                                "button",
                                {
                                  type: "button",
                                  class: X([
                                    "dp--qr-btn",
                                    {
                                      "dp--qr-btn-active": Y.active,
                                      "dp--qr-btn-between": Y.isBetween,
                                      "dp--qr-btn-disabled": Y.disabled,
                                      "dp--highlighted": Y.highlighted,
                                    },
                                  ]),
                                  disabled: Y.disabled,
                                  onClick: (q) => L(T)(Y.value, F, Y.disabled),
                                  onMouseover: (q) => L(_)(Y.value),
                                },
                                [
                                  C.$slots.quarter
                                    ? ae(C.$slots, "quarter", {
                                        key: 0,
                                        value: Y.value,
                                        text: Y.text,
                                      })
                                    : (c(),
                                      h(
                                        ve,
                                        { key: 1 },
                                        [Le(ee(Y.text), 1)],
                                        64
                                      )),
                                ],
                                42,
                                V1
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]),
                  ],
                  4
                ),
              ]),
              _: 3,
            },
            8,
            ["multi-calendars"]
          )
        )
      );
    },
  }),
  Y1 = ["id"],
  $1 = { key: 0, class: "dp__sidebar_left" },
  F1 = { key: 1, class: "dp--preset-dates" },
  W1 = ["onClick", "onKeydown"],
  G1 = { key: 2, class: "dp__sidebar_right" },
  q1 = { key: 3, class: "dp__action_extra" },
  zl = ie({
    compatConfig: { MODE: 3 },
    __name: "DatepickerMenu",
    props: {
      ...Co,
      shadow: { type: Boolean, default: !1 },
      openOnTop: { type: Boolean, default: !1 },
      internalModelValue: { type: [Date, Array], default: null },
      arrMapValues: { type: Object, default: () => ({}) },
      noOverlayFocus: { type: Boolean, default: !1 },
    },
    emits: [
      "close-picker",
      "select-date",
      "auto-apply",
      "time-update",
      "flow-step",
      "update-month-year",
      "invalid-select",
      "update:internal-model-value",
      "recalculate-position",
      "invalid-fixed-range",
      "tooltip-open",
      "tooltip-close",
      "time-picker-open",
      "time-picker-close",
      "am-pm-change",
      "range-start",
      "range-end",
      "auto-apply-invalid",
      "date-update",
      "invalid-date",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        i = u(() => {
          const { openOnTop: Q, ...ne } = o;
          return { ...ne, flowStep: j.value, noOverlayFocus: o.noOverlayFocus };
        }),
        { setMenuFocused: r, setShiftKey: l, control: s } = Su(),
        d = Wa(),
        {
          defaultedTextInput: g,
          defaultedInline: m,
          defaultedConfig: v,
        } = vt(o),
        p = E(null),
        b = E(0),
        _ = E(null),
        T = E(null),
        y = E(!1),
        w = E(null);
      Me(() => {
        if (!o.shadow) {
          (y.value = !0), O(), window.addEventListener("resize", O);
          const Q = pt(_);
          if ((Q && !g.value.enabled && !m.value.enabled && (r(!0), z()), Q)) {
            const ne = (be) => {
              v.value.allowPreventDefault && be.preventDefault(),
                Ia(be, v.value, !0);
            };
            Q.addEventListener("pointerdown", ne),
              Q.addEventListener("mousedown", ne);
          }
        }
      }),
        qn(() => {
          window.removeEventListener("resize", O);
        });
      const O = () => {
          const Q = pt(T);
          Q && (b.value = Q.getBoundingClientRect().width);
        },
        { arrowRight: C, arrowLeft: x, arrowDown: F, arrowUp: Y } = Ma(),
        {
          flowStep: j,
          updateFlowStep: q,
          childMount: S,
          resetFlow: B,
        } = Vk(o, t, w),
        $ = u(() =>
          o.monthPicker
            ? a1
            : o.yearPicker
            ? o1
            : o.timePicker
            ? w1
            : o.quarterPicker
            ? U1
            : R1
        ),
        z = () => {
          const Q = pt(_);
          Q && Q.focus({ preventScroll: !0 });
        },
        N = u(() => {
          var Q;
          return ((Q = w.value) == null ? void 0 : Q.getSidebarProps()) || {};
        }),
        I = () => {
          o.openOnTop && t("recalculate-position");
        },
        H = Ht(d, "action"),
        A = u(() =>
          o.monthPicker || o.yearPicker
            ? Ht(d, "monthYear")
            : o.timePicker
            ? Ht(d, "timePicker")
            : Ht(d, "shared")
        ),
        G = u(() => (o.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top")),
        k = u(() => ({
          dp__menu_disabled: o.disabled,
          dp__menu_readonly: o.readonly,
        })),
        f = u(() => ({
          dp__menu: !0,
          dp__menu_index: !m.value.enabled,
          dp__relative: m.value.enabled,
          [o.menuClassName]: !!o.menuClassName,
        })),
        W = (Q) => {
          Ia(Q, v.value, !0);
        },
        U = () => {
          o.escClose && t("close-picker");
        },
        Z = (Q) => {
          if (o.arrowNavigation) {
            if (Q === "up") return Y();
            if (Q === "down") return F();
            if (Q === "left") return x();
            if (Q === "right") return C();
          } else
            Q === "left" || Q === "up"
              ? Se("handleArrow", "left", 0, Q === "up")
              : Se("handleArrow", "right", 0, Q === "down");
        },
        J = (Q) => {
          l(Q.shiftKey),
            !o.disableMonthYearSelect &&
              Q.code === "Tab" &&
              Q.target.classList.contains("dp__menu") &&
              s.value.shiftKeyInMenu &&
              (Q.preventDefault(), Ia(Q, v.value, !0), t("close-picker"));
        },
        R = () => {
          z(), t("time-picker-close");
        },
        D = (Q) => {
          var ne, be, se;
          (ne = w.value) == null || ne.toggleTimePicker(!1, !1),
            (be = w.value) == null || be.toggleMonthPicker(!1, !1, Q),
            (se = w.value) == null || se.toggleYearPicker(!1, !1, Q);
        },
        pe = (Q, ne = 0) => {
          var be, se, Ae;
          return Q === "month"
            ? (be = w.value) == null
              ? void 0
              : be.toggleMonthPicker(!1, !0, ne)
            : Q === "year"
            ? (se = w.value) == null
              ? void 0
              : se.toggleYearPicker(!1, !0, ne)
            : Q === "time"
            ? (Ae = w.value) == null
              ? void 0
              : Ae.toggleTimePicker(!0, !1)
            : D(ne);
        },
        Se = (Q, ...ne) => {
          var be, se;
          (be = w.value) != null &&
            be[Q] &&
            ((se = w.value) == null || se[Q](...ne));
        },
        ge = () => {
          Se("selectCurrentDate");
        },
        me = (Q, ne) => {
          Se("presetDate", Q, ne);
        },
        ce = () => {
          Se("clearHoverDate");
        };
      return (
        n({
          updateMonthYear: (Q, ne) => {
            Se("updateMonthYear", Q, ne);
          },
          switchView: pe,
        }),
        (Q, ne) => {
          var be;
          return (
            c(),
            h(
              "div",
              {
                id: Q.uid ? `dp-menu-${Q.uid}` : void 0,
                ref_key: "dpMenuRef",
                ref: _,
                tabindex: "0",
                role: "dialog",
                class: X(f.value),
                onMouseleave: ce,
                onClick: W,
                onKeydown: [
                  Oe(U, ["esc"]),
                  ne[18] ||
                    (ne[18] = Oe(
                      Ie((se) => Z("left"), ["prevent"]),
                      ["left"]
                    )),
                  ne[19] ||
                    (ne[19] = Oe(
                      Ie((se) => Z("up"), ["prevent"]),
                      ["up"]
                    )),
                  ne[20] ||
                    (ne[20] = Oe(
                      Ie((se) => Z("down"), ["prevent"]),
                      ["down"]
                    )),
                  ne[21] ||
                    (ne[21] = Oe(
                      Ie((se) => Z("right"), ["prevent"]),
                      ["right"]
                    )),
                  J,
                ],
              },
              [
                (Q.disabled || Q.readonly) && L(m).enabled
                  ? (c(), h("div", { key: 0, class: X(k.value) }, null, 2))
                  : M("", !0),
                !L(m).enabled && !Q.teleportCenter
                  ? (c(), h("div", { key: 1, class: X(G.value) }, null, 2))
                  : M("", !0),
                P(
                  "div",
                  {
                    ref_key: "innerMenuRef",
                    ref: T,
                    class: X({
                      dp__menu_content_wrapper:
                        ((be = Q.presetDates) == null ? void 0 : be.length) ||
                        !!Q.$slots["left-sidebar"] ||
                        !!Q.$slots["right-sidebar"],
                    }),
                    style: Be({ "--dp-menu-width": `${b.value}px` }),
                  },
                  [
                    Q.$slots["left-sidebar"]
                      ? (c(),
                        h("div", $1, [
                          ae(Q.$slots, "left-sidebar", Xe(Ct(N.value))),
                        ]))
                      : M("", !0),
                    Q.presetDates.length
                      ? (c(),
                        h("div", F1, [
                          (c(!0),
                          h(
                            ve,
                            null,
                            Te(
                              Q.presetDates,
                              (se, Ae) => (
                                c(),
                                h(
                                  ve,
                                  { key: Ae },
                                  [
                                    se.slot
                                      ? ae(Q.$slots, se.slot, {
                                          key: 0,
                                          presetDate: me,
                                          label: se.label,
                                          value: se.value,
                                        })
                                      : (c(),
                                        h(
                                          "button",
                                          {
                                            key: 1,
                                            type: "button",
                                            style: Be(se.style || {}),
                                            class: "dp__btn dp--preset-range",
                                            onClick: Ie(
                                              (Ye) => me(se.value, se.noTz),
                                              ["prevent"]
                                            ),
                                            onKeydown: [
                                              Oe(
                                                Ie(
                                                  (Ye) => me(se.value, se.noTz),
                                                  ["prevent"]
                                                ),
                                                ["enter"]
                                              ),
                                              Oe(
                                                Ie(
                                                  (Ye) => me(se.value, se.noTz),
                                                  ["prevent"]
                                                ),
                                                ["space"]
                                              ),
                                            ],
                                          },
                                          ee(se.label),
                                          45,
                                          W1
                                        )),
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : M("", !0),
                    P(
                      "div",
                      {
                        ref_key: "calendarWrapperRef",
                        ref: p,
                        class: "dp__instance_calendar",
                        role: "document",
                      },
                      [
                        (c(),
                        K(
                          hn($.value),
                          je({ ref_key: "dynCmpRef", ref: w }, i.value, {
                            "flow-step": L(j),
                            onMount: L(S),
                            onUpdateFlowStep: L(q),
                            onResetFlow: L(B),
                            onFocusMenu: z,
                            onSelectDate:
                              ne[0] || (ne[0] = (se) => Q.$emit("select-date")),
                            onDateUpdate:
                              ne[1] ||
                              (ne[1] = (se) => Q.$emit("date-update", se)),
                            onTooltipOpen:
                              ne[2] ||
                              (ne[2] = (se) => Q.$emit("tooltip-open", se)),
                            onTooltipClose:
                              ne[3] ||
                              (ne[3] = (se) => Q.$emit("tooltip-close", se)),
                            onAutoApply:
                              ne[4] ||
                              (ne[4] = (se) => Q.$emit("auto-apply", se)),
                            onRangeStart:
                              ne[5] ||
                              (ne[5] = (se) => Q.$emit("range-start", se)),
                            onRangeEnd:
                              ne[6] ||
                              (ne[6] = (se) => Q.$emit("range-end", se)),
                            onInvalidFixedRange:
                              ne[7] ||
                              (ne[7] = (se) =>
                                Q.$emit("invalid-fixed-range", se)),
                            onTimeUpdate:
                              ne[8] || (ne[8] = (se) => Q.$emit("time-update")),
                            onAmPmChange:
                              ne[9] ||
                              (ne[9] = (se) => Q.$emit("am-pm-change", se)),
                            onTimePickerOpen:
                              ne[10] ||
                              (ne[10] = (se) =>
                                Q.$emit("time-picker-open", se)),
                            onTimePickerClose: R,
                            onRecalculatePosition: I,
                            onUpdateMonthYear:
                              ne[11] ||
                              (ne[11] = (se) =>
                                Q.$emit("update-month-year", se)),
                            onAutoApplyInvalid:
                              ne[12] ||
                              (ne[12] = (se) =>
                                Q.$emit("auto-apply-invalid", se)),
                            onInvalidDate:
                              ne[13] ||
                              (ne[13] = (se) => Q.$emit("invalid-date", se)),
                            "onUpdate:internalModelValue":
                              ne[14] ||
                              (ne[14] = (se) =>
                                Q.$emit("update:internal-model-value", se)),
                          }),
                          Mt({ _: 2 }, [
                            Te(A.value, (se, Ae) => ({
                              name: se,
                              fn: he((Ye) => [
                                ae(Q.$slots, se, Xe(Ct({ ...Ye }))),
                              ]),
                            })),
                          ]),
                          1040,
                          [
                            "flow-step",
                            "onMount",
                            "onUpdateFlowStep",
                            "onResetFlow",
                          ]
                        )),
                      ],
                      512
                    ),
                    Q.$slots["right-sidebar"]
                      ? (c(),
                        h("div", G1, [
                          ae(Q.$slots, "right-sidebar", Xe(Ct(N.value))),
                        ]))
                      : M("", !0),
                    Q.$slots["action-extra"]
                      ? (c(),
                        h("div", q1, [
                          Q.$slots["action-extra"]
                            ? ae(Q.$slots, "action-extra", {
                                key: 0,
                                selectCurrentDate: ge,
                              })
                            : M("", !0),
                        ]))
                      : M("", !0),
                  ],
                  6
                ),
                !Q.autoApply || L(v).keepActionRow
                  ? (c(),
                    K(
                      jk,
                      je({ key: 2, "menu-mount": y.value }, i.value, {
                        "calendar-width": b.value,
                        onClosePicker:
                          ne[15] || (ne[15] = (se) => Q.$emit("close-picker")),
                        onSelectDate:
                          ne[16] || (ne[16] = (se) => Q.$emit("select-date")),
                        onInvalidSelect:
                          ne[17] ||
                          (ne[17] = (se) => Q.$emit("invalid-select")),
                        onSelectNow: ge,
                      }),
                      Mt({ _: 2 }, [
                        Te(L(H), (se, Ae) => ({
                          name: se,
                          fn: he((Ye) => [ae(Q.$slots, se, Xe(Ct({ ...Ye })))]),
                        })),
                      ]),
                      1040,
                      ["menu-mount", "calendar-width"]
                    ))
                  : M("", !0),
              ],
              42,
              Y1
            )
          );
        }
      );
    },
  }),
  j1 = typeof window < "u" ? window : void 0,
  tr = () => {},
  z1 = (e) => (Jl() ? (es(e), !0) : !1),
  K1 = (e, n, a, t) => {
    if (!e) return tr;
    let o = tr;
    const i = xe(
        () => L(e),
        (l) => {
          o(),
            l &&
              (l.addEventListener(n, a, t),
              (o = () => {
                l.removeEventListener(n, a, t), (o = tr);
              }));
        },
        { immediate: !0, flush: "post" }
      ),
      r = () => {
        i(), o();
      };
    return z1(r), r;
  },
  Q1 = (e, n, a, t = {}) => {
    const { window: o = j1, event: i = "pointerdown" } = t;
    return o
      ? K1(
          o,
          i,
          (r) => {
            const l = pt(e),
              s = pt(n);
            !l ||
              !s ||
              l === r.target ||
              r.composedPath().includes(l) ||
              r.composedPath().includes(s) ||
              a(r);
          },
          { passive: !0 }
        )
      : void 0;
  },
  X1 = ie({
    compatConfig: { MODE: 3 },
    __name: "VueDatePicker",
    props: { ...Co },
    emits: [
      "update:model-value",
      "update:model-timezone-value",
      "text-submit",
      "closed",
      "cleared",
      "open",
      "focus",
      "blur",
      "internal-model-change",
      "recalculate-position",
      "flow-step",
      "update-month-year",
      "invalid-select",
      "invalid-fixed-range",
      "tooltip-open",
      "tooltip-close",
      "time-picker-open",
      "time-picker-close",
      "am-pm-change",
      "range-start",
      "range-end",
      "date-update",
      "invalid-date",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        i = Wa(),
        r = E(!1),
        l = Ua(o, "modelValue"),
        s = Ua(o, "timezone"),
        d = E(null),
        g = E(null),
        m = E(null),
        v = E(!1),
        p = E(null),
        b = E(!1),
        _ = E(!1),
        { setMenuFocused: T, setShiftKey: y } = Su(),
        { clearArrowNav: w } = Ma(),
        { mapDatesArrToMap: O, validateDate: C, isValidTime: x } = qa(o),
        {
          defaultedTransitions: F,
          defaultedTextInput: Y,
          defaultedInline: j,
          defaultedConfig: q,
        } = vt(o),
        { menuTransition: S, showTransition: B } = Qn(F);
      Me(() => {
        Z(o.modelValue),
          At().then(() => {
            if (!j.value.enabled) {
              const te = k(p.value);
              te?.addEventListener("scroll", Q),
                window?.addEventListener("resize", ne);
            }
          }),
          j.value.enabled && (r.value = !0),
          window?.addEventListener("keyup", be),
          window?.addEventListener("keydown", se);
      });
      const $ = u(() => O());
      qn(() => {
        if (!j.value.enabled) {
          const te = k(p.value);
          te?.removeEventListener("scroll", Q),
            window?.removeEventListener("resize", ne);
        }
        window?.removeEventListener("keyup", be),
          window?.removeEventListener("keydown", se);
      });
      const z = Ht(i, "all", o.presetDates),
        N = Ht(i, "input");
      xe(
        [l, s],
        () => {
          Z(l.value);
        },
        { deep: !0 }
      );
      const {
          openOnTop: I,
          menuStyle: H,
          xCorrect: A,
          setMenuPosition: G,
          getScrollableParent: k,
          shadowRender: f,
        } = xk({
          menuRef: d,
          menuRefInner: g,
          inputRef: m,
          pickerWrapperRef: p,
          inline: j,
          emit: t,
          props: o,
          slots: i,
        }),
        {
          inputValue: W,
          internalModelValue: U,
          parseExternalModelValue: Z,
          emitModelValue: J,
          formatInputValue: R,
          checkBeforeEmit: D,
        } = Bk(t, o, v),
        pe = u(() => ({
          dp__main: !0,
          dp__theme_dark: o.dark,
          dp__theme_light: !o.dark,
          dp__flex_display: j.value.enabled,
          dp__flex_display_with_input: j.value.input,
        })),
        Se = u(() => (o.dark ? "dp__theme_dark" : "dp__theme_light")),
        ge = u(() => ({
          to: typeof o.teleport == "boolean" ? "body" : o.teleport,
          disabled: !o.teleport || j.value.enabled,
        })),
        me = u(() => ({ class: "dp__outer_menu_wrap" })),
        ce = u(
          () =>
            j.value.enabled &&
            (o.timePicker || o.monthPicker || o.yearPicker || o.quarterPicker)
        ),
        Q = () => {
          r.value && (q.value.closeOnScroll ? ht() : G());
        },
        ne = () => {
          r.value && G();
        },
        be = (te) => {
          te.key === "Tab" &&
            !j.value.enabled &&
            !o.teleport &&
            q.value.tabOutClosesMenu &&
            (p.value.contains(document.activeElement) || ht()),
            (_.value = te.shiftKey);
        },
        se = (te) => {
          _.value = te.shiftKey;
        },
        Ae = () => {
          !o.disabled &&
            !o.readonly &&
            (f(zl, o),
            G(!1),
            (r.value = !0),
            r.value && t("open"),
            r.value || Nt(),
            Z(o.modelValue));
        },
        Ye = () => {
          var te;
          (W.value = ""),
            Nt(),
            (te = m.value) == null || te.setParsedDate(null),
            t("update:model-value", null),
            t("update:model-timezone-value", null),
            t("cleared"),
            q.value.closeOnClearValue && ht();
        },
        Rt = () => {
          const te = U.value;
          return !te || (!Array.isArray(te) && C(te))
            ? !0
            : Array.isArray(te)
            ? o.multiDates || (te.length === 2 && C(te[0]) && C(te[1]))
              ? !0
              : o.partialRange && !o.timePicker
              ? C(te[0])
              : !1
            : !1;
        },
        Qe = () => {
          D() && Rt() ? (J(), ht()) : t("invalid-select", U.value);
        },
        Yt = (te) => {
          yt(), J(), q.value.closeOnAutoApply && !te && ht();
        },
        yt = () => {
          m.value && Y.value.enabled && m.value.setParsedDate(U.value);
        },
        Bt = (te = !1) => {
          o.autoApply &&
            x(U.value) &&
            Rt() &&
            (o.range && Array.isArray(U.value)
              ? (o.partialRange || U.value.length === 2) && Yt(te)
              : Yt(te));
        },
        Nt = () => {
          Y.value.enabled || (U.value = null);
        },
        ht = () => {
          j.value.enabled ||
            (r.value &&
              ((r.value = !1),
              (A.value = !1),
              T(!1),
              y(!1),
              w(),
              t("closed"),
              W.value && Z(l.value)),
            Nt(),
            t("blur"));
        },
        $t = (te, we, ye = !1) => {
          if (!te) {
            U.value = null;
            return;
          }
          const Je = Array.isArray(te) ? !te.some((_t) => !C(_t)) : C(te),
            lt = x(te);
          Je &&
            lt &&
            ((U.value = te), we && ((b.value = ye), Qe(), t("text-submit")));
        },
        ra = () => {
          o.autoApply && x(U.value) && J(), yt();
        },
        zt = () => (r.value ? ht() : Ae()),
        V = (te) => {
          U.value = te;
        },
        ue = () => {
          Y.value.enabled && ((v.value = !0), R()), t("focus");
        },
        le = () => {
          if (Y.value.enabled && ((v.value = !1), Z(o.modelValue), b.value)) {
            const te = mk(p.value, _.value);
            te?.focus();
          }
          t("blur");
        },
        Ce = (te) => {
          g.value &&
            g.value.updateMonthYear(0, {
              month: Yl(te.month),
              year: Yl(te.year),
            });
        },
        Ne = (te) => {
          Z(te ?? o.modelValue);
        },
        Ze = (te, we) => {
          var ye;
          (ye = g.value) == null || ye.switchView(te, we);
        },
        dt = (te) =>
          q.value.onClickOutside ? q.value.onClickOutside(te) : ht();
      return (
        Q1(d, m, () => dt(Rt)),
        n({
          closeMenu: ht,
          selectDate: Qe,
          clearValue: Ye,
          openMenu: Ae,
          onScroll: Q,
          formatInputValue: R,
          updateInternalModelValue: V,
          setMonthYear: Ce,
          parseModel: Ne,
          switchView: Ze,
          toggleMenu: zt,
        }),
        (te, we) => (
          c(),
          h(
            "div",
            {
              ref_key: "pickerWrapperRef",
              ref: p,
              class: X(pe.value),
              "data-datepicker-instance": "",
            },
            [
              Ee(
                Fk,
                je(
                  {
                    ref_key: "inputRef",
                    ref: m,
                    "input-value": L(W),
                    "onUpdate:inputValue":
                      we[0] ||
                      (we[0] = (ye) => (fi(W) ? (W.value = ye) : null)),
                    "is-menu-open": r.value,
                  },
                  te.$props,
                  {
                    onClear: Ye,
                    onOpen: Ae,
                    onSetInputDate: $t,
                    onSetEmptyDate: L(J),
                    onSelectDate: Qe,
                    onToggle: zt,
                    onClose: ht,
                    onFocus: ue,
                    onBlur: le,
                    onRealBlur: we[1] || (we[1] = (ye) => (v.value = !1)),
                  }
                ),
                Mt({ _: 2 }, [
                  Te(L(N), (ye, Je) => ({
                    name: ye,
                    fn: he((lt) => [ae(te.$slots, ye, Xe(Ct(lt)))]),
                  })),
                ]),
                1040,
                ["input-value", "is-menu-open", "onSetEmptyDate"]
              ),
              Ee(
                Ru,
                Xe(Ct(ge.value)),
                {
                  default: he(() => [
                    Ee(
                      xt,
                      { name: L(S)(L(I)), css: L(B) && !L(j).enabled },
                      {
                        default: he(() => [
                          r.value
                            ? (c(),
                              h(
                                "div",
                                je(
                                  { key: 0, ref_key: "dpWrapMenuRef", ref: d },
                                  me.value,
                                  {
                                    class: {
                                      "dp--menu-wrapper": !L(j).enabled,
                                    },
                                    style: L(j).enabled ? void 0 : L(H),
                                  }
                                ),
                                [
                                  Ee(
                                    zl,
                                    je(
                                      { ref_key: "dpMenuRef", ref: g },
                                      te.$props,
                                      {
                                        "internal-model-value": L(U),
                                        "onUpdate:internalModelValue":
                                          we[2] ||
                                          (we[2] = (ye) =>
                                            fi(U) ? (U.value = ye) : null),
                                        class: {
                                          [Se.value]: !0,
                                          "dp--menu-wrapper": te.teleport,
                                        },
                                        "open-on-top": L(I),
                                        "arr-map-values": $.value,
                                        "no-overlay-focus": ce.value,
                                        onClosePicker: ht,
                                        onSelectDate: Qe,
                                        onAutoApply: Bt,
                                        onTimeUpdate: ra,
                                        onFlowStep:
                                          we[3] ||
                                          (we[3] = (ye) =>
                                            te.$emit("flow-step", ye)),
                                        onUpdateMonthYear:
                                          we[4] ||
                                          (we[4] = (ye) =>
                                            te.$emit("update-month-year", ye)),
                                        onInvalidSelect:
                                          we[5] ||
                                          (we[5] = (ye) =>
                                            te.$emit("invalid-select", L(U))),
                                        onAutoApplyInvalid:
                                          we[6] ||
                                          (we[6] = (ye) =>
                                            te.$emit("invalid-select", ye)),
                                        onInvalidFixedRange:
                                          we[7] ||
                                          (we[7] = (ye) =>
                                            te.$emit(
                                              "invalid-fixed-range",
                                              ye
                                            )),
                                        onRecalculatePosition: L(G),
                                        onTooltipOpen:
                                          we[8] ||
                                          (we[8] = (ye) =>
                                            te.$emit("tooltip-open", ye)),
                                        onTooltipClose:
                                          we[9] ||
                                          (we[9] = (ye) =>
                                            te.$emit("tooltip-close", ye)),
                                        onTimePickerOpen:
                                          we[10] ||
                                          (we[10] = (ye) =>
                                            te.$emit("time-picker-open", ye)),
                                        onTimePickerClose:
                                          we[11] ||
                                          (we[11] = (ye) =>
                                            te.$emit("time-picker-close", ye)),
                                        onAmPmChange:
                                          we[12] ||
                                          (we[12] = (ye) =>
                                            te.$emit("am-pm-change", ye)),
                                        onRangeStart:
                                          we[13] ||
                                          (we[13] = (ye) =>
                                            te.$emit("range-start", ye)),
                                        onRangeEnd:
                                          we[14] ||
                                          (we[14] = (ye) =>
                                            te.$emit("range-end", ye)),
                                        onDateUpdate:
                                          we[15] ||
                                          (we[15] = (ye) =>
                                            te.$emit("date-update", ye)),
                                        onInvalidDate:
                                          we[16] ||
                                          (we[16] = (ye) =>
                                            te.$emit("invalid-date", ye)),
                                      }
                                    ),
                                    Mt({ _: 2 }, [
                                      Te(L(z), (ye, Je) => ({
                                        name: ye,
                                        fn: he((lt) => [
                                          ae(te.$slots, ye, Xe(Ct({ ...lt }))),
                                        ]),
                                      })),
                                    ]),
                                    1040,
                                    [
                                      "internal-model-value",
                                      "class",
                                      "open-on-top",
                                      "arr-map-values",
                                      "no-overlay-focus",
                                      "onRecalculatePosition",
                                    ]
                                  ),
                                ],
                                16
                              ))
                            : M("", !0),
                        ]),
                        _: 3,
                      },
                      8,
                      ["name", "css"]
                    ),
                  ]),
                  _: 3,
                },
                16
              ),
            ],
            2
          )
        )
      );
    },
  }),
  gi = (() => {
    const e = X1;
    return (
      (e.install = (n) => {
        n.component("Vue3DatePicker", e);
      }),
      e
    );
  })(),
  Z1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: gi },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
Object.entries(Z1).forEach(([e, n]) => {
  e !== "default" && (gi[e] = n);
});
const J1 = {
    props: {
      month: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      customProps: { type: Object, default: null },
    },
    emits: ["update-month-year"],
    computed: {
      getLanguage() {
        return this.customProps.language === "br"
          ? "pt-BR"
          : this.customProps.language;
      },
      calendarTitle() {
        return new Date(this.year, this.month).toLocaleDateString(
          this.getLanguage,
          { year: "numeric", month: "long" }
        );
      },
    },
    methods: {
      onNextClick() {
        let e = this.month,
          n = this.year;
        this.month === 11 ? ((e = 0), (n = this.year + 1)) : (e += 1),
          this.updateDate(e, n);
      },
      onPreviousClick() {
        let e = this.month,
          n = this.year;
        this.month === 0 ? ((e = 11), (n = this.year - 1)) : (e -= 1),
          this.updateDate(e, n);
      },
      updateDate(e, n) {
        this.$emit("update-month-year", { instance: 0, month: e, year: n });
      },
    },
  },
  Du = (e) => (Vt("data-v-707c7e3f"), (e = e()), Ut(), e),
  eS = { class: "date-picker-header" },
  tS = Du(() =>
    P(
      "div",
      { class: "date-picker-header__arrow" },
      [
        P(
          "svg",
          {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            P("path", {
              d: "M12.5 5L7.5 10L12.5 15",
              stroke: "black",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  aS = [tS],
  nS = Du(() =>
    P(
      "div",
      { class: "date-picker-header__arrow date-picker-header__arrow--next" },
      [
        P(
          "svg",
          {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            P("path", {
              d: "M12.5 5L7.5 10L12.5 15",
              stroke: "black",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  oS = [nS];
function rS(e, n, a, t, o, i) {
  return (
    c(),
    h("div", eS, [
      P(
        "button",
        {
          class: "date-picker-header__button",
          onClick:
            n[0] ||
            (n[0] = (...r) => i.onPreviousClick && i.onPreviousClick(...r)),
        },
        aS
      ),
      Le(" " + ee(i.calendarTitle) + " ", 1),
      P(
        "button",
        {
          class: "date-picker-header__button",
          onClick:
            n[1] || (n[1] = (...r) => i.onNextClick && i.onNextClick(...r)),
        },
        oS
      ),
    ])
  );
}
const iS = re(J1, [
    ["render", rS],
    ["__scopeId", "data-v-707c7e3f"],
  ]),
  lS = ie({
    components: { ModalLayout: bn, DatePicker: gi },
    props: {
      translations: { type: Object, default: () => {} },
      language: { type: String, default: "en" },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const {
          isStoreTypeZyro: n,
          products: a,
          selectedBookingProductId: t,
          shoppingCartItems: o,
          setSelectedBookingId: i,
        } = na(),
        { openEcommerceModal: r } = aa(),
        { initiateCheckout: l } = jn(),
        s = u(() => iS);
      return {
        initiateCheckout: l,
        openEcommerceModal: r,
        datePickerHeader: s,
        isStoreTypeZyro: n,
        products: a,
        selectedBookingProductId: t,
        shoppingCartItems: o,
        setSelectedBookingId: i,
      };
    },
    data() {
      return {
        isTimeSelected: !1,
        selectedTimeSlot: null,
        selectedDate: new Date(),
        timeSlots: [],
        isSlotsLoading: !1,
        isCalendarLoading: !1,
        isCheckoutLoading: !1,
        disabledDates: [],
      };
    },
    computed: {
      isModalEnabled() {
        return this.isStoreTypeZyro && !!this.selectedBookingProductId;
      },
      selectedBookingProduct() {
        return this.products?.find(
          (e) => e.id === this.selectedBookingProductId
        );
      },
      bookingEvent() {
        return this.selectedBookingProduct?.variants[0].booking_event;
      },
      title() {
        return this.selectedBookingProduct?.title;
      },
      location() {
        return this.bookingEvent?.location;
      },
      duration() {
        return this.bookingEvent?.length || null;
      },
      durationUnit() {
        return this.bookingEvent?.length_unit;
      },
      aggregatedDuration() {
        const e =
            this.durationUnit === dr
              ? this.duration / 1e3 / 60 / 60
              : this.duration / 1e3 / 60,
          n =
            this.durationUnit === dr
              ? this.translations.hourShort
              : this.translations.minuteShort;
        return `${e} ${n}`;
      },
      eventStartDate() {
        return this.selectedTimeSlot ? new Date(this.selectedTimeSlot) : null;
      },
      eventEndDate() {
        if (!this.selectedTimeSlot) return null;
        const n = this.eventStartDate.getTime() + this.duration;
        return new Date(n);
      },
      calculatedTime() {
        if (!this.selectedTimeSlot) return "--:--";
        const e = this.getVisibleDate(this.eventStartDate),
          n = this.getVisibleDate(this.eventEndDate);
        return `${e} - ${n}`;
      },
      dayNames() {
        const e = [],
          n = new Date();
        n.setDate(n.getDate() - n.getDay());
        for (let a = 0; a < 7; a += 1)
          n.setDate(n.getDate() + 1),
            e.push(
              new Date(n).toLocaleDateString(this.getLanguage, {
                weekday: "short",
              })
            );
        return e;
      },
      formattedSelectedDate() {
        const e = this.selectedDate?.toLocaleDateString(this.language);
        if (
          this.eventStartDate?.toDateString() !==
          this.eventEndDate?.toDateString()
        ) {
          const n = this.eventEndDate.toLocaleDateString(this.language);
          return `${e} - ${n}`;
        }
        return e;
      },
      selectedMonthAndWeekday() {
        if (!this.selectedDate) return null;
        const e = this.selectedDate?.toLocaleDateString(this.getLanguage, {
          month: "long",
          day: "numeric",
        });
        return `${this.selectedDate?.toLocaleDateString(this.getLanguage, {
          weekday: "long",
        })}, ${e}`;
      },
      getLanguage() {
        return this.language === "br" ? "pt-BR" : this.language;
      },
    },
    watch: {
      async selectedDate() {
        (this.selectedTimeSlot = null),
          (this.isTimeSelected = !1),
          await this.loadTimeSlots();
      },
    },
    async mounted() {
      this.isModalEnabled && this.setDefaultData();
    },
    methods: {
      closeEcommerceModal() {
        this.setSelectedBookingId(null),
          this.$refs.modal.handleCloseModalAction();
      },
      async setDefaultData() {
        if (
          (await this.loadAvailability(),
          this.disabledDates.some(
            (e) => e.toDateString() === this.selectedDate.toDateString()
          ))
        ) {
          const n = this.getAllDaysInCurrentMonth()
            .filter(
              (a) =>
                !this.disabledDates.some(
                  (t) => t.toDateString() === a.toDateString()
                )
            )
            .sort((a, t) => new Date(a.date) - new Date(t.date));
          this.selectedDate = n.shift();
        }
        await this.loadTimeSlots();
      },
      async handleSubmit() {
        if (ln() || this.isInPreviewMode) {
          this.openEcommerceModal("EcommerceMessageButtonDisabled");
          return;
        }
        this.isCheckoutLoading = !0;
        const e = { ...this.selectedBookingProduct },
          { timeZone: n } = Intl.DateTimeFormat().resolvedOptions();
        (e.variants[0].booking_event = {
          ...e.variants[0].booking_event,
          time_slot: this.selectedTimeSlot,
          time_zone: n,
          length: e.variants[0].booking_event.length,
          length_unit: e.variants[0].booking_event.length_unit,
          date: this.selectedDate,
        }),
          await this.initiateCheckout([e]),
          (this.isCheckoutLoading = !1),
          this.closeEcommerceModal();
      },
      selectTimeSlot(e) {
        (this.isTimeSelected = !0), (this.selectedTimeSlot = e);
      },
      async loadTimeSlots() {
        this.isSlotsLoading = !0;
        const e = new Intl.DateTimeFormat("lt").format(this.selectedDate);
        this.timeSlots = await Wd(this.bookingEvent.id, e).then(
          (n) => ((this.isSlotsLoading = !1), n)
        );
      },
      async loadAvailability({ data: e = {} } = {}) {
        this.isCalendarLoading = !0;
        const n = Object.keys(e).length
            ? new Date(e.year, e.month)
            : this.selectedDate,
          a = new Date(n.getFullYear(), n.getMonth() + 1, 0);
        this.disabledDates = await Gd({
          bookingId: this.bookingEvent.id,
          fromDate: new Intl.DateTimeFormat("lt").format(n),
          toDate: new Intl.DateTimeFormat("lt").format(a),
        }).then(
          (t) => (
            (this.isCalendarLoading = !1),
            t.map((o) => {
              const i = o.split("-");
              return new Date(i[0], i[1] - 1, i[2]);
            })
          )
        );
      },
      getAllDaysInCurrentMonth() {
        const e = new Date().getMonth(),
          n = new Date(new Date().getFullYear(), e, new Date().getDate()),
          a = [];
        for (; n.getMonth() === e; )
          a.push(new Date(n)), n.setDate(n.getDate() + 1);
        return a;
      },
      getVisibleDate(e) {
        return e.toLocaleTimeString(this.language, {
          hour: "2-digit",
          minute: "2-digit",
        });
      },
    },
  }),
  sS = { class: "ecommerce-booking-modal" },
  uS = { class: "ecommerce-booking-modal__content" },
  cS = { class: "ecommerce-booking-modal__info" },
  dS = { class: "ecommerce-booking-modal__title" },
  mS = { class: "ecommerce-booking-modal__icons" },
  gS = { class: "ecommerce-booking-modal__text-wrapper" },
  vS = P(
    "div",
    { class: "ecommerce-booking-modal__icon" },
    [
      P(
        "svg",
        {
          width: "16",
          height: "18",
          viewBox: "0 0 16 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          P("path", {
            d: "M5.5 8.3335H3.83333V10.0002H5.5V8.3335ZM8.83333 8.3335H7.16667V10.0002H8.83333V8.3335ZM12.1667 8.3335H10.5V10.0002H12.1667V8.3335ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24167 2.50016 0.5 3.25016 0.5 4.16683V15.8335C0.5 16.2755 0.675595 16.6994 0.988155 17.012C1.30072 17.3246 1.72464 17.5002 2.16667 17.5002H13.8333C14.2754 17.5002 14.6993 17.3246 15.0118 17.012C15.3244 16.6994 15.5 16.2755 15.5 15.8335V4.16683C15.5 3.7248 15.3244 3.30088 15.0118 2.98832C14.6993 2.67576 14.2754 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V6.66683H13.8333V15.8335Z",
            fill: "#474B4F",
          }),
        ]
      ),
    ],
    -1
  ),
  pS = { class: "ecommerce-booking-modal__text" },
  hS = { class: "ecommerce-booking-modal__text-wrapper" },
  fS = P(
    "div",
    { class: "ecommerce-booking-modal__icon" },
    [
      P(
        "svg",
        {
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          P("path", {
            d: "M9.00001 15.6665C12.6667 15.6665 15.6667 12.6665 15.6667 8.99984C15.6667 5.33317 12.6667 2.33317 9.00001 2.33317C5.33334 2.33317 2.33334 5.33317 2.33334 8.99984C2.33334 12.6665 5.33334 15.6665 9.00001 15.6665ZM9.00001 0.666504C13.5833 0.666504 17.3333 4.4165 17.3333 8.99984C17.3333 13.5832 13.5833 17.3332 9.00001 17.3332C4.41667 17.3332 0.666672 13.5832 0.666672 8.99984C0.666672 4.4165 4.41667 0.666504 9.00001 0.666504ZM13.1667 8.58317V9.83317H8.16667V4.83317H9.41667V8.58317H13.1667Z",
            fill: "#474B4F",
          }),
        ]
      ),
    ],
    -1
  ),
  bS = { class: "ecommerce-booking-modal__text" },
  yS = { class: "ecommerce-booking-modal__text-wrapper" },
  _S = P(
    "div",
    { class: "ecommerce-booking-modal__icon" },
    [
      P(
        "svg",
        {
          width: "12",
          height: "18",
          viewBox: "0 0 12 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          P("path", {
            d: "M6.00001 2.33317C8.33334 2.33317 10.1667 4.1665 10.1667 6.49984C10.1667 8.9165 7.75001 12.4998 6.00001 14.7498C4.25001 12.4998 1.83334 8.9165 1.83334 6.49984C1.83334 4.1665 3.66667 2.33317 6.00001 2.33317ZM6.00001 0.666504C2.75001 0.666504 0.166672 3.24984 0.166672 6.49984C0.166672 10.8332 6.00001 17.3332 6.00001 17.3332C6.00001 17.3332 11.8333 10.8332 11.8333 6.49984C11.8333 3.24984 9.25001 0.666504 6.00001 0.666504ZM5.41667 10.6665L9.50001 6.49984L8.33334 5.33317L5.41667 8.33317L4.08334 6.99984L2.91667 8.1665L5.41667 10.6665Z",
            fill: "#474B4F",
          }),
        ]
      ),
    ],
    -1
  ),
  wS = { class: "ecommerce-booking-modal__text" },
  kS = { class: "ecommerce-booking-modal__availability" },
  SS = { class: "ecommerce-booking-modal__time-title" },
  TS = { class: "ecommerce-booking-modal__calendar-wrapper" },
  CS = { class: "ecommerce-booking-modal__time-wrapper" },
  PS = { class: "ecommerce-booking-modal__selected-day" },
  IS = { class: "ecommerce-booking-modal__time-slot-wrapper" },
  ES = { key: 0, class: "ecommerce-booking-modal__time-slot-loader" },
  DS = ["onClick"],
  MS = { class: "ecommerce-booking-modal__buttons" },
  OS = ["disabled"];
function AS(e, n, a, t, o, i) {
  const r = He("DatePicker"),
    l = He("ModalLayout"),
    s = ze("qa");
  return e.isModalEnabled
    ? (c(),
      K(
        l,
        {
          key: 0,
          ref: "modal",
          padding: "0",
          "max-width": "1048px",
          "mobile-height": "100%",
          width: "100vw",
          "background-color": "transparent",
        },
        {
          default: he(() => [
            P("div", sS, [
              P("div", uS, [
                P("div", cS, [
                  P("p", dS, ee(e.title), 1),
                  P("div", mS, [
                    de(
                      (c(),
                      h("div", gS, [
                        vS,
                        P("p", pS, ee(e.formattedSelectedDate), 1),
                      ])),
                      [[s, "ecommerce-booking-modal-date"]]
                    ),
                    de(
                      (c(),
                      h("div", hS, [
                        fS,
                        P(
                          "p",
                          bS,
                          ee(e.calculatedTime) +
                            " (" +
                            ee(e.aggregatedDuration) +
                            ") ",
                          1
                        ),
                      ])),
                      [[s, "ecommerce-booking-modal-duration-time"]]
                    ),
                  ]),
                  de((c(), h("div", yS, [_S, P("p", wS, ee(e.location), 1)])), [
                    [s, "ecommerce-booking-modal-location"],
                  ]),
                ]),
                P("div", kS, [
                  P("p", SS, ee(e.translations.selectDateAndTime), 1),
                  P("div", TS, [
                    Ee(
                      r,
                      {
                        modelValue: e.selectedDate,
                        "onUpdate:modelValue":
                          n[0] || (n[0] = (d) => (e.selectedDate = d)),
                        inline: "",
                        "hide-offset-dates": "",
                        "auto-apply": "",
                        class: X([
                          "ecommerce-booking-modal-calendar",
                          {
                            "ecommerce-booking-modal-calendar--loading":
                              e.isCalendarLoading,
                          },
                        ]),
                        "disabled-dates": e.disabledDates,
                        "min-date": new Date(),
                        locale: e.getLanguage,
                        "no-swipe": "",
                        "month-change-on-scroll": !1,
                        "enable-time-picker": !1,
                        "custom-props": { language: e.getLanguage },
                        "month-year-component": e.datePickerHeader,
                        onUpdateMonthYear:
                          n[1] ||
                          (n[1] = (d) => e.loadAvailability({ data: d })),
                      },
                      {
                        "calendar-header": he(({ index: d }) => [
                          P("div", null, ee(e.dayNames[d]), 1),
                        ]),
                        _: 1,
                      },
                      8,
                      [
                        "modelValue",
                        "class",
                        "disabled-dates",
                        "min-date",
                        "locale",
                        "custom-props",
                        "month-year-component",
                      ]
                    ),
                    P("div", CS, [
                      P("div", null, [
                        P("p", PS, ee(e.selectedMonthAndWeekday), 1),
                      ]),
                      P("div", IS, [
                        e.isSlotsLoading
                          ? (c(), h("div", ES))
                          : (c(!0),
                            h(
                              ve,
                              { key: 1 },
                              Te(e.timeSlots, (d, g) =>
                                de(
                                  (c(),
                                  h(
                                    "button",
                                    {
                                      key: `time-${g}`,
                                      class: X([
                                        "ecommerce-booking-modal__time-slot",
                                        {
                                          "ecommerce-booking-modal__time-slot--active":
                                            e.selectedTimeSlot === d,
                                        },
                                      ]),
                                      onClick: (m) => e.selectTimeSlot(d),
                                    },
                                    [Le(ee(e.getVisibleDate(new Date(d))), 1)],
                                    10,
                                    DS
                                  )),
                                  [[s, "ecommerce-booking-modal-time-slot"]]
                                )
                              ),
                              128
                            )),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              P("div", MS, [
                P(
                  "button",
                  {
                    class: "ecommerce-booking-modal__button",
                    onClick:
                      n[2] ||
                      (n[2] = (...d) =>
                        e.closeEcommerceModal && e.closeEcommerceModal(...d)),
                  },
                  ee(e.translations.cancel),
                  1
                ),
                de(
                  (c(),
                  h(
                    "button",
                    {
                      class: X([
                        "ecommerce-booking-modal__button ecommerce-booking-modal__button--save",
                        { loading: e.isCheckoutLoading },
                      ]),
                      disabled: !e.isTimeSelected,
                      onClick:
                        n[3] ||
                        (n[3] = (...d) =>
                          e.handleSubmit && e.handleSubmit(...d)),
                    },
                    [Le(ee(e.translations.book), 1)],
                    10,
                    OS
                  )),
                  [[s, "commerce-booking-modal-button-save"]]
                ),
              ]),
            ]),
          ]),
          _: 1,
        },
        512
      ))
    : M("", !0);
}
const BS = re(lS, [["render", AS]]),
  LS = ie({
    name: "EcommerceModalContent",
    props: {
      title: { type: String, required: !0 },
      text: { type: String, required: !0 },
      buttonText: { type: String, required: !0 },
      qaSelector: { type: String, default: "success" },
    },
    emits: ["handle-close"],
  }),
  xS = { class: "payment-info" },
  RS = { class: "payment-info__content" },
  NS = { class: "payment-info__title" },
  HS = { class: "payment-info__text body-large" };
function VS(e, n, a, t, o, i) {
  const r = ze("qa");
  return de(
    (c(),
    h("div", xS, [
      P("div", RS, [
        P("h5", NS, ee(e.title), 1),
        P("p", HS, ee(e.text), 1),
        P(
          "button",
          {
            class: "payment-info__button",
            type: "primary",
            onClick: n[0] || (n[0] = (l) => e.$emit("handle-close")),
          },
          ee(e.buttonText),
          1
        ),
      ]),
    ])),
    [[r, `ecommerce-modal-checkout-${e.qaSelector}`]]
  );
}
const Eo = re(LS, [
    ["render", VS],
    ["__scopeId", "data-v-98b20e5c"],
  ]),
  US = ie({
    components: { ModalLayout: bn, ModalContent: Eo },
    props: { translations: { type: Object, default: () => {} } },
  });
function YS(e, n, a, t, o, i) {
  const r = He("ModalContent"),
    l = He("ModalLayout");
  return (
    c(),
    K(
      l,
      { ref: "modal" },
      {
        default: he(() => [
          Ee(
            r,
            {
              "qa-selector": "booking-unavailable",
              title: e.translations.checkoutModalBookingUnavailable,
              text: e.translations.checkoutModalChooseDifferentTime,
              "button-text": e.translations.gotIt,
              onHandleClose:
                n[0] || (n[0] = (s) => e.$refs.modal.handleCloseModalAction()),
            },
            null,
            8,
            ["title", "text", "button-text"]
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const $S = re(US, [["render", YS]]),
  FS = ie({
    components: { ModalLayout: bn, ModalContent: Eo },
    props: { translations: { type: Object, default: () => {} } },
  });
function WS(e, n, a, t, o, i) {
  const r = He("ModalContent"),
    l = He("ModalLayout");
  return (
    c(),
    K(
      l,
      { ref: "modal" },
      {
        default: he(() => [
          Ee(
            r,
            {
              "qa-selector": "failed",
              title: e.translations.checkoutModalCantAcceptOrders,
              text: e.translations.checkoutModalPleaseContact,
              "button-text": e.translations.close,
              onHandleClose:
                n[0] || (n[0] = (s) => e.$refs.modal.handleCloseModalAction()),
            },
            null,
            8,
            ["title", "text", "button-text"]
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const GS = re(FS, [["render", WS]]),
  qS = ie({
    __name: "EcommerceCheckoutSuccess",
    props: { translations: { default: () => ({}) } },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { isEcommerceStoreCreated: t, setShoppingCartItems: o } = na(),
        i = E({
          title: a.translations.checkoutModalThanksForOrder,
          text: a.translations.checkoutModalOrderReceived,
          buttonText: a.translations.gotIt,
          modalType: "success-order",
        }),
        r = E(null);
      Me(() => {
        const d = new URLSearchParams(window.location.search).get("product");
        d !== qt && o([]),
          d === qt
            ? (i.value = {
                title: a.translations.checkoutModalThanksForOrder,
                text: a.translations.checkoutModalSuccessfullyBooked,
                buttonText: a.translations.gotIt,
                modalType: "success-orderbooking",
              })
            : d === cr &&
              (i.value = {
                title: a.translations.checkoutModalThanksForDonation,
                text: a.translations.checkoutModalDonationReceived,
                buttonText: a.translations.gotIt,
                modalType: "success-orderdonation",
              });
      });
      const l = {
        props: a,
        isEcommerceStoreCreated: t,
        setShoppingCartItems: o,
        modalContent: i,
        modalRef: r,
        ModalContent: Eo,
        ModalLayout: bn,
      };
      return (
        Object.defineProperty(l, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        l
      );
    },
  });
function jS(e, n, a, t, o, i) {
  return t.isEcommerceStoreCreated
    ? (c(),
      K(
        t.ModalLayout,
        { key: 0, ref: "modalRef" },
        {
          default: he(() => [
            Ee(
              t.ModalContent,
              {
                title: t.modalContent.title,
                text: t.modalContent.text,
                "button-text": t.modalContent.buttonText,
                "qa-selector": t.modalContent.modalType,
                onHandleClose:
                  n[0] || (n[0] = (r) => t.modalRef.handleCloseModalAction()),
              },
              null,
              8,
              ["title", "text", "button-text", "qa-selector"]
            ),
          ]),
          _: 1,
        },
        512
      ))
    : M("", !0);
}
const zS = re(qS, [["render", jS]]),
  KS = ie({
    components: { CloseButton: qr },
    props: { translations: { type: Object, default: () => {} } },
    setup() {
      const { closeEcommerceModal: e } = aa(),
        n = setTimeout(() => {
          e();
        }, 6e3);
      return (
        Ot(() => {
          clearTimeout(n);
        }),
        { closeEcommerceModal: e }
      );
    },
  }),
  QS = (e) => (Vt("data-v-2b2551b7"), (e = e()), Ut(), e),
  XS = { class: "notification" },
  ZS = QS(() =>
    P(
      "svg",
      {
        class: "notification__icon",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        P("path", {
          d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        P("path", {
          d: "M12.01 16L12.01 12",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        P("path", {
          d: "M12.01 8L12 8",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  JS = { class: "notification__content" };
function eT(e, n, a, t, o, i) {
  const r = He("CloseButton"),
    l = ze("qa");
  return (
    c(),
    K(
      xt,
      { name: "fade" },
      {
        default: he(() => [
          de(
            (c(),
            h("div", XS, [
              ZS,
              P("p", JS, ee(e.translations.checkoutModalDisabledPreview), 1),
              Ee(r, {
                class: "notification__close",
                title: "Close",
                onClick: n[0] || (n[0] = (s) => e.closeEcommerceModal()),
              }),
            ])),
            [[l, "builder-message-ecommercedisabled"]]
          ),
        ]),
        _: 1,
      }
    )
  );
}
const tT = re(KS, [
    ["render", eT],
    ["__scopeId", "data-v-2b2551b7"],
  ]),
  aT = ie({
    components: { ModalLayout: bn, ModalContent: Eo },
    props: { translations: { type: Object, default: () => {} } },
  });
function nT(e, n, a, t, o, i) {
  const r = He("ModalContent"),
    l = He("ModalLayout");
  return (
    c(),
    K(
      l,
      { ref: "modal" },
      {
        default: he(() => [
          Ee(
            r,
            {
              "qa-selector": "outofstock",
              title: e.translations.checkoutModalOutOfStock,
              text: e.translations.checkoutModalTryOrChoose,
              "button-text": e.translations.gotIt,
              onHandleClose:
                n[0] || (n[0] = (s) => e.$refs.modal.handleCloseModalAction()),
            },
            null,
            8,
            ["title", "text", "button-text"]
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const oT = re(aT, [["render", nT]]),
  rT = "open-modal",
  iT = ie({
    components: {
      EcommerceProductPreview: a_,
      EcommerceBookingEventSelect: BS,
      EcommerceBookingUnavailable: $S,
      EcommerceCheckoutFailed: GS,
      EcommerceCheckoutSuccess: zS,
      EcommerceMessageButtonDisabled: tT,
      EcommerceOutOfStock: oT,
    },
    props: {
      ecommerceTranslations: { type: Object, default: () => ({}) },
      language: { type: String, default: "en" },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup() {
      const {
        openEcommerceModal: e,
        closeEcommerceModal: n,
        openEcommerceModalName: a,
      } = aa();
      return (
        Me(() => {
          const o = new URLSearchParams(window.location.search).get(rT);
          o && e(o);
        }),
        {
          openEcommerceModal: e,
          closeEcommerceModal: n,
          openEcommerceModalName: a,
        }
      );
    },
  });
function lT(e, n, a, t, o, i) {
  return e.openEcommerceModalName
    ? (c(),
      K(
        hn(e.openEcommerceModalName),
        {
          key: 0,
          translations: e.ecommerceTranslations,
          language: e.language,
          "current-locale": e.currentLocale,
          "is-cart-visible": e.isCartVisible,
          "is-in-preview-mode": e.isInPreviewMode,
          "is-quick-preview": "",
        },
        null,
        8,
        [
          "translations",
          "language",
          "current-locale",
          "is-cart-visible",
          "is-in-preview-mode",
        ]
      ))
    : M("", !0);
}
const sT = re(iT, [["render", lT]]),
  uT = ie({
    __name: "Flag",
    props: { alt: {}, src: { default: void 0 } },
    setup(e, { expose: n }) {
      n();
      const a = {};
      return (
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  }),
  cT = { class: "flag" },
  dT = ["src", "alt"],
  mT = P("div", { class: "flag__shadow" }, null, -1);
function gT(e, n, a, t, o, i) {
  return (
    c(),
    h("div", cT, [
      P("img", { class: "flag__img", src: a.src, alt: a.alt }, null, 8, dT),
      mT,
    ])
  );
}
const vT = re(uT, [["render", gT]]),
  pT = ie({
    __name: "LanguageSwitcher",
    props: { languages: {}, currentLocale: {} },
    setup(e, { expose: n }) {
      n(),
        et((p) => ({
          "4c32e0d7": l.value.visibility,
          "7a3cb96c": l.value.height,
          "6ced91e4": l.value.iconTransform,
        }));
      const a = { CLOSED: "closed", OPEN: "open" },
        t = { HIDDEN: "hidden", VISIBLE: "visible" },
        o = {
          state: a.CLOSED,
          visibility: t.HIDDEN,
          height: "0",
          iconTransform: "none",
        },
        i = {
          state: a.OPEN,
          visibility: t.VISIBLE,
          height: "auto",
          iconTransform: "rotate(180deg)",
        },
        r = e,
        l = E({ ...o }),
        s = E(null),
        d = async () => {
          (l.value = { ...(l.value.state === a.CLOSED ? i : o) }),
            await At(),
            s.value?.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "start",
            });
        },
        g = u(() =>
          r.languages
            .filter(({ isHidden: p }) => !p)
            .map((p) => ({
              ...p,
              src: `${vc}/${p.flagPath}`,
              alt: `${p.locale} flag`,
            }))
        ),
        m = u(() => g.value.find(({ locale: p }) => p === r.currentLocale)),
        v = {
          DROPDOWN_STATES: a,
          DROPDOWN_VISIBILITY: t,
          initialDropdownStyles: o,
          openDropdownStyles: i,
          props: r,
          dropdownStyles: l,
          languageSwitcherRef: s,
          toggleDropdown: d,
          languageSwitcherLanguages: g,
          selectedLanguage: m,
          Flag: vT,
        };
      return (
        Object.defineProperty(v, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        v
      );
    },
  }),
  hT = {
    ref: "languageSwitcherRef",
    class: "language-switcher",
    tabindex: "0",
  },
  fT = { key: 1, class: "language-switcher__locale" },
  bT = P(
    "svg",
    {
      class: "language-switcher__icon",
      width: "10",
      height: "7",
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      P("path", {
        d: "M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z",
        fill: "currentColor",
      }),
    ],
    -1
  ),
  yT = { class: "language-switcher__dropdown-area" },
  _T = { class: "language-switcher__dropdown" },
  wT = ["href"];
function kT(e, n, a, t, o, i) {
  const r = ze("qa");
  return (
    c(),
    h(
      "div",
      hT,
      [
        de(
          (c(),
          h(
            "div",
            { class: "language-switcher__button", onClick: t.toggleDropdown },
            [
              t.selectedLanguage?.country
                ? de(
                    (c(),
                    K(
                      t.Flag,
                      {
                        key: 0,
                        class: "language-switcher__flag",
                        src: t.selectedLanguage.src,
                        alt: t.selectedLanguage.alt,
                      },
                      null,
                      8,
                      ["src", "alt"]
                    )),
                    [
                      [
                        r,
                        `navigation-selected-language-${t.selectedLanguage.name}`,
                      ],
                    ]
                  )
                : (c(), h("div", fT, ee(t.selectedLanguage?.locale), 1)),
              bT,
            ]
          )),
          [[r, "navigation-language-switcher"]]
        ),
        P("div", yT, [
          P("ul", _T, [
            (c(!0),
            h(
              ve,
              null,
              Te(t.languageSwitcherLanguages, (l) =>
                de(
                  (c(),
                  h(
                    "li",
                    {
                      key: l.locale,
                      class: "language-switcher__dropdown-item",
                    },
                    [
                      P(
                        "a",
                        {
                          href: l.href,
                          class: X([
                            "language-switcher__dropdown-link",
                            { "--current": l.locale === a.currentLocale },
                          ]),
                        },
                        [
                          l.country
                            ? (c(),
                              K(
                                t.Flag,
                                {
                                  key: 0,
                                  class: "language-switcher__dropdown-flag",
                                  src: l.src,
                                  alt: l.alt,
                                },
                                null,
                                8,
                                ["src", "alt"]
                              ))
                            : M("", !0),
                          Le(" " + ee(l.name), 1),
                        ],
                        10,
                        wT
                      ),
                    ]
                  )),
                  [[r, `navigation-language-switcher-${l.locale}`]]
                )
              ),
              128
            )),
          ]),
        ]),
      ],
      512
    )
  );
}
const ST = re(pT, [["render", kT]]),
  TT = ie({
    __name: "ZyroHamburger",
    props: {
      title: { type: String, default: "Menu" },
      isOpen: { type: Boolean, required: !0 },
      color: { type: String, default: "var(--nav-link-text-color)" },
    },
    setup(e, { expose: n }) {
      n(), et((i) => ({ "165ebbac": t.value }));
      const a = e,
        t = u(() => a.color),
        o = { props: a, burgerColor: t };
      return (
        Object.defineProperty(o, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  }),
  vi = (e) => (Vt("data-v-ccf9b649"), (e = e()), Ut(), e),
  CT = ["title"],
  PT = vi(() => P("span", { class: "burger__bun" }, null, -1)),
  IT = vi(() => P("span", { class: "burger__meat" }, null, -1)),
  ET = vi(() => P("span", { class: "burger__bun" }, null, -1)),
  DT = [PT, IT, ET];
function MT(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "button",
      {
        type: "button",
        class: X(["burger", { "burger--open": a.isOpen }]),
        title: a.title,
      },
      DT,
      10,
      CT
    )
  );
}
const OT = re(TT, [
    ["render", MT],
    ["__scopeId", "data-v-ccf9b649"],
  ]),
  AT = ie({
    name: "BlockHeaderBackground",
    props: {
      type: { type: String, default: "color" },
      imageUrl: { type: String, default: null },
      color: { type: String, default: "" },
      isTransparent: { type: Boolean, default: !1 },
      overlayOpacity: { type: Number, default: 0 },
    },
    computed: {
      backgroundImage() {
        return this.type === "image" && this.imageUrl;
      },
      backgroundColor() {
        return this.type === "color" ? this.color : "transparent";
      },
      backgroundCSSVars() {
        return {
          "--background-color": this.isTransparent
            ? "transparent"
            : this.backgroundColor,
          ...(!!this.backgroundImage && {
            "--background-image": `url(${this.backgroundImage})`,
          }),
          ...(!!this.overlayOpacity && {
            "--overlay-opacity": this.overlayOpacity,
          }),
        };
      },
    },
  });
function BT(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      {
        class: X([
          "background",
          { "background--with-image": e.backgroundImage },
        ]),
        style: Be(e.backgroundCSSVars),
      },
      null,
      6
    )
  );
}
const LT = re(AT, [["render", BT]]),
  xT = ie({
    __name: "BlockHeaderCart",
    props: { cartIconSize: {}, cartText: {}, itemsInCart: {} },
    emits: ["cart-click"],
    setup(e, { expose: n, emit: a }) {
      n(), et((l) => ({ "6dbaf781": i.value }));
      const t = e,
        o = a,
        i = u(() => t.cartIconSize),
        r = { props: t, emit: o, cartIconSize: i };
      return (
        Object.defineProperty(r, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  }),
  RT = (e) => (Vt("data-v-12eef732"), (e = e()), Ut(), e),
  NT = { class: "block-header-cart-wrapper" },
  HT = { class: "block-header-cart" },
  VT = { class: "block-header-cart__icon-container" },
  UT = RT(() =>
    P(
      "svg",
      {
        width: "19",
        height: "24",
        viewBox: "0 0 19 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "block-header-cart__icon",
      },
      [
        P("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: `M5.94636 5.35922C6.29451 3.00506 7.9363 1.39824 9.67973
						1.39824C11.4232 1.39824 13.0649 3.00506
						13.4131 5.35922H5.94636ZM4.53847 5.35922C4.90317 2.43147
						6.95866 0.000183105 9.67973 0.000183105C12.4008
						0.000183105 14.4563 2.43147 14.821 5.35922H17.2816H18.6797V6.75728V21.2039C18.6797
						22.7481 17.4278 24 15.8836
						24H3.4758C1.93155 24 0.679688 22.7481 0.679688
						21.2039V6.75728V5.35922H2.07775H4.53847ZM2.07775 6.75728H4.52596V9.08752C4.52596
						9.47359 4.83893 9.78655 5.22499 9.78655C5.61105 9.78655 5.92402 9.47359
						5.92402 9.08752V6.75728H13.5259V9.08752C13.5259 9.47359
						13.8389 9.78655 14.2249 9.78655C14.611 9.78655 14.9239
						9.47359 14.9239 9.08752V6.75728H17.2816V21.2039C17.2816 21.976 16.6557 22.6019
						15.8836 22.6019H3.4758C2.70368 22.6019 2.07775 21.976 2.07775 21.2039V6.75728Z`,
          fill: "currentColor",
        }),
      ],
      -1
    )
  ),
  YT = { class: "block-header-cart__cart-text" };
function $T(e, n, a, t, o, i) {
  const r = ze("qa");
  return (
    c(),
    h("div", NT, [
      P("span", HT, [
        de(
          (c(),
          h(
            "button",
            {
              class: "block-header-cart__button",
              title: "Go to cart",
              onClick: n[0] || (n[0] = (l) => t.emit("cart-click")),
            },
            [
              P("div", VT, [
                UT,
                P("span", null, [
                  P("span", YT, ee(a.cartText), 1),
                  Le(" (" + ee(a.itemsInCart) + ")", 1),
                ]),
              ]),
            ]
          )),
          [[r, "header-btn-shoppingbag"]]
        ),
      ]),
    ])
  );
}
const FT = re(xT, [
    ["render", $T],
    ["__scopeId", "data-v-12eef732"],
  ]),
  WT = ie({
    __name: "BlockHeaderItemContent",
    props: { item: {} },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = u(
          () =>
            `${
              a.item.isCurrent
                ? "navigationblock-page-active-"
                : "navigationblock-page-"
            }${a.item.name}`
        ),
        o = { props: a, linkDataQa: t };
      return (
        Object.defineProperty(o, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  }),
  GT = (e) => (Vt("data-v-04741be4"), (e = e()), Ut(), e),
  qT = ["target", "rel", "href", "textContent"],
  jT = ["textContent"],
  zT = { key: 2, class: "item-content__icon-container-wrapper" },
  KT = GT(() =>
    P(
      "span",
      { class: "item-content__icon-container" },
      [
        P(
          "svg",
          {
            class: "item-content__icon",
            width: "10",
            height: "7",
            viewBox: "0 0 10 7",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            P("path", {
              d: "M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z",
              fill: "currentColor",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  QT = [KT];
function XT(e, n, a, t, o, i) {
  const r = ze("qa");
  return (
    c(),
    h(
      "div",
      {
        class: X([
          "item-content-wrapper",
          { "item-content-wrapper--active": a.item.isCurrent },
        ]),
      },
      [
        a.item.href
          ? de(
              (c(),
              h(
                "a",
                {
                  key: 0,
                  class: "item-content",
                  target: a.item.target,
                  rel: a.item.rel,
                  href: a.item.href,
                  textContent: ee(a.item.name),
                },
                null,
                8,
                qT
              )),
              [[r, t.linkDataQa]]
            )
          : de(
              (c(),
              h(
                "span",
                { key: 1, class: "item-content", textContent: ee(a.item.name) },
                null,
                8,
                jT
              )),
              [[r, t.linkDataQa]]
            ),
        a.item.hasDropdown ? (c(), h("div", zT, QT)) : M("", !0),
      ],
      2
    )
  );
}
const ZT = re(WT, [
    ["render", XT],
    ["__scopeId", "data-v-04741be4"],
  ]),
  JT = ie({
    __name: "BlockHeaderItem",
    props: { item: {}, areDropdownsHidden: { type: Boolean } },
    setup(e, { expose: n }) {
      n();
      const t = { props: e, BlockHeaderItemContent: ZT };
      return (
        Object.defineProperty(t, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        t
      );
    },
  }),
  eC = { class: "block-header-item" },
  tC = { class: "block-header-item__label" },
  aC = {
    key: 0,
    type: "checkbox",
    class: "block-header-item__mobile-dropdown-trigger",
  },
  nC = { key: 1, class: "block-header-item__dropdown-area" },
  oC = { class: "block-header-item__dropdown" };
function rC(e, n, a, t, o, i) {
  const r = He("BlockHeaderItem", !0),
    l = ze("qa");
  return (
    c(),
    h("li", eC, [
      P("label", tC, [
        !t.props.areDropdownsHidden && t.props.item.hasDropdown
          ? (c(), h("input", aC))
          : M("", !0),
        de(
          Ee(
            t.BlockHeaderItemContent,
            {
              item: a.item,
              class: "block-header-item__item",
              "aria-haspopup": a.item.hasDropdown,
            },
            null,
            8,
            ["item", "aria-haspopup"]
          ),
          [[l, `navigation-item-${a.item.name}`]]
        ),
        !t.props.areDropdownsHidden && t.props.item.hasDropdown
          ? (c(),
            h("div", nC, [
              P("ul", oC, [
                (c(!0),
                h(
                  ve,
                  null,
                  Te(
                    t.props.item.subItems,
                    (s) => (
                      c(), K(r, { key: s.id, item: s }, null, 8, ["item"])
                    )
                  ),
                  128
                )),
              ]),
            ]))
          : M("", !0),
      ]),
    ])
  );
}
const iC = re(JT, [
    ["render", rC],
    ["__scopeId", "data-v-e35d3004"],
  ]),
  lC = ie({
    __name: "BlockHeaderLogo",
    props: {
      logoSrc: {},
      logoSvg: {},
      href: {},
      height: {},
      heightMobile: {},
      maxWidth: {},
      maxWidthMobile: {},
      objectPosition: {},
      objectPositionMobile: {},
      siteName: {},
    },
    setup(e, { expose: n }) {
      n(),
        et((m) => ({
          aa8eed20: r.value,
          daecaa86: o.value,
          e799d5c4: s.value,
          cb66da22: l.value,
          d5125dc4: i.value,
          aeef6b02: d.value,
        }));
      const a = e,
        t = u(() => (a.siteName ? `${a.siteName} logo` : "")),
        o = u(() => `${a.height}px`),
        i = u(() => `${a.heightMobile}px`),
        r = u(() => a.maxWidth),
        l = u(() => a.maxWidthMobile || r.value),
        s = u(() => a.objectPosition),
        d = u(() => a.objectPositionMobile),
        g = {
          props: a,
          logoAltTag: t,
          height: o,
          mHeight: i,
          width: r,
          mWidth: l,
          objectPosition: s,
          mObjectPosition: d,
        };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  }),
  sC = ["href"],
  uC = ["innerHTML"],
  cC = ["src", "alt"];
function dC(e, n, a, t, o, i) {
  const r = ze("qa");
  return (
    c(),
    h(
      "a",
      { class: "block-header-logo", href: t.props.href },
      [
        t.props.logoSvg
          ? (c(),
            h(
              "div",
              {
                key: 0,
                class: "block-header-logo__image",
                innerHTML: t.props.logoSvg,
              },
              null,
              8,
              uC
            ))
          : t.props.logoSrc
          ? de(
              (c(),
              h(
                "img",
                {
                  key: 1,
                  class: "block-header-logo__image",
                  src: "/logo.jpg",
                  alt: t.logoAltTag,
                },
                null,
                8,
                cC
              )),
              [[r, "builder-siteheader-img-logo"]]
            )
          : M("", !0),
      ],
      8,
      sC
    )
  );
}
const mC = re(lC, [
    ["render", dC],
    ["__scopeId", "data-v-525b292a"],
  ]),
  gC = ie({
    __name: "BlockHeaderLayout",
    props: {
      layout: {},
      mobileLayout: {},
      isLogoVisible: { type: Boolean },
      isLanguageSwitcherVisible: { type: Boolean },
      areSocialIconLinksVisible: { type: Boolean },
      isCartVisible: { type: Boolean },
      isButtonVisible: { type: Boolean },
      isMobileMenuDropdownOpen: { type: Boolean },
      isMobileMenuDropdownFullScreen: { type: Boolean },
      mobileLinksAlignment: {},
    },
    setup(e, { expose: n }) {
      n(), et((m) => ({ "3c28effe": d.value, b96ef066: l.value }));
      const a = e,
        t = E(null),
        o = E(null),
        i = E(0),
        r = Ds(o),
        l = u(() => `${i.value}px`),
        s = u(
          () =>
            [
              a.isLanguageSwitcherVisible,
              a.areSocialIconLinksVisible,
              a.isCartVisible,
              a.isButtonVisible,
            ].filter(Boolean).length
        ),
        d = u(
          () =>
            `${a.isLogoVisible ? "min-content" : ""} auto ${
              s.value > 0 ? `repeat(${s.value}, min-content)` : ""
            }`
        );
      Me(() => {
        (o.value = document.body),
          (i.value =
            document.querySelector(".block-sticky-bar")?.clientHeight ?? 0);
      }),
        xe(
          () => a.isMobileMenuDropdownOpen,
          (m) => {
            m
              ? (t?.value && (t.value.scrollTop = 0), (r.value = !0))
              : (r.value = !1);
          }
        );
      const g = {
        props: a,
        dropdownRef: t,
        bodyElement: o,
        stickyBarHeight: i,
        isBodyScrollLocked: r,
        stickyBarHeightPx: l,
        visibleNonCenteredRightElementsCount: s,
        nonCenteredLayoutColumns: d,
        get BLOCK_HEADER_LAYOUTS() {
          return pc;
        },
      };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  }),
  vC = {
    key: 1,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-3",
  },
  pC = { class: "block-header-layout-desktop__right-side" },
  hC = {
    key: 2,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-4",
  },
  fC = { class: "block-header-layout-desktop__right-side" },
  bC = {
    key: 3,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-5",
  },
  yC = { class: "block-header-layout-desktop__right-side" };
function _C(e, n, a, t, o, i) {
  return (
    c(),
    h(
      ve,
      null,
      [
        t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_1 ||
        t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_2
          ? (c(),
            h(
              "div",
              {
                key: 0,
                class: X(
                  `block-header-layout-desktop block-header-layout-desktop--${t.props.layout}`
                ),
              },
              [
                ae(e.$slots, "logo", {}, void 0, !0),
                ae(e.$slots, "nav", {}, void 0, !0),
                ae(e.$slots, "language-switcher", {}, void 0, !0),
                ae(e.$slots, "social-icons", {}, void 0, !0),
                ae(e.$slots, "cart", {}, void 0, !0),
                ae(e.$slots, "button", {}, void 0, !0),
              ],
              2
            ))
          : t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_3
          ? (c(),
            h("div", vC, [
              ae(e.$slots, "logo", {}, void 0, !0),
              ae(e.$slots, "nav", {}, void 0, !0),
              P("div", pC, [
                ae(e.$slots, "language-switcher", {}, void 0, !0),
                ae(e.$slots, "social-icons", {}, void 0, !0),
                ae(e.$slots, "cart", {}, void 0, !0),
                ae(e.$slots, "button", {}, void 0, !0),
              ]),
            ]))
          : t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_4
          ? (c(),
            h("div", hC, [
              ae(e.$slots, "nav", {}, void 0, !0),
              ae(e.$slots, "logo", {}, void 0, !0),
              P("div", fC, [
                ae(e.$slots, "language-switcher", {}, void 0, !0),
                ae(e.$slots, "social-icons", {}, void 0, !0),
                ae(e.$slots, "cart", {}, void 0, !0),
                ae(e.$slots, "button", {}, void 0, !0),
              ]),
            ]))
          : t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_5
          ? (c(),
            h("div", bC, [
              ae(e.$slots, "logo", {}, void 0, !0),
              ae(e.$slots, "social-icons", {}, void 0, !0),
              ae(e.$slots, "nav", {}, void 0, !0),
              P("div", yC, [
                ae(e.$slots, "language-switcher", {}, void 0, !0),
                ae(e.$slots, "cart", {}, void 0, !0),
                ae(e.$slots, "button", {}, void 0, !0),
              ]),
            ]))
          : M("", !0),
        P(
          "div",
          {
            class: X([
              "block-header-layout-mobile",
              `block-header-layout-mobile--${t.props.mobileLayout}`,
            ]),
          },
          [
            ae(e.$slots, "logo", {}, void 0, !0),
            ae(e.$slots, "cart", {}, void 0, !0),
            ae(e.$slots, "hamburger-menu", {}, void 0, !0),
            P(
              "div",
              {
                ref: "dropdownRef",
                class: X([
                  "block-header-layout-mobile__dropdown",
                  [
                    `block-header-layout-mobile__dropdown--link-align-${t.props.mobileLinksAlignment}`,
                    {
                      "block-header-layout-mobile__dropdown--open":
                        t.props.isMobileMenuDropdownOpen,
                    },
                    {
                      "block-header-layout-mobile__dropdown--full-screen":
                        t.props.isMobileMenuDropdownFullScreen,
                    },
                  ],
                ]),
              },
              [
                ae(e.$slots, "nav", {}, void 0, !0),
                ae(e.$slots, "language-switcher", {}, void 0, !0),
                ae(e.$slots, "social-icons", {}, void 0, !0),
                ae(e.$slots, "button", {}, void 0, !0),
              ],
              2
            ),
          ],
          2
        ),
      ],
      64
    )
  );
}
const wC = re(gC, [
    ["render", _C],
    ["__scopeId", "data-v-3b3f462d"],
  ]),
  kC = ie({
    __name: "BlockHeaderButton",
    props: { elementId: {}, data: {} },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { getButtonHref: t } = nt(),
        {
          tagName: o,
          href: i,
          target: r,
          rel: l,
          type: s,
          content: d,
          fontSizeMobile: g,
          fontSizeDesktop: m,
          fontFamily: v,
          fontWeight: p,
          borderWidth: b,
          borderRadius: _,
          backgroundColor: T,
          fontColor: y,
          borderColor: w,
          backgroundColorHover: O,
          fontColorHover: C,
          borderColorHover: x,
          mobileElementWidth: F,
          mobileElementHeight: Y,
        } = Yn(a, {
          href: u(() =>
            t({
              isFormButton: !1,
              linkedPageId: a.data.linkedPageId,
              linkType: a.data.linkType,
              href: a.data.href,
            })
          ),
        }),
        j = {
          props: a,
          getButtonHref: t,
          tagName: o,
          href: i,
          target: r,
          rel: l,
          type: s,
          content: d,
          fontSizeMobile: g,
          fontSizeDesktop: m,
          fontFamily: v,
          fontWeight: p,
          borderWidth: b,
          borderRadius: _,
          backgroundColor: T,
          fontColor: y,
          borderColor: w,
          backgroundColorHover: O,
          fontColorHover: C,
          borderColorHover: x,
          mobileElementWidth: F,
          mobileElementHeight: Y,
          GridButton: Ga,
        };
      return (
        Object.defineProperty(j, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        j
      );
    },
  });
function SC(e, n, a, t, o, i) {
  return (
    c(),
    K(
      t.GridButton,
      {
        "data-element-ref": a.elementId,
        "tag-name": t.tagName,
        href: t.href,
        target: t.target,
        rel: t.rel,
        type: t.type,
        content: t.content,
        "font-size-mobile": t.fontSizeMobile,
        "font-size-desktop": t.fontSizeDesktop,
        "font-family": t.fontFamily,
        "font-weight": t.fontWeight,
        "border-width": t.borderWidth,
        "border-radius": t.borderRadius,
        "background-color": t.backgroundColor,
        "font-color": t.fontColor,
        "border-color": t.borderColor,
        "background-color-hover": t.backgroundColorHover,
        "font-color-hover": t.fontColorHover,
        "border-color-hover": t.borderColorHover,
        "mobile-element-width": t.mobileElementWidth,
        "mobile-element-height": t.mobileElementHeight,
        onClick: n[0] || (n[0] = Ie(() => {}, ["prevent"])),
        onDrag: n[1] || (n[1] = Ie(() => {}, ["prevent"])),
        onDragstart: n[2] || (n[2] = Ie(() => {}, ["prevent"])),
      },
      null,
      8,
      [
        "data-element-ref",
        "tag-name",
        "href",
        "target",
        "rel",
        "type",
        "content",
        "font-size-mobile",
        "font-size-desktop",
        "font-family",
        "font-weight",
        "border-width",
        "border-radius",
        "background-color",
        "font-color",
        "border-color",
        "background-color-hover",
        "font-color-hover",
        "border-color-hover",
        "mobile-element-width",
        "mobile-element-height",
      ]
    )
  );
}
const TC = re(kC, [["render", SC]]),
  CC = ie({
    __name: "BlockHeader",
    props: {
      siteName: { default: "" },
      headerLayout: {},
      mHeaderLayout: {},
      languageSwitcherLanguages: {},
      items: {},
      logoHref: {},
      logoSrc: { default: "" },
      logoSvg: { default: "" },
      backgroundImageUrl: {},
      isOpen: { type: Boolean, default: !1 },
      isSticky: { type: Boolean },
      isTransparent: { type: Boolean },
      isLogoVisible: { type: Boolean, default: !1 },
      isCartVisible: { type: Boolean },
      isLanguageSwitcherVisible: { type: Boolean },
      currentLocale: { default: "" },
      backgroundColor: { default: "" },
      navLinkTextColor: { default: "" },
      navLinkTextColorHover: { default: "" },
      cartText: { default: "" },
      itemsInCart: { default: 0 },
      areDropdownsHidden: { type: Boolean },
      background: {},
      cartIconSize: {},
      logoMaxWidth: {},
      heightMobile: {},
      logoHeight: {},
      logoHeightMobile: {},
      logoMaxWidthMobile: {},
      logoObjectPosition: {},
      logoObjectPositionMobile: {},
      fontFamily: {},
      fontWeight: {},
      socialIconsLinks: { default: () => [] },
      socialIconsStyles: { default: () => ({}) },
      buttonElementId: {},
      buttonElementData: { default: () => ({}) },
      isMobileMenuDropdownFullScreen: { type: Boolean },
      mobileLinksAlignment: {},
    },
    emits: [
      "toggle-visibility",
      "cart-click",
      "logo-click",
      "button-click",
      "navigation-click",
      "social-icons-click",
      "language-switcher-click",
    ],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        { hasUserScrolled: i } = cs(),
        r = E(null),
        l = u(() => t.socialIconsLinks.length > 0),
        s = u(() => !!Object.keys(t.buttonElementData).length),
        d = u(() => i.value && t.isSticky),
        g = u(() => (t.isSticky && !i.value) || !t.isSticky),
        m = u(() => t.isTransparent && g.value && !t.isOpen),
        v = u(() => ({
          "--text-font-family": t.fontFamily,
          "--text-font-weight": t.fontWeight,
          "--nav-link-text-color":
            t.navLinkTextColor || "var(--nav-link-color)",
          "--nav-link-text-color-hover":
            t.navLinkTextColorHover || "var(--nav-link-color-hover)",
          "--header-height-mobile": `${t.heightMobile}px`,
          ...(l.value && {
            "--space-between-icons": "16px",
            "--icon-color": t.socialIconsStyles["icon-color"],
            "--icon-size": t.socialIconsStyles["icon-size"],
            "--icon-color-hover": t.socialIconsStyles["icon-color-hover"],
          }),
        }));
      Me(() => {
        ko(r, () => {
          t.isOpen && o("toggle-visibility");
        });
      });
      const p = {
        props: t,
        emit: o,
        hasUserScrolled: i,
        headerRef: r,
        isSocialIconsLinksVisible: l,
        isButtonVisible: s,
        isWithShadow: d,
        shouldForceTransparency: g,
        isCurrentlyTransparent: m,
        computedStyles: v,
        LanguageSwitcher: ST,
        ZyroHamburger: OT,
        BlockHeaderBackground: LT,
        BlockHeaderCart: FT,
        BlockHeaderItem: iC,
        BlockHeaderLogo: mC,
        BlockHeaderLayout: wC,
        get BLOCK_HEADER_CLASS() {
          return hc;
        },
        GridSocialIcons: ks,
        BlockHeaderButton: TC,
      };
      return (
        Object.defineProperty(p, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        p
      );
    },
  }),
  PC = { class: "block-header__nav-links" };
function IC(e, n, a, t, o, i) {
  const r = ze("qa");
  return (
    c(),
    h(
      "header",
      {
        ref: "headerRef",
        class: X({
          [t.BLOCK_HEADER_CLASS]: !0,
          "block-header--with-shadow": t.isWithShadow,
        }),
        style: Be(t.computedStyles),
      },
      [
        t.props.background
          ? (c(),
            K(
              t.BlockHeaderBackground,
              {
                key: 0,
                type: t.props.background.current,
                "image-url": t.props.backgroundImageUrl,
                color: t.props.background.color,
                "overlay-opacity": Number(
                  t.props.background["overlay-opacity"]
                ),
                "is-transparent": t.isCurrentlyTransparent,
              },
              null,
              8,
              [
                "type",
                "image-url",
                "color",
                "overlay-opacity",
                "is-transparent",
              ]
            ))
          : M("", !0),
        Ee(
          t.BlockHeaderLayout,
          {
            layout: t.props.headerLayout,
            "mobile-layout": t.props.mHeaderLayout,
            "is-logo-visible": t.props.isLogoVisible,
            "is-language-switcher-visible": t.props.isLanguageSwitcherVisible,
            "are-social-icon-links-visible": t.isSocialIconsLinksVisible,
            "is-cart-visible": t.props.isCartVisible,
            "is-button-visible": t.isButtonVisible,
            "is-mobile-menu-dropdown-open": t.props.isOpen,
            "is-mobile-menu-dropdown-full-screen":
              t.props.isMobileMenuDropdownFullScreen,
            "mobile-links-alignment": t.props.mobileLinksAlignment,
          },
          {
            "hamburger-menu": he(() => [
              t.props.items.length || t.props.isLanguageSwitcherVisible
                ? de(
                    (c(),
                    K(
                      t.ZyroHamburger,
                      {
                        key: 0,
                        class: "block-header__hamburger-menu",
                        "is-open": t.props.isOpen,
                        onClick:
                          n[0] ||
                          (n[0] = Ie(
                            (l) => e.$emit("toggle-visibility"),
                            ["stop"]
                          )),
                      },
                      null,
                      8,
                      ["is-open"]
                    )),
                    [[r, "builder-siteheader-btn-hamburger"]]
                  )
                : M("", !0),
            ]),
            logo: he(() => [
              t.props.isLogoVisible
                ? (c(),
                  K(
                    t.BlockHeaderLogo,
                    {
                      key: 0,
                      class: "block-header__logo",
                      "logo-src": t.props.logoSrc,
                      "logo-svg": t.props.logoSvg,
                      href: t.props.logoHref,
                      "site-name": t.props.siteName,
                      "max-width": t.props.logoMaxWidth,
                      "max-width-mobile": t.props.logoMaxWidthMobile,
                      height: t.props.logoHeight,
                      "height-mobile": t.props.logoHeightMobile,
                      "object-position": t.props.logoObjectPosition,
                      "object-position-mobile":
                        t.props.logoObjectPositionMobile,
                      onClick: n[1] || (n[1] = (l) => e.$emit("logo-click")),
                    },
                    null,
                    8,
                    [
                      "logo-src",
                      "logo-svg",
                      "href",
                      "site-name",
                      "max-width",
                      "max-width-mobile",
                      "height",
                      "height-mobile",
                      "object-position",
                      "object-position-mobile",
                    ]
                  ))
                : M("", !0),
            ]),
            nav: he(() => [
              P(
                "nav",
                {
                  class: "block-header__nav",
                  onClick: n[2] || (n[2] = (l) => t.emit("navigation-click")),
                },
                [
                  de(
                    (c(),
                    h("ul", PC, [
                      (c(!0),
                      h(
                        ve,
                        null,
                        Te(
                          t.props.items,
                          (l) => (
                            c(),
                            K(
                              t.BlockHeaderItem,
                              {
                                key: l.id,
                                item: l,
                                "are-dropdowns-hidden":
                                  t.props.areDropdownsHidden,
                              },
                              null,
                              8,
                              ["item", "are-dropdowns-hidden"]
                            )
                          )
                        ),
                        128
                      )),
                    ])),
                    [[r, "builder-siteheader-emptyspace"]]
                  ),
                ]
              ),
            ]),
            "social-icons": he(() => [
              t.props.socialIconsLinks.length
                ? (c(),
                  K(
                    t.GridSocialIcons,
                    {
                      key: 0,
                      class: "block-header__social-icons",
                      links: t.props.socialIconsLinks,
                    },
                    null,
                    8,
                    ["links"]
                  ))
                : M("", !0),
            ]),
            "language-switcher": he(() => [
              t.props.isLanguageSwitcherVisible
                ? (c(),
                  K(
                    t.LanguageSwitcher,
                    {
                      key: 0,
                      class: X([
                        "block-header__language-switcher",
                        { "mouse-disabled": t.props.areDropdownsHidden },
                      ]),
                      languages: t.props.languageSwitcherLanguages,
                      "current-locale": t.props.currentLocale,
                    },
                    null,
                    8,
                    ["class", "languages", "current-locale"]
                  ))
                : M("", !0),
            ]),
            cart: he(() => [
              t.props.isCartVisible
                ? (c(),
                  K(
                    t.BlockHeaderCart,
                    {
                      key: 0,
                      class: "block-header__cart",
                      "cart-text": t.props.cartText,
                      "items-in-cart": t.props.itemsInCart,
                      "cart-icon-size": t.props.cartIconSize,
                      onCartClick:
                        n[3] || (n[3] = (l) => e.$emit("cart-click")),
                    },
                    null,
                    8,
                    ["cart-text", "items-in-cart", "cart-icon-size"]
                  ))
                : M("", !0),
            ]),
            button: he(() => [
              t.isButtonVisible && t.props.buttonElementId
                ? (c(),
                  K(
                    t.BlockHeaderButton,
                    {
                      key: 0,
                      class: "block-header__button",
                      "element-id": t.props.buttonElementId,
                      data: t.props.buttonElementData,
                    },
                    null,
                    8,
                    ["element-id", "data"]
                  ))
                : M("", !0),
            ]),
            _: 1,
          },
          8,
          [
            "layout",
            "mobile-layout",
            "is-logo-visible",
            "is-language-switcher-visible",
            "are-social-icon-links-visible",
            "is-cart-visible",
            "is-button-visible",
            "is-mobile-menu-dropdown-open",
            "is-mobile-menu-dropdown-full-screen",
            "mobile-links-alignment",
          ]
        ),
      ],
      6
    )
  );
}
const EC = re(CC, [
    ["render", IC],
    ["__scopeId", "data-v-0ab88ca6"],
  ]),
  DC = (e) => {
    const a = e.current === "image" ? `url(${e[e.current]})` : e[e.current];
    return { [`--background-${e.current}`]: a };
  },
  MC = (e) => e && Object.values(e).some((n) => Vd.includes(n.type)),
  OC = (e) =>
    e && Object.values(e).some((n) => n?.type === "GridEcommerceButton"),
  Mu = ({ blocks: e, elements: n }) => OC(n) || MC(e),
  AC = ({
    siteId: e,
    meta: n,
    blocks: a,
    nav: t,
    pages: o,
    elements: i,
    languageMetaTitle: r,
    languageSwitcherLanguages: l,
    currentLocale: s,
    currentPageId: d,
    shoppingCartItems: g,
    isOpen: m,
    getPagePathFromId: v,
    isEcommerceWebsite: p,
  }) => {
    const { defaultLocale: b } = n,
      {
        background: _,
        settings: T,
        fontWeight: y,
        fontFamily: w,
        navLinkTextColor: O,
        navLinkTextColorHover: C,
        mobile: x,
        desktop: F,
      } = a.header,
      { imageOrigin: Y, imagePath: j } = _,
      {
        cartText: q,
        isCartVisible: S,
        isLanguageSwitcherHidden: B,
        isSticky: $,
        logoPlacement: z,
        navigationPlacement: N,
        showLogo: I,
        styles: H,
        logoImageOrigin: A,
        logoImagePath: G,
        logoSvg: k,
        headerLayout: f,
        mHeaderLayout: W,
        isMobileMenuDropdownFullScreen: U,
        mobileLinksAlignment: Z,
      } = T,
      J = Mu({ blocks: a, elements: i }),
      R = { ...Gt(H), ...DC(_) },
      D = () => {
        const Qe = Number.parseInt(H["logo-width"], 10);
        return ut(A, G, e, { width: Qe * 2, quality: 95 });
      },
      pe = () => ut(Y, j, e, { width: _a }),
      Se = (Qe) => {
        const {
          navItemId: Yt,
          linkType: yt,
          linkedPageId: Bt,
          isHidden: Nt,
          rel: ht,
          href: $t,
          target: ra,
          name: zt,
          subItems: V = [],
        } = Qe;
        return {
          navItemId: Yt,
          hasDropdown: !!V.length,
          isCurrent: d === Bt,
          subItems: V.map(Se),
          target: ra,
          name: yt === Ci ? o[Bt]?.name : zt,
          isHidden: Nt,
          rel: ht,
          href: yt === Ci ? v({ pageId: Bt }) : $t,
          locale: s,
        };
      },
      ge = t.filter(({ isHidden: Qe }) => !Qe).map(Se),
      me = S && J,
      ce = !!l.length && !B && s !== Da,
      Q = () => (p || J ? g.length : 0),
      ne = r ?? n.metaTitle,
      be = a.header.components.find((Qe) => i[Qe].type === rs),
      se = i[be]?.links || [],
      Ae = i[be]?.settings?.styles || {},
      Ye = a.header.components.find((Qe) => i[Qe].type === os),
      Rt = i[Ye];
    return {
      background: _,
      backgroundColor: _.color,
      backgroundImageUrl: pe(),
      backgroundColorContrast: H.contrastBackgroundColor,
      cartText: q,
      cartIconSize: H.cartIconSize,
      currentLocale: s,
      height: F.height,
      heightMobile: x.height,
      fontFamily: w,
      navLinkTextColor: O,
      navLinkTextColorHover: C,
      fontWeight: y,
      isTransparent: _.isTransparent,
      items: ge,
      isCartVisible: me,
      itemsInCart: Q(),
      isSticky: $,
      isLanguageSwitcherVisible: ce,
      isLogoVisible: I,
      isOpen: m,
      languageSwitcherLanguages: l,
      logoHeight: F.logoHeight,
      logoHeightMobile: x.logoHeight,
      logoHref: s !== b && s !== Da ? `/${s}` : "/",
      logoMaxWidth: H["logo-width"],
      logoMaxWidthMobile: H["m-logo-width"],
      logoObjectPosition: H["logo-image-object-position"],
      logoObjectPositionMobile: H["m-logo-image-object-position"],
      logoPlacement: z,
      logoPlacementMobile: T["m-logoPlacement"] || z,
      logoSrc: D(),
      logoSvg: k,
      style: R,
      siteName: ne,
      socialIconsLinks: se,
      socialIconsStyles: Ae,
      buttonElementId: Ye,
      buttonElementData: Rt,
      navigationPlacement: N,
      navigationPlacementMobile: T["m-navigationPlacement"] || N,
      headerLayout: f,
      mHeaderLayout: W,
      isMobileMenuDropdownFullScreen: U,
      mobileLinksAlignment: Z,
    };
  },
  BC = ie({
    __name: "Lightbox",
    setup(e, { expose: n }) {
      n();
      const {
          currentLightboxImageIndex: a,
          currentLightboxImage: t,
          closeLightbox: o,
          isLightboxOpen: i,
          isImageGalleryMode: r,
          handleLightboxNav: l,
          goToNextImage: s,
          goToPreviousImage: d,
        } = un(),
        g = E(null),
        m = E(null),
        v = Ds(g, !0),
        { enableMoveEvents: p } = xs({
          move: { drag: !0, swipe: !0 },
          onMoveLeft: s,
          onMoveRight: d,
        });
      Me(async () => {
        (g.value = document.body),
          ko(m, (_) => {
            _.target.matches("[data-lightbox-button],[data-lightbox-nav]") ||
              o();
          }),
          p(),
          window.document.addEventListener("keydown", l);
      }),
        Ot(() => {
          (v.value = !1),
            o(),
            p(!1),
            document.removeEventListener("keydown", l);
        });
      const b = {
        currentLightboxImageIndex: a,
        currentLightboxImage: t,
        closeLightbox: o,
        isLightboxOpen: i,
        isImageGalleryMode: r,
        handleLightboxNav: l,
        goToNextImage: s,
        goToPreviousImage: d,
        bodyElement: g,
        lightboxRef: m,
        isBodyScrollLocked: v,
        enableMoveEvents: p,
      };
      return (
        Object.defineProperty(b, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        b
      );
    },
  }),
  LC = { key: 0, class: "lightbox", role: "dialog", "aria-modal": "true" },
  xC = { class: "lightbox__container" },
  RC = P(
    "button",
    {
      class: "lightbox__button lightbox__button--nav lightbox__button--prev",
      "data-lightbox-button": "",
    },
    null,
    -1
  ),
  NC = [RC],
  HC = ["src", "alt"],
  VC = P(
    "button",
    {
      "data-lightbox-button": "",
      class: "lightbox__button lightbox__button--nav lightbox__button--next",
    },
    null,
    -1
  ),
  UC = [VC];
function YC(e, n, a, t, o, i) {
  return (
    c(),
    K(
      xt,
      { name: "fade", appear: "" },
      {
        default: he(() => [
          t.isLightboxOpen
            ? (c(),
              h("div", LC, [
                P("button", {
                  class: "lightbox__button lightbox__button--close",
                  title: "close-ligthbox-button",
                  "data-lightbox-button": "",
                  onClick:
                    n[0] ||
                    (n[0] = (...r) => t.closeLightbox && t.closeLightbox(...r)),
                }),
                P("div", xC, [
                  P(
                    "div",
                    {
                      class: X([
                        "lightbox__nav",
                        {
                          "lightbox__nav--multiple": t.isImageGalleryMode,
                          "lightbox__nav--single": !t.isImageGalleryMode,
                        },
                      ]),
                      "data-lightbox-nav": "",
                      onClick:
                        n[1] ||
                        (n[1] = (...r) =>
                          t.goToPreviousImage && t.goToPreviousImage(...r)),
                    },
                    NC,
                    2
                  ),
                  Ee(
                    xt,
                    { name: "fade", mode: "out-in" },
                    {
                      default: he(() => [
                        (c(),
                        h(
                          "img",
                          {
                            key: `${t.currentLightboxImage.src}${t.currentLightboxImageIndex}`,
                            ref: "lightboxRef",
                            class: X([
                              "lightbox__image",
                              {
                                "lightbox__image--multiple":
                                  t.isImageGalleryMode,
                                "lightbox__image--single":
                                  !t.isImageGalleryMode,
                              },
                            ]),
                            src: t.currentLightboxImage.src,
                            alt: t.currentLightboxImage.alt,
                          },
                          null,
                          10,
                          HC
                        )),
                      ]),
                      _: 1,
                    }
                  ),
                  P(
                    "div",
                    {
                      class: X([
                        "lightbox__nav",
                        {
                          "lightbox__nav--multiple": t.isImageGalleryMode,
                          "lightbox__nav--single": !t.isImageGalleryMode,
                        },
                      ]),
                      "data-lightbox-nav": "",
                      onClick:
                        n[2] ||
                        (n[2] = (...r) =>
                          t.goToNextImage && t.goToNextImage(...r)),
                    },
                    UC,
                    2
                  ),
                ]),
              ]))
            : M("", !0),
        ]),
        _: 1,
      }
    )
  );
}
const $C = re(BC, [["render", YC]]),
  FC = ie({
    __name: "Page",
    props: {
      pageData: { type: Object, required: !0 },
      isInPreviewMode: { type: Boolean, default: !1 },
      isPreviewMobileView: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n(), et((le) => ({ "21ffbba0": ce.value }));
      const a = e,
        {
          pages: t,
          blocks: o,
          elements: i,
          nav: r,
          meta: l,
          metaTitle: s,
          ecommerceShoppingCart: d,
          cookieBannerDisclaimer: g,
          cookieBannerAcceptText: m,
          cookieBannerDeclineText: v,
          currentLocale: p,
          languageSwitcherLanguages: b,
          siteId: _,
          homePageId: T,
          styles: y,
          isNavHidden: w,
          currentPageId: O,
          currentPageData: C,
          getPagePathFromId: x,
          setPageData: F,
        } = nt(),
        {
          isStoreTypeZyro: Y,
          shoppingCartItems: j,
          setShoppingCartOpen: q,
        } = na(),
        { isLightboxOpen: S } = un(),
        B = Tc(),
        { shouldMountAnimationsInPreview: $ } = cn(),
        z = E(!1),
        N = E(null),
        I = E(0),
        { width: H } = Jv(N),
        A = u(() => C.value.type),
        G = u(() => A.value === fc),
        k = u(() => Gt(y.value)),
        f = u(() => !w.value && !G.value),
        W = u(() => o.value[lo] && !G.value),
        U = u(() => O.value === T.value),
        Z = u(() => t.value?.[T.value]?.name ?? ""),
        J = u(() => o.value.header.settings.isSticky),
        R = u(() => !C.value?.meta?.password || a.isInPreviewMode),
        D = u(() => {
          if (!C.value || C.value.footerSlotIsHidden || G.value) return [];
          const le = Object.keys(o.value).find(
            (Ce) => o.value[Ce].slot === "footer"
          );
          return le ? [le] : [];
        }),
        pe = u(() =>
          C.value
            ? [...C.value.blocks.filter((le) => le !== lo), ...D.value]
            : []
        ),
        Se = u(() =>
          AC({
            siteId: _.value,
            meta: l.value,
            blocks: o.value,
            nav: r.value,
            pages: t.value,
            elements: i.value,
            languageMetaTitle: s.value,
            currentLocale: p.value,
            currentPageId: O.value,
            languageSwitcherLanguages: b.value,
            shoppingCartItems: j.value,
            getPagePathFromId: ({ pageId: le }) => x({ pageId: le }),
            isOpen: z.value,
          })
        ),
        ge = u(() => Se.value.height),
        me = u(() => Se.value.heightMobile),
        ce = u(() => `${me.value + I.value}px`),
        Q = u(() => pe.value.map((le) => o.value[le])),
        ne = u(() => Mu({ blocks: o.value, elements: i.value })),
        be = u(() => l.value.defaultLocale ?? Da),
        se = u(() => (Y.value ? d.value?.translations ?? {} : {})),
        Ae = u(() => (Y.value ? d.value?.lang ?? "en" : null)),
        Ye = u(() =>
          ne.value
            ? Q.value.filter((le) =>
                ["BlockEcommerceProduct", "BlockEcommerceProductList"].includes(
                  le.type
                )
              )
            : []
        ),
        Rt = u(() =>
          ne.value
            ? Object.keys(i.value)
                ?.filter((Ce) => i.value[Ce].type === "GridEcommerceButton")
                .filter((Ce) =>
                  Q.value.some((Ne) => Ne.components?.includes(Ce))
                )
                .map((Ce) => i.value[Ce])
            : []
        ),
        Qe = u(() => pe.value.find((le) => !o.value[le][xa]?.isHidden)),
        Yt = u(() => pe.value.find((le) => !o.value[le][la]?.isHidden)),
        yt = u(() => {
          const { isTransparent: le } = o.value.header.background ?? {};
          if (le && f.value && me.value) return `${me.value}px`;
        }),
        Bt = u(() => {
          const { isTransparent: le } = o.value.header.background ?? {};
          if (le && f.value && ge.value) return `${ge.value}px`;
        }),
        Nt = (le) => ({
          ...(Qe.value === le && { "--header-height": Bt.value }),
          ...(Yt.value === le && { "--header-height-mobile": yt.value }),
        }),
        ht = u(() => {
          const [le] = C.value?.blocks ?? [];
          if (o.value?.[le]?.background?.current === "image")
            return { type: "block-background", id: le };
          if (o.value?.[le]?.type === "BlockBlogList")
            return { type: "block-blog-list", id: le };
          if (o.value?.[le]?.type === "BlockEcommerceProduct")
            return { type: "block-ecommerce-product", id: le };
          if (o.value?.[le]?.type === "BlockEcommerceProductList")
            return { type: "block-ecommerce-product-list", id: le };
          const Ne = pe.value
            .filter((Ze) => o.value[Ze]?.components?.length > 0)
            .flatMap((Ze) =>
              o.value[Ze].components.map((dt) => ({
                blockId: Ze,
                elementId: dt,
              }))
            )
            .filter(({ elementId: Ze }) => i.value[Ze]?.type === "GridImage")
            .map(({ blockId: Ze, elementId: dt }) => {
              const te = i.value[dt],
                we = te.mobile ?? te.desktop,
                { width: ye, height: Je } =
                  we ?? Dc(o.value[Ze], te.settings.styles.position);
              return { elementId: dt, imageRatio: Je / ye };
            })[0];
          return Ne ? { type: "grid-image", id: Ne?.elementId } : {};
        }),
        $t = ({ hash: le, isPreviewMode: Ce }) => {
          le || window.scrollTo({ top: 0, left: 0, behavior: "smooth" }),
            uo({ linkToSection: le, isPreviewMode: Ce });
        },
        ra = () => {
          ne.value && q(!0);
        },
        zt = (le) => {
          const { target: Ce, href: Ne } = le,
            dt =
              Ce === "_blank" || ln() || a.isInPreviewMode ? "_blank" : "_self";
          window.open(Ne, dt);
        },
        V = async (le) => {
          if (!le.target) return;
          const Ce = le.target.closest("a");
          if (!Ce) return;
          const {
            href: Ne,
            pathname: Ze,
            origin: dt,
            hash: te,
            target: we,
          } = Ce;
          if (!Ne || Ce.hasAttribute(is)) return;
          if ((le.preventDefault(), window.location.origin !== dt)) {
            zt(Ce);
            return;
          }
          const Je = window.location.pathname === Ze,
            lt = we === "_blank",
            _t = Ne.replace(dt, ""),
            Jn = `${window.location.pathname}${window.location.search}${window.location.hash}`;
          Je && !lt && $t({ hash: te, isPreviewMode: a.isInPreviewMode }),
            lt && !a.isInPreviewMode && !ln()
              ? window.open(Ne, we)
              : ((lt && a.isInPreviewMode) || Jn !== _t) &&
                (a.isInPreviewMode ? B.push(_t) : window.location.assign(_t),
                te && $t({ hash: te, isPreviewMode: a.isInPreviewMode }),
                (z.value = !1));
        };
      xe(
        () => a.pageData,
        (le) => {
          F(le);
        },
        { immediate: !0 }
      ),
        xe(
          () => a.pageData,
          async () => {
            a.isInPreviewMode && ($.value = !0);
          }
        ),
        Me(() => {
          (I.value =
            document.querySelector(".block-sticky-bar")?.clientHeight ?? 0),
            $t({
              hash: window.location.hash,
              isPreviewMode: a.isInPreviewMode,
            });
        });
      const ue = {
        props: a,
        pages: t,
        blocks: o,
        elements: i,
        nav: r,
        meta: l,
        metaTitle: s,
        ecommerceShoppingCart: d,
        cookieBannerDisclaimer: g,
        cookieBannerAcceptText: m,
        cookieBannerDeclineText: v,
        currentLocale: p,
        languageSwitcherLanguages: b,
        siteId: _,
        homePageId: T,
        styles: y,
        isNavHidden: w,
        currentPageId: O,
        currentPage: C,
        getPagePathFromId: x,
        setPageData: F,
        isStoreTypeZyro: Y,
        shoppingCartItems: j,
        setShoppingCartOpen: q,
        isLightboxOpen: S,
        router: B,
        shouldMountAnimationsInPreview: $,
        isNavOpen: z,
        blockListRef: N,
        stickyBarHeight: I,
        screenWidth: H,
        currentPageType: A,
        isCurrentPagePrivate: G,
        pageCSSVars: k,
        isHeaderVisible: f,
        isStickyBarVisible: W,
        isCurrentPageHomepage: U,
        homepageName: Z,
        isHeaderSettingsSticky: J,
        shouldRenderPage: R,
        pageBlocksSlotFooter: D,
        currentPageBlocks: pe,
        headerProps: Se,
        headerHeight: ge,
        headerHeightMobile: me,
        topBarHeightMobilePx: ce,
        currentPageBlockData: Q,
        isLocaleWithEcommerceItems: ne,
        defaultLocale: be,
        ecommerceTranslations: se,
        language: Ae,
        currentPageEcommerceBlocks: Ye,
        currentPageEcommerceComponents: Rt,
        firstVisibleDesktopBlockId: Qe,
        firstVisibleMobileBlockId: Yt,
        visibleMobileHeaderHeight: yt,
        visibleDesktopHeaderHeight: Bt,
        getHeaderHeightStyles: Nt,
        lcp: ht,
        scrollToHash: $t,
        handleCartClick: ra,
        redirectToThirdPartyLink: zt,
        handleGlobalClick: V,
        StickyTrigger: Ec,
        CookieBanner: Qc,
        BlockUser: Nb,
        BlockStickyBarProviderUser: Fb,
        PasswordPage: uy,
        EcommerceShoppingCartProviderUser: Ky,
        EcommerceModalRoot: sT,
        BlockHeader: EC,
        Lightbox: $C,
        get BLOCK_STICKY_BAR_ID() {
          return lo;
        },
      };
      return (
        Object.defineProperty(ue, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        ue
      );
    },
  }),
  WC = { ref: "blockListRef", class: "blocks" };
function GC(e, n, a, t, o, i) {
  return (
    c(),
    h(
      ve,
      null,
      [
        t.shouldRenderPage
          ? (c(),
            h(
              "main",
              {
                key: 0,
                style: Be(t.pageCSSVars),
                class: "page",
                onClick: t.handleGlobalClick,
              },
              [
                t.isHeaderSettingsSticky
                  ? (c(), K(t.StickyTrigger, { key: 0 }))
                  : M("", !0),
                !t.isHeaderSettingsSticky && t.isStickyBarVisible
                  ? (c(),
                    K(
                      t.BlockStickyBarProviderUser,
                      {
                        key: 1,
                        "data-block-id": t.BLOCK_STICKY_BAR_ID,
                        data: t.blocks[t.BLOCK_STICKY_BAR_ID],
                        components: t.elements,
                        lcp: t.lcp,
                      },
                      null,
                      8,
                      ["data-block-id", "data", "components", "lcp"]
                    ))
                  : M("", !0),
                P(
                  "div",
                  {
                    class: X([
                      "top-blocks",
                      {
                        "top-blocks--sticky": t.headerProps.isSticky,
                        "top-blocks--preview-mode": t.props.isInPreviewMode,
                      },
                    ]),
                  },
                  [
                    t.isHeaderSettingsSticky && t.isStickyBarVisible
                      ? (c(),
                        K(
                          t.BlockStickyBarProviderUser,
                          {
                            key: 0,
                            "data-block-id": t.BLOCK_STICKY_BAR_ID,
                            data: t.blocks[t.BLOCK_STICKY_BAR_ID],
                            components: t.elements,
                            lcp: t.lcp,
                          },
                          null,
                          8,
                          ["data-block-id", "data", "components", "lcp"]
                        ))
                      : M("", !0),
                    t.isHeaderVisible
                      ? (c(),
                        K(
                          t.BlockHeader,
                          je({ key: 1 }, t.headerProps, {
                            "is-in-preview-mode": t.props.isInPreviewMode,
                            "is-preview-mobile-view": a.isPreviewMobileView,
                            "block-sticky-bar": t.blocks[t.BLOCK_STICKY_BAR_ID],
                            onToggleVisibility:
                              n[0] ||
                              (n[0] = (r) => (t.isNavOpen = !t.isNavOpen)),
                            onCartClick: t.handleCartClick,
                          }),
                          null,
                          16,
                          [
                            "is-in-preview-mode",
                            "is-preview-mobile-view",
                            "block-sticky-bar",
                          ]
                        ))
                      : M("", !0),
                  ],
                  2
                ),
                P(
                  "div",
                  WC,
                  [
                    (c(!0),
                    h(
                      ve,
                      null,
                      Te(
                        t.currentPageBlocks,
                        (r) => (
                          c(),
                          K(
                            t.BlockUser,
                            {
                              id: t.blocks[r].htmlId || r,
                              key: `${t.currentPageId}-${r}`,
                              data: t.blocks[r],
                              blocks: t.blocks,
                              lcp: t.lcp,
                              "page-id": t.currentPageId,
                              "ecommerce-translations": t.ecommerceTranslations,
                              "current-page-type": t.currentPageType,
                              components: t.elements,
                              "screen-width": t.screenWidth,
                              style: Be(t.getHeaderHeightStyles(r)),
                              "current-locale": t.currentLocale,
                              "is-cart-visible": t.headerProps.isCartVisible,
                              "is-in-preview-mode": t.props.isInPreviewMode,
                              "is-first-visible-desktop-block":
                                t.firstVisibleDesktopBlockId === r,
                              "is-first-visible-mobile-block":
                                t.firstVisibleMobileBlockId === r,
                            },
                            null,
                            8,
                            [
                              "id",
                              "data",
                              "blocks",
                              "lcp",
                              "page-id",
                              "ecommerce-translations",
                              "current-page-type",
                              "components",
                              "screen-width",
                              "style",
                              "current-locale",
                              "is-cart-visible",
                              "is-in-preview-mode",
                              "is-first-visible-desktop-block",
                              "is-first-visible-mobile-block",
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ],
                  512
                ),
                t.meta.isCookieBarEnabled && !t.isCurrentPagePrivate
                  ? (c(),
                    K(
                      t.CookieBanner,
                      {
                        key: 2,
                        disclaimer: t.cookieBannerDisclaimer || "",
                        "accept-text": t.cookieBannerAcceptText,
                        "decline-text": t.cookieBannerDeclineText,
                        "site-meta": t.meta,
                      },
                      null,
                      8,
                      ["disclaimer", "accept-text", "decline-text", "site-meta"]
                    ))
                  : M("", !0),
                t.isLocaleWithEcommerceItems
                  ? (c(),
                    K(
                      t.EcommerceShoppingCartProviderUser,
                      {
                        key: 3,
                        "ecommerce-translations": t.ecommerceTranslations,
                        language: t.language,
                        "is-header-sticky": t.headerProps.isSticky,
                        "is-nav-hidden": !t.isHeaderVisible,
                        "current-page-ecommerce-blocks":
                          t.currentPageEcommerceBlocks,
                        "current-page-ecommerce-components":
                          t.currentPageEcommerceComponents,
                        "is-in-preview-mode": t.props.isInPreviewMode,
                      },
                      null,
                      8,
                      [
                        "ecommerce-translations",
                        "language",
                        "is-header-sticky",
                        "is-nav-hidden",
                        "current-page-ecommerce-blocks",
                        "current-page-ecommerce-components",
                        "is-in-preview-mode",
                      ]
                    ))
                  : M("", !0),
                Ee(
                  t.EcommerceModalRoot,
                  {
                    "ecommerce-translations": t.ecommerceTranslations,
                    language: t.language,
                    "current-locale": t.currentLocale,
                    "is-cart-visible": t.headerProps.isCartVisible,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                  },
                  null,
                  8,
                  [
                    "ecommerce-translations",
                    "language",
                    "current-locale",
                    "is-cart-visible",
                    "is-in-preview-mode",
                  ]
                ),
              ],
              4
            ))
          : (c(),
            K(
              t.PasswordPage,
              {
                key: 1,
                "site-id": t.siteId,
                "page-id": t.currentPageId,
                locale: t.currentLocale,
                "default-locale": t.defaultLocale,
                "in-preview-mode": a.isInPreviewMode,
                "current-page-data": t.currentPage,
                "homepage-name": t.homepageName,
                "is-current-page-homepage": t.isCurrentPageHomepage,
              },
              null,
              8,
              [
                "site-id",
                "page-id",
                "locale",
                "default-locale",
                "in-preview-mode",
                "current-page-data",
                "homepage-name",
                "is-current-page-homepage",
              ]
            )),
        t.isLightboxOpen ? (c(), K(t.Lightbox, { key: 2 })) : M("", !0),
      ],
      64
    )
  );
}
const XC = re(FC, [["render", GC]]);
export { XC as default };
