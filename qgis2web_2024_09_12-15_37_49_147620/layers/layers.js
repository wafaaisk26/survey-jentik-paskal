var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMCIMAHI_2 = new ol.format.GeoJSON();
var features_ADMCIMAHI_2 = format_ADMCIMAHI_2.readFeatures(json_ADMCIMAHI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMCIMAHI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMCIMAHI_2.addFeatures(features_ADMCIMAHI_2);
var lyr_ADMCIMAHI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMCIMAHI_2, 
                style: style_ADMCIMAHI_2,
                popuplayertitle: "ADM CIMAHI",
                interactive: true,
                title: '<img src="styles/legend/ADMCIMAHI_2.png" /> ADM CIMAHI'
            });
var format_vektorreva_3 = new ol.format.GeoJSON();
var features_vektorreva_3 = format_vektorreva_3.readFeatures(json_vektorreva_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vektorreva_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vektorreva_3.addFeatures(features_vektorreva_3);
var lyr_vektorreva_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vektorreva_3, 
                style: style_vektorreva_3,
                popuplayertitle: "vektor reva",
                interactive: true,
                title: '<img src="styles/legend/vektorreva_3.png" /> vektor reva'
            });
var format_SUNGAI_AR_25K_4 = new ol.format.GeoJSON();
var features_SUNGAI_AR_25K_4 = format_SUNGAI_AR_25K_4.readFeatures(json_SUNGAI_AR_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_25K_4.addFeatures(features_SUNGAI_AR_25K_4);
var lyr_SUNGAI_AR_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_AR_25K_4, 
                style: style_SUNGAI_AR_25K_4,
                popuplayertitle: "SUNGAI_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_25K_4.png" /> SUNGAI_AR_25K'
            });
var format_Buffered_5 = new ol.format.GeoJSON();
var features_Buffered_5 = format_Buffered_5.readFeatures(json_Buffered_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_5.addFeatures(features_Buffered_5);
var lyr_Buffered_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_5, 
                style: style_Buffered_5,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_5.png" /> Buffered'
            });

lyr_OSMStandard_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_ADMCIMAHI_2.setVisible(true);lyr_vektorreva_3.setVisible(true);lyr_SUNGAI_AR_25K_4.setVisible(true);lyr_Buffered_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_OpenStreetMap_1,lyr_ADMCIMAHI_2,lyr_vektorreva_3,lyr_SUNGAI_AR_25K_4,lyr_Buffered_5];
lyr_ADMCIMAHI_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_vektorreva_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SUNGAI_AR_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Buffered_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ADMCIMAHI_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_vektorreva_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SUNGAI_AR_25K_4.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Buffered_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_ADMCIMAHI_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_vektorreva_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SUNGAI_AR_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Buffered_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Buffered_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});