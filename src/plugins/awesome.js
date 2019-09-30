import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  install(Vue) {
    library.add(faPlus);
    library.add(faTrashAlt);
    library.add(faCheck);
    library.add(faGooglePlus);
    library.add(faUser);
    Vue.component('font-awesome-icon', FontAwesomeIcon);
  },
};
