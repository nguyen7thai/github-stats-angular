module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        sourceMap: true
      },
      js: {
        src: [
          'app/app.js',
          'app/**/module.js',
          'app/**/*.js'
        ],
        dest: 'build/production.js',
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
    },

    bower: {
      install: {
        options: {
          targetDir: 'build/bower_components'
        }
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true, src: ['app/**/*.html', 'index.html'], dest: 'build'
          }
        ]
      },
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'build/application.css': 'app/assets/scss/application.scss'
        }
      }
    },

    watch: {
      scripts: {
        files: ['app/*.js', 'app/**/*.js'],
        tasks: ['concat'],
        options: {
          spawn: false,
        },
      },
      build: {
        files: ['index.html', 'app/**/*.html'],
        tasks: ['copy'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['app/assets/scss/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-install');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['concat', 'watch']);

};
