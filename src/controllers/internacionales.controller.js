import view from '../views/internacionales.html'

export default () => {
    const div = document.createElement('div');
    div.innerHTML = view;

    return div;
};