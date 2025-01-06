document.addEventListener("DOMContentLoaded", async () => {
    const tableBody = document.querySelector("#prayer-times-table tbody");
  
    // API URL for Vancouver, Canada
    const url = "https://api.aladhan.com/v1/timingsByCity?city=Vancouver&country=Canada&method=2";
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const prayerTimes = data.data.timings;
  
      // Define the prayers to display
      const prayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
  
      // Clear existing rows
      tableBody.innerHTML = "";
  
      // Add prayer times to the table
      prayers.forEach((prayer) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${prayer}</td>
          <td>${prayerTimes[prayer]}</td>
        `;
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error("Error fetching prayer times:", error);
      tableBody.innerHTML = `<tr><td colspan="2">Error fetching prayer times.</td></tr>`;
    }
  });
  
  