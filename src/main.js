import $ from "jquery";
import "gene-event-handler/app/scripts/jquery.gene";

import cssVars from "css-vars-ponyfill";
cssVars({});

// var gee = gee || $.fn.gene;
// gee.debug = true;
// import './extend';
// import "@core/assets/";

import "@cmpt/steps/steps.js";
import "@cmpt/wrap/wrap.js";
import "@cmpt/banner/banner.js";
import "@cmpt/list/list.js";
import "@cmpt/carou/carou.js";
import "@cmpt/appbar/appbar.js";
import "@cmpt/share/share.js";
import "@cmpt/touch/touch.js";
import "@core/cmpt/nav/nav.js";
import "@core/cmpt/pagination/pagination.js";
import "./assets/styles/main.scss";

import "./assets/scripts/app";

import drawer from "@core/mod/drawer/drawer";
import tab from "@core/mod/tab/tab";
import modal from "@core/mod/modal/modal";
import loader from "@core/mod/loader/loader";
import "./assets/styles/tailwind.css";

App.use(drawer);
App.use(tab);
App.use(loader);
App.use(modal);
App.init();
