import styles from "./style/page.module.css";
import Navbar from "@/app/component/navbar/navbar";
import Home from "@/app/component/home/home";

export default function Main() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Navbar></Navbar>
                <Home></Home>
            </main>
        </div>
    );
}
