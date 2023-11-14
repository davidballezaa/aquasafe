import executeQuery from '../../../../lib/db';

export async function GET() {
    const res = await executeQuery({
        query: 'WITH RankedMuestra AS (SELECT c.id_Aquasafe, c.latitud, c.longitud, p.lectura_ph, t.lectura_temp, i.lectura_ir, m.estado, m.fecha, ROW_NUMBER() OVER (PARTITION BY c.id_Aquasafe ORDER BY m.fecha DESC) AS RowNum FROM coords AS c JOIN muestra_a AS m JOIN ph AS p JOIN ir as i JOIN temp AS t WHERE c.id_Aquasafe = m.id_Aquasafe AND m.id_PH = p.id_PH AND m.id_Temp = t.id_Temp AND m.id_IR = i.id_IR) SELECT id_Aquasafe, latitud, longitud, lectura_ph, lectura_temp, lectura_ir, estado, fecha FROM RankedMuestra WHERE RowNum = 1',
        values: [],
    });

    const data = JSON.parse(JSON.stringify(res));

    return Response.json({ data });
}
