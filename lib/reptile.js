const request = require('request');
const cheerio = require('cheerio');

// request.get(
//   'https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&manage_type=myprojects&projectId=738291&keyword=',
//   (err, response, body) => {
//     // console.log('body', body);
//     if (response) {
//       const ctoken = response.headers['set-cookie'][1];
//       // console.log('xxxx');
//       console.log('cookie', ctoken);
//     }
//   },
// )

// request.get(
//   `https://www.iconfont.cn/api/project/detail.json?pid=738291&t=${Date.now()}&ctoken=a-KpWQutJsGMr434mWgkBGFd`,
//   (xerr, res , json) => {
//     console.log('err', xerr);
//     console.log('json', json);
//   }
// )
request.get({
  url: `https://www.iconfont.cn/api/project/detail.json?pid=738291&t=${Date.now()}&ctoken=lG9fb_kCk8xxjoY08ZVP4jdF`,
  headers: {
    cookie: `EGG_SESS_ICONFONT=U8AXvqwdm-42-umGXGwgKq_Emj2wuVCkA87TjZ3dn6xm2T4whio3sIKoy4kjkuBSusLMQ-0MhcjWBE1FwhfGmMbpO9xPCEANAHIhoET_7kJ_pbscGV6FmfCh8QTWcmCiTv5lhhXEW-AxLfe1otCy-eI-zPgODc0D5EZxlVSk4mqOdEz-94IZi5OAcsu3pRkTAQs9KRTgwyfMtp67P9YXwDeVNoXPHTR1XHpaQgBHgWZxIoXczyxCXVtKz5kL3XUgvwp6JLe2wev9xkYzghiHakn1Bek1gltKq5sUG7lpS-OKMGSG3IpS40RXVX6pKSg9vOGpSwl_b4kjIz1MkeEpQ1sGpEv1oKzWFygva3nI6eWcila2tqG3kWPZXv_6Chc4MoQFrSxj4hG60R59Yqc-LVXBji3gmlzht_bH1psyCI9cZ-I8Bjj47fZIeYUMQIIkELoYhmzGa-RwPPE1vjDFuPs1FthUE8rJueY_ppcLTQSe9Ut9r17uR5CNSqUc9J-Fyqcr_pfOepLYKIAOL-6i6oAFQ7YyTfun1H6wKSuxdPcLQ-WmXCwNfp3GKCgDcA38vSFwVsKVlYCQNEDrFyMW3v3HXP-HDSNS6IHIkgn4DA8wWXusniEXdAyUryFm_uIDLvn2_PsnH2SKNNzTmIIBpi34O8WvYAETZix9xbKLDuFBkwa7j2A9WbG0tEF-II0jc3LjEDl6yUc3qBtyAWBvohC6AVd8ERNZaPY-rQ5sIesZHSkzXRWfYULwSzXZuphF-4bK_DzgUauqJ1nyaojBDynka2R-Iv6z6iSkwNHsm-etmh2QYLXfcqFxc-NfL7LNggu6RwuIA5oPAktCcgCdG2Vc8NlvXFUOM-kVfm2PGqY5tIQzsj1OJazx7pBw4z1iclD3zo2in2zcoeuZssA2-KBdRX6O2_P0cpJyLx2cTXnxuJA-TyoLle46NO4zLTCEW1anat-D9YWAcRsnUmX_nL_4rn_Z0l6VBNKAHNDz1R61oLcSxH86L7LY3uMtkiuF5fReekSg3ue-0FaSxEAE9g==`,
  },
}, (err, res, json) => {
  console.info('err--:', err);
  console.info('json--:', json);
})

// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&manage_type=myprojects&projectId=738291&keyword=');
//   const html = await page.content();
//   console.log(html);
//   // await page.screenshot({path: 'example.png'});

//   await browser.close();
// })();

