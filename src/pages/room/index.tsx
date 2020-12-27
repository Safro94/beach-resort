import { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Hero from '../../components/hero';
import Banner from '../../components/banner';

import NotFound from '../notFound';

import { IRoom, useApplication } from '../../hooks/application';

import { ROOMS } from '../../utils/routes';

import defaultBg from '../../assets/images/room-1.jpeg';
import styles from './index.module.scss';

const Room: FC = () => {
	const { slug } = useParams<Record<string, string | undefined>>();
	const { getRoom } = useApplication();
	const [room, setRoom] = useState<IRoom>();

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
						<Hero>
							<Banner title={`${room.name} rooms`}>
								<Link to={ROOMS} className={styles.button}>Back to rooms</Link>
							</Banner>
						</Hero>
					)
			}
		</>
	);
};

export default Room;
