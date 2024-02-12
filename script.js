document.addEventListener('DOMContentLoaded', function () {
    const proposalBtn = document.getElementById('proposalBtn');
    const modal = document.getElementById('proposalModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // Event listener for clicking the proposal button
    proposalBtn.addEventListener('click', function () {
        modal.style.display = 'block'; // Display the modal
    });

    // Event listener for clicking the close button
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none'; // Hide the modal
    });

    // Event listener for clicking the "Yes" button
    yesBtn.addEventListener('click', function () {
        sendResponseToDiscord('Yes'); // Send "Yes" response to Discord
        modal.style.display = 'none'; // Hide the modal
    });

    // Event listener for clicking the "No" button
    noBtn.addEventListener('click', function () {
        sendResponseToDiscord('No'); // Send "No" response to Discord
        modal.style.display = 'none'; // Hide the modal
    });

    // Function to send response to Discord webhook
    function sendResponseToDiscord(response) {
        const webhookURL = 'https://discord.com/api/webhooks/1206690909282893834/2d1kLBCflHN1vFkyjyehWPVHA1gEuAbRNUTc5c4yshvCOph-cG_PnJV_rJdmToK2F8A0'; // Replace with your actual Discord webhook URL
        const data = {
            content: `Amaya responded: ${response}`
        };

        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send response to Discord');
            }
            return response.json();
        })
        .catch(error => console.error('Error:', error));
    }
});
