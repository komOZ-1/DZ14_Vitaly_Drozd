
let title = document.createElement('title');
title.innerHTML = 'DZ_14_Vitaly_Drozd';
document.head.appendChild(title);


let style = document.createElement('style');
document.head.appendChild(style);


style.innerHTML = `
    * {
        margin: 0;
        padding: 0;
    }
    .container {
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
    .header {
        width: 100%;
        text-align: center;
        margin-bottom: 55px;
        margin-top: 122px;
    }
    .title {
        font-family: Arvo;
        font-style: Regular;
        font-size: 36px;
        line-height: 108%;
        color: #212121;
        margin-bottom: 10px;
    }
    .content {
        font-family: Open Sans;
        font-style: Regular;
        font-size: 14px;
        line-height: 26px;
        Align: Center;
        Vertical align: Center;
        color: #9FA3A7;
    }
    .main {
        width: 800px;
        height: 480px;
        display: flex;
        margin: 0 auto;
    }
    .block {
        padding-top: 80px;
        padding-bottom: 80px;
        width: 50%;
        border: 2px solid #E8E9ED;
    }
    .block2 {
        background-color: #8F75BE;
        border: 2px solid #8F75BE;
    }
    .block1 {
        border-right: none;
    }
    .name {
        font-family: Montserrat;
        font-style: 700;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;
        color: #9FA3A7;
    }
    .name2 {
        color: #FFC80A;
    }
    .title{
        width: 55%;
        font-family: Arvo;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 46px;
        text-align: center;
        margin: 25px auto;
        color: #212121;
    }
    .title2 {
        color: #fff;
    }
    .content1 {
        font-family: Open Sans;
        font-style: 12px;
        font-weight: normal;
        font-size: 12px;
        line-height: 22px;
        text-align: center;
        width: 60%;
        margin: 0 auto;
        color: #9FA3A7;
    }
    .content2 {
        color: #fff;
    }
    .btn_style {
        width: 147px;
        height: 46px;
        border-radius: 60px;
        border: 3px solid #FFC80A;
        background-color: Transparent;
        margin: 55px auto 0 auto;
        display: block;
        font-family: 'Montserrat';
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        text-transform: uppercase;
        text-align: center;
        color: #212121;
        cursor: pointer;
    }
    .btn_style2 {
        color: #fff;
    }
`;
let Container = document.createElement('div');
Container.classList.add('container');
document.body.appendChild(Container);

let Header = document.createElement('div');
Header.classList.add('header');
Container.appendChild(Header);

let h1Main = document.createElement('h1');
h1Main.classList.add('title');
h1Main.innerHTML = 'Choose Your Option';
Header.appendChild(h1Main);

let pMain = document.createElement('p');
pMain.classList.add('content');
pMain.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
Header.appendChild(pMain);

let Main = document.createElement('div');
Main.classList.add('main');
Container.appendChild(Main);

let Block1 = document.createElement('div');
Block1.classList.add('block');
Main.appendChild(Block1);

let pName = document.createElement('p');
pName.classList.add('name');
pName.innerHTML = 'FREELANCER';
Block1.appendChild(pName);

let h1Title = document.createElement('h1');
h1Title.classList.add('title');
h1Title.innerHTML = 'Initially designed to';
Block1.appendChild(h1Title);

let pContent = document.createElement('p');
pContent.classList.add('content1');
pContent.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
Block1.appendChild(pContent);

let button = document.createElement('button');
button.classList.add('btn_style');
button.innerHTML = 'START HERE';
Block1.appendChild(button);

let Block1Clone = Block1.cloneNode(true);
Main.appendChild(Block1Clone);
Block1Clone.classList.add('block2');

let h1blockTitle2 = Block1Clone.querySelector('.title');
h1blockTitle2.classList.add('title2');

let pBlockName2 = Block1Clone.querySelector('.name');
pBlockName2.classList.add('name2');
pBlockName2.innerHTML = 'STUDIO';

let pBlockDesc2 = Block1Clone.querySelector('.content1');
pBlockDesc2.classList.add('content2');

let button2 = Block1Clone.querySelector('.btn_style');
button2.classList.add('btn_style2');
