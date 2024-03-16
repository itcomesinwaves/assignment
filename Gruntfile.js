module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: {
                implementation: require('sass'),
                sourceMap: true, 
                outputStyle: 'compressed' 
            },
            dist: {
                files: {
                    'dist/css/styles.css': 'src/scss/styles.scss'
                }
            }
        },
        concat: {
            dist: {
                src: ['src/js/*.js'],
                dest: 'dist/js/script.js'
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, cwd: 'src/', src: ['index.html'], dest: 'dist/' }
                ]
            }
        },
        watch: {
            css: {
                files: ['src/scss/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true,
                }
            },
            js: {
                files: ['src/js/*.js'],
                tasks: ['concat'],
                options: {
                    livereload: true,
                }
            },
            html: {
                files: ['src/index.html'],
                tasks: ['copy'],
                options: {
                    livereload: true,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'concat', 'copy', 'watch']);
};
