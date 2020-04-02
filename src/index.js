(
    () => {
        const body = document.querySelector('body');
        const canvas = document.createElement('canvas');
const text = 'AHUK38569903MVCUdfdgdfgsopjerkcvblwepopzcx{}@#%$%^&*(^%$#';

        body.style.margin = '0px';
        body.style.padding = '0px';
        body.style.overflow = 'hidden';

        canvas.width = '3000';
        canvas.height = '3000';
        canvas.style.position = 'absolute';
        canvas.style.display = 'block',
            canvas.style.zIndex = -2;

        body.appendChild(canvas);

        const { width, height } = getComputedStyle(canvas);
        const drawingField = canvas.getContext('2d');

        drawingField.imageSmoothingEnabled = false;

        drawingField.rect(0, 0, parseInt(width), parseInt(height));
        drawingField.fillStyle = '#000';
        drawingField.fill();

        const sizeWidth = parseInt(document.documentElement.clientWidth);
        const sizeHeight = parseInt(document.documentElement.clientHeight);
        
        const row = [];
        const letterSize = 20;
        for (let i = 0; i < Math.floor(sizeWidth / letterSize); i++) {
            row[i] = 1;
        }

        function placeText() {
           
            drawingField.fillStyle = "rgba(0, 0, 0, 0.04)";
            drawingField.rect(0, 0, sizeWidth, sizeHeight);
            drawingField.fill();

            drawingField.fillStyle = '#39ff14';
            drawingField.font = letterSize + 'px'
            row.forEach((element, index) => {
                drawingField.fillText(text[Math.round(Math.random() * (text.length - 1) )], index * letterSize, element * letterSize);
                if (element * letterSize > sizeHeight && Math.random() > 0.9) row[index] = 0;
                row[index]++;
            })

        }

        setInterval(placeText, 40);


    }

)()