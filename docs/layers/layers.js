ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:6347").setExtent([208412.672091, 4440716.119200, 899906.729009, 5059519.426200]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CartoPositron_1 = new ol.layer.Tile({
            'title': 'Carto Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_StateBoundaries_2 = new ol.format.GeoJSON();
var features_StateBoundaries_2 = format_StateBoundaries_2.readFeatures(json_StateBoundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_StateBoundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBoundaries_2.addFeatures(features_StateBoundaries_2);
var lyr_StateBoundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateBoundaries_2, 
                style: style_StateBoundaries_2,
                popuplayertitle: 'State Boundaries',
                interactive: false,
                title: '<img src="styles/legend/StateBoundaries_2.png" /> State Boundaries'
            });
var format_WatershedBoundariesMajorBasins_3 = new ol.format.GeoJSON();
var features_WatershedBoundariesMajorBasins_3 = format_WatershedBoundariesMajorBasins_3.readFeatures(json_WatershedBoundariesMajorBasins_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_WatershedBoundariesMajorBasins_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WatershedBoundariesMajorBasins_3.addFeatures(features_WatershedBoundariesMajorBasins_3);
var lyr_WatershedBoundariesMajorBasins_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WatershedBoundariesMajorBasins_3, 
                style: style_WatershedBoundariesMajorBasins_3,
                popuplayertitle: 'Watershed Boundaries (Major Basins)',
                interactive: false,
                title: '<img src="styles/legend/WatershedBoundariesMajorBasins_3.png" /> Watershed Boundaries (Major Basins)'
            });
var format_CountyBoundaries_4 = new ol.format.GeoJSON();
var features_CountyBoundaries_4 = format_CountyBoundaries_4.readFeatures(json_CountyBoundaries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_CountyBoundaries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyBoundaries_4.addFeatures(features_CountyBoundaries_4);
var lyr_CountyBoundaries_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountyBoundaries_4, 
                style: style_CountyBoundaries_4,
                popuplayertitle: 'County Boundaries',
                interactive: false,
                title: '<img src="styles/legend/CountyBoundaries_4.png" /> County Boundaries'
            });
var format_Towns_5 = new ol.format.GeoJSON();
var features_Towns_5 = format_Towns_5.readFeatures(json_Towns_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_Towns_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Towns_5.addFeatures(features_Towns_5);
var lyr_Towns_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Towns_5,
maxResolution:196.03126306583374,
 
                style: style_Towns_5,
                popuplayertitle: 'Towns',
                interactive: false,
                title: '<img src="styles/legend/Towns_5.png" /> Towns'
            });
var format_Villages_6 = new ol.format.GeoJSON();
var features_Villages_6 = format_Villages_6.readFeatures(json_Villages_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_Villages_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villages_6.addFeatures(features_Villages_6);
var lyr_Villages_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Villages_6,
maxResolution:196.03126306583374,
 
                style: style_Villages_6,
                popuplayertitle: 'Villages',
                interactive: false,
                title: '<img src="styles/legend/Villages_6.png" /> Villages'
            });
var format_Cities_7 = new ol.format.GeoJSON();
var features_Cities_7 = format_Cities_7.readFeatures(json_Cities_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_Cities_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cities_7.addFeatures(features_Cities_7);
var lyr_Cities_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cities_7,
maxResolution:196.03126306583374,
 
                style: style_Cities_7,
                popuplayertitle: 'Cities',
                interactive: false,
                title: '<img src="styles/legend/Cities_7.png" /> Cities'
            });
var format_NYSPotentialEnvironmentalJusticeAreas_8 = new ol.format.GeoJSON();
var features_NYSPotentialEnvironmentalJusticeAreas_8 = format_NYSPotentialEnvironmentalJusticeAreas_8.readFeatures(json_NYSPotentialEnvironmentalJusticeAreas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_NYSPotentialEnvironmentalJusticeAreas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NYSPotentialEnvironmentalJusticeAreas_8.addFeatures(features_NYSPotentialEnvironmentalJusticeAreas_8);
var lyr_NYSPotentialEnvironmentalJusticeAreas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NYSPotentialEnvironmentalJusticeAreas_8,
maxResolution:196.03126306583374,
 
                style: style_NYSPotentialEnvironmentalJusticeAreas_8,
                popuplayertitle: 'NYS Potential Environmental Justice Areas',
                interactive: false,
                title: '<img src="styles/legend/NYSPotentialEnvironmentalJusticeAreas_8.png" /> NYS Potential Environmental Justice Areas'
            });
var format_LakesOceans_9 = new ol.format.GeoJSON();
var features_LakesOceans_9 = format_LakesOceans_9.readFeatures(json_LakesOceans_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_LakesOceans_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LakesOceans_9.addFeatures(features_LakesOceans_9);
var lyr_LakesOceans_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LakesOceans_9, 
                style: style_LakesOceans_9,
                popuplayertitle: 'Lakes & Oceans',
                interactive: true,
                title: '<img src="styles/legend/LakesOceans_9.png" /> Lakes & Oceans'
            });
var format_StreamsRivers_10 = new ol.format.GeoJSON();
var features_StreamsRivers_10 = format_StreamsRivers_10.readFeatures(json_StreamsRivers_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_StreamsRivers_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StreamsRivers_10.addFeatures(features_StreamsRivers_10);
var lyr_StreamsRivers_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StreamsRivers_10, 
                style: style_StreamsRivers_10,
                popuplayertitle: 'Streams & Rivers',
                interactive: true,
                title: '<img src="styles/legend/StreamsRivers_10.png" /> Streams & Rivers'
            });
var format_MunicipalitiesServedbyLeachateImpactedWaters_11 = new ol.format.GeoJSON();
var features_MunicipalitiesServedbyLeachateImpactedWaters_11 = format_MunicipalitiesServedbyLeachateImpactedWaters_11.readFeatures(json_MunicipalitiesServedbyLeachateImpactedWaters_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_MunicipalitiesServedbyLeachateImpactedWaters_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalitiesServedbyLeachateImpactedWaters_11.addFeatures(features_MunicipalitiesServedbyLeachateImpactedWaters_11);
var lyr_MunicipalitiesServedbyLeachateImpactedWaters_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalitiesServedbyLeachateImpactedWaters_11, 
                style: style_MunicipalitiesServedbyLeachateImpactedWaters_11,
                popuplayertitle: 'Municipalities Served by Leachate-Impacted Waters',
                interactive: true,
    title: 'Municipalities Served by Leachate-Impacted Waters<br />\
    <img src="styles/legend/MunicipalitiesServedbyLeachateImpactedWaters_11_0.png" /> Great Flats Aquifer<br />\
    <img src="styles/legend/MunicipalitiesServedbyLeachateImpactedWaters_11_1.png" /> Hudson River<br />\
    <img src="styles/legend/MunicipalitiesServedbyLeachateImpactedWaters_11_2.png" /> Mohawk River<br />\
    <img src="styles/legend/MunicipalitiesServedbyLeachateImpactedWaters_11_3.png" /> Chemung River<br />\
    <img src="styles/legend/MunicipalitiesServedbyLeachateImpactedWaters_11_4.png" /> Lake Ontario<br />\
    <img src="styles/legend/MunicipalitiesServedbyLeachateImpactedWaters_11_5.png" /> Niagara River<br />\
    <img src="styles/legend/MunicipalitiesServedbyLeachateImpactedWaters_11_6.png" /> Saint Lawrence River<br />' });
var format_DrinkingWaterIntakes_12 = new ol.format.GeoJSON();
var features_DrinkingWaterIntakes_12 = format_DrinkingWaterIntakes_12.readFeatures(json_DrinkingWaterIntakes_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_DrinkingWaterIntakes_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrinkingWaterIntakes_12.addFeatures(features_DrinkingWaterIntakes_12);
var lyr_DrinkingWaterIntakes_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrinkingWaterIntakes_12, 
                style: style_DrinkingWaterIntakes_12,
                popuplayertitle: 'Drinking Water Intakes',
                interactive: true,
    title: 'Drinking Water Intakes<br />\
    <img src="styles/legend/DrinkingWaterIntakes_12_0.png" /> Up to 35<br />\
    <img src="styles/legend/DrinkingWaterIntakes_12_1.png" /> 35 - 90<br />\
    <img src="styles/legend/DrinkingWaterIntakes_12_2.png" /> 90 - 500<br />\
    <img src="styles/legend/DrinkingWaterIntakes_12_3.png" /> 500 and more<br />' });
var format_LeachateFlows_13 = new ol.format.GeoJSON();
var features_LeachateFlows_13 = format_LeachateFlows_13.readFeatures(json_LeachateFlows_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_LeachateFlows_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeachateFlows_13.addFeatures(features_LeachateFlows_13);
var lyr_LeachateFlows_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeachateFlows_13, 
                style: style_LeachateFlows_13,
                popuplayertitle: 'Leachate Flows',
                interactive: true,
    title: 'Leachate Flows<br />\
    <img src="styles/legend/LeachateFlows_13_0.png" /> Up to 4.5<br />\
    <img src="styles/legend/LeachateFlows_13_1.png" /> 4.5 - 12.5<br />\
    <img src="styles/legend/LeachateFlows_13_2.png" /> 12.5 - 25<br />\
    <img src="styles/legend/LeachateFlows_13_3.png" /> 25 and more<br />' });
var format_LandfillsContributingLeachate_14 = new ol.format.GeoJSON();
var features_LandfillsContributingLeachate_14 = format_LandfillsContributingLeachate_14.readFeatures(json_LandfillsContributingLeachate_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_LandfillsContributingLeachate_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandfillsContributingLeachate_14.addFeatures(features_LandfillsContributingLeachate_14);
var lyr_LandfillsContributingLeachate_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandfillsContributingLeachate_14, 
                style: style_LandfillsContributingLeachate_14,
                popuplayertitle: 'Landfills Contributing Leachate',
                interactive: true,
    title: 'Landfills Contributing Leachate<br />\
    <img src="styles/legend/LandfillsContributingLeachate_14_0.png" /> Up to 5<br />\
    <img src="styles/legend/LandfillsContributingLeachate_14_1.png" /> 5 - 15<br />\
    <img src="styles/legend/LandfillsContributingLeachate_14_2.png" /> 15 - 35<br />\
    <img src="styles/legend/LandfillsContributingLeachate_14_3.png" /> 35 and more<br />' });
var format_STPsReceivingLeachate_15 = new ol.format.GeoJSON();
var features_STPsReceivingLeachate_15 = format_STPsReceivingLeachate_15.readFeatures(json_STPsReceivingLeachate_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_STPsReceivingLeachate_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STPsReceivingLeachate_15.addFeatures(features_STPsReceivingLeachate_15);
var lyr_STPsReceivingLeachate_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STPsReceivingLeachate_15, 
                style: style_STPsReceivingLeachate_15,
                popuplayertitle: 'STPs Receiving Leachate',
                interactive: true,
    title: 'STPs Receiving Leachate<br />\
    <img src="styles/legend/STPsReceivingLeachate_15_0.png" /> Up to 10<br />\
    <img src="styles/legend/STPsReceivingLeachate_15_1.png" /> 10 - 20<br />\
    <img src="styles/legend/STPsReceivingLeachate_15_2.png" /> 20 - 40<br />\
    <img src="styles/legend/STPsReceivingLeachate_15_3.png" /> 40 and more<br />' });
var group_FacilityMunicipalityInformation = new ol.layer.Group({
                                layers: [lyr_MunicipalitiesServedbyLeachateImpactedWaters_11,lyr_DrinkingWaterIntakes_12,lyr_LeachateFlows_13,lyr_LandfillsContributingLeachate_14,lyr_STPsReceivingLeachate_15,],
                                fold: 'open',
                                title: 'Facility & Municipality Information'});
var group_WaterbodiesImpactedbyLeachate = new ol.layer.Group({
                                layers: [lyr_LakesOceans_9,lyr_StreamsRivers_10,],
                                fold: 'close',
                                title: 'Waterbodies Impacted by Leachate'});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_CartoPositron_1,lyr_StateBoundaries_2,lyr_WatershedBoundariesMajorBasins_3,lyr_CountyBoundaries_4,lyr_Towns_5,lyr_Villages_6,lyr_Cities_7,lyr_NYSPotentialEnvironmentalJusticeAreas_8,],
                                fold: 'open',
                                title: 'Basemap'});

lyr_GoogleSatellite_0.setVisible(false);lyr_CartoPositron_1.setVisible(true);lyr_StateBoundaries_2.setVisible(true);lyr_WatershedBoundariesMajorBasins_3.setVisible(false);lyr_CountyBoundaries_4.setVisible(true);lyr_Towns_5.setVisible(true);lyr_Villages_6.setVisible(true);lyr_Cities_7.setVisible(true);lyr_NYSPotentialEnvironmentalJusticeAreas_8.setVisible(false);lyr_LakesOceans_9.setVisible(true);lyr_StreamsRivers_10.setVisible(true);lyr_MunicipalitiesServedbyLeachateImpactedWaters_11.setVisible(true);lyr_DrinkingWaterIntakes_12.setVisible(true);lyr_LeachateFlows_13.setVisible(false);lyr_LandfillsContributingLeachate_14.setVisible(true);lyr_STPsReceivingLeachate_15.setVisible(true);
var layersList = [group_Basemap,group_WaterbodiesImpactedbyLeachate,group_FacilityMunicipalityInformation];
lyr_StateBoundaries_2.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_WatershedBoundariesMajorBasins_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PERMIT_BAS': 'PERMIT_BAS', 'SUM_SHAPE_': 'SUM_SHAPE_', 'BASIN_NAME': 'BASIN_NAME', 'M_BASIN_ID': 'M_BASIN_ID', 'M_BAS_NAME': 'M_BAS_NAME', });
lyr_CountyBoundaries_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'ABBREV': 'ABBREV', 'GNIS_ID': 'GNIS_ID', 'FIPS_CODE': 'FIPS_CODE', 'SWIS': 'SWIS', 'NYSP_ZONE': 'NYSP_ZONE', 'POP1990': 'POP1990', 'POP2000': 'POP2000', 'POP2010': 'POP2010', 'POP2020': 'POP2020', 'DOS_LL': 'DOS_LL', 'DOSLL_DATE': 'DOSLL_DATE', 'NYC': 'NYC', 'CALC_SQ_MI': 'CALC_SQ_MI', 'DATEMOD': 'DATEMOD', });
lyr_Towns_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'MUNI_TYPE': 'MUNI_TYPE', 'MUNITYCODE': 'MUNITYCODE', 'COUNTY': 'COUNTY', 'GNIS_ID': 'GNIS_ID', 'FIPS_CODE': 'FIPS_CODE', 'SWIS': 'SWIS', 'POP1990': 'POP1990', 'POP2000': 'POP2000', 'POP2010': 'POP2010', 'POP2020': 'POP2020', 'DOS_LL': 'DOS_LL', 'DOSLL_DATE': 'DOSLL_DATE', 'MAP_SYMBOL': 'MAP_SYMBOL', 'CALC_SQ_MI': 'CALC_SQ_MI', 'DATEMOD': 'DATEMOD', });
lyr_Villages_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'TOWN': 'TOWN', 'COUNTY': 'COUNTY', 'GNIS_ID': 'GNIS_ID', 'FIPS_CODE': 'FIPS_CODE', 'SWIS': 'SWIS', 'POP1990': 'POP1990', 'POP2000': 'POP2000', 'POP2010': 'POP2010', 'POP2020': 'POP2020', 'DOS_LL': 'DOS_LL', 'DOSLL_DATE': 'DOSLL_DATE', 'MAP_SYMBOL': 'MAP_SYMBOL', 'CALC_SQ_MI': 'CALC_SQ_MI', 'DATEMOD': 'DATEMOD', });
lyr_Cities_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'MUNI_TYPE': 'MUNI_TYPE', 'MUNITYCODE': 'MUNITYCODE', 'COUNTY': 'COUNTY', 'GNIS_ID': 'GNIS_ID', 'FIPS_CODE': 'FIPS_CODE', 'SWIS': 'SWIS', 'POP1990': 'POP1990', 'POP2000': 'POP2000', 'POP2010': 'POP2010', 'POP2020': 'POP2020', 'DOS_LL': 'DOS_LL', 'DOSLL_DATE': 'DOSLL_DATE', 'MAP_SYMBOL': 'MAP_SYMBOL', 'CALC_SQ_MI': 'CALC_SQ_MI', 'DATEMOD': 'DATEMOD', });
lyr_NYSPotentialEnvironmentalJusticeAreas_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GEOID_DATA': 'GEOID_DATA', 'BPOVRATE': 'BPOVRATE', 'MINPOPCOUNT': 'MINPOPCOUNT', 'MINPOPRATE': 'MINPOPRATE', 'PEJA': 'PEJA', });
lyr_LakesOceans_9.set('fieldAliases', {'receiving_water': 'Waterbody Name', 'avg_tot_yr': 'Leachate Gallons Per Year (Average)', });
lyr_StreamsRivers_10.set('fieldAliases', {'receiving_water': 'Waterbody Name', 'avg_tot_yr': 'Leachate Gallons Per Year (Average)', });
lyr_MunicipalitiesServedbyLeachateImpactedWaters_11.set('fieldAliases', {'row_number': 'row_number', 'muni_name': 'Municipality Name', 'muni_type': 'Municipality Type', 'source_name': 'Drinking Water Source Name', });
lyr_DrinkingWaterIntakes_12.set('fieldAliases', {'intake_name': 'intake_name', 'tot_pop_served': 'Population Served', 'source_name': 'Water Source Name', 'sole_or_blend': 'Sole or Blended Source', 'us_stp_name': 'Nearest Upstream STP that Accepted Leachate', 'mi_to_stp': 'mi_to_stp', 'disp_name': 'Drinking Water Intake Name', 'disp_name_2': 'disp_name_2', });
lyr_LeachateFlows_13.set('fieldAliases', {'num': 'num', 'landfill_name': 'landfill_name', 'landfill_activity': 'Landfill Activity', 'landfill_type': 'Landfill Type', 'stp_name': 'stp_name', 'avg_gal_yr': 'Leachate Gallons Per Year (Average)', 'transport_method': 'Transport Method', 'year_start': 'First Year Reported', 'year_end': 'Last Year Reported', 'avg_cost_gal': 'Cost Per Gallon (Average)', 'receiving_water': 'STP Effluent Receiving Water', 'water_class': 'Receiving Water Classification', 'stp_spdes': 'STP SPDES Permit Number', 'lf_disp': 'Landfill Name', 'lf_disp_2': 'lf_disp_2', 'stp_disp': 'STP Name', 'stp_disp_2': 'stp_disp_2', });
lyr_LandfillsContributingLeachate_14.set('fieldAliases', {'row_number': 'row_number', 'landfill_name': 'landfill_name', 'landfill_activity': 'Landfill Activity', 'landfill_type': 'Landfill Type', 'owner_type': 'Ownership Type', 'active_mgmt': 'Management Type', 'rule_coverage': 'Will Be Covered Under NYS DEC Leachate Treatment Rule?', 'avg_gal_yr': 'Leachate Gallons Per Year (Average)', 'disp_name': 'Landfill Name', 'disp_name_2': 'disp_name_2', });
lyr_STPsReceivingLeachate_15.set('fieldAliases', {'row_number': 'row_number', 'stp_name': 'stp_name', 'stp_spdes': 'STP SPDES Permit Number', 'avg_tot_yr': 'Leachate Gallons Per Year (Average)', 'receiving_water': 'Effluent Receiving Water', 'water_class': 'Receiving Water Classification', 'nys_pfas_priority_yn': 'NYS DEC PFAS Priority Facility?', 'disp_name': 'STP Name', 'disp_name_2': 'disp_name_2', });
lyr_StateBoundaries_2.set('fieldImages', {'fid': 'TextEdit', 'STATEFP': 'TextEdit', 'STATENS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_WatershedBoundariesMajorBasins_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'PERMIT_BAS': 'TextEdit', 'SUM_SHAPE_': 'TextEdit', 'BASIN_NAME': 'TextEdit', 'M_BASIN_ID': 'TextEdit', 'M_BAS_NAME': 'TextEdit', });
lyr_CountyBoundaries_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'ABBREV': 'TextEdit', 'GNIS_ID': 'TextEdit', 'FIPS_CODE': 'TextEdit', 'SWIS': 'TextEdit', 'NYSP_ZONE': 'TextEdit', 'POP1990': 'Range', 'POP2000': 'Range', 'POP2010': 'Range', 'POP2020': 'Range', 'DOS_LL': 'TextEdit', 'DOSLL_DATE': 'DateTime', 'NYC': 'TextEdit', 'CALC_SQ_MI': 'TextEdit', 'DATEMOD': 'DateTime', });
lyr_Towns_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'MUNI_TYPE': 'TextEdit', 'MUNITYCODE': 'Range', 'COUNTY': 'TextEdit', 'GNIS_ID': 'TextEdit', 'FIPS_CODE': 'TextEdit', 'SWIS': 'TextEdit', 'POP1990': 'Range', 'POP2000': 'Range', 'POP2010': 'Range', 'POP2020': 'Range', 'DOS_LL': 'TextEdit', 'DOSLL_DATE': 'DateTime', 'MAP_SYMBOL': 'TextEdit', 'CALC_SQ_MI': 'TextEdit', 'DATEMOD': 'DateTime', });
lyr_Villages_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'TOWN': 'TextEdit', 'COUNTY': 'TextEdit', 'GNIS_ID': 'TextEdit', 'FIPS_CODE': 'TextEdit', 'SWIS': 'TextEdit', 'POP1990': 'Range', 'POP2000': 'Range', 'POP2010': 'Range', 'POP2020': 'Range', 'DOS_LL': 'TextEdit', 'DOSLL_DATE': 'DateTime', 'MAP_SYMBOL': 'TextEdit', 'CALC_SQ_MI': 'TextEdit', 'DATEMOD': 'DateTime', });
lyr_Cities_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'MUNI_TYPE': 'TextEdit', 'MUNITYCODE': 'Range', 'COUNTY': 'TextEdit', 'GNIS_ID': 'TextEdit', 'FIPS_CODE': 'TextEdit', 'SWIS': 'TextEdit', 'POP1990': 'Range', 'POP2000': 'Range', 'POP2010': 'Range', 'POP2020': 'Range', 'DOS_LL': 'TextEdit', 'DOSLL_DATE': 'DateTime', 'MAP_SYMBOL': 'TextEdit', 'CALC_SQ_MI': 'TextEdit', 'DATEMOD': 'DateTime', });
lyr_NYSPotentialEnvironmentalJusticeAreas_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'GEOID_DATA': 'TextEdit', 'BPOVRATE': 'TextEdit', 'MINPOPCOUNT': 'TextEdit', 'MINPOPRATE': 'TextEdit', 'PEJA': 'TextEdit', });
lyr_LakesOceans_9.set('fieldImages', {'receiving_water': 'TextEdit', 'avg_tot_yr': 'TextEdit', });
lyr_StreamsRivers_10.set('fieldImages', {'receiving_water': 'TextEdit', 'avg_tot_yr': 'TextEdit', });
lyr_MunicipalitiesServedbyLeachateImpactedWaters_11.set('fieldImages', {'row_number': 'TextEdit', 'muni_name': 'TextEdit', 'muni_type': 'TextEdit', 'source_name': 'TextEdit', });
lyr_DrinkingWaterIntakes_12.set('fieldImages', {'intake_name': 'TextEdit', 'tot_pop_served': 'TextEdit', 'source_name': 'TextEdit', 'sole_or_blend': 'TextEdit', 'us_stp_name': 'TextEdit', 'mi_to_stp': 'Range', 'disp_name': 'TextEdit', 'disp_name_2': 'TextEdit', });
lyr_LeachateFlows_13.set('fieldImages', {'num': 'TextEdit', 'landfill_name': 'TextEdit', 'landfill_activity': 'TextEdit', 'landfill_type': 'TextEdit', 'stp_name': 'TextEdit', 'avg_gal_yr': 'TextEdit', 'transport_method': 'TextEdit', 'year_start': 'Range', 'year_end': 'Range', 'avg_cost_gal': 'TextEdit', 'receiving_water': 'TextEdit', 'water_class': 'TextEdit', 'stp_spdes': 'TextEdit', 'lf_disp': 'TextEdit', 'lf_disp_2': 'TextEdit', 'stp_disp': 'TextEdit', 'stp_disp_2': 'TextEdit', });
lyr_LandfillsContributingLeachate_14.set('fieldImages', {'row_number': 'TextEdit', 'landfill_name': 'TextEdit', 'landfill_activity': 'TextEdit', 'landfill_type': 'TextEdit', 'owner_type': 'TextEdit', 'active_mgmt': 'TextEdit', 'rule_coverage': 'TextEdit', 'avg_gal_yr': 'TextEdit', 'disp_name': 'TextEdit', 'disp_name_2': 'TextEdit', });
lyr_STPsReceivingLeachate_15.set('fieldImages', {'row_number': 'TextEdit', 'stp_name': 'TextEdit', 'stp_spdes': 'TextEdit', 'avg_tot_yr': 'TextEdit', 'receiving_water': 'TextEdit', 'water_class': 'TextEdit', 'nys_pfas_priority_yn': 'TextEdit', 'disp_name': 'TextEdit', 'disp_name_2': 'TextEdit', });
lyr_StateBoundaries_2.set('fieldLabels', {'fid': 'inline label - always visible', 'STATEFP': 'inline label - always visible', 'STATENS': 'inline label - always visible', 'AFFGEOID': 'inline label - always visible', 'GEOID': 'inline label - always visible', 'STUSPS': 'inline label - always visible', 'NAME': 'inline label - always visible', 'LSAD': 'inline label - always visible', 'ALAND': 'inline label - always visible', 'AWATER': 'inline label - always visible', });
lyr_WatershedBoundariesMajorBasins_3.set('fieldLabels', {'OBJECTID': 'no label', 'PERMIT_BAS': 'no label', 'SUM_SHAPE_': 'no label', 'BASIN_NAME': 'no label', 'M_BASIN_ID': 'no label', 'M_BAS_NAME': 'no label', });
lyr_CountyBoundaries_4.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'NAME': 'inline label - always visible', 'ABBREV': 'inline label - always visible', 'GNIS_ID': 'inline label - always visible', 'FIPS_CODE': 'inline label - always visible', 'SWIS': 'inline label - always visible', 'NYSP_ZONE': 'inline label - always visible', 'POP1990': 'inline label - always visible', 'POP2000': 'inline label - always visible', 'POP2010': 'inline label - always visible', 'POP2020': 'inline label - always visible', 'DOS_LL': 'inline label - always visible', 'DOSLL_DATE': 'inline label - always visible', 'NYC': 'inline label - always visible', 'CALC_SQ_MI': 'inline label - always visible', 'DATEMOD': 'inline label - always visible', });
lyr_Towns_5.set('fieldLabels', {'OBJECTID': 'no label', 'NAME': 'no label', 'MUNI_TYPE': 'no label', 'MUNITYCODE': 'no label', 'COUNTY': 'no label', 'GNIS_ID': 'no label', 'FIPS_CODE': 'no label', 'SWIS': 'no label', 'POP1990': 'no label', 'POP2000': 'no label', 'POP2010': 'no label', 'POP2020': 'no label', 'DOS_LL': 'no label', 'DOSLL_DATE': 'no label', 'MAP_SYMBOL': 'no label', 'CALC_SQ_MI': 'no label', 'DATEMOD': 'no label', });
lyr_Villages_6.set('fieldLabels', {'OBJECTID': 'no label', 'NAME': 'no label', 'TOWN': 'no label', 'COUNTY': 'no label', 'GNIS_ID': 'no label', 'FIPS_CODE': 'no label', 'SWIS': 'no label', 'POP1990': 'no label', 'POP2000': 'no label', 'POP2010': 'no label', 'POP2020': 'no label', 'DOS_LL': 'no label', 'DOSLL_DATE': 'no label', 'MAP_SYMBOL': 'no label', 'CALC_SQ_MI': 'no label', 'DATEMOD': 'no label', });
lyr_Cities_7.set('fieldLabels', {'OBJECTID': 'no label', 'NAME': 'no label', 'MUNI_TYPE': 'no label', 'MUNITYCODE': 'no label', 'COUNTY': 'no label', 'GNIS_ID': 'no label', 'FIPS_CODE': 'no label', 'SWIS': 'no label', 'POP1990': 'no label', 'POP2000': 'no label', 'POP2010': 'no label', 'POP2020': 'no label', 'DOS_LL': 'no label', 'DOSLL_DATE': 'no label', 'MAP_SYMBOL': 'no label', 'CALC_SQ_MI': 'no label', 'DATEMOD': 'no label', });
lyr_NYSPotentialEnvironmentalJusticeAreas_8.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'GEOID_DATA': 'inline label - always visible', 'BPOVRATE': 'inline label - always visible', 'MINPOPCOUNT': 'inline label - always visible', 'MINPOPRATE': 'inline label - always visible', 'PEJA': 'inline label - always visible', });
lyr_LakesOceans_9.set('fieldLabels', {'receiving_water': 'inline label - always visible', 'avg_tot_yr': 'inline label - always visible', });
lyr_StreamsRivers_10.set('fieldLabels', {'receiving_water': 'inline label - always visible', 'avg_tot_yr': 'inline label - always visible', });
lyr_MunicipalitiesServedbyLeachateImpactedWaters_11.set('fieldLabels', {'row_number': 'hidden field', 'muni_name': 'inline label - always visible', 'muni_type': 'inline label - always visible', 'source_name': 'inline label - always visible', });
lyr_DrinkingWaterIntakes_12.set('fieldLabels', {'intake_name': 'hidden field', 'tot_pop_served': 'inline label - always visible', 'source_name': 'inline label - always visible', 'sole_or_blend': 'inline label - always visible', 'us_stp_name': 'inline label - always visible', 'mi_to_stp': 'hidden field', 'disp_name': 'inline label - always visible', 'disp_name_2': 'hidden field', });
lyr_LeachateFlows_13.set('fieldLabels', {'num': 'no label', 'landfill_name': 'no label', 'landfill_activity': 'no label', 'landfill_type': 'no label', 'stp_name': 'no label', 'avg_gal_yr': 'inline label - always visible', 'transport_method': 'no label', 'year_start': 'hidden field', 'year_end': 'hidden field', 'avg_cost_gal': 'inline label - visible with data', 'receiving_water': 'no label', 'water_class': 'no label', 'stp_spdes': 'no label', 'lf_disp': 'no label', 'lf_disp_2': 'no label', 'stp_disp': 'no label', 'stp_disp_2': 'no label', });
lyr_LandfillsContributingLeachate_14.set('fieldLabels', {'row_number': 'hidden field', 'landfill_name': 'hidden field', 'landfill_activity': 'inline label - always visible', 'landfill_type': 'inline label - always visible', 'owner_type': 'inline label - always visible', 'active_mgmt': 'inline label - always visible', 'rule_coverage': 'inline label - always visible', 'avg_gal_yr': 'inline label - always visible', 'disp_name': 'inline label - always visible', 'disp_name_2': 'hidden field', });
lyr_STPsReceivingLeachate_15.set('fieldLabels', {'row_number': 'hidden field', 'stp_name': 'hidden field', 'stp_spdes': 'inline label - always visible', 'avg_tot_yr': 'inline label - always visible', 'receiving_water': 'inline label - always visible', 'water_class': 'inline label - always visible', 'nys_pfas_priority_yn': 'inline label - visible with data', 'disp_name': 'inline label - always visible', 'disp_name_2': 'hidden field', });
lyr_STPsReceivingLeachate_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});