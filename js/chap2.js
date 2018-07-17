let vm = new Vue({
    el: '#app',
    data: {
        seconds : 0,
        message : "Go to the console and type vm.$destroy() to stop the timer!"
    },

    mounted: function(){
        this.$interval = setInterval(() => { //this.$ is just to differenciate data and mounted function (only the mounted function will be affected)
            console.log('Time');
            this.seconds++
        }, 100)
    },
    destroyed: function() {
        clearInterval(this.$interval)
    },
})