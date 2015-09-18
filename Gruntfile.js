module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-inline');
  grunt.initConfig({
    inline: {
      dist: {
        src: 'index.html'
      }
    }
  });
  grunt.registerTask('default', ['inline']);
}
