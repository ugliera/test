var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_50100_0 = new ol.format.GeoJSON();
var features_50100_0 = format_50100_0.readFeatures(json_50100_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_50100_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_50100_0.addFeatures(features_50100_0);var lyr_50100_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_50100_0, 
                style: style_50100_0,
                title: '<img src="styles/legend/50100_0.png" /> 50-100'
            });var format_2050_1 = new ol.format.GeoJSON();
var features_2050_1 = format_2050_1.readFeatures(json_2050_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2050_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2050_1.addFeatures(features_2050_1);var lyr_2050_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2050_1, 
                style: style_2050_1,
                title: '<img src="styles/legend/2050_1.png" /> 20-50'
            });var format_1020_2 = new ol.format.GeoJSON();
var features_1020_2 = format_1020_2.readFeatures(json_1020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1020_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_1020_2.addFeatures(features_1020_2);var lyr_1020_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1020_2, 
                style: style_1020_2,
                title: '<img src="styles/legend/1020_2.png" /> 10-20'
            });var format_010_3 = new ol.format.GeoJSON();
var features_010_3 = format_010_3.readFeatures(json_010_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_010_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_010_3.addFeatures(features_010_3);var lyr_010_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_010_3, 
                style: style_010_3,
                title: '<img src="styles/legend/010_3.png" /> 0-10'
            });

lyr_50100_0.setVisible(true);lyr_2050_1.setVisible(true);lyr_1020_2.setVisible(true);lyr_010_3.setVisible(true);
var layersList = [baseLayer,lyr_50100_0,lyr_2050_1,lyr_1020_2,lyr_010_3];
lyr_50100_0.set('fieldAliases', {'ID': 'ID', 'NOM_COM': 'NOM_COM', 'NOM_COM_M': 'NOM_COM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'X_COM': 'X_COM', 'Y_COM': 'Y_COM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'INSEE_ARR': 'INSEE_ARR', 'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'NOM_REG': 'NOM_REG', 'INSEE_REG': 'INSEE_REG', 'a_INSEE_CO': 'a_INSEE_CO', 'a_SAU_TOT': 'a_SAU_TOT', 'a_cultureb': 'a_cultureb', 'a_supcultb': 'a_supcultb', 'a_Pcultmaj': 'a_Pcultmaj', 'a_BIOSUR_s': 'a_BIOSUR_s', 'a_P_abinsa': 'a_P_abinsa', 'P_ABinSAU': 'P_ABinSAU', 'P_cultmaj': 'P_cultmaj', 'index': 'index', 'orig_ogc_f': 'orig_ogc_f', });
lyr_2050_1.set('fieldAliases', {'ID': 'ID', 'NOM_COM': 'NOM_COM', 'NOM_COM_M': 'NOM_COM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'X_COM': 'X_COM', 'Y_COM': 'Y_COM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'INSEE_ARR': 'INSEE_ARR', 'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'NOM_REG': 'NOM_REG', 'INSEE_REG': 'INSEE_REG', 'a_INSEE_CO': 'a_INSEE_CO', 'a_SAU_TOT': 'a_SAU_TOT', 'a_cultureb': 'a_cultureb', 'a_supcultb': 'a_supcultb', 'a_Pcultmaj': 'a_Pcultmaj', 'a_BIOSUR_s': 'a_BIOSUR_s', 'a_P_abinsa': 'a_P_abinsa', 'P_ABinSAU': 'P_ABinSAU', 'P_cultmaj': 'P_cultmaj', 'index': 'index', 'orig_ogc_f': 'orig_ogc_f', });
lyr_1020_2.set('fieldAliases', {'ID': 'ID', 'NOM_COM': 'NOM_COM', 'NOM_COM_M': 'NOM_COM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'X_COM': 'X_COM', 'Y_COM': 'Y_COM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'INSEE_ARR': 'INSEE_ARR', 'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'NOM_REG': 'NOM_REG', 'INSEE_REG': 'INSEE_REG', 'a_INSEE_CO': 'a_INSEE_CO', 'a_SAU_TOT': 'a_SAU_TOT', 'a_cultureb': 'a_cultureb', 'a_supcultb': 'a_supcultb', 'a_Pcultmaj': 'a_Pcultmaj', 'a_BIOSUR_s': 'a_BIOSUR_s', 'a_P_abinsa': 'a_P_abinsa', 'P_ABinSAU': 'P_ABinSAU', 'P_cultmaj': 'P_cultmaj', 'index': 'index', 'orig_ogc_f': 'orig_ogc_f', });
lyr_010_3.set('fieldAliases', {'ID': 'ID', 'NOM_COM': 'NOM_COM', 'NOM_COM_M': 'NOM_COM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'X_COM': 'X_COM', 'Y_COM': 'Y_COM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'INSEE_ARR': 'INSEE_ARR', 'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'NOM_REG': 'NOM_REG', 'INSEE_REG': 'INSEE_REG', 'a_INSEE_CO': 'a_INSEE_CO', 'a_SAU_TOT': 'a_SAU_TOT', 'a_cultureb': 'a_cultureb', 'a_supcultb': 'a_supcultb', 'a_Pcultmaj': 'a_Pcultmaj', 'a_BIOSUR_s': 'a_BIOSUR_s', 'a_P_abinsa': 'a_P_abinsa', 'P_ABinSAU': 'P_ABinSAU', 'P_cultmaj': 'P_cultmaj', 'index': 'index', 'orig_ogc_f': 'orig_ogc_f', });
lyr_50100_0.set('fieldImages', {'ID': 'TextEdit', 'NOM_COM': 'TextEdit', 'NOM_COM_M': 'TextEdit', 'INSEE_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_COM': 'TextEdit', 'Y_COM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'NOM_REG': 'TextEdit', 'INSEE_REG': 'TextEdit', 'a_INSEE_CO': 'TextEdit', 'a_SAU_TOT': 'TextEdit', 'a_cultureb': 'TextEdit', 'a_supcultb': 'TextEdit', 'a_Pcultmaj': 'TextEdit', 'a_BIOSUR_s': 'TextEdit', 'a_P_abinsa': 'TextEdit', 'P_ABinSAU': 'TextEdit', 'P_cultmaj': 'TextEdit', 'index': 'TextEdit', 'orig_ogc_f': 'TextEdit', });
lyr_2050_1.set('fieldImages', {'ID': 'TextEdit', 'NOM_COM': 'TextEdit', 'NOM_COM_M': 'TextEdit', 'INSEE_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_COM': 'TextEdit', 'Y_COM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'NOM_REG': 'TextEdit', 'INSEE_REG': 'TextEdit', 'a_INSEE_CO': 'TextEdit', 'a_SAU_TOT': 'TextEdit', 'a_cultureb': 'TextEdit', 'a_supcultb': 'TextEdit', 'a_Pcultmaj': 'TextEdit', 'a_BIOSUR_s': 'TextEdit', 'a_P_abinsa': 'TextEdit', 'P_ABinSAU': 'TextEdit', 'P_cultmaj': 'TextEdit', 'index': 'TextEdit', 'orig_ogc_f': 'TextEdit', });
lyr_1020_2.set('fieldImages', {'ID': 'TextEdit', 'NOM_COM': 'TextEdit', 'NOM_COM_M': 'TextEdit', 'INSEE_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_COM': 'TextEdit', 'Y_COM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'NOM_REG': 'TextEdit', 'INSEE_REG': 'TextEdit', 'a_INSEE_CO': 'TextEdit', 'a_SAU_TOT': 'TextEdit', 'a_cultureb': 'TextEdit', 'a_supcultb': 'TextEdit', 'a_Pcultmaj': 'TextEdit', 'a_BIOSUR_s': 'TextEdit', 'a_P_abinsa': 'TextEdit', 'P_ABinSAU': 'TextEdit', 'P_cultmaj': 'TextEdit', 'index': 'TextEdit', 'orig_ogc_f': 'TextEdit', });
lyr_010_3.set('fieldImages', {'ID': 'TextEdit', 'NOM_COM': 'TextEdit', 'NOM_COM_M': 'TextEdit', 'INSEE_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_COM': 'TextEdit', 'Y_COM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'NOM_REG': 'TextEdit', 'INSEE_REG': 'TextEdit', 'a_INSEE_CO': 'TextEdit', 'a_SAU_TOT': 'TextEdit', 'a_cultureb': 'TextEdit', 'a_supcultb': 'TextEdit', 'a_Pcultmaj': 'TextEdit', 'a_BIOSUR_s': 'TextEdit', 'a_P_abinsa': 'TextEdit', 'P_ABinSAU': 'TextEdit', 'P_cultmaj': 'TextEdit', 'index': 'TextEdit', 'orig_ogc_f': 'TextEdit', });
lyr_50100_0.set('fieldLabels', {'ID': 'no label', 'NOM_COM': 'no label', 'NOM_COM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'X_COM': 'no label', 'Y_COM': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'INSEE_ARR': 'no label', 'NOM_DEP': 'no label', 'INSEE_DEP': 'no label', 'NOM_REG': 'no label', 'INSEE_REG': 'no label', 'a_INSEE_CO': 'no label', 'a_SAU_TOT': 'no label', 'a_cultureb': 'no label', 'a_supcultb': 'no label', 'a_Pcultmaj': 'no label', 'a_BIOSUR_s': 'no label', 'a_P_abinsa': 'no label', 'P_ABinSAU': 'no label', 'P_cultmaj': 'no label', 'index': 'no label', 'orig_ogc_f': 'no label', });
lyr_2050_1.set('fieldLabels', {'ID': 'no label', 'NOM_COM': 'no label', 'NOM_COM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'X_COM': 'no label', 'Y_COM': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'INSEE_ARR': 'no label', 'NOM_DEP': 'no label', 'INSEE_DEP': 'no label', 'NOM_REG': 'no label', 'INSEE_REG': 'no label', 'a_INSEE_CO': 'no label', 'a_SAU_TOT': 'no label', 'a_cultureb': 'no label', 'a_supcultb': 'no label', 'a_Pcultmaj': 'no label', 'a_BIOSUR_s': 'no label', 'a_P_abinsa': 'no label', 'P_ABinSAU': 'no label', 'P_cultmaj': 'no label', 'index': 'no label', 'orig_ogc_f': 'no label', });
lyr_1020_2.set('fieldLabels', {'ID': 'no label', 'NOM_COM': 'no label', 'NOM_COM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'X_COM': 'no label', 'Y_COM': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'INSEE_ARR': 'no label', 'NOM_DEP': 'no label', 'INSEE_DEP': 'no label', 'NOM_REG': 'no label', 'INSEE_REG': 'no label', 'a_INSEE_CO': 'no label', 'a_SAU_TOT': 'no label', 'a_cultureb': 'no label', 'a_supcultb': 'no label', 'a_Pcultmaj': 'no label', 'a_BIOSUR_s': 'no label', 'a_P_abinsa': 'no label', 'P_ABinSAU': 'no label', 'P_cultmaj': 'no label', 'index': 'no label', 'orig_ogc_f': 'no label', });
lyr_010_3.set('fieldLabels', {'ID': 'no label', 'NOM_COM': 'no label', 'NOM_COM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'X_COM': 'no label', 'Y_COM': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'INSEE_ARR': 'no label', 'NOM_DEP': 'no label', 'INSEE_DEP': 'no label', 'NOM_REG': 'no label', 'INSEE_REG': 'no label', 'a_INSEE_CO': 'no label', 'a_SAU_TOT': 'no label', 'a_cultureb': 'no label', 'a_supcultb': 'no label', 'a_Pcultmaj': 'no label', 'a_BIOSUR_s': 'no label', 'a_P_abinsa': 'no label', 'P_ABinSAU': 'no label', 'P_cultmaj': 'no label', 'index': 'no label', 'orig_ogc_f': 'no label', });
lyr_010_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});