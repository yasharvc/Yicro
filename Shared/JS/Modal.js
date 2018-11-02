function showModal(name){
    name = isNull(name) ? '__MODAL__' : name;
    $(name).show();
}