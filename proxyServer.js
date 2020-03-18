const http = require('http');
const proxyUrl = require('./config/proxy.config.json');
const apiServer = require('./apiServer');

http.createServer(proxyRoute).listen(3000,()=>{
    console.info("ProxyServer Started Listening at port 3000");
});

function proxyRoute(req,res){
    let httpOptions = {
        hostname : 'localhost', //valid host
        port : 5000, //valid port
        path : getRouteUrl(req.url), //get actual url for proxy
        method : req.method, //http method
        headers : req.headers //http headers
    }
    
    var router = http.request(httpOptions,(routeRes)=>{
        //write response to proxy server response stream
        routeRes.pipe(res);
    });

    //write request to actual server request stream
    req.pipe(router);
}

function getRouteUrl(pUrl){
    let url = proxyUrl.find(url => url.proxyUrl === pUrl );
    return url.routeUrl;
}


