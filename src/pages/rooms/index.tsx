import React, { FC } from 'react';

import Hero from '../../components/hero';

import styles from './index.module.scss';

const Rooms: FC = () => {
	return <Hero customStyles={styles.hero}></Hero>;
};

export default Rooms;
