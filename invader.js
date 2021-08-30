let mycanvas = document.querySelector('canvas');
let ctx = mycanvas.getContext('2d');
let buttonleft = document.getElementById('button-left');

mycanvas.width = 340;
mycanvas.height = 510;

const invader=new Array();
invader[0] = new Image();
invader[0].src ="./file/images/red.png";
invader[1] = new Image();
invader[1].src ="./file/images/green.png";
invader[2] = new Image();
invader[2].src ="./file/images/yellow.png";
invader[3] = new Image();
invader[3].src ="./file/images/orange.png";
invader[4] = new Image();
invader[4].src ="./file/images/blue.png";
invader[5] = new Image();
invader[5].src ="./file/images/pink.png";

//Invader...
class ainvader{
    constructor(cX, cY, i){
        this.i=i,
        this.cX=cX,
        this.cY=cY,
        this.cW=34,
        this.cH=34,
        this.l=true
    }
    draw(){
        ctx.beginPath();
        ctx.drawImage(invader[this.i], 0, 0, 106, 106, this.cX * 34, this.cY * 34, this.cW, this.cH)
    }
    update(){
        this.cX;
        this.cY;
    }
    remove(){
        this.cW;
        this.cH;
        this.l;
    }
}
let a=7;
let b=3;

let level1 = [
    [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],
    [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],
    [0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],
]

// khai bao start...
let start=new Image();
start.src='./file/images/startgame.png';

let endgame=new Image();
endgame.src='./file/images/winlost.png';

//start...

let game='start';
mycanvas.addEventListener('click', function () {
    switch(game){
        case 'start':
            game='play'
            console.log('hello')
            break;
    }
})

const screenstart = {    
    draw: function() {
        ctx.beginPath();
        ctx.drawImage(start, 0, 0, 885, 587, 68, 68, 204, 102);
    }
}

//end game...
const win={    
    draw: function() {
        ctx.beginPath();
        ctx.drawImage(endgame, 0, 0, 512, 96, 68, 68, 204, 68);
    }
}
const lost={    
    draw: function() {
        ctx.beginPath();
        ctx.drawImage(endgame, 0, 96, 512, 96, 68, 68, 204, 68);
    }
}

let inva = [];
for(let i=0;i<a*b;i++){
    inva[i]= new ainvader(level1[i][0], level1[i][1], Math.floor(Math.random() * 6));
}
function moveinvader() {
    setInterval(function(){       
        if(inva[a-1].cY  % 2 == 0 && game=='play'){
            for(let i=0;i<a*b;i++){
                inva[i].cX+=1;            
            }                
        }
        if((inva[a-1].cX==10||inva[0].cX==0 && game=='play')){
            for(let i=0;i<a*b;i++){
                inva[i].cY+=1;              
            }   
        }
        if(inva[0].cY % 2 ==1 && game=='play'){
            for(let i=0;i<a*b;i++){
                inva[i].cX-=1; 
            } 
        }        
    }, 500);  
};

moveinvader()

