// New line
let check = 0;
let click = 0;
let go = 0;
let playing = new Audio();
// let gameover = new Audio();
let victory = new Audio();
let draw = new Audio();
let XO = new Audio();

function gameOver(id){
    console.log("id = ",id);
    // setTimeout(function(){
    //     gameover.src = "./game-over.mp3";
    //     gameover.play();
    // },2000)
    // if($(`#${id}`).html().trim() == "X"){
    //     XO.src = "./x.mp3";
    //     XO.play();
    // }
    // else if($(`#${id}`).html().trim() == "X"){
    //     XO.src = "./o.mp3";
    //     XO.play();  
    // }
    victory.src = "./victory.mp3";
    victory.play();
    go++;
    check=0;
    click=0;
}

$(".cell").on('click',function(event){
    if(go == 0){
        playing.src = "./playing.mp3";
        playing.play();
        console.log(event);
        console.log("event.currentTarget.id = ",event.currentTarget.id);
        console.log("click = ",click);
        if(click % 2 == 0){     
            if($(`#${event.currentTarget.id}`).html().trim() == ""){
                $(".turn").html("Its O's Turn");
                $(`#${event.currentTarget.id}`).html("X");
                check++;
            }
        }
        else if(click % 2 != 0){
            if($(`#${event.currentTarget.id}`).html().trim() == ""){
                $(".turn").html("Its X's Turn");
                $(`#${event.currentTarget.id}`).html("O");
                check++;
            }
        }
        
    
        if($("#a").html() == $("#b").html() && $("#c").html() == $("#a").html() && $("#a").html().trim() != "" && $("#b").html().trim() != "" && $("#c").html().trim() != ""){
            $(".turn").html("Winner :" + $(`#${event.currentTarget.id}`).html());
            $("#a,#b,#c").css("color", "White");
            gameOver(event.currentTarget.id);
        }
        else if($("#a").html() == $("#d").html() && $("#g").html() == $("#a").html()  && $("#a").html().trim() != "" && $("#d").html().trim() != "" && $("#g").html().trim() != ""){
            $(".turn").html("Winner : " + $(`#${event.currentTarget.id}`).html());
            $("#a,#d,#g").css("color", "White");
            gameOver(event.currentTarget.id);
        }
        else if($("#c").html() == $("#f").html() && $("#i").html() == $("#c").html()  && $("#c").html().trim() != "" && $("#f").html().trim() != "" && $("#i").html().trim() != ""){
            $(".turn").html("Winner : " + $(`#${event.currentTarget.id}`).html());
            $("#c,#f,#i").css("color", "White");
            gameOver(event.currentTarget.id);
        }
        else if($("#g").html() == $("#h").html() && $("#i").html() == $("#g").html()  && $("#g").html().trim() != "" && $("#h").html().trim() != "" && $("#i").html().trim() != ""){
            $(".turn").html("Winner : " + $(`#${event.currentTarget.id}`).html());
            $("#g,#h,#i").css("color", "White");
            gameOver(event.currentTarget.id);
        }
        else if($("#b").html() == $("#e").html() && $("#h").html() == $("#b").html()  && $("#b").html().trim() != "" && $("#e").html().trim() != "" && $("#h").html().trim() != ""){
            $(".turn").html("Winner : " + $(`#${event.currentTarget.id}`).html());
            $("#b,#e,#h").css("color", "White");
            gameOver(event.currentTarget.id);
        }
        else if($("#d").html() == $("#e").html() && $("#f").html() == $("#d").html()  && $("#d").html().trim() != "" && $("#e").html().trim() != "" && $("#f").html().trim() != ""){
            $(".turn").html("Winner : " + $(`#${event.currentTarget.id}`).html());
            $("#d,#e,#f").css("color", "White");
            gameOver(event.currentTarget.id);
        }
        else if($("#c").html() == $("#e").html() && $("#g").html() == $("#c").html()  && $("#c").html().trim() != "" && $("#e").html().trim() != "" && $("#g").html().trim() != ""){
            $(".turn").html("Winner : " + $(`#${event.currentTarget.id}`).html());
            $("#c,#e,#g").css("color", "White");
            gameOver(event.currentTarget.id);
        }
        else if($("#a").html() == $("#e").html() && $("#i").html() == $("#a").html()  && $("#a").html().trim() != "" && $("#e").html().trim() != "" && $("#i").html().trim() != ""){
            $(".turn").html("Winner :  " + $(`#${event.currentTarget.id}`).html());
            $("#a,#e,#i").css("color", "White");
            gameOver(event.currentTarget.id);
        }

        if(check == 9){
            $(".turn").html("Draw");
            setTimeout(function(){
                draw.src = "./gameDraw.mp3";
                draw.play();
            },1000)
        }
    }
    
    console.log("check = ",check);
    click++;
})

$("#restartbtn").on('click',function(){
    check = 0;
    click = 0;
    go = 0; 
    $("#a,#b,#c,#d,#e,#f,#g,#h,#i,.turn").html("");
    $("#a,#b,#c,#d,#e,#f,#g,#h,#i").css("color", "black");
})



































$("#x").on('click',function(){
    $("#x").removeAttr("disabled");
    $("#o").attr("disabled","");
})
$("#o").on('click',function(){
    $("#o").removeAttr("disabled");
    $("#x").attr("disabled","");
})


            


            
