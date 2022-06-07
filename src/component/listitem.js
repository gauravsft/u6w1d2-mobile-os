
const ListItem=(props)=>{
    const { listItem }=props;

    return Check(listItem);
};


export default ListItem;


const Check=(listItem)=>{
    if(listItem.id===201 || listItem.id===202){
        return <li style={{listStyleType: "square", marginLeft:"12px"}}>{listItem.title}</li>;
    }
    else if(listItem.id===204){
        return <li style={{listStyleType: "circle" , marginLeft:"12px"}}>{listItem.title}</li>;
    }
    else{
        return <li style={{marginLeft:"12px"}}>{listItem.title}</li>;
    }
}