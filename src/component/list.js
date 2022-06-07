import ListItem from "./listitem";

const List = (props) => {
    const { list } = props;
    return (
        <>
            {list.map((listItem) => (
                <ListItem listItem={listItem} />
            ))}

        </>

    );
};

export default List;