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
    var nodesData = [];
    var selectedItem ={};
    var targetThis = this;
    this.getSelectedItem = function(){
        return selectedItem;
    };
    this.setSelectedItem = function(value){
        selectedItem = value;
    };

    baseTree.init();
    var clickListener = function (e) {
        var nodeId = e.target.getAttribute('aria-id');
        var treeId = nodesData[nodeId].treeId;
        if (treeId == id) {
            nodesData[nodeId].TreeView.onClick(nodesData[nodeId].data);
            nodesData[nodeId].TreeView.setSelectedItem(nodesData[nodeId].data);
            $('TreeSelectedItem').html(nodesData[nodeId].data.text);
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
        nodesData = [];
        this.setSelectedItem(null);
        $('TreeSelectedItem').html('انتخاب نشده است');
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
        var temp = getTree().innerHTML;
        var tempNodes = nodesData;
        tempNodes[nodeId] = {data:data,treeId:id,TreeView:this};
        this.clearNodes();
        getTree().innerHTML = temp;
        nodesData = tempNodes;
        baseTree = new Tree(getBaseTreeNode());
        baseTree.init();
        setupItemsClick();
    };
    this.setTitle = function (title) {
        $('treeViewTitle').html(title);
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
    this.onAccept = function(data){
        return true;
    };
    addEventListener('TreeItemClicked', clickListener, false);
    $('_TREE_SELECT').onclick = function () {
        var isOK = targetThis.onAccept(targetThis.getSelectedItem());
        isOK = isNull(isOK) ? true : isOK;
        if (isOK)
            closeModal('TREE__MODAL__');
    };
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
        id: 3,
        text: 'متر',
        isFolder: false,
        path: '<1>'
    });
    x.addNode({
        id: 4,
        text: 'سانتی متر',
        isFolder: false,
        path: '<1>'
    });
    x.addNode({
        id: 5,
        text: 'تستی',
        isFolder: false,
        path: '<1><2>'
    });
    x.onClick = function (data) {
        $('last_action').value = data.id;
        if (!data.isFolder) {
            $('TreeSelectedItem').html(data.text);
        }
    };
}