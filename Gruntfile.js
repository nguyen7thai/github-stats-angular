 module.exports = function(grunt) {
  grunt.initConfig({
    // We have a few target name conventions here: `dev` (local), `dist` (staging/prod), `all`
    pkg: grunt.file.readJSON('package.json'),

    // TODO: We have a few things that needs to do here
    // - Use file-rev/html-min/cdnify?
    // - Consider about making and `grunt s:dist`

    // Inject bower components to index.html
    wiredep: {
      all: {
        src: [
          'index.html'
        ],
        dependencies: true
      }
    },

    copy: {
      dist: {
        files: [
          {
            expand: true, src: ['app/**/*.html'], dest: 'build'
          },
          {
            src: ['index.html'], dest: 'build/index.html'
          }
        ]
      }
    },

    includeSource: {
      options: {
        basePath: '',
        templates: {
          html: {
            js: '<script src="{filePath}"></script>',
            css: '<link rel="stylesheet" type="text/css" href="{filePath}" />'
          }
        }
      },
      all: {
        files: {
          'index.html': 'index.tpl.html'
        }
      }
    },

    sass: {
      all: {
        options: {
          style: 'expanded'
        },
        files: {
          '.tmp/app/assets/css/application.css': 'app/assets/scss/application.scss'
        }
      }
    },

    useminPrepare: {
      options: {
        dest: 'build'
      },
      html: 'index.html'
    },

    // Inject combined file to build/index.html
    usemin: {
      html: 'build/index.html'
    },

    clean: {
      dist: ['build', '.tmp', 'index.html'],
      dev: ['.tmp', 'index.html']
    },

    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      css: {
        files: ['app/**/*.scss'],
        tasks: ['sass']
      },
      index: {
        files: ['index.tpl.html'],
        tasks: ['includeSource', 'wiredep']
      }
    },

    connect: {
      dev: {
        options: {
          open: true,
          hostname: 'localhost',
          port: 8000
        }
      },
      dist: {
        options: {
          port: 8001,
          base: 'build'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-include-source');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['s']);
  grunt.registerTask('prepare', ['clean:dev', 'wiredep', 'sass', 'copy:dev', 'includeSource']);

  grunt.registerTask('s', [
    'clean:dev',
    'sass',
    'includeSource',
    'wiredep',
    'connect:dev',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean:dist', // Clean old build
    'sass', // Compile sass to css and put these css files to <tmp>/assets/css/
    'includeSource', // Inject js source code to index.html (cloned from <root>/index.tpl.html)
    'wiredep', // Inject bower components to <root>/index.hml
    'copy:dist', // Copy source/vendor injected index.html to build directory
    'useminPrepare', // Usemin configuration preparation
    'concat:generated', // Concat all js files to .tmp/concat/*.js
    'cssmin:generated', // Minifying css files
    'uglify:generated', // Uglify js
    'usemin' // Use uglified js and minimized css
  ]);
};
