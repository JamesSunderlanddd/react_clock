(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),o=c.n(n),a=c(2),s=c(3),i=c(5),l=c(4),r=c(1),b=c.n(r),u=(c(12),c(0)),m=function(t){Object(i.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).timerId=null,t.state={time:(new Date).toLocaleTimeString()},t}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({time:(new Date).toLocaleTimeString()}),console.log(t.state.time)}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=t.clockName,c=this.props.clockName;e!==c&&console.log("The Clock was renamed from ".concat(e," to ").concat(c))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.time;return Object(u.jsx)(u.Fragment,{children:t})}}]),c}(b.a.Component),j=function(t){Object(i.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,clockName:"WAKE UP, NEO, THE MATRIX HAS YOU!"},t.showClock=function(){return t.setState({isClockVisible:!0})},t.hideClock=function(){return t.setState({isClockVisible:!1})},t.generateRandomClockName=function(){return t.setState({clockName:Math.round(100*Math.random())})},t}return Object(s.a)(c,[{key:"render",value:function(){var t=this.state,e=t.isClockVisible,c=t.clockName;return Object(u.jsx)("div",{className:"clocks",children:Object(u.jsxs)("div",{className:"clocks__container",children:[Object(u.jsx)("h1",{className:"clocks__title",children:"NO MORE REACT CLOCK PLEASE ;)"}),Object(u.jsxs)("p",{children:[c,Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"clocks__time",children:e&&Object(u.jsx)(m,{clockName:c})}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"clocks__buttons",children:[Object(u.jsx)("button",{type:"button",className:"clocks__button",disabled:e,onClick:this.showClock,children:"Show Clock"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"button",className:"clocks__button",disabled:!e,onClick:this.hideClock,children:"Hide Clock"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"button",className:"clocks__button",onClick:this.generateRandomClockName,children:"Set Random Name"})]})]})]})})}}]),c}(b.a.Component),d=j;o.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b616a49b.chunk.js.map