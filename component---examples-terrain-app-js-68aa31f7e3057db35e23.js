(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Na3m:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a("q1tI"),n=a.n(r);function i(){return n.a.createElement("div",{style:{position:"relative"}},n.a.createElement(o,{width:2560,height:1440,name:"2160p, 2K"}),n.a.createElement(o,{width:2560,height:1440,name:"1440p"}),n.a.createElement(o,{width:1920,height:1080,name:"1080p, Full HD"}),n.a.createElement(o,{width:1280,height:720,name:"720p, HD"}),n.a.createElement(o,{width:854,height:480,name:"480p, WSD"}),n.a.createElement(o,{width:640,height:480,name:"480p, SD"}),n.a.createElement(o,{width:640,height:360,name:"360p"}),n.a.createElement(o,{width:426,height:240,name:"240p"}))}function o(e){var t=e.width,a=e.height,r=e.name;return n.a.createElement("div",{style:{position:"absolute",width:t,height:a,outline:"2px dashed black"}},n.a.createElement("div",{style:{position:"absolute",bottom:-20,right:0,fontSize:"14px",font:"normal 14px/20px 'Uber Move',Helvetica,Arial,sans-serif"}},r," (",t," x ",a,")"))}},P59B:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var r=a("q1tI"),n=a.n(r),i=a("yYqN"),o=a("Ai+L"),s=a("etlt"),c=a("Na3m"),u=a("kqDl"),m=a("kAh0"),l=a("Qj7A"),d=a("DCxL"),f={latitude:46.24,longitude:-122.18,zoom:11.5,bearing:140,pitch:60},y={rScaler:6553.6,gScaler:25.6,bScaler:.1,offset:-1e4},p=new m.a({cameraKeyframe:{timings:[0,6e3,7e3,8e3,14e3],keyframes:[{latitude:46.24,longitude:-122.18,zoom:11.5,bearing:140,pitch:60},{latitude:46.24,longitude:-122.18,zoom:11.5,bearing:0,pitch:60},{latitude:36.1101,longitude:-112.1906,zoom:12.5,pitch:20,bearing:15},{latitude:36.1101,longitude:-112.1906,zoom:12.5,pitch:20,bearing:15},{latitude:36.1101,longitude:-112.1906,zoom:12.5,pitch:60,bearing:180}],easings:[d.a.easeInOut,l.a,d.a.easeInOut,d.a.easeInOut]},layerKeyframes:[{id:"terrain",features:["r","g","b"],keyframes:[{r:255,g:255,b:255},{r:255,g:0,b:0},{r:255,g:255,b:0},{r:0,g:255,b:0},{r:0,g:255,b:255},{r:0,g:0,b:255},{r:255,g:0,b:255},{r:255,g:255,b:255}],timings:[0,2e3,4e3,6e3,8e3,1e4,12e3,14e3],easings:d.a.linear}]}),b={webm:{quality:.8},jpeg:{quality:.8},gif:{sampleInterval:1e3}},h={start:0,end:15e3,framerate:30},g=640,v=480;function w(){var e=Object(r.useRef)(null),t=Object(r.useMemo)((function(){return e.current&&e.current.deck}),[e.current]),a=Object(r.useState)(!1),m=a[0],l=a[1],d=Object(r.useState)(!1),w=d[0],O=d[1],E=Object(s.b)();Object(r.useEffect)((function(){p.setGetLayers((function(e){var t=e.layerKeyframes.terrain.getFrame();return[new o.a({id:"terrain",minZoom:0,maxZoom:23,strategy:"no-overlap",elevationDecoder:y,elevationData:"https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2hyaXNqb2J5IiwiYSI6ImNrbHU2bTl1NzAzb2Iyb255MjR3ZXkxbWEifQ.5tUEq0dh7MX_miZumlcbIQ",texture:w?null:"https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1IjoiY2hyaXNqb2J5IiwiYSI6ImNrbHU2bTl1NzAzb2Iyb255MjR3ZXkxbWEifQ.5tUEq0dh7MX_miZumlcbIQ",wireframe:!1,color:[t.r,t.g,t.b]})]}))}),[w]);var j=Object(s.a)(p,f),K=j.adapter,k=j.layers,S=j.cameraFrame,C=j.setCameraFrame;return n.a.createElement("div",{style:{position:"relative"}},n.a.createElement("div",{style:{position:"absolute"}},n.a.createElement(c.a,null)),n.a.createElement(i.a,Object.assign({ref:e,viewState:S,onViewStateChange:function(e){var t=e.viewState;C(t)},controller:!0,width:g,height:v,layers:k},K.getProps({deck:t,onNextFrame:E}))),n.a.createElement("div",{style:{position:"absolute"}},n.a.createElement(u.a,{adapter:K,busy:m,setBusy:l,formatConfigs:b,timecode:h}),n.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.5)"}},n.a.createElement("label",{style:{fontFamily:"sans-serif"}},n.a.createElement("input",{type:"checkbox",checked:w,onChange:function(){return O(!w)}}),"Rainbow Animation"))))}},etlt:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var r=a("q1tI"),n=a("EEVO");function i(){var e=Object(r.useState)()[1];return Object(r.useCallback)((function(){return e({})}),[])}function o(e,t){void 0===t&&(t=void 0);var a=Object(r.useState)([]),i=a[0],o=a[1],s=Object(r.useState)(t),c=s[0],u=s[1];return{adapter:Object(r.useMemo)((function(){var t=new n.a({});return e.setOnLayersUpdate(o),c&&e.setOnCameraUpdate(u),t.animationManager.attachAnimation(e),e.draw(),t}),[]),layers:i,cameraFrame:c,setCameraFrame:u}}},kAh0:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a("rePB"),n=a("dI71"),i=a("haon");function o(e){return e&&e[0]?Object.keys(e[0]):[]}var s=function(e){function t(t){var a,r=t.id,n=t.features,i=t.timings,s=t.keyframes,c=t.easings;return(a=e.call(this,{timings:i,keyframes:s,easings:c,features:n||o(s)})||this).id=void 0,a.id=r,a}return Object(n.a)(t,e),t}(a("4rHC").a);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(){}var l=function(e){function t(t){var a,r=t.id,n=void 0===r?"deck":r,i=t.cameraKeyframe,o=void 0===i?void 0:i,s=t.layers,c=void 0===s?[]:s,u=t.getLayers,l=void 0===u?void 0:u,d=t.layerKeyframes,f=void 0===d?[]:d,y=t.onLayersUpdate,p=void 0===y?m:y,b=t.onCameraUpdate,h=void 0===b?m:b;return(a=e.call(this,{id:n})||this).cameraKeyframe=void 0,a.layerKeyframes={},a.layers=[],a.layerKeyframes={},a.layers=c,a.onLayersUpdate=p,a.onCameraUpdate=h,a.getLayers=l,a.setKeyframes({cameraKeyframe:o,layerKeyframes:f}),a.draw(),a}Object(n.a)(t,e);var a=t.prototype;return a.setOnLayersUpdate=function(e){this.onLayersUpdate=e},a.setOnCameraUpdate=function(e){this.onCameraUpdate=e},a.setLayers=function(e){this.layers=e,this.draw()},a.setGetLayers=function(e){this.getLayers=e,this.draw()},a.setKeyframes=function(e){var t=this,a=e.layerKeyframes,r=void 0===a?[]:a,n=e.cameraKeyframe,o=void 0===n?void 0:n,c=e.timeline,u=void 0===c?void 0:c;this.cameraKeyframe&&o?this.cameraKeyframe.set(o):o&&(this.cameraKeyframe=new i.a(o),this.unattachedKeyframes.push(this.cameraKeyframe)),r&&r.length>0&&(this.layerKeyframes=r.reduce((function(e,a){return e[a.id]?e[a.id].set(a):(e[a.id]=new s(a),t.unattachedKeyframes.push(e[a.id])),e}),this.layerKeyframes)),u&&this.attachKeyframes(u)},a.getKeyframes=function(){return{cameraKeyframe:this.cameraKeyframe,layerKeyframes:this.layerKeyframes}},a.animator=function(e){if(e.cameraKeyframe&&e.onCameraUpdate(e.cameraKeyframe.getFrame()),Object.values(e.layerKeyframes).length>0)if(this.getLayers)e.onLayersUpdate(this.getLayers(e));else{var t=e.layers.map((function(t){if(e.layerKeyframes[t.id]){var a=e.layerKeyframes[t.id].getFrame();return t.clone(u(u({},a),{},{updateTriggers:a}))}return t}));e.onLayersUpdate(t)}},t}(a("tYvz").a)},kqDl:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a("q1tI"),n=a.n(r),i=a("l770"),o=a("5jj9"),s=a("U/Rs"),c=a("jhHT"),u=a("8SBj");function m(e){var t=e.disabled,a=e.encoder,r=e.setEncoder;return n.a.createElement("select",{disabled:t,value:a,onChange:function(e){return r(e.currentTarget.value)}},n.a.createElement("option",{value:"preview"},"Preview"),n.a.createElement("option",{value:"webm"},"WebM"),n.a.createElement("option",{value:"jpeg"},"JPEG Sequence"),n.a.createElement("option",{value:"png"},"PNG Sequence"),n.a.createElement("option",{value:"gif"},"GIF"))}var l={preview:i.a,gif:o.a,webm:s.a,jpeg:c.a,png:u.a};function d(e){var t=e.adapter,a=e.busy,i=e.setBusy,o=e.formatConfigs,s=e.timecode,c=Object(r.useState)("gif"),u=c[0],d=c[1];return n.a.createElement("div",null,n.a.createElement(m,{disabled:a,encoder:u,setEncoder:d}),n.a.createElement("button",{disabled:a,onClick:function(){t.render({Encoder:l[u],formatConfigs:o,timecode:s,onComplete:function(){return i(!1)}}),i(!0)}},"Render"),n.a.createElement("button",{onClick:function(){t.stop({onComplete:function(){return i(!1)}})}},"Stop"))}}}]);