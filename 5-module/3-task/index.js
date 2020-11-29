function initCarousel() {
    
    function displayArrow() { //скрывает стрелку влево на первом слайде и стрелку вправо на последнем      
        if ( slideNumber == 1 ) {
            arrowLeft.style.display = 'none'
        } else {
            arrowLeft.style.display = '';
        }
        if ( slideNumber == picsCount ) {
            arrowRight.style.display = 'none'
        } else {
            arrowRight.style.display = '';
        }
        
    }
    function movement(direction) { //переключает слайды
        let translateX;
        if ( direction == 'left' ) {
            translateX = width*slideNumber;
            slideNumber++
        } else if ( direction == 'right' ) {
            slideNumber--;
            translateX = width*(slideNumber-1);
        }
        return translateX;
    }
    

    const carousel = document.querySelector('.carousel');
    const carouselMove = carousel.querySelector('.carousel__inner');
    const pics = carousel.querySelectorAll(".carousel__slide");
    const picsCount = pics.length; //количество картинок в карусели
    const arrowLeft = carousel.querySelector('.carousel__arrow_left');
    const arrowRight = carousel.querySelector(".carousel__arrow_right");
    const width = carouselMove.offsetWidth; // получаем ширину слайда
    let slideNumber = 1; //номер текущего слайда
    displayArrow();
    
    
    carousel.addEventListener('click', () => {
        if (event.target.closest('div').className === "carousel__arrow carousel__arrow_right") {
            carouselMove.style.transform = `translateX(-${movement('left')}px)`;
            displayArrow() 
            
        } else if (event.target.closest('div').className === "carousel__arrow carousel__arrow_left") {           
            carouselMove.style.transform = `translateX(-${movement('right')}px)`;
            displayArrow()
            
        } 
    });
}
