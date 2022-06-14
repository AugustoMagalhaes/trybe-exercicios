const headerTitle = document.querySelector('#header-container h1');
headerTitle.style.backgroundColor = '#2a8d27'

const emergencyColors = document.querySelector('.emergency-tasks');
emergencyColors.style.backgroundColor = '#f38989';

const emergencyColorsText = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergencyColorsText.length; i += 1) {
    emergencyColorsText[i].style.backgroundColor = '#893eb2';
    emergencyColorsText[i].style.color = '#f7f5f5';
}

const noEmergencyColors = document.querySelector('.no-emergency-tasks');
noEmergencyColors.style.backgroundColor = '#ffd966';

const noEmergencyColorsText = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergencyColorsText.length; i += 1) {
    noEmergencyColorsText[i].style.backgroundColor = '#000000';
    noEmergencyColorsText[i].style.color = '#f7f5f5';
}

const footerColor = document.getElementsByTagName('footer');
for (let i = 0; i < footerColor.length; i += 1) {
    footerColor[i].style.backgroundColor = '#1e3811';
}