//modules la mot cai tu tuong ma khi ta boc tach mot thanh phan xu ly mot nghiep vu cu the sang mot cai noi rieng
 import { logger2 } from './logger/index.js'; //cai nay la export default
 import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from './constants.js'; //cai nay thi khong phai export default
 // cach thu 2 import * as constants from './constants.js'; //import tat ca
 console.log(typeof logger); //function
 console.log(logger2);
 logger2('Chao you', TYPE_WARN);
