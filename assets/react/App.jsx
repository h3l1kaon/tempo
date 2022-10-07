import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/app.scss';
import AudioPack from './components/audio_pack/AudioPack';
import Sidenav from './components/sidenav/Sidenav';
import HomePage from './pages/home/HomePage';
import TopNav from './components/top_nav/TopNav';
import Modal from './components/modal/Modal';
import AlbumPage from './pages/AlbumPage';
import UserPlaylistsPage from './pages/UserPlaylistsPage';

const App = () => {
	const [openModal, setOpenModal] = useState({ open: false, val: '' });

	function triggerModal(request) {
		// modal request
		if (request === 'connection') {
			setOpenModal({ open: true, val: 'connection' });
			console.log('connection modal');
		} else {
			setOpenModal({ open: true, val: 'register' });
			console.log('register modal');
		}
	}

	useEffect(() => {
		console.log(openModal);
	}, [openModal]);

	return (
		<BrowserRouter>
			<Sidenav />
			<div className="container">
				<TopNav triggerModal={triggerModal} />
				<Modal openned={openModal} close={setOpenModal} />

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
