module.exports = function (grunt) {
    grunt.initConfig({
       browserify: {
          js: {
             src: ["../scripts/main.js"],
             dest: "../dist/app.js"
          },
          options: {
             browserifyOptions: {
                paths: [
                   "./node_modules"
                ]
             }
          }
       },
       watch: {
          javascripts: {
             files: ["scripts/**/*.js", "!node_modules/**?*.js"],
             tasks: ["eslint","browserify"]
          },
          browserify: {
             files: ["../scripts/*.js"],
             tasks: ["browserify"]
          }
       },
       eslint: {
        src: ["../scripts/*.js", "!node_modules/**?*.js"]
      },
    });

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.registerTask("default", ["eslint", "browserify", "watch"]);
 };