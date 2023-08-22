import React from 'react';
import { SvgXml } from 'react-native-svg';

export const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<svg id="Samples_Image" data-name="Samples Image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.630371 46.952637">
  <path d="m26.123535,14.828613c-2.435059,1.361816-4.851074,2.707031-7.18457,4.223145-.087402-.159668-.161621-.299316-.240234-.435059-.237305-.408691-.504395-.796875-.862305-1.108398-.813477-.708984-1.745117-.881348-2.772461-.578613-.986328.291504-1.717773.924805-2.305664,1.741699-.540039.75-.902344,1.588379-1.141113,2.478027-.253906.947266-.493652,1.898438-.592773,2.878906-.123047,1.216309-.105957,2.427246.093262,3.634277.13623.822266.317383,1.634766.709473,2.375.4375.826172.957031,1.601562,1.73584,2.155273.548828.391602,1.150391.645508,1.838379.673828.84375.03418,1.559082-.262695,2.186035-.805664.540527-.469727.922363-1.060547,1.262207-1.680664.100098-.182617.193359-.370117.296875-.570312,2.387695,1.224609,4.770508,2.445312,7.167969,3.673828-.022461.075195-.035645.148438-.063477.214844-.661621,1.580078-1.483887,3.063477-2.630371,4.351562-1.511719,1.698242-3.368652,2.822266-5.576172,3.364258-1.047363.257812-2.112793.381836-3.19043.361328-1.892578-.037109-3.714355-.404297-5.419434-1.250977-1.951172-.967773-3.480957-2.404297-4.636719-4.244141-.877441-1.396484-1.483398-2.910156-1.922852-4.494141-.3125-1.126953-.499023-2.274414-.610352-3.4375-.128906-1.348633-.140137-2.699219-.068848-4.046875.125488-2.376953.578613-4.689453,1.475098-6.904785.784668-1.9375,1.845215-3.70459,3.242676-5.264648,1.191895-1.330566,2.609375-2.357422,4.205078-3.149414,1.06543-.527832,2.174316-.926758,3.348145-1.130371,1.456543-.252441,2.902832-.246582,4.328613.20752.767578.244141,1.528809.498535,2.247559.870605,2.040039,1.056152,3.57959,2.607422,4.61377,4.657227.195801.388672.361328.791504.466797,1.240234Z" style="fill: #fff; stroke: #231f20; stroke-miterlimit: 10; stroke-width: 2px;"/>
  <path d="m41.604004,41.310059c.091309-.8125.148438-1.62207.114258-2.435547-.041016-.964844-.085938-1.927734-.124512-2.892578-.021973-.552734-.032227-1.107422-.048828-1.661133-.001953-.06543-.013184-.131836-.022461-.22168-1.433594-.100586-2.861328-.143555-4.305664-.071289-.443359,2.408203-.54834,4.834961-.679688,7.280273h-10.672852c.114258-.364258.239258-.719727.337402-1.082031.504395-1.869141,1.022949-3.735352,1.498047-5.612305.891113-3.518555,1.753906-7.044922,2.632324-10.566895.940918-3.774414,1.88623-7.547363,2.831055-11.320801.223633-.894531.472168-1.783691.67041-2.683594.12207-.554199.170898-1.125488.25293-1.689453.006348-.039551.013184-.080078.024414-.146484,4.165039-.063477,8.324219-.108398,12.509277.09082-.109863.321777-.012207.612305.035156.908691.12207.76123.22168,1.526367.353027,2.286133.216309,1.255859.446777,2.508789.677734,3.762207.275879,1.5.55957,2.999023.838379,4.499512.311035,1.672852.625977,3.345215.928223,5.02002.253418,1.402344.493652,2.807617.733398,4.211914.279297,1.635742.554199,3.272461.827148,4.910156.159668.958984.329102,1.916992.462891,2.879883.164551,1.182617.462402,2.333984.754395,3.488281.085938.339844.166504.682617.254883,1.044922-3.641113.000977-7.26123.000977-10.881348.000977Zm-.5-14.657227c-.273926-2.685547-.546875-5.352539-.814453-7.976074-.651367,2.625488-1.3125,5.290527-1.979492,7.976074h2.793945Z" style="fill: #fff; stroke: #231f20; stroke-miterlimit: 10; stroke-width: 2px;"/>
  <path d="m78.506348,41.550293c-.103516.004883-.177734.012695-.250977.011719-.989258-.021484-1.979004-.043945-2.96875-.06543-.905273-.018555-1.811523-.038086-2.716797-.051758-.705078-.009766-1.409668-.019531-2.114746-.016602-.711914.00293-1.423828.022461-2.155762.035156-.05127-.160156-.104492-.316406-.152344-.475586-.636719-2.084961-1.194824-4.19043-1.730957-6.303711-.307129-1.209961-.653809-2.410156-.984375-3.614258-.017578-.064453-.043457-.125977-.073242-.209961-.209473.021484-.416504.040039-.62207.064453-.107422.012695-.125977.09082-.124023.18457.004395.235352.001465.469727.007812.705078.011719.443359.033691.886719.040527,1.331055.009766.570312,0,1.141602.015625,1.711914.022461.854492.060059,1.708008.09082,2.5625.017578.494141.038086.988281.05127,1.483398.02002.762695.034668,1.526367.051758,2.289062.001953.09082,0,.180664,0,.300781-.601562.032227-1.174805-.027344-1.748047-.039062-.570801-.011719-1.141113-.019531-1.711426-.02832-.578613-.009766-1.157227-.023438-1.73584-.023438-.570801,0-1.141113.015625-1.711426.022461-.579102.007812-1.158203.020508-1.736816.017578-.562988-.00293-1.128906.041016-1.707031.014648.012207-.086914.012695-.120117.021973-.150391.25-.856445.387695-1.730469.456055-2.620117.077637-1.009766.182129-2.017578.269043-3.027344.033691-.392578.053223-.786133.07666-1.178711.050293-.844727.105469-1.689453.147461-2.53418.043945-.895508.079102-1.791992.109375-2.688477.039062-1.147461.070312-2.295898.103516-3.443359.019531-.686523.041016-1.374023.053223-2.061035.014648-.771484.024414-1.54248.027832-2.313965.004883-.955078.007812-1.910645-.000488-2.866211-.009277-1.148438-.029297-2.297852-.049805-3.446777-.012207-.729004-.016113-1.458984-.055664-2.1875-.055664-1.036621-.006836-2.081055-.184082-3.109375-.085938-.503418-.206055-1.000977-.311523-1.500977-.009766-.04834-.021484-.096191-.038086-.170898.23584-.020508.45752-.049805.679688-.057129.84668-.025879,1.692871-.047852,2.540527-.063965.914062-.017578,1.828613-.027832,2.743164-.038574.713379-.008301,1.427734.009766,2.139648-.022949.703613-.033203,1.40625-.088867,2.111816-.070312,1.733887.046875,3.444824.234375,5.086426.841797,1.343262.496094,2.56543,1.192383,3.626953,2.163574,1.166016,1.066406,2.016113,2.349609,2.627441,3.797363.263672.625977.507812,1.258789.624023,1.934082.097656.570801.173828,1.143555.1875,1.722168.019531.906738.014648,1.816895-.170898,2.705078-.125977.603516-.328125,1.195312-.537109,1.777344-.383301,1.065918-.933594,2.044434-1.652344,2.921387-.382812.466797-.791016.912109-1.202148,1.354492-.112793.121094-.140625.224609-.103027.378906.458496,1.873047.980469,3.727539,1.533203,5.575195.654785,2.18457,1.39209,4.341797,2.227051,6.462891.208008.530273.47168,1.038086.708008,1.556641.063477.142578.12207.288086.191406.455078Zm-13.95459-18.179688c.041504.006348.057617.01123.072754.010254.025391-.001953.050293-.005859.074707-.01123,1.499023-.343262,2.631348-1.170898,3.355957-2.539062.378906-.716797.430664-1.476074.260742-2.250488-.09375-.426758-.294922-.819336-.530762-1.188965-.150879-.237793-.35498-.41748-.59375-.569824-.647949-.415039-1.365234-.632324-2.114258-.759766-.160156-.027344-.325684-.020508-.493652-.029297-.007812.064941-.014648.097168-.014648.129883-.017578.938965-.043457,1.87793-.049316,2.817383-.008301,1.326172-.003418,2.652832-.000488,3.978516,0,.139648.021484.279297.032715.412598Z" style="fill: #fff; stroke: #231f20; stroke-miterlimit: 10; stroke-width: 2px;"/>
  <path d="m96.648926,41.265137h-.636719c-.595703,0-1.191406.003906-1.788086-.001953-.452148-.004883-.904297-.03418-1.356445-.038086-.444336-.003906-.889648.009766-1.333008.018555-.427734.008789-.855469.024414-1.283203.03125-.645508.010742-1.291992.014648-1.9375.022461-.444336.004883-.888672.011719-1.332031.017578-.098633.000977-.198242,0-.291016,0,.052734-.748047.114258-1.47168.151367-2.198242.035156-.703125.045898-1.407227.06543-2.112305.019531-.65332.032227-1.306641.052734-1.960938.013672-.46875.026367-.9375.051758-1.40625.114258-2.070312.091797-4.141602.09375-6.212891.001953-1.670898.011719-3.341309.012695-5.012207,0-1.29248-.004883-2.585449-.014648-3.87793-.00293-.441895-.029297-.882812-.046875-1.34375-2.71582-.066895-5.397461.09375-8.080078.42334-.009766-.035645-.027344-.067383-.025391-.097656.041016-.65918.084961-1.319336.12793-1.979004.042969-.661133.084961-1.321777.128906-1.981934.063477-.944824.12793-1.890137.194336-2.834961.046875-.659668.09668-1.318359.150391-1.977051.012695-.148926.049805-.295898.078125-.455078.101562-.012695.19043-.032715.279297-.033691,1.510742-.010742,3.020508-.015137,4.53125-.030273.560547-.005859,1.123047-.035645,1.683594-.054199.050781-.001953.100586-.005859.151367-.005859,2.275391-.006836,4.549805-.018066,6.824219-.01709,1.628906,0,3.256836.007324,4.885742.029297,1.013672.013672,2.027344.061523,3.041016.090332.696289.02002,1.392578.033203,2.087891.052246.174805.004395.348633.018066.546875.028809.217773,2.931152.255859,5.854004.436523,8.783203-.079102.012695-.134766.03125-.188477.027832-.745117-.046387-1.489258-.101074-2.233398-.143066-.65332-.036133-1.306641-.064453-1.959961-.083008-.570312-.016602-1.140625-.027832-1.710938-.019043-.612305.008789-1.223633.043945-1.834961.068359-.032227.001465-.06543.009277-.123047.018555-.006836.070312-.020508.14209-.021484.214844-.009766.805664-.013672,1.61084-.026367,2.416504-.014648.939453-.039062,1.878418-.053711,2.817871-.016602,1.04834-.038086,2.097168-.035156,3.145508.00293,1.132812.033203,2.265625.048828,3.397461.019531,1.25.026367,2.5.056641,3.749023.022461.929688.058594,1.859375.117188,2.788086.06543,1.061523.152344,2.123047.24707,3.182617.076172.842773.175781,1.682617.267578,2.552734Z" style="fill: #fff; stroke: #231f20; stroke-miterlimit: 10; stroke-width: 2px;"/>
</svg>
`;

export const CartXMLWeb = () => (
  // <?xml version="1.0" encoding="UTF-8"?>
  <svg id="Samples_Image" data-name="Samples Image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.630371 46.952637">
    <path d="m26.123535,14.828613c-2.435059,1.361816-4.851074,2.707031-7.18457,4.223145-.087402-.159668-.161621-.299316-.240234-.435059-.237305-.408691-.504395-.796875-.862305-1.108398-.813477-.708984-1.745117-.881348-2.772461-.578613-.986328.291504-1.717773.924805-2.305664,1.741699-.540039.75-.902344,1.588379-1.141113,2.478027-.253906.947266-.493652,1.898438-.592773,2.878906-.123047,1.216309-.105957,2.427246.093262,3.634277.13623.822266.317383,1.634766.709473,2.375.4375.826172.957031,1.601562,1.73584,2.155273.548828.391602,1.150391.645508,1.838379.673828.84375.03418,1.559082-.262695,2.186035-.805664.540527-.469727.922363-1.060547,1.262207-1.680664.100098-.182617.193359-.370117.296875-.570312,2.387695,1.224609,4.770508,2.445312,7.167969,3.673828-.022461.075195-.035645.148438-.063477.214844-.661621,1.580078-1.483887,3.063477-2.630371,4.351562-1.511719,1.698242-3.368652,2.822266-5.576172,3.364258-1.047363.257812-2.112793.381836-3.19043.361328-1.892578-.037109-3.714355-.404297-5.419434-1.250977-1.951172-.967773-3.480957-2.404297-4.636719-4.244141-.877441-1.396484-1.483398-2.910156-1.922852-4.494141-.3125-1.126953-.499023-2.274414-.610352-3.4375-.128906-1.348633-.140137-2.699219-.068848-4.046875.125488-2.376953.578613-4.689453,1.475098-6.904785.784668-1.9375,1.845215-3.70459,3.242676-5.264648,1.191895-1.330566,2.609375-2.357422,4.205078-3.149414,1.06543-.527832,2.174316-.926758,3.348145-1.130371,1.456543-.252441,2.902832-.246582,4.328613.20752.767578.244141,1.528809.498535,2.247559.870605,2.040039,1.056152,3.57959,2.607422,4.61377,4.657227.195801.388672.361328.791504.466797,1.240234Z" style="fill: #fff; stroke: #231f20; stroke-miterlimit: 10; stroke-width: 2px;" />
    <path d="m41.604004,41.310059c.091309-.8125.148438-1.62207.114258-2.435547-.041016-.964844-.085938-1.927734-.124512-2.892578-.021973-.552734-.032227-1.107422-.048828-1.661133-.001953-.06543-.013184-.131836-.022461-.22168-1.433594-.100586-2.861328-.143555-4.305664-.071289-.443359,2.408203-.54834,4.834961-.679688,7.280273h-10.672852c.114258-.364258.239258-.719727.337402-1.082031.504395-1.869141,1.022949-3.735352,1.498047-5.612305.891113-3.518555,1.753906-7.044922,2.632324-10.566895.940918-3.774414,1.88623-7.547363,2.831055-11.320801.223633-.894531.472168-1.783691.67041-2.683594.12207-.554199.170898-1.125488.25293-1.689453.006348-.039551.013184-.080078.024414-.146484,4.165039-.063477,8.324219-.108398,12.509277.09082-.109863.321777-.012207.612305.035156.908691.12207.76123.22168,1.526367.353027,2.286133.216309,1.255859.446777,2.508789.677734,3.762207.275879,1.5.55957,2.999023.838379,4.499512.311035,1.672852.625977,3.345215.928223,5.02002.253418,1.402344.493652,2.807617.733398,4.211914.279297,1.635742.554199,3.272461.827148,4.910156.159668.958984.329102,1.916992.462891,2.879883.164551,1.182617.462402,2.333984.754395,3.488281.085938.339844.166504.682617.254883,1.044922-3.641113.000977-7.26123.000977-10.881348.000977Zm-.5-14.657227c-.273926-2.685547-.546875-5.352539-.814453-7.976074-.651367,2.625488-1.3125,5.290527-1.979492,7.976074h2.793945Z" style="fill: #fff; stroke: #231f20; stroke-miterlimit: 10; stroke-width: 2px;" />
    <path d="m78.506348,41.550293c-.103516.004883-.177734.012695-.250977.011719-.989258-.021484-1.979004-.043945-2.96875-.06543-.905273-.018555-1.811523-.038086-2.716797-.051758-.705078-.009766-1.409668-.019531-2.114746-.016602-.711914.00293-1.423828.022461-2.155762.035156-.05127-.160156-.104492-.316406-.152344-.475586-.636719-2.084961-1.194824-4.19043-1.730957-6.303711-.307129-1.209961-.653809-2.410156-.984375-3.614258-.017578-.064453-.043457-.125977-.073242-.209961-.209473.021484-.416504.040039-.62207.064453-.107422.012695-.125977.09082-.124023.18457.004395.235352.001465.469727.007812.705078.011719.443359.033691.886719.040527,1.331055.009766.570312,0,1.141602.015625,1.711914.022461.854492.060059,1.708008.09082,2.5625.017578.494141.038086.988281.05127,1.483398.02002.762695.034668,1.526367.051758,2.289062.001953.09082,0,.180664,0,.300781-.601562.032227-1.174805-.027344-1.748047-.039062-.570801-.011719-1.141113-.019531-1.711426-.02832-.578613-.009766-1.157227-.023438-1.73584-.023438-.570801,0-1.141113.015625-1.711426.022461-.579102.007812-1.158203.020508-1.736816.017578-.562988-.00293-1.128906.041016-1.707031.014648.012207-.086914.012695-.120117.021973-.150391.25-.856445.387695-1.730469.456055-2.620117.077637-1.009766.182129-2.017578.269043-3.027344.033691-.392578.053223-.786133.07666-1.178711.050293-.844727.105469-1.689453.147461-2.53418.043945-.895508.079102-1.791992.109375-2.688477.039062-1.147461.070312-2.295898.103516-3.443359.019531-.686523.041016-1.374023.053223-2.061035.014648-.771484.024414-1.54248.027832-2.313965.004883-.955078.007812-1.910645-.000488-2.866211-.009277-1.148438-.029297-2.297852-.049805-3.446777-.012207-.729004-.016113-1.458984-.055664-2.1875-.055664-1.036621-.006836-2.081055-.184082-3.109375-.085938-.503418-.206055-1.000977-.311523-1.500977-.009766-.04834-.021484-.096191-.038086-.170898.23584-.020508.45752-.049805.679688-.057129.84668-.025879,1.692871-.047852,2.540527-.063965.914062-.017578,1.828613-.027832,2.743164-.038574.713379-.008301,1.427734.009766,2.139648-.022949.703613-.033203,1.40625-.088867,2.111816-.070312,1.733887.046875,3.444824.234375,5.086426.841797,1.343262.496094,2.56543,1.192383,3.626953,2.163574,1.166016,1.066406,2.016113,2.349609,2.627441,3.797363.263672.625977.507812,1.258789.624023,1.934082.097656.570801.173828,1.143555.1875,1.722168.019531.906738.014648,1.816895-.170898,2.705078-.125977.603516-.328125,1.195312-.537109,1.777344-.383301,1.065918-.933594,2.044434-1.652344,2.921387-.382812.466797-.791016.912109-1.202148,1.354492-.112793.121094-.140625.224609-.103027.378906.458496,1.873047.980469,3.727539,1.533203,5.575195.654785,2.18457,1.39209,4.341797,2.227051,6.462891.208008.530273.47168,1.038086.708008,1.556641.063477.142578.12207.288086.191406.455078Zm-13.95459-18.179688c.041504.006348.057617.01123.072754.010254.025391-.001953.050293-.005859.074707-.01123,1.499023-.343262,2.631348-1.170898,3.355957-2.539062.378906-.716797.430664-1.476074.260742-2.250488-.09375-.426758-.294922-.819336-.530762-1.188965-.150879-.237793-.35498-.41748-.59375-.569824-.647949-.415039-1.365234-.632324-2.114258-.759766-.160156-.027344-.325684-.020508-.493652-.029297-.007812.064941-.014648.097168-.014648.129883-.017578.938965-.043457,1.87793-.049316,2.817383-.008301,1.326172-.003418,2.652832-.000488,3.978516,0,.139648.021484.279297.032715.412598Z" style="fill: #fff; stroke: #231f20; stroke-miterlimit: 10; stroke-width: 2px;" />
    <path d="m96.648926,41.265137h-.636719c-.595703,0-1.191406.003906-1.788086-.001953-.452148-.004883-.904297-.03418-1.356445-.038086-.444336-.003906-.889648.009766-1.333008.018555-.427734.008789-.855469.024414-1.283203.03125-.645508.010742-1.291992.014648-1.9375.022461-.444336.004883-.888672.011719-1.332031.017578-.098633.000977-.198242,0-.291016,0,.052734-.748047.114258-1.47168.151367-2.198242.035156-.703125.045898-1.407227.06543-2.112305.019531-.65332.032227-1.306641.052734-1.960938.013672-.46875.026367-.9375.051758-1.40625.114258-2.070312.091797-4.141602.09375-6.212891.001953-1.670898.011719-3.341309.012695-5.012207,0-1.29248-.004883-2.585449-.014648-3.87793-.00293-.441895-.029297-.882812-.046875-1.34375-2.71582-.066895-5.397461.09375-8.080078.42334-.009766-.035645-.027344-.067383-.025391-.097656.041016-.65918.084961-1.319336.12793-1.979004.042969-.661133.084961-1.321777.128906-1.981934.063477-.944824.12793-1.890137.194336-2.834961.046875-.659668.09668-1.318359.150391-1.977051.012695-.148926.049805-.295898.078125-.455078.101562-.012695.19043-.032715.279297-.033691,1.510742-.010742,3.020508-.015137,4.53125-.030273.560547-.005859,1.123047-.035645,1.683594-.054199.050781-.001953.100586-.005859.151367-.005859,2.275391-.006836,4.549805-.018066,6.824219-.01709,1.628906,0,3.256836.007324,4.885742.029297,1.013672.013672,2.027344.061523,3.041016.090332.696289.02002,1.392578.033203,2.087891.052246.174805.004395.348633.018066.546875.028809.217773,2.931152.255859,5.854004.436523,8.783203-.079102.012695-.134766.03125-.188477.027832-.745117-.046387-1.489258-.101074-2.233398-.143066-.65332-.036133-1.306641-.064453-1.959961-.083008-.570312-.016602-1.140625-.027832-1.710938-.019043-.612305.008789-1.223633.043945-1.834961.068359-.032227.001465-.06543.009277-.123047.018555-.006836.070312-.020508.14209-.021484.214844-.009766.805664-.013672,1.61084-.026367,2.416504-.014648.939453-.039062,1.878418-.053711,2.817871-.016602,1.04834-.038086,2.097168-.035156,3.145508.00293,1.132812.033203,2.265625.048828,3.397461.019531,1.25.026367,2.5.056641,3.749023.022461.929688.058594,1.859375.117188,2.788086.06543,1.061523.152344,2.123047.24707,3.182617.076172.842773.175781,1.682617.267578,2.552734Z" style="fill: #fff; stroke: #231f20; stroke-miterlimit: 10; stroke-width: 2px;" />
  </svg>
)


const CartSVG = () => {
  return (
    <SvgXml xml={xml} width="198" height="79" />
  )
}

export default CartSVG