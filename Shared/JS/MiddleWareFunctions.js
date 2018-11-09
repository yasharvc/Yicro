function GetLocalJS(filePath){
    return CCF('LoadLocalJS',filePath);
}
function GetLocalHTML(filePath){
    return CCF('LoadLocalHTML',filePath);
}
function GetLocalCSS(filePath){
    return CCF('LoadLocalCSS',filePath);
}
function GetSharedJS(filePath){
    return CCF('LoadSharedJS',filePath);
}
function GetSharedHTML(filePath){
    return CCF('LoadSharedHTML',filePath);
}
function GetSharedCSS(filePath){
    return CCF('LoadSharedCSS',filePath);
}
function GetVariableValue(variable){
    return CCF('GetVariableValue',variable);
}
function OnPageReady(){
    CCP('PageIsReady');
}
