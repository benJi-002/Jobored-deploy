(this.webpackJsonpjobored=this.webpackJsonpjobored||[]).push([[0],{69:function(t,e,a){},71:function(t,e,a){},75:function(t,e,a){},76:function(t,e,a){},77:function(t,e,a){},78:function(t,e,a){},79:function(t,e,a){},80:function(t,e,a){},81:function(t,e,a){},82:function(t,e,a){},83:function(t,e,a){},84:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a(57),r=a.n(n),o=a(17),s=a(8),i=(a(69),a.p+"static/media/jobored.dd320452.svg"),l=a.p+"static/media/union.7e07a45d.svg",u=a(1),d=function(){return Object(u.jsx)("header",{className:"topBar__header",children:Object(u.jsxs)("div",{className:"topBar__container",children:[Object(u.jsx)("div",{className:"topBar__logo",children:Object(u.jsxs)(o.b,{to:"/",children:[Object(u.jsx)("img",{className:"rotate",src:l,alt:"logotype"}),Object(u.jsx)("img",{className:"topBar__logo-text logo",src:i,alt:"logo-text"})]})}),Object(u.jsx)("nav",{className:"topBar__menu",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(o.c,{to:"/",className:function(t){return t.isActive?"active":""},children:"\u041f\u043e\u0438\u0441\u043a \u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0439"})}),Object(u.jsx)("li",{children:Object(u.jsx)(o.c,{to:"/favorites",className:function(t){return t.isActive?"active":""},children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})})]})})]})})},j=a(7),h=a(3),b=a(6),f=a(10),p=function(){var t=function(){var t=Object(c.useState)(!1),e=Object(h.a)(t,2),a=e[0],n=e[1],r=Object(c.useState)(null),o=Object(h.a)(r,2),s=o[0],i=o[1],l=Object(c.useCallback)(function(){var t=Object(f.a)(Object(b.a)().mark((function t(e,a,c,r){var o,s;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(!0),t.prev=1,t.next=4,fetch(e,{method:a,body:c,headers:r});case 4:if((o=t.sent).ok){t.next=7;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(o.status));case 7:return t.next=9,o.json();case 9:return s=t.sent,n(!1),t.abrupt("return",s);case 14:throw t.prev=14,t.t0=t.catch(1),n(!1),i(t.t0.message),t.t0;case 19:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e,a,c,n){return t.apply(this,arguments)}}(),[]);return{loading:a,request:l,error:s,clearError:Object(c.useCallback)((function(){return i(null)}),[])}}(),e=t.loading,a=t.request,n=t.error,r=t.clearError;localStorage.autorization||(localStorage.autorization=JSON.stringify({accessToken:"v3.r.137440105.ebb074038d4a612e22fcb58e4d00434dfccc78b2.170dd2ac1160c09e0a8e7e22ec35d4603480ff27",ttl:1685350364})),Object(c.useEffect)((function(){localStorage.favoritesIds||localStorage.setItem("favoritesIds",[]),JSON.parse(localStorage.autorization).ttl<Date.now()/1e3&&d().then(o)}),[]);var o=function(t){localStorage.autorization=JSON.stringify({accessToken:t[0],ttl:t[1]})},s="https://api.superjob.ru/2.0",i="v3.h.4478689.8fa7f23475316f5a65800a1bc764d5fd8e6300ef.b573fe9e1764e3bb67fbc1e54c11e2e1a909282a",l="client_secret=".concat(i),u="Bearer ".concat(JSON.parse(localStorage.autorization).accessToken),d=function(){var t=Object(f.a)(Object(b.a)().mark((function t(){var e;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a("".concat(s,"/oauth2/password/?").concat("login=4478689","&").concat("password=SD9456CP","&").concat("client_id=2534","&").concat(l,"&").concat("hr=0"),"GET",null,{"Content-Type":"application/json"});case 2:return e=t.sent,console.log(e),t.abrupt("return",[e.access_token,e.ttl]);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(f.a)(Object(b.a)().mark((function t(e,c,n,r,o,l){var d;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=c?"&payment_from=".concat(c):"",n=n?"&payment_to=".concat(n):"",r=r?"&catalogues=".concat(r):"",o=o?"&keyword=".concat(o):"",l=l?"&no_agreement=1":"",t.next=7,a("".concat(s,"/vacancies/?page=").concat(e,"&count=4&published=1").concat(l).concat(c).concat(n).concat(r).concat(o),"GET",null,{"Content-Type":"application/json",Authorization:"".concat(u),"X-Api-App-Id":"".concat(i)});case 7:return d=t.sent,t.abrupt("return",[d.objects.map(m),d.total]);case 9:case"end":return t.stop()}}),t)})));return function(e,a,c,n,r,o){return t.apply(this,arguments)}}(),p=function(){var t=Object(f.a)(Object(b.a)().mark((function t(e){var c;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a("".concat(s,"/vacancies/").concat(e),"GET",null,{"Content-Type":"application/json",Authorization:"".concat(u),"X-Api-App-Id":"".concat(i)});case 2:return c=t.sent,t.abrupt("return",m(c));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(f.a)(Object(b.a)().mark((function t(){var e;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a("".concat(s,"/catalogues/"),"GET",null,{"Content-Type":"application/json",Authorization:"".concat(u),"X-Api-App-Id":"".concat(i)});case 2:return e=t.sent,t.abrupt("return",e.map(x));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(t){return{key:t.key,catalogues:function(t,e){return t.length>30?e:t}(t.title_rus,t.title_trimmed),catalogues_trimmed:t.title_trimmed}},m=function(t){var e,a,c;return{id:t.id,vacancy:t.profession,city:t.town.title,employment:t.type_of_work.title,firm:t.firm_name,from:t.payment_from,to:t.payment_to,salary:(e=t.payment_from,a=t.payment_to,c=t.currency,0===e&&0===a?"\u0437/\u043f \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430":e===a||0===e?"\u0437/\u043f ".concat(a," ").concat(c):e<a?"\u0437/\u043f ".concat(e," - ").concat(a," ").concat(c):0===a?"\u0437/\u043f \u043e\u0442 ".concat(e," ").concat(c):void 0),description:t.vacancyRichText?t.vacancyRichText:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"}};return{getAuthorization:d,getAllVacancies:j,getVacancyById:p,getCatalogues:g,loading:e,error:n,clearError:r}},g=a(94),x=a(91),m=a(93),O=(a(71),function(t){var e=t.selectVal,a=t.setSelectVal,c=t.arrowRef,n=t.cataloguesList,r=t.setCatalogueKey,o=function(t){t?n.forEach((function(e){e.catalogues===t&&r((function(t){return e.key}))})):r((function(t){return 0}))};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x.a,{onChange:function(t){return function(t){a((function(e){return t})),o(t)}(t)},ref:function(t){return c.current[1]=t},"data-elem":"industry-select",data:n.map((function(t){return t.catalogues})),value:e,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0442\u0440\u0430\u0441\u043b\u044c",label:"\u041e\u0442\u0440\u0430\u0441\u043b\u044c",allowDeselect:!0,searchable:!0,nothingFound:"\u041e\u0442\u0440\u0430\u0441\u043b\u044c \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",dropdownPosition:"bottom",transitionProps:{transition:"pop-top-left",duration:300,timingFunction:"ease"},rightSection:Object(u.jsx)("svg",{width:"16",height:"8",viewBox:"0 0 16 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{ref:function(t){return c.current[0]=t},d:"M1 0.999999L7.21905 6.33061C7.66844 6.7158 8.33156 6.7158 8.78095 6.33061L15 1",stroke:"#ACADB9",strokeWidth:"1.5",strokeLinecap:"round"})}),rightSectionWidth:48,styles:{root:{fontFamily:"inherit",lineHeight:"0"},input:{paddingLeft:"10px",marginTop:"8px",height:"42px",fontFamily:"inherit",fontWeight:"400",fontSize:"14px",border:"1px solid #D5D6DC",borderRadius:"8px",transition:"all .2s ease","&:hover":{border:"1px solid #5E96FC",transition:"all .2s ease"}},dropdown:{borderRadius:"8px"},item:{fontFamily:"inherit",fontWeight:"400",fontSize:"14px",width:"97%",height:"36px",borderRadius:"8px",lineHeight:"1.55","&:hover":{backgroundColor:"#DEECFF",transition:"all .2s ease"},"&[data-selected]":{"&, &:hover":{backgroundColor:"#5E96FC",color:"#FFFFFF"}},"&[data-hovered]":{}},label:{marginTop:"30px",fontFamily:"inherit",fontWeight:"700",fontSize:"16px",lineHeight:"19px",color:"#232134"},rightSection:{pointerEvents:"none"}}})})}),v=function(t){var e=function(t,e){e((function(t){return+t+1e4}))},a=function(t,e){e(t>0?function(t){return+t-1e4}:function(t){return 0})},c=t.firstInputVal,n=t.setFirstInputVal,r=t.secondInputVal,o=t.setSecondInputVal;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m.a,{onChange:function(t){n(t)},"data-elem":"salary-from-input",placeholder:"\u041e\u0442",label:"\u041e\u043a\u043b\u0430\u0434",value:c,min:0,step:1e4,rightSection:Object(u.jsxs)("div",{className:"job__filter-salary_arrows",children:[Object(u.jsx)("svg",{onClick:function(){return e(0,n)},width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M8.50006 4.5L5.39054 1.83469C5.16584 1.6421 4.83428 1.6421 4.60959 1.83469L1.50006 4.5",stroke:"#ACADB9",strokeWidth:"1.5",strokeLinecap:"round"})}),Object(u.jsx)("svg",{onClick:function(){return a(c,n)},width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M1.49994 1.5L4.60946 4.16531C4.83416 4.3579 5.16572 4.3579 5.39041 4.16531L8.49994 1.5",stroke:"#ACADB9",strokeWidth:"1.5",strokeLinecap:"round"})})]}),rightSectionWidth:36,styles:{root:{fontFamily:"inherit",lineHeight:"0"},input:{paddingLeft:"10px",marginTop:"8px",height:"42px",fontFamily:"inherit",fontWeight:"400",fontSize:"14px",border:"1px solid #D5D6DC",borderRadius:"8px",transition:"all .2s ease","&:hover":{border:"1px solid #5E96FC",transition:"all .2s ease"}},item:{fontFamily:"inherit",fontWeight:"400",fontSize:"14px",width:"255px",lineHeight:"1.55"},label:{marginTop:"20px",fontFamily:"inherit",fontWeight:"700",fontSize:"16px",lineHeight:"19px",color:"#232134"}}}),Object(u.jsx)(m.a,{onChange:function(t){o(t)},"data-elem":"salary-to-input",placeholder:"\u0414\u043e",value:r,min:0,step:1e4,rightSection:Object(u.jsxs)("div",{className:"job__filter-salary_arrows",children:[Object(u.jsx)("svg",{onClick:function(){return e(0,o)},width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M8.50006 4.5L5.39054 1.83469C5.16584 1.6421 4.83428 1.6421 4.60959 1.83469L1.50006 4.5",stroke:"#ACADB9",strokeWidth:"1.5",strokeLinecap:"round"})}),Object(u.jsx)("svg",{onClick:function(){return a(r,o)},width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M1.49994 1.5L4.60946 4.16531C4.83416 4.3579 5.16572 4.3579 5.39041 4.16531L8.49994 1.5",stroke:"#ACADB9",strokeWidth:"1.5",strokeLinecap:"round"})})]}),rightSectionWidth:36,styles:{root:{fontFamily:"inherit",lineHeight:"0"},input:{paddingLeft:"10px",marginTop:"8px",height:"42px",fontFamily:"inherit",fontWeight:"400",fontSize:"14px",border:"1px solid #D5D6DC",borderRadius:"8px",transition:"all .2s ease","&:hover":{border:"1px solid #5E96FC",transition:"all .2s ease"}},item:{fontFamily:"inherit",fontWeight:"400",fontSize:"14px",width:"255px",lineHeight:"1.55"},label:{fontWeight:"700",fontSize:"16px",lineHeight:"19px",color:"#232134"}}})]})},_=function(t){var e=Object(c.useRef)([]),a=p().getCatalogues,n=t.selectVal,r=t.setSelectVal,o=t.firstInputVal,s=t.setFirstInputVal,i=t.secondInputVal,l=t.setSecondInputVal,d=t.cataloguesList,h=t.setCataloguesList,b=t.setCatalogueKey,f=t.onUseFilter,x=t.setFilterLoaded,m=t.setSelectedPage,_=t.setSearchInputVal,w=t.OnClearAll;Object(c.useEffect)((function(){S(!0)}),[]);var S=function(){a().then(C)},C=function(t){h(Object(j.a)(t))},y=function(t){e.current[0].classList.contains("active")?e.current[0].classList.remove("active"):t.target===e.current[1]?e.current[0].classList.add("active"):e.current[0].classList.remove("active")};return Object(u.jsxs)("div",{onClick:function(t){return y(t)},className:"job__filter",children:[Object(u.jsxs)("div",{className:"job__filter-title_wrapper",children:[Object(u.jsx)("h2",{className:"job__filter-title",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b"}),Object(u.jsxs)("button",{className:"job__filter-reset",onClick:function(){return w(r,b,s,l,m,_,x)},children:["\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0432\u0441\u0435 ",Object(u.jsx)("span",{children:"\xd7"})]})]}),Object(u.jsx)("div",{className:"job__filter-industry",children:Object(u.jsx)(O,{selectVal:n,setSelectVal:r,arrowRef:e,cataloguesList:d,setCatalogueKey:b})}),Object(u.jsx)("div",{className:"job__filter-salary",children:Object(u.jsx)(v,{firstInputVal:o,setFirstInputVal:s,secondInputVal:i,setSecondInputVal:l,OnChangeArrow:y})}),Object(u.jsx)("div",{className:"job__filter-apply",children:Object(u.jsx)(g.a,{onClick:function(){f()},"data-elem":"search-button",styles:{root:{backgroundColor:"#5E96FC",borderRadius:"8px",width:"100%",height:"40px",fontFamily:"inherit",fontWeight:"500",fontSize:"14px",transition:"all .2s ease","&:hover":{backgroundColor:"#92C1FF"},"&:active":{backgroundColor:"#3B7CD3"}}},children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})})]})},w=a(96),S=function(t){var e=Object(c.useState)(4),a=Object(h.a)(e,2),n=a[0],r=a[1];Object(c.useEffect)((function(){r((function(e){return t.count}))}),[]);for(var o=[],s=0;s<n;s++)o[s]=Object(u.jsxs)("li",{className:"job__item",children:[Object(u.jsx)(w.a,{height:8,mt:8,width:"35%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:24,width:"60%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:24,width:"15%",radius:"xl"})]},s+1);return o},C=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(w.a,{height:8,mt:14,width:"42%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:30,width:"60%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:30,width:"20%",radius:"xl"})]})},y=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(w.a,{height:8,mt:8,width:"25%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:27,width:"85%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:15,width:"35%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:15,width:"70%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:15,width:"50%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:15,width:"85%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:29,width:"25%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:29,width:"80%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:15,width:"65%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:15,width:"40%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:15,width:"90%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:15,width:"90%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:15,width:"65%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:15,width:"94%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:15,width:"15%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:29,width:"25%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:28,width:"40%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:15,width:"40%",radius:"xl"}),Object(u.jsx)(w.a,{height:8,mt:15,width:"55%",radius:"xl",color:"red"})]})},I=a.p+"static/media/balloon_empty_state.70601b11.svg",N=a.p+"static/media/location.2bbf7a6c.svg",L=(a(75),function(t){var e=t.jobsList,a=t.newItemLoading,n=t.onRequest,r=t.loading,s=t.page,i=t.firstInputVal,l=t.secondInputVal,d=t.catalogueKey,j=t.filterLoaded,h=t.searchInputVal,b=Object(c.useRef)([]),f=[];Object(c.useEffect)((function(){j?n(!0,s,+i,+l,d,h,!(!+i&&!+l)):n(!0,s)}),[s]),Object(c.useEffect)((function(){localStorage.getItem("favoritesIds").length&&!f.length&&(f=p(localStorage.getItem("favoritesIds"),f))}),[]);var p=function(t,e){return t.replace(/[,]+/g," ").split(" ").map((function(t){return Number(t)}))},g=function(t){var e=t.map((function(t){return Object(u.jsxs)("li",{className:"job__item","data-elem":"vacancy-".concat(t.id),children:[Object(u.jsx)(o.b,{to:"/".concat(t.id),children:Object(u.jsx)("span",{className:"job__title",children:(e=t.vacancy,e.length>57?e.slice(0,57)+"...":e)})}),Object(u.jsxs)("div",{className:"job__descr",children:[Object(u.jsx)("span",{className:"job__descr-salary",children:t.salary}),Object(u.jsx)("div",{className:"job__descr-dot_wrapper",children:Object(u.jsx)("div",{className:"job__descr-dot"})}),Object(u.jsx)("span",{className:"job__descr-schedule",children:t.employment})]}),Object(u.jsxs)("div",{className:"job__location",children:[Object(u.jsx)("img",{className:"job__location-icon",src:N,alt:"location"}),Object(u.jsx)("span",{className:"job__location-name",children:t.city})]}),Object(u.jsx)("button",{className:localStorage.getItem("favoritesIds").includes(t.id)?"job__item-star active":"job__item-star",tabIndex:0,ref:function(e){return b.current[t.id]=e},onClick:function(){var e;e=t.id,localStorage.getItem("favoritesIds").length&&!f.length&&(f=p(localStorage.getItem("favoritesIds"),f)),b.current[e].classList.contains("active")?(b.current[e].classList.remove("active"),f=f.filter((function(t){return t!==e})),localStorage.setItem("favoritesIds",f)):(b.current[e].classList.add("active"),f.push(e),localStorage.setItem("favoritesIds",f))},"data-elem":"vacancy-".concat(t.id,"-shortlist-button"),children:Object(u.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M10.9718 2.70846C11.4382 1.93348 12.5618 1.93348 13.0282 2.70847L15.3586 6.58087C15.5262 6.85928 15.7995 7.05784 16.116 7.13116L20.5191 8.15091C21.4002 8.35499 21.7474 9.42356 21.1545 10.1066L18.1918 13.5196C17.9788 13.765 17.8744 14.0863 17.9025 14.41L18.2932 18.9127C18.3714 19.8138 17.4625 20.4742 16.6296 20.1214L12.4681 18.3583C12.1689 18.2316 11.8311 18.2316 11.5319 18.3583L7.37038 20.1214C6.53754 20.4742 5.62856 19.8138 5.70677 18.9127L6.09754 14.41C6.12563 14.0863 6.02124 13.765 5.80823 13.5196L2.8455 10.1066C2.25257 9.42356 2.59977 8.35499 3.48095 8.15091L7.88397 7.13116C8.20053 7.05784 8.47383 6.85928 8.64138 6.58087L10.9718 2.70846Z",stroke:"#ACADB9",strokeWidth:"1.5"})})})]},t.id);var e}));return r&&!a?Object(u.jsx)("ul",{className:"job__grid",children:Object(u.jsx)(S,{count:4})}):Object(u.jsx)("ul",{className:"job__grid",children:e})}(e);return 0!==e.length||r?Object(u.jsx)("div",{className:"job__list",children:g}):Object(u.jsx)("img",{className:"job__empty",src:I,alt:"empty_ballon"})}),k=(a(76),a(35)),F=function(t){var e=t.searchInputVal,a=t.setSearchInputVal,c=t.onUseFilter;return Object(u.jsxs)("div",{className:"jobSearch__wrapper",children:[Object(u.jsx)(k.a,{onChange:function(t){return e=t.target.value,void a((function(t){return e}));var e},onKeyPress:function(t){"Enter"===t.key&&c()},"data-elem":"search-input",value:e,icon:Object(u.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M10.468 10.468L13.5714 13.5714M12.0924 6.54622C12.0924 9.60931 9.60931 12.0924 6.54622 12.0924C3.48313 12.0924 1 9.60931 1 6.54622C1 3.48313 3.48313 1 6.54622 1C9.60931 1 12.0924 3.48313 12.0924 6.54622Z",stroke:"#ACADB9",strokeWidth:"1.5",strokeLinecap:"round"})}),placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0438",styles:{input:{paddingLeft:"50px",paddingRight:"107px",height:"48px",fontFamily:"inherit",fontWeight:"400",fontSize:"14px",border:"1px solid #EAEBED",borderRadius:"8px",transition:"all .2s ease","&:hover":{border:"1px solid #5E96FC",transition:"all .2s ease"}},icon:{paddingLeft:"5px"}}}),Object(u.jsx)(g.a,{onClick:function(){return c()},"data-elem":"search-button",styles:{root:{position:"absolute",top:"8px",right:"12px",backgroundColor:"#5E96FC",borderRadius:"8px",width:"83px",height:"32px",fontFamily:"inherit",fontWeight:"500",fontSize:"14px",transition:"all .2s ease","&:hover":{backgroundColor:"#92C1FF"},"&:active":{backgroundColor:"#3B7CD3"}}},children:"\u041f\u043e\u0438\u0441\u043a"})]})},V=a(92),A=(a(77),function(t){return Object(u.jsx)(V.a,{onChange:function(e){t.onPageSelected(e)},value:t.page,total:t.count,position:"center",styles:{control:{color:"#232134",border:"1px solid #D5D6DC",borderRadius:"4px",height:"32px",fontFamily:"inherit",fontWeight:"400",fontSize:"16px",transition:"all .2s ease","&[data-active]":{backgroundColor:"#5E96FC"},"&:hover":{transition:"all .2s ease"}}}})}),E=(a(78),function(){var t=localStorage.cache?JSON.parse(localStorage.cache).locSearchVal:"",e=localStorage.cache?JSON.parse(localStorage.cache).locSelectVal:"",a=localStorage.cache?JSON.parse(localStorage.cache).locForVal:"",n=localStorage.cache?JSON.parse(localStorage.cache).locToVal:"",r=localStorage.cache?JSON.parse(localStorage.cache).locCatalogueKey:0,o=!!localStorage.cache&&JSON.parse(localStorage.cache).locFilterLoaded,s=localStorage.cache?JSON.parse(localStorage.cache).locPage+1:1,i=Object(c.useState)([]),l=Object(h.a)(i,2),d=l[0],b=l[1],f=Object(c.useState)(!1),g=Object(h.a)(f,2),x=g[0],m=g[1],O=Object(c.useState)(t),v=Object(h.a)(O,2),w=v[0],S=v[1],C=Object(c.useState)(e),y=Object(h.a)(C,2),I=y[0],N=y[1],k=Object(c.useState)(a),V=Object(h.a)(k,2),E=V[0],D=V[1],B=Object(c.useState)(n),W=Object(h.a)(B,2),T=W[0],z=W[1],R=Object(c.useState)([]),J=Object(h.a)(R,2),P=J[0],M=J[1],H=Object(c.useState)(r),K=Object(h.a)(H,2),q=K[0],G=K[1],U=Object(c.useState)(o),Z=Object(h.a)(U,2),X=Z[0],Q=Z[1],Y=Object(c.useState)(s),$=Object(h.a)(Y,2),tt=$[0],et=$[1],at=Object(c.useState)(125),ct=Object(h.a)(at,2),nt=ct[0],rt=ct[1],ot=p(),st=ot.loading,it=ot.getAllVacancies;Object(c.useEffect)((function(){localStorage.cache=JSON.stringify({locPage:tt-1,locSelectVal:I,locCatalogueKey:q,locForVal:E,locToVal:T,locSearchVal:w,locFilterLoaded:X})}),[tt,I,q,E,T,w,X]);var lt=function(t,e,a,c,n,r,o){m(!t),it(e,a,c,n,r,o).then(ut)},ut=function(t){var e;b((function(e){return Object(j.a)(t[0])})),e=t[1],rt(e>500?function(t){return 125}:function(t){return Math.ceil(e/4)}),m((function(t){return!1}))},dt=function(){et((function(t){return 1})),lt(!0,tt-1,+E,+T,q,w,!(!+E&&!+T)),w||I||E||T?Q((function(t){return!0})):(Q((function(t){return!1})),G((function(t){return 0}))),window.scrollTo(0,0)};return Object(u.jsxs)("div",{className:"job__content",children:[Object(u.jsx)(_,{selectVal:I,setSelectVal:N,firstInputVal:E,setFirstInputVal:D,secondInputVal:T,setSecondInputVal:z,cataloguesList:P,setCataloguesList:M,setCatalogueKey:G,onUseFilter:dt,setFilterLoaded:Q,onRequest:lt,selectedPage:tt,setSelectedPage:et,setSearchInputVal:S,OnClearAll:function(t,e,a,c,n,r,o){t((function(t){return""})),e((function(t){return 0})),a((function(t){return""})),c((function(t){return""})),n((function(t){return 1})),r((function(t){return""})),o((function(t){return!1})),lt(!0,tt-1),window.scrollTo(0,0)}}),Object(u.jsxs)("div",{className:"job__content-wrapper",children:[Object(u.jsx)(F,{searchInputVal:w,setSearchInputVal:S,onUseFilter:dt}),Object(u.jsx)(L,{jobsList:d,newItemLoading:x,onRequest:lt,loading:st,searchInputVal:w,firstInputVal:E,secondInputVal:T,catalogueKey:q,filterLoaded:X,page:tt-1}),Object(u.jsx)("div",{className:"pag__wrapper",children:Object(u.jsx)(A,{onPageSelected:function(t){et(t),window.scrollTo(0,0)},page:tt,count:nt})})]})]})}),D=a(95),B=(a(79),function(t){var e=t.jobDescr,a=e.id,n=e.vacancy,r=e.city,o=e.employment,s=e.salary,i=Object(c.useRef)([]),l=[],d=function(t){var e;localStorage.getItem("favoritesIds").length&&!l.length&&(e=localStorage.getItem("favoritesIds"),l=e.replace(/[,]+/g," ").split(" ").map((function(t){return Number(t)}))),i.current[t].classList.contains("active")?(i.current[t].classList.remove("active"),l=l.filter((function(e){return e!==t})),localStorage.setItem("favoritesIds",l)):(i.current[t].classList.add("active"),l.push(t),localStorage.setItem("favoritesIds",l))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"job__title descr",children:n}),Object(u.jsxs)("div",{className:"job__descr descr",children:[Object(u.jsx)("span",{className:"job__descr-salary descr",children:s}),Object(u.jsx)("div",{className:"job__descr-dot_wrapper descr",children:Object(u.jsx)("div",{className:"job__descr-dot descr"})}),Object(u.jsx)("span",{className:"job__descr-schedule descr",children:o})]}),Object(u.jsxs)("div",{className:"job__location descr",children:[Object(u.jsx)("img",{className:"job__location-icon descr",src:N,alt:"location"}),Object(u.jsx)("span",{className:"job__location-name descr",children:r})]}),Object(u.jsx)("button",{className:localStorage.getItem("favoritesIds").includes(a)?"job__item-star active":"job__item-star",tabIndex:0,ref:function(t){return i.current[a]=t},onClick:function(){d(a)},"data-elem":"vacancy-".concat(a,"-shortlist-button"),children:Object(u.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M10.9718 2.70846C11.4382 1.93348 12.5618 1.93348 13.0282 2.70847L15.3586 6.58087C15.5262 6.85928 15.7995 7.05784 16.116 7.13116L20.5191 8.15091C21.4002 8.35499 21.7474 9.42356 21.1545 10.1066L18.1918 13.5196C17.9788 13.765 17.8744 14.0863 17.9025 14.41L18.2932 18.9127C18.3714 19.8138 17.4625 20.4742 16.6296 20.1214L12.4681 18.3583C12.1689 18.2316 11.8311 18.2316 11.5319 18.3583L7.37038 20.1214C6.53754 20.4742 5.62856 19.8138 5.70677 18.9127L6.09754 14.41C6.12563 14.0863 6.02124 13.765 5.80823 13.5196L2.8455 10.1066C2.25257 9.42356 2.59977 8.35499 3.48095 8.15091L7.88397 7.13116C8.20053 7.05784 8.47383 6.85928 8.64138 6.58087L10.9718 2.70846Z",stroke:"#ACADB9",strokeWidth:"1.5"})})})]})}),W=function(t){var e=t.jobDescr.description;return Object(u.jsx)(D.a,{children:Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:"".concat(e)}})})},T=function(){var t=Object(s.p)().jobId,e=Object(c.useState)([]),a=Object(h.a)(e,2),n=a[0],r=a[1],o=p(),i=o.getVacancyById,l=o.loading;Object(c.useEffect)((function(){d(t)}),[t]);var d=function(t){i(t).then(j)},j=function(t){r((function(e){return t}))},b=l?Object(u.jsx)(C,{}):null,f=l?Object(u.jsx)(y,{}):null,g=!l&&n?Object(u.jsx)(B,{jobDescr:n}):null,x=!l&&n?Object(u.jsx)(W,{jobDescr:n}):null;return Object(u.jsx)("div",{className:"job__list descr",children:Object(u.jsxs)("div",{className:"job__grid descr",children:[Object(u.jsxs)("div",{className:"job__item descr",children:[b,g]}),Object(u.jsxs)("div",{className:"job__item descr",children:[f,x]})]})})},z=function(){return Object(u.jsx)(T,{})},R=(a(80),function(t){var e=Object(c.useState)([]),a=Object(h.a)(e,2),n=a[0],r=a[1],i=Object(c.useState)(4),l=Object(h.a)(i,2),d=l[0],b=l[1],f=Object(c.useState)(!1),g=Object(h.a)(f,2),x=g[0],m=g[1],O=p(),v=O.loading,_=O.getVacancyById,w=Object(c.useRef)([]),C=[];Object(c.useEffect)((function(){localStorage.getItem("favoritesIds").length&&!C.length&&(C=L(localStorage.getItem("favoritesIds"),C)),t.onSetCountPages(Math.ceil(C.length/4)),b((function(t){return C.length})),y(C,!0)}),[]);var y=function(t,e){m(!e),t.forEach((function(t){return _(t).then(I)}))},I=function(t){r((function(e){return[].concat(Object(j.a)(e),[t])})),m((function(t){return!1}))},L=function(t,e){return t.replace(/[,]+/g," ").split(" ").map((function(t){return Number(t)}))},k=function(t){var e=t.map((function(t,e){return Object(u.jsxs)("li",{className:"job__item","data-elem":"vacancy-".concat(t.id),children:[Object(u.jsx)(o.b,{to:"/".concat(t.id),children:Object(u.jsx)("span",{className:"job__title",children:(a=t.vacancy,a.length>57?a.slice(0,57)+"...":a)})}),Object(u.jsxs)("div",{className:"job__descr",children:[Object(u.jsx)("span",{className:"job__descr-salary",children:t.salary}),Object(u.jsx)("div",{className:"job__descr-dot_wrapper",children:Object(u.jsx)("div",{className:"job__descr-dot"})}),Object(u.jsx)("span",{className:"job__descr-schedule",children:t.employment})]}),Object(u.jsxs)("div",{className:"job__location",children:[Object(u.jsx)("img",{className:"job__location-icon",src:N,alt:"location"}),Object(u.jsx)("span",{className:"job__location-name",children:t.city})]}),Object(u.jsx)("button",{className:localStorage.getItem("favoritesIds").includes(t.id)?"job__item-star active":"job__item-star",tabIndex:0,ref:function(e){return w.current[t.id]=e},onClick:function(){var e;e=t.id,localStorage.getItem("favoritesIds").length&&!C.length&&(C=L(localStorage.getItem("favoritesIds"),C)),w.current[e].classList.contains("active")?(w.current[e].classList.remove("active"),C=C.filter((function(t){return t!==e})),localStorage.setItem("favoritesIds",C)):(w.current[e].classList.add("active"),C.push(e),localStorage.setItem("favoritesIds",C))},"data-elem":"vacancy-".concat(t.id,"-shortlist-button"),children:Object(u.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M10.9718 2.70846C11.4382 1.93348 12.5618 1.93348 13.0282 2.70847L15.3586 6.58087C15.5262 6.85928 15.7995 7.05784 16.116 7.13116L20.5191 8.15091C21.4002 8.35499 21.7474 9.42356 21.1545 10.1066L18.1918 13.5196C17.9788 13.765 17.8744 14.0863 17.9025 14.41L18.2932 18.9127C18.3714 19.8138 17.4625 20.4742 16.6296 20.1214L12.4681 18.3583C12.1689 18.2316 11.8311 18.2316 11.5319 18.3583L7.37038 20.1214C6.53754 20.4742 5.62856 19.8138 5.70677 18.9127L6.09754 14.41C6.12563 14.0863 6.02124 13.765 5.80823 13.5196L2.8455 10.1066C2.25257 9.42356 2.59977 8.35499 3.48095 8.15091L7.88397 7.13116C8.20053 7.05784 8.47383 6.85928 8.64138 6.58087L10.9718 2.70846Z",stroke:"#ACADB9",strokeWidth:"1.5"})})})]},t.id);var a}));return v&&!x?Object(u.jsx)("ul",{className:"job__grid",children:Object(u.jsx)(S,{count:d})}):Object(u.jsx)("ul",{className:"job__grid",children:e})}(function(t,e){return t.slice(4*e,4*e+4)}(n,t.page));return localStorage.getItem("favoritesIds")?Object(u.jsx)("div",{className:"job__list favorites",children:k}):Object(u.jsx)(s.a,{to:"/favorites/empty"})}),J=(a(81),function(){var t=Object(c.useState)(1),e=Object(h.a)(t,2),a=e[0],n=e[1],r=Object(c.useState)(0),o=Object(h.a)(r,2),s=o[0],i=o[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(R,{page:s,onSetCountPages:function(t){n(t)}}),Object(u.jsx)("div",{className:"pag__wrapper favorites",children:Object(u.jsx)(A,{onPageSelected:function(t){i(t-1),window.scrollTo(0,0)},count:a})})]})}),P=a.p+"static/media/empty-human.e9719835.svg",M=(a(82),function(){return Object(u.jsxs)("div",{className:"empty__wrapper",children:[Object(u.jsx)("img",{className:"empty__human",src:P,alt:"human"}),Object(u.jsx)("h2",{className:"empty__text",children:"\u0423\u043f\u0441, \u0437\u0434\u0435\u0441\u044c \u0435\u0449\u0435 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442!"}),Object(u.jsx)("div",{className:"empty__button",children:Object(u.jsx)(o.b,{to:"/",children:Object(u.jsx)(g.a,{gradient:!0,styles:{root:{backgroundColor:"#DEECFF",borderRadius:"8px",width:"164px",height:"42px",fontFamily:"inherit",fontWeight:"600",fontSize:"14px",color:"#3B7CD3",transition:"all .2s ease","&:hover":{backgroundColor:"#d7e2f2"},"&:active":{backgroundColor:"#c8d3e3"}}},children:"\u041f\u043e\u0438\u0441\u043a \u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0439"})})})]})}),H=function(){return Object(u.jsx)(M,{})},K=function(){return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(d,{}),Object(u.jsx)("div",{className:"app",children:Object(u.jsx)("main",{children:Object(u.jsxs)(s.d,{children:[Object(u.jsx)(s.b,{path:"/",element:Object(u.jsx)(E,{})}),Object(u.jsx)(s.b,{path:"/:jobId",element:Object(u.jsx)(z,{})}),Object(u.jsx)(s.b,{path:"/favorites",element:Object(u.jsx)(J,{})}),Object(u.jsx)(s.b,{path:"/favorites/empty",element:Object(u.jsx)(H,{})})]})})})]})};a(83);r.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(K,{}))}},[[84,1,2]]]);
//# sourceMappingURL=main.39fa44f8.chunk.js.map