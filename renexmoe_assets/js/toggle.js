import e from"../../web_modules/mdui.js";import{refresh as o}from"./utils.js";import{click as r}from"./checkupdate.js";const a=e.$;export default()=>{a("#toggle-drawer").on("click",()=>{new e.Drawer("#main-drawer",{swipe:!0}).toggle()}),a("#about_theme").on("click",()=>{new e.alert('<div class="mdui-typo"><a href="https://github.com/186526/onemanager-theme-renexmoe">Onemanager-theme-renexmoe</a><br>Open source With GPL-3.0 License<br>Build with Love & MDUI & Gulp & snowpack | webpack<br>Author:<a href="https://186526.xyz">186526</a></div>',"\u5173\u4E8Erenexmoe"),e.mutation()}),a("#checkupdate").on("click",()=>{r()}),a(".downloadurl").each((i,t)=>{t.addEventListener("click",()=>{console.log(t),new e.alert(`<div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-not-empty mdui-textfield-disabled"><label class="mdui-textfield-label">URL</label><input class="mdui-textfield-input" type="email" value="${location.href.replace("?preview","")}" id="url-input" disabled=""></div>`,"\u94FE\u63A5"),e.mutation()})}),a(".back").each((i,t)=>{t.addEventListener("click",()=>{window.history.back()})}),a(".refresh").each((i,t)=>{t.addEventListener("click",()=>{console.log(t),e.snackbar("\u5237\u65B0\u7F13\u5B58\u4E2D\u2026\u2026"),o(location.href).then(l=>{if(l)e.snackbar("\u5DF2\u6210\u529F\u5237\u65B0\u7F13\u5B58"),window.renexmoe.pjax.loadUrl(location.href);else throw e.snackbar("\u5237\u65B0\u7F13\u5B58\u9047\u5230\u672A\u77E5\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u5728\u76D8\u7B26\u76EE\u5F55\u9875\u9762"),response})})})};
