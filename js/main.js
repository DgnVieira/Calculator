function createCalc() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.btnClick();
        },

        btnValue(v) {
            this.display.value += v;
        },

        btnClear() {
            this.display.value = ' ';
        },

        btnDelOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        doMath() {
            let operation = this.display.value;
            try {
                operation = eval(operation);
                if(!operation) {
                    alert('Invalid operation');
                }
            }catch(e) {
                alert('Invalid Operation');
            }

            this.display.value = operation
        },

        btnClick() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                
                if(el.classList.contains('btn-num')) {
                    this.btnValue(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.btnClear();
                }

                if(el.classList.contains('btn-del')) {
                    this.btnDelOne();
                }

                if(el.classList.contains('btn-eq')) {
                    this.doMath();
                }
            })
        },        
    }
}
const calculator = createCalc();
calculator.start();