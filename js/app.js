/**
 * Define a namespace for the application.
 */
window.app = {};
var app = window.app;

/**
 * Lógica del boton imprimir.
 * @param opt_options
 * @constructor
 */
app.ImprimirControl = function(opt_options) {

    var options = opt_options || {};

    var button = document.getElementById('imprimir');

    var handleImprimir = function() {
        //TODO imprimir
    };

    button.addEventListener('click', handleImprimir, false);
    button.addEventListener('touchstart', handleImprimir, false);

    var element = document.getElementById('boton-imprimir');

    ol.control.Control.call(this, {
        element: element,
        target: options.target
    });
};

ol.inherits(app.ImprimirControl, ol.control.Control);

/**
 * Lógica del boton Capas
 * @param opt_options
 * @constructor
 */

app.CapasControl = function(opt_options) {

    var options = opt_options || {};

    var button = document.getElementById('capas');

    var handleCapas = function() {
        $('#panel-capas').toggle('slide', {}, 500);
    };

    button.addEventListener('click', handleCapas, false);
    button.addEventListener('touchstart', handleCapas, false);

    var element = document.getElementById('boton-capas');

    ol.control.Control.call(this, {
        element: element,
        target: options.target
    });
};

ol.inherits(app.CapasControl, ol.control.Control);

/**
 * Layers (capas base)
 */

var layers = [
    new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: "http://ide.estadistica.chubut.gov.ar/geoserver/wms",
            params: {layers: "rural:basemap", transparent: 'false', format: 'image/jpeg', tiled: 'true'},
            serverType: 'geoserver'
        }),
        visible: false,
        title: 'IGN'
    }),
    new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: false,
        title: 'Open Street Map'
    }),
    new ol.layer.Tile({
        source: new ol.source.BingMaps({
            key: 'An-hnXUInDJCCN2NgVvNDgZh5h7Otc4CxXZi9TEgJcqjuAu3W9MSzXoAqkxhB1C5',
            imagerySet: 'Road'
        }),
        visible: false,
        title: 'Bing Road'
    }),
    new ol.layer.Tile({
        source: new ol.source.BingMaps({
            key: 'An-hnXUInDJCCN2NgVvNDgZh5h7Otc4CxXZi9TEgJcqjuAu3W9MSzXoAqkxhB1C5',
            imagerySet: 'Aerial'
        }),
        visible: false,
        title: 'Bing Aerial'
    }),
    new ol.layer.Tile({
        source: new ol.source.BingMaps({
            key: 'An-hnXUInDJCCN2NgVvNDgZh5h7Otc4CxXZi9TEgJcqjuAu3W9MSzXoAqkxhB1C5',
            imagerySet: 'AerialWithLabels'
        }),
        visible: false,
        title: 'Bing Hybrid'
    }),
    new ol.layer.Tile({
        title: 'Sin capa Base'
    })
];

/**
 * Creación del mapa
 * @type {ol.Map}
 */
var map = new ol.Map({
    layers: layers,
    target: 'map',
    controls: ol.control.defaults().extend([
        new app.ImprimirControl(),
        new app.CapasControl()
    ]),
    view: new ol.View({
        center: ol.proj.transform([-68, -43], 'EPSG:4326', 'EPSG:3857'),
        zoom: 6,
        maxZoom: 30,
        minZoom: 6
    }),
});

$('.ol-zoom-in, .ol-zoom-out').tooltip({
    placement: 'right'
});
$('[data-toggle="tooltip"]').tooltip({
    placement: 'right'
});
