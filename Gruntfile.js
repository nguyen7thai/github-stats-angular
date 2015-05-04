module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        sourceMap: true
      },
      js: {
        src: [
          'src/app/app.js',
          'src/app/**/*.js'
        ],
        dest: 'build/production.js',
      }
    },

    watch: {
      scripts: {
        files: ['src/*.js', 'src/**/*.js'],
        tasks: ['concat'],
        options: {
          spawn: false,
        },
      }
    },

    bowerInstall: {
      target: {

        src: [
          'index.html'
        ],

        cwd: '',
        dependencies: true
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-install');

  grunt.registerTask('default', ['concat', 'watch']);

};
