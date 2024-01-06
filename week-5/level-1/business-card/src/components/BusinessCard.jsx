export const BusinessCard = ({name, description, socialMediaNames, interests}) => {
    return (
        <div style={styles.card}>
            <h1 style={styles.text}>{name}</h1>
            <p style={styles.text}>{description}</p>
            <h2 style={styles.text}>Interests</h2>
            <ul style={styles.list}>
            {interests.map(interest => {
                return <li style={styles.text}>{interest}</li>
            })}
            </ul>
            {socialMediaNames.map(socialMedia => {
                return <button style={{margin: "10px"}}>{socialMedia}</button>
            })}
        </div>
    )
}

const styles = {
    card: {
        margin: "10px",
        padding: "15px",
        backgroundColor: "grey",
        borderRadius: "10px",
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    },
    text: {
        color: "black"
    },
    list: {
        listStyle: "none", 
        padding: "1px"
    }
}