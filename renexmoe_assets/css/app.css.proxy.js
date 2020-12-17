// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@font-face {\n    font-family: 'Product Sans';\n    src: local('Product Sans Regular'), local('Google Sans Regular'), url(https://cdn.jsdelivr.net/gh/186526/jsdelivr@1.1.8/static/ProductSans-Regular.woff2)format('woff2');\n}\n\nbody {\n    font-family: Roboto, Noto Sans SC, Noto, Helvetica, Arial, sans-serif\n}\n\n.mdui-container {\n    max-width: 950px\n}\n\n.mdui-drawer-close {\n    display: none\n}\n\n.mdui-drawer .mdui-list-item {\n    padding-left: 20px;\n    border-radius: 0 50px 50px 0\n}\n\n.mdui-toolbar>a,\n.mdui-chip-title,\n.mdui-dialog-title {\n    font-family: Product Sans, Noto Sans SC, Roboto, Noto, Helvetica, Arial, sans-serif\n}\n\nfooter a {\n    text-decoration: none\n}\n\n.mdui-chip {\n    margin: 20px\n}\n\n.markdown h1,\n.markdown h2,\n.markdown h3,\n.markdown h4,\n.markdown h5,\n.markdown h6 {\n    font-family: Product Sans, Noto Sans SC;\n    margin-top: 0.2em\n}\n\n@media(max-width:600px) {\n\n    .mdui-col-sm-2,\n    .mdui-col-sm-3,\n    .forcedownload {\n        display: none\n    }\n\n    .mdui-col-xs-12 {\n        width: 100%\n    }\n}\n\n.mdui-list-item-icon {\n    color: black\n}\n\n.mdui-typo {\n    border-radius: 8px\n}\n\n.mdui-dialog {\n    border-radius: 8px\n}\n\n.mdui-container .mdui-list-item {\n    border-radius: 50px;\n}\n\n#file {\n    margin-top: 1%;\n}\n\n#head-md,\n#readme-md {\n    display: none;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}