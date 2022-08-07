import { useEffect, useRef } from 'react';

export default function Paypal({ setMessage, total }) {
    const paypal = useRef();

    useEffect(() => {
        console.log(total);
        console.log((total / 24000).toFixed(2));
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: 'CAPTURE',
                        purchase_units: [
                            {
                                message: '',
                                amount: {
                                    currrency_code: 'CAD',
                                    value: (total / 24000).toFixed(2),
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log('ok');
                    console.log(order);
                    setMessage('success');
                },
                onCancel: () => {
                    setMessage('error');
                },
                onError: (err) => {
                    console.log('Error: ' + err);
                },
            })
            .render(paypal.current);
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
}
