
export default function Nav(){
  return(
    <nav className="nav container">
      <div className="nav__logo">LOGO</div>
      <div className="nav__container--bar">
      <svg className="nav__bar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{height:"100%", width:"60px", color:"grey"}}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
      </svg>
      </div>
    </nav>
  )
}