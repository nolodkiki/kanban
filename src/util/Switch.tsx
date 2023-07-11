import s from './util.module.css'
import { FC } from "react"



const Switch: FC = () => {
    return (
        <div className={s.flipswitch}>
            <input type="checkbox" name="flipswitch" className={s.flipswitch_cb} id="fs" />
            <label className={s.flipswitch_label} htmlFor="fs">
                <div className={s.flipswitch_inner}></div>
                <div className={s.flipswitch_switch}></div>
            </label>
        </div>
    )
}

export default Switch