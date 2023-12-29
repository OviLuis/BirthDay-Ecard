import view from '../views/message.html'

export default () => {
    const div = document.createElement('div');
    div.innerHTML = view;

    return div;
};