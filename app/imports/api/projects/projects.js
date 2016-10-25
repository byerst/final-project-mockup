import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Projects = new Mongo.Collection('Projects');

/**
 * Create the schema for Projects
 */
export const ProjectSchema = new SimpleSchema({
  projectName: {
    label: 'project-name',
    type: String,
    optional: false,
    max: 200,
  },
  description: {
    label: 'description',
    type: String,
    optional: false,
    max: 500,
  },
  contactName: {
    label: 'contact-name',
    type: String,
    optional: false,
    max: 200,
  },
  email: {
    label: 'email',
    type: String,
    optional: false,
    max: 200,
  },
});

Projects.attachSchema(ProjectSchema);
