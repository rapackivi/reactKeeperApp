import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contacts){
  return <Card
  id={contacts.id}
  key={contacts.id}
  name={contacts.name}
  img={contacts.imgURL}
  tel={contacts.phone}
  email={contacts.email}
/>
}

function App() {
  return (
    <div>
      <Avatar 
      name="Alexey Semenihin" 
      img="https://scontent.flwo4-1.fna.fbcdn.net/v/t31.0-8/23116906_1449519808458389_6227278501393831467_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=Jfz-32_Km9gAX_NGF23&_nc_ht=scontent.flwo4-1.fna&oh=058afa5eebde7ffeac5791680cce34e6&oe=5EF09DA2"
      />
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
