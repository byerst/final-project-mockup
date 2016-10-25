import { Meteor } from 'meteor/meteor';
import { Projects } from '../../api/projects/projects.js';

Meteor.publish('Projects', function publishProjectsData() {
  return Projects.find();
});
