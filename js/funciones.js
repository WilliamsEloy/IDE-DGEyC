function seleccionarCapa() {
    var id = $(this).attr('id');
    var capa = $('label[for="' + id + '"]').text();
    for (var i = 0, ii = layers.length; i < ii; ++i) {
        layers[i].setVisible(layers[i].get('title') === capa);
    }
}

function capasBase() {
    $('#panel-capas-base').toggle('slide', {}, 500);
}

function capasDgeyc() {
    $('#panel-capas-dgeyc').toggle('slide', {}, 500);
}