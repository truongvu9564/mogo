    const header = document.querySelector('header');
    window.addEventListener('scroll',function(){
        x = window.pageYOffset
        if (x>0) {
            header.classList.add('sticky');
        }
        else {
            header.classList.remove('sticky');
        }
    })
    const imgPosition = document.querySelectorAll('.aspect-ratio-169 img')
    const imgContainer = document.querySelector('.aspect-ratio-169')
    const dotItem = document.querySelectorAll('.dot')
    let imgNumber = imgPosition.length
    const next = document.querySelector('.fa-arrow-right-long')
    const pre = document.querySelector('.fa-arrow-left-long')
    let index = 0
    
    imgPosition.forEach(function(image, index) {
        image.style.left = index*100 + '%'
        dotItem[index].addEventListener('click',function(){
            slider(index)

        })
    })
    function imgSlide (){
        index++;
        if(index >= imgNumber) {index = 0}
        slider(index)
    }
    
    function slider (index){
        imgContainer.style.left = '-' +index*100 + '%'
        const dotActive = document.querySelector('.active')
        dotActive.classList.remove('active')
        dotItem[index].classList.add('active')
    }
    next.addEventListener('click', function() {
        index++;
        if(index >= imgNumber) {index = 0}
        slider(index)
        })
    pre.addEventListener('click', function() {
        index = (index-1  +imgNumber) % imgNumber
        slider(index)
        })
    setInterval(imgSlide,3000)

// ------------+-------------
const itemsLider = document.querySelectorAll('.cartegory-left-li')
        itemsLider.forEach(function(menu,index) {
            menu.addEventListener('click', function(){
                menu.classList.toggle('block')
            })
        })
