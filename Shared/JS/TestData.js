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