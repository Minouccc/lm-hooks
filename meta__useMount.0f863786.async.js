"use strict";(self.webpackChunklm_hooks=self.webpackChunklm_hooks||[]).push([[720],{79464:function(s,e,n){n.r(e),n.d(e,{demos:function(){return m}});var t=n(17061),u=n.n(t),r=n(17156),d=n.n(r),a=n(67294),m={"src-use-mount-demo-demo":{component:a.memo(a.lazy(function(){return n.e(433).then(n.bind(n,90268))})),asset:{type:"BLOCK",id:"src-use-mount-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(72135).Z},"lm-hooks":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"lm-hooks":n(32028),react:n(67294)},renderOpts:{compile:function(){var i=d()(u()().mark(function h(){var l,f=arguments;return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(335).then(n.bind(n,37335));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},h)}));function c(){return i.apply(this,arguments)}return c}()}}}},32028:function(s,e,n){n.r(e),n.d(e,{useMount:function(){return u}});var t=n(67294);function u(r){(0,t.useEffect)(function(){r()},[])}},70955:function(s,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"This is useMount.",paraId:0,tocIndex:0},{value:`    useMount(fn: () => void );
`,paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"fn",paraId:2,tocIndex:3},{value:"mount \u65F6\u6267\u884C\u7684\u51FD\u6570",paraId:2,tocIndex:3},{value:"() => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3}]},72135:function(s,e){e.Z=`import _slicedToArray from "/home/runner/work/lm-hooks/lm-hooks/node_modules/@babel/runtime/helpers/slicedToArray.js";
import { useMount } from 'lm-hooks';
import React, { useCallback, useState } from 'react';
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
export default (function () {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMount = _useState2[0],
    setIsMount = _useState2[1];
  var handleClick = useCallback(function () {
    setIsMount(function (v) {
      return !isMount;
    });
  }, [isMount]);
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsxs("button", {
      onClick: handleClick,
      children: ["\\u70B9\\u51FB", isMount ? '\u5378\u8F7D' : '\u6302\u8F7D', " mount \\u7EC4\\u4EF6"]
    }), isMount && /*#__PURE__*/_jsx(MountComponent, {})]
  });
});
var MountComponent = function MountComponent() {
  useMount(function () {
    alert('mount \u9636\u6BB5\u88AB\u6267\u884C\u4E86');
  });
  return /*#__PURE__*/_jsx("div", {
    children: "\\u65B0\\u7EC4\\u4EF6\\u6302\\u8F7D\\u4E86"
  });
};`}}]);
