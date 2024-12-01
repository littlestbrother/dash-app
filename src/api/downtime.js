import { DASH_API_BASE } from "../constants";
import { get } from "../helpers/request";

const getUpcoming = async () => await get(`${DASH_API_BASE}/api/downtime/upcoming`);

export {
    getUpcoming
};