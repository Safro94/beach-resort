import {IRoom} from '../../hooks/application'

interface IImage {
  fields: {
    file: {
      url: string;
    };
  };
}

interface IItem {
  sys: {
    id: string;
  };
  fields: {
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
    images: IImage[];
  };
}

const mapData = (items: IItem[]) : IRoom[] => {
  if (!items) return [];

  return items.map(({ sys, fields }) : IRoom => ({
    ...fields,
    id: sys.id,
    images: fields.images.map((image) => image.fields.file.url),
  }));
};

export default mapData;
