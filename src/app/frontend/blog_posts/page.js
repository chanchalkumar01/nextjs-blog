// // "use client";
// //
// // import styles from "@/app/style/page.module.css";
// // import Link from "next/link";
// // import { useState, useEffect } from "react";
// //
// // export default function BlogPage() {
// //     const [blogData, setBlogData] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //
// //     useEffect(() => {
// //         const fetchBlogData = async () => {
// //             try {
// //                 setLoading(true);
// //
// //                 // Internal server fetch via API route
// //                 const response = await fetch("/api/getBlogs", {
// //                     cache: "no-store",
// //                 });
// //
// //                 if (!response.ok) {
// //                     console.log("Fetch issue: Not loaded by this API", response);
// //                 }
// //
// //                 const data = await response.json();
// //                 setBlogData(data);
// //             } catch (err) {
// //                 console.error("Error fetching blog data:", err);
// //                 setError(err.message);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };
// //
// //         fetchBlogData();
// //     }, []);
// //
// //     // Loading placeholder
// //     if (loading) {
// //         return (
// //             <div>
// //                 <h1>Blog Posts</h1>
// //                 <hr />
// //                 <p>Loading blog posts...</p>
// //             </div>
// //         );
// //     }
// //
// //     // Error UI
// //     if (error) {
// //         return (
// //             <div>
// //                 <h1>Blog Posts</h1>
// //                 <hr />
// //                 <p>Error: {error}</p>
// //             </div>
// //         );
// //     }
// //
// //     // Render blog posts
// //     return (
// //         <>
// //             <h1>Blog Posts</h1>
// //             <hr />
// //             <div className={styles.Blogs}>
// //                 {blogData.length === 0 ? (
// //                     <p>No blog posts yet.</p>
// //                 ) : (
// //                     blogData.map((post, index) => (
// //                         <Link href={`/blog_posts/${post.slug}`} key={post.id}>
// //                             <div className={styles.BlogsItem}>
// //                                 <div className={styles.BlogsTitle}>
// //                                     <h3>
// //                                         {index + 1}. {post.title}
// //                                     </h3>
// //                                 </div>
// //                                 <div className={styles.BlogsDescription}>
// //                                     {post.content.substring(0, 100)}
// //                                 </div>
// //                                 <div className={styles.BlogsMeta}>
// //                                     <small>
// //                                         Posted on: {new Date(post.date).toLocaleDateString()}
// //                                     </small>
// //                                 </div>
// //                             </div>
// //                         </Link>
// //                     ))
// //                 )}
// //             </div>
// //         </>
// //     );
// // }
//
//
//
// // app/blog/page.js (Server Component)
// import BlogPageClient from "./BlogPageClient";
// import {getApiUrl} from "@/lib/url";
//
// export default async function BlogPage() {
//     // Server-side fetch (browser ke network me nahi dikhega)
//     //
//     // const apiUrl = getApiUrl('/api/getBlogs');
//     // const response = await fetch(apiUrl, {
//     //     cache: 'no-store',
//     //     headers: { 'Content-Type': 'application/json' }
//     // });
//     //
//     //
//     // // const res = await fetch("/api/getBlogs", { cache: "no-store" });
//     // const data = await response.json();
//
//     return <BlogPageClient />;
// }




"use client";

import { useState, useEffect } from "react";
import { getBlogData } from "@/app/actions/getBlogsData";
import Link from "next/link";
import styles from "@/app/style/page.module.css";

export default function BlogPageClient() {
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // async function to call server action
        const fetchData = async () => {
            const data = await getBlogData(); // server action call
            setBlogData(data);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <>
            <h1>Blog Posts</h1>
            <hr />
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
