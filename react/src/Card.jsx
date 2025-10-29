export default function Card({ header, body }) {
    return (
        <>
            <div className="container">
                <span className="header">{header}</span>
                <div className="body">{body}</div>
            </div>

            <style jsx>{`
                .container {
                    width: 300px;
                    height: 200px;
                    border: 1px solid lightgray;
                    padding: 20px;
                    overflow: auto;
                    border-radius: 5px;

                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .header {
                    font-size: 30px;
                    font-weight: bold;
                }
            `}</style>
        </>
    );
}
