(this["webpackJsonppokemon-effectiveness"]=this["webpackJsonppokemon-effectiveness"]||[]).push([[0],{37:function(e,t,n){e.exports=n(48)},42:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(12),c=n.n(a),f=(n(42),n(27));function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={primary:null,secondary:null},u=Object(i.createContext)(),m=function(){return Object(i.useContext)(u)},g=function(e){var t=e.reducer,n=e.initialState,a=e.children;return r.a.createElement(u.Provider,{value:Object(i.useReducer)(t,n)},a)},d=function(e,t){switch(t.type){case"setPrimary":return s({},e,{primary:t.payload});case"setSecondary":return s({},e,{secondary:t.payload});case"setResetTypes":return s({},e,{primary:null,secondary:null})}},v=n(66),p=n(74),y=n(68),b=n(70),h=n(71),k=n(69),E=n(29),w=n.n(E),x=Object(v.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function O(){var e=x();return r.a.createElement("div",{className:e.root},r.a.createElement(p.a,{position:"static"},r.a.createElement(y.a,null,r.a.createElement(k.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(w.a,null)),r.a.createElement(b.a,{variant:"h6",className:e.title},"Pok\xe9mon"),r.a.createElement(h.a,{color:"inherit"},"Login"))))}var j=n(9),N=Object(v.a)((function(e){return{root:{flexGrow:1},button:{color:"black",minWidth:"100px",margin:"10px 0"}}}));function P(e){var t=m(),n=Object(j.a)(t,2),i=n[0],a=i.primary,c=(i.secondary,n[1],e.value),f=e.label,o=e.color,s=e.clickFunction,l=N();return console.log(c,f,o,s),r.a.createElement(h.a,{variant:"contained",className:l.button,style:a===c?{backgroundColor:"grey"}:{backgroundColor:o},onClick:function(){return s(c)},disabled:a===c},f)}var C={normal:{attack:{effective:[],ineffective:["rock","steel"],immunes:["ghost"]},defence:{effective:["fighting"],ineffective:[],immunes:["ghost"]}},fire:{attack:{effective:["grass","ice","bug","steel"],ineffective:["fire","water","rock","dragon"],immunes:[]},defence:{effective:["fire","grass","ice","bug","steel","fairy"],ineffective:["water","ground","rock"],immunes:[]}},water:{attack:{effective:["fire","ground","rock"],ineffective:["water","grass","dragon"],immunes:[]},defence:{effective:["fire","water","ice","steel"],ineffective:["electric","grass"],immunes:[]}},electric:{attack:{effective:["water","flying"],ineffective:["electric","grass","dragon"],immunes:["ground"]},defence:{effective:["electric","flying","steel"],ineffective:["ground"],immunes:[]}},grass:{attack:{effective:["water","ground","rock"],ineffective:["fire","grass","poison","flying","bug","dragon","steel"],immunes:[]},defence:{effective:["water","electric","grass","ground"],ineffective:["fire","ice","poison","flying","bug"],immunes:[]}},ice:{attack:{effective:["grass","ground","flying","dragon"],ineffective:["fire","water","ice","steel"],immunes:[]},defence:{effective:["ice"],ineffective:["fire","fighting","rock","steel"],immunes:[]}},fighting:{attack:{effective:["normal","ice","rock","dark","steel"],ineffective:["poison","flying","psychic","bug","fairy"],immunes:["ghost"]},defence:{effective:["bug","rock","dark"],ineffective:["flying","psychic","fairy"],immunes:[]}},poison:{attack:{effective:["grass","fairy"],ineffective:["poison","ground","rock","ghost"],immunes:["steel"]},defence:{effective:["grass","fighting","poison","bug","fairy"],ineffective:["ground","psychic"],immunes:[]}},ground:{attack:{effective:["fire","electric","poison","rock","steel"],ineffective:["grass","bug"],immunes:["flying"]},defence:{effective:["poison","rock"],ineffective:["water","grass","ice"],immunes:["electric"]}},flying:{attack:{effective:["grass","fighting","bug"],ineffective:["electric","rock","steel"],immunes:[]},defence:{effective:["grass","fighting","bug"],ineffective:["electric","ice","rock"],immunes:["ground"]}},psychic:{attack:{effective:["fighting","poison"],ineffective:["psychic","steel"],immunes:["dark"]},defence:{effective:["fighting","psychic"],ineffective:["bug","ghost","dark"],immunes:[]}},bug:{attack:{effective:["grass","psychic","dark"],ineffective:["fire","fighting","poison","flying","ghost","steel","fairy"],immunes:[]},defence:{effective:["grass","fighting","ground"],ineffective:["fire","flying","rock"],immunes:[]}},rock:{attack:{effective:["fire","ice","flying","bug"],ineffective:["fighting","ground","steel"],immunes:[]},defence:{effective:["normal","fire","poison","flying"],ineffective:["water","grass","fighting","ground","steel"],immunes:[]}},ghost:{attack:{effective:["psychic","ghost"],ineffective:["dark"],immunes:["normal"]},defence:{effective:["normal","fighting"],ineffective:["poison","bug"],immunes:["ghost","dark"]}},dragon:{attack:{effective:["dragon"],ineffective:["steel"],immunes:["fairy"]},defence:{effective:["fire","water","electric","grass"],ineffective:["ice","dragon","fairy"],immunes:[]}},dark:{attack:{effective:["psychic","ghost"],ineffective:["fighting","dark","fairy"],immunes:[]},defence:{effective:["ghost","dark"],ineffective:["fighting","bug","fairy"],immunes:["psychic"]}},steel:{attack:{effective:["ice","rock","fairy"],ineffective:["fire","water","electric","steel"],immunes:[]},defence:{effective:["normal","grass","ice","flying","psychic","bug","rock","dragon","steel","fairy"],ineffective:["fire","fighting","ground"],immunes:["poison"]}},fairy:{attack:{effective:["fighting","dragon","dark"],ineffective:["fire","poison","steel"],immunes:[]},defence:{effective:["fighting","bug","dark"],ineffective:["poison","steel"],immunes:["dragon"]}}},W={normal:"#aba87c",fire:"#ff7d3d",water:"#5192ea",electric:"#ffce4d",grass:"#6ac75e",ice:"#88d8d8",fighting:"#cf2b2c",poison:"#a8419d",ground:"#e7be72",flying:"#a692eb",psychic:"#ff5687",bug:"#a9b83e",rock:"#bd9f47",ghost:"#715895",dragon:"#6740f1",dark:"#73584a",steel:"#b7b8ce",fairy:"#fdc9e2"},G=Object(v.a)((function(e){return{root:{flexGrow:1},buttonContainer:{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"calc(100% - 20px)",flexWrap:"wrap",padding:"0 10px"},button:{color:"black",minWidth:"100px",margin:"10px 0"}}}));function S(){var e=m(),t=Object(j.a)(e,2),n=t[0],i=n.primary,a=(n.secondary,t[1]),c=G();function f(e,t){a({type:e,payload:t})}function o(e){f(i?"setSecondary":"setPrimary",e)}return r.a.createElement("div",{className:c.root},r.a.createElement(b.a,{style:{textAlign:"center",margin:"15px 0"},variant:"h4"},"Pick  ",r.a.createElement("span",{style:{textDecoration:"underline"}},i?"Secondary":"Primary")," Type"),r.a.createElement("div",{className:c.buttonContainer},Object.keys(C).map((function(e,t){return r.a.createElement(P,{key:t,value:e,label:e,color:W[e],clickFunction:o})}))))}var T=n(30),D=n.n(T),R=n(31),B=n.n(R),I=n(32),A=n.n(I),F=Object(v.a)((function(e){return{root:{flexGrow:1},section:{margin:"0 0 20px 0"},typeElement:{padding:"7.5px",borderRadius:"10px"},green:{color:"#00b16a"},red:{color:"#f03434"}}}));function J(e,t,n){return e.reduce((function(e,t){return e[t]=t in e?e[t]*n:n,e}),t)}function z(){var e=m(),t=Object(j.a)(e,2),n=t[0],i=n.primary,a=n.secondary,c=(t[1],F());function f(e,t,n,i){var a=Object.keys(e).sort((function(t,n){return e[n]-e[t]}));return r.a.createElement("section",{className:c.section},r.a.createElement(b.a,{variant:"h5",component:"h5",style:{},className:n},i,t),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},a.length>0?a.map((function(t,n){return r.a.createElement("div",{key:n,className:c.typeElement,style:{backgroundColor:W[t]}},r.a.createElement(b.a,{variant:"body1",style:{color:"black",fontWeight:500}},e[t],"x ",r.a.createElement("span",{style:{textTransform:"uppercase"}},t)))})):r.a.createElement(b.a,{variant:"body1"},"None found.")))}for(var o={},s=[i,a],l=0;l<s.length;l++)s[l]&&(J(C[s[l]].defence.immunes,o,0),J(C[s[l]].defence.effective,o,.5),J(C[s[l]].defence.ineffective,o,2));var u=function(e){return Object.keys(e).reduce((function(t,n){return 0===e[n]?t.immunes[n]=e[n]:e[n]>1?t.effective[n]=e[n]:e[n]<1&&(t.ineffective[n]=e[n]),t}),{effective:{},ineffective:{},immunes:{}})}(o);return r.a.createElement("div",{className:c.root},f(u.effective,"Effective",c.green,r.a.createElement(D.a,null)),f(u.ineffective,"Ineffective",c.red,r.a.createElement(B.a,null)),f(u.immunes,"No Effect",c.red,r.a.createElement(A.a,null)))}var L=n(72),$=Object(v.a)((function(e){return{root:{flexGrow:1},divider:{margin:"10px 0"},section:{margin:"0 0 20px 0"},buttonContainer:{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"calc(100% - 20px)",flexWrap:"wrap",padding:"0 10px"},button:{color:"black",minWidth:"100px",margin:"10px 0"}}}));function q(){var e=m(),t=Object(j.a)(e,2),n=t[0],i=n.primary,a=n.secondary,c=t[1],f=$();return r.a.createElement("div",{className:f.root},r.a.createElement(b.a,{variant:"h4"},"Type Effectiness"),r.a.createElement(b.a,{variant:"h5",style:{textTransform:"capitalize"}},i," & ",a),r.a.createElement(L.a,{className:f.divider}),r.a.createElement(z,null),r.a.createElement(L.a,{className:f.divider}),r.a.createElement(h.a,{variant:"contained",color:"secondary",onClick:function(){c({type:"setResetTypes",payload:null})}},"Pick Again"))}var H=Object(v.a)((function(e){return{root:{flexGrow:1,padding:"10px"}}}));function K(){var e=m(),t=Object(j.a)(e,2),n=t[0],i=n.primary,a=n.secondary,c=(t[1],H());return r.a.createElement("div",{className:c.root},null!==i&&null!==a?r.a.createElement(q,null):r.a.createElement(S,null))}var M=n(33),Q=n(73),U=Object(M.a)({palette:{primary:{main:"#ffffff"},secondary:{main:"#000000"}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){return r.a.createElement(g,{initialState:l,reducer:d},r.a.createElement(Q.a,{theme:U},r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(K,null))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.4671e7de.chunk.js.map