document.addEventListener('DOMContentLoaded', function () {
    const proposalBtn = document.getElementById('proposalBtn');
    const modal = document.getElementById('proposalModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    proposalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    yesBtn.addEventListener('click', function () {
        sendResponseToDiscord('yes');
        modal.style.display = 'none';
    });

    noBtn.addEventListener('click', function () {
        sendResponseToDiscord('no');
        modal.style.display = 'none';
    });

    function sendResponseToDiscord(response) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'discord_webhook.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ response: response }));
    }
});
