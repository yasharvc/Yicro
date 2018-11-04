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
    selectInput.aria('id', '-1');
    var targetThis = this;
    var onSelectInput = function () {
        var filter = selectInput.value.toUpperCase();
        if (handledText !== filter) {
            handledText = filter;

            targetThis.clearValue();
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

    this.clearItems = function () {
        getSelect().innerHTML = '';
        selectData = [];
    };
    this.clearInput = function () {
        selectInput.value = '';
    };

    var init = function () {
        selectInput.onchange = onSelectInput;
        selectInput.onkeydown = onSelectInput;
        selectInput.onkeypress = onSelectInput;
        selectInput.onkeyup = onSelectInput;
        selectInput.onpaste = onSelectInput;
        selectInput.oninput = onSelectInput;
        targetThis.clearItems();
        targetThis.clearInput();
    };

    init();

    var selectData = [];

    var getItemId = function (row) {
        return '_Select_' + row[idFieldName] + '_' + id;
    };
    this.itemDisplayRender = function (row) {
        return '<a href="#">' + row.text + '</a>';
    };

    this.addItem = function (row) {
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
        forEach(e.target.parentElement.getElementsByTagName('li'), function (li) {
            li.removeClass('selected');
        });
        e.target.addClass('selected');
        if (selectId == id && !isNull(selectId)) {
            selectData[nodeId].select.onClick(selectData[nodeId].data);
            selectInput.value = selectData[nodeId].data.text;
            $('SelectSelectedItem').html(selectData[nodeId].data.text);
            selectData[nodeId].select.setValue(selectData[nodeId].data[idFieldName]);
        }
    };

    this.onClick = function (data) {
        
    };
    this.onAccept = function (data) {
        return true;
    };
    this.clearValue = function () {
        selectInput.aria('id', '-1');
        forEach(getSelect().getElementsByTagName('li'), function (li) {
            li.removeClass('selected');
            li.style.display = "";
        });
        $('SelectSelectedItem').html('انتخاب نشده');
    };
    this.setValue = function (value) {
        selectInput.aria('id', value + "");
    };
    this.getValue = function () {
        return selectInput.aria('id');
    };
    this.setTitle = function (title) {
        $('selectTitle').html(title);
    };

    $('_SELECT_CLEAR').onclick = function () {
        targetThis.clearValue();
        targetThis.clearInput();
    };
    $('_SELECT_SELECT').onclick = function () {
        var isOK = targetThis.onAccept({
            text: selectInput.value,
            id: selectInput.aria('id')
        });
        isOK = isNull(isOK) ? true : isOK;
        if (isOK)
            closeModal('SELECT__MODAL__');
    };

    addEventListener('SelectItemClicked', clickListener, false);
};

function testSelect() {
    var select = new Select();
    select.setTitle('کاربر؟');
    select.addItem({
        text: 'یاشار',
        id: 1
    });
    select.addItem({
        text: 'یاسر',
        id: 2
    });
    select.addItem({
        text: 'یاس',
        id: 3
    });
    select.addItem({
        text: 'سحر',
        id: 4
    });
    select.addItem({
        text: 'کاظم',
        id: 5
    });
    select.addItem({
        text: 'سرور',
        id: 6
    });
    select.addItem({
        text: 'سایر',
        id: 7
    });
}