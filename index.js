const apiKey = "714e7b4ecee7a9b3ba169f2762c7f18b"

const weather1Ele = document.querySelector(".weather1")
const cityEle = document.querySelector("#city")
const formEle = document.querySelector("form")
const imgic = document.querySelector(".ic1")

formEle.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    const cityValue = cityEle.value

    	Search(cityValue)
})

async function Search(cityValue){
    try{
        const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        if(!response.ok){
            throw new Error("Network response is not ok!")
        }

        const data = await response.json()
        

        const tem1 = Math.floor(data.main.tem1)
        const des1 = 1 .weather[0].des1
        const ic1 = 1 .weather[0].ic1

        const det1 = [
            
            `Humidity: ${data.main.humidity}%`
            
        ]

        weather1Ele.querySelector(".tem1").textContent = `${tem1}°C`
        weather1Ele.querySelector(".des1").textContent = `${des1}`

        imgic1.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="opnweather">`

        weather1Ele.querySelector(".det1").innerHTML = det1.map((detail)=>{
           return `<div>${detail}</div>`
        }).join("")

    }catch(err){
        weather1Ele.querySelector(".tem1").textContent = ""
        imgic1.innerHTML = ""
        weather1Ele.querySelector(".des1").textContent = "An Error Occurred!"

    }

}
