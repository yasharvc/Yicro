function $(id) {
    return getElement(id);
}

function forEach(arr, func) {
    for (var i = 0; i < arr.length; i++)
        func(arr[i]);
    return arr;
}
Object.prototype.html = function (data) {
    if (isNull(data))
        return this.innerHTML;
    else
        this.innerHTML = data;
};
Object.prototype.append = function (data) {
    debugger;
    this.innerHTML += data;
};

Object.prototype.addClass = function (classList) {
    classList = classList.replace(/,/g, ' ').split(' ');
    if (typeof classList === 'string')
        classList = [classList];
    var thisObject = this;
    forEach(classList, function (name) {
        if (isNull(thisObject.className)) {
            thisObject.className = name;
        } else {
            var arr = thisObject.className.split(" ");
            if (arr.indexOf(name) == -1) {
                if (isNull(thisObject.className))
                    thisObject.className = name;
                else
                    thisObject.className += " " + name;
            }
        }
    });
};

Object.prototype.removeClass = function (classList) {
    if (isNull(this.className))
        return;
    classList = classList.replace(/,/g, ' ');
    if (typeof classList === 'string')
        classList = [classList];
    var thisObject = this;
    forEach(classList, function (name) {
        var arr = [];
        do {
            arr = thisObject.className.split(" ");
            thisObject.className = thisObject.className.replace(name, '');
        } while (arr.indexOf(name) !== -1);
    });
};

Object.prototype.show = function(){
    this.style.display = 'block';
};