var wifi = require('node-wifi');

// Initialize wifi module
// Absolutely necessary even to set interface to null
wifi.init({
  iface: null // network interface, choose a random wifi interface if set to null
  
}); 

// Scan networks
wifi.scan((error, networks) => {
  if (error) {
    console.log(error);
  } else {
    console.log(networks);
    /*
        networks = [
            {
              ssid: '...',
              bssid: '...',
              mac: '...', // equals to bssid (for retrocompatibility)
              channel: <number>,
              frequency: <number>, // in MHz
              signal_level: <number>, // in dB
              quality: <number>, // same as signal level but in %
              security: 'WPA WPA2' // format depending on locale for open networks in Windows
              security_flags: '...' // encryption protocols (format currently depending of the OS)
              mode: '...' // network mode like Infra (format currently depending of the OS)
            },
            ...
        ];
        */
  }
});

// Connect to a network
/* wifi.connect({ ssid: 'ssid', password: 'password' }, error => {
  if (error) {
    console.log(error);
  }
  console.log('Connected');
});

// Disconnect from a network
// not available on all os for now
wifi.disconnect(error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Disconnected');
  }
});

// Delete a saved network
// not available on all os for now
wifi.deleteConnection({ ssid: 'ssid' }, error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Deleted');
  }
});
 */ //REMOVE
// List the current wifi connections
/* wifi.getCurrentConnections((error, currentConnections) => {
  if (error) {
    console.log(error);
  } else {
    console.log(currentConnections); */ //REMOVE
    /*
    // you may have several connections
    [
        {
            iface: '...', // network interface used for the connection, not available on macOS
            ssid: '...',
            bssid: '...',
            mac: '...', // equals to bssid (for retrocompatibility)
            channel: <number>,
            frequency: <number>, // in MHz
            signal_level: <number>, // in dB
            quality: <number>, // same as signal level but in %
            security: '...' //
            security_flags: '...' // encryption protocols (format currently depending of the OS)
            mode: '...' // network mode like Infra (format currently depending of the OS)
        }
    ]
    */

   /* 
  }
});
*/ // REMOVE
// All functions also return promise if there is no callback given
var attempt = 0
attempt = +1
function cycling() {
  console.log("Cycle Search " + attempt)
wifi.scan()
  .then(networks => {
    // networks
  })
  .catch(error => {
    // error
  });
}

setInterval(cycling, 5000)