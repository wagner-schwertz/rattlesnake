(this["webpackJsonpsnake-game"]=this["webpackJsonpsnake-game"]||[]).push([[0],{15:function(n,e,t){n.exports=t(22)},22:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t.n(r),u=t(11),o=t.n(u),a=t(1),i=t(3),f=t(4);function l(){var n=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  border: 1px solid black;\n  grid-column: ",";\n  grid-row: ",";\n  border: none;\n  background-color: #526348;\n"]);return l=function(){return n},n}function s(){var n=Object(i.a)(["\n  border: 1px solid black;\n  height: min(100vh, 100vw);\n  width: min(100vh, 100vw);\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(20, 1fr);\n  grid-template-rows: repeat(20, 1fr);\n  background-color: #7c9171;\n  margin-top: calc((100vh - min(100vw, 100vh)) / 2);\n"]);return s=function(){return n},n}var d=f.b.div(s()),y=f.b.div(l(),(function(n){return n.x}),(function(n){return n.y}));var v=t(8),b=[[4,5],[4,6],[4,7],[5,7],[6,7],[7,7],[7,6],[7,5],[7,8],[7,9],[6,10],[5,10],[10,5],[11,5],[12,6],[12,7],[12,8],[11,9],[10,9],[9,8],[9,7],[9,6],[14,5],[14,6],[14,7],[14,8],[15,9],[16,9],[17,8],[17,7],[17,6],[17,5],[3,12],[3,13],[3,14],[3,15],[3,16],[4,16],[5,16],[6,15],[6,14],[6,13],[5,12],[4,12],[8,12],[8,13],[8,14],[8,15],[8,16],[10,12],[11,12],[12,12],[13,12],[10,13],[10,14],[11,14],[12,14],[10,15],[10,16],[11,16],[12,16],[13,16],[15,12],[15,13],[15,14],[15,15],[15,16],[16,16],[17,16],[18,15],[18,14],[18,13],[17,12],[16,12]],m=function(){var n=function(){var n=Object(r.useState)(!1),e=Object(a.a)(n,2),t=e[0],c=e[1];return{on:t,toggle:function(){c((function(n){return!n}))}}}(),e=n.on,t=n.toggle;return Object(r.useEffect)((function(){var n=setInterval((function(){t()}),300);return function(){clearInterval(n)}}),[]),c.a.createElement(d,null,e&&b.map((function(n){return c.a.createElement(y,{x:n[0],y:n[1]})})))};function x(){var n=Object(r.useState)("RUNNING"),e=Object(a.a)(n,2),t=e[0],u=e[1],o=c.a.useRef(100),i=function(){var n=Object(r.useRef)("RIGHT"),e=Object(r.useRef)(!0);function t(t){t.preventDefault(),e.current&&(37===t.keyCode&&"RIGHT"!==n.current?n.current="LEFT":38===t.keyCode&&"DOWN"!==n.current&&(n.current="UP"),39===t.keyCode&&"LEFT"!==n.current&&(n.current="RIGHT"),40===t.keyCode&&"UP"!==n.current&&(n.current="DOWN"),e.current=!1)}function c(t){var r=t.x/window.innerWidth,c=t.y/window.innerHeight;e.current&&(r<c?r<1-c?"RIGHT"!==n.current&&(n.current="LEFT"):"UP"!==n.current&&(n.current="DOWN"):c<1-r?"DOWN"!==n.current&&(n.current="UP"):"LEFT"!==n.current&&(n.current="RIGHT")),e.current=!1}return Object(r.useEffect)((function(){return window.addEventListener("keydown",t),window.addEventListener("click",c),function(){window.removeEventListener("keydown",t),window.removeEventListener("click",c)}}),[]),{pressedDirection:n.current,resetQueue:function(){e.current=!0}}}(),f=i.pressedDirection,l=i.resetQueue,s=function(){var n=c.a.useState(!1),e=Object(a.a)(n,2),t=e[0],r=e[1],u=c.a.useState([{x:5,y:10},{x:4,y:10},{x:3,y:10},{x:2,y:10}]),o=Object(a.a)(u,2),i=o[0],f=o[1];return{position:i,move:function(n){var e={x:0,y:0},c={x:0,y:0};switch(n){case"UP":e={x:0,y:-1};break;case"DOWN":e={x:0,y:1};break;case"LEFT":e={x:-1,y:0};break;case"RIGHT":e={x:1,y:0}}21===(c={x:i[0].x+e.x,y:i[0].y+e.y}).x&&(c.x=1),-1===c.x&&(c.x=20),21===c.y&&(c.y=1),-1===c.y&&(c.y=20),t?(f((function(n){return[c].concat(Object(v.a)(n))})),r(!1)):f((function(n){return[c].concat(Object(v.a)(n.slice(0,n.length-1)))}))},grow:function(){r(!0)}}}(),b=s.position,x=s.move,E=s.grow,g=function(){var n=c.a.useState({x:3,y:3}),e=Object(a.a)(n,2),t=e[0],r=e[1],u=c.a.useState(0),o=Object(a.a)(u,2),i=o[0],f=o[1];return c.a.useEffect((function(){document.title="Score: ".concat(i)}),[i]),{score:function(){f((function(n){return n+1}))},deployDot:function(n){var e={};do{e={x:Math.ceil(20*Math.random()),y:Math.ceil(20*Math.random())}}while(n.find((function(n){return JSON.stringify(n)===JSON.stringify(e)})));r(e)},dotPosition:t}}(),w=g.score,O=g.deployDot,h=g.dotPosition;return Object(r.useEffect)((function(){O(b)}),[]),Object(r.useEffect)((function(){var n=setInterval((function(){var n;x(f),l(),(n=b).slice(1,n.length-1).find((function(e){return e.x===n[0].x&&e.y===n[0].y}))&&u("DEFEAT"),function(n,e){return n.x===e.x&&n.y===e.y}(b[0],h)&&(w(),E(),O(b),o.current-=2)}),o.current);return function(){clearTimeout(n)}})),"DEFEAT"!==t?c.a.createElement(d,null,c.a.createElement(y,{x:h.x,y:h.y}),b.map((function(n){return c.a.createElement(y,{x:n.x,y:n.y})}))):"DEFEAT"===t?c.a.createElement(m,null):void 0}function E(){var n=Object(i.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml, body, #root {\n  background-color: black;\n}\n"]);return E=function(){return n},n}var g=Object(f.a)(E());var w=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(x,null),c.a.createElement(g,null))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0fe91adb.chunk.js.map