import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/find-project', {
  name: 'Find_Project_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Find_Project_Page' });
  },
});

FlowRouter.route('/post-project', {
  name: 'Post_Project_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Post_Project_Page' });
  },
});

FlowRouter.route('/project/:_id', {
  name: 'Project_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Project_Page' });
  },
});

FlowRouter.route('/add-contact', {
  name: 'Add_Contact_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Contact_Page' });
  },
});

FlowRouter.route('/edit-contact/:_id', {
  name: 'Edit_Contact_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Contact_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
