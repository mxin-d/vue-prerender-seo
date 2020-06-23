const fs = require("fs");
const http = require("http");
const url = require("url");
const path = require("path");
const hostname = "localhost";
const port = 8888;

/**
 * 根据文件类型设置响应头
 * @param {*} res
 * @param {*} type
 */
const writeHead = (res, type) => {
  const status = 200;
  const contentTypeDic = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png"
  };
  // 添加响应头
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(status, contentTypeDic[type]);
};

/**
 * 获取文件路径
 * @param {*} req
 */
const getFilePath = req => {
  let pathName = path.join(__dirname, "dist", url.parse(req.url).pathname);
  if (
    path.extname(pathName) == "" ||
    pathName.charAt(pathName.length - 1) == "/"
  ) {
    pathName = path.join(pathName, "index.html");
  }
  return pathName;
};

/**
 * 创建本地服务
 */
http
  .createServer((req, res) => {
    const filePath = getFilePath(req);
    const indexFilePath = path.join(__dirname, "/dist/index.html");
    const exists = fs.existsSync(filePath);
    const data = fs.readFileSync(exists ? filePath : indexFilePath);
    writeHead(res, filePath);
    res.end(data);
  })
  .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
