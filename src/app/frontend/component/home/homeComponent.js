import styles from "@/app/style/page.module.css";
import Image from "next/image";
import BlogPageClient from "@/app/frontend/blog_posts/page";

export default function HomeComponent() {
    return <>

        <h1>My Blog Site</h1>
        <Image
            className={styles.logo}
            src="/project-imgs/dev-img.jpg"
            alt="Next.js logo"
            width={280}
            height={158}

        />
        <hr/>
        <h2> Blog Posts</h2>
        <hr/>

        <BlogPageClient latestCount={5}/>

    </>
}