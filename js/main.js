var data = {
    counter: 0
}
new Vue({
    el: "#sin",
    data: data,
    methods: {
        increment: function () {
            this.counter += 1;
        }
    }
});
