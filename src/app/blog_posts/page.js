"use client";   // 👈 ye add kar

import styles from "../style/page.module.css";
import Link from "next/link";
import blogData from '../../../data/blogs.json'

export default function BlogPage() {
    return (
        <>
            <h1>Blog Posts</h1>
            <hr/>
            <div className={styles.Blogs}>

                {blogData.posts.map((post) => (
                    <Link href={`/blog_posts/${post.slug}`} key={post.id}>
                        <div className={styles.BlogsItem}>
                            <div className={styles.BlogsTitle}>
                                <h3>{post.id}. {post.title} ?</h3>
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
