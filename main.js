!function () {
    var duration = 50
    var id
    var n = 0
    $('.actions').on('click', 'button', function (e) {
        //获取button
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings().removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 90
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
            case 'zero':
                window.clearTimeout(id)
                break
            case 'normal-again':
                setTime()
                break
        }
    })
    function setTime() {  
        id = setTimeout(function run() {
            n += 1
            let container = document.querySelector('#code')
            let styleTag = document.querySelector('#styleTag')
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(run, duration)
            }
        }, duration)
    }
    //接收一个前缀，要写的代码
    function writeCode(prefix, code) {
        setTime()
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
        transform:rotate(-18deg);
    }
    .wrapper > .upperLip.right{
        border-bottom-right-radius:38px 23px;
        border-top:none;
        border-left:none;
        left:50%;
        transform:rotate(18deg);
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
    /*更逼真的舌头*/
    .wrapper .lowerLip::after{
        content:'';
        display:block;
        width:124px;
        height:158px;
        background:#FC4A62;
        position:absolute;
        bottom:-50px;
        border-radius:59px/63px;
    }`
    writeCode('', code)
}.call()