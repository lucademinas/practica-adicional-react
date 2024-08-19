import Person from "../person/Person";

const Persons = ({names}) => {

    const filterNames = names.filter((name) => name[0] === "P")

    return(
        <div>
            {filterNames.map((name) => (
                <Person name = {name}/>
            ))}
        </div>
      
    );
};

export default Persons;