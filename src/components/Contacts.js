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

class Contacts extends Component {
    constructor(props){
        super(props);
        this.maleCheck = React.createRef();
        this.femaleCheck = React.createRef();
        this.neitherCheck = React.createRef();
    }

    state = {
       contacts: contacts,
    }

    updateSearch = (e) =>{
        const genderContacts = contacts.filter(contact=>(this.maleCheck.current.checked === true && contact.gender === 'male')||(this.femaleCheck.current.checked === true && contact.gender === 'female')||(this.neitherCheck.current.checked === true && typeof contact.gender === "undefined"));
        const filteredContacts = genderContacts.filter(contact=>(contact.firstName + ' ' + contact.lastName).toLowerCase().indexOf(e.target.value.toLowerCase())>=0 || contact.phone.toLowerCase().indexOf(e.target.value)>=0);
        console.log(filteredContacts);
        this.setState({contacts:filteredContacts});
    }

    render(){
        return(
            <div>
                <div>
                    <input type="text" onChange={this.updateSearch}></input>
                </div>
                <div>
                    <input type="checkbox" ref={this.maleCheck} id="male" defaultChecked/>
                    <label htmlFor="male">Ч</label>
                    <input type="checkbox" ref={this.femaleCheck} id="female" defaultChecked/>
                    <label htmlFor="female">Ж</label>
                    <input type="checkbox" ref={this.neitherCheck} id="neither" defaultChecked/>
                    <label htmlFor="neither">Не визначено</label>
                </div>
                {this.state.contacts.map((c,i)=><Contact firstName={c.firstName} lastName={c.lastName} number={c.phone} gender={c.gender} key={i} />)}
            </div>
        )
    }
}

export default Contacts