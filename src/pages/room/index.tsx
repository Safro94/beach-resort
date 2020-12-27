import { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Hero from '../../components/hero';
import Banner from '../../components/banner';

import NotFound from '../notFound';

import { IRoom, useApplication } from '../../hooks/application';

import { ROOMS } from '../../utils/routes';

import defaulImg from '../../assets/images/room-1.jpeg';
import styles from './index.module.scss';

const Room: FC = () => {
	const { slug } = useParams<Record<string, string | undefined>>();
	const { getRoom } = useApplication();
	const [room, setRoom] = useState<IRoom>();
	const [mainImg, ...otherimgs] = room?.images || [];

	useEffect(() => {
		const contextRoom = getRoom(slug || '');
		setRoom(contextRoom);
	}, [slug, getRoom]);

	return (
		<>
			{
				!room
					? <NotFound />
					: (
						<>
							<Hero
								customStyles={styles.hero}
								style={{ background: `url(${mainImg || defaulImg}) center/cover no-repeat` }}
							>
								<Banner title={`${room.name} rooms`}>
									<Link to={ROOMS} className={styles.button}>Back to rooms</Link>
								</Banner>
							</Hero>
							<section className={styles.imagesSection}>
								<div className={styles.imagesContainer}>
									{
										otherimgs.map(image => <img src={image} alt={room.name} key={image} />)
									}
								</div>
								<div className={styles.roomInformation}>
									<article className={styles.description}>
										<h3>details</h3>
										<p>{room.description}</p>
									</article>

									<article className={styles.information}>
										<h3>info</h3>
										<h6>price: ${room.price}</h6>
										<h6>size: {room.size} SQFT</h6>
										<h6>max capacity: {`${room.capacity} ${room.capacity > 1 ? 'people' : 'person'}`} </h6>
										<h6>{room.pets ? 'pets allowed' : 'no pets allowed'}</h6>
										<h6>{room.breakfast && 'free breakfast included'}</h6>
									</article>
								</div>
							</section>

							<section className={styles.extrasSection}>
								<h6>extras</h6>
								<ul className={styles.extras}>
									{room.extras.map(extra => <li key={extra}>- {extra}</li>)}
								</ul>
							</section>
						</>
					)
			}
		</>
	);
};

export default Room;
