/*!
 * renexmoe v1.1.5 (https://github.com/186526/onemanager-theme-renexmoe)
 * Copyright 2020-2021 186526 <i@186526.xyz>
 * Licensed under GPL-3.0
 */import e from"./lib/mdui.js";import t from"./function/pjax.js";import o from"./theme.js";import i from"./function/toggle.js";import{drawertoggle as r}from"./function/toggle.js";import m from"./function/sort.js";import l from"./function/menu.js";import s from"./function/marked.js";import a from"./lib/flyingpages.js";import g from"./function/code.js";import n from"./pack.js";import c from"./function/activedisk.js";globalThis.mdui=e,globalThis.renexmoe={toggle_theme:o.toggle,mutation:()=>{c(),console.log("renexmoe::pjax::Page Load Success"),console.log("renexmoe::marked::Update Marked"),s(),console.log("renexmoe::mdui::Init Theme"),o.mutation(),console.log("renexmoe::sort::Init Sort"),m(),e.mutation(),console.log("renexmoe::init::Start EventLister"),i(),g(),console.log("renexmoe::init::FlyingPages Preload"),a()},pjax:t(),renexmoe:n,version:n},e.$(()=>{console.log(`
 %c OneManager-theme-renexmoe | Powered by OneManager-php && Webpack | 186526 
`,"color: #fff; background: #444; padding:5px 0;"),console.log("renexmoe::init::Start Load"),console.log("renexmoe::init::Start EventLister"),l(),r(),console.log("renexmoe::init::Start FlyingPages"),console.log("renexmoe::init::Init MDUI"),window.renexmoe.mutation(),document.addEventListener("pjax:success",window.renexmoe.mutation)});export default globalThis.renexmoe;
