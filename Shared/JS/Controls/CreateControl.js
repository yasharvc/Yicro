function showSelect(target) {
    BlockEntirePage();
    changeProgress(0);
    var data = eval(target.data('getdata') + '()');
    var validateFunc = target.data('validatefunc');
    var select = new Select();
    select.setTitle(target.data('title'));
    var cnt = data.length;
    var i = 1;
    forEach(data, function (row) {
        select.addItem(row);
        changeProgress(i/cnt);
        i++;
    });
    target.aria('selected', '-1');

    select.onAccept = function (data) {
        if (!isNull(validateFunc)) {
            var isValid = eval(validateFunc + '(' + JSON.stringify(data) + ')');
            if (isValid) {
                target.getElementsByTagName('span')[0].html(data.text);
                target.aria('selected', data.id);
                select = undefined;
            }
            return isValid;
        } else {
            target.getElementsByTagName('span')[0].html(data.text);
            target.aria('selected', data.id);
            select = undefined;
            return true;
        }
    };
    showModal('SELECT__MODAL__');
    changeProgress(100);
    UnblockEntirePage();
}

function showTree(target){
    BlockEntirePage();
    changeProgress(0);
    var data = eval(target.data('getdata') + '()');
    var validateFunc = target.data('validatefunc');
    var tree = new TreeView();
    tree.clearNodes();
    tree.setTitle(target.data('title'));
    var cnt = data.length;
    var i = 1;
    forEach(data, function (row) {
        tree.addNode(row);
        changeProgress(i/cnt);
        i++;
    });
    changeProgress(100);
    UnblockEntirePage();
    showModal('TREE__MODAL__');
}