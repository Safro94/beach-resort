import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Hero from '../../components/hero';
import Banner from '../../components/banner';
import RoomsContainer from '../../containers/rooms';

import { HOME } from '../../utils/routes';

import styles from './index.module.scss';

const Rooms: FC = () => {
	return (
		<>
			<Hero customStyles={styles.hero}>
				<Banner title='our rooms'>
					<Link to={HOME} className={styles.button}>
						return home
					</Link>
				</Banner>
			</Hero>
			<RoomsContainer />
		</>
	)
};

export default Rooms;
