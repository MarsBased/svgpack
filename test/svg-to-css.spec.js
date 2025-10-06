const css = require('../src/svg-to-css');

const toCssFunction = css();

describe('CSS module', () => {
  test('generate CSS variable', () => {
    const INPUT = `
  <?xml version="1.0" encoding="UTF-8"?>
  <svg width="200px" height="200px" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
      <title>icon-handshake</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="icon-handshake" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M25.0672386,43.7832842 C26.1697386,40.6305474 8.70792045,87.5547974 7.420875,90.8929421 C6.134625,94.2318895 7.97292045,96.6429947 10.5462159,97.5700342 C13.1195114,98.4978763 15.1415568,99.2395079 18.2661023,100.166547 C21.3906477,101.094389 22.1264432,99.6103237 23.0451932,97.5700342 C23.9647386,95.5297447 39.7720114,52.12985 40.8753068,49.7187447 C41.9778068,47.3076395 41.6103068,45.1485605 38.3020114,43.6315868 C34.9929205,42.1138105 32.603375,41.5575868 29.4788295,40.6305474 C26.3542841,39.7027053 25.0672386,43.7832842 25.0672386,43.7832842" id="Fill-1" fill="#000000"></path>
      </g>
  </svg>
  `;
    return toCssFunction('MyIcon')(INPUT).then((result) => {
      expect(result).toMatchSnapshot();
    });
  });

  test('generate CSS variable with simple icon', () => {
    const INPUT = `
    <?xml version="1.0" encoding="UTF-8"?>
    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>icon-search</title>
        <g id="icon-search" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M6.89329264,10.1950857 L6.89329264,9.69508575 C8.4257168,9.69508575 9.66864188,8.44757574 9.66864188,6.90765432 C9.66864188,5.36758437 8.42556848,4.11959767 6.89329264,4.11959767 C5.36101681,4.11959767 4.11794341,5.36758437 4.11794341,6.90765432 C4.11794341,8.44757574 5.36086848,9.69508575 6.89329264,9.69508575 L6.89329264,10.1950857 Z M13.2631006,12.1136251 C13.5789665,12.4306561 13.5789665,12.9444318 13.2631006,13.2614628 C12.94622,13.5795124 12.4311648,13.5795124 12.1132347,13.2604066 L9.4017132,10.5226264 C8.67330112,11.0335404 7.80453193,11.3153087 6.89329264,11.3153087 C4.46659662,11.3153087 2.5,9.34123945 2.5,6.90765432 C2.5,4.4736476 4.46639391,2.5 6.89329264,2.5 C9.32019137,2.5 11.2865853,4.47364759 11.2865853,6.90765432 C11.2865853,7.79670972 11.0223571,8.64594475 10.5403313,9.36393624 L13.2631006,12.1136251 Z" id="Loupe" fill="#000000" fill-rule="nonzero"></path>
        </g>
    </svg>
    `;
    return toCssFunction('MyIcon')(INPUT).then((result) => {
      expect(result).toMatchSnapshot();
    });
  });
});
