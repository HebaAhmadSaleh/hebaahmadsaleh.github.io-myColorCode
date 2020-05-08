
function convertRGBToHEX(...rgb) {
  let color = "";
  let val = document.getElementById("rgb_color").value.split(",");
  for (let i = 0; i < val.length; i++) {
    color = color + parseInt(val[i], 10).toString(16);
  }
  window.hexcolor = color;
  document.getElementById("hex_color").value = color;
  var ntcMatch;
  document.querySelector('body').style.backgroundColor = hexcolor;
  if(color) {
    ntcMatch = ntc.name(`#${color.toUpperCase()}`);
    document.getElementById('human_name').innerText = ntcMatch[1];
  }
  return color;
}

function convertHEXToRGB(hex) {
  let hexArray = hex.match(/.{1,2}/g);
  var color = "";
  for (let i = 0; i < hexArray.length; i++) {
    if (i === hexArray.length - 1) {
        color = color + parseInt(hexArray[i], 16);
    } else {
        color = color + parseInt(hexArray[i], 16) + ",";
    }
  }

  document.getElementById("rgb_color").value = color;
  var colorName = document.createElement('h1');
  colorName.textContent = color;

  document.querySelector('body').style.backgroundColor = `#${hex}`;
  var ntcMatch;
  if(color) {
    ntcMatch = ntc.name(`#${hex.toUpperCase()}`);
    document.getElementById('human_name').innerText = ntcMatch[1];
  }
  return color;
}
