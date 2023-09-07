//Versão criada por mim usando factory functions

function criaCalc() {
    return {
        display: document.querySelector(`.display`),

        clearDisplay() {
            this.display.value = ''
        },

        start() {
            this.clickButton()
            this.clickEnter()
        },

        clearOne() {
            this.display.value = this.display.value.slice(0, -1)
        },

        btnEqual() {
            let conta = this.display.value
            try {
                conta = eval(conta)
                if (!conta) {
                    alert(`Conta invalida`)
                    return;
                }
                this.display.value = conta
            } catch (e) {
                alert(`Conta invalida`)
                return
            }
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        },

        clickEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.btnEqual()
                }
            })
        },

        clickButton() {
            document.addEventListener('click', e => {
                const el = e.target
                if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText)
                if (el.classList.contains('btn-clear')) this.clearDisplay()
                if (el.classList.contains('btn-del')) this.clearOne()
                if (el.classList.contains('btn-eq')) this.btnEqual()
            })
        },
    }
}

const calculadora = criaCalc()
calculadora.start()
