import http from "http";

http
  .createServer(({ url }, res) => res.end(`Hello World ${url}`))
  .listen(8080, () => console.log(`listening on 8080`));
