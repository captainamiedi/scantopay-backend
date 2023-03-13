import auth from './authRoute.js'
import storeRoute from './storeRoute'
import productRoute from './productRoute'

export default (prefix, app) => {
    app.use(prefix, auth);
    app.use(prefix, storeRoute);
    app.use(prefix, productRoute)
};