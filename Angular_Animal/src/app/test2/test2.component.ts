import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    var timeleft = 8;
    var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

    setTimeout(() => {
      console.log('sleep');
      //alert("TIME OUT");
      window.location.href = "assets/quiz.html";
    }, 10000);
  }

}
