"use client";

import {useState, useEffect} from "react";
import {getBlogData} from "@/app/actions/getBlogsData";
import Link from "next/link";
import styles from "@/app/style/page.module.css";

export default function BlogPageClient({latestCount = null}) {
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {

            let data = await getBlogData();

            if (latestCount && typeof latestCount === "number") {
                data = data
                    .sort((a, b) => new Date(b.date) - new Date(a.date)) // newest first
                    .slice(0, latestCount);
            }

            setBlogData(data);
            setLoading(false);
            
        };

        fetchData();
    }, [latestCount]);

    return (
        <>
            <h1>Blog Posts</h1>
            <hr/>
            {loading && <p>Loading blog posts...</p>}
            <div className={styles.Blogs}>
                {blogData.length === 0 && !loading ? (
                    <p>No blog posts yet.</p>
                ) : (
                    blogData.map((post, index) => (
                        <Link href={`/blog_posts/${post.slug}`} key={post.id}>
                            <div className={styles.BlogsItem}>
                                <div className={styles.BlogsTitle}>
                                    <h3>{index + 1}. {post.title}</h3>
                                </div>
                                <div className={styles.BlogsDescription}>
                                    {post.content.substring(0, 300)}
                                </div>
                                <div className={styles.BlogsMeta}>
                                    <small>Posted on: {new Date(post.date).toLocaleDateString()}</small>
                                </div>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </>
    );
}
