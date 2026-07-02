import {qa} from "./qa.env";

export const environment = qa;

//Why not use qa directly?
//Because in industry we usually have multiple environments.
// Later, when testing UAT, you only change one line:
// export const environment = uat;  -->No other code changes.
//environment.baseURL instead of //qa.baseURL