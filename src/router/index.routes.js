
import {pages} from "../controllers/index"


let content = document.getElementById("message")

const router = (route) => {
    console.log(route)
    content.innerHTML = '';
    switch(route){
        case '#/':{
            return content.appendChild(pages.home())
        }
        case  '#/message':{
            return content.appendChild(pages.message())
        }   
        case  '#/options':{
            return content.appendChild(pages.options())
        } 
        case  '#/nacional':{
            return content.appendChild(pages.nacionales())
        } 
        case  '#/internal':{
            return content.appendChild(pages.internaciones())
        } 
        default:
            return console.log("D'oh 404!!!!!")
    }
}

export {router};