var casper = require('casper').create();

casper.start('http://google.com?q=hydra');

casper.then(function() {
    this.echo('Hail hydra! We are on ' + this.getTitle());    
});

casper.then(function() {
	this.echo('Hail hydra! Cheeese!');
    this.captureSelector('hydra.png', 'html');
});

casper.run();