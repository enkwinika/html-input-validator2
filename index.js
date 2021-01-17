//module.exports = () => {
    const xnumber = document.querySelectorAll('[data-validate="number"]')
    xnumber.forEach(el => {
        el.addEventListener("keyup", (event) => {
            let _val = el.value, _id = el.id + "-html-input-validator"
            console.log(_val)
            if(isNaN(_val))
            {
                var _div = document.createElement("div");
                _div.style.color = 'red';
                _div.id = _id;
                _div.innerText = 'Input value is not a number';
                console.log(el.id)
                var _p = document.getElementById(el.id).parentElement
                console.log(_p.id)
                console.log(_div.id)
                let __div = document.getElementById(_div.id)
                console.log(__div)
                if(__div)
                document.getElementById(_p.id).removeChild(__div);
                document.getElementById(_p.id).appendChild(_div);
            }else{
                var _p = document.getElementById(el.id).parentElement
                let __div = document.getElementById(_id)
                console.log(__div)
                if(__div)
                document.getElementById(_p.id).removeChild(__div);
            }
        });
    })
//}
