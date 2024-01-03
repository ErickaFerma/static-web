 document.addEventListener('DOMContentLoaded', function () {
        var dropdowns = document.getElementsByClassName('dropdown');

        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].addEventListener('Home', function () {
                this.querySelector('.dropdown-content').style.display = 'block';
            });

            dropdowns[i].addEventListener('Details', function () {
                this.querySelector('.drpdwn-cntnt').style.display = 'none';
            });
			
			dropdowns[i].addEventListener('Contact', function () {
                this.querySelector('.dropdown-content1').style.display = 'none';
            });
        }
    });