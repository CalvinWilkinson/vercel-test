export default function Home() {
    const vercelUrl = process.env.VERCEL_URL;

    return (
        <div>
            <h1>Vercel Test!</h1>
            <p>VERCEL_URL: {vercelUrl ? vercelUrl : "VERCEL_URL IS NOT DEFINED."}</p>
        </div>
    );
}
