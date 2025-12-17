export default function Cover({ title, subtitle }) {
    return (
        <div style={{ padding: '50px', background: '#eee', textAlign: 'center' }}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
}
