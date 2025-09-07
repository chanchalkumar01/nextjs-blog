import styles from "@/app/style/page.module.css";
import Navbar from "@/app/component/navbar/navbar";

export default function About() {
    return <>
        <div className={styles.page}>
            <main className={styles.main}>
                <Navbar></Navbar>
                <h1>About Us</h1>
                <hr/>
                <div>
                    Content refers to any creative expression in digital or traditional media designed to inform,
                    educate, entertain, or persuade an audience through various forms such as text, images, audio,
                    video, and interactive elements. In essence, content is the "what" that is communicated, the
                    information or message delivered to a target audience via specific channels with the goal of
                    providing value, building engagement, or prompting action.
                    Key Characteristics
                    Information Delivery:
                    The primary purpose of content is to convey information, ideas, or messages to an audience.
                    Engagement:
                    Content aims to capture and hold an audience's attention, encouraging interaction through likes,
                    shares, comments, or other forms of participation.
                    Value Exchange:
                    Effective content provides value, whether it's educational, emotional, or entertaining, giving the
                    audience a reason to consume it.
                    Communication Tool:
                    Content serves as a bridge between a brand or creator and its audience, conveying a specific message
                    to a defined group.
                    Forms of Content
                    Content can manifest in numerous formats across different mediums:
                    Written: Blog posts, articles, social media posts, books.
                    Visual: Images, infographics, illustrations, graphics.
                    Audio: Podcasts, music, spoken word.
                    Video: Short videos, documentaries, tutorials, vlogs.
                    Interactive: Quizzes, polls, interactive graphics.
                    Purpose and Application
                    Marketing & Branding: Brands use content to build reputation, explain products, differentiate
                    themselves from competitors, and foster trust and loyalty.
                    Education: Content can serve as a valuable tool for teaching and sharing knowledge on various
                    subjects.
                    Entertainment: Some content is created purely for amusement and enjoyment.
                    Key Elements of Content
                    Message: The core idea or information the audience needs to know.
                    Purpose: The specific goal the content aims to achieve, such as informing or entertaining.
                    Audience: The specific group of people the content is intended for.
                    Channel: The platform or medium through which the content is distributed (e.g., social media,
                    websites, email).
                    What is Content: Definitions, Types & How Can It Help Brand? - Justwords
                    11 Apr 2025 — Content aims to elicit an emotion or engage the audience by providing practical
                    information that tells a story in a rel...
                </div>
            </main>
        </div>
    </>
}