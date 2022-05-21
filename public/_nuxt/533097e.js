(window.webpackJsonp=window.webpackJsonp||[]).push([[17,5,7,8,10,11,12],{287:function(t,e,r){"use strict";r.r(e);var n={name:"ErrorModal",props:{message:{type:String,default:""}}},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex p-4 mb-4 bg-red-100 border-t-4 border-red-500 dark:bg-red-200 mt-2",attrs:{id:"alert-border-2"}},[r("svg",{staticClass:"flex-shrink-0 w-5 h-5 text-red-700",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clip-rule":"evenodd"}})]),t._v(" "),r("div",{staticClass:"ml-3 text-sm font-medium text-red-700"},[t._v("\n    "+t._s(t.message)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(29),{methods:{SignOut:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fire.auth.signOut();case 2:"/"===t.$route.path?location.reload():t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}}}),l=r(47),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none",attrs:{type:"button"},on:{click:t.SignOut}},[t._v("\n  Logout\n")])}),[],!1,null,null,null);e.default=component.exports},293:function(t,e,r){"use strict";r.r(e);var n={name:"SuccessAlert"},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800",attrs:{role:"alert"}},[r("span",{staticClass:"font-medium"},[t._v("Success alert!")]),t._v(" Try refreshing your page :)\n")])}],!1,null,null,null);e.default=component.exports},294:function(t,e,r){"use strict";var n=r(291);r.d(e,"a",(function(){return n.y})),r.d(e,"b",(function(){return n.E})),r.d(e,"c",(function(){return n.M})),r.d(e,"d",(function(){return n.P})),r.d(e,"e",(function(){return n.fb})),r.d(e,"f",(function(){return n.kb}))},295:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,default:""},author:{type:String,default:""},docid:{type:String,default:""},content:{type:String,default:""}}},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-36 rounded-lg"},[r("h5",{staticClass:"mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),r("label",{staticClass:"bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded "},[t._v(t._s(t.author))]),t._v(" "),r("div",{staticClass:"mt-4 text-l font-normal text-gray-700 truncate h-6"},[t._v("\n    "+t._s(t.content)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},296:function(t,e,r){"use strict";r.r(e);var n={name:"ReadMore"},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a",{staticClass:"inline-flex items-center py-1 px-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300",attrs:{href:"#"}},[t._v("\n    Read more\n    "),r("svg",{staticClass:"ml-2 -mr-1 w-4 h-4",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])}),[],!1,null,null,null);e.default=component.exports},298:function(t,e,r){"use strict";var n=r(3),o=r(79).find,l=r(137),c="find",d=!0;c in[]&&Array(1).find((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},299:function(t,e,r){var n=r(3),o=r(195).values;n({target:"Object",stat:!0},{values:function(t){return o(t)}})},301:function(t,e,r){"use strict";r.r(e);var n={name:"CreateBlog",data:function(){return{title:"",content:""}},methods:{emitBlogData:function(){this.$emit("getBlogData",{title:this.title,content:this.content}),this.title="",this.content=""}}},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overflow-y-auto overflow-x-hidden bg-gray-400/50 fixed top-0 right-0 left-0 z-10 md:inset-0 w-screen h-screen flex items-center justify-center"},[r("div",{staticClass:"relative p-4 w-full max-w-2xl h-full md:h-auto"},[r("div",{staticClass:"relative bg-white rounded-lg shadow"},[r("div",{staticClass:"flex justify-between items-start p-4 rounded-t border-b"},[r("h3",{staticClass:"text-xl font-semibold text-gray-900"},[t._v("Create a blog")]),t._v(" "),r("button",{staticClass:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center",attrs:{type:"button"},on:{click:function(e){return t.$emit("close")}}},[r("svg",{staticClass:"w-5 h-5",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.emitBlogData.apply(null,arguments)}}},[r("div",{staticClass:"p-6 space-y-6"},[r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900",attrs:{for:"title"}},[t._v("Title")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),r("div",[r("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900",attrs:{for:"content"}},[t._v("Content")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500",attrs:{rows:"4",placeholder:"Enter content..."},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])]),t._v(" "),t._m(0)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center p-6 space-x-2 rounded-b border-t border-gray-200"},[r("button",{staticClass:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",attrs:{type:"submit"}},[t._v("\n            Create\n          ")])])}],!1,null,null,null);e.default=component.exports},303:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},306:function(t,e,r){"use strict";var n=r(3),o=r(307).trim;n({target:"String",proto:!0,forced:r(308)("trim")},{trim:function(){return o(this)}})},307:function(t,e,r){var n=r(5),o=r(25),l=r(14),c=r(303),d=n("".replace),f="["+c+"]",m=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),x=function(t){return function(e){var r=l(o(e));return 1&t&&(r=d(r,m,"")),2&t&&(r=d(r,v,"")),r}};t.exports={start:x(1),end:x(2),trim:x(3)}},308:function(t,e,r){var n=r(82).PROPER,o=r(4),l=r(303);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||n&&l[t].name!==t}))}},318:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(29),r(12),r(84),r(34),r(77),r(40),r(298),r(299),r(306),r(80),r(81),r(78),r(294)),l=r(290),c=r(301),d=r(287),f=r(293),m={name:"WriterHome",components:{LogoutBtn:l.default,CreateBlog:c.default,ErrorMessage:d.default,SuccessAlert:f.default},middleware:function(t){t.store;var e=t.redirect;if(!t.app.$fire.auth.currentUser)return e("/loginPage")},data:function(){return{query:"",author:"",loading:!0,isError:"",success:!1,openModal:!1,isLoggedIn:"",posts:[],date:(new Date).toDateString().toString()}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=t.$fire.auth.currentUser)&&(t.isLoggedIn=!0,t.userName=r.displayName),n=[],e.prev=3,e.next=6,Object(o.d)(Object(o.a)(t.$fire.firestore,"blogs"));case 6:e.sent.forEach((function(e){e.data().author===t.userName&&n.push({id:e.id,blog:e.data()})})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t.isError=e.t0;case 13:t.loading=!1,t.posts=[].concat(n);case 15:case"end":return e.stop()}}),e,null,[[3,10]])})))()},methods:{filterBlogs:function(data){var t=this;return data.filter((function(data){return Object.values(data.blog).find((function(e,r){var text=e.trim().toLowerCase(),n=t.query.trim().toLowerCase();return text.includes(n)}))}))},createBlog:function(data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={title:data.title,author:t.userName,date:t.date,content:data.content},e.prev=1,e.next=4,Object(o.e)(Object(o.b)(t.$fire.firestore,"blogs",data.title),r);case 4:t.success=!0,setTimeout((function(){t.success=!1}),3e3),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.isError=e.t0+".Please refresh the page";case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},showModal:function(){this.openModal=!0},closeModal:function(){this.openModal=!1}}},v=r(47),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("div",{staticClass:"w-screen min-h-screen flex flex-col items-center bg-slate-100 relative"},[t.success?r("div",{staticClass:"fixed top-5 z-100"},[r("SuccessAlert")],1):t._e(),t._v(" "),r("nav",{staticClass:"bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded w-screen mb-5"},[r("div",{staticClass:"container flex flex-wrap justify-between items-center mx-auto"},[r("div",{staticClass:"justify-between items-center flex w-auto"},[r("ul",{staticClass:"flex mt-4 flex-row space-x-8 mt-0 text-sm font-medium"},[r("NuxtLink",{attrs:{to:"/"}},[r("li",{staticClass:"block rounded bg-transparent text-blue-700 p-0"},[t._v("\n                Home\n              ")])])],1)]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control block w-2/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0",attrs:{type:"search",placeholder:"Seach for a blog..."},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),r("div",{staticClass:"flex flex-row items-center justify-center"},[t.isLoggedIn?r("p",{staticClass:"font-medium mr-2"},[t._v("Logged in as: "+t._s(t.userName))]):t._e(),t._v(" "),r("LogoutBtn")],1)])]),t._v(" "),r("section",{staticClass:"flex flex-col items-center justify-center items-center w-screen"},[t.openModal?r("CreateBlog",{on:{close:t.closeModal,getBlogData:t.createBlog}}):t._e(),t._v(" "),r("div",[r("button",{staticClass:"focus:outline-none text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",attrs:{type:"button"},on:{click:t.showModal}},[t._v("\n          Create new blog\n        ")])]),t._v(" "),t.loading&&!t.isError?r("div",[r("svg",{staticClass:"inline w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-500 mt-8",attrs:{role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),t._v(" "),r("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})])]):t._e(),t._v(" "),t.isError?r("div",[r("ErrorMessage",{attrs:{message:t.isError}})],1):t._e(),t._v(" "),t.loading||t.isError?t._e():r("div",{staticClass:"flex flex-row flex-wrap items-center justify-center w-full"},t._l(t.filterBlogs(t.posts),(function(e){return r("div",{key:e.id,staticClass:"p-6 w-1/4 bg-white rounded-xl gborder-gray-200 shadow-md m-3"},[r("PostCard",{key:e.id,attrs:{title:e.blog.title,author:e.blog.author,content:e.blog.content}}),t._v(" "),r("NuxtLink",{attrs:{to:"/posts/"+e.id}},[r("Readmore")],1)],1)})),0)],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SuccessAlert:r(293).default,LogoutBtn:r(290).default,CreateBlog:r(301).default,ErrorMessage:r(287).default,PostCard:r(295).default,Readmore:r(296).default})}}]);