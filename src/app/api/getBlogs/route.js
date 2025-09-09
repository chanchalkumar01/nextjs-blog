import {NextResponse} from "next/server";

export async function GET() {

    try {
        const {
            GITHUB_TOKEN,
            GITHUB_USERNAME,
            GITHUB_REPO,
            GITHUB_PATH
        } = process.env;

        if (!GITHUB_TOKEN || !GITHUB_USERNAME || !GITHUB_REPO || !GITHUB_PATH) {
            return NextResponse.json(
                { error: 'GitHub configuration missing' },
                { status: 500 }
            );
        }

        const response = await fetch(
            `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/${GITHUB_PATH}`,
            {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'User-Agent': 'Next.js-Blog-App',
                    'Accept': 'application/vnd.github.v3+json'
                }
            }
        );

        if (response.ok) {
            const fileData = await response.json();
            const content = Buffer.from(fileData.content, 'base64').toString('utf8');

            let data;
            try {
                data = JSON.parse(content);
                if (!Array.isArray(data)) {
                    data = [data];
                }
            } catch (e) {
                data = [];
            }

            return NextResponse.json(data);
        } else if (response.status === 404) {
            return NextResponse.json([]);
        } else {
            new Error(`GitHub API error: ${response.status}`);
        }
    } catch (error) {
        console.error('Error reading data from GitHub:', error);
        return NextResponse.json(
            { error: 'Error reading data from GitHub' },
            { status: 500 }
        );
    }
}