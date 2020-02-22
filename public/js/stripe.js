/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe('pk_test_kG1NJLpOj0eH39m3F2rSSDJ400gSwMNzVE');

export const bookTour = async tourId => {
    try {
        // Get checkout session from API
        // const stripe = Stripe('pk_test_kG1NJLpOj0eH39m3F2rSSDJ400gSwMNzVE');
        const session = await axios(
            `http://127.0.0.1:3000/api/v1/bookings//checkout-session/${tourId}`
        );
        console.log(session);

        // ?Create checkout form + charge credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (err) {
        console.log(err);
        showAlert('error', err);
    }
};
