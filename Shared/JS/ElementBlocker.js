function Blocker(blockedElement) {
    blockedElement = blockedElement.replace('#', '');
    var WithoutOpacity = 1;
    var WithOpacity = 2;

    this.blockedElement = getElement(blockedElement);

    this.showLoader = function (type) {
        var cssString = prepareStyle(type);

        this.theBlocker = document.createElement('div');
        this.theBlocker.className = "w3-center";

        this.theBlocker.innerHTML = "<i style='display: table-cell;vertical-align: middle;opcaity:1;' class='w3-text-green fa fa-spin fa-refresh fa-5x'></i>";
        this.theBlocker.style.cssText = cssString;

        this.blockedElement.appendChild(this.theBlocker);
    };

    this.hideLoader = function () {
        this.blockedElement.removeChild(this.theBlocker);
    };

    var prepareStyle = function(type){
        type = isNull(type) ? WithoutOpacity : type;
        var res = "";
        debugger;
        if(type === WithOpacity)
            res += "background-color:rgba(0,0,0,0.8);";
        else if(type === WithoutOpacity)
            res += "background-color:black;";
        res += "border:none;margin:0;padding:0;position:absolute;width:100%;display: table;height:100%;top:0;left:0;min-height:100%;max-height:100%;";
        return res;
    };
}

function getElement(expToSearch){
    return document.getElementById(expToSearch) ||
    document.getElementsByClassName(expToSearch)[0] ||
    document.getElementsByTagName(expToSearch)[0] ||
    document.getElementsByName(expToSearch)[0];
}