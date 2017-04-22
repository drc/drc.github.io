Vue.component('detail-row', {
  props: ['optOne'],
  template: "<td class='cell_one'>{{optOne}}</td>"
});

var vm = new Vue({
  el: "#app",
  data: {
    dan: {
      name: "Dan Cigrang",
      city: "Chicago",
      state: "IL",
      country: "United States"
    },
    onlineNow: "data:image/gif;base64,R0lGODlhUAAUAJEDANheDPdyGgCqAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFHgADACwAAAAAUAAUAAACmpyPqcvtD6OctE6Ard4ahA9w4sh4H0impHmG6tudKExTrFvnEYZbgqAL/oaM38A4AR6USaaCl0kgj85lVTK9PqYJ1swKHiqNZKLBbB2fkWXqeuFtIbLAtr2Ody/d+bueexD3pcfXZ1iIdrR26EeIIBjQQ1dI2SgVlven1SUjNyf25tdGxeU0NkkIaADZE+Q6AMXzOktba3trUAAAIfkEBR4AAwAsAwABAA0ACAAAAhLcZGm46sicElGuaqmdWMJ9DAUAIfkECR4AAwAsAQAAABEACgAAAhfcZKmGvO8afEJOVS+1+nCddUkoHqaIFAAh+QQJHgADACwAAAAAUAAUAAACUJxlqbftD6OMaNaJs343gd9020hyCxCkwCKWbtmhqaq0753FM53Y+A/R7VY9oNFymhGLx6aj9VkyndQppYrNarfcrvcLDovH5LL5jE6r14YCACH5BAUoAAMALAAAAABQABQAAAKanI+py+0Po5y0ToCt3hqED3DiyHgfSKaagJhneLDqLLkojVMunPcRxrMIZL7e8MgYDpQT4rLCXAAziWgUcW0SnZHswRYILreso0yJRhrUMebZXY6vuQbwbd4e69N7+dXfFwgndVIYZOWXKGiGNafIN6hgF4ZFtnjp9YTHp9fpMClm9oYpN/bXaJrnmQla5JowBfQ6S1tre2tQAAA7",
    interests: {
      General: "Text text text text"
    }
  },
  computed: {
    age: function() {
      var date = new Date();
      var bday = new Date('12/27/1990');
      var sec = date.getTime() - bday.getTime();
      var years = sec / 1000 / 60 / 60 / 24 / 365;
      return Math.floor(years);
    }
  },
  methods: {

  },
  components: {

  }
});
