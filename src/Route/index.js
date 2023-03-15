import auth from './authRoute.js'
import storeRoute from './storeRoute.js'
import productRoute from './productRoute.js'

export default (prefix, app) => {
    app.use(prefix, auth);
    app.use(prefix, storeRoute);
    app.use(prefix, productRoute)
};