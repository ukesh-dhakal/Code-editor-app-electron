const html_code = document.querySelector('#html ');
const css_code = document.querySelector('#css ');

const result = document.querySelector('#output');

function run() {
  result.contentDocument.body.innerHTML = `<style>${css_code.value}</style>` + html_code.value;
 
}

html_code.onkeyup = () => run();
css_code.onkeyup = () => run();

