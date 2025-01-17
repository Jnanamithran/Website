var typed = new Typed(".auto-type",{
    strings : ["a Programmer.","a Developer.","an Editor.","Jnanamithran M."],
    typeSpeed : 150,
    backSpeed : 150,
    looped : true
})
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function darkModeOn() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    document.getElementById('darkModeButton').style.display = 'none';
    document.getElementById('whiteModeButton').style.display = 'block';
    document.getElementById('darkModeButtons').style.display = 'none';
    document.getElementById('whiteModeButtons').style.display = 'block';
    localStorage.setItem('colorMode', 'dark'); // Save preference
}

function whiteModeOn() {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    document.getElementById('whiteModeButton').style.display = 'none';
    document.getElementById('darkModeButton').style.display = 'block';
    document.getElementById('whiteModeButtons').style.display = 'none';
    document.getElementById('darkModeButtons').style.display = 'block';
    localStorage.setItem('colorMode', 'light'); // Save preference
}

// Load preferred color mode on page load
/*window.onload = function() {
    const colorMode = localStorage.getItem('colorMode');

    if (colorMode === 'dark') {
        darkModeOn(); // Apply dark mode if saved
    } else {
        whiteModeOn(); // Default to light mode
    }
};
var loader = document.getElementById("pre-loader");
window.addEventListener("load",function(){
    this.setTimeout(function(){
        loader.style.display ="none";
    },1500);
});*/






