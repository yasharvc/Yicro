function showErrorSnack(msg) {
    $('#__errorSnackMsg__').html(msg);
    $('#__errorSnack__').addClass("show");
    setTimeout(function () {
        $('#__errorSnack__').removeClass("show");
    }, 3000);
}

function showWarningSnack(msg) {
    $('#__warningSnackMsg__').html(msg);
    $('#__warningSnack__').addClass("show");
    setTimeout(function () {
        $('#__warningSnack__').removeClass("show");
    }, 3000);
}

function showInfoSnack(msg) {
    $('#__infoSnackMsg__').html(msg);
    $('#__infoSnack__').addClass("show");
    setTimeout(function () {
        $('#__infoSnack__').removeClass("show");
    }, 3000);
}

function showSuccessSnack(msg) {
    $('#__successSnackMsg__').html(msg);
    $('#__successSnack__').addClass("show");
    setTimeout(function () {
        $('#__successSnack__').removeClass("show");
    }, 3000);
}