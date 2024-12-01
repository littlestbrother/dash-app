import { DASH_API_BASE } from "../constants";
import { get, post } from "../helpers/request";

const getUpcoming = async () => await get(`${DASH_API_BASE}/api/downtime/upcoming`);

const create = async ({ month, day, year }) => await post(`${DASH_API_BASE}/api/downtime`, { month, day, year });

export {
    getUpcoming,
    create
};