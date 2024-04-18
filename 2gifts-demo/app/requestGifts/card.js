'use client'

export default function Card(){
  return(
    <section className="card container">
      <div className="card__sort">
        <p className="card__sort__title">gift & charity donation</p>
        <img className="card__sort__pinkbox" src="/hero__pink-box.png"></img>
      </div>
      <div className="card__info">
        <h1 className="card__info__title">Jayden's birthday gift</h1>
        <h3 className="card_info__invite">Invited by Wesley (parent) for Jayden</h3>
        <h4 className="card__info__gift--info">Gift item</h4>
        <h3 className="card__info__gift--name">Nintendo Swtich</h3>
      </div>
      <div className="card__progress">
        <div className="card__progress__first-container">
          <p className="first-container__goal">Amount goal</p>
          <p className="first-container__money">$449</p>
        </div>
        <div className="card__progress__second-container">
          <p className="second-container__charity">Charity</p>
          <p className="second-container__percentage">30%</p>
        </div>
        
      </div>
      <p className="card__due-date">Due date: <span className="card__date">19 Mar 2021</span></p>
    </section>
  )
}