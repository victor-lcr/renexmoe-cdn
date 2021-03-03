import o from"./lib/mdui.js";import s from"./lib/cookies.js";export default{$:o.$};export async function refresh(i){const t=new URL(i);t.search="?RefreshCache";const e=await fetch(t.href);return e.status===302||e.status===202}export function CheckLoginStatus(){return s.hasItem("admin")}export async function logout(){s.removeItem("admin","/"),location.reload()}export async function Login(i){const t=await fetch("?admin",{method:"POST",credentials:"same-origin",cache:"no-cache",headers:{"content-type":"application/x-www-form-urlencoded"},body:new Form({password1:i}).String}).then(e=>e).catch(e=>e);return t.status===201?{status:!0,msg:"Login Successful"}:t.status===401?{status:!1,msg:"Check Password"}:{status:!1,msg:"Unknown Error"}}export class Form{constructor(t){return this.KV=t,this.init()}init(){return this.BuildArray(),this.BuildString(),this.BuildObject(),this}async BuildString(){return this.String=this.Array.join("&"),this.String}async BuildObject(){return this.Object=this.KV,this.Object}async BuildArray(){let t=[];for(let e in this.KV){let r=encodeURIComponent(e),n=encodeURIComponent(this.KV[e]);t.push(r+"="+n)}return this.Array=t,this.Array}append(t){return KV=Object.assign(t,this.KV),this.KV=KV,this.init(),this.KV}delete(t){for(let e of t)delete this.KV[e];return this.init(),this.KV}get(t){return this.KV[t]}set(t,e){return this.KV[t]=e,this.init(),this.KV}}async function a(){let i=[];const t=document.querySelectorAll(".disk_name");for(let e of t)i.push({displayName:e.innerHTML,path:e.getAttribute("href"),DOM:e});return i}export async function GetDisk(i=globalThis.location.pathname){let t={diskList:await a()};for(let e of t.diskList)if(i.indexOf(e.path)>-1){t.this=e;break}return t.this||(t.this={displayName:"Home",path:"/",DOM:document.querySelector("#home")}),t.diskList.push({displayName:"Home",path:"/",DOM:document.querySelector("#home")}),t}export function GetAllLinks(i){let t="";return i.querySelectorAll("a[aria-label=Download]").forEach(e=>t+=`${e}
`),t}
