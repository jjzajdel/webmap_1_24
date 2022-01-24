var wms_layers = [];


        var lyr_Google_road_0 = new ol.layer.Tile({
            'title': 'Google_road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_WhiteAloneNotHispanicorLatino_1 = new ol.format.GeoJSON();
var features_WhiteAloneNotHispanicorLatino_1 = format_WhiteAloneNotHispanicorLatino_1.readFeatures(json_WhiteAloneNotHispanicorLatino_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WhiteAloneNotHispanicorLatino_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WhiteAloneNotHispanicorLatino_1.addFeatures(features_WhiteAloneNotHispanicorLatino_1);
var lyr_WhiteAloneNotHispanicorLatino_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WhiteAloneNotHispanicorLatino_1, 
                style: style_WhiteAloneNotHispanicorLatino_1,
                interactive: true,
    title: 'White Alone, Not Hispanic or Latino<br />\
    <img src="styles/legend/WhiteAloneNotHispanicorLatino_1_0.png" /> No Data<br />\
    <img src="styles/legend/WhiteAloneNotHispanicorLatino_1_1.png" /> Below Goal of 7.25%<br />\
    <img src="styles/legend/WhiteAloneNotHispanicorLatino_1_2.png" /> 7.25% - 15%<br />\
    <img src="styles/legend/WhiteAloneNotHispanicorLatino_1_3.png" /> 15% - 25%<br />\
    <img src="styles/legend/WhiteAloneNotHispanicorLatino_1_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/WhiteAloneNotHispanicorLatino_1_5.png" /> >35%<br />'
        });
var format_HispanicorLatino_2 = new ol.format.GeoJSON();
var features_HispanicorLatino_2 = format_HispanicorLatino_2.readFeatures(json_HispanicorLatino_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HispanicorLatino_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HispanicorLatino_2.addFeatures(features_HispanicorLatino_2);
var lyr_HispanicorLatino_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HispanicorLatino_2, 
                style: style_HispanicorLatino_2,
                interactive: true,
    title: 'Hispanic or Latino<br />\
    <img src="styles/legend/HispanicorLatino_2_0.png" /> No Data<br />\
    <img src="styles/legend/HispanicorLatino_2_1.png" /> Below Goal of 7.25%<br />\
    <img src="styles/legend/HispanicorLatino_2_2.png" /> 7.25% - 15%<br />\
    <img src="styles/legend/HispanicorLatino_2_3.png" /> 15% - 25%<br />\
    <img src="styles/legend/HispanicorLatino_2_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/HispanicorLatino_2_5.png" /> >35%<br />'
        });
var format_TwoorMoreRaces_3 = new ol.format.GeoJSON();
var features_TwoorMoreRaces_3 = format_TwoorMoreRaces_3.readFeatures(json_TwoorMoreRaces_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TwoorMoreRaces_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TwoorMoreRaces_3.addFeatures(features_TwoorMoreRaces_3);
var lyr_TwoorMoreRaces_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TwoorMoreRaces_3, 
                style: style_TwoorMoreRaces_3,
                interactive: true,
    title: 'Two or More Races<br />\
    <img src="styles/legend/TwoorMoreRaces_3_0.png" /> No Data<br />\
    <img src="styles/legend/TwoorMoreRaces_3_1.png" /> Below Goal of 7.25%<br />\
    <img src="styles/legend/TwoorMoreRaces_3_2.png" /> 7.25% - 25%<br />\
    <img src="styles/legend/TwoorMoreRaces_3_3.png" /> 25% - 50%<br />\
    <img src="styles/legend/TwoorMoreRaces_3_4.png" /> 50% - 75%<br />\
    <img src="styles/legend/TwoorMoreRaces_3_5.png" /> 75% - 100%<br />'
        });
var format_SomeOtherRace_4 = new ol.format.GeoJSON();
var features_SomeOtherRace_4 = format_SomeOtherRace_4.readFeatures(json_SomeOtherRace_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SomeOtherRace_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SomeOtherRace_4.addFeatures(features_SomeOtherRace_4);
var lyr_SomeOtherRace_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SomeOtherRace_4, 
                style: style_SomeOtherRace_4,
                interactive: true,
    title: 'Some Other Race<br />\
    <img src="styles/legend/SomeOtherRace_4_0.png" /> No Data<br />\
    <img src="styles/legend/SomeOtherRace_4_1.png" /> Below Goal of 7.25%<br />\
    <img src="styles/legend/SomeOtherRace_4_2.png" /> 7.25% - 25%<br />\
    <img src="styles/legend/SomeOtherRace_4_3.png" /> 25% - 50%<br />\
    <img src="styles/legend/SomeOtherRace_4_4.png" /> 50% - 75%<br />\
    <img src="styles/legend/SomeOtherRace_4_5.png" /> 75% - 100%<br />'
        });
var format_NativeHawaiianandOtherPacificIslander_5 = new ol.format.GeoJSON();
var features_NativeHawaiianandOtherPacificIslander_5 = format_NativeHawaiianandOtherPacificIslander_5.readFeatures(json_NativeHawaiianandOtherPacificIslander_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NativeHawaiianandOtherPacificIslander_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NativeHawaiianandOtherPacificIslander_5.addFeatures(features_NativeHawaiianandOtherPacificIslander_5);
var lyr_NativeHawaiianandOtherPacificIslander_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NativeHawaiianandOtherPacificIslander_5, 
                style: style_NativeHawaiianandOtherPacificIslander_5,
                interactive: true,
    title: 'Native Hawaiian and Other Pacific Islander<br />\
    <img src="styles/legend/NativeHawaiianandOtherPacificIslander_5_0.png" /> No Data<br />\
    <img src="styles/legend/NativeHawaiianandOtherPacificIslander_5_1.png" /> Below Goal of 7.25%<br />\
    <img src="styles/legend/NativeHawaiianandOtherPacificIslander_5_2.png" /> 7.25% - 25%<br />\
    <img src="styles/legend/NativeHawaiianandOtherPacificIslander_5_3.png" /> 25% - 50%<br />\
    <img src="styles/legend/NativeHawaiianandOtherPacificIslander_5_4.png" /> 50% - 75%<br />\
    <img src="styles/legend/NativeHawaiianandOtherPacificIslander_5_5.png" /> 75% - 100%<br />'
        });
var format_Asian_6 = new ol.format.GeoJSON();
var features_Asian_6 = format_Asian_6.readFeatures(json_Asian_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Asian_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Asian_6.addFeatures(features_Asian_6);
var lyr_Asian_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Asian_6, 
                style: style_Asian_6,
                interactive: true,
    title: 'Asian<br />\
    <img src="styles/legend/Asian_6_0.png" /> No Data<br />\
    <img src="styles/legend/Asian_6_1.png" /> Below Goal of 7.25%<br />\
    <img src="styles/legend/Asian_6_2.png" /> 7.25% - 15%<br />\
    <img src="styles/legend/Asian_6_3.png" /> 15% - 25%<br />\
    <img src="styles/legend/Asian_6_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/Asian_6_5.png" /> >35%<br />'
        });
var format_AmericanIndianandAlaskaNative_7 = new ol.format.GeoJSON();
var features_AmericanIndianandAlaskaNative_7 = format_AmericanIndianandAlaskaNative_7.readFeatures(json_AmericanIndianandAlaskaNative_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmericanIndianandAlaskaNative_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmericanIndianandAlaskaNative_7.addFeatures(features_AmericanIndianandAlaskaNative_7);
var lyr_AmericanIndianandAlaskaNative_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AmericanIndianandAlaskaNative_7, 
                style: style_AmericanIndianandAlaskaNative_7,
                interactive: true,
    title: 'American Indian and Alaska Native <br />\
    <img src="styles/legend/AmericanIndianandAlaskaNative_7_0.png" /> No Data<br />\
    <img src="styles/legend/AmericanIndianandAlaskaNative_7_1.png" /> Below Goal of 7.25%<br />\
    <img src="styles/legend/AmericanIndianandAlaskaNative_7_2.png" /> 7.25% - 25%<br />\
    <img src="styles/legend/AmericanIndianandAlaskaNative_7_3.png" /> 25% - 50%<br />\
    <img src="styles/legend/AmericanIndianandAlaskaNative_7_4.png" /> 50% - 75%<br />\
    <img src="styles/legend/AmericanIndianandAlaskaNative_7_5.png" /> 75% - 100%<br />'
        });
var format_BlackorAfricanAmerican_8 = new ol.format.GeoJSON();
var features_BlackorAfricanAmerican_8 = format_BlackorAfricanAmerican_8.readFeatures(json_BlackorAfricanAmerican_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlackorAfricanAmerican_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlackorAfricanAmerican_8.addFeatures(features_BlackorAfricanAmerican_8);
var lyr_BlackorAfricanAmerican_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BlackorAfricanAmerican_8, 
                style: style_BlackorAfricanAmerican_8,
                interactive: true,
    title: 'Black or African American<br />\
    <img src="styles/legend/BlackorAfricanAmerican_8_0.png" /> No Data<br />\
    <img src="styles/legend/BlackorAfricanAmerican_8_1.png" /> Below Goal of 7.25%<br />\
    <img src="styles/legend/BlackorAfricanAmerican_8_2.png" /> 7.25% - 25%<br />\
    <img src="styles/legend/BlackorAfricanAmerican_8_3.png" /> 25% - 50%<br />\
    <img src="styles/legend/BlackorAfricanAmerican_8_4.png" /> 50% - 75%<br />\
    <img src="styles/legend/BlackorAfricanAmerican_8_5.png" /> 75% - 100%<br />'
        });
var format_White_9 = new ol.format.GeoJSON();
var features_White_9 = format_White_9.readFeatures(json_White_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_White_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_White_9.addFeatures(features_White_9);
var lyr_White_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_White_9, 
                style: style_White_9,
                interactive: true,
    title: 'White<br />\
    <img src="styles/legend/White_9_0.png" /> No Data<br />\
    <img src="styles/legend/White_9_1.png" /> Below Goal of 7.25%<br />\
    <img src="styles/legend/White_9_2.png" /> 7.25% - 15%<br />\
    <img src="styles/legend/White_9_3.png" /> 15% - 25%<br />\
    <img src="styles/legend/White_9_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/White_9_5.png" /> >35%<br />'
        });
var format_Female_10 = new ol.format.GeoJSON();
var features_Female_10 = format_Female_10.readFeatures(json_Female_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Female_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Female_10.addFeatures(features_Female_10);
var lyr_Female_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Female_10, 
                style: style_Female_10,
                interactive: true,
    title: 'Female<br />\
    <img src="styles/legend/Female_10_0.png" /> No Data<br />\
    <img src="styles/legend/Female_10_1.png" /> Below Goal of 7.25%<br />\
    <img src="styles/legend/Female_10_2.png" /> 7.25% - 15%<br />\
    <img src="styles/legend/Female_10_3.png" /> 15% - 25%<br />\
    <img src="styles/legend/Female_10_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/Female_10_5.png" /> >35%<br />'
        });
var format_Male_11 = new ol.format.GeoJSON();
var features_Male_11 = format_Male_11.readFeatures(json_Male_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Male_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Male_11.addFeatures(features_Male_11);
var lyr_Male_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Male_11, 
                style: style_Male_11,
                interactive: true,
    title: 'Male<br />\
    <img src="styles/legend/Male_11_0.png" /> No Data<br />\
    <img src="styles/legend/Male_11_1.png" /> Below Goal of 7.25%<br />\
    <img src="styles/legend/Male_11_2.png" /> 7.25% - 15%<br />\
    <img src="styles/legend/Male_11_3.png" /> 15% - 25$<br />\
    <img src="styles/legend/Male_11_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/Male_11_5.png" /> >35%<br />'
        });
var format_CombinedPopulation_12 = new ol.format.GeoJSON();
var features_CombinedPopulation_12 = format_CombinedPopulation_12.readFeatures(json_CombinedPopulation_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CombinedPopulation_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CombinedPopulation_12.addFeatures(features_CombinedPopulation_12);
var lyr_CombinedPopulation_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CombinedPopulation_12, 
                style: style_CombinedPopulation_12,
                interactive: true,
    title: 'Combined Population<br />\
    <img src="styles/legend/CombinedPopulation_12_0.png" /> No Data<br />\
    <img src="styles/legend/CombinedPopulation_12_1.png" /> Below Goal of 7.25%<br />\
    <img src="styles/legend/CombinedPopulation_12_2.png" /> 7.25% - 15%<br />\
    <img src="styles/legend/CombinedPopulation_12_3.png" /> 15% - 25%<br />\
    <img src="styles/legend/CombinedPopulation_12_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/CombinedPopulation_12_5.png" /> >35%<br />'
        });

lyr_Google_road_0.setVisible(true);lyr_WhiteAloneNotHispanicorLatino_1.setVisible(true);lyr_HispanicorLatino_2.setVisible(true);lyr_TwoorMoreRaces_3.setVisible(true);lyr_SomeOtherRace_4.setVisible(true);lyr_NativeHawaiianandOtherPacificIslander_5.setVisible(true);lyr_Asian_6.setVisible(true);lyr_AmericanIndianandAlaskaNative_7.setVisible(true);lyr_BlackorAfricanAmerican_8.setVisible(true);lyr_White_9.setVisible(true);lyr_Female_10.setVisible(true);lyr_Male_11.setVisible(true);lyr_CombinedPopulation_12.setVisible(true);
var layersList = [lyr_Google_road_0,lyr_WhiteAloneNotHispanicorLatino_1,lyr_HispanicorLatino_2,lyr_TwoorMoreRaces_3,lyr_SomeOtherRace_4,lyr_NativeHawaiianandOtherPacificIslander_5,lyr_Asian_6,lyr_AmericanIndianandAlaskaNative_7,lyr_BlackorAfricanAmerican_8,lyr_White_9,lyr_Female_10,lyr_Male_11,lyr_CombinedPopulation_12];
lyr_WhiteAloneNotHispanicorLatino_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Pro_50': 'Pro_50', 'Male_Pov': 'Male_Pov', 'Population for whom poverty status is determined': 'Population for whom poverty status is determined', 'Male': 'Male', 'Female': 'Female', 'White alone': 'White alone', 'Black or African American alone': 'Black or African American alone', 'American Indian and Alaska Native alone': 'American Indian and Alaska Native alone', 'Asian alone': 'Asian alone', 'Native Hawaiian and Other Pacific Islander alone': 'Native Hawaiian and Other Pacific Islander alone', 'Some other race alone': 'Some other race alone', 'Two or more races': 'Two or more races', 'Hispanic or Latino origin (of any race)': 'Hispanic or Latino origin (of any race)', 'White alone, not Hispanic or Latino': 'White alone, not Hispanic or Latino', });
lyr_HispanicorLatino_2.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Pro_50': 'Pro_50', 'Male_Pov': 'Male_Pov', 'Population for whom poverty status is determined': 'Population for whom poverty status is determined', 'Male': 'Male', 'Female': 'Female', 'White alone': 'White alone', 'Black or African American alone': 'Black or African American alone', 'American Indian and Alaska Native alone': 'American Indian and Alaska Native alone', 'Asian alone': 'Asian alone', 'Native Hawaiian and Other Pacific Islander alone': 'Native Hawaiian and Other Pacific Islander alone', 'Some other race alone': 'Some other race alone', 'Two or more races': 'Two or more races', 'Hispanic or Latino origin (of any race)': 'Hispanic or Latino origin (of any race)', 'White alone, not Hispanic or Latino': 'White alone, not Hispanic or Latino', });
lyr_TwoorMoreRaces_3.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Pro_50': 'Pro_50', 'Male_Pov': 'Male_Pov', 'Population for whom poverty status is determined': 'Population for whom poverty status is determined', 'Male': 'Male', 'Female': 'Female', 'White alone': 'White alone', 'Black or African American alone': 'Black or African American alone', 'American Indian and Alaska Native alone': 'American Indian and Alaska Native alone', 'Asian alone': 'Asian alone', 'Native Hawaiian and Other Pacific Islander alone': 'Native Hawaiian and Other Pacific Islander alone', 'Some other race alone': 'Some other race alone', 'Two or more races': 'Two or more races', 'Hispanic or Latino origin (of any race)': 'Hispanic or Latino origin (of any race)', 'White alone, not Hispanic or Latino': 'White alone, not Hispanic or Latino', });
lyr_SomeOtherRace_4.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Pro_50': 'Pro_50', 'Male_Pov': 'Male_Pov', 'Population for whom poverty status is determined': 'Population for whom poverty status is determined', 'Male': 'Male', 'Female': 'Female', 'White alone': 'White alone', 'Black or African American alone': 'Black or African American alone', 'American Indian and Alaska Native alone': 'American Indian and Alaska Native alone', 'Asian alone': 'Asian alone', 'Native Hawaiian and Other Pacific Islander alone': 'Native Hawaiian and Other Pacific Islander alone', 'Some other race alone': 'Some other race alone', 'Two or more races': 'Two or more races', 'Hispanic or Latino origin (of any race)': 'Hispanic or Latino origin (of any race)', 'White alone, not Hispanic or Latino': 'White alone, not Hispanic or Latino', });
lyr_NativeHawaiianandOtherPacificIslander_5.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Pro_50': 'Pro_50', 'Male_Pov': 'Male_Pov', 'Population for whom poverty status is determined': 'Population for whom poverty status is determined', 'Male': 'Male', 'Female': 'Female', 'White alone': 'White alone', 'Black or African American alone': 'Black or African American alone', 'American Indian and Alaska Native alone': 'American Indian and Alaska Native alone', 'Asian alone': 'Asian alone', 'Native Hawaiian and Other Pacific Islander alone': 'Native Hawaiian and Other Pacific Islander alone', 'Some other race alone': 'Some other race alone', 'Two or more races': 'Two or more races', 'Hispanic or Latino origin (of any race)': 'Hispanic or Latino origin (of any race)', 'White alone, not Hispanic or Latino': 'White alone, not Hispanic or Latino', });
lyr_Asian_6.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Pro_50': 'Pro_50', 'Male_Pov': 'Male_Pov', 'Population for whom poverty status is determined': 'Population for whom poverty status is determined', 'Male': 'Male', 'Female': 'Female', 'White alone': 'White alone', 'Black or African American alone': 'Black or African American alone', 'American Indian and Alaska Native alone': 'American Indian and Alaska Native alone', 'Asian alone': 'Asian', 'Native Hawaiian and Other Pacific Islander alone': 'Native Hawaiian and Other Pacific Islander alone', 'Some other race alone': 'Some other race alone', 'Two or more races': 'Two or more races', 'Hispanic or Latino origin (of any race)': 'Hispanic or Latino origin (of any race)', 'White alone, not Hispanic or Latino': 'White alone, not Hispanic or Latino', });
lyr_AmericanIndianandAlaskaNative_7.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Pro_50': 'Pro_50', 'Male_Pov': 'Male_Pov', 'Population for whom poverty status is determined': 'Population for whom poverty status is determined', 'Male': 'Male', 'Female': 'Female', 'White alone': 'White alone', 'Black or African American alone': 'Black or African American alone', 'American Indian and Alaska Native alone': 'American Indian and Alaska Native alone', 'Asian alone': 'Asian alone', 'Native Hawaiian and Other Pacific Islander alone': 'Native Hawaiian and Other Pacific Islander alone', 'Some other race alone': 'Some other race alone', 'Two or more races': 'Two or more races', 'Hispanic or Latino origin (of any race)': 'Hispanic or Latino origin (of any race)', 'White alone, not Hispanic or Latino': 'White alone, not Hispanic or Latino', });
lyr_BlackorAfricanAmerican_8.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Pro_50': 'Pro_50', 'Male_Pov': 'Male_Pov', 'Population for whom poverty status is determined': 'Population for whom poverty status is determined', 'Male': 'Male', 'Female': 'Female', 'White alone': 'White alone', 'Black or African American alone': 'Black or African American alone', 'American Indian and Alaska Native alone': 'American Indian and Alaska Native alone', 'Asian alone': 'Asian alone', 'Native Hawaiian and Other Pacific Islander alone': 'Native Hawaiian and Other Pacific Islander alone', 'Some other race alone': 'Some other race alone', 'Two or more races': 'Two or more races', 'Hispanic or Latino origin (of any race)': 'Hispanic or Latino origin (of any race)', 'White alone, not Hispanic or Latino': 'White alone, not Hispanic or Latino', });
lyr_White_9.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Pro_50': 'Pro_50', 'Male_Pov': 'Male_Pov', 'Population for whom poverty status is determined': 'Population for whom poverty status is determined', 'Male': 'Male', 'Female': 'Female', 'White alone': 'White alone', 'Black or African American alone': 'Black or African American alone', 'American Indian and Alaska Native alone': 'American Indian and Alaska Native alone', 'Asian alone': 'Asian alone', 'Native Hawaiian and Other Pacific Islander alone': 'Native Hawaiian and Other Pacific Islander alone', 'Some other race alone': 'Some other race alone', 'Two or more races': 'Two or more races', 'Hispanic or Latino origin (of any race)': 'Hispanic or Latino origin (of any race)', 'White alone, not Hispanic or Latino': 'White alone, not Hispanic or Latino', });
lyr_Female_10.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Pro_50': 'Pro_50', 'Male_Pov': 'Male_Pov', 'Population for whom poverty status is determined': 'Population for whom poverty status is determined', 'Male': 'Male', 'Female': 'Female', 'White alone': 'White alone', 'Black or African American alone': 'Black or African American alone', 'American Indian and Alaska Native alone': 'American Indian and Alaska Native alone', 'Asian alone': 'Asian alone', 'Native Hawaiian and Other Pacific Islander alone': 'Native Hawaiian and Other Pacific Islander alone', 'Some other race alone': 'Some other race alone', 'Two or more races': 'Two or more races', 'Hispanic or Latino origin (of any race)': 'Hispanic or Latino origin (of any race)', 'White alone, not Hispanic or Latino': 'White alone, not Hispanic or Latino', });
lyr_Male_11.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Pro_50': 'Pro_50', 'Male_Pov': 'Male_Pov', 'Population for whom poverty status is determined': 'Population for whom poverty status is determined', 'Male': 'Male', 'Female': 'Female', 'White alone': 'White alone', 'Black or African American alone': 'Black or African American alone', 'American Indian and Alaska Native alone': 'American Indian and Alaska Native alone', 'Asian alone': 'Asian alone', 'Native Hawaiian and Other Pacific Islander alone': 'Native Hawaiian and Other Pacific Islander alone', 'Some other race alone': 'Some other race alone', 'Two or more races': 'Two or more races', 'Hispanic or Latino origin (of any race)': 'Hispanic or Latino origin (of any race)', 'White alone, not Hispanic or Latino': 'White alone, not Hispanic or Latino', });
lyr_CombinedPopulation_12.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Pro_50': 'Pro_50', 'Male_Pov': 'Male_Pov', 'Population for whom poverty status is determined': 'Combined Population', 'Male': 'Male', 'Female': 'Female', 'White alone': 'White alone', 'Black or African American alone': 'Black or African American alone', 'American Indian and Alaska Native alone': 'American Indian and Alaska Native alone', 'Asian alone': 'Asian alone', 'Native Hawaiian and Other Pacific Islander alone': 'Native Hawaiian and Other Pacific Islander alone', 'Some other race alone': 'Some other race alone', 'Two or more races': 'Two or more races', 'Hispanic or Latino origin (of any race)': 'Hispanic or Latino origin (of any race)', 'White alone, not Hispanic or Latino': 'White alone, not Hispanic or Latino', });
lyr_WhiteAloneNotHispanicorLatino_1.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Pro_50': 'Hidden', 'Male_Pov': 'Hidden', 'Population for whom poverty status is determined': 'Hidden', 'Male': 'Hidden', 'Female': 'Hidden', 'White alone': 'Hidden', 'Black or African American alone': 'Hidden', 'American Indian and Alaska Native alone': 'Hidden', 'Asian alone': 'Hidden', 'Native Hawaiian and Other Pacific Islander alone': 'Hidden', 'Some other race alone': 'Hidden', 'Two or more races': 'Hidden', 'Hispanic or Latino origin (of any race)': 'Hidden', 'White alone, not Hispanic or Latino': 'TextEdit', });
lyr_HispanicorLatino_2.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Pro_50': 'Hidden', 'Male_Pov': 'Hidden', 'Population for whom poverty status is determined': 'Hidden', 'Male': 'Hidden', 'Female': 'Hidden', 'White alone': 'Hidden', 'Black or African American alone': 'Hidden', 'American Indian and Alaska Native alone': 'Hidden', 'Asian alone': 'Hidden', 'Native Hawaiian and Other Pacific Islander alone': 'Hidden', 'Some other race alone': 'Hidden', 'Two or more races': 'Hidden', 'Hispanic or Latino origin (of any race)': 'TextEdit', 'White alone, not Hispanic or Latino': 'Hidden', });
lyr_TwoorMoreRaces_3.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Pro_50': 'Hidden', 'Male_Pov': 'Hidden', 'Population for whom poverty status is determined': 'Hidden', 'Male': 'Hidden', 'Female': 'Hidden', 'White alone': 'Hidden', 'Black or African American alone': 'Hidden', 'American Indian and Alaska Native alone': 'Hidden', 'Asian alone': 'Hidden', 'Native Hawaiian and Other Pacific Islander alone': 'Hidden', 'Some other race alone': 'Hidden', 'Two or more races': 'TextEdit', 'Hispanic or Latino origin (of any race)': 'Hidden', 'White alone, not Hispanic or Latino': 'Hidden', });
lyr_SomeOtherRace_4.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Pro_50': 'Hidden', 'Male_Pov': 'Hidden', 'Population for whom poverty status is determined': 'Hidden', 'Male': 'Hidden', 'Female': 'Hidden', 'White alone': 'Hidden', 'Black or African American alone': 'Hidden', 'American Indian and Alaska Native alone': 'Hidden', 'Asian alone': 'Hidden', 'Native Hawaiian and Other Pacific Islander alone': 'Hidden', 'Some other race alone': 'TextEdit', 'Two or more races': 'Hidden', 'Hispanic or Latino origin (of any race)': 'Hidden', 'White alone, not Hispanic or Latino': 'Hidden', });
lyr_NativeHawaiianandOtherPacificIslander_5.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Pro_50': 'Hidden', 'Male_Pov': 'Hidden', 'Population for whom poverty status is determined': 'Hidden', 'Male': 'Hidden', 'Female': 'Hidden', 'White alone': 'Hidden', 'Black or African American alone': 'Hidden', 'American Indian and Alaska Native alone': 'Hidden', 'Asian alone': 'Hidden', 'Native Hawaiian and Other Pacific Islander alone': 'TextEdit', 'Some other race alone': 'Hidden', 'Two or more races': 'Hidden', 'Hispanic or Latino origin (of any race)': 'Hidden', 'White alone, not Hispanic or Latino': 'Hidden', });
lyr_Asian_6.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Pro_50': 'Hidden', 'Male_Pov': 'Hidden', 'Population for whom poverty status is determined': 'Hidden', 'Male': 'Hidden', 'Female': 'Hidden', 'White alone': 'Hidden', 'Black or African American alone': 'Hidden', 'American Indian and Alaska Native alone': 'Hidden', 'Asian alone': 'TextEdit', 'Native Hawaiian and Other Pacific Islander alone': 'Hidden', 'Some other race alone': 'Hidden', 'Two or more races': 'Hidden', 'Hispanic or Latino origin (of any race)': 'Hidden', 'White alone, not Hispanic or Latino': 'Hidden', });
lyr_AmericanIndianandAlaskaNative_7.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Pro_50': 'Hidden', 'Male_Pov': 'Hidden', 'Population for whom poverty status is determined': 'Hidden', 'Male': 'Hidden', 'Female': 'Hidden', 'White alone': 'Hidden', 'Black or African American alone': 'Hidden', 'American Indian and Alaska Native alone': 'TextEdit', 'Asian alone': 'Hidden', 'Native Hawaiian and Other Pacific Islander alone': 'Hidden', 'Some other race alone': 'Hidden', 'Two or more races': 'Hidden', 'Hispanic or Latino origin (of any race)': 'Hidden', 'White alone, not Hispanic or Latino': 'Hidden', });
lyr_BlackorAfricanAmerican_8.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Pro_50': 'Hidden', 'Male_Pov': 'Hidden', 'Population for whom poverty status is determined': 'Hidden', 'Male': 'Hidden', 'Female': 'Hidden', 'White alone': 'Hidden', 'Black or African American alone': 'TextEdit', 'American Indian and Alaska Native alone': 'Hidden', 'Asian alone': 'Hidden', 'Native Hawaiian and Other Pacific Islander alone': 'Hidden', 'Some other race alone': 'Hidden', 'Two or more races': 'Hidden', 'Hispanic or Latino origin (of any race)': 'Hidden', 'White alone, not Hispanic or Latino': 'Hidden', });
lyr_White_9.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Pro_50': 'Hidden', 'Male_Pov': 'Hidden', 'Population for whom poverty status is determined': 'Hidden', 'Male': 'Hidden', 'Female': 'Hidden', 'White alone': 'TextEdit', 'Black or African American alone': 'Hidden', 'American Indian and Alaska Native alone': 'Hidden', 'Asian alone': 'Hidden', 'Native Hawaiian and Other Pacific Islander alone': 'Hidden', 'Some other race alone': 'Hidden', 'Two or more races': 'Hidden', 'Hispanic or Latino origin (of any race)': 'Hidden', 'White alone, not Hispanic or Latino': 'Hidden', });
lyr_Female_10.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Pro_50': 'Hidden', 'Male_Pov': 'Hidden', 'Population for whom poverty status is determined': 'Hidden', 'Male': 'Hidden', 'Female': 'TextEdit', 'White alone': 'Hidden', 'Black or African American alone': 'Hidden', 'American Indian and Alaska Native alone': 'Hidden', 'Asian alone': 'Hidden', 'Native Hawaiian and Other Pacific Islander alone': 'Hidden', 'Some other race alone': 'Hidden', 'Two or more races': 'Hidden', 'Hispanic or Latino origin (of any race)': 'Hidden', 'White alone, not Hispanic or Latino': 'Hidden', });
lyr_Male_11.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Pro_50': 'Hidden', 'Male_Pov': 'Hidden', 'Population for whom poverty status is determined': 'Hidden', 'Male': 'TextEdit', 'Female': 'Hidden', 'White alone': 'Hidden', 'Black or African American alone': 'Hidden', 'American Indian and Alaska Native alone': 'Hidden', 'Asian alone': 'Hidden', 'Native Hawaiian and Other Pacific Islander alone': 'Hidden', 'Some other race alone': 'Hidden', 'Two or more races': 'Hidden', 'Hispanic or Latino origin (of any race)': 'Hidden', 'White alone, not Hispanic or Latino': 'Hidden', });
lyr_CombinedPopulation_12.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Pro_50': 'Hidden', 'Male_Pov': 'Hidden', 'Population for whom poverty status is determined': 'TextEdit', 'Male': 'Hidden', 'Female': 'Hidden', 'White alone': 'Hidden', 'Black or African American alone': 'Hidden', 'American Indian and Alaska Native alone': 'Hidden', 'Asian alone': 'Hidden', 'Native Hawaiian and Other Pacific Islander alone': 'Hidden', 'Some other race alone': 'Hidden', 'Two or more races': 'Hidden', 'Hispanic or Latino origin (of any race)': 'Hidden', 'White alone, not Hispanic or Latino': 'Hidden', });
lyr_WhiteAloneNotHispanicorLatino_1.set('fieldLabels', {'White alone, not Hispanic or Latino': 'header label', });
lyr_HispanicorLatino_2.set('fieldLabels', {'Hispanic or Latino origin (of any race)': 'header label', });
lyr_TwoorMoreRaces_3.set('fieldLabels', {'Two or more races': 'header label', });
lyr_SomeOtherRace_4.set('fieldLabels', {'Some other race alone': 'header label', });
lyr_NativeHawaiianandOtherPacificIslander_5.set('fieldLabels', {'Native Hawaiian and Other Pacific Islander alone': 'header label', });
lyr_Asian_6.set('fieldLabels', {'Asian alone': 'no label', });
lyr_AmericanIndianandAlaskaNative_7.set('fieldLabels', {'American Indian and Alaska Native alone': 'header label', });
lyr_BlackorAfricanAmerican_8.set('fieldLabels', {'Black or African American alone': 'header label', });
lyr_White_9.set('fieldLabels', {'White alone': 'header label', });
lyr_Female_10.set('fieldLabels', {'Female': 'header label', });
lyr_Male_11.set('fieldLabels', {'Male': 'header label', });
lyr_CombinedPopulation_12.set('fieldLabels', {'Population for whom poverty status is determined': 'header label', });
lyr_CombinedPopulation_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});