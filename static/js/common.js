        var change_time = 8000;
        var timeout;

        function find_active(){
            timeout = setTimeout(function () {
                make_active('find');
            }, change_time);

        }

        function hire_active(){
            timeout = setTimeout(function () {
                make_active('hire');
            }, change_time);
        }

        function pay_active(){
            timeout = setTimeout(function () {
                make_active('pay');
            }, change_time)
        }

        window.onload = function () {
            hire_active()
        };

        function make_active(id) {
            var classes = document.getElementById(id).getAttribute('class');
            document.getElementById(id).setAttribute('class', classes + ' headerButtonNeedHelp');
            if(id === 'find'){
                make_inactive('hire');
                make_inactive('pay');
                document.getElementById('btn_description').innerHTML = 'Мы заботимся о вас. Мы заключаем контракты и проводим оплату. Так вы будете знать наверняка, что всё сделано в соответствии с законодательством. Мы предлагаем разные способы оплаты, включая криптовалюты. Мы гарантируем безопасность при использовании функции "Безопасная сделка".';
                clearTimeout(timeout);
                hire_active()
            }
            if(id === 'hire'){
                make_inactive('find');
                make_inactive('pay');
                document.getElementById('btn_description').innerHTML = 'Мы заботимся о вас. Мы заключаем контракты и проводим оплату. Так вы будете знать наверняка, что всё сделано в соответствии с законодательством. Мы предлагаем разные способы оплаты, включая криптовалюты. Мы гарантируем безопасность при использовании функции "Безопасная сделка".';
                clearTimeout(timeout);
                pay_active()
            }
            if(id === 'pay'){
                make_inactive('find');
                make_inactive('hire');
                document.getElementById('btn_description').innerHTML = 'Мы заботимся о вас. Мы заключаем контракты и проводим оплату. Так вы будете знать наверняка, что всё сделано в соответствии с законодательством. Мы предлагаем разные способы оплаты, включая криптовалюты. Мы гарантируем безопасность при использовании функции "Безопасная сделка".';
                clearTimeout(timeout);
                find_active()
            }
        }

        function make_inactive(id) {
            var classes = document.getElementById(id).getAttribute('class');
            classes = classes.replace(' headerButtonNeedHelp', '');
            document.getElementById(id).setAttribute('class', classes)
        }