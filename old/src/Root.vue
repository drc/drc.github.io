<template>
<div>
  <bio></bio>
  <contact></contact>
  <div class="container">
    <iframe width="50%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/192012042&amp;color=0066cc&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false"></iframe>
  </div>
  <attribute-table title="Daniel's Interests" :data-row="interests"></attribute-table>
  <attribute-table title="Daniel's Details" :data-row="details"></attribute-table>
</div>
</template>

<script>
import Bio from './Bio.vue'
import Contact from './Contact.vue'
import AttributeTable from './AttributeTable.vue'

export default {
  components: {
    "bio": Bio,
    'contact': Contact,
    'attribute-table': AttributeTable
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
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
    }
  }
}
</script>

<style>

</style>
