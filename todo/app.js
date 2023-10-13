let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let li=document.querySelectorAll("li")
btn.addEventListener("click",function(){
    const task=inp.value.trim();
    if(task.length!=0){
        console.log("not empty");
        let newList=document.createElement("li");
        newList.innerText=task;
        ul.appendChild(newList);
        inp.value="";
        let del=document.createElement("button");
        del.innerText="delete";
        del.classList.add("delete");
        newList.appendChild(del);
    }
    else{
        console.log("task empty")
    }
    
    
    
})
ul.addEventListener("click",function(event){
if(event.target.nodeName=="BUTTON"){
    let listItem=event.target.parentElement;
    console.log(listItem);
    listItem.remove();
}
})
inp.addEventListener("keypress",function(event){
    if(event.keyCode==13){
        const task=inp.value.trim();
    if(task.length!=0){
        console.log("not empty");
        let newList=document.createElement("li");
        newList.innerText=task;
        ul.appendChild(newList);
        inp.value="";
        let del=document.createElement("button");
        del.innerText="delete";
        del.classList.add("delete");
        newList.appendChild(del);
    }
    else{
        console.log("task empty")
    }
    }
})

// let delBtn=document.querySelectorAll(".delete");
// for(delB of delBtn){
//     delB.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//         console.log(par.remove());
//     })
// }