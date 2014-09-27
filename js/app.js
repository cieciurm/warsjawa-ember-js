App = Ember.Application.create();

App.Router.map(function() {
	this.resource("subreddit", {path: "/subreddit/:key"});
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return subreddits;
	}
});

subreddits = [
	{key: 'cityporn', name: 'City Porn'},
	{key: 'askreddit', name: 'Ask Reddit'},
	{key: 'aww', name: 'Aww'}
]

App.IndexController = Ember.ArrayController.extend({
	actions: {
		clickMe: function() {
			alert('Hello ember.js');
		}
	}
});

App.SubredditRoute = Ember.Route.extend({
	model: function(params) {
		return Ember.$.getJSON("http://www.reddit.com/r/" + params.key + "/about.json");
	}
});
