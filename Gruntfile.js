module.exports = function(grunt) {
  grunt.initConfig({
    //grunt-concat is used to concatenate js libs into a single js file
    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: [
          "./bower_components/jquery/jquery.js",
          "./bower_components/bootstrap/dist/js/bootstrap.js",
          "./app/assets/js/app.js"
        ],
        dest: "./public/assets/js/scripts.js"
      }
    },
    //grunt-less will compile less into css
    less: {
      development: {
        options: {
          compress: true,
        },
        files: {
          //compiling styles.less into styles.css
          "./public/assets/css/styles.css" : "./app/assets/css/styles.less"
        }
      }
    },
    //grunt-uglify will minify the javascript
    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          "./public/assets/js/scripts.js" : "./public/assets/js/scripts.js"
        }
      }
    },
    //grung-watch will watch for changes to files, then run tasks
    watch: {
      js: {
        files: [
          //watched files
          './bower_components/jquery/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js',
          './app/assets/js/app.js'
          ],   
        tasks: ['concat:js','uglify:js'],     //tasks to run
        options: {
          livereload: true                        //reloads the browser
        }
      },
      less: {
        files: ['./app/assets/stylesheets/*.less'],  //watched files
        tasks: ['less'],                          //tasks to run
        options: {
          livereload: true                        //reloads the browser
        }
      },
    }
  });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Task definition
  grunt.registerTask('default', ['watch']);
}