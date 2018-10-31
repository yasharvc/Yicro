var BlockWithoutOpacity = 1;
var BlockWithOpacity = 2;

function Blocker(blockedElement) {
    blockedElement = blockedElement.replace('#', '');
    var theBlocker = null;
    this.blockedElement = getElement(blockedElement);

    this.showLoader = function (type) {
        var cssString = prepareStyle(type);

        this.theBlocker = document.createElement('div');
        this.theBlocker.className = "w3-center FadeIn";

        this.theBlocker.innerHTML = "<i style='display: table-cell;vertical-align: middle;opcaity:1;' class='w3-text-green fa fa-spin fa-refresh fa-5x'></i>" +
            '<div class="w3-light-grey" style="width:100%;"><div id="__progressbar" class="w3-container w3-green w3-center w3-tiny" style="width:0%;position:fixed;left:0px;margin:10px;">0%</div></div>';
        this.theBlocker.style.cssText = cssString;

        this.blockedElement.appendChild(this.theBlocker);
        theBlocker = this.theBlocker;
    };

    this.hideLoader = function () {
        this.theBlocker.className = this.theBlocker.className.replace(/FadeIn/g, '');
        this.theBlocker.className += 'FadeOut';
        this.blockedElement.removeChild(this.theBlocker);
        theBlocker = null;
    };

    var prepareStyle = function (type) {
        type = isNull(type) ? BlockWithoutOpacity : type;
        var res = "";
        if (type === BlockWithOpacity)
            res += "background-color:rgba(0,0,0,0.8);";
        else if (type === BlockWithoutOpacity)
            res += "background-color:black;";
        res += "border:none;margin:0;padding:0;position:absolute;width:100%;display: table;height:100vh;top:0;left:0;";
        return res;
    };

    window.addEventListener('resize', function () {
        if (theBlocker != null) {
            theBlocker.style.height = window.innerHeight;
            this.console.log('sdasd');
        }
    });
}



var bodyBlocker;

function getElement(expToSearch) {
    return document.getElementById(expToSearch) ||
        document.getElementsByClassName(expToSearch)[0] ||
        document.getElementsByTagName(expToSearch)[0] ||
        document.getElementsByName(expToSearch)[0];
}

function BlockEntirePage() {
    if (isNull(bodyBlocker))
        bodyBlocker = new Blocker('body');
    bodyBlocker.showLoader();
}

function UnblockEntirePage() {
    if (isNull(bodyBlocker))
        bodyBlocker = new Blocker('body');
    bodyBlocker.hideLoader();
}

function changeProgress(percent) {
    percent = parseInt(percent);
    if (percent >= 0 && percent <= 100) {
        var elem = document.getElementById("__progressbar");
        var width = percent;
        elem.style.width = width + '%';
        elem.innerHTML = width * 1 + '%';
    }
}

function move() {
    var id = setInterval(frame, 10);
    var width = 0;

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            changeProgress(width);
        }
    }
}