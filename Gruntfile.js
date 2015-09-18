module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-inline');
  grunt.initConfig({
    inline: {
      dist: {
        src: 'index.htm',
        dest: 'index.html'
      }
    }
  });
  grunt.registerTask('default', ['inline']);
}
