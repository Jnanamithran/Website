var typed = new Typed(".auto-type",{
    strings : ["a Programmer.","a Developer.","a Editor.","Jnanamithran M."],
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
