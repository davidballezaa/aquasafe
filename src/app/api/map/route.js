import executeQuery from '../../../../lib/db';

export async function GET() {
    const res = await executeQuery({
        query: 'SELECT * FROM aquasafe',
        values: [],
    });

    const data = JSON.parse(JSON.stringify(res));

    return Response.json({ data });
}
