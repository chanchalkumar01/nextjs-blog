import {NextResponse} from 'next/server';
import fs from 'fs';
import path from 'path';

// Comment BY chanchal main lap


export async function POST(request) {
    try {
        const newBlogPost = await request.json();
        const dirPath = path.join(process.cwd(), 'data', 'posts-data');
        const filePath = path.join(dirPath, 'postBlogs.json');

        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        let existingData = [];
        if (fs.existsSync(filePath)) {
            try {
                const fileData = fs.readFileSync(filePath, 'utf8');
                existingData = JSON.parse(fileData);
            } catch (readError) {
                // console.error('Error reading file:', readError);
                existingData = [];
            }
        }

        let baseSlug = newBlogPost.formTitle
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '');

        let finalSlug = baseSlug;
        let counter = 1;

        while (existingData.some(post => post.slug === finalSlug)) {
            counter++;
            finalSlug = `${baseSlug}-${counter}`;
        }

        const postWithUniqueSlug = {
            id: Date.now(),
            slug: finalSlug,
            title: newBlogPost.formTitle,
            content: newBlogPost.formContent,

        }

        const updatedData = [...existingData, postWithUniqueSlug];

        fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));

        return NextResponse.json({
            success: true,
            message: 'Data saved successfully!',
            slug: finalSlug
        });

    } catch (error) {
        console.error('Full error details:', error);
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
        const filePath = path.join(process.cwd(), 'data', 'posts-data', 'postBlogs.json');

        if (!fs.existsSync(filePath)) {
            return NextResponse.json([]);
        }

        const fileData = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileData);

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: 'Error reading data' },
            { status: 500 }
        );
    }
}
