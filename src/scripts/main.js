document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
    let timeStampBirthday = 0;
    const interval = 0;
    
    let getData = document.getElementById('bday');
    const button = document.querySelector('.hero__btn');
    getDate();


    button.addEventListener('click', function() {
        getData = document.getElementById('bday');
        getDate();
        document.getElementById('meuOuSeu').innerHTML = 'Para o seu aniversário';
    });

    function getDate() {
        let year = [];
        let month = [];
        let day = [];
        let monthWritten = "";

        for (let i = 0; i < 4; i++) {
            year[i] = getData.value[i];
        }
        for (let i = 5; i < 7; i++) {
            month[i] = getData.value[i];
        }
        for (let i = 8; i < 10; i++) {
            day[i] = getData.value[i];
        }
        var yearNum = parseInt(`${year[0] + year[1] + year[2] + year[3]}`);
        var monthNum = parseInt(`${month[5] + month[6]}`);
        var dayNum = parseInt(`${day[8] + day[9]}`);

        switch(monthNum) {
            case 1:
                monthWritten = "JAN";
                break;
            case 2:
                monthWritten = "FEB";
                break;
            case 3:
                monthWritten = "MAR";
                break;
            case 4:
                monthWritten = "APR";
                break;
            case 5:
                monthWritten = "MAY";
                break;
            case 6:
                monthWritten = "JUN";
                break;
            case 7:
                monthWritten = "JUL";
                break;
            case 8:
                monthWritten = "AUG";
                break;
            case 9:
                monthWritten = "SEP";
                break;
            case 10:
                monthWritten = "OCT";
                break;
            case 11:
                monthWritten = "NOV";
                break;
            case 12:
                monthWritten = "DEC";
                break;
        }
        const birthday = `${monthWritten} ${dayNum}, ${yearNum} 00:00:00`;
        const birthdayUser = new Date(birthday);
        timeStampBirthday = birthdayUser.getTime();
        inteval = setInterval (counter, 1000);
    };


    function counter() {
        const now = new Date();
        const timeStampNow = now.getTime();

        const timeForBday = timeStampBirthday - timeStampNow;

        const dayMs = 1000 * 60 * 60 * 24;
        const hourMs = 1000 * 60 * 60;
        const minutMs = 1000 * 60;

        const dayForBday = Math.floor(timeForBday / dayMs);
        const hoursForBday = Math.floor((timeForBday % dayMs) / hourMs);
        const minutsForBday = Math.floor((timeForBday % hourMs) / minutMs);
        const secondsForBday = Math.floor((timeForBday % minutMs) / 1000);

        document.getElementById('counter').innerHTML = `${dayForBday}dias ${hoursForBday}:${minutsForBday}:${secondsForBday}`;

        if (timeForBday < 0) {
            clearInterval(interval);
            document.getElementById('faltam').innerHTML = '';
            document.getElementById('counter').innerHTML = 'Parabéns';
            document.getElementById('meuOuSeu').innerHTML = '';
        }
    };
});