function Calc() {
    this.display = document.querySelector('.display');

    this.start = () => {
        this.clickButtons();
    }

    this.pressEnter = () => {
        document.addEventListener('keypress', e => {
            if(e.keyboardEvent.code !== 13 ) return;
            this.doMath();
        })
    }

    this.btnValue = el => {
    this.display.value += el.innerText;
    this.display.focus();
    }
    this.btnClear = () => this.display.value = '';

    this.btnDelOne = () => this.display.value = this.display.value.slice(0, -1);

    this.doMath = () => {
        try{
            const conta = eval(this.display.value);
            if(!conta) {
                alert('Conta Inválida')
            }
            this.display.value = conta;
        }catch(e) {
            alert('Conta Inválida')
            return;
        }
    }
    
    this.clickButtons = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            
            if(el.classList.contains('btn-num')) this.btnValue(el);
            if(el.classList.contains('btn-clear')) this.btnClear();
            if(el.classList.contains('btn-del')) this.btnDelOne();
            if(el.classList.contains('btn-eq')) this.doMath();
        })
    }
}

const calculator = new Calc();
calculator.start();