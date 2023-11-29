import executeQuery from '../../../../lib/db';

export async function GET() {
    const res = await executeQuery({
        query: '',
        values: [],
    });

    const data = JSON.parse(JSON.stringify(res));

    return Response.json({ data });
}
