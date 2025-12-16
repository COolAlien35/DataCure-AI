module.exports = [
"[project]/Downloads/data-cure-ai-dashboard/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/compose-refs/src/composeRefs.tsx
__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/slot/src/Slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
var Slot = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(null);
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
            } else {
                return child;
            }
        });
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
        ...slotProps,
        ref: forwardedRef,
        children
    });
});
Slot.displayName = "Slot";
var SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
        const childrenRef = getElementRef(children);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](children, {
            ...mergeProps(slotProps, children.props),
            // @ts-ignore
            ref: forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children })=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children
    });
};
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    childPropValue(...args);
                    slotPropValue(...args);
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
var Root = Slot;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ __turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/core/primitive/src/primitive.tsx
__turbopack_context__.s([
    "composeEventHandlers",
    ()=>composeEventHandlers
]);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
        originalEventHandler?.(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) {
            return ourEventHandler?.(event);
        }
    };
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/context/src/createContext.tsx
__turbopack_context__.s([
    "createContext",
    ()=>createContext2,
    "createContextScope",
    ()=>createContextScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
function createContext2(rootComponentName, defaultContext) {
    const Context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
    const Provider = (props)=>{
        const { children, ...context } = props;
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>context, Object.values(context));
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName) {
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](Context);
        if (context) return context;
        if (defaultContext !== void 0) return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [
        Provider,
        useContext2
    ];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext3(rootComponentName, defaultContext) {
        const BaseContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            const { scope, children, ...context } = props;
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>context, Object.values(context));
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                value,
                children
            });
        };
        Provider.displayName = rootComponentName + "Provider";
        function useContext2(consumerName, scope) {
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](Context);
            if (context) return context;
            if (defaultContext !== void 0) return defaultContext;
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        return [
            Provider,
            useContext2
        ];
    }
    const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        });
        return function useScope(scope) {
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
                    [`__scope${scopeName}`]: {
                        ...scope,
                        [scopeName]: contexts
                    }
                }), [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        createContext3,
        composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return function useComposedScopes(overrideScopes) {
            const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName })=>{
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
                    [`__scope${baseScope.scopeName}`]: nextScopes
                }), [
                nextScopes
            ]);
        };
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-callback-ref/src/useCallbackRef.tsx
__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useCallbackRef(callback) {
    const callbackRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](callback);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        callbackRef.current = callback;
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(...args)=>callbackRef.current?.(...args), []);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-controllable-state/src/useControllableState.tsx
__turbopack_context__.s([
    "useControllableState",
    ()=>useControllableState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
;
;
function useControllableState({ prop, defaultProp, onChange = ()=>{} }) {
    const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
        defaultProp,
        onChange
    });
    const isControlled = prop !== void 0;
    const value = isControlled ? prop : uncontrolledProp;
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onChange);
    const setValue = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((nextValue)=>{
        if (isControlled) {
            const setter = nextValue;
            const value2 = typeof nextValue === "function" ? setter(prop) : nextValue;
            if (value2 !== prop) handleChange(value2);
        } else {
            setUncontrolledProp(nextValue);
        }
    }, [
        isControlled,
        prop,
        setUncontrolledProp,
        handleChange
    ]);
    return [
        value,
        setValue
    ];
}
function useUncontrolledState({ defaultProp, onChange }) {
    const uncontrolledState = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](value);
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (prevValueRef.current !== value) {
            handleChange(value);
            prevValueRef.current = value;
        }
    }, [
        value,
        prevValueRef,
        handleChange
    ]);
    return uncontrolledState;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/primitive/src/Primitive.tsx
__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : node;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-collection/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCollection",
    ()=>createCollection
]);
// packages/react/collection/src/Collection.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function createCollection(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: /* @__PURE__ */ new Map()
    });
    const CollectionProvider = (props)=>{
        const { scope, children } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const itemMap = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(/* @__PURE__ */ new Map()).current;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionProviderImpl, {
            scope,
            itemMap,
            collectionRef: ref,
            children
        });
    };
    CollectionProvider.displayName = PROVIDER_NAME;
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlot = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"], {
            ref: composedRefs,
            children
        });
    });
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlot = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
        const { scope, children, ...itemData } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
            context.itemMap.set(ref, {
                ref,
                ...itemData
            });
            return ()=>void context.itemMap.delete(ref);
        });
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"], {
            ...{
                [ITEM_DATA_ATTR]: ""
            },
            ref: composedRefs,
            children
        });
    });
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useCollection(scope) {
        const context = useCollectionContext(name + "CollectionConsumer", scope);
        const getItems = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>{
            const collectionNode = context.collectionRef.current;
            if (!collectionNode) return [];
            const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
            const items = Array.from(context.itemMap.values());
            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current));
            return orderedItems;
        }, [
            context.collectionRef,
            context.itemMap
        ]);
        return getItems;
    }
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/direction/src/Direction.tsx
__turbopack_context__.s([
    "DirectionProvider",
    ()=>DirectionProvider,
    "Provider",
    ()=>Provider,
    "useDirection",
    ()=>useDirection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
var DirectionContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](void 0);
var DirectionProvider = (props)=>{
    const { dir, children } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DirectionContext.Provider, {
        value: dir,
        children
    });
};
function useDirection(localDir) {
    const globalDir = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](DirectionContext);
    return localDir || globalDir || "ltr";
}
var Provider = DirectionProvider;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-escape-keydown/src/useEscapeKeydown.tsx
__turbopack_context__.s([
    "useEscapeKeydown",
    ()=>useEscapeKeydown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
;
;
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
    const onEscapeKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onEscapeKeyDownProp);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleKeyDown = (event)=>{
            if (event.key === "Escape") {
                onEscapeKeyDown(event);
            }
        };
        ownerDocument.addEventListener("keydown", handleKeyDown, {
            capture: true
        });
        return ()=>ownerDocument.removeEventListener("keydown", handleKeyDown, {
                capture: true
            });
    }, [
        onEscapeKeyDown,
        ownerDocument
    ]);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Branch",
    ()=>Branch,
    "DismissableLayer",
    ()=>DismissableLayer,
    "DismissableLayerBranch",
    ()=>DismissableLayerBranch,
    "Root",
    ()=>Root
]);
// packages/react/dismissable-layer/src/DismissableLayer.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$escape$2d$keydown$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](DismissableLayerContext);
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({});
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node2)=>setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
        ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event)=>{
        const target = event.target;
        const isPointerDownOnBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target));
        if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
        onPointerDownOutside?.(event);
        onInteractOutside?.(event);
        if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event)=>{
        const target = event.target;
        const isFocusInBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target));
        if (isFocusInBranch) return;
        onFocusOutside?.(event);
        onInteractOutside?.(event);
        if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$escape$2d$keydown$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEscapeKeydown"])((event)=>{
        const isHighestLayer = index === context.layers.size - 1;
        if (!isHighestLayer) return;
        onEscapeKeyDown?.(event);
        if (!event.defaultPrevented && onDismiss) {
            event.preventDefault();
            onDismiss();
        }
    }, ownerDocument);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!node) return;
        if (disableOutsidePointerEvents) {
            if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
                originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
                ownerDocument.body.style.pointerEvents = "none";
            }
            context.layersWithOutsidePointerEventsDisabled.add(node);
        }
        context.layers.add(node);
        dispatchUpdate();
        return ()=>{
            if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
                ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
            }
        };
    }, [
        node,
        ownerDocument,
        disableOutsidePointerEvents,
        context
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return ()=>{
            if (!node) return;
            context.layers.delete(node);
            context.layersWithOutsidePointerEventsDisabled.delete(node);
            dispatchUpdate();
        };
    }, [
        node,
        context
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleUpdate = ()=>force({});
        document.addEventListener(CONTEXT_UPDATE, handleUpdate);
        return ()=>document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...layerProps,
        ref: composedRefs,
        style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
            ...props.style
        },
        onFocusCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    });
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](DismissableLayerContext);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const node = ref.current;
        if (node) {
            context.branches.add(node);
            return ()=>{
                context.branches.delete(node);
            };
        }
    }, [
        context.branches
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...props,
        ref: composedRefs
    });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
    const handlePointerDownOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onPointerDownOutside);
    const isPointerInsideReactTreeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const handleClickRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](()=>{});
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handlePointerDown = (event)=>{
            if (event.target && !isPointerInsideReactTreeRef.current) {
                let handleAndDispatchPointerDownOutsideEvent2 = function() {
                    handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                        discrete: true
                    });
                };
                var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
                const eventDetail = {
                    originalEvent: event
                };
                if (event.pointerType === "touch") {
                    ownerDocument.removeEventListener("click", handleClickRef.current);
                    handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
                    ownerDocument.addEventListener("click", handleClickRef.current, {
                        once: true
                    });
                } else {
                    handleAndDispatchPointerDownOutsideEvent2();
                }
            } else {
                ownerDocument.removeEventListener("click", handleClickRef.current);
            }
            isPointerInsideReactTreeRef.current = false;
        };
        const timerId = window.setTimeout(()=>{
            ownerDocument.addEventListener("pointerdown", handlePointerDown);
        }, 0);
        return ()=>{
            window.clearTimeout(timerId);
            ownerDocument.removeEventListener("pointerdown", handlePointerDown);
            ownerDocument.removeEventListener("click", handleClickRef.current);
        };
    }, [
        ownerDocument,
        handlePointerDownOutside
    ]);
    return {
        // ensures we check React component tree (not just DOM tree)
        onPointerDownCapture: ()=>isPointerInsideReactTreeRef.current = true
    };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
    const handleFocusOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onFocusOutside);
    const isFocusInsideReactTreeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleFocus = (event)=>{
            if (event.target && !isFocusInsideReactTreeRef.current) {
                const eventDetail = {
                    originalEvent: event
                };
                handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
                    discrete: false
                });
            }
        };
        ownerDocument.addEventListener("focusin", handleFocus);
        return ()=>ownerDocument.removeEventListener("focusin", handleFocus);
    }, [
        ownerDocument,
        handleFocusOutside
    ]);
    return {
        onFocusCapture: ()=>isFocusInsideReactTreeRef.current = true,
        onBlurCapture: ()=>isFocusInsideReactTreeRef.current = false
    };
}
function dispatchUpdate() {
    const event = new CustomEvent(CONTEXT_UPDATE);
    document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: true,
        detail
    });
    if (handler) target.addEventListener(name, handler, {
        once: true
    });
    if (discrete) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchDiscreteCustomEvent"])(target, event);
    } else {
        target.dispatchEvent(event);
    }
}
var Root = DismissableLayer;
var Branch = DismissableLayerBranch;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusGuards",
    ()=>FocusGuards,
    "Root",
    ()=>Root,
    "useFocusGuards",
    ()=>useFocusGuards
]);
// packages/react/focus-guards/src/FocusGuards.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
var count = 0;
function FocusGuards(props) {
    useFocusGuards();
    return props.children;
}
function useFocusGuards() {
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
        document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
        document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
        count++;
        return ()=>{
            if (count === 1) {
                document.querySelectorAll("[data-radix-focus-guard]").forEach((node)=>node.remove());
            }
            count--;
        };
    }, []);
}
function createFocusGuard() {
    const element = document.createElement("span");
    element.setAttribute("data-radix-focus-guard", "");
    element.tabIndex = 0;
    element.style.outline = "none";
    element.style.opacity = "0";
    element.style.position = "fixed";
    element.style.pointerEvents = "none";
    return element;
}
var Root = FocusGuards;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusScope",
    ()=>FocusScope,
    "Root",
    ()=>Root
]);
// packages/react/focus-scope/src/FocusScope.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
    const [container, setContainer] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const onMountAutoFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onMountAutoFocusProp);
    const onUnmountAutoFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onUnmountAutoFocusProp);
    const lastFocusedElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setContainer(node));
    const focusScope = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current;
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (trapped) {
            let handleFocusIn2 = function(event) {
                if (focusScope.paused || !container) return;
                const target = event.target;
                if (container.contains(target)) {
                    lastFocusedElementRef.current = target;
                } else {
                    focus(lastFocusedElementRef.current, {
                        select: true
                    });
                }
            }, handleFocusOut2 = function(event) {
                if (focusScope.paused || !container) return;
                const relatedTarget = event.relatedTarget;
                if (relatedTarget === null) return;
                if (!container.contains(relatedTarget)) {
                    focus(lastFocusedElementRef.current, {
                        select: true
                    });
                }
            }, handleMutations2 = function(mutations) {
                const focusedElement = document.activeElement;
                if (focusedElement !== document.body) return;
                for (const mutation of mutations){
                    if (mutation.removedNodes.length > 0) focus(container);
                }
            };
            var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
            document.addEventListener("focusin", handleFocusIn2);
            document.addEventListener("focusout", handleFocusOut2);
            const mutationObserver = new MutationObserver(handleMutations2);
            if (container) mutationObserver.observe(container, {
                childList: true,
                subtree: true
            });
            return ()=>{
                document.removeEventListener("focusin", handleFocusIn2);
                document.removeEventListener("focusout", handleFocusOut2);
                mutationObserver.disconnect();
            };
        }
    }, [
        trapped,
        container,
        focusScope.paused
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (container) {
            focusScopesStack.add(focusScope);
            const previouslyFocusedElement = document.activeElement;
            const hasFocusedCandidate = container.contains(previouslyFocusedElement);
            if (!hasFocusedCandidate) {
                const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
                container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                container.dispatchEvent(mountEvent);
                if (!mountEvent.defaultPrevented) {
                    focusFirst(removeLinks(getTabbableCandidates(container)), {
                        select: true
                    });
                    if (document.activeElement === previouslyFocusedElement) {
                        focus(container);
                    }
                }
            }
            return ()=>{
                container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                setTimeout(()=>{
                    const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
                    container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    container.dispatchEvent(unmountEvent);
                    if (!unmountEvent.defaultPrevented) {
                        focus(previouslyFocusedElement ?? document.body, {
                            select: true
                        });
                    }
                    container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    focusScopesStack.remove(focusScope);
                }, 0);
            };
        }
    }, [
        container,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]);
    const handleKeyDown = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((event)=>{
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
            const container2 = event.currentTarget;
            const [first, last] = getTabbableEdges(container2);
            const hasTabbableElementsInside = first && last;
            if (!hasTabbableElementsInside) {
                if (focusedElement === container2) event.preventDefault();
            } else {
                if (!event.shiftKey && focusedElement === last) {
                    event.preventDefault();
                    if (loop) focus(first, {
                        select: true
                    });
                } else if (event.shiftKey && focusedElement === first) {
                    event.preventDefault();
                    if (loop) focus(last, {
                        select: true
                    });
                }
            }
        }
    }, [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        tabIndex: -1,
        ...scopeProps,
        ref: composedRefs,
        onKeyDown: handleKeyDown
    });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        focus(candidate, {
            select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
function getTabbableEdges(container) {
    const candidates = getTabbableCandidates(container);
    const first = findVisible(candidates, container);
    const last = findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
}
function findVisible(elements, container) {
    for (const element of elements){
        if (!isHidden(element, {
            upTo: container
        })) return element;
    }
}
function isHidden(node, { upTo }) {
    if (getComputedStyle(node).visibility === "hidden") return true;
    while(node){
        if (upTo !== void 0 && node === upTo) return false;
        if (getComputedStyle(node).display === "none") return true;
        node = node.parentElement;
    }
    return false;
}
function isSelectableInput(element) {
    return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({
            preventScroll: true
        });
        if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
    }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
    let stack = [];
    return {
        add (focusScope) {
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) {
                activeFocusScope?.pause();
            }
            stack = arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            stack = arrayRemove(stack, focusScope);
            stack[0]?.resume();
        }
    };
}
function arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) {
        updatedArray.splice(index, 1);
    }
    return updatedArray;
}
function removeLinks(items) {
    return items.filter((item)=>item.tagName !== "A");
}
var Root = FocusScope;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-layout-effect/src/useLayoutEffect.tsx
__turbopack_context__.s([
    "useLayoutEffect",
    ()=>useLayoutEffect2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var useLayoutEffect2 = Boolean(globalThis?.document) ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"] : ()=>{};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/id/src/id.tsx
__turbopack_context__.s([
    "useId",
    ()=>useId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
;
;
var useReactId = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId".toString()] || (()=>void 0);
var count = 0;
function useId(deterministicId) {
    const [id, setId] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(useReactId());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!deterministicId) setId((reactId)=>reactId ?? String(count++));
    }, [
        deterministicId
    ]);
    return deterministicId || (id ? `radix-${id}` : "");
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */ __turbopack_context__.s([
    "alignments",
    ()=>alignments,
    "clamp",
    ()=>clamp,
    "createCoords",
    ()=>createCoords,
    "evaluate",
    ()=>evaluate,
    "expandPaddingObject",
    ()=>expandPaddingObject,
    "floor",
    ()=>floor,
    "getAlignment",
    ()=>getAlignment,
    "getAlignmentAxis",
    ()=>getAlignmentAxis,
    "getAlignmentSides",
    ()=>getAlignmentSides,
    "getAxisLength",
    ()=>getAxisLength,
    "getExpandedPlacements",
    ()=>getExpandedPlacements,
    "getOppositeAlignmentPlacement",
    ()=>getOppositeAlignmentPlacement,
    "getOppositeAxis",
    ()=>getOppositeAxis,
    "getOppositeAxisPlacements",
    ()=>getOppositeAxisPlacements,
    "getOppositePlacement",
    ()=>getOppositePlacement,
    "getPaddingObject",
    ()=>getPaddingObject,
    "getSide",
    ()=>getSide,
    "getSideAxis",
    ()=>getSideAxis,
    "max",
    ()=>max,
    "min",
    ()=>min,
    "placements",
    ()=>placements,
    "rectToClientRect",
    ()=>rectToClientRect,
    "round",
    ()=>round,
    "sides",
    ()=>sides
]);
const sides = [
    'top',
    'right',
    'bottom',
    'left'
];
const alignments = [
    'start',
    'end'
];
const placements = /*#__PURE__*/ sides.reduce((acc, side)=>acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v)=>({
        x: v,
        y: v
    });
const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
const oppositeAlignmentMap = {
    start: 'end',
    end: 'start'
};
function clamp(start, value, end) {
    return max(start, min(value, end));
}
function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
    return placement.split('-')[0];
}
function getAlignment(placement) {
    return placement.split('-')[1];
}
function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
}
const yAxisSides = /*#__PURE__*/ new Set([
    'top',
    'bottom'
]);
function getSideAxis(placement) {
    return yAxisSides.has(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
        rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) {
        mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [
        mainAlignmentSide,
        getOppositePlacement(mainAlignmentSide)
    ];
}
function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [
        getOppositeAlignmentPlacement(placement),
        oppositePlacement,
        getOppositeAlignmentPlacement(oppositePlacement)
    ];
}
function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment)=>oppositeAlignmentMap[alignment]);
}
const lrPlacement = [
    'left',
    'right'
];
const rlPlacement = [
    'right',
    'left'
];
const tbPlacement = [
    'top',
    'bottom'
];
const btPlacement = [
    'bottom',
    'top'
];
function getSideList(side, isStart, rtl) {
    switch(side){
        case 'top':
        case 'bottom':
            if (rtl) return isStart ? rlPlacement : lrPlacement;
            return isStart ? lrPlacement : rlPlacement;
        case 'left':
        case 'right':
            return isStart ? tbPlacement : btPlacement;
        default:
            return [];
    }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
        list = list.map((side)=>side + "-" + alignment);
        if (flipAlignment) {
            list = list.concat(list.map(getOppositeAlignmentPlacement));
        }
    }
    return list;
}
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side)=>oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...padding
    };
}
function getPaddingObject(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
    };
}
function rectToClientRect(rect) {
    const { x, y, width, height } = rect;
    return {
        width,
        height,
        top: y,
        left: x,
        right: x + width,
        bottom: y + height,
        x,
        y
    };
}
;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getComputedStyle",
    ()=>getComputedStyle,
    "getContainingBlock",
    ()=>getContainingBlock,
    "getDocumentElement",
    ()=>getDocumentElement,
    "getFrameElement",
    ()=>getFrameElement,
    "getNearestOverflowAncestor",
    ()=>getNearestOverflowAncestor,
    "getNodeName",
    ()=>getNodeName,
    "getNodeScroll",
    ()=>getNodeScroll,
    "getOverflowAncestors",
    ()=>getOverflowAncestors,
    "getParentNode",
    ()=>getParentNode,
    "getWindow",
    ()=>getWindow,
    "isContainingBlock",
    ()=>isContainingBlock,
    "isElement",
    ()=>isElement,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isLastTraversableNode",
    ()=>isLastTraversableNode,
    "isNode",
    ()=>isNode,
    "isOverflowElement",
    ()=>isOverflowElement,
    "isShadowRoot",
    ()=>isShadowRoot,
    "isTableElement",
    ()=>isTableElement,
    "isTopLayer",
    ()=>isTopLayer,
    "isWebKit",
    ()=>isWebKit
]);
function hasWindow() {
    return ("TURBOPACK compile-time value", "undefined") !== 'undefined';
}
function getNodeName(node) {
    if (isNode(node)) {
        return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
}
function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
    if (!hasWindow()) {
        return false;
    }
    //TURBOPACK unreachable
    ;
}
function isElement(value) {
    if (!hasWindow()) {
        return false;
    }
    //TURBOPACK unreachable
    ;
}
function isHTMLElement(value) {
    if (!hasWindow()) {
        return false;
    }
    //TURBOPACK unreachable
    ;
}
function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === 'undefined') {
        return false;
    }
    //TURBOPACK unreachable
    ;
}
const invalidOverflowDisplayValues = /*#__PURE__*/ new Set([
    'inline',
    'contents'
]);
function isOverflowElement(element) {
    const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /*#__PURE__*/ new Set([
    'table',
    'td',
    'th'
]);
function isTableElement(element) {
    return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [
    ':popover-open',
    ':modal'
];
function isTopLayer(element) {
    return topLayerSelectors.some((selector)=>{
        try {
            return element.matches(selector);
        } catch (_e) {
            return false;
        }
    });
}
const transformProperties = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective'
];
const willChangeValues = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective',
    'filter'
];
const containValues = [
    'paint',
    'layout',
    'strict',
    'content'
];
function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    // https://drafts.csswg.org/css-transforms-2/#individual-transforms
    return transformProperties.some((value)=>css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || willChangeValues.some((value)=>(css.willChange || '').includes(value)) || containValues.some((value)=>(css.contain || '').includes(value));
}
function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while(isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)){
        if (isContainingBlock(currentNode)) {
            return currentNode;
        } else if (isTopLayer(currentNode)) {
            return null;
        }
        currentNode = getParentNode(currentNode);
    }
    return null;
}
function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
}
const lastTraversableNodeNames = /*#__PURE__*/ new Set([
    'html',
    'body',
    '#document'
]);
function isLastTraversableNode(node) {
    return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
    if (isElement(element)) {
        return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
        };
    }
    return {
        scrollLeft: element.scrollX,
        scrollTop: element.scrollY
    };
}
function getParentNode(node) {
    if (getNodeName(node) === 'html') {
        return node;
    }
    const result = // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
        return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
        return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
        list = [];
    }
    if (traverseIframes === void 0) {
        traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
        const frameElement = getFrameElement(win);
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@floating-ui/core/dist/floating-ui.core.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "computePosition",
    ()=>computePosition,
    "detectOverflow",
    ()=>detectOverflow,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "shift",
    ()=>shift,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-ssr] (ecmascript)");
;
;
function computeCoordsFromPlacement(_ref, placement, rtl) {
    let { reference, floating } = _ref;
    const sideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSideAxis"])(placement);
    const alignmentAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlignmentAxis"])(placement);
    const alignLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisLength"])(alignmentAxis);
    const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSide"])(placement);
    const isVertical = sideAxis === 'y';
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch(side){
        case 'top':
            coords = {
                x: commonX,
                y: reference.y - floating.height
            };
            break;
        case 'bottom':
            coords = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 'right':
            coords = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 'left':
            coords = {
                x: reference.x - floating.width,
                y: commonY
            };
            break;
        default:
            coords = {
                x: reference.x,
                y: reference.y
            };
    }
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlignment"])(placement)){
        case 'start':
            coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        case 'end':
            coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
    }
    return coords;
}
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */ const computePosition = async (reference, floating, config)=>{
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
        reference,
        floating,
        strategy
    });
    let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for(let i = 0; i < validMiddleware.length; i++){
        const { name, fn } = validMiddleware[i];
        const { x: nextX, y: nextY, data, reset } = await fn({
            x,
            y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy,
            middlewareData,
            rects,
            platform,
            elements: {
                reference,
                floating
            }
        });
        x = nextX != null ? nextX : x;
        y = nextY != null ? nextY : y;
        middlewareData = {
            ...middlewareData,
            [name]: {
                ...middlewareData[name],
                ...data
            }
        };
        if (reset && resetCount <= 50) {
            resetCount++;
            if (typeof reset === 'object') {
                if (reset.placement) {
                    statefulPlacement = reset.placement;
                }
                if (reset.rects) {
                    rects = reset.rects === true ? await platform.getElementRects({
                        reference,
                        floating,
                        strategy
                    }) : reset.rects;
                }
                ({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
            }
            i = -1;
        }
    }
    return {
        x,
        y,
        placement: statefulPlacement,
        strategy,
        middlewareData
    };
};
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
        options = {};
    }
    const { x, y, platform, rects, elements, strategy } = state;
    const { boundary = 'clippingAncestors', rootBoundary = 'viewport', elementContext = 'floating', altBoundary = false, padding = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
    const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rectToClientRect"])(await platform.getClippingRect({
        element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
        boundary,
        rootBoundary,
        strategy
    }));
    const rect = elementContext === 'floating' ? {
        x,
        y,
        width: rects.floating.width,
        height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    };
    const elementClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rectToClientRect"])(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements,
        rect,
        offsetParent,
        strategy
    }) : rect);
    return {
        top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
        bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
        left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
        right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options)=>({
        name: 'arrow',
        options,
        async fn (state) {
            const { x, y, placement, rects, platform, elements, middlewareData } = state;
            // Since `element` is required, we don't Partial<> the type.
            const { element, padding = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(options, state) || {};
            if (element == null) {
                return {};
            }
            const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
            const coords = {
                x,
                y
            };
            const axis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlignmentAxis"])(placement);
            const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisLength"])(axis);
            const arrowDimensions = await platform.getDimensions(element);
            const isYAxis = axis === 'y';
            const minProp = isYAxis ? 'top' : 'left';
            const maxProp = isYAxis ? 'bottom' : 'right';
            const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
            const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
            const startDiff = coords[axis] - rects.reference[axis];
            const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
            let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
            // DOM platform can return `window` as the `offsetParent`.
            if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) {
                clientSize = elements.floating[clientProp] || rects.floating[length];
            }
            const centerToReference = endDiff / 2 - startDiff / 2;
            // If the padding is large enough that it causes the arrow to no longer be
            // centered, modify the padding so that it is centered.
            const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
            const minPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["min"])(paddingObject[minProp], largestPossiblePadding);
            const maxPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["min"])(paddingObject[maxProp], largestPossiblePadding);
            // Make sure the arrow doesn't overflow the floating element if the center
            // point is outside the floating element's bounds.
            const min$1 = minPadding;
            const max = clientSize - arrowDimensions[length] - maxPadding;
            const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
            const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(min$1, center, max);
            // If the reference is small enough that the arrow's padding causes it to
            // to point to nothing for an aligned placement, adjust the offset of the
            // floating element itself. To ensure `shift()` continues to take action,
            // a single reset is performed when this is true.
            const shouldAddOffset = !middlewareData.arrow && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlignment"])(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
            const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
            return {
                [axis]: coords[axis] + alignmentOffset,
                data: {
                    [axis]: offset,
                    centerOffset: center - offset - alignmentOffset,
                    ...shouldAddOffset && {
                        alignmentOffset
                    }
                },
                reset: shouldAddOffset
            };
        }
    });
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
    const allowedPlacementsSortedByAlignment = alignment ? [
        ...allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlignment"])(placement) === alignment),
        ...allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlignment"])(placement) !== alignment)
    ] : allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSide"])(placement) === placement);
    return allowedPlacementsSortedByAlignment.filter((placement)=>{
        if (alignment) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlignment"])(placement) === alignment || (autoAlignment ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOppositeAlignmentPlacement"])(placement) !== placement : false);
        }
        return true;
    });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'autoPlacement',
        options,
        async fn (state) {
            var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
            const { rects, middlewareData, placement, platform, elements } = state;
            const { crossAxis = false, alignment, allowedPlacements = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["placements"], autoAlignment = true, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const placements$1 = alignment !== undefined || allowedPlacements === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["placements"] ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
            const currentPlacement = placements$1[currentIndex];
            if (currentPlacement == null) {
                return {};
            }
            const alignmentSides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlignmentSides"])(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
            // Make `computeCoords` start from the right place.
            if (placement !== currentPlacement) {
                return {
                    reset: {
                        placement: placements$1[0]
                    }
                };
            }
            const currentOverflows = [
                overflow[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSide"])(currentPlacement)],
                overflow[alignmentSides[0]],
                overflow[alignmentSides[1]]
            ];
            const allOverflows = [
                ...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [],
                {
                    placement: currentPlacement,
                    overflows: currentOverflows
                }
            ];
            const nextPlacement = placements$1[currentIndex + 1];
            // There are more placements to check.
            if (nextPlacement) {
                return {
                    data: {
                        index: currentIndex + 1,
                        overflows: allOverflows
                    },
                    reset: {
                        placement: nextPlacement
                    }
                };
            }
            const placementsSortedByMostSpace = allOverflows.map((d)=>{
                const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlignment"])(d.placement);
                return [
                    d.placement,
                    alignment && crossAxis ? // Check along the mainAxis and main crossAxis side.
                    d.overflows.slice(0, 2).reduce((acc, v)=>acc + v, 0) : // Check only the mainAxis.
                    d.overflows[0],
                    d.overflows
                ];
            }).sort((a, b)=>a[1] - b[1]);
            const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d)=>d[2].slice(0, // Aligned placements should not check their opposite crossAxis
                // side.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlignment"])(d[0]) ? 2 : 3).every((v)=>v <= 0));
            const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
            if (resetPlacement !== placement) {
                return {
                    data: {
                        index: currentIndex + 1,
                        overflows: allOverflows
                    },
                    reset: {
                        placement: resetPlacement
                    }
                };
            }
            return {};
        }
    };
};
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'flip',
        options,
        async fn (state) {
            var _middlewareData$arrow, _middlewareData$flip;
            const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = 'bestFit', fallbackAxisSideDirection = 'none', flipAlignment = true, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            // If a reset by the arrow was caused due to an alignment offset being
            // added, we should skip any logic now since `flip()` has already done its
            // work.
            // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
            if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
            }
            const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSide"])(placement);
            const initialSideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSideAxis"])(initialPlacement);
            const isBasePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSide"])(initialPlacement) === initialPlacement;
            const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
            const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOppositePlacement"])(initialPlacement)
            ] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExpandedPlacements"])(initialPlacement));
            const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
            if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
                fallbackPlacements.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOppositeAxisPlacements"])(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
            }
            const placements = [
                initialPlacement,
                ...fallbackPlacements
            ];
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const overflows = [];
            let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
            if (checkMainAxis) {
                overflows.push(overflow[side]);
            }
            if (checkCrossAxis) {
                const sides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlignmentSides"])(placement, rects, rtl);
                overflows.push(overflow[sides[0]], overflow[sides[1]]);
            }
            overflowsData = [
                ...overflowsData,
                {
                    placement,
                    overflows
                }
            ];
            // One or more sides is overflowing.
            if (!overflows.every((side)=>side <= 0)) {
                var _middlewareData$flip2, _overflowsData$filter;
                const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
                const nextPlacement = placements[nextIndex];
                if (nextPlacement) {
                    const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSideAxis"])(nextPlacement) : false;
                    if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
                    // overflows the main axis.
                    overflowsData.every((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSideAxis"])(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
                        // Try next placement and re-run the lifecycle.
                        return {
                            data: {
                                index: nextIndex,
                                overflows: overflowsData
                            },
                            reset: {
                                placement: nextPlacement
                            }
                        };
                    }
                }
                // First, find the candidates that fit on the mainAxis side of overflow,
                // then find the placement that fits the best on the main crossAxis side.
                let resetPlacement = (_overflowsData$filter = overflowsData.filter((d)=>d.overflows[0] <= 0).sort((a, b)=>a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
                // Otherwise fallback.
                if (!resetPlacement) {
                    switch(fallbackStrategy){
                        case 'bestFit':
                            {
                                var _overflowsData$filter2;
                                const placement = (_overflowsData$filter2 = overflowsData.filter((d)=>{
                                    if (hasFallbackAxisSideDirection) {
                                        const currentSideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSideAxis"])(d.placement);
                                        return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                                        // reading directions favoring greater width.
                                        currentSideAxis === 'y';
                                    }
                                    return true;
                                }).map((d)=>[
                                        d.placement,
                                        d.overflows.filter((overflow)=>overflow > 0).reduce((acc, overflow)=>acc + overflow, 0)
                                    ]).sort((a, b)=>a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                                if (placement) {
                                    resetPlacement = placement;
                                }
                                break;
                            }
                        case 'initialPlacement':
                            resetPlacement = initialPlacement;
                            break;
                    }
                }
                if (placement !== resetPlacement) {
                    return {
                        reset: {
                            placement: resetPlacement
                        }
                    };
                }
            }
            return {};
        }
    };
};
function getSideOffsets(overflow, rect) {
    return {
        top: overflow.top - rect.height,
        right: overflow.right - rect.width,
        bottom: overflow.bottom - rect.height,
        left: overflow.left - rect.width
    };
}
function isAnySideFullyClipped(overflow) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sides"].some((side)=>overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'hide',
        options,
        async fn (state) {
            const { rects } = state;
            const { strategy = 'referenceHidden', ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            switch(strategy){
                case 'referenceHidden':
                    {
                        const overflow = await detectOverflow(state, {
                            ...detectOverflowOptions,
                            elementContext: 'reference'
                        });
                        const offsets = getSideOffsets(overflow, rects.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: offsets,
                                referenceHidden: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                case 'escaped':
                    {
                        const overflow = await detectOverflow(state, {
                            ...detectOverflowOptions,
                            altBoundary: true
                        });
                        const offsets = getSideOffsets(overflow, rects.floating);
                        return {
                            data: {
                                escapedOffsets: offsets,
                                escaped: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                default:
                    {
                        return {};
                    }
            }
        }
    };
};
function getBoundingRect(rects) {
    const minX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["min"])(...rects.map((rect)=>rect.left));
    const minY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["min"])(...rects.map((rect)=>rect.top));
    const maxX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"])(...rects.map((rect)=>rect.right));
    const maxY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"])(...rects.map((rect)=>rect.bottom));
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}
function getRectsByLine(rects) {
    const sortedRects = rects.slice().sort((a, b)=>a.y - b.y);
    const groups = [];
    let prevRect = null;
    for(let i = 0; i < sortedRects.length; i++){
        const rect = sortedRects[i];
        if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
            groups.push([
                rect
            ]);
        } else {
            groups[groups.length - 1].push(rect);
        }
        prevRect = rect;
    }
    return groups.map((rect)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rectToClientRect"])(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'inline',
        options,
        async fn (state) {
            const { placement, elements, rects, platform, strategy } = state;
            // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
            // ClientRect's bounds, despite the event listener being triggered. A
            // padding of 2 seems to handle this issue.
            const { padding = 2, x, y } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const nativeClientRects = Array.from(await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || []);
            const clientRects = getRectsByLine(nativeClientRects);
            const fallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rectToClientRect"])(getBoundingRect(nativeClientRects));
            const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
            function getBoundingClientRect() {
                // There are two rects and they are disjoined.
                if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
                    // Find the first rect in which the point is fully inside.
                    return clientRects.find((rect)=>x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
                }
                // There are 2 or more connected rects.
                if (clientRects.length >= 2) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y') {
                        const firstRect = clientRects[0];
                        const lastRect = clientRects[clientRects.length - 1];
                        const isTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSide"])(placement) === 'top';
                        const top = firstRect.top;
                        const bottom = lastRect.bottom;
                        const left = isTop ? firstRect.left : lastRect.left;
                        const right = isTop ? firstRect.right : lastRect.right;
                        const width = right - left;
                        const height = bottom - top;
                        return {
                            top,
                            bottom,
                            left,
                            right,
                            width,
                            height,
                            x: left,
                            y: top
                        };
                    }
                    const isLeftSide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSide"])(placement) === 'left';
                    const maxRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"])(...clientRects.map((rect)=>rect.right));
                    const minLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["min"])(...clientRects.map((rect)=>rect.left));
                    const measureRects = clientRects.filter((rect)=>isLeftSide ? rect.left === minLeft : rect.right === maxRight);
                    const top = measureRects[0].top;
                    const bottom = measureRects[measureRects.length - 1].bottom;
                    const left = minLeft;
                    const right = maxRight;
                    const width = right - left;
                    const height = bottom - top;
                    return {
                        top,
                        bottom,
                        left,
                        right,
                        width,
                        height,
                        x: left,
                        y: top
                    };
                }
                return fallback;
            }
            const resetRects = await platform.getElementRects({
                reference: {
                    getBoundingClientRect
                },
                floating: elements.floating,
                strategy
            });
            if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
                return {
                    reset: {
                        rects: resetRects
                    }
                };
            }
            return {};
        }
    };
};
const originSides = /*#__PURE__*/ new Set([
    'left',
    'top'
]);
// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
async function convertValueToCoords(state, options) {
    const { placement, platform, elements } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSide"])(placement);
    const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlignment"])(placement);
    const isVertical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y';
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
    // eslint-disable-next-line prefer-const
    let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === 'number' ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: rawValue.mainAxis || 0,
        crossAxis: rawValue.crossAxis || 0,
        alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === 'number') {
        crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti
    } : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti
    };
}
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = function(options) {
    if (options === void 0) {
        options = 0;
    }
    return {
        name: 'offset',
        options,
        async fn (state) {
            var _middlewareData$offse, _middlewareData$arrow;
            const { x, y, placement, middlewareData } = state;
            const diffCoords = await convertValueToCoords(state, options);
            // If the placement is the same and the arrow caused an alignment offset
            // then we don't need to change the positioning coordinates.
            if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
            }
            return {
                x: x + diffCoords.x,
                y: y + diffCoords.y,
                data: {
                    ...diffCoords,
                    placement
                }
            };
        }
    };
};
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'shift',
        options,
        async fn (state) {
            const { x, y, placement } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = {
                fn: (_ref)=>{
                    let { x, y } = _ref;
                    return {
                        x,
                        y
                    };
                }
            }, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const coords = {
                x,
                y
            };
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const crossAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSideAxis"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSide"])(placement));
            const mainAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOppositeAxis"])(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            if (checkMainAxis) {
                const minSide = mainAxis === 'y' ? 'top' : 'left';
                const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
                const min = mainAxisCoord + overflow[minSide];
                const max = mainAxisCoord - overflow[maxSide];
                mainAxisCoord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(min, mainAxisCoord, max);
            }
            if (checkCrossAxis) {
                const minSide = crossAxis === 'y' ? 'top' : 'left';
                const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
                const min = crossAxisCoord + overflow[minSide];
                const max = crossAxisCoord - overflow[maxSide];
                crossAxisCoord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(min, crossAxisCoord, max);
            }
            const limitedCoords = limiter.fn({
                ...state,
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            });
            return {
                ...limitedCoords,
                data: {
                    x: limitedCoords.x - x,
                    y: limitedCoords.y - y,
                    enabled: {
                        [mainAxis]: checkMainAxis,
                        [crossAxis]: checkCrossAxis
                    }
                }
            };
        }
    };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        options,
        fn (state) {
            const { x, y, placement, rects, middlewareData } = state;
            const { offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const coords = {
                x,
                y
            };
            const crossAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSideAxis"])(placement);
            const mainAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOppositeAxis"])(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            const rawOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(offset, state);
            const computedOffset = typeof rawOffset === 'number' ? {
                mainAxis: rawOffset,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...rawOffset
            };
            if (checkMainAxis) {
                const len = mainAxis === 'y' ? 'height' : 'width';
                const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
                const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
                if (mainAxisCoord < limitMin) {
                    mainAxisCoord = limitMin;
                } else if (mainAxisCoord > limitMax) {
                    mainAxisCoord = limitMax;
                }
            }
            if (checkCrossAxis) {
                var _middlewareData$offse, _middlewareData$offse2;
                const len = mainAxis === 'y' ? 'width' : 'height';
                const isOriginSide = originSides.has((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSide"])(placement));
                const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
                const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
                if (crossAxisCoord < limitMin) {
                    crossAxisCoord = limitMin;
                } else if (crossAxisCoord > limitMax) {
                    crossAxisCoord = limitMax;
                }
            }
            return {
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            };
        }
    };
};
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'size',
        options,
        async fn (state) {
            var _state$middlewareData, _state$middlewareData2;
            const { placement, rects, platform, elements } = state;
            const { apply = ()=>{}, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSide"])(placement);
            const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlignment"])(placement);
            const isYAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y';
            const { width, height } = rects.floating;
            let heightSide;
            let widthSide;
            if (side === 'top' || side === 'bottom') {
                heightSide = side;
                widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? 'start' : 'end') ? 'left' : 'right';
            } else {
                widthSide = side;
                heightSide = alignment === 'end' ? 'top' : 'bottom';
            }
            const maximumClippingHeight = height - overflow.top - overflow.bottom;
            const maximumClippingWidth = width - overflow.left - overflow.right;
            const overflowAvailableHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["min"])(height - overflow[heightSide], maximumClippingHeight);
            const overflowAvailableWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["min"])(width - overflow[widthSide], maximumClippingWidth);
            const noShift = !state.middlewareData.shift;
            let availableHeight = overflowAvailableHeight;
            let availableWidth = overflowAvailableWidth;
            if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
                availableWidth = maximumClippingWidth;
            }
            if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
                availableHeight = maximumClippingHeight;
            }
            if (noShift && !alignment) {
                const xMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"])(overflow.left, 0);
                const xMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"])(overflow.right, 0);
                const yMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"])(overflow.top, 0);
                const yMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"])(overflow.bottom, 0);
                if (isYAxis) {
                    availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"])(overflow.left, overflow.right));
                } else {
                    availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"])(overflow.top, overflow.bottom));
                }
            }
            await apply({
                ...state,
                availableWidth,
                availableHeight
            });
            const nextDimensions = await platform.getDimensions(elements.floating);
            if (width !== nextDimensions.width || height !== nextDimensions.height) {
                return {
                    reset: {
                        rects: true
                    }
                };
            }
            return {};
        }
    };
};
;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "autoUpdate",
    ()=>autoUpdate,
    "computePosition",
    ()=>computePosition,
    "detectOverflow",
    ()=>detectOverflow,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "platform",
    ()=>platform,
    "shift",
    ()=>shift,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@floating-ui/core/dist/floating-ui.core.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-ssr] (ecmascript)");
;
;
;
;
function getCssDimensions(element) {
    const css = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getComputedStyle"])(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(width) !== offsetWidth || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(height) !== offsetHeight;
    if (shouldFallback) {
        width = offsetWidth;
        height = offsetHeight;
    }
    return {
        width,
        height,
        $: shouldFallback
    };
}
function unwrapElement(element) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElement"])(element) ? element.contextElement : element;
}
function getScale(element) {
    const domElement = unwrapElement(element);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(domElement)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCoords"])(1);
    }
    const rect = domElement.getBoundingClientRect();
    const { width, height, $ } = getCssDimensions(domElement);
    let x = ($ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(rect.width) : rect.width) / width;
    let y = ($ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(rect.height) : rect.height) / height;
    // 0, NaN, or Infinity should always fallback to 1.
    if (!x || !Number.isFinite(x)) {
        x = 1;
    }
    if (!y || !Number.isFinite(y)) {
        y = 1;
    }
    return {
        x,
        y
    };
}
const noOffsets = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCoords"])(0);
function getVisualOffsets(element) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWindow"])(element);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWebKit"])() || !win.visualViewport) {
        return noOffsets;
    }
    return {
        x: win.visualViewport.offsetLeft,
        y: win.visualViewport.offsetTop
    };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
        isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWindow"])(element)) {
        return false;
    }
    return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
        includeScale = false;
    }
    if (isFixedStrategy === void 0) {
        isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCoords"])(1);
    if (includeScale) {
        if (offsetParent) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElement"])(offsetParent)) {
                scale = getScale(offsetParent);
            }
        } else {
            scale = getScale(element);
        }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCoords"])(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
        const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWindow"])(domElement);
        const offsetWin = offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElement"])(offsetParent) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWindow"])(offsetParent) : offsetParent;
        let currentWin = win;
        let currentIFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFrameElement"])(currentWin);
        while(currentIFrame && offsetParent && offsetWin !== currentWin){
            const iframeScale = getScale(currentIFrame);
            const iframeRect = currentIFrame.getBoundingClientRect();
            const css = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getComputedStyle"])(currentIFrame);
            const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
            const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
            x *= iframeScale.x;
            y *= iframeScale.y;
            width *= iframeScale.x;
            height *= iframeScale.y;
            x += left;
            y += top;
            currentWin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWindow"])(currentIFrame);
            currentIFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFrameElement"])(currentWin);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rectToClientRect"])({
        width,
        height,
        x,
        y
    });
}
// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
    const leftScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeScroll"])(element).scrollLeft;
    if (!rect) {
        return getBoundingClientRect((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocumentElement"])(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
    const htmlRect = documentElement.getBoundingClientRect();
    const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
    const y = htmlRect.top + scroll.scrollTop;
    return {
        x,
        y
    };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let { elements, rect, offsetParent, strategy } = _ref;
    const isFixed = strategy === 'fixed';
    const documentElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocumentElement"])(offsetParent);
    const topLayer = elements ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTopLayer"])(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
        return rect;
    }
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    let scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCoords"])(1);
    const offsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCoords"])(0);
    const isOffsetParentAnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeName"])(offsetParent) !== 'body' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isOverflowElement"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeScroll"])(offsetParent);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent);
            scale = getScale(offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCoords"])(0);
    return {
        width: rect.width * scale.x,
        height: rect.height * scale.y,
        x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
        y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
}
function getClientRects(element) {
    return Array.from(element.getClientRects());
}
// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
    const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    const scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeScroll"])(element);
    const body = element.ownerDocument.body;
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"])(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"])(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getComputedStyle"])(body).direction === 'rtl') {
        x += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"])(html.clientWidth, body.clientWidth) - width;
    }
    return {
        width,
        height,
        x,
        y
    };
}
// Safety check: ensure the scrollbar space is reasonable in case this
// calculation is affected by unusual styles.
// Most scrollbars leave 15-18px of space.
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWindow"])(element);
    const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        const visualViewportBased = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWebKit"])();
        if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    const windowScrollbarX = getWindowScrollBarX(html);
    // <html> `overflow: hidden` + `scrollbar-gutter: stable` reduces the
    // visual width of the <html> but this is not considered in the size
    // of `html.clientWidth`.
    if (windowScrollbarX <= 0) {
        const doc = html.ownerDocument;
        const body = doc.body;
        const bodyStyles = getComputedStyle(body);
        const bodyMarginInline = doc.compatMode === 'CSS1Compat' ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
        const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
        if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
            width -= clippingStableScrollbarWidth;
        }
    } else if (windowScrollbarX <= SCROLLBAR_MAX) {
        // If the <body> scrollbar is on the left, the width needs to be extended
        // by the scrollbar amount so there isn't extra space on the right.
        width += windowScrollbarX;
    }
    return {
        width,
        height,
        x,
        y
    };
}
const absoluteOrFixed = /*#__PURE__*/ new Set([
    'absolute',
    'fixed'
]);
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) ? getScale(element) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCoords"])(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
        width,
        height,
        x,
        y
    };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') {
        rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === 'document') {
        rect = getDocumentRect((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocumentElement"])(element));
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElement"])(clippingAncestor)) {
        rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
        const visualOffsets = getVisualOffsets(element);
        rect = {
            x: clippingAncestor.x - visualOffsets.x,
            y: clippingAncestor.y - visualOffsets.y,
            width: clippingAncestor.width,
            height: clippingAncestor.height
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rectToClientRect"])(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParentNode"])(element);
    if (parentNode === stopNode || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElement"])(parentNode) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(parentNode)) {
        return false;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getComputedStyle"])(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}
// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
        return cachedResult;
    }
    let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(element, [], false).filter((el)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElement"])(el) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeName"])(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'fixed';
    let currentNode = elementIsFixed ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParentNode"])(element) : element;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElement"])(currentNode) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(currentNode)){
        const computedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getComputedStyle"])(currentNode);
        const currentNodeIsContaining = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isContainingBlock"])(currentNode);
        if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
            currentContainingBlockComputedStyle = null;
        }
        const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isOverflowElement"])(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
        if (shouldDropCurrentNode) {
            // Drop non-containing blocks.
            result = result.filter((ancestor)=>ancestor !== currentNode);
        } else {
            // Record last containing block for next iteration.
            currentContainingBlockComputedStyle = computedStyle;
        }
        currentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParentNode"])(currentNode);
    }
    cache.set(element, result);
    return result;
}
// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
    let { element, boundary, rootBoundary, strategy } = _ref;
    const elementClippingAncestors = boundary === 'clippingAncestors' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTopLayer"])(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [
        ...elementClippingAncestors,
        rootBoundary
    ];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor)=>{
        const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
        accRect.top = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"])(rect.top, accRect.top);
        accRect.right = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["min"])(rect.right, accRect.right);
        accRect.bottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["min"])(rect.bottom, accRect.bottom);
        accRect.left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"])(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
        width: clippingRect.right - clippingRect.left,
        height: clippingRect.bottom - clippingRect.top,
        x: clippingRect.left,
        y: clippingRect.top
    };
}
function getDimensions(element) {
    const { width, height } = getCssDimensions(element);
    return {
        width,
        height
    };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent);
    const documentElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocumentElement"])(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const offsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCoords"])(0);
    // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
    // Firefox with layout.scrollbar.side = 3 in about:config to test this.
    function setLeftRTLScrollbarOffset() {
        offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeName"])(offsetParent) !== 'body' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isOverflowElement"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeScroll"])(offsetParent);
        }
        if (isOffsetParentAnElement) {
            const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        } else if (documentElement) {
            setLeftRTLScrollbarOffset();
        }
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) {
        setLeftRTLScrollbarOffset();
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCoords"])(0);
    const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
        x,
        y,
        width: rect.width,
        height: rect.height
    };
}
function isStaticPositioned(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'static';
}
function getTrueOffsetParent(element, polyfill) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'fixed') {
        return null;
    }
    if (polyfill) {
        return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    // Firefox returns the <html> element as the offsetParent if it's non-static,
    // while Chrome and Safari return the <body> element. The <body> element must
    // be used to perform the correct calculations even if the <html> element is
    // non-static.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocumentElement"])(element) === rawOffsetParent) {
        rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
}
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWindow"])(element);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTopLayer"])(element)) {
        return win;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(element)) {
        let svgOffsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParentNode"])(element);
        while(svgOffsetParent && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(svgOffsetParent)){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElement"])(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
                return svgOffsetParent;
            }
            svgOffsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParentNode"])(svgOffsetParent);
        }
        return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while(offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTableElement"])(offsetParent) && isStaticPositioned(offsetParent)){
        offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(offsetParent) && isStaticPositioned(offsetParent) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isContainingBlock"])(offsetParent)) {
        return win;
    }
    return offsetParent || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContainingBlock"])(element) || win;
}
const getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
        reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
        floating: {
            x: 0,
            y: 0,
            width: floatingDimensions.width,
            height: floatingDimensions.height
        }
    };
};
function isRTL(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).direction === 'rtl';
}
const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocumentElement"],
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElement"],
    isRTL
};
function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    function cleanup() {
        var _io;
        clearTimeout(timeoutId);
        (_io = io) == null || _io.disconnect();
        io = null;
    }
    function refresh(skip, threshold) {
        if (skip === void 0) {
            skip = false;
        }
        if (threshold === void 0) {
            threshold = 1;
        }
        cleanup();
        const elementRectForRootMargin = element.getBoundingClientRect();
        const { left, top, width, height } = elementRectForRootMargin;
        if (!skip) {
            onMove();
        }
        if (!width || !height) {
            return;
        }
        const insetTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["floor"])(top);
        const insetRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["floor"])(root.clientWidth - (left + width));
        const insetBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["floor"])(root.clientHeight - (top + height));
        const insetLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["floor"])(left);
        const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
        const options = {
            rootMargin,
            threshold: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"])(0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["min"])(1, threshold)) || 1
        };
        let isFirstUpdate = true;
        function handleObserve(entries) {
            const ratio = entries[0].intersectionRatio;
            if (ratio !== threshold) {
                if (!isFirstUpdate) {
                    return refresh();
                }
                if (!ratio) {
                    // If the reference is clipped, the ratio is 0. Throttle the refresh
                    // to prevent an infinite loop of updates.
                    timeoutId = setTimeout(()=>{
                        refresh(false, 1e-7);
                    }, 1000);
                } else {
                    refresh(false, ratio);
                }
            }
            if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
                // It's possible that even though the ratio is reported as 1, the
                // element is not actually fully within the IntersectionObserver's root
                // area anymore. This can happen under performance constraints. This may
                // be a bug in the browser's IntersectionObserver implementation. To
                // work around this, we compare the element's bounding rect now with
                // what it was at the time we created the IntersectionObserver. If they
                // are not equal then the element moved, so we refresh.
                refresh();
            }
            isFirstUpdate = false;
        }
        // Older browsers don't support a `document` as the root and will throw an
        // error.
        try {
            io = new IntersectionObserver(handleObserve, {
                ...options,
                // Handle <iframe>s
                root: root.ownerDocument
            });
        } catch (_e) {
            io = new IntersectionObserver(handleObserve, options);
        }
        io.observe(element);
    }
    refresh(true);
    return cleanup;
}
/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */ function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
        options = {};
    }
    const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === 'function', layoutShift = typeof IntersectionObserver === 'function', animationFrame = false } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [
        ...referenceEl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(referenceEl) : [],
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(floating)
    ] : [];
    ancestors.forEach((ancestor)=>{
        ancestorScroll && ancestor.addEventListener('scroll', update, {
            passive: true
        });
        ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
        resizeObserver = new ResizeObserver((_ref)=>{
            let [firstEntry] = _ref;
            if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
                // Prevent update loops when using the `size` middleware.
                // https://github.com/floating-ui/floating-ui/issues/1740
                resizeObserver.unobserve(floating);
                cancelAnimationFrame(reobserveFrame);
                reobserveFrame = requestAnimationFrame(()=>{
                    var _resizeObserver;
                    (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
                });
            }
            update();
        });
        if (referenceEl && !animationFrame) {
            resizeObserver.observe(referenceEl);
        }
        resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
        frameLoop();
    }
    function frameLoop() {
        const nextRefRect = getBoundingClientRect(reference);
        if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
            update();
        }
        prevRefRect = nextRefRect;
        frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return ()=>{
        var _resizeObserver2;
        ancestors.forEach((ancestor)=>{
            ancestorScroll && ancestor.removeEventListener('scroll', update);
            ancestorResize && ancestor.removeEventListener('resize', update);
        });
        cleanupIo == null || cleanupIo();
        (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
        resizeObserver = null;
        if (animationFrame) {
            cancelAnimationFrame(frameId);
        }
    };
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ const detectOverflow = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectOverflow"];
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"];
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoPlacement"];
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"];
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"];
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"];
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"];
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"];
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"];
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"];
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */ const computePosition = (reference, floating, options)=>{
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
        platform,
        ...options
    };
    const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["computePosition"])(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
    });
};
;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "shift",
    ()=>shift,
    "size",
    ()=>size,
    "useFloating",
    ()=>useFloating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
;
;
;
;
;
var isClient = typeof document !== 'undefined';
var noop = function noop() {};
var index = isClient ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"] : noop;
// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (typeof a === 'function' && a.toString() === b.toString()) {
        return true;
    }
    let length;
    let i;
    let keys;
    if (a && b && typeof a === 'object') {
        if (Array.isArray(a)) {
            length = a.length;
            if (length !== b.length) return false;
            for(i = length; i-- !== 0;){
                if (!deepEqual(a[i], b[i])) {
                    return false;
                }
            }
            return true;
        }
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) {
            return false;
        }
        for(i = length; i-- !== 0;){
            if (!({}).hasOwnProperty.call(b, keys[i])) {
                return false;
            }
        }
        for(i = length; i-- !== 0;){
            const key = keys[i];
            if (key === '_owner' && a.$$typeof) {
                continue;
            }
            if (!deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }
    return a !== a && b !== b;
}
function getDPR(element) {
    if ("TURBOPACK compile-time truthy", 1) {
        return 1;
    }
    //TURBOPACK unreachable
    ;
    const win = undefined;
}
function roundByDPR(element, value) {
    const dpr = getDPR(element);
    return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](value);
    index(()=>{
        ref.current = value;
    });
    return ref;
}
/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/useFloating
 */ function useFloating(options) {
    if (options === void 0) {
        options = {};
    }
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform, elements: { reference: externalReference, floating: externalFloating } = {}, transform = true, whileElementsMounted, open } = options;
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({
        x: 0,
        y: 0,
        strategy,
        placement,
        middlewareData: {},
        isPositioned: false
    });
    const [latestMiddleware, setLatestMiddleware] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](middleware);
    if (!deepEqual(latestMiddleware, middleware)) {
        setLatestMiddleware(middleware);
    }
    const [_reference, _setReference] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [_floating, _setFloating] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const setReference = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node)=>{
        if (node !== referenceRef.current) {
            referenceRef.current = node;
            _setReference(node);
        }
    }, []);
    const setFloating = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node)=>{
        if (node !== floatingRef.current) {
            floatingRef.current = node;
            _setFloating(node);
        }
    }, []);
    const referenceEl = externalReference || _reference;
    const floatingEl = externalFloating || _floating;
    const referenceRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const floatingRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const dataRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](data);
    const hasWhileElementsMounted = whileElementsMounted != null;
    const whileElementsMountedRef = useLatestRef(whileElementsMounted);
    const platformRef = useLatestRef(platform);
    const openRef = useLatestRef(open);
    const update = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        if (!referenceRef.current || !floatingRef.current) {
            return;
        }
        const config = {
            placement,
            strategy,
            middleware: latestMiddleware
        };
        if (platformRef.current) {
            config.platform = platformRef.current;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["computePosition"])(referenceRef.current, floatingRef.current, config).then((data)=>{
            const fullData = {
                ...data,
                // The floating element's position may be recomputed while it's closed
                // but still mounted (such as when transitioning out). To ensure
                // `isPositioned` will be `false` initially on the next open, avoid
                // setting it to `true` when `open === false` (must be specified).
                isPositioned: openRef.current !== false
            };
            if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
                dataRef.current = fullData;
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"](()=>{
                    setData(fullData);
                });
            }
        });
    }, [
        latestMiddleware,
        placement,
        strategy,
        platformRef,
        openRef
    ]);
    index(()=>{
        if (open === false && dataRef.current.isPositioned) {
            dataRef.current.isPositioned = false;
            setData((data)=>({
                    ...data,
                    isPositioned: false
                }));
        }
    }, [
        open
    ]);
    const isMountedRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    index(()=>{
        isMountedRef.current = true;
        return ()=>{
            isMountedRef.current = false;
        };
    }, []);
    index(()=>{
        if (referenceEl) referenceRef.current = referenceEl;
        if (floatingEl) floatingRef.current = floatingEl;
        if (referenceEl && floatingEl) {
            if (whileElementsMountedRef.current) {
                return whileElementsMountedRef.current(referenceEl, floatingEl, update);
            }
            update();
        }
    }, [
        referenceEl,
        floatingEl,
        update,
        whileElementsMountedRef,
        hasWhileElementsMounted
    ]);
    const refs = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            reference: referenceRef,
            floating: floatingRef,
            setReference,
            setFloating
        }), [
        setReference,
        setFloating
    ]);
    const elements = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            reference: referenceEl,
            floating: floatingEl
        }), [
        referenceEl,
        floatingEl
    ]);
    const floatingStyles = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const initialStyles = {
            position: strategy,
            left: 0,
            top: 0
        };
        if (!elements.floating) {
            return initialStyles;
        }
        const x = roundByDPR(elements.floating, data.x);
        const y = roundByDPR(elements.floating, data.y);
        if (transform) {
            return {
                ...initialStyles,
                transform: "translate(" + x + "px, " + y + "px)",
                ...getDPR(elements.floating) >= 1.5 && {
                    willChange: 'transform'
                }
            };
        }
        return {
            position: strategy,
            left: x,
            top: y
        };
    }, [
        strategy,
        transform,
        elements.floating,
        data.x,
        data.y
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            ...data,
            update,
            refs,
            elements,
            floatingStyles
        }), [
        data,
        update,
        refs,
        elements,
        floatingStyles
    ]);
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow$1 = (options)=>{
    function isRef(value) {
        return ({}).hasOwnProperty.call(value, 'current');
    }
    return {
        name: 'arrow',
        options,
        fn (state) {
            const { element, padding } = typeof options === 'function' ? options(state) : options;
            if (element && isRef(element)) {
                if (element.current != null) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                        element: element.current,
                        padding
                    }).fn(state);
                }
                return {};
            }
            if (element) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                    element,
                    padding
                }).fn(state);
            }
            return {};
        }
    };
};
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoPlacement"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options, deps)=>({
        ...arrow$1(options),
        options: [
            options,
            deps
        ]
    });
;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-arrow/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/arrow/src/Arrow.tsx
__turbopack_context__.s([
    "Arrow",
    ()=>Arrow,
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
var NAME = "Arrow";
var Arrow = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, width = 10, height = 5, ...arrowProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].svg, {
        ...arrowProps,
        ref: forwardedRef,
        width,
        height,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: props.asChild ? children : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("polygon", {
            points: "0,0 30,0 15,10"
        })
    });
});
Arrow.displayName = NAME;
var Root = Arrow;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-size/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-size/src/useSize.tsx
__turbopack_context__.s([
    "useSize",
    ()=>useSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
;
;
function useSize(element) {
    const [size, setSize] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](void 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (element) {
            setSize({
                width: element.offsetWidth,
                height: element.offsetHeight
            });
            const resizeObserver = new ResizeObserver((entries)=>{
                if (!Array.isArray(entries)) {
                    return;
                }
                if (!entries.length) {
                    return;
                }
                const entry = entries[0];
                let width;
                let height;
                if ("borderBoxSize" in entry) {
                    const borderSizeEntry = entry["borderBoxSize"];
                    const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
                    width = borderSize["inlineSize"];
                    height = borderSize["blockSize"];
                } else {
                    width = element.offsetWidth;
                    height = element.offsetHeight;
                }
                setSize({
                    width,
                    height
                });
            });
            resizeObserver.observe(element, {
                box: "border-box"
            });
            return ()=>resizeObserver.unobserve(element);
        } else {
            setSize(void 0);
        }
    }, [
        element
    ]);
    return size;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-popper/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALIGN_OPTIONS",
    ()=>ALIGN_OPTIONS,
    "Anchor",
    ()=>Anchor,
    "Arrow",
    ()=>Arrow,
    "Content",
    ()=>Content,
    "Popper",
    ()=>Popper,
    "PopperAnchor",
    ()=>PopperAnchor,
    "PopperArrow",
    ()=>PopperArrow,
    "PopperContent",
    ()=>PopperContent,
    "Root",
    ()=>Root2,
    "SIDE_OPTIONS",
    ()=>SIDE_OPTIONS,
    "createPopperScope",
    ()=>createPopperScope
]);
// packages/react/popper/src/Popper.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$arrow$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-arrow/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-size/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
var SIDE_OPTIONS = [
    "top",
    "right",
    "bottom",
    "left"
];
var ALIGN_OPTIONS = [
    "start",
    "center",
    "end"
];
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = (props)=>{
    const { __scopePopper, children } = props;
    const [anchor, setAnchor] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PopperProvider, {
        scope: __scopePopper,
        anchor,
        onAnchorChange: setAnchor,
        children
    });
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const context = usePopperContext(ANCHOR_NAME, __scopePopper);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        context.onAnchorChange(virtualRef?.current || ref.current);
    });
    return virtualRef ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...anchorProps,
        ref: composedRefs
    });
});
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME);
var PopperContent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, updatePositionStrategy = "optimized", onPlaced, ...contentProps } = props;
    const context = usePopperContext(CONTENT_NAME, __scopePopper);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setContent(node));
    const [arrow, setArrow] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const arrowSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSize"])(arrow);
    const arrowWidth = arrowSize?.width ?? 0;
    const arrowHeight = arrowSize?.height ?? 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...collisionPaddingProp
    };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
        collisionBoundary
    ];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
        padding: collisionPadding,
        boundary: boundary.filter(isNotNull),
        // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
        altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])({
        // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
        strategy: "fixed",
        placement: desiredPlacement,
        whileElementsMounted: (...args)=>{
            const cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoUpdate"])(...args, {
                animationFrame: updatePositionStrategy === "always"
            });
            return cleanup;
        },
        elements: {
            reference: context.anchor
        },
        middleware: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])({
                mainAxis: sideOffset + arrowHeight,
                alignmentAxis: alignOffset
            }),
            avoidCollisions && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])({
                mainAxis: true,
                crossAxis: false,
                limiter: sticky === "partial" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"])() : void 0,
                ...detectOverflowOptions
            }),
            avoidCollisions && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])({
                ...detectOverflowOptions
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"])({
                ...detectOverflowOptions,
                apply: ({ elements, rects, availableWidth, availableHeight })=>{
                    const { width: anchorWidth, height: anchorHeight } = rects.reference;
                    const contentStyle = elements.floating.style;
                    contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
                    contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
                    contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
                    contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
                }
            }),
            arrow && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                element: arrow,
                padding: arrowPadding
            }),
            transformOrigin({
                arrowWidth,
                arrowHeight
            }),
            hideWhenDetached && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"])({
                strategy: "referenceHidden",
                ...detectOverflowOptions
            })
        ]
    });
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const handlePlaced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onPlaced);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (isPositioned) {
            handlePlaced?.();
        }
    }, [
        isPositioned,
        handlePlaced
    ]);
    const arrowX = middlewareData.arrow?.x;
    const arrowY = middlewareData.arrow?.y;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const [contentZIndex, setContentZIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [
        content
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...floatingStyles,
            transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
            // keep off the page when measuring
            minWidth: "max-content",
            zIndex: contentZIndex,
            ["--radix-popper-transform-origin"]: [
                middlewareData.transformOrigin?.x,
                middlewareData.transformOrigin?.y
            ].join(" "),
            // hide the content if using the hide middleware and should be hidden
            // set visibility to hidden and disable pointer events so the UI behaves
            // as if the PopperContent isn't there at all
            ...middlewareData.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: props.dir,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PopperContentProvider, {
            scope: __scopePopper,
            placedSide,
            onArrowChange: setArrow,
            arrowX,
            arrowY,
            shouldHideArrow: cannotCenterArrow,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
                "data-side": placedSide,
                "data-align": placedAlign,
                ...contentProps,
                ref: composedRefs,
                style: {
                    ...contentProps.style,
                    // if the PopperContent hasn't been placed yet (not all measurements done)
                    // we prevent animations so that users's animation don't kick in too early referring wrong sides
                    animation: !isPositioned ? "none" : void 0
                }
            })
        })
    });
});
PopperContent.displayName = CONTENT_NAME;
var ARROW_NAME = "PopperArrow";
var OPPOSITE_SIDE = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
};
var PopperArrow = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function PopperArrow2(props, forwardedRef) {
    const { __scopePopper, ...arrowProps } = props;
    const contentContext = useContentContext(ARROW_NAME, __scopePopper);
    const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
    return(// we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
        ref: contentContext.onArrowChange,
        style: {
            position: "absolute",
            left: contentContext.arrowX,
            top: contentContext.arrowY,
            [baseSide]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[contentContext.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: `rotate(180deg)`,
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[contentContext.placedSide],
            visibility: contentContext.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$arrow$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
            ...arrowProps,
            ref: forwardedRef,
            style: {
                ...arrowProps.style,
                // ensures the element can be measured correctly (mostly for if SVG)
                display: "block"
            }
        })
    }));
});
PopperArrow.displayName = ARROW_NAME;
function isNotNull(value) {
    return value !== null;
}
var transformOrigin = (options)=>({
        name: "transformOrigin",
        options,
        fn (data) {
            const { placement, rects, middlewareData } = data;
            const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
            const isArrowHidden = cannotCenterArrow;
            const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
            const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
            const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
            const noArrowAlign = {
                start: "0%",
                center: "50%",
                end: "100%"
            }[placedAlign];
            const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
            const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
            let x = "";
            let y = "";
            if (placedSide === "bottom") {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${-arrowHeight}px`;
            } else if (placedSide === "top") {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${rects.floating.height + arrowHeight}px`;
            } else if (placedSide === "right") {
                x = `${-arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            } else if (placedSide === "left") {
                x = `${rects.floating.width + arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            }
            return {
                data: {
                    x,
                    y
                }
            };
        }
    });
function getSideAndAlignFromPlacement(placement) {
    const [side, align = "center"] = placement.split("-");
    return [
        side,
        align
    ];
}
var Root2 = Popper;
var Anchor = PopperAnchor;
var Content = PopperContent;
var Arrow = PopperArrow;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-portal/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root
]);
// packages/react/portal/src/Portal.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
var PORTAL_NAME = "Portal";
var Portal = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { container: containerProp, ...portalProps } = props;
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>setMounted(true), []);
    const container = containerProp || mounted && globalThis?.document?.body;
    return container ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createPortal(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...portalProps,
        ref: forwardedRef
    }), container) : null;
});
Portal.displayName = PORTAL_NAME;
var Root = Portal;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Presence",
    ()=>Presence
]);
// packages/react/presence/src/Presence.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function useStateMachine(initialState, machine) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"]((state, event)=>{
        const nextState = machine[state][event];
        return nextState ?? state;
    }, initialState);
}
// packages/react/presence/src/Presence.tsx
var Presence = (props)=>{
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({
        present: presence.isPresent
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(presence.ref, getElementRef(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](child, {
        ref
    }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const stylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]({});
    const prevPresentRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](present);
    const prevAnimationNameRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const currentAnimationName = getAnimationName(stylesRef.current);
        prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
    }, [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const styles = stylesRef.current;
        const wasPresent = prevPresentRef.current;
        const hasPresentChanged = wasPresent !== present;
        if (hasPresentChanged) {
            const prevAnimationName = prevAnimationNameRef.current;
            const currentAnimationName = getAnimationName(styles);
            if (present) {
                send("MOUNT");
            } else if (currentAnimationName === "none" || styles?.display === "none") {
                send("UNMOUNT");
            } else {
                const isAnimating = prevAnimationName !== currentAnimationName;
                if (wasPresent && isAnimating) {
                    send("ANIMATION_OUT");
                } else {
                    send("UNMOUNT");
                }
            }
            prevPresentRef.current = present;
        }
    }, [
        present,
        send
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (node) {
            let timeoutId;
            const ownerWindow = node.ownerDocument.defaultView ?? window;
            const handleAnimationEnd = (event)=>{
                const currentAnimationName = getAnimationName(stylesRef.current);
                const isCurrentAnimation = currentAnimationName.includes(event.animationName);
                if (event.target === node && isCurrentAnimation) {
                    send("ANIMATION_END");
                    if (!prevPresentRef.current) {
                        const currentFillMode = node.style.animationFillMode;
                        node.style.animationFillMode = "forwards";
                        timeoutId = ownerWindow.setTimeout(()=>{
                            if (node.style.animationFillMode === "forwards") {
                                node.style.animationFillMode = currentFillMode;
                            }
                        });
                    }
                }
            };
            const handleAnimationStart = (event)=>{
                if (event.target === node) {
                    prevAnimationNameRef.current = getAnimationName(stylesRef.current);
                }
            };
            node.addEventListener("animationstart", handleAnimationStart);
            node.addEventListener("animationcancel", handleAnimationEnd);
            node.addEventListener("animationend", handleAnimationEnd);
            return ()=>{
                ownerWindow.clearTimeout(timeoutId);
                node.removeEventListener("animationstart", handleAnimationStart);
                node.removeEventListener("animationcancel", handleAnimationEnd);
                node.removeEventListener("animationend", handleAnimationEnd);
            };
        } else {
            send("ANIMATION_END");
        }
    }, [
        node,
        send
    ]);
    return {
        isPresent: [
            "mounted",
            "unmountSuspended"
        ].includes(state),
        ref: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node2)=>{
            if (node2) stylesRef.current = getComputedStyle(node2);
            setNode(node2);
        }, [])
    };
}
function getAnimationName(styles) {
    return styles?.animationName || "none";
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-roving-focus/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Item",
    ()=>Item,
    "Root",
    ()=>Root,
    "RovingFocusGroup",
    ()=>RovingFocusGroup,
    "RovingFocusGroupItem",
    ()=>RovingFocusGroupItem,
    "createRovingFocusGroupScope",
    ()=>createRovingFocusGroupScope
]);
// packages/react/roving-focus/src/RovingFocusGroup.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-collection/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
;
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCollection"])(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(GROUP_NAME, [
    createCollectionScope
]);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
        scope: props.__scopeRovingFocusGroup,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
            scope: props.__scopeRovingFocusGroup,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RovingFocusGroupImpl, {
                ...props,
                ref: forwardedRef
            })
        })
    });
});
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, preventScrollOnEntryFocus = false, ...groupProps } = props;
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    const [currentTabStopId = null, setCurrentTabStopId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: currentTabStopIdProp,
        defaultProp: defaultCurrentTabStopId,
        onChange: onCurrentTabStopIdChange
    });
    const [isTabbingBackOut, setIsTabbingBackOut] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const handleEntryFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onEntryFocus);
    const getItems = useCollection(__scopeRovingFocusGroup);
    const isClickFocusRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const [focusableItemsCount, setFocusableItemsCount] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const node = ref.current;
        if (node) {
            node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
            return ()=>node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
        }
    }, [
        handleEntryFocus
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RovingFocusProvider, {
        scope: __scopeRovingFocusGroup,
        orientation,
        dir: direction,
        loop,
        currentTabStopId,
        onItemFocus: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((tabStopId)=>setCurrentTabStopId(tabStopId), [
            setCurrentTabStopId
        ]),
        onItemShiftTab: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setIsTabbingBackOut(true), []),
        onFocusableItemAdd: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setFocusableItemsCount((prevCount)=>prevCount + 1), []),
        onFocusableItemRemove: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setFocusableItemsCount((prevCount)=>prevCount - 1), []),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
            "data-orientation": orientation,
            ...groupProps,
            ref: composedRefs,
            style: {
                outline: "none",
                ...props.style
            },
            onMouseDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onMouseDown, ()=>{
                isClickFocusRef.current = true;
            }),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, (event)=>{
                const isKeyboardFocus = !isClickFocusRef.current;
                if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
                    const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
                    event.currentTarget.dispatchEvent(entryFocusEvent);
                    if (!entryFocusEvent.defaultPrevented) {
                        const items = getItems().filter((item)=>item.focusable);
                        const activeItem = items.find((item)=>item.active);
                        const currentItem = items.find((item)=>item.id === currentTabStopId);
                        const candidateItems = [
                            activeItem,
                            currentItem,
                            ...items
                        ].filter(Boolean);
                        const candidateNodes = candidateItems.map((item)=>item.ref.current);
                        focusFirst(candidateNodes, preventScrollOnEntryFocus);
                    }
                }
                isClickFocusRef.current = false;
            }),
            onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlur, ()=>setIsTabbingBackOut(false))
        })
    });
});
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, ...itemProps } = props;
    const autoId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove } = context;
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (focusable) {
            onFocusableItemAdd();
            return ()=>onFocusableItemRemove();
        }
    }, [
        focusable,
        onFocusableItemAdd,
        onFocusableItemRemove
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.ItemSlot, {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onMouseDown, (event)=>{
                if (!focusable) event.preventDefault();
                else context.onItemFocus(id);
            }),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, ()=>context.onItemFocus(id)),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                if (event.key === "Tab" && event.shiftKey) {
                    context.onItemShiftTab();
                    return;
                }
                if (event.target !== event.currentTarget) return;
                const focusIntent = getFocusIntent(event, context.orientation, context.dir);
                if (focusIntent !== void 0) {
                    if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                    event.preventDefault();
                    const items = getItems().filter((item)=>item.focusable);
                    let candidateNodes = items.map((item)=>item.ref.current);
                    if (focusIntent === "last") candidateNodes.reverse();
                    else if (focusIntent === "prev" || focusIntent === "next") {
                        if (focusIntent === "prev") candidateNodes.reverse();
                        const currentIndex = candidateNodes.indexOf(event.currentTarget);
                        candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                    }
                    setTimeout(()=>focusFirst(candidateNodes));
                }
            })
        })
    });
});
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function getDirectionAwareKey(key, dir) {
    if (dir !== "rtl") return key;
    return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
    const key = getDirectionAwareKey(event.key, dir);
    if (orientation === "vertical" && [
        "ArrowLeft",
        "ArrowRight"
    ].includes(key)) return void 0;
    if (orientation === "horizontal" && [
        "ArrowUp",
        "ArrowDown"
    ].includes(key)) return void 0;
    return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst(candidates, preventScroll = false) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus({
            preventScroll
        });
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
function wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]);
}
var Root = RovingFocusGroup;
var Item = RovingFocusGroupItem;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/aria-hidden/dist/es2015/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hideOthers",
    ()=>hideOthers,
    "inertOthers",
    ()=>inertOthers,
    "supportsInert",
    ()=>supportsInert,
    "suppressOthers",
    ()=>suppressOthers
]);
var getDefaultParent = function(originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
    return targets.map(function(target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    }).filter(function(x) {
        return Boolean(x);
    });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */ var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function(el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function(parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            } else {
                try {
                    var attr = node.getAttribute(controlAttribute);
                    var alreadyHidden = attr !== null && attr !== 'false';
                    var counterValue = (counterMap.get(node) || 0) + 1;
                    var markerValue = (markerCounter.get(node) || 0) + 1;
                    counterMap.set(node, counterValue);
                    markerCounter.set(node, markerValue);
                    hiddenNodes.push(node);
                    if (counterValue === 1 && alreadyHidden) {
                        uncontrolledNodes.set(node, true);
                    }
                    if (markerValue === 1) {
                        node.setAttribute(markerName, 'true');
                    }
                    if (!alreadyHidden) {
                        node.setAttribute(controlAttribute, 'true');
                    }
                } catch (e) {
                    console.error('aria-hidden: cannot operate on ', node, e);
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function() {
        hiddenNodes.forEach(function(node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-aria-hidden';
    }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    // we should not hide aria-live elements - https://github.com/theKashey/aria-hidden/issues/10
    // and script elements, as they have no impact on accessibility.
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live], script')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};
var inertOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-inert-ed';
    }
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');
};
var supportsInert = function() {
    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');
};
var suppressOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-suppressed';
    }
    return (supportsInert() ? inertOthers : hideOthers)(originalTarget, parentNode, markerName);
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullWidthClassName",
    ()=>fullWidthClassName,
    "noScrollbarsClassName",
    ()=>noScrollbarsClassName,
    "removedBarSizeVariable",
    ()=>removedBarSizeVariable,
    "zeroRightClassName",
    ()=>zeroRightClassName
]);
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
var removedBarSizeVariable = '--removed-body-scroll-bar-size';
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGapWidth",
    ()=>getGapWidth,
    "zeroGap",
    ()=>zeroGap
]);
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
};
var parse = function(x) {
    return parseInt(x || '', 10) || 0;
};
var getOffset = function(gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right)
    ];
};
var getGapWidth = function(gapMode) {
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    if ("TURBOPACK compile-time truthy", 1) {
        return zeroGap;
    }
    //TURBOPACK unreachable
    ;
    var offsets;
    var documentWidth;
    var windowWidth;
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollBar",
    ()=>RemoveScrollBar,
    "lockAttribute",
    ()=>lockAttribute,
    "useLockAttribute",
    ()=>useLockAttribute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)");
;
;
;
;
var Style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleSingleton"])();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function(_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    return "\n  .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noScrollbarsClassName"], " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";")
    ].filter(Boolean).join(''), "\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removedBarSizeVariable"], ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
        return function() {
            var newCounter = getCurrentUseCounter() - 1;
            if (newCounter <= 0) {
                document.body.removeAttribute(lockAttribute);
            } else {
                document.body.setAttribute(lockAttribute, newCounter.toString());
            }
        };
    }, []);
};
var RemoveScrollBar = function(_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */ var gap = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGapWidth"])(gapMode);
    }, [
        gapMode
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '')
    });
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */ __turbopack_context__.s([
    "assignRef",
    ()=>assignRef
]);
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
    return ref;
}
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/use-callback-ref/dist/es2015/useRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useCallbackRef(initialValue, callback) {
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(function() {
        return {
            // value
            value: initialValue,
            // last callback
            callback: callback,
            // "memoized" public interface
            facade: {
                get current () {
                    return ref.value;
                },
                set current (value){
                    var last = ref.value;
                    if (last !== value) {
                        ref.value = value;
                        ref.callback(value, last);
                    }
                }
            }
        };
    })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMergeRefs",
    ()=>useMergeRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/use-callback-ref/dist/es2015/useRef.js [app-ssr] (ecmascript)");
;
;
;
var useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
var currentValues = new WeakMap();
function useMergeRefs(refs, defaultValue) {
    var callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(defaultValue || null, function(newValue) {
        return refs.forEach(function(ref) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, newValue);
        });
    });
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect(function() {
        var oldValue = currentValues.get(callbackRef);
        if (oldValue) {
            var prevRefs_1 = new Set(oldValue);
            var nextRefs_1 = new Set(refs);
            var current_1 = callbackRef.current;
            prevRefs_1.forEach(function(ref) {
                if (!nextRefs_1.has(ref)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, null);
                }
            });
            nextRefs_1.forEach(function(ref) {
                if (!prevRefs_1.has(ref)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, current_1);
                }
            });
        }
        currentValues.set(callbackRef, refs);
    }, [
        refs
    ]);
    return callbackRef;
}
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/use-sidecar/dist/es2015/medium.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMedium",
    ()=>createMedium,
    "createSidecarMedium",
    ()=>createSidecarMedium
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
;
function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function() {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function(data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function() {
                buffer = buffer.filter(function(x) {
                    return x !== item;
                });
            };
        },
        assignSyncMedium: function(cb) {
            assigned = true;
            while(buffer.length){
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function(x) {
                    return cb(x);
                },
                filter: function() {
                    return buffer;
                }
            };
        },
        assignMedium: function(cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function() {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function() {
                return Promise.resolve().then(executeQueue);
            };
            cycle();
            buffer = {
                push: function(x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function(filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                }
            };
        }
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) {
        options = {};
    }
    var medium = innerCreateMedium(null);
    medium.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({
        async: true,
        ssr: false
    }, options);
    return medium;
}
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/use-sidecar/dist/es2015/exports.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportSidecar",
    ()=>exportSidecar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
var SideCar = function(_a) {
    var sideCar = _a.sideCar, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "sideCar"
    ]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Target, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "effectCar",
    ()=>effectCar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/use-sidecar/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
var effectCar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSidecarMedium"])();
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/UI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>RemoveScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
;
;
;
;
var nothing = function() {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */ var RemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function(props, parentRef) {
    var ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(props, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode"
    ]);
    var SideCar = sideCar;
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergeRefs"])([
        ref,
        parentRef
    ]);
    var containerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, rest), callbacks);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, enabled && __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](SideCar, {
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effectCar"],
        removeScrollBar: removeScrollBar,
        shards: shards,
        noRelative: noRelative,
        noIsolation: noIsolation,
        inert: inert,
        setCallbacks: setCallbacks,
        allowPinchZoom: !!allowPinchZoom,
        lockRef: ref,
        gapMode: gapMode
    }), forwardProps ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps), {
        ref: containerRef
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps, {
        className: className,
        ref: containerRef
    }), children));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"],
    zeroRight: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"]
};
;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonPassive",
    ()=>nonPassive
]);
var passiveSupported = false;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
{
    var options;
}
var nonPassive = passiveSupported ? {
    passive: false
} : false;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleScroll",
    ()=>handleScroll,
    "locationCouldBeScrolled",
    ()=>locationCouldBeScrolled
]);
var alwaysContainsScroll = function(node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function(node, overflow) {
    if (!(node instanceof Element)) {
        return false;
    }
    var styles = window.getComputedStyle(node);
    return(// not-not-scrollable
    styles[overflow] !== 'hidden' && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowY');
};
var elementCouldBeHScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowX');
};
var locationCouldBeScrolled = function(axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
            if (scrollHeight > clientHeight) {
                return true;
            }
        }
        current = current.parentNode;
    }while (current && current !== ownerDocument.body)
    return false;
};
var getVScrollVariables = function(_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight
    ];
};
var getHScrollVariables = function(_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth
    ];
};
var elementCouldBeScrolled = function(axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */ return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        if (!target) {
            break;
        }
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        var parent_1 = target.parentNode;
        // we will "bubble" from ShadowDom in case we are, or just to the parent in normal case
        // this is the same logic used in focus-lock
        target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
    }while (// portaled content
    !targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target))
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
    } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollSideCar",
    ()=>RemoveScrollSideCar,
    "getDeltaXY",
    ()=>getDeltaXY,
    "getTouchXY",
    ()=>getTouchXY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var getTouchXY = function(event) {
    return 'changedTouches' in event ? [
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY
    ] : [
        0,
        0
    ];
};
var getDeltaXY = function(event) {
    return [
        event.deltaX,
        event.deltaY
    ];
};
var extractRef = function(ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
    return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([]);
    var touchStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([
        0,
        0
    ]);
    var activeAxis = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]();
    var id = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](idCounter++)[0];
    var Style = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleSingleton"])[0];
    var lastProps = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](props);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        lastProps.current = props;
    }, [
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
                props.lockRef.current
            ], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function(el) {
                return el.classList.add("allow-interactivity-".concat(id));
            });
            return function() {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function(el) {
                    return el.classList.remove("allow-interactivity-".concat(id));
                });
            };
        }
        return;
    }, [
        props.inert,
        props.lockRef.current,
        props.shards
    ]);
    var shouldCancelEvent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event, parent) {
        if ('touches' in event && event.touches.length === 2 || event.type === 'wheel' && event.ctrlKey) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        // allow drag selection (iOS); check if selection's anchorNode is the same as target or contains target
        var selection = window.getSelection();
        var anchorNode = selection && selection.anchorNode;
        var isTouchingSelection = anchorNode ? anchorNode === target || anchorNode.contains(target) : false;
        if (isTouchingSelection) {
            return false;
        }
        var canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        } else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
        // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleScroll"])(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function(e) {
            return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
        })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
                return node.contains(event.target);
            });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(name, delta, target, should) {
        var event = {
            name: name,
            delta: delta,
            target: target,
            should: should,
            shadowParent: getOutermostShadowParent(target)
        };
        shouldPreventQueue.current.push(event);
        setTimeout(function() {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
                return e !== event;
            });
        }, 1);
    }, []);
    var scrollTouchStart = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        document.addEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        document.addEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        return function() {
            lockStack = lockStack.filter(function(inst) {
                return inst !== Style;
            });
            document.removeEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.removeEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.removeEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, inert ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: generateStyle(id)
    }) : null, removeScrollBar ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScrollBar"], {
        noRelative: props.noRelative,
        gapMode: props.gapMode
    }) : null);
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while(node !== null){
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/use-sidecar/dist/es2015/exports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportSidecar"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effectCar"], __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScrollSideCar"]);
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/UI.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-ssr] (ecmascript)");
;
;
;
;
var ReactRemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScroll"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, props, {
        ref: ref,
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
});
ReactRemoveScroll.classNames = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScroll"].classNames;
const __TURBOPACK__default__export__ = ReactRemoveScroll;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript) <export default as RemoveScroll>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/get-nonce/dist/es2015/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNonce",
    ()=>getNonce,
    "setNonce",
    ()=>setNonce
]);
var currentNonce;
var setNonce = function(nonce) {
    currentNonce = nonce;
};
var getNonce = function() {
    if (currentNonce) {
        return currentNonce;
    }
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stylesheetSingleton",
    ()=>stylesheetSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/get-nonce/dist/es2015/index.js [app-ssr] (ecmascript)");
;
function makeStyleTag() {
    if (!document) return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNonce"])();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    } else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function() {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function(style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function() {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleHookSingleton",
    ()=>styleHookSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)");
;
;
var styleHookSingleton = function() {
    var sheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stylesheetSingleton"])();
    return function(styles, isDynamic) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
            sheet.add(styles);
            return function() {
                sheet.remove();
            };
        }, [
            styles && isDynamic
        ]);
    };
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleSingleton",
    ()=>styleSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)");
;
var styleSingleton = function() {
    var useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleHookSingleton"])();
    var Sheet = function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-menu/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Anchor",
    ()=>Anchor2,
    "Arrow",
    ()=>Arrow2,
    "CheckboxItem",
    ()=>CheckboxItem,
    "Content",
    ()=>Content2,
    "Group",
    ()=>Group,
    "Item",
    ()=>Item2,
    "ItemIndicator",
    ()=>ItemIndicator,
    "Label",
    ()=>Label,
    "Menu",
    ()=>Menu,
    "MenuAnchor",
    ()=>MenuAnchor,
    "MenuArrow",
    ()=>MenuArrow,
    "MenuCheckboxItem",
    ()=>MenuCheckboxItem,
    "MenuContent",
    ()=>MenuContent,
    "MenuGroup",
    ()=>MenuGroup,
    "MenuItem",
    ()=>MenuItem,
    "MenuItemIndicator",
    ()=>MenuItemIndicator,
    "MenuLabel",
    ()=>MenuLabel,
    "MenuPortal",
    ()=>MenuPortal,
    "MenuRadioGroup",
    ()=>MenuRadioGroup,
    "MenuRadioItem",
    ()=>MenuRadioItem,
    "MenuSeparator",
    ()=>MenuSeparator,
    "MenuSub",
    ()=>MenuSub,
    "MenuSubContent",
    ()=>MenuSubContent,
    "MenuSubTrigger",
    ()=>MenuSubTrigger,
    "Portal",
    ()=>Portal,
    "RadioGroup",
    ()=>RadioGroup,
    "RadioItem",
    ()=>RadioItem,
    "Root",
    ()=>Root3,
    "Separator",
    ()=>Separator,
    "Sub",
    ()=>Sub,
    "SubContent",
    ()=>SubContent,
    "SubTrigger",
    ()=>SubTrigger,
    "createMenuScope",
    ()=>createMenuScope
]);
// packages/react/menu/src/Menu.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-collection/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-popper/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-portal/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-roving-focus/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/aria-hidden/dist/es2015/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
;
;
var SELECTION_KEYS = [
    "Enter",
    " "
];
var FIRST_KEYS = [
    "ArrowDown",
    "PageUp",
    "Home"
];
var LAST_KEYS = [
    "ArrowUp",
    "PageDown",
    "End"
];
var FIRST_LAST_KEYS = [
    ...FIRST_KEYS,
    ...LAST_KEYS
];
var SUB_OPEN_KEYS = {
    ltr: [
        ...SELECTION_KEYS,
        "ArrowRight"
    ],
    rtl: [
        ...SELECTION_KEYS,
        "ArrowLeft"
    ]
};
var SUB_CLOSE_KEYS = {
    ltr: [
        "ArrowLeft"
    ],
    rtl: [
        "ArrowRight"
    ]
};
var MENU_NAME = "Menu";
var [Collection, useCollection, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCollection"])(MENU_NAME);
var [createMenuContext, createMenuScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(MENU_NAME, [
    createCollectionScope,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPopperScope"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRovingFocusGroupScope"]
]);
var usePopperScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPopperScope"])();
var useRovingFocusGroupScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRovingFocusGroupScope"])();
var [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME);
var [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME);
var Menu = (props)=>{
    const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
    const popperScope = usePopperScope(__scopeMenu);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const isUsingKeyboardRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const handleOpenChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onOpenChange);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleKeyDown = ()=>{
            isUsingKeyboardRef.current = true;
            document.addEventListener("pointerdown", handlePointer, {
                capture: true,
                once: true
            });
            document.addEventListener("pointermove", handlePointer, {
                capture: true,
                once: true
            });
        };
        const handlePointer = ()=>isUsingKeyboardRef.current = false;
        document.addEventListener("keydown", handleKeyDown, {
            capture: true
        });
        return ()=>{
            document.removeEventListener("keydown", handleKeyDown, {
                capture: true
            });
            document.removeEventListener("pointerdown", handlePointer, {
                capture: true
            });
            document.removeEventListener("pointermove", handlePointer, {
                capture: true
            });
        };
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuProvider, {
            scope: __scopeMenu,
            open,
            onOpenChange: handleOpenChange,
            content,
            onContentChange: setContent,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuRootProvider, {
                scope: __scopeMenu,
                onClose: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>handleOpenChange(false), [
                    handleOpenChange
                ]),
                isUsingKeyboardRef,
                dir: direction,
                modal,
                children
            })
        })
    });
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME = "MenuAnchor";
var MenuAnchor = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, ...anchorProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Anchor"], {
        ...popperScope,
        ...anchorProps,
        ref: forwardedRef
    });
});
MenuAnchor.displayName = ANCHOR_NAME;
var PORTAL_NAME = "MenuPortal";
var [PortalProvider, usePortalContext] = createMenuContext(PORTAL_NAME, {
    forceMount: void 0
});
var MenuPortal = (props)=>{
    const { __scopeMenu, forceMount, children, container } = props;
    const context = useMenuContext(PORTAL_NAME, __scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PortalProvider, {
        scope: __scopeMenu,
        forceMount,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
                asChild: true,
                container,
                children
            })
        })
    });
};
MenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "MenuContent";
var [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME);
var MenuContent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, props.__scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
        scope: props.__scopeMenu,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
                scope: props.__scopeMenu,
                children: rootContext.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuRootContentModal, {
                    ...contentProps,
                    ref: forwardedRef
                }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuRootContentNonModal, {
                    ...contentProps,
                    ref: forwardedRef
                })
            })
        })
    });
});
var MenuRootContentModal = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const content = ref.current;
        if (content) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hideOthers"])(content);
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuContentImpl, {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: context.open,
        disableOutsideScroll: true,
        onFocusOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusOutside, (event)=>event.preventDefault(), {
            checkForDefaultPrevented: false
        }),
        onDismiss: ()=>context.onOpenChange(false)
    });
});
var MenuRootContentNonModal = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuContentImpl, {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        onDismiss: ()=>context.onOpenChange(false)
    });
});
var MenuContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, loop = false, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEntryFocus, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, disableOutsideScroll, ...contentProps } = props;
    const context = useMenuContext(CONTENT_NAME, __scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, __scopeMenu);
    const popperScope = usePopperScope(__scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const getItems = useCollection(__scopeMenu);
    const [currentItemId, setCurrentItemId] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, contentRef, context.onContentChange);
    const timerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const searchRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("");
    const pointerGraceTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const pointerGraceIntentRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const pointerDirRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("right");
    const lastPointerXRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const ScrollLockWrapper = disableOutsideScroll ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"];
    const scrollLockWrapperProps = disableOutsideScroll ? {
        as: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"],
        allowPinchZoom: true
    } : void 0;
    const handleTypeaheadSearch = (key)=>{
        const search = searchRef.current + key;
        const items = getItems().filter((item)=>!item.disabled);
        const currentItem = document.activeElement;
        const currentMatch = items.find((item)=>item.ref.current === currentItem)?.textValue;
        const values = items.map((item)=>item.textValue);
        const nextMatch = getNextMatch(values, search, currentMatch);
        const newItem = items.find((item)=>item.textValue === nextMatch)?.ref.current;
        (function updateSearch(value) {
            searchRef.current = value;
            window.clearTimeout(timerRef.current);
            if (value !== "") timerRef.current = window.setTimeout(()=>updateSearch(""), 1e3);
        })(search);
        if (newItem) {
            setTimeout(()=>newItem.focus());
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return ()=>window.clearTimeout(timerRef.current);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusGuards"])();
    const isPointerMovingToSubmenu = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((event)=>{
        const isMovingTowards = pointerDirRef.current === pointerGraceIntentRef.current?.side;
        return isMovingTowards && isPointerInGraceArea(event, pointerGraceIntentRef.current?.area);
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuContentProvider, {
        scope: __scopeMenu,
        searchRef,
        onItemEnter: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((event)=>{
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
        }, [
            isPointerMovingToSubmenu
        ]),
        onItemLeave: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((event)=>{
            if (isPointerMovingToSubmenu(event)) return;
            contentRef.current?.focus();
            setCurrentItemId(null);
        }, [
            isPointerMovingToSubmenu
        ]),
        onTriggerLeave: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((event)=>{
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
        }, [
            isPointerMovingToSubmenu
        ]),
        pointerGraceTimerRef,
        onPointerGraceIntentChange: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((intent)=>{
            pointerGraceIntentRef.current = intent;
        }, []),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollLockWrapper, {
            ...scrollLockWrapperProps,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FocusScope"], {
                asChild: true,
                trapped: trapFocus,
                onMountAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onOpenAutoFocus, (event)=>{
                    event.preventDefault();
                    contentRef.current?.focus({
                        preventScroll: true
                    });
                }),
                onUnmountAutoFocus: onCloseAutoFocus,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DismissableLayer"], {
                    asChild: true,
                    disableOutsidePointerEvents,
                    onEscapeKeyDown,
                    onPointerDownOutside,
                    onFocusOutside,
                    onInteractOutside,
                    onDismiss,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
                        asChild: true,
                        ...rovingFocusGroupScope,
                        dir: rootContext.dir,
                        orientation: "vertical",
                        loop,
                        currentTabStopId: currentItemId,
                        onCurrentTabStopIdChange: setCurrentItemId,
                        onEntryFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onEntryFocus, (event)=>{
                            if (!rootContext.isUsingKeyboardRef.current) event.preventDefault();
                        }),
                        preventScrollOnEntryFocus: true,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                            role: "menu",
                            "aria-orientation": "vertical",
                            "data-state": getOpenState(context.open),
                            "data-radix-menu-content": "",
                            dir: rootContext.dir,
                            ...popperScope,
                            ...contentProps,
                            ref: composedRefs,
                            style: {
                                outline: "none",
                                ...contentProps.style
                            },
                            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(contentProps.onKeyDown, (event)=>{
                                const target = event.target;
                                const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
                                const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                                const isCharacterKey = event.key.length === 1;
                                if (isKeyDownInside) {
                                    if (event.key === "Tab") event.preventDefault();
                                    if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key);
                                }
                                const content = contentRef.current;
                                if (event.target !== content) return;
                                if (!FIRST_LAST_KEYS.includes(event.key)) return;
                                event.preventDefault();
                                const items = getItems().filter((item)=>!item.disabled);
                                const candidateNodes = items.map((item)=>item.ref.current);
                                if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
                                focusFirst(candidateNodes);
                            }),
                            onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlur, (event)=>{
                                if (!event.currentTarget.contains(event.target)) {
                                    window.clearTimeout(timerRef.current);
                                    searchRef.current = "";
                                }
                            }),
                            onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, whenMouse((event)=>{
                                const target = event.target;
                                const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
                                if (event.currentTarget.contains(target) && pointerXHasChanged) {
                                    const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
                                    pointerDirRef.current = newDir;
                                    lastPointerXRef.current = event.clientX;
                                }
                            }))
                        })
                    })
                })
            })
        })
    });
});
MenuContent.displayName = CONTENT_NAME;
var GROUP_NAME = "MenuGroup";
var MenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, ...groupProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        role: "group",
        ...groupProps,
        ref: forwardedRef
    });
});
MenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "MenuLabel";
var MenuLabel = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, ...labelProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...labelProps,
        ref: forwardedRef
    });
});
MenuLabel.displayName = LABEL_NAME;
var ITEM_NAME = "MenuItem";
var ITEM_SELECT = "menu.itemSelect";
var MenuItem = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { disabled = false, onSelect, ...itemProps } = props;
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const rootContext = useMenuRootContext(ITEM_NAME, props.__scopeMenu);
    const contentContext = useMenuContentContext(ITEM_NAME, props.__scopeMenu);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const isPointerDownRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const handleSelect = ()=>{
        const menuItem = ref.current;
        if (!disabled && menuItem) {
            const itemSelectEvent = new CustomEvent(ITEM_SELECT, {
                bubbles: true,
                cancelable: true
            });
            menuItem.addEventListener(ITEM_SELECT, (event)=>onSelect?.(event), {
                once: true
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchDiscreteCustomEvent"])(menuItem, itemSelectEvent);
            if (itemSelectEvent.defaultPrevented) {
                isPointerDownRef.current = false;
            } else {
                rootContext.onClose();
            }
        }
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuItemImpl, {
        ...itemProps,
        ref: composedRefs,
        disabled,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, handleSelect),
        onPointerDown: (event)=>{
            props.onPointerDown?.(event);
            isPointerDownRef.current = true;
        },
        onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerUp, (event)=>{
            if (!isPointerDownRef.current) event.currentTarget?.click();
        }),
        onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
            const isTypingAhead = contentContext.searchRef.current !== "";
            if (disabled || isTypingAhead && event.key === " ") return;
            if (SELECTION_KEYS.includes(event.key)) {
                event.currentTarget.click();
                event.preventDefault();
            }
        })
    });
});
MenuItem.displayName = ITEM_NAME;
var MenuItemImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
    const contentContext = useMenuContentContext(ITEM_NAME, __scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const [isFocused, setIsFocused] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [textContent, setTextContent] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("");
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const menuItem = ref.current;
        if (menuItem) {
            setTextContent((menuItem.textContent ?? "").trim());
        }
    }, [
        itemProps.children
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.ItemSlot, {
        scope: __scopeMenu,
        disabled,
        textValue: textValue ?? textContent,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
            asChild: true,
            ...rovingFocusGroupScope,
            focusable: !disabled,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
                role: "menuitem",
                "data-highlighted": isFocused ? "" : void 0,
                "aria-disabled": disabled || void 0,
                "data-disabled": disabled ? "" : void 0,
                ...itemProps,
                ref: composedRefs,
                onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, whenMouse((event)=>{
                    if (disabled) {
                        contentContext.onItemLeave(event);
                    } else {
                        contentContext.onItemEnter(event);
                        if (!event.defaultPrevented) {
                            const item = event.currentTarget;
                            item.focus({
                                preventScroll: true
                            });
                        }
                    }
                })),
                onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, whenMouse((event)=>contentContext.onItemLeave(event))),
                onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, ()=>setIsFocused(true)),
                onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlur, ()=>setIsFocused(false))
            })
        })
    });
});
var CHECKBOX_ITEM_NAME = "MenuCheckboxItem";
var MenuCheckboxItem = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ItemIndicatorProvider, {
        scope: props.__scopeMenu,
        checked,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuItem, {
            role: "menuitemcheckbox",
            "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
            ...checkboxItemProps,
            ref: forwardedRef,
            "data-state": getCheckedState(checked),
            onSelect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(checkboxItemProps.onSelect, ()=>onCheckedChange?.(isIndeterminate(checked) ? true : !checked), {
                checkForDefaultPrevented: false
            })
        })
    });
});
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "MenuRadioGroup";
var [RadioGroupProvider, useRadioGroupContext] = createMenuContext(RADIO_GROUP_NAME, {
    value: void 0,
    onValueChange: ()=>{}
});
var MenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { value, onValueChange, ...groupProps } = props;
    const handleValueChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onValueChange);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RadioGroupProvider, {
        scope: props.__scopeMenu,
        value,
        onValueChange: handleValueChange,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuGroup, {
            ...groupProps,
            ref: forwardedRef
        })
    });
});
MenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "MenuRadioItem";
var MenuRadioItem = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { value, ...radioItemProps } = props;
    const context = useRadioGroupContext(RADIO_ITEM_NAME, props.__scopeMenu);
    const checked = value === context.value;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ItemIndicatorProvider, {
        scope: props.__scopeMenu,
        checked,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuItem, {
            role: "menuitemradio",
            "aria-checked": checked,
            ...radioItemProps,
            ref: forwardedRef,
            "data-state": getCheckedState(checked),
            onSelect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(radioItemProps.onSelect, ()=>context.onValueChange?.(value), {
                checkForDefaultPrevented: false
            })
        })
    });
});
MenuRadioItem.displayName = RADIO_ITEM_NAME;
var ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(ITEM_INDICATOR_NAME, {
    checked: false
});
var MenuItemIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
    const indicatorContext = useItemIndicatorContext(ITEM_INDICATOR_NAME, __scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
            ...itemIndicatorProps,
            ref: forwardedRef,
            "data-state": getCheckedState(indicatorContext.checked)
        })
    });
});
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SEPARATOR_NAME = "MenuSeparator";
var MenuSeparator = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, ...separatorProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        role: "separator",
        "aria-orientation": "horizontal",
        ...separatorProps,
        ref: forwardedRef
    });
});
MenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "MenuArrow";
var MenuArrow = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
        ...popperScope,
        ...arrowProps,
        ref: forwardedRef
    });
});
MenuArrow.displayName = ARROW_NAME;
var SUB_NAME = "MenuSub";
var [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME);
var MenuSub = (props)=>{
    const { __scopeMenu, children, open = false, onOpenChange } = props;
    const parentMenuContext = useMenuContext(SUB_NAME, __scopeMenu);
    const popperScope = usePopperScope(__scopeMenu);
    const [trigger, setTrigger] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const handleOpenChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onOpenChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (parentMenuContext.open === false) handleOpenChange(false);
        return ()=>handleOpenChange(false);
    }, [
        parentMenuContext.open,
        handleOpenChange
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuProvider, {
            scope: __scopeMenu,
            open,
            onOpenChange: handleOpenChange,
            content,
            onContentChange: setContent,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuSubProvider, {
                scope: __scopeMenu,
                contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
                triggerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
                trigger,
                onTriggerChange: setTrigger,
                children
            })
        })
    });
};
MenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME = "MenuSubTrigger";
var MenuSubTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useMenuContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const contentContext = useMenuContentContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const openTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
    const scope = {
        __scopeMenu: props.__scopeMenu
    };
    const clearOpenTimer = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
        openTimerRef.current = null;
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>clearOpenTimer, [
        clearOpenTimer
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const pointerGraceTimer = pointerGraceTimerRef.current;
        return ()=>{
            window.clearTimeout(pointerGraceTimer);
            onPointerGraceIntentChange(null);
        };
    }, [
        pointerGraceTimerRef,
        onPointerGraceIntentChange
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuAnchor, {
        asChild: true,
        ...scope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuItemImpl, {
            id: subContext.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": context.open,
            "aria-controls": subContext.contentId,
            "data-state": getOpenState(context.open),
            ...props,
            ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, subContext.onTriggerChange),
            onClick: (event)=>{
                props.onClick?.(event);
                if (props.disabled || event.defaultPrevented) return;
                event.currentTarget.focus();
                if (!context.open) context.onOpenChange(true);
            },
            onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, whenMouse((event)=>{
                contentContext.onItemEnter(event);
                if (event.defaultPrevented) return;
                if (!props.disabled && !context.open && !openTimerRef.current) {
                    contentContext.onPointerGraceIntentChange(null);
                    openTimerRef.current = window.setTimeout(()=>{
                        context.onOpenChange(true);
                        clearOpenTimer();
                    }, 100);
                }
            })),
            onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, whenMouse((event)=>{
                clearOpenTimer();
                const contentRect = context.content?.getBoundingClientRect();
                if (contentRect) {
                    const side = context.content?.dataset.side;
                    const rightSide = side === "right";
                    const bleed = rightSide ? -5 : 5;
                    const contentNearEdge = contentRect[rightSide ? "left" : "right"];
                    const contentFarEdge = contentRect[rightSide ? "right" : "left"];
                    contentContext.onPointerGraceIntentChange({
                        area: [
                            // Apply a bleed on clientX to ensure that our exit point is
                            // consistently within polygon bounds
                            {
                                x: event.clientX + bleed,
                                y: event.clientY
                            },
                            {
                                x: contentNearEdge,
                                y: contentRect.top
                            },
                            {
                                x: contentFarEdge,
                                y: contentRect.top
                            },
                            {
                                x: contentFarEdge,
                                y: contentRect.bottom
                            },
                            {
                                x: contentNearEdge,
                                y: contentRect.bottom
                            }
                        ],
                        side
                    });
                    window.clearTimeout(pointerGraceTimerRef.current);
                    pointerGraceTimerRef.current = window.setTimeout(()=>contentContext.onPointerGraceIntentChange(null), 300);
                } else {
                    contentContext.onTriggerLeave(event);
                    if (event.defaultPrevented) return;
                    contentContext.onPointerGraceIntentChange(null);
                }
            })),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                const isTypingAhead = contentContext.searchRef.current !== "";
                if (props.disabled || isTypingAhead && event.key === " ") return;
                if (SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
                    context.onOpenChange(true);
                    context.content?.focus();
                    event.preventDefault();
                }
            })
        })
    });
});
MenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "MenuSubContent";
var MenuSubContent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...subContentProps } = props;
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_CONTENT_NAME, props.__scopeMenu);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
        scope: props.__scopeMenu,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
                scope: props.__scopeMenu,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuContentImpl, {
                    id: subContext.contentId,
                    "aria-labelledby": subContext.triggerId,
                    ...subContentProps,
                    ref: composedRefs,
                    align: "start",
                    side: rootContext.dir === "rtl" ? "left" : "right",
                    disableOutsidePointerEvents: false,
                    disableOutsideScroll: false,
                    trapFocus: false,
                    onOpenAutoFocus: (event)=>{
                        if (rootContext.isUsingKeyboardRef.current) ref.current?.focus();
                        event.preventDefault();
                    },
                    onCloseAutoFocus: (event)=>event.preventDefault(),
                    onFocusOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusOutside, (event)=>{
                        if (event.target !== subContext.trigger) context.onOpenChange(false);
                    }),
                    onEscapeKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onEscapeKeyDown, (event)=>{
                        rootContext.onClose();
                        event.preventDefault();
                    }),
                    onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                        const isKeyDownInside = event.currentTarget.contains(event.target);
                        const isCloseKey = SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
                        if (isKeyDownInside && isCloseKey) {
                            context.onOpenChange(false);
                            subContext.trigger?.focus();
                            event.preventDefault();
                        }
                    })
                })
            })
        })
    });
});
MenuSubContent.displayName = SUB_CONTENT_NAME;
function getOpenState(open) {
    return open ? "open" : "closed";
}
function isIndeterminate(checked) {
    return checked === "indeterminate";
}
function getCheckedState(checked) {
    return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function focusFirst(candidates) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus();
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
function wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]);
}
function getNextMatch(values, search, currentMatch) {
    const isRepeated = search.length > 1 && Array.from(search).every((char)=>char === search[0]);
    const normalizedSearch = isRepeated ? search[0] : search;
    const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
    let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
    const excludeCurrentMatch = normalizedSearch.length === 1;
    if (excludeCurrentMatch) wrappedValues = wrappedValues.filter((v)=>v !== currentMatch);
    const nextMatch = wrappedValues.find((value)=>value.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
    return nextMatch !== currentMatch ? nextMatch : void 0;
}
function isPointInPolygon(point, polygon) {
    const { x, y } = point;
    let inside = false;
    for(let i = 0, j = polygon.length - 1; i < polygon.length; j = i++){
        const xi = polygon[i].x;
        const yi = polygon[i].y;
        const xj = polygon[j].x;
        const yj = polygon[j].y;
        const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect) inside = !inside;
    }
    return inside;
}
function isPointerInGraceArea(event, area) {
    if (!area) return false;
    const cursorPos = {
        x: event.clientX,
        y: event.clientY
    };
    return isPointInPolygon(cursorPos, area);
}
function whenMouse(handler) {
    return (event)=>event.pointerType === "mouse" ? handler(event) : void 0;
}
var Root3 = Menu;
var Anchor2 = MenuAnchor;
var Portal = MenuPortal;
var Content2 = MenuContent;
var Group = MenuGroup;
var Label = MenuLabel;
var Item2 = MenuItem;
var CheckboxItem = MenuCheckboxItem;
var RadioGroup = MenuRadioGroup;
var RadioItem = MenuRadioItem;
var ItemIndicator = MenuItemIndicator;
var Separator = MenuSeparator;
var Arrow2 = MenuArrow;
var Sub = MenuSub;
var SubTrigger = MenuSubTrigger;
var SubContent = MenuSubContent;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>Arrow2,
    "CheckboxItem",
    ()=>CheckboxItem2,
    "Content",
    ()=>Content2,
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuArrow",
    ()=>DropdownMenuArrow,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuItemIndicator",
    ()=>DropdownMenuItemIndicator,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger,
    "Group",
    ()=>Group2,
    "Item",
    ()=>Item2,
    "ItemIndicator",
    ()=>ItemIndicator2,
    "Label",
    ()=>Label2,
    "Portal",
    ()=>Portal2,
    "RadioGroup",
    ()=>RadioGroup2,
    "RadioItem",
    ()=>RadioItem2,
    "Root",
    ()=>Root2,
    "Separator",
    ()=>Separator2,
    "Sub",
    ()=>Sub2,
    "SubContent",
    ()=>SubContent2,
    "SubTrigger",
    ()=>SubTrigger2,
    "Trigger",
    ()=>Trigger,
    "createDropdownMenuScope",
    ()=>createDropdownMenuScope
]);
// packages/react/dropdown-menu/src/DropdownMenu.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
var DROPDOWN_MENU_NAME = "DropdownMenu";
var [createDropdownMenuContext, createDropdownMenuScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(DROPDOWN_MENU_NAME, [
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMenuScope"]
]);
var useMenuScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMenuScope"])();
var [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME);
var DropdownMenu = (props)=>{
    const { __scopeDropdownMenu, children, dir, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const [open = false, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DropdownMenuProvider, {
        scope: __scopeDropdownMenu,
        triggerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
        triggerRef,
        contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
        open,
        onOpenChange: setOpen,
        onOpenToggle: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setOpen((prevOpen)=>!prevOpen), [
            setOpen
        ]),
        modal,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
            ...menuScope,
            open,
            onOpenChange: setOpen,
            dir,
            modal,
            children
        })
    });
};
DropdownMenu.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME = "DropdownMenuTrigger";
var DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
    const context = useDropdownMenuContext(TRIGGER_NAME, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Anchor"], {
        asChild: true,
        ...menuScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
            type: "button",
            id: context.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": context.open,
            "aria-controls": context.open ? context.contentId : void 0,
            "data-state": context.open ? "open" : "closed",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            ...triggerProps,
            ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, context.triggerRef),
            onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDown, (event)=>{
                if (!disabled && event.button === 0 && event.ctrlKey === false) {
                    context.onOpenToggle();
                    if (!context.open) event.preventDefault();
                }
            }),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                if (disabled) return;
                if ([
                    "Enter",
                    " "
                ].includes(event.key)) context.onOpenToggle();
                if (event.key === "ArrowDown") context.onOpenChange(true);
                if ([
                    "Enter",
                    " ",
                    "ArrowDown"
                ].includes(event.key)) event.preventDefault();
            })
        })
    });
});
DropdownMenuTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DropdownMenuPortal";
var DropdownMenuPortal = (props)=>{
    const { __scopeDropdownMenu, ...portalProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        ...menuScope,
        ...portalProps
    });
};
DropdownMenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "DropdownMenuContent";
var DropdownMenuContent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...contentProps } = props;
    const context = useDropdownMenuContext(CONTENT_NAME, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const hasInteractedOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onCloseAutoFocus, (event)=>{
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
            hasInteractedOutsideRef.current = false;
            event.preventDefault();
        }),
        onInteractOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onInteractOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (!context.modal || isRightClick) hasInteractedOutsideRef.current = true;
        }),
        style: {
            ...props.style,
            // re-namespace exposed content custom properties
            ...{
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }
    });
});
DropdownMenuContent.displayName = CONTENT_NAME;
var GROUP_NAME = "DropdownMenuGroup";
var DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...groupProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        ...menuScope,
        ...groupProps,
        ref: forwardedRef
    });
});
DropdownMenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "DropdownMenuLabel";
var DropdownMenuLabel = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ...menuScope,
        ...labelProps,
        ref: forwardedRef
    });
});
DropdownMenuLabel.displayName = LABEL_NAME;
var ITEM_NAME = "DropdownMenuItem";
var DropdownMenuItem = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ...menuScope,
        ...itemProps,
        ref: forwardedRef
    });
});
DropdownMenuItem.displayName = ITEM_NAME;
var CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem";
var DropdownMenuCheckboxItem = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...checkboxItemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        ...menuScope,
        ...checkboxItemProps,
        ref: forwardedRef
    });
});
DropdownMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "DropdownMenuRadioGroup";
var DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...radioGroupProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
        ...menuScope,
        ...radioGroupProps,
        ref: forwardedRef
    });
});
DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "DropdownMenuRadioItem";
var DropdownMenuRadioItem = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...radioItemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        ...menuScope,
        ...radioItemProps,
        ref: forwardedRef
    });
});
DropdownMenuRadioItem.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "DropdownMenuItemIndicator";
var DropdownMenuItemIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
        ...menuScope,
        ...itemIndicatorProps,
        ref: forwardedRef
    });
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME = "DropdownMenuSeparator";
var DropdownMenuSeparator = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...separatorProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ...menuScope,
        ...separatorProps,
        ref: forwardedRef
    });
});
DropdownMenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "DropdownMenuArrow";
var DropdownMenuArrow = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...arrowProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
        ...menuScope,
        ...arrowProps,
        ref: forwardedRef
    });
});
DropdownMenuArrow.displayName = ARROW_NAME;
var DropdownMenuSub = (props)=>{
    const { __scopeDropdownMenu, children, open: openProp, onOpenChange, defaultOpen } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const [open = false, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"], {
        ...menuScope,
        open,
        onOpenChange: setOpen,
        children
    });
};
var SUB_TRIGGER_NAME = "DropdownMenuSubTrigger";
var DropdownMenuSubTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...subTriggerProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        ...menuScope,
        ...subTriggerProps,
        ref: forwardedRef
    });
});
DropdownMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "DropdownMenuSubContent";
var DropdownMenuSubContent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...subContentProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        ...menuScope,
        ...subContentProps,
        ref: forwardedRef,
        style: {
            ...props.style,
            // re-namespace exposed content custom properties
            ...{
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }
    });
});
DropdownMenuSubContent.displayName = SUB_CONTENT_NAME;
var Root2 = DropdownMenu;
var Trigger = DropdownMenuTrigger;
var Portal2 = DropdownMenuPortal;
var Content2 = DropdownMenuContent;
var Group2 = DropdownMenuGroup;
var Label2 = DropdownMenuLabel;
var Item2 = DropdownMenuItem;
var CheckboxItem2 = DropdownMenuCheckboxItem;
var RadioGroup2 = DropdownMenuRadioGroup;
var RadioItem2 = DropdownMenuRadioItem;
var ItemIndicator2 = DropdownMenuItemIndicator;
var Separator2 = DropdownMenuSeparator;
var Arrow2 = DropdownMenuArrow;
var Sub2 = DropdownMenuSub;
var SubTrigger2 = DropdownMenuSubTrigger;
var SubContent2 = DropdownMenuSubContent;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Check
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Check", [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
]);
;
 //# sourceMappingURL=check.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ChevronRight", [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRightIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRightIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Circle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Circle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Circle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
]);
;
 //# sourceMappingURL=circle.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as CircleIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CircleIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>FlaskConical
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const FlaskConical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("FlaskConical", [
    [
        "path",
        {
            d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",
            key: "pzvekw"
        }
    ],
    [
        "path",
        {
            d: "M8.5 2h7",
            key: "csnxdl"
        }
    ],
    [
        "path",
        {
            d: "M7 16h10",
            key: "wp8him"
        }
    ]
]);
;
 //# sourceMappingURL=flask-conical.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-ssr] (ecmascript) <export default as FlaskConical>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlaskConical",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>LayoutDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const LayoutDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("LayoutDashboard", [
    [
        "rect",
        {
            width: "7",
            height: "9",
            x: "3",
            y: "3",
            rx: "1",
            key: "10lvy0"
        }
    ],
    [
        "rect",
        {
            width: "7",
            height: "5",
            x: "14",
            y: "3",
            rx: "1",
            key: "16une8"
        }
    ],
    [
        "rect",
        {
            width: "7",
            height: "9",
            x: "14",
            y: "12",
            rx: "1",
            key: "1hutg5"
        }
    ],
    [
        "rect",
        {
            width: "7",
            height: "5",
            x: "3",
            y: "16",
            rx: "1",
            key: "ldoo1y"
        }
    ]
]);
;
 //# sourceMappingURL=layout-dashboard.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutDashboard",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ClipboardList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const ClipboardList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ClipboardList", [
    [
        "rect",
        {
            width: "8",
            height: "4",
            x: "8",
            y: "2",
            rx: "1",
            ry: "1",
            key: "tgr4d6"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
        }
    ],
    [
        "path",
        {
            d: "M12 11h4",
            key: "1jrz19"
        }
    ],
    [
        "path",
        {
            d: "M12 16h4",
            key: "n85exb"
        }
    ],
    [
        "path",
        {
            d: "M8 11h.01",
            key: "1dfujw"
        }
    ],
    [
        "path",
        {
            d: "M8 16h.01",
            key: "18s6g9"
        }
    ]
]);
;
 //# sourceMappingURL=clipboard-list.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-ssr] (ecmascript) <export default as ClipboardList>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClipboardList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Upload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Upload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Upload", [
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "polyline",
        {
            points: "17 8 12 3 7 8",
            key: "t8dd8p"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "3",
            y2: "15",
            key: "widbto"
        }
    ]
]);
;
 //# sourceMappingURL=upload.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Upload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChartColumn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const ChartColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ChartColumn", [
    [
        "path",
        {
            d: "M3 3v16a2 2 0 0 0 2 2h16",
            key: "c24i48"
        }
    ],
    [
        "path",
        {
            d: "M18 17V9",
            key: "2bz60n"
        }
    ],
    [
        "path",
        {
            d: "M13 17V5",
            key: "1frdt8"
        }
    ],
    [
        "path",
        {
            d: "M8 17v-3",
            key: "17ska0"
        }
    ]
]);
;
 //# sourceMappingURL=chart-column.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChart3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Settings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Settings", [
    [
        "path",
        {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
;
 //# sourceMappingURL=settings.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Settings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Menu", [
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }
    ]
]);
;
 //# sourceMappingURL=menu.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Activity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Activity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Activity", [
    [
        "path",
        {
            d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
            key: "169zse"
        }
    ]
]);
;
 //# sourceMappingURL=activity.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Activity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ChevronDown", [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>LogOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const LogOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("LogOut", [
    [
        "path",
        {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }
    ],
    [
        "polyline",
        {
            points: "16 17 21 12 16 7",
            key: "1gabdz"
        }
    ],
    [
        "line",
        {
            x1: "21",
            x2: "9",
            y1: "12",
            y2: "12",
            key: "1uyos4"
        }
    ]
]);
;
 //# sourceMappingURL=log-out.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>User
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const User = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("User", [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
]);
;
 //# sourceMappingURL=user.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "User",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CircleHelp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const CircleHelp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("CircleHelp", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
            key: "1u773s"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
]);
;
 //# sourceMappingURL=circle-help.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-ssr] (ecmascript) <export default as HelpCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HelpCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDownIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const ChevronUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ChevronUp", [
    [
        "path",
        {
            d: "m18 15-6-6-6 6",
            key: "153udz"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-up.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUpIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronUpIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/file-x-2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>FileX2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const FileX2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("FileX2", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
            key: "1pf5j1"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "path",
        {
            d: "m8 12.5-5 5",
            key: "b853mi"
        }
    ],
    [
        "path",
        {
            d: "m3 12.5 5 5",
            key: "1qls4r"
        }
    ]
]);
;
 //# sourceMappingURL=file-x-2.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/file-x-2.js [app-ssr] (ecmascript) <export default as FileX2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileX2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$x$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$x$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/file-x-2.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/inbox.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Inbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Inbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Inbox", [
    [
        "polyline",
        {
            points: "22 12 16 12 14 15 10 15 8 12 2 12",
            key: "o97t9d"
        }
    ],
    [
        "path",
        {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
            key: "oot6mr"
        }
    ]
]);
;
 //# sourceMappingURL=inbox.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/inbox.js [app-ssr] (ecmascript) <export default as Inbox>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Inbox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/inbox.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/terminal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Terminal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Terminal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Terminal", [
    [
        "polyline",
        {
            points: "4 17 10 11 4 5",
            key: "akl6gq"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "20",
            y1: "19",
            y2: "19",
            key: "q2wloq"
        }
    ]
]);
;
 //# sourceMappingURL=terminal.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/terminal.js [app-ssr] (ecmascript) <export default as Terminal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Terminal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/terminal.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CircleAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("CircleAlert", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
]);
;
 //# sourceMappingURL=circle-alert.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>RefreshCw
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const RefreshCw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("RefreshCw", [
    [
        "path",
        {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc"
        }
    ],
    [
        "path",
        {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }
    ],
    [
        "path",
        {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3"
        }
    ],
    [
        "path",
        {
            d: "M8 16H3v5",
            key: "1cv678"
        }
    ]
]);
;
 //# sourceMappingURL=refresh-cw.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefreshCw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/cloud-off.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CloudOff
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const CloudOff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("CloudOff", [
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ],
    [
        "path",
        {
            d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",
            key: "yfwify"
        }
    ],
    [
        "path",
        {
            d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",
            key: "jlfiyv"
        }
    ]
]);
;
 //# sourceMappingURL=cloud-off.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/cloud-off.js [app-ssr] (ecmascript) <export default as CloudOff>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloudOff",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/cloud-off.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Eye
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Eye = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Eye", [
    [
        "path",
        {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
;
 //# sourceMappingURL=eye.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Eye",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Search", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "path",
        {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }
    ]
]);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ChevronLeft", [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-left.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Shield
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Shield = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Shield", [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ]
]);
;
 //# sourceMappingURL=shield.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shield",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage,
    "Fallback",
    ()=>Fallback,
    "Image",
    ()=>Image,
    "Root",
    ()=>Root,
    "createAvatarScope",
    ()=>createAvatarScope
]);
// packages/react/avatar/src/Avatar.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeAvatar, ...avatarProps } = props;
    const [imageLoadingStatus, setImageLoadingStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("idle");
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(AvatarProvider, {
        scope: __scopeAvatar,
        imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
            ...avatarProps,
            ref: forwardedRef
        })
    });
});
Avatar.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage";
var AvatarImage = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeAvatar, src, onLoadingStatusChange = ()=>{}, ...imageProps } = props;
    const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
    const imageLoadingStatus = useImageLoadingStatus(src, imageProps.referrerPolicy);
    const handleLoadingStatusChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])((status)=>{
        onLoadingStatusChange(status);
        context.onImageLoadingStatusChange(status);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (imageLoadingStatus !== "idle") {
            handleLoadingStatusChange(imageLoadingStatus);
        }
    }, [
        imageLoadingStatus,
        handleLoadingStatusChange
    ]);
    return imageLoadingStatus === "loaded" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].img, {
        ...imageProps,
        ref: forwardedRef,
        src
    }) : null;
});
AvatarImage.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeAvatar, delayMs, ...fallbackProps } = props;
    const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
    const [canRender, setCanRender] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](delayMs === void 0);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (delayMs !== void 0) {
            const timerId = window.setTimeout(()=>setCanRender(true), delayMs);
            return ()=>window.clearTimeout(timerId);
        }
    }, [
        delayMs
    ]);
    return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
        ...fallbackProps,
        ref: forwardedRef
    }) : null;
});
AvatarFallback.displayName = FALLBACK_NAME;
function useImageLoadingStatus(src, referrerPolicy) {
    const [loadingStatus, setLoadingStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("idle");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!src) {
            setLoadingStatus("error");
            return;
        }
        let isMounted = true;
        const image = new window.Image();
        const updateStatus = (status)=>()=>{
                if (!isMounted) return;
                setLoadingStatus(status);
            };
        setLoadingStatus("loading");
        image.onload = updateStatus("loaded");
        image.onerror = updateStatus("error");
        image.src = src;
        if (referrerPolicy) {
            image.referrerPolicy = referrerPolicy;
        }
        return ()=>{
            isMounted = false;
        };
    }, [
        src,
        referrerPolicy
    ]);
    return loadingStatus;
}
var Root = Avatar;
var Image = AvatarImage;
var Fallback = AvatarFallback;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/visually-hidden/src/VisuallyHidden.tsx
__turbopack_context__.s([
    "Root",
    ()=>Root,
    "VisuallyHidden",
    ()=>VisuallyHidden
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
var NAME = "VisuallyHidden";
var VisuallyHidden = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
        ...props,
        ref: forwardedRef,
        style: {
            // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...props.style
        }
    });
});
VisuallyHidden.displayName = NAME;
var Root = VisuallyHidden;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>Arrow2,
    "Content",
    ()=>Content2,
    "Portal",
    ()=>Portal,
    "Provider",
    ()=>Provider,
    "Root",
    ()=>Root3,
    "Tooltip",
    ()=>Tooltip,
    "TooltipArrow",
    ()=>TooltipArrow,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipPortal",
    ()=>TooltipPortal,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger,
    "Trigger",
    ()=>Trigger,
    "createTooltipScope",
    ()=>createTooltipScope
]);
// packages/react/tooltip/src/Tooltip.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-popper/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-portal/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
;
;
;
;
;
var [createTooltipContext, createTooltipScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])("Tooltip", [
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPopperScope"]
]);
var usePopperScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPopperScope"])();
var PROVIDER_NAME = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME);
var TooltipProvider = (props)=>{
    const { __scopeTooltip, delayDuration = DEFAULT_DELAY_DURATION, skipDelayDuration = 300, disableHoverableContent = false, children } = props;
    const [isOpenDelayed, setIsOpenDelayed] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](true);
    const isPointerInTransitRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const skipDelayTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const skipDelayTimer = skipDelayTimerRef.current;
        return ()=>window.clearTimeout(skipDelayTimer);
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TooltipProviderContextProvider, {
        scope: __scopeTooltip,
        isOpenDelayed,
        delayDuration,
        onOpen: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
            window.clearTimeout(skipDelayTimerRef.current);
            setIsOpenDelayed(false);
        }, []),
        onClose: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
            window.clearTimeout(skipDelayTimerRef.current);
            skipDelayTimerRef.current = window.setTimeout(()=>setIsOpenDelayed(true), skipDelayDuration);
        }, [
            skipDelayDuration
        ]),
        isPointerInTransitRef,
        onPointerInTransitChange: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((inTransit)=>{
            isPointerInTransitRef.current = inTransit;
        }, []),
        disableHoverableContent,
        children
    });
};
TooltipProvider.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var Tooltip = (props)=>{
    const { __scopeTooltip, children, open: openProp, defaultOpen = false, onOpenChange, disableHoverableContent: disableHoverableContentProp, delayDuration: delayDurationProp } = props;
    const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props.__scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const [trigger, setTrigger] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const contentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const openTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
    const delayDuration = delayDurationProp ?? providerContext.delayDuration;
    const wasOpenDelayedRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const [open = false, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: (open2)=>{
            if (open2) {
                providerContext.onOpen();
                document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
            } else {
                providerContext.onClose();
            }
            onOpenChange?.(open2);
        }
    });
    const stateAttribute = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        return open ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
    }, [
        open
    ]);
    const handleOpen = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = 0;
        wasOpenDelayedRef.current = false;
        setOpen(true);
    }, [
        setOpen
    ]);
    const handleClose = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = 0;
        setOpen(false);
    }, [
        setOpen
    ]);
    const handleDelayedOpen = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = window.setTimeout(()=>{
            wasOpenDelayedRef.current = true;
            setOpen(true);
            openTimerRef.current = 0;
        }, delayDuration);
    }, [
        delayDuration,
        setOpen
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return ()=>{
            if (openTimerRef.current) {
                window.clearTimeout(openTimerRef.current);
                openTimerRef.current = 0;
            }
        };
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TooltipContextProvider, {
            scope: __scopeTooltip,
            contentId,
            open,
            stateAttribute,
            trigger,
            onTriggerChange: setTrigger,
            onTriggerEnter: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
                if (providerContext.isOpenDelayed) handleDelayedOpen();
                else handleOpen();
            }, [
                providerContext.isOpenDelayed,
                handleDelayedOpen,
                handleOpen
            ]),
            onTriggerLeave: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
                if (disableHoverableContent) {
                    handleClose();
                } else {
                    window.clearTimeout(openTimerRef.current);
                    openTimerRef.current = 0;
                }
            }, [
                handleClose,
                disableHoverableContent
            ]),
            onOpen: handleOpen,
            onClose: handleClose,
            disableHoverableContent,
            children
        })
    });
};
Tooltip.displayName = TOOLTIP_NAME;
var TRIGGER_NAME = "TooltipTrigger";
var TooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeTooltip, ...triggerProps } = props;
    const context = useTooltipContext(TRIGGER_NAME, __scopeTooltip);
    const providerContext = useTooltipProviderContext(TRIGGER_NAME, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, context.onTriggerChange);
    const isPointerDownRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const hasPointerMoveOpenedRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const handlePointerUp = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>isPointerDownRef.current = false, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return ()=>document.removeEventListener("pointerup", handlePointerUp);
    }, [
        handlePointerUp
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Anchor"], {
        asChild: true,
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
            "aria-describedby": context.open ? context.contentId : void 0,
            "data-state": context.stateAttribute,
            ...triggerProps,
            ref: composedRefs,
            onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, (event)=>{
                if (event.pointerType === "touch") return;
                if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
                    context.onTriggerEnter();
                    hasPointerMoveOpenedRef.current = true;
                }
            }),
            onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, ()=>{
                context.onTriggerLeave();
                hasPointerMoveOpenedRef.current = false;
            }),
            onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDown, ()=>{
                isPointerDownRef.current = true;
                document.addEventListener("pointerup", handlePointerUp, {
                    once: true
                });
            }),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, ()=>{
                if (!isPointerDownRef.current) context.onOpen();
            }),
            onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlur, context.onClose),
            onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, context.onClose)
        })
    });
});
TooltipTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "TooltipPortal";
var [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME, {
    forceMount: void 0
});
var TooltipPortal = (props)=>{
    const { __scopeTooltip, forceMount, children, container } = props;
    const context = useTooltipContext(PORTAL_NAME, __scopeTooltip);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PortalProvider, {
        scope: __scopeTooltip,
        forceMount,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
                asChild: true,
                container,
                children
            })
        })
    });
};
TooltipPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "TooltipContent";
var TooltipContent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeTooltip);
    const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
    const context = useTooltipContext(CONTENT_NAME, props.__scopeTooltip);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: context.disableHoverableContent ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TooltipContentImpl, {
            side,
            ...contentProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TooltipContentHoverable, {
            side,
            ...contentProps,
            ref: forwardedRef
        })
    });
});
var TooltipContentHoverable = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useTooltipContext(CONTENT_NAME, props.__scopeTooltip);
    const providerContext = useTooltipProviderContext(CONTENT_NAME, props.__scopeTooltip);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const [pointerGraceArea, setPointerGraceArea] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const { trigger, onClose } = context;
    const content = ref.current;
    const { onPointerInTransitChange } = providerContext;
    const handleRemoveGraceArea = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        setPointerGraceArea(null);
        onPointerInTransitChange(false);
    }, [
        onPointerInTransitChange
    ]);
    const handleCreateGraceArea = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((event, hoverTarget)=>{
        const currentTarget = event.currentTarget;
        const exitPoint = {
            x: event.clientX,
            y: event.clientY
        };
        const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
        const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
        const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
        const graceArea = getHull([
            ...paddedExitPoints,
            ...hoverTargetPoints
        ]);
        setPointerGraceArea(graceArea);
        onPointerInTransitChange(true);
    }, [
        onPointerInTransitChange
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return ()=>handleRemoveGraceArea();
    }, [
        handleRemoveGraceArea
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (trigger && content) {
            const handleTriggerLeave = (event)=>handleCreateGraceArea(event, content);
            const handleContentLeave = (event)=>handleCreateGraceArea(event, trigger);
            trigger.addEventListener("pointerleave", handleTriggerLeave);
            content.addEventListener("pointerleave", handleContentLeave);
            return ()=>{
                trigger.removeEventListener("pointerleave", handleTriggerLeave);
                content.removeEventListener("pointerleave", handleContentLeave);
            };
        }
    }, [
        trigger,
        content,
        handleCreateGraceArea,
        handleRemoveGraceArea
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (pointerGraceArea) {
            const handleTrackPointerGrace = (event)=>{
                const target = event.target;
                const pointerPosition = {
                    x: event.clientX,
                    y: event.clientY
                };
                const hasEnteredTarget = trigger?.contains(target) || content?.contains(target);
                const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea);
                if (hasEnteredTarget) {
                    handleRemoveGraceArea();
                } else if (isPointerOutsideGraceArea) {
                    handleRemoveGraceArea();
                    onClose();
                }
            };
            document.addEventListener("pointermove", handleTrackPointerGrace);
            return ()=>document.removeEventListener("pointermove", handleTrackPointerGrace);
        }
    }, [
        trigger,
        content,
        pointerGraceArea,
        onClose,
        handleRemoveGraceArea
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TooltipContentImpl, {
        ...props,
        ref: composedRefs
    });
});
var [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, {
    isInside: false
});
var TooltipContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeTooltip, children, "aria-label": ariaLabel, onEscapeKeyDown, onPointerDownOutside, ...contentProps } = props;
    const context = useTooltipContext(CONTENT_NAME, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const { onClose } = context;
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        document.addEventListener(TOOLTIP_OPEN, onClose);
        return ()=>document.removeEventListener(TOOLTIP_OPEN, onClose);
    }, [
        onClose
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (context.trigger) {
            const handleScroll = (event)=>{
                const target = event.target;
                if (target?.contains(context.trigger)) onClose();
            };
            window.addEventListener("scroll", handleScroll, {
                capture: true
            });
            return ()=>window.removeEventListener("scroll", handleScroll, {
                    capture: true
                });
        }
    }, [
        context.trigger,
        onClose
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DismissableLayer"], {
        asChild: true,
        disableOutsidePointerEvents: false,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside: (event)=>event.preventDefault(),
        onDismiss: onClose,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-state": context.stateAttribute,
            ...popperScope,
            ...contentProps,
            ref: forwardedRef,
            style: {
                ...contentProps.style,
                // re-namespace exposed content custom properties
                ...{
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                }
            },
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slottable"], {
                    children
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(VisuallyHiddenContentContextProvider, {
                    scope: __scopeTooltip,
                    isInside: true,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
                        id: context.contentId,
                        role: "tooltip",
                        children: ariaLabel || children
                    })
                })
            ]
        })
    });
});
TooltipContent.displayName = CONTENT_NAME;
var ARROW_NAME = "TooltipArrow";
var TooltipArrow = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeTooltip, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeTooltip);
    const visuallyHiddenContentContext = useVisuallyHiddenContentContext(ARROW_NAME, __scopeTooltip);
    return visuallyHiddenContentContext.isInside ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
        ...popperScope,
        ...arrowProps,
        ref: forwardedRef
    });
});
TooltipArrow.displayName = ARROW_NAME;
function getExitSideFromRect(point, rect) {
    const top = Math.abs(rect.top - point.y);
    const bottom = Math.abs(rect.bottom - point.y);
    const right = Math.abs(rect.right - point.x);
    const left = Math.abs(rect.left - point.x);
    switch(Math.min(top, bottom, right, left)){
        case left:
            return "left";
        case right:
            return "right";
        case top:
            return "top";
        case bottom:
            return "bottom";
        default:
            throw new Error("unreachable");
    }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
    const paddedExitPoints = [];
    switch(exitSide){
        case "top":
            paddedExitPoints.push({
                x: exitPoint.x - padding,
                y: exitPoint.y + padding
            }, {
                x: exitPoint.x + padding,
                y: exitPoint.y + padding
            });
            break;
        case "bottom":
            paddedExitPoints.push({
                x: exitPoint.x - padding,
                y: exitPoint.y - padding
            }, {
                x: exitPoint.x + padding,
                y: exitPoint.y - padding
            });
            break;
        case "left":
            paddedExitPoints.push({
                x: exitPoint.x + padding,
                y: exitPoint.y - padding
            }, {
                x: exitPoint.x + padding,
                y: exitPoint.y + padding
            });
            break;
        case "right":
            paddedExitPoints.push({
                x: exitPoint.x - padding,
                y: exitPoint.y - padding
            }, {
                x: exitPoint.x - padding,
                y: exitPoint.y + padding
            });
            break;
    }
    return paddedExitPoints;
}
function getPointsFromRect(rect) {
    const { top, right, bottom, left } = rect;
    return [
        {
            x: left,
            y: top
        },
        {
            x: right,
            y: top
        },
        {
            x: right,
            y: bottom
        },
        {
            x: left,
            y: bottom
        }
    ];
}
function isPointInPolygon(point, polygon) {
    const { x, y } = point;
    let inside = false;
    for(let i = 0, j = polygon.length - 1; i < polygon.length; j = i++){
        const xi = polygon[i].x;
        const yi = polygon[i].y;
        const xj = polygon[j].x;
        const yj = polygon[j].y;
        const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect) inside = !inside;
    }
    return inside;
}
function getHull(points) {
    const newPoints = points.slice();
    newPoints.sort((a, b)=>{
        if (a.x < b.x) return -1;
        else if (a.x > b.x) return 1;
        else if (a.y < b.y) return -1;
        else if (a.y > b.y) return 1;
        else return 0;
    });
    return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
    if (points.length <= 1) return points.slice();
    const upperHull = [];
    for(let i = 0; i < points.length; i++){
        const p = points[i];
        while(upperHull.length >= 2){
            const q = upperHull[upperHull.length - 1];
            const r = upperHull[upperHull.length - 2];
            if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
            else break;
        }
        upperHull.push(p);
    }
    upperHull.pop();
    const lowerHull = [];
    for(let i = points.length - 1; i >= 0; i--){
        const p = points[i];
        while(lowerHull.length >= 2){
            const q = lowerHull[lowerHull.length - 1];
            const r = lowerHull[lowerHull.length - 2];
            if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
            else break;
        }
        lowerHull.push(p);
    }
    lowerHull.pop();
    if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) {
        return upperHull;
    } else {
        return upperHull.concat(lowerHull);
    }
}
var Provider = TooltipProvider;
var Root3 = Tooltip;
var Trigger = TooltipTrigger;
var Portal = TooltipPortal;
var Content2 = TooltipContent;
var Arrow2 = TooltipArrow;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/number/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/core/number/src/number.ts
__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
function clamp(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-previous/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-previous/src/usePrevious.tsx
__turbopack_context__.s([
    "usePrevious",
    ()=>usePrevious
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function usePrevious(value) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]({
        value,
        previous: value
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (ref.current.value !== value) {
            ref.current.previous = ref.current.value;
            ref.current.value = value;
        }
        return ref.current.previous;
    }, [
        value
    ]);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>Arrow2,
    "Content",
    ()=>Content2,
    "Group",
    ()=>Group,
    "Icon",
    ()=>Icon,
    "Item",
    ()=>Item,
    "ItemIndicator",
    ()=>ItemIndicator,
    "ItemText",
    ()=>ItemText,
    "Label",
    ()=>Label,
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root2,
    "ScrollDownButton",
    ()=>ScrollDownButton,
    "ScrollUpButton",
    ()=>ScrollUpButton,
    "Select",
    ()=>Select,
    "SelectArrow",
    ()=>SelectArrow,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectIcon",
    ()=>SelectIcon,
    "SelectItem",
    ()=>SelectItem,
    "SelectItemIndicator",
    ()=>SelectItemIndicator,
    "SelectItemText",
    ()=>SelectItemText,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectPortal",
    ()=>SelectPortal,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue,
    "SelectViewport",
    ()=>SelectViewport,
    "Separator",
    ()=>Separator,
    "Trigger",
    ()=>Trigger,
    "Value",
    ()=>Value,
    "Viewport",
    ()=>Viewport,
    "createSelectScope",
    ()=>createSelectScope
]);
// packages/react/select/src/Select.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/number/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-collection/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-popper/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-portal/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-use-previous/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/aria-hidden/dist/es2015/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
;
;
;
;
;
var OPEN_KEYS = [
    " ",
    "Enter",
    "ArrowUp",
    "ArrowDown"
];
var SELECTION_KEYS = [
    " ",
    "Enter"
];
var SELECT_NAME = "Select";
var [Collection, useCollection, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCollection"])(SELECT_NAME);
var [createSelectContext, createSelectScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(SELECT_NAME, [
    createCollectionScope,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPopperScope"]
]);
var usePopperScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPopperScope"])();
var [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME);
var [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME);
var Select = (props)=>{
    const { __scopeSelect, children, open: openProp, defaultOpen, onOpenChange, value: valueProp, defaultValue, onValueChange, dir, name, autoComplete, disabled, required, form } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const [trigger, setTrigger] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [valueNode, setValueNode] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [valueNodeHasChildren, setValueNodeHasChildren] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    const [open = false, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    const triggerPointerDownPosRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const isFormControl = trigger ? form || !!trigger.closest("form") : true;
    const [nativeOptionsSet, setNativeOptionsSet] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](/* @__PURE__ */ new Set());
    const nativeSelectKey = Array.from(nativeOptionsSet).map((option)=>option.props.value).join(";");
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(SelectProvider, {
            required,
            scope: __scopeSelect,
            trigger,
            onTriggerChange: setTrigger,
            valueNode,
            onValueNodeChange: setValueNode,
            valueNodeHasChildren,
            onValueNodeHasChildrenChange: setValueNodeHasChildren,
            contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
            value,
            onValueChange: setValue,
            open,
            onOpenChange: setOpen,
            dir: direction,
            triggerPointerDownPosRef,
            disabled,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
                    scope: __scopeSelect,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectNativeOptionsProvider, {
                        scope: props.__scopeSelect,
                        onNativeOptionAdd: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((option)=>{
                            setNativeOptionsSet((prev)=>new Set(prev).add(option));
                        }, []),
                        onNativeOptionRemove: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((option)=>{
                            setNativeOptionsSet((prev)=>{
                                const optionsSet = new Set(prev);
                                optionsSet.delete(option);
                                return optionsSet;
                            });
                        }, []),
                        children
                    })
                }),
                isFormControl ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(BubbleSelect, {
                    "aria-hidden": true,
                    required,
                    tabIndex: -1,
                    name,
                    autoComplete,
                    value,
                    onChange: (event)=>setValue(event.target.value),
                    disabled,
                    form,
                    children: [
                        value === void 0 ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("option", {
                            value: ""
                        }) : null,
                        Array.from(nativeOptionsSet)
                    ]
                }, nativeSelectKey) : null
            ]
        })
    });
};
Select.displayName = SELECT_NAME;
var TRIGGER_NAME = "SelectTrigger";
var SelectTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, disabled = false, ...triggerProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const context = useSelectContext(TRIGGER_NAME, __scopeSelect);
    const isDisabled = context.disabled || disabled;
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.onTriggerChange);
    const getItems = useCollection(__scopeSelect);
    const pointerTypeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("touch");
    const [searchRef, handleTypeaheadSearch, resetTypeahead] = useTypeaheadSearch((search)=>{
        const enabledItems = getItems().filter((item)=>!item.disabled);
        const currentItem = enabledItems.find((item)=>item.value === context.value);
        const nextItem = findNextItem(enabledItems, search, currentItem);
        if (nextItem !== void 0) {
            context.onValueChange(nextItem.value);
        }
    });
    const handleOpen = (pointerEvent)=>{
        if (!isDisabled) {
            context.onOpenChange(true);
            resetTypeahead();
        }
        if (pointerEvent) {
            context.triggerPointerDownPosRef.current = {
                x: Math.round(pointerEvent.pageX),
                y: Math.round(pointerEvent.pageY)
            };
        }
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Anchor"], {
        asChild: true,
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
            type: "button",
            role: "combobox",
            "aria-controls": context.contentId,
            "aria-expanded": context.open,
            "aria-required": context.required,
            "aria-autocomplete": "none",
            dir: context.dir,
            "data-state": context.open ? "open" : "closed",
            disabled: isDisabled,
            "data-disabled": isDisabled ? "" : void 0,
            "data-placeholder": shouldShowPlaceholder(context.value) ? "" : void 0,
            ...triggerProps,
            ref: composedRefs,
            onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(triggerProps.onClick, (event)=>{
                event.currentTarget.focus();
                if (pointerTypeRef.current !== "mouse") {
                    handleOpen(event);
                }
            }),
            onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(triggerProps.onPointerDown, (event)=>{
                pointerTypeRef.current = event.pointerType;
                const target = event.target;
                if (target.hasPointerCapture(event.pointerId)) {
                    target.releasePointerCapture(event.pointerId);
                }
                if (event.button === 0 && event.ctrlKey === false && event.pointerType === "mouse") {
                    handleOpen(event);
                    event.preventDefault();
                }
            }),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(triggerProps.onKeyDown, (event)=>{
                const isTypingAhead = searchRef.current !== "";
                const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
                if (isTypingAhead && event.key === " ") return;
                if (OPEN_KEYS.includes(event.key)) {
                    handleOpen();
                    event.preventDefault();
                }
            })
        })
    });
});
SelectTrigger.displayName = TRIGGER_NAME;
var VALUE_NAME = "SelectValue";
var SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
    const context = useSelectContext(VALUE_NAME, __scopeSelect);
    const { onValueNodeHasChildrenChange } = context;
    const hasChildren = children !== void 0;
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.onValueNodeChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        onValueNodeHasChildrenChange(hasChildren);
    }, [
        onValueNodeHasChildrenChange,
        hasChildren
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
        ...valueProps,
        ref: composedRefs,
        style: {
            pointerEvents: "none"
        },
        children: shouldShowPlaceholder(context.value) ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: placeholder
        }) : children
    });
});
SelectValue.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon";
var SelectIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, children, ...iconProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
        "aria-hidden": true,
        ...iconProps,
        ref: forwardedRef,
        children: children || "\u25BC"
    });
});
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME = "SelectPortal";
var SelectPortal = (props)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        asChild: true,
        ...props
    });
};
SelectPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "SelectContent";
var SelectContent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useSelectContext(CONTENT_NAME, props.__scopeSelect);
    const [fragment, setFragment] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        setFragment(new DocumentFragment());
    }, []);
    if (!context.open) {
        const frag = fragment;
        return frag ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"](/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectContentProvider, {
            scope: props.__scopeSelect,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
                scope: props.__scopeSelect,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    children: props.children
                })
            })
        }), frag) : null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectContentImpl, {
        ...props,
        ref: forwardedRef
    });
});
SelectContent.displayName = CONTENT_NAME;
var CONTENT_MARGIN = 10;
var [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME);
var CONTENT_IMPL_NAME = "SelectContentImpl";
var SelectContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, position = "item-aligned", onCloseAutoFocus, onEscapeKeyDown, onPointerDownOutside, //
    // PopperContent props
    side, sideOffset, align, alignOffset, arrowPadding, collisionBoundary, collisionPadding, sticky, hideWhenDetached, avoidCollisions, //
    ...contentProps } = props;
    const context = useSelectContext(CONTENT_NAME, __scopeSelect);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [viewport, setViewport] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setContent(node));
    const [selectedItem, setSelectedItem] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [selectedItemText, setSelectedItemText] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const getItems = useCollection(__scopeSelect);
    const [isPositioned, setIsPositioned] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const firstValidItemFoundRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (content) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hideOthers"])(content);
    }, [
        content
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusGuards"])();
    const focusFirst = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((candidates)=>{
        const [firstItem, ...restItems] = getItems().map((item)=>item.ref.current);
        const [lastItem] = restItems.slice(-1);
        const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
        for (const candidate of candidates){
            if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
            candidate?.scrollIntoView({
                block: "nearest"
            });
            if (candidate === firstItem && viewport) viewport.scrollTop = 0;
            if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
            candidate?.focus();
            if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
        }
    }, [
        getItems,
        viewport
    ]);
    const focusSelectedItem = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>focusFirst([
            selectedItem,
            content
        ]), [
        focusFirst,
        selectedItem,
        content
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (isPositioned) {
            focusSelectedItem();
        }
    }, [
        isPositioned,
        focusSelectedItem
    ]);
    const { onOpenChange, triggerPointerDownPosRef } = context;
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (content) {
            let pointerMoveDelta = {
                x: 0,
                y: 0
            };
            const handlePointerMove = (event)=>{
                pointerMoveDelta = {
                    x: Math.abs(Math.round(event.pageX) - (triggerPointerDownPosRef.current?.x ?? 0)),
                    y: Math.abs(Math.round(event.pageY) - (triggerPointerDownPosRef.current?.y ?? 0))
                };
            };
            const handlePointerUp = (event)=>{
                if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) {
                    event.preventDefault();
                } else {
                    if (!content.contains(event.target)) {
                        onOpenChange(false);
                    }
                }
                document.removeEventListener("pointermove", handlePointerMove);
                triggerPointerDownPosRef.current = null;
            };
            if (triggerPointerDownPosRef.current !== null) {
                document.addEventListener("pointermove", handlePointerMove);
                document.addEventListener("pointerup", handlePointerUp, {
                    capture: true,
                    once: true
                });
            }
            return ()=>{
                document.removeEventListener("pointermove", handlePointerMove);
                document.removeEventListener("pointerup", handlePointerUp, {
                    capture: true
                });
            };
        }
    }, [
        content,
        onOpenChange,
        triggerPointerDownPosRef
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const close = ()=>onOpenChange(false);
        window.addEventListener("blur", close);
        window.addEventListener("resize", close);
        return ()=>{
            window.removeEventListener("blur", close);
            window.removeEventListener("resize", close);
        };
    }, [
        onOpenChange
    ]);
    const [searchRef, handleTypeaheadSearch] = useTypeaheadSearch((search)=>{
        const enabledItems = getItems().filter((item)=>!item.disabled);
        const currentItem = enabledItems.find((item)=>item.ref.current === document.activeElement);
        const nextItem = findNextItem(enabledItems, search, currentItem);
        if (nextItem) {
            setTimeout(()=>nextItem.ref.current.focus());
        }
    });
    const itemRefCallback = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node, value, disabled)=>{
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
            setSelectedItem(node);
            if (isFirstValidItem) firstValidItemFoundRef.current = true;
        }
    }, [
        context.value
    ]);
    const handleItemLeave = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>content?.focus(), [
        content
    ]);
    const itemTextRefCallback = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node, value, disabled)=>{
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
            setSelectedItemText(node);
        }
    }, [
        context.value
    ]);
    const SelectPosition = position === "popper" ? SelectPopperPosition : SelectItemAlignedPosition;
    const popperContentProps = SelectPosition === SelectPopperPosition ? {
        side,
        sideOffset,
        align,
        alignOffset,
        arrowPadding,
        collisionBoundary,
        collisionPadding,
        sticky,
        hideWhenDetached,
        avoidCollisions
    } : {};
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectContentProvider, {
        scope: __scopeSelect,
        content,
        viewport,
        onViewportChange: setViewport,
        itemRefCallback,
        selectedItem,
        onItemLeave: handleItemLeave,
        itemTextRefCallback,
        focusSelectedItem,
        selectedItemText,
        position,
        isPositioned,
        searchRef,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"], {
            as: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"],
            allowPinchZoom: true,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FocusScope"], {
                asChild: true,
                trapped: context.open,
                onMountAutoFocus: (event)=>{
                    event.preventDefault();
                },
                onUnmountAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onCloseAutoFocus, (event)=>{
                    context.trigger?.focus({
                        preventScroll: true
                    });
                    event.preventDefault();
                }),
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DismissableLayer"], {
                    asChild: true,
                    disableOutsidePointerEvents: true,
                    onEscapeKeyDown,
                    onPointerDownOutside,
                    onFocusOutside: (event)=>event.preventDefault(),
                    onDismiss: ()=>context.onOpenChange(false),
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectPosition, {
                        role: "listbox",
                        id: context.contentId,
                        "data-state": context.open ? "open" : "closed",
                        dir: context.dir,
                        onContextMenu: (event)=>event.preventDefault(),
                        ...contentProps,
                        ...popperContentProps,
                        onPlaced: ()=>setIsPositioned(true),
                        ref: composedRefs,
                        style: {
                            // flex layout so we can place the scroll buttons properly
                            display: "flex",
                            flexDirection: "column",
                            // reset the outline by default as the content MAY get focused
                            outline: "none",
                            ...contentProps.style
                        },
                        onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(contentProps.onKeyDown, (event)=>{
                            const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                            if (event.key === "Tab") event.preventDefault();
                            if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
                            if ([
                                "ArrowUp",
                                "ArrowDown",
                                "Home",
                                "End"
                            ].includes(event.key)) {
                                const items = getItems().filter((item)=>!item.disabled);
                                let candidateNodes = items.map((item)=>item.ref.current);
                                if ([
                                    "ArrowUp",
                                    "End"
                                ].includes(event.key)) {
                                    candidateNodes = candidateNodes.slice().reverse();
                                }
                                if ([
                                    "ArrowUp",
                                    "ArrowDown"
                                ].includes(event.key)) {
                                    const currentElement = event.target;
                                    const currentIndex = candidateNodes.indexOf(currentElement);
                                    candidateNodes = candidateNodes.slice(currentIndex + 1);
                                }
                                setTimeout(()=>focusFirst(candidateNodes));
                                event.preventDefault();
                            }
                        })
                    })
                })
            })
        })
    });
});
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition";
var SelectItemAlignedPosition = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, onPlaced, ...popperProps } = props;
    const context = useSelectContext(CONTENT_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(CONTENT_NAME, __scopeSelect);
    const [contentWrapper, setContentWrapper] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setContent(node));
    const getItems = useCollection(__scopeSelect);
    const shouldExpandOnScrollRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const shouldRepositionRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](true);
    const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
    const position = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
            const triggerRect = context.trigger.getBoundingClientRect();
            const contentRect = content.getBoundingClientRect();
            const valueNodeRect = context.valueNode.getBoundingClientRect();
            const itemTextRect = selectedItemText.getBoundingClientRect();
            if (context.dir !== "rtl") {
                const itemTextOffset = itemTextRect.left - contentRect.left;
                const left = valueNodeRect.left - itemTextOffset;
                const leftDelta = triggerRect.left - left;
                const minContentWidth = triggerRect.width + leftDelta;
                const contentWidth = Math.max(minContentWidth, contentRect.width);
                const rightEdge = window.innerWidth - CONTENT_MARGIN;
                const clampedLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(left, [
                    CONTENT_MARGIN,
                    // Prevents the content from going off the starting edge of the
                    // viewport. It may still go off the ending edge, but this can be
                    // controlled by the user since they may want to manage overflow in a
                    // specific way.
                    // https://github.com/radix-ui/primitives/issues/2049
                    Math.max(CONTENT_MARGIN, rightEdge - contentWidth)
                ]);
                contentWrapper.style.minWidth = minContentWidth + "px";
                contentWrapper.style.left = clampedLeft + "px";
            } else {
                const itemTextOffset = contentRect.right - itemTextRect.right;
                const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
                const rightDelta = window.innerWidth - triggerRect.right - right;
                const minContentWidth = triggerRect.width + rightDelta;
                const contentWidth = Math.max(minContentWidth, contentRect.width);
                const leftEdge = window.innerWidth - CONTENT_MARGIN;
                const clampedRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(right, [
                    CONTENT_MARGIN,
                    Math.max(CONTENT_MARGIN, leftEdge - contentWidth)
                ]);
                contentWrapper.style.minWidth = minContentWidth + "px";
                contentWrapper.style.right = clampedRight + "px";
            }
            const items = getItems();
            const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
            const itemsHeight = viewport.scrollHeight;
            const contentStyles = window.getComputedStyle(content);
            const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
            const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
            const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
            const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
            const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
            const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
            const viewportStyles = window.getComputedStyle(viewport);
            const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
            const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
            const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - CONTENT_MARGIN;
            const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
            const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
            const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
            const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
            const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
            const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
            if (willAlignWithoutTopOverflow) {
                const isLastItem = items.length > 0 && selectedItem === items[items.length - 1].ref.current;
                contentWrapper.style.bottom = "0px";
                const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
                const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + // viewport might have padding bottom, include it to avoid a scrollable viewport
                (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
                const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
                contentWrapper.style.height = height + "px";
            } else {
                const isFirstItem = items.length > 0 && selectedItem === items[0].ref.current;
                contentWrapper.style.top = "0px";
                const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
                (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
                const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
                contentWrapper.style.height = height + "px";
                viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
            }
            contentWrapper.style.margin = `${CONTENT_MARGIN}px 0`;
            contentWrapper.style.minHeight = minContentHeight + "px";
            contentWrapper.style.maxHeight = availableHeight + "px";
            onPlaced?.();
            requestAnimationFrame(()=>shouldExpandOnScrollRef.current = true);
        }
    }, [
        getItems,
        context.trigger,
        context.valueNode,
        contentWrapper,
        content,
        viewport,
        selectedItem,
        selectedItemText,
        context.dir,
        onPlaced
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>position(), [
        position
    ]);
    const [contentZIndex, setContentZIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [
        content
    ]);
    const handleScrollButtonChange = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node)=>{
        if (node && shouldRepositionRef.current === true) {
            position();
            focusSelectedItem?.();
            shouldRepositionRef.current = false;
        }
    }, [
        position,
        focusSelectedItem
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectViewportProvider, {
        scope: __scopeSelect,
        contentWrapper,
        shouldExpandOnScrollRef,
        onScrollButtonChange: handleScrollButtonChange,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ref: setContentWrapper,
            style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: contentZIndex
            },
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
                ...popperProps,
                ref: composedRefs,
                style: {
                    // When we get the height of the content, it includes borders. If we were to set
                    // the height without having `boxSizing: 'border-box'` it would be too big.
                    boxSizing: "border-box",
                    // We need to ensure the content doesn't get taller than the wrapper
                    maxHeight: "100%",
                    ...popperProps.style
                }
            })
        })
    });
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition";
var SelectPopperPosition = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, align = "start", collisionPadding = CONTENT_MARGIN, ...popperProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ...popperScope,
        ...popperProps,
        ref: forwardedRef,
        align,
        collisionPadding,
        style: {
            // Ensure border-box for floating-ui calculations
            boxSizing: "border-box",
            ...popperProps.style,
            // re-namespace exposed content custom properties
            ...{
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }
    });
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME, {});
var VIEWPORT_NAME = "SelectViewport";
var SelectViewport = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, nonce, ...viewportProps } = props;
    const contentContext = useSelectContentContext(VIEWPORT_NAME, __scopeSelect);
    const viewportContext = useSelectViewportContext(VIEWPORT_NAME, __scopeSelect);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, contentContext.onViewportChange);
    const prevScrollTopRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
                },
                nonce
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
                scope: __scopeSelect,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
                    "data-radix-select-viewport": "",
                    role: "presentation",
                    ...viewportProps,
                    ref: composedRefs,
                    style: {
                        // we use position: 'relative' here on the `viewport` so that when we call
                        // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
                        // (independent of the scrollUpButton).
                        position: "relative",
                        flex: 1,
                        // Viewport should only be scrollable in the vertical direction.
                        // This won't work in vertical writing modes, so we'll need to
                        // revisit this if/when that is supported
                        // https://developer.chrome.com/blog/vertical-form-controls
                        overflow: "hidden auto",
                        ...viewportProps.style
                    },
                    onScroll: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(viewportProps.onScroll, (event)=>{
                        const viewport = event.currentTarget;
                        const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
                        if (shouldExpandOnScrollRef?.current && contentWrapper) {
                            const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
                            if (scrolledBy > 0) {
                                const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
                                const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
                                const cssHeight = parseFloat(contentWrapper.style.height);
                                const prevHeight = Math.max(cssMinHeight, cssHeight);
                                if (prevHeight < availableHeight) {
                                    const nextHeight = prevHeight + scrolledBy;
                                    const clampedNextHeight = Math.min(availableHeight, nextHeight);
                                    const heightDiff = nextHeight - clampedNextHeight;
                                    contentWrapper.style.height = clampedNextHeight + "px";
                                    if (contentWrapper.style.bottom === "0px") {
                                        viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
                                        contentWrapper.style.justifyContent = "flex-end";
                                    }
                                }
                            }
                        }
                        prevScrollTopRef.current = viewport.scrollTop;
                    })
                })
            })
        ]
    });
});
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup";
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME);
var SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, ...groupProps } = props;
    const groupId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectGroupContextProvider, {
        scope: __scopeSelect,
        id: groupId,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            role: "group",
            "aria-labelledby": groupId,
            ...groupProps,
            ref: forwardedRef
        })
    });
});
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel";
var SelectLabel = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, ...labelProps } = props;
    const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        id: groupContext.id,
        ...labelProps,
        ref: forwardedRef
    });
});
SelectLabel.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME);
var SelectItem = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, value, disabled = false, textValue: textValueProp, ...itemProps } = props;
    const context = useSelectContext(ITEM_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_NAME, __scopeSelect);
    const isSelected = context.value === value;
    const [textValue, setTextValue] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](textValueProp ?? "");
    const [isFocused, setIsFocused] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>contentContext.itemRefCallback?.(node, value, disabled));
    const textId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const pointerTypeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("touch");
    const handleSelect = ()=>{
        if (!disabled) {
            context.onValueChange(value);
            context.onOpenChange(false);
        }
    };
    if (value === "") {
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectItemContextProvider, {
        scope: __scopeSelect,
        value,
        disabled,
        textId,
        isSelected,
        onItemTextChange: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node)=>{
            setTextValue((prevTextValue)=>prevTextValue || (node?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.ItemSlot, {
            scope: __scopeSelect,
            value,
            disabled,
            textValue,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
                role: "option",
                "aria-labelledby": textId,
                "data-highlighted": isFocused ? "" : void 0,
                "aria-selected": isSelected && isFocused,
                "data-state": isSelected ? "checked" : "unchecked",
                "aria-disabled": disabled || void 0,
                "data-disabled": disabled ? "" : void 0,
                tabIndex: disabled ? void 0 : -1,
                ...itemProps,
                ref: composedRefs,
                onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onFocus, ()=>setIsFocused(true)),
                onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onBlur, ()=>setIsFocused(false)),
                onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onClick, ()=>{
                    if (pointerTypeRef.current !== "mouse") handleSelect();
                }),
                onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onPointerUp, ()=>{
                    if (pointerTypeRef.current === "mouse") handleSelect();
                }),
                onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onPointerDown, (event)=>{
                    pointerTypeRef.current = event.pointerType;
                }),
                onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onPointerMove, (event)=>{
                    pointerTypeRef.current = event.pointerType;
                    if (disabled) {
                        contentContext.onItemLeave?.();
                    } else if (pointerTypeRef.current === "mouse") {
                        event.currentTarget.focus({
                            preventScroll: true
                        });
                    }
                }),
                onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onPointerLeave, (event)=>{
                    if (event.currentTarget === document.activeElement) {
                        contentContext.onItemLeave?.();
                    }
                }),
                onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onKeyDown, (event)=>{
                    const isTypingAhead = contentContext.searchRef?.current !== "";
                    if (isTypingAhead && event.key === " ") return;
                    if (SELECTION_KEYS.includes(event.key)) handleSelect();
                    if (event.key === " ") event.preventDefault();
                })
            })
        })
    });
});
SelectItem.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemText = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, className, style, ...itemTextProps } = props;
    const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_TEXT_NAME, __scopeSelect);
    const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
    const nativeOptionsContext = useSelectNativeOptionsContext(ITEM_TEXT_NAME, __scopeSelect);
    const [itemTextNode, setItemTextNode] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setItemTextNode(node), itemContext.onItemTextChange, (node)=>contentContext.itemTextRefCallback?.(node, itemContext.value, itemContext.disabled));
    const textContent = itemTextNode?.textContent;
    const nativeOption = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("option", {
            value: itemContext.value,
            disabled: itemContext.disabled,
            children: textContent
        }, itemContext.value), [
        itemContext.disabled,
        itemContext.value,
        textContent
    ]);
    const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        onNativeOptionAdd(nativeOption);
        return ()=>onNativeOptionRemove(nativeOption);
    }, [
        onNativeOptionAdd,
        onNativeOptionRemove,
        nativeOption
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
                id: itemContext.textId,
                ...itemTextProps,
                ref: composedRefs
            }),
            itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"](itemTextProps.children, context.valueNode) : null
        ]
    });
});
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator";
var SelectItemIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, ...itemIndicatorProps } = props;
    const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect);
    return itemContext.isSelected ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
        "aria-hidden": true,
        ...itemIndicatorProps,
        ref: forwardedRef
    }) : null;
});
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const contentContext = useSelectContentContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
    const viewportContext = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
    const [canScrollUp, setCanScrollUp] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, viewportContext.onScrollButtonChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (contentContext.viewport && contentContext.isPositioned) {
            let handleScroll2 = function() {
                const canScrollUp2 = viewport.scrollTop > 0;
                setCanScrollUp(canScrollUp2);
            };
            var handleScroll = handleScroll2;
            const viewport = contentContext.viewport;
            handleScroll2();
            viewport.addEventListener("scroll", handleScroll2);
            return ()=>viewport.removeEventListener("scroll", handleScroll2);
        }
    }, [
        contentContext.viewport,
        contentContext.isPositioned
    ]);
    return canScrollUp ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectScrollButtonImpl, {
        ...props,
        ref: composedRefs,
        onAutoScroll: ()=>{
            const { viewport, selectedItem } = contentContext;
            if (viewport && selectedItem) {
                viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
            }
        }
    }) : null;
});
SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const contentContext = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
    const viewportContext = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
    const [canScrollDown, setCanScrollDown] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, viewportContext.onScrollButtonChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (contentContext.viewport && contentContext.isPositioned) {
            let handleScroll2 = function() {
                const maxScroll = viewport.scrollHeight - viewport.clientHeight;
                const canScrollDown2 = Math.ceil(viewport.scrollTop) < maxScroll;
                setCanScrollDown(canScrollDown2);
            };
            var handleScroll = handleScroll2;
            const viewport = contentContext.viewport;
            handleScroll2();
            viewport.addEventListener("scroll", handleScroll2);
            return ()=>viewport.removeEventListener("scroll", handleScroll2);
        }
    }, [
        contentContext.viewport,
        contentContext.isPositioned
    ]);
    return canScrollDown ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectScrollButtonImpl, {
        ...props,
        ref: composedRefs,
        onAutoScroll: ()=>{
            const { viewport, selectedItem } = contentContext;
            if (viewport && selectedItem) {
                viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
            }
        }
    }) : null;
});
SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
    const contentContext = useSelectContentContext("SelectScrollButton", __scopeSelect);
    const autoScrollTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const getItems = useCollection(__scopeSelect);
    const clearAutoScrollTimer = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        if (autoScrollTimerRef.current !== null) {
            window.clearInterval(autoScrollTimerRef.current);
            autoScrollTimerRef.current = null;
        }
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return ()=>clearAutoScrollTimer();
    }, [
        clearAutoScrollTimer
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const activeItem = getItems().find((item)=>item.ref.current === document.activeElement);
        activeItem?.ref.current?.scrollIntoView({
            block: "nearest"
        });
    }, [
        getItems
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "aria-hidden": true,
        ...scrollIndicatorProps,
        ref: forwardedRef,
        style: {
            flexShrink: 0,
            ...scrollIndicatorProps.style
        },
        onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(scrollIndicatorProps.onPointerDown, ()=>{
            if (autoScrollTimerRef.current === null) {
                autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
            }
        }),
        onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(scrollIndicatorProps.onPointerMove, ()=>{
            contentContext.onItemLeave?.();
            if (autoScrollTimerRef.current === null) {
                autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
            }
        }),
        onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(scrollIndicatorProps.onPointerLeave, ()=>{
            clearAutoScrollTimer();
        })
    });
});
var SEPARATOR_NAME = "SelectSeparator";
var SelectSeparator = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, ...separatorProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "aria-hidden": true,
        ...separatorProps,
        ref: forwardedRef
    });
});
SelectSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "SelectArrow";
var SelectArrow = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const context = useSelectContext(ARROW_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ARROW_NAME, __scopeSelect);
    return context.open && contentContext.position === "popper" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
        ...popperScope,
        ...arrowProps,
        ref: forwardedRef
    }) : null;
});
SelectArrow.displayName = ARROW_NAME;
function shouldShowPlaceholder(value) {
    return value === "" || value === void 0;
}
var BubbleSelect = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { value, ...selectProps } = props;
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const prevValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePrevious"])(value);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const select = ref.current;
        const selectProto = window.HTMLSelectElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(selectProto, "value");
        const setValue = descriptor.set;
        if (prevValue !== value && setValue) {
            const event = new Event("change", {
                bubbles: true
            });
            setValue.call(select, value);
            select.dispatchEvent(event);
        }
    }, [
        prevValue,
        value
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
        asChild: true,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("select", {
            ...selectProps,
            ref: composedRefs,
            defaultValue: value
        })
    });
});
BubbleSelect.displayName = "BubbleSelect";
function useTypeaheadSearch(onSearchChange) {
    const handleSearchChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onSearchChange);
    const searchRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("");
    const timerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const handleTypeaheadSearch = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((key)=>{
        const search = searchRef.current + key;
        handleSearchChange(search);
        (function updateSearch(value) {
            searchRef.current = value;
            window.clearTimeout(timerRef.current);
            if (value !== "") timerRef.current = window.setTimeout(()=>updateSearch(""), 1e3);
        })(search);
    }, [
        handleSearchChange
    ]);
    const resetTypeahead = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        searchRef.current = "";
        window.clearTimeout(timerRef.current);
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return ()=>window.clearTimeout(timerRef.current);
    }, []);
    return [
        searchRef,
        handleTypeaheadSearch,
        resetTypeahead
    ];
}
function findNextItem(items, search, currentItem) {
    const isRepeated = search.length > 1 && Array.from(search).every((char)=>char === search[0]);
    const normalizedSearch = isRepeated ? search[0] : search;
    const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
    let wrappedItems = wrapArray(items, Math.max(currentItemIndex, 0));
    const excludeCurrentItem = normalizedSearch.length === 1;
    if (excludeCurrentItem) wrappedItems = wrappedItems.filter((v)=>v !== currentItem);
    const nextItem = wrappedItems.find((item)=>item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
    return nextItem !== currentItem ? nextItem : void 0;
}
function wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]);
}
var Root2 = Select;
var Trigger = SelectTrigger;
var Value = SelectValue;
var Icon = SelectIcon;
var Portal = SelectPortal;
var Content2 = SelectContent;
var Viewport = SelectViewport;
var Group = SelectGroup;
var Label = SelectLabel;
var Item = SelectItem;
var ItemText = SelectItemText;
var ItemIndicator = SelectItemIndicator;
var ScrollUpButton = SelectScrollUpButton;
var ScrollDownButton = SelectScrollDownButton;
var Separator = SelectSeparator;
var Arrow2 = SelectArrow;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryObserver.ts
__turbopack_context__.s([
    "QueryObserver",
    ()=>QueryObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/query.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/thenable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var QueryObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(client, options){
        super();
        this.options = options;
        this.#client = client;
        this.#selectError = null;
        this.#currentThenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pendingThenable"])();
        this.bindMethods();
        this.setOptions(options);
    }
    #client;
    #currentQuery = void 0;
    #currentQueryInitialState = void 0;
    #currentResult = void 0;
    #currentResultState;
    #currentResultOptions;
    #currentThenable;
    #selectError;
    #selectFn;
    #selectResult;
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    #lastQueryWithDefinedData;
    #staleTimeoutId;
    #refetchIntervalId;
    #currentRefetchInterval;
    #trackedProps = /* @__PURE__ */ new Set();
    bindMethods() {
        this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
        if (this.listeners.size === 1) {
            this.#currentQuery.addObserver(this);
            if (shouldFetchOnMount(this.#currentQuery, this.options)) {
                this.#executeFetch();
            } else {
                this.updateResult();
            }
            this.#updateTimers();
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.destroy();
        }
    }
    shouldFetchOnReconnect() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
        this.listeners = /* @__PURE__ */ new Set();
        this.#clearStaleTimeout();
        this.#clearRefetchInterval();
        this.#currentQuery.removeObserver(this);
    }
    setOptions(options) {
        const prevOptions = this.options;
        const prevQuery = this.#currentQuery;
        this.options = this.#client.defaultQueryOptions(options);
        if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== "boolean") {
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        }
        this.#updateQuery();
        this.#currentQuery.setOptions(this.options);
        if (prevOptions._defaulted && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) {
            this.#client.getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: this.#currentQuery,
                observer: this
            });
        }
        const mounted = this.hasListeners();
        if (mounted && shouldFetchOptionally(this.#currentQuery, prevQuery, this.options, prevOptions)) {
            this.#executeFetch();
        }
        this.updateResult();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, this.#currentQuery) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(prevOptions.staleTime, this.#currentQuery))) {
            this.#updateStaleTimeout();
        }
        const nextRefetchInterval = this.#computeRefetchInterval();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
            this.#updateRefetchInterval(nextRefetchInterval);
        }
    }
    getOptimisticResult(options) {
        const query = this.#client.getQueryCache().build(this.#client, options);
        const result = this.createResult(query, options);
        if (shouldAssignObserverCurrentProperties(this, result)) {
            this.#currentResult = result;
            this.#currentResultOptions = this.options;
            this.#currentResultState = this.#currentQuery.state;
        }
        return result;
    }
    getCurrentResult() {
        return this.#currentResult;
    }
    trackResult(result, onPropTracked) {
        return new Proxy(result, {
            get: (target, key)=>{
                this.trackProp(key);
                onPropTracked?.(key);
                if (key === "promise") {
                    this.trackProp("data");
                    if (!this.options.experimental_prefetchInRender && this.#currentThenable.status === "pending") {
                        this.#currentThenable.reject(new Error("experimental_prefetchInRender feature flag is not enabled"));
                    }
                }
                return Reflect.get(target, key);
            }
        });
    }
    trackProp(key) {
        this.#trackedProps.add(key);
    }
    getCurrentQuery() {
        return this.#currentQuery;
    }
    refetch({ ...options } = {}) {
        return this.fetch({
            ...options
        });
    }
    fetchOptimistic(options) {
        const defaultedOptions = this.#client.defaultQueryOptions(options);
        const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
        return query.fetch().then(()=>this.createResult(query, defaultedOptions));
    }
    fetch(fetchOptions) {
        return this.#executeFetch({
            ...fetchOptions,
            cancelRefetch: fetchOptions.cancelRefetch ?? true
        }).then(()=>{
            this.updateResult();
            return this.#currentResult;
        });
    }
    #executeFetch(fetchOptions) {
        this.#updateQuery();
        let promise = this.#currentQuery.fetch(this.options, fetchOptions);
        if (!fetchOptions?.throwOnError) {
            promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
        }
        return promise;
    }
    #updateStaleTimeout() {
        this.#clearStaleTimeout();
        const staleTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] || this.#currentResult.isStale || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidTimeout"])(staleTime)) {
            return;
        }
        const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.#currentResult.dataUpdatedAt, staleTime);
        const timeout = time + 1;
        this.#staleTimeoutId = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(()=>{
            if (!this.#currentResult.isStale) {
                this.updateResult();
            }
        }, timeout);
    }
    #computeRefetchInterval() {
        return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
    }
    #updateRefetchInterval(nextInterval) {
        this.#clearRefetchInterval();
        this.#currentRefetchInterval = nextInterval;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) === false || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
            return;
        }
        this.#refetchIntervalId = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].setInterval(()=>{
            if (this.options.refetchIntervalInBackground || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusManager"].isFocused()) {
                this.#executeFetch();
            }
        }, this.#currentRefetchInterval);
    }
    #updateTimers() {
        this.#updateStaleTimeout();
        this.#updateRefetchInterval(this.#computeRefetchInterval());
    }
    #clearStaleTimeout() {
        if (this.#staleTimeoutId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].clearTimeout(this.#staleTimeoutId);
            this.#staleTimeoutId = void 0;
        }
    }
    #clearRefetchInterval() {
        if (this.#refetchIntervalId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].clearInterval(this.#refetchIntervalId);
            this.#refetchIntervalId = void 0;
        }
    }
    createResult(query, options) {
        const prevQuery = this.#currentQuery;
        const prevOptions = this.options;
        const prevResult = this.#currentResult;
        const prevResultState = this.#currentResultState;
        const prevResultOptions = this.#currentResultOptions;
        const queryChange = query !== prevQuery;
        const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
        const { state } = query;
        let newState = {
            ...state
        };
        let isPlaceholderData = false;
        let data;
        if (options._optimisticResults) {
            const mounted = this.hasListeners();
            const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
            const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
            if (fetchOnMount || fetchOptionally) {
                newState = {
                    ...newState,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchState"])(state.data, query.options)
                };
            }
            if (options._optimisticResults === "isRestoring") {
                newState.fetchStatus = "idle";
            }
        }
        let { error, errorUpdatedAt, status } = newState;
        data = newState.data;
        let skipSelect = false;
        if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
            let placeholderData;
            if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
                placeholderData = prevResult.data;
                skipSelect = true;
            } else {
                placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(this.#lastQueryWithDefinedData?.state.data, this.#lastQueryWithDefinedData) : options.placeholderData;
            }
            if (placeholderData !== void 0) {
                status = "success";
                data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, placeholderData, options);
                isPlaceholderData = true;
            }
        }
        if (options.select && data !== void 0 && !skipSelect) {
            if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) {
                data = this.#selectResult;
            } else {
                try {
                    this.#selectFn = options.select;
                    data = options.select(data);
                    data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, data, options);
                    this.#selectResult = data;
                    this.#selectError = null;
                } catch (selectError) {
                    this.#selectError = selectError;
                }
            }
        }
        if (this.#selectError) {
            error = this.#selectError;
            data = this.#selectResult;
            errorUpdatedAt = Date.now();
            status = "error";
        }
        const isFetching = newState.fetchStatus === "fetching";
        const isPending = status === "pending";
        const isError = status === "error";
        const isLoading = isPending && isFetching;
        const hasData = data !== void 0;
        const result = {
            status,
            fetchStatus: newState.fetchStatus,
            isPending,
            isSuccess: status === "success",
            isError,
            isInitialLoading: isLoading,
            isLoading,
            data,
            dataUpdatedAt: newState.dataUpdatedAt,
            error,
            errorUpdatedAt,
            failureCount: newState.fetchFailureCount,
            failureReason: newState.fetchFailureReason,
            errorUpdateCount: newState.errorUpdateCount,
            isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
            isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
            isFetching,
            isRefetching: isFetching && !isPending,
            isLoadingError: isError && !hasData,
            isPaused: newState.fetchStatus === "paused",
            isPlaceholderData,
            isRefetchError: isError && hasData,
            isStale: isStale(query, options),
            refetch: this.refetch,
            promise: this.#currentThenable,
            isEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false
        };
        const nextResult = result;
        if (this.options.experimental_prefetchInRender) {
            const finalizeThenableIfPossible = (thenable)=>{
                if (nextResult.status === "error") {
                    thenable.reject(nextResult.error);
                } else if (nextResult.data !== void 0) {
                    thenable.resolve(nextResult.data);
                }
            };
            const recreateThenable = ()=>{
                const pending = this.#currentThenable = nextResult.promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pendingThenable"])();
                finalizeThenableIfPossible(pending);
            };
            const prevThenable = this.#currentThenable;
            switch(prevThenable.status){
                case "pending":
                    if (query.queryHash === prevQuery.queryHash) {
                        finalizeThenableIfPossible(prevThenable);
                    }
                    break;
                case "fulfilled":
                    if (nextResult.status === "error" || nextResult.data !== prevThenable.value) {
                        recreateThenable();
                    }
                    break;
                case "rejected":
                    if (nextResult.status !== "error" || nextResult.error !== prevThenable.reason) {
                        recreateThenable();
                    }
                    break;
            }
        }
        return nextResult;
    }
    updateResult() {
        const prevResult = this.#currentResult;
        const nextResult = this.createResult(this.#currentQuery, this.options);
        this.#currentResultState = this.#currentQuery.state;
        this.#currentResultOptions = this.options;
        if (this.#currentResultState.data !== void 0) {
            this.#lastQueryWithDefinedData = this.#currentQuery;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(nextResult, prevResult)) {
            return;
        }
        this.#currentResult = nextResult;
        const shouldNotifyListeners = ()=>{
            if (!prevResult) {
                return true;
            }
            const { notifyOnChangeProps } = this.options;
            const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
            if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
                return true;
            }
            const includedProps = new Set(notifyOnChangePropsValue ?? this.#trackedProps);
            if (this.options.throwOnError) {
                includedProps.add("error");
            }
            return Object.keys(this.#currentResult).some((key)=>{
                const typedKey = key;
                const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
                return changed && includedProps.has(typedKey);
            });
        };
        this.#notify({
            listeners: shouldNotifyListeners()
        });
    }
    #updateQuery() {
        const query = this.#client.getQueryCache().build(this.#client, this.options);
        if (query === this.#currentQuery) {
            return;
        }
        const prevQuery = this.#currentQuery;
        this.#currentQuery = query;
        this.#currentQueryInitialState = query.state;
        if (this.hasListeners()) {
            prevQuery?.removeObserver(this);
            query.addObserver(this);
        }
    }
    onQueryUpdate() {
        this.updateResult();
        if (this.hasListeners()) {
            this.#updateTimers();
        }
    }
    #notify(notifyOptions) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            if (notifyOptions.listeners) {
                this.listeners.forEach((listener)=>{
                    listener(this.#currentResult);
                });
            }
            this.#client.getQueryCache().notify({
                query: this.#currentQuery,
                type: "observerResultsUpdated"
            });
        });
    }
};
function shouldLoadOnMount(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query) !== "static") {
        const value = typeof field === "function" ? field(query) : field;
        return value === "always" || value !== false && isStale(query, options);
    }
    return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return (query !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(observer.getCurrentResult(), optimisticResult)) {
        return true;
    }
    return false;
}
;
 //# sourceMappingURL=queryObserver.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/mutationObserver.ts
__turbopack_context__.s([
    "MutationObserver",
    ()=>MutationObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/mutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
;
;
;
var MutationObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subscribable"] {
    #client;
    #currentResult = void 0;
    #currentMutation;
    #mutateOptions;
    constructor(client, options){
        super();
        this.#client = client;
        this.setOptions(options);
        this.bindMethods();
        this.#updateResult();
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this);
        this.reset = this.reset.bind(this);
    }
    setOptions(options) {
        const prevOptions = this.options;
        this.options = this.#client.defaultMutationOptions(options);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) {
            this.#client.getMutationCache().notify({
                type: "observerOptionsUpdated",
                mutation: this.#currentMutation,
                observer: this
            });
        }
        if (prevOptions?.mutationKey && this.options.mutationKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashKey"])(prevOptions.mutationKey) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashKey"])(this.options.mutationKey)) {
            this.reset();
        } else if (this.#currentMutation?.state.status === "pending") {
            this.#currentMutation.setOptions(this.options);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#currentMutation?.removeObserver(this);
        }
    }
    onMutationUpdate(action) {
        this.#updateResult();
        this.#notify(action);
    }
    getCurrentResult() {
        return this.#currentResult;
    }
    reset() {
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = void 0;
        this.#updateResult();
        this.#notify();
    }
    mutate(variables, options) {
        this.#mutateOptions = options;
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
        this.#currentMutation.addObserver(this);
        return this.#currentMutation.execute(variables);
    }
    #updateResult() {
        const state = this.#currentMutation?.state ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultState"])();
        this.#currentResult = {
            ...state,
            isPending: state.status === "pending",
            isSuccess: state.status === "success",
            isError: state.status === "error",
            isIdle: state.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        };
    }
    #notify(action) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            if (this.#mutateOptions && this.hasListeners()) {
                const variables = this.#currentResult.variables;
                const onMutateResult = this.#currentResult.context;
                const context = {
                    client: this.#client,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey
                };
                if (action?.type === "success") {
                    this.#mutateOptions.onSuccess?.(action.data, variables, onMutateResult, context);
                    this.#mutateOptions.onSettled?.(action.data, null, variables, onMutateResult, context);
                } else if (action?.type === "error") {
                    this.#mutateOptions.onError?.(action.error, variables, onMutateResult, context);
                    this.#mutateOptions.onSettled?.(void 0, action.error, variables, onMutateResult, context);
                }
            }
            this.listeners.forEach((listener)=>{
                listener(this.#currentResult);
            });
        });
    }
};
;
 //# sourceMappingURL=mutationObserver.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryErrorResetBoundary",
    ()=>QueryErrorResetBoundary,
    "useQueryErrorResetBoundary",
    ()=>useQueryErrorResetBoundary
]);
// src/QueryErrorResetBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
function createValue() {
    let isReset = false;
    return {
        clearReset: ()=>{
            isReset = false;
        },
        reset: ()=>{
            isReset = true;
        },
        isReset: ()=>{
            return isReset;
        }
    };
}
var QueryErrorResetBoundaryContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](createValue());
var useQueryErrorResetBoundary = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({ children })=>{
    const [value] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>createValue());
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(QueryErrorResetBoundaryContext.Provider, {
        value,
        children: typeof children === "function" ? children(value) : children
    });
};
;
 //# sourceMappingURL=QueryErrorResetBoundary.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensurePreventErrorBoundaryRetry",
    ()=>ensurePreventErrorBoundaryRetry,
    "getHasError",
    ()=>getHasError,
    "useClearResetErrorBoundary",
    ()=>useClearResetErrorBoundary
]);
// src/errorBoundaryUtils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
"use client";
;
;
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary)=>{
    if (options.suspense || options.throwOnError || options.experimental_prefetchInRender) {
        if (!errorResetBoundary.isReset()) {
            options.retryOnMount = false;
        }
    }
};
var useClearResetErrorBoundary = (errorResetBoundary)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        errorResetBoundary.clearReset();
    }, [
        errorResetBoundary
    ]);
};
var getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense })=>{
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldThrowError"])(throwOnError, [
        result.error,
        query
    ]));
};
;
 //# sourceMappingURL=errorBoundaryUtils.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsRestoringProvider",
    ()=>IsRestoringProvider,
    "useIsRestoring",
    ()=>useIsRestoring
]);
// src/IsRestoringProvider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
var IsRestoringContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](false);
var useIsRestoring = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;
;
 //# sourceMappingURL=IsRestoringProvider.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/react-query/build/modern/suspense.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/suspense.ts
__turbopack_context__.s([
    "defaultThrowOnError",
    ()=>defaultThrowOnError,
    "ensureSuspenseTimers",
    ()=>ensureSuspenseTimers,
    "fetchOptimistic",
    ()=>fetchOptimistic,
    "shouldSuspend",
    ()=>shouldSuspend,
    "willFetch",
    ()=>willFetch
]);
var defaultThrowOnError = (_error, query)=>query.state.data === void 0;
var ensureSuspenseTimers = (defaultedOptions)=>{
    if (defaultedOptions.suspense) {
        const MIN_SUSPENSE_TIME_MS = 1e3;
        const clamp = (value)=>value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
        const originalStaleTime = defaultedOptions.staleTime;
        defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args)=>clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
        if (typeof defaultedOptions.gcTime === "number") {
            defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, MIN_SUSPENSE_TIME_MS);
        }
    }
};
var willFetch = (result, isRestoring)=>result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result)=>defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).catch(()=>{
        errorResetBoundary.clearReset();
    });
;
 //# sourceMappingURL=suspense.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseQuery",
    ()=>useBaseQuery
]);
// src/useBaseQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/react-query/build/modern/suspense.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function useBaseQuery(options, Observer, queryClient) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof options !== "object" || Array.isArray(options)) {
            throw new Error('Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object');
        }
    }
    const isRestoring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsRestoring"])();
    const errorResetBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryErrorResetBoundary"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const defaultedOptions = client.defaultQueryOptions(options);
    client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
    if ("TURBOPACK compile-time truthy", 1) {
        if (!defaultedOptions.queryFn) {
            console.error(`[${defaultedOptions.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`);
        }
    }
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureSuspenseTimers"])(defaultedOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensurePreventErrorBoundaryRetry"])(defaultedOptions, errorResetBoundary);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClearResetErrorBoundary"])(errorResetBoundary);
    const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new Observer(client, defaultedOptions));
    const result = observer.getOptimisticResult(defaultedOptions);
    const shouldSubscribe = !isRestoring && options.subscribed !== false;
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((onStoreChange)=>{
        const unsubscribe = shouldSubscribe ? observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)) : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
        observer.updateResult();
        return unsubscribe;
    }, [
        observer,
        shouldSubscribe
    ]), ()=>observer.getCurrentResult(), ()=>observer.getCurrentResult());
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        observer.setOptions(defaultedOptions);
    }, [
        defaultedOptions,
        observer
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldSuspend"])(defaultedOptions, result)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHasError"])({
        result,
        errorResetBoundary,
        throwOnError: defaultedOptions.throwOnError,
        query: client.getQueryCache().get(defaultedOptions.queryHash),
        suspense: defaultedOptions.suspense
    })) {
        throw result.error;
    }
    ;
    client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions, result);
    if (defaultedOptions.experimental_prefetchInRender && !__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["willFetch"])(result, isRestoring)) {
        const promise = isNewCacheEntry ? // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary) : // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
        client.getQueryCache().get(defaultedOptions.queryHash)?.promise;
        promise?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).finally(()=>{
            observer.updateResult();
        });
    }
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
;
 //# sourceMappingURL=useBaseQuery.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuery",
    ()=>useQuery
]);
// src/useQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-ssr] (ecmascript)");
"use client";
;
;
function useQuery(options, queryClient) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseQuery"])(options, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryObserver"], queryClient);
}
;
 //# sourceMappingURL=useQuery.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMutation",
    ()=>useMutation
]);
// src/useMutation.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/data-cure-ai-dashboard/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function useMutation(options, queryClient) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MutationObserver"](client, options));
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        observer.setOptions(options);
    }, [
        observer,
        options
    ]);
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((onStoreChange)=>observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)), [
        observer
    ]), ()=>observer.getCurrentResult(), ()=>observer.getCurrentResult());
    const mutate = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((variables, mutateOptions)=>{
        observer.mutate(variables, mutateOptions).catch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    }, [
        observer
    ]);
    if (result.error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$data$2d$cure$2d$ai$2d$dashboard$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldThrowError"])(observer.options.throwOnError, [
        result.error
    ])) {
        throw result.error;
    }
    return {
        ...result,
        mutate,
        mutateAsync: result.mutate
    };
}
;
 //# sourceMappingURL=useMutation.js.map
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/delayed-stream/lib/delayed_stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
module.exports = DelayedStream;
function DelayedStream() {
    this.source = null;
    this.dataSize = 0;
    this.maxDataSize = 1024 * 1024;
    this.pauseStream = true;
    this._maxDataSizeExceeded = false;
    this._released = false;
    this._bufferedEvents = [];
}
util.inherits(DelayedStream, Stream);
DelayedStream.create = function(source, options) {
    var delayedStream = new this();
    options = options || {};
    for(var option in options){
        delayedStream[option] = options[option];
    }
    delayedStream.source = source;
    var realEmit = source.emit;
    source.emit = function() {
        delayedStream._handleEmit(arguments);
        return realEmit.apply(source, arguments);
    };
    source.on('error', function() {});
    if (delayedStream.pauseStream) {
        source.pause();
    }
    return delayedStream;
};
Object.defineProperty(DelayedStream.prototype, 'readable', {
    configurable: true,
    enumerable: true,
    get: function() {
        return this.source.readable;
    }
});
DelayedStream.prototype.setEncoding = function() {
    return this.source.setEncoding.apply(this.source, arguments);
};
DelayedStream.prototype.resume = function() {
    if (!this._released) {
        this.release();
    }
    this.source.resume();
};
DelayedStream.prototype.pause = function() {
    this.source.pause();
};
DelayedStream.prototype.release = function() {
    this._released = true;
    this._bufferedEvents.forEach((function(args) {
        this.emit.apply(this, args);
    }).bind(this));
    this._bufferedEvents = [];
};
DelayedStream.prototype.pipe = function() {
    var r = Stream.prototype.pipe.apply(this, arguments);
    this.resume();
    return r;
};
DelayedStream.prototype._handleEmit = function(args) {
    if (this._released) {
        this.emit.apply(this, args);
        return;
    }
    if (args[0] === 'data') {
        this.dataSize += args[1].length;
        this._checkIfMaxDataSizeExceeded();
    }
    this._bufferedEvents.push(args);
};
DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
    if (this._maxDataSizeExceeded) {
        return;
    }
    if (this.dataSize <= this.maxDataSize) {
        return;
    }
    this._maxDataSizeExceeded = true;
    var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
    this.emit('error', new Error(message));
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/combined-stream/lib/combined_stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var DelayedStream = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/delayed-stream/lib/delayed_stream.js [app-ssr] (ecmascript)");
module.exports = CombinedStream;
function CombinedStream() {
    this.writable = false;
    this.readable = true;
    this.dataSize = 0;
    this.maxDataSize = 2 * 1024 * 1024;
    this.pauseStreams = true;
    this._released = false;
    this._streams = [];
    this._currentStream = null;
    this._insideLoop = false;
    this._pendingNext = false;
}
util.inherits(CombinedStream, Stream);
CombinedStream.create = function(options) {
    var combinedStream = new this();
    options = options || {};
    for(var option in options){
        combinedStream[option] = options[option];
    }
    return combinedStream;
};
CombinedStream.isStreamLike = function(stream) {
    return typeof stream !== 'function' && typeof stream !== 'string' && typeof stream !== 'boolean' && typeof stream !== 'number' && !Buffer.isBuffer(stream);
};
CombinedStream.prototype.append = function(stream) {
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
        if (!(stream instanceof DelayedStream)) {
            var newStream = DelayedStream.create(stream, {
                maxDataSize: Infinity,
                pauseStream: this.pauseStreams
            });
            stream.on('data', this._checkDataSize.bind(this));
            stream = newStream;
        }
        this._handleErrors(stream);
        if (this.pauseStreams) {
            stream.pause();
        }
    }
    this._streams.push(stream);
    return this;
};
CombinedStream.prototype.pipe = function(dest, options) {
    Stream.prototype.pipe.call(this, dest, options);
    this.resume();
    return dest;
};
CombinedStream.prototype._getNext = function() {
    this._currentStream = null;
    if (this._insideLoop) {
        this._pendingNext = true;
        return; // defer call
    }
    this._insideLoop = true;
    try {
        do {
            this._pendingNext = false;
            this._realGetNext();
        }while (this._pendingNext)
    } finally{
        this._insideLoop = false;
    }
};
CombinedStream.prototype._realGetNext = function() {
    var stream = this._streams.shift();
    if (typeof stream == 'undefined') {
        this.end();
        return;
    }
    if (typeof stream !== 'function') {
        this._pipeNext(stream);
        return;
    }
    var getStream = stream;
    getStream((function(stream) {
        var isStreamLike = CombinedStream.isStreamLike(stream);
        if (isStreamLike) {
            stream.on('data', this._checkDataSize.bind(this));
            this._handleErrors(stream);
        }
        this._pipeNext(stream);
    }).bind(this));
};
CombinedStream.prototype._pipeNext = function(stream) {
    this._currentStream = stream;
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
        stream.on('end', this._getNext.bind(this));
        stream.pipe(this, {
            end: false
        });
        return;
    }
    var value = stream;
    this.write(value);
    this._getNext();
};
CombinedStream.prototype._handleErrors = function(stream) {
    var self = this;
    stream.on('error', function(err) {
        self._emitError(err);
    });
};
CombinedStream.prototype.write = function(data) {
    this.emit('data', data);
};
CombinedStream.prototype.pause = function() {
    if (!this.pauseStreams) {
        return;
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == 'function') this._currentStream.pause();
    this.emit('pause');
};
CombinedStream.prototype.resume = function() {
    if (!this._released) {
        this._released = true;
        this.writable = true;
        this._getNext();
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == 'function') this._currentStream.resume();
    this.emit('resume');
};
CombinedStream.prototype.end = function() {
    this._reset();
    this.emit('end');
};
CombinedStream.prototype.destroy = function() {
    this._reset();
    this.emit('close');
};
CombinedStream.prototype._reset = function() {
    this.writable = false;
    this._streams = [];
    this._currentStream = null;
};
CombinedStream.prototype._checkDataSize = function() {
    this._updateDataSize();
    if (this.dataSize <= this.maxDataSize) {
        return;
    }
    var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
    this._emitError(new Error(message));
};
CombinedStream.prototype._updateDataSize = function() {
    this.dataSize = 0;
    var self = this;
    this._streams.forEach(function(stream) {
        if (!stream.dataSize) {
            return;
        }
        self.dataSize += stream.dataSize;
    });
    if (this._currentStream && this._currentStream.dataSize) {
        this.dataSize += this._currentStream.dataSize;
    }
};
CombinedStream.prototype._emitError = function(err) {
    this._reset();
    this.emit('error', err);
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/mime-types/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ /**
 * Module dependencies.
 * @private
 */ var db = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/mime-db/index.js [app-ssr] (ecmascript)");
var extname = __turbopack_context__.r("[externals]/path [external] (path, cjs)").extname;
/**
 * Module variables.
 * @private
 */ var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
var TEXT_TYPE_REGEXP = /^text\//i;
/**
 * Module exports.
 * @public
 */ exports.charset = charset;
exports.charsets = {
    lookup: charset
};
exports.contentType = contentType;
exports.extension = extension;
exports.extensions = Object.create(null);
exports.lookup = lookup;
exports.types = Object.create(null);
// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types);
/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */ function charset(type) {
    if (!type || typeof type !== 'string') {
        return false;
    }
    // TODO: use media-typer
    var match = EXTRACT_TYPE_REGEXP.exec(type);
    var mime = match && db[match[1].toLowerCase()];
    if (mime && mime.charset) {
        return mime.charset;
    }
    // default text/* to utf-8
    if (match && TEXT_TYPE_REGEXP.test(match[1])) {
        return 'UTF-8';
    }
    return false;
}
/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */ function contentType(str) {
    // TODO: should this even be in this module?
    if (!str || typeof str !== 'string') {
        return false;
    }
    var mime = str.indexOf('/') === -1 ? exports.lookup(str) : str;
    if (!mime) {
        return false;
    }
    // TODO: use content-type or other module
    if (mime.indexOf('charset') === -1) {
        var charset = exports.charset(mime);
        if (charset) mime += '; charset=' + charset.toLowerCase();
    }
    return mime;
}
/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */ function extension(type) {
    if (!type || typeof type !== 'string') {
        return false;
    }
    // TODO: use media-typer
    var match = EXTRACT_TYPE_REGEXP.exec(type);
    // get extensions
    var exts = match && exports.extensions[match[1].toLowerCase()];
    if (!exts || !exts.length) {
        return false;
    }
    return exts[0];
}
/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */ function lookup(path) {
    if (!path || typeof path !== 'string') {
        return false;
    }
    // get the extension ("ext" or ".ext" or full path)
    var extension = extname('x.' + path).toLowerCase().substr(1);
    if (!extension) {
        return false;
    }
    return exports.types[extension] || false;
}
/**
 * Populate the extensions and types maps.
 * @private
 */ function populateMaps(extensions, types) {
    // source preference (least -> most)
    var preference = [
        'nginx',
        'apache',
        undefined,
        'iana'
    ];
    Object.keys(db).forEach(function forEachMimeType(type) {
        var mime = db[type];
        var exts = mime.extensions;
        if (!exts || !exts.length) {
            return;
        }
        // mime -> extensions
        extensions[type] = exts;
        // extension -> mime
        for(var i = 0; i < exts.length; i++){
            var extension = exts[i];
            if (types[extension]) {
                var from = preference.indexOf(db[types[extension]].source);
                var to = preference.indexOf(mime.source);
                if (types[extension] !== 'application/octet-stream' && (from > to || from === to && types[extension].substr(0, 12) === 'application/')) {
                    continue;
                }
            }
            // set the extension -> mime
            types[extension] = type;
        }
    });
}
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/lib/defer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = defer;
/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */ function defer(fn) {
    var nextTick = typeof setImmediate == 'function' ? setImmediate : typeof process == 'object' && typeof process.nextTick == 'function' ? process.nextTick : null;
    if (nextTick) {
        nextTick(fn);
    } else {
        setTimeout(fn, 0);
    }
}
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var defer = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/lib/defer.js [app-ssr] (ecmascript)");
// API
module.exports = async;
/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */ function async(callback) {
    var isAsync = false;
    // check if async happened
    defer(function() {
        isAsync = true;
    });
    return function async_callback(err, result) {
        if (isAsync) {
            callback(err, result);
        } else {
            defer(function nextTick_callback() {
                callback(err, result);
            });
        }
    };
}
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// API
module.exports = abort;
/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */ function abort(state) {
    Object.keys(state.jobs).forEach(clean.bind(state));
    // reset leftover jobs
    state.jobs = {};
}
/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */ function clean(key) {
    if (typeof this.jobs[key] == 'function') {
        this.jobs[key]();
    }
}
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var async = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)"), abort = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)");
// API
module.exports = iterate;
/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */ function iterate(list, iterator, state, callback) {
    // store current index
    var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;
    state.jobs[key] = runJob(iterator, key, list[key], function(error, output) {
        // don't repeat yourself
        // skip secondary callbacks
        if (!(key in state.jobs)) {
            return;
        }
        // clean up jobs
        delete state.jobs[key];
        if (error) {
            // don't process rest of the results
            // stop still active jobs
            // and reset the list
            abort(state);
        } else {
            state.results[key] = output;
        }
        // return salvaged results
        callback(error, state.results);
    });
}
/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */ function runJob(iterator, key, item, callback) {
    var aborter;
    // allow shortcut if iterator expects only two arguments
    if (iterator.length == 2) {
        aborter = iterator(item, async(callback));
    } else {
        aborter = iterator(item, key, async(callback));
    }
    return aborter;
}
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// API
module.exports = state;
/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */ function state(list, sortMethod) {
    var isNamedList = !Array.isArray(list), initState = {
        index: 0,
        keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
        jobs: {},
        results: isNamedList ? {} : [],
        size: isNamedList ? Object.keys(list).length : list.length
    };
    if (sortMethod) {
        // sort array keys based on it's values
        // sort object's keys just on own merit
        initState.keyedList.sort(isNamedList ? sortMethod : function(a, b) {
            return sortMethod(list[a], list[b]);
        });
    }
    return initState;
}
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var abort = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)"), async = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)");
// API
module.exports = terminator;
/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */ function terminator(callback) {
    if (!Object.keys(this.jobs).length) {
        return;
    }
    // fast forward iteration index
    this.index = this.size;
    // abort jobs
    abort(this);
    // send back results we have so far
    async(callback)(null, this.results);
}
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/parallel.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var iterate = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)"), initState = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)"), terminator = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)");
// Public API
module.exports = parallel;
/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function parallel(list, iterator, callback) {
    var state = initState(list);
    while(state.index < (state['keyedList'] || list).length){
        iterate(list, iterator, state, function(error, result) {
            if (error) {
                callback(error, result);
                return;
            }
            // looks like it's the last one
            if (Object.keys(state.jobs).length === 0) {
                callback(null, state.results);
                return;
            }
        });
        state.index++;
    }
    return terminator.bind(state, callback);
}
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var iterate = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)"), initState = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)"), terminator = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)");
// Public API
module.exports = serialOrdered;
// sorting helpers
module.exports.ascending = ascending;
module.exports.descending = descending;
/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function serialOrdered(list, iterator, sortMethod, callback) {
    var state = initState(list, sortMethod);
    iterate(list, iterator, state, function iteratorHandler(error, result) {
        if (error) {
            callback(error, result);
            return;
        }
        state.index++;
        // are we there yet?
        if (state.index < (state['keyedList'] || list).length) {
            iterate(list, iterator, state, iteratorHandler);
            return;
        }
        // done here
        callback(null, state.results);
    });
    return terminator.bind(state, callback);
}
/*
 * -- Sort methods
 */ /**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */ function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */ function descending(a, b) {
    return -1 * ascending(a, b);
}
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/serial.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var serialOrdered = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)");
// Public API
module.exports = serial;
/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function serial(list, iterator, callback) {
    return serialOrdered(list, iterator, null, callback);
}
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    parallel: __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/parallel.js [app-ssr] (ecmascript)"),
    serial: __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/serial.js [app-ssr] (ecmascript)"),
    serialOrdered: __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)")
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Object;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/es-errors/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Error;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/es-errors/eval.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./eval')} */ module.exports = EvalError;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/es-errors/range.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./range')} */ module.exports = RangeError;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/es-errors/ref.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./ref')} */ module.exports = ReferenceError;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/es-errors/syntax.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./syntax')} */ module.exports = SyntaxError;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/es-errors/type.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./type')} */ module.exports = TypeError;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/es-errors/uri.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./uri')} */ module.exports = URIError;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/math-intrinsics/abs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./abs')} */ module.exports = Math.abs;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/math-intrinsics/floor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./floor')} */ module.exports = Math.floor;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/math-intrinsics/max.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./max')} */ module.exports = Math.max;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/math-intrinsics/min.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./min')} */ module.exports = Math.min;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/math-intrinsics/pow.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./pow')} */ module.exports = Math.pow;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/math-intrinsics/round.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./round')} */ module.exports = Math.round;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/math-intrinsics/isNaN.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/math-intrinsics/sign.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $isNaN = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/math-intrinsics/isNaN.js [app-ssr] (ecmascript)");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) {
        return number;
    }
    return number < 0 ? -1 : +1;
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/gopd/gOPD.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/gopd/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $gOPD = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/gopd/gOPD.js [app-ssr] (ecmascript)");
if ($gOPD) {
    try {
        $gOPD([], 'length');
    } catch (e) {
        // IE 8 has a broken gOPD
        $gOPD = null;
    }
}
module.exports = $gOPD;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/es-define-property/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
    try {
        $defineProperty({}, 'a', {
            value: 1
        });
    } catch (e) {
        // IE 8 has a broken defineProperty
        $defineProperty = false;
    }
}
module.exports = $defineProperty;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./shams')} */ /* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
        return false;
    }
    if (typeof Symbol.iterator === 'symbol') {
        return true;
    }
    /** @type {{ [k in symbol]?: unknown }} */ var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') {
        return false;
    }
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
        return false;
    }
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
        return false;
    }
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(var _ in obj){
        return false;
    } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
        return false;
    }
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
        return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        // eslint-disable-next-line no-extra-parens
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
        }
    }
    return true;
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/has-symbols/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') {
        return false;
    }
    if (typeof Symbol !== 'function') {
        return false;
    }
    if (typeof origSymbol('foo') !== 'symbol') {
        return false;
    }
    if (typeof Symbol('bar') !== 'symbol') {
        return false;
    }
    return hasSymbolSham();
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $Object = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/get-proto/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reflectGetProto = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)");
var originalGetProto = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)");
var getDunderProto = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/dunder-proto/get.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = reflectGetProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return reflectGetProto(O);
} : originalGetProto ? function getProto(O) {
    if (!O || typeof O !== 'object' && typeof O !== 'function') {
        throw new TypeError('getProto: not an object');
    }
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return originalGetProto(O);
} : getDunderProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return getDunderProto(O);
} : null;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/function-bind/implementation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1){
        arr[i] = a[i];
    }
    for(var j = 0; j < b.length; j += 1){
        arr[j + a.length] = b[j];
    }
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1){
        arr[j] = arrLike[i];
    }
    return arr;
};
var joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++){
        boundArgs[i] = '$' + i;
    }
    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/function-bind/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/function-bind/implementation.js [app-ssr] (ecmascript)");
module.exports = Function.prototype.bind || implementation;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/call-bind-apply-helpers/reflectApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/call-bind-apply-helpers/actualApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
var $reflectApply = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/call-bind-apply-helpers/reflectApply.js [app-ssr] (ecmascript)");
/** @type {import('./actualApply')} */ module.exports = $reflectApply || bind.call($call, $apply);
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/call-bind-apply-helpers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
var $actualApply = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/call-bind-apply-helpers/actualApply.js [app-ssr] (ecmascript)");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') {
        throw new $TypeError('a function is required');
    }
    return $actualApply(bind, $call, args);
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/dunder-proto/get.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBind = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/call-bind-apply-helpers/index.js [app-ssr] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/gopd/index.js [app-ssr] (ecmascript)");
var hasProtoAccessor;
try {
    // eslint-disable-next-line no-extra-parens, no-proto
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
        throw e;
    }
}
// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, '__proto__');
var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;
/** @type {import('./get')} */ module.exports = desc && typeof desc.get === 'function' ? callBind([
    desc.get
]) : typeof $getPrototypeOf === 'function' ? /** @type {import('./get')} */ function getDunder(value) {
    // eslint-disable-next-line eqeqeq
    return $getPrototypeOf(value == null ? value : $Object(value));
} : false;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/hasown/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var undefined1;
var $Object = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)");
var $Error = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/es-errors/index.js [app-ssr] (ecmascript)");
var $EvalError = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/es-errors/eval.js [app-ssr] (ecmascript)");
var $RangeError = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/es-errors/range.js [app-ssr] (ecmascript)");
var $ReferenceError = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/es-errors/ref.js [app-ssr] (ecmascript)");
var $SyntaxError = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/es-errors/syntax.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var $URIError = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/es-errors/uri.js [app-ssr] (ecmascript)");
var abs = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/math-intrinsics/abs.js [app-ssr] (ecmascript)");
var floor = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/math-intrinsics/floor.js [app-ssr] (ecmascript)");
var max = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/math-intrinsics/max.js [app-ssr] (ecmascript)");
var min = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/math-intrinsics/min.js [app-ssr] (ecmascript)");
var pow = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/math-intrinsics/pow.js [app-ssr] (ecmascript)");
var round = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/math-intrinsics/round.js [app-ssr] (ecmascript)");
var sign = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/math-intrinsics/sign.js [app-ssr] (ecmascript)");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/gopd/index.js [app-ssr] (ecmascript)");
var $defineProperty = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/es-define-property/index.js [app-ssr] (ecmascript)");
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/has-symbols/index.js [app-ssr] (ecmascript)")();
var getProto = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/get-proto/index.js [app-ssr] (ecmascript)");
var $ObjectGPO = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)");
var $ReflectGPO = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': $Error,
    '%eval%': eval,
    '%EvalError%': $EvalError,
    '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $Object,
    '%Object.getOwnPropertyDescriptor%': $gOPD,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $RangeError,
    '%ReferenceError%': $ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%Function.prototype.call%': $call,
    '%Function.prototype.apply%': $apply,
    '%Object.defineProperty%': $defineProperty,
    '%Object.getPrototypeOf%': $ObjectGPO,
    '%Math.abs%': abs,
    '%Math.floor%': floor,
    '%Math.max%': max,
    '%Math.min%': min,
    '%Math.pow%': pow,
    '%Math.round%': round,
    '%Math.sign%': sign,
    '%Reflect.getPrototypeOf%': $ReflectGPO
};
if (getProto) {
    try {
        null.error; // eslint-disable-line no-unused-expressions
    } catch (e) {
        // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
        var errorProto = getProto(getProto(e));
        INTRINSICS['%Error.prototype%'] = errorProto;
    }
}
var doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') {
        value = getEvalledConstructor('async function () {}');
    } else if (name === '%GeneratorFunction%') {
        value = getEvalledConstructor('function* () {}');
    } else if (name === '%AsyncGeneratorFunction%') {
        value = getEvalledConstructor('async function* () {}');
    } else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) {
            value = fn.prototype;
        }
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen && getProto) {
            value = getProto(gen.prototype);
        }
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    __proto__: null,
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/hasown/index.js [app-ssr] (ecmascript)");
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    } else if (last === '%' && first !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
            value = doEval(intrinsicName);
        }
        if (typeof value === 'undefined' && !allowMissing) {
            throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        }
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) {
        throw new $TypeError('intrinsic name must be a non-empty string');
    }
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
        throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
            throw new $SyntaxError('property names with quotes must have matching quotes');
        }
        if (part === 'constructor' || !isOwn) {
            skipFurtherCaching = true;
        }
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) {
                    throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                }
                return void undefined;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
                    value = desc.get;
                } else {
                    value = value[part];
                }
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
            }
        }
    }
    return value;
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/has-tostringtag/shams.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var hasSymbols = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/es-set-tostringtag/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)");
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var hasToStringTag = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/has-tostringtag/shams.js [app-ssr] (ecmascript)")();
var hasOwn = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/hasown/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var toStringTag = hasToStringTag ? Symbol.toStringTag : null;
/** @type {import('.')} */ module.exports = function setToStringTag(object, value) {
    var overrideIfSet = arguments.length > 2 && !!arguments[2] && arguments[2].force;
    var nonConfigurable = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
    if (typeof overrideIfSet !== 'undefined' && typeof overrideIfSet !== 'boolean' || typeof nonConfigurable !== 'undefined' && typeof nonConfigurable !== 'boolean') {
        throw new $TypeError('if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans');
    }
    if (toStringTag && (overrideIfSet || !hasOwn(object, toStringTag))) {
        if ($defineProperty) {
            $defineProperty(object, toStringTag, {
                configurable: !nonConfigurable,
                enumerable: false,
                value: value,
                writable: false
            });
        } else {
            object[toStringTag] = value; // eslint-disable-line no-param-reassign
        }
    }
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/form-data/lib/populate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// populates missing values
module.exports = function(dst, src) {
    Object.keys(src).forEach(function(prop) {
        dst[prop] = dst[prop] || src[prop]; // eslint-disable-line no-param-reassign
    });
    return dst;
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/form-data/lib/form_data.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var CombinedStream = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/combined-stream/lib/combined_stream.js [app-ssr] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var parseUrl = __turbopack_context__.r("[externals]/url [external] (url, cjs)").parse;
var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
var mime = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/mime-types/index.js [app-ssr] (ecmascript)");
var asynckit = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/asynckit/index.js [app-ssr] (ecmascript)");
var setToStringTag = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/es-set-tostringtag/index.js [app-ssr] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/hasown/index.js [app-ssr] (ecmascript)");
var populate = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/form-data/lib/populate.js [app-ssr] (ecmascript)");
/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {object} options - Properties to be added/overriden for FormData and CombinedStream
 */ function FormData(options) {
    if (!(this instanceof FormData)) {
        return new FormData(options);
    }
    this._overheadLength = 0;
    this._valueLength = 0;
    this._valuesToMeasure = [];
    CombinedStream.call(this);
    options = options || {}; // eslint-disable-line no-param-reassign
    for(var option in options){
        this[option] = options[option];
    }
}
// make it a Stream
util.inherits(FormData, CombinedStream);
FormData.LINE_BREAK = '\r\n';
FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';
FormData.prototype.append = function(field, value, options) {
    options = options || {}; // eslint-disable-line no-param-reassign
    // allow filename as single option
    if (typeof options === 'string') {
        options = {
            filename: options
        }; // eslint-disable-line no-param-reassign
    }
    var append = CombinedStream.prototype.append.bind(this);
    // all that streamy business can't handle numbers
    if (typeof value === 'number' || value == null) {
        value = String(value); // eslint-disable-line no-param-reassign
    }
    // https://github.com/felixge/node-form-data/issues/38
    if (Array.isArray(value)) {
        /*
     * Please convert your array into string
     * the way web server expects it
     */ this._error(new Error('Arrays are not supported.'));
        return;
    }
    var header = this._multiPartHeader(field, value, options);
    var footer = this._multiPartFooter();
    append(header);
    append(value);
    append(footer);
    // pass along options.knownLength
    this._trackLength(header, value, options);
};
FormData.prototype._trackLength = function(header, value, options) {
    var valueLength = 0;
    /*
   * used w/ getLengthSync(), when length is known.
   * e.g. for streaming directly from a remote server,
   * w/ a known file a size, and not wanting to wait for
   * incoming file to finish to get its size.
   */ if (options.knownLength != null) {
        valueLength += Number(options.knownLength);
    } else if (Buffer.isBuffer(value)) {
        valueLength = value.length;
    } else if (typeof value === 'string') {
        valueLength = Buffer.byteLength(value);
    }
    this._valueLength += valueLength;
    // @check why add CRLF? does this account for custom/multiple CRLFs?
    this._overheadLength += Buffer.byteLength(header) + FormData.LINE_BREAK.length;
    // empty or either doesn't have path or not an http response or not a stream
    if (!value || !value.path && !(value.readable && hasOwn(value, 'httpVersion')) && !(value instanceof Stream)) {
        return;
    }
    // no need to bother with the length
    if (!options.knownLength) {
        this._valuesToMeasure.push(value);
    }
};
FormData.prototype._lengthRetriever = function(value, callback) {
    if (hasOwn(value, 'fd')) {
        // take read range into a account
        // `end` = Infinity –> read file till the end
        //
        // TODO: Looks like there is bug in Node fs.createReadStream
        // it doesn't respect `end` options without `start` options
        // Fix it when node fixes it.
        // https://github.com/joyent/node/issues/7819
        if (value.end != undefined && value.end != Infinity && value.start != undefined) {
            // when end specified
            // no need to calculate range
            // inclusive, starts with 0
            callback(null, value.end + 1 - (value.start ? value.start : 0)); // eslint-disable-line callback-return
        // not that fast snoopy
        } else {
            // still need to fetch file size from fs
            fs.stat(value.path, function(err, stat) {
                if (err) {
                    callback(err);
                    return;
                }
                // update final size based on the range options
                var fileSize = stat.size - (value.start ? value.start : 0);
                callback(null, fileSize);
            });
        }
    // or http response
    } else if (hasOwn(value, 'httpVersion')) {
        callback(null, Number(value.headers['content-length'])); // eslint-disable-line callback-return
    // or request stream http://github.com/mikeal/request
    } else if (hasOwn(value, 'httpModule')) {
        // wait till response come back
        value.on('response', function(response) {
            value.pause();
            callback(null, Number(response.headers['content-length']));
        });
        value.resume();
    // something else
    } else {
        callback('Unknown stream'); // eslint-disable-line callback-return
    }
};
FormData.prototype._multiPartHeader = function(field, value, options) {
    /*
   * custom header specified (as string)?
   * it becomes responsible for boundary
   * (e.g. to handle extra CRLFs on .NET servers)
   */ if (typeof options.header === 'string') {
        return options.header;
    }
    var contentDisposition = this._getContentDisposition(value, options);
    var contentType = this._getContentType(value, options);
    var contents = '';
    var headers = {
        // add custom disposition as third element or keep it two elements if not
        'Content-Disposition': [
            'form-data',
            'name="' + field + '"'
        ].concat(contentDisposition || []),
        // if no content type. allow it to be empty array
        'Content-Type': [].concat(contentType || [])
    };
    // allow custom headers.
    if (typeof options.header === 'object') {
        populate(headers, options.header);
    }
    var header;
    for(var prop in headers){
        if (hasOwn(headers, prop)) {
            header = headers[prop];
            // skip nullish headers.
            if (header == null) {
                continue; // eslint-disable-line no-restricted-syntax, no-continue
            }
            // convert all headers to arrays.
            if (!Array.isArray(header)) {
                header = [
                    header
                ];
            }
            // add non-empty headers.
            if (header.length) {
                contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
            }
        }
    }
    return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
};
FormData.prototype._getContentDisposition = function(value, options) {
    var filename;
    if (typeof options.filepath === 'string') {
        // custom filepath for relative paths
        filename = path.normalize(options.filepath).replace(/\\/g, '/');
    } else if (options.filename || value && (value.name || value.path)) {
        /*
     * custom filename take precedence
     * formidable and the browser add a name property
     * fs- and request- streams have path property
     */ filename = path.basename(options.filename || value && (value.name || value.path));
    } else if (value && value.readable && hasOwn(value, 'httpVersion')) {
        // or try http response
        filename = path.basename(value.client._httpMessage.path || '');
    }
    if (filename) {
        return 'filename="' + filename + '"';
    }
};
FormData.prototype._getContentType = function(value, options) {
    // use custom content-type above all
    var contentType = options.contentType;
    // or try `name` from formidable, browser
    if (!contentType && value && value.name) {
        contentType = mime.lookup(value.name);
    }
    // or try `path` from fs-, request- streams
    if (!contentType && value && value.path) {
        contentType = mime.lookup(value.path);
    }
    // or if it's http-reponse
    if (!contentType && value && value.readable && hasOwn(value, 'httpVersion')) {
        contentType = value.headers['content-type'];
    }
    // or guess it from the filepath or filename
    if (!contentType && (options.filepath || options.filename)) {
        contentType = mime.lookup(options.filepath || options.filename);
    }
    // fallback to the default content type if `value` is not simple value
    if (!contentType && value && typeof value === 'object') {
        contentType = FormData.DEFAULT_CONTENT_TYPE;
    }
    return contentType;
};
FormData.prototype._multiPartFooter = function() {
    return (function(next) {
        var footer = FormData.LINE_BREAK;
        var lastPart = this._streams.length === 0;
        if (lastPart) {
            footer += this._lastBoundary();
        }
        next(footer);
    }).bind(this);
};
FormData.prototype._lastBoundary = function() {
    return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
};
FormData.prototype.getHeaders = function(userHeaders) {
    var header;
    var formHeaders = {
        'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
    };
    for(header in userHeaders){
        if (hasOwn(userHeaders, header)) {
            formHeaders[header.toLowerCase()] = userHeaders[header];
        }
    }
    return formHeaders;
};
FormData.prototype.setBoundary = function(boundary) {
    if (typeof boundary !== 'string') {
        throw new TypeError('FormData boundary must be a string');
    }
    this._boundary = boundary;
};
FormData.prototype.getBoundary = function() {
    if (!this._boundary) {
        this._generateBoundary();
    }
    return this._boundary;
};
FormData.prototype.getBuffer = function() {
    var dataBuffer = new Buffer.alloc(0); // eslint-disable-line new-cap
    var boundary = this.getBoundary();
    // Create the form content. Add Line breaks to the end of data.
    for(var i = 0, len = this._streams.length; i < len; i++){
        if (typeof this._streams[i] !== 'function') {
            // Add content to the buffer.
            if (Buffer.isBuffer(this._streams[i])) {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    this._streams[i]
                ]);
            } else {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    Buffer.from(this._streams[i])
                ]);
            }
            // Add break after content.
            if (typeof this._streams[i] !== 'string' || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    Buffer.from(FormData.LINE_BREAK)
                ]);
            }
        }
    }
    // Add the footer and return the Buffer object.
    return Buffer.concat([
        dataBuffer,
        Buffer.from(this._lastBoundary())
    ]);
};
FormData.prototype._generateBoundary = function() {
    // This generates a 50 character boundary similar to those used by Firefox.
    // They are optimized for boyer-moore parsing.
    this._boundary = '--------------------------' + crypto.randomBytes(12).toString('hex');
};
// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually and add it as knownLength option
FormData.prototype.getLengthSync = function() {
    var knownLength = this._overheadLength + this._valueLength;
    // Don't get confused, there are 3 "internal" streams for each keyval pair so it basically checks if there is any value added to the form
    if (this._streams.length) {
        knownLength += this._lastBoundary().length;
    }
    // https://github.com/form-data/form-data/issues/40
    if (!this.hasKnownLength()) {
        /*
     * Some async length retrievers are present
     * therefore synchronous length calculation is false.
     * Please use getLength(callback) to get proper length
     */ this._error(new Error('Cannot calculate proper length in synchronous way.'));
    }
    return knownLength;
};
// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData.prototype.hasKnownLength = function() {
    var hasKnownLength = true;
    if (this._valuesToMeasure.length) {
        hasKnownLength = false;
    }
    return hasKnownLength;
};
FormData.prototype.getLength = function(cb) {
    var knownLength = this._overheadLength + this._valueLength;
    if (this._streams.length) {
        knownLength += this._lastBoundary().length;
    }
    if (!this._valuesToMeasure.length) {
        process.nextTick(cb.bind(this, null, knownLength));
        return;
    }
    asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
        if (err) {
            cb(err);
            return;
        }
        values.forEach(function(length) {
            knownLength += length;
        });
        cb(null, knownLength);
    });
};
FormData.prototype.submit = function(params, cb) {
    var request;
    var options;
    var defaults = {
        method: 'post'
    };
    // parse provided url if it's string or treat it as options object
    if (typeof params === 'string') {
        params = parseUrl(params); // eslint-disable-line no-param-reassign
        /* eslint sort-keys: 0 */ options = populate({
            port: params.port,
            path: params.pathname,
            host: params.hostname,
            protocol: params.protocol
        }, defaults);
    } else {
        options = populate(params, defaults);
        // if no port provided use default one
        if (!options.port) {
            options.port = options.protocol === 'https:' ? 443 : 80;
        }
    }
    // put that good code in getHeaders to some use
    options.headers = this.getHeaders(params.headers);
    // https if specified, fallback to http in any other case
    if (options.protocol === 'https:') {
        request = https.request(options);
    } else {
        request = http.request(options);
    }
    // get content length and fire away
    this.getLength((function(err, length) {
        if (err && err !== 'Unknown stream') {
            this._error(err);
            return;
        }
        // add content length
        if (length) {
            request.setHeader('Content-Length', length);
        }
        this.pipe(request);
        if (cb) {
            var onResponse;
            var callback = function(error, responce) {
                request.removeListener('error', callback);
                request.removeListener('response', onResponse);
                return cb.call(this, error, responce);
            };
            onResponse = callback.bind(this, null);
            request.on('error', callback);
            request.on('response', onResponse);
        }
    }).bind(this));
    return request;
};
FormData.prototype._error = function(err) {
    if (!this.error) {
        this.error = err;
        this.pause();
        this.emit('error', err);
    }
};
FormData.prototype.toString = function() {
    return '[object FormData]';
};
setToStringTag(FormData.prototype, 'FormData');
// Public API
module.exports = FormData;
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/proxy-from-env/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var parseUrl = __turbopack_context__.r("[externals]/url [external] (url, cjs)").parse;
var DEFAULT_PORTS = {
    ftp: 21,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
var stringEndsWith = String.prototype.endsWith || function(s) {
    return s.length <= this.length && this.indexOf(s, this.length - s.length) !== -1;
};
/**
 * @param {string|object} url - The URL, or the result from url.parse.
 * @return {string} The URL of the proxy that should handle the request to the
 *  given URL. If no proxy is set, this will be an empty string.
 */ function getProxyForUrl(url) {
    var parsedUrl = typeof url === 'string' ? parseUrl(url) : url || {};
    var proto = parsedUrl.protocol;
    var hostname = parsedUrl.host;
    var port = parsedUrl.port;
    if (typeof hostname !== 'string' || !hostname || typeof proto !== 'string') {
        return ''; // Don't proxy URLs without a valid scheme or host.
    }
    proto = proto.split(':', 1)[0];
    // Stripping ports in this way instead of using parsedUrl.hostname to make
    // sure that the brackets around IPv6 addresses are kept.
    hostname = hostname.replace(/:\d*$/, '');
    port = parseInt(port) || DEFAULT_PORTS[proto] || 0;
    if (!shouldProxy(hostname, port)) {
        return ''; // Don't proxy URLs that match NO_PROXY.
    }
    var proxy = getEnv('npm_config_' + proto + '_proxy') || getEnv(proto + '_proxy') || getEnv('npm_config_proxy') || getEnv('all_proxy');
    if (proxy && proxy.indexOf('://') === -1) {
        // Missing scheme in proxy, default to the requested URL's scheme.
        proxy = proto + '://' + proxy;
    }
    return proxy;
}
/**
 * Determines whether a given URL should be proxied.
 *
 * @param {string} hostname - The host name of the URL.
 * @param {number} port - The effective port of the URL.
 * @returns {boolean} Whether the given URL should be proxied.
 * @private
 */ function shouldProxy(hostname, port) {
    var NO_PROXY = (getEnv('npm_config_no_proxy') || getEnv('no_proxy')).toLowerCase();
    if (!NO_PROXY) {
        return true; // Always proxy if NO_PROXY is not set.
    }
    if (NO_PROXY === '*') {
        return false; // Never proxy if wildcard is set.
    }
    return NO_PROXY.split(/[,\s]/).every(function(proxy) {
        if (!proxy) {
            return true; // Skip zero-length hosts.
        }
        var parsedProxy = proxy.match(/^(.+):(\d+)$/);
        var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
        var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
        if (parsedProxyPort && parsedProxyPort !== port) {
            return true; // Skip if ports don't match.
        }
        if (!/^[.*]/.test(parsedProxyHostname)) {
            // No wildcards, so stop proxying if there is an exact match.
            return hostname !== parsedProxyHostname;
        }
        if (parsedProxyHostname.charAt(0) === '*') {
            // Remove leading wildcard.
            parsedProxyHostname = parsedProxyHostname.slice(1);
        }
        // Stop proxying if the hostname ends with the no_proxy host.
        return !stringEndsWith.call(hostname, parsedProxyHostname);
    });
}
/**
 * Get the value for an environment variable.
 *
 * @param {string} key - The name of the environment variable.
 * @return {string} The value of the environment variable.
 * @private
 */ function getEnv(key) {
    return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || '';
}
exports.getProxyForUrl = getProxyForUrl;
}),
"[project]/node_modules/ms/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/node_modules/debug/src/common.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/node_modules/ms/index.js [app-ssr] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/node_modules/debug/src/node.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __turbopack_context__.r("[project]/node_modules/supports-color/index.js [app-ssr] (ecmascript)");
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/node_modules/debug/src/browser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/node_modules/debug/src/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/browser.js [app-ssr] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/node.js [app-ssr] (ecmascript)");
}
}),
"[project]/node_modules/has-flag/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}),
"[project]/node_modules/supports-color/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/node_modules/has-flag/index.js [app-ssr] (ecmascript)");
const { env } = process;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    forceColor = 0;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = 1;
}
if ('FORCE_COLOR' in env) {
    if (env.FORCE_COLOR === 'true') {
        forceColor = 1;
    } else if (env.FORCE_COLOR === 'false') {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
        return 3;
    }
    if (hasFlag('color=256')) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
        return min;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ('CI' in env) {
        if ([
            'TRAVIS',
            'CIRCLECI',
            'APPVEYOR',
            'GITLAB_CI',
            'GITHUB_ACTIONS',
            'BUILDKITE'
        ].some((sign)=>sign in env) || env.CI_NAME === 'codeship') {
            return 1;
        }
        return min;
    }
    if ('TEAMCITY_VERSION' in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === 'truecolor') {
        return 3;
    }
    if ('TERM_PROGRAM' in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
        switch(env.TERM_PROGRAM){
            case 'iTerm.app':
                return version >= 3 ? 3 : 2;
            case 'Apple_Terminal':
                return 2;
        }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
    }
    if ('COLORTERM' in env) {
        return 1;
    }
    return min;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/follow-redirects/debug.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var debug;
module.exports = function() {
    if (!debug) {
        try {
            /* eslint global-require: off */ debug = __turbopack_context__.r("[project]/node_modules/debug/src/index.js [app-ssr] (ecmascript)")("follow-redirects");
        } catch (error) {}
        if (typeof debug !== "function") {
            debug = function() {};
        }
    }
    debug.apply(null, arguments);
};
}),
"[project]/Downloads/data-cure-ai-dashboard/node_modules/follow-redirects/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
var URL = url.URL;
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var Writable = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Writable;
var assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
var debug = __turbopack_context__.r("[project]/Downloads/data-cure-ai-dashboard/node_modules/follow-redirects/debug.js [app-ssr] (ecmascript)");
// Preventive platform detection
// istanbul ignore next
(function detectUnsupportedEnvironment() {
    var looksLikeNode = typeof process !== "undefined";
    var looksLikeBrowser = ("TURBOPACK compile-time value", "undefined") !== "undefined" && typeof document !== "undefined";
    var looksLikeV8 = isFunction(Error.captureStackTrace);
    if (!looksLikeNode && (looksLikeBrowser || !looksLikeV8)) {
        console.warn("The follow-redirects package should be excluded from browser builds.");
    }
})();
// Whether to use the native URL object or the legacy url module
var useNativeURL = false;
try {
    assert(new URL(""));
} catch (error) {
    useNativeURL = error.code === "ERR_INVALID_URL";
}
// URL fields to preserve in copy operations
var preservedUrlFields = [
    "auth",
    "host",
    "hostname",
    "href",
    "path",
    "pathname",
    "port",
    "protocol",
    "query",
    "search",
    "hash"
];
// Create handlers that pass events from native requests
var events = [
    "abort",
    "aborted",
    "connect",
    "error",
    "socket",
    "timeout"
];
var eventHandlers = Object.create(null);
events.forEach(function(event) {
    eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
    };
});
// Error types with codes
var InvalidUrlError = createErrorType("ERR_INVALID_URL", "Invalid URL", TypeError);
var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", RedirectionError);
var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
// istanbul ignore next
var destroy = Writable.prototype.destroy || noop;
// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
    // Initialize the request
    Writable.call(this);
    this._sanitizeOptions(options);
    this._options = options;
    this._ended = false;
    this._ending = false;
    this._redirectCount = 0;
    this._redirects = [];
    this._requestBodyLength = 0;
    this._requestBodyBuffers = [];
    // Attach a callback if passed
    if (responseCallback) {
        this.on("response", responseCallback);
    }
    // React to responses of native requests
    var self = this;
    this._onNativeResponse = function(response) {
        try {
            self._processResponse(response);
        } catch (cause) {
            self.emit("error", cause instanceof RedirectionError ? cause : new RedirectionError({
                cause: cause
            }));
        }
    };
    // Perform the first request
    this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);
RedirectableRequest.prototype.abort = function() {
    destroyRequest(this._currentRequest);
    this._currentRequest.abort();
    this.emit("abort");
};
RedirectableRequest.prototype.destroy = function(error) {
    destroyRequest(this._currentRequest, error);
    destroy.call(this, error);
    return this;
};
// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function(data, encoding, callback) {
    // Writing is not allowed if end has been called
    if (this._ending) {
        throw new WriteAfterEndError();
    }
    // Validate input and shift parameters if necessary
    if (!isString(data) && !isBuffer(data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
    }
    if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Ignore empty buffers, since writing them doesn't invoke the callback
    // https://github.com/nodejs/node/issues/22066
    if (data.length === 0) {
        if (callback) {
            callback();
        }
        return;
    }
    // Only write when we don't exceed the maximum body length
    if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({
            data: data,
            encoding: encoding
        });
        this._currentRequest.write(data, encoding, callback);
    } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
    }
};
// Ends the current native request
RedirectableRequest.prototype.end = function(data, encoding, callback) {
    // Shift parameters if necessary
    if (isFunction(data)) {
        callback = data;
        data = encoding = null;
    } else if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Write data if needed and end
    if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
    } else {
        var self = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
            self._ended = true;
            currentRequest.end(null, null, callback);
        });
        this._ending = true;
    }
};
// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function(name, value) {
    this._options.headers[name] = value;
    this._currentRequest.setHeader(name, value);
};
// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function(name) {
    delete this._options.headers[name];
    this._currentRequest.removeHeader(name);
};
// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
    var self = this;
    // Destroys the socket on timeout
    function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
    }
    // Sets up a timer to trigger a timeout event
    function startTimer(socket) {
        if (self._timeout) {
            clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function() {
            self.emit("timeout");
            clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
    }
    // Stops a timeout from triggering
    function clearTimer() {
        // Clear the timeout
        if (self._timeout) {
            clearTimeout(self._timeout);
            self._timeout = null;
        }
        // Clean up all attached listeners
        self.removeListener("abort", clearTimer);
        self.removeListener("error", clearTimer);
        self.removeListener("response", clearTimer);
        self.removeListener("close", clearTimer);
        if (callback) {
            self.removeListener("timeout", callback);
        }
        if (!self.socket) {
            self._currentRequest.removeListener("socket", startTimer);
        }
    }
    // Attach callback if passed
    if (callback) {
        this.on("timeout", callback);
    }
    // Start the timer if or when the socket is opened
    if (this.socket) {
        startTimer(this.socket);
    } else {
        this._currentRequest.once("socket", startTimer);
    }
    // Clean up on events
    this.on("socket", destroyOnTimeout);
    this.on("abort", clearTimer);
    this.on("error", clearTimer);
    this.on("response", clearTimer);
    this.on("close", clearTimer);
    return this;
};
// Proxy all other public ClientRequest methods
[
    "flushHeaders",
    "getHeader",
    "setNoDelay",
    "setSocketKeepAlive"
].forEach(function(method) {
    RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
    };
});
// Proxy all public ClientRequest properties
[
    "aborted",
    "connection",
    "socket"
].forEach(function(property) {
    Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
            return this._currentRequest[property];
        }
    });
});
RedirectableRequest.prototype._sanitizeOptions = function(options) {
    // Ensure headers are always present
    if (!options.headers) {
        options.headers = {};
    }
    // Since http.request treats host as an alias of hostname,
    // but the url module interprets host as hostname plus port,
    // eliminate the host property to avoid confusion.
    if (options.host) {
        // Use hostname if set, because it has precedence
        if (!options.hostname) {
            options.hostname = options.host;
        }
        delete options.host;
    }
    // Complete the URL object when necessary
    if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
            options.pathname = options.path;
        } else {
            options.pathname = options.path.substring(0, searchPos);
            options.search = options.path.substring(searchPos);
        }
    }
};
// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function() {
    // Load the native protocol
    var protocol = this._options.protocol;
    var nativeProtocol = this._options.nativeProtocols[protocol];
    if (!nativeProtocol) {
        throw new TypeError("Unsupported protocol " + protocol);
    }
    // If specified, use the agent corresponding to the protocol
    // (HTTP and HTTPS use different types of agents)
    if (this._options.agents) {
        var scheme = protocol.slice(0, -1);
        this._options.agent = this._options.agents[scheme];
    }
    // Create the native request and set up its event handlers
    var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
    request._redirectable = this;
    for (var event of events){
        request.on(event, eventHandlers[event]);
    }
    // RFC7230§5.3.1: When making a request directly to an origin server, […]
    // a client MUST send only the absolute path […] as the request-target.
    this._currentUrl = /^\//.test(this._options.path) ? url.format(this._options) : // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;
    // End a redirected request
    // (The first request must be ended explicitly with RedirectableRequest#end)
    if (this._isRedirect) {
        // Write the request entity and end
        var i = 0;
        var self = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
            // Only write if this request has not been redirected yet
            // istanbul ignore else
            if (request === self._currentRequest) {
                // Report any write errors
                // istanbul ignore if
                if (error) {
                    self.emit("error", error);
                } else if (i < buffers.length) {
                    var buffer = buffers[i++];
                    // istanbul ignore else
                    if (!request.finished) {
                        request.write(buffer.data, buffer.encoding, writeNext);
                    }
                } else if (self._ended) {
                    request.end();
                }
            }
        })();
    }
};
// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function(response) {
    // Store the redirected response
    var statusCode = response.statusCode;
    if (this._options.trackRedirects) {
        this._redirects.push({
            url: this._currentUrl,
            headers: response.headers,
            statusCode: statusCode
        });
    }
    // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
    // that further action needs to be taken by the user agent in order to
    // fulfill the request. If a Location header field is provided,
    // the user agent MAY automatically redirect its request to the URI
    // referenced by the Location field value,
    // even if the specific status code is not understood.
    // If the response is not a redirect; return it as-is
    var location = response.headers.location;
    if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        // Clean up
        this._requestBodyBuffers = [];
        return;
    }
    // The response is a redirect, so abort the current request
    destroyRequest(this._currentRequest);
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
        throw new TooManyRedirectsError();
    }
    // Store the request headers if applicable
    var requestHeaders;
    var beforeRedirect = this._options.beforeRedirect;
    if (beforeRedirect) {
        requestHeaders = Object.assign({
            // The Host header was set by nativeProtocol.request
            Host: response.req.getHeader("host")
        }, this._options.headers);
    }
    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    var method = this._options.method;
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
    // the server is redirecting the user agent to a different resource […]
    // A user agent can perform a retrieval request targeting that URI
    // (a GET or HEAD request if using HTTP) […]
    statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        // Drop a possible entity and headers related to it
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
    }
    // Drop the Host header, as the redirect might lead to a different host
    var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
    // If the redirect is relative, carry over the host of the last request
    var currentUrlParts = parseUrl(this._currentUrl);
    var currentHost = currentHostHeader || currentUrlParts.host;
    var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, {
        host: currentHost
    }));
    // Create the redirected request
    var redirectUrl = resolveUrl(location, currentUrl);
    debug("redirecting to", redirectUrl.href);
    this._isRedirect = true;
    spreadUrlObject(redirectUrl, this._options);
    // Drop confidential headers when redirecting to a less secure protocol
    // or to a different domain that is not a superdomain
    if (redirectUrl.protocol !== currentUrlParts.protocol && redirectUrl.protocol !== "https:" || redirectUrl.host !== currentHost && !isSubdomain(redirectUrl.host, currentHost)) {
        removeMatchingHeaders(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
    }
    // Evaluate the beforeRedirect callback
    if (isFunction(beforeRedirect)) {
        var responseDetails = {
            headers: response.headers,
            statusCode: statusCode
        };
        var requestDetails = {
            url: currentUrl,
            method: method,
            headers: requestHeaders
        };
        beforeRedirect(this._options, responseDetails, requestDetails);
        this._sanitizeOptions(this._options);
    }
    // Perform the redirected request
    this._performRequest();
};
// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
    // Default settings
    var exports = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
    };
    // Wrap each protocol
    var nativeProtocols = {};
    Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);
        // Executes a request, following redirects
        function request(input, options, callback) {
            // Parse parameters, ensuring that input is an object
            if (isURL(input)) {
                input = spreadUrlObject(input);
            } else if (isString(input)) {
                input = spreadUrlObject(parseUrl(input));
            } else {
                callback = options;
                options = validateUrl(input);
                input = {
                    protocol: protocol
                };
            }
            if (isFunction(options)) {
                callback = options;
                options = null;
            }
            // Set defaults
            options = Object.assign({
                maxRedirects: exports.maxRedirects,
                maxBodyLength: exports.maxBodyLength
            }, input, options);
            options.nativeProtocols = nativeProtocols;
            if (!isString(options.host) && !isString(options.hostname)) {
                options.hostname = "::1";
            }
            assert.equal(options.protocol, protocol, "protocol mismatch");
            debug("options", options);
            return new RedirectableRequest(options, callback);
        }
        // Executes a GET request, following redirects
        function get(input, options, callback) {
            var wrappedRequest = wrappedProtocol.request(input, options, callback);
            wrappedRequest.end();
            return wrappedRequest;
        }
        // Expose the properties on the wrapped protocol
        Object.defineProperties(wrappedProtocol, {
            request: {
                value: request,
                configurable: true,
                enumerable: true,
                writable: true
            },
            get: {
                value: get,
                configurable: true,
                enumerable: true,
                writable: true
            }
        });
    });
    return exports;
}
function noop() {}
function parseUrl(input) {
    var parsed;
    // istanbul ignore else
    if (useNativeURL) {
        parsed = new URL(input);
    } else {
        // Ensure the URL is valid and absolute
        parsed = validateUrl(url.parse(input));
        if (!isString(parsed.protocol)) {
            throw new InvalidUrlError({
                input
            });
        }
    }
    return parsed;
}
function resolveUrl(relative, base) {
    // istanbul ignore next
    return useNativeURL ? new URL(relative, base) : parseUrl(url.resolve(base, relative));
}
function validateUrl(input) {
    if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    return input;
}
function spreadUrlObject(urlObject, target) {
    var spread = target || {};
    for (var key of preservedUrlFields){
        spread[key] = urlObject[key];
    }
    // Fix IPv6 hostname
    if (spread.hostname.startsWith("[")) {
        spread.hostname = spread.hostname.slice(1, -1);
    }
    // Ensure port is a number
    if (spread.port !== "") {
        spread.port = Number(spread.port);
    }
    // Concatenate path
    spread.path = spread.search ? spread.pathname + spread.search : spread.pathname;
    return spread;
}
function removeMatchingHeaders(regex, headers) {
    var lastValue;
    for(var header in headers){
        if (regex.test(header)) {
            lastValue = headers[header];
            delete headers[header];
        }
    }
    return lastValue === null || typeof lastValue === "undefined" ? undefined : String(lastValue).trim();
}
function createErrorType(code, message, baseClass) {
    // Create constructor
    function CustomError(properties) {
        // istanbul ignore else
        if (isFunction(Error.captureStackTrace)) {
            Error.captureStackTrace(this, this.constructor);
        }
        Object.assign(this, properties || {});
        this.code = code;
        this.message = this.cause ? message + ": " + this.cause.message : message;
    }
    // Attach constructor and set default properties
    CustomError.prototype = new (baseClass || Error)();
    Object.defineProperties(CustomError.prototype, {
        constructor: {
            value: CustomError,
            enumerable: false
        },
        name: {
            value: "Error [" + code + "]",
            enumerable: false
        }
    });
    return CustomError;
}
function destroyRequest(request, error) {
    for (var event of events){
        request.removeListener(event, eventHandlers[event]);
    }
    request.on("error", noop);
    request.destroy(error);
}
function isSubdomain(subdomain, domain) {
    assert(isString(subdomain) && isString(domain));
    var dot = subdomain.length - domain.length - 1;
    return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}
function isString(value) {
    return typeof value === "string" || value instanceof String;
}
function isFunction(value) {
    return typeof value === "function";
}
function isBuffer(value) {
    return typeof value === "object" && "length" in value;
}
function isURL(value) {
    return URL && value instanceof URL;
}
// Exports
module.exports = wrap({
    http: http,
    https: https
});
module.exports.wrap = wrap;
}),
];

//# sourceMappingURL=_bd24937c._.js.map