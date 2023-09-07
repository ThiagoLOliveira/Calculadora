//Essa versão foi criada juntamente ao professor do curso JavaScript e TypeScript Luiz Otávio Miranda

function Calculadora(){
    this.display = document.querySelector('.display');
    
    this.start = () => this.iniciaCalculadora()

    this.btnDisplay = (valor) => this.display.value += valor
    
    this.clearDisplay = () => this.display.value = ''
    
    this.clearOne = () => this.display.value = this.display.value.slice(0, -1)

    this.realizeCount = () => {
        let conta = this.display.value
        try{
            conta = eval(conta)
            if (!conta){
                return alert('Conta Invalida!')
            }
            this.display.value = conta
        }catch{
            return alert('Conta Invalida!')
        }
    }

    this.iniciaCalculadora = () => {
        document.addEventListener('click', e => {
            const el = e.target
            if (el.classList.contains('btn-num')) this.btnDisplay(el.innerText)
            
            if (el.classList.contains('btn-del')) this.clearOne()

            if (el.classList.contains('btn-clear')) this.clearDisplay()

            if (el.classList.contains('btn-eq'))  this.realizeCount()
        });
    };

}

const calculadora = new Calculadora()
calculadora.iniciaCalculadora()