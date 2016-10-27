import { Template } from 'meteor/templating';
import { Projects } from '../../api/projects/projects.js';

Template.Collaborator_Results_Page.helpers({

  /**
   * @returns {*} All of the Contacts documents.
   */
  projectList() {
    return Projects.find();
  },
});

Template.Collaborator_Results_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Projects');
  });
});