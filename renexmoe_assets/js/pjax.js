import d from"../../web_modules/pjax.js";import t from"../../web_modules/nprogress.js";const r=()=>{t.inc()},l=()=>{t.done()};export default()=>{let e=new d({elements:"a:not([target=_blank])",selectors:[".main-drawer",".mdui-container","title",".pjax",".mdui-toolbar"],cacheBust:!1});return e._handleResponse=e.handleResponse,e.handleResponse=function(o,n,s,a){n.status!==200?location.href=s:e._handleResponse(o,n,s,a)},document.addEventListener("pjax:send",r),document.addEventListener("pjax:success",l),e};