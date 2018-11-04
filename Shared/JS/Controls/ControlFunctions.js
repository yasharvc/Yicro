function getControlValue(ctrl) {
    if (isString(ctrl))
        ctrl = $(ctrl);
    var type = ctrl.attr('control').toLocaleLowerCase();
    switch (type) {
        case 'treeview':
            return ctrl.aria('selected');
    }
}