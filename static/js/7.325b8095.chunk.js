(this["webpackJsonpsbuhacks-website"]=this["webpackJsonpsbuhacks-website"]||[]).push([[7],{13:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,a=!1,s=void 0;try{for(var c,r=e[Symbol.iterator]();!(i=(c=r.next()).done)&&(n.push(c.value),!t||n.length!==t);i=!0);}catch(l){a=!0,s=l}finally{try{i||null==r.return||r.return()}finally{if(a)throw s}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},41:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var i=n(13),a=n(1),s=n(0);function c(e){var t=e.expiration,n=e.name,c=e.time,r=Object(a.useState)(!1),l=Object(i.a)(r,2),o=l[0],d=l[1];return Object(a.useEffect)((function(){var e=Date.now(),n=new Date(t),i=setTimeout((function(){d(!0)}),n-e);return function(){return clearTimeout(i)}}),[t]),Object(s.jsxs)("div",{className:o?"expired-event general-style":"active-event general-style",children:[Object(s.jsx)("p",{className:"event-time",children:c}),Object(s.jsx)("p",{className:"event-name",children:n})]})}var r=function(e){var t=e.events;return Object(s.jsx)("div",{className:"event-list",children:t.map((function(e){return Object(s.jsx)(c,{time:e.time,name:e.name,expiration:e.endTime},e.name)}))})},l=[{time:"05:00 PM",name:"Check-in",endTime:"2024-02-09T19:00:00.000-04:00"},{time:"07:00 PM",name:"Kickoff",endTime:"2024-02-09T19:30:00.000-04:00"},{time:"07:30 PM",name:"Dinner",endTime:"2024-02-09T20:00:00.000-04:00"},{time:"8:00 PM",name:"Team Building",endTime:"2024-02-09T21:00:00.000-04:00"}],o=[],d=[{time:"08:00 AM",name:"Submissions Due",endTime:"2024-02-11T09:00:00.000-04:00"},{time:"09:00 AM",name:"Judging",endTime:"2024-02-11T12:30:00.000-04:00"},{time:"12:30 PM",name:"Awards and Closing Ceremony",endTime:"2024-02-11T14:00:00.000-04:00"},{time:"",name:"See You Soon!",endTime:"2024-02-12T00:00:00.000-04:00"}];n(41);t.default=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(!1),m=Object(i.a)(u,2),b=m[0],j=m[1];return Object(a.useEffect)((function(){var e=document.getElementsByClassName("event-list");1===n?(e[1].style.display="block",e[0].style.display="none",e[2].style.display="none"):2===n?(e[2].style.display="block",e[1].style.display="none",e[0].style.display="none"):(e[0].style.display="block",e[1].style.display="none",e[2].style.display="none")}),[n]),window.addEventListener("reload",(function(){return j(window.innerWidth<600)})),window.addEventListener("scroll",(function(){return j(window.innerWidth<600)})),window.addEventListener("resize",(function(){return j(window.innerWidth<600)})),Object(a.useEffect)((function(){var e=document.getElementsByClassName("active-event");e.length&&e[0].classList.add("current-event")})),Object(s.jsxs)("div",{className:"section-container schedule-container general-style",id:"schedule",children:[Object(s.jsx)("div",{className:"green-planet"}),Object(s.jsx)("div",{className:"mint-star"}),Object(s.jsx)("span",{className:"section-title general-style",id:"schedule-title",children:"Schedule"}),Object(s.jsx)("div",{className:"schedule-disclaimer",children:"This schedule is subject to change"}),Object(s.jsxs)("div",{className:"timezone-disclaimer general-style",children:[Object(s.jsx)("i",{className:"fas fa-exclamation-triangle disclaimer-icon"}),"All times listed below are in EST (Eastern Standard Time)"]}),Object(s.jsxs)("div",{className:"schedule-wrapper",children:[Object(s.jsxs)("div",{className:"tab-wrapper",children:[Object(s.jsx)("button",{className:"tab-button".concat(0===n?" button-active":""),onClick:function(){c(0)},type:"button",children:b?"Fri.":"Friday"}),Object(s.jsx)("button",{className:"tab-button".concat(1===n?" button-active":""),onClick:function(){c(1)},type:"button",children:b?"Sat.":"Saturday"}),Object(s.jsx)("button",{className:"tab-button".concat(2===n?" button-active":""),onClick:function(){c(2)},type:"button",children:b?"Sun.":"Sunday"})]}),Object(s.jsx)(r,{id:"first-events",events:l}),Object(s.jsx)(r,{id:"second-events",events:o}),Object(s.jsx)(r,{id:"third-events",events:d})]})]})}}}]);
//# sourceMappingURL=7.325b8095.chunk.js.map