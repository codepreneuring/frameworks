export default function Card({ header, body }) {
    const styles = {
        container: {
            width: "250px",
            height: "250px",
            border: "1px solid lightgray",
            borderRadius: "5px",
            dispay: "flex",
            flexDirection: "column",
        },
        header: {
            fontSize: "30px",
            fontWeight: "bold",
            padding: "20px 20px 0px 20px",
        },
        body: {
            padding: "20px",
        },
    };

    return (
        <div style={styles.container}>
            <span style={styles.header}>{header}</span>
            <div style={styles.body}>{body}</div>
        </div>
    );
}
