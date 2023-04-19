const dragZone = document.querySelector(".drag-zone");

dragZone.addEventListener("dragover" , (e) => {

    if(!dragZone.classList.contains("dragged")){
        dragZone.classList.add("dragged");
    }
    console.log('dragging');
    
})

dragZone.addEventListener("dragleave", () => {
    dragZone.classList.remove("dragged");
})