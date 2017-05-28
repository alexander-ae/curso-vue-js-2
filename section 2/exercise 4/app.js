new Vue({
  el: '#exercise',
  data: {
    startClass: true,
    startProgress: true,
    userClass: ''
  },
  methods: {
    startEffect: function() {
        var vm = this;
        setInterval(function(){
            vm.startClass = !vm.startClass
        }, 800)
    },
    startProgress: function(){
      var vm = this;
      var w = 0;
        setInterval(function(){
            vm.progress.w = !vm.startClass
        }, 800)
    }
  },

  computed: {
    'effectClass': function(){
      return {
        "highlight": this.startClass,
        "shrink": !this.startClass
      }
    }
  }
});
