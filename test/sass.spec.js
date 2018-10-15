const sass = require("../src/sass");

const toSassFunction = sass();

describe("Sass module", () => {
  test("generate function", done => {
    const INPUT = `
  <?xml version="1.0" encoding="UTF-8"?>
  <svg width="200px" height="200px" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
      <title>icon-handshake</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="icon-handshake" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M25.0672386,43.7832842 C26.1697386,40.6305474 8.70792045,87.5547974 7.420875,90.8929421 C6.134625,94.2318895 7.97292045,96.6429947 10.5462159,97.5700342 C13.1195114,98.4978763 15.1415568,99.2395079 18.2661023,100.166547 C21.3906477,101.094389 22.1264432,99.6103237 23.0451932,97.5700342 C23.9647386,95.5297447 39.7720114,52.12985 40.8753068,49.7187447 C41.9778068,47.3076395 41.6103068,45.1485605 38.3020114,43.6315868 C34.9929205,42.1138105 32.603375,41.5575868 29.4788295,40.6305474 C26.3542841,39.7027053 25.0672386,43.7832842 25.0672386,43.7832842" id="Fill-1" fill="#000000"></path>
          <path d="M168.350076,45.6147068 C166.872469,42.6344095 189.920096,86.8676662 191.605116,90.0090176 C193.289331,93.1511662 191.728116,95.7455716 189.254449,96.9638419 C186.780782,98.1821122 184.838508,99.1516257 181.811743,100.434477 C178.784175,101.717328 177.871724,100.340396 176.709253,98.4356527 C175.546782,96.5317068 154.573273,55.5801257 153.183292,53.33095 C151.792508,51.0825716 151.907469,48.9099365 155.049194,47.0235311 C158.191724,45.1371257 160.524704,44.3063419 163.551469,43.0242878 C166.578233,41.7414365 168.350076,45.6147068 168.350076,45.6147068" id="Fill-4" fill="#000000"></path>
          <path d="M96,50.9403862 C96,50.9403862 93.2658893,45.3896404 85.153745,46.0554414 C77.0423919,46.7212425 68.0528955,54.9367951 63.0102967,55.15953 C57.967698,55.3814637 54.2407317,51.3289705 52.2668874,50.5798441 C50.2938341,49.8299166 49.198133,50.5838502 49.198133,50.5838502 C49.198133,50.5838502 31,95.7926242 31,97.7908286 C31,99.789033 43.7164626,114 43.7164626,114" id="Stroke-7" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M111.761693,153.293215 C111.761693,153.293215 117.514823,155.748096 120.170605,151.507628 C122.826388,147.266355 124.596643,143.025887 122.162043,140.124006 C119.728241,137.222125 108,122.937427 108,122.937427 L124.375461,142.579692 C124.375461,142.579692 131.677664,146.150866 136.546066,142.132691 C141.414468,138.115321 137.652775,128.517286 137.652775,128.517286 L123.519478,112 L139.038956,130.079776 C139.038956,130.079776 147.757683,137.77705 152.257182,131.419167 C153.734391,129.332358 155,126.520682 155,126.520682" id="Stroke-9" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M152.76294,121 C152.76294,121 110.242385,74.8829064 107.590314,71.8848696 C104.937449,68.8860372 104.016337,69.3475184 98.9482353,71.8848696 C93.8793389,74.4214251 78.2140804,83.1863861 72.6850254,85.492201 C67.1551756,87.7988116 64.4657517,84.5700342 62.9310952,82.7249049 C61.395644,80.8797755 60.2440555,76.0358138 72.4545487,67.9638704 C84.6642472,59.8911312 94.8012454,51.8183921 103.555384,48.8203554 C112.310317,45.8215229 117.839372,46.2830042 128.206052,52.0491327 C138.573527,57.8152613 137.421144,60.3526125 144.793217,56.6623538 L147.327665,55.7393914 L171,100.53092 C171,100.53092 166.604254,107.569305 163.705812,110.716129 C158.015423,116.894408 152.76294,121 152.76294,121" id="Fill-11" fill="#000000"></path>
          <path d="M46.4177955,127.291183 C43.4150971,123.068149 45.734321,118.845894 48.2731746,116.804852 C50.8128476,114.763031 55.6955105,112.164421 58.918658,115.87661 C62.1418056,119.588799 61.8648099,124.386533 56.3650532,128.187497 C52.6616706,130.747171 48.8591269,130.724588 46.4177955,127.291183" id="Fill-13" fill="#000000"></path>
          <path d="M61.2484718,137.132953 C59.3211781,133.935949 59.5872627,129.606536 62.3120015,126.942906 C65.0359315,124.278465 71.6152577,118.284892 74.1402308,116.220295 C76.665204,114.155698 80.7850672,114.754731 82.5125953,117.685049 C84.2409321,120.615366 85.0383772,125.211466 81.6488313,128.274721 C78.2600941,131.338788 72.4127028,136.267233 70.0866865,138.398299 C67.7606703,140.529365 65.434654,140.19702 63.7734449,139.330489 C62.1122358,138.464768 61.2484718,137.132953 61.2484718,137.132953" id="Fill-15" fill="#000000"></path>
          <path d="M75.7438364,138.212628 C78.0444891,135.99105 88.4899996,126.573834 90.8051421,124.886319 C93.1194795,123.198015 96.6251977,124.107345 98.3446498,126.054781 C100.064907,128.001427 100.990642,133.778952 98.3446498,136.375797 C95.6994627,138.971851 85.7779986,147.410214 83.2648294,149.682354 C80.7516601,151.954495 77.4447738,150.915599 75.5924988,149.35765 C73.7410289,147.799701 72.8804978,145.333212 73.0133207,143.320993 C73.1453385,141.308775 74.5790203,139.336847 75.7438364,138.212628" id="Fill-17" fill="#000000"></path>
          <path d="M98.8064,141.225222 C101.516,138.499889 106.0952,139.589556 107.3096,141.225222 C108.5248,142.860889 111.2344,147.224222 107.684,151.220444 C104.1328,155.215889 102.6344,156.942556 99.9264,158.850444 C97.2176,160.758333 93.8536,160.304111 91.7976,157.396778 C89.7424,154.489444 89.7424,149.856222 92.8256,147.130111 C95.9096,144.404778 98.8064,141.225222 98.8064,141.225222" id="Fill-19" fill="#000000"></path>
      </g>
  </svg>
  `;
    const OUTPUT = `
@function my-icon($color: #000) {
  $color: str-replace(inspect($color), '#', '%23'); //fix and replace hexcolor
  @return url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='"+$color+"' d='M25.067 43.783c1.103-3.152-16.36 43.772-17.646 47.11-1.286 3.339.552 5.75 3.125 6.677 2.574.928 4.596 1.67 7.72 2.597 3.125.927 3.86-.557 4.78-2.597.919-2.04 16.726-45.44 17.83-47.851 1.102-2.411.734-4.57-2.574-6.087-3.31-1.518-5.699-2.074-8.823-3.001-3.125-.928-4.412 3.152-4.412 3.152M168.35 45.615c-1.478-2.98 21.57 41.253 23.255 44.394 1.684 3.142.123 5.737-2.35 6.955-2.474 1.218-4.416 2.188-7.443 3.47-3.028 1.283-3.94-.094-5.103-1.998-1.162-1.904-22.136-42.856-23.526-45.105-1.39-2.248-1.276-4.421 1.866-6.307 3.143-1.887 5.476-2.718 8.502-4 3.027-1.283 4.8 2.59 4.8 2.59'/%3E%3Cpath stroke='"+$color+"' stroke-linecap='round' stroke-linejoin='round' stroke-width='8' d='M96 50.94s-2.734-5.55-10.846-4.885c-8.112.666-17.101 8.882-22.144 9.105-5.042.221-8.77-3.831-10.743-4.58-1.973-.75-3.069.004-3.069.004S31 95.793 31 97.79C31 99.789 43.716 114 43.716 114M111.762 153.293s5.753 2.455 8.409-1.785c2.655-4.242 4.426-8.482 1.991-11.384-2.434-2.902-14.162-17.187-14.162-17.187l16.375 19.643s7.303 3.57 12.171-.447c4.868-4.018 1.107-13.616 1.107-13.616L123.519 112l15.52 18.08s8.719 7.697 13.218 1.34c1.477-2.088 2.743-4.9 2.743-4.9'/%3E%3Cpath fill='"+$color+"' d='M152.763 121s-42.52-46.117-45.173-49.115c-2.653-2.999-3.574-2.537-8.642 0-5.069 2.536-20.734 11.301-26.263 13.607-5.53 2.307-8.22-.922-9.754-2.767-1.535-1.845-2.687-6.69 9.524-14.761 12.21-8.073 22.346-16.146 31.1-19.144 8.755-2.998 14.284-2.537 24.651 3.23 10.368 5.765 9.215 8.303 16.587 4.612l2.535-.923L171 100.531s-4.396 7.038-7.294 10.185c-5.69 6.178-10.943 10.284-10.943 10.284M46.418 127.291c-3.003-4.223-.684-8.445 1.855-10.486 2.54-2.042 7.423-4.64 10.646-.928 3.223 3.712 2.946 8.51-2.554 12.31-3.703 2.56-7.506 2.538-9.947-.896M61.248 137.133c-1.927-3.197-1.66-7.526 1.064-10.19 2.724-2.665 9.303-8.658 11.828-10.723 2.525-2.064 6.645-1.465 8.373 1.465 1.728 2.93 2.525 7.526-.864 10.59s-9.236 7.992-11.562 10.123c-2.326 2.131-4.652 1.799-6.314.932-1.66-.865-2.525-2.197-2.525-2.197M75.744 138.213c2.3-2.222 12.746-11.64 15.061-13.327 2.314-1.688 5.82-.779 7.54 1.169 1.72 1.946 2.646 7.724 0 10.32-2.646 2.597-12.567 11.035-15.08 13.307-2.513 2.272-5.82 1.234-7.673-.324-1.851-1.558-2.712-4.025-2.579-6.037.132-2.012 1.566-3.984 2.73-5.108M98.806 141.225c2.71-2.725 7.29-1.635 8.504 0 1.215 1.636 3.924 6 .374 9.995-3.551 3.996-5.05 5.723-7.758 7.63-2.708 1.908-6.072 1.454-8.128-1.453-2.056-2.908-2.056-7.54 1.028-10.267 3.084-2.725 5.98-5.905 5.98-5.905'/%3E%3C/g%3E%3C/svg%3E\");
}
`;
    toSassFunction("MyIcon")(INPUT).then(result => {
      expect(result).toEqual(OUTPUT);
      done();
    });
  });

  test("generate function with several colors", done => {
    const INPUT = `
    <?xml version="1.0" encoding="UTF-8"?>
    <svg width="64px" height="64px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
        <title>Artboard</title>
        <desc>Created with Sketch.</desc>
        <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <circle id="Oval" stroke="#979797" fill="#BD10E0" cx="24.5" cy="24.5" r="17.5"></circle>
            <circle id="Oval-Copy" stroke="#979797" fill="#C25B15" cx="42.5" cy="42.5" r="17.5"></circle>
            <circle id="Oval-Copy-3" stroke="#979797" fill="#50E3C2" cx="21" cy="49" r="11"></circle>
            <circle id="Oval-Copy-4" stroke="#000000" fill="#4A90E2" cx="21" cy="15" r="11"></circle>
            <circle id="Oval-Copy-5" stroke="#000000" fill="#EF1625" cx="50" cy="52" r="11"></circle>
            <circle id="Oval-Copy-2" stroke="#979797" fill="#BD10E0" cx="52.5" cy="14.5" r="7.5"></circle>
        </g>
    </svg>
    `;
    const OUTPUT = `
@function my-icon($color: #979, $color1: #BD1, $color2: #C25, $color3: #50E, $color4: #000, $color5: #4A9, $color6: #EF1) {
  $color: str-replace(inspect($color), '#', '%23'); //fix and replace hexcolor
  $color1: str-replace(inspect($color1), '#', '%23'); //fix and replace hexcolor
  $color2: str-replace(inspect($color2), '#', '%23'); //fix and replace hexcolor
  $color3: str-replace(inspect($color3), '#', '%23'); //fix and replace hexcolor
  $color4: str-replace(inspect($color4), '#', '%23'); //fix and replace hexcolor
  $color5: str-replace(inspect($color5), '#', '%23'); //fix and replace hexcolor
  $color6: str-replace(inspect($color6), '#', '%23'); //fix and replace hexcolor
  @return url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='24.5' cy='24.5' r='17.5' fill='\"+$color1+\"0E0' stroke='\"+$color+\"797'/%3E%3Ccircle cx='42.5' cy='42.5' r='17.5' fill='\"+$color2+\"B15' stroke='\"+$color+\"797'/%3E%3Ccircle cx='21' cy='49' r='11' fill='\"+$color3+\"3C2' stroke='\"+$color+\"797'/%3E%3Ccircle cx='21' cy='15' r='11' fill='\"+$color5+\"0E2' stroke='\"+$color4+\"'/%3E%3Ccircle cx='50' cy='52' r='11' fill='\"+$color6+\"625' stroke='\"+$color4+\"'/%3E%3Ccircle cx='52.5' cy='14.5' r='7.5' fill='\"+$color1+\"0E0' stroke='\"+$color+\"797'/%3E%3C/g%3E%3C/svg%3E\");
}
`;
    toSassFunction("MyIcon")(INPUT).then(result => {
      expect(result).toEqual(OUTPUT);
      done();
    });
  });
});
