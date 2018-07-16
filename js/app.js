var app =new Vue({
    el: '#app',
    data: {
        message: 'Hello World!',
        link: 'http://google.com/',
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data:{
        seen: true,
        success: "Vous me voyez!",
        fail: "Vous ne me voyez plus!"
    },
    methods: {
        close: function () {
            this.seen = false;
        }
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Apprendre JavaScript' },
        { text: 'Apprendre Vue' },
        { text: 'Créer quelque chose de génial' }
      ]
    }
  })