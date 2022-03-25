L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiemFzdGF2byIsImEiOiJjbDBuMjBsZjAxNWRyM2Vydjhpd3R5ZHFnIn0.SVgUJnGAYZlbqBlauFg6-g'
}).addTo(map);
L.geoJson(tamu).addTo(map);
function getColor(d) {
    return '#800000';
}
function style(feature) {
    return {
        fillColor: getColor(feature),
        weight: 2,
        opacity: 1,
        color: 'maroon',
        dashArray: '0',
        fillOpacity: 0.7
    };
}

L.geoJson(tamu, {style: style}).addTo(map);
function highlightFeature(e) {{
    var layer = e.target;
    info.update(layer.feature.properties);
}
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}
function resetHighlight(e) {{
    
    info.update();
}
    geojson.resetStyle(e.target);
}
var geojson;
// ... our listeners
geojson = L.geoJson();
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(tamu, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (props) {
    this._div.innerHTML = '<h4>Texas A&M University</h4>' +  (props ?
        '<b>' + props.BldgAbbr + '</b><br />' + props.BldgName
        : 'Hover over a building');
};

info.addTo(map);