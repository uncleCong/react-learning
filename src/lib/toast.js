/*
    * {msg,time,callback}
*/
import { animate } from '../lib/utils'

let Toast = (() => {
    const element = document.createElement("div");
    element.setAttribute("id","toast");
    const setStyle = (ele,obj) => {
        for(var i in obj){
            ele.style[i] = obj[i]
        }
    }
    setStyle(element,{
        "minWidth" : "100px",
        "color":"#fff",
        "padding":"15px 20px",
        "margin":"0 auto",
        "background":"rgba(0,0,0,.7)",
        "text-align":"center",
        "borderRadius":"5px",
        "position":"absolute",
        "top":"35%",
        "left":"50%",
        "transform":"translateX(-50%)",
        "zIndex":"25565"
    })
    return (msg,time=2000,callback) => {
        element.innerText = msg;
        document.body.appendChild(element);
        setTimeout(()=>{
            animate(element,{opacity:0},1000,function(){
                element.remove();
                callback && callback();
            })
        },time)
    }
})();

export default Toast;