import view from '../views/opciones.html'

export default () => {
    const div = document.createElement('div');
    div.innerHTML = view;

    return div;
};