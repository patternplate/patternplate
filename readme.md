> Create flexible, powerful and comprehensive Living Style Guides with ease.

<p align="center">
  <img
    alt="patternplate-logo"
    src="https://rawgit.com/sinnerschrader/patternplate/master/static/images/logo-animated.svg"
    width="150"
    height="150" />
  <h1 align="center">patternplate</h1>
</p>

patternplate is a platform for the creation and maintenance of [Living Style Guides](http://styleguides.io/) focusing on component-driven frontend design, code reusability and developer ergonomics.

## Why should I use patternplate?
patternplate is not the only Living Style Guide system in town. [styleguides.io](http://styleguides.io/tools.html) has a great collection of available tools. We like to think that patternplate comes with several concepts and approaches setting it considerably apart from other solutions.

### The source is the Style Guide
A Living Style Guide should come at low cost for your development velocity. To achieve this patternplate takes cues from Convention over Configuration and employs component-driven principles to understand the contents of the patterns you create - enabling different views on your source at virtually no cost.

### Transparent dependencies
 By knowing all the relations of all your source files to each other and the resulting artifacts patternplate can help you to refactor, maintain and create complex component hierarchies without breaking a sweat. See [⇨ pattern concept](#the-pattern-concept) for details.

### Reusability is king
patternplate is built around the idea that you'll actually want other people to use and deploy your code. If this involves delivering prebuilt bundles or exposing all your components as distinct API is up to you – we have your back.

## Feature comparison
This comparison table pits patternplate and some selected solutions.

```
stay tuned
```
---

## Getting started

### Prerequisites
* node `>= 4`
* npm `>= 3`

### Installation
```shell
npm install --save patternplate
```

### Usage
```shell
# patternplate exposes a command line interface
patternplate # start the server
patternplate-console [taskName] # execute a build task
```

## Development
patternplate joins several project for easy installation and deployments. See the UML description below for a rough overview.

![patternplate](http://g.gravizo.com/g?
@startuml ;
skinparam monochrome true;
skinparam shadowing false;
skinparam backgroundColor transparent;
skinparam component {;
  backgroundColor<<core>> lightgray;
};
component patternplate {;
   component [boilerplate-server] as pp.bs;
   component "patternplate-client /" as pc {;
     component [boilerplate-server] as pc.bs;
     component [patternplate-ui] as pc.pu;
   };
   component "patternplate-server /api" as ps {;
     component [boilerplate-server] as ps.bs;
     component [patternplate-core] <<core>> as ps.pc;
     component [patternplate-transforms] as ps.tr;
   };
};
component "patternplate-manager" {;
component [patternplate-core] <<core>> as pm.pc;
};
component [Browser] as browser;
component "/patterns" as patterns;
pp.bs --> ps : mount;
pp.bs --> pc : mount;
pc.bs <..> ps.bs;
ps.pc --> patterns : parses;
ps.tr --> patterns : "works on";
pm.pc --> patterns : "works on";
browser <..> pp.bs;
@enduml
)


---
Copyright 2016 by [SinnerSchrader Deutschland GmbH](https://github.com/sinnerschrader) and [contributors](../../graphs/contributors). Released under the [MIT license](./license.md).
