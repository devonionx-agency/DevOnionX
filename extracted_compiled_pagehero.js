[project]/frontend/src/components/common/PageHero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$Container$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/Container.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$common$2f$BreadCrumb$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/common/BreadCrumb.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$helper$2f$imageProvider$2f$pageHeroImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/helper/imageProvider/pageHeroImage.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const { servicesHeroImg } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$helper$2f$imageProvider$2f$pageHeroImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allPageHeroImg"];
/**
 * PageHero — Unified, reusable, premium hero component for agency marketing pages
 *
 * In this design, the hero image (e.g. about-banner.avif, service-hero.avif, etc.)
 * is used directly as the FULL-SECTION BACKGROUND (spanning outside Container across the entire section).
 * No green overlay or grid lines. High-contrast typography with ambient brand glow.
 */ const PageHero = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(64);
    if ($[0] !== "cfa1c0f2d2f389501378afddf057b0d53f73bbf166ddac024200b76ac38d60c1") {
        for(let $i = 0; $i < 64; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cfa1c0f2d2f389501378afddf057b0d53f73bbf166ddac024200b76ac38d60c1";
    }
    const { eyebrow, sectionLabel, titleLines, title, sectionText, accentTitle, sectionColorText, services: t1, servicesTextTop, servicesTextBottom, description, heroDescription: t2, primaryCta, secondaryCta, existButton: t3, buttonLabel, buttonHref, bgImage, heroImage, heroPageImage, heroImageAlt: t4, showBreadcrumb: t5, breadcrumbOverrides, className: t6, children } = t0;
    t1 === undefined ? false : t1;
    const heroDescription = t2 === undefined ? "We help ambitious businesses turn ideas into powerful digital products built to solve real problems, deliver exceptional experiences, and grow with your business." : t2;
    const existButton = t3 === undefined ? true : t3;
    const heroImageAlt = t4 === undefined ? "DevOnionX Digital Showcase Background" : t4;
    const showBreadcrumb = t5 === undefined ? true : t5;
    const className = t6 === undefined ? "" : t6;
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const breadcrumbRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eyebrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const descRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionBgImage = bgImage || heroImage || heroPageImage || servicesHeroImg;
    const displayEyebrow = eyebrow || sectionLabel;
    const displayDescription = description || heroDescription;
    let t7;
    bb0: {
        if (Array.isArray(titleLines) && titleLines.length > 0) {
            t7 = titleLines;
            break bb0;
        }
        if (servicesTextTop || servicesTextBottom) {
            const t8 = servicesTextTop || "Mobile App";
            let t9;
            if ($[1] !== t8) {
                t9 = {
                    text: t8,
                    accent: false
                };
                $[1] = t8;
                $[2] = t9;
            } else {
                t9 = $[2];
            }
            const t10 = servicesTextBottom || "Development Services";
            let t11;
            if ($[3] !== t10) {
                t11 = {
                    text: t10,
                    accent: true
                };
                $[3] = t10;
                $[4] = t11;
            } else {
                t11 = $[4];
            }
            let t12;
            if ($[5] !== t11 || $[6] !== t9) {
                t12 = [
                    t9,
                    t11
                ];
                $[5] = t11;
                $[6] = t9;
                $[7] = t12;
            } else {
                t12 = $[7];
            }
            t7 = t12;
            break bb0;
        }
        const mainHeading = title || sectionText || "Turning Your Vision Into Digital Success";
        const accent = accentTitle || sectionColorText;
        if (accent && mainHeading.includes(accent)) {
            let t8;
            if ($[8] !== accent || $[9] !== mainHeading) {
                const parts = mainHeading.split(accent);
                t8 = parts[0].trim();
                $[8] = accent;
                $[9] = mainHeading;
                $[10] = t8;
            } else {
                t8 = $[10];
            }
            let t9;
            if ($[11] !== t8) {
                t9 = {
                    text: t8,
                    accent: false
                };
                $[11] = t8;
                $[12] = t9;
            } else {
                t9 = $[12];
            }
            let t10;
            if ($[13] !== accent) {
                t10 = accent.trim();
                $[13] = accent;
                $[14] = t10;
            } else {
                t10 = $[14];
            }
            let t11;
            if ($[15] !== t10) {
                t11 = {
                    text: t10,
                    accent: true
                };
                $[15] = t10;
                $[16] = t11;
            } else {
                t11 = $[16];
            }
            let t12;
            if ($[17] !== t11 || $[18] !== t9) {
                t12 = [
                    t9,
                    t11
                ].filter(_temp);
                $[17] = t11;
                $[18] = t9;
                $[19] = t12;
            } else {
                t12 = $[19];
            }
            t7 = t12;
            break bb0;
        }
        let t8;
        if ($[20] !== mainHeading) {
            t8 = [
                {
                    text: mainHeading,
                    accent: false
                }
            ];
            $[20] = mainHeading;
            $[21] = t8;
        } else {
            t8 = $[21];
        }
        t7 = t8;
    }
    const lines = t7;
    let t8;
    if ($[22] !== buttonHref || $[23] !== buttonLabel || $[24] !== primaryCta) {
        t8 = primaryCta || (buttonLabel ? {
            label: buttonLabel,
            href: buttonHref || "/contact"
        } : null);
        $[22] = buttonHref;
        $[23] = buttonLabel;
        $[24] = primaryCta;
        $[25] = t8;
    } else {
        t8 = $[25];
    }
    const resolvedPrimaryCta = t8;
    const resolvedSecondaryCta = secondaryCta || null;
    const showButtons = existButton && (resolvedPrimaryCta || resolvedSecondaryCta);
    let t10;
    let t9;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ()=>{
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (prefersReducedMotion) {
                return;
            }
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                defaults: {
                    ease: "power3.out"
                }
            });
            if (breadcrumbRef.current) {
                tl.fromTo(breadcrumbRef.current, {
                    opacity: 0,
                    y: -10
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5
                }, 0.05);
            }
            if (eyebrowRef.current) {
                tl.fromTo(eyebrowRef.current, {
                    opacity: 0,
                    y: 12
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.55
                }, "-=0.3");
            }
            if (headingRef.current) {
                tl.fromTo(headingRef.current.querySelectorAll("[data-hero-line]"), {
                    opacity: 0,
                    y: 28
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.85,
                    stagger: 0.12,
                    ease: "expo.out"
                }, "-=0.35");
            }
            if (descRef.current) {
                tl.fromTo(descRef.current, {
                    opacity: 0,
                    y: 18
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.65
                }, "-=0.5");
            }
            if (buttonsRef.current) {
                tl.fromTo(buttonsRef.current, {
                    opacity: 0,
                    y: 16
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6
                }, "-=0.45");
            }
        };
        t10 = {
            scope: rootRef
        };
        $[26] = t10;
        $[27] = t9;
    } else {
        t10 = $[26];
        t9 = $[27];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])(t9, t10);
    const t11 = `relative isolate overflow-hidden bg-[#070b14] px-4 pb-24 pt-28 sm:px-6 sm:pb-32 sm:pt-36 lg:px-8 lg:pb-36 lg:pt-40 ${className}`;
    let t12;
    if ($[28] !== heroImageAlt || $[29] !== sectionBgImage) {
        t12 = sectionBgImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: sectionBgImage,
            alt: heroImageAlt,
            fill: true,
            priority: true,
            quality: 80,
            sizes: "100vw",
            className: "pointer-events-none -z-30 select-none object-cover object-center"
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/common/PageHero.jsx",
            lineNumber: 282,
            columnNumber: 29
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = heroImageAlt;
        $[29] = sectionBgImage;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    let t14;
    let t15;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[#070b14]/75 via-[#070b14]/50 to-[#070b14]/85 backdrop-blur-[0.5px]"
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/common/PageHero.jsx",
            lineNumber: 293,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": "true",
            className: "pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,81,1,0.22),transparent_70%)] blur-3xl"
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/common/PageHero.jsx",
            lineNumber: 294,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF5101]/50 to-transparent"
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/common/PageHero.jsx",
            lineNumber: 295,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t13;
        $[32] = t14;
        $[33] = t15;
    } else {
        t13 = $[31];
        t14 = $[32];
        t15 = $[33];
    }
    let t16;
    if ($[34] !== breadcrumbOverrides || $[35] !== showBreadcrumb) {
        t16 = showBreadcrumb && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: breadcrumbRef,
            className: "mb-6 flex justify-center sm:mb-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$common$2f$BreadCrumb$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "dark",
                overrides: breadcrumbOverrides
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/common/PageHero.jsx",
                lineNumber: 306,
                columnNumber: 99
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/common/PageHero.jsx",
            lineNumber: 306,
            columnNumber: 29
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = breadcrumbOverrides;
        $[35] = showBreadcrumb;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== displayEyebrow) {
        t17 = displayEyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: eyebrowRef,
            className: "mb-4 sm:mb-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 shadow-sm backdrop-blur-md sm:text-[13px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-1.5 w-1.5 rounded-full bg-[#FF5101] shadow-[0_0_8px_#FF5101]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/common/PageHero.jsx",
                        lineNumber: 315,
                        columnNumber: 285
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: displayEyebrow
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/common/PageHero.jsx",
                        lineNumber: 315,
                        columnNumber: 368
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/common/PageHero.jsx",
                lineNumber: 315,
                columnNumber: 76
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/common/PageHero.jsx",
            lineNumber: 315,
            columnNumber: 29
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = displayEyebrow;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] !== lines) {
        t18 = lines.map(_temp2);
        $[39] = lines;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            ref: headingRef,
            className: "font-serif text-[2.5rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]",
            children: t18
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/common/PageHero.jsx",
            lineNumber: 331,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t18;
        $[42] = t19;
    } else {
        t19 = $[42];
    }
    let t20;
    if ($[43] !== displayDescription) {
        t20 = displayDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            ref: descRef,
            className: "mt-6 max-w-2xl text-base leading-relaxed text-neutral-200/90 drop-shadow-sm sm:text-lg sm:leading-relaxed",
            children: displayDescription
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/common/PageHero.jsx",
            lineNumber: 339,
            columnNumber: 33
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = displayDescription;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] !== resolvedPrimaryCta || $[46] !== resolvedSecondaryCta || $[47] !== showButtons) {
        t21 = showButtons && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: buttonsRef,
            className: "mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:mt-10 sm:gap-4",
            children: [
                resolvedPrimaryCta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: resolvedPrimaryCta.href,
                    className: "group inline-flex items-center gap-2.5 rounded-xl bg-[#FF5101] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#FF5101]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ea4900] hover:shadow-xl hover:shadow-[#FF5101]/40 active:scale-[0.98] sm:px-8 sm:py-4 sm:text-[15px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: resolvedPrimaryCta.label
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/common/PageHero.jsx",
                            lineNumber: 347,
                            columnNumber: 507
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRight"], {
                            className: "text-base transition-transform duration-300 group-hover:translate-x-1"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/common/PageHero.jsx",
                            lineNumber: 347,
                            columnNumber: 546
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/common/PageHero.jsx",
                    lineNumber: 347,
                    columnNumber: 157
                }, ("TURBOPACK compile-time value", void 0)),
                resolvedSecondaryCta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: resolvedSecondaryCta.href,
                    className: "group inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20 hover:text-white hover:shadow-md active:scale-[0.98] sm:px-8 sm:py-4 sm:text-[15px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: resolvedSecondaryCta.label
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/common/PageHero.jsx",
                            lineNumber: 347,
                            columnNumber: 1060
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRight"], {
                            className: "text-base transition-transform duration-300 group-hover:translate-x-1"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/common/PageHero.jsx",
                            lineNumber: 347,
                            columnNumber: 1101
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/common/PageHero.jsx",
                    lineNumber: 347,
                    columnNumber: 677
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/common/PageHero.jsx",
            lineNumber: 347,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = resolvedPrimaryCta;
        $[46] = resolvedSecondaryCta;
        $[47] = showButtons;
        $[48] = t21;
    } else {
        t21 = $[48];
    }
    let t22;
    if ($[49] !== t16 || $[50] !== t17 || $[51] !== t19 || $[52] !== t20 || $[53] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-5xl flex-col items-center text-center",
            children: [
                t16,
                t17,
                t19,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/common/PageHero.jsx",
            lineNumber: 357,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t16;
        $[50] = t17;
        $[51] = t19;
        $[52] = t20;
        $[53] = t21;
        $[54] = t22;
    } else {
        t22 = $[54];
    }
    let t23;
    if ($[55] !== children) {
        t23 = children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-12 sm:mt-16",
            children: children
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/common/PageHero.jsx",
            lineNumber: 369,
            columnNumber: 23
        }, ("TURBOPACK compile-time value", void 0));
        $[55] = children;
        $[56] = t23;
    } else {
        t23 = $[56];
    }
    let t24;
    if ($[57] !== t22 || $[58] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$Container$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: [
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/common/PageHero.jsx",
            lineNumber: 377,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[57] = t22;
        $[58] = t23;
        $[59] = t24;
    } else {
        t24 = $[59];
    }
    let t25;
    if ($[60] !== t11 || $[61] !== t12 || $[62] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: rootRef,
            className: t11,
            children: [
                t12,
                t13,
                t14,
                t15,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/common/PageHero.jsx",
            lineNumber: 386,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = t11;
        $[61] = t12;
        $[62] = t24;
        $[63] = t25;
    } else {
        t25 = $[63];
    }
    return t25;
};
_s(PageHero, "3/KPsQgx6PZpzEa20ghBrVaN7y4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = PageHero;
const __TURBOPACK__default__export__ = PageHero;
function _temp(l) {
    return Boolean(l.text);
}
function _temp2(line, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-hero-line": true,
        className: `block ${line.accent ? "font-serif italic font-extrabold text-[#FF5101] drop-shadow-[0_2px_24px_rgba(255,81,1,0.4)]" : "drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"}`,
        children: line.text
    }, `${line.text}-${index}`, false, {
        fileName: "[project]/frontend/src/components/common/PageHero.jsx",
        lineNumber: 401,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "PageHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),