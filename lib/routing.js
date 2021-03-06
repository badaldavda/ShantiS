FlowRouter.route('/',{
	name:'home',
	action(){
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/jobs', {
	name: 'jobs',
	action(){
		BlazeLayout.render('MainLayout',{main:'Jobs'});
	}

	
});

FlowRouter.route('/alljobs', {
	name: 'alljobs',
	action(){
		BlazeLayout.render('MainLayout',{main:'alljobs'});
	}
	});

FlowRouter.route('/job/:id', {
	name: 'job',
	action(){
		BlazeLayout.render('MainLayout',{main:'job'});
	}
	});

FlowRouter.route('/:id/orDoc', {
	name: 'orDoc',
	action(){
		BlazeLayout.render('MainLayout',{main:'orDoc'});
	}
	});

FlowRouter.route('/:id/ship', {
	name: 'ship',
	action(){
		BlazeLayout.render('MainLayout',{main:'ship'});
	}
	});
FlowRouter.route('/:id/yard', {
	name: 'yard',
	action(){
		BlazeLayout.render('MainLayout',{main:'yard'});
	}
	});
FlowRouter.route('/:id/checked', {
	name: 'checked',
	action(){
		BlazeLayout.render('MainLayout',{main:'docDocks'});
	}
	});
FlowRouter.route('/:id/delivery', {
	name: 'delivery',
	action(){
		BlazeLayout.render('MainLayout',{main:'delivery'});
	}
	});