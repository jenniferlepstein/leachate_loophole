ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:6347").setExtent([243668.995372, 4461478.180519, 947204.646004, 5091057.253321]);
var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_leachate_flowlines_2 = new ol.format.GeoJSON();
var features_leachate_flowlines_2 = format_leachate_flowlines_2.readFeatures(json_leachate_flowlines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_leachate_flowlines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leachate_flowlines_2.addFeatures(features_leachate_flowlines_2);
var lyr_leachate_flowlines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leachate_flowlines_2, 
                style: style_leachate_flowlines_2,
                popuplayertitle: 'leachate_flowlines',
                interactive: true,
    title: 'leachate_flowlines<br />\
    <img src="styles/legend/leachate_flowlines_2_0.png" /> 0 - 4484493<br />\
    <img src="styles/legend/leachate_flowlines_2_1.png" /> 4484493 - 12456687<br />\
    <img src="styles/legend/leachate_flowlines_2_2.png" /> 12456687 - 24147267<br />\
    <img src="styles/legend/leachate_flowlines_2_3.png" /> 24147267 - 42496905<br />' });
var format_munis_supplied_3 = new ol.format.GeoJSON();
var features_munis_supplied_3 = format_munis_supplied_3.readFeatures(json_munis_supplied_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_munis_supplied_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_munis_supplied_3.addFeatures(features_munis_supplied_3);
var lyr_munis_supplied_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_munis_supplied_3, 
                style: style_munis_supplied_3,
                popuplayertitle: 'munis_supplied',
                interactive: true,
    title: 'munis_supplied<br />\
    <img src="styles/legend/munis_supplied_3_0.png" /> Chemung River<br />\
    <img src="styles/legend/munis_supplied_3_1.png" /> Great Flats Aquifer<br />\
    <img src="styles/legend/munis_supplied_3_2.png" /> Hudson River<br />\
    <img src="styles/legend/munis_supplied_3_3.png" /> Lake Ontario<br />\
    <img src="styles/legend/munis_supplied_3_4.png" /> Mohawk River<br />\
    <img src="styles/legend/munis_supplied_3_5.png" /> Niagara River<br />\
    <img src="styles/legend/munis_supplied_3_6.png" /> Saint Lawrence River<br />' });
var format_total_by_stp_confirmed_4 = new ol.format.GeoJSON();
var features_total_by_stp_confirmed_4 = format_total_by_stp_confirmed_4.readFeatures(json_total_by_stp_confirmed_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_total_by_stp_confirmed_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_total_by_stp_confirmed_4.addFeatures(features_total_by_stp_confirmed_4);
var lyr_total_by_stp_confirmed_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_total_by_stp_confirmed_4, 
                style: style_total_by_stp_confirmed_4,
                popuplayertitle: 'total_by_stp_confirmed',
                interactive: true,
    title: 'total_by_stp_confirmed<br />\
    <img src="styles/legend/total_by_stp_confirmed_4_0.png" /> Up to 10<br />\
    <img src="styles/legend/total_by_stp_confirmed_4_1.png" /> 10 - 20<br />\
    <img src="styles/legend/total_by_stp_confirmed_4_2.png" /> 20 - 40<br />\
    <img src="styles/legend/total_by_stp_confirmed_4_3.png" /> 40 and up<br />' });
var format_intakes_pop_served_5 = new ol.format.GeoJSON();
var features_intakes_pop_served_5 = format_intakes_pop_served_5.readFeatures(json_intakes_pop_served_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_intakes_pop_served_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_intakes_pop_served_5.addFeatures(features_intakes_pop_served_5);
var lyr_intakes_pop_served_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_intakes_pop_served_5, 
                style: style_intakes_pop_served_5,
                popuplayertitle: 'intakes_pop_served',
                interactive: true,
    title: 'intakes_pop_served<br />\
    <img src="styles/legend/intakes_pop_served_5_0.png" /> Up to 35<br />\
    <img src="styles/legend/intakes_pop_served_5_1.png" /> 35 - 90<br />\
    <img src="styles/legend/intakes_pop_served_5_2.png" /> 90 - 500<br />\
    <img src="styles/legend/intakes_pop_served_5_3.png" /> 500 and more<br />' });
var format_total_by_landfill_confirmed_6 = new ol.format.GeoJSON();
var features_total_by_landfill_confirmed_6 = format_total_by_landfill_confirmed_6.readFeatures(json_total_by_landfill_confirmed_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_total_by_landfill_confirmed_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_total_by_landfill_confirmed_6.addFeatures(features_total_by_landfill_confirmed_6);
var lyr_total_by_landfill_confirmed_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_total_by_landfill_confirmed_6, 
                style: style_total_by_landfill_confirmed_6,
                popuplayertitle: 'total_by_landfill_confirmed',
                interactive: true,
    title: 'total_by_landfill_confirmed<br />\
    <img src="styles/legend/total_by_landfill_confirmed_6_0.png" /> Up to 5<br />\
    <img src="styles/legend/total_by_landfill_confirmed_6_1.png" /> 5 - 15<br />\
    <img src="styles/legend/total_by_landfill_confirmed_6_2.png" /> 15 - 30<br />\
    <img src="styles/legend/total_by_landfill_confirmed_6_3.png" /> 30 and up<br />' });
var group_DatabaseOutput27Apr2026 = new ol.layer.Group({
                                layers: [lyr_leachate_flowlines_2,lyr_munis_supplied_3,lyr_total_by_stp_confirmed_4,lyr_intakes_pop_served_5,lyr_total_by_landfill_confirmed_6,],
                                fold: 'open',
                                title: 'Database Output - 27 Apr 2026'});

lyr_ESRIGraylight_0.setVisible(true);lyr_ESRISatellite_1.setVisible(false);lyr_leachate_flowlines_2.setVisible(false);lyr_munis_supplied_3.setVisible(false);lyr_total_by_stp_confirmed_4.setVisible(true);lyr_intakes_pop_served_5.setVisible(false);lyr_total_by_landfill_confirmed_6.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_ESRISatellite_1,group_DatabaseOutput27Apr2026];
lyr_leachate_flowlines_2.set('fieldAliases', {'num': 'num', 'landfill_name': 'landfill_name', 'landfill_activity': 'landfill_activity', 'landfill_type': 'landfill_type', 'stp_name': 'stp_name', 'avg_gal_yr': 'avg_gal_yr', 'transport_method': 'transport_method', 'year_start': 'year_start', 'year_end': 'year_end', 'avg_cost_gal': 'avg_cost_gal', 'receiving_water': 'receiving_water', 'water_class': 'water_class', 'stp_spdes': 'stp_spdes', 'lf_disp': 'lf_disp', 'lf_disp_2': 'lf_disp_2', 'stp_disp': 'stp_disp', 'stp_disp_2': 'stp_disp_2', });
lyr_munis_supplied_3.set('fieldAliases', {'row_number': 'row_number', 'muni_name': 'muni_name', 'muni_type': 'muni_type', 'source_name': 'source_name', });
lyr_total_by_stp_confirmed_4.set('fieldAliases', {'row_number': 'row_number', 'stp_name': 'stp_name', 'stp_spdes': 'stp_spdes', 'avg_tot_yr': 'avg_tot_yr', 'receiving_water': 'receiving_water', 'water_class': 'water_class', 'nys_pfas_priority_yn': 'nys_pfas_priority_yn', 'disp_name': 'disp_name', 'disp_name_2': 'disp_name_2', });
lyr_intakes_pop_served_5.set('fieldAliases', {'intake_name': 'intake_name', 'tot_pop_served': 'tot_pop_served', 'source_name': 'source_name', 'sole_or_blend': 'sole_or_blend', 'us_stp_name': 'us_stp_name', 'mi_to_stp': 'mi_to_stp', 'disp_name': 'disp_name', 'disp_name_2': 'disp_name_2', });
lyr_total_by_landfill_confirmed_6.set('fieldAliases', {'row_number': 'row_number', 'landfill_name': 'landfill_name', 'landfill_activity': 'landfill_activity', 'landfill_type': 'landfill_type', 'owner_type': 'owner_type', 'active_mgmt': 'active_mgmt', 'rule_coverage': 'rule_coverage', 'avg_gal_yr': 'avg_gal_yr', 'disp_name': 'disp_name', 'disp_name_2': 'disp_name_2', });
lyr_leachate_flowlines_2.set('fieldImages', {'num': '', 'landfill_name': '', 'landfill_activity': '', 'landfill_type': '', 'stp_name': '', 'avg_gal_yr': '', 'transport_method': '', 'year_start': '', 'year_end': '', 'avg_cost_gal': '', 'receiving_water': '', 'water_class': '', 'stp_spdes': '', 'lf_disp': '', 'lf_disp_2': '', 'stp_disp': '', 'stp_disp_2': '', });
lyr_munis_supplied_3.set('fieldImages', {'row_number': '', 'muni_name': '', 'muni_type': '', 'source_name': '', });
lyr_total_by_stp_confirmed_4.set('fieldImages', {'row_number': '', 'stp_name': '', 'stp_spdes': '', 'avg_tot_yr': '', 'receiving_water': '', 'water_class': '', 'nys_pfas_priority_yn': '', 'disp_name': '', 'disp_name_2': '', });
lyr_intakes_pop_served_5.set('fieldImages', {'intake_name': 'TextEdit', 'tot_pop_served': 'TextEdit', 'source_name': 'TextEdit', 'sole_or_blend': 'TextEdit', 'us_stp_name': 'TextEdit', 'mi_to_stp': 'Range', 'disp_name': 'TextEdit', 'disp_name_2': 'TextEdit', });
lyr_total_by_landfill_confirmed_6.set('fieldImages', {'row_number': '', 'landfill_name': 'TextEdit', 'landfill_activity': 'TextEdit', 'landfill_type': 'TextEdit', 'owner_type': 'TextEdit', 'active_mgmt': 'TextEdit', 'rule_coverage': '', 'avg_gal_yr': 'TextEdit', 'disp_name': 'TextEdit', 'disp_name_2': 'TextEdit', });
lyr_leachate_flowlines_2.set('fieldLabels', {'num': 'no label', 'landfill_name': 'hidden field', 'landfill_activity': 'inline label - always visible', 'landfill_type': 'inline label - always visible', 'stp_name': 'hidden field', 'avg_gal_yr': 'inline label - always visible', 'transport_method': 'inline label - always visible', 'year_start': 'inline label - always visible', 'year_end': 'inline label - always visible', 'avg_cost_gal': 'inline label - always visible', 'receiving_water': 'inline label - always visible', 'water_class': 'inline label - always visible', 'stp_spdes': 'no label', 'lf_disp': 'inline label - always visible', 'lf_disp_2': 'no label', 'stp_disp': 'inline label - always visible', 'stp_disp_2': 'no label', });
lyr_munis_supplied_3.set('fieldLabels', {'row_number': 'hidden field', 'muni_name': 'inline label - always visible', 'muni_type': 'inline label - always visible', 'source_name': 'inline label - always visible', });
lyr_total_by_stp_confirmed_4.set('fieldLabels', {'row_number': 'hidden field', 'stp_name': 'hidden field', 'stp_spdes': 'inline label - always visible', 'avg_tot_yr': 'inline label - always visible', 'receiving_water': 'inline label - always visible', 'water_class': 'inline label - always visible', 'nys_pfas_priority_yn': 'inline label - always visible', 'disp_name': 'inline label - always visible', 'disp_name_2': 'hidden field', });
lyr_intakes_pop_served_5.set('fieldLabels', {'intake_name': 'hidden field', 'tot_pop_served': 'inline label - always visible', 'source_name': 'inline label - always visible', 'sole_or_blend': 'inline label - always visible', 'us_stp_name': 'hidden field', 'mi_to_stp': 'hidden field', 'disp_name': 'inline label - always visible', 'disp_name_2': 'no label', });
lyr_total_by_landfill_confirmed_6.set('fieldLabels', {'row_number': 'hidden field', 'landfill_name': 'hidden field', 'landfill_activity': 'inline label - always visible', 'landfill_type': 'inline label - always visible', 'owner_type': 'inline label - always visible', 'active_mgmt': 'inline label - always visible', 'rule_coverage': 'inline label - always visible', 'avg_gal_yr': 'inline label - always visible', 'disp_name': 'inline label - always visible', 'disp_name_2': 'hidden field', });
lyr_total_by_landfill_confirmed_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});