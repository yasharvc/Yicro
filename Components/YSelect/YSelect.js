var SelectItemClickEvent = document.createEvent('Event');
SelectItemClickEvent.initEvent('SelectItemClicked', true, true);
var Select = function (id, selectInput, idFieldName) {
    id = isNull(id) ? '__SELECT__' : id;
    idFieldName = isNull(idFieldName) ? 'id' : idFieldName;
    selectInput = $(isNull(selectInput) ? '__SELECT_INPUT__' : selectInput);
    var nothingFound = $('SELECT_NOT_FOUND');
    var handledText = '';
    var getSelect = function () {
        return $(id);
    };
    var targetThis = this;
    var onSelectInput = function () {
        var filter = selectInput.value.toUpperCase();
        if (handledText !== filter) {
            handledText = filter;

            targetThis.onSearchStart();

            var li, i;
            li = getSelect().getElementsByTagName("li");
            var cnt = 0;
            for (i = 0; i < li.length; i++) {
                a = li[i].innerHTML;
                if (a.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                    cnt++;
                } else {
                    li[i].style.display = "none";
                }
            }
            if (cnt === 0)
                targetThis.onNothingFound();
        }
        return true;
    };

    var init = function () {
        selectInput.onchange = onSelectInput;
        selectInput.onkeydown = onSelectInput;
        selectInput.onkeypress = onSelectInput;
        selectInput.onkeyup = onSelectInput;
        selectInput.onpaste = onSelectInput;
    };

    init();

    var selectData = [];

    var getItemId = function (row) {
        return '_Select_' + row[idFieldName] + '_' + id;
    };

    this.clearItems = function () {
        getSelect().innerHTML = '';
        selectData = [];
    };
    this.itemDisplayRender = function (row) {
        return '<a href="#">' + row.text + '</a>';
    };

    this.addItem = function (row) {
        //TODO: onClick
        var template = '<li onclick="this.dispatchEvent(SelectItemClickEvent);event.stopPropagation();event.preventDefault();" id="' + getItemId(row) + '" class="selectItem" aria-id="' + row[idFieldName] + '">' + this.itemDisplayRender(row) + '</li>';
        selectData[row[idFieldName]] = {
            data: row,
            select: this,
            selectId: id
        };
        getSelect().innerHTML += template;
    };

    this.onSearchStart = function () {
        if (!isNull(nothingFound))
            nothingFound.style.display = 'none';
    };

    this.onNothingFound = function () {

        if (!isNull(nothingFound))
            nothingFound.style.display = 'block';
    };

    var clickListener = function (e) {
        var nodeId = e.target.getAttribute('aria-id');
        var selectId = isNull(selectData[nodeId]) ? null : selectData[nodeId].selectId;
        if (selectId == id && !isNull(selectId)) {
            selectData[nodeId].select.onClick(selectData[nodeId].data);
        } else {
            console.error('Not mine!');
        }
    };

    this.onClick = function (data) {
        console.log("OnClick:" + JSON.stringify(data));
    };

    addEventListener('SelectItemClicked', clickListener, false);
};