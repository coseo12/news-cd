import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faTrashAlt,
  faCheck,
  faUser,
  faFeatherAlt,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  install(Vue) {
    library.add(faPlus);
    library.add(faTrashAlt);
    library.add(faCheck);
    library.add(faGooglePlus);
    library.add(faUser);
    library.add(faFeatherAlt);
    library.add(faList);
    Vue.component('font-awesome-icon', FontAwesomeIcon);
  },
};
