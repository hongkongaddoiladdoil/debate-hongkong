# socket.io-client-cookies-headers

Send cookies from nodejs in the socket.io-client (Monkeypatch)

## What?

SocketIO use a javascript implementation of xmlhttprequest-ssl (`github.com/driverdan/node-XMLHttpRequest`) which does not allow settings cookies due to the specification (http://www.w3.org/TR/XMLHttpRequest/) so this is monkey patch to set cookies and headers in the xmlhttprequest-ssl lib used by socket io (`./node_modules/socket.io-client/node_modules/engine.io-client/node_modules/xmlhttprequest-ssl`)

Most of the info was taken from here:
https://gist.github.com/jfromaniello/4087861

Discussion:
https://github.com/socketio/socket.io-client/issues/344
https://github.com/socketio/socket.io-client/pull/587

##Usage

###socket.io-client-cookies-headers usage (socket.io-client running on nodejs)

```
var newXhr = require('socket.io-client-cookies-headers');
newXhr.setCookies('mycookie=something');
newXhr.setHeaders({header1: 'val1', header2: 'val2'});
var socketIO = require('socket.io-client')('Somewhere only we now');
```

###socket.io server (get cookies example)

```
var cookieString = socket.request.headers.cookie;
//You can use https://www.npmjs.com/package/socket.io-cookie to parse the cookies or something
```

