// PNR Status :
document
  .getElementById("PNRStatus")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const PNR = document.getElementById("PNR").value;
    const apiKey = "f88e34acc1msh774984c6e7cfb0ap10c327jsn4c29fcf2b260";
    const rapidapiHost = "irctc1.p.rapidapi.com";

    fetch(
      `https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${PNR}`,
      {
        method: "GET",
        headers: {
          "X-Rapidapi-Key": apiKey,
          "X-Rapidapi-Host": rapidapiHost,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Display the fetched data in the result div
        const resultDiv = document.getElementById("pnr-status-result");
        // resultDiv.innerHTML = JSON.stringify(data, null, 2);
        resultDiv.innerHTML = "";
        data.forEach((element) => {
          const stackDiv = document.createElement("div");
          stackDiv.style.border = "1px solid #000";
          stackDiv.style.padding = "10px";
          stackDiv.style.marginTop = "10px";

          for (const key in element) {
            const keyElement = document.createElement("p");
            keyElement.textContent = key;
            stackDiv.appendChild(keyElement);

            const valueElement = document.createElement("p");
            valueElement.textContent = element[key];
            stackDiv.appendChild(valueElement);
          }

          resultDiv.appendChild(stackDiv);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Error fetching data. Please try again.";
        resultDiv.style.border = "1px solid #000";
        resultDiv.style.padding = "10px";
        resultDiv.style.marginTop = "10px";
      });
  });

// Train Status :
document
  .getElementById("trainStatus")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const trainNo = document.getElementById("trainNo").value;
    const apiKey = "f88e34acc1msh774984c6e7cfb0ap10c327jsn4c29fcf2b260";
    const rapidapiHost = "irctc1.p.rapidapi.com";

    fetch(
      `https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus?trainNo=${trainNo}&startDay=1`,
      {
        method: "GET",
        headers: {
          "X-Rapidapi-Key": apiKey,
          "X-Rapidapi-Host": rapidapiHost,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const resultDiv = document.getElementById("train-status-result");
        resultDiv.innerHTML = "";
        data.forEach((element) => {
          const stackDiv = document.createElement("div");
          stackDiv.style.border = "1px solid #000";
          stackDiv.style.padding = "10px";
          stackDiv.style.marginTop = "10px";

          for (const key in element) {
            const keyElement = document.createElement("p");
            keyElement.textContent = key;
            stackDiv.appendChild(keyElement);

            const valueElement = document.createElement("p");
            valueElement.textContent = element[key];
            stackDiv.appendChild(valueElement);
          }

          resultDiv.appendChild(stackDiv);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Error fetching data. Please try again.";
        resultDiv.style.border = "1px solid #000";
        resultDiv.style.padding = "10px";
        resultDiv.style.marginTop = "10px";
      });
  });

// document
//   .getElementById("statusForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevents the form from submitting traditionally

//     const trainNumber = document.getElementById("trainOrPnr").value;
//     // fetch(`https://www.railyatri.in/live-train-status/${trainNumber}`)
//     fetch(
//       `https://www.railyatri.in/live-train-status/${trainNumber}?utm_source=lts_dweb_Check_status`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         // Display the fetched data in the result div
//         const resultDiv = document.getElementById("result");
//         resultDiv.innerHTML = JSON.stringify(data,statusForm null, 2);
//         resultDiv.style.border = "1px solid #000";
//         resultDiv.style.padding = "10px";
//         resultDiv.style.marginTop = "10px";
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         const resultDiv = document.getElementById("result");
//         resultDiv.innerHTML = "Error fetching data. Please try again.";
//       });
//   });

// document
//   .getElementById("statusForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevents the form from submitting traditionally

//     const userInput = document.getElementById("trainOrPnr").value;
//     const apiKey = "f88e34acc1msh774984c6e7cfb0ap10c327jsn4c29fcf2b260";
//     const rapidapiHost = "omgvamp-hearthstone-v1.p.rapidapi.com";

//     fetch(
//       `https://omgvamp-hearthstone-v1.p.rapidapi.com/info?input=${userInput}`,
//       {
//         method: "GET",
//         headers: {
//           "X-Rapidapi-Key": apiKey,
//           "X-Rapidapi-Host": rapidapiHost,
//         },
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         // Display the fetched data in the result div
//         const resultDiv = document.getElementById("result");
//         resultDiv.innerHTML = JSON.stringify(data, null, 2);
//         resultDiv.style.border = "1px solid #000";
//         resultDiv.style.padding = "10px";
//         resultDiv.style.marginTop = "10px";
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         const resultDiv = document.getElementById("result");
//         resultDiv.innerHTML = "Error fetching data. Please try again.";
//       });
//   });
