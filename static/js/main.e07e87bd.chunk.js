(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{20:function(e,t,a){e.exports=a(47)},25:function(e,t,a){},26:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/kaboom.45697063.mp3"},41:function(e,t,a){e.exports=a.p+"static/media/sploosh.1e61fa55.mp3"},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/victory.344b5d23.mp3"},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),c=a.n(i),l=(a(25),a(8)),s=a(2),o=a(6),m=a(1),u=a(19),d=function(e,t){switch(t.type){case"ADD_PLAYER":return[].concat(Object(u.a)(e),[{player:t.player.name,id:t.player.id,enemyTiles:t.player.enemyTiles,personalTiles:t.player.personalTiles,tilesSunk:0}]);case"MISS":return e.map((function(e){return e.id===t.player.enemyId?e:Object(m.a)(Object(m.a)({},e),{},{enemyTiles:e.enemyTiles.map((function(e){return e.x===t.player.x&&e.y===t.player.y?Object(m.a)(Object(m.a)({},e),{},{isSplash:!0}):e}))})}));case"HIT":return e.map((function(e){return e.id===t.player.enemyId?Object(m.a)(Object(m.a)({},e),{},{personalTiles:e.personalTiles.map((function(e){return e.x===t.player.x&&e.y===t.player.y?Object(m.a)(Object(m.a)({},e),{},{isHit:!0}):e}))}):Object(m.a)(Object(m.a)({},e),{},{enemyTiles:e.enemyTiles.map((function(e){return e.x===t.player.x&&e.y===t.player.y?Object(m.a)(Object(m.a)({},e),{},{isHit:!0}):e})),tilesSunk:e.tilesSunk+1})}));case"RESET":return[];default:return e}},f=Object(n.createContext)(),p=function(e){var t=Object(n.useReducer)(d,[],(function(){var e=localStorage.getItem("battleship");return e?JSON.parse(e):[]})),a=Object(o.a)(t,2),i=a[0],c=a[1];Object(n.useEffect)((function(){localStorage.setItem("battleship",JSON.stringify(i))}),[i]);return r.a.createElement(f.Provider,{value:{game:i,dispatch:c,resetGame:function(){c({type:"RESET"})},sinkTile:function(e,t,a){c({type:"HIT",player:{enemyId:a,x:e,y:t}})},missedShot:function(e,t,a){c({type:"MISS",player:{enemyId:a,x:e,y:t}})}}},e.children)},y=(a(26),function(){return r.a.createElement("div",{className:"set-players-container"},r.a.createElement("div",{id:"welcome-header-container"},r.a.createElement("span",{id:"welcome-header"},"Battleship")),r.a.createElement(l.b,{to:"/player-names"},r.a.createElement("button",{className:"set-players-btn"},"Set Players")))}),b=a(49),h=function(){for(var e=["","","","","","","","","","",""],t=[],a=["","","","","","","","",""].length;a>=1;a--)for(var n=1;n<=e.length;n++)t.push({isFree:!0,isHit:!1,isSplash:!1,x:n,y:a});return t},v=function(e,t){if(t.direction)for(var a=function(a){var n=t.coordinates[0]+a,r=t.coordinates[1];if(!e.find((function(e){return e.x===n&&e.y===r})).isFree)return{v:!0}},n=0;n<t.length;n++){var r=a(n);if("object"===typeof r)return r.v}else for(var i=function(a){var n=t.coordinates[1]+a,r=t.coordinates[0];if(!e.find((function(e){return e.y===n&&e.x===r})).isFree)return{v:!0}},c=0;c<t.length;c++){var l=i(c);if("object"===typeof l)return l.v}return!1},E=function(e){var t=e.length-1,a=e.direction?e.coordinates[0]:e.coordinates[1];return!((e.direction?11:9)-(a+t)>0)};var O=[{text:"A",id:Object(b.a)()},{text:"B",id:Object(b.a)()},{text:"C",id:Object(b.a)()},{text:"D",id:Object(b.a)()},{text:"E",id:Object(b.a)()},{text:"F",id:Object(b.a)()},{text:"G",id:Object(b.a)()},{text:"H",id:Object(b.a)()},{text:"I",id:Object(b.a)()},{text:"J",id:Object(b.a)()},{text:"K",id:Object(b.a)()}],j=function(){for(var e=[],t=9;t>0;t--)e.push({text:t,id:Object(b.a)()});return e},x=(a(35),["Captain Morgan","El Capit\xe1n","Admiral Nelson","Blackbeard","Hook"]),g=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],i=t[1],c=Object(n.useContext)(f),s=c.game,u=c.dispatch,d=(c.winner,Object(n.useState)({index:Math.floor(5*Math.random())})),p=Object(o.a)(d,2),y=p[0],b=p[1];return 2===s.length?r.a.createElement("div",{className:"start-btn-container"},r.a.createElement(l.b,{to:"/play"},r.a.createElement("button",{className:"start-btn"},"Start Game"))):r.a.createElement("div",{id:"player-form-container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=0===s.length?"A":"B",n=h(),r=h(),c=function(e){for(var t=e,a=1;a<=5;a++){var n=1===a?5:2===a||3===a?4:4===a?3:2,r={length:n,coordinates:[],direction:Math.random()>.5},i=void 0,c=void 0;do{r.coordinates=[Math.floor(11*Math.random())+1,Math.floor(9*Math.random())+1],i=!!(c=E(r))||v(t,r)}while(i||c);for(var l=0;l<n;l++)r.direction?function(){var e=r.coordinates[0]+l,a=r.coordinates[1];t=t.map((function(t){return t.x===e&&t.y===a?Object(m.a)(Object(m.a)({},t),{},{isFree:!1}):t}))}():function(){var e=r.coordinates[1]+l,a=r.coordinates[0];t=t.map((function(t){return t.y===e&&t.x===a?Object(m.a)(Object(m.a)({},t),{},{isFree:!1}):t}))}()}return t}(n);u({type:"ADD_PLAYER",player:{id:t,name:a,personalTiles:c,enemyTiles:r}}),b(Object(m.a)(Object(m.a)({},y),{},{index:Math.floor(5*Math.random())})),i("")},className:"player-form"},r.a.createElement("span",{className:"name-label"},0===s.length?"Enter First Name: ":"Enter Second Name: "),r.a.createElement("input",{type:"text",name:"player",value:a,onChange:function(e){i(e.target.value)},placeholder:x[y.index],className:"name-input"}),r.a.createElement("button",{className:"submit-form-btn"},"Submit")))},N=(a(36),function(e){var t,a=e.tile,n=e.hitTile,i=e.nextTurn;a.isHit?t="black":a.isSplash&&(t="white");return r.a.createElement("div",{className:"tile",onClick:function(e){if(!a.isHit&&!a.isSplash){var t=n(a);"hit"===t?e.target.classList.add("hit"):"splash"===t&&e.target.classList.add("splash"),i()}},onMouseOver:function(e){a.isHit||a.isSplash||e.target.classList.add("hover")},onMouseOut:function(e){a.isHit||a.isSplash||e.target.classList.remove("hover")},style:{backgroundColor:t}})}),S=(a(37),function(e){var t=e.char;return r.a.createElement("div",{className:"letter"},t.text)}),T=(a(38),function(e){var t=e.num;return r.a.createElement("div",{className:"number"},t.text)}),w=(a(39),a(40)),k=new Audio(w),I=a(41),M=new Audio(I),H=function(e){var t=e.thisPlayer,a=e.thisEnemy,i=e.nextTurn,c=e.winner,l=Object(n.useContext)(f),s=l.sinkTile,o=l.missedShot,m=j(),u=(t.playerInfo,t.enemyTiles),d=(a.enemyInfo,a.enemysPersonalTiles),p=a.id,y=function(e){var t=e.x,a=e.y,n=d.filter((function(e){return e.x===t&&e.y===a})),r=u.filter((function(e){return e.x===t&&e.y===a}));return n[0].isFree||r[0].isHit?!(!n[0].isFree||r[0].isHit||r[0].isSplash)&&(console.log("splash"),M.load(),M.currentTime=0,M.play(),o(t,a,p),"splash"):(console.log("hit"),k.load(),k.currentTime=0,k.play(),s(t,a,p),"hit")},b=u.map((function(e,t){return r.a.createElement(N,{key:t,tile:e,hitTile:y,nextTurn:i})})),h=O.map((function(e){return r.a.createElement(S,{key:e.id,char:e})})),v=m.map((function(e){return r.a.createElement(T,{key:e.id,num:e})}));return c.id.length>0?r.a.createElement("div",{className:"empty"}):r.a.createElement("div",{className:"tile-display"},r.a.createElement("h2",{className:"target-header"},"Choose a target"),r.a.createElement("div",{className:"numbers enemy"},v),r.a.createElement("div",{className:"tiles"},b),r.a.createElement("div",{className:"letters enemy"},h))},A=(a(42),function(e){var t,a=e.tile;return t=a.isHit?"black":a.isFree?"rgb(123,199,247)":"rgb(150,18,6)",r.a.createElement("div",{className:"tile",style:{background:t}})}),C=(a(43),a(44)),P=new Audio(C),F=function(e){var t=e.thisPlayer,a=e.winner,n=e.loser,i=j(),c=t.playerInfo,l=c.personalTiles.map((function(e,t){return r.a.createElement(A,{key:t,tile:e})})),s=O.map((function(e){return r.a.createElement(S,{key:e.id,char:e})})),o=i.map((function(e){return r.a.createElement(T,{key:e.id,num:e})}));return a.id.length>0?(P.load(),P.currentTime=0,P.play(),r.a.createElement("div",{className:"winner-header-container"},r.a.createElement("h1",{id:"winner-header"},"Congratulations to ",a.id," for defeating ",n.id,"!"))):r.a.createElement("div",{className:"tile-display"},r.a.createElement("h2",null,"These are your ships, ",c.player),r.a.createElement("div",{className:"numbers"},o),r.a.createElement("div",{className:"tiles"},l),r.a.createElement("div",{className:"letters"},s))},B=(a(45),function(){return r.a.createElement("div",{className:"loading-container"},r.a.createElement("h1",{id:"loading-header"},"...Loading next player"))}),L=(a(46),function(){var e=Object(n.useContext)(f).game,t=Object(n.useState)(!0),a=Object(o.a)(t,2),i=a[0],c=a[1],l=Object(n.useState)(0),s=Object(o.a)(l,2),u=s[0],d=s[1],p=Object(n.useState)(!1),y=Object(o.a)(p,2),b=y[0],h=y[1],v=Object(n.useState)({id:""}),E=Object(o.a)(v,2),O=E[0],j=E[1],x=Object(n.useState)({id:""}),g=Object(o.a)(x,2),N=g[0],S=g[1],T=Object(n.useState)({id:"B",playerInfo:[],enemyTiles:[]}),w=Object(o.a)(T,2),k=w[0],I=w[1],M=Object(n.useState)({id:"A",enemyInfo:[],enemysPersonalTiles:[]}),A=Object(o.a)(M,2),C=A[0],P=A[1];Object(n.useEffect)((function(){var t=setTimeout((function(){var t=L(k.id),a=e.filter((function(e){return e.id===t}));I(Object(m.a)(Object(m.a)({},k),{},{id:t,playerInfo:a[0],enemyTiles:a[0].enemyTiles}));var n=L(C.id),r=e.filter((function(e){return e.id===n}));P(Object(m.a)(Object(m.a)({},C),{},{id:n,enemyInfo:r[0],enemysPersonalTiles:r[0].personalTiles})),J()}),50);return function(){return clearTimeout(t)}}),[u]),Object(n.useEffect)((function(){setTimeout((function(){var e=R();"winner"===e?G("winner"):"loser"===e&&G("loser"),D()}),100)}),[b]);var L=function(e){return"A"===e?"B":"A"},D=function(){c(!i)},J=function(){h(!b)},R=function(){var e=18===C.enemyInfo.tilesSunk;return 18===k.playerInfo.tilesSunk?"winner":!!e&&"loser"},G=function(e){var t="winner"===e?k.playerInfo.player:C.enemyInfo.player,a=t===C.enemyInfo.player?k.playerInfo.player:C.enemyInfo.player;j(Object(m.a)(Object(m.a)({},O),{},{id:t})),S(Object(m.a)(Object(m.a)({},N),{},{id:a}))};return r.a.createElement("div",{className:"game-container"},i?r.a.createElement(B,null):r.a.createElement("div",{className:"game-display"},r.a.createElement("div",{className:"tile-container"},r.a.createElement(F,{thisPlayer:k,winner:O,loser:N}),r.a.createElement(H,{thisPlayer:k,thisEnemy:C,nextTurn:function(){D(),d(0===u?u+1:u-1)},winner:O,loser:N}))),O.id.trim()?r.a.createElement("div",{className:"empty"}):r.a.createElement("div",{className:"legend-container"},r.a.createElement("div",{className:"splash-info"},r.a.createElement("span",{className:"splash-text"},"Miss = "),r.a.createElement("div",{className:"splash-legend-tile"})),r.a.createElement("div",{className:"hit-info"},r.a.createElement("span",{className:"hit-text"},"Hit = "),r.a.createElement("div",{className:"hit-legend-tile"}))))}),D=function(){var e=Object(n.useContext)(f),t=e.resetGame;return e.game.length<1?r.a.createElement("div",{className:"empty",style:{display:"none"}}):r.a.createElement("div",{className:"start-over-container"},r.a.createElement(l.b,{to:"/"},r.a.createElement("button",{onClick:t,className:"start-over-btn"},"Start Over")))};var J=function(){return r.a.createElement(l.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(p,null,r.a.createElement(s.a,{exact:!0,path:"/",component:y}),r.a.createElement(D,null),r.a.createElement(s.a,{exact:!0,path:"/player-names",component:g}),r.a.createElement(s.a,{exact:!0,path:"/play",component:L}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.e07e87bd.chunk.js.map