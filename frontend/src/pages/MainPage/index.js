import { $ } from '@/utils/helper.js';
import './index.scss';
import Click from '@/static/assets/img/click.png';

export default class MainPage {
    constructor($parent) {
        const el = document.createElement(`a`);
        const clickImg = document.createElement('img');
        el.href = '/second';
        el.innerText = 'move to map ';
        clickImg.id = 'click';
        clickImg.src = Click;

        el.appendChild(clickImg);
        $parent.appendChild(el);
    }
}