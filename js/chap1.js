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

var app3 = new Vue({
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

var app4 = new Vue({
    el: '#app-3',
    data: {
      todos: [
        { text: 'Apprendre JavaScript' },
        { text: 'Apprendre Vue' },
        { text: 'Créer quelque chose de génial' }
      ]
    }
  })

