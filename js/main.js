let currentCssResult = ''
const time = 40
const writeCss = (code, style, result, callback) => {
    let currentIndex = 0
    const interval = setInterval(() => {
        currentCssResult += result[currentIndex]
        code.innerHTML = Prism.highlight(currentCssResult, Prism.languages.css)
        code.scrollTop = code.scrollHeight
        style.innerHTML = currentCssResult
        currentIndex += 1
        if (currentIndex === result.length) {
            clearInterval(interval)
            callback()
        }
    }, time)
}

const css = `/* 
* 今天来做点有趣的东西，用CSS画一只大白吧
* 代码还是在这边写，那么右边的就是画板啦
* 不多说了，马上开始吧
*/

/* 先给所有的部位添加通用的样式 */
.head, .eye, .mouth, .torso, .belly, .cover, .heart, .arm, .leg {
    background: #fff;
    position: absolute;
}

/* 脑子是个好东西，要先画 */
.head {
    width: 1rem;
    height: 0.64rem;
    border-radius: 50%;
    border-bottom: 0.05rem solid #e0e0e0;
    z-index: 10;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

/* 接着画眼睛 */
.eye {
    width: 0.11rem;
    height: 0.13rem;
    background: #282828;
    border-radius: 50%;
    top: 0.3rem;
    left: 0.24rem;
    transform: rotate(8deg)
}

/* 右眼要放在右边 */
.eye.right {
    left: 0.62rem;
    transform: rotate(-8deg)
}

/* 用嘴巴把眼睛连起来（？？？） */
.mouth {
    width: 0.38rem;
    height: 0.015rem;
    background: #282828;
    position: absolute;
    top: 0.27rem;
    left: 0.295rem;
    top: 0.365rem;
}

/* 画个胸 */
.torso {
    width: 1.8rem;
    height: 2rem;
    border-radius: 47%;
    border: 0.05rem solid #e0e0e0;
    border-top: none;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
}

/* 胸下面是肚子 */
.belly {
    width: 2.45rem;
    height: 3rem;
    border-radius: 47%;
    border: 0.05rem solid #e0e0e0;
    border-top: none;
    top: 1.12rem;
    left: 50%;
    transform: translateX(-50%);
}

/* 有点丑，拿个东西遮一下 */
.cover {
    width: 1.9rem;
    height: 1.5rem;
    border-radius: 50%;
    top: -0.2rem;
    left: 50%;
    transform: translateX(-50%);
}

/* 心脏贴上 */
.heart {
    width: 0.25rem;
    height: 0.25rem;
    box-shadow: 2px 5px 2px #ccc inset;
    border-radius: 50%;
    border: 1px solid #ccc;
    top: -0.24rem;
    left: 1.48rem;
}

/* 身体画完了，接下来画胳膊 */
.arm {
    width: 1.2rem;
    height: 2.7rem;
    border-radius: 50%;
    top: 0.64rem;
    left: 50%;
    transform: translateX(-132%) rotate(20deg);
    z-index: -10;
}

/* 右胳膊也要放在右边 */
.arm.right {
    transform: translateX(32%) rotate(-20deg);
}

/* 最后画上小短腿 */
.leg {
    width: 0.9rem;
    height: 1.7rem;
    border-radius: 40% 30% 10px 45%;
    top: 3.2rem;
    left: 50%;
    transform: translateX(-103%) rotate(-1deg);
    z-index: -10;
}

/* 右腿的形状要改一下，当然右腿也是要放在右边的 */
.leg.right {
    border-radius: 30% 40% 45% 10px;
    transform: translateX(3%) rotate(1deg);
}

/*
* 这样这只大白就完成啦
* 谢谢观看
*/
`

writeCss(code, style, css, () => {})