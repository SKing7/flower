module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-inline');
  grunt.initConfig({
    inline: {
      dist: {
        src: 'index.html',
        dest: 'index.htm',
      }
    }
  });
  grunt.registerTask('default', ['inline']);
}
