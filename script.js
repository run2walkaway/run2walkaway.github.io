// initialize client with app credentials
SC.initialize({
  client_id: 'e70a2323a96fbe32617ccb56d8df6d85',
  //redirect_uri: 'http://run2walkaway.github.io/callback.html',
})

// initiate auth popup
SC.connect(function() {
  SC.get('/me', function(me) { 
    alert('Hello, ' + me.username); 
  });
});

$(document).read(function() {
	SC.get('/tracks/293', function(track) {
		SC.oEmbed(track.permalink_url, document.getElementById('player'));
    });
  });
});
