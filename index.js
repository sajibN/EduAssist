let currentSection = 'bangla';

function changeSection(section) {
    currentSection = section;
    document.getElementById('section-title').innerText = section.charAt(0).toUpperCase() + section.slice(1);
    document.getElementById('content').innerText = localStorage.getItem(section) || '';
}

function saveContent() {
    let content = document.getElementById('content').innerHTML;
    localStorage.setItem(currentSection, content);
    alert('Content saved!');
}

function changeBackgroundColor(color) {
    document.getElementById('content').style.backgroundColor = color;
}

function changeTextColor(color) {
    document.execCommand('foreColor', false, color);
}

function changeFontFamily(font) {
    document.execCommand('fontName', false, font);
}

function changeFontSize(size) {
    document.execCommand('fontSize', false, size);
}

function toggleBold() {
    document.execCommand('bold');
}

function toggleItalic() {
    document.execCommand('italic');
}

function printContent() {
    let content = document.getElementById('content').innerHTML;
    let newWindow = window.open();
    newWindow.document.write('<pre>' + content + '</pre>');
    newWindow.print();
    newWindow.close();
}

window.onload = function() {
    changeSection('bangla');
};
