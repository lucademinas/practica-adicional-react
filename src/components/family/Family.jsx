import FamilyMember from "../familyMember/FamilyMember";

const Family = ({sortedPersons}) => {

    return(
        <div>
            {sortedPersons.map((person) => (
                <FamilyMember name = {person.name} age = {person.age}/>
            ))}
        </div>
    );
};

export default Family;