import blogData from "../../../../data/blogs.json";
import { notFound } from "next/navigation";
import styles from "@/app/style/page.module.css";
import NavbarComponent from "@/app/component/navbar/navbarComponent";

// ✅ Metadata generator
export function generateMetadata({ params }) {
    const { slug } = params;
    const post = blogData.posts.find((post) => post.slug === slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} - Mera Blog`,
        description: post.excerpt,
    };
}

// ✅ Blog page
export default function BlogPost({ params }) {
    const { slug } = params;

    const post = blogData.posts.find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <NavbarComponent />
            <div className={styles.BlogPost}>
                <h1>{post.title}</h1>
                <hr />
                <div>{post.content}</div>
            </div>
        </>
    );
}
