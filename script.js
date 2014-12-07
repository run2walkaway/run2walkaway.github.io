// initialize client with app credentials
SC.initialize({
  client_id: 'f0db94a2794eb6749f6c8736ab7ae8ab',
  redirect_uri: 'http://run2walkaway.github.io/callback.html',
});

// initiate auth popup
SC.connect(function() {
  SC.get('/me', function(me) { 
    alert('Hello, ' + me.username); 
  });
});

SC.oEmbed("http://soundcloud.com/forss/sets/soulhack", {color: "ff0066"}, document.getElementById("player"));
