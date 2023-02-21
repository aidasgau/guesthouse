var map = L.map('map').setView([55.9206, 21.0601], 15);
var marker = L.marker([55.9206, 21.0601]).addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicnNhcG9sc2t5IiwiYSI6ImNreGV6dnhvZDFkcWMyb3BkaDR3djVkd2sifQ.RT6Zp6KYEtL7C3uuxkFbCw'
}).addTo(map);
// 55.9206, 21.0601
// pk.eyJ1IjoicnNhcG9sc2t5IiwiYSI6ImNreGV6dnhvZDFkcWMyb3BkaDR3djVkd2sifQ.RT6Zp6KYEtL7C3uuxkFbCw