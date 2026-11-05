// pop-up a message when clicked
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
        const headingText = item.querySelector('h3').textContent;

        let message = "";
        switch (headingText) {
            case "1. Housing Inequality":
                message = "Housing inequality affects millions globally. Learn more about creating affordable housing options to address this issue.";
                break;
            case "2. Educational Disparities":
                message = "Educational disparities limit opportunities for children in low-income areas. Discover ways to support equitable education.";
                break;
            case "3. Health Disparities":
                message = "Health disparities shorten life expectancy for low-income individuals. Advocate for equal access to healthcare resources.";
                break;
            default:
                message = "Explore more details about this topic.";
        }

        console.log(`You clicked on: ${headingText}`);
        alert(message);
    });
});



// DOM stuff
const heroSection = document.querySelector('.hero'); 
const heroMessage = document.createElement('p'); 

// paragraph properties
heroMessage.classList.add('hero-message');
heroMessage.style.cssText = 'font-size: 1.2rem; margin-top: 20px; color: #005f7a;';

// day messages
function getDayMessage() {
    const days = [
        'Start your week strong! Happy Sunday!',
        'Make a difference this Monday!',
        'Take action this Tuesday!',
        'Work hard and make progress this Wednesday!',
        'Think big this Thursday!',
        'Finish the week strong this Friday!',
        'Reflect and recharge this Saturday!'
    ];
    const today = new Date().getDay(); //find the day
    return days[today];
}

// add the message
heroMessage.textContent = getDayMessage();
heroSection.appendChild(heroMessage);




