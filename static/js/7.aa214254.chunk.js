(this["webpackJsonpsbuhacks-website"]=this["webpackJsonpsbuhacks-website"]||[]).push([[7],{12:function(e,n,t){"use strict";function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],i=!0,a=!1,r=void 0;try{for(var s,c=e[Symbol.iterator]();!(i=(s=c.next()).done)&&(t.push(s.value),!n||t.length!==n);i=!0);}catch(l){a=!0,r=l}finally{try{i||null==c.return||c.return()}finally{if(a)throw r}}return t}}(e,n)||function(e,n){if(e){if("string"===typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,"a",(function(){return a}))},40:function(e,n,t){},51:function(e,n,t){"use strict";t.r(n);var i=t(12),a=t(1),r=[{name:"05:00PM - Kickoff via Discord",endTime:"2021-09-24T18:00:00.000-04:00"},{name:"06:00PM - Team Building via Discord",endTime:"2021-09-24T18:30:00.000-04:00"},{name:"07:00PM - START HACKING!!!",endTime:"2021-09-24T19:01:00.000-04:00"},{name:"07:00PM - How to Shine During Recruitment with Softheon",endTime:"2021-09-24T20:00:00.000-04:00"},{name:"08:00PM - !Light with MLH",endTime:"2021-09-24T21:00:00.000-04:00"},{name:"09:00PM - iOS Development Event with SBCS",endTime:"2021-09-24T22:00:00.000-04:00"},{name:"10:00PM - Among Us",endTime:"2021-09-24T23:00:00.000-04:00"}],s=[{name:"01:00AM - MS Paint Challenge",endTime:"2021-09-25T02:00:00.000-04:00"},{name:"08:00AM - Chess Tournament",endTime:"2021-09-25T09:00:00.000-04:00"},{name:"09:00AM - AutoCAD Workshop: Introduction to 3D Design",endTime:"2021-09-25T10:00:00.000-04:00"},{name:"11:00AM - Intro to Capture the Flag with the Cyber Security club",endTime:"2021-09-25T12:00:00.000-04:00"},{name:"01:00PM - Android Development Event with WiCS",endTime:"2021-09-25T14:00:00.000-04:00"},{name:"04:00PM - 04:00PM - Submissions Due",endTime:"2021-09-25T17:00:00.000-04:00"},{name:"05:00PM - Judging Begins",endTime:"2021-09-25T18:00:00.000-04:00"},{name:"06:00PM - Finalize Winners",endTime:"2021-09-25T18:30:00.000-04:00"},{name:"06:30PM - Awards and Closing Ceremony",endTime:"2021-09-25T19:00:00.000-04:00"}],c=(t(40),t(0));function l(e){var n=e.expiration,t=e.name,r=Object(a.useState)(!1),s=Object(i.a)(r,2),l=s[0],o=s[1];return Object(a.useEffect)((function(){var e=Date.now(),t=new Date(n),i=setTimeout((function(){o(!0)}),t-e);return function(){return clearTimeout(i)}}),[n]),Object(a.useEffect)((function(){var e=document.getElementsByClassName("active-event");e.length&&e[0].classList.add("current-event")})),Object(c.jsx)("p",{className:l?"expired-event general-style":"active-event general-style",children:t})}n.default=function(){return Object(c.jsxs)("div",{className:"section-container schedule-container general-style",id:"schedule",children:[Object(c.jsx)("h1",{className:"section-title general-style",id:"schedule-title",children:"Schedule"}),Object(c.jsx)("div",{className:"schedule-disclaimer",children:"This schedule is subject to change"}),Object(c.jsxs)("div",{className:"timezone-disclaimer general-style",children:[Object(c.jsx)("i",{className:"fas fa-exclamation-triangle disclaimer-icon"}),"All times listed below are in EDT (Eastern Daylight Time)"]}),Object(c.jsxs)("div",{className:"schedule-wrapper",children:[Object(c.jsxs)("div",{className:"events-wrapper",children:[Object(c.jsx)(l,{name:"Fueling the rocket ship...",expiration:"2021-09-24T17:00:00.000-04:00",className:"rocket-ship-event"}),Object(c.jsx)("span",{className:"schedule-sub general-style",children:"FRIDAY - September 24th"}),r.map((function(e){return Object(c.jsx)(l,{name:e.name,expiration:e.endTime},e.name)}))]}),Object(c.jsxs)("div",{className:"events-wrapper",children:[Object(c.jsx)("span",{className:"schedule-sub general-style",children:"SATURDAY - September 25th"}),s.map((function(e){return Object(c.jsx)(l,{name:e.name,expiration:e.endTime},e.name)})),Object(c.jsx)(l,{name:"Rocket ship has landed!",expiration:"2021-09-25T20:00:00.000-04:00",className:"rocket-ship-event"})]})]})]})}}}]);
//# sourceMappingURL=7.aa214254.chunk.js.map