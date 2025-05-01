function showSidebar(){
    const sidebar = document.querySelector('.login-container')
    const register = document.querySelector('.register-container')

    sidebar.style.display = 'flex'
    register.style.display = 'none'

}
function hideSidebar(){
    const sidebar = document.querySelector('.login-container')
    sidebar.style.display = 'none'
}


function show_Register_sidebar(){
    const register = document.querySelector('.register-container')
    const sidebar = document.querySelector('.login-container')

    register.style.display = 'flex'
    sidebar.style.display = 'none'

}
function hide_Register_sidebar(){
    const sidebar = document.querySelector('.register-container')
    sidebar.style.display = 'none'
}