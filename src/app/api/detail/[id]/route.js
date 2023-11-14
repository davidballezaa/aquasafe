import executeQuery from '../../../../../lib/db';

export async function GET(request, { params }) {
    const aquaSafeId = params.id;

    const res = await executeQuery({
        query: 'SELECT c.id_Aquasafe, c.latitud, c.longitud, p.lectura_ph, t.lectura_temp, i.lectura_ir, m.fecha FROM coords as c, muestra_a as m, ph as p, ir as i, temp as t WHERE c.id_Aquasafe = m.id_Aquasafe AND m.id_PH = p.id_PH AND m.id_Temp = t.id_Temp AND m.id_IR = i.id_IR AND m.id_Aquasafe = ?',
        values: [aquaSafeId],
    });

    const data = JSON.parse(JSON.stringify(res));

    return Response.json({ data });
}
