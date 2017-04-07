new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods:{
            alertMe: function(){
                console.log('test');
                alert('test');
            },
            storeData: function(event){
                this.value = event.target.value;
            }
        }
    });