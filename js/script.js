let div = document.getElementById('coube')
div.style.width='246px'
div.style.height='110px'
div.style.backgroundColor='red'


const go =(e)=>{
    e.preventDefault()
    let input = document.getElementById('name')
    console.log(input);
    input.value=(eval(input.value))
}
const getVal =()=>{
    let input = document.getElementById('name')
    console.log(input.value);
}

const getValButton=(e)=>{
    let input = document.getElementById('name')
    // console.log(e.target.value)
    // input.value = input.value + e.target.value

    if (e.target.value == 'c'){
        input.value = input.value.slice(0, -1)
    }
    else if (e.target.value == 'ac'){
        input.value = ''
    }
    else{
        input.value = input.value + e.target.value
    }
}

// const getValButton=(e)=>{
//     let input = document.getElementById('name')

//     if (e.target.value == '-', '+' && '/','*'){
//         input.value = input.value.slice('+'&&'-')
//     }else if (e.target.value.slice == '-', '+' && '/','*'){
//         input.value = input.value.slice('/'&&'*')
// }else{
//     input.value = input.value + e.target.value
// }
// }