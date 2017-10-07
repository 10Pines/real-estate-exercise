var webpackConfig = require("./webpack.config.js");

module.exports = function (grunt) {
  grunt.initConfig({
    webpack: {
      "build-client-prod": webpackConfig.prodConfig,
      "build-client-dev": webpackConfig.devConfigClient
    },
    watch: {
      "templates": {
        files: ["frontend/src/templates/**/*"],
        tasks: ["copy:templates"],
        options: {
          spawn: false,
          interrupt: true
        }
      },
      "images": {
        files: ["frontend/src/img/**/*"],
        tasks: ["copy:img"],
        options: {
          spawn: false,
          interrupt: true
        }
      }
    },
    copy: {
      templates: {
        expand: true,
        cwd: "frontend/src/templates",
        src: "**.hbs",
        dest: "build/templates",
      },
      img: {
        expand: true,
        cwd: "frontend/src/img",
        src: "**",
        dest: "build/static/img",
      },
      "semantic-ui": {
        files: [{
          expand: true,
          cwd: "node_modules/semantic-ui-css/",
          src: "semantic.min.css",
          dest: "build/static/css/"
        }, {
          expand: true,
          cwd: "node_modules/semantic-ui-css/themes",
          src: "**",
          dest: "build/static/css/themes"
        }]
      }
    },
    compress: {
      "semantic-ui": {
        options: {
          mode: "gzip"
        },
        expand: true,
        cwd: "build/static/css/",
        src: ["**/*.css"],
        dest: "build/static/css/",
        extDot: "last",
        ext: ".css.gz"
      },
      "img": {
        options: {
          mode: "gzip"
        },
        expand: true,
        cwd: "build/static/img/",
        src: ["**/*.{svg,ico,png,jpeg}"],
        dest: "build/static/img/",
        rename: (dest, src) => {
          return dest + src + ".gz";
        }
      }
    },
    clean: [__dirname + "/build"]

  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-compress");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-webpack");

  grunt.registerTask("build", ["clean", "copy", "compress", "webpack:build-client-prod"]);
  grunt.registerTask("default", ["build"]);
  grunt.registerTask("dev", ["clean", "copy", "compress", "webpack:build-client-dev", "watch"]);
};
