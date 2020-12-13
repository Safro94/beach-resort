import React, { FC } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from '../../components/title';
import Service from '../../components/service';

import styles from './index.module.scss';

export interface IService {
  id: number,
  icon: React.ReactElement,
  title: string,
  info: string
}

const services: IService[] = [
  {
    id: 1,
    icon: <FaCocktail />,
    title: "Free Cocktails",
    info:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
  },
  {
    id: 2,
    icon: <FaHiking />,
    title: "Endless Hiking",
    info:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
  },
  {
    id: 3,
    icon: <FaShuttleVan />,
    title: "Free Shuttle",
    info:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
  },
  {
    id: 4,
    icon: <FaBeer />,
    title: "Strongest Beer",
    info:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
  }
]

const Services: FC = () => {
  return (
    <section className={styles.container}>
      <Title title='services' />
      <div className={styles.servicesContainer}>
        {services.map(item => <Service key={item.id} service={item} />)}
      </div>
    </section>
  )
}

export default Services
