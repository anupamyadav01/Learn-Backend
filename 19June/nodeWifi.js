const wifi = require("node-wifi");

wifi.init({
  iface: null, // network interface, choose a network interface from wifi.interfaces
});

// Scan for available networks
wifi.scan((err, networks) => {
  if (err) {
    console.log(err);
  } else {
    console.log(networks);
  }
});
