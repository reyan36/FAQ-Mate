// Fun Fact 
const funFacts = [
    "The Moon has Moonquakes",
    "Water can boil and freeze at the same time",
    "There are more stars in the universe than grains of sand on all the Earth's beaches",
    "The human eye can distinguish about 10 million different colors",
    "A smile uses 17 muscles, but a frown only uses 11",
    "Human eye can see more shades of green than any other color"
];


function showFunFact() {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    const factDisplay = document.getElementById("fun-fact");
    const factText = document.getElementById("fun-fact-text");

    factDisplay.style.display = "block";
    factText.innerHTML = randomFact;
}


function closeFunFact() {
    const factDisplay = document.getElementById("fun-fact");
    factDisplay.style.display = "none";
}

function openMessenger() {
    window.open('https://www.facebook.com/messages/t/61583886371741', '_blank');
}




// JavaScript code for the FAQ bot
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatbox = document.getElementById("chatbox");
const resetButton = document.getElementById("reset-button");

// Predefined FAQ responses
const faqResponses = {
    "Hi": "Hello! How can I assist you today?",
    "What are your hours?": "Our business hours are from 9 AM to 5 PM, Monday to Friday.",
    "How do I contact support?": "You can reach us at support@company.com or by calling (123) 456-7890.",
    "What is your return policy?": "Our return policy lasts 30 days from the date of purchase. You can return any unused items in their original packaging for a full refund. Items must be in new condition and cannot be damaged or altered.",
    "How long does shipping take?": "Standard shipping takes 5-7 business days. Expedited shipping options are available at checkout for faster delivery. International shipping times may vary depending on the destination country.",
    "What payment methods do you accept?": "We accept all major credit cards, PayPal, and Apple Pay. You can also use gift cards and store credit as payment options at checkout.",
    "Can I change my order after placing it?": "Unfortunately, once an order is placed, we cannot change it. If you need to modify your order, please contact customer service immediately, and we will assist you in canceling the original order so you can place a new one.",
    "How do I track my order?": "Once your order has shipped, you will receive an email with a tracking number and a link to track your shipment. You can also track your order directly through our website by entering the tracking number.",
    "What is the warranty on your products?": "All products come with a 1-year warranty from the date of purchase. The warranty covers any manufacturing defects but does not cover damages resulting from misuse, accidents, or unauthorized repairs.",
    "Do you offer gift wrapping?": "Yes, we offer gift wrapping for most products. You can choose this option during checkout. There is a small additional fee for this service.",
    "How can I contact customer service?": "You can reach our customer service team via email at support@company.com or by calling (123) 456-7890. Our customer service hours are Monday to Friday, from 9 AM to 6 PM. You can also use the live chat feature on our website during business hours.",
    "Do you offer international shipping?": "Yes, we offer international shipping to select countries. Shipping rates and delivery times vary by location, and customs fees may apply depending on the destination country. Please check the shipping calculator at checkout for more details.",
    "How can I cancel my subscription?": "To cancel your subscription, please visit the 'My Account' section of our website and navigate to the 'Subscriptions' tab. From there, you can cancel your active subscriptions. Alternatively, you can contact customer service for assistance.",
    "What should I do if I received a damaged or defective product?": "If you received a damaged or defective product, please contact our customer service team within 7 days of receiving your order. You will need to provide a photo of the damage or defect, and we will arrange for a replacement or full refund.",
    "How can I update my account information?": "To update your account information, log in to your account on our website and go to the 'Account Settings' section. From there, you can update your personal information, payment methods, and shipping addresses.",
    "How do I use a coupon code?": "To use a coupon code, enter the code during the checkout process. There will be a field labeled 'Coupon Code' where you can paste or type in the code. The discount will be applied to your order total automatically.",
    "Where can I find the user manual for my product?": "You can find the user manual for your product on our website. Go to the 'Support' section and select your product from the list. You will find downloadable PDF versions of the manual, as well as FAQs and troubleshooting guides.",
    "Can I return or exchange sale items?": "Sale items may only be returned or exchanged if they are defective or damaged. For regular returns, sale items are non-refundable, unless required by local consumer protection laws.",
    "How can I track my subscription renewal?": "To track your subscription renewal, log in to your account on our website and go to the 'Subscriptions' section. You will find the details of your current subscription, including the renewal date and any upcoming charges.",
    "What should I do if I forgot my password?": "If you forgot your password, click on the 'Forgot Password?' link on the login page. You will be prompted to enter your email address, and we will send you a link to reset your password.",
    "What are the environmental benefits of your products?": "Our products are designed with sustainability in mind. Many of our products are made from recycled materials and are fully recyclable. We also work to minimize our carbon footprint by optimizing packaging and reducing waste.",
    "How do I unsubscribe from your email list?": "To unsubscribe from our email list, click the 'Unsubscribe' link at the bottom of any marketing email you receive from us. Alternatively, you can update your email preferences by logging into your account and navigating to the 'Email Preferences' section.",
    "Can I change my shipping address after my order has been shipped?": "Unfortunately, once an order has been shipped, we cannot change the shipping address. If you realize there is an issue with the address before shipment, please contact customer service as soon as possible.",
    "What if I need help with installation or setup?": "We offer online support through our website, where you can find video tutorials and setup guides. If you need more assistance, you can reach out to our customer service team via email or phone.",
    "Do you provide technical support?": "Yes, we offer technical support for all of our products. If you're experiencing technical issues, please visit our 'Support' section on the website or contact our support team directly for assistance.",
    "How do I leave a review for a product?": "To leave a review, go to the product page on our website and scroll down to the 'Customer Reviews' section. There, you will find an option to write and submit your review.",
    "How do I return a digital product?": "Digital products, including e-books and software, are generally non-refundable. However, if there is an issue with the product (e.g., it doesn't work as described), please contact customer service for assistance."
};


chatForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const message = userInput.value.trim();
    userInput.value = "";


    chatbox.innerHTML += `<p class="user">User: ${message}</p>`;


    if (faqResponses[message]) {

        chatbox.innerHTML += `<p class="bot">Bot: ${faqResponses[message]}</p>`;
    } else {

        chatbox.innerHTML += `<p class="bot">Bot: Sorry, I don't understand. Can you please rephrase your question?</p>`;
    }


    chatbox.scrollTop = chatbox.scrollHeight;
});


resetButton.addEventListener("click", function () {
    chatbox.innerHTML = "";
});

