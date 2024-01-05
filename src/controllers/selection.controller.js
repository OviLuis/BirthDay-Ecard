import view from '../views/seleccion.html'

export default () => {
    const div = document.createElement('div');
    div.innerHTML = view;

    const btnClick = div.querySelector("#btn-show-div");
    
    btnClick.addEventListener("click", () => {
        document.getElementById('btns-selection').style.display = "block";
    });

    return div;
};