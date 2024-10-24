const backToTop = () => {
    if (document.documentElement.scrollTop > 100) {
        document.getElementById('top').style.display = 'block';
        
    } else { document.getElementById('top').style.display = 'none';

    }
    
}

window.addEventListener('scroll', function () {
       //console.log("scrolling");
       backToTop();
   });