import Card from "./card"


export default function RequestGifts(){
  return(
    <section className="request">
      <h3 className="request__title container">Invited reqeusts</h3>
      <Card></Card>
      <Card></Card>
    </section>
  )
}