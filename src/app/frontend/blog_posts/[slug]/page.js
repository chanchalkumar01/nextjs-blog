import { notFound } from "next/navigation";
import styles from "@/app/style/page.module.css";

// ✅ Metadata generator
export async function generateMetadata({ params }) {
    const { slug } = await params;

    try {
        // API se data fetch karo
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/saveToGitHub`, {
            cache: 'no-store' // Ensure fresh data
        });

        if (!response.ok) {
            new Error('Failed to fetch blog data');
        }

        const blogData = await response.json();
        const post = blogData.find((post) => post.slug === slug);

        if (!post) {
            return {
                title: "Post Not Found",
            };
        }

        return {
            title: `${post.title} - Mera Blog`,
            description: post.content.substring(0, 160), // First 160 characters as description
        };
    } catch (error) {
        console.error('Error generating metadata:', error);
        return {
            title: "Blog Post",
        };
    }
}

// ✅ Generate static params for SSG
export async function generateStaticParams() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/saveToGitHub`, {
            next: { revalidate: 3600 } // Revalidate every hour
        });

        if (!response.ok) {
            return [];
        }

        const blogData = await response.json();

        return blogData.map((post) => ({
            slug: post.slug,
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

// ✅ Blog page component
export default async function BlogPostView({ params }) {
    const { slug } = await params;

    try {
        // API se data fetch karo
        const response = await fetch('/api/saveToGitHub');

        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/saveToGitHub`, {
        //     cache: 'no-store' // Ensure fresh data for each request
        // });

        if (!response.ok) {
            new Error('Failed to fetch blog data');
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