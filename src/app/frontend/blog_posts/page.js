"use client";

import styles from "@/app/style/page.module.css";
import Link from "next/link";
import blogData from '../../../../data/posts-data/postBlogs.json'

export default function BlogPage() {
    return (
        <>
            <h1>Blog Posts</h1>
            <hr/>
            <div className={styles.Blogs}>

                {blogData.map((post,indexKey) => (
                    <Link href={`/blog_posts/${post.slug}`} key={(indexKey + 1)}>
                        <div className={styles.BlogsItem}>
                            <div className={styles.BlogsTitle}>
                                <h3>{(indexKey + 1)}. {post.title} ?</h3>
                            </div>
                            <div className={styles.BlogsDescription}>
                                {post.content}
                            </div>
                        </div>
                    </Link>

                ))}
            </div>
        </>
    );
}
