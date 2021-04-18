var btnClick = document.getElementById('btn5');

btnClick.onclick = function() {
    let btns = document.querySelectorAll(".buttonClass")

    for(e of btns) {
        let num = Number(e.textContent);
        if(num != 5) {
            switch (num) {
                case 1:
                case 4:
                    num+=3;
                    break;
                case 2:
                case 3:
                    num--;
                    break;
                case 6:
                case 9:
                    num-=3;
                    break;
                case 7:
                case 8:
                    num++;
                    break;
            }

            e.innerHTML = num;
        }
    }
}