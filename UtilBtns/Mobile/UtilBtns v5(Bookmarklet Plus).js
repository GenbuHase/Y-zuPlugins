javascript:var _scriptElem=document.createElement("script");_scriptElem.src="https://genbuproject.github.io/Programs/DOM Extender/DOM Extender v3.4.js";_scriptElem.addEventListener("load",function(){window.initUtilBtns=function(){(new DOM("#utilBtn")).remove();var a=new DOM("$.compose-form"),d=new DOM("Div",{id:"utilBtn"}),e=new Style({"#utilBtn":{"Padding-Top":"10px"},"#utilBtn > *":{"Margin-Bottom":"1em"}});a.appendChild(d);d.appendChild(e);[{id:"utilBtn__button--goji",text:"\uff7a\uff9e\uff7c\uff9e\uff93\uff98\uff68\uff68\uff68\uff68\uff68\uff68!!!",onclick:function(b,f){b.value="#\u8aa4\u5b57\u306b\u6deb\u5922\u53a8\r\n:goji:";f.click()}},{id:"utilBtn__button--harukin",text:"\u306f\u308b\u304d\u3093\u713c\u5374",onclick:function(b,f){var a=Math.random.randomInt(1,7),c="";switch(Math.random.randomInt(1,2)){case 1:c=":harukin: ";break;case 2:c=":harukin_old: "}switch(a){default:b.value=[c.repeat(a),"\ud83d\udd25 ".repeat(a)].join("\r\n");break;case 7:b.value=(c+"\ud83d\udc95\r\n").repeat(6)}f.click()}},{id:"utilBtn__button--risa",text:"\u308a\u3055\u59c9\u3054\u6307\u540d",onclick:function(b,a){b.value="@RISA ";b.focus()}}].forEach(function(b){var a=new DOM("$Textarea.autosuggest-textarea__textarea"),e=new DOM('$.compose-form__publish-button-wrapper:Not([ID="utilBtn"]) > Button');d.appendChild(new DOM("Button",{id:b.id,classes:["button","button--block","utilBtn__button"],text:b.text,events:{click:function(){b.onclick(a,e)}}}))})}});document.body.appendChild(_scriptElem);window.addEventListener("DOMNodeInserted",function(a){"#text"!==a.target.nodeName&&a.target.classList.contains("drawer")&&a.target.querySelector("Div.compose-form")&&initUtilBtns()});