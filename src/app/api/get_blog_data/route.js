
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        return NextResponse.json([{ id: 1, title: "Test" }]);
    } catch (error) {
        return NextResponse.json({ error: "Failed" }, { status: 500 });
    }
}

export async function POST() {

}