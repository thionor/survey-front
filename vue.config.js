// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: 
          `
          @import "@/assets/styles/fonts.scss";
          @import "@/assets/styles/variables.scss";
          @import "@/assets/styles/functions.scss";
          @import "@/assets/styles/mixins.scss";`,
      }
    }
  }
};
