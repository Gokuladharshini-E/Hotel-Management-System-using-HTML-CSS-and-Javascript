function bookRoom(roomType, price) {
  localStorage.setItem("roomType", roomType);
  localStorage.setItem("roomPrice", price);
  window.location.href = "guest_details.html";
}

function saveGuestDetails(event) {
  event.preventDefault();

  let guestName = document.getElementById("guestName").value;
  let guestPhone = document.getElementById("guestPhone").value;
  let guestEmail = document.getElementById("guestEmail").value;
  let checkIn = document.getElementById("checkIn").value;
  let checkOut = document.getElementById("checkOut").value;

  localStorage.setItem("guestName", guestName);
  localStorage.setItem("guestPhone", guestPhone);
  localStorage.setItem("guestEmail", guestEmail);
  localStorage.setItem("checkIn", checkIn);
  localStorage.setItem("checkOut", checkOut);

  window.location.href = "confirmation.html";
}

window.onload = function () {
  if (document.getElementById("confirmationDetails")) {
    let roomType = localStorage.getItem("roomType");
    let roomPrice = localStorage.getItem("roomPrice");
    let guestName = localStorage.getItem("guestName");
    let guestPhone = localStorage.getItem("guestPhone");
    let guestEmail = localStorage.getItem("guestEmail");
    let checkIn = localStorage.getItem("checkIn");
    let checkOut = localStorage.getItem("checkOut");

    document.getElementById("confirmationDetails").innerHTML = `
      <h2>Thank you, ${guestName}!</h2>
      <p><b>Room:</b> ${roomType} (₹${roomPrice}/night)</p>
      <p><b>Phone:</b> ${guestPhone}</p>
      <p><b>Email:</b> ${guestEmail}</p>
      <p><b>Check-in:</b> ${checkIn}</p>
      <p><b>Check-out:</b> ${checkOut}</p>
      <h3>Your booking is confirmed ✅</h3>
    `;
  }
};
