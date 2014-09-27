App = Ember.Application.create();

App.Router.map(function() {
  this.resource("subreddit", {path: "/subreddit/:name"});
  // put your routes here
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
