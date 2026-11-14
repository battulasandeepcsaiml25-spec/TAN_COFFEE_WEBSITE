
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.BmwiweTg.js","/cdn/shopifycloud/checkout-web/assets/c1/app.ARMkEK2u.js","/cdn/shopifycloud/checkout-web/assets/c1/630ba094.Cz6IQlUg.js","/cdn/shopifycloud/checkout-web/assets/c1/4509beb0.Mtk3A2Tn.js","/cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6.BE73GrUE.js","/cdn/shopifycloud/checkout-web/assets/c1/f025431a.BlsbPO0-.js","/cdn/shopifycloud/checkout-web/assets/c1/6ec9a0fa.IGk8g30z.js","/cdn/shopifycloud/checkout-web/assets/c1/164ad2e3.CZvwFoOh.js","/cdn/shopifycloud/checkout-web/assets/c1/fb3b4968.D4DG5ztM.js","/cdn/shopifycloud/checkout-web/assets/c1/7d6bf786.G6zQ1mVx.js","/cdn/shopifycloud/checkout-web/assets/c1/0f5b1987.CYHVp8wR.js","/cdn/shopifycloud/checkout-web/assets/c1/9e5d8eb8.LM7m9FaB.js","/cdn/shopifycloud/checkout-web/assets/c1/a45fed45.V6tcTVI5.js","/cdn/shopifycloud/checkout-web/assets/c1/c328865d.BCB1O5to.js","/cdn/shopifycloud/checkout-web/assets/c1/f1384cc2.BX1JbjgR.js","/cdn/shopifycloud/checkout-web/assets/c1/4618373b.DzEr83M2.js","/cdn/shopifycloud/checkout-web/assets/c1/486c3fda.B3Jhz0PZ.js","/cdn/shopifycloud/checkout-web/assets/c1/17f6d6d8.ClC16wSu.js","/cdn/shopifycloud/checkout-web/assets/c1/19286c78.BxbYvDcI.js","/cdn/shopifycloud/checkout-web/assets/c1/cb6adac5.Bl30j75Z.js","/cdn/shopifycloud/checkout-web/assets/c1/c7b92b97.COvoIjJK.js","/cdn/shopifycloud/checkout-web/assets/c1/faece749.Ck_mH8X3.js","/cdn/shopifycloud/checkout-web/assets/c1/77d9e668.dp2Cb7Nw.js","/cdn/shopifycloud/checkout-web/assets/c1/2c7267bc.CZnyxUmi.js","/cdn/shopifycloud/checkout-web/assets/c1/b71b03d1.Wy-P7hGy.js","/cdn/shopifycloud/checkout-web/assets/c1/928dbd30.gdlR2-bh.js","/cdn/shopifycloud/checkout-web/assets/c1/77821758.CIHBOvKY.js","/cdn/shopifycloud/checkout-web/assets/c1/82d59f8f.CviX6Y4i.js","/cdn/shopifycloud/checkout-web/assets/c1/a8202753.BWfzqcb9.js","/cdn/shopifycloud/checkout-web/assets/c1/dfb65aab.Bt_vKRhk.js","/cdn/shopifycloud/checkout-web/assets/c1/e1177f6f.Cth_G3e8.js","/cdn/shopifycloud/checkout-web/assets/c1/2f5db8a5.DTM0KHom.js","/cdn/shopifycloud/checkout-web/assets/c1/c0466e46.D11-bdyS.js","/cdn/shopifycloud/checkout-web/assets/c1/8d7e1337.D1SAQfdV.js","/cdn/shopifycloud/checkout-web/assets/c1/5bf177e7.DVeJi61b.js","/cdn/shopifycloud/checkout-web/assets/c1/f3089cd3.BL18Uqbc.js","/cdn/shopifycloud/checkout-web/assets/c1/53e8828a.CxQ_u0nO.js","/cdn/shopifycloud/checkout-web/assets/c1/4c5b1c9e.CIC4WTW2.js","/cdn/shopifycloud/checkout-web/assets/c1/a541bc81.BltjPdNS.js","/cdn/shopifycloud/checkout-web/assets/c1/6b0dea54.DtvsO7P6.js","/cdn/shopifycloud/checkout-web/assets/c1/9c33421f.BV2TRltS.js","/cdn/shopifycloud/checkout-web/assets/c1/37c3ef79.BaAy5QUr.js","/cdn/shopifycloud/checkout-web/assets/c1/651bb548.D8_Xph0-.js","/cdn/shopifycloud/checkout-web/assets/c1/5f07060a.DpeSRxR2.js","/cdn/shopifycloud/checkout-web/assets/c1/83f74304.C45TUy8p.js","/cdn/shopifycloud/checkout-web/assets/c1/7edfee1d.CKo6Q7Ix.js","/cdn/shopifycloud/checkout-web/assets/c1/ce604576.DRj3vMAG.js","/cdn/shopifycloud/checkout-web/assets/c1/b01c110b.CFD6_PK-.js","/cdn/shopifycloud/checkout-web/assets/c1/f1754c88.Brd5q1On.js","/cdn/shopifycloud/checkout-web/assets/c1/5d731017.BH_orEbQ.js","/cdn/shopifycloud/checkout-web/assets/c1/f00fed33.8QAYWsiH.js","/cdn/shopifycloud/checkout-web/assets/c1/94493b3a.C3DgBYBq.js","/cdn/shopifycloud/checkout-web/assets/c1/99cd9b25.CrOz4WR0.js","/cdn/shopifycloud/checkout-web/assets/c1/676eb8e9.BB7Jh7MY.js","/cdn/shopifycloud/checkout-web/assets/c1/a9ee22a0.DuZxKDJE.js","/cdn/shopifycloud/checkout-web/assets/c1/56132226.CzLRxpjK.js","/cdn/shopifycloud/checkout-web/assets/c1/0e3247a0.CZLzbLtr.js","/cdn/shopifycloud/checkout-web/assets/c1/1dbf806c.Bg656-7Z.js","/cdn/shopifycloud/checkout-web/assets/c1/a56386a6.CrLB8m7T.js","/cdn/shopifycloud/checkout-web/assets/c1/e59ed41d.BhUQ11P6.js","/cdn/shopifycloud/checkout-web/assets/c1/674595ba.CFpXA2vJ.js","/cdn/shopifycloud/checkout-web/assets/c1/173d1fdf.CGw2HhSI.js","/cdn/shopifycloud/checkout-web/assets/c1/0d85278a.BnGAaonu.js","/cdn/shopifycloud/checkout-web/assets/c1/16138b9e.CGE7JZMb.js","/cdn/shopifycloud/checkout-web/assets/c1/55432860.Ckhfj4Vl.js","/cdn/shopifycloud/checkout-web/assets/c1/0be192b6.CtCy-zxt.js","/cdn/shopifycloud/checkout-web/assets/c1/2bce9289.CkUdpEs-.js","/cdn/shopifycloud/checkout-web/assets/c1/62a11d3e.rFP6FfPq.js","/cdn/shopifycloud/checkout-web/assets/c1/9a493f3d.BkDLweBR.js","/cdn/shopifycloud/checkout-web/assets/c1/402b40d8.yGp83irG.js","/cdn/shopifycloud/checkout-web/assets/c1/17db3e71.Bjs0trIC.js","/cdn/shopifycloud/checkout-web/assets/c1/b4f06cd6.CwW_AIzI.js","/cdn/shopifycloud/checkout-web/assets/c1/2b0d1656.RNKZGKow.js","/cdn/shopifycloud/checkout-web/assets/c1/64c3067d.CrDQN01i.js","/cdn/shopifycloud/checkout-web/assets/c1/bbe16958.CXbGtnH7.js","/cdn/shopifycloud/checkout-web/assets/c1/6a8181a5.CP46aqL_.js","/cdn/shopifycloud/checkout-web/assets/c1/4205169c.2L98KPU7.js","/cdn/shopifycloud/checkout-web/assets/c1/1befea5c._H2yVaIH.js","/cdn/shopifycloud/checkout-web/assets/c1/542b75cf.C-_S3LI1.js","/cdn/shopifycloud/checkout-web/assets/c1/74e5a557.BN7bDLZz.js","/cdn/shopifycloud/checkout-web/assets/c1/f4d0afee.CBQgxqHw.js","/cdn/shopifycloud/checkout-web/assets/c1/0b704646.DUO6EFoI.js","/cdn/shopifycloud/checkout-web/assets/c1/a7ef2c81.Bl5HxAUV.js","/cdn/shopifycloud/checkout-web/assets/c1/70565d02.B-L8FNOv.js","/cdn/shopifycloud/checkout-web/assets/c1/f0b3b291.Bpd6D9IX.js","/cdn/shopifycloud/checkout-web/assets/c1/114cc9d1.C_JEseqR.js","/cdn/shopifycloud/checkout-web/assets/c1/e7ae9e74.YratNv9_.js","/cdn/shopifycloud/checkout-web/assets/c1/91e796b6.BYGUPam2.js","/cdn/shopifycloud/checkout-web/assets/c1/a222330e.DB2LkMwM.js","/cdn/shopifycloud/checkout-web/assets/c1/c380a132.BoJAsrh1.js","/cdn/shopifycloud/checkout-web/assets/c1/3839d836.Dzd8r441.js","/cdn/shopifycloud/checkout-web/assets/c1/72fde58e.aJDHUe_1.js","/cdn/shopifycloud/checkout-web/assets/c1/8cad6ded.IeWUWUO3.js","/cdn/shopifycloud/checkout-web/assets/c1/9e556116.BldCgOZ8.js","/cdn/shopifycloud/checkout-web/assets/c1/abf134e3.Bo0Wp0qu.js","/cdn/shopifycloud/checkout-web/assets/c1/8e6bd8e5.CREP9toi.js","/cdn/shopifycloud/checkout-web/assets/c1/e6a05f36.CIQMX3O6.js","/cdn/shopifycloud/checkout-web/assets/c1/a012ee00.Vmt80IFq.js","/cdn/shopifycloud/checkout-web/assets/c1/71b36506.B2e1TvB_.js","/cdn/shopifycloud/checkout-web/assets/c1/7aefefff.CoCNIg7K.js","/cdn/shopifycloud/checkout-web/assets/c1/e72406f8.CcMFuFsP.js","/cdn/shopifycloud/checkout-web/assets/c1/bdb60128.CHIzg6vO.js","/cdn/shopifycloud/checkout-web/assets/c1/a0df1226.BlrLmvMS.js","/cdn/shopifycloud/checkout-web/assets/c1/5d5cabdf.Cqm6tdoW.js","/cdn/shopifycloud/checkout-web/assets/c1/8efef14b.DyOdR0xl.js","/cdn/shopifycloud/checkout-web/assets/c1/c1adaf81.Cx57sSL5.js","/cdn/shopifycloud/checkout-web/assets/c1/21162507.ZBi71-Xy.js","/cdn/shopifycloud/checkout-web/assets/c1/139f607b.VQmQLv5d.js","/cdn/shopifycloud/checkout-web/assets/c1/5f1fce8b.e4QsuNYD.js","/cdn/shopifycloud/checkout-web/assets/c1/bace9a08.DCmHc3ax.js","/cdn/shopifycloud/checkout-web/assets/c1/8e2be3f2.BvrRtk0r.js","/cdn/shopifycloud/checkout-web/assets/c1/2d034bf2.BKWv00ib.js","/cdn/shopifycloud/checkout-web/assets/c1/972590c9.CpJmBxDc.js","/cdn/shopifycloud/checkout-web/assets/c1/bc751930.Dh3XXtum.js","/cdn/shopifycloud/checkout-web/assets/c1/842452fd.DPvIOWZh.js","/cdn/shopifycloud/checkout-web/assets/c1/a70a5b74.U_T_lckD.js","/cdn/shopifycloud/checkout-web/assets/c1/2692118b.IasT2R-J.js","/cdn/shopifycloud/checkout-web/assets/c1/c4303b96.BtSdb7we.js","/cdn/shopifycloud/checkout-web/assets/c1/7ee3a05c.CHdfabvn.js","/cdn/shopifycloud/checkout-web/assets/c1/0d8691fc.G4aFEF4I.js","/cdn/shopifycloud/checkout-web/assets/c1/b0923a20.nJ6OnGAT.js","/cdn/shopifycloud/checkout-web/assets/c1/7e9c6d7c.qsvmNeDB.js","/cdn/shopifycloud/checkout-web/assets/c1/ea392d18.BPeBb3ke.js","/cdn/shopifycloud/checkout-web/assets/c1/b2ef26e8.D_iKaJfA.js","/cdn/shopifycloud/checkout-web/assets/c1/99bfe9cf.BpxOKlb3.js","/cdn/shopifycloud/checkout-web/assets/c1/3c46c6f5.DzjI5v2T.js","/cdn/shopifycloud/checkout-web/assets/c1/e29daa9a.DjKhZvyi.js","/cdn/shopifycloud/checkout-web/assets/c1/b2371320.AliYAP9y.js","/cdn/shopifycloud/checkout-web/assets/c1/a735741f.CN1s8rWp.js","/cdn/shopifycloud/checkout-web/assets/c1/5a1effbb.D6GdBJDF.js","/cdn/shopifycloud/checkout-web/assets/c1/67e8c664.B2aFKukx.js","/cdn/shopifycloud/checkout-web/assets/c1/045c921f.Bs_9GYHg.js","/cdn/shopifycloud/checkout-web/assets/c1/4bb32466.CNpjlIGb.js","/cdn/shopifycloud/checkout-web/assets/c1/ed37d3c3.RpXWYqSD.js","/cdn/shopifycloud/checkout-web/assets/c1/30df5a02.BNzhSmDw.js","/cdn/shopifycloud/checkout-web/assets/c1/e32a8416.CyMMTLuf.js","/cdn/shopifycloud/checkout-web/assets/c1/eb0f242a.DWYM7CpL.js","/cdn/shopifycloud/checkout-web/assets/c1/109c16d9.Bp33W27_.js","/cdn/shopifycloud/checkout-web/assets/c1/05f561d4.BO51h-aH.js","/cdn/shopifycloud/checkout-web/assets/c1/69f8f26d.BYzdRDqc.js","/cdn/shopifycloud/checkout-web/assets/c1/121bd940.CVLb0LrK.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.CGRs8DQS.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/deferred-boot.DGZtCWKG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.mSY95ESL.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/256cc32287.B1YSPUDc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/a50c8864f4.DiwHZivn.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/7188aae948xccd7bc85.CW2HhXMu.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/90ea855f49.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/69c8bed031.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/04c08e5c0e.CuRoM9zv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/6e3faf45e1.Du9dByaI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/6e3faf45e1x0e0212c9.ct4xfivv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/0fde071d7ex9f0ef4a6.B0RErzdh.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/605b2a80c9xbaeb52f9.BAjucZ-8.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/621ec27e44.B5DPTpH4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/5caf6ce603.87JMHPUK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/966e3f4d79.gzvCNwz_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d4951797f3.CtjKurIY.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/df684aa9a8.CIs_ZowJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/f2a87b867b.Cl0Eyn3N.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/4d60858badxb036935a.xO_7ctnq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/65db0eadda.qa_ACxP4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/5a34f22f1a.D7MQTDGO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/e8404cbaefx27591707.B68J3GgF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/7aa3c6599b.C5b9n-0_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/e07f74760d.DU0m5rdF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/e07f74760dxbaeb52f9.4dSOKuBa.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/6559bc5a39x1573b800.vTcdVGq4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/89f3b0bff6.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/500596e378xe1c30c9c.CyQZvZOO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/bde15ff106x11e90a44.ak5YUtDE.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/04e578408ax11e90a44.CbGDlw5K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/04e578408ax6d8a6990.eanpcn-r.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d34ebf45edx11e90a44.btyKOfco.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/81ca749d51x11e90a44.DrWvAMMF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96x11e90a44.DqwdjT1Z.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96x670d76d4.BbxB_6wt.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96x03fe6ed3.CVKcAbIN.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96xd17a0c7b.BULdn7yC.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/343ea67e0bx11e90a44.s-Kd_X2E.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/401ac968b4x11e90a44.JBO5WNhc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/81ca749d51.DRJckcGa.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/lato/lato_n4.c3b93d431f0091c8be23185e15c9d1fee1e971c5.woff2?h1=dHJ1dGguY29mZmVl&hmac=1947aee9351d125223feeeff364ee983febaef9c9addc076ba2195d9d81dc559","https://fonts.shopifycdn.com/lato/lato_n7.900f219bc7337bc57a7a2151983f0a4a4d9d5dcf.woff2?h1=dHJ1dGguY29mZmVl&hmac=8aa6af8bccc18bd75110c9a3c01199f12ad8a4eda88a3ea647fad50eace04b85"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/2061/0473/files/logo-black-2_x320.png?v=1613165834"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  