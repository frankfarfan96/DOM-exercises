const d = document,
    w=window,
    l = function(arg) {console.log(arg)}

export default function speechReader() {
    const $speechSelect = d.getElementById("speech-select"),
        $speechTextarea = d.getElementById("speech-text"),
        $speechBtn = d.getElementById("speech-btn"),
        speechMessage = new SpeechSynthesisUtterance();
    
    //l(speechMessage);

    let voices = [];

    d.addEventListener("DOMContentLoaded", (e) => { 
        //l(w.speechSynthesis)
        //l(w.speechSynthesis.getVoices())
        
        w.speechSynthesis.addEventListener("voiceschanged", e => {
            //l(e)
            voices = w.speechSynthesis.getVoices();
            l(voices)

            voices.forEach(voice => {
                const $option = d.createElement("option");
                    $option.value = voice.name;
                    $option.textContent = `${voice.name} *** ${voice.lang}`;

                    $speechSelect.appendChild($option)
            })
        })
    })
    d.addEventListener("change", e => { //Cada que cambiemos una option del selecct
        if(e.target === $speechSelect) {
            speechMessage.voice = voices.find(voice => voice.name === e.target.value)
        }

        //l(speechMessage)
    })

    d.addEventListener("click", e => { //Narrador lee el texto
        if(e.target === $speechBtn) {
            e.preventDefault();
            speechMessage.text = $speechTextarea.value;
            w.speechSynthesis.speak(speechMessage)
        }
    })
}







