function printTextWithFontSize(text, fontSize) {
    let blockElement = document.getElementById('block1_task1');
    if (blockElement) {
        let divElement = document.createElement("p");
        divElement.innerText = text;
        divElement.style.fontSize = fontSize;
        blockElement.appendChild(divElement);
    } else {
        console.error("Елемент з id 'block1_task1' не знайдено.");
    }
}

for (let i = 6; i <= 24; i += 2) {
    printTextWithFontSize(`Це текст з різним розміром шрифту ${i}px`, `${i}px`)
}

function moveImg() {
    let blockElement = document.getElementById('block1_task2');
    let imgElement = document.createElement('img');
    imgElement.src = 'img/arricle_img_1.png';
    imgElement.width = 100;
    let randomTop = Math.floor(Math.random() * window.innerHeight);
    let randomLeft = Math.floor(Math.random() * window.innerWidth);
    imgElement.style.position = "absolute";
    imgElement.style.top = `${randomTop}px`;
    imgElement.style.left = `${randomLeft}px`;
    blockElement.appendChild(imgElement);
    setTimeout(function () {
        blockElement.removeChild(imgElement);
    }, 1000);
}

setInterval(moveImg, 1000);

function changeFontSizesPs() {
    let paragraphs = document.getElementsByTagName("p");
    let blockElement = document.getElementById('block1_task3');
    if (blockElement) {
        let count = Math.min(15, paragraphs.length);
        for (let i = 0; i < count; i++) {
            let clonedParagraph = paragraphs[i].cloneNode(true);
            clonedParagraph.style.fontSize = "15px";
            blockElement.appendChild(clonedParagraph);
        }
    } else {
        console.error("Елемент з id 'block1_task3' не знайдено.");
    }
}

changeFontSizesPs();

function formatNumber(num) {
    return num < 0 ? `0${num}` : `${num}`;
}

function updateClock() {
    let now = new Date();
    let hours = formatNumber(now.getHours());
    let minutes = formatNumber(now.getMinutes());
    let seconds = formatNumber(now.getSeconds());
    let timeString = `${hours}:${minutes}:${seconds}`;
    let blockElement = document.getElementById("block1_task4")
    if (blockElement) {
        blockElement.innerText = timeString;
    } else {
        console.error("Елемент з id 'block1_task4' не знайдено.");
    }
}

setInterval(updateClock, 1000);

function fadeOutEffect() {
    let fadeElements = document.getElementsByClassName("fade-out");
    let opacity = 1;
    let fadeTimer = setInterval(function () {
        for (let i= 0; i < fadeElements.length; i++) {
            fadeElements[i].style.opacity = opacity;
        }
        opacity -= 0.1;
        if (opacity <= 0) {
            opacity = 1;
            clearInterval(fadeTimer);
        }
    }, 500)
}

window.onload = fadeOutEffect;

document.addEventListener("DOMContentLoaded", function () {
    let blockElement = document.getElementById("block2_task1");
    let toolTipElement = document.getElementById('tooltip');
    blockElement.addEventListener("click", function (event) {
        let blockRect = blockElement.getBoundingClientRect();
        let tooltipRect = toolTipElement.getBoundingClientRect(); // Змінено тут
        let pageHeight = window.innerHeight;

        let tooltipX = blockRect.left;
        let tooltipY = pageHeight + blockRect.top/2 - tooltipRect.height - 10;
        console.log('tooltipY', tooltipY);
        console.log('pageHeight', pageHeight);
        console.log('blockRect.top', blockRect.top);
        console.log('tooltipRect.height', tooltipRect.height);

        if (tooltipY < 0) {
            tooltipY = blockRect.bottom + 10;
        }

        toolTipElement.style.left = `${tooltipX}px`;
        toolTipElement.style.top = `${tooltipY}px`;
        toolTipElement.innerText = 'Це створена підказка';
        toolTipElement.style.display = "block";
    });

    document.addEventListener("click", function (event) {
        if (event.target !== blockElement && event.target !== toolTipElement) {
            toolTipElement.style.display = "none";
        }
    });

    let table = document.getElementById("myTable");
    let rows = table.rows;

    function swapColumns(index1, index2) {
        for (var i = 0; i < rows.length; i++) {
            var temp = rows[i].cells[index1].innerHTML;
            rows[i].cells[index1].innerHTML = rows[i].cells[index2].innerHTML;
            rows[i].cells[index2].innerHTML = temp;
        }
    }

    document.getElementById("moveLeft").addEventListener("click", function () {
        var columnIndex = parseInt(document.getElementById("columnIndex").value);
        if (columnIndex > 0 && columnIndex < rows[0].cells.length) {
            swapColumns(columnIndex, columnIndex - 1);
        }
    });

    document.getElementById("moveRight").addEventListener("click", function () {
        var columnIndex = parseInt(document.getElementById("columnIndex").value);
        if (columnIndex >= 0 && columnIndex < rows[0].cells.length - 1) {
            swapColumns(columnIndex, columnIndex + 1);
        }
    });

    let colorList = document.getElementById("colorInput");
    let square = document.getElementById("square");

    colorList.addEventListener("input", function() {
        square.style.backgroundColor = colorList.value;
    });

    let mouseCoordinates = document.getElementById("mouseCoordinates");
    let lastKeyPressed = document.getElementById("lastKeyPressed");

    blockElement.addEventListener("mousemove", function(event) {
        let x = event.clientX;
        let y = event.clientY;
        mouseCoordinates.textContent = `X: ${x}, Y: ${y}`;
    });
    document.addEventListener("keydown", function(event) {
        lastKeyPressed.textContent = event.key;
    });


});