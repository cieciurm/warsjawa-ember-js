App = Ember.Application.create();

App.Router.map(function(){
    this.resource('subreddit', {path: "/subreddit/:key" }, function() {
        this.resource('subscribers');
    });
	this.resource('users', {path: "/users/"});
	this.resource('user', {path: "/user/:login"});
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return subreddits;
	}
});

App.UsersRoute = Ember.Route.extend({
	model: function() {
		return users;
	}
});

var users = [
	{login: "wycats", name: "Yehuda Katz"},
	{login: "torvalds", name: "Linus Torvalds"},
	{login: "dhh", name: "David Heinemeier Hansson"}
]

subreddits = [
	{key: "cityporn", name: "City Porn"},
	{key: "askreddit", name: "Ask Reddit"},
	{key: "aww", name: "Aww"}
]

App.IndexController = Ember.ArrayController.extend({
	actions: {
		clickMe: function() {
			alert("Hello ember.js");
		}
	}
});

App.SubredditRoute = Ember.Route.extend({
	setupController: function(controller, model) {
		Ember.$.getJSON("http://www.reddit.com/r/" + model.key + "/about.json",
		function(data) {
			controller.set("model", data.data);
		});
	}
});

App.SubscribersController = Ember.Controller.extend({
	needs: ["subreddit"]
});
