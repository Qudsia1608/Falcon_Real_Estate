const sidebar=document.getElementById("sidebar");
const hero= document.getElementById("herosection");
const contentarea=document.getElementById("content_area");
const sidebar_res=document.getElementById("sidebar_reserve");
const phone_logo= document.getElementById("fix_logodiv");

let screen_height = window.innerHeight;
let screen_width = window.innerWidth;


//services
function sales_resize(){
    var sales_div = document.getElementById('sales_div');
    var parent = sales_div.parentNode;
    parent.insertBefore(sales_div, parent.firstChild);
}

// Insert values on load of page
window.onload = function() {
    screen_height = window.innerHeight;
    screen_width = window.innerWidth;
    if (screen_width<500){
        phone_screen();
    }
    if(screen_width<=600){
        sales_resize();
    }
};
 
// Change values when window is resized
window.onresize = function() {
    screen_height = window.innerHeight;
    screen_width = window.innerWidth;
    if (screen_width<500){
        phone_screen();
    }
    if(screen_width<=600){
        sales_resize();
    }
};

function phone_screen(){
    contentarea.style.width="100%";
    sidebar_res.style.display="none";
    sidebar.style.display="none";
}

function sidebarout(){
    contentarea.style.transition = "1.5s";
    contentarea.style.left="170px";
    contentarea.style.width = "calc(100% - 250px)"; // Adjust width to fit the screen
    if(screen_width <= 550){
        contentarea.style.display='none';
    }
    if(screen_width<500){
        phone_logo.style.display="none";
        sidebar.style.display="block";
        sidebar.addEventListener('click', function(){
            sidebar.style.display="none";
            contentarea.style.display="block";
            contentarea.style.left="0px";
            // phone_screen();
        });
    }
}

function sidebarin(){
    contentarea.style.display='block';
    contentarea.style.left="0px";
    contentarea.style.transition = "1s";
    // Reset width to fill the screen
    if(screen_width <= 400){
        contentarea.style.width = "80%";
    }
    else if(screen_width <= 600){
        contentarea.style.width = "85%";
    }
    else if(screen_width <= 800){
        contentarea.style.width = "90%";
    } else {
        contentarea.style.width = "95%";
    }
    //resize
    if(screen_width<500){
        phone_screen();
    }
}
// function sidebarphone(){
//     sidebar.style.display="block";
//     phone_logo.style.display="none";
//     contentarea.style.display="none";
// }

// projects page

const selector = document.querySelector('#selector');
const projectSections = document.querySelectorAll('.project_section');

selector.onchange = (event) => {
    event.preventDefault();
    let selected_opt = selector.selectedIndex;
    
    projectSections.forEach(section => {
        section.style.display = 'none'; // Hide all sections by default
    });

    if (selected_opt == 0) {
        // If "All" is selected, show all sections
        projectSections.forEach(section => {
            section.style.display = 'block';
        });
    } else {
        // Show only sections with the selected class
        let selectedClass = selector.options[selected_opt].text;
        let selectedSections = document.querySelectorAll('.project_section.' + selectedClass);
        selectedSections.forEach(section => {
            section.style.display = 'block';
        });
    }
};
