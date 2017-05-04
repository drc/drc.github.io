<template>
<div class='container'>
  <div class='row'>
    <strong>{{dan.name}}</strong>
  </div>
  <div class='row'>
    <img style="float:left; padding-right:5px;" class='col' v-bind:src="dan.profileImage" alt="" />
    <h3 style="float:right;">daniel is in your extended network</h3>
    <div class="col">
      <div>"I don't update this ever"</div>
      <!-- style="clear:both" -->
      <div>Male</div>
      <div id='age'>{{age}} years old</div>
      <div>{{dan.city}}, {{dan.state}}</div>
      <div>{{dan.country}}</div>
      <img v-bind:src="onlineNow" />
      <div>Last Login:<br/> 3/12/2008</div>
    </div>
  </div>
  <div class="row">
    <div>
      <strong>Mood:</strong> funny
      <br/> View my:
      <a href="#" title="">Pics</a> |
      <a href="#">Videos</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      dan: {
        name: "Dan Cigrang",
        city: "Chicago",
        state: "IL",
        country: "United States",
        profileImage: "http://www.gravatar.com/avatar/1cbb6b96b0ae87552bd8041a3740d93a.png?s=200",
        birthday: '12/27/1990'
      },
      onlineNow: "data:image/gif;base64,R0lGODlhUAAUAJEDANheDPdyGgCqAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFHgADACwAAAAAUAAUAAACmpyPqcvtD6OctE6Ard4ahA9w4sh4H0impHmG6tudKExTrFvnEYZbgqAL/oaM38A4AR6USaaCl0kgj85lVTK9PqYJ1swKHiqNZKLBbB2fkWXqeuFtIbLAtr2Ody/d+bueexD3pcfXZ1iIdrR26EeIIBjQQ1dI2SgVlven1SUjNyf25tdGxeU0NkkIaADZE+Q6AMXzOktba3trUAAAIfkEBR4AAwAsAwABAA0ACAAAAhLcZGm46sicElGuaqmdWMJ9DAUAIfkECR4AAwAsAQAAABEACgAAAhfcZKmGvO8afEJOVS+1+nCddUkoHqaIFAAh+QQJHgADACwAAAAAUAAUAAACUJxlqbftD6OMaNaJs343gd9020hyCxCkwCKWbtmhqaq0753FM53Y+A/R7VY9oNFymhGLx6aj9VkyndQppYrNarfcrvcLDovH5LL5jE6r14YCACH5BAUoAAMALAAAAABQABQAAAKanI+py+0Po5y0ToCt3hqED3DiyHgfSKaagJhneLDqLLkojVMunPcRxrMIZL7e8MgYDpQT4rLCXAAziWgUcW0SnZHswRYILreso0yJRhrUMebZXY6vuQbwbd4e69N7+dXfFwgndVIYZOWXKGiGNafIN6hgF4ZFtnjp9YTHp9fpMClm9oYpN/bXaJrnmQla5JowBfQ6S1tre2tQAAA7"
    }
  },
  computed: {
    age: function() {
      var date = new Date();
      var bday = new Date(this.dan.birthday);
      var sec = date.getTime() - bday.getTime();
      var years = sec / 1000 / 60 / 60 / 24 / 365;
      return Math.floor(years);
    }
  }
}
</script>


<style>

</style>
