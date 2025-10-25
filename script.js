let selectedReason = "";
let selectedUrgency = "";

function goToPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

function chooseReason(reason) {
  selectedReason = reason;
  goToPage('page2');
}

function chooseUrgency(level) {
  selectedUrgency = level;
  goToPage('page3');
}

function sendEmail(counselorEmail) {
  const reason = selectedReason || "I need academic or personal support.";
  const urgency = selectedUrgency || "Moderate";

  const subject = "Support Request from Student";
  const body = `Hello,

I would like to reach out for support.

Reason: ${reason}
Urgency: ${urgency}

Thank you,
[YOUR NAME AND GRADE]`;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(counselorEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open in the same tab to avoid popup blockers
  window.location.href = gmailUrl;
}
