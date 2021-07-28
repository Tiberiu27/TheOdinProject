import React, { Component } from "react";
import './styles/App.css'
import Navigation from "./components/Navigation";
import GeneralInfoEdit from "./components/editComponents/GeneralInfoEdit";
import GeneralInfoShow from "./components/showComponents/GeneralInfoShow";
import EduInfoEdit from "./components/editComponents/EduInfoEdit";
import EduInfoShow from "./components/showComponents/EduInfoShow";
import WorkInfoEdit from "./components/editComponents/WorkInfoEdit";
import WorkInfoShow from "./components/showComponents/WorkInfoShow";

class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        name: 'Name',
        surname: 'Surname',
        email: 'placeholder@place.com',
        phone: '123321123',
      },
      eduInfo: [
        {
            school: 'School Ttile',
            study: 'Title of study',
            startDate: 'Beginning of time',
            finishDate: 'End of time'
        },
      ],
      workInfo: [
        {
          company: 'My company',
          title: 'Janitor',
          chores: ' Cleaning toilets\n Taking the thrash out\n Smoking',
          startDate: 'Beginning of time',
          finishDate: 'End of time'
        }
      ]
    }
  }

  submitForm = (divId, callback) => {
    let values = [];
    document.querySelectorAll(`#${divId} input, #${divId} textarea`).forEach(input => {
    values.push(input.value);
    input.value = '';
    });
    callback(...values);
  };

  submitGeneralInfo = (name, surname, email, phone) => {
    this.setState({
      generalInfo: {
        name, surname, email, phone
      }
    });
  };

  submitEduInfo = (school, study, startDate, finishDate) => {
    const array = this.state.eduInfo;
    array.unshift({ school, study, startDate, finishDate });

    this.setState({
      eduInfo: array
    });
  };

  submitWorkInfo = (company, title, chores, startDate, finishDate) => {
    const array = this.state.workInfo;
    array.unshift({ company, title, chores, startDate, finishDate });

    this.setState({
      workInfo: array
    });
  }

  deleteItem = (item, category) => {
    const array = this.state[category];
    const arrayIndex = array.indexOf(item);
    array.splice(arrayIndex, 1);
    this.setState({
      category: array
    });
  };

  render() {
    return(
      <div>
        <Navigation/>
        <div className="main-container">
          <div className='left-container'>
            <GeneralInfoShow generalInfo={this.state.generalInfo}/>
            <EduInfoShow eduInfo={this.state.eduInfo} deleteItem={this.deleteItem}/>
            <WorkInfoShow workInfo={this.state.workInfo} deleteItem={this.deleteItem}/>
          </div>
          <div className='right-container'>
            <GeneralInfoEdit submitInfo={this.submitGeneralInfo} submitForm={this.submitForm}/>
            <EduInfoEdit submitInfo={this.submitEduInfo} submitForm={this.submitForm}/>
            <WorkInfoEdit submitInfo={this.submitWorkInfo} submitForm={this.submitForm}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
