          
export async function GET({ params, request }) {
    const res = await fetch(`${import.meta.env.SITE}/data/imagenes.json`)
    const data = await res.json()
    return new Response(JSON.stringify(data), {
        headers: { "content-type": "application/json"}
    })
}