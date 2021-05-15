const sentences = [
    "this what wall cry crack awesome mine frozen thought developer java cricket between rectangular baseball divided can could will would shall should open our mouth eating",
    "the batting team must score as many runs as possible by hitting the ball and running to the other end of the pitch If the batsman can reach the other end of the pitch",
    "if he hits the ball to the edge of the field, he scores 4 runs if he can hit the ball to the edge of the field without bouncing he scores 6 runs johny johny yes corona wearing mask",
    "there are many different kinds of bowlers some bowl very fast and some bowl slower but spin the ball One very important rule for all bowlers is that the ball must bounce once"

];

const text = document.getElementById("text");
const typeArea = document.getElementById("typearea");
const btn = document.getElementById("btn");
// const finalMsg  = document.getElementById("final-msg");

let startTime, endTime;
btn.addEventListener('click', function () {
    if (this.textContent == "start") {
        startTyping();
    }
    else {
        endTyping();
    }
})

const startTyping = () => {
    typeArea.disabled = false;
    typeArea.placeholder = "Start typing above text from here";
    typeArea.focus();
    text.style.color = "black";
    btn.textContent = "done";
    let date = new Date();
    startTime = date.getTime();
    text.textContent = sentences[Math.floor(Math.random() * sentences.length)];
    finalMsg.textContent = "";
}

const endTyping = () => {
    typeArea.disabled = true;
    typeArea.placeholder="";
    btn.textContent = "start";
    let date = new Date();
    endTime = date.getTime();
    let totalTime = (endTime - startTime) / 1000;
    console.log(totalTime);
    let totalCorrectWords = countCorrectWords();
    let totalIncorrectWord = typeArea.value.split(" ").length - totalCorrectWords;
    console.log(totalCorrectWords + " " + totalIncorrectWord);
    // text.textContent = "";
    typeArea.value = "";
    let speed = Math.round(totalCorrectWords/totalTime * 60);
    text.textContent = "Your typing speed is "+ speed + " WPM (word per minute)";
    text.style.color = "rgb(181, 216, 23)";
}

const countCorrectWords = () => {
    let userStr = typeArea.value;
    let computerStr = text.innerText;
    let userTypeText = [], computerText = [];
    let tmp = "";
    for (let i = 0; i < userStr.length; i++) {

        if (userStr[i] == " ") {
            userTypeText.push(tmp);
            tmp = "";
        } else {
            tmp += userStr[i];
        }
    }
    userTypeText.push(tmp);
    tmp = "";
    for (let i = 0; i < computerStr.length; i++) {

        if (computerStr[i] == " ") {
            computerText.push(tmp);
            tmp = "";
        } else {
            tmp += computerStr[i];
        }
    }
    computerText.push(tmp);

    let cnt = 0 ;
    let last = userTypeText.length;
    for(let i=0;i<last;i++){
        if(userTypeText[i] == computerText[i]){
            cnt++;
        } 
    }
    return cnt;
   
}




