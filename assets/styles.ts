import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        paddingBottom: 20,
        paddingTop: 20,
    },
    item: {
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 10,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    header: {
        fontSize: 34,
        color: "#fff",
        fontWeight: "bold",
        paddingTop: 10,
        paddingLeft: 20,
        paddingBottom: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#fff",
        paddingBottom: 10,
    },
    descr: {
        fontSize: 16,
        color: "#fff",
    },
    img: {
        width: 350,
        height: 200,
        margin: 5,
        borderRadius: 5,
    },
    heading: {
        textAlign: "center",
        fontSize: 34,
        color: "#fff",
        fontWeight: "bold",
    }
});


export const itemStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        paddingBottom: 20,
        paddingTop: 20,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#fff",
        paddingBottom: 10,
        textAlign: "center"
    },
    descr: {
        fontSize: 16,
        color: "#fff",
        paddingTop: 20,
        textAlign: "justify"
    },
    img: {
        width: 365,
        height: 300,
        margin: 5,
        borderRadius: 5,
    },
    heading: {
        textAlign: "center",
        fontSize: 34,
        color: "#fff",
        fontWeight: "bold",
    }
})