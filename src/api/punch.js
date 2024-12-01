import { DASH_API_BASE } from "../constants";
import { get } from "../helpers/request";

const checkEligibility = async ({ tzOffset }) => await get(`${DASH_API_BASE}/api/punch/eligibility`, { tzOffset });

export {
    checkEligibility
};