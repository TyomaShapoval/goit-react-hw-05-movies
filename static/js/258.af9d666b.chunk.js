"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[258],{306:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(689),a=r(87),i="MovieItem_titleText__6L-E5",s=r(184),o=function(e){var t=e.id,r=e.title,o=e.img,c=(0,n.TH)(),u=o?"https://image.tmdb.org/t/p/w400/".concat(o):"https://via.placeholder.com/400x600.png?text=Poster+Not+Available";return(0,s.jsxs)(a.rU,{to:"/movies/".concat(t),state:{from:c},children:[(0,s.jsx)("img",{style:{width:"300px"},src:u,alt:"POSTER"}),(0,s.jsx)("p",{className:i,children:r})]})}},258:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(791),a=r(281),i=r(861),s=r(439),o=r(757),c=r.n(o),u=r(87),l=r(686),h=r.n(l),m=r(243),d=r(306),_={searchbar:"Searchbar_searchbar__meXwA",form:"Searchbar_form__+7KlB",button:"Searchbar_button__beu6S",input:"Searchbar_input__Arnij"},f=r(716),p=r(184),v=function(){var e=(0,n.useState)([]),t=(0,s.Z)(e,2),r=t[0],a=t[1],o=(0,u.lr)(),l=(0,s.Z)(o,2),v=l[0],g=l[1];(0,n.useEffect)((function(){var e,t=null!==(e=v.get("query"))&&void 0!==e?e:"";if(t){var r=function(){var e=(0,i.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("d6e689e53b61040192ebd16d8765557a","&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:r=e.sent,0===(n=r.data.results).length?(h().Notify.warning("No movies found"),a([])):a(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),h().Notify.failure(e.t0.message),a([]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();r()}}),[v]);return(0,p.jsxs)("section",{className:_.searchbar,children:[(0,p.jsxs)("form",{className:_.form,onSubmit:function(e){var t=e.target.elements.query.value;e.preventDefault(),t?(g({query:t}),e.target.reset()):h().Notify.failure("Please enter something")},children:[(0,p.jsx)("button",{type:"submit",className:_.button,children:(0,p.jsx)("span",{className:_.buttonLabel,children:"Search"})}),(0,p.jsx)("input",{className:_.input,name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]}),(0,p.jsx)("ul",{className:f.Z.unordered,children:r.map((function(e){return(0,p.jsx)("li",{className:f.Z.movieList,children:(0,p.jsx)(d.Z,{id:e.id,title:e.title,img:e.poster_path})},e.id)}))})]})},g=function(){return(0,p.jsxs)(n.Fragment,{children:[(0,p.jsx)(a.Z,{}),(0,p.jsx)(v,{})]})}},716:function(e,t){t.Z={movieList:"Trending_movieList__I54A-",hero:"Trending_hero__5xgI3",heroTitle:"Trending_heroTitle__oOShk",unordered:"Trending_unordered__PIwbZ"}}}]);
//# sourceMappingURL=258.af9d666b.chunk.js.map