//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
<<<<<<< HEAD
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT || "3000", () => {
    console.log("%s listening at 3000"); // eslint-disable-line no-console
=======
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || "3001", () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
>>>>>>> be14022f9a635b4192534b0afa6e80258de7974a
  });
});

