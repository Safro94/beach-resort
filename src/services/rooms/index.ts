import data from './data';
import mapData from "./mapper";

class RoomsService {
    static getData() {
        return mapData(data);
    }
}

export default RoomsService;