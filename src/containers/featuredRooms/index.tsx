import React, { FC } from 'react';

import {useApplication} from '../../hooks/application'

const FeatureRooms: FC = () => {
  const {featuredRooms} = useApplication();
  console.log(featuredRooms)
  return (
    <div>

    </div>
  )
}

export default FeatureRooms
