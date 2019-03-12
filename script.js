var Color = {
    toRed: function(){
        document.querySelector('body').style.backgroundColor = 'pink';
        document.querySelector('body').style.color = 'white';
        var links = document.querySelectorAll('a');
        var i = 0;
        while(i<links.length) {
        links[i].style.color='white'; 
        i = i + 1;
        }  
    },
    toBlue: function(){
        document.querySelector('body').style.backgroundColor = 'blue';
        document.querySelector('body').style.color = 'black';
        var links = document.querySelectorAll('a');
        var i = 0;
        while(i<links.length) {
        links[i].style.color='black'; 
        i = i + 1;
        }
        },
    toBlack: function(){
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';
        var links = document.querySelectorAll('a');
        var i = 0;
        while(i<links.length) {
        links[i].style.color='black'; 
        i = i + 1;
        }
        },
    toWhite: function(){
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black';
        var links = document.querySelectorAll('a');
        var i = 0;
        while(i<links.length) {
        links[i].style.color='black'; 
        i = i + 1;
        }
        },
}