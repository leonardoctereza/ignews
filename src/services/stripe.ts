import Strype from 'stripe'

export const stripe = new Strype(process.env.STRIPE_API_KEY || '', {
    apiVersion: '2022-08-01',
    appInfo: {
        name: 'Teste',
        version: '0.1.0'
    }
})