var app =new Vue({
    el: '#app',
    data: {
        message: 'Hello World!',
        link: 'http://google.com/',
    },
    methods: {
        change : function () {
            this.message = 'You can change the link thanks to the consol and type: app.link="your link here"';
        }
    }
})

var app2 = new Vue({
    el: '#app-2',
    data:{
        seen: true,
        success: "If you see this success alert, everything is fine! Click on this alert to close it.",
    },
    methods: {
        close: function () {
            this.seen = false;
        }
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Creating something awesome!' }
      ]
    }
  })

  var app4 = new Vue({
    el: '#app-4',
    data: {
      message:"Here, you can write anything you want.",
      open:true
    }, methods: {
        close: function () {
            this.message = "Fermé";
            this.open = false;
        }
    }
  })

