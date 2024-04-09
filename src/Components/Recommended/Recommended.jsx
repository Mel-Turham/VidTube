import './Recommended.css';
import { useEffect, useState } from 'react';
import { API_KEY, valueConverter } from '../../index';
import PropTypes from 'prop-types';

const Recommended = ({ categoryId }) => {
	const [apiData, setApiData] = useState([]);
	const [isLoading, setIsLoding] = useState(true);
	const [error, setError] = useState(null);

	const fectData = async () => {
		try {
			const related_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&maxWidth=200&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
			const response = await fetch(related_url);
			if (!response.ok) throw new Error('Error fetch data');
			setIsLoding(false);
			const data = await response.json();
			setApiData(data.items);
			console.log(data.items);
		} catch (error) {
			console.error('Error fetching data', error);
			setError(error.message);
			setIsLoding(false);
		}
	};
	useEffect(() => {
		fectData();
	}, [categoryId]);

	if (isLoading) {
		return <h1>Loading</h1>;
	}

	if (error) return <h1>{error}</h1>;

	return (
		<aside className='recommended'>
			{apiData.map((item) => {
				return (
					<div key={item.id} className='side-video-list'>
						<img
							src={item?.snippet?.thumbnails.medium?.url}
							alt={item.snippet.title}
							loading='lazy'
						/>
						<div className='vid-info'>
							<h4 className='title-recommende'>{item.snippet.title}</h4>
							<p>{item?.snippet?.channelTitle}</p>
							<p>{valueConverter(item?.statistics.viewCount)} Views</p>
						</div>
					</div>
				);
			})}
		</aside>
	);
};

Recommended.propTypes = {
	categoryId: PropTypes.string,
};
export default Recommended;
