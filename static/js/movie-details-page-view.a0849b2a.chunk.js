(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{37:function(e,t,a){"use strict";var c=a(43),n=a.n(c);t.a=function(e,t){var a="4f24a465004dec8d1f65f162bb769c3a",c="https://api.themoviedb.org/3";return e?n.a.get("".concat(c,"/search/movie?api_key=").concat(a,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")):t?n.a.get("".concat(c,"/movie/").concat(t,"?api_key=").concat(a,"&").concat("append_to_response=credits,reviews","&language=en-US")):n.a.get("".concat(c,"/trending/movie/week?api_key=").concat(a))}},74:function(e,t,a){e.exports={MovieDetails:"MovieDetailsPageView_MovieDetails__w972_",description:"MovieDetailsPageView_description__cGngn",genres:"MovieDetailsPageView_genres__2ywdv",backBtn:"MovieDetailsPageView_backBtn__2WDeE"}},80:function(e,t,a){"use strict";a.r(t);var c=a(41),n=a.n(c),s=a(12),i=a(42),r=a(35),o=a(36),l=a(40),j=a(39),v=a(0),h=a(9),p=a(2),d=a(37),u=a(7),b=a(74),O=a.n(b),m=a(1),g=Object(v.lazy)((function(){return a.e(1).then(a.bind(null,76))})),x=Object(v.lazy)((function(){return a.e(7).then(a.bind(null,77))})),f=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={title:"",genres:[],overview:"",release_date:"",vote_average:"",poster_path:"",cast:[],reviews:[]},e.handleGoBack=function(){var t=e.props,a=t.history,c=t.location;if(c.state&&c.state.from)return a.push(c.state.from);a.push(u.a.movies)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(n.a.mark((function e(){var t,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,Object(d.a)(!1,t);case 3:a=e.sent,c="https://image.tmdb.org/t/p/w300"+a.data.poster_path,this.setState(Object(s.a)(Object(s.a)({},a.data),{},{poster_path:c,cast:a.data.credits.cast,reviews:a.data.reviews.results}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.title,a=e.release_date,c=e.genres,n=e.poster_path,i=e.overview,r=e.vote_average,o=e.cast,l=e.reviews,j=this.props.movies,d=this.props.match,u=d.url,b=d.path,f=n,w=10*r+"%";return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{className:O.a.backBtn,type:"button",onClick:this.handleGoBack,movies:j,children:"\u041d\u0430\u0437\u0430\u0434"}),t&&Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:O.a.MovieDetails,children:[Object(m.jsx)("img",{src:"".concat(f),alt:"poster ".concat(t)}),Object(m.jsxs)("div",{className:O.a.description,children:[Object(m.jsx)("h1",{children:"".concat(t," (").concat(a?a.slice(0,4):"Coming soon",")")}),r?Object(m.jsx)("p",{children:"User score: ".concat(w)}):"",i&&Object(m.jsx)("h3",{children:"Overview"}),Object(m.jsx)("p",{children:i}),Object(m.jsx)("h4",{children:"Genres"}),Object(m.jsx)("ul",{className:O.a.genres,children:c.map((function(e){var t=e.id,a=e.name;return Object(m.jsx)("li",{children:a},t)}))})]})]}),Object(m.jsx)("hr",{}),Object(m.jsx)("p",{children:"Addidition information"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(h.c,{to:"".concat(u,"/cast"),className:"NavLink",activeClassName:"NavLink--active",children:"Cast"})}),Object(m.jsx)("li",{children:Object(m.jsx)(h.c,{to:"".concat(u,"/reviews"),className:"NavLink",activeClassName:"NavLink--active",children:"Reviews"})})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)(v.Suspense,{children:[Object(m.jsx)(p.a,{path:"".concat(b,"/cast"),render:function(e){return Object(m.jsx)(g,Object(s.a)(Object(s.a)({},e),{},{cast:o}))}}),Object(m.jsx)(p.a,{path:"".concat(b,"/reviews"),render:function(e){return Object(m.jsx)(x,Object(s.a)(Object(s.a)({},e),{},{reviews:l}))}})]})]})]})}}]),a}(v.Component);t.default=f}}]);
//# sourceMappingURL=movie-details-page-view.a0849b2a.chunk.js.map