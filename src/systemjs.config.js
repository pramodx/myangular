var map = {
    'app': 'app',
    'rxjs': 'vendor/rxjs',
    '@angular': 'vendor/@angular',
    'ng2-bootstrap': 'vendor/ng2-bootstrap'
  // ,
  //   'moment': 'vendor/moment/moment.js'
};

var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'ng2-bootstrap': { defaultExtension: 'js' }
};

var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade'
];

packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
});

var config = {
    map: map,
    packages: packages
};

System.config(config);
