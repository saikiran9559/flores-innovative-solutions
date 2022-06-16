let show = false;
const menu = document.getElementById('btn-container');
function show_hide_menu(){
    if(show){
        show=false;
        menu.style.width = '0%';
    }
    else{
        show=true;
        menu.style.width= '100%'
    }
}