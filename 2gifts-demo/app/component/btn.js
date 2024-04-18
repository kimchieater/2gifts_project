'use client'


export default function Btn({btnClass}){

  return(
    <div className="btn">
      <a href="#request" className={btnClass}>Create gift request</a>
    </div>
  )
}