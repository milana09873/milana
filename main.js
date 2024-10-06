
document.addEventListener('DOMContentLoaded', function() {
    
    const button = document.createElement('button');
    button.textContent = 'кнопочка';

    button.style.color = 'brown';
    button.style.padding = '5px';
    button.style.margin = '0 auto';
    button.style.width = '200px';
    button.style.cursor = 'pointer';

    button.addEventListener('click', function() {
        window.location.href = 'https://t.me/ssodn'; 
    });

    const container = document.getElementById('container');
    container.appendChild(button);
});

