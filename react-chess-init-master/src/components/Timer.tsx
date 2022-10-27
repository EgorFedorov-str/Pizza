import React, { FC, useState, useRef, useEffect } from 'react'
import { Colors } from '../models/Colors';
import { Player } from '../models/Player';


interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void
}


const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
    let defaultTime = 300
    const [blackTime, setBlackTime] = useState(defaultTime)
    const [whiteTime, setWhiteTime] = useState(defaultTime)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)


    useEffect(() => {
        startTime()
    }, [currentPlayer])

    

    function startTime() {
        if(timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTime : decrementBlackTime
        timer.current = setInterval(callback, 1000)
    }
    
    function decrementWhiteTime() {

        setWhiteTime(prev => prev - 1)  
    }
    function decrementBlackTime() {
        setBlackTime(prev => prev - 1)
    }

    const handleTimer = () => {
        setWhiteTime(300)
        setBlackTime(300)
        restart()
        
    }


    

  return (
    <div className="timer">
        <div>
            <button onClick={handleTimer}>Restart game</button>
        </div>
        <h2>Черные - {blackTime > 0 ? `${Math.trunc(blackTime / 60)} мин ${blackTime % 60} сек` : 0}</h2>
        <h2>Белые - {whiteTime > 0 ? `${Math.trunc(whiteTime / 60)} мин ${whiteTime % 60} сек` : 0}</h2>
    </div>
  )
}

export default Timer