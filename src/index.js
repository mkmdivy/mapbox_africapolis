import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import Select from 'react-select';
//// Access token for Africapolis mapbox account
mapboxgl.accessToken = 'pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA';


const countryISOMapping = { DZ: 'DZA', AO: 'AGO', BJ: 'BEN', BW: 'BWA', BF: 'BFA', BI: 'BDI', CM: 'CMR', CV: 'CPV', CF: 'CAF', TD: 'TCD', CG: 'COG', CD: 'COD', CI: 'CIV', DJ: 'DJI', EG: 'EGY', GQ: 'GNQ', ER: 'ERI', ET: 'ETH', GA: 'GAB', GM: 'GMB', GH: 'GHA', GN: 'GIN', GW: 'GNB', KE: 'KEN', LS: 'LSO', LR: 'LBR', LY: 'LBY', MW: 'MWI', ML: 'MLI', MR: 'MRT', MA: 'MAR', MZ: 'MOZ', NA: 'NAM', NE: 'NER', NG: 'NGA', RW: 'RWA', ST: 'STP', SN: 'SEN', SL: 'SLE', SO: 'SOM', ZA: 'ZAF', SS: 'SSD', SD: 'SDN', SZ: 'SWZ', TZ: 'TZA', TG: 'TGO', TN: 'TUN', UG: 'UGA', ZM: 'ZMB', ZW: 'ZWE'}

function getCountryISO3(countryCode) { return countryISOMapping[countryCode] }

const agglomeration_fill_color =[
  "step",
  ["get", "Population_2015"],
  "hsla(0, 0%, 8%, 0.5)",
  10000,
  "hsla(55, 30%, 93%, 0.5)",
  30000,
  "hsla(60, 100%, 90%, 0.5)",
  100000,
  "hsla(98, 55%, 81%, 0.5)",
  300000,
  "hsla(166, 44%, 65%, 0.5)",
  1000000,
  "hsla(186, 53%, 51%, 0.5)",
  2000000,
  "hsla(197, 74%, 43%, 0.5)",
  11847635,
  "hsla(197, 74%, 43%, 0.5)"
 ]
 const agglomeration_stroke_color =[
  "step",
  ["get", "Population_2015"],
  "hsla(0, 0%, 8%, 1)",
  10000,
  "hsla(55, 30%, 93%, 1)",
  30000,
  "hsla(60, 100%, 90%, 1)",
  100000,
  "hsla(98, 55%, 81%, 1)",
  300000,
  "hsla(166, 44%, 65%, 1)",
  1000000,
  "hsla(186, 53%, 51%, 1)",
  2000000,
  "hsla(197, 74%, 43%, 1)",
  11847635,
  "hsla(197, 74%, 43%, 1)"
 ]
 const options = [{ label:"Angola",value:"AGO" }, { label:"Burundi",value:"BDI" }, { label:"Benin",value:"BEN" }, { label:"Burkina Faso",value:"BFA" }, { label:"Botswana",value:"BWA" }, { label:"Central African Republic",value:"CAF" }, { label:"Cote d`Ivoire",value:"CIV" }, { label:"Cameroon",value:"CMR" }, { label:"Democratic Republic of the Congo",value:"COD" }, { label:"Republic of the Congo",value:"COG" }, { label:"Cabo Verde",value:"CPV" }, { label:"Djibouti",value:"DJI" }, { label:"Algeria",value:"DZA" }, { label:"Egypt",value:"EGY" }, { label:"Eritrea",value:"ERI" }, { label:"Ethiopia",value:"ETH" }, { label:"Gabon",value:"GAB" }, { label:"Ghana",value:"GHA" }, { label:"Guinea",value:"GIN" }, { label:"The Gambia",value:"GMB" }, { label:"Guinea-Bissau",value:"GNB" }, { label:"Equatorial Guinea",value:"GNQ" }, { label:"Kenya",value:"KEN" }, { label:"Liberia",value:"LBR" }, { label:"Libya",value:"LBY" }, { label:"Lesotho",value:"LSO" }, { label:"Morocco",value:"MAR" }, { label:"Mali",value:"MLI" }, { label:"Mozambique",value:"MOZ" }, { label:"Mauritania",value:"MRT" }, { label:"Malawi",value:"MWI" }, { label:"Namibia",value:"NAM" }, { label:"Niger",value:"NER" }, { label:"Nigeria",value:"NGA" }, { label:"Rwanda",value:"RWA" }, { label:"Sudan",value:"SDN" }, { label:"Senegal",value:"SEN" }, { label:"Sierra Leone",value:"SLE" }, { label:"Somalia",value:"SOM" }, { label:"South Sudan",value:"SSD" }, { label:"Sao Tome and Principe",value:"STP" }, { label:"Kingdom of Eswatini",value:"SWZ" }, { label:"Chad",value:"TCD" }, { label:"Togo",value:"TGO" }, { label:"Tunisia",value:"TUN" }, { label:"Tanzania",value:"TZA" }, { label:"Uganda",value:"UGA" }, { label:"South Africa",value:"ZAF" }, { label:"Zambia",value:"ZMB" }, { label:"Zimbabwe",value:"ZWE" }];

//// Basic setting of the map
class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 0,
      zoom: 3,
      selectedOption: {label: '', value: ''}
    };
  }
componentDidMount() {
//// Initial map setting

     this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mkmd/ck88rk21s2ep51jpjjnyz9o3p', /// Select mapstyle from mapbox studio
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    this.map.on('move', () => {
      this.setState({
      lng: this.map.getCenter().lng.toFixed(4),
      lat: this.map.getCenter().lat.toFixed(4),
      zoom: this.map.getZoom().toFixed(2)
      });
    });
//// Import Africapolis agglomerations from mapbox
    this.map.on('load', () => {
// Add Country shape
      this.map.addSource('africapolis_country', { type: 'vector', url: 'mapbox://mkmd.ck19bzbfg07z42tmz06bk8soe-6dzi4'});
// Add Agglomerations
      this.map.addSource('africapolis_agglos', { type: 'vector', url: 'mapbox://mkmd.3e0rk98j'});
// Add Country label
      this.map.addSource('africapolis_country_label', { type: 'vector', url: 'mapbox://mapbox.mapbox-streets-v7'});

// Add Country layer
      this.map.addLayer({
            id: 'country',
            source:'africapolis_country',
            type: 'fill',
            'source-layer':'AfricaContinent',
            //filter:[">","Population_2015",0],
            paint: {
              'fill-color': 'hsl(56, 96%, 67%)',
              'fill-opacity': 0.5
            }
        });


// Add Agglomerations layer
      this.map.addLayer({
            id: 'agglomerations',
            source:'africapolis_agglos',
            type: 'circle',
            'source-layer':'africapolis2020-3mv6ux',
            filter:[">","Population_2015",0],
            paint: {
                'circle-stroke-color': agglomeration_stroke_color,
                'circle-stroke-width': 3,
                'circle-color': agglomeration_fill_color
            }
        });

//mkmd.ck19bzbfg07z42tmz06bk8soe-6dzi4
//AfricaContinent
//ISO3_CODE
      this.map.addLayer({
            id: 'country_labels',
            source:'africapolis_country_label',
            type: 'symbol',
            'source-layer':'country_label',
            filter:[ "all", [ "in", "$type", "Polygon", "LineString", "Point" ], [ "all", [ "in", "code", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "DZ", "EG", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "KE", "LR", "LS", "LY", "MA", "ML", "MR", "MW", "MZ", "NA", "NE", "NG", "RW", "SD", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TG", "TN", "TZ", "UG", "ZA", "ZM", "ZW" ] ] ],
            layout: {
              'text-field':["get","name_en"],
              'text-font': [  "Helvetica Neue LT Std 75 Bold", "Arial Unicode MS Regular"],
              'text-size': [ "interpolate", ["linear"], ["zoom"], 2, [ "step", ["get", "scalerank"], 10, 3, 8, 5, 5 ], 9, [ "step", ["get", "scalerank"], 35, 3, 27, 5, 22 ] ]

              //'text-color':'#FFFF00'
                //'circle-stroke-color': agglomeration_stroke_color,
                //'circle-stroke-width': 3,
                //'circle-color': agglomeration_fill_color
            }
        });

      this.map.on('click', 'country_labels', function(e) {
      //this.setState({ selectedOption: e.features[0].properties.name_en})
      //console.log(e.features[0].properties.code)
      console.log(getCountryISO3(e.features[0].properties.code))
      });



    });


}
componentDidUpdate(prevProps, prevState) {
    if( prevState.selectedOption !== this.state.selectedOption ) {
            this.remove('country');
            this.add_shape('country',this.state.selectedOption.value);
            this.remove('agglomerations');
            this.add_point('agglomerations',this.state.selectedOption.value);
    }
}
remove = obj => {
    this.map.removeLayer(obj)
}
add_point = (obj,country) => {
    this.map.addLayer({
        id: obj,
        source:'africapolis_agglos',
        type: 'circle',
        'source-layer':'africapolis2020-3mv6ux',
        filter:["all",["==","ISO3",country],[">","Population_2015",0]],
        paint: {
        'circle-stroke-color': agglomeration_stroke_color,
        'circle-stroke-width': 3,
        'circle-color': agglomeration_fill_color
        }
    });
}
add_shape = (obj,country) => {
    this.map.addLayer({
        id: obj,
        source:'africapolis_country',
        type: 'fill',
        'source-layer':'AfricaContinent',
        filter:["==","ISO3",country],
        paint: {
          'fill-color': 'hsl(56, 96%, 67%)',
          'fill-opacity': 0.9
        }
    });
}
render() {
    const { selectedOption } = this.state;
    return (
      <div>
        <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        <div ref={el => this.mapContainer = el} className="mapContainer" >
        <Select
                value={selectedOption}
                onChange={(value) => this.setState({ selectedOption: value}) }
                options={options}
              />
                </div>
      </div>
    )
  }
}
ReactDOM.render(<Application />, document.getElementById('app'));
