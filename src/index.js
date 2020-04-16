import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import Select from 'react-select';
//// Access token for Africapolis mapbox account
mapboxgl.accessToken = 'pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA';


const ISO2toID = {AO:1, BI:2, BJ:3, BF:4, BW:5, CF:6, CI:7, CM:8, CD:9, CG:10, CV:11, DJ:12, DZ:13, EG:14, ER:15, ET:16, GA:17, GH:18, GN:19, GM:20, GW:21, GQ:22, KE:23, LR:24, LY:25, LS:26, MA:27, ML:28, MZ:29, MR:30, MW:31, NA:32, NE:33, NG:34, RW:35, SD:36, SN:37, SL:38, SO:39, SS:40, ST:41, SZ:42, TD:43, TG:44, TN:45, TZ:46, UG:47, ZA:48, ZM:49, ZW:50}

const ID2toISO3 ={1:"AGO",2:"BDI",3:"BEN",4:"BFA",5:"BWA",6:"CAF",7:"CIV",8:"CMR",9:"COD",10:"COG",11:"CPV",12:"DJI",13:"DZA",14:"EGY",15:"ERI",16:"ETH",17:"GAB",18:"GHA",19:"GIN",20:"GMB",21:"GNB",22:"GNQ",23:"KEN",24:"LBR",25:"LBY",26:"LSO",27:"MAR",28:"MLI",29:"MOZ",30:"MRT",31:"MWI",32:"NAM",33:"NER",34:"NGA",35:"RWA",36:"SDN",37:"SEN",38:"SLE",39:"SOM",40:"SSD",41:"STP",42:"SWZ",43:"TCD",44:"TGO",45:"TUN",46:"TZA",47:"UGA",48:"ZAF",49:"ZMB",50:"ZWE"}



const countryBound = {1:[[ 11.67880883351409,-18.0395441112506],[24.0827635146694, -4.377635366107427 ]], 2:[[ 28.993800497072044,-4.46551358137126],[30.8450390589687, -2.312156363797868 ]], 3:[[ 0.774558544224476,6.22447495853009],[3.85082880284835, 12.393508622871479 ]], 4:[[ -5.520794727315028,9.39964017278909],[2.40608025898589, 15.085258417277188 ]], 5:[[ 20.001242333380191,-26.8837918049531],[29.3618491231722, -17.781364563205884 ]], 6:[[ 14.419995451249584,2.21983656110873],[27.4611737379457, 11.009192333734617 ]], 7:[[ -8.569597716425136,4.35678586749077],[-2.49396129202089, 10.734519638596169 ]], 8:[[ 8.492690805810334,1.65404064168932],[16.1943512292781, 13.080169051742061 ]], 9:[[ 12.206163360999454,-13.4581143630142],[31.3065062339817, 5.373053530527471 ]], 10:[[ 11.206388845056409,-5.02585440304395],[18.6498697204794, 3.703069114856376 ]], 11:[[ -25.357213543522146,14.8050880064408],[-22.6764804894878, 17.194676527218675 ]], 12:[[ 41.771301520025517,10.910318687075],[43.4137973572072, 12.706622709944 ]], 13:[[ -8.673969078782633,18.9635345895493],[11.9809701071419, 37.09150628917579 ]], 14:[[ 24.697996257418708,22.0013421472637],[35.7615737570691, 31.664110210683646 ]], 15:[[ 36.437281372495079,12.3605223286841],[43.1336269463708, 18.002201465540395 ]], 16:[[ 32.998438894493276,3.4009078412285],[47.9842742919989, 14.892966221704711 ]], 17:[[ 8.695935814827443,-3.97664306377109],[14.5024185687666, 2.324250541417371 ]], 18:[[ -3.257547122710676,4.73578730703557],[1.19206530262996, 11.173995950817698 ]], 19:[[ -15.079191428377445,7.20230122963262],[-7.64122957762785, 12.673679033707842 ]], 20:[[ -16.826079936892199,13.0527230912037],[-13.7937487859001, 13.827261735338197 ]], 21:[[ -16.716210858836821,10.9267692162175],[-13.6344428845149, 12.684674465103612 ]], 22:[[ 5.603193718085414,-1.46069231784424],[11.3327510702054, 3.785449614422333 ]], 23:[[ 33.910335195172479,-4.67975402178414],[41.8976211272234, 4.620420513282312 ]], 24:[[ -11.492059789361775,4.35124553384174],[-7.36655688248939, 8.553673842533343 ]], 25:[[ 9.388093959395881,19.5073822641284],[25.148468001036, 33.169291009271674 ]], 26:[[ 27.027195141422098,-30.6577392328189],[29.4662204855297, -28.570269367717884 ]], 27:[[ -13.167520611755194,27.6594718132624],[-0.994299518106317, 35.910435009056016 ]], 28:[[ -12.233633448284422,10.1632260034789],[4.24084698276459, 25.000708313044015 ]], 29:[[ 30.218810884823739,-26.8673412758106],[40.8374143565547, -10.475241344327628 ]], 30:[[ -17.067787646818925,14.7171671732258],[-4.82863658274659, 27.296920902860109 ]], 31:[[ 32.679827091722899,-17.1221500948736],[35.9153819427564, -9.371052848075948 ]], 32:[[ 11.717292843399271,-28.9713042880053],[25.2583370790913, -16.957389095741675 ]], 33:[[ 0.164802208197493,11.6958527626051],[15.9966039359589, 23.523016092945412 ]], 34:[[ 2.669757522728581,4.27986046567154],[14.6781749992943, 13.893191705761652 ]], 35:[[ 28.856485458478389,-2.83951089128324],[30.8944758822985, -1.054159681858877 ]], 36:[[ 21.841485463881099,8.68549116542911],[38.5796857766238, 22.226578019072377 ]], 37:[[ -17.518238081460641,12.3056304076076],[-11.3437280103967, 16.694767960271577 ]], 38:[[ -13.310333366046727,6.92762853449416],[-10.2835212397281, 9.998422386395802 ]], 39:[[ 40.991222542242099,-1.66389470891022],[51.4120787206538, 11.97602317344149 ]], 40:[[ 24.154191200790834,3.48882867444349],[35.9483682369437, 12.199554327204311 ]], 41:[[ 6.471150911132696,0.027995333650139],[7.46542771137786, 1.70347746501912 ]], 42:[[ 30.79560223563891,-27.3178130194279],[32.1359794171438, -25.719213671927008 ]], 43:[[ 13.475155474334223,7.43853253283703],[24.0003830151035, 23.451588406824072 ]], 44:[[ -0.148311878875006,6.10365306702988],[1.79632392295911, 11.141009656630501 ]], 45:[[ 7.52585996610344,30.2413525296127],[11.5964283339481, 37.349728455171743 ]], 46:[[ 29.328905446936076,-11.7441908397112],[40.4419197699163, -0.988272329386561 ]], 47:[[ 29.5760895635851,-1.48264056268463],[35.0364719362645, 4.213930495248093 ]], 48:[[ 16.458028493020869,-46.9784114781806],[38.0028518078575, -22.126605626189018 ]], 49:[[ 22.000791365266281,-18.0779855031847],[33.6850993233638, -8.222967862143477 ]], 50:[[ 25.23634621629985,-22.4177288504699],[33.0588711492188, -15.611514198538828 ]]}

function ISO2toID_f(countryCode) { return ISO2toID[countryCode] }
function IDtoISO3_f(countryCode) { return ID2toISO3[countryCode] }
function getCountryBound(countryCode) { return countryBound[countryCode] }

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
 const options = [{ label:"Angola",value:1 }, { label:"Burundi",value:2 }, { label:"Benin",value:3 }, { label:"Burkina Faso",value:4 }, { label:"Botswana",value:5 }, { label:"Central African Republic",value:6 }, { label:"Cote d`Ivoire",value:7 }, { label:"Cameroon",value:8 }, { label:"Democratic Republic of the Congo",value:9 }, { label:"Republic of the Congo",value:10 }, { label:"Cabo Verde",value:11 }, { label:"Djibouti",value:12 }, { label:"Algeria",value:13 }, { label:"Egypt",value:14 }, { label:"Eritrea",value:15 }, { label:"Ethiopia",value:16 }, { label:"Gabon",value:17 }, { label:"Ghana",value:18 }, { label:"Guinea",value:19 }, { label:"The Gambia",value:20 }, { label:"Guinea-Bissau",value:21 }, { label:"Equatorial Guinea",value:22 }, { label:"Kenya",value:23 }, { label:"Liberia",value:24 }, { label:"Libya",value:25 }, { label:"Lesotho",value:26 }, { label:"Morocco",value:27 }, { label:"Mali",value:28 }, { label:"Mozambique",value:29 }, { label:"Mauritania",value:30 }, { label:"Malawi",value:31 }, { label:"Namibia",value:32 }, { label:"Niger",value:33 }, { label:"Nigeria",value:34 }, { label:"Rwanda",value:35 }, { label:"Sudan",value:36 }, { label:"Senegal",value:37 }, { label:"Sierra Leone",value:38 }, { label:"Somalia",value:39 }, { label:"South Sudan",value:40 }, { label:"Sao Tome and Principe",value:41 }, { label:"Kingdom of Eswatini",value:42 }, { label:"Chad",value:43 }, { label:"Togo",value:44}, { label:"Tunisia",value:45 }, { label:"Tanzania",value:46 }, { label:"Uganda",value:47 }, { label:"South Africa",value:48 }, { label:"Zambia",value:49 }, { label:"Zimbabwe",value:50 }];

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
// Add Region labelled
      this.map.addSource('africapolis_region_label', { type: 'vector', url: 'mapbox://mkmd.ck91uxg28274q2voaakwaxzcg-4g4fr'});

// Add Country layer
      this.map.addLayer({
            id: 'country',
            source:'africapolis_country',
            type: 'fill',
            'source-layer':'AfricaContinent',
            //filter:["==","Region_ID",1],
            paint: {
              'fill-color': '#fdfdf5',
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
            filter:["all", ["in", "$type", "Polygon", "LineString", "Point" ], ["all", ["in", "code", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "DZ", "EG", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "KE", "LR", "LS", "LY", "MA", "ML", "MR", "MW", "MZ", "NA", "NE", "NG", "RW", "SD", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TG", "TN", "TZ", "UG", "ZA", "ZM", "ZW" ] ] ],
            layout: {
              'text-field':["get","name_en"],
              'text-font': [ "Helvetica Neue LT Std 75 Bold", "Arial Unicode MS Regular"],
              'text-size': ["interpolate", ["linear"], ["zoom"], 2, ["step", ["get", "scalerank"], 10, 3, 8, 5, 5 ], 9, ["step", ["get", "scalerank"], 35, 3, 27, 5, 22 ] ],

              //'text-color':'#FFFF00'
                //'circle-stroke-color': agglomeration_stroke_color,
                //'circle-stroke-width': 3,
                //'circle-color': agglomeration_fill_color
            },
            paint:{'text-opacity':[ "step",["zoom"],  0,  3,  1,  22,  1]}
        });

        this.map.addLayer({
              id: 'region_labels',
              source:'africapolis_region_label',
              type: 'symbol',
              'source-layer':'Region',
              layout: {
                'text-field':["to-string", ["get", "Name"]],
                'text-font': [ "Helvetica Neue LT Std 75 Bold", "Arial Unicode MS Regular"],
                'text-size': 26
                  //'circle-stroke-color': agglomeration_stroke_color,
                  //'circle-stroke-width': 3,
                  //'circle-color': agglomeration_fill_color
              },
              paint:{'text-color':"hsl(0, 0%, 100%)",
                     'text-halo-color':"hsl(0, 0%, 0%)",
                     'text-halo-width': 3,
                    'text-opacity':[ "step",["zoom"],  1,  3,  0,  22,  0]
              }
          });


        this.map.on('click', 'country_labels', e =>  {
              this.setState({ selectedOption: {value: ISO2toID_f(e.features[0].properties.code), label: e.features[0].properties.name_en  } })
              console.log(ISO2toID_f(e.features[0].properties.code))
            });

        this.map.on('click', 'region_labels', e =>  {
              this.setState({ selectedOption: {value: e.features[0].properties.Region_ID, label:e.features[0].properties.Name , region: "Yes"  } })
              console.log(e.features[0].properties.Region_ID)
            });

    });


}
componentDidUpdate(prevProps, prevState) {
    if( prevState.selectedOption !== this.state.selectedOption ) {
      console.log(this.state.selectedOption, prevState.selectedOption);
      this.remove('country');
      this.remove('agglomerations');

      if (this.state.selectedOption.region)
      {
        this.add_shape('country',["==","Region_ID",this.state.selectedOption.value]);
        this.add_point('agglomerations',["==","Region_ID",this.state.selectedOption.value]);
      }
      else
      {
        this.add_shape('country',["==","ISO3",IDtoISO3_f(this.state.selectedOption.value)]);
        this.add_point('agglomerations',["==","ISO3",IDtoISO3_f(this.state.selectedOption.value)]);
      }
  }
}
remove = obj => {
    this.map.removeLayer(obj)
}
add_point = (obj,filter1) => {
    this.map.addLayer({
        id: obj,
        source:'africapolis_agglos',
        type: 'circle',
        'source-layer':'africapolis2020-3mv6ux',
        filter:["all",filter1,[">","Population_2015",0]],
        paint: {
        'circle-stroke-color': agglomeration_stroke_color,
        'circle-stroke-width': 3,
        'circle-color': agglomeration_fill_color
        }
    });
}
add_shape = (obj,filter1) => {
    this.map.addLayer({
        id: obj,
        source:'africapolis_country',
        type: 'fill',
        'source-layer':'AfricaContinent',
        filter:filter1,
        paint: {
          'fill-color': '#fdfdf5',
          'fill-opacity': 1
        }
    });
    //console.log(this.map.getSource("africapolis_country"))
    this.map.fitBounds(getCountryBound(this.state.selectedOption.value))
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
