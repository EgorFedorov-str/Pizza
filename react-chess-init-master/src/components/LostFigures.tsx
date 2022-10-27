import React, { FC } from 'react'
import {Figure} from "../models/figure/Figure"

interface LostFiguresProps {
    title: string,
    figures: Figure[]
}


const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
  return (
    <div className="lost">
        <h3>{title}</h3>
        {figures.map(figure => <div key={figure.id}>{figure.name} {figure.logo && <img className="img-lost" src={figure.logo} alt="lost-figure"/>}</div>)}
    </div>
  )
}

export default LostFigures