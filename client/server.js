var http = require('http');
var httpProxy = require('http-proxy');
var fs = require('fs');
var path = require('path');
var staticBasePath = 'build';
var cache = {};

var mime = {
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  ico: 'image/x-icon'
};

/**
 * DEV -> http://api-gateway-dev-1893379566.us-east-1.elb.amazonaws.com
 * DEV2 -> http://DEV-346753326.us-east-1.elb.amazonaws.com
 * QA -> http://sat-qa-api-1367964791.us-east-1.elb.amazonaws.com
 * QA -> https://api-qa.coyni.com
 */

var proxy = httpProxy.createProxyServer({
  target: 'http://172.16.4.14:9001'
});

var staticServe = function (req, res) {
  var resolvedBase = path.resolve(staticBasePath);
  var safeSuffix = decodeURI(
    path
      .normalize(req.url)
      .split('?')[0]
      .replace(/^(\.\.[\/\\])+/, '')
  );
  if (
    safeSuffix == '/' ||
    req.url.startsWith('/login') ||
    req.url.startsWith('/signup')
  ) {
    safeSuffix = 'index.html';
  }
  var fileLoc = path.join(resolvedBase, safeSuffix);
  if (!fs.existsSync(fileLoc)) {
    fileLoc = path.join(resolvedBase, 'index.html');
  }
  // Check the cache first...
  if (cache[fileLoc] !== undefined) {
    res.statusCode = 200;
    res.write(cache[fileLoc]);
    return res.end();
  }

  // ...otherwise load the file
  fs.readFile(fileLoc, function (err, data) {
    if (err) {
      res.writeHead(404, 'Not Found');
      res.write('404: File Not Found!');
      return res.end();
    }

    var type = mime[path.extname(fileLoc).slice(1)];
    if ((type !== undefined) & (type !== '')) {
      var s = fs.createReadStream(fileLoc);
      s.on('open', function () {
        res.setHeader('Content-Type', type);
        s.pipe(res);
      });
      s.on('error', function () {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 404;
        res.end('Not found');
      });
    } else {
      // Save to the cache
      cache[fileLoc] = data;
      res.statusCode = 200;
      //   console.log("Calling undefined URL : ",data);
      res.write(data);
      return res.end();
    }
  });
};

// error handling
proxy.on('error', function (err, req, res) {
  console.log('err --> ', err);
  // sendError(res, err);
});

proxy.on('proxyRes', function (proxyRes, req, res) {
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, OPTIONS, PUT, DELETE, HEAD'
  );
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
});

var enableCors = function (req, res) {
  res.setHeader(
    'access-control-allow-methods',
    'GET, POST, PATCH, OPTIONS, PUT, DELETE, HEAD'
  );
  res.setHeader('access-control-allow-headers', '*');
  res.setHeader('access-control-allow-origin', '*');
  res.setHeader('access-control-allow-credentials', 'true');
};

// Create your server that makes an operation that waits a while
// and then proxies the request

const port = process.env.PORT || 9946;

http
  .createServer(function (req, res) {
    // You can define here your custom logic to handle the request
    // and then proxy the request.
    if (req.method === 'OPTIONS') {
      enableCors(req, res);
      res.writeHead(200);
      res.end();
      return;
    }
    if (req.url.startsWith('/api/')) {
      console.log('Calling Proxy URL : ', req.url);
      proxy.web(req, res);
    } else {
      console.log('Calling static URL : ', req.url);
      staticServe(req, res);
    }
  })
  .listen(port);
