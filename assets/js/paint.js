function configureListeners() {
    let images = document.querySelectorAll('img'); // Select img elements

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('mouseover', addOpacity);
        images[i].addEventListener('mouseout', removeOpacity);
    }
}

function addOpacity(event) {
    event.target.classList.add('hover-opacity'); // Add CSS class to reduce opacity
    getProductInfo(event.target.id); // Get product info based on the image ID
}

function removeOpacity(event) {
    event.target.classList.remove('hover-opacity'); // Remove CSS class to restore opacity

    let element = document.getElementById('color-price');
    element.textContent = ''; // Clear the price text

    let color = document.getElementById('color-name');
    color.textContent = ''; // Clear the color name text

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    // Set price and color name based on the paintColor ID
    switch (paintColor) {
        case 'pn1':
            colorName = 'Lime Green';
            price = '$14.99';
            break;           
        case 'pn2':
            colorName = 'Medium Brown';
            price = '$11.14';
            break;            
        case 'pn3':
            colorName = 'Royal Blue';
            price = '$22.99';
            break;   
        case 'pn4':
            colorName = 'Solid Black';
            price = '$4.99';
            break;   
        case 'pn5':
            colorName = 'Solid Cyan';
            price = '$8.22';
            break;   
        case 'pn6':
            colorName = 'Solid Purple';
            price = '$11.99';
            break;   
        case 'pn7':
            colorName = 'Solid Red';
            price = '$13.42';
            break;   
        case 'pn8':
            colorName = 'Solid White';
            price = '$21.98';
            break;   
        case 'pn9':
            colorName = 'Solid Yellow';
            price = '$14.99';
            break;   
        default:
            colorName = '';
            price = '';
    }

    updatePrice(colorName, price);
}

function updatePrice(colorName, price) {       
    let colorPrice = document.getElementById('color-price');
    colorPrice.textContent = price; // Display the price
    
    let color = document.getElementById('color-name');
    color.textContent = colorName; // Display the color name
}

// Initialize listeners when the DOM content is loaded
document.addEventListener('DOMContentLoaded', configureListeners);
