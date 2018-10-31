var scripts = [];
var csses = [];

function isNull(obj) {
    return obj === null || typeof obj === 'undefined';
}

function isFunction(name) {
    return typeof window[name] === 'function';
}

function getFunctionList(exp) {
    var matches = exp.match(/function\s*[\w]*\(/gi);
    var arr = [];
    for (var i = 0; i < matches.length; i++) {
        arr.push(matches[i].replace('function', '').replace('(', '').trim());
    }
    return arr;
}

function deleteFunction(functionArray) {
    for (var i = 0; i < functionArray.length; i++)
        if (isFunction(functionArray[i]))
            window[functionArray[i]] = undefined;
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
    if (!isNull(fileref)) {
        getBottomScript().appendChild(fileref);
        scripts.push({file:fileref,isTop:false});
    }
}

function addCSSToTop(CSSCode) {
    var fileref = document.createElement("style");
    fileref.innerHTML = CSSCode;
    if (!isNull(fileref)) {
        getTopCSS().appendChild(fileref);
        csses.push(fileref);
    }
}

function setBody(HTMLCode) {
    getBody().innerHTML = HTMLCode;
}

function appendBody(HTMLCode) {
    getBody().innerHTML += HTMLCode;
}

function clearBody() {
    setBody('');
}

function clearJS() {
    for (var i = 0; i < scripts.length; i++) {
        deleteFunction(getFunctionList(scripts[i].file.innerHTML));
        if(scripts[i].isTop)
            getTopScript().removeChild(scripts[i].file);
        else
            getBottomScript().removeChild(scripts[i].file);
    }
    scripts = [];
}

function clearCSS(){
    for (var i = 0; i < csses.length; i++) {
        getTopCSS().removeChild(csses[i]);
    }
    csses = [];
}