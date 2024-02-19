import { createStore } from 'vuex';
import surveyModule from './modules/survey';

export default createStore({
  modules: {
    survey: surveyModule,
  },
});
