


function startLanguageManager() {
    function getLanguage() {
        return navigator.language || navigator.userLanguage;
    }

    function render(locale) {
        
        $.getJSON(`assets/locale/${locale}.json`, function(langData){
            const langJson = langData.index;
            const $lang = document.querySelectorAll("[data-lang]")
            $lang.forEach(el => {
                const code = el.dataset.lang
                el.innerHTML = langJson[code]
            })
        });
    }



    const currentLang = getLanguage();
    render(currentLang);

    const langMenu = document.getElementById('lang-menu');
    for (let idx = 0; idx < langMenu.childNodes.length; idx++) {
        const langBtn = langMenu.childNodes[idx];
        langBtn.addEventListener("click",function (event) {
            render(event.target.id);
        });
    }
}

startLanguageManager();