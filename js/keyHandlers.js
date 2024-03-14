const input = document.getElementById('input')

export function handleButtonPress(ev){
    const value = ev.currentTarget.dataset.value
    input.value += value
}