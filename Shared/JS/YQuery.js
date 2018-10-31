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

Object.prototype.addClass = function (classList) {
    classList = classList.replace(/,/g, ' ').split(' ');
    forEach(classList, function (name) {
        debugger;
        if (isNull(this.className)) {
            this.className = name;
        } else {
            var arr = this.className.split(" ");
            if (arr.indexOf(name) == -1) {
                if (isNull(this.className))
                    this.className = name;
                else
                    this.className += " " + name;
            }
        }
    });
};

Object.prototype.removeClass = function (classList) {
    if (isNull(this.className))
        return;
    classList = classList.replace(/,/g, ' ');
    forEach(classList, function (name) {
        debugger;
        var arr = [];
        do {
            arr = this.className.split(" ");
            this.className = this.className.replace(name, '');
        } while (arr.indexOf(name) !== -1);
    });
};