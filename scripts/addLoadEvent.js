function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != 'funtion' ) {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

