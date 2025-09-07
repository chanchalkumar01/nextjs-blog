import styles from "../style/page.module.css";
import Link from "next/link";
import Navbar from "@/app/component/navbar/navbar";
import blogData from '../../../data/blogs.json'

export default function BlogPage() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Navbar></Navbar>

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
                    <div className={styles.BlogsItem}>
                        <div className={styles.BlogsTitle}>
                            <Link
                                key="how-to-learn-nextjs"
                                href={`/blog_posts/how-to-learn-nextjs`}
                            >
                                <h3>1. How to learn Next Js?</h3>
                            </Link>
                        </div>
                        <div className={styles.BlogsDescription}>
                            Learning Next.js involves understanding its core features and how it extends React for
                            building production-ready web applications.
                            Prerequisites:
                            Strong understanding of JavaScript: Including ES6+ features, asynchronous programming, and
                            module systems.
                            Solid grasp of React: Familiarity with components, props, state, hooks, and the component
                            lifecycle.
                        </div>
                    </div>
                    <div className={styles.BlogsItem}>
                        <div className={styles.BlogsTitle}>
                            <h3>2. How to learn JavaScript?</h3>
                        </div>
                        <div className={styles.BlogsDescription}>
                            Learning JavaScript involves a combination of understanding core concepts, practicing
                            coding, and building projects.
                            1. Master the Fundamentals:
                            Syntax and Data Types:
                            Learn how JavaScript code is structured, including variables, data types (numbers, strings,
                            booleans, arrays, objects), and operators.
                            Control Flow:
                            Understand if/else statements, switch statements, and loops (for, while) to control program
                            execution.
                            Functions:
                            Learn to define and use functions to organize and reuse code.
                            DOM Manipulation:
                            As JavaScript is often used for web development, understanding how to interact with HTML and
                            CSS using the Document Object Model (DOM) is crucial.
                        </div>
                    </div>
                    <div className={styles.BlogsItem}>
                        <div className={styles.BlogsTitle}>
                            <h3>3. How to learn PHP?</h3>
                        </div>
                        <div className={styles.BlogsDescription}>
                            Learning PHP involves understanding fundamental programming concepts, setting up a
                            development environment, and practicing through building projects.
                            1. Learn Fundamental Programming Concepts:
                            Variables and Data Types:
                            Understand how to declare variables and work with different data types (strings, numbers,
                            booleans, arrays).
                            Operators:
                            Learn about arithmetic, assignment, comparison, and logical operators.
                            Control Structures:
                            Master conditionals (if/else, switch) and loops (for, while, foreach) for controlling
                            program flow.
                        </div>
                    </div>

                </div>
            </main>

        </div>);
}
