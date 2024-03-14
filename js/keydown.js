const allowedKeys = ['(', ')', "/", '*', '-', '+', '9', '8', '7','6','5','4','3','2','1','.', '%', " " ]

export function keydown(ev){
    const input = document.getElementById('input')
    ev.preventDefault()
    if(allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }
    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if(ev.key === 'Enter'){
        calculate()
    }
}

export function calculate(){
    const input = document.getElementById('input')
    const resultInput = document.getElementById('result')
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')

    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
}