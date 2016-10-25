import { Projects } from '../../api/projects/projects.js';
import {} from 'meteor/underscore';

/**
 * A list of Projects to pre-fill the Collection.
 * @type {*[]}
 */
const projectSeeds = [
  {
    projectName: 'Tim',
    description: 'Byers',
    contactName: '808-123-4567',
    email: 'byerst@hawaii.edu',
  },
  {
    projectName: 'Tim2',
    description: 'Byers2',
    contactName: '808-123-4567-2',
    email: 'byerst@hawaii.edu2',
  },
  {
    projectName: 'Tim3',
    description: 'Byers3',
    contactName: '808-123-4567-3',
    email: 'byerst@hawaii.edu3',
  },
];

/**
 * Initialize the Contact collection if empty with seed data.
 */
if (Projects.find().count() === 0) {
  _.each(projectSeeds, function seedProjects(project) {
    Projects.insert(project);
  });
}
