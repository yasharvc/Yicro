function cmbData() {
    return [{
            text: 'یاشار',
            id: 1
        },
        {
            text: 'یاسر',
            id: 2
        },
        {
            text: 'یاس',
            id: 3
        },
        {
            text: 'سحر',
            id: 4
        },
        {
            text: 'کاظم',
            id: 5
        },
        {
            text: 'سرور',
            id: 6
        },
        {
            text: 'سایر',
            id: 7
        }
    ];
}

function cmbValidate(data){
    return parseInt(data.id) > 0;
}

function treeData(){
    return [
        {
            id: 1,
            text: 'طول',
            isFolder: true
        },
        {
            id: 2,
            text: 'تست1',
            isFolder: true,
            path: '<1>'
        },
        {
            id: 3,
            text: 'متر',
            isFolder: false,
            path: '<1>'
        },
        {
            id: 4,
            text: 'سانتی متر',
            isFolder: false,
            path: '<1>'
        },
        {
            id: 5,
            text: 'تستی',
            isFolder: false,
            path: '<1><2>'
        },
        {
            id: 6,
            text: 'یاشار',
            isFolder: false,
            path: '<1><2>'
        }
    ];
}

function treeValidate(data){
    if(data.isFolder){
        showErrorSnack('مقدار صحیح انتخاب نشده است');
        return false;
    }
    return true;
}

function cardsColumnsInfo(){
    return [
        {name: "id", hidden: true, searchable: false},
        {name: "accountKind", hidden: true, searchable: false},
        {name: "title", index: 0, title: 'عنوان'},
        {name: "kind", index: 1, title: 'نوع هزینه'},
    ];
}

function cardsTestData(){
    return [
        {id:1,accountKind:1,title:'حسابداری فروش',kind:'حمل و نقل'},
        {id:2,accountKind:1,title:'2حسابداری فروش',kind:'حمل و نقل',canEdit:false},
        {id:3,accountKind:3,title:'3حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:4,accountKind:2,title:'4حسابداری فروش',kind:'حمل و نقل',canEdit:false},
        {id:5,accountKind:1,title:'5حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:6,accountKind:3,title:'6حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:7,accountKind:1,title:'7حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:8,accountKind:4,title:'8حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:9,accountKind:1,title:'9حسابداری فروش',kind:'حمل و نقل',canEdit:false},
        {id:10,accountKind:2,title:'10حسابداری فر',kind:'حمل و نقل',canEdit:false},
        {id:11,accountKind:1,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:false},
        {id:12,accountKind:1,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:false},
        {id:13,accountKind:3,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:false},
        {id:14,accountKind:1,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:15,accountKind:2,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:16,accountKind:4,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:17,accountKind:2,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:18,accountKind:3,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:19,accountKind:1,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:20,accountKind:1,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:21,accountKind:2,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:22,accountKind:2,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:23,accountKind:1,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:false},
        {id:24,accountKind:3,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:false},
        {id:25,accountKind:1,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:false},
        {id:26,accountKind:4,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:27,accountKind:4,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:false},
        {id:28,accountKind:2,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:false},
        {id:29,accountKind:3,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:30,accountKind:2,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:false},
        {id:31,accountKind:4,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:32,accountKind:3,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:false},
        {id:33,accountKind:2,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:true},
        {id:34,accountKind:1,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:false},
        {id:35,accountKind:1,title:'حسابداری فروش',kind:'حمل و نقل',canEdit:false},
    ];
}

function cardsRowRender(row){
    var image = '';
    if(parseInt(row.accountKind) === 1){
        image = '@@APP_PATH/images/menu_bargashtkharid.png';
    }else
    if(parseInt(row.accountKind) === 2){
        image = '@@APP_PATH/images/menu_daramad.png';
    }else
    if(parseInt(row.accountKind) === 3){
        image = '@@APP_PATH/images/menu_hazineh.png';
    }else
    if(parseInt(row.accountKind) === 4){
        image = '@@APP_PATH/images/menu_vahed.png';
    }
    var template ='';
    template += '<div class="w3-bar-item">';
    template += '<span class="w3-large">' + row.title + '</span><br>';
    template += '<span>' + row.kind + '</span>'
    template += '</div>';
    return template;
}

function cardsHeaderRender(row){
    var res = '';
    res +='<button type="button" class="w3-tiny w3-btn w3-orange" onclick="onShowDetail({id})">نمایش</button>';
    if(!isNull(row.canEdit) && row.canEdit){
        res +='<button type="button" class="w3-tiny w3-btn w3-green" onclick="onEdit({id})">ویرایش</button>';
        res +='<button type="button" class="w3-tiny w3-btn w3-red" onclick="onDelete({id})">حذف</button>';
    }
    return res;
}

function onEdit(id){
    alert(id);
}
function onDelete(id){
    alert('Delete : ' + id);
}
function onShowDetail(id){
    alert('Detail : ' + id);
}