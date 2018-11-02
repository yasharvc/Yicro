var TreeItemClickEvent = document.createEvent('Event');
TreeItemClickEvent.initEvent('TreeItemClicked', true, true);
var TreeView = function (id) {
    if (isNull(id))
        id = '__TREE__';
    var getTree = function () {
        return $(id);
    };
    var getBaseTreeNode = function () {
        return getTree();
    };
    var baseTree = new Tree(getBaseTreeNode());

    var tempTree = '';

    baseTree.init();
    var clickListener = function (e) {
        debugger;
        var treeId = e.detail.treeId || '';
        if (treeId == id) {
            console.log(this);
            console.warn(e);
            var text = e.detail.text;
            var nodeId = e.detail.id;
            this.onClick({
                id: nodeId,
                text: text
            });
        } else {
            console.error('Not mine!');
        }
    };
    var getNodeId = function (nodeId) {
        return '_' + id + '_node_' + nodeId;
    };
    var getNode = function (nodeId) {
        return $(getNodeId(nodeId));
    };
    this.clearNodes = function () {
        getTree().html('');
        tempTree = '';
    };
    this.addNode = function (data) {
        var isFolder = isNull(data.isFolder) ? false : data.isFolder;
        var text = data.text;
        var path = isNull(data.path) ? '' : data.path;
        var nodeId = data.id;

        var eventCaller = "";
        // "dispatchEvent(new CustomEvent('TreeItemClicked',{detail:{" +
        //     "id:" + nodeId +
        //     ",text:'" + text + "'" +
        //     ",treeId:'" + id + "'" +
        //     ",isFolder:" + (isFolder ? 'true' : 'false') +
        //     "}}))";

        var node = '';

        if (isFolder) {
            node += '<li role="treeitem" aria-expanded="false">';
            node += '<span>' + text + '</span>';
            node += '<ul role="group" onclick="' + eventCaller + '" id="' + getNodeId(nodeId) + '"></ul>';
            node += '</li>';
        } else {
            node += '<li role="treeitem" class="doc" onclick="' + eventCaller + '" id="' + getNodeId(nodeId) + '">' + text + '</li>';
            node += '';
        }
        if (path.length === 0) {
            getTree().innerHTML += node;
        } else {
            var lastID = path.substring(path.lastIndexOf('<')).replace('<', '').replace('>', '');
            var parentNode = getNode(lastID);
            parentNode.innerHTML += node;
        }
        BlockEntirePage();
        var temp = getTree().innerHTML;
        this.clearNodes();
        getTree().innerHTML = temp;
        baseTree = new Tree(getBaseTreeNode());
        baseTree.init();
        setupItemsClick();
        UnblockEntirePage();
    };
    this.onClick = function (data) {
        console.log(data);
    };
    var setupItemsClick = function () {
        var treeitems = document.querySelectorAll('[role="treeitem"]');
        for (var i = 0; i < treeitems.length; i++) {
            treeitems[i].addEventListener('click', function (event) {
                // var treeitem = event.currentTarget;
                // var label = treeitem.getAttribute('aria-label');
                // if (!label) {
                //     label = treeitem.innerHTML;
                // }

                // document.getElementById('last_action').value = label.trim();
                debugger;
                this.dispatchEvent(TreeItemClickEvent);
                //     new CustomEvent('TreeItemClicked', {
                //     detail: {
                //         id: 1,
                //         text: 'text',
                //         treeId: id,
                //         isFolder: false
                //     }
                // }));
                event.stopPropagation();
                event.preventDefault();
            });

        }
    };
    addEventListener('TreeItemClicked', clickListener, false);
};

function testTree() {
    var x = new TreeView();
    x.clearNodes();
    x.addNode({
        id: 1,
        text: 'طول',
        isFolder: true
    });
    x.addNode({
        id: 2,
        text: 'تست1',
        isFolder: true,
        path: '<1>'
    });
    x.addNode({
        id: 2,
        text: 'متر',
        isFolder: false,
        path: '<1>'
    });
}