// const SENHA = "pao123"

// let colocar_senha = prompt("Digite a senha do Wi-fi")

// let tentativas = 3

// if (SENHA == colocar_senha) {
//     alert("Aproveite o Wi-fi")
// } else if (SENHA !== colocar_senha) {
//     while (tentativas > 0) {
//         if (SENHA !== colocar_senha) {
//             tentativas = tentativas - 1
//             colocar_senha = prompt(`Tente novamente você ainda tem ${tentativas} tentativas restantes.`)
//         }
//         else {
//             alert("Aproveite o Wi-fi")
//             break
//         }
            
//     }
// }


///////////////////// Versão do Lucas ///////////////////////

// const PASSWORD = "pao123"
// let attempts = 0

// while (attempts < 3) {
//     let enter_password = prompt("Digite a senha: ")

//     if (enter_password === PASSWORD) {
//         alert("Conectado, Bom cafe")
//         break
//     } else {
//         alert("Senha incorreta")
//     }

//     if (attempts === 2) {
//         alert("Bloqueado")
//     }
// }

//////////////// contador de Feliz ano novo /////////////////////////////////
// let contador = 0

// while (contador < 10) {
//     contador++
//     alert(contador)

//     if (contador === 10) {
//         alert("Feliz ano novo")
//     }
// }

////////////////////////// Cofre do Pedro ////////////////////////////////

// const BICICLETA = 300
// let safe = 0
// let deposit = 0
// let weeks = 0


// while (safe < BICICLETA) {
//     deposit = Number(prompt("Quanta deseja depositar?"))
    
//     if (deposit <= 0) {
//     alert("Numero Invalido Insira outro numero")
//     while (deposit <= 0) {
//         deposit = Number(prompt("Quanto vai depositar"))
//         }
//     }

//     safe = safe + deposit
//     weeks++
//     alert(`Você ja juntou ${safe} em ${weeks} semanas`)
// }


///////////////////// Jogo do pote //////////////////////////

let candys = 37
let response = 1
let trys = 0

while (response !== candys) {
    response = Number(prompt("Chute quantas balas tem no pote esta entre 1 e 50"))

    if (response > 50) {
        while (response > 50) {
            response = Number(prompt("Numero invalido tente outro numero"))
        }
    } else if (response <= 0) {
        response = Number(prompt("Numero invalido tente outro numero"))
    }


    if (response > candys) {
        alert("Tem menos doces")
    } else if (response < candys) {
        alert("Tem mais doces")
    }

    if (response === candys) {
        alert("Você acertou parabens")
        break
    }

    trys++
}

if (response === candys) {
    alert(`Você levou ${trys} para acertar`)
}