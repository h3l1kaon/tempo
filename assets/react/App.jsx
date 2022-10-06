import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/app.scss';
import AudioPack from './components/audio_pack/AudioPack';
import Sidenav from './components/sidenav/Sidenav';
import AlbumPage from './pages/AlbumPage';
import HomePage from './pages/home/HomePage';
import UserPlaylistsPage from './pages/UserPlaylistsPage';

const App = () => {
	return (
		<BrowserRouter>
			<Sidenav />
			<div className="container">
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route path="/album" element={<AlbumPage />} />
					<Route path="/playlists" element={<UserPlaylistsPage />} />
					<Route path="/explore" element={<HomePage />} />
				</Routes>
				<AudioPack />
			</div>
		</BrowserRouter>
	);
};

export default App;
