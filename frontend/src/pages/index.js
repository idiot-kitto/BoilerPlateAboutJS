export default class MainPage {
    constructor($parent) {
        const el = document.createElement('div');
        el.innerText = 'Hello Boiler Plate';
        $parent.appendChild(el);
    }
}