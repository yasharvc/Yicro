var rightMenu = null;
var rightOverlay = null;
var leftMenu = null;
var leftOverlay = null;
var id = -1;

function __getRightMenuButton(){
    return getElement('RightMenuButton');
}
function __getLeftMenuButton(){
    return getElement('LeftMenuButton');
}

function __setTopNavbarVariables() {
    rightMenu = document.getElementById("rightMenu");
    rightOverlay = document.getElementById("rightOverlay");
    leftMenu = document.getElementById("leftMenu");
    leftOverlay = document.getElementById("leftOverlay");
}

function __openRightMenu() {
    __setTopNavbarVariables();
    if (leftMenu.style.display === 'block')
        return;
    if (rightMenu.style.display === 'block') {
        rightMenu.style.display = 'none';
        rightOverlay.style.display = "none";
        rightMenu.style.width = '0';
    } else {
        rightMenu.style.display = 'block';
        rightOverlay.style.display = "block";
        rightMenu.style.width = '300px';
    }
}

function __closeRightMenu() {
    __setTopNavbarVariables();
    rightMenu.style.display = "none";
    rightOverlay.style.display = "none";
    rightMenu.style.width = "0px";
    menuType = 0;
}

function __openLeftMenu() {
    __setTopNavbarVariables();
    if (rightMenu.style.display === 'block')
        return;
    if (leftMenu.style.display === 'block') {
        leftMenu.style.display = 'none';
        leftOverlay.style.display = "none";
        leftMenu.style.width = '0px';
    } else {
        leftMenu.style.display = 'block';
        leftOverlay.style.display = "block";
        leftMenu.style.width = '300px';
    }
}

function __closeLeftMenu() {
    __setTopNavbarVariables();
    var leftMenu = document.getElementById("leftMenu");
    leftMenu.style.display = "none";
    leftOverlay.style.display = "none";
    leftMenu.style.width = '0px';
}

function hideMenu() {
    __getRightMenuButton().style.display = 'none';
    __getLeftMenuButton().style.display = 'none';
}

function setTitle(title) {
    getElement('PageTitle').innerHTML = title;
}

function addActionButton(html) {
    getElement('actionButtons').innerHTML += html;
}
