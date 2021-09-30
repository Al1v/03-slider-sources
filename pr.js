const upButt =   document.querySelector('.up-button');
const downButt = document.querySelector('.down-button');
const sidebar =  document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');
const height = container.clientHeight;

//console.log(slidesCount);

let activeSlideIndex = 0;

sidebar.style.top = `-${slidesCount*100-100}vh`;

down();

upButt.addEventListener('click',up);
downButt.addEventListener('click',down);

function up(){
changeSlide('up');

}

function down(){
changeSlide('down');

}

function changeSlide(direction){

    if (direction === 'up'){
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount){
            activeSlideIndex = 0;
        }
      //  mainSlide.style.transform = "translateX(+20px)";

    }else if(direction === 'down'){
        activeSlideIndex--;
        if (activeSlideIndex === -1){
            activeSlideIndex = slidesCount-1;
        }
      //  mainSlide.style.transform = "translateX(-20px)";
    }

    mainSlide.style.transform = `translateY(-${height*activeSlideIndex}px)`;
    sidebar.style.transform = `translateY(${height*activeSlideIndex}px)`;
}

