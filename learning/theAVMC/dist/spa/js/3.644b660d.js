(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"04b7":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"relative-position"},[a("q-scroll-area",{staticClass:"absolute full-width full-height"},[a("div",{staticClass:"q-pa-lg row items-end q-col-gutter-md"},[a("div",{staticClass:"col"},[a("q-input",{staticClass:"new-post",attrs:{"bottom-slots":"",autogrow:"",label:"What's poppin'?",counter:"",maxlength:"280"},scopedSlots:e._u([{key:"before",fn:function(){return[a("q-avatar",{attrs:{size:"xl"}},[a("img",{attrs:{src:"https://playavmcgames.ml/servermc.png"}})])]},proxy:!0},{key:"hint",fn:function(){return[e._v("\n        Post | AVMC\n      ")]},proxy:!0}]),model:{value:e.newQweetInput,callback:function(t){e.newQweetInput=t},expression:"newQweetInput"}})],1),a("div",{staticClass:"col col-shrink"},[a("q-btn",{staticClass:"q-mb-lg",attrs:{disable:!e.newQweetInput,push:"",color:"primary",rounded:"",label:"post"},on:{click:e.addNewQweet}})],1)]),a("q-separator",{staticClass:"divider",attrs:{size:"9px",color:"grey-3"}}),a("q-list",{attrs:{separator:""}},[a("transition-group",{attrs:{appear:"","enter-active-class":"animated fadeIn slow","leave-active-class":"animated fadeOut slow"}},e._l(e.qweets,(function(t){return a("q-item",{key:t.id,staticClass:"qweet q-py-md"},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-avatar",[a("img",{attrs:{src:"https://playavmcgames.ml/servermc.png"}})])],1),a("q-item-section",[a("q-item-label",{staticClass:"text-subtitle1"},[a("strong",[e._v("AvIsBeastMC | AVMC Network")]),a("span",{staticClass:"text-grey-7"},[e._v(" @arunnyavarma "),a("br",{staticClass:"lt-md"}),e._v(" • "+e._s(e._f("relativeDate")(t.date))+" ")])]),a("q-item-label",{staticClass:"theAVMC-content text-body1"},[e._v(" "+e._s(t.content)+" ")]),a("div",{staticClass:"row justify-between q-mt-sm qweet-icons"},[a("q-btn",{attrs:{flat:"",size:"sm",round:"",color:"primary",icon:"far fa-comment"}}),a("q-btn",{attrs:{flat:"",size:"sm",round:"",color:"primary",icon:"fas fa-retweet"}}),a("q-btn",{attrs:{flat:"",size:"sm",icon:t.liked?"fas fa-heart":"far fa-heart",round:"",color:"primary"},on:{click:function(a){return e.toggleLiked(t)}}}),a("q-btn",{attrs:{flat:"",size:"sm",round:"",color:"primary",icon:"fas fa-trash"},on:{click:function(a){return e.deleteQweet(t)}}})],1)],1)],1)})),1)],1)],1)],1)},o=[],n=a("fc1b"),r=a("1556"),i={name:"PageHome",data(){return{newQweetInput:"",qweets:[]}},methods:{addNewQweet(){let e={content:this.newQweetInput,date:Date.now(),liked:!1};n["a"].collection("qweets").add(e).then((e=>{console.log("Document written with ID: ",e.id)})).catch((e=>{console.error("Error adding document: ",e)})),this.newQweetInput=""},deleteQweet(e){n["a"].collection("qweets").doc(e.id).delete().then((()=>{console.log("Document successfully deleted!")})).catch((e=>{console.error("Error removing document: ",e)}))},toggleLiked(e){n["a"].collection("qweets").doc(e.id).update({liked:!e.liked}).then((()=>{console.log("Document successfully updated!")})).catch((e=>{console.error("Error updating document: ",e)}))}},filters:{relativeDate(e){return Object(r["a"])(e,new Date)}},mounted(){n["a"].collection("qweets").orderBy("date").onSnapshot((e=>{e.docChanges().forEach((e=>{let t=e.doc.data();if(t.id=e.doc.id,"added"===e.type&&(console.log("New Qweet: ",t),this.qweets.unshift(t)),"modified"===e.type){console.log("Modified Qweet: ",t);let e=this.qweets.findIndex((e=>e.id===t.id));Object.assign(this.qweets[e],t)}if("removed"===e.type){console.log("Removed Qweet: ",t);let e=this.qweets.findIndex((e=>e.id===t.id));this.qweets.splice(e,1)}}))}))}},l=i,c=(a("83f0"),a("2877")),d=a("9989"),u=a("4983"),m=a("27f9"),p=a("cb32"),w=a("9c40"),f=a("eb85"),h=a("1c1c"),q=a("66e5"),g=a("4074"),b=a("0170"),v=a("eebe"),y=a.n(v),Q=Object(c["a"])(l,s,o,!1,null,null,null);t["default"]=Q.exports;y()(Q,"components",{QPage:d["a"],QScrollArea:u["a"],QInput:m["a"],QAvatar:p["a"],QBtn:w["a"],QSeparator:f["a"],QList:h["a"],QItem:q["a"],QItemSection:g["a"],QItemLabel:b["a"]})},"83f0":function(e,t,a){"use strict";a("b470")},b470:function(e,t,a){}}]);