import React, { createContext, useContext, useState, useEffect } from 'react';
import RoomsService from '../../services/rooms';

export interface IRoom {
  name: string;
  slug: string;
  type: string;
  price: number;
  size: number;
  capacity: number;
  pets: boolean;
  breakfast: boolean;
  featured: boolean;
  description: string;
  extras: string[];
  images: string[];
  id: string,
}

type RoomContextType = {
  rooms: IRoom[],
  sortedRooms: IRoom[],
  featuredRooms: IRoom[],
  loading: boolean
}

const ApplicationContext = createContext<RoomContextType>({ rooms: [], sortedRooms: [], featuredRooms: [], loading: true });

const useApplication = () => {
  const application = useContext<RoomContextType>(ApplicationContext);

  return { ...application };
};

const ApplicationProvider: React.FC = ({ children }) => {
  const [roomsState, setRoomsState] = useState<RoomContextType>({
    rooms: [], sortedRooms: [], featuredRooms: [], loading: true
  });

  useEffect(() => {
    const data = RoomsService.getData();

    setRoomsState({
      rooms: data,
      featuredRooms: data.filter(room => room.featured),
      sortedRooms: data,
      loading: false
    })
  }, [])

  return (
    <ApplicationContext.Provider value={{ ...roomsState }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export { useApplication, ApplicationProvider };