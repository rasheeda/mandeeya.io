(this.webpackJsonpmandeeya=this.webpackJsonpmandeeya||[]).push([[0],{37:function(e,a,t){},38:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(27),l=t.n(c),o=(t(37),t(17));t(38);var i=function(e){return r.a.createElement("nav",{className:"navbar"+(e.color?" is-".concat(e.color):"")+(e.spaced?" is-spaced":"")},e.children)},s=t(18),m=t(11),u=t(8),d=t(16),f=t.n(d),p=t(3),h=t(15),b=Object(p.a)(),E=Object(n.createContext)(),g=Object(u.f)((function(e){var a=e.children,t=Object(m.a)(e,["children"]);return r.a.createElement(E.Provider,{history:b,value:t},a)}));function v(e){var a=e.children;return r.a.createElement(u.b,{history:b},r.a.createElement(g,null,r.a.createElement(N,null),a))}function y(){var e=Object(n.useContext)(E);if(!e)throw new Error("useRouter may only be called within <Router />");return Object(s.a)({push:e.history.push,replace:e.history.replace,pathname:e.location.pathname,query:Object(s.a)(Object(s.a)({},f.a.parse(e.location.search)),e.match.params)},e)}function N(){var e=y();return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e.pathname]),null}t(55);var w=function(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),c=t[0],l=t[1];return r.a.createElement(i,{spaced:e.spaced,color:e.color},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("div",{className:"NavbarComponent__logoItem navbar-item"},r.a.createElement(h.a,{to:"/"},r.a.createElement("p",{className:"logoText"},"mandeeya",r.a.createElement("span",{className:"logoTextIO"},".io")))),r.a.createElement("div",{className:"navbar-burger burger"+(c?" is-active":""),onClick:function(){return l(!c)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{className:"navbar-menu"+(c?" is-active":"")},r.a.createElement("div",{className:"navbar-end"},r.a.createElement(h.a,{className:"navbar-item",to:"/"},"Home"),r.a.createElement("a",{href:"/blog",target:"_blank",rel:"noreferrer noopener",className:"navbar-item"},"Blog"),r.a.createElement("a",{className:"navbar-item",href:"#ContactMe"},"Contact Me")))))};t(56);var k=function(e){return r.a.createElement("div",{className:"BackgroundImage",style:{"--image":"url(".concat(e.image,")"),"--opacity":e.opacity}})};t(57);var C=function(e){var a=e.color,t=e.size,n=e.backgroundImage,c=e.backgroundImageOpacity,l=(e.children,Object(m.a)(e,["color","size","backgroundImage","backgroundImageOpacity","children"]));return r.a.createElement("section",Object.assign({className:"SectionComponent hero section is-block is-relative"+(a?" is-".concat(a):"")+(t?" is-".concat(t):"")},l),n&&r.a.createElement(k,{image:n,opacity:c}),e.children)};t(58);var z=function(e){return r.a.createElement(r.a.Fragment,null,(e.title||e.subtitle)&&r.a.createElement("header",{className:"SectionHeader__header"+(e.centered?" is-centered":"")},e.title&&r.a.createElement("h1",{className:"title is-spaced has-text-weight-bold"+(e.size?" is-".concat(e.size):"")+(1===e.size?" is-size-2-mobile":"")},e.title),e.subtitle&&r.a.createElement("p",{className:"subtitle"+(e.size>4?" is-6":"")},e.subtitle)))};t(59);var j=function(e){var a=e.parentColor,t=e.size,n=e.state,c=e.fullWidth,l=Object(m.a)(e,["parentColor","size","state","fullWidth"]);return r.a.createElement("button",Object.assign({className:"button"+(["primary","info","success","warning","danger","black","dark"].includes(a)?" is-".concat(a," is-inverted"):"")+(["white","light"].includes(a)||!a?" is-primary":"")+(t?" is-".concat(t):"")+(n?" is-".concat(n):"")+(c?" is-fullwidth":"")},l),e.children)};t(60);var _=function(e){return r.a.createElement(C,{color:e.color,size:e.size},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered is-desktop"},r.a.createElement("div",{className:"column"},r.a.createElement("figure",{className:"HeroSection__image image"},r.a.createElement("img",{src:e.image,alt:"mandeeya",class:"is-rounded"}))),r.a.createElement("div",{className:"column is-1"}),r.a.createElement("div",{className:"column is-6-desktop has-text-centered-touch"},r.a.createElement(z,{title:e.title,subtitle:e.subtitle,size:1}),r.a.createElement("a",{href:"#ContactMe"},r.a.createElement(j,{parentColor:e.color,size:"large",onClick:e.buttonOnClick},e.buttonText))))))};t(61);var x=function(e){return r.a.createElement("div",{className:"columns is-centered is-variable is-4 is-multiline"},e.children)};t(62);var O=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null,e.items.map((function(e,a){return r.a.createElement("div",{className:"column has-text-centered",key:a},r.a.createElement("div",{className:"Features__feature"},r.a.createElement("div",{className:"Features__icon icon is-size-1 has-text-".concat(e.iconColor)},r.a.createElement("i",{className:"".concat(e.iconClass)})),r.a.createElement("h1",{className:"title is-4 is-spaced"},e.title),r.a.createElement("h2",{className:"subtitle is-6 has-text-grey-darker"},e.subtitle)))}))))};t(63);var I=function(e){return r.a.createElement(C,{color:e.color,size:e.size},r.a.createElement("div",{className:"container"},r.a.createElement(z,{title:"Day-to-day",centered:!0,size:4,color:"primary"}),r.a.createElement("hr",null),r.a.createElement(O,{items:[{title:"Java",iconClass:"fab fa-java",iconColor:"info"},{title:"C#",iconClass:"fab fa-code",iconColor:"info"},{title:"ReactJS",iconClass:"fab fa-react",iconColor:"success"},{title:"PHP",iconClass:"fab fa-php",iconColor:"info"},{title:"SQL",iconClass:"fas fa-database",iconColor:"danger"},{title:"Javascript",iconClass:"fab fa-js",iconColor:"dark"},{title:"Docker",iconClass:"fab fa-docker",iconColor:"danger"},{title:"Symfony",iconClass:"fab fa-symfony",iconColor:"dark"}]})))};t(64);var P=function(e){return r.a.createElement(C,{color:e.color,size:e.size,backgroundImage:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",backgroundImageOpacity:.2},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns has-text-centered-mobile is-centered has-text-centered"},r.a.createElement("div",{className:"column"},r.a.createElement(z,{title:e.title,subtitle:e.subtitle,size:1}))),r.a.createElement("div",{className:"columns has-text-centered-mobile is-centered has-text-centered"},r.a.createElement("div",{className:"column"},r.a.createElement("a",{href:"#ContactMe"},r.a.createElement(j,{parentColor:"warning",size:"large",onClick:e.buttonOnClick},e.buttonText))))))},T=(t(65),{php:"is-dark",reactjs:"is-primary",laravel:"is-warning",flask:"is-black",python:"is-info",sql:"is-danger",javascript:"is-info",html:"is-info",nodejs:"is-black",expressjs:"is-warning"});var M=function(e){return r.a.createElement("div",{className:"Portfolio columns is-multiline is-centered is-gapless"},e.items.map((function(a,t){return r.a.createElement("div",{className:"Portfolio__column column"+(1===e.columns?" is-full":"")+(2===e.columns?" is-half":"")+(3===e.columns?" is-one-third":"")+(4===e.columns?" is-one-quarter":""),key:t},r.a.createElement("div",{className:"Portfolio__item has-text-centered"},r.a.createElement("figure",{className:"Portfolio__image image"},r.a.createElement("img",{src:a.image,alt:a.title})),r.a.createElement("h1",{className:"title is-4 is-spaced has-text-dark"},a.title),a.tags.map((function(e){return r.a.createElement("code",{className:"tag ".concat(T[e])}," ",e," ")})),r.a.createElement("h2",{className:"subtitle is-6 has-text-dark"},a.body)))})))};t(66);var S=function(e){return r.a.createElement(C,{color:e.color,size:e.size},r.a.createElement("div",{className:"container"},r.a.createElement(z,{title:e.title,subtitle:e.subtitle,centered:!0,size:3}),r.a.createElement("div",{className:"PortfolioSection__box box"},r.a.createElement(M,{columns:2,items:[{title:"hookz.dev",body:"A free online tool for helping developers test/debug web hooks and other types of HTTP requests.",image:"hookz.dev.png",tags:["javascript","nodejs","expressjs","reactjs","sql"]},{title:"Nasara Mobile",body:"A bulk sms and messaging company I started in 2012, which still runs with over 1800 users in Ghana.",image:"nm.png",tags:["php","laravel","javascript","html","css","sql"]},{title:"Formzhook",body:"An open source Web and API service for easily posting form data without coding your own backend to handle form submission. ",image:"https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg",tags:["python","flask","reactjs","sql","scss"]},{title:"Nasara Mobile API",body:"An API for the Nasara Mobile web platform",image:"https://nasaramobile.com/images/nm_api.png",tags:["php","laravel","sql","javascript"]}]}))))};t(67);var q=function(e){return r.a.createElement(C,{color:e.color,size:e.size},r.a.createElement("div",{className:"FooterComponent__container container"},r.a.createElement("div",{className:"brand left"},r.a.createElement(h.a,{to:"/"},r.a.createElement("p",{className:"logoText"},"mandeeya",r.a.createElement("span",{className:"logoTextIO"},".io")))),r.a.createElement("div",{className:"social right"},r.a.createElement("a",{href:"https://www.linkedin.com/in/rasheedayehuza/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("a",{href:"https://www.youtube.com/channel/UCN9IrmDTWBDTC2jgVcFpVoQ",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-youtube"}))),r.a.createElement("a",{href:"https://twitter.com/rasheedayehuza",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-twitter"}))),r.a.createElement("a",{href:"https://facebook.com/yehuza",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-facebook-f"}))),r.a.createElement("a",{href:"https://instagram.com/rashkeed",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-instagram"})))),r.a.createElement("div",{className:"copyright left"},e.copyright)))};t(68),t(69);var F=function(e){return r.a.createElement(C,{color:e.color,size:e.size},r.a.createElement("div",{className:"container"},r.a.createElement(z,{title:"Occasionally",centered:!0,size:4,color:"primary"}),r.a.createElement("hr",null),r.a.createElement(O,{items:[{title:"Python",iconClass:"fab fa-python",iconColor:"info"},{title:"Flask",iconClass:"fas fa-flask",iconColor:"danger"},{title:"Raspberry Pi Tinkering",iconClass:"fab fa-raspberry-pi",iconColor:"primary"},{title:"Laravel",iconClass:"fab fa-laravel",iconColor:"success"}]})))};var W=function(e){return r.a.createElement(C,{color:e.color,size:e.size},r.a.createElement("div",{className:"container"},r.a.createElement(z,{title:e.title,subtitle:e.subtitle,centered:!0,size:3}),r.a.createElement("div",{class:"columns"},r.a.createElement("div",{class:"column"},r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/hlOHQfDSj9c?controls=0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),r.a.createElement("div",{class:"column"},r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ft9YoYO5ydE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),r.a.createElement("div",{class:"column"},r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/c5WqzQhmCJI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))))};t(70);var A=function(e){return r.a.createElement(C,{color:e.color,size:e.size},r.a.createElement("div",{className:"container"},r.a.createElement(z,{title:e.title,subtitle:e.subtitle,centered:!0,size:3}),r.a.createElement("div",{class:"columns is-centered"},r.a.createElement("div",{className:"column is-centered has-text-centered"},"You can send an email to: ",r.a.createElement("strong",null,"hello@mandeeya.io"),". Or connect via my social profiles:")),r.a.createElement("div",{class:"columns"},r.a.createElement("div",{className:"column is-centered has-text-centered"},r.a.createElement("div",{className:"social right"},r.a.createElement("a",{href:"https://www.linkedin.com/in/rasheedayehuza/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("a",{href:"https://www.youtube.com/channel/UCN9IrmDTWBDTC2jgVcFpVoQ",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-youtube"}))),r.a.createElement("a",{href:"https://twitter.com/rasheedayehuza",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-twitter"}))),r.a.createElement("a",{href:"https://facebook.com/yehuza",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-facebook-f"}))),r.a.createElement("a",{href:"https://instagram.com/rashkeed",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-instagram"}))))))))},R=function(e){return r.a.createElement("a",e,e.children)};var D=function(e){return y(),r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{color:"white",spaced:!0,logo:"https://uploads.divjoy.com/logo.svg"}),r.a.createElement(_,{color:"dark",size:"medium",title:"Hi! I'm Mandeeya!",subtitle:"I'm a software engineer and I like learning, building things, playfully strumming my guitar and making tech videos which I put up on my youtube channel.",buttonText:"Let's Connect",image:"me.png"}),r.a.createElement(I,{color:"white",size:"small",title:"Languages I use regualarly",subtitle:""}),r.a.createElement(P,{color:"dark",size:"medium",title:"I like to build new and interesting custom software. Want to bring an idea to life?",buttonText:"Let's Talk"}),r.a.createElement(F,{color:"white",size:"small",title:"Ocassional technologies",subtitle:""}),r.a.createElement(W,{color:"dark",size:"medium",title:"Some videos on Youtube"}),r.a.createElement(S,{color:"white",size:"medium",title:"Projects",subtitle:"some personal projects"}),r.a.createElement(R,{name:"ContactMe"}),r.a.createElement(A,{color:"primary",size:"small",title:"Contact Me",subtitle:""}),r.a.createElement(q,{color:"black",size:"normal",logo:"https://uploads.divjoy.com/logo.svg",copyright:"\xa9 2019 Mandeeya.io"}))},H=t(30),B=(t(72),Object(H.a)({debug:!1,plugins:[]}));"undefined"!==typeof window&&B.page(),b.listen((function(){B.page()}));var J=t(9),L=t.n(J),Q=Object(n.createContext)();function V(e){var a=e.children,t=function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],r=a[1],c=function(e,a){return L.a.signin(e,a).then((function(e){return r(e),e}))},l=function(e,a){return L.a.signup(e,a).then((function(e){return r(e),e}))},i=function(){return L.a.signout().then((function(){r(!1)}))},s=function(e){return L.a.sendPasswordResetEmail(e)},m=function(e,a){var t=a||Y("code");return L.a.confirmPasswordReset(e,t)};return Object(n.useEffect)((function(){var e=L.a.onChange((function(e){r(e)}));return function(){return e()}}),[]),{user:t,signin:c,signup:l,signout:i,sendPasswordResetEmail:s,confirmPasswordReset:m}}();return r.a.createElement(Q.Provider,{value:t},a)}var Y=function(e){return f.a.parse(window.location.search)[e]};t(78);var U=function(e){return r.a.createElement(V,null,r.a.createElement(v,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:D}),r.a.createElement(u.a,{component:function(e){var a=e.location;return r.a.createElement("div",{style:{padding:"50px",width:"100%",textAlign:"center"}},"The page ",r.a.createElement("code",null,a.pathname)," could not be found.")}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[79,1,2]]]);
//# sourceMappingURL=main.6b73b279.chunk.js.map