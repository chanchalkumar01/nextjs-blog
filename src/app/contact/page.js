import styles from "@/app/style/page.module.css";
import Navbar from "@/app/component/navbar/navbar";

export default function Contact() {
    return <>
        <div className={styles.page}>
            <main className={styles.main}>
                <Navbar></Navbar>

                <h1>Contact Us</h1>
                <hr/>
                <div>
                    "Contact content" refers to the specific text and elements on a website's or digital document's
                    contact page, including contact forms, email addresses, phone numbers, postal addresses, social
                    media links, and calls to action. The goal is to make it easy for visitors to find and use the
                    appropriate channel to get in touch with the organization or individual.
                    Key Elements of Contact Content
                    Contact Form: A form to collect visitor information and inquiries directly on the page.
                    Contact Details: Essential information such as email addresses, phone numbers, and physical
                    addresses.
                    Social Media Links: Buttons or links to connect on preferred social media platforms.
                    Call to Action (CTA): A prompt telling visitors what to do next, such as signing up for a newsletter
                    or checking out products.
                    FAQs: A list of frequently asked questions and their answers to address common visitor needs.
                    Other Channels: Options for live chat, a knowledge base, or links to helpful content on the website.
                    Best Practices for Contact Content
                    Keep it Simple: Avoid overcrowding the page with too much text or too many form fields.
                    Be Clear and Concise: Explain why someone should contact you and how you can solve their problems.
                    Make it Easy to Find: Place contact information in prominent areas of the website.
                    Include a Thank You: Redirect users to a thank you page after form submission to confirm their
                    message was received.
                    Segment Information: For businesses with diverse needs, organize contact options by category (e.g.,
                    support, sales, partners).
                    3 Best Contact Us Page Content & SEO Examples...
                </div>
            </main>
        </div>
    </>
}