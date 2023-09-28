"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),h=a,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||n;return r?o.createElement(d,i(i({ref:t},u),{},{components:r})):o.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:1},i="Support",p={unversionedId:"community/support",id:"community/support",title:"Support",description:"If you run into a problem or you have still a question, follow the steps below to get support.",source:"@site/docs/community/support.md",sourceDirName:"community",slug:"/community/support",permalink:"/docs/community/support",draft:!1,editUrl:"https://github.com/fusion44/raspiblitz/tree/main/docs/docs/community/support.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"blitzSidebar",previous:{title:"Community Resources",permalink:"/docs/category/community-resources"},next:{title:"Workshop Tutorial",permalink:"/docs/community/workshops"}},s={},l=[{value:"Documentation",id:"documentation",level:3},{value:"Groups",id:"groups",level:3},{value:"Setup Process (Detailed Documentation)",id:"setup-process-detailed-documentation",level:2}],u={toc:l},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"support"},"Support"),(0,a.kt)("p",null,"If you run into a problem or you have still a question, follow the steps below to get support.\nAlso check the ",(0,a.kt)("a",{parentName:"p",href:"#setup-process-detailed-documentation"},"setup documentation")," for details."),(0,a.kt)("h3",{id:"documentation"},"Documentation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Look up the ",(0,a.kt)("a",{parentName:"p",href:"/docs/faq/"},"FAQ")," if you can't find an answer to this question/problem.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you have a hardware problem, please check that your hardware parts are exactly the parts recommended in the shopping list above. Different screens or even SSD-casings can cause problems.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Please determine if your problem/question is about RaspiBlitz or for example with LND or Core Lightning. For example if you can't route a payment or get an error when opening a channel that is an LND/Core Lightning question/problem and is best answered by the ",(0,a.kt)("a",{parentName:"p",href:"https://dev.lightning.community"},"LND dev community")," or the ",(0,a.kt)("a",{parentName:"p",href:"https://lightning.readthedocs.io/"},"Core Lightning documentation"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the GitHub issues of the RaspiBlitz: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rootzoll/raspiblitz/issues"},"https://github.com/rootzoll/raspiblitz/issues")," Do a search there. Also check closed issues by removing 'is:open' from the filter/search-box.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you haven't found an answer yet, open a new issue on the RaspiBlitz GitHub. You may have to register an account with GitHub for this. If it's a bug with the RaspiBlitz, please add (copy+paste) a Debug Report to your issue (see ",(0,a.kt)("a",{parentName:"p",href:"/docs/faq/"},"FAQ")," for how to generate them) and/or add some screenshots/photos so the community gets more insight into your problem."))),(0,a.kt)("h3",{id:"groups"},"Groups"),(0,a.kt)("p",null,"There are plenty off rooms you can find Raspiblitz users that can help you:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://t.me/raspiblitz"},"Telegram English"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://t.me/raspiblitz_DE"},"Telegram Deutsch"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://t.me/raspiblitz_ES"},"Telegram Spanish"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://t.me/raspiblitz_IT"},"Telegram Italian"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://t.me/raspiblitz_RU"},"Telegram Russian"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://keybase.io/team/raspiblitz"},"Keybase"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://element.io/"},"Matrix - Element client")," Channel: #raspiblitz:libera.chat")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"IRC - Libera chat -> irc.libera.chat:6697 -> Channel: #raspiblitz"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"TODO: fixme\n9. Sphinx Chat -> sphinx.chat://?action=tribe&uuid=YFsuxCApuU-TBIRWeWY_Gl52IOx2clJKZYLxDn78Z9RgcWNx9zUube7mkK4IyXQjLril-tgKZs3wOxDlWqpiyxp8jTbt&host=tribes.sphinx.chat -> [Connection code](YFsuxCApuU-TBIRWeWY_Gl52IOx2clJKZYLxDn78Z9RgcWNx9zUube7mkK4IyXQjLril-tgKZs3wOxDlWqpiyxp8jTbt) --\x3e [QR code](https://github.com/rootzoll/raspiblitz/issues/2089#issuecomment-805789854)\n")),(0,a.kt)("h2",{id:"setup-process-detailed-documentation"},"Setup Process (Detailed Documentation)"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The following documentation will provide more detailed background information on the setup process.")),(0,a.kt)("p",null,"If you are looking for a tutorial on how to organize a workshop to build the RaspiBlitz, ",(0,a.kt)("a",{parentName:"p",href:"/docs/community/workshops"},"see here"),"."))}c.isMDXComponent=!0}}]);