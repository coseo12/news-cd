import bus from '../utils/bus.js';

export default {
  // Recycle component option
  mounted() {
    bus.$emit('end:spinner');
  },
};
