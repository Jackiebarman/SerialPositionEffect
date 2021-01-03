   
   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');
   var myresult=document.getElementById('jk');

      var app={
                questions:[
                          {q:'CHOOSE THIS ANIMAL IF YOU HAVE SEEN OR SKIP :', options:['TIGER'],answer:1},
                          {q:'CHOOSE THIS ANIMAL IF YOU HAVE SEEN OR SKIP :', options:['CAT'],answer:4},
                          {q:'CHOOSE THIS ANIMAL IF YOU HAVE SEEN OR SKIP :', options:['ZEBRA'],answer:1},
                          {q:'CHOOSE THIS ANIMAL IF YOU HAVE SEEN OR SKIP :', options:['DOG'],answer:4},
                          {q:'CHOOSE THIS ANIMAL IF YOU HAVE SEEN OR SKIP :', options:['COW'],answer:4},
                          {q:'CHOOSE THIS ANIMAL IF YOU HAVE SEEN OR SKIP :', options:['GIRAFFE'],answer:1},
                          {q:'CHOOSE THIS ANIMAL IF YOU HAVE SEEN OR SKIP :', options:['CAMEL'],answer:4},
                          {q:'CHOOSE THIS ANIMAL IF YOU HAVE SEEN OR SKIP :', options:['RAT'],answer:4},
                          {q:'CHOOSE THIS ANIMAL IF YOU HAVE SEEN OR SKIP :', options:['MONKEY'],answer:1},
                          {q:'CHOOSE THIS ANIMAL IF YOU HAVE SEEN OR SKIP :', options:['LION'],answer:1},
                          {q:'CHOOSE THIS ANIMAL IF YOU HAVE SEEN OR SKIP :', options:['BUFFALO'],answer:3},
                          {q:'CHOOSE THIS ANIMAL IF YOU HAVE SEEN OR SKIP :', options:['DEER'],answer:1},
                          {q:'CHOOSE THIS ANIMAL IF YOU HAVE SEEN OR SKIP :', options:['ELEPHANT'],answer:1},
                          {q:'CHOOSE THIS ANIMAL IF YOU HAVE SEEN OR SKIP :', options:['BEAR'],answer:1},
                          {q:'CHOOSE THIS ANIMAL IF YOU HAVE SEEN OR SKIP :', options:['WOLF'],answer:4},
                          {q:'CHOOSE THIS ANIMAL IF YOU HAVE SEEN OR SKIP :', options:['LAMB'],answer:1},
                          {q:'CHOOSE THIS ANIMAL IF YOU HAVE SEEN OR SKIP :', options:['RABBIT'],answer:1},
                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                       
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Quiz Over......!!!"      
                        op1.style.display="none";
                        
                        btn.style.display="none";
                        localStorage.setItem("my_answer", JSON.stringify(arr));
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                         
                         
                         var id=ele.id.split('');
                        //  var j;
                        //  for (j = 0; j < this.questions.length; j++) {
                        //         text += cars[j] + "<br>";
                        //       } 
                         //var q_id=id[id.length-1];
                         //localStorage.setItem("ans",q_id);
                        //  for(let i=0;i<this.questions.length;i++){
                        //    this.questions[i].style.pointerEvents="none";
                        //   }
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correct";
                         	this.scoreCard();
                         }
                         else{
                           this.score--;
                         	ele.className="wrong";
                         	ele.innerHTML="Wrong";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                   scoreCard.innerHTML=this.score;
                   result = this.score;
                },
                res: function(){
                  jk.innerHTML=this.score+" OUT OF "+(this.questions.length-7);
                  result = this.score;
                }
 
           }


           window.onload=app.load();
           let arr = new Array();
           var j=0;
           function button(ele){
                   app.check(ele);
                   var id2=ele.id.split('');
                   arr[j++]=id2[id2.length-1];
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 

         function myscore(){
               app.res();
            }
         



