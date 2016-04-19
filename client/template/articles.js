import { Template } from 'meteor/templating';
import './articles.html';

Template.body.helpers({
    articles: [
        { articleTitle: 'This is task 1' ,author:'cxc',content:'cxc1'},
        { articleTitle: 'This is task 2' ,author:'cxc',content:'cxc2'},
        { articleTitle: 'This is task 3' ,author:'cxc',content:'cxc3'},
    ],
});
