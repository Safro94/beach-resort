import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Hero from '../../components/hero';
import Banner from '../../components/banner';
import Services from '../../components/services';

import { ROOMS } from '../../utils/routes';

import styles from './index.module.scss';

const Home: FC = () => {
	return (
		<>
			<Hero>
				<Banner title='luxurious rooms' subtitle='deluxe rooms starting at $299'>
					<Link to={ROOMS} className={styles.button}>
						our rooms
				</Link>
				</Banner>
			</Hero>
			<Services />
		</>
	);
};

export default Home;
