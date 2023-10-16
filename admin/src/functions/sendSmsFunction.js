const sendSmsFunction = async (number, message) => {
    const apiUrl = 'http://localhost:3001/send-sms'; // Replace with your server URL
    const messageData = {
        number: number,
        message: message,
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageData),
        });

        if (response.status === 200) {
            const responseData = await response.json();
            return responseData;
        } else {
            console.error('Error sending SMS. Status:', response.status);
            return null;
        }
    } catch (error) {
        console.error('Error sending SMS:', error);
        return null;
    }
};

export default sendSmsFunction;
