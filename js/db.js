var db = require('monk')('admin:password@ds059888.mongolab.com:59888/spire-crawler');
var courses = db.get('courses');

module.exports = {
	update: function(course, cb) {
		courses.updateById({id: course.title}, course, {upsert: true}, function(err, doc) { });
	},
	find: function(cb) {
		courses.find({}, {}, cb);
	}
};
