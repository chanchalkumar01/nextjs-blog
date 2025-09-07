import blogData from '../../../../data/blogs.json';
import {notFound} from 'next/navigation';
import styles from "@/app/style/page.module.css";
import Navbar from "@/app/component/navbar/navbar";


export async function generateMetadata({params}) {
    const {slug} = await params;
    const post = blogData.posts.find(post => post.slug === slug);

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

export default async function BlogPost({params}) {

    const {slug} = await params;

    const post = blogData.posts.find(post => post.slug === slug);

    if (!post) {
        notFound();
    }


    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Navbar></Navbar>

                <h1>{post.title}</h1>
                <hr/>
                <div>
                    {post.content}
                </div>
            </main>
        </div>
    );
}
