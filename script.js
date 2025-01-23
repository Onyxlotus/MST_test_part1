'USE STRICT'

window.addEventListener('scroll', function(){
    if (this.pageYOffset > 1){
        this.document.querySelector('.header').classList.add('active')
    } else {
        this.document.querySelector('.header').classList.remove('active')
    }
})