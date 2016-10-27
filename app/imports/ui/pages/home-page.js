/*
import { Template } from 'meteor/templating';
import { Projects } from '../../api/projects/projects.js';
*/

/*
Template.Home_Page.helpers({


  //@returns {*} All of the Contacts documents.

  projectList() {
    return Projects.find();
  },
});

Template.Home_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Projects');
  });
});
*/

Template.Home_Page.onRendered(function () {
  this.$('.special.cards .image').dimmer({
    on: 'hover'
  });

});