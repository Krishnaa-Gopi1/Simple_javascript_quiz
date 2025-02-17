let right = 0;
let qno = 0;
questions = ["what is my name","works", "after works"];
options = [["krishnaa" , "no" , "yes" , "lol"],["works1" , "works2" , "works3" , "works4"], ["works5" , "works6" , "works7" , "works8"]];
answers = ["krishnaa","works2", "works5"];


function hide_start(){
    document.getElementById("question").innerHTML = questions[qno];
    let opts = qbox.getElementsByTagName("button");
    for(var i = 0 ; i<4 ; i++){
        let textNode = document.createTextNode("Hello World");
        opts[i].innerHTML = options[qno][i];
    }
}

let qbox = document.getElementById("question_box");

function first_opt(){
    let selected = options[qno][0];
    if(selected === answers[qno]){
        correct();
    }
    else{
        wrong();
    }
}

function correct(){
    right++;
    qno++;
    if(qno>2){
        
    }
    else{
        document.getElementById("resp").innerHTML = "previous question was right!!";
        
        document.getElementById("question").innerHTML = questions[qno];
        let opts = qbox.getElementsByTagName("button");
        for(var i = 0 ; i<4 ; i++){
            let textNode = document.createTextNode("Hello World");
            opts[i].innerHTML = options[qno][i];
        }
    }
    
    

}

function wrong(){
    qno++;
    if(qno>2){
        document.getElementById("done").innerHTML = "all questions done . check score in top right corner!!";
    }
    else{
        document.getElementById("resp").innerHTML = "previous question was right!!";
        
        document.getElementById("question").innerHTML = questions[qno];
        let opts = qbox.getElementsByTagName("button");
        for(var i = 0 ; i<4 ; i++){
            let textNode = document.createTextNode("Hello World");
            opts[i].innerHTML = options[qno][i];
        }
    }
    
}