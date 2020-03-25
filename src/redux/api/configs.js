export const API = {
    END_POINT: process.env.NODE_ENV === "development" ? 
    process.env.REACT_APP_API_URL_DEV : 
    process.env.REACT_APP_API_URL_PROD
}