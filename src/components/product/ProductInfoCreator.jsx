import styles from "./ProductInfoCreator.module.scss"
import User from "../../components/user/User"

export default function ProductInfoCreator({name, avatar, verified=false}){
    return (
        <div className={styles["product-info-creator"]}>
            <div className={styles["title-container"]}>
                <div className={styles.title}>Creator</div>
            </div>
            <div className={styles["user-container"]}>
                <User name={name} size={39} avatar={avatar} verified={verified}/>
            </div>
        </div>
    )
}