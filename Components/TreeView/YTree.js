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
    var nodesData = [];

    baseTree.init();
    var clickListener = function (e) {
        var nodeId = e.target.getAttribute('aria-id');
        var treeId = nodesData[nodeId].treeId;
        if (treeId == id) {
            nodesData[nodeId].TreeView.onClick(nodesData[nodeId]);
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

        var node = '';

        if (isFolder) {
            node += '<li role="treeitem" aria-expanded="false" aria-id="' + nodeId + '">';
            node += '<span>' + text + '</span>';
            node += '<ul role="group" id="' + getNodeId(nodeId) + '" aria-id="' + nodeId + '"></ul>';
            node += '</li>';
        } else {
            node += '<li role="treeitem" class="doc" id="' + getNodeId(nodeId) + '" aria-id="' + nodeId + '">' + text + '</li>';
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
        data.treeId = id;
        data.TreeView = this;
        nodesData[nodeId] = data;
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
                this.dispatchEvent(TreeItemClickEvent);
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
    x.onClick = function (data) {
        $('last_action').value = data.id;
        if (data.isFolder) {
            $('TreeSelectedItem').html(data.text);
        }
    };
}