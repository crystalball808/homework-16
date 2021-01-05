import React,{Component} from 'react';
import Contact from './Contact';

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

class Contacts extends React.Component {

    state = {
       contacts: contacts,
    }

    updateSearch = (e) =>{
        const filteredContacts = contacts.filter(contact=>(contact.firstName + ' ' + contact.lastName).toLowerCase().indexOf(e.target.value.toLowerCase())>=0 || contact.phone.toLowerCase().indexOf(e.target.value)>=0);
        console.log(filteredContacts);
        this.setState({contacts:filteredContacts});
    }

    render(){
        return(
            <div>
                <div>
                    <input type="text" onChange={this.updateSearch}></input>
                </div>
                {this.state.contacts.map((c)=><Contact firstName={c.firstName} lastName={c.lastName} number={c.phone} gender={c.gender} />)}
            </div>
        )
    }
}

export default Contacts