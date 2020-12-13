import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Hero from '../../components/hero';
import Banner from '../../components/banner';

import { HOME } from '../../utils/routes';

import styles from './index.module.scss';

const NotFound: FC = () => {
	return (
		<Hero>
			<Banner title='404' subtitle='page not found'>
				<Link to={HOME} className={styles.button}>
					return home
				</Link>
			</Banner>
		</Hero>
	)
};

export default NotFound;
