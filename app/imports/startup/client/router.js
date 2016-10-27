import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/login', {
  name: 'Login_page',
  action() {
    BlazeLayout.render('Login_Page');
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

FlowRouter.route('/find-collaborator', {
  name: 'Find_Collaborator_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Find_Collaborator_Page' });
  },
});

FlowRouter.route('/collab-search-results', {
  name: 'Collaborator_Results_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Collaborator_Results_Page' });
  },
});

FlowRouter.route('/collaborator', {
  name: 'Collaborator_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Collaborator_Page' });
  },
});

FlowRouter.route('/project', {
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
