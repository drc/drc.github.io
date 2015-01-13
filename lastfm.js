var key = "1ee10a805516427d5ef9fc7e7dacb902";
var s = "b567e4af528bb5de6c9a9f5a9a17a7b6";
var artist, album;
var attempts;

function doAjaxRequest() {
    attempts = 0;
    doAjaxRequestLoop();
}


function doAjaxRequestLoop() {
    attempts++;
    console.log(attempts);
    if (attempts > 10) {
        alert('too many attempts.');
        return;
    }
    $.ajax({
        type: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=danno12277&limit=10&api_key=" + key + "&format=json"
    })
        .done(
            function(data) {
                album = data.recenttracks.track[0].album['#text'];
                artist = data.recenttracks.track[0].artist['#text'];
                for (recent in data.recenttracks.track) {
                    document.getElementById("tracks").innerHTML += "<tr><td>" + data.recenttracks.track[recent].name + "</td><td>" + data.recenttracks.track[recent].artist['#text'] + "</td></tr>";
                }
                console.log('Current artist: ', data.recenttracks.track[0].artist['#text']);
                console.log('Current album: ', data.recenttracks.track[0].album['#text']);
                console.log(data);
                $.ajax({
                    type: "GET",
                    url: "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=" + key + "&artist=" + data.recenttracks.track[0].artist['#text'] + "&album=" + data.recenttracks.track[0].album['#text'] + "&format=json"
                })
                    .done(
                        function(data) {
                            //console.log("data",data.album.releasedate.indexOf('2014'));
                            $.ajax({
                            	type: "GET", 
                            	url: 'http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=danno12277&api_key='+key+'&format=json&period=12month&limit=100'
                            }).done(function(data){
                            	console.log("top tracks",data.toptracks.track);
                            	for(tracks in data.toptracks.track)
                            	{
                            		console.log("Track " + (parseInt(tracks)+1)+':', data.toptracks.track[tracks].name + ' by ' + data.toptracks.track[tracks].artist.name);
                     				//$.ajax({
					                //     type: "GET",
					                //     url: "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=" + key + "&artist=" + data.recenttracks.track[tracks].artist['#text'] + "&album=" + data.recenttracks.track[0].album['#text'] + "&format=json"
					                // }).done(function(data){

					                // })
                            	}
                            })
                            console.log((typeof data.album.image[4] === "undefined") ? "No album link on Last.fm." : data.album.image[4]['#text']);
                            document.getElementById("bg").style.backgroundImage = "url('" + data.album.image[4]['#text'] + "')";
                        })
                    .fail(
                        function() {
                            doAjaxRequestLoop();
                            console.error('Something went wrong grabbing album art background.');
                        });
            })
        .fail(
            function() {
                doAjaxRequestLoop();
                console.error('Something went wrong grabbing recent tracks.')
            });
}

$(doAjaxRequest());
