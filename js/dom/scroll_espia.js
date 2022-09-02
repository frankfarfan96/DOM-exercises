const d = document,
l = function(arg){console.log(arg)}

export default function scrollSpy() {
    const $sections = d.querySelectorAll("section[data-scroll-spy]")
    
    const cb = (entries)=>{
        //l(entries)

        entries.forEach(entry => {
        //l(entry)
        const id=entry.target.getAttribute("id")
        //l(id)

        if(entry.isIntersecting){
            d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active")
        } else {
            d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active")
        }
        })
    }
    const observer = new IntersectionObserver(cb, {
        //root
        //rootMargin: "-250px"
        threshold: [0.5, 0.75]
    })
    //l(observer)
    $sections.forEach(el => observer.observe(el))
}