<a name="1.7.3-0"></a>
## [1.7.3-0](https://github.com/sinnerschrader/patternplate/compare/v1.7.2...v1.7.3-0) (2017-05-19)



<a name="1.7.2"></a>
## [1.7.2](https://github.com/sinnerschrader/patternplate/compare/v1.7.1...v1.7.2) (2017-05-18)


### Bug Fixes

* improve log output on ci ([e4d6f2f](https://github.com/sinnerschrader/patternplate/commit/e4d6f2f))



<a name="1.7.1"></a>
## [1.7.1](https://github.com/sinnerschrader/patternplate/compare/v1.7.0...v1.7.1) (2017-05-18)


### Bug Fixes

* build sequentially by default ([f5a2400](https://github.com/sinnerschrader/patternplate/commit/f5a2400))



<a name="1.7.0"></a>
# [1.7.0](https://github.com/sinnerschrader/patternplate/compare/v1.6.1...v1.7.0) (2017-05-17)


### Bug Fixes

* allow transforms to set app.resources during init ([e18bcb9](https://github.com/sinnerschrader/patternplate/commit/e18bcb9))
* persists .resources to interface build ([2e2e3d6](https://github.com/sinnerschrader/patternplate/commit/2e2e3d6))
* support .out for target folder config ([b226112](https://github.com/sinnerschrader/patternplate/commit/b226112))


### Features

* ensure presence of app.resources[] ([9a98add](https://github.com/sinnerschrader/patternplate/commit/9a98add))
* update to server[@1](https://github.com/1).2, client[@1](https://github.com/1).4 ([ce40dc2](https://github.com/sinnerschrader/patternplate/commit/ce40dc2))



<a name="1.6.1"></a>
## [1.6.1](https://github.com/sinnerschrader/patternplate/compare/v1.6.0...v1.6.1) (2017-05-17)


### Bug Fixes

* trap console output when not in verbose mode ([b95f74a](https://github.com/sinnerschrader/patternplate/commit/b95f74a))



<a name="1.6.0"></a>
# [1.6.0](https://github.com/sinnerschrader/patternplate/compare/v1.5.0...v1.6.0) (2017-05-17)



<a name="1.5.0"></a>
# [1.5.0](https://github.com/sinnerschrader/patternplate/compare/v1.4.0...v1.5.0) (2017-05-17)


### Features

* add --verbose flag to build-interface ([7e24338](https://github.com/sinnerschrader/patternplate/commit/7e24338))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/sinnerschrader/patternplate/compare/v1.3.0...v1.4.0) (2017-03-27)


### Features

* bump patternplate-server ([bb169e0](https://github.com/sinnerschrader/patternplate/commit/bb169e0))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/sinnerschrader/patternplate/compare/v1.2.1...v1.3.0) (2016-12-14)


### Features

* bump patternplate-client ([5956611](https://github.com/sinnerschrader/patternplate/commit/5956611))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/sinnerschrader/patternplate/compare/v1.2.0...v1.2.1) (2016-12-14)



<a name="1.2.0"></a>
# [1.2.0](https://github.com/sinnerschrader/patternplate/compare/v1.1.1...v1.2.0) (2016-12-14)


### Features

* allow to filter patterns built for interface via flags ([f5880d9](https://github.com/sinnerschrader/patternplate/commit/f5880d9))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/sinnerschrader/patternplate/compare/v1.1.0...v1.1.1) (2016-12-13)


### Bug Fixes

* use values intead of registry ([735f0df](https://github.com/sinnerschrader/patternplate/commit/735f0df))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/sinnerschrader/patternplate/compare/v1.0.10...v1.1.0) (2016-12-13)


### Bug Fixes

* harden option lookup ([a10fb87](https://github.com/sinnerschrader/patternplate/commit/a10fb87))
* produce pages for folders ([cc50739](https://github.com/sinnerschrader/patternplate/commit/cc50739)), closes [#134](https://github.com/sinnerschrader/patternplate/issues/134)


### Features

* use notFound for 404.html ([66783cb](https://github.com/sinnerschrader/patternplate/commit/66783cb))



<a name="1.0.10"></a>
## [1.0.10](https://github.com/sinnerschrader/patternplate/compare/v1.0.9...v1.0.10) (2016-11-17)



<a name="1.0.9"></a>
## [1.0.9](https://github.com/sinnerschrader/patternplate/compare/v1.0.8...v1.0.9) (2016-11-17)


### Performance Improvements

* parallelize build-interface subtasks ([27d221c](https://github.com/sinnerschrader/patternplate/commit/27d221c))



<a name="1.0.8"></a>
## [1.0.8](https://github.com/sinnerschrader/patternplate/compare/v1.0.6...v1.0.8) (2016-11-16)


### Bug Fixes

* always print the install instruction after init ([6f7b2ad](https://github.com/sinnerschrader/patternplate/commit/6f7b2ad)), closes [#110](https://github.com/sinnerschrader/patternplate/issues/110)
* avoid memory leak by passing only result buffer ([ab75359](https://github.com/sinnerschrader/patternplate/commit/ab75359))
* removed whitespace for eslint ([882f6c1](https://github.com/sinnerschrader/patternplate/commit/882f6c1))



<a name="1.0.7"></a>
## [1.0.7](https://github.com/sinnerschrader/patternplate/compare/v1.0.6...v1.0.7) (2016-11-04)


### Bug Fixes

* always print the install instruction after init ([6f7b2ad](https://github.com/sinnerschrader/patternplate/commit/6f7b2ad)), closes [#110](https://github.com/sinnerschrader/patternplate/issues/110)
* removed whitespace for eslint ([882f6c1](https://github.com/sinnerschrader/patternplate/commit/882f6c1))



<a name="1.0.6"></a>
## [1.0.6](https://github.com/sinnerschrader/patternplate/compare/v1.0.5...v1.0.6) (2016-10-03)


### Bug Fixes

* use sander correctly ([aaba44e](https://github.com/sinnerschrader/patternplate/commit/aaba44e)), closes [#95](https://github.com/sinnerschrader/patternplate/issues/95)



<a name="1.0.5"></a>
## [1.0.5](https://github.com/sinnerschrader/patternplate/compare/v1.0.4...v1.0.5) (2016-09-29)



<a name="1.0.4"></a>
## [1.0.4](https://github.com/sinnerschrader/patternplate/compare/v1.0.3...v1.0.4) (2016-09-29)


### Bug Fixes

* force-quit patternplate console <cmd> ([fc723c4](https://github.com/sinnerschrader/patternplate/commit/fc723c4))



<a name="1.0.3"></a>
## [1.0.3](https://github.com/sinnerschrader/patternplate/compare/v1.0.2...v1.0.3) (2016-09-27)


### Bug Fixes

* **system:** forcefully quit console after task resolves ([391bcfa](https://github.com/sinnerschrader/patternplate/commit/391bcfa))



<a name="1.0.2"></a>
## [1.0.2](https://github.com/sinnerschrader/patternplate/compare/v1.0.1...v1.0.2) (2016-09-27)



<a name="1.0.1"></a>
## [1.0.1](https://github.com/sinnerschrader/patternplate/compare/v1.0.0...v1.0.1) (2016-09-26)


### Bug Fixes

* make patternplate init work in 1.0 ([ca51667](https://github.com/sinnerschrader/patternplate/commit/ca51667))



<a name="1.0.0-beta3"></a>
# [1.0.0-beta3](https://github.com/sinnerschrader/patternplate/compare/v1.0.0-beta2...v1.0.0-beta3) (2016-09-20)


### Bug Fixes

* harden build-interface implementation ([6bf4ded](https://github.com/sinnerschrader/patternplate/commit/6bf4ded))



<a name="0.18.0"></a>
# [0.18.0](https://github.com/sinnerschrader/patternplate/compare/v0.17.0...v0.18.0) (2016-07-28)


### Features

* **cli:** add init command ([42114fb](https://github.com/sinnerschrader/patternplate/commit/42114fb))



<a name="0.17.0"></a>
# [0.17.0](https://github.com/sinnerschrader/patternplate/compare/v0.16.0...v0.17.0) (2016-05-13)


### Features

* update to patternplate-* minors ([91f6414](https://github.com/sinnerschrader/patternplate/commit/91f6414))



<a name="0.16.0"></a>
# [0.16.0](https://github.com/sinnerschrader/patternplate/compare/v0.15.16...v0.16.0) (2016-04-16)


### Features

* **system:** update to latest patternplate-* versions ([67af3a1](https://github.com/sinnerschrader/patternplate/commit/67af3a1))



<a name="0.15.16"></a>
## [0.15.16](https://github.com/sinnerschrader/patternplate/compare/v0.15.15...v0.15.16) (2016-04-13)




<a name="0.15.15"></a>
## [0.15.15](https://github.com/sinnerschrader/patternplate/compare/v0.15.14...v0.15.15) (2016-04-06)




<a name="0.15.14"></a>
## [0.15.14](https://github.com/sinnerschrader/patternplate/compare/v0.15.13...v0.15.14) (2016-02-24)


### Bug Fixes

* readd missing docs ([b93ed1b](https://github.com/sinnerschrader/patternplate/commit/b93ed1b))



<a name="0.15.13"></a>
## [0.15.13](https://github.com/sinnerschrader/patternplate/compare/v0.15.12-beta...v0.15.13) (2016-02-20)




<a name="0.15.12-beta"></a>
## [0.15.12-beta](https://github.com/sinnerschrader/patternplate/compare/v0.15.11-beta...v0.15.12-beta) (2016-02-20)


### Bug Fixes

* use compatible boilerplate-server version ([d9d11e9](https://github.com/sinnerschrader/patternplate/commit/d9d11e9))



<a name="0.15.11-beta"></a>
## [0.15.11-beta](https://github.com/sinnerschrader/patternplate/compare/v0.15.10-dev...v0.15.11-beta) (2016-02-20)




<a name="0.15.10-dev"></a>
## [0.15.10-dev](https://github.com/sinnerschrader/patternplate/compare/v0.15.1-beta...v0.15.10-dev) (2016-02-20)




<a name="0.15.1-beta"></a>
## [0.15.1-beta](https://github.com/sinnerschrader/patternplate/compare/v0.15.0-beta...v0.15.1-beta) (2016-01-26)




<a name="0.15.0-beta"></a>
# [0.15.0-beta](https://github.com/sinnerschrader/patternplate/compare/v0.15.0...v0.15.0-beta) (2016-01-25)




<a name="0.14.3"></a>
## [0.14.3](https://github.com/sinnerschrader/patternplate/compare/v0.14.0...v0.14.3) (2016-01-15)


### Bug Fixes

* **patternplate-console:** exit with non-zero if exectued task fails #11 ([cd0b25f](https://github.com/sinnerschrader/patternplate/commit/cd0b25f))



<a name="0.14.0"></a>
# [0.14.0](https://github.com/sinnerschrader/patternplate/compare/v0.13.1...v0.14.0) (2015-09-24)




<a name="0.13.1"></a>
## [0.13.1](https://github.com/sinnerschrader/patternplate/compare/v0.13.0...v0.13.1) (2015-09-02)




<a name="0.13.0"></a>
# [0.13.0](https://github.com/sinnerschrader/patternplate/compare/v0.12.0...v0.13.0) (2015-09-02)




<a name="0.12.0"></a>
# [0.12.0](https://github.com/sinnerschrader/patternplate/compare/v0.11.10...v0.12.0) (2015-09-02)




<a name="0.11.10"></a>
## [0.11.10](https://github.com/sinnerschrader/patternplate/compare/v0.11.9...v0.11.10) (2015-08-07)




<a name="0.11.9"></a>
## [0.11.9](https://github.com/sinnerschrader/patternplate/compare/v0.11.8...v0.11.9) (2015-07-29)




<a name="0.11.8"></a>
## [0.11.8](https://github.com/sinnerschrader/patternplate/compare/v0.11.7...v0.11.8) (2015-07-10)




<a name="0.11.7"></a>
## [0.11.7](https://github.com/sinnerschrader/patternplate/compare/v0.11.6...v0.11.7) (2015-07-08)




<a name="0.11.6"></a>
## [0.11.6](https://github.com/sinnerschrader/patternplate/compare/v0.11.5...v0.11.6) (2015-07-08)




<a name="0.11.5"></a>
## [0.11.5](https://github.com/sinnerschrader/patternplate/compare/v0.11.4...v0.11.5) (2015-07-08)




<a name="0.11.4"></a>
## [0.11.4](https://github.com/sinnerschrader/patternplate/compare/v0.11.3...v0.11.4) (2015-07-06)




<a name="0.11.3"></a>
## [0.11.3](https://github.com/sinnerschrader/patternplate/compare/v0.11.2...v0.11.3) (2015-07-06)




<a name="0.11.2"></a>
## [0.11.2](https://github.com/sinnerschrader/patternplate/compare/v0.11.0...v0.11.2) (2015-07-05)




<a name="0.11.0"></a>
# [0.11.0](https://github.com/sinnerschrader/patternplate/compare/v0.10.1...v0.11.0) (2015-07-03)




<a name="0.10.1"></a>
## [0.10.1](https://github.com/sinnerschrader/patternplate/compare/v0.10.0...v0.10.1) (2015-07-02)




<a name="0.10.0"></a>
# [0.10.0](https://github.com/sinnerschrader/patternplate/compare/v0.9.5...v0.10.0) (2015-07-02)




<a name="0.9.5"></a>
## [0.9.5](https://github.com/sinnerschrader/patternplate/compare/v0.9.4...v0.9.5) (2015-06-30)




<a name="0.9.4"></a>
## [0.9.4](https://github.com/sinnerschrader/patternplate/compare/v0.9.3...v0.9.4) (2015-06-30)




<a name="0.9.3"></a>
## [0.9.3](https://github.com/sinnerschrader/patternplate/compare/v0.9.2...v0.9.3) (2015-06-26)




<a name="0.9.2"></a>
## [0.9.2](https://github.com/sinnerschrader/patternplate/compare/v0.9.1...v0.9.2) (2015-06-26)




<a name="0.9.1"></a>
## [0.9.1](https://github.com/sinnerschrader/patternplate/compare/v0.9.0...v0.9.1) (2015-06-25)




<a name="0.9.0"></a>
# [0.9.0](https://github.com/sinnerschrader/patternplate/compare/v0.8.0...v0.9.0) (2015-06-24)




<a name="0.8.0"></a>
# [0.8.0](https://github.com/sinnerschrader/patternplate/compare/v0.7.2...v0.8.0) (2015-06-24)




<a name="0.7.2"></a>
## [0.7.2](https://github.com/sinnerschrader/patternplate/compare/v0.7.1...v0.7.2) (2015-06-19)




<a name="0.7.1"></a>
## [0.7.1](https://github.com/sinnerschrader/patternplate/compare/v0.7.0...v0.7.1) (2015-06-19)




<a name="0.7.0"></a>
# [0.7.0](https://github.com/sinnerschrader/patternplate/compare/v0.6.2...v0.7.0) (2015-06-18)




<a name="0.6.2"></a>
## [0.6.2](https://github.com/sinnerschrader/patternplate/compare/v0.6.1...v0.6.2) (2015-06-15)




<a name="0.6.1"></a>
## [0.6.1](https://github.com/sinnerschrader/patternplate/compare/v0.5.1...v0.6.1) (2015-06-15)




<a name="0.5.1"></a>
## [0.5.1](https://github.com/sinnerschrader/patternplate/compare/v0.5.0...v0.5.1) (2015-06-12)




<a name="0.4.3"></a>
## [0.4.3](https://github.com/sinnerschrader/patternplate/compare/v0.4.2...v0.4.3) (2015-06-09)




<a name="0.4.2"></a>
## [0.4.2](https://github.com/sinnerschrader/patternplate/compare/v0.3.15...v0.4.2) (2015-06-09)




<a name="0.3.15"></a>
## [0.3.15](https://github.com/sinnerschrader/patternplate/compare/v0.2.8...v0.3.15) (2015-06-01)




<a name="0.3.14"></a>
## [0.3.14](https://github.com/sinnerschrader/patternplate/compare/v0.3.13...v0.3.14) (2015-06-01)




<a name="0.3.13"></a>
## [0.3.13](https://github.com/sinnerschrader/patternplate/compare/v0.3.12...v0.3.13) (2015-06-01)




<a name="0.3.12"></a>
## [0.3.12](https://github.com/sinnerschrader/patternplate/compare/v0.3.11...v0.3.12) (2015-05-31)




<a name="0.3.11"></a>
## [0.3.11](https://github.com/sinnerschrader/patternplate/compare/v0.3.10...v0.3.11) (2015-05-31)




<a name="0.3.10"></a>
## [0.3.10](https://github.com/sinnerschrader/patternplate/compare/v0.3.9...v0.3.10) (2015-05-31)




<a name="0.3.9"></a>
## [0.3.9](https://github.com/sinnerschrader/patternplate/compare/v0.3.8...v0.3.9) (2015-05-15)




<a name="0.3.8"></a>
## [0.3.8](https://github.com/sinnerschrader/patternplate/compare/v0.3.7...v0.3.8) (2015-05-15)




<a name="0.3.7"></a>
## [0.3.7](https://github.com/sinnerschrader/patternplate/compare/v0.3.6...v0.3.7) (2015-05-15)




<a name="0.3.6"></a>
## [0.3.6](https://github.com/sinnerschrader/patternplate/compare/v0.3.5...v0.3.6) (2015-05-14)




<a name="0.3.5"></a>
## [0.3.5](https://github.com/sinnerschrader/patternplate/compare/v0.3.4...v0.3.5) (2015-05-14)




<a name="0.3.4"></a>
## [0.3.4](https://github.com/sinnerschrader/patternplate/compare/v0.3.3...v0.3.4) (2015-05-14)




<a name="0.3.3"></a>
## [0.3.3](https://github.com/sinnerschrader/patternplate/compare/v0.3.2...v0.3.3) (2015-05-14)




<a name="0.3.1"></a>
## [0.3.1](https://github.com/sinnerschrader/patternplate/compare/v0.3.0...v0.3.1) (2015-05-14)




<a name="0.3.0"></a>
# [0.3.0](https://github.com/sinnerschrader/patternplate/compare/v0.2.0...v0.3.0) (2015-05-10)




<a name="0.2.0"></a>
# [0.2.0](https://github.com/sinnerschrader/patternplate/compare/v0.1.0...v0.2.0) (2015-05-07)




<a name="0.1.0"></a>
# 0.1.0 (2015-05-06)




