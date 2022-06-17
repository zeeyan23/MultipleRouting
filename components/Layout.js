import  Navbar  from "./Navbar";
import styles from "../styles/Layout.module.css"
import  Header  from "./Header";
import ArticleName from "./ArticleName";
function Layout({children}){
    return(
        <>

        <Navbar />
        <Header />
       
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>

        </div>
        </>
    )
}


export default Layout;