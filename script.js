let myitems=[];
const input_item= document.getElementById("input-item");
const add_btn= document.getElementById("input-btn");
const added_items = document.getElementById("added-items");
let disp= document.getElementById("display");

add_btn.addEventListener("click", function(){
    myitems.push(input_item.value);
    input_item.value=""
    renderout();
})

function renderout() {
    let listitems="";
    for(let i=0 ; i< myitems.length; i++){
        listitems += `<li> ${myitems[i]} <button onclick="deleteItems(this)">done</button></li>`
    }
    added_items.innerHTML= listitems;
}

function deleteItems(button) {
    const listitem = button.parentElement;
    listitem.remove();
    myitems=[];
}




    
