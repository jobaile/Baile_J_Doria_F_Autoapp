(()=> {
const app = new Vue({
    el: '#app',
    data: {
     navItems: [

         {text: "Home", link: "#home"},
         {text:"Overview", link: "#overview"},
         {text:"Design", link: "#design"},
         {text:"Specifications", link: "#specifics"},

       ]
   }, 

   mounted : function() {
       // listen for when Vue is done building itself 
       console.log('mounted');

   },

   updated : function() {
       // listen for when Vue completes its render cycle
       console.log('updated');

   },
   methods : {

    playVideo: function(event){
        // `this` inside methods points to the Vue instance
        // `event` is the native DOM event
        console.log('playVideo working!')

     },

     showColor: function(event){
        // `this` inside methods points to the Vue instance
        // `event` is the native DOM event
        console.log('showColor working!')

     },

     showSpec: function(event){
        // `this` inside methods points to the Vue instance
        // `event` is the native DOM event
        console.log('showSpec working!')

     }

   }
 });