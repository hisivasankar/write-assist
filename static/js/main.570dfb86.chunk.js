(this["webpackJsonpwrite-assist"]=this["webpackJsonpwrite-assist"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),c=(a(13),a(14),a(1)),o=a(2),l=a(4),m=a(3),u=a(5),d=(a(15),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).startTimer=function(){e.resetTimer();var t=setInterval(e.updateTime,1e3);e.setState({timer:t})},e.updateTime=function(){e.setState({seconds:e.state.seconds+1})},e.resetTimer=function(){clearInterval(e.state.timer),e.setState({seconds:0})},e.getFormattedTime=function(e){var t=~~(e/3600),a=~~(e%3600/60),n=~~e%60,r="";return t>0&&(r+=t+":"+(a<10?"0":"")),r+=a+":"+(n<10?"0":""),r+=""+n},e.state={seconds:0,timer:null},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.getFormattedTime(this.state.seconds),t=this.state.seconds>0?"Restart":"Start";return r.a.createElement("div",{className:"timer"},r.a.createElement("div",{className:"timer-value-container"},r.a.createElement("span",null,"Timer:\xa0"),r.a.createElement("span",{className:"timer-value"}," ",e)),r.a.createElement("span",{className:"timer-controls"},r.a.createElement("button",{onClick:this.startTimer},t),r.a.createElement("button",{onClick:this.resetTimer},"Reset")))}}]),t}(r.a.Component)),h=function(e){var t=e.data,a=(void 0===t?"":t).trim(),n=a?a.split(" ").length:0;return r.a.createElement("span",{className:"word-count"},"Word Count: ",n)},f=(a(16),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).handleEdit=function(t){e.setState({editorValue:t.target.value})},e.state={fontSize:22,editorValue:""},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e={fontSize:this.state.fontSize};return r.a.createElement("div",{className:"editor"},r.a.createElement("div",{className:"controls"},r.a.createElement(d,null),r.a.createElement(h,{data:this.state.editorValue})),r.a.createElement("textarea",{className:"editor-input",style:e,placeholder:"Write here...",autoComplete:"off",spellCheck:"false",onChange:this.handleEdit}))}}]),t}(r.a.Component));var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"}),r.a.createElement("div",null,r.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.570dfb86.chunk.js.map