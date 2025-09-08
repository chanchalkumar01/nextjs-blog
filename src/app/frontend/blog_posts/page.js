"use client";

import styles from "@/app/style/page.module.css";
import Link from "next/link";
import {useState, useEffect} from 'react';

export default function BlogPage() {
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // API se data fetch karo
    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/savePostBlogs');

                if (!response.ok) {
                    console.log('Fetch issue Not load data by this api :', response)
                }

                const data = await response.json();
                setBlogData(data);
            } catch (err) {
                console.error('Error fetching blog data:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogData();
    }, []);

    if (loading) {
        return (
            <div>
                <h1>Blog Posts</h1>
                <hr/>
                <p>Loading blog posts...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1>Blog Posts</h1>
                <hr/>
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <>
            <h1>Blog Posts</h1>
            <hr/>
            <div className={styles.Blogs}>
                {blogData.length === 0 ? (
                    <p>No blog posts yet.</p>
                ) : (
                    blogData.map((post, index) => (
                        <Link href={`/blog_posts/${post.slug}`} key={post.id}>
                            <div className={styles.BlogsItem}>
                                <div className={styles.BlogsTitle}>
                                    <h3>{(index + 1)}. {post.title}</h3>
                                </div>
                                <div className={styles.BlogsDescription}>
                                    {post.content.substring(0, 100)}
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