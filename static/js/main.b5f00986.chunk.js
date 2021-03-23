(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{18:function(e,t,a){e.exports={AppBar:"App_AppBar__3bK5z",NavLink:"App_NavLink__PAYqw",active:"App_active__2_IIg"}},20:function(e,t,a){e.exports={cast:"Cast_cast__2YBpA",castItem:"Cast_castItem__3gBGL",pic:"Cast_pic__3iC9w"}},21:function(e,t,a){e.exports={MovieDetails:"MovieDetailsPageView_MovieDetails__1mE28",description:"MovieDetailsPageView_description___9Pqn",genres:"MovieDetailsPageView_genres__3XfqN"}},40:function(e,t,a){e.exports={NavLink:"base_NavLink__1yH4x","NavLink--active":"base_NavLink--active__2er8W"}},69:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(8),r=a(34),i=a.n(r),o=(a(40),a(4)),j=a(2),l=a(14),u=a.n(l),h=a(16),p=a(10),v=a(11),d=a(13),b=a(12),O=a(17),m=a.n(O),x=a(0),f=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movies:[]},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t,a,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.API,c=t.fetch,e.next=3,m.a.get("".concat(c,"/trending/movie/week?api_key=").concat(a));case 3:n=e.sent,this.setState({movies:n.data.results});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movies,t=this.props.match.url;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsx)("h1",{children:"HomePage"}),Object(x.jsx)("ul",{className:"",children:e.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)(s.b,{to:"".concat(t,"movies/").concat(e.id),children:e.title})},e.id)}))})]})})}}]),a}(c.Component),g=function(e){var t=e.movies,a=e.url;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{children:"SearchMovies"}),Object(x.jsx)("ul",{className:"",children:t.map((function(e){var t=e.id,c=e.title;return Object(x.jsx)("li",{children:Object(x.jsx)(s.b,{to:"".concat(a,"/").concat(t),children:c})},t)}))})]})},_=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={formValue:"",searchFilms:"",movies:[],status:"idle"},e.handleChange=function(t){var a=t.currentTarget.value;e.setState({formValue:a.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.formValue;e.setState({searchFilms:a,status:"pending"})},e}return Object(v.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t,a,c,n,s,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,a=t.API,c=t.fetch,n=this.state,s=n.searchFilms,"pending"!==n.status){e.next=8;break}return e.next=5,m.a.get("".concat(c,"/search/movie?api_key=").concat(a,"&language=en-US&query=").concat(s,"&page=1&include_adult=false"));case 5:r=e.sent,console.log(r.data.results),this.setState({movies:r.data.results,status:"resolved"});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movies,t=this.props.match.url;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsxs)("form",{className:"code",onSubmit:this.handleSubmit,children:[Object(x.jsx)("input",{type:"text",name:"name",value:this.state.formValue,onChange:this.handleChange}),Object(x.jsx)("button",{type:"submit",children:"Search"})]})}),Object(x.jsx)(g,{movies:e,url:t})]})}}]),a}(c.Component),w=a(20),N=a.n(w),k=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){var e=this.props.cast;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:"Cast"}),Object(x.jsx)("ul",{className:N.a.cast,children:e.map((function(e){var t=e.id,a=e.original_name,c=e.profile_path;return Object(x.jsxs)("li",{className:N.a.castItem,children:[Object(x.jsx)("img",{className:N.a.pic,src:"https://image.tmdb.org/t/p/w200".concat(c),alt:""}),Object(x.jsx)("p",{children:a})]},t)}))})]})}}]),a}(c.Component),y=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){var e=this.props.reviews;return Object(x.jsxs)(x.Fragment,{children:[e&&"We don't have any reviews for this movie",Object(x.jsx)("ul",{children:e.map((function(e){var t=e.id,a=e.author,c=e.content;return Object(x.jsxs)("li",{children:[Object(x.jsx)("h3",{children:"Author: ".concat(a)}),Object(x.jsx)("p",{children:c})]},t)}))})]})}}]),a}(c.Component),A=a(21),C=a.n(A),I=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={title:null,genres:[],overview:null,release_date:"",vote_average:null,poster_path:"",cast:[],reviews:[]},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t,a,c,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.API,c=t.fetch,n=this.props.match.params.movieId,e.next=4,m.a.get("".concat(c,"/movie/").concat(n,"?api_key=").concat(a,"&").concat("append_to_response=credits,reviews","&language=en-US"));case 4:s=e.sent,this.setState(Object(o.a)(Object(o.a)({},s.data),{},{poster_path:"https://image.tmdb.org/t/p/w300"+s.data.poster_path,cast:s.data.credits.cast,reviews:s.data.reviews.results}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.title,a=e.release_date,c=e.genres,n=e.poster_path,r=e.overview,i=e.vote_average,l=e.cast,u=e.reviews,h=this.props.match.url,p=n,v=10*i+"%";return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:C.a.MovieDetails,children:[Object(x.jsx)("img",{src:"".concat(p),alt:"poster ".concat(t)}),Object(x.jsxs)("div",{className:C.a.description,children:[Object(x.jsx)("h1",{children:"".concat(t," (").concat(a.slice(0,4),")")}),Object(x.jsx)("p",{children:"User score: ".concat(v)}),Object(x.jsx)("h3",{children:"Overview"}),Object(x.jsx)("p",{children:r}),Object(x.jsx)("h4",{children:"Genres"}),Object(x.jsx)("ul",{className:C.a.genres,children:c.map((function(e){return Object(x.jsx)("li",{children:e.name},e.id)}))})]})]}),Object(x.jsx)("hr",{}),Object(x.jsx)("p",{children:"Addidition information"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(s.c,{to:"".concat(h,"/cast"),className:"NavLink",activeClassName:"NavLink--active",children:"Cast"})}),Object(x.jsx)("li",{children:Object(x.jsx)(s.c,{to:"".concat(h,"/reviews"),className:"NavLink",activeClassName:"NavLink--active",children:"Reviews"})})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{path:"/movies/:movieId/cast",render:function(e){return Object(x.jsx)(k,Object(o.a)(Object(o.a)({},e),{},{cast:l}))}}),Object(x.jsx)(j.a,{path:"/movies/:movieId/reviews",render:function(e){return Object(x.jsx)(y,Object(o.a)(Object(o.a)({},e),{},{reviews:u}))}})]})]})}}]),a}(c.Component),L=function(){return Object(x.jsx)("h1",{children:"Sorry, but this page not found"})},S=a(18),P=a.n(S),M="4f24a465004dec8d1f65f162bb769c3a",D="https://api.themoviedb.org/3",F=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("ul",{className:P.a.AppBar,children:[Object(x.jsx)("li",{children:Object(x.jsx)(s.c,{exact:!0,to:"/",className:P.a.NavLink,activeClassName:P.a.active,children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)(s.c,{to:"/movies",className:P.a.NavLink,activeClassName:P.a.active,children:"Movies"})})]}),Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{exact:!0,path:"/",render:function(e){return Object(x.jsx)(f,Object(o.a)(Object(o.a)({},e),{},{API:M,fetch:D}))}}),Object(x.jsx)(j.a,{exact:!0,path:"/movies",render:function(e){return Object(x.jsx)(_,Object(o.a)(Object(o.a)({},e),{},{API:M,fetch:D}))}}),Object(x.jsx)(j.a,{path:"/movies/:movieId",render:function(e){return Object(x.jsx)(I,Object(o.a)(Object(o.a)({},e),{},{API:M,fetch:D}))}}),Object(x.jsx)(j.a,{component:L})]})]})};i.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(s.a,{children:Object(x.jsx)(F,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.b5f00986.chunk.js.map