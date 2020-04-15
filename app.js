const fs = require('fs')

const a = [
{
    "id":1,
    "title":"Angola",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 11.67880883351409,-18.0395441112506],[24.0827635146694, -4.377635366107427 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 24992884  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 15862758  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.63  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 96  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.44  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  54.20  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 6771.03  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 2342.74  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.00  }
                         ],
           "data": {
                             "totalPop":[4.406,4.79375,5.557314286,7.332938095,9.971034615,13.95399,20.548548,25.178981]
                             ,"urbanPop":[0.2203,0.3835,0.778024,1.539917,2.592469,4.186197,10.274274,15.862758]
                             ,"ruralPop":[4.1857,4.41025,4.779290286,5.793021095,7.378565615,9.767793,10.274274,9.316223]
                             ,"totalPopGrowth":[0.008470245,0.014889964,0.028114078,0.031207874,0.034179247,0.039461176,0.041481122]
                             ,"urbanPopGrowth":[0.057000243,0.073304036,0.070657175,0.053468674,0.049084835,0.093939107,0.090750727]
                             ,"ruralPopGrowth":[0.00523942,0.008068444,0.019422395,0.024487546,0.028448266,0.005068055,-0.019386774]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Angola has one of the highest levels of urbanisation in Africa with 63.5% of the population living in urban areas in 2015 compared to less than half (30.5%) in 1990. Yet, the capital Luanda alone counts for almost half (44%)  of the total urban population and dominates the urban landscape. Angola's capital is almost 12 times as large as the second biggest city Lubango, resulting  in the third highest primacy score in all of Africa. The rapid growth of Luanda is in part due to the devastating civil war that ravaged the interior of the country from 1975 to 1992 and has made Luanda a refuge for many Angolans.\nDespite only having 25 million inhabitants in total, Angola counts six agglomerations with more than 500 000 inhabitants, including the capital. These are: Luanda, Lubango, Huambo, Cabinda, Benguela and Lobito.  The latter two are separated by less than 30 kilometres  and are expected to merge into one big urban agglomeration/region in the next few years, bringing their total population to 1.6 million. The urban population density level is one of the highest in Africa at an average of 6 767 inhabitants per km2. There are 7 233 inhabitants per km2 in Luanda but some cities such as Saurimo count more than 10 000 inhabitants per km2.\nThere are also 31 agglomerations with populations between 50 000 and 500 000 but very few smaller agglomerations with fewer than 50 000 inhabitants. Only 5.3% of Angolans live in smaller urban agglomerations. Given the size of the country, it is noticeable that the territory is only weakly inter-linked by urban agglomerations. Nonetheless, the road network between the agglomerations is quite well-developed."
                           }
               ]
},
{
    "id":2,
    "title":"Burundi",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 28.993800497072044,-4.46551358137126],[30.8450390589687, -2.312156363797868 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 9823828  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 2054027  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.21  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 33  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.51  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  15.10  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 3879.26  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 529.49  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.02  }
                         ],
           "data": {
                             "totalPop":[1.8954,2.4609,3.1855,4.464675,4.694316667,6.598971429,8.4381,9.781081]
                             ,"urbanPop":[0.018954,0.049218,0.095565,0.178587,0.281659,0.461928,1.68762,2.054027]
                             ,"ruralPop":[1.876446,2.411682,3.089935,4.286088,4.412657667,6.137043429,6.75048,7.727054]
                             ,"totalPopGrowth":[0.026453569,0.026144128,0.034335008,0.005028213,0.034642673,0.024889024,0.02997916]
                             ,"urbanPopGrowth":[0.100125696,0.068605709,0.064523119,0.046616023,0.050715322,0.138334865,0.040078926]
                             ,"ruralPopGrowth":[0.025412004,0.025092203,0.033263704,0.002914511,0.033536684,0.009572578,0.02739124]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Officially, the government of Burundi recognises 26 cities of which 16 have a population between 2 000 to 10 000 inhabitants. This would give the country a level of urbanisation of just 10% compared to 20% according to the findings of Africapolis, which uses the built environment as a key indicator of urbanisation. Nonetheless, Burundi remains one of the least urbanised countries in the world.\nThe first urban agglomeration with more than 10 000 inhabitants only emerged in the 1940s. Until 2000, Burundi had the lowest level of urbanisation in the world alongside Bhutan and Rwanda. At the time, the country only counted six urban agglomerations with more than 10 000 inhabitants and a level of urbanisation of just 6.9%. Fifteen years later, these figures had jumped to 33 agglomerations and a level of urbanisation of 20.9%. This sudden spike in numbers, however, has less to do with population growth than with the spill-over of agglomerations into rural areas. Nonetheless, Burundi retains a distinctly non-urban character partially due to the topography of the country, which is dominated by numerous undulating hills creating a sprawling but interspersed periphery.\nBurundi's primacy score is the fourth highest in Africa. The capital Bujumbura, which counted a population of just over one million in 2015, represents the largest agglomeration by far. The remaining 32 urban agglomerations have populations of fewer than 100 000. The relatively small size of the country however means that overall population density is quite high at 353 inhabitants per km2 (the second highest in Africa) and most of the urban agglomerations are dotted along the country's territory in a fairly dense network."
                           }
               ]
},
{
    "id":3,
    "title":"Benin",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 0.774558544224476,6.22447495853009],[3.85082880284835, 12.393508622871479 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 10749468  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 5272274  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.49  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 122  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.41  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  14.20  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 4325.01  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 1219.02  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.01  }
                         ],
           "data": {
                             "totalPop":[1.58,2.293,2.654628571,3.498704167,4.771203571,6.469733333,8.9218325,10.791847]
                             ,"urbanPop":[0.079,0.2293,0.371648,0.839689,1.335937,2.135012,3.568733,5.272274]
                             ,"ruralPop":[1.501,2.0637,2.282980571,2.659015167,3.435266571,4.334721333,5.3530995,5.519573]
                             ,"totalPopGrowth":[0.03794585,0.014752129,0.027993446,0.031506746,0.030922085,0.032658605,0.038791394]
                             ,"urbanPopGrowth":[0.112442818,0.049476636,0.084922376,0.04753068,0.048000366,0.052716363,0.081176962]
                             ,"ruralPopGrowth":[0.032349109,0.010149295,0.01536423,0.025944725,0.023528816,0.02132606,0.006143749]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"In 2015, almost half of the population of Benin lived in an urban agglomeration. Between 2000 and 2015, the country saw a rapid increase in the total urban population, which went from 2.1 million to 5.1 million. Over the same period, the number of agglomerations increased from 41 to 111, resulting from the rise of smaller agglomerations with fewer than 50 000 inhabitants.\nThe two largest urban agglomerations, Cotonou and Porto Novo, account for almost one-fifth of the total population of the country. Both agglomerations are separated by only a few hundred metres of undeveloped land and are likely to merge into a bigger conurbation in a few years. By adding the multiple smaller and medium-sized agglomerations that are located around the Cotonou-Porto Novo agglomerations, a large metropolitan area emerges that holds almost half of the total population but only covers 10% of the surface area of Benin. The relative concentration of urban agglomerations in the country's south is also reflected in the average distance between agglomerations, which is only 7.4 km in the metropolitan area but 22.6 km in the more sparsely populated north.\nThe only other larger agglomerations are Parakou in the north and Abomey-Bohicon. Both agglomerations have around 260 000 inhabitants. The remaining agglomerations have fewer than 83혻000 inhabitants which explains the relatively low weight of medium-sized cities in urban population distribution. In fact, larger agglomerations of more than 500 000 and smaller ones with fewer than 50혻000 inhabitants together account for 80% of the total urban population."
                           }
               ]
},
{
    "id":4,
    "title":"Burkina Faso",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ -5.520794727315028,9.39964017278909],[2.40608025898589, 15.085258417277188 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 18450494  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 5271971  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.29  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 101  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.56  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  28.30  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 4470.08  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 1179.39  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.00  }
                         ],
           "data": {
                             "totalPop":[2.839866667,4.774733333,5.284483333,6.440836364,8.7205,11.58449524,16.519876,18.170666]
                             ,"urbanPop":[0.085196,0.143242,0.317069,0.708492,1.39528,2.432744,4.129969,5.271971]
                             ,"ruralPop":[2.754670667,4.631491333,4.967414333,5.732344364,7.32522,9.151751238,12.389907,12.898695]
                             ,"totalPopGrowth":[0.053331609,0.010195294,0.019985442,0.03076559,0.0288062,0.036126942,0.019231442]
                             ,"urbanPopGrowth":[0.053331609,0.082700508,0.083722566,0.070120397,0.057166772,0.054350572,0.050038551]
                             ,"ruralPopGrowth":[0.053331609,0.007026625,0.014425572,0.024822944,0.022511859,0.030757216,0.008081269]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"In 2015, only 28.6% of the population of Burkina Faso lived in urban agglomerations, making it the second least urbanised country in West Africa, behind Niger. The country counts a total of 101 urban agglomerations with a population of more than 10 000 but the distribution of the urban population is largely concentrated in two cities, Ouagadougou and Bobo-Dioulasso, which account for 56% of the total urban population in the country.\nThe primacy of the capital is limited by the former capital Bobo-Dioulasso whose population outstripped that of Ouagadougou by 10% in 1950 before the capital's population growth reversed the trend 10 years later. Although Ouagadougou counted a population of 2.3 million in 2015 against 668 000 for Bobo-Dioulasso, the former capital still represents an important part of the urban population and is six times larger than the third biggest agglomeration Koudougou (pop. 111 000).\nAn interesting characteristic of Burkina Faso's primary urban agglomerations is their location along the historic railroad connecting Abidjan (Ivory Coast) to Ouagadougou. The four biggest cities of the country are all located along this stretch. However, newer agglomerations are emerging elsewhere and often coincide with being the regional capitals (?쐁hefs-lieux?? of the various departements. Burkina Faso has in fact seen many smaller agglomerations emerge over the past 20 years, going from 53 urban agglomerations in 2000 to 101 in 2015.\nThese smaller agglomerations often benefit from having a proper administration and the basic services associated with their status as regional capitals. As a result, they have a largely urban character, despite a relatively modest average urban density of 4 425 inhabitants per km2."
                           }
               ]
},
{
    "id":5,
    "title":"Botswana",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 20.001242333380191,-26.8837918049531],[29.3618491231722, -17.781364563205884 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 2195134  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 1224313  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.56  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 25  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.30  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  54.60  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 1607.22  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 761.76  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.00  }
                         ],
           "data": {
                             "totalPop":[0,0,0.610907692,0.881610714,1.264360976,1.6324,2.013056604,2.186273]
                             ,"urbanPop":[0,0,0.079418,0.246851,0.518388,0.799876,1.06692,1.224313]
                             ,"ruralPop":[0,0,0.531489692,0.634759714,0.745972976,0.832524,0.946136604,0.96196]
                             ,"totalPopGrowth":[0,0,0.037361502,0.036715096,0.025877608,0.021181504,0.016645824]
                             ,"urbanPopGrowth":[0,0,0.120086582,0.077015627,0.04432764,0.029226404,0.02790297]
                             ,"ruralPopGrowth":[0,0,0.017914852,0.016275308,0.011037739,0.012874665,0.00332269]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Botswana is the second least densely populated country in Africa after Libya and Namibia with just four inhabitants per km2 (the same as Mauritania). At the same time, it is one of the most urbanised countries in Africa and has the second highest level of urbanisation in southern Africa at 55.8%. The level of urbanisation increased quite rapidly between 1970 and 2000, when it rose from 13.5% to 48.8% but has since slowed down, partially because of the decline in population growth which has continued until 2015.\nThe capital Gaborone accounts for almost one-third of the total urban population. It is around three-and-a-half times larger than the second largest agglomeration of Francistown. However, many of the other agglomerations are situated within a radius of 75 kilometers of the capital and together they represent 57% of the urban population. Most of the remaining agglomerations are situated to the northeast of Gaborone towards the borders with South Africa and Zambia. Overall, the country counts 25 urban agglomerations with populations of more than 10 000 inhabitants.\nBotswana's urban agglomerations are characterised by their relative expanse and generous allotments, which explain the relatively low urban population density of just 1 607 inhabitants per km2, the fourth lowest in Africa."
                           }
               ]
},
{
    "id":6,
    "title":"Central African Republic",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 14.419995451249584,2.21983656110873],[27.4611737379457, 11.009192333734617 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 4971725  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 1832706  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.37  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 31  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.52  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  81.90  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 7483.18  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 244.91  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.00  }
                         ],
           "data": {
                             "totalPop":[1.2538,1.169458333,1.719104545,2.269506897,2.768239394,3.582214286,4.563802778,4.953259]
                             ,"urbanPop":[0.037614,0.140335,0.378203,0.658157,0.913519,1.253775,1.642969,1.832706]
                             ,"ruralPop":[1.216186,1.029123333,1.340901545,1.611349897,1.854720394,2.328439286,2.920833778,3.120553]
                             ,"totalPopGrowth":[-0.006939635,0.039278047,0.028165251,0.020063514,0.026112059,0.024513135,0.016512758]
                             ,"urbanPopGrowth":[0.140726808,0.104220732,0.056964628,0.033329452,0.032167552,0.027403347,0.022098348]
                             ,"ruralPopGrowth":[-0.01656255,0.026816755,0.018542831,0.014165562,0.023007098,0.022925941,0.013316103]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Despite its mineral and natural wealth, the Central African Republic ranks amongst the least developed nations in Africa. It is also one of the least densely populated at just seven inhabitants per square kilometre. In 2015, it reached an urbanisation level of 37% with the capital Bangui acting as the largest agglomeration, accounting for half of the total urban population of the country. However, outside of the capital the urbanisation level barely reaches 21%. Conflict, political instability and economic uncertainty have created numerous set-backs over the past decades in terms of urban development, with internal displacement contributing to the de-urbanisation of some areas.\nThe dominance of the capital is uncontested and reflected in its size: it is 10 times larger than the second biggest agglomeration Berberati and had a population just short of 1 million. If one adds to this the 7th arrondissement of Bangui, the capital exceeded the 1 million mark in 2015. However, unlike the official statistics, Africapolis considers the 7th arrondissement a separate agglomeration as it is not yet properly linked up to the rest of the capital.\nA characteristic of urbanisation in the Central African Republic is the relative absence of small and medium sized agglomerations for a country of its size. There are fewer than 30 small agglomerations (10 000 ??50 000 inhabitants) and fewer than 5 medium sized agglomerations (50 000 ??500 000), leading to a relatively poorly established urban network across the territory. The average distance between agglomerations stands at 71km ??one of the highest in Africa - and has barely reduced since 2000."
                           }
               ]
},
{
    "id":7,
    "title":"Cote d`Ivoire",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ -8.569597716425136,4.35678586749077],[-2.49396129202089, 10.734519638596169 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 23300000  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 11489818  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.49  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 220  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.46  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  20.20  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 7776.26  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 1477.55  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.00  }
                         ],
           "data": {
                             "totalPop":[2.669025,3.273533333,5.362495652,8.110914706,11.47380732,15.28568913,20.37166667,23.448608]
                             ,"urbanPop":[0.106761,0.392824,1.233374,2.757711,4.704261,7.031417,9.7784,11.489818]
                             ,"ruralPop":[2.562264,2.880709333,4.129121652,5.353203706,6.769546317,8.25427213,10.59326667,11.95879]
                             ,"totalPopGrowth":[0.020625495,0.050594248,0.042246123,0.035294178,0.0291004,0.029139278,0.028532694]
                             ,"urbanPopGrowth":[0.139143767,0.121217009,0.083790641,0.054858643,0.041010583,0.033528589,0.032782975]
                             ,"ruralPopGrowth":[0.011783416,0.036658765,0.026303025,0.023751567,0.020027597,0.025262593,0.024546011]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"In 2015, half of the population of Cote d'Ivoire lived in urban agglomerations and 41% of urban dwellers lived in Abidjan. Abidjan is almost nine times larger than the second biggest agglomeration Bouake and more than 20 times larger than the capital Yamoussoukro. Its primacy has steadily grown and is expected to continue to increase.\nCote d'Ivoire has the fastest growing population in West Africa. It has grown 11-fold since 1950 to reach 23.3 million in 2015. However, urbanisation is a more recent phenomenon as most of the emerging agglomerations only started to appear after 1990, creating a very dense network of small agglomerations across the territory.\nUrbanisation in Cote d'Ivoire is marked by the relative weight of small agglomerations with populations between 10 000 and 50 000 inhabitants, which account for about 90% of all urban agglomerations and almost one-third of all urban dwellers. By contrast, out of a total of 220 urban agglomerations captured by Africapolis, there were only nine urban agglomerations with populations larger than 100혻000.\nMany of the smaller agglomerations however, lack a distinctly urban character, including urban infrastructure, despite the high population density. In fact, Cote d'Ivoire has the highest average urban population density in West Africa with 7 769 inhabitants per km2. In Abidjan, the density is even higher at an average of 12 054 inhabitants per km2."
                           }
               ]
},
{
    "id":8,
    "title":"Cameroon",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 8.492690805810334,1.65404064168932],[16.1943512292781, 13.080169051742061 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 22179707  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 12754444  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.55  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 147  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.51  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  26.60  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 3133.64  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 4070.17  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.01  }
                         ],
           "data": {
                             "totalPop":[3.524444444,4.521818182,6.011052632,8.329392593,11.62154857,15.24990256,19.76357308,23.189898]
                             ,"urbanPop":[0.3172,0.4974,1.1421,2.248936,4.067542,5.947462,10.277058,12.754444]
                             ,"ruralPop":[3.207244444,4.024418182,4.868952632,6.080456593,7.554006571,9.302440564,9.486515077,10.435454]
                             ,"totalPopGrowth":[0.025232211,0.028877674,0.033156899,0.033867937,0.027543714,0.02626576,0.032491951]
                             ,"urbanPopGrowth":[0.046013429,0.086675398,0.070107226,0.061049133,0.038723514,0.056218362,0.044139546]
                             ,"ruralPopGrowth":[0.022956354,0.019232456,0.022468799,0.021936984,0.021038115,0.001961374,0.019250491]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"With an urbanisation level of 57.2% in 2015, Cameroon ranks as the most urbanised country in West Africa. It is characterised by the relative importance of large agglomerations (above 500 000 inhabitants) which account for almost 60% of the total urban population. By contrast, smaller agglomerations between 10 000 and 50 000 inhabitants account for less than one-fifth of the urban population but the number of smaller agglomerations has steadily increased and more than doubled since 2000.\nCompared to other African nations, Cameroon has a relatively low average urban density level at just 3혻133 inhabitants per square kilometre. It also has the lowest average urban population density level in West Africa. However, this average masks the staggeringly high population density in urban agglomerations such as Yaounde and Douala which both have population densities of more than 11혻000혻inhabitants per square kilometre and account for half of all urban dwellers in the country.\nThe third largest agglomeration is Bafoussam with 1.1 million inhabitants. Bafoussam is characterised by its very extended surface area covering more than 1혻880 km2, giving it a coverage almost six times larger than Yaounde and an average population density of just 607 inhabitants per square kilometre."
                           }
               ]
},
{
    "id":9,
    "title":"Democratic Republic of the Congo",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 12.206163360999454,-13.4581143630142],[31.3065062339817, 5.373053530527471 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 71246000  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 31967600  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.45  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 553  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.30  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  29.00  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 7398.42  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 4320.87  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.00  }
                         ],
           "data": {
                             "totalPop":[11.42956,14.34420833,21.15576364,27.524508,36.46682069,47.85438966,62.02931429,70.923636]
                             ,"urbanPop":[0.571478,1.721305,4.654268,6.881127,10.575378,13.877773,21.71026,31.9676]
                             ,"ruralPop":[10.858082,12.62290333,16.50149564,20.643381,25.89144269,33.97661666,40.31905429,38.956036]
                             ,"totalPopGrowth":[0.022974263,0.039621404,0.026665778,0.02853206,0.027548638,0.026283909,0.027161665]
                             ,"urbanPopGrowth":[0.116569682,0.104585545,0.039874237,0.043911381,0.027548638,0.045766016,0.080460767]
                             ,"ruralPopGrowth":[0.015174298,0.027155995,0.022647008,0.022910278,0.027548638,0.017262466,-0.006854488]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"The Democratic Republic of the Congo (DRC) is the most populous country in central Africa and the fourth most populous in Africa. It is also the largest country in terms of surface area in sub-Saharan Africa. In 2015, it reached an urbanisation level of 44% and counted a total of 496 urban agglomerations.\nThe network of urban agglomerations is relatively vast and balanced across the territory. The capital Kinshasa is the largest urban agglomeration with an estimated population of 7.3 million. It has the highest density of any capital in sub-Saharan Africa with an average of 16 924 inhabitants per km2. The population density of Kinshasa and its weight in the total urban population also explain the relatively high average urban population density of the country, which stood at 7 495 inhabitants per km2 ??the sixth highest in Africa.\nThe DRC's urban population has increased rapidly in the past 20 years. It more than doubled from 13.9 million in 2000 to 31.2 million in 2015. There has also been a strong growth in the number of smaller agglomerations with fewer than 50 000 inhabitants over the same period. In 2015, smaller agglomerations accounted for almost one-third of the total urban population, but four-fifths of these were not recognised by any national or international statistic. Most smaller agglomerations seem to have sprung up along the network of improvised dirt tracks that pervade the country's territory. They are also the result of people seeking out denser settlements in a climate of insecurity. In fact, isolated villages and towns remain rare in the DRC except in the northeast."
                           }
               ]
},
{
    "id":10,
    "title":"Republic of the Congo",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 11.206388845056409,-5.02585440304395],[18.6498697204794, 3.703069114856376 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 4687514  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 3108083  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.66  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 27  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.78  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  65.00  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 5488.50  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 566.29  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.00  }
                         ],
           "data": {
                             "totalPop":[0.682666667,0.8675,1.130121212,1.603042,2.20229,2.919126154,4.22755303,4.709217]
                             ,"urbanPop":[0.1024,0.1735,0.37294,0.801521,1.321374,1.897432,2.790185,3.108083]
                             ,"ruralPop":[0.580266667,0.694,0.757181212,0.801521,0.880916,1.021694154,1.43736803,1.601134]
                             ,"totalPopGrowth":[0.02425025,0.026799277,0.035576025,0.032269179,0.028579432,0.037728203,0.021814186]
                             ,"urbanPopGrowth":[0.054144027,0.079528093,0.079512297,0.051262288,0.036845498,0.039313762,0.021814172]
                             ,"ruralPopGrowth":[0.018059556,0.008751134,0.00570708,0.009489856,0.014935962,0.03472444,0.021814214]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"The Republic of the Congo scores the third highest level of urbanisation in central Africa with two-thirds of its population living in urban agglomerations, despite a relatively low overall population size of only 4.7 million. Compared to other African states, the level of urbanisation had already attained a significant level by 1970, when one-third of the population lived in urban agglomerations.\nAlmost 80% of the urban population (equivalent to 2.4 million people) live in the two biggest agglomerations Brazzaville and Pointe Noire, located at both ends of the railway line connecting Congo to the Atlantic Ocean. A further five agglomerations (Dolisie, Nkayi, Madingou, Loutele and Bouansa) are located along the same stretch. Brazzaville itself is positioned across from the Democratic Republic of the Congo's capital Kinshasa and together they form one of the biggest urban settlements in Africa.\nDespite the modest weight of medium and small urban agglomerations in the total share of the urban population, many agglomerations with populations between 10 000 and 200 000 have emerged since 2000. Whilst there were only 15 urban agglomerations in this category in 2000, the number rose to 25 by 2015."
                           }
               ]
},
{
    "id":11,
    "title":"Cabo Verde",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ -25.357213543522146,14.8050880064408],[-22.6764804894878, 17.194676527218675 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 524833  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 263913  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.50  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 4  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.85  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  117.70  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 5391.48  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 48.95  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.01  }
                         ],
           "data": {
                             "totalPop":[0.144057143,0.196875,0.264689474,0.298980769,0.350816129,0.435374359,0.488485106,0.527826]
                             ,"urbanPop":[0.010084,0.0315,0.050291,0.077735,0.108753,0.169796,0.229588,0.263913]
                             ,"ruralPop":[0.133973143,0.165375,0.214398474,0.221245769,0.242063129,0.265578359,0.258897106,0.263913]
                             ,"totalPopGrowth":[0.031728856,0.030041233,0.012256696,0.016116795,0.021829248,0.011576771,0.015612156]
                             ,"urbanPopGrowth":[0.120644262,0.047895491,0.044510074,0.034147447,0.045559183,0.03062856,0.028258527]
                             ,"ruralPopGrowth":[0.021280903,0.026302019,0.003148732,0.009032993,0.009314248,-0.002544679,0.003845132]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Cabo Verde is the fifth smallest country in Africa in terms of surface area and the fourth smallest in terms of population. Its arid climate and steep relief make the country unfavorable to agriculture and have resulted in multiple famines over the course of its history. Since the 1950s, the population has steadily grown, going from 150 000 inhabitants in 1950 to 525 000 in 2015.\nCabo Verde is made up of hundreds of islands, but only nine are inhabited. The island of Santiago ??where the capital Praia is located ??accounts for 56% of the total population of the country. Historically, the capital Praia and the second city Mindelo have been of similar importance ??the former due to its political status and the latter due to its location along the Atlantic trade routes. It is only after independence that Praia established itself as the more dominant city. By 2015, it was twice as large as Mindelo.\nIn 2015, Cabo Verde only counted four agglomerations with a population of more than 10 000 inhabitants. It is only in 2015 that a majority of the population lived in urban agglomerations for the first time."
                           }
               ]
},
{
    "id":12,
    "title":"Djibouti",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 41.771301520025517,10.910318687075],[43.4137973572072, 12.706622709944 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 956000  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 688802  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.72  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 7  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.81  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  30.80  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 9608.06  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 71.69  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.00  }
                         ],
           "data": {
                             "totalPop":[0.04984375,0.077916667,0.145245902,0.245272,0.34194625,0.476686585,0.835390141,0.956669]
                             ,"urbanPop":[0.0319,0.0374,0.0886,0.183954,0.273557,0.390883,0.593127,0.688802]
                             ,"ruralPop":[0.01794375,0.040516667,0.056645902,0.061318,0.06838925,0.085803585,0.242263141,0.267867]
                             ,"totalPopGrowth":[0.045687618,0.064259051,0.053790814,0.033786811,0.033778531,0.05770764,0.027482589]
                             ,"urbanPopGrowth":[0.016033651,0.090074579,0.07579012,0.040480295,0.036334354,0.042581684,0.030360832]
                             ,"ruralPopGrowth":[0.084855887,0.034078428,0.007956869,0.010973998,0.022943765,0.10937453,0.020296446]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"With just slightly fewer than a million people, Djibouti is the least populous nation on the African continent and the third smallest by surface area. Despite only counting seven urban agglomerations above 10 000 inhabitants, its urbanisation level is the fifth highest in Africa at 72%. Nonetheless, the urbanisation level has been in decline since the 1990s when it reached a peak of 80.4%, entirely dominated by the capital. It is only after 2000 that smaller agglomerations start to emerge. Prior to the emergence of these smaller agglomerations, the capital reached a staggering primacy rate of 48, which has since declined.\nIn 2015, more than 80% of the total urban population resided in the capital Djibouti, which is twelve-and-a-half times larger than the second biggest agglomeration Ali Sabieh. The average urban population density is the second highest in Africa at 9 608 inhabitants per square kilometre. Some of the smaller urban agglomerations such as Dikhil, Tadjoura and Obock have densities that are even higher (more than 11 000 inhabitants per km2) and are growing at a rapid rate thanks to their strategic location along the axis connecting Djibouti to Addis Ababa."
                           }
               ]
},
{
    "id":13,
    "title":"Algeria",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ -8.673969078782633,18.9635345895493],[11.9809701071419, 37.09150628917579 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 39963000  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 26303432  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.66  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 475  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.15  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  18.50  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 3744.18  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 7025.15  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.003  }
                         ],
           "data": {
                             "totalPop":[8.945370588,10.25710667,13.44442059,17.75260769,24.79492955,30.51010189,36.1805871,39.74736397]
                             ,"urbanPop":[1.520713,3.077132,4.571103,6.923517,10.909769,16.170354,22.431964,26.303434]
                             ,"ruralPop":[7.424657588,7.179974667,8.873317588,10.82909069,13.88516055,14.33974789,13.7486231,13.44392997]
                             ,"totalPopGrowth":[0.013777512,0.027428768,0.028186759,0.033975081,0.020958473,0.017192607,0.018982075]
                             ,"urbanPopGrowth":[0.073025114,0.040369204,0.042390814,0.046523245,0.040136645,0.033272277,0.032354916]
                             ,"ruralPopGrowth":[-0.003345463,0.021401077,0.020118436,0.025170006,0.003226652,-0.004200809,-0.004472166]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Algeria is the most developed country in Africa in terms of its human development index rating and has the eighth highest level of urbanisation in Africa at 65.8%. The urban population is spread out across 475혻urban agglomerations. These are mainly clustered around the northern part of Algeria where they form a dense network of urban agglomerations. Given the large number of agglomerations just under the 10 000-inhabitant threshold, it is expected that the number of urban agglomerations will grow strongly over the next few years.\nThe capital Algiers is almost four times larger than the second biggest agglomeration, Oran. Nonetheless, the weight of the capital is relatively modest compared to other African nations of comparable size. In 2015, almost half of the urban population lived in medium-sized agglomerations between 50 000 and 500 000 inhabitants. Larger urban agglomerations above 500혻000 (of which there are only two, Algiers and Oran) only represent one- fifth of the total urban population.\nUrbanisation in Algeria has progressed gradually. Whilst the country was one of the least urbanised of North Africa in the mid-19th century, the emergence of smaller urban agglomerations took off after independence when greater priority was given to the industrialisation of the country. Over time, many of these newer urban agglomerations have shifted south, away from the coast, where they compete with the most cultivable lands. The proportion of coastal urban agglomerations has in fact reduced dramatically since independence, dropping from 24% to just 6% in 2015."
                           }
               ]
},
{
    "id":14,
    "title":"Egypt",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 24.697996257418708,22.0013421472637],[35.7615737570691, 31.664110210683646 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 90626816  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 84375765  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.93  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 1061  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.27  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  5.40  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 12281.88  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 6869.94  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.007  }
                         ],
           "data": {
                             "totalPop":[20.68056341,25.95026809,32.37336981,40.34730984,52.17558116,63.52310676,79.63258605,90.726629]
                             ,"urbanPop":[8.479031,12.196626,17.157886,24.611859,36.001151,47.007099,68.484024,84.375765]
                             ,"ruralPop":[12.20153241,13.75364209,15.21548381,15.73545084,16.17443016,16.51600776,11.14856205,6.350864]
                             ,"totalPopGrowth":[0.022958342,0.022361781,0.02226306,0.026042313,0.01987382,0.022859325,0.02642871]
                             ,"urbanPopGrowth":[0.037025292,0.03471896,0.036735725,0.038764734,0.027033729,0.038347166,0.042619133]
                             ,"ruralPopGrowth":[0.01204619,0.010152179,0.003365912,0.002755332,0.002092032,-0.038539653,-0.106441909]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Egypt is Africa's second most populous nation after Nigeria. With 93% of its population living in urban areas in 2015, Egypt is also the most urbanised of all African nations. This contrasts strongly with the official urbanisation level, which stands at 45%, but does not reflect the real extent of urbanisation in the country.\nDespite its size, 98% of the Egyptian population live in a very small part of the territory, mainly within the delta and valley of the Nile river. This concentration of the population explains why Egypt's average urban population density is the highest on the continent with 12 282 inhabitants per square kilometre.  Some urban agglomerations such as Port Said, Faiyum and Tanta even surpass an average of 20 000 inhabitants per square kilometre. Demographic growth remains high with 2.4 million people being added each year, leading to a staggering increase of 40 inhabitants per square kilometre on average. Outside of the urban areas, the average population density drops dramatically to just 6 inhabitants per square kilometre.\nThe capital Cairo is the largest urban agglomeration with a population of over 23 million. It is also the largest one in Africa and one of the biggest in the world. In total, Africapolis inventoried 1 061 urban agglomerations in Egypt ??the second highest figure for any African nation besides Nigeria. Unlike other countries, Egypt's urban agglomerations exhibit limited sprawl despite their size and the demographic pressures. However, the growth of the urban agglomerations is increasingly leading to the fusion and absorption of smaller agglomerations whose numbers have declined since 2000."
                           }
               ]
},
{
    "id":15,
    "title":"Eritrea",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 36.437281372495079,12.3605223286841],[43.1336269463708, 18.002201465540395 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 4847000  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 1185085  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.24  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 26  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.40  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  42.50  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 8482.46  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 139.71  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.001  }
                         ],
           "data": {
                             "totalPop":[1.135716667,1.453483333,1.764833333,2.402025,3.305333333,2.875703846,4.099791304,4.875354]
                             ,"urbanPop":[0.136286,0.174418,0.31767,0.384324,0.4958,0.747683,0.942952,1.185085]
                             ,"ruralPop":[0.999430667,1.279065333,1.447163333,2.017701,2.809533333,2.128020846,3.156839304,3.690269]
                             ,"totalPopGrowth":[0.02497673,0.019598914,0.031305616,0.032437508,-0.013827496,0.036100204,0.035258681]
                             ,"urbanPopGrowth":[0.02497673,0.061789656,0.019229841,0.025795765,0.041936131,0.023474927,0.046771725]
                             ,"ruralPopGrowth":[0.02497673,0.012424118,0.033793806,0.033660065,-0.027400216,0.040225893,0.031718243]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Eritrea is one of the poorest nations in the world, having faced decades of political and economic instability and food insecurity. It has the third lowest level of urbanisation in Africa at just 24.4%. At the same time, the urban population density is the fourth highest at an average of 8 482 inhabitants per km2. The capital Asmara has an average density exceeding 14 000, making it one of the most densely populated capitals in sub-Saharan Africa. Although Asmara remains the most populous agglomeration of Eritrea, its dominance has reduced over the past decades. Its primacy index has declined from more than 10 in 1980 to 4.7 in 2015.\nThe population lives mostly on the plateaus as large parts of the country are uncultivable. Almost all urban agglomerations are located in altitude, with 7 amongst them being set at altitudes above 2000 metres (including the capital Asmara). By contrast, the coastline attracts only a fracture of the total population and only counts two urban agglomerations (Assab and Massawa), both of which have populations of less than 40 000.\nGiven the limited urban space and planning, most urban agglomerations have seen their populations increase through higher densities. Urban sprawl is very limited and urban development has grinded to a halt in some cities like Asmara. Spontaneous agglomerations do occur, but these agglomerations are often characterised by inadequate infrastructure development."
                           }
               ]
},
{
    "id":16,
    "title":"Ethiopia",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 32.998438894493276,3.4009078412285],[47.9842742919989, 14.892966221704711 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 90078000  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 24292232  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.27  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 510  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.34  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  19.00  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 3264.27  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 7441.86  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.007  }
                         ],
           "data": {
                             "totalPop":[16.77996667,19.45295,26.81,34.07431429,48.6907125,59.27804545,78.95943571,89.934193]
                             ,"urbanPop":[0.503399,0.778118,1.3405,2.385202,3.895257,6.520585,11.054321,24.292232]
                             ,"ruralPop":[16.27656767,18.674832,25.4695,31.68911229,44.7954555,52.75746045,67.90511471,65.641961]
                             ,"totalPopGrowth":[0.014891085,0.032597655,0.024266647,0.036339139,0.0198699,0.029084451,0.0263705]
                             ,"urbanPopGrowth":[0.044511705,0.055898409,0.059316738,0.050270326,0.052870711,0.054203736,0.170542185]
                             ,"ruralPopGrowth":[0.01383992,0.031516957,0.022089591,0.035219367,0.016494405,0.025561858,-0.006756316]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"In 2015, Ethiopia was the third most populous country in Africa behind Nigeria and Egypt. Most of the population lives in the mountainous area surrounding the Great Rift Valley but the population density declines in lower altitudes and towards the arid east and southeast which are less habitable. With an official urbanisation level of just 27%, Ethiopia has the sixth lowest urbanisation score in Africa.\nEthiopia's urban population has increased rapidly since 2000, going from 6.5 million to 24.3 million in 2015. Over the same period, the number of agglomerations jumped from 147 to 509, a rise that is fueled by small and medium-sized agglomerations. The capital Addis Ababa is of modest size compared to other African capitals and the primacy score has dropped quite sharply since 2010 as a result of the emergence of newer agglomerations.\nLike Nigeria and Rwanda, Ethiopia's urbanisation is driven by the continued densification of rural areas. The second and third largest agglomerations, Sodo Town and Hawassa City ??both located in foothills - do not have an urban centre but are examples of in-situ urbanisation that has resulted from the fusion of smaller but densely populated towns and villages. These two agglomerations alone account for one-sixth of the total urban population.\nOne-third of the agglomerations in Ethiopia have emerged through in-situ urbanisation. They challenge the very notion of urban agglomeration as in many cases, they retain a largely rural and agricultural character. If the current demographic trends persist - especially with regards to a fertility rate of more than five children per woman  in rural areas - it is expected that Ethiopia will see the emergence of many more agglomerations of the same type."
                           }
               ]
},
{
    "id":17,
    "title":"Gabon",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 8.695935814827443,-3.97664306377109],[14.5024185687666, 2.324250541417371 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 1866481  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 1506156  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.81  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 14  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.59  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  95.40  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 4211.73  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 357.61  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.001  }
                         ],
           "data": {
                             "totalPop":[0.346666667,0.459,0.5115,0.77934,0.929747273,1.335029231,1.705620548,1.859452]
                             ,"urbanPop":[0.0104,0.0459,0.1023,0.233802,0.511361,0.867769,1.245103,1.506156]
                             ,"ruralPop":[0.336266667,0.4131,0.4092,0.545538,0.418386273,0.467260231,0.460517548,0.353296]
                             ,"totalPopGrowth":[0.028466287,0.010888591,0.043009185,0.017803159,0.036842012,0.024800113,0.017420562]
                             ,"urbanPopGrowth":[0.160053275,0.083443566,0.086168638,0.081403916,0.054308366,0.036764492,0.038802378]
                             ,"ruralPopGrowth":[0.020791718,-0.000948116,0.029174313,-0.026187731,0.01110938,-0.001452482,-0.051628471]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"With an urbanisation level of 80.7%, Gabon ranks as the African nation with the second highest level of urbanisation (alongside Libya). Like its neighbor Equatorial Guinea, it is amongst the richest nations in sub-Saharan Africa largely due to its mineral wealth.\nThe urban population is divided across just 14 urban agglomerations of which the capital Libreville is the largest with a population of 886 000 inhabitants. Libreville itself holds almost 60% of the total urban population of the country. In 1950, it was the first agglomeration to exceed 10 000 inhabitants, but it was almost equal in size to the second biggest agglomeration Port-Gentil, which is also located on the coast. Since then, the primacy of the capital has increased steadily. Libreville is now six times larger than Port-Gentil and expected to reach 1 million inhabitants ??equal to half the population of the country ??by 2020.\nGabon's urbanization profile stands out amongst other African nations due to the relative absence of small agglomerations. Contrary to other African nations that have seen a large increase in the number of smaller agglomerations in recent decades, there are very few agglomerations with populations between 10 000 and 100 000 in Gabon. This deficit is reflected in the relatively weak interlinkages between urban agglomerations across the territory, where the average distance between agglomerations stands at 70km ??a relatively large distance by African standards."
                           }
               ]
},
{
    "id":18,
    "title":"Ghana",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ -3.257547122710676,4.73578730703557],[1.19206530262996, 11.173995950817698 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 27403036  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 14236199  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.52  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 209  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.51  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  17.40  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 3900.65  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 3649.70  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.016  }
                         ],
           "data": {
                             "totalPop":[5.1097375,6.620929412,8.280684,11.14068846,14.17388667,18.1193641,24.21871837,27.377306]
                             ,"urbanPop":[0.408779,1.125558,2.070171,2.896579,4.252166,7.066552,11.867172,14.236199]
                             ,"ruralPop":[4.7009585,5.495371412,6.210513,8.244109462,9.921720667,11.0528121,12.35154637,13.141107]
                             ,"totalPopGrowth":[0.026247322,0.022621044,0.030112321,0.024371985,0.024862021,0.029439482,0.024820751]
                             ,"urbanPopGrowth":[0.106593029,0.062830072,0.034160428,0.039136221,0.052106575,0.05320756,0.037073084]
                             ,"ruralPopGrowth":[0.01573651,0.012308871,0.028730527,0.018695352,0.010854338,0.011171579,0.012469907]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"In 2015, 52% of Ghana's population lived in urban agglomerations of more than 10 000 inhabitants. The largest two cities, the capital Accra and Kumasi, account for half of the total urban population. The primacy score of Ghana is the second lowest in West Africa (after Nigeria), as Kumasi offers a counterweight to the dominance of the capital. Nonetheless, the urban hierarchy declines significantly after Kumasi: the third largest agglomeration (Takoradi) counts for less than one-sixth of the capital's population. The urban population density averages at 3 900 inhabitants per km2 ??the third lowest in West Africa.\nUrbanisation has progressed steadily since 1990. The total number of urban agglomerations has more than doubled from 87 in 1990 to 209 in 2015, with much of this growth stemming from the emergence of smaller agglomerations with populations between 10 000 and 50 000 inhabitants.\nHowever, urban agglomerations are not spread out evenly across the territory. The southern part of the country, representing the former British colony, accounts for half of all agglomerations and almost one-third of the total population of the country in 2015. By contrast, the north is relatively under-urbanised and only counts 29 agglomerations. The agglomeration of Tamale dominates the north and holds one-third of the urban population of the region. Similarly, the region to the east of the Volta basin (corresponding to the former Togoland), is dotted with many smaller agglomerations but together they account for just 1.5 million people, i.e. about 10% of the total urban population of the country."
                           }
               ]
},
{
    "id":19,
    "title":"Guinea",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ -15.079191428377445,7.20230122963262],[-7.64122957762785, 12.673679033707842 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 10923758  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 4044553  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.37  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 42  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.54  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  44.70  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 5019.55  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 805.76  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.003  }
                         ],
           "data": {
                             "totalPop":[2.2225,2.8245,4.059564286,5.382811111,6.601964,7.619046875,9.762208824,10.931224]
                             ,"urbanPop":[0.0889,0.22596,0.568339,0.968906,1.650491,2.438095,3.319151,4.044553]
                             ,"ruralPop":[2.1336,2.59854,3.491225286,4.413905111,4.951473,5.180951875,6.443057824,6.886671]
                             ,"totalPopGrowth":[0.024259453,0.036940374,0.028615281,0.020625468,0.014431554,0.025096486,0.022878712]
                             ,"urbanPopGrowth":[0.097774101,0.096623603,0.054793436,0.054710213,0.039785475,0.031329971,0.040324207]
                             ,"ruralPopGrowth":[0.019909508,0.029970644,0.023727835,0.011558823,0.004540647,0.022040833,0.013405977]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"In 2015, Guinea had a level of urbanisation of 37% and counted a total of 42 urban agglomerations with more than 10 000 inhabitants ??a relatively small number in view of the country's size. Although urbanisation has not progressed as rapidly as in other West African nations, Guinea has nonetheless registered an important increase in the total urban population, which jumped from 2.5 million in 2000 to just over 4 million in 2015.\nGuinea has the fifth highest primacy score in Africa. The urban agglomeration of Conakry counts more than 2 million inhabitants and is more than 10 times larger than the second and third biggest cities, Kankan and Nzerekore. Similar to other West African capitals like Freetown and Dakar, Conakry is located on a peninsula with limited physical space to grow. Its  population density reaches more than 7혻400 inhabitants per km2 compared to a country average of 5 020.\nWhereas the capital is home to more than half of all urban dwellers, smaller agglomerations make up only a fraction of the urban population. Guinea counts two  urban agglomeration with more than 200 000 inhabitants (Kankan and Nzerekore) and a further four that have between 100 000 and 200 000 inhabitants (Kindia, Kissigougou, Siguiri and Labe). Several of these are also regional capitals.\nIt is interesting to note that officially only Conakry and the regional capitals are labelled as ?쐕rban?? However, recently two urban agglomerations (Kamsar and Sangaredi), which have sprung up around mining sites, were officially recognised as urban areas. In fact, several more urban agglomerations have emerged around mining sites since 2000 and it is expected that this trend will continue in the coming years and decades."
                           }
               ]
},
{
    "id":20,
    "title":"The Gambia",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ -16.826079936892199,13.0527230912037],[-13.7937487859001, 13.827261735338197 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 2023790  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 1125753  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.56  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 11  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.70  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  10.50  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 3961.83  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 284.15  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.028  }
                         ],
           "data": {
                             "totalPop":[0.289311111,0.319,0.429326667,0.622730435,0.911063636,1.273762222,1.720053846,2.010273]
                             ,"urbanPop":[0.026038,0.02552,0.064399,0.143228,0.300651,0.573193,0.894428,1.125753]
                             ,"ruralPop":[0.263273111,0.29348,0.364927667,0.479502435,0.610412636,0.700569222,0.825625846,0.88452]
                             ,"totalPopGrowth":[0.009816719,0.030148224,0.037889749,0.038783068,0.034079587,0.030493764,0.03167427]
                             ,"urbanPopGrowth":[-0.002007437,0.096982869,0.083215536,0.076969669,0.066654629,0.045500996,0.047079231]
                             ,"ruralPopGrowth":[0.010920959,0.02202808,0.027681178,0.024432316,0.013871123,0.016560482,0.013876076]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Gambia is the second smallest country in West Africa and surrounded on all three sides by Senegal. The Gambia River forms the core of the country which is no wider than 32 kilometres from north to south. With a population of just over 2 million in 2015, Gambia has the third highest population density in Africa at 235 inhabitants per km2.\nAt 56%, Gambia's level of urbanisation is the highest in West Africa. Although the country counts 11 urban agglomerations in total, 4 of the largest (Serrakunda, Brikama, Tanjeh and Banjul) are located on the country's coastline and are separated only by a few hundred metres of unconstructed land. These agglomerations are expected to form one big conurbation as their densities increase, most likely reducing the total number of urban agglomerations in the country. Only three urban agglomerations of more than 10 000 inhabitants are located in the country's interior where the level of urbanisation barely exceeds 10%.\nGambia's biggest urban agglomeration is Serrekunda to the south of the capital Banjul. It counts 789혻000 inhabitants and is seven times larger than the second biggest agglomeration Brikama. Serrekunda alone accounts for 70% of the country's urban population. By contrast, Banjul's population has been in decline since the 1980s due to the limited size of the territory on which Banjul is built but also due to the emergence of newer urban agglomerations along the stretch of land that connects Banjul to the rest of the country."
                           }
               ]
},
{
    "id":21,
    "title":"Guinea-Bissau",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ -16.716210858836821,10.9267692162175],[-13.6344428845149, 12.684674465103612 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 1530637  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 525458  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.34  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 6  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.78  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  40.40  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 4968.40  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 105.76  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.004  }
                         ],
           "data": {
                             "totalPop":[0.512922222,0.553822222,0.49405,0.808725,0.958222727,1.178542857,1.51726129,1.545465]
                             ,"urbanPop":[0.046163,0.049844,0.118572,0.129396,0.210809,0.329992,0.470351,0.525458]
                             ,"ruralPop":[0.466759222,0.503978222,0.375478,0.679329,0.747413727,0.848550857,1.04691029,1.020007]
                             ,"totalPopGrowth":[0.007701456,-0.011355732,0.050516786,0.017106805,0.020911019,0.025584621,0.003690375]
                             ,"urbanPopGrowth":[0.007701456,0.090528264,0.008773978,0.050018207,0.045830797,0.036076602,0.022405524]
                             ,"ruralPopGrowth":[0.007701456,-0.029004376,0.061083511,0.009597093,0.012771988,0.021229047,-0.005193219]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Guinea-Bissau is the least populous country of continental West Africa. The country's territory is divided between the mainland and an archipelago which sees the surface area of the country vary with the tide.\nThe capital Bissau is located on the coast and dominates the urban hierarchy. Bissau is ten times larger than the second biggest agglomeration Gabu and achieves an average population density of 6 748 inhabitants per square kilometre  against a national average of 4 968. 78% of the urban population live in Bissau. The rest are spread out across the remaining five agglomerations, none of whom have a population exceeding 40 000 inhabitants.\nIn 2015, Guinea-Bissau had an urbanisation level of 34.3%.  Given the dominance of Bissau, the level of urbanization outside of the capital is very low at just 10.3%. In fact, urbanisation has progressed slowly over the past decades and had seen a brief decline after Guinea-Bissau achieved independence in 1973 due to the departure of the political elites and Portuguese colonizers. It is only after 2000 that the country exceeds the level of urbanisation it had reached in 1970."
                           }
               ]
},
{
    "id":22,
    "title":"Equatorial Guinea",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 5.603193718085414,-1.46069231784424],[11.3327510702054, 3.785449614422333 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 1222442  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 762000  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.62  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 13  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.75  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  34.10  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 3255.71  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 234.05  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.008  }
                         ],
           "data": {
                             "totalPop":[0.1972,0.242916667,0.2576,0.292,0.3528,0.881539535,1.131895745,1.229032]
                             ,"urbanPop":[0.0493,0.0583,0.0644,0.073,0.091728,0.379062,0.531991,0.762]
                             ,"ruralPop":[0.1479,0.184616667,0.1932,0.219,0.261072,0.502477535,0.599904745,0.467032]
                             ,"totalPopGrowth":[0.021068881,0.005886211,0.012613468,0.019094769,0.095900996,0.025312999,0.01660292]
                             ,"urbanPopGrowth":[0.01690917,0.010000831,0.012613468,0.02309958,0.152446657,0.03447358,0.074509197]
                             ,"ruralPopGrowth":[0.022422205,0.004554773,0.012613468,0.017727754,0.067666547,0.017879961,-0.048841555]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Equatorial Guinea is the richest country in sub-Saharan Africa. It has experienced exceptionally rapid economic growth since the discovery of fossil fuels in 1996. In 2015, it had one of the highest levels of urbanisation at 62.3%. In fact, the urbanisation level has seen a drastic increase in the five years since 2010 when it stood at just 46.5%. This increase is partly due to the emergence of smaller agglomerations, of which there was only 1 in 2000, but whose numbers are expected to grow to 17 by 2020. However, given the relative concentration of the urban population and the limitations of the territory, the emergence of newer agglomerations is expected to be quite limited in the future.\nIn addition, Equatorial Guinea has one of the highest rates of demographic growth in sub-Saharan Africa as its natural and mineral wealth has attracted migrants from outside the country. Between 1990 and 2000, the urban population grew at an annual rate of 15.2% compared to an overall annual population increase of just 9.5% across the country. This population increase has also contributed to the rapid increase in urbanization.\nThe country is divided into two parts: the island of Bioko - off the coast of Cameroon - which is the location of the capital Malabo, and the mainland, which is situated 200 kilometres away from the island. The urban population is spread across just 13 urban agglomerations, the largest being Bata on the mainland. Bata accounts for 41% of the total urban population, whilst the smaller agglomerations hold about  one-quarter. The primacy index is the second lowest in Africa behind Malawi and on-par with Swaziland and Kenya."
                           }
               ]
},
{
    "id":23,
    "title":"Kenya",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 33.910335195172479,-4.67975402178414],[41.8976211272234, 4.620420513282312 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 44156577  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 28559230  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.65  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 126  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.25  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  27.50  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 1234.69  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 23130.68  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.041  }
                         ],
           "data": {
                             "totalPop":[5.29248,7.727814286,10.80145556,16.14736923,22.56765,29.44401667,39.06128571,43.937277]
                             ,"urbanPop":[0.264624,0.540947,0.972131,2.099158,3.610824,10.599846,19.14003,28.55923]
                             ,"ruralPop":[5.027856,7.186867286,9.829324556,14.04821123,18.956826,18.84417067,19.92125571,15.378047]
                             ,"totalPopGrowth":[0.038579498,0.034052433,0.041026894,0.03404266,0.026954191,0.028667332,0.023805176]
                             ,"urbanPopGrowth":[0.074119371,0.060368963,0.080020586,0.055737916,0.113702831,0.060875221,0.083330015]
                             ,"ruralPopGrowth":[0.03637202,0.031806846,0.036357836,0.030420427,-0.000595868,0.005573843,-0.050452063]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"At 65%, Kenya has the second highest level of urbanisation in East Africa after Djibouti. The definition of what counts as a city is largely political and recognises only the core of Kenyan cities. However, in reality urban agglomerations that are not officially recognised as cities are integral to Kenya's urban landscape. Five of these agglomerations (Embu, Kisii, Kisumu, Mombasa and Nairobi) have more than one million inhabitants and six have more than 400혻000.\nThese urban agglomerations often expand over a large territory and have relatively low population densities compared to agglomerations in other African countries (on average 1235 inhabitants/km2 which gives Kenya the second lowest urban population density in Africa behind Swaziland). Most urban agglomerations can be found in Kenya's highlands whereas littoral areas are more sparsely populated. Outside of Mombasa, there are very few if any urban agglomerations along the coastline.\nMost of the urban population growth is taking place in larger agglomerations above 200혻000 inhabitants. Smaller cities and urban agglomerations are growing much slower. The largest agglomerations can be found in the Western Highlands and north of Nairobi in the central part of the country. These two areas have a combined population of more than 26 million and are likely to become two of the largest urban agglomerations in Africa in the years to come, extending over several hundreds of kilometres."
                           }
               ]
},
{
    "id":24,
    "title":"Liberia",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ -11.492059789361775,4.35124553384174],[-7.36655688248939, 8.553673842533343 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 4045171  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 1715625  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.42  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 21  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.69  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  35.10  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 4038.86  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 424.78  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.004  }
                         ],
           "data": {
                             "totalPop":[0.763333333,0.926585714,1.32094375,1.752778571,2.401003125,2.971388571,3.66702,4.084821]
                             ,"urbanPop":[0.0229,0.064861,0.211351,0.490778,0.768321,1.039986,1.466808,1.715625]
                             ,"ruralPop":[0.740433333,0.861724714,1.10959275,1.262000571,1.632682125,1.931402571,2.200212,2.369196]
                             ,"totalPopGrowth":[0.019570209,0.036095703,0.02868942,0.031968799,0.021543047,0.021257792,0.021814239]
                             ,"urbanPopGrowth":[0.109723584,0.125387447,0.087897748,0.045841237,0.030738455,0.034986244,0.031833964]
                             ,"ruralPopGrowth":[0.015285675,0.025603528,0.012953698,0.026087055,0.016944184,0.013115996,0.014909441]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"In 2015, Liberia had a total population of around four million. Whilst 42% of this population lives in urban agglomerations, in reality the majority is concentrated in the capital Monrovia, which alone accounts for two-thirds of the total urban population of the country. Outside of Monrovia, the country only counts 20 other urban agglomerations, none of which have more than 60 000 inhabitants (compared to 1 191 000 inhabitants in Monrovia). This gives Liberia the highest primacy index of any country in the world. The dominance of Monrovia is so pronounced that the level of urbanisation in the country would only reach 18.4% if Monrovia were discounted.\nThe population of Liberia is very unevenly distributed. Of the six largest agglomerations, five (Monrovia, Ganta, Kakata, Gbarnga and Harbel) are located along the crest between the rivers Saint Paul and Saint John that connect Monrovia to Ganta at the Guinean border. The southern part of the country is only sparsely populated and the road infrastructure connecting various localities is very poorly developed.\nUnlike many other African countries, Liberia has experienced very little growth in the number of urban agglomerations. Between 1980 and 2000, the number of urban agglomerations remained stable at 14 but increased to 24 by 2010. In 2015, the number stood at 21 urban agglomerations. This decline is due to the disappearance in 2012 of three refugee camps that counted more than 10 000 inhabitants. The appearance and disappearance of urban agglomerations is also linked to mining activities that have given rise to new settlements but also triggered their dissipation once mining operations closed."
                           }
               ]
},
{
    "id":25,
    "title":"Libya",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 9.388093959395881,19.5073822641284],[25.148468001036, 33.169291009271674 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 5467108  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 4410900  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.81  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 46  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.44  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  63.20  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 1427.84  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 3089.22  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.002  }
                         ],
           "data": {
                             "totalPop":[0.943490769,1.35917,2.022957143,3.066045313,4.290715789,5.311245,5.445554321,5.445552624]
                             ,"urbanPop":[0.613269,0.815502,1.132856,1.962269,3.260944,4.248996,4.410899,4.410899]
                             ,"ruralPop":[0.330221769,0.543668,0.890101143,1.103776313,1.029771789,1.062249,1.034655321,1.034653624]
                             ,"totalPopGrowth":[0.037178755,0.040569974,0.042459493,0.034177579,0.021566537,0.002500449,-6.23185E-08]
                             ,"urbanPopGrowth":[0.028910032,0.033415492,0.056472954,0.052103535,0.02681995,0.003746581,0]
                             ,"ruralPopGrowth":[0.051121228,0.050535079,0.021748882,-0.006915984,0.00310994,-0.00262854,-3.27992E-07]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Libya has been going through a period of upheaval since the civil war of 2011 and has seen its population decline due to war casualties and populations displacements. The exact population figures are hard to determine. Whilst Africapolis was able to verify the location of residential structures, it is not clear whether these are necessarily inhabited. As a result, the official population figure for 2015 has remained the same as that retained during the last update.\nDespite these uncertainties, Libya is the country with the second highest level of urbanisation in Africa at 80.4% (on par with Gabon). Libya is the fourth largest African country by surface area but despite its size, it only counts 46 urban agglomerations. The largest is the capital Tripoli with almost 2 million inhabitants, spread out on a surface area of 1 745 square kilometres which makes it one of the vastest urban agglomerations on the African continent. Like Tripoli, most of Libya's largest agglomerations are characterised by a relatively weak urban population density. The average urban population density stood at just 1 428 inhabitants per km2 in 2015, the third lowest in Africa after Swaziland and Kenya.\nLibya counts only two cities above 500 000 inhabitants: Tripoli and Benghazi. They account for 58% of all urban dwellers. By contrast, smaller agglomerations only account for 15% of the total urban population and their numbers have been stagnating since 2000. Urbanisation in Libya is also characterised by its largely coastal character ??three-quarters of the urban population reside in agglomerations along the coast."
                           }
               ]
},
{
    "id":26,
    "title":"Lesotho",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 27.027195141422098,-30.6577392328189],[29.4662204855297, -28.570269367717884 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 1998573  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 525088  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.26  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 10  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.58  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  22.50  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 1644.29  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 319.34  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.011  }
                         ],
           "data": {
                             "totalPop":[0,0.56965,1.01542,1.458883333,1.62523,1.821294118,1.854876,2.019569]
                             ,"urbanPop":[0,0.011393,0.050771,0.087533,0.162523,0.30962,0.463719,0.525088]
                             ,"ruralPop":[0,0.558257,0.964649,1.371350333,1.462707,1.511674118,1.391157,1.494481]
                             ,"totalPopGrowth":[0,0.059506831,0.036901458,0.010856311,0.011454906,0.001828725,0.017158805]
                             ,"urbanPopGrowth":[0,0.161175227,0.055979798,0.063835067,0.066575044,0.041220208,0.025168942]
                             ,"ruralPopGrowth":[0,0.056217878,0.035804777,0.006470134,0.003298317,-0.008273777,0.01443179]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Lesotho is one of Africa's smallest countries and has the lowest level of urbanisation in southern Africa at 26.3%. Compared to other African countries, urbanisation has progressed slowly in Lesotho.\nThe capital Maseru stands out amongst Lesotho's urban agglomerations. It is almost nine times larger than the second largest city Maputsoe and counts a total of 307 000 inhabitants in the wider agglomeration. Nonetheless, it remains  modest in size and ??unlike most African capitals ??it only counts as a medium-sized agglomeration.\nSince 1990, Maseru has spread out to the north, and later to the south. In 2015, 124 000 of Maseru's inhabitants were living within the periphery of the city. Overall, the city accounts for more than half of all urban dwellers in Lesotho.\nThe country retains a predominantly rural character. Most of the larger urban agglomerations are situated along the northwestern border with South Africa whereas the interior is largely rural. The population densities in the urban agglomerations is one of the lowest in Africa at just 1 644 inhabitants per km2."
                           }
               ]
},
{
    "id":27,
    "title":"Morocco",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ -13.167520611755194,27.6594718132624],[-0.994299518106317, 35.910435009056016 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 34165283  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 20309321  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.60  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 167  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.20  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  29.30  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 7065.07  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 2874.61  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.006  }
                         ],
           "data": {
                             "totalPop":[8.911208,11.83968519,15.02021875,19.15195,23.26911333,27.64023137,31.31277818,33.17434211]
                             ,"urbanPop":[2.227802,3.196715,4.80647,7.277741,10.471101,14.096518,17.222028,19.875937]
                             ,"ruralPop":[6.683406,8.642970185,10.21374875,11.874209,12.79801233,13.54371337,14.09075018,13.29840511]
                             ,"totalPopGrowth":[0.028822272,0.024079353,0.024598402,0.019663054,0.017363574,0.012553532,0.011617057]
                             ,"urbanPopGrowth":[0.036770742,0.041627007,0.042358317,0.037049712,0.030177239,0.020228013,0.029078877]
                             ,"ruralPopGrowth":[0.026045257,0.016839048,0.015177426,0.00752025,0.005679328,0.003967458,-0.01150816]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"In 2015, Morocco reached an urbanisation level of almost 60%. Casablanca is the largest urban agglomeration with a population of 4.2 million and accounts for one-fifth of the total urban population. The urban landscape is dominated by a few large agglomerations, notably the historically-important cities of Marrakech, Meknes, Fes and Rabat. To these we can add Casablanca, Tangier and Agadir which have emerged later but represent some of the largest urban agglomerations in Morocco. They continue to constitute the economic, cultural and political engine of the country. In fact, more than half (56%) of the total urban population resides in agglomerations of more than 500 000 inhabitants.\nDespite its population size, Morocco sports relatively few urban agglomerations overall. The population density in the existing agglomerations are quite high at almost 7 000 inhabitants per square kilometre (ninth highest in Africa). Some cities such as Fes, Meknes, Tetouan and Tangier have population densities outstripping 8 500 inhabitants per square kilometre. However, outside of these dominant historical cities, there are very few smaller urban agglomerations. Only around 12% of the urban population resides in agglomerations between 10 000 and 50 000 inhabitants.\nMany of these smaller agglomerations are located further inward towards the Rif and Atlas Mountains and along the edges of the Sahara Desert. Despite the appearance of a relatively weak population density, these mountainous regions have only limited cultivatable land and hence limited space for construction, resulting in an ongoing rural exodus from these regions."
                           }
               ]
},
{
    "id":28,
    "title":"Mali",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ -12.233633448284422,10.1632260034789],[4.24084698276459, 25.000708313044015 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 17819002  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 5697331  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.32  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 94  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.49  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  38.80  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 5068.08  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 1124.16  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.001  }
                         ],
           "data": {
                             "totalPop":[3.819325,4.32152,4.934744444,6.50296,8.150911111,10.87753043,15.31104333,17.804159]
                             ,"urbanPop":[0.152773,0.216076,0.444127,0.975444,1.467164,2.501832,4.593313,5.697331]
                             ,"ruralPop":[3.666552,4.105444,4.490617444,5.527516,6.683747111,8.375698435,10.71773033,12.106828]
                             ,"totalPopGrowth":[0.012429966,0.013357798,0.027979944,0.022844248,0.029277348,0.034778622,0.030631319]
                             ,"urbanPopGrowth":[0.035275633,0.074706967,0.081856146,0.041663945,0.05481901,0.062641542,0.044020634]
                             ,"ruralPopGrowth":[0.011370376,0.009007961,0.020992131,0.019175559,0.022822098,0.024962979,0.024673511]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Mali has the second lowest population density in West Africa (behind Mauritania) at 14 inhabitants per square kilometre. The population is very unevenly distributed across the territory: two-thirds of the territory - comprising mainly the regions of Timbuktu, Gao and Kidal - account for only 778 000 inhabitants in 2015 (i.e. less than 1 inhabitant per km2), of which a large majority is concentrated in the regional capitals. 96% of the Malian population lives in the other third of the territory, corresponding to a population density of 47 inhabitants perkm2.\nThe capital Bamako dominates the urban population distribution by accounting for almost half of all urban dwellers. It is 10 times as large as the second biggest city Sikasso, both in terms of inhabitants and surface area. Mali's primacy score is the eighthth largest in Africa. However, the number of smaller urban agglomerations between 10혻000 and 49혻999 inhabitants has seen large growth in the past few decades. In 1990, there were only 18 urban agglomerations in this category, but the number grew to more than 60 in 2015.\nMali has one of the highest urban growth rates on the African continent. Only 18% of the total population were living in urban agglomerations in 1990. In 2015, the level of urbanisation stood at 32%. At the same time, the country has seen significant population growth (from 8.2 to 15.2 million) which has also translated into a larger urban population (from 1.5 to 5.7 million)."
                           }
               ]
},
{
    "id":29,
    "title":"Mozambique",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 30.218810884823739,-26.8673412758106],[40.8374143565547, -10.475241344327628 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 26961267  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 8926738  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.34  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 167  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.30  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  28.80  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 3132.64  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 2849.59  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.004  }
                         ],
           "data": {
                             "totalPop":[6.79325,6.575,8.436085714,11.56215714,13.31643333,16.44656552,21.49151515,26.582876]
                             ,"urbanPop":[0.135865,0.263,0.590526,1.618702,2.396958,4.769504,7.0922,8.926738]
                             ,"ruralPop":[6.657385,6.312,7.845559714,9.943455143,10.91947533,11.67706152,14.39931515,17.656138]
                             ,"totalPopGrowth":[-0.003260163,0.025237594,0.032023979,0.014226387,0.021336211,0.02711526,0.043438811]
                             ,"urbanPopGrowth":[0.068279306,0.084247246,0.106095914,0.040038346,0.07122643,0.040472906,0.047086024]
                             ,"ruralPopGrowth":[-0.005313253,0.021987759,0.02397968,0.009407309,0.006730392,0.021176535,0.041623515]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Mozambique officially counts 88 cities of which 77 have a population of more than 10 000 inhabitants. However, Africapolis data shows that there are as many as 157 separate urban agglomerations. The biggest agglomeration is the capital Maputo which counts 2.6 million inhabitants. In addition to Maputo, there are four more agglomerations that count more than 300 000 inhabitants (Beira, Nampula, Chimoio and Quelimane). Many of the smaller agglomerations that have emerged recently are located further inland.\nUntil the 1970s, Mozambique remained largely rural with a level of urbanisation below 10% and a total of just six urban agglomerations within its territory. By 1990, that figure had increased to 17.6% and 15 urban agglomerations in total. Urbanisation however took off after 1990 when the country experienced a tripling of the number of urban agglomerations within just 10 years to 65 in 2000 and then another increase in recent years to bring the total number to 157. This growth is largely driven by the rapid increase in smaller agglomerations between 10 000 and 50 000 inhabitants.\nMozambique's urban agglomerations are relatively evenly distributed across the territory. Despite the relatively small number of agglomerations for a country of Mozambique's size, the average distance between agglomerations is quite low (38km in 2010). Amongst the newer agglomerations, two different kinds can be distinguished: large circular towns with low densities and hyper-linear towns that emerge around the road networks. These agglomerations are often characterised by a lack of infrastructure and the predominance of agricultural activities and roadside businesses. Many of these agglomerations also display low levels of density (3 138 inhabitants per km2 on average in 2015)."
                           }
               ]
},
{
    "id":30,
    "title":"Mauritania",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ -17.067787646818925,14.7171671732258],[-4.82863658274659, 27.296920902860109 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 4034103  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 1713049  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.42  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 23  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.69  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  106.50  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 4407.69  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 388.65  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.000  }
                         ],
           "data": {
                             "totalPop":[0,0,1.160728571,1.458028571,1.977825,2.533648485,3.24814878,4.078688]
                             ,"urbanPop":[0,0,0.081251,0.306186,0.712017,0.836104,1.331741,1.713049]
                             ,"ruralPop":[0,0,1.079477571,1.151842571,1.265808,1.697544485,1.91640778,2.365639]
                             ,"totalPopGrowth":[0,0,0.023065727,0.030960872,0.025075491,0.025153633,0.046590804]
                             ,"urbanPopGrowth":[0,0,0.141867367,0.088054134,0.01619486,0.047649348,0.051647038]
                             ,"ruralPopGrowth":[0,0,0.006509667,0.009479424,0.029782086,0.0122008,0.043018734]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Mauritania is the third largest West African country by surface area (behind Mali and Niger) and has the second lowest population density in Africa behind Namibia and Libya at just 4 inhabitants per km2 (on par with Botswana). Three-quarters of the country are dominated by desert or semi-desert. Most of the population lives along the coast and along the border with Senegal and Mali to the south (valley of the Senegal River).\nUrbanisation has increased rapidly since 2000. The urban population has more than doubled from 836혻000 to 1혻713혻000 in 2015. Over the same period, the number of urban agglomerations has jumped from 12 to 23, an increase that is mainly due to the emergence of smaller agglomerations with populations between 10혻000 and 50혻000 inhabitants.\nThe capital Nouakchott dominates the country's urban hierarchy. It is home to 28% of the total population, 62% of all urban dwellers and is eight times larger than the second biggest city Nouadhibou. The emergence of Nouakchott is a relatively recent phenomenon: in 1960, it only counted 416 inhabitants compared to 1 million in 2015. Aside from the capital, the other main settlement areas have emerged around sites of economic activity: the iron mining town of Zoueiratt, which links to the main port of Nouadhibou, and the Senegal Valley where the urban agglomerations of Kaedi, Kiffa and Mbera are located. The latter is the fourth largest urban agglomeration in Mauritania but is in fact a refugee camp with an extraordinary urban population density of more than 15 000 inhabitants per km2."
                           }
               ]
},
{
    "id":31,
    "title":"Malawi",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 32.679827091722899,-17.1221500948736],[35.9153819427564, -9.371052848075948 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 16310428  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 4835999  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.30  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 77  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.45  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  21.60  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 3949.40  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 1224.49  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.013  }
                         ],
           "data": {
                             "totalPop":[2.4483,3.3464,4.15754,6.446771429,8.79043,10.17002143,13.97888889,16.119997]
                             ,"urbanPop":[0.024483,0.100392,0.207877,0.451274,0.879043,1.423803,3.7743,4.835999]
                             ,"ruralPop":[2.423817,3.246008,3.949663,5.995497429,7.911387,8.746218429,10.20458889,11.283998]
                             ,"totalPopGrowth":[0.031742503,0.021941083,0.044841908,0.031494187,0.014684847,0.032321752,0.028912541]
                             ,"urbanPopGrowth":[0.151551717,0.075500789,0.080596079,0.068948989,0.049407052,0.102398596,0.050823937]
                             ,"ruralPopGrowth":[0.02963898,0.019814178,0.04262112,0.028117475,0.010082319,0.015541135,0.020313182]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Malawi has four official cities and 28 rural market towns. The country's urbanisation profile is unique in Africa as the country does not count one but two dominant cities, Lilongwe and Blantyre, which are of similar size. Indeed, Malawi has the lowest primacy index of any country in the world. At the same time, it has one of the highest population densities in Africa at 173 inhabitants perkm2.\nBesides Lilongwe and Blantyre, Malawi only counts two further cities with more than 200혻000 inhabitants (Zomba and Mzuzu) and one urban agglomeration of more than 100혻000 inhabitants (Mpama/Likoswe UA). Until 25 years ago, Malawi was largely rural with a level of urbanisation of just 10% in 1990. Since then, urbanisation has largely been driven by people setting up informal settlements, thereby driving urbanisation outside of an official planning framework.\nIn 2015, there were 73 urban agglomerations in the country (up from 13 in 1990), but more than half of these agglomerations are not officially recognised as urban areas. Many of the urban agglomerations that have emerged in recent years are small agglomerations with fewer than 50 000 inhabitants. Whilst there were only 15 small agglomerations in 2000, there were more than 50 in the same category 15 years later. Despite the rapid urbanization, Malawi remains the second least urbanised country in Central Africa at a level of 29.6%.\nMalawi's ?쐇mprovised??agglomerations present a significant challenge for managed urbanisation. Unlike many other African nations, there is no real rural exodus. Instead urban agglomerations are built by the people themselves without the need to migrate towards cities per se. Policy-makers remain reluctant to provide more powers to the lowest administrative level, the Traditional Authorities, which often cover very large areas (on average 450 km2 with 67,000 inhabitants) without having the resources to provide adequate planning and development support."
                           }
               ]
},
{
    "id":32,
    "title":"Namibia",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 11.717292843399271,-28.9713042880053],[25.2583370790913, -16.957389095741675 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 2210000  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 891180  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.40  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 17  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.40  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  134.40  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 2803.60  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 317.87  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.000  }
                         ],
           "data": {
                             "totalPop":[0.4041,0.535555556,0.758571429,0.999658824,1.384230435,1.771389655,2.085316216,2.22795]
                             ,"urbanPop":[0.020205,0.0482,0.1062,0.169942,0.318373,0.513703,0.771567,0.89118]
                             ,"ruralPop":[0.383895,0.487355556,0.652371429,0.829716824,1.065857435,1.257686655,1.313749216,1.33677]
                             ,"totalPopGrowth":[0.028564587,0.035426308,0.027982052,0.033084056,0.024968624,0.016449442,0.013320209]
                             ,"urbanPopGrowth":[0.090834383,0.082200544,0.048135959,0.064788987,0.04900507,0.041516499,0.029244032]
                             ,"ruralPopGrowth":[0.024149475,0.029591388,0.024338501,0.025361301,0.016687147,0.004370624,0.003480284]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Namibia is Africa's least densely populated country with an average of just 3 inhabitants per square kilometre (equal to that of Libya). The country consists mainly of high plateau which is flanked by the Namib Desert along the western coastline and the Kalahari Desert to the east, rendering large swaths of the country unfavorable to human occupation. Whilst the urban population has more than doubled since 1990, the pace of urbanisation has slowed down in the past decade compared to previous decades, mainly as a result of the limited demographic resources of Namibia's sparsely populated hinterland.\nThe country is subdivided into 14 regions and 121 constituencies and counts 17 urban agglomerations with a population above 10혻000 ??the biggest being the capital Windhoek with just under 360혻000 inhabitants. Most of the other larger urban agglomerations such as Rundu, Walvis Bay, Oshakati and Swakopmund are situated on the country's borders which magnify the relative ?쐃mptiness??of the interior parts of the country. The overall level of urbanisation stands at 40% but the population density in the urban agglomerations is the seventh lowest in Africa at 2 804 inhabitants per km2.\nContrary to most African nations, there are few agglomerations below 20 000 inhabitants and 13 out of the 17 cities have populations between 20 000 and 40 000. Whilst the distance between urban agglomerations has gradually decreased as more cities emerge and existing cities grow, the average distance between cities remains very high by African standards at 107 kilometres."
                           }
               ]
},
{
    "id":33,
    "title":"Niger",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 0.164802208197493,11.6958527626051],[15.9966039359589, 23.523016092945412 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 18850739  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 3270216  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.17  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 68  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.33  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  37.70  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 5946.50  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 549.94  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.000  }
                         ],
           "data": {
                             "totalPop":[2.33,2.808266667,4.31076,5.768477778,7.798678571,10.65823125,15.6550125,19.236565]
                             ,"urbanPop":[0.0233,0.084248,0.215538,0.519163,1.091815,1.705317,2.504802,3.270216]
                             ,"ruralPop":[2.3067,2.724018667,4.095222,5.249314778,6.706863571,8.95291425,13.1502105,15.966349]
                             ,"totalPopGrowth":[0.018845291,0.043786198,0.029557811,0.030613862,0.031730838,0.039194472,0.042065028]
                             ,"urbanPopGrowth":[0.13715684,0.098490802,0.091887737,0.077170702,0.045600077,0.039194472,0.054776894]
                             ,"ruralPopGrowth":[0.016768063,0.041613829,0.025138435,0.024806062,0.029305978,0.039194472,0.039572022]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Niger has the lowest level of urbanisation in Africa at just 17.3%. Unlike many other African countries, its level of urbanisation has not increased much since 1990 when it stood at 14%. However, the total number of agglomerations has increased sharply over that period, jumping from 24 to 68 in 2015. This growth has been largely driven by an increase in the number of smaller agglomerations with fewer than 50 000 inhabitants, which accounted for one-third of the urban population in 2015.\nWith a population of 18.9 million spread out over a relatively vast territory, Niger also has the third lowest population density in West Africa at 16 inhabitants per km2 against an average of 29 for the region. However, 96% of the population lives in the southern half of the country which only represents one- quarter of the surface. Here, densities approach an average of 60 inhabitants per km2. Within the urban agglomerations, this density is as high as 5 947 inhabitants per km2 in 2015. This high urban density is the result of the relative absence of urban sprawl.\nIn addition to the capital Niamey, there are four more urban agglomerations counting more than 100혻000 inhabitants: Maradi, Zinder, Tahoua and Agadez. Despite Niamey's extraordinary growth (going from 8 300 inhabitants in 1950 to over one  million in 2015), Maradi and Zinder are gradually transforming into strategically important cities rivaling the capital due to their location at the Nigerian border."
                           }
               ]
},
{
    "id":34,
    "title":"Nigeria",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 2.669757522728581,4.27986046567154],[14.6781749992943, 13.893191705761652 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 186939800  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 98950505  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.53  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 1236  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.21  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  13.60  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 5023.29  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 19698.35  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.022  }
                         ],
           "data": {
                             "totalPop":[32.96276364,40.05989048,49.7456,65.15935484,86.07026316,115.7335714,160.205,188.038562]
                             ,"urbanPop":[3.625904,8.412577,12.4364,20.1994,32.7067,48.6081,76.8984,98.950505]
                             ,"ruralPop":[29.33685964,31.64731348,37.3092,44.95995484,53.36356316,67.12547143,83.3066,89.088057]
                             ,"totalPopGrowth":[0.019691066,0.021890805,0.027358954,0.028223761,0.030055493,0.033050783,0.032557323]
                             ,"urbanPopGrowth":[0.087805562,0.039864047,0.049698022,0.049372855,0.040416406,0.046937765,0.051720023]
                             ,"ruralPopGrowth":[0.00760966,0.016594858,0.018828284,0.017283254,0.023208768,0.021831311,0.013509947]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"The territory of modern-day Nigeria gave rise to some of Africa's most important pre-colonial cities. By 1890, Nigeria was already home to more than twenty cities with a population of more than 20혻000 inhabitants and by 1911 the country counted more cities with populations above 10 000 than the rest of sub-Saharan Africa combined.\nToday, Nigeria is the most populous country in Africa and has the second highest level of urbanisation (52%) in West Africa after Gambia. Its population density is the fourth highest in Africa at 205혻inhabitants per km2. The demographic weight of Nigeria is a key factor in explaining not just the high number of urban agglomerations but also their relatively large size.\nAccording to Africapolis, Nigeria accommodates 1 158 urban agglomerations, making it the country with the largest number of urban agglomerations in Africa. Unlike the rest of the region, Nigeria is characterised by a large number of medium-sized cities with populations between 50 000 and 500혻000. Many of these are located in the southern part of the country but the sheer number of urban agglomerations overall means that the whole territory represents one extensive urban network.\nIn 2015, just over half of all urban dwellers lived in agglomerations of more than 500 000 inhabitants. The most populous city (Lagos) accounts for about 12% of the country's urban population. Lagos and Kano (the third largest agglomeration) both score urban density levels above 12 500 inhabitants per km2 compared to a national average of just 4 959. In fact, some of Nigeria's largest urban agglomerations such as Onitsha, Aba and Uyo, are spread out over vast territories. Onitsha is the second largest urban agglomeration in Nigeria but covers an area ten times as large as that of Kano."
                           }
               ]
},
{
    "id":35,
    "title":"Rwanda",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 28.856485458478389,-2.83951089128324],[30.8944758822985, -1.054159681858877 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 11346291  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 6335276  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.56  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 41  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.35  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  12.70  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 3020.65  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 2097.32  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.085  }
                         ],
           "data": {
                             "totalPop":[2.2383,0,3.495,5.551575,7.19528,7.575226923,8.912084746,11.312993]
                             ,"urbanPop":[0.022383,0,0.0699,0.222063,0.359764,1.969559,5.25813,6.335276]
                             ,"ruralPop":[2.215917,0,3.4251,5.329512,6.835516,5.605667923,3.653954746,4.977717]
                             ,"totalPopGrowth":[-1,0,0.047362218,0.02627358,0.005159068,0.016385279,0.048865118]
                             ,"urbanPopGrowth":[-1,0,0.12253503,0.049431631,0.185318681,0.103179626,0.037974882]
                             ,"ruralPopGrowth":[-1,0,0.045204856,0.025199501,-0.019639948,-0.041893956,0.063783886]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Rwanda's official level of urbanisation stands at 17% against a level of 56% estimated by Africapolis based on its morphological approach. In fact, Rwanda has one of the highest levels of urbanisation in Africa, largely as a result of the phenomenal densification of rural areas. At 446 inhabitants per km2 nationally, Rwanda has the highest average population density in Africa.\nUrbanisation has grown spectacularly over the past three decades. The total urban population grew six-fold between 1990 and 2000 to reach 2 million, before tripling again to attain 6.3 million in 2015. Similarly, the level of urbanisation has increased from 5% in 1990, to 26% in 2000 before reaching 56% in 2015. Over the same period, the country has seen a rapid increase in the number of agglomerations which went from just 7 in 1990 to 53 in 2000. In 2015, the number reduced to 41 agglomerations as a result of the fusion of several agglomerations into greater conurbations. This is reflected in the quasi absence of very small agglomerations between 10 000 and 20 000 inhabitants in 2015.\nThe capital Kigali holds slightly more than one-third of the urban population. It is twice as large as the second biggest agglomeration Gisenyi but its dominance has reduced massively since 2000 when Kigali was almost 15 times larger than the second biggest agglomeration. Medium-sized agglomerations account for another third whereas smaller agglomerations account for only 8% of the total urban population.\nThe urban network itself is strongly interconnected. From the capital Kigali, located at the centre of the country, a web of agglomerations extends practically all the way to Uganda and Congo in the north and towards Burundi in the south."
                           }
               ]
},
{
    "id":36,
    "title":"Sudan",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 21.841485463881099,8.68549116542911],[38.5796857766238, 22.226578019072377 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 38435252  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 16335246  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.43  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 301  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.33  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  25.10  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 4917.34  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 3321.97  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.002  }
                         ],
           "data": {
                             "totalPop":[6.68365,7.901090909,11.31154,14.21785714,18.05280333,24.62199167,33.04767,38.162512]
                             ,"urbanPop":[0.534692,0.86912,1.696731,2.98575,5.415841,8.863917,13.219068,16.335246]
                             ,"ruralPop":[6.148958,7.031970909,9.614809,11.23210714,12.63696233,15.75807467,19.828602,21.827266]
                             ,"totalPopGrowth":[0.016874451,0.036533798,0.023130994,0.024167642,0.031520475,0.02986848,0.029198683]
                             ,"urbanPopGrowth":[0.049778335,0.069186152,0.058142224,0.061356408,0.050499808,0.040776591,0.043241773]
                             ,"ruralPopGrowth":[0.01350887,0.031778228,0.015668674,0.011854681,0.022318091,0.023243264,0.019392535]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Sudan is the third largest country in Africa after Algeria and the Democratic Republic of the Congo. The climate ranges from arid deserts in the northern two-thirds of the country to semi-arid in the south and some pockets of tropical savannah in the southern-most regions. The northwestern part of the country is largely uninhabited.\nIn 1950, Sudan was the most urbanised country in  east Africa (8%). The level of urbanisation remains high and has gone up from 30% in 1990 to 42% in 2015. Over the same period, the number of urban agglomerations has increased  from 78 to 280 agglomerations in 2015, giving it the seventh highest number of urban agglomerations in Africa. The largest growth can be seen in the number of smaller agglomerations with fewer than 100혻000 inhabitants. Whilst there were only 69 such agglomerations in 1990, there were more than 205 in this category in 2015. The politico-administrative framework has not kept pace with these changes: in 2008, only 96 agglomerations with more than 10혻000 inhabitants were formally classified as cities whereas the country counted more than 200 agglomerations of similar size.\nUrbanisation in Sudan is also characterised by a relatively large urban primacy index, the second highest  in east Africa after Djibouti. The capital Khartoum is almost 10 times as large as the second city Nyala, both in terms of population and built area. The region of Jazira, within which the capital is located, is largely arid except for the delta between the two Nile rivers that have historically provided opportunities for the development of sophisticated irrigation techniques and have thereby contributed to high population growth in an otherwise barren region. This area of 20혻000 square kilometres, representing only 1.1% of Sudan's overall surface area, accounts for 44% of the total urban population of the country."
                           }
               ]
},
{
    "id":37,
    "title":"Senegal",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ -17.518238081460641,12.3056304076076],[-11.3437280103967, 16.694767960271577 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 14143151  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 7156859  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.51  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 74  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.55  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  25.00  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 7465.25  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 958.69  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.005  }
                         ],
           "data": {
                             "totalPop":[2.083333333,2.482945833,3.757378571,5.636397143,7.316504762,9.627752381,12.50626809,14.033057]
                             ,"urbanPop":[0.4375,0.595907,1.052066,1.972739,3.072932,4.043656,5.877946,7.156859]
                             ,"ruralPop":[1.645833333,1.887038833,2.705312571,3.663658143,4.243572762,5.584096381,6.628322085,6.876198]
                             ,"totalPopGrowth":[0.017702516,0.04229768,0.041385828,0.026432057,0.027831978,0.02650314,0.023304564]
                             ,"urbanPopGrowth":[0.031383176,0.058489246,0.064884889,0.045317767,0.027831978,0.038114217,0.040158144]
                             ,"ruralPopGrowth":[0.013770147,0.036677473,0.030788938,0.014802833,0.027831978,0.01729069,0.007369863]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"In 2015, around half of the population of Senegal lived in urban agglomerations. The capital Dakar outweighs all other agglomerations in the country: it is three-and-a-half times larger than the second agglomeration (Touba), and almost nine times larger than the third largest (Thi챔s). Dakar alone reaches one of the highest population densities of any African capital at 15 052 inhabitants per km2. The average urban population density is the second highest in West Africa, after Ivory Coast, at 7 459 inhabitants per km2.\nSenegal counts a total of 74 urban agglomerations and a large part of these are  located in one of the 9혻departments surrounding Dakar (Bambey, Diourbel, M?섳acke, M?셚our, Thi챔s, Fatick, Tivaouane, Guinguineo et Kaolack), including the five most populous agglomerations of the country. In fact, Dakar and the surrounding nine departments hold more than half of the country's total population but only represent 8.7% of the territory. The level of urbanisation in this zone is as high as 73% against 23% in the rest of the country. It is expected that in a few years, the wider area will become one large metropolitan area.\nBesides Dakar, there are only a few agglomerations dotted along the coastline. If one excludes Saint Louis, M?셚our and Dakar, the country only counts two more agglomerations along the coast. Instead, many of the agglomerations are located along the old railway line connecting Dakar to Niger and along the Senegal River which marks the border with Mauritania. It is here that many smaller agglomerations with more than 2 000 inhabitants (but fewer than 10 000) are starting to appear."
                           }
               ]
},
{
    "id":38,
    "title":"Sierra Leone",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ -13.310333366046727,6.92762853449416],[-10.2835212397281, 9.998422386395802 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 7092113  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 2592400  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.37  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 25  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.56  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  31.40  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 5780.28  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 448.49  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.006  }
                         ],
           "data": {
                             "totalPop":[1.81478,2.263314286,2.3905,3.120215,3.850666667,4.619882143,5.90419375,7.006486]
                             ,"urbanPop":[0.090739,0.158432,0.33467,0.624043,0.92416,1.293567,1.889342,2.5924]
                             ,"ruralPop":[1.724041,2.104882286,2.05583,2.496172,2.926506667,3.326315143,4.01485175,4.414086]
                             ,"totalPopGrowth":[0.022332313,0.005482204,0.026997951,0.021257221,0.018379145,0.024832691,0.034827429]
                             ,"urbanPopGrowth":[0.057316213,0.077649143,0.064289489,0.040047717,0.034199149,0.0386092,0.0653156]
                             ,"ruralPopGrowth":[0.020159369,-0.002355211,0.019597427,0.016032268,0.01288791,0.018991619,0.019140957]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Sierra Leone's urbanisation hierarchy is marked by the predominance of its capital Freetown, which is seven  times larger than the second biggest city Kenema and is home to more than half of the total urban population of the country. The overall level of urbanisation stands at 36.6% in 2015 but outside of the capital the level is just 18.8%. The average urban population density is 5 780 inhabitants per km2, the fourth highest in West Africa.\nThe dominance of Freetown is related to the establishment of the capital at the extreme western end of the country, on the peninsula that formed the former British crown colony of Sierra Leone in 1808 and today corresponds to the Western Area. The interior of the country was only demarcated at the end of the 19th century and remains poorly connected to the capital. Much of the interior's infrastructure was also destroyed during the civil war that lasted from 1991 to 2002 and which further catalysed the concentration of the urban population. Outside of Freetown, the main urban centres are the provincial capitals of Kenema, Bo and Makeni and the diamond-mining town of Koidu, which all have populations between 100 000 and 200 000. By contrast, the smaller agglomerations between 10 000 and 50 000 people only represent 15% of the urban population but the number of smaller agglomerations is rising rapidly."
                           }
               ]
},
{
    "id":39,
    "title":"Somalia",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 40.991222542242099,-1.66389470891022],[51.4120787206538, 11.97602317344149 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 12675000  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 4554400  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.36  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 49  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.53  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  64.70  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 8794.99  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 517.84  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.001  }
                         ],
           "data": {
                             "totalPop":[1.9258375,2.238575,3.337335714,4.9267,7.743029412,9.020682609,10.7237375,12.651111]
                             ,"urbanPop":[0.154067,0.268629,0.467227,0.837539,1.316315,2.074757,3.431596,4.5544]
                             ,"ruralPop":[1.7717705,1.969946,2.870108714,4.089161,6.426714412,6.945925609,7.2921415,8.096711]
                             ,"totalPopGrowth":[0.015161646,0.040741385,0.039718142,0.04625002,0.015389924,0.01744438,0.033609514]
                             ,"urbanPopGrowth":[0.057168775,0.056908775,0.060102139,0.04625002,0.046551829,0.051605603,0.058246897]
                             ,"ruralPopGrowth":[0.010659088,0.038351519,0.036032994,0.04625002,0.00779944,0.004876051,0.021152747]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Somalia ranks amongst the poorest countries in the world. Embattled by violence and instability caused by armed groups, separatist movements and terrorist incursions, the state of Somalia is a virtual state. Conceived as a federation, the country counts three federal states: the Central State of Somalia, South-Western Somalia and Jubaland in the South. Puntland and Somaliland are also included in the official definition of Somalia but each holds its own claim to autonomy.\nSince no official census has taken place since 1975, exact population figures are hard to determine. Nonetheless, Africapolis has identified 49 urban agglomerations in 2015 with an average urban population density of 8 795 inhabitants per square kilometre, the third highest in Africa. The three largest agglomerations (Mogadishu, Hargeisa and Burao) exceed 11 000 inhabitants per square kilometre. This density is explained by the precarious security situation in Somalia which tends to encourage a clustering of populations, as well as the extraordinary household occupation level which is the highest in the world with an average of 10 people per household.\nIn 2015, the level of urbanization stood at 36%. The capital Mogadishu and Hargeisa (capital of Somaliland) account for more than half of all urban dwellers. By contrast, there are few smaller agglomerations for a country of its size and some of the more recent agglomerations have emerged closer to the Ethiopian border, as opposed to the coastal areas, which have seen the abandonment and decline of some former port cities."
                           }
               ]
},
{
    "id":40,
    "title":"South Sudan",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 24.154191200790834,3.48882867444349],[35.9483682369437, 12.199554327204311 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 12408235  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 3361900  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.27  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 90  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.11  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  31.80  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 2936.23  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 1144.97  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.002  }
                         ],
           "data": {
                             "totalPop":[1.8,2.224,2.618833333,4.444542857,6.2234875,6.971208333,9.422592,12.451481]
                             ,"urbanPop":[0.018,0.04448,0.15713,0.311118,0.497879,0.836545,2.355648,3.3619]
                             ,"ruralPop":[1.782,2.17952,2.461703333,4.133424857,5.7256085,6.134663333,7.066944,9.089581]
                             ,"totalPopGrowth":[0.021377362,0.016476418,0.054318735,0.034238433,0.011410421,0.030590732,0.057328953]
                             ,"urbanPopGrowth":[0.094685152,0.134512886,0.070697042,0.04814138,0.053262325,0.109078046,0.073729485]
                             ,"ruralPopGrowth":[0.020340948,0.012249301,0.053191713,0.03312093,0.006924501,0.01424784,0.051628731]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"South Sudan is the newest nation in Africa, formed in 2011 after an independence referendum. It is completely landlocked and borders on several states that are themselves landlocked (Chad, Uganda, Ethiopia). The population density is relatively low at 19 inhabitants per km2 and the urban population density is the eighth lowest in Africa at just 2 893 inhabitants per km2.\nThe population is unevenly distributed, and some parts of South Sudan are largely uninhabited. Most of the urban agglomerations are located along the Southern border with Uganda and in the marshlands between the western plateau and the White Nile. In 2015, slightly more than one-quarter of the population lived in urban agglomerations. It has the fifth lowest level of urbanisation in Africa despite a strong increase in the past two decades which has seen the level of urbanisation grow from 12% in 2000 to the current level of 27%.\nOfficial urbanisation and population data for South Sudan is, however, not very reliable. Civil unrest has caused significant population movements in recent years. Between 2012 and 2015, ten urban agglomerations of more than 10 000 inhabitants were either totally or partially demolished. Several urban agglomerations that were refugee camps have either moved or disappeared.\nAfricapolis has counted 66 more urban agglomerations than are officially recognised. Several of these are composed of dwellings and buildings made of organic materials, with very little infrastructure constructed from hard materials and a quasi-absence of roads. As these non-permanent structures are not officially recognised,  national statistics underestimate the true extent of urbanisation in South Sudan."
                           }
               ]
},
{
    "id":41,
    "title":"Sao Tome and Principe",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 6.471150911132696,0.027995333650139],[7.46542771137786, 1.70347746501912 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 199000  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 160051  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.80  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 3  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.84  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  11.60  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 3710.04  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 43.14  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.045  }
                         ],
           "data": {
                             "totalPop":[0.059841176,0.162471429,0.073752381,0.093242308,0.115662069,0.135803333,0.178794595,0.200064]
                             ,"urbanPop":[0.010173,0.011373,0.030976,0.048486,0.067084,0.081482,0.132308,0.160051]
                             ,"ruralPop":[0.049668176,0.151098429,0.042776381,0.044756308,0.048578069,0.054321333,0.046486595,0.040013]
                             ,"totalPopGrowth":[0.105039208,-0.075940567,0.023725914,0.021780933,0.016183052,0.027884685,0.022734515]
                             ,"urbanPopGrowth":[0.011212896,0.105388723,0.0458252,0.032999852,0.019633916,0.049669172,0.038806019]
                             ,"ruralPopGrowth":[0.117681785,-0.118556643,0.00453488,0.008227641,0.011237153,-0.015454637,-0.029546622]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Sao Tomé-et-Principe ranks amongst the smallest African nations and is the smallest nation by population and surface area within the countries included in the Africapolis database. The country is divided into two island, Sao Tome and Principe, the latter of which has fewer than 10 000 inhabitants in total and therefore counts no single urban agglomeration.\nThe urbanisation level stood at 80.4% in 2015, the third highest in Africa after Egypt, Libya and Gabon. The capital Tome itself has a population of 74 000 inhabitants but the wider agglomeration counts 135 000 inhabitants, equivalent of 68% of the total population of the country. Aside from Tome, the country only counts two further agglomerations, Neves and Santana, both with fewer than 20 000 inhabitants.\nGiven its small territory, it is not surprising that the number of agglomerations has not changed significantly over the years. However, the dominance of the capital is noteworthy. Between 2010 and 2015, its primacy has increased from 4.6 to 10.3. At the same time, the share of the total urban population held by the other two agglomerations has reduced by half and only accounted for 15% in 2015."
                           }
               ]
},
{
    "id":42,
    "title":"Kingdom of Eswatini",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 30.79560223563891,-27.3178130194279],[32.1359794171438, -25.719213671927008 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 1079382  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 300643  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.28  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 5  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.82  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  17.50  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 797.02  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 377.21  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.022  }
                         ],
           "data": {
                             "totalPop":[0,0,0.414355556,0.573263636,0.800715385,0.964311538,1.026235714,1.073725]
                             ,"urbanPop":[0,0,0.037292,0.063059,0.104093,0.250721,0.287346,0.300643]
                             ,"ruralPop":[0,0,0.377063556,0.510204636,0.696622385,0.713590538,0.738889714,0.773082]
                             ,"totalPopGrowth":[0,0,0.03299477,0.03398057,0.018764772,0.006243241,0.00908834]
                             ,"urbanPopGrowth":[0,0,0.053933333,0.051398722,0.091885047,0.013728005,0.00908834]
                             ,"ruralPopGrowth":[0,0,0.030701681,0.031633182,0.002409481,0.003490011,0.00908834]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Swaziland is the second smallest country on the African continent after Gambia. Urbanisation has progressed only slowly, and the country remains predominantly rural. The level of urbanisation has barely increased since 2000 when it stood at 25.5% against 28% in 2015. Only about 50 000 more people were added to the total urban population during that time. This trend is likely to continue as population growth has practically stagnated at less than 1%.\nAfricapolis only identified five agglomerations with more than 10 000 inhabitants and the three smallest of these (Mafutseni, Nhlangano and Mahamba) are not officially recognised as cities. The total number of urban agglomerations has not changed since 2000.\nIn 2015, Swaziland was home to slightly more than a million people. The biggest agglomerations are Mbabane and Manzini which have populations of 136 000 and 110 000 respectively. However, the urban population is relatively spread out and even the two largest agglomerations have vast plots of land without any construction. The average urban population density is the lowest of any African country at just 797 inhabitants per km2."
                           }
               ]
},
{
    "id":43,
    "title":"Chad",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 13.475155474334223,7.43853253283703],[24.0003830151035, 23.451588406824072 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 13670084  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 3899403  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.29  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 93  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.31  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  45.70  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 5026.17  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 775.82  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.001  }
                         ],
           "data": {
                             "totalPop":[1.883333333,2.72612,3.500655556,4.482546154,5.715341176,8.161057895,11.23787308,13.446217]
                             ,"urbanPop":[0.0565,0.136306,0.315059,0.582731,0.971608,1.550601,2.921847,3.899403]
                             ,"ruralPop":[1.826833333,2.589814,3.185596556,3.899815154,4.743733176,6.610456895,8.316026077,9.546814]
                             ,"totalPopGrowth":[0.037676013,0.02532239,0.025032272,0.024593837,0.036264045,0.032508811,0.036533156]
                             ,"urbanPopGrowth":[0.092060383,0.087395901,0.063426854,0.052451996,0.047854295,0.065407479,0.059419909]
                             ,"ruralPopGrowth":[0.03551636,0.020921194,0.02043495,0.01978266,0.033739527,0.023218624,0.027989133]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Chad is one of the largest African countries in terms of its surface area. It is of similar size to Niger and Mali but has fewer people and one of the lowest population densities in Africa at just 11 inhabitants per square kilometre. Chad is surrounded by several countries in conflict, which explains the relatively large population of refugees (around 380혻000). Despite the inclusion of 19 refugee camps with more than 10 000 inhabitants, Africapolis estimates the country's level of urbanisation at only 28.5%, the eighth lowest in Africa.\nChad's urban population has grown steadily, jumping from 1.6 million in 2000 to 3.9 million in 2015. During this period, the total number of agglomerations with more than 10 000 inhabitants increased from 37 to 93. 45% of the urban population lives in smaller agglomerations of fewer than 50 000 inhabitants.\nThe capital N?섵jamena, which accounts for one-third of the urban population, dominates the urban landscape. With a population of 1.2 million in 2015, it is almost eight times larger than the second biggest agglomeration Moundou. Chad's other major agglomerations have populations of less than 160혻000 each. Their modest size is due in part to their relative distance from N?섵jamena and other regional capitals. Most of Chad's urban agglomerations are located along the east-west axis from Lake Chad to the Sudanese border and along the Chari River, flowing southeast from the Lake towards the border with the Central-African Republic."
                           }
               ]
},
{
    "id":44,
    "title":"Togo",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ -0.148311878875006,6.10365306702988],[1.79632392295911, 11.141009656630501 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 6835000  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 3401532  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.50  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 53  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.51  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  17.90  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 3513.18  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 968.22  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.018  }
                         ],
           "data": {
                             "totalPop":[1.05454,1.481754545,1.98691,2.664332,3.467324,4.515010714,6.053306977,6.83249]
                             ,"urbanPop":[0.052727,0.162993,0.397382,0.666083,0.866831,1.264203,2.602922,3.401532]
                             ,"ruralPop":[1.001813,1.318761545,1.589528,1.998249,2.600493,3.250807714,3.450384977,3.430958]
                             ,"totalPopGrowth":[0.034597253,0.029769899,0.029771847,0.026693018,0.026754077,0.029753772,0.024512499]
                             ,"urbanPopGrowth":[0.119472911,0.093210826,0.053008837,0.026693018,0.038456331,0.074891018,0.054976247]
                             ,"ruralPopGrowth":[0.027869457,0.018849862,0.023147252,0.026693018,0.022571205,0.005976018,-0.001128621]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Togo's urban profile is characterised by the striking dominance of its capital Lome whose size encompasses most of Togo's coastal front. The country has the sixth highest primacy score in Africa. With a population of 1.7 million, the agglomeration of Lome is ten times as large as the second biggest agglomeration Tsevie despite only covering an area three times as large. Slightly more than half of all urban dwellers in the country and one-quarter of the total population reside in the Lome agglomeration.\nDespite its relatively small surface area, the country counted 54 urban agglomerations in 2015. This represents a doubling of the number of urban agglomerations in just 15 years. Over the same period, the urban population practically tripled from 1 264 000 in 2000 to 3 416 000 in 2015. Some of these newer agglomerations have emerged around secondary cities or through the fusion of multiple villages. This is for instance the case of Kana in the north of Togo, which over time is expected to merge with smaller agglomerations in its vicinity to create a larger conurbation.\nThe urbanisation process in Togo can be described as somewhat anarchic. It is typified by the continuous encroachment of urban agglomerations into rural areas through the expansion of the built environment. This sprawl derives from inadequate planning laws that encourage spontaneous construction by homebuilders. It poses a challenge not just for the surrounding rural areas but also in terms of the provision of basic social services such as drinking water, electricity or healthcare."
                           }
               ]
},
{
    "id":45,
    "title":"Tunisia",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 7.52585996610344,30.2413525296127],[11.5964283339481, 37.349728455171743 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 11118935  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 7010411  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.63  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 89  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.35  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  20.10  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 2608.72  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 2687.30  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.017  }
                         ],
           "data": {
                             "totalPop":[3.40376087,4.100284,5.057213793,6.319064865,7.963811111,9.441933333,10.53715965,11.1276371]
                             ,"urbanPop":[0.782865,1.025071,1.466592,2.338054,3.583715,4.815386,6.006181,7.010411]
                             ,"ruralPop":[2.62089587,3.075213,3.590621793,3.981010865,4.380096111,4.626547333,4.530978649,4.117226103]
                             ,"totalPopGrowth":[0.018791915,0.021197487,0.022525506,0.023403302,0.017171066,0.011035169,0.010964437]
                             ,"urbanPopGrowth":[0.02732228,0.036467137,0.047742408,0.043633215,0.029982306,0.022343243,0.031404479]
                             ,"ruralPopGrowth":[0.016114254,0.015615794,0.010374484,0.00959927,0.00548903,-0.002085115,-0.018969431]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Tunisia is the smallest of the North African countries with a population of just over 11 million. It is only one-tenth the size of its neighbor Libya but holds twice the number of inhabitants. At 63%, it has one of the highest levels of urbanisation in Africa.\nTunisia's cities have faced a long history of population decline and rebounds. At the end of the 19th century, most of the larger cities saw their populations decline due to epidemics, malnutrition, political upheaval and crime. However, many cities recovered during the 20th century and the level of urbanisation reached 25% by 1950 and 50% by 1990. Today, Tunisia's coastal agglomerations continue to attract populations from the country's rural interior, which continues to experience a decline of its population.\nIn 2015, the average urban population density stood at just 2 609 inhabitants per square kilometre, the sixth lowest in Africa. The low urban density is explained by the importance of the tourism sector in Tunisia which results in large stretches of land being occupied by hotels and other tourism-related infrastructure. Most of the urban agglomerations are located in the North and East of the country along the coastline.\nThe capital Tunis represents the largest urban agglomeration with 2.4 million inhabitants and is four times larger than the second biggest agglomeration Sousse. It accounts for slightly more than one third of all urban dwellers and one fifth of the total population."
                           }
               ]
},
{
    "id":46,
    "title":"Tanzania",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 29.328905446936076,-11.7441908397112],[40.4419197699163, -0.988272329386561 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 48786205  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 18567243  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.38  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 249  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.29  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  23.90  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 3357.22  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 5530.54  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.006  }
                         ],
           "data": {
                             "totalPop":[9.79535,10.616275,12.69712857,19.27341818,23.99544375,32.39054839,42.73661111,48.861166]
                             ,"urbanPop":[0.195907,0.424651,0.888799,2.120076,3.839271,10.04107,15.38518,18.567243]
                             ,"ruralPop":[9.599443,10.191624,11.80832957,17.15334218,20.15617275,22.34947839,27.35143111,30.293923]
                             ,"totalPopGrowth":[0.008080514,0.01805991,0.04261825,0.022155581,0.030454812,0.028106673,0.027147348]
                             ,"urbanPopGrowth":[0.080433943,0.076656435,0.090824258,0.061181656,0.100913311,0.043595646,0.038314617]
                             ,"ruralPopGrowth":[0.006004066,0.014832828,0.038044636,0.016262574,0.010382771,0.020401918,0.020645893]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Tanzania is the second most populous country in east Africa after Ethiopia. It stands out amongst most African countries in that it possesses a system of territorial administration that recognises urban, rural and ?쐌ixed??wards, integrating the reality of zones along the urban-rural spectrum. These mixed wards do not simply serve the purpose of classification, instead they are deliberate, organised and managed in a way that recognises future demographic growth. As the population increases or densifies, wards are either reclassified or sub-divided to create new ones.\nThis managed approach to urbanisation is also reflected in the evolution of the country's urban agglomerations, which are planned to anticipate growth and eventually transform from small to medium and from medium to large agglomerations. Dar es Salam stands out as the largest urban agglomeration with 5.3 million inhabitants in 2015. Tanzania counts four other agglomerations with more than 500 000 inhabitants (Arusha, Mwanza, Zanzibar and Mbeya). However, smaller urban agglomerations (10 000 ??50 000 inhabitants) are growing fast and account for about one-quarter of the urban population.\nOverall, the country has seen one of the most rapid increases in its urban population on the continent. Between 1957 and 2015, Arusha's population increased 88-fold, that of Mbeya grew 73-fold and the capital Dodoma saw its population multiply by 21. In the five years since 2010 alone, Dar es Salam has seen its surface area triple and its population increase by 30% as a result of its merger with four smaller agglomerations."
                           }
               ]
},
{
    "id":47,
    "title":"Uganda",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 29.5760895635851,-1.48264056268463],[35.0364719362645, 4.213930495248093 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 35550628  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 14041116  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.39  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 125  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.27  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  21.20  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 3014.58  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 4657.73  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.023  }
                         ],
           "data": {
                             "totalPop":[4.2665,6.8359,10.41188,11.87271667,16.93699091,22.48558,31.55663333,36.002862]
                             ,"urbanPop":[0.042665,0.205077,0.520594,0.712363,1.863069,3.372837,5.680194,14.041116]
                             ,"ruralPop":[4.223835,6.630823,9.891286,11.16035367,15.07392191,19.112743,25.87643933,21.961746]
                             ,"totalPopGrowth":[0.048268161,0.042973671,0.01321613,0.036164276,0.028742742,0.034471802,0.0267135]
                             ,"urbanPopGrowth":[0.169996387,0.097635691,0.031858675,0.100912388,0.061149665,0.053505438,0.198416257]
                             ,"ruralPopGrowth":[0.046130945,0.040802993,0.012144501,0.030516217,0.024022917,0.030761407,-0.032273866]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"In 1980, Uganda was one of the least urbanised countries in the world. It has since undergone a remarkable transformation. In the five years since 2010, Uganda's level of urbanisation more than doubled from 18.3% to 39.5% in 2015. At the same time, the primacy of the capital Kampala was eclipsed: in 2010, Kampala was still 16 times larger than the second biggest agglomeration but by 2015, it was barely twice as populous as the second-ranking agglomeration Mbale.\nKampala still accounts for more than one-quarter of the total urban population, but medium-sized agglomerations are increasingly important in terms of urban population distribution. In 2015, they accounted for 41% of the total urban population. Nonetheless, more than half of all agglomerations in Uganda (83 out of 125) are smaller ones with populations between 10 000 and 50 000 inhabitants.\nThis growth in urbanisation is largely driven by the increasing density of rural areas (i.e. in-situ urbanisation), with many agglomerations having sprung up around the major road networks. Some extend in linear form and merge with other smaller agglomerations. These newer agglomerations are generally characterised by a relatively low population density and many lack a distinctly urban character.\nAmongst the largest agglomerations are a few whose urban network expands beyond the border. This is the case for the agglomerations of Mbale and Busia, which extend into Kenya, and Kabale on the Rwandan border. The southern part of the country has seen the largest growth in urban population. At the current pace, the area around Lake Victoria could see the emergence of a megapolis with more than 10 million people in the coming decades."
                           }
               ]
},
{
    "id":48,
    "title":"South Africa",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 16.458028493020869,-46.9784114781806],[38.0028518078575, -22.126605626189018 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 54646556  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 38200751  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.70  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 502  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.39  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  17.20  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 3098.31  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 12329.54  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.010  }
                         ],
           "data": {
                             "totalPop":[12.37140606,15.69843333,18.6323381,24.00231111,35.89594,43.9616125,50.98747879,54.539451]
                             ,"urbanPop":[4.082564,5.651436,7.825582,10.80104,14.358376,24.618503,33.651736,38.200751]
                             ,"ruralPop":[8.288842061,10.04699733,10.8067561,13.20127111,21.537564,19.3431095,17.33574279,16.3387]
                             ,"totalPopGrowth":[0.024103205,0.017281401,0.02564855,0.04106831,0.020476078,0.014936783,0.013559958]
                             ,"urbanPopGrowth":[0.033052948,0.033084352,0.032749261,0.028878222,0.055396457,0.031750251,0.025682358]
                             ,"ruralPopGrowth":[0.019422564,0.007316404,0.020215788,0.050166313,-0.010688697,-0.010896778,-0.011776883]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"At 70%, the Republic of South Africa has the sixth highest level of urbanisation in Africa. Africapolis counts a total of 502 urban agglomerations in South Africa ??the fourth highest figure in Africa. In 2015, almost half of all urban dwellers lived in cities with more than 500 000 inhabitants. The agglomeration of Johannesburg, which includes Pretoria, the Witwatersrand, Soshanguwe and multiple smaller agglomerations, accounts for 8.3 million inhabitants, representing one-fifth of the total urban population of South Africa.\nThe average urban population density however is relatively low at 3 102 per km2, which is related to the relatively vast spread of some urban agglomerations. Historically, many of the early cities of South Africa were designed as ?쐅arden cities?? i.e. cities with a lot of open green spaces. The built environment of these cities is relatively spread out, intercut with areas without any construction. Given the morphological approach of Africapolis, this means that some cities appear as multiple agglomerations in the Africapolis database.\nMajor changes in the pattern of urbanisation become visible after 1990, i.e. during the end of Apartheid. Between 1990 and 2000, the number of urban agglomerations increases from 171 to 462, with much of that growth stemming from smaller agglomerations with fewer than 50 000 inhabitants. The urban population grows at a rate of 5.4% (compared to 2.9% during the previous decade) whereas the rural population starts to experience a decline, a trend that continued until 2015."
                           }
               ]
},
{
    "id":49,
    "title":"Zambia",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 22.000791365266281,-18.0779855031847],[33.6850993233638, -8.222967862143477 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 15474000  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 6877737  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.44  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 80  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.52  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  56.00  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 3180.00  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 2162.81  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.003  }
                         ],
           "data": {
                             "totalPop":[2.354615385,3.213289474,4.176818519,5.702630556,7.491142424,10.13829412,13.1140175,15.499193]
                             ,"urbanPop":[0.3061,0.610525,1.127741,2.052947,2.472077,3.44702,5.245607,6.877737]
                             ,"ruralPop":[2.048515385,2.602764474,3.049077519,3.649683556,5.019065424,6.691274118,7.8684105,8.621456]
                             ,"totalPopGrowth":[0.031580175,0.02657238,0.031627625,0.027654863,0.030722326,0.02607023,0.033986017]
                             ,"urbanPopGrowth":[0.07147986,0.063287215,0.061736718,0.018751886,0.033803935,0.042882055,0.055674334]
                             ,"ruralPopGrowth":[0.024234886,0.015952398,0.018142753,0.032373302,0.029173503,0.016337193,0.018447676]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Zambia is a sparsely populated country with an average of 21 inhabitants per km2. Unlike most African countries, Zambia's urban profile is characterised by a marked absence of smaller agglomerations. The capital Lusaka holds more than one-third of all urban dwellers and is six times larger than the second biggest city Kitwe.\nThe stretch of land that forms the northwestern border with the Democratic Republic of the Congo - known as the Copperbelt - has been the location of several larger agglomerations, such as Chingola, Kitwe and Ndola, whose existence is linked to copper mining. However, fluctuations in copper prices have meant that many of these agglomerations are in decline. This stands in contrast with the growth of medium-sized urban agglomerations (between 50 000 and 500 000 inhabitants) whose total population has increased from 1.6 million in 2000 to 2.1 million in 2015.\nA feature of Zambian urbanisation is the existence of spontaneous settlements on the periphery of cities that are unrecognised in official statistics. As a result, official urbanisation statistics divert largely from the findings of Africapolis. Since only the populations living within the official boundaries of cities are counted, official statistics underestimate the true extent of urbanisation and, in some cases, ignore entire urban agglomerations that have sprung up spontaneously through the merger of smaller localities without any attachment to an official city. This is for instance the case of several agglomerations along the eastern side of Lake Mweru in northern Zambia. Some of these agglomerations, like Mwatishi and Nchelenge, stretch out over a length of more than 20 kilometres, occasionally reaching population densities above 3 000 inhabitants per km2."
                           }
               ]
},
{
    "id":50,
    "title":"Zimbabwe",
      "map":{
           "geo": {
                   "fitBounds": {
                         "bound": [[[ 25.23634621629985,-22.4177288504699],[33.0588711492188, -15.611514198538828 ]]],
                                }
                      }
                  }
      ,"keyFigures":[
            { "id": 1, "type": "number", "title": "Total population", "value": 13943242  },
            { "id": 2, "type": "number", "title": "Urban population", "value": 4800985  },
            { "id": 3, "type": "percentage", "title": "Level of urbanisation", "value":  0.34  },
            { "id": 4, "type": "number", "title": "Number of agglomerations", "value": 53  },
            { "id": 5, "type": "percentage", "title": "Metropolitan population", "value":  0.61  },
            { "id": 6, "type": "distance", "title": "Avg distance between agglomerations", "value":  34.00  },
            { "id": 7, "type": "areaPer", "title": "Average urban density", "value": 3250.76  },
            { "id": 8, "type": "area", "title": "Urban area", "value": 1476.88  },
            { "id": 9, "type": "percentage", "title": "Urban area / total area", "value":  0.004  }
                         ],
           "data": {
                             "totalPop":[2.250094444,3.356184615,5.136694118,7.100019048,9.787180769,11.30927,12.69246364,14.120544]
                             ,"urbanPop":[0.405017,0.872608,0.873238,1.491004,2.544667,3.392781,4.188513,4.800985]
                             ,"ruralPop":[1.845077444,2.483576615,4.263456118,5.609015048,7.242513769,7.916489,8.503950636,9.319559]
                             ,"totalPopGrowth":[0.040793352,0.043479175,0.032898343,0.032618282,0.014559908,0.011605392,0.021553462]
                             ,"urbanPopGrowth":[0.079778296,7.21739E-05,0.05495666,0.054909528,0.029182723,0.021293115,0.027670988]
                             ,"ruralPopGrowth":[0.030163827,0.055524756,0.027809153,0.025888762,0.008937649,0.007183986,0.018485678]
                 },
      "list": [
                           {
                             "type":"text",
                             "item":"Zimbabwe's level of urbanisation has only progressed slowly and is one of the lowest in Africa at 33%. The urban landscape is dominated by Harare and the second agglomeration Bulawayo. Together, they accounted for almost two-thirds of the urban population in 2015. Harare is however more than three  times larger than Bulawayo and its primacy is expected to increase further over the next years.\nThe average urban population density is relatively low at only 3 322 inhabitants per km2. Most urban agglomerations are spread out as planning policies have encouraged the construction of various blocs of settlements that are not linked by any built environment. As a result, the Africapolis database registers many more agglomerations (53 in total) than are officially recognised, as some cities become subdivided into separate agglomerations.\nA striking feature of Zimbabwe is the relative low weight of smaller agglomerations overall. They account for only 16% of the urban population and unlike other African countries, Zimbabwe has not seen a significant growth in their number over the past two decades. The spontaneous emergence of agglomerations that has happened in other African nations is rendered almost impossible by the top-down approach in planning and the tight control over land that is exercised by the government.\nOnly the suburbs of Harare and the southeast show some signs of spontaneous settlements. Harare has in fact absorbed other agglomerations, such as Epworth and Chitungwiza, and is increasingly encroaching on the rural wards that surround the capital."
                           }
               ]
}
];

country=["Angola","Burundi","Benin","Burkina Faso","Botswana","Central African Republic","Cote d`Ivoire","Cameroon","Democratic Republic of the Congo","Republic of the Congo","Cabo Verde","Djibouti","Algeria","Egypt","Eritrea","Ethiopia","Gabon","Ghana","Guinea","The Gambia","Guinea-Bissau","Equatorial Guinea","Kenya","Liberia","Libya","Lesotho","Morocco","Mali","Mozambique","Mauritania","Malawi","Namibia","Niger","Nigeria","Rwanda","Sudan","Senegal","Sierra Leone","Somalia","South Sudan","Sao Tome and Principe","Kingdom of Eswatini","Chad","Togo","Tunisia","Tanzania","Uganda","South Africa","Zambia","Zimbabwe"]

console.log(a[0])

for (i = 0; i < 50; i++) {
fs.writeFile('/temp/'+country[i]+'.json', JSON.stringify(a[i],undefined,2), err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
}
