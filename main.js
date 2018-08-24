!function(){
    //接收一个前缀，要写的代码和一个回调
    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(()=>{
            n += 1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n >= code.length){
                window.clearInterval(id)
                //如果传了回调，就调用一下回调
                fn && fn.call()
            }
        },10)
    }
    let code = `
    /*给皮卡丘一张皮*/
    .preview{
        height:100%;
        background:#FEE433;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    /*皮卡丘的鼻子*/
    .wrapper > .nose{
        border-radius:50%;
        border-style:solid;
        border-width:12px 15px;
        border-color:black transparent transparent;
        position:absolute;
        left:50%;
        top:28px;
        transform:translateX(-50%);
    }
    /*皮卡丘的眼睛*/
    .wrapper > .eye{
        width:50px;
        height:50px;
        background:#2E2E2E;
        border-radius:50%;
        position:absolute;
        border:2px solid #000000;
    }
    .wrapper > .eye.left{
        margin-right:90px;
        right:50%;
    }
    .wrapper > .eye.right{
        margin-left:90px;
        left:50%;
    }
    /*皮卡丘的眼珠*/
    .wrapper > .eye::after{
        content:'';
        display:block;
        width:24px;
        height:24px;
        border-radius:50%;
        background:white;
        position:absolute;
        left:4px;
        top:1px;
        border:2px solid #000;
    }
    /*皮卡丘的脸*/
    .wrapper > .face{
        width:68px;
        height:68px;
        border-radius:50%;
        background:#FC0D1C;
        border:2px solid black;
        position:absolute;
        top:85px;
    }
    .wrapper > .face.left{
        right:50%;
        margin-right:116px;
    }
    .wrapper > .face.right{
        left:50%;
        margin-left:116px;
    }
    /*皮卡丘的胡须*/
    .wrapper > .upperLip{
        width:71px;
        height:18px;
        border:3px solid;
        position:absolute;
        top:53px;
        background:#FEE433;
        z-index:1;
    }
    .wrapper > .upperLip.left{
        border-bottom-left-radius:38px 23px;
        border-top:none;
        border-right:none;
        right:50%;
        transform:rotate(-20deg);
    }
    .wrapper > .upperLip.right{
        border-bottom-right-radius:38px 23px;
        border-top:none;
        border-left:none;
        left:50%;
        transform:rotate(20deg);
    }
    /*皮卡丘的舌头*/
    .wrapper > .lowerLip-wrapper{
        width:124px;
        height:150px;
        position:absolute;
        left:50%;
        bottom:-44px;
        transform:translateX(-50%);
        overflow:hidden;
    }
    .wrapper  .lowerLip{
        width:124px;
        height:507px;
        background:#990513;
        border-radius:102px/410px;
        position:absolute;
        left:50%;
        bottom:20px;
        transform:translateX(-50%);
        border:2px solid black;
        overflow:hidden;
    }
    .wrapper .lowerLip::after{
        content:'';
        display:block;
        width:124px;
        height:158px;
        background:#FC4A62;
        position:absolute;
        bottom:-46px;
        border-radius:59px/63px;
    }
    `
    writeCode('',code)

}.call()