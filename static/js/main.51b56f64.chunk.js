(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(8),r=a.n(l),c=a(2),o=a(3),s=a(5),u=a(4),d=a(6),h=a(1),v=a(9),p=a.n(v),f=function(e){return i.a.createElement("header",null,i.a.createElement("button",{onClick:e.save},"Save"),i.a.createElement("label",null,"Level index:",i.a.createElement("input",{type:"text",placeholder:"1",value:e.levelIndex,onChange:e.onChange})),i.a.createElement("label",null,"Load level:",i.a.createElement("input",{id:"file",type:"file",onChange:e.fileUpload})))},g=function(e){var t=e.grid.map(function(e){return e.map(function(e){return e})});return i.a.createElement("div",{style:{width:e.width},className:"grid"},t)},m=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={x:e.x,y:e.y,tileData:e.tileData},a.tileClick=a.tileClick.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.tileData!==this.props.tileData&&this.setState({tileData:this.props.tileData})}},{key:"tileClick",value:function(){var e=this.state,t=e.x,a=e.y;e.tileData;this.setState({tileData:this.props.currentTile}),this.props.onChange(t,a,this.props.currentTile)}},{key:"changeColor",value:function(){var e=this.state.tileData,t="blue";return 0===e&&(t="green"),1===e&&(t="brown"),{backgroundColor:t}}},{key:"render",value:function(){var e=this.state.tileData;return i.a.createElement("div",{"data-id":e,style:this.changeColor(),className:"tile",onClick:this.tileClick},"Data:",e)}}]),t}(n.Component),b=function(e){return i.a.createElement("div",{className:"tile-selector"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("button",{onClick:function(){return e.selectTile(-1)}},"Air")),i.a.createElement("li",null,i.a.createElement("button",{onClick:function(){return e.selectTile(0)}},"Grass")),i.a.createElement("li",null,i.a.createElement("button",{onClick:function(){return e.selectTile(1)}},"Ground"))))},y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={worldWidth:2400,worldHeight:800,grid:[],gridItems:[],currentTile:-1,levelIndex:""},a.saveLayout=a.saveLayout.bind(Object(h.a)(Object(h.a)(a))),a.changeCurrentTile=a.changeCurrentTile.bind(Object(h.a)(Object(h.a)(a))),a.changeLevelIndex=a.changeLevelIndex.bind(Object(h.a)(Object(h.a)(a))),a.tileChanged=a.tileChanged.bind(Object(h.a)(Object(h.a)(a))),a.fileUpload=a.fileUpload.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.grid!==this.state.grid&&this.createGridItems()}},{key:"componentDidMount",value:function(){this.createGrid()}},{key:"changeCurrentTile",value:function(e){this.setState({currentTile:e})}},{key:"saveLayout",value:function(){var e=this.state,t=e.grid,a=e.levelIndex;if(""!==a){var n=t.map(function(e){return e.map(function(e){return e.tileData})}),i=JSON.stringify({level:n}),l=new Blob([i],{type:"application/json"});p.a.saveAs(l,"level".concat(a,".json"))}}},{key:"createGridItems",value:function(){for(var e=this.state.grid,t=[],a=0;a<e.length;a++){t[a]=[];for(var n=0;n<e[a].length;n++){var l=e[a][n];t[a].push(i.a.createElement(m,{key:"".concat(l.position.x).concat(l.position.y),currentTile:this.state.currentTile,tileData:l.tileData,onChange:this.tileChanged,x:l.position.x,y:l.position.y}))}}this.setState({gridItems:t})}},{key:"tileChanged",value:function(e,t,a){console.log(e,t,a);var n=this.state.grid;n[t][e].tileData=a,console.log(n[t][e]),this.setState({grid:n})}},{key:"createGrid",value:function(){for(var e=this.state,t=e.worldWidth,a=e.worldHeight,n=(e.currentTile,t/50),i=a/50,l=[],r=0;r<i;r++){l[r]=[];for(var c=0;c<n;c++)l[r].push({position:{x:c,y:r},tileData:-1})}this.setState({grid:l})}},{key:"changeLevelIndex",value:function(e){var t=e.target.value;this.setState({levelIndex:t})}},{key:"fileUpload",value:function(e){var t=this,a=document.getElementById("file").files[0],n=new FileReader;n.readAsText(a),n.addEventListener("load",function(){var e=JSON.parse(n.result);t.fileUploadProcess(e.level)})}},{key:"fileUploadProcess",value:function(e){for(var t=[],a=0;a<e.length;a++){t[a]=[];for(var n=0;n<e[a].length;n++)t[a].push({position:{x:n,y:a},tileData:e[a][n]})}this.setState({grid:t})}},{key:"render",value:function(){var e=this.state,t=e.worldWidth,a=e.gridItems,n=e.levelIndex;return i.a.createElement("div",{className:"App"},i.a.createElement(f,{levelIndex:n,onChange:this.changeLevelIndex,save:this.saveLayout,fileUpload:this.fileUpload}),i.a.createElement(g,{grid:a,width:t}),i.a.createElement(b,{selectTile:this.changeCurrentTile}))}}]),t}(n.Component);a(16);r.a.render(i.a.createElement(y,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.51b56f64.chunk.js.map