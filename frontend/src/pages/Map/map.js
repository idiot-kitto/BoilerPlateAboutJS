export default class KakaoMap {
    constructor($parent) {
        const el = document.createElement(`div`);
        el.id = 'map';
        el.style = 'width:500px; height:500px;';
        $parent.appendChild(el);
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.61782, 127.01690),
            level: 3
        };
        new kakao.maps.Map(container, options);
    }
}

