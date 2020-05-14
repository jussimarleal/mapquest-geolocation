$(function(){
  $("#btn1").click(function(){
    navigator.notification.alert("Alerta");//
  });
  $("#btn2").click(function(){
    navigator.notification.confirm("Alerta", () => {}, "Confirm", ['a', 'b']);
  });
  $("#btn3").click(function(){
    console.log("Teste");
    navigator.notification.beep(3);
  });
  $("#btn4").click(function(){
    navigator.vibrate(6000);
  });

  navigator.geolocation.getCurrentPosition((position) => {
    L.mapquest.key = 'BPYBTKxImVS6W97iL4Xy0TMQPhZ0aI7x'; // key do mapa
    let map = L.mapquest.map('map', {
      center: [position.coords.latitude, position.coords.longitude],//[37.7749, -122.4194],
      layers: L.mapquest.tileLayer('map'),
      zoom: 17
    });

    map.addControl(L.mapquest.control()); // control do mapa
    L.marker([position.coords.latitude, position.coords.longitude]).addTo(map); // marker da localização atual
  });

});