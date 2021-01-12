var sideBar = document.getElementsByClassName('sidebar__wrapper')[0];

var isitMove = function(){
    _scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if(_scrollTop == move){
        sideBar.setAttribute('style', 'opacity: 100%; z-index: 100; transition: .3s;');
    }else{
        sideBar.setAttribute('style', 'opacity: 0%; z-index: 0; transition: .3s;');
    }
    move = _scrollTop;
    setTimeout(() => {
        isitMove();
    }, 2000);
};

var _scrollTop, move;

window.onload = function(){
    setTimeout(() => {
        isitMove();
    }, 2000);
};