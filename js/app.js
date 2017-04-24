Vue.component('attribute-table', {
  template: "<table id='interest'><tr><td colspan='2' class='head'>{{title}}</td></tr><attribute-row v-for='i in dataRow' v-bind:key='i.title' v-bind:opt-one='i.data' v-bind:opt-two='i.title'></attribute-row></table>",
  props: ["title", "dataRow"]
});

Vue.component('attribute-row', {
  template: "<tr><td class='cell_one'>{{optTwo}}</td><td class = 'cell_two'>{{optOne}}</td></tr>",
  props: [
    'optOne', "optTwo"
  ]
});

Vue.component('contact-table', {
  template: "",
  props: [
    'optOne', "optTwo"
  ]
});

var vm = new Vue({
  el: "#app",
  data: {
    dan: {
      name: "Dan Cigrang",
      city: "Chicago",
      state: "IL",
      country: "United States",
      profileImage: "http://www.gravatar.com/avatar/1cbb6b96b0ae87552bd8041a3740d93a.png?s=200"
    },
    contact: [{
        title: "Send Message",
        href: "mailto:danielcigrang@me.com"
      },
      {
        title: "Forward to a Friend",
        href: "#"
      },
      {
        title: "Add to Friends",
        href: "https://twitter.com/danc1ng_ra1n"
      },
      {
        title: "Add to Favorites",
        href: "#"
      },
      {
        title: "IM / Call",
        href: "tel:"
      },
      {
        title: "Block User",
        href: "#"
      },
      {
        title: "Add to Group",
        href: "#"
      },
      {
        title: "Rank User",
        href: "#"
      }
    ],
    onlineNow: "data:image/gif;base64,R0lGODlhUAAUAJEDANheDPdyGgCqAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFHgADACwAAAAAUAAUAAACmpyPqcvtD6OctE6Ard4ahA9w4sh4H0impHmG6tudKExTrFvnEYZbgqAL/oaM38A4AR6USaaCl0kgj85lVTK9PqYJ1swKHiqNZKLBbB2fkWXqeuFtIbLAtr2Ody/d+bueexD3pcfXZ1iIdrR26EeIIBjQQ1dI2SgVlven1SUjNyf25tdGxeU0NkkIaADZE+Q6AMXzOktba3trUAAAIfkEBR4AAwAsAwABAA0ACAAAAhLcZGm46sicElGuaqmdWMJ9DAUAIfkECR4AAwAsAQAAABEACgAAAhfcZKmGvO8afEJOVS+1+nCddUkoHqaIFAAh+QQJHgADACwAAAAAUAAUAAACUJxlqbftD6OMaNaJs343gd9020hyCxCkwCKWbtmhqaq0753FM53Y+A/R7VY9oNFymhGLx6aj9VkyndQppYrNarfcrvcLDovH5LL5jE6r14YCACH5BAUoAAMALAAAAABQABQAAAKanI+py+0Po5y0ToCt3hqED3DiyHgfSKaagJhneLDqLLkojVMunPcRxrMIZL7e8MgYDpQT4rLCXAAziWgUcW0SnZHswRYILreso0yJRhrUMebZXY6vuQbwbd4e69N7+dXfFwgndVIYZOWXKGiGNafIN6hgF4ZFtnjp9YTHp9fpMClm9oYpN/bXaJrnmQla5JowBfQ6S1tre2tQAAA7",
    interests: [{
        title: "General",
        data: "Text text text text"
      },
      {
        title: "Music",
        data: "Text text text text"
      },
      {
        title: "Movies",
        data: "Text text text text"
      },
      {
        title: "Television",
        data: "Text text text text"
      }, {
        title: "Books",
        data: "Text text text text"
      }, {
        title: "Heroes",
        data: "Text text text text"
      }
    ],
    details: [{
        title: "Status",
        data: "Text text text text"
      },
      {
        title: "Here For",
        data: "Text text text text"
      },
      {
        title: "Orientation",
        data: "Text text text text"
      },
      {
        title: "Body type",
        data: "Text text text text"
      },
      {
        title: "Ethnicity",
        data: "Text text text text"
      },
      {
        title: "Zodiac Sign",
        data: "Text text text text"
      },
      {
        title: "Children",
        data: "Text text text text"
      },
      {
        title: "Education",
        data: "Text text text text"
      },
      {
        title: "Occupation",
        data: "Text text text text"
      },
      {
        title: "Income",
        data: "Text text text text"
      }
    ]
  },
  computed: {
    age: function () {
      var date = new Date();
      var bday = new Date('12/27/1990');
      var sec = date.getTime() - bday.getTime();
      var years = sec / 1000 / 60 / 60 / 24 / 365;
      return Math.floor(years);
    }
  },
  methods: {},
  components: {}
});
