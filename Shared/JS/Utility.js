var scripts = [];
var csses = [];
function isNull(obj) {
    return obj === null || typeof obj === 'undefined';
}

function getBottomScript() {
    return document.getElementById('__bottomscript__');
}

function getTopScript() {
    return document.getElementById('__topscript__');
}

function getBottomCSS() {
    return document.getElementById('__bottomcss__');
}

function getTopCSS() {
    return document.getElementById('__topcss__');
}
function getBody() {
    return document.getElementById('__body__');
}
function addJSToBottom(JSCode) {
    var fileref = document.createElement('script');
    fileref.setAttribute("type", "text/javascript");
    fileref.innerHTML = JSCode;
    if (!isNull(fileref)){
        getBottomScript().appendChild(fileref);
        scripts.push(fileref);
    }
}

function addCSSToTop(CSSCode) {
    var fileref = document.createElement("style");
    fileref.innerHTML = CSSCode;
    if (!isNull(fileref)){
        getTopCSS().appendChild(fileref);
        csses.push(fileref);
    }
}

function setBody(HTMLCode){
    getBody().innerHTML = HTMLCode;
}

function appendBody(HTMLCode){
    getBody().innerHTML += HTMLCode;
}
function clearBody(){
    setBody('');
}
function clearJS(){
    for(var i = 0 ; i < scripts.length ; i++){
        getBottomScript().removeChild(scripts[i]);
    }
    scripts = [];
}
function getFunctionList(exp){
    var regExp = /function\s*[\w]*\(([^)]*)\)/;
    var matches = regExp.exec("I expect five hundred dollars ($500).");
    console.log(matches[1]);
}