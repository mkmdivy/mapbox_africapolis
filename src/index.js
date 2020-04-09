import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import Select from 'react-select';

//// Access token for Africapolis mapbox account
mapboxgl.accessToken = 'pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA';


//// Basic setting of the map
class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 0,
      zoom: 3
    };

  }



  componentDidMount() {

//// Initial map setting
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mkmd/ck88rk21s2ep51jpjjnyz9o3p', /// Select mapstyle from mapbox studio
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('move', () => {
    this.setState({
    lng: map.getCenter().lng.toFixed(4),
    lat: map.getCenter().lat.toFixed(4),
    zoom: map.getZoom().toFixed(2)
    });
    });
//// Color setting

  var agglomeration_fill_color =[
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


  var agglomeration_stroke_color =[
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



//// Import Africapolis agglomerations from mapbox
    map.on('load', function() {
      map.addSource(
        'africapolis_agglos',
      {
        type: 'vector',
        url: 'mapbox://mkmd.3oidh3is'
      }
    );

      map.addLayer({
        id: 'agglomerations',
        source:'africapolis_agglos',
        type: 'circle',
        'source-layer':'africapolis2020-3al5d8',
        filter:[">","Population_2015",0],
        paint: {
       'circle-stroke-color': agglomeration_stroke_color,
       'circle-stroke-width': 3,
       'circle-color': agglomeration_fill_color
        }
      });
    });
////

function remove(obj) {map.removeLayer(obj)}

function add_country(obj,country) {map.addLayer({
  id: 'agglomerations',
  source:'africapolis_agglos',
  type: 'circle',
  'source-layer':'africapolis2020-3al5d8',
  filter:["all",["==","ISO3",country],[">","Population_2015",0]],
  paint: {
 'circle-stroke-color': agglomeration_stroke_color,
 'circle-stroke-width': 3,
 'circle-color': agglomeration_fill_color
  }
});
}
    map.on('load', function(){
remove('agglomerations');
add_country('agglomerations','NER');
});

}



state = {
  selectedOption: null,
};
handleChange = selectedOption => {
  this.setState(
    { selectedOption },
    () => {
      // remove('agglomerations')
      // add_country('agglomerations',this.state.selectedOption)
      console.log(`Option selected:`, this.state.selectedOption)


    }
  );
  }

  render() {
    const { selectedOption } = this.state;
    const options = [{ label:"Angola",value:"AGO" },
{ label:"Burundi",value:"BDI" },
{ label:"Benin",value:"BEN" },
{ label:"Burkina Faso",value:"BFA" },
{ label:"Botswana",value:"BWA" },
{ label:"Central African Republic",value:"CAF" },
{ label:"Cote d`Ivoire",value:"CIV" },
{ label:"Cameroon",value:"CMR" },
{ label:"Democratic Republic of the Congo",value:"COD" },
{ label:"Republic of the Congo",value:"COG" },
{ label:"Cabo Verde",value:"CPV" },
{ label:"Djibouti",value:"DJI" },
{ label:"Algeria",value:"DZA" },
{ label:"Egypt",value:"EGY" },
{ label:"Eritrea",value:"ERI" },
{ label:"Ethiopia",value:"ETH" },
{ label:"Gabon",value:"GAB" },
{ label:"Ghana",value:"GHA" },
{ label:"Guinea",value:"GIN" },
{ label:"The Gambia",value:"GMB" },
{ label:"Guinea-Bissau",value:"GNB" },
{ label:"Equatorial Guinea",value:"GNQ" },
{ label:"Kenya",value:"KEN" },
{ label:"Liberia",value:"LBR" },
{ label:"Libya",value:"LBY" },
{ label:"Lesotho",value:"LSO" },
{ label:"Morocco",value:"MAR" },
{ label:"Mali",value:"MLI" },
{ label:"Mozambique",value:"MOZ" },
{ label:"Mauritania",value:"MRT" },
{ label:"Malawi",value:"MWI" },
{ label:"Namibia",value:"NAM" },
{ label:"Niger",value:"NER" },
{ label:"Nigeria",value:"NGA" },
{ label:"Rwanda",value:"RWA" },
{ label:"Sudan",value:"SDN" },
{ label:"Senegal",value:"SEN" },
{ label:"Sierra Leone",value:"SLE" },
{ label:"Somalia",value:"SOM" },
{ label:"South Sudan",value:"SSD" },
{ label:"Sao Tome and Principe",value:"STP" },
{ label:"Kingdom of Eswatini",value:"SWZ" },
{ label:"Chad",value:"TCD" },
{ label:"Togo",value:"TGO" },
{ label:"Tunisia",value:"TUN" },
{ label:"Tanzania",value:"TZA" },
{ label:"Uganda",value:"UGA" },
{ label:"South Africa",value:"ZAF" },
{ label:"Zambia",value:"ZMB" },
{ label:"Zimbabwe",value:"ZWE" }];
    return (
      <div>
        <div ref={el => this.mapContainer = el} className="mapContainer" >
        <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
              />
                </div>
      </div>
    )
  }



}

ReactDOM.render(<Application />, document.getElementById('app'));
