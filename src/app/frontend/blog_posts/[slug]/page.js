import {notFound} from "next/navigation";
import styles from "@/app/style/page.module.css";
import {getApiUrl} from "@/lib/url";

// ✅ Metadata generator
export async function generateMetadata({params}) {
    const {slug} = await params;

    try {
        const apiUrl = getApiUrl('/api/saveToGitHub');
        const response = await fetch(apiUrl, {
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "Next.js Server Fetch",   // optional
                "Origin": "https://nextjs-blog-chanchalkumar01s-projects.vercel.app" // 👈 important
            }
        });
        console.log(apiUrl);
        console.log('response', response);
        if (!response.ok) {

            console.error('API Error:', response.status);
            return {title: "Blog Post"};
        }

        const blogData = await response.json();
        const post = blogData.find((post) => post.slug === slug);

        if (!post) {
            return {title: "Post Not Found"};
        }

        return {
            title: `${post.title} - Mera Blog`,
            description: post?.content ? post.content.substring(0, 160) : "",
        };
    } catch (error) {
        console.error('Error generating metadata:', error);
        return {title: "Blog Post"};
    }
}

// ✅ Blog page component
export default async function BlogPostView({params}) {
    const {slug} = await params;

    try {
        const apiUrl = getApiUrl('/api/saveToGitHub');
        const response = await fetch(apiUrl, {
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "Next.js Server Fetch",   // optional
                "Origin": "https://nextjs-blog-chanchalkumar01s-projects.vercel.app" // 👈 important
            }
        });

        console.log('2nd : ', apiUrl);
        console.log('2nd response :', response);
        if (!response.ok) {
            console.error('API Response not OK:', response.status);
            notFound();
        }

        const blogData = await response.json();
        const post = blogData.find((post) => post.slug === slug);

        if (!post) {
            notFound();
        }

        return (
            <div className={styles.BlogPost}>
                <h1>{post.title}</h1>
                <div className={styles.postMeta}>
                    <span>Published on: {new Date(post.date).toLocaleDateString()}</span>
                </div>
                <hr/>
                <div className={styles.postContent}>
                    {post.content.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching blog post:', error);
        notFound();
    }
}
