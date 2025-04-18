function navigateTo(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => section.style.display = 'none');

    // Show the target section
    document.getElementById(sectionId).style.display = 'block';
}

function orderFood(foodName) {
    const trackingInfo = `Preparing your ${foodName}...`;
    const orderInfo = `You have ordered: ${foodName}`;
    
    document.getElementById("tracking-info").innerText = trackingInfo;
    document.getElementById("order-info").innerText = orderInfo;

    alert(`Order placed for ${foodName}`);
    navigateTo('order-tracking'); // Navigate to order tracking page
}