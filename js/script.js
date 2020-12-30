const spanAutoWrite = document.getElementById('autoWrite');
const phraseArray = ["Desenvolvimento Web","Web Design","Inovação","SEO", "UI/UX", "Manutenção Web", "Landing pages"];
let phraseCount = 0;
autoWriteFunc();
window.setInterval(autoWriteFunc,5000);

function autoWriteFunc(){

    spanAutoWrite.textContent = " ";
    
    if(phraseCount === phraseArray.length){
        phraseCount = 0;
    }

    let letterCount = 0;
    let phraseSorted = phraseArray[phraseCount].split("");

    
    const writeloop = window.setInterval(writeFunc,150);
    
    function writeFunc(){
        if(phraseSorted[letterCount] === undefined){
            clearInterval(writeloop);
        }else{
            spanAutoWrite.textContent += phraseSorted[letterCount];
            letterCount++;
        }
    }
    phraseCount++;
};

const moon = document.getElementById('moon');
let moonOpacity = 0.6;
let previousPagePosition = 0;

const menuBorder = document.querySelectorAll('.menu__border');
const menuItem = document.querySelectorAll('.menu__item');

document.addEventListener('scroll', function(){
    if(pageYOffset >= 1000){
        moonOpacity = 0;
    }
    if(pageYOffset === 0){
        moonOpacity = 0.6;
    }
    if(pageYOffset > previousPagePosition && moonOpacity >= 0 && pageYOffset >= 200){
        moonOpacity -= 0.050;
        moon.style.opacity = moonOpacity;
    }
    if(pageYOffset < previousPagePosition && moonOpacity <= 0.6 && pageYOffset <= 1000){
        moonOpacity += 0.050;
        moon.style.opacity = moonOpacity;
    }
    previousPagePosition = pageYOffset;

    console.log(pageYOffset)
    
    addMenuBorderPosition();

});

function addMenuBorderPosition(){
    
    if(pageYOffset >= Number(menuItem[0].value)){
        menuBorder.forEach(removeMenuBorderAll);
        menuBorder[0].classList.add('menu__border--on');
    }
    if(pageYOffset >= Number(menuItem[1].value)){
        menuBorder.forEach(removeMenuBorderAll);
        menuBorder[1].classList.add('menu__border--on');
    }    
    if(pageYOffset >= Number(menuItem[2].value)){
        menuBorder.forEach(removeMenuBorderAll);
        menuBorder[2].classList.add('menu__border--on');
    }    
    if(pageYOffset >= Number(menuItem[3].value)){
        menuBorder.forEach(removeMenuBorderAll);
        menuBorder[3].classList.add('menu__border--on');
    }   
    if(pageYOffset >= Number(menuItem[4].value)){
        menuBorder.forEach(removeMenuBorderAll);
        menuBorder[4].classList.add('menu__border--on');
    }   
};

function removeMenuBorderAll(el){
    el.classList.remove('menu__border--on');
};

menuBorder.forEach(addClick);

function addClick(el){
    el.addEventListener('click',function(e){
        const positionTarget = e.target.value;
        window.scrollTo(0,Number(positionTarget))
    })
};
