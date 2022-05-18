import React, {useEffect, useRef, useState} from "react";


function App() {

    const [image, setImage] = useState(null);
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const canvas = useRef();

    useEffect(() => {
        const catImage = new Image();
        catImage.src = 'https://thiscatdoesnotexist.com/';
        catImage.onload = () => setImage(catImage);

    },[]);
    useEffect(() => {

        if (image && canvas) {
            //инициализирую контектс для конвы
            const ctx = canvas.current.getContext("2d");
            //выбор цвета
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, 800, 512 + 160); // заполняю поле (рисунок 256 * 256), на поле места для текста
            ctx.drawImage(image, (800 - 512) / 2, 80);// загружаю рисунок, с координатами верхнего левого края

            //с текстом такие же манипуляции: установить цвет, font, можно выровнять
            //ТОП текст
            ctx.fillStyle = "white";
            ctx.font = "30px Comic MS";
            ctx.textAlign = "center";
            ctx.fillText(topText, (800 / 2), 40);
            //БОТТОМ текст;
            ctx.fillStyle = "white";
            ctx.font = "30px Comic MS";
            ctx.textAlign = "center";
            ctx.fillText(bottomText, (800 / 2), 512 + 80 + 40);
            ctx.save();
        }
    }, [image, canvas, topText, bottomText]);


    return (
        <div className="App">
            <h1>Create Cat Meme!</h1>
            <canvas
                ref={canvas}
                width={800}
                height={512 + 160}>
            </canvas>
            <div>
                <label>Top Text </label>
                <input value={topText}
                       onChange={(e) => setTopText(e.currentTarget.value)}/>
            </div>
            <div>
                <label>Bottom Text </label>
                <input value={bottomText}
                       onChange={(e) => setBottomText(e.currentTarget.value)}/>
            </div>
        </div>
    );
}

export default App;
