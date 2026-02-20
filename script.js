//your JS code here. If required.
const container = document.querySelector('.container');

function randomColor(){
    return `hsl(${Math.random()*360},70%,55%)`;
}

const frag = document.createDocumentFragment();
for(let i=0;i<800;i++){
    const div=document.createElement("div");
    div.className="box";
    frag.appendChild(div);
    div.addEventListener("mouseenter",()=>{
    const color = randomColor();
    div.style.transition = "background 0s";  // instant color change
    div.style.background = color;
    setTimeout(()=>{
        div.style.transition = "background 1s linear";  // smooth fade back
        div.style.background = "#1a1a1a";
    },1000);
    });
}
container.appendChild(frag);