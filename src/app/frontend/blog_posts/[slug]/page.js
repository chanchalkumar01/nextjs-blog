import blogData from "../../../../../data/posts-data/postBlogs.json";
import { notFound } from "next/navigation";
import styles from "@/app/style/page.module.css";

// ✅ Metadata generator
export async function generateMetadata({params}) {
    const {slug} = await params;
    const post = blogData.find((post) => post.slug === slug);

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
export default async function BlogPostView({params}) {
    const {slug} = await params;

    const post = blogData.find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <div className={styles.BlogPost}>
                <h1>{post.title}</h1>
                <hr/>
                <div>{post.content}</div>
            </div>
        </>
    );
}
