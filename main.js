

//background...
const bgd = new Image();
bgd.src ='./file/images/galaxy.png';
const bg = {
    sX:0,
    sY:0,
    sW:614,
    sH:335,
    cX:0,
    cY:0,
    cW:360,
    cH:160,
    draw: function(){
        ctx.beginPath();
        ctx.drawImage(bgd,this.sX,this.sY,this.sW,this.sH,this.cX,this.cY,this.cW,this.cH);
        ctx.drawImage(bgd,this.sX,this.sY,this.sW,this.sH,this.cX,this.cY+160,this.cW,this.cH);
        ctx.drawImage(bgd,this.sX,this.sY,this.sW,this.sH,this.cX,this.cY+320,this.cW,this.cH);
        ctx.drawImage(bgd,this.sX,this.sY,this.sW,this.sH,this.cX,this.cY+480,this.cW,this.cH);
    }
}

//spaceship...
const ship = new Image();
ship.src ='./file/images/spaceship.png';

class spaceship{
    constructor(cX){
        this.cX=cX
    }
    draw() {
        ctx.beginPath();
        ctx.drawImage(ship, 0, 0, 621, 608, this.cX, 450, 34, 40 )
    }
    update(){
        this.cX;
    }
}
let moveship = new spaceship(170);

document.getElementById('button-left').addEventListener("click",function(){
    if(moveship.cX>=17 && game == 'play'){
        moveship.cX += -34;
        fireshoot.l=true;
    }
})
document.getElementById('button-right').addEventListener("click",function(){
    if(moveship.cX<=289 && game == 'play'){
        moveship.cX += 34;
        fireshoot.l=true;
    }
    
})

//shoot...
const fshoot = new Image();
fshoot.src = './file/images/shoot.png';

class shoot{
    constructor(cX){
        this.cX=cX,
        this.cY=442,
        this.cW=17,
        this.cH=20,
        this.l= false
    }
    draw() {
        ctx.beginPath();
        ctx.drawImage(fshoot, 0, 0, 212, 294, this.cX+8.5, this.cY, this.cW, this.cH)
    }
    update(){
        this.cY;
        this.cX;
    }
    remove(){
        this.cW;
        this.cH;
        this.l;
    }
}

let fireshoot = new shoot(170);

function moveshoot() {
    if(fireshoot.cY>=0 && fireshoot.l==true && game=='play'){
        fireshoot.cY-= 8.5;
    }else{
        fireshoot.cX=moveship.cX;
        fireshoot.cY=442;
        fireshoot.cW=17;
        fireshoot.cH=20;
        fireshoot.l=true;
    }   
}
let d=0;
function removeinvader() {
    for(let i=0;i<a*b;i++){        
        if(inva[i].cY*34 == fireshoot.cY && inva[i].cX*34 == fireshoot.cX){               
            inva[i].cW=0;
            inva[i].cH=0;
            if(inva[i].l==true){
                fireshoot.l=false;d++;
                document.getElementById('core').innerHTML=d;
            }
            inva[i].l=false;                  
        }        
    }
}
let kq='chua biet';
function winlost(){
    for(let i=0;i<a*b;i++){
        if(inva[i].cY * 34 > 452 && inva[i].l == true && game=='play'){
            kq='thua';
            game='end';
        }
        if(d==a*b && inva[i].cY * 34 <= 452 && game=='play'){
            kq='thang';            
            game='end';
        }                
    }
    if(kq=='thang'){
        win.draw();
    }
    if(kq=='thua'){
        lost.draw();
    }
}

function remove() {
    fireshoot.remove();
    for(let i=0;i<a*b;i++){
        inva[i].remove();        
    } 
       
}
function update(){   
    screenend.update();
    moveship.update();
    for(let i=0;i<a*b;i++){
        inva[i].update();        
    } 
    while(true){
        fireshoot.update();
    }
             
}
function draw(){
    bg.draw();
    moveship.draw(); 
    for(let i=0;i<a*b;i++){
        inva[i].draw();
    }              
    removeinvader();
    if(game=='play'){
        fireshoot.draw();
        moveshoot();
    }
    if(game=='start'){
        screenstart.draw();
    }
    winlost();
}
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    draw();    
}
animate();