const string = `
/*
* 今天制作一个冰墩墩
* 首先制作冰墩墩的皮肤
*/
.skin *{margin:0; padding:0; box-sizing: border-box;}
.skin *::before, .skin *::after{box-sizing: border-box;}

.skin {
    position: relative;
    border: 10px solid black;
    width: 400px;
    height: 456px;
    left: 200px;
    top: 10px;
    z-index: 2;
    border-radius: 240px 240px 194px 194px;
    background: white;    
}

/*
* 制作冰墩墩的耳朵
*/
.ears{
    background: black;
    width: 71px;
    height: 90px;
    position: absolute;
    top: 10px;
    left: -5px;
    z-index: 1;
    border-radius: 50%;
    box-shadow: 329px 0 0 0 black;
}

/*
* 制作冰墩墩的手
*/
.left.hand{
    border: 1px solid black;
    width: 72px;
    height: 72px;
    position: absolute;
    top: 250px;
    left: -75px;
    border-radius: 50%;
    background: black;
}
.left.hand::before{
    content: '';
    display: block;
    left: 3px;
    top: -53px;
    border: 35px solid;
    border-color: transparent black black transparent;
    position: absolute;
}
.right.hand{
    width: 64px;
    height: 126px;
    top: 120px;
    left: 370px;
    position: absolute;
    transform: rotate(40deg);
    border-radius: 40px 49px 0 89px;
    background: black;
}
.right.hand::before{
    content: '';
    position: absolute;
    left: 30px;
    top: 30px;
    width:14px;
    height: 25px;
    border-radius: 8px 8px 0 16px;
    transform: rotate(20deg);
    background: red;
}
.right.hand::after{
    content: '';
    position: absolute;
    width: 14px;
    height: 25px;
    left: 23px;
    top: 34px;
    border-radius: 8px 8px 16px 0;
    transform: rotate(-70deg);
    background: red;
}

/*
* 制作冰墩墩的脚
*/
.feet{
    width:75px;
    height: 110px;
    top: 420px;
    left: 95px;
    position: absolute;
    background: black;
    border-radius: 20px 50% 10px 30px;
}
.feet::before{
    content: '';
    width:75px;
    height: 110px;
    left: 130px;
    position: absolute;
    background: black;
    border-radius: 50% 20px 30px 10px;
}

/*
* 制作冰墩墩的脸
*/
.face{
    width: 278px;
    height: 230px;
    border: 1px solid red;
    top: 45px;
    left: 52px;
    position: absolute;
    border-top-left-radius: 50% 60%;
    border-top-right-radius: 50% 60%;
    border-bottom-left-radius: 41% 42%;
    border-bottom-right-radius: 41% 42%;
    border: 5px solid blue;
    box-shadow: 
      0 0 0 5px yellow,
      0 0 0 10px black,
      0 0 0 15px green,
      0 0 0 20px red;
}
/*
* 制作冰墩墩的眼睛
*/
.eyes{
    width: 70px;
    height: 100px;
    top: 100px;
    left: 90px;
    position: absolute;
    border-radius: 50%;
    transform: rotate(35deg);
    background: black;
}
.eyes::before{
    content: '';
    width: 70px;
    height: 100px;
    background: black;
    left: 110px;
    top: -70px;
    border-radius: 50%;
    transform: rotate(-70deg);
    position: absolute;
}

/*
* 制作冰墩墩的鼻子
*/
.nose{
    width: 25px;
    height: 16px;
    position: absolute;
    background: black;
    top: 160px;
    left: 180px;
    border-radius: 5px 5px 50% 50%;
}

/*
* 制作冰墩墩的嘴巴 
*/
.mouth{
    border: 2px solid black;
    width: 30px;
    height: 8px;
    position: absolute;
    top: 185px;
    left: 178px;
    border-radius: 0 0 50% 50%;
    background: red;
}
.iris{
    border: 5px solid white;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 130px;
    left: 123px;
    border-radius: 50%;
    background: black;
    box-shadow: 0 0 0 0 gray;
    z-index: 3;
}
.iris::before{
    content: '';
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: black;
    position: absolute;
    border: 5px solid white;
    left: 100px;
    top: -5px;
    box-shadow: 0 0 0 -5px cyan;
}
.highlight{
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: white;
    left: 127px;
    top: 139px;
    position: absolute;
    box-shadow: 120px 0 0 0 white;
    z-index: 4;
}`;
export default string;
