function toggleRectangle(rectangleId, circleId) {
  let rectangle = document.getElementById(rectangleId);
  let rectangles = document.querySelectorAll('.rectangle');


  rectangles.forEach(function(rect) {
    if (rect.id !== rectangleId) {
      rect.style.display = 'none';
    }
  });

  // Toggle visibility of the clicked rectangle
  if (rectangle.style.display === 'none') {
    rectangle.style.display = 'block';
  } else {
    rectangle.style.display = 'none';
  }
}


/*-1. KOREA KOREA-------------------------------------------------------*/

function updateKoreaDate() {
  let now = new Date();
  let options = {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  let koreaDate = now.toLocaleDateString('en-US', options);
  document.getElementById('korea-date').textContent = koreaDate;
}

function updateKoreaTime() {
  let now = new Date();
  let options = {
    timeZone: 'Asia/Seoul',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  let koreaTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('korea-time').textContent = koreaTime;
}

updateKoreaDate();
setInterval(updateKoreaTime, 1000);
updateKoreaTime();


/*-2. SINGAPORE-------------------------------------------------------*/

function updateSingaporeDate() {
  let now = new Date();
  let options = {
    timeZone: 'Asia/Singapore',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  let singaporeDate = now.toLocaleDateString('en-US', options);
  document.getElementById('singapore-date').textContent = singaporeDate;
}

function updateSingaporeTime() {
  let now = new Date();
  let options = {
    timeZone: 'Asia/Singapore',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  let singaporeTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('singapore-time').textContent = singaporeTime;
}

updateSingaporeDate();
setInterval(updateSingaporeTime, 1000);
updateSingaporeTime();


/*-3. THAILAND-------------------------------------------------------*/

function updateBangkokDate() {
  let now = new Date();
  let options = {
    timeZone: 'Asia/Bangkok',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  let bangkokDate = now.toLocaleDateString('en-US', options);
  document.getElementById('bangkok-date').textContent = bangkokDate;
}

function updateBangkokTime() {
  let now = new Date();
  let options = {
    timeZone: 'Asia/Bangkok',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  let bangkokTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('bangkok-time').textContent = bangkokTime;
}

updateBangkokDate();
setInterval(updateBangkokTime, 1000);
updateBangkokTime();


/*-4. AUSTRALIA AUSTRALIA-------------------------------------------------------*/

function updateCanberraDate() {
  var now = new Date();
  var options = {
    timeZone: 'Australia/Canberra',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var canberraDate = now.toLocaleDateString('en-US', options);
  document.getElementById('canberra-date').textContent = canberraDate;
}

function updateCanberraTime() {
  var now = new Date();
  var options = {
    timeZone: 'Australia/Canberra',
    hour12: true, 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  var canberraTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('canberra-time').textContent = canberraTime;
}

updateCanberraDate();
setInterval(updateCanberraTime, 1000);
updateCanberraTime();


/*-5. EGYPT EGYPT-------------------------------------------------------*/

function updateEgyptDate() {
  var now = new Date();
  var options = {
    timeZone: 'Africa/Cairo',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var egyptDate = now.toLocaleDateString('en-US', options);
  document.getElementById('egypt-date').textContent = egyptDate;
}

function updateEgyptTime() {
  var now = new Date();
  var options = {
    timeZone: 'Africa/Cairo',
    hour12: true, 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  var egyptTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('egypt-time').textContent = egyptTime;
}

updateEgyptDate();
setInterval(updateEgyptTime, 1000);
updateEgyptTime();


/*-6. CHINA CHINA-------------------------------------------------------*/

function updateChinaDate() {
  var now = new Date();
  var options = {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var chinaDate = now.toLocaleDateString('en-US', options);
  document.getElementById('china-date').textContent = chinaDate;
}

function updateChinaTime() {
  var now = new Date();
  var options = {
    timeZone: 'Asia/Shanghai',
    hour12: true, 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  var chinaTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('china-time').textContent = chinaTime;
}

updateChinaDate();
setInterval(updateChinaTime, 1000);
updateChinaTime();


/*-7. FRANCE FRANCE-------------------------------------------------------*/

function updateFranceDate() {
  var now = new Date();
  var options = {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var franceDate = now.toLocaleDateString('en-US', options);
  document.getElementById('france-date').textContent = franceDate;
}

function updateFranceTime() {
  var now = new Date();
  var options = {
    timeZone: 'Europe/Paris',
    hour12: true, 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  var franceTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('france-time').textContent = franceTime;
}

updateFranceDate();
setInterval(updateFranceTime, 1000);
updateFranceTime();


/*-8. UK Uk UK-------------------------------------------------------*/

function updateUKDate() {
  var now = new Date();
  var options = {
    timeZone: 'Europe/London',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var ukDate = now.toLocaleDateString('en-US', options);
  document.getElementById('uk-date').textContent = ukDate;
}

function updateUKTime() {
  var now = new Date();
  var options = {
    timeZone: 'Europe/London',
    hour12: true, 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  var ukTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('uk-time').textContent = ukTime;
}

updateUKDate();
setInterval(updateUKTime, 1000);
updateUKTime();


/*-9. FINLAND FINLAND FINLAND-------------------------------------------------------*/

function updateFinlandDate() {
  var now = new Date();
  var options = {
    timeZone: 'Europe/Helsinki',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var finlandDate = now.toLocaleDateString('en-US', options);
  document.getElementById('finland-date').textContent = finlandDate;
}

function updateFinlandTime() {
  var now = new Date();
  var options = {
    timeZone: 'Europe/Helsinki',
    hour12: true, 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  var finlandTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('finland-time').textContent = finlandTime;
}

updateFinlandDate();
setInterval(updateFinlandTime, 1000);
updateFinlandTime();


/*-10. ITLAY ITLAY-------------------------------------------------------*/

function updateItalyDate() {
  var now = new Date();
  var options = {
    timeZone: 'Europe/Rome',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var italyDate = now.toLocaleDateString('en-US', options);
  document.getElementById('italy-date').textContent = italyDate;
}

function updateItalyTime() {
  var now = new Date();
  var options = {
    timeZone: 'Europe/Rome',
    hour12: true, 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  var italyTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('italy-time').textContent = italyTime;
}

updateItalyDate();
setInterval(updateItalyTime, 1000);
updateItalyTime();


/*-11. PORTUGAL PORTUGAL-------------------------------------------------------*/

function updatePortugalDate() {
  var now = new Date();
  var options = {
    timeZone: 'Europe/Lisbon',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var portugalDate = now.toLocaleDateString('en-US', options);
  document.getElementById('portugal-date').textContent = portugalDate;
}

function updatePortugalTime() {
  var now = new Date();
  var options = {
    timeZone: 'Europe/Lisbon',
    hour12: true, // Display time in 12-hour format
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  var portugalTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('portugal-time').textContent = portugalTime;
}

updatePortugalDate();
setInterval(updatePortugalTime, 1000);
updatePortugalTime();


/*-12. TURKEY TURKEY-------------------------------------------------------*/

function updateTurkeyDate() {
  var now = new Date();
  var options = {
    timeZone: 'Europe/Istanbul',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var turkeyDate = now.toLocaleDateString('en-US', options);
  document.getElementById('turkey-date').textContent = turkeyDate;
}

function updateTurkeyTime() {
  var now = new Date();
  var options = {
    timeZone: 'Europe/Istanbul',
    hour12: true, 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  var turkeyTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('turkey-time').textContent = turkeyTime;
}

updateTurkeyDate();
setInterval(updateTurkeyTime, 1000);
updateTurkeyTime();


/*-13. RUSSIA RUSSIA-------------------------------------------------------*/

function updateMoscowDate() {
  var now = new Date();
  var options = {
    timeZone: 'Europe/Moscow',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var moscowDate = now.toLocaleDateString('en-US', options);
  document.getElementById('moscow-date').textContent = moscowDate;
}

function updateMoscowTime() {
  var now = new Date();
  var options = {
    timeZone: 'Europe/Moscow',
    hour12: true, 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  var moscowTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('moscow-time').textContent = moscowTime;
}

updateMoscowDate();
setInterval(updateMoscowTime, 1000);
updateMoscowTime();


/*-14. NY NY -------------------------------------------------------*/

function updateNYDate() {
  var now = new Date();
  var options = {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var nyDate = now.toLocaleDateString('en-US', options);
  document.getElementById('ny-date').textContent = nyDate;
}

function updateNYTime() {
  var now = new Date();
  var options = {
    timeZone: 'America/New_York',
    hour12: true, 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  var nyTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('ny-time').textContent = nyTime;
}

updateNYDate();
setInterval(updateNYTime, 1000);
updateNYTime();


/*-15. LA LA-------------------------------------------------------*/

function updateLADate() {
  var now = new Date();
  var options = {
    timeZone: 'America/Los_Angeles',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var laDate = now.toLocaleDateString('en-US', options);
  document.getElementById('la-date').textContent = laDate;
}

function updateLATime() {
  var now = new Date();
  var options = {
    timeZone: 'America/Los_Angeles',
    hour12: true, 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  var laTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('la-time').textContent = laTime;
}

updateLADate();
setInterval(updateLATime, 1000);
updateLATime();


/*-16. CANADA CANADA-------------------------------------------------------*/

function updateOttawaDate() {
  var now = new Date();
  var options = {
    timeZone: 'America/Toronto',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var ottawaDate = now.toLocaleDateString('en-US', options);
  document.getElementById('ottawa-date').textContent = ottawaDate;
}

function updateOttawaTime() {
  var now = new Date();
  var options = {
    timeZone: 'America/Toronto', 
    hour12: true, 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  var ottawaTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('ottawa-time').textContent = ottawaTime;
}

updateOttawaDate();
setInterval(updateOttawaTime, 1000);
updateOttawaTime();


/*-17. MEXICO MEXICO-------------------------------------------------------*/

function updateMexicoCityDate() {
  var now = new Date();
  var options = {
    timeZone: 'America/Mexico_City',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var mexicoCityDate = now.toLocaleDateString('en-US', options);
  document.getElementById('mexico-date').textContent = mexicoCityDate;
}

function updateMexicoCityTime() {
  var now = new Date();
  var options = {
    timeZone: 'America/Mexico_City',
    hour12: true, 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  var mexicoCityTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('mexico-time').textContent = mexicoCityTime;
}

updateMexicoCityDate();
setInterval(updateMexicoCityTime, 1000);
updateMexicoCityTime();


/*-18. CHICAGO CHICAGO-------------------------------------------------------*/

function updateChicagoDate() {
  var now = new Date();
  var options = {
    timeZone: 'America/Chicago',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var chicagoDate = now.toLocaleDateString('en-US', options);
  document.getElementById('chicago-date').textContent = chicagoDate;
}

function updateChicagoTime() {
  var now = new Date();
  var options = {
    timeZone: 'America/Chicago',
    hour12: true, 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  var chicagoTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('chicago-time').textContent = chicagoTime;
}

updateChicagoDate();
setInterval(updateChicagoTime, 1000);
updateChicagoTime();


/*------------------------------------------------------------*/

let shuffleText = document.getElementById('shuffle-text');

document.addEventListener('click', function(event) {
  if (event.target.id === 'shuffle-text') {
    
		function shuffleArray(array) {
		  for (let i = array.length - 1; i > 0; i--) {
		    let j = Math.floor(Math.random() * (i + 1));
		    [array[i], array[j]] = [array[j], array[i]];
		  }
		  return array;
		}

		let grid = document.getElementById('grid');

		let circles = Array.from(grid.querySelectorAll('.circle'));

		let shuffledCircles = shuffleArray(circles);

		circles.forEach(circle => {
		  circle.remove();
		});

		shuffledCircles.forEach(circle => {
		  grid.appendChild(circle);
		});
  }
});

