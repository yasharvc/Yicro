function showModal(name){
    name = isNull(name) ? '__MODAL__' : name;
    $(name).show();
}
function closeModal(name){
    name = isNull(name) ? '__MODAL__' : name;
    $(name).hide();
}