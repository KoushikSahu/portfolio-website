import React from 'react';

function Spotify(): JSX.Element {
	return (
		<div className="spotify-embed">
			<h1 className="heading-text">Currently Listening To...</h1>
			<iframe src="https://open.spotify.com/embed/playlist/6ASOWj2GN7fjgeweHKadn9" title="spotify-embed" width={ 300 } height={ 380 } frameBorder={ 0 } allowTransparency={ true } allow="encrypted-media" />
		</div>
	)
}

export default Spotify;
