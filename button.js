document.getElementById("btn").innerHTML = 0;
function increment() {
  document.getElementById("btn").innerHTML =
    Number(document.getElementById("btn").innerHTML) + 1;
}
function convertRGBToHEX(...rgb) {
  let s = "";
  let val = document.getElementById("color").value.split(",");
  for (let i = 0; i < val.length; i++) {
    s = s + parseInt(val[i], 10).toString(16);
  }
  window.hexcolor = s;
  document.body.style.backgroundColor = hexcolor;
  return s;
}

function convertHEXToRGB(hex) {
  let hexArray = hex.match(/.{1,2}/g);
  let s = "";
  for (let i = 0; i < hexArray.length; i++) {
    if (i === hexArray.length - 1) {
      s = s + parseInt(hexArray[i], 16);
    } else {
      s = s + parseInt(hexArray[i], 16) + ",";
    }
  }
  window.rgbcolor = s;
  let val = document.getElementById("color").value;
  document.body.style.backgroundColor = `rgb(${window.rgbcolor})`;
  return s;
}
