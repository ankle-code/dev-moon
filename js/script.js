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
}

