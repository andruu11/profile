var vm = new Vue({
    el: ".main-app",
    created() {
        setTimeout(() => {
            this.loading = false;
        }, 4000);
    },
    data: {
        message: '200',
        loading: true,
        show: false
    }
});