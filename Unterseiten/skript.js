const options = {
    bottom: '64px',
    right: '32px', 
    left: 'unset', 
    time: '0.5s', 
    mixColor: '#fff', 
    backgroundColor: '#fff', f'
    buttonColorDark: '#100f2c', 
    buttonColorLight: '#fff', 
    saveInCookies: false, 
    label: '☀️', 
    autoMatchOsTheme: true    
}

new Darkmode(options).showWidget();

const darkmode = new Darkmode(options);
darkmode.showWidget();

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
  }