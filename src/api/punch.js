import { DASH_API_BASE } from "../constants";
import { get, post } from "../helpers/request";

const checkEligibility = async ({ tzOffset }) => await get(`${DASH_API_BASE}/api/punch/eligibility`, { tzOffset });

const punchIn = async ({ tzOffset, latitude, longitude, timestamp }) => await post(`${DASH_API_BASE}/api/punch/`, { tzOffset, latitude, longitude, timestamp });

export {
    checkEligibility,
    punchIn
};