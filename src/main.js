import "bootstrap/dist/css/bootstrap.min.css"
import  css from './main.css'

import {router} from './router/index.routes'

const init = () => {
    router(window.location.hash);
  
    window.addEventListener("hashchange", () => {
      router(window.location.hash);
    });
  };
  
  window.addEventListener("load", init);