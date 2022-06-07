import Heading from "./heading";
import List from "./list";

const Card =(props)=>{
    const {heading,list} = props;
    return (
        <>
            <Heading heading={heading} />
            <List list={list} />
        </>
        
    
    );
};

export default Card;

