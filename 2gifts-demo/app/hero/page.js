import Btn from "../component/btn"


export default function Hero(){

  const btnClass = "hero__btn"
  
  return(
    <section className="hero">
      <div className="container hero__container">
      <div className="hero__info">
        <h1 className="hero__title">Create a new gift request</h1>
        <p className="hero__descrip">A little giving goes a long way. To begin, tap on the button below.</p>
        <Btn btnClass={btnClass}></Btn>
      </div>
      <div className="hero__img">
        <img className="hero__img-blue-box" src="/hero__image.png"></img>
      </div>
      </div>
    </section>
    
  )
}