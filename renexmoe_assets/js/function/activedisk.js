import{GetDisk as s}from"../utils.js";const e=async()=>{const t=await s();t.diskList.forEach(i=>{i.DOM.parentNode.classList.remove("mdui-list-item-active")}),t.this.DOM.parentNode.classList.add("mdui-list-item-active")};export default e;