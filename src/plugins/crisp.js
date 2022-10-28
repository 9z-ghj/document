module.exports = function (context, options) {
  return {
    name: 'crisp',
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: 'script',
            innerHTML: 'window.$crisp=[];window.CRISP_WEBSITE_ID="ffc86b71-5f12-4782-9782-273ee64a51d0";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();'
          },
        ],
      };
    },
  };
};