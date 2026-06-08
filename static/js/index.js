document.addEventListener('DOMContentLoaded', () => {
	const videos = document.querySelectorAll('video.paper-video, video.gallery-video');

	videos.forEach((video) => {
		const setOrientationClass = () => {
			const width = video.videoWidth;
			const height = video.videoHeight;
			if (!width || !height) return;

			const isLandscape = width >= height;
			video.classList.toggle('is-landscape', isLandscape);
			video.classList.toggle('is-portrait', !isLandscape);
		};

		if (video.readyState >= 1) {
			setOrientationClass();
		} else {
			video.addEventListener('loadedmetadata', setOrientationClass, { once: true });
		}
	});
});
