$(document).ready(function () {
    var api   = "http://api.openweathermap.org/data/2.5/weather?q=";
    var key   = "&APPID=e16546215722fbf13c8ca134f4758714";
    var units = "&units=metric";

    function clear() {
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 195.28 197.52"><defs><style>.cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}.cls-3{fill:url(#linear-gradient-3);}.cls-4{fill:url(#linear-gradient-4);}.cls-5{fill:url(#linear-gradient-5);}.cls-6{fill:url(#linear-gradient-6);}.cls-7{fill:url(#linear-gradient-7);}.cls-8{fill:url(#linear-gradient-8);}.cls-9{fill:url(#linear-gradient-9);}.cls-10{fill:url(#linear-gradient-10);}.cls-11{fill:url(#linear-gradient-11);}.cls-12{fill:url(#linear-gradient-12);}.cls-13{fill:url(#linear-gradient-13);}.cls-14{fill:url(#radial-gradient);}</style><linearGradient id="linear-gradient" x1="95.42" y1="-13.62" x2="99.05" y2="107.62" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feff7f"/><stop offset="0.25" stop-color="#feee72"/><stop offset="0.75" stop-color="#ffc351"/><stop offset="1" stop-color="#ffab3f"/></linearGradient><linearGradient id="linear-gradient-2" x1="94.33" y1="10.34" x2="100.37" y2="109.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feff7f"/><stop offset="0.32" stop-color="#feef6e"/><stop offset="0.95" stop-color="#ffc643"/><stop offset="1" stop-color="#ffc23f"/></linearGradient><linearGradient id="linear-gradient-3" x1="97.34" y1="31.92" x2="98.15" y2="85.53" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feffe3"/><stop offset="0.14" stop-color="#fef9d2"/><stop offset="0.43" stop-color="#fee8a6"/><stop offset="0.82" stop-color="#ffce61"/><stop offset="1" stop-color="#ffc23f"/></linearGradient><linearGradient id="linear-gradient-4" x1="-305.1" y1="236.15" x2="-319.61" y2="272.83" gradientTransform="translate(266.84 -351.49) rotate(-26.18)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-5" x1="-926.29" y1="248.61" x2="-940.8" y2="285.29" gradientTransform="translate(266.99 -925.93) rotate(-62.18)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-6" x1="-1435.78" y1="-106.71" x2="-1450.29" y2="-70.03" gradientTransform="matrix(-0.14, -0.99, 0.99, -0.14, -70.12, -1390.39)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-7" x1="-1640.46" y1="-694.05" x2="-1654.97" y2="-657.37" gradientTransform="translate(-616.66 -1569.31) rotate(-134.18)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-8" x1="-1459.96" y1="-1288.61" x2="-1474.47" y2="-1251.93" gradientTransform="translate(-1163.11 -1391.65) rotate(-170.18)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-9" x1="-965.24" y1="-1663.84" x2="-979.75" y2="-1627.16" gradientTransform="translate(-1501.84 -926.64) rotate(153.82)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-10" x1="-343.61" y1="-1676.57" x2="-358.12" y2="-1639.88" gradientTransform="translate(-1502 -352.2) rotate(117.82)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-11" x1="167.17" y1="-1321.86" x2="152.65" y2="-1285.18" gradientTransform="matrix(0.14, 0.99, -0.99, 0.14, -1164.88, 112.26)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-12" x1="370.47" y1="-734.86" x2="355.96" y2="-698.18" gradientTransform="translate(-618.34 291.19) rotate(45.82)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-13" x1="191.02" y1="-139.58" x2="176.51" y2="-102.9" gradientTransform="translate(-71.89 113.52) rotate(9.82)" xlink:href="#linear-gradient-2"/><radialGradient id="radial-gradient" cx="375.77" cy="-2624.36" r="72.31" gradientTransform="translate(-369.34 452.64) scale(1.24 0.1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#969696"/><stop offset="0" stop-color="#a3a3a3"/><stop offset="0" stop-color="#a1a1a1"/><stop offset="0" stop-color="#9a9a9a"/><stop offset="0.11" stop-color="#ababab"/><stop offset="0.22" stop-color="#b9b9b9"/><stop offset="0.25" stop-color="#bcbcbc"/><stop offset="0.57" stop-color="#e1e1e1"/><stop offset="0.83" stop-color="#f7f7f7"/><stop offset="1" stop-color="#fff"/></radialGradient></defs><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle class="cls-1" cx="97.84" cy="67.43" r="51.42"/><path class="cls-2" d="M45.82,68a52,52,0,0,1,52-52h0a52,52,0,0,1,52,52h0a52,52,0,0,1-52,52h0a52,52,0,0,1-52-52ZM61.91,32.11A50.65,50.65,0,0,0,47,68h0A50.64,50.64,0,0,0,61.91,104h0a50.64,50.64,0,0,0,35.93,14.88h0A50.65,50.65,0,0,0,133.78,104h0A50.64,50.64,0,0,0,148.66,68h0a50.65,50.65,0,0,0-14.88-35.93h0A50.65,50.65,0,0,0,97.84,17.22h0A50.65,50.65,0,0,0,61.91,32.11Z"/><path class="cls-3" d="M97.84,25.18a46.89,46.89,0,0,1,46.4,40.18,46.48,46.48,0,0,0-92.8,0A46.89,46.89,0,0,1,97.84,25.18Z"/><path class="cls-4" d="M113.67,14.2a14.92,14.92,0,0,0-29.8.07A51.81,51.81,0,0,1,113.67,14.2Z"/><path class="cls-5" d="M79.12,15.14A14.92,14.92,0,0,0,55.05,32.71,51.82,51.82,0,0,1,79.12,15.14Z"/><path class="cls-6" d="M51.72,36.21a14.92,14.92,0,0,0-9.15,28.36A51.83,51.83,0,0,1,51.72,36.21Z"/><path class="cls-7" d="M41.94,69.36a14.92,14.92,0,0,0,9.27,28.32A51.82,51.82,0,0,1,41.94,69.36Z"/><path class="cls-8" d="M53.51,101.93a14.92,14.92,0,0,0,24.15,17.46A51.82,51.82,0,0,1,53.51,101.93Z"/><path class="cls-9" d="M82,121.48a14.92,14.92,0,0,0,29.8-.07A51.83,51.83,0,0,1,82,121.48Z"/><path class="cls-10" d="M116.57,120.54A14.92,14.92,0,0,0,140.64,103,51.81,51.81,0,0,1,116.57,120.54Z"/><path class="cls-11" d="M144,99.47a14.92,14.92,0,0,0,9.14-28.36A51.82,51.82,0,0,1,144,99.47Z"/><path class="cls-12" d="M153.75,66.31A14.92,14.92,0,0,0,144.48,38,51.81,51.81,0,0,1,153.75,66.31Z"/><path class="cls-13" d="M142.18,33.74A14.92,14.92,0,0,0,118,16.28,51.82,51.82,0,0,1,142.18,33.74Z"/><ellipse class="cls-14" cx="97.64" cy="189.66" rx="97.64" ry="7.86"/></g></g></svg>'
    }

    function clouds() {
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 255 183.33"><defs><style>.cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}.cls-3{fill:url(#linear-gradient-3);}.cls-4{fill:url(#linear-gradient-4);}.cls-5{fill:url(#linear-gradient-5);}.cls-6{fill:url(#linear-gradient-6);}.cls-7{fill:url(#linear-gradient-7);}.cls-8{fill:url(#linear-gradient-8);}.cls-9{fill:url(#linear-gradient-9);}.cls-10{fill:url(#linear-gradient-10);}.cls-11{fill:url(#linear-gradient-11);}.cls-12{fill:url(#linear-gradient-12);}.cls-13{fill:url(#linear-gradient-13);}.cls-14{fill:url(#linear-gradient-14);}.cls-15{fill:url(#linear-gradient-15);}.cls-16{fill:url(#linear-gradient-16);}.cls-17{fill:url(#linear-gradient-17);}.cls-18{fill:url(#radial-gradient);}</style><linearGradient id="linear-gradient" x1="68.84" y1="-10.09" x2="71.53" y2="79.75" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feff7f"/><stop offset="0.25" stop-color="#feee72"/><stop offset="0.75" stop-color="#ffc351"/><stop offset="1" stop-color="#ffab3f"/></linearGradient><linearGradient id="linear-gradient-2" x1="55.8" y1="-52.28" x2="73.31" y2="68.9" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feff7f"/><stop offset="0.32" stop-color="#feef6e"/><stop offset="0.95" stop-color="#ffc643"/><stop offset="1" stop-color="#ffc23f"/></linearGradient><linearGradient id="linear-gradient-3" x1="70.15" y1="-11.73" x2="70.66" y2="51.86" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feffe3"/><stop offset="0.14" stop-color="#fefed2"/><stop offset="0.43" stop-color="#fefca6"/><stop offset="0.82" stop-color="#fff961"/><stop offset="1" stop-color="#fff73f"/></linearGradient><linearGradient id="linear-gradient-4" x1="-360.16" y1="330.17" x2="-370.91" y2="357.35" gradientTransform="translate(247.72 -458.87) rotate(-26.18)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-5" x1="-1070.99" y1="439.29" x2="-1081.74" y2="466.48" gradientTransform="translate(149.88 -1145.3) rotate(-62.18)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-6" x1="-1709.81" y1="109.5" x2="-1720.56" y2="136.68" gradientTransform="matrix(-0.14, -0.99, 0.99, -0.14, -332.32, -1642.76)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-7" x1="-2034.13" y1="-533.23" x2="-2044.89" y2="-506.05" gradientTransform="translate(-1015.68 -1763.12) rotate(-134.18)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-8" x1="-1917.88" y1="-1242.91" x2="-1928.63" y2="-1215.72" gradientTransform="translate(-1638.35 -1457.65) rotate(-170.18)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-9" x1="-1407.45" y1="-1749.05" x2="-1418.21" y2="-1721.87" gradientTransform="translate(-1963.64 -844.42) rotate(153.82)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-10" x1="-696.19" y1="-1858.44" x2="-706.94" y2="-1831.26" gradientTransform="translate(-1865.81 -157.98) rotate(117.82)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-11" x1="-56.08" y1="-1529.26" x2="-66.83" y2="-1502.08" gradientTransform="matrix(0.14, 0.99, -0.99, 0.14, -1383.6, 339.48)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-12" x1="266.87" y1="-886.87" x2="256.11" y2="-859.69" gradientTransform="translate(-700.24 459.83) rotate(45.82)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-13" x1="151.67" y1="-176.47" x2="140.92" y2="-149.28" gradientTransform="translate(-77.57 154.36) rotate(9.82)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-14" x1="125.03" y1="109.34" x2="125.52" y2="158.49" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f0f0f0"/><stop offset="0.21" stop-color="#eaeaea"/><stop offset="0.5" stop-color="#d9d9d9"/><stop offset="0.83" stop-color="#bdbdbd"/><stop offset="1" stop-color="#ababab"/></linearGradient><linearGradient id="linear-gradient-15" x1="155.68" y1="33.49" x2="152.41" y2="79.03" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="linear-gradient-16" x1="123.38" y1="98.81" x2="124.61" y2="151.93" xlink:href="#linear-gradient-14"/><linearGradient id="linear-gradient-17" x1="83.99" y1="66.43" x2="89.8" y2="74.7" xlink:href="#linear-gradient-15"/><radialGradient id="radial-gradient" cx="275.99" cy="-2646.08" r="65.17" gradientTransform="translate(-369.52 441.31) scale(1.8 0.1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#969696"/><stop offset="0" stop-color="#a3a3a3"/><stop offset="0" stop-color="#a1a1a1"/><stop offset="0" stop-color="#9a9a9a"/><stop offset="0.11" stop-color="#ababab"/><stop offset="0.22" stop-color="#b9b9b9"/><stop offset="0.25" stop-color="#bcbcbc"/><stop offset="0.57" stop-color="#e1e1e1"/><stop offset="0.83" stop-color="#f7f7f7"/><stop offset="1" stop-color="#fff"/></radialGradient></defs><title>Asset 4</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle class="cls-1" cx="70.64" cy="49.97" r="38.1"/><path class="cls-2" d="M32.08,50.42A38.55,38.55,0,0,1,70.64,11.87h0a38.55,38.55,0,0,1,38.55,38.55h0A38.55,38.55,0,0,1,70.64,89h0A38.55,38.55,0,0,1,32.08,50.42ZM44,23.79A37.53,37.53,0,0,0,33,50.42h0A37.53,37.53,0,0,0,44,77h0a37.54,37.54,0,0,0,26.63,11h0A37.53,37.53,0,0,0,97.26,77h0a37.53,37.53,0,0,0,11-26.63h0a37.53,37.53,0,0,0-11-26.63h0a37.53,37.53,0,0,0-26.63-11h0A37.53,37.53,0,0,0,44,23.79Z"/><path class="cls-3" d="M70.64,18.66A34.75,34.75,0,0,1,105,48.44a34.44,34.44,0,0,0-68.77,0A34.75,34.75,0,0,1,70.64,18.66Z"/><path class="cls-4" d="M82.37,10.52a11.05,11.05,0,0,0-22.08,0A38.4,38.4,0,0,1,82.37,10.52Z"/><path class="cls-5" d="M56.76,11.22a11.05,11.05,0,0,0-17.84,13A38.4,38.4,0,0,1,56.76,11.22Z"/><path class="cls-6" d="M36.46,26.83a11.05,11.05,0,0,0-6.78,21A38.41,38.41,0,0,1,36.46,26.83Z"/><path class="cls-7" d="M29.21,51.4a11.05,11.05,0,0,0,6.87,21A38.38,38.38,0,0,1,29.21,51.4Z"/><path class="cls-8" d="M37.78,75.53a11.05,11.05,0,0,0,17.9,12.94A38.4,38.4,0,0,1,37.78,75.53Z"/><path class="cls-9" d="M58.91,90A11.05,11.05,0,0,0,81,90,38.41,38.41,0,0,1,58.91,90Z"/><path class="cls-10" d="M84.51,89.32a11.05,11.05,0,0,0,17.84-13A38.41,38.41,0,0,1,84.51,89.32Z"/><path class="cls-11" d="M104.82,73.71a11.05,11.05,0,0,0,6.78-21A38.41,38.41,0,0,1,104.82,73.71Z"/><path class="cls-12" d="M112.07,49.14a11.05,11.05,0,0,0-6.87-21A38.41,38.41,0,0,1,112.07,49.14Z"/><path class="cls-13" d="M103.49,25A11.05,11.05,0,0,0,85.6,12.07,38.4,38.4,0,0,1,103.49,25Z"/><path class="cls-14" d="M225.11,97.83a38.83,38.83,0,0,0-24.59-36.12A46.94,46.94,0,0,0,107,57.32,26.53,26.53,0,0,0,66.36,79.81a26.77,26.77,0,0,0,.21,3.26,28.51,28.51,0,1,0-17.35,53.46,18.67,18.67,0,0,0,3.32.3H187.06a25.94,25.94,0,0,0,5.12-.37C211.21,133.95,225.11,117.54,225.11,97.83Z"/><path class="cls-15" d="M153.68,22.59c20.88,0,38.17,16.38,41.95,35.88a42,42,0,0,0-83-6.3C119.07,32.67,135.45,22.59,153.68,22.59Z"/><path class="cls-16" d="M186,132.67H53.77a16.11,16.11,0,0,1-2.9-.27H50.8c-16.57-2.13-23-11.24-25.39-18.39h0c2.58,12.25,11.84,20.68,24.29,22.57a31.2,31.2,0,0,0,4.08.26H186a26.56,26.56,0,0,0,5.31-.36c14.92-1.75,25.85-10.84,30.77-23.37C214.89,123.23,207.5,132,186,132.67Z"/><path class="cls-17" d="M96.59,58.55a27.19,27.19,0,0,1,8,1.19,23.3,23.3,0,0,0-35,20.14c0,.71,0,1.41.1,2.11A27.2,27.2,0,0,1,96.59,58.55Z"/><ellipse class="cls-18" cx="127.5" cy="176.25" rx="127.5" ry="7.08"/></g></g></svg>'
    }

    function rain() {
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 259.63 178.3"><defs><style>.cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}.cls-3{fill:url(#linear-gradient-3);}.cls-4{fill:url(#linear-gradient-4);}.cls-5{fill:url(#linear-gradient-5);}.cls-6{fill:url(#linear-gradient-6);}.cls-7{fill:url(#linear-gradient-7);}.cls-8{fill:url(#linear-gradient-8);}.cls-9{fill:url(#radial-gradient);}.cls-10{fill:url(#radial-gradient-2);}.cls-11{fill:url(#radial-gradient-3);}.cls-12{fill:url(#radial-gradient-4);}</style><linearGradient id="linear-gradient" x1="78.6" y1="-44.37" x2="67.27" y2="148.97" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f0f0f0"/><stop offset="0.21" stop-color="#eaeaea"/><stop offset="0.5" stop-color="#d9d9d9"/><stop offset="0.83" stop-color="#bdbdbd"/><stop offset="1" stop-color="#ababab"/></linearGradient><linearGradient id="linear-gradient-2" x1="178.25" y1="12.69" x2="175.89" y2="45.58" gradientTransform="matrix(-1, 0, 0, 1, 228.39, 0)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="linear-gradient-3" x1="154.92" y1="59.86" x2="155.81" y2="98.22" gradientTransform="matrix(-1, 0, 0, 1, 228.39, 0)" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-4" x1="126.48" y1="36.48" x2="130.68" y2="42.45" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-5" x1="139.71" y1="99.92" x2="140.2" y2="149.07" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-6" x1="170.36" y1="24.07" x2="167.08" y2="69.61" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-7" x1="138.05" y1="89.39" x2="139.28" y2="142.51" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-8" x1="98.66" y1="57.01" x2="104.48" y2="65.29" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlink:href="#linear-gradient-2"/><radialGradient id="radial-gradient" cx="158.51" cy="-2658.37" r="65.17" gradientTransform="translate(-153.51 437.52) scale(1.8 0.1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#969696"/><stop offset="0" stop-color="#a3a3a3"/><stop offset="0" stop-color="#a1a1a1"/><stop offset="0" stop-color="#9a9a9a"/><stop offset="0.11" stop-color="#ababab"/><stop offset="0.22" stop-color="#b9b9b9"/><stop offset="0.25" stop-color="#bcbcbc"/><stop offset="0.57" stop-color="#e1e1e1"/><stop offset="0.83" stop-color="#f7f7f7"/><stop offset="1" stop-color="#fff"/></radialGradient><radialGradient id="radial-gradient-2" cx="1691.52" cy="427.44" r="69.33" gradientTransform="translate(-426.21 -11.45) scale(0.33 0.33)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b5ffff"/><stop offset="1" stop-color="#0a96ff"/></radialGradient><radialGradient id="radial-gradient-3" cx="1796.65" cy="302.35" r="54.1" xlink:href="#radial-gradient-2"/><radialGradient id="radial-gradient-4" cx="1617" cy="313.62" r="44.52" xlink:href="#radial-gradient-2"/></defs><title>Asset 5</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,59.16A28,28,0,0,1,17.76,33.07,33.9,33.9,0,0,1,85.3,29.9a19.16,19.16,0,0,1,29.34,16.24,19.28,19.28,0,0,1-.15,2.35A20.59,20.59,0,1,1,127,87.1a13.52,13.52,0,0,1-2.4.22H27.48a18.73,18.73,0,0,1-3.7-.27C10,85.24,0,73.39,0,59.16Z"/><path class="cls-2" d="M51.58,4.82C36.5,4.82,24,16.65,21.29,30.73a30.35,30.35,0,0,1,60-4.55C76.58,12.1,64.75,4.82,51.58,4.82Z"/><path class="cls-3" d="M28.27,84.32h95.47a11.65,11.65,0,0,0,2.09-.19h.05c12-1.54,16.58-8.12,18.34-13.28h0c-1.86,8.84-8.55,14.94-17.54,16.3a22.49,22.49,0,0,1-2.94.19H28.27a19.19,19.19,0,0,1-3.83-.26A26.52,26.52,0,0,1,2.22,70.19C7.38,77.5,12.72,83.86,28.27,84.32Z"/><path class="cls-4" d="M92.82,30.79a19.64,19.64,0,0,0-5.77.86A16.83,16.83,0,0,1,112.34,46.2c0,.51,0,1-.07,1.52A19.64,19.64,0,0,0,92.82,30.79Z"/><path class="cls-5" d="M239.78,88.41a38.83,38.83,0,0,0-24.59-36.12,46.94,46.94,0,0,0-93.53-4.39A26.54,26.54,0,0,0,81,70.39a26.75,26.75,0,0,0,.21,3.26A28.51,28.51,0,1,0,63.89,127.1a18.68,18.68,0,0,0,3.32.3H201.74a25.94,25.94,0,0,0,5.12-.37C225.88,124.53,239.78,108.12,239.78,88.41Z"/><path class="cls-6" d="M168.35,13.18c20.88,0,38.17,16.38,41.95,35.88a42,42,0,0,0-83-6.3C133.75,23.25,150.12,13.17,168.35,13.18Z"/><path class="cls-7" d="M200.64,123.26H68.44a16.12,16.12,0,0,1-2.9-.27h-.07c-16.57-2.13-23-11.24-25.39-18.39h0c2.58,12.25,11.84,20.68,24.29,22.57a31.18,31.18,0,0,0,4.08.26H200.64a26.56,26.56,0,0,0,5.31-.36c14.92-1.75,25.85-10.84,30.77-23.37C229.56,113.81,222.17,122.63,200.64,123.26Z"/><path class="cls-8" d="M111.26,49.14a27.19,27.19,0,0,1,8,1.19,23.3,23.3,0,0,0-35,20.14c0,.71,0,1.41.1,2.11A27.2,27.2,0,0,1,111.26,49.14Z"/><ellipse class="cls-9" cx="132.13" cy="171.22" rx="127.5" ry="7.08"/><path class="cls-10" d="M153.38,136.32c0,8.37-7.74,14.89-16.19,14.9s-16.31-7-16.21-15c.1-8.37,9.35-19.32,16.49-31.6C144,117.11,153.38,127.94,153.38,136.32Z"/><path class="cls-11" d="M183.43,93.5c0,6.54-6,11.63-12.64,11.62s-12.73-5.46-12.65-11.7c.08-6.54,7.3-15.07,12.87-24.66C176.14,78.51,183.43,87,183.43,93.5Z"/><path class="cls-12" d="M121.19,96.44c0,5.38-5,9.57-10.4,9.56s-10.47-4.49-10.41-9.62c.07-5.38,6-12.41,10.59-20.29C115.19,84.1,121.19,91.06,121.19,96.44Z"/></g></g></svg>';
    }

    function snow() {
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 259.67 190.9"><defs><style>.cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}.cls-3{fill:url(#linear-gradient-3);}.cls-4{fill:url(#linear-gradient-4);}.cls-5{fill:url(#linear-gradient-5);}.cls-6{fill:url(#linear-gradient-6);}.cls-7{fill:url(#linear-gradient-7);}.cls-8{fill:url(#linear-gradient-8);}.cls-9{fill:url(#linear-gradient-9);}.cls-10{fill:url(#linear-gradient-10);}.cls-11{fill:url(#radial-gradient);}.cls-12{fill:url(#linear-gradient-11);}</style><linearGradient id="linear-gradient" x1="78.6" y1="-44.37" x2="67.27" y2="148.97" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f0f0f0"/><stop offset="0.21" stop-color="#eaeaea"/><stop offset="0.5" stop-color="#d9d9d9"/><stop offset="0.83" stop-color="#bdbdbd"/><stop offset="1" stop-color="#ababab"/></linearGradient><linearGradient id="linear-gradient-2" x1="172.16" y1="12.69" x2="169.79" y2="45.58" gradientTransform="matrix(-1, 0, 0, 1, 222.29, 0)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="linear-gradient-3" x1="148.83" y1="59.86" x2="149.72" y2="98.22" gradientTransform="matrix(-1, 0, 0, 1, 222.29, 0)" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-4" x1="120.38" y1="36.48" x2="124.58" y2="42.46" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-5" x1="76.04" y1="22.19" x2="57.29" y2="84.69" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5cedff"/><stop offset="1" stop-color="#0a96ff"/></linearGradient><linearGradient id="linear-gradient-6" x1="137.71" y1="103.41" x2="138.2" y2="152.56" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-7" x1="168.36" y1="27.56" x2="165.08" y2="73.1" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-8" x1="136.05" y1="92.88" x2="137.28" y2="146" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-9" x1="96.66" y1="60.5" x2="102.48" y2="68.77" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-10" x1="194.27" y1="-10.8" x2="152.5" y2="128.44" xlink:href="#linear-gradient-5"/><radialGradient id="radial-gradient" cx="157.18" cy="-489.65" r="65.17" gradientTransform="translate(-151.07 233.46) scale(1.8 0.1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#969696"/><stop offset="0" stop-color="#a3a3a3"/><stop offset="0" stop-color="#a1a1a1"/><stop offset="0" stop-color="#9a9a9a"/><stop offset="0.11" stop-color="#ababab"/><stop offset="0.22" stop-color="#b9b9b9"/><stop offset="0.25" stop-color="#bcbcbc"/><stop offset="0.57" stop-color="#e1e1e1"/><stop offset="0.83" stop-color="#f7f7f7"/><stop offset="1" stop-color="#fff"/></radialGradient><linearGradient id="linear-gradient-11" x1="100.36" y1="63.14" x2="70.93" y2="161.25" xlink:href="#linear-gradient-5"/></defs><title>Asset 8</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,59.16A28,28,0,0,1,17.76,33.07,33.9,33.9,0,0,1,85.3,29.9,19.15,19.15,0,0,1,114.5,48.49,20.59,20.59,0,1,1,127,87.1a13.56,13.56,0,0,1-2.4.22H27.48a18.77,18.77,0,0,1-3.7-.27C10,85.24,0,73.39,0,59.16Z"/><path class="cls-2" d="M51.58,4.82C36.5,4.82,24,16.65,21.29,30.73a30.35,30.35,0,0,1,60-4.55C76.58,12.1,64.75,4.82,51.58,4.82Z"/><path class="cls-3" d="M28.27,84.32h95.47a11.65,11.65,0,0,0,2.09-.19h.05c12-1.54,16.58-8.12,18.34-13.28h0c-1.86,8.84-8.55,14.94-17.54,16.3a22.4,22.4,0,0,1-2.94.19H28.27a19.15,19.15,0,0,1-3.83-.26A26.52,26.52,0,0,1,2.22,70.19C7.38,77.5,12.72,83.86,28.27,84.32Z"/><path class="cls-4" d="M92.82,30.79a19.62,19.62,0,0,0-5.77.86A16.83,16.83,0,0,1,112.34,46.2c0,.51,0,1-.07,1.52A19.64,19.64,0,0,0,92.82,30.79Z"/><path class="cls-5" d="M80.42,67.17,77.5,65.49l2.7,0a1.15,1.15,0,1,0,0-2.31l-6.56.11-4.46-2.57,4.72-2.72L79.28,59a1.15,1.15,0,0,0,.46-2.26L76.9,56.2l3.52-2a2.33,2.33,0,0,0-2.33-4l-2.93,1.69,1.33-2.23a1.15,1.15,0,0,0-2-1.18l-3.43,5.77-4.25,2.45v-5.7L70.33,46a1.15,1.15,0,0,0-1.88-1.34l-1.63,2.29V43.63a2.33,2.33,0,1,0-4.66,0V47l-1.6-2.25A1.15,1.15,0,0,0,58.68,46l3.48,4.91v5.68l-5.15-3-2-5.09a1.15,1.15,0,0,0-2.15.85l.94,2.39-2.9-1.68a2.33,2.33,0,0,0-2.33,4l2.94,1.7-3,.12a1.15,1.15,0,0,0,.09,2.31L55.26,58l4.57,2.64-4.92,2.84-6.13-.33a1.15,1.15,0,0,0-.12,2.3l2.59.14-2.68,1.55a2.33,2.33,0,0,0,2.33,4l3-1.76-1.13,2.73a1.15,1.15,0,0,0,2.13.88l2.27-5.5,4.95-2.85V71.3l-3.42,4.83a1.15,1.15,0,0,0,1.88,1.33l1.54-2.17v2.42a2.33,2.33,0,1,0,4.66,0V75.14l1.69,2.38a1.15,1.15,0,0,0,1.88-1.34l-3.57-5V64.7l4.87,2.81,1.94,5.26A1.15,1.15,0,1,0,75.8,72l-1-2.66,3.27,1.89a2.33,2.33,0,0,0,2.33-4ZM64.27,63.54a3,3,0,1,1,3-3A3,3,0,0,1,64.27,63.54Z"/><path class="cls-6" d="M237.79,91.9A38.83,38.83,0,0,0,213.2,55.78a46.94,46.94,0,0,0-93.53-4.39A26.54,26.54,0,0,0,79,73.88a26.74,26.74,0,0,0,.21,3.26,28.51,28.51,0,1,0-17.35,53.46,18.59,18.59,0,0,0,3.32.3H199.74a25.94,25.94,0,0,0,5.12-.37C223.88,128,237.79,111.61,237.79,91.9Z"/><path class="cls-7" d="M166.36,16.66c20.88,0,38.17,16.38,41.95,35.88a42,42,0,0,0-83-6.3C131.75,26.74,148.12,16.66,166.36,16.66Z"/><path class="cls-8" d="M198.64,126.75H66.44a16.12,16.12,0,0,1-2.9-.27h-.07c-16.57-2.13-23-11.24-25.39-18.39h0c2.58,12.25,11.84,20.68,24.29,22.57a31.36,31.36,0,0,0,4.08.26H198.64a26.56,26.56,0,0,0,5.31-.36c14.92-1.75,25.85-10.84,30.77-23.38C227.56,117.3,220.17,126.11,198.64,126.75Z"/><path class="cls-9" d="M109.26,52.62a27.22,27.22,0,0,1,8,1.19A23.3,23.3,0,0,0,82.23,74c0,.71,0,1.41.1,2.11A27.2,27.2,0,0,1,109.26,52.62Z"/><path class="cls-10" d="M204,89.42l-6.5-3.75,6-.1a2.57,2.57,0,1,0-.08-5.14l-14.61.23-9.93-5.73,10.52-6.07,12,2.43a2.57,2.57,0,1,0,1-5L196.19,65,204,60.43a5.19,5.19,0,1,0-5.19-9l-6.53,3.77,3-5a2.57,2.57,0,0,0-4.42-2.63l-7.64,12.86-9.47,5.46V53.22l7.82-11a2.57,2.57,0,0,0-4.19-3l-3.62,5.11V37a5.19,5.19,0,1,0-10.38,0v7.43l-3.56-5a2.57,2.57,0,0,0-4.19,3l7.75,10.94V65.93l-11.48-6.63L147.42,48a2.57,2.57,0,0,0-4.78,1.89l2.1,5.33-6.47-3.73a5.19,5.19,0,1,0-5.19,9l6.55,3.78-6.71.26a2.57,2.57,0,0,0,.2,5.14L148,69l10.18,5.88-11,6.33-13.66-.74a2.57,2.57,0,0,0-.28,5.13l5.78.31-6,3.45a5.19,5.19,0,1,0,5.19,9L145,94.49l-2.51,6.08a2.57,2.57,0,0,0,4.75,2l5.05-12.26,11-6.36V98.61l-7.62,10.75a2.57,2.57,0,1,0,4.2,3l3.43-4.84v5.4a5.19,5.19,0,0,0,10.38,0v-5.72l3.75,5.29a2.57,2.57,0,0,0,4.2-3l-7.95-11.21V83.92l10.84,6.26,4.32,11.73a2.57,2.57,0,1,0,4.82-1.78l-2.19-5.93,7.29,4.21a5.19,5.19,0,1,0,5.19-9Zm-36-8.1a6.72,6.72,0,1,1,6.72-6.72A6.73,6.73,0,0,1,168.06,81.32Z"/><ellipse class="cls-11" cx="132.17" cy="183.82" rx="127.5" ry="7.08"/><path class="cls-12" d="M107.24,133.76l-4.58-2.64,4.24-.07a1.81,1.81,0,1,0-.06-3.62l-10.29.17-7-4L97,119.27l8.49,1.71a1.81,1.81,0,1,0,.72-3.55l-4.46-.9,5.53-3.19a3.66,3.66,0,1,0-3.66-6.33L99,109.65l2.08-3.5A1.81,1.81,0,0,0,98,104.3l-5.38,9.06-6.67,3.85v-9l5.51-7.77a1.81,1.81,0,0,0-3-2.1L85.9,102v-5.2a3.66,3.66,0,1,0-7.32,0V102l-2.51-3.54a1.81,1.81,0,0,0-3,2.1l5.46,7.71v8.92l-8.09-4.67-3.15-8A1.81,1.81,0,1,0,64,105.87l1.48,3.76L60.9,107a3.66,3.66,0,1,0-3.66,6.33L61.86,116l-4.73.18a1.81,1.81,0,1,0,.14,3.62l10.48-.4,7.18,4.14L67.2,128l-9.62-.52a1.81,1.81,0,0,0-.2,3.62l4.07.22-4.21,2.43a3.66,3.66,0,1,0,3.66,6.33l4.78-2.76-1.77,4.29A1.81,1.81,0,0,0,67.26,143l3.56-8.64,7.76-4.48v10.35l-5.37,7.57a1.81,1.81,0,1,0,3,2.1l2.42-3.41v3.8a3.66,3.66,0,1,0,7.32,0v-4L88.55,150a1.81,1.81,0,0,0,3-2.1L85.9,140V129.88l7.64,4.41,3,8.27a1.81,1.81,0,1,0,3.4-1.25l-1.54-4.18,5.14,3a3.66,3.66,0,1,0,3.66-6.33Zm-25.35-5.71a4.74,4.74,0,1,1,4.74-4.74A4.74,4.74,0,0,1,81.89,128.05Z"/></g></g></svg>';
    }

    function thunder() {
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 290.87 196.41"><defs><style>.cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}.cls-3{fill:url(#linear-gradient-3);}.cls-4{fill:url(#linear-gradient-4);}.cls-5{fill:url(#linear-gradient-5);}.cls-6{fill:url(#linear-gradient-6);}.cls-7{fill:url(#linear-gradient-7);}.cls-8{fill:url(#linear-gradient-8);}.cls-9{fill:url(#linear-gradient-9);}.cls-10{fill:url(#linear-gradient-10);}.cls-11{fill:url(#radial-gradient);}</style><linearGradient id="linear-gradient" x1="106.3" y1="-44.37" x2="94.96" y2="148.97" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f0f0f0"/><stop offset="0.21" stop-color="#eaeaea"/><stop offset="0.5" stop-color="#d9d9d9"/><stop offset="0.83" stop-color="#bdbdbd"/><stop offset="1" stop-color="#ababab"/></linearGradient><linearGradient id="linear-gradient-2" x1="730.84" y1="12.69" x2="728.47" y2="45.58" gradientTransform="matrix(-1, 0, 0, 1, 808.67, 0)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="linear-gradient-3" x1="707.51" y1="59.86" x2="708.4" y2="98.22" gradientTransform="matrix(-1, 0, 0, 1, 808.67, 0)" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-4" x1="679.07" y1="36.48" x2="683.27" y2="42.46" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-5" x1="159.4" y1="111.92" x2="159.89" y2="161.07" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-6" x1="190.05" y1="36.07" x2="186.77" y2="81.61" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-7" x1="157.75" y1="101.39" x2="158.98" y2="154.51" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-8" x1="118.36" y1="69.01" x2="124.17" y2="77.29" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-9" x1="258.43" y1="62.5" x2="134.43" y2="167.5" gradientTransform="translate(8.49 -41.11) rotate(0.78)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feff7f"/><stop offset="0.17" stop-color="#fef679"/><stop offset="0.44" stop-color="#fedf6a"/><stop offset="0.77" stop-color="#ffb952"/><stop offset="1" stop-color="#ff9c3f"/></linearGradient><linearGradient id="linear-gradient-10" x1="232.09" y1="63.41" x2="146.09" y2="198.91" gradientTransform="translate(8.49 -41.11) rotate(0.78)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feffe3"/><stop offset="0.14" stop-color="#fefed2"/><stop offset="0.43" stop-color="#fefca6"/><stop offset="0.82" stop-color="#fff961"/><stop offset="1" stop-color="#fff73f"/></linearGradient><radialGradient id="radial-gradient" cx="304.95" cy="-457.11" r="65.17" gradientTransform="translate(-480.96 235.72) scale(2.05 0.1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#969696"/><stop offset="0" stop-color="#a3a3a3"/><stop offset="0" stop-color="#a1a1a1"/><stop offset="0" stop-color="#9a9a9a"/><stop offset="0.11" stop-color="#ababab"/><stop offset="0.22" stop-color="#b9b9b9"/><stop offset="0.25" stop-color="#bcbcbc"/><stop offset="0.57" stop-color="#e1e1e1"/><stop offset="0.83" stop-color="#f7f7f7"/><stop offset="1" stop-color="#fff"/></radialGradient></defs><title>Asset 7</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M27.69,59.16A28,28,0,0,1,45.45,33.07,33.9,33.9,0,0,1,113,29.9a19.16,19.16,0,0,1,29.34,16.24,19.27,19.27,0,0,1-.15,2.35,20.59,20.59,0,1,1,12.53,38.6,13.56,13.56,0,0,1-2.4.22H55.17a18.76,18.76,0,0,1-3.7-.27C37.73,85.24,27.69,73.39,27.69,59.16Z"/><path class="cls-2" d="M79.28,4.82C64.2,4.82,51.71,16.65,49,30.73a30.35,30.35,0,0,1,60-4.55C104.27,12.1,92.45,4.82,79.28,4.82Z"/><path class="cls-3" d="M56,84.32h95.47a11.65,11.65,0,0,0,2.09-.19h.05c12-1.54,16.58-8.12,18.34-13.28h0c-1.86,8.84-8.55,14.94-17.54,16.3a22.4,22.4,0,0,1-2.94.19H56a19.15,19.15,0,0,1-3.83-.26A26.52,26.52,0,0,1,29.91,70.19C35.08,77.5,40.42,83.86,56,84.32Z"/><path class="cls-4" d="M120.51,30.79a19.62,19.62,0,0,0-5.77.86A16.83,16.83,0,0,1,140,46.2c0,.51,0,1-.07,1.52A19.64,19.64,0,0,0,120.51,30.79Z"/><path class="cls-5" d="M259.48,100.41a38.83,38.83,0,0,0-24.59-36.12,46.94,46.94,0,0,0-93.53-4.39,26.54,26.54,0,0,0-40.63,22.49,26.74,26.74,0,0,0,.21,3.26,28.51,28.51,0,1,0-17.35,53.45,18.59,18.59,0,0,0,3.32.3H221.43a25.93,25.93,0,0,0,5.12-.37C245.57,136.53,259.48,120.12,259.48,100.41Z"/><path class="cls-6" d="M188,25.18c20.88,0,38.17,16.38,41.95,35.88a42,42,0,0,0-83-6.3C153.44,35.25,169.81,25.17,188,25.18Z"/><path class="cls-7" d="M220.33,135.26H88.14a16.12,16.12,0,0,1-2.9-.27h-.07c-16.57-2.13-23-11.24-25.39-18.39h0c2.58,12.25,11.84,20.68,24.29,22.57a31.36,31.36,0,0,0,4.08.26H220.33a26.56,26.56,0,0,0,5.31-.36c14.92-1.75,25.85-10.84,30.77-23.37C249.25,125.81,241.86,134.63,220.33,135.26Z"/><path class="cls-8" d="M131,61.14a27.19,27.19,0,0,1,8,1.19,23.3,23.3,0,0,0-35,20.14c0,.71,0,1.41.1,2.11A27.2,27.2,0,0,1,131,61.14Z"/><path class="cls-9" d="M218.2,55.78c1.4-1.64,4.61-5.31-2.81-4.94l-37.84-.43a4.85,4.85,0,0,0-4.86,3.24l-18.58,55.06c-.6,1.71-2,5.66,1.41,5.8l25.31-.14L152,167.91l59.39-62.54s3-3.06-1.59-2.82l-34.46,1.53Z"/><path class="cls-10" d="M212,57.89c1.34-1.54,2-3.11-2.13-2.55h0l-42.21,50.5c-1.82,2.23.25,2.24,1.36,2.2l35.13-1.26-29.54,32.67,31.56-32.92c.47-.5,1.11-1.58-.74-1.52l-35.11,1.3Z"/><ellipse class="cls-11" cx="145.43" cy="189.33" rx="145.43" ry="7.08"/></g></g></svg>';
    }

    $.ajax({
        method: "GET",
        url: "http://ipinfo.io/json",
        success: function (data) {
            $(".city").html(data.city + ', ' + data.country);
        }
    }).done(function (data) {
        $.ajax({
            method: "get",
            url: api + data.city + key + units,
            success: function (data) {
                var weather      = (data.weather[0].main).toLowerCase(),
                    celsius      = (data.main.temp).toFixed(1),
                    celResult    = celsius + " &#x2103;" + '<br> ' + data.weather[0].main,
                    fahrenheit   = (celsius * 1.8 + 32).toFixed(1),
                    fahrenResult = fahrenheit + " &#x2109;" + '<br> ' + data.weather[0].main;

                $(".picture").html(eval(weather)());
                $(".celsius").html(celResult);
                $(".fahren").html(fahrenResult).hide();
                $(".fahrenheit").on("click", function () {

                    $("p").toggle();
                });
            }
        });
    });

});