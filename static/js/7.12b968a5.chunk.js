(this["webpackJsonpsbuhacks-website"]=this["webpackJsonpsbuhacks-website"]||[]).push([[7],{13:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,a=!1,r=void 0;try{for(var c,s=e[Symbol.iterator]();!(i=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);i=!0);}catch(m){a=!0,r=m}finally{try{i||null==s.return||s.return()}finally{if(a)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},41:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var i=n(13),a=n(1),r=n(0);function c(e){var t=e.expiration,n=e.name,c=e.time,s=Object(a.useState)(!1),m=Object(i.a)(s,2),o=m[0],u=m[1];return Object(a.useEffect)((function(){var e=Date.now(),n=new Date(t),i=setTimeout((function(){u(!0)}),n-e);return function(){return clearTimeout(i)}}),[t]),Object(r.jsxs)("div",{className:o?"expired-event general-style":"active-event general-style",children:[Object(r.jsx)("p",{className:"event-time",children:c}),Object(r.jsx)("p",{className:"event-name",children:n})]})}var s=function(e){var t=e.events;return Object(r.jsx)("div",{className:"event-list",children:t.map((function(e){return Object(r.jsx)(c,{time:e.time,name:e.name,expiration:e.endTime},e.name)}))})},m=[{time:"07:00 PM",name:"Kickoff",endTime:"2022-09-23T19:30:00.000-04:00"},{time:"07:30 PM",name:"Dinner",endTime:"2022-09-23T20:00:00.000-04:00"},{time:"8:00 PM",name:"Team Building",endTime:"2022-09-23T21:00:00.000-04:00"},{time:"09:00 PM",name:"Resideo",endTime:"2022-09-23T22:00:00.000-04:00"},{time:"10:30 PM",name:"Tetris Tournament",endTime:"2022-09-23T23:30:00.000-04:00"}],o=[{time:"12:00 AM",name:"Midnight Snacks",endTime:"2022-09-24T00:30:00.000-04:00"},{time:"07:00 AM",name:"Breakfast",endTime:"2022-09-24T07:30:00.000-04:00"},{time:"09:00 AM",name:"WiCS Workshop: Command Line Basics",endTime:"2022-09-24T10:00:00.000-04:00"},{time:"10:30 AM",name:"React Workshop with SBCS",endTime:"2022-09-24T11:30:00.000-04:00"},{time:"12:00 PM",name:"Lunch",endTime:"2022-09-24T12:30:00.000-04:00"},{time:"02:00 PM",name:"Mummy Wrap",endTime:"2022-09-24T15:00:00.000-04:00"},{time:"03:30 PM",name:"Hungry Hungry Hackers",endTime:"2022-09-24T16:30:00.000-04:00"},{time:"05:00 PM",name:"Stony Brook Cybersecurity Club",endTime:"2022-09-24T18:00:00.000-04:00"},{time:"06:30 PM",name:"Dinner",endTime:"2022-09-24T19:00:00.000-04:00"},{time:"08:00 PM",name:"Machine Learning for Healthcare Workshop",endTime:"2022-09-24T21:00:00.000-04:00"},{time:"10:00 PM",name:"Paper Airplane Tournament",endTime:"2022-09-24T23:00:00.000-04:00"}],u=[{time:"12:00 AM",name:"Midnight Snacks",endTime:"2022-09-25T00:30:00.000-04:00"},{time:"07:00 AM",name:"Breakfast",endTime:"2022-09-25T07:30:00.000-04:00"},{time:"07:30 AM",name:"Submissions Due",endTime:"2022-09-25T08:30:00.000-04:00"},{time:"08:30 AM",name:"Judging",endTime:"2022-09-25T10:30:00.000-04:00"},{time:"10:30 AM",name:"Finalize Winners",endTime:"2022-09-25T11:00:00.000-04:00"},{time:"11:00 AM",name:"Awards and Closing Ceremony",endTime:"2022-09-25T12:00:00.000-04:00"},{time:"",name:"See You Soon!",endTime:"2022-09-26T00:00:00.000-04:00"}];n(41);t.default=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],d=Object(a.useState)(m),l=Object(i.a)(d,2),b=l[0],T=l[1],f=Object(a.useState)(!1),j=Object(i.a)(f,2),h=j[0],v=j[1];return Object(a.useEffect)((function(){T(0===n?m:1===n?o:u)}),[n]),window.addEventListener("reload",(function(){return v(window.innerWidth<600)})),window.addEventListener("scroll",(function(){return v(window.innerWidth<600)})),window.addEventListener("resize",(function(){return v(window.innerWidth<600)})),Object(a.useEffect)((function(){var e=document.getElementsByClassName("active-event");e.length&&e[0].classList.add("current-event")})),Object(r.jsxs)("div",{className:"section-container schedule-container general-style",id:"schedule",children:[Object(r.jsx)("div",{className:"green-planet"}),Object(r.jsx)("div",{className:"mint-star"}),Object(r.jsx)("span",{className:"section-title general-style",id:"schedule-title",children:"Schedule"}),Object(r.jsx)("div",{className:"schedule-disclaimer",children:"This schedule is subject to change"}),Object(r.jsxs)("div",{className:"timezone-disclaimer general-style",children:[Object(r.jsx)("i",{className:"fas fa-exclamation-triangle disclaimer-icon"}),"All times listed below are in EDT (Eastern Daylight Time)"]}),Object(r.jsxs)("div",{className:"schedule-wrapper",children:[Object(r.jsxs)("div",{className:"tab-wrapper",children:[Object(r.jsx)("button",{className:"tab-button".concat(0===n?" button-active":""),onClick:function(){c(0)},type:"button",children:h?"Fri.":"Friday"}),Object(r.jsx)("button",{className:"tab-button".concat(1===n?" button-active":""),onClick:function(){c(1)},type:"button",children:h?"Sat.":"Saturday"}),Object(r.jsx)("button",{className:"tab-button".concat(2===n?" button-active":""),onClick:function(){c(2)},type:"button",children:h?"Sun.":"Sunday"})]}),Object(r.jsx)(s,{events:b})]})]})}}}]);
//# sourceMappingURL=7.12b968a5.chunk.js.map