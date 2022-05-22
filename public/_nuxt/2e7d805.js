(window.webpackJsonp=window.webpackJsonp||[]).push([[14,8,10,11],{290:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(29),{methods:{SignOut:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fire.auth.signOut();case 2:"/"===t.$route.path?location.reload():t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}}}),l=n(47),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none",attrs:{type:"button"},on:{click:t.SignOut}},[t._v("\n  Logout\n")])}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,n){"use strict";var r=n(291);n.d(e,"a",(function(){return r.y})),n.d(e,"b",(function(){return r.E})),n.d(e,"c",(function(){return r.M})),n.d(e,"d",(function(){return r.P})),n.d(e,"e",(function(){return r.fb})),n.d(e,"f",(function(){return r.kb}))},295:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,default:""},author:{type:String,default:""},docid:{type:String,default:""},content:{type:String,default:""}}},o=n(47),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-36 rounded-lg"},[n("h5",{staticClass:"mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("label",{staticClass:"bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded "},[t._v(t._s(t.author))]),t._v(" "),n("p",{staticClass:"mt-4 text-l font-normal text-gray-700 truncate h-6"},[t._v("\n    "+t._s(t.content)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},296:function(t,e,n){"use strict";n.r(e);var r={name:"ReadMore"},o=n(47),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{staticClass:"inline-flex items-center py-1 px-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300",attrs:{href:"#"}},[t._v("\n    Read more\n    "),n("svg",{staticClass:"ml-2 -mr-1 w-4 h-4",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])}),[],!1,null,null,null);e.default=component.exports},298:function(t,e,n){"use strict";var r=n(3),o=n(79).find,l=n(137),c="find",d=!0;c in[]&&Array(1).find((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},299:function(t,e,n){var r=n(3),o=n(195).values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},319:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(29),n(12),n(34),n(77),n(40),n(298),n(299),n(30),n(83),n(80),n(81),n(294)),l=n(290),c=n(295),d=n(296),f={name:"IndexPage",components:{PostCard:c.default,Readmore:d.default,LogoutBtn:l.default},data:function(){return{query:"",isLoggedIn:"",isError:"",userName:"",posts:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t.$fire.auth.currentUser)&&(t.isLoggedIn=!0,t.userName=n.displayName),r=[],e.prev=3,e.next=6,Object(o.d)(Object(o.a)(t.$fire.firestore,"blogs"));case 6:e.sent.forEach((function(t){r.push({id:t.id,blog:t.data()})})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t.isError=e.t0;case 13:t.loading=!1,t.posts=[].concat(r);case 15:case"end":return e.stop()}}),e,null,[[3,10]])})))()},methods:{filterBlogs:function(data){var t=this;return data.filter((function(data){return Object.values(data.blog).find((function(e,n){var text=e.replace(/\s/g,"").toLowerCase(),r=t.query.replace(/\s/g,"").toLowerCase();return text.includes(r)}))}))}}},m=n(47),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("div",{staticClass:"w-screen h-screen flex flex-col items-center bg-slate-100"},[n("nav",{staticClass:"bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded w-screen mb-5"},[n("div",{staticClass:"container flex flex-wrap justify-between items-center mx-auto"},[n("div",{staticClass:"justify-between items-center flex w-auto"},[n("ul",{staticClass:"flex mt-4 flex-row space-x-8 mt-0 text-sm font-medium"},[n("NuxtLink",{attrs:{to:"/"}},[n("li",{staticClass:"block rounded bg-transparent text-blue-700 p-0"},[t._v("\n                Home\n              ")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/protected"}},[t.isLoggedIn?n("li",{staticClass:"block rounded bg-transparent text-blue-700 p-0"},[t._v("\n                Dashboard\n              ")]):t._e()])],1)]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control w-2/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{type:"search",placeholder:"Seach for a blog..."},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),n("div",[n("NuxtLink",{attrs:{to:"/loginPage"}},[t.isLoggedIn?t._e():n("button",{staticClass:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none",attrs:{type:"button"}},[t._v("\n              Login\n            ")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/registerPage"}},[t.isLoggedIn?t._e():n("button",{staticClass:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none",attrs:{type:"button"}},[t._v("\n              Register\n            ")])]),t._v(" "),t.isLoggedIn?n("div",{staticClass:"flex flex-row items-center justify-center"},[n("p",{staticClass:"font-medium mr-2"},[t._v("Logged in as: "+t._s(t.userName))]),t._v(" "),n("LogoutBtn")],1):t._e()],1)])]),t._v(" "),n("section",{staticClass:"flex flex-col items-center justify-center items-center w-screen"},[n("div",{staticClass:"flex flex-row flex-wrap w-full items-center justify-center"},t._l(t.filterBlogs(t.posts),(function(e){return n("div",{key:e.id,staticClass:"p-6 w-1/4 bg-white rounded-xl gborder-gray-200 shadow-md m-3"},[n("PostCard",{key:e.id,attrs:{title:e.blog.title,author:e.blog.author,content:e.blog.content}}),t._v(" "),n("NuxtLink",{attrs:{to:"/posts/"+e.id}},[n("Readmore")],1)],1)})),0)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LogoutBtn:n(290).default,PostCard:n(295).default,Readmore:n(296).default})}}]);