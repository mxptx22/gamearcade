function rotateCard(indexCard) {
    console.log(`${indexCard}front`)
    document.getElementById(`${indexCard}front`).style.transform = 'rotateY(180deg)';
    document.getElementById(`${indexCard}back`).style.transform = 'rotateY(360deg)';
    document.getElementById(`${indexCard}front`).style.zIndex = '0';
    document.getElementById(`${indexCard}back`).style.zIndex = '1';
}

function revertCard(indexCard) {
    console.log(`${indexCard}front`)
    document.getElementById(`${indexCard}front`).style.transform = 'rotateY(0deg)';
    document.getElementById(`${indexCard}back`).style.transform = 'rotateY(180deg)';
    document.getElementById(`${indexCard}front`).style.zIndex = '1';
    document.getElementById(`${indexCard}back`).style.zIndex = '0';
}