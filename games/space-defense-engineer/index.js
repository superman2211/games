changeScene=n=>{var e;cs=G.allScenes.find(e=>e===n),cs&&(G.cs=cs,(e=document.querySelector("[in-progress]"))&&document.body.removeChild(e),cs===GAME_SCENE?renderWebComponent("sd-game-scene"):(LOADING_SCENE,renderWebComponent("sd-loading-scene")))},renderWebComponent=e=>{let n=dcr(e,document);n.setAttribute("in-progress",!0),n.style.cssText="opacity: 0; display: block; transition: opacity .3s",dba(n,document),setTimeout(()=>{n.style.opacity="1"},200)},changeScene(LOADING_SCENE),addEventListener("scene-change",e=>{changeScene(e.detail)}),Promise.all(["sd-game-scene"].map(e=>customElements.whenDefined(e))).then(e=>{setTimeout(()=>{changeScene(GAME_SCENE)},1e3)}),addEventListener("show-game",e=>changeScene(GAME_SCENE)),addEventListener("show-controls",e=>alert("coming soon"));