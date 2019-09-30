import ListView from './ListView.vue';
import { mapActions } from 'vuex';
import bus from '../utils/bus.js';

export default function createListView(name) {
  return {
    // Recycle instance option
    name: name,
    created() {
      this.FETCH_STATE();
      bus.$emit('start:spinner');
      setTimeout(() => {
        this.FETCH_LIST(this.$route.name);
        bus.$emit('end:spinner');
      }, 3000);
    },
    methods: {
      ...mapActions(['FETCH_LIST', 'FETCH_STATE']),
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
