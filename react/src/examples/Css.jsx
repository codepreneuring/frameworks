export default function Css() {
    const styles = {
        span: {
            fontSize: "30px",
        },
        trash: {
            color: "blue",
            fontWeight: "bold",
        },
    };

    return (
        <>
            <span style={{ color: "orange", fontWeight: "bold", ...styles.span }}>Svelte</span>
            <span style={styles.span}>&gt;</span>
            <span style={{ ...styles.span, ...styles.trash }}>React</span>
        </>
    );
}
