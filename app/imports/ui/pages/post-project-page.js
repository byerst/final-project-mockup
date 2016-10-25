import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Projects, ProjectSchema } from '../../api/projects/projects.js';

/* eslint-disable no-param-reassign */

const displayErrorMessages = 'displayErrorMessages';

Template.Post_Project_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = ProjectSchema.namedContext('Post_Project_Page');
});

Template.Post_Project_Page.helpers({
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  displayFieldError(fieldName) {
    const errorKeys = Template.instance().context.invalidKeys();
    return _.find(errorKeys, (keyObj) => keyObj.name === fieldName);
  },
});

// Template.Add_Contact_Page.onRendered(function enableSemantic() {
//   const instance = this;
//   instance.$('select.ui.dropdown').dropdown();
//   instance.$('.ui.selection.dropdown').dropdown();
//   instance.$('select.dropdown').dropdown();
//   instance.$('.ui.checkbox').checkbox();
//   instance.$('.ui.radio.checkbox').checkbox();
// });

Template.Post_Project_Page.events({
  'submit .project-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const projectName = event.target.projectName.value;
    const description = event.target.description.value;
    const contactName = event.target.contactName.value;
    const email = event.target.email.value;
    console.log(projectName);
    console.log(description);
    console.log(contactName);
    console.log(email);

    const newProject = { projectName, description, contactName, email };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newStudentData reflects what will be inserted.
    ProjectSchema.clean(newProject);
    // Determine validity.
    instance.context.validate(newProject);
    if (instance.context.isValid()) {
      Projects.insert(newProject);
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Home_Page');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});

