document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("registerMsg").textContent = "🎉 Registered successfully!";
  });
  
  document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("bookingMsg").textContent = "✅ Class booked successfully!";
  });
  