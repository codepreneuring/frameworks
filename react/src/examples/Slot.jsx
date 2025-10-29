export default function Slot({ header, body }) {
    const styles = {
        container: {
            display: "flex",
            gap: "10px",
        },
        header: {
            color: "blue",
        },
        body: {
            color: "red",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>{header}</div>
            <div style={styles.body}>{body}</div>
        </div>
    );
}
