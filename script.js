   // reference elements
   const displayTimeElement = document.querySelector("#displayTime");
   const pauseBtnElement = document.querySelector("#pause");
   const startBtnElement = document.querySelector("#start");
   const resetBtnElement = document.querySelector("#reset");

   // declaring variables 
   let interval = null;
   let timer;
   let [seconds,minutes,hours] = [0,0,0];
   
   // functionality for display time
   const displayTime = () => {
       seconds++;
       if(seconds === 60){
           seconds = 0;
           minutes++;
           if(minutes === 60){
               minutes = 0;
               hours++;
           }
       }

       // ternary operator to show case how hours, minutes, seconds looks like if less than 10
       let h = (hours < 10)?'0'+hours:hours;
       let m = (minutes < 10)?'0'+minutes:minutes;
       let s = (seconds < 10)?'0'+seconds:seconds;

       displayTimeElement.textContent = h+' : '+m+' : '+s;

   }

   // functionality to start timer
   const startTimer = () => {
        timer = setInterval(displayTime,1000)
   }

   // functionality to pause timer
   const pauseTimer = () => {
       clearInterval(timer);
   }

   // functionality to reset timer
   const resetTimer = () => {
       clearInterval(timer);
       [seconds,minutes,hours] = [0,0,0];
       
       displayTimeElement.textContent = "00 : 00 : 00";
   }