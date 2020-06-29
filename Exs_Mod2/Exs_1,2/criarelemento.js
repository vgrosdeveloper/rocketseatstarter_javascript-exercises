document.querySelector('#createElement').addEventListener('click', () => {
    let box = document.createElement("div");
    box.style.background = "red";
    box.style.width = "100px";
    box.style.height = "100px";
    document.querySelector('#box').appendChild(box);
    box.addEventListener("mouseover", () => {
    box.style.background = getRandomColor();
    });
});

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

    var newColor = getRandomColor(); 
   