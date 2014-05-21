// Place third party dependencies in the lib folder
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
	"baseUrl" : "js/lib",
	"paths" : {
		"app" : "../app",
		"bootstrap" : "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min.js",
		"jquery" : "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min",
		"underscore" : "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min",
		"backbone" : "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min",
		"angular" : "//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.16/angular.min.js",
		"handlebars" : "//cdnjs.cloudflare.com/ajax/libs/requirejs-handlebars/0.0.2/hbars.min.js"
	},
	shim: {
		"bootstrap" : ["jquery"],
		"backbone" : ["underscore"]
	}
});

// Load the main app module to start the app
requirejs(["app/main", "app/dice"]);
