import styles from "@/app/style/page.module.css";
import Link from "next/link";

export default function Navbar() {
    return <>
        <nav className={styles.navbar}>
            <ul className={styles.navbarUl}>
                <li className={styles.navbarUlLi}>
                    <Link key="blog-posts" href={`/`}>
                        Home
                    </Link>
                </li>
                <li className={styles.navbarUlLi}>
                    <Link key="blog-posts" href={`/blog_posts`}>
                        Blogs
                    </Link>
                </li>
                <li className={styles.navbarUlLi}>
                    <Link key="blog-posts" href={`/about`}>
                        About
                    </Link>
                </li>
                <li className={styles.navbarUlLi}>
                    <Link key="blog-posts" href={`/contact`}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    </>
}