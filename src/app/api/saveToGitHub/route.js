import { NextResponse } from 'next/server';


export async function POST(request) {
    try {
        const newBlogPost = await request.json();

        // GitHub environment variables
        const {
            GITHUB_TOKEN,
            GITHUB_USERNAME,
            GITHUB_REPO,
            GITHUB_PATH
        } = process.env;

        // Check if all environment variables are set
        if (!GITHUB_TOKEN || !GITHUB_USERNAME || !GITHUB_REPO || !GITHUB_PATH) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'GitHub configuration missing. Please check environment variables.'
                },
                { status: 500 }
            );
        }

        // 1. Pehle existing data fetch karo GitHub se
        let existingData = [];
        let sha = null;

        try {
            const getResponse = await fetch(
                `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/${GITHUB_PATH}`,
                {
                    headers: {
                        'Authorization': `token ${GITHUB_TOKEN}`,
                        'User-Agent': 'Next.js-Blog-App',
                        'Accept': 'application/vnd.github.v3+json'
                    }
                }
            );

            if (getResponse.ok) {
                const fileData = await getResponse.json();
                sha = fileData.sha;

                const content = Buffer.from(fileData.content, 'base64').toString('utf8');
                existingData = JSON.parse(content);

                if (!Array.isArray(existingData)) {
                    console.log('Existing data is not array, converting to array');
                    existingData = [existingData];
                }
            }
        } catch (error) {
            console.log('No existing file found, starting with empty array');
            existingData = [];
        }

        // 2. Unique slug generate karo
        let baseSlug = newBlogPost.formTitle
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '');

        let finalSlug = baseSlug;
        let counter = 1;

        if (Array.isArray(existingData)) {
            while (existingData.some(post => post.slug === finalSlug)) {
                counter++;
                finalSlug = `${baseSlug}-${counter}`;
            }
        }

        // 3. Naya post object banayo
        const postWithUniqueSlug = {
            id: Date.now(),
            slug: finalSlug,
            title: newBlogPost.formTitle,
            content: newBlogPost.formContent,
            date: new Date().toISOString()
        };

        // 4. ✅ NAYA POST BEGINNING MEIN ADD KARO
        const updatedData = [postWithUniqueSlug, ...existingData];

        // 5. GitHub par file update karo
        const updateResponse = await fetch(
            `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/${GITHUB_PATH}`,
            {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Content-Type': 'application/json',
                    'User-Agent': 'Next.js-Blog-App',
                    'Accept': 'application/vnd.github.v3+json'
                },
                body: JSON.stringify({
                    message: `Add new blog post: ${newBlogPost.formTitle}`,
                    content: Buffer.from(JSON.stringify(updatedData, null, 2)).toString('base64'),
                    sha: sha
                })
            }
        );

        if (!updateResponse.ok) {
            const errorText = await updateResponse.text();
            console.error('GitHub API error:', errorText);
            return NextResponse.json(
                {
                    success: false,
                    error: 'Failed to save data to GitHub',
                    details: errorText
                },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Data saved successfully to GitHub!',
            slug: finalSlug
        });

    } catch (error) {
        console.error('Error saving to GitHub:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to save data',
                details: error.message
            },
            { status: 500 }
        );
    }
}

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