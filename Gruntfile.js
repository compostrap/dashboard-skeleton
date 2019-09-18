module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dev: {
				options: {
					style: 'expanded'
				},
				files: {'dist/css/dashbaord.css': ['scss/dashboard.scss']}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('grunt-sass', ['sass']);
};
