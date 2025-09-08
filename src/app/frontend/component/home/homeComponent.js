import styles from "@/app/style/page.module.css";
import Image from "next/image";

export default function HomeComponent() {
    return <>

        <h1>My Blog Site</h1>
        <Image
            className={styles.logo}
            src="/project-imgs/dev-img.jpg"
            alt="Next.js logo"
            width={280}
            height={158}

        />
        <hr/>
        <h2> Blog Posts</h2>
        <hr/>
        <div className={styles.Blogs}>
            <div className={styles.BlogsItem}>
                <div className={styles.BlogsTitle}>

                    <h3>1. How to learn Next Js?</h3>

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
            <div className={styles.BlogsItem}>
                <div className={styles.BlogsTitle}>
                    <h3>4. How to learn Flutter?</h3>
                </div>
                <div className={styles.BlogsDescription}>
                    Learning Flutter involves understanding both the Dart programming language and the Flutter
                    framework itself. A structured approach can facilitate effective learning:
                    Learn Dart Fundamentals:
                    Begin by understanding the basics of Dart, including variables, data types, control flow,
                    functions, and object-oriented programming concepts.
                    Utilize resources like the official Dart language tour and codelabs on dart.dev.
                    Install Flutter and Set Up Your Environment:
                    Follow the installation instructions on flutter.dev/get-started/install to set up the
                    Flutter SDK and necessary tools like an IDE (e.g., VS Code or Android Studio).
                    Understand Flutter Widgets:
                    Grasp the core concept of &#34;everything is a widget&#34; in Flutter.
                    Learn about different types of widgets, particularly stateless and stateful widgets, and how
                    to use them to build user interfaces.
                    Explore common widgets like Scaffold, Text, Image, Column, Row, and ListView.
                    Practice Building UI and Layouts:

                </div>
            </div>
        </div>
    </>
}