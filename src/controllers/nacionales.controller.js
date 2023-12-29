import view from '../views/nacionales.html'

export default () => {
    const div = document.createElement('div');
    div.innerHTML = view;

    return div;
};