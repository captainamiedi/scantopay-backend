import crypto from 'crypto'
import { updateOrderPaymentStatus } from '../Service/orderService';
import { createTransactionService } from '../Service/transactionService';

const secret = process.env.CRYPTO_SECRET_KEY;
export default {
    createTransaction: async (req, res) => {
        try {
            
        } catch (error) {
            console.log(error, 'from transaction page');
        }
    },
    paystackWebHook: async (req, res) => {
        try {
            const hash = crypto.createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');
            if (hash == req.headers['x-paystack-signature']) {
                // Retrieve the request's body
                const event = req.body;
                const payload = {
                    total: event.data.amount,
                    charges: event.data.amount,
                    status: event.data.status === 'success' ? 'Successful' : event.data.status === 'pending' ? 'Pending' : 'Pending',
                    userId: event.data.metadata?.userId,
                    orderId: event.data.metadata?.orderId
                }
                await updateOrderPaymentStatus(event.data.metadata?.orderId, event.data.status)

                const transaction = await createTransactionService(payload)
                // Do something with event  
            }
            res.send(200);
        } catch (error) {
            throw error
        }
    }
}